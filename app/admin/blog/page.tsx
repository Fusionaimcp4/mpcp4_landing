'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Post {
  slug: string;
  filename: string;
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
}

interface PostData {
  metadata: {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    image: string;
    tags: string;
  };
  content: string;
  slug?: string;
}

export default function AdminBlogPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const authHeaders = {
    Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
  };

  // Check authentication on mount
  useEffect(() => {
    const storedAuth = sessionStorage.getItem('blogAdminAuth');
    if (storedAuth) {
      const { username: u, password: p } = JSON.parse(storedAuth);
      setUsername(u);
      setPassword(p);
      setAuthenticated(true);
      loadPosts(u, p);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/blog/list', {
        headers: {
          Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        },
      });

      if (response.ok) {
        sessionStorage.setItem('blogAdminAuth', JSON.stringify({ username, password }));
        setAuthenticated(true);
        loadPosts(username, password);
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      setMessage('Authentication failed');
    }

    setLoading(false);
  }

  async function loadPosts(u: string, p: string) {
    try {
      const response = await fetch('/api/admin/blog/list', {
        headers: {
          Authorization: `Basic ${Buffer.from(`${u}:${p}`).toString('base64')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      }
    } catch (error) {
      console.error('Failed to load posts:', error);
    }
  }

  async function loadPost(slug: string) {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/blog/read?slug=${slug}`, {
        headers: authHeaders,
      });

      if (response.ok) {
        const data = await response.json();
        setSelectedPost({
          metadata: {
            title: data.metadata.title || '',
            date: data.metadata.date || '',
            author: data.metadata.author || '',
            excerpt: data.metadata.excerpt || '',
            image: data.metadata.image || '',
            tags: Array.isArray(data.metadata.tags) ? data.metadata.tags.join(', ') : '',
          },
          content: data.content || '',
          slug: data.slug,
        });
      }
    } catch (error) {
      setMessage('Failed to load post');
    }
    setLoading(false);
  }

  function newPost() {
    setSelectedPost({
      metadata: {
        title: '',
        date: new Date().toISOString().split('T')[0],
        author: 'Admin',
        excerpt: '',
        image: '',
        tags: '',
      },
      content: '',
    });
  }

  async function savePost() {
    if (!selectedPost) return;

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/admin/blog/save', {
        method: 'POST',
        headers: {
          ...authHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metadata: selectedPost.metadata,
          content: selectedPost.content,
          oldSlug: selectedPost.slug,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Post saved successfully!');
        loadPosts(username, password);
        setSelectedPost({ ...selectedPost, slug: data.slug });
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Failed to save post');
    }

    setLoading(false);
  }

  async function deletePost() {
    if (!selectedPost?.slug) return;

    if (!confirm('Are you sure you want to delete this post?')) return;

    setLoading(true);

    try {
      const response = await fetch(`/api/admin/blog/delete?slug=${selectedPost.slug}`, {
        method: 'DELETE',
        headers: authHeaders,
      });

      if (response.ok) {
        setMessage('Post deleted successfully!');
        setSelectedPost(null);
        loadPosts(username, password);
      } else {
        setMessage('Failed to delete post');
      }
    } catch (error) {
      setMessage('Failed to delete post');
    }

    setLoading(false);
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Blog Admin</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-mcp-gray mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-mcp-gray mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue"
                required
              />
            </div>
            {message && <p className="text-red-400 text-sm">{message}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-electric-blue text-black rounded-lg font-semibold hover:bg-white transition-all disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gradient">Blog Admin</h1>
            <a href="/" className="text-mcp-gray hover:text-white text-sm">
              ← Back to Site
            </a>
          </div>
          <div className="flex gap-2">
            <button
              onClick={newPost}
              className="px-4 py-2 bg-electric-blue text-black rounded-lg font-semibold hover:bg-white transition-all"
            >
              + New Post
            </button>
            {selectedPost && (
              <>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="px-4 py-2 bg-mcp-purple/20 border border-mcp-purple text-mcp-purple rounded-lg font-semibold hover:bg-mcp-purple/30 transition-all"
                >
                  {showPreview ? 'Edit' : 'Preview'}
                </button>
                <button
                  onClick={savePost}
                  disabled={loading}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all disabled:opacity-50"
                >
                  Save
                </button>
                {selectedPost.slug && (
                  <button
                    onClick={deletePost}
                    disabled={loading}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all disabled:opacity-50"
                  >
                    Delete
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Message Bar */}
      {message && (
        <div className="bg-electric-blue/20 border-b border-electric-blue px-6 py-3 text-center">
          {message}
        </div>
      )}

      <div className="flex h-[calc(100vh-140px)]">
        {/* Sidebar - Post List */}
        <div className="w-64 border-r border-white/10 bg-white/5 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-sm font-semibold text-mcp-gray uppercase mb-4">Posts ({posts.length})</h2>
            <div className="space-y-2">
              {posts.map((post) => (
                <button
                  key={post.slug}
                  onClick={() => loadPost(post.slug)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedPost?.slug === post.slug
                      ? 'bg-electric-blue/20 border border-electric-blue'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="font-semibold text-sm truncate">{post.title}</div>
                  <div className="text-xs text-mcp-gray mt-1">{post.date}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 overflow-y-auto p-6">
          {selectedPost ? (
            showPreview ? (
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{selectedPost.metadata.title}</h1>
                <div className="flex gap-4 text-sm text-mcp-gray mb-8">
                  <span>{selectedPost.metadata.date}</span>
                  <span>by {selectedPost.metadata.author}</span>
                </div>
                {selectedPost.metadata.image && (
                  <img src={selectedPost.metadata.image} alt="" className="w-full rounded-lg mb-8" />
                )}
                <div className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n/g, '<br />') }}
                />
              </div>
            ) : (
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Metadata Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-mcp-gray mb-2">Title *</label>
                    <input
                      type="text"
                      value={selectedPost.metadata.title}
                      onChange={(e) =>
                        setSelectedPost({
                          ...selectedPost,
                          metadata: { ...selectedPost.metadata, title: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mcp-gray mb-2">Date</label>
                    <input
                      type="date"
                      value={selectedPost.metadata.date}
                      onChange={(e) =>
                        setSelectedPost({
                          ...selectedPost,
                          metadata: { ...selectedPost.metadata, date: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mcp-gray mb-2">Author</label>
                    <input
                      type="text"
                      value={selectedPost.metadata.author}
                      onChange={(e) =>
                        setSelectedPost({
                          ...selectedPost,
                          metadata: { ...selectedPost.metadata, author: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mcp-gray mb-2">Image URL</label>
                    <input
                      type="text"
                      value={selectedPost.metadata.image}
                      onChange={(e) =>
                        setSelectedPost({
                          ...selectedPost,
                          metadata: { ...selectedPost.metadata, image: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue"
                      placeholder="/images/blog/post.jpg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-mcp-gray mb-2">Excerpt</label>
                  <textarea
                    value={selectedPost.metadata.excerpt}
                    onChange={(e) =>
                      setSelectedPost({
                        ...selectedPost,
                        metadata: { ...selectedPost.metadata, excerpt: e.target.value },
                      })
                    }
                    rows={2}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-mcp-gray mb-2">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={selectedPost.metadata.tags}
                    onChange={(e) =>
                      setSelectedPost({
                        ...selectedPost,
                        metadata: { ...selectedPost.metadata, tags: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue"
                    placeholder="fusion, ai, automation"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-mcp-gray">Content (Markdown)</label>
                    <details className="text-xs text-mcp-gray">
                      <summary className="cursor-pointer text-electric-blue hover:text-white transition-colors">
                        Markdown Guide
                      </summary>
                      <div className="mt-2 p-4 bg-white/5 border border-white/10 rounded-lg space-y-2 text-xs font-mono">
                        <div><strong className="text-white">Links:</strong></div>
                        <div className="text-mcp-gray">[Link Text](https://example.com)</div>
                        <div className="text-mcp-gray">[Link with Title](https://example.com "Title")</div>
                        <div className="mt-3"><strong className="text-white">Headings:</strong></div>
                        <div className="text-mcp-gray"># H1 ## H2 ### H3 #### H4</div>
                        <div className="mt-3"><strong className="text-white">Bold/Italic:</strong></div>
                        <div className="text-mcp-gray">**bold** *italic*</div>
                        <div className="mt-3"><strong className="text-white">Lists:</strong></div>
                        <div className="text-mcp-gray">- Bullet point</div>
                        <div className="text-mcp-gray">1. Numbered item</div>
                        <div className="mt-3"><strong className="text-white">Code:</strong></div>
                        <div className="text-mcp-gray">`inline code`</div>
                        <div className="text-mcp-gray">```code block```</div>
                      </div>
                    </details>
                  </div>
                  <textarea
                    value={selectedPost.content}
                    onChange={(e) =>
                      setSelectedPost({
                        ...selectedPost,
                        content: e.target.value,
                      })
                    }
                    rows={20}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-blue font-mono text-sm resize-none"
                    placeholder="Write your post in Markdown...&#10;&#10;Example link: [Visit MCP4](https://mcp4.ai)"
                  />
                </div>
              </div>
            )
          ) : (
            <div className="flex items-center justify-center h-full text-mcp-gray">
              <div className="text-center">
                <p className="text-xl mb-4">Select a post or create a new one</p>
                <button
                  onClick={newPost}
                  className="px-6 py-3 bg-electric-blue text-black rounded-lg font-semibold hover:bg-white transition-all"
                >
                  + New Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

