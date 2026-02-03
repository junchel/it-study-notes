---
title: "GitHub Actions basics"
description: "Automate CI workflows with GitHub Actions."
pubDate: 2026-02-03
tags: ["ci-cd", "github", "automation"]
---

## Summary

GitHub Actions runs automated workflows on pushes, pull requests, or schedules.

## Key ideas

- Workflows live in `.github/workflows/`.
- Jobs run on GitHub-hosted or self-hosted runners.
- Steps can run shell commands or prebuilt actions.

## Simple example

```yaml
name: CI
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
```

## Pitfalls

- Missing secrets cause silent failures.
- Cached dependencies can hide build issues.
