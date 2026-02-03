---
title: "Blue-green deployments"
description: "Deploy new versions safely with a parallel environment."
pubDate: 2026-02-03
tags: ["deployment", "ci-cd", "reliability"]
---

## Summary

Blue-green deployment runs two identical environments. You deploy to the idle one and switch traffic when ready.

## Benefits

- Fast rollback by switching traffic back.
- Minimal downtime.
- Safer release validation.

## Workflow

1. Deploy new version to green environment.
2. Run smoke tests.
3. Switch traffic to green.
4. Keep blue ready for rollback.

## Pitfalls

- Data migrations can still cause issues.
- Double infrastructure costs during deployment.
