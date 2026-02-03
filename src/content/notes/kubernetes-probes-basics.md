---
title: "Kubernetes probes basics"
description: "Use liveness, readiness, and startup probes to keep pods healthy."
pubDate: 2026-02-03
tags: ["kubernetes", "reliability", "operations"]
---

## Summary

Probes tell Kubernetes whether a container is healthy and ready to receive traffic.

## Probe types

- **Liveness**: restart container if it is stuck.
- **Readiness**: remove from service endpoints when not ready.
- **Startup**: give slow-starting apps time before liveness checks.

## Example

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 10
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```

## Pitfalls

- Probes that are too strict can cause restarts.
- Readiness should reflect dependency health (DB, cache).
