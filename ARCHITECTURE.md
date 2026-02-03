# Architecture

## Goals

- Store IT study notes as Markdown.
- Build fast static pages with zero hosting cost.
- Provide full-text search without a backend.
- Ensure search engine indexing with sitemap + metadata.

## Structure

- `src/content/notes/`: Markdown notes with frontmatter.
- `src/pages/`: Astro pages (home, notes list, tag pages).
- `src/components/`: UI building blocks (cards, search, tags).
- `src/layouts/`: Base layout with shared SEO and navigation.
- `public/`: static assets (`robots.txt`, `og.svg`, favicon).

## Data flow

1. Markdown notes are read via `astro:content`.
2. Pages use `getCollection` to render lists and detail pages.
3. `sitemap.xml.ts` builds URLs for notes + tag pages.
4. Pagefind generates a static search index during `postbuild`.

## Deployment

- GitHub Actions builds the site and deploys to GitHub Pages.
- Environment variables set `SITE_URL` and `SITE_BASE`.

## Cost

All services are free:

- Astro (open source)
- GitHub Pages (free hosting)
- GitHub Actions (free for public repos)
- Google Search Console (free)
