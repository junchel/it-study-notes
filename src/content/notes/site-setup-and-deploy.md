---
title: "Site setup and deployment guide"
description: "How to build, deploy, and index this IT study notes site."
pubDate: 2026-02-03
tags: ["workflow", "deployment", "astro", "github-pages"]
---

## Summary

This note explains how the IT study notes site is built, deployed to GitHub Pages, and indexed by search engines.

## Steps

1. Install Node.js (LTS).
2. In the project folder:

```bash
npm.cmd install
npm.cmd run build
```

3. Log in to GitHub and create the repository `it-study-notes`.
4. Push the local repo to GitHub.
5. Enable GitHub Pages for the repo.
6. Add the custom domain `jjchwordpress.cloud`.
7. Set repo variables:
   - `SITE_URL` = `https://jjchwordpress.cloud`
   - `SITE_BASE` = `/`
8. Confirm these URLs load after deploy:
   - `/` (home)
   - `/sitemap.xml`
   - `/rss.xml`

## Troubleshooting

- If `npm` fails in PowerShell, use `npm.cmd`.
- If Pagefind fails, run `npm.cmd run build` again after a clean install.

## References

- `README.md`
- `ROADMAP.md`
- `.github/workflows/deploy.yml`
