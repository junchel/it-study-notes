---
title: "Query plan basics"
description: "Read execution plans to fix slow queries."
pubDate: 2026-02-03
tags: ["database", "performance", "sql"]
---

## Summary

Query plans show how the database executes SQL and where time is spent.

## Key ideas

- Plans reveal joins, scans, and index usage.
- Cost estimates help compare alternative plans.
- Statistics drive planner decisions.
- Plan regressions can happen after data changes.

## Guidelines

- Use `EXPLAIN` to inspect slow queries.
- Check for full table scans on large tables.
- Keep statistics updated after major data changes.
- Add indexes that match filters and join keys.

## Pitfalls

- Relying on query text without validating the plan.
- Over-indexing and slowing writes.
- Ignoring parameter sniffing or plan caching issues.
