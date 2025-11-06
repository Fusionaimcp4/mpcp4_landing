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
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
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
              prose-headings:font-bold prose-headings:text-white
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12 prose-h1:font-extrabold prose-h1:bg-gradient-to-r prose-h1:from-electric-blue prose-h1:via-mcp-purple prose-h1:to-mcp-teal prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-electric-blue prose-h2:font-bold prose-h2:leading-tight prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-white prose-h3:font-semibold
              prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6 prose-h4:text-white prose-h4:font-semibold
              prose-p:text-mcp-gray prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base prose-p:font-normal
              prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-white prose-strong:font-bold prose-strong:font-semibold
              prose-ul:text-mcp-gray prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-ol:text-mcp-gray prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
              prose-li:text-mcp-gray prose-li:my-2 prose-li:leading-relaxed
              prose-code:text-electric-blue prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-electric-blue prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-mcp-gray prose-blockquote:my-6 prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
              prose-img:rounded-lg prose-img:my-8 prose-img:shadow-lg
              prose-hr:border-white/10 prose-hr:my-8
              prose-table:w-full prose-table:border-collapse prose-table:my-6
              prose-th:bg-white/10 prose-th:border prose-th:border-white/20 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold prose-th:text-white
              prose-td:border prose-td:border-white/20 prose-td:px-4 prose-td:py-3 prose-td:text-mcp-gray"
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

