---
title: "API rate limiting basics"
description: "Protect services with rate limits and fair usage policies."
pubDate: 2026-02-03
tags: ["api", "security", "performance"]
---

## Summary

Rate limiting prevents abuse, stabilizes performance, and protects downstream services.

## Common strategies

- **Token bucket**: allows bursts, refills over time.
- **Leaky bucket**: smooths traffic to a steady rate.
- **Fixed window**: resets counters at fixed intervals.

## Implementation ideas

- Enforce limits at the edge (CDN, gateway).
- Use request identifiers: IP, API key, user ID.
- Return `429 Too Many Requests` with retry guidance.

## Pitfalls

- Overly strict limits break valid users.
- Not handling distributed counters correctly.
