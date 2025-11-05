# Quick Start Guide

Get the MCP4.ai landing page running in minutes.

## Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:3002](http://localhost:3002)

## Docker Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

### Option 2: Manual Docker Build

```bash
# Build the image
docker build -t mcp4_ai .

# Run the container
docker run -d -p 3002:3002 --name mcp4_ai mcp4_ai
```

### View Logs

```bash
docker-compose logs -f mcp4_ai
```

### Stop Container

```bash
docker-compose down
```

## Production Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete production deployment instructions including:
- Nginx reverse proxy setup
- SSL/TLS configuration with Let's Encrypt
- Security hardening
- Monitoring and maintenance

## Configuration

### CookieYes Setup

1. Sign up for CookieYes at [https://www.cookieyes.com](https://www.cookieyes.com)
2. Get your script ID for the `.mcp4.ai` domain
3. Update `app/layout.tsx`:

```typescript
<Script
  id="cookieyes"
  src="https://cdn-cookieyes.com/client_data/YOUR_ID_HERE/script.js"
  strategy="beforeInteractive"
/>
```

### Environment Variables

Copy `env.example` to `.env.local` and update values:

```bash
cp env.example .env.local
```

## Project Structure

```
├── app/
│   ├── components/          # React components
│   ├── docs/               # Documentation pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static files
├── Dockerfile              # Docker config
├── docker-compose.yml      # Docker Compose config
└── tailwind.config.ts      # Tailwind config
```

## Key Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ TailwindCSS
- ✅ Animated background (IOHK-inspired)
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Docker ready
- ✅ Lighthouse 90+ score

## Next Steps

1. Customize the CookieYes script ID
2. Add your branding/logo images to `public/`
3. Update documentation pages in `app/docs/`
4. Configure your Nginx reverse proxy
5. Set up SSL certificates
6. Deploy to production

## Support

- Documentation: See [README.md](README.md)
- Deployment: See [DEPLOYMENT.md](DEPLOYMENT.md)
- GitHub: [https://github.com/Fusionaimcp4](https://github.com/Fusionaimcp4)

