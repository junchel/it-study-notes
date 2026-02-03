---
title: "Database transactions basics"
description: "ACID properties, isolation levels, and safe write patterns."
pubDate: 2026-02-03
tags: ["database", "sql", "transactions"]
---

## Summary

Transactions keep data consistent across multiple operations.

## Key ideas

- ACID: atomicity, consistency, isolation, durability.
- Isolation levels trade consistency for performance.
- Use transactions for multi-step updates.

## Commands or steps

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

## Pitfalls

- Long-running transactions blocking others.
- Missing indexes on lock-heavy tables.
- Assuming default isolation is enough for all workloads.
