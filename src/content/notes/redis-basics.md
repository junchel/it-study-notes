---
title: "Redis basics"
description: "Use Redis for caching, queues, and fast data access."
pubDate: 2026-02-03
tags: ["database", "caching", "performance"]
---

## Summary

Redis is an in-memory data store commonly used for caching, queues, and shared state.

## Common use cases

- Cache hot data to reduce database load.
- Rate limiting counters.
- Pub/Sub for simple messaging.

## Key commands

```bash
redis-cli PING
redis-cli GET key
redis-cli SET key value
redis-cli TTL key
```

## Pitfalls

- Memory pressure can evict keys unexpectedly.
- Large values can slow down serialization.
