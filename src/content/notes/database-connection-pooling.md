---
title: "Database connection pooling"
description: "Reduce overhead and improve stability by reusing DB connections."
pubDate: 2026-02-03
tags: ["database", "performance", "reliability"]
---

## Summary

Connection pooling keeps a fixed number of database connections open and reuses them, improving latency and preventing resource spikes.

## Key ideas

- Opening connections is expensive.
- Pools cap concurrent connections.
- Idle connections are reused to avoid churn.

## What to monitor

- Active connections vs pool size.
- Queue wait time for a connection.
- Slow queries that hold connections too long.

## Pitfalls

- Pool too small causes request queuing.
- Pool too large can exhaust the database.
- Leaking connections is a common failure mode.
