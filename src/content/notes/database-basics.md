---
title: "Database fundamentals"
description: "Relational vs NoSQL, indexes, backups, and query basics."
pubDate: 2026-02-03
tags: ["database", "sql", "it-basics"]
---

## Summary

Understand core database concepts to design reliable storage and queries.

## Key ideas

- Relational databases use schemas and SQL.
- NoSQL favors flexible models and scale-out patterns.
- Indexes speed reads but slow writes.
- Backups and restores are mandatory.

## Commands or steps

```sql
-- Example: basic SQL query
SELECT id, name FROM users WHERE active = true ORDER BY created_at DESC;
```

## Pitfalls

- Missing indexes for common queries.
- Ignoring backup restore tests.
- Storing large blobs without a storage strategy.
