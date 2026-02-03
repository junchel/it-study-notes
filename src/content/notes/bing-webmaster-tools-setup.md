---
title: "Bing Webmaster Tools setup"
description: "Verify ownership and submit the sitemap for jjchwordpress.cloud."
pubDate: 2026-02-03
tags: ["seo", "search", "bing", "deployment"]
---

## Summary

This note explains how to connect the site to Bing Webmaster Tools and submit the sitemap.

## Steps

1. Open Bing Webmaster Tools and add your site: `https://jjchwordpress.cloud`.
2. Choose a verification method:
   - DNS TXT record (recommended).
   - HTML file upload (place the file in `public/` and redeploy).
   - Meta tag (add the meta tag in the site layout).
3. Submit the sitemap:
   - `https://jjchwordpress.cloud/sitemap.xml`
4. Trigger a manual URL submission for the home page and a few notes.

## Verification options

- DNS is the most stable long-term method.
- HTML file upload works if you do not control DNS.
- Meta tag is easy but requires editing the site layout.

## Pitfalls

- Make sure you add the `https` version of the site.
- DNS verification can take time to propagate.

## References

- Bing Webmaster Tools documentation
