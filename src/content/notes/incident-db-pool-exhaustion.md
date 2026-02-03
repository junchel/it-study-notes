---
title: "Incident scenario: DB connection pool exhaustion"
description: "Handle DB connection timeouts caused by pool saturation."
pubDate: 2026-02-03
tags: ["database", "incident-response", "troubleshooting"]
---

## Summary

Connection pool exhaustion causes timeouts and cascading failures.

## Steps

1. Check pool usage metrics and wait times.
2. Identify slow queries or long transactions.
3. Scale app instances or increase pool size cautiously.
4. Apply query timeouts and optimize hot paths.

## Pitfalls

- Increasing pool size without DB capacity.
- Leaving long-running transactions open.
- No limits on concurrent requests.
