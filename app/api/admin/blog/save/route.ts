import { NextRequest, NextResponse } from 'next/server';
import { checkAuth, unauthorizedResponse } from '@/lib/auth';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export async function POST(request: NextRequest) {
  // Check authentication
  if (!checkAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json();
    const { metadata, content, oldSlug } = body;

    // Generate slug from title
    const newSlug = slugify(metadata.title);
    const filename = `${newSlug}.md`;
    const filePath = path.join(process.cwd(), 'content', 'blog', filename);

    // Convert tags string to array
    if (typeof metadata.tags === 'string') {
      metadata.tags = metadata.tags.split(',').map((tag: string) => tag.trim()).filter(Boolean);
    }

    // Ensure date is set
    if (!metadata.date) {
      metadata.date = new Date().toISOString().split('T')[0];
    }

    // Generate markdown with frontmatter
    const fileContent = matter.stringify(content, metadata);

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

