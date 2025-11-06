import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import AnimatedBackground from '@/app/components/AnimatedBackground';
import BlogClient from './BlogClient';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  tags?: string[];
  category?: string;
}

function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'content/blog');
  
  // Check if directory exists
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  
  const posts = files
    .filter(filename => filename.endsWith('.md') && !filename.startsWith('_') && !filename.startsWith('HOW_TO'))
    .map(filename => {
      const slug = filename.replace('.md', '');
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        author: data.author || 'MCP4 Team',
        excerpt: data.excerpt || '',
        image: data.image || '/images/blog/mcp4banner1.png',
        tags: data.tags || [],
        category: data.category || 'News & Updates',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Header */}
      <Header />

      {/* Blog Hero Section */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-mcp-gray max-w-3xl mx-auto">
              Insights, updates, and technical deep dives from the MCP4 team
            </p>
          </div>
        </div>
      </section>

      {/* Blog Client Component with Filtering */}
      <BlogClient posts={posts} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
