---
title: "Reverse proxy basics"
description: "Route traffic to backend services with a reverse proxy."
pubDate: 2026-02-03
tags: ["web", "networking", "architecture"]
---

## Summary

A reverse proxy sits in front of one or more backend services, handling routing, TLS termination, and load distribution.

## Key ideas

- Central entry point for multiple services.
- Can terminate TLS and forward plain HTTP to backends.
- Useful for rate limiting, caching, and observability.

## Example (Nginx)

```nginx
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

## Pitfalls

- Missing headers can break auth or redirects.
- Timeouts should match backend behavior.
- Always test with `curl -I` after changes.
