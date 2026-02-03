---
title: "CI/CD pipeline basics"
description: "Build, test, and deploy with repeatable automation."
pubDate: 2026-02-03
tags: ["devops", "ci-cd", "automation"]
---

## Summary

CI/CD automates testing and deployment to reduce risk and speed up delivery.

## Key ideas

- CI validates changes early with tests and linting.
- CD deploys validated builds to environments.
- Small, frequent changes are easier to roll back.

## Commands or steps

```bash
# Example: run tests locally before pushing
npm.cmd test
```

## Pitfalls

- Deploying without rollback or monitoring.
- Skipping tests in the pipeline.
- Long-running pipelines that discourage frequent commits.
