import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

interface PostData {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  tags?: string[];
  content: string;
}

function getPost(slug: string): PostData | null {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      title: data.title || 'Untitled',
      date: data.date || '',
      author: data.author || 'MCP4 Team',
      excerpt: data.excerpt || '',
      image: data.image || '/mcp4_logo.png',
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  
  return files
    .filter(filename => filename.endsWith('.md') && !filename.startsWith('_') && !filename.startsWith('HOW_TO'))
    .map(filename => ({
      slug: filename.replace('.md', ''),
    }));
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-electric-blue hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const htmlContent = marked(post.content);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <Link href="/blog" className="text-electric-blue hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-mcp-gray mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-4 prose-h1:text-gradient
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-electric-blue
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
              prose-p:text-mcp-gray prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-mcp-gray prose-ul:my-6
              prose-ol:text-mcp-gray prose-ol:my-6
              prose-li:my-2
              prose-code:text-electric-blue prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
              prose-blockquote:border-l-4 prose-blockquote:border-electric-blue prose-blockquote:pl-4 prose-blockquote:italic
              prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Share & Back */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-electric-blue hover:underline font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

