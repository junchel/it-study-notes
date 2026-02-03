---
title: "Distributed tracing basics"
description: "Trace requests across services to find latency and errors."
pubDate: 2026-02-03
tags: ["observability", "reliability", "backend"]
---

## Summary

Distributed tracing links spans across services so you can see end-to-end latency.

## Key ideas

- A trace is a tree of spans representing work across services.
- Context propagation carries trace IDs across service boundaries.
- Sampling controls cost while preserving visibility.
- Attributes and events add useful debugging context.

## Guidelines

- Propagate trace headers through HTTP, queues, and RPC.
- Instrument the most critical paths first.
- Sample at the entry point to keep traces complete.
- Avoid collecting sensitive data in span attributes.

## Pitfalls

- Missing propagation breaks traces into fragments.
- High-cardinality attributes can explode storage costs.
- Sampling too aggressively hides tail latency issues.
