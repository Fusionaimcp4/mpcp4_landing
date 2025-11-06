import { NextRequest, NextResponse } from 'next/server';
import { checkAuth, unauthorizedResponse } from '@/lib/auth';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostMetadata {
  title?: string;
  date?: string;
  author?: string;
  excerpt?: string;
  image?: string;
  tags?: string[] | string;
  [key: string]: any;
}

interface Post {
  slug: string;
  filename: string;
  title?: string;
  date?: string;
  author?: string;
  excerpt?: string;
  image?: string;
  tags?: string[] | string;
}

export async function GET(request: NextRequest) {
  // Check authentication
  if (!checkAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const files = fs.readdirSync(blogDir);
    
    const posts: Post[] = files
      .filter(filename => filename.endsWith('.md') && !filename.startsWith('HOW_TO'))
      .map(filename => {
        const filePath = path.join(blogDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent) as { data: PostMetadata };
        
        return {
          slug: filename.replace('.md', ''),
          filename,
          title: data.title,
          date: data.date,
          author: data.author,
          excerpt: data.excerpt,
          image: data.image,
          tags: data.tags,
        };
      })
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to list posts' }, { status: 500 });
  }
}

