---
title: "Cache invalidation basics"
description: "Keep cached data fresh without hurting performance."
pubDate: 2026-02-03
tags: ["caching", "performance", "backend"]
---

## Summary

Cache invalidation balances freshness with speed and cost.

## Key ideas

- Time-based expiration is simple and predictable.
- Event-based invalidation keeps data fresh.
- Cache keys should include all inputs that change results.
- Stale-while-revalidate can smooth refresh spikes.

## Guidelines

- Set TTLs based on business tolerance for staleness.
- Invalidate caches on writes to critical data.
- Use versioned cache keys for schema changes.
- Monitor hit rate and stale response rates.

## Pitfalls

- Forgetting to include key inputs causes incorrect data.
- Overly short TTLs reduce cache value.
- Mass invalidation can create traffic spikes.
