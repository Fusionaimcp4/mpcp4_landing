import { NextRequest, NextResponse } from 'next/server';
import { checkAuth, unauthorizedResponse } from '@/lib/auth';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ALLOWED_TYPES = ['Blog', 'Customer Story', 'Guide'] as const;
type AllowedType = (typeof ALLOWED_TYPES)[number];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
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

function normalizeType(typeValue: unknown): AllowedType {
  if (typeof typeValue !== 'string') return 'Blog';
  const normalized = typeValue.trim().toLowerCase();
  if (normalized === 'blog') return 'Blog';
  if (normalized === 'customer story') return 'Customer Story';
  if (normalized === 'guide') return 'Guide';
  return 'Blog';
}

function normalizeDate(dateValue: unknown): string {
  if (typeof dateValue !== 'string') return '';
  const trimmed = dateValue.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return '';
  const parsed = new Date(`${trimmed}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return '';
  return trimmed;
}

export async function GET(request: NextRequest) {
  // Check authentication
  if (!checkAuth(request)) {
    return unauthorizedResponse();
  }

  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const normalizedSlug = slugify(typeof data.slug === 'string' ? data.slug : slug);
    const normalizedMetadata = {
      title: typeof data.title === 'string' ? data.title.trim() : '',
      date: normalizeDate(data.date),
      author: typeof data.author === 'string' ? data.author.trim() : '',
      excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
      image: typeof data.image === 'string' ? data.image : '',
      tags: normalizeTags(data.tags),
      category: typeof data.category === 'string' && data.category.trim() ? data.category.trim() : 'Resources',
      type: normalizeType(data.type),
      spotlight: Boolean(data.spotlight),
      slug: normalizedSlug || slugify(slug),
    };

    return NextResponse.json({
      metadata: normalizedMetadata,
      content,
      slug: normalizedMetadata.slug,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read post' }, { status: 500 });
  }
}

