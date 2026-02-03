# IT Study Notes Site

A static knowledge base built with Astro. Notes live in Markdown and compile to fast HTML pages with a static search index.

## Requirements

- Node.js 18+ (LTS recommended)

## Quick start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The build step generates HTML into `dist/`. The `postbuild` script runs Pagefind to generate the search index.

## Deployment (GitHub Pages)

1. Create a GitHub repo and push this project.
2. Enable GitHub Pages for the `gh-pages` workflow environment.
3. Set repository variables:
   - `SITE_URL` to your final site URL (for example `https://jjchwordpress.cloud`)
   - `SITE_BASE` to `/` (use `/your-repo/` when deploying under a subpath)
4. The workflow in `.github/workflows/deploy.yml` will build and deploy.

## Search engine indexing

1. Confirm `https://jjchwordpress.cloud/sitemap.xml` loads.
2. Add the site to Google Search Console and submit the sitemap.
3. Keep `public/robots.txt` updated with the correct sitemap URL.
