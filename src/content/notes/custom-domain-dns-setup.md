---
title: "Custom domain DNS setup for GitHub Pages"
description: "Point jjchwordpress.cloud to GitHub Pages and confirm HTTPS."
pubDate: 2026-02-03
tags: ["dns", "github-pages", "deployment", "domains"]
---

## Summary

This note outlines the DNS steps needed to connect `jjchwordpress.cloud` to GitHub Pages and verify HTTPS.

## Steps

1. Keep the repo `public/CNAME` set to `jjchwordpress.cloud` (already configured).
2. In your domain registrar's DNS settings, choose an apex setup:
   - If the registrar supports `ALIAS` or `ANAME` records, point the apex to your GitHub Pages target.
   - If not, use `A` records with the current GitHub Pages IPs from GitHub docs.
3. (Optional) Add a `www` subdomain as a `CNAME` pointing to your GitHub Pages target.
4. Save the records and wait for DNS propagation.

## Verification

- In GitHub Pages settings, confirm the status shows DNS is verified.
- Visit `https://jjchwordpress.cloud` and confirm HTTPS is enabled.
- Use PowerShell to check DNS:

```bash
nslookup jjchwordpress.cloud
nslookup www.jjchwordpress.cloud
```

## Pitfalls

- IPs for GitHub Pages can change, so always use the latest IPs from the official docs.
- DNS propagation can take several hours; wait before retrying.

## References

- GitHub Pages custom domain documentation
