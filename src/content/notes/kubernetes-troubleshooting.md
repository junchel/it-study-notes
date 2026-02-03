---
title: "Kubernetes troubleshooting checklist"
description: "Debugging pods, deployments, and services in Kubernetes."
pubDate: 2026-02-03
tags: ["kubernetes", "troubleshooting", "devops"]
---

## Summary

Start with pod status, then check events, logs, and service routing.

## Steps

1. Inspect pod status and events.
2. Check container logs.
3. Verify service selectors and endpoints.
4. Validate ingress or load balancer health.

## Commands or steps

```bash
kubectl get pods
kubectl describe pod <name>
kubectl logs <pod>
kubectl get svc
kubectl get endpoints
```

## Pitfalls

- Ignoring events when pods fail to schedule.
- Missing resource limits.
- Misaligned labels/selectors.
