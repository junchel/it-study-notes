---
title: "TLS/HTTPS fundamentals"
description: "Certificates, handshakes, and practical HTTPS troubleshooting."
pubDate: 2026-02-03
tags: ["security", "http", "tls", "networking"]
---

## Summary

TLS secures HTTP by encrypting traffic and verifying server identity.

## Key ideas

- Certificates bind a domain to a public key.
- Handshakes negotiate cipher suites and establish session keys.
- Expired or mismatched certificates cause common outages.

## Commands or steps

```bash
openssl s_client -connect example.com:443 -servername example.com
curl -v https://example.com
```

## Pitfalls

- Missing intermediate certificates.
- Using the wrong hostname in certificates.
- Ignoring certificate expiration dates.
