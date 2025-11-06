'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(posts.map(post => post.category || 'News & Updates'));
    return ['All', ...Array.from(cats)];
  }, [posts]);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return posts;
    return posts.filter(post => (post.category || 'News & Updates') === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <section className="relative px-6 pb-24">
      <div className="container mx-auto max-w-7xl">
        {/* Category Filter */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-electric-blue text-black shadow-lg shadow-electric-blue/50'
                    : 'bg-white/5 text-mcp-gray hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-mcp-gray text-xl">No blog posts found. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-electric-blue/20"
              >
                {/* Featured Image */}
                <div className="relative w-full h-56 bg-white/5 overflow-hidden">
                  <Image
                    src={post.image || '/images/blog/mcp4banner1.png'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Badge Overlay */}
                  {post.category && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-electric-blue text-xs font-semibold rounded-full border border-electric-blue/30">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-electric-blue/10 text-electric-blue rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-electric-blue transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm text-mcp-gray mb-4">
                    <span className="font-medium">{post.author}</span>
                    <span>•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-mcp-gray leading-relaxed mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More */}
                  <div className="flex items-center text-electric-blue font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

