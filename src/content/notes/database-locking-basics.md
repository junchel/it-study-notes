---
title: "Database locking basics"
description: "Understand locks to prevent blocking and outages."
pubDate: 2026-02-03
tags: ["database", "sql", "operations"]
---

## Summary

Locks protect data integrity but can block other work if held too long.

## Key ideas

- Shared locks allow reads; exclusive locks protect writes.
- Lock escalation can increase contention.
- Long transactions hold locks longer than expected.
- Indexes reduce the amount of data locked.

## Guidelines

- Keep transactions short and focused.
- Use the right indexes to avoid table scans.
- Monitor lock wait time and blocked queries.
- Avoid unnecessary `SELECT ... FOR UPDATE`.

## Pitfalls

- Running maintenance jobs during peak hours.
- Missing indexes that cause large lock scopes.
- Holding locks while doing external calls.
