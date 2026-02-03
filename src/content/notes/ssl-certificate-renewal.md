---
title: "SSL certificate renewal basics"
description: "Keep HTTPS running by renewing certificates on time."
pubDate: 2026-02-03
tags: ["security", "web", "operations"]
---

## Summary

Expired certificates cause outages and trust warnings. Automate renewal where possible.

## Best practices

- Use automated renewals (e.g., ACME clients).
- Monitor expiration dates.
- Test renewal in staging.

## Quick checks

```bash
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null | openssl x509 -noout -dates
```

## Pitfalls

- Renewed cert not deployed to all nodes.
- Missing intermediate chain causes browser errors.
