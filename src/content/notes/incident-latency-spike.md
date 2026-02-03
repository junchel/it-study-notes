---
title: "Incident scenario: latency spike"
description: "Diagnose sudden latency increases in web services."
pubDate: 2026-02-03
tags: ["incident-response", "performance", "troubleshooting"]
---

## Summary

A structured response to sudden latency spikes in production.

## Steps

1. Confirm scope (single endpoint or all services).
2. Check latency percentiles and error rates.
3. Inspect upstream dependencies (DB, cache, APIs).
4. Review recent deploys or config changes.
5. Roll back or scale if needed.

## Pitfalls

- Focusing on averages instead of p95/p99.
- Ignoring upstream timeouts.
- Missing recent config changes.
