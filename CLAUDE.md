# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website (eschraufnagel.github.io) built with Next.js 13, TypeScript, and Tailwind CSS. It's hosted on GitHub Pages at ericschraufnagel.com and can also be run locally using Docker with nginx as a reverse proxy.

## Development Commands

### Local Development
```bash
npm run dev          # Start Next.js dev server on port 3000
npm run build        # Build and export static site to ./out
npm run lint         # Run ESLint
```

### Docker Development
```bash
docker-compose up                    # Development mode with hot reload
docker-compose -f docker-compose.prod.yml up  # Production mode
```

The Docker setup uses:
- Frontend container: Next.js app on port 3000
- Nginx container: Reverse proxy on port 80 routing to frontend
- Development mode mounts local files with volumes for hot reload
- Production mode uses linux/amd64 platform flag (required for deployment environment)

### Deployment

The site auto-deploys to GitHub Pages via GitHub Actions on every push to `main`. The workflow:
1. Builds the Next.js site
2. Exports static HTML to `./out`
3. Deploys to GitHub Pages

Manual deployment (legacy):
```bash
npm run deploy  # Builds, exports, commits to gh-pages branch
```

## Architecture

### Multi-Stage Docker Build

The Dockerfile uses a 4-stage build process:
1. **base**: Node 18 Alpine base image
2. **deps**: Install dependencies only
3. **dev**: Development stage with full source (target for docker-compose.yml)
4. **builder**: Build Next.js app with static export
5. **runner**: Production runtime with minimal footprint

Next.js is configured with `output: 'standalone'` in next.config.js for optimal Docker deployment.

### Reverse Proxy Setup

Nginx (nginx/default.conf) acts as a reverse proxy:
- Listens on port 80
- Proxies requests to frontend:3000
- Configured for ericschraufnagel.com and www subdomain
- Supports WebSocket upgrades for Next.js hot reload

### Static Export Configuration

Next.js config (next.config.js):
- `output: 'standalone'` for Docker
- `images: { unoptimized: true }` for static export compatibility
- Static site exported to `./out` directory

### Page Structure

Single-page application with:
- `pages/index.tsx`: Main landing page with profile, bio, and social links
- `pages/_app.tsx`: App wrapper with Google Analytics integration
- `pages/_document.tsx`: HTML document structure
- `styles/globals.css`: Global Tailwind CSS imports

Uses TypeScript with path alias `@/*` pointing to root directory.

## Key Configuration

- **Tailwind**: Configured for dark mode class strategy, scans pages/ directory
- **TypeScript**: Strict mode enabled, paths alias `@/*` to root
- **Next.js**: Static export mode, no image optimization (required for GitHub Pages)
- **ESLint**: Using Next.js recommended config
- **Domain**: Custom domain ericschraufnagel.com (configured via CNAME file)
