import { NextRequest, NextResponse } from 'next/server';
import { checkAuth, unauthorizedResponse } from '@/lib/auth';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(request: NextRequest) {
  // Check authentication
  if (!checkAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const files = fs.readdirSync(blogDir);
    
    const posts = files
      .filter(filename => filename.endsWith('.md') && !filename.startsWith('HOW_TO'))
      .map(filename => {
        const filePath = path.join(blogDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        
        return {
          slug: filename.replace('.md', ''),
          filename,
          ...data,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to list posts' }, { status: 500 });
  }
}

