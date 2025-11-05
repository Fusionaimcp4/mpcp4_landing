# MCP4.ai Landing Page

The official landing page for MCP4 - Engineering the Future of Autonomous Intelligence.

## Overview

MCP4 unifies intelligent systems across AI orchestration, automation, and communication. This landing page serves as the gateway to our ecosystem of AI products:

- **Fusion** - Multi-LLM orchestration and cost optimization platform
- **Voxe** - AI-powered customer support and automation hub
- **NeuroSwitch** - Smart routing engine for multi-AI environments

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Blog**: Markdown with gray-matter & marked
- **Deployment**: Docker + Nginx reverse proxy

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server (port 3002)
npm run dev
```

Visit [http://localhost:3002](http://localhost:3002) to view the application.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t mcp4_ai .
docker run -p 3002:3002 --name mcp4_ai mcp4_ai
```

## Project Structure

```
├── app/
│   ├── components/       # React components
│   │   ├── AnimatedBackground.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Technologies.tsx
│   │   ├── Documentation.tsx
│   │   └── Footer.tsx
│   ├── blog/            # Blog pages
│   │   ├── page.tsx     # Blog listing
│   │   └── [slug]/      # Individual blog posts
│   ├── docs/            # Documentation pages
│   │   ├── fusion/
│   │   ├── voxe/
│   │   ├── neuroswitch/
│   │   └── api/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with SEO
│   └── page.tsx         # Home page
├── content/
│   └── blog/            # Blog posts (Markdown)
├── public/              # Static assets
│   ├── mcp4_logo.png
│   ├── fution_logo.png
│   ├── voxe_logo.png
│   └── neroswitch_logo.png
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
└── tailwind.config.ts   # Tailwind configuration
```

## Blog Management

### Adding New Blog Posts

1. Create a new markdown file in `content/blog/`
2. Add frontmatter metadata
3. Write your content
4. The blog automatically appears!

**Example blog post** (`content/blog/my-post.md`):

```markdown
---
title: "My Blog Post Title"
date: "2025-11-05"
author: "Author Name"
excerpt: "Brief summary of the post"
image: "/mcp4_logo.png"
tags: ["tag1", "tag2"]
---

# My Blog Post

Your content here...
```

For detailed instructions, see [`content/blog/HOW_TO_ADD_BLOG_POSTS.md`](content/blog/HOW_TO_ADD_BLOG_POSTS.md)

### Blog Features

- ✅ Markdown support with frontmatter
- ✅ Automatic blog listing page
- ✅ SEO-friendly URLs
- ✅ Tags and categories
- ✅ Featured images
- ✅ Syntax highlighting for code blocks
- ✅ Responsive design

## Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3002
```

### CookieYes Integration

Update the CookieYes script ID in `app/layout.tsx`:

```typescript
<Script
  id="cookieyes"
  src="https://cdn-cookieyes.com/client_data/YOUR_ID_HERE/script.js"
  strategy="beforeInteractive"
/>
```

### Nginx Reverse Proxy

Example Nginx configuration for routing `mcp4.ai` to the container:

```nginx
server {
    listen 80;
    server_name mcp4.ai;

    location / {
        proxy_pass http://mcp4_ai:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Animated background with distributed network visualization
- ✅ SEO optimized with meta tags and Open Graph
- ✅ Fast loading (Lighthouse score 90+)
- ✅ Minimal JavaScript footprint
- ✅ Blog system with Markdown support
- ✅ CookieYes consent banner integration
- ✅ Docker deployment ready
- ✅ Product logos integration

## Performance

The landing page is optimized for performance:

- Standalone Next.js build
- Minimal dependencies
- CSS animations (no heavy libraries)
- Canvas-based background animation
- Next.js Image optimization
- Static generation for blog posts

## License

Copyright © 2025 MCP4. All rights reserved.

## Links

- [Fusion Platform](https://fusion.mcp4.ai)
- [Voxe Platform](https://voxe.mcp4.ai)
- [GitHub Repository](https://github.com/Fusionaimcp4/n8n-nodes-fusion)

## Documentation

- [QUICKSTART.md](QUICKSTART.md) - Quick setup guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Production deployment
- [FEATURES.md](FEATURES.md) - Detailed features
- [content/blog/HOW_TO_ADD_BLOG_POSTS.md](content/blog/HOW_TO_ADD_BLOG_POSTS.md) - Blog management
