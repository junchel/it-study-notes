---
title: "Google Search Console setup"
description: "Verify ownership and submit the sitemap for jjchwordpress.cloud."
pubDate: 2026-02-03
tags: ["seo", "search", "google", "deployment"]
---

## Summary

This note explains how to connect the site to Google Search Console and submit the sitemap.

## Steps

1. Open Google Search Console and add a **Domain** property for `jjchwordpress.cloud`.
2. Verify ownership:
   - DNS method (recommended): add the TXT record in your registrar and wait for verification.
   - Alternative: use the HTML file upload method by placing the file in `public/` and redeploying.
3. After verification, open **Sitemaps** and submit:
   - `https://jjchwordpress.cloud/sitemap.xml`
4. Use **URL Inspection** to request indexing for the home page and a few notes.

## Verification options

- DNS (best for long-term stability).
- HTML file upload (good when DNS access is slow).
- Meta tag in the site header (requires adding a `<meta>` tag in the layout).

## Pitfalls

- DNS verification can take time to propagate.
- Use the correct protocol (`https`) and the exact domain.
- If you change domains later, add and verify the new domain as another property.

## References

- Google Search Console documentation
