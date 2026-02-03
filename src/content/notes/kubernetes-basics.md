---
title: "Kubernetes basics"
description: "Pods, deployments, services, and how to debug cluster workloads."
pubDate: 2026-02-03
tags: ["kubernetes", "devops", "containers"]
---

## Summary

Kubernetes orchestrates container workloads and keeps services running.

## Key ideas

- Pods are the smallest deployable unit.
- Deployments manage replicas and rollouts.
- Services expose pods with stable networking.

## Commands or steps

```bash
kubectl get pods
kubectl describe pod <name>
kubectl logs <pod>
kubectl get svc
```

## Pitfalls

- Not checking events when pods fail to start.
- Forgetting resource limits.
- Deploying without readiness/liveness probes.
