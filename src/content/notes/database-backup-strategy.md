---
title: "Database backup strategy"
description: "Snapshots, PITR, and restore validation for databases."
pubDate: 2026-02-03
tags: ["database", "backup", "operations"]
---

## Summary

Backups only matter if restores are tested and reliable.

## Key ideas

- Use both full backups and point-in-time recovery.
- Store backups in a separate failure domain.
- Regularly test restore procedures.

## Commands or steps

```text
Checklist
- Enable PITR
- Automate snapshot schedules
- Run quarterly restore drills
```

## Pitfalls

- Backups without restore tests.
- Single-region backup storage.
- No documented recovery runbook.
