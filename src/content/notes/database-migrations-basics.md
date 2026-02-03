---
title: "Database migrations basics"
description: "Plan schema changes safely with migrations and rollbacks."
pubDate: 2026-02-03
tags: ["database", "deployment", "reliability"]
---

## Summary

Migrations help you evolve database schemas safely and consistently across environments.

## Best practices

- Use forward-only migrations whenever possible.
- Separate schema changes from data backfills.
- Make changes backward compatible for a period.

## Common patterns

- Add new column as nullable.
- Backfill data in batches.
- Switch reads/writes to the new column.
- Drop old column later.

## Pitfalls

- Long-running locks during schema changes.
- Mixing app deploy and schema change without coordination.
