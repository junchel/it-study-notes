---
title: "Nginx TLS basics"
description: "Terminate HTTPS with Nginx and forward traffic to a backend."
pubDate: 2026-02-03
tags: ["web", "security", "tls"]
---

## Summary

This note shows a simple TLS termination setup with Nginx.

## Example config

```text
server {
  listen 443 ssl;
  server_name example.com;

  ssl_certificate /etc/ssl/certs/example.crt;
  ssl_certificate_key /etc/ssl/private/example.key;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto https;
  }
}
```

## Commands

```bash
# test config and reload
nginx -t
systemctl reload nginx
```

## Pitfalls

- Wrong certificate chain causes browser errors.
- Ensure the backend knows the original scheme via `X-Forwarded-Proto`.
