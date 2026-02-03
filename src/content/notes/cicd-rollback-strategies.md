---
title: "CI/CD rollback strategies"
description: "Safe deployment patterns and rollback planning."
pubDate: 2026-02-03
tags: ["ci-cd", "operations", "reliability"]
---

## Summary

Rollbacks reduce downtime when a release fails.

## Key ideas

- Keep artifacts versioned and deployable.
- Use blue/green or canary releases.
- Automate rollback triggers when possible.

## Commands or steps

```text
Checklist
- Keep previous release artifacts
- Define rollback criteria
- Automate health checks
```

## Pitfalls

- No rollback plan for database migrations.
- Manual rollback steps without docs.
- Rolling back without monitoring signals.
