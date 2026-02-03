---
title: "Deadlocks basics"
description: "Detect and avoid deadlocks in transactional systems."
pubDate: 2026-02-03
tags: ["database", "reliability", "sql"]
---

## Summary

Deadlocks happen when transactions block each other in a cycle.

## Key ideas

- Two transactions can each hold a lock the other needs.
- Databases detect deadlocks and abort a victim transaction.
- Consistent lock ordering reduces deadlocks.
- Shorter transactions lower risk.

## Guidelines

- Access tables and rows in a consistent order.
- Keep transactions small and predictable.
- Retry aborted transactions with backoff.
- Monitor deadlock logs and patterns.

## Pitfalls

- Ignoring deadlock errors in application logic.
- Long-running batch jobs conflicting with OLTP traffic.
- Mixed access patterns across services.
