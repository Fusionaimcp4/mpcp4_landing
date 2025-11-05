# Deployment Guide for MCP4.ai Landing Page

This guide covers deploying the MCP4.ai landing page using Docker and Nginx reverse proxy.

## Prerequisites

- Docker and Docker Compose installed
- Nginx installed and configured
- Domain name (mcp4.ai) pointing to your server

## Deployment Steps

### 1. Clone the Repository

```bash
cd /var/www/
git clone <your-repo-url> mcp4_landing
cd mcp4_landing
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
# Edit .env.local with your actual values
nano .env.local
```

### 3. Update CookieYes Script

Edit `app/layout.tsx` and replace `YOUR_COOKIEYES_ID` with your actual CookieYes ID:

```typescript
<Script
  id="cookieyes"
  src="https://cdn-cookieyes.com/client_data/YOUR_ACTUAL_ID/script.js"
  strategy="beforeInteractive"
/>
```

### 4. Build and Start Docker Container

```bash
# Build and start the container
docker-compose up -d

# Check logs
docker-compose logs -f mcp4_ai

# Verify it's running
docker ps | grep mcp4_ai
```

### 5. Configure Nginx Reverse Proxy

Create Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/mcp4.ai
```

Add the following configuration:

```nginx
# HTTP -> HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name mcp4.ai www.mcp4.ai;
    return 301 https://mcp4.ai$request_uri;
}

# HTTPS configuration
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name mcp4.ai www.mcp4.ai;

    # SSL certificates (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/mcp4.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mcp4.ai/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Proxy to Docker container
    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Redirect www to non-www
    if ($host = 'www.mcp4.ai') {
        return 301 https://mcp4.ai$request_uri;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/mcp4.ai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 6. Setup SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d mcp4.ai -d www.mcp4.ai
```

### 7. Setup Auto-renewal for SSL

```bash
sudo certbot renew --dry-run
```

The certificate will auto-renew via cron.

## Updating the Application

```bash
cd /var/www/mcp4_landing
git pull
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Monitoring

### View Logs

```bash
# Docker container logs
docker-compose logs -f mcp4_ai

# Nginx access logs
sudo tail -f /var/log/nginx/access.log

# Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### Check Container Status

```bash
docker ps
docker stats mcp4_ai
```

### Health Check

```bash
curl http://localhost:3002
curl https://mcp4.ai
```

## Troubleshooting

### Container won't start

```bash
docker-compose logs mcp4_ai
docker-compose down
docker-compose up
```

### Nginx errors

```bash
sudo nginx -t
sudo systemctl status nginx
```

### Port already in use

```bash
sudo lsof -i :3002
# Kill the process if needed
sudo kill -9 <PID>
```

## Backup and Restore

### Backup

```bash
# Backup the application
tar -czf mcp4_landing_backup_$(date +%Y%m%d).tar.gz /var/www/mcp4_landing

# Backup Nginx config
sudo cp /etc/nginx/sites-available/mcp4.ai ~/mcp4_nginx_backup.conf
```

### Restore

```bash
# Extract backup
tar -xzf mcp4_landing_backup_YYYYMMDD.tar.gz -C /var/www/

# Restore Nginx config
sudo cp ~/mcp4_nginx_backup.conf /etc/nginx/sites-available/mcp4.ai
sudo nginx -t
sudo systemctl reload nginx
```

## Performance Optimization

### Enable Nginx Caching

Add to Nginx configuration:

```nginx
# Cache configuration
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=mcp4_cache:10m max_size=100m inactive=60m use_temp_path=off;

location / {
    proxy_cache mcp4_cache;
    proxy_cache_valid 200 60m;
    proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
    # ... rest of proxy settings
}
```

### Enable Gzip Compression

Add to Nginx configuration:

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml+rss;
```

## Security Checklist

- ✅ SSL/TLS enabled via Let's Encrypt
- ✅ Security headers configured
- ✅ Non-root user in Docker container
- ✅ Firewall configured (ufw/iptables)
- ✅ Regular security updates
- ✅ Container health checks enabled
- ✅ CookieYes consent banner active

## Support

For issues or questions:
- GitHub: https://github.com/Fusionaimcp4
- Email: support@mcp4.ai

