---
title: "Database sharding basics"
description: "Distribute data across shards to scale writes and storage."
pubDate: 2026-02-03
tags: ["database", "sharding", "scalability"]
---

## Summary

Sharding splits data across multiple databases to scale horizontally.

## Key ideas

- Choose a shard key with even distribution.
- Plan for rebalancing and resharding.
- Keep cross-shard queries minimal.

## Commands or steps

```text
Checklist
- Define shard key
- Design routing layer
- Plan resharding strategy
```

## Pitfalls

- Hot shards from poor key choice.
- Complex cross-shard joins.
- No plan for resharding.
