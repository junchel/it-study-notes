---
title: "API versioning basics"
description: "Ship API changes without breaking existing clients."
pubDate: 2026-02-03
tags: ["api", "architecture", "design"]
---

## Summary

Versioning protects clients from breaking changes while allowing the API to evolve.

## Common approaches

- URL versioning: `/v1/users`
- Header versioning: `Accept: application/vnd.example.v1+json`
- Query parameter versioning: `?v=1`

## Guidelines

- Avoid breaking changes within a version.
- Deprecate with clear timelines.
- Provide migration guides.

## Pitfalls

- Too many versions increase maintenance cost.
- Inconsistent behavior across versions.
