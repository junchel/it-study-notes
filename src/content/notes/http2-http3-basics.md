---
title: "HTTP/2 and HTTP/3 basics"
description: "Key differences between HTTP/1.1, HTTP/2, and HTTP/3."
pubDate: 2026-02-03
tags: ["http", "web", "performance"]
---

## Summary

HTTP/2 improves performance with multiplexing and header compression. HTTP/3 builds on QUIC over UDP to reduce latency and connection setup time.

## Key ideas

- **HTTP/2**: multiplexing, header compression (HPACK), single connection.
- **HTTP/3**: runs over QUIC (UDP), faster handshakes, improved loss recovery.
- Most browsers require TLS for HTTP/2 and HTTP/3.

## Quick checks

```bash
# HTTP/2 check (if supported by curl)
curl -I --http2 https://example.com

# HTTP/3 check (if supported by curl build)
curl -I --http3 https://example.com
```

## Pitfalls

- Some proxies or WAFs still block HTTP/3.
- UDP can be filtered by firewalls; ensure port 443/UDP is open.
