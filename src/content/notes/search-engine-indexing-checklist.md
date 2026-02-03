---
title: "Search engine indexing checklist"
description: "Pre-flight checklist to ensure search engines can index the site."
pubDate: 2026-02-03
tags: ["seo", "search", "workflow"]
---

## Summary

Use this checklist before and after deploy to improve indexing.

## Checklist

- Confirm `robots.txt` allows crawling.
- Ensure `sitemap.xml` is reachable.
- Verify `canonical` URLs are correct.
- Check that page metadata includes title + description.
- Avoid blocking critical pages with `noindex`.
- Run a build and confirm pages render without errors.

## Quick checks

```bash
curl -I https://jjchwordpress.cloud/robots.txt
curl -I https://jjchwordpress.cloud/sitemap.xml
```

## Pitfalls

- Missing sitemap entry for new notes.
- Accidental `draft: true` in frontmatter.
- Mixed `http` / `https` links in metadata.

## References

- `public/robots.txt`
- `src/pages/sitemap.xml.ts`
