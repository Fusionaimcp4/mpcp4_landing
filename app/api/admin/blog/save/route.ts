import { NextRequest, NextResponse } from 'next/server';
import { checkAuth, unauthorizedResponse } from '@/lib/auth';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ALLOWED_TYPES = ['All', 'Blog', 'Customer Stories', 'Guides', 'Webinars', 'Reports', 'News', 'Events'] as const;
type AllowedType = (typeof ALLOWED_TYPES)[number];

interface IncomingMetadata {
  title?: unknown;
  date?: unknown;
  author?: unknown;
  excerpt?: unknown;
  image?: unknown;
  tags?: unknown;
  category?: unknown;
  type?: unknown;
  spotlight?: unknown;
  slug?: unknown;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function normalizeType(typeValue: unknown): AllowedType {
  if (typeof typeValue !== 'string') return 'Blog';
  const normalized = typeValue.trim().toLowerCase();
  if (normalized === 'all') return 'All';
  if (normalized === 'blog') return 'Blog';
  if (normalized === 'customer stories' || normalized === 'customer story') return 'Customer Stories';
  if (normalized === 'guides' || normalized === 'guide') return 'Guides';
  if (normalized === 'webinars' || normalized === 'webinar') return 'Webinars';
  if (normalized === 'reports' || normalized === 'report') return 'Reports';
  if (normalized === 'news') return 'News';
  if (normalized === 'events' || normalized === 'event') return 'Events';
  return 'Blog';
}

function normalizeTags(tagsValue: unknown): string[] {
  if (Array.isArray(tagsValue)) {
    return tagsValue
      .map((tag) => String(tag).trim())
      .filter(Boolean);
  }

  if (typeof tagsValue === 'string') {
    return tagsValue
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeDate(dateValue: unknown): string {
  if (typeof dateValue !== 'string') return '';
  const trimmed = dateValue.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return '';
  const parsed = new Date(`${trimmed}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return '';
  return trimmed;
}

export async function POST(request: NextRequest) {
  // Check authentication
  if (!checkAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json();
    const metadata = (body?.metadata ?? {}) as IncomingMetadata;
    const content = typeof body?.content === 'string' ? body.content : '';
    const oldSlug = typeof body?.oldSlug === 'string' ? slugify(body.oldSlug) : '';

    const title = typeof metadata.title === 'string' ? metadata.title.trim() : '';
    const date = normalizeDate(metadata.date);
    const category = typeof metadata.category === 'string' ? metadata.category.trim() : '';
    const type = normalizeType(metadata.type);
    const author = typeof metadata.author === 'string' ? metadata.author.trim() : '';
    const excerpt = typeof metadata.excerpt === 'string' ? metadata.excerpt : '';
    const image = typeof metadata.image === 'string' ? metadata.image : '';
    const tags = normalizeTags(metadata.tags);
    const spotlight = Boolean(metadata.spotlight);
    const requestedSlug = typeof metadata.slug === 'string' ? metadata.slug : '';
    const newSlug = slugify(requestedSlug || title);

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    if (!date) {
      return NextResponse.json({ error: 'Date must be in YYYY-MM-DD format' }, { status: 400 });
    }
    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Type must be one of: All, Blog, Customer Stories, Guides, Webinars, Reports, News, Events' }, { status: 400 });
    }
    if (!newSlug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const filename = `${newSlug}.md`;
    const filePath = path.join(process.cwd(), 'content', 'blog', filename);
    const normalizedMetadata = {
      title,
      date,
      author,
      excerpt,
      image,
      tags,
      category,
      type,
      spotlight,
      slug: newSlug,
    };

    // Generate markdown with frontmatter
    const fileContent = matter.stringify(content, normalizedMetadata);

    // If updating and slug changed, delete old file
    if (oldSlug && oldSlug !== newSlug) {
      const oldPath = path.join(process.cwd(), 'content', 'blog', `${oldSlug}.md`);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    // Write the file
    fs.writeFileSync(filePath, fileContent, 'utf-8');

    return NextResponse.json({
      success: true,
      slug: newSlug,
      message: 'Post saved successfully',
    });
  } catch (error) {
    console.error('Save error:', error);
    return NextResponse.json(
      { error: 'Failed to save post', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

