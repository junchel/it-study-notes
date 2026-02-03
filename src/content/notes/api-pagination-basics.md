---
title: "API pagination basics"
description: "Return large datasets safely with predictable pagination patterns."
pubDate: 2026-02-03
tags: ["api", "backend", "design"]
---

## Summary

Pagination keeps responses small, predictable, and cheaper to serve.

## Key ideas

- Page size limits protect performance and cost.
- Offset pagination is simple but can drift with changing data.
- Cursor pagination is stable for large, fast-moving datasets.
- Always define a consistent sort order.

## Guidelines

- Set a default and a hard maximum page size.
- Prefer cursor-based pagination for high-volume endpoints.
- Include `next` and `prev` links or tokens in the response.
- Document the sort order and pagination parameters clearly.

## Pitfalls

- Unbounded page sizes can cause timeouts and memory spikes.
- Offset pagination can skip or duplicate items under writes.
- Inconsistent sorting leads to confusing client behavior.
