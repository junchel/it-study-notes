---
title: "Correlation IDs basics"
description: "Trace requests across services using correlation IDs."
pubDate: 2026-02-03
tags: ["observability", "logging", "troubleshooting"]
---

## Summary

Correlation IDs connect logs across services, making it easier to trace a single request end-to-end.

## How it works

- Generate an ID at the edge (gateway or first service).
- Pass it to downstream services via headers.
- Include it in logs and traces.

## Common headers

```text
X-Request-ID: 7f4c2c1e-9e47-4d26-b3dd-12a7a3a0f9e5
Traceparent: 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01
```

## Pitfalls

- Overwriting IDs mid-flight breaks traceability.
- Not logging the ID at every hop.
