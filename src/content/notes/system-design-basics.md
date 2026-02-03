---
title: "System design basics"
description: "Scalability, reliability, and high-level architecture patterns."
pubDate: 2026-02-03
tags: ["system-design", "architecture", "scalability"]
---

## Summary

System design focuses on making services scalable, reliable, and maintainable.

## Key ideas

- Separate read/write paths when load grows.
- Use caching to reduce latency and load.
- Design for failure with redundancy.

## Commands or steps

```text
Checklist
- Identify core use cases
- Estimate traffic and data size
- Choose storage and caching layers
- Plan for scaling and failure
```

## Pitfalls

- Premature optimization without real traffic data.
- Single points of failure.
- Ignoring observability requirements.
