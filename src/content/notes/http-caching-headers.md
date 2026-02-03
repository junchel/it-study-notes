---
title: "HTTP caching headers basics"
description: "Cache-Control, ETag, and browser/CDN caching fundamentals."
pubDate: 2026-02-03
tags: ["http", "caching", "performance"]
---

## Summary

Caching headers reduce load and improve response times for clients and CDNs.

## Key ideas

- `Cache-Control` controls TTL and caching behavior.
- `ETag` enables conditional requests.
- Use immutable assets with long TTLs.

## Commands or steps

```text
Checklist
- Set Cache-Control for static assets
- Use ETag or Last-Modified
- Validate cache behavior in dev tools
```

## Pitfalls

- Caching dynamic or personalized responses.
- Setting long TTLs without versioned assets.
- Missing cache invalidation strategy.
