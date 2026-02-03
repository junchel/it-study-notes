---
title: "Database replication basics"
description: "Primary/replica setups, lag, and failover considerations."
pubDate: 2026-02-03
tags: ["database", "replication", "reliability"]
---

## Summary

Replication improves availability and read scalability when managed well.

## Key ideas

- Primary handles writes; replicas handle reads.
- Monitor replication lag.
- Plan for failover and split-brain prevention.

## Commands or steps

```text
Checklist
- Monitor replication lag
- Test failover regularly
- Define read/write routing
```

## Pitfalls

- Assuming replicas are always up to date.
- No plan for primary failure.
- Writes accidentally routed to replicas.
