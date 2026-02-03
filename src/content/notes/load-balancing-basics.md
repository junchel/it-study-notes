---
title: "Load balancing basics"
description: "Reverse proxies, L4/L7 load balancers, and common patterns."
pubDate: 2026-02-03
tags: ["networking", "load-balancing", "architecture"]
---

## Summary

Load balancers distribute traffic across multiple backends to improve availability.

## Key ideas

- L4 operates on TCP/UDP; L7 understands HTTP.
- Health checks keep traffic away from failed nodes.
- Sticky sessions trade simplicity for stateful behavior.

## Commands or steps

```text
Checklist
- Choose L4 or L7 based on protocol needs
- Configure health checks
- Decide on session affinity
```

## Pitfalls

- Missing timeouts causing request pileups.
- No health checks or misconfigured ones.
- Relying on sticky sessions without shared state.
