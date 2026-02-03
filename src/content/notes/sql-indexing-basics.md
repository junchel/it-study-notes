---
title: "SQL indexing basics"
description: "When and how to use indexes to improve query performance."
pubDate: 2026-02-03
tags: ["database", "sql", "performance"]
---

## Summary

Indexes speed up reads but cost extra storage and write overhead.

## Key ideas

- Index columns used in WHERE and JOIN clauses.
- Avoid indexing low-cardinality columns.
- Measure before and after changes.

## Commands or steps

```sql
CREATE INDEX idx_users_created_at ON users (created_at);
EXPLAIN SELECT * FROM users WHERE created_at > NOW() - INTERVAL '7 days';
```

## Pitfalls

- Creating too many indexes.
- Forgetting to update stats or analyze query plans.
- Assuming indexes help every query.
