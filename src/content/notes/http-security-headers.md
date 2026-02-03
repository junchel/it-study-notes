---
title: "HTTP security headers"
description: "Improve browser security with standard response headers."
pubDate: 2026-02-03
tags: ["security", "web", "http"]
---

## Summary

Security headers help prevent common web attacks like clickjacking, XSS, and content sniffing.

## Common headers

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
```

## Pitfalls

- A strict CSP can break third-party scripts.
- HSTS should only be enabled after HTTPS is stable.
