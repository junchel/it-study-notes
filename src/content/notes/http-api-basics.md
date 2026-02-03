---
title: "HTTP and API fundamentals"
description: "Methods, status codes, headers, and curl workflows."
pubDate: 2026-02-03
tags: ["http", "api", "networking"]
---

## Summary

Understanding HTTP methods and status codes makes API troubleshooting faster.

## Key ideas

- GET is read-only, POST creates, PUT replaces, PATCH updates.
- 2xx = success, 4xx = client error, 5xx = server error.
- Headers describe auth, caching, and content type.

## Commands or steps

```bash
curl -I https://example.com
curl -v https://example.com
curl -X POST https://api.example.com/items -H "Content-Type: application/json" -d '{"name":"test"}'
```

## Pitfalls

- Forgetting auth headers.
- Confusing 301/302 redirects with success responses.
- Sending the wrong `Content-Type`.
