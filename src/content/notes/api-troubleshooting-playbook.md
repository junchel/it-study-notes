---
title: "API troubleshooting playbook"
description: "A step-by-step approach to diagnosing failing APIs."
pubDate: 2026-02-03
tags: ["troubleshooting", "api", "http", "operations"]
---

## Summary

Use a layered approach to diagnose API outages quickly and consistently.

## Steps

1. Confirm scope: single endpoint or all services.
2. Check status codes and latency trends.
3. Verify DNS, TLS, and upstream connectivity.
4. Inspect logs with a narrow time window.
5. Roll back recent deploys if needed.

## Commands or steps

```bash
curl -v https://api.example.com/health
curl -I https://api.example.com/v1/users
```

## Pitfalls

- Skipping DNS/TLS checks.
- Ignoring recent deploys or config changes.
- Chasing symptoms without a baseline.
