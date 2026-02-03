---
title: "Kubernetes rollouts basics"
description: "Safely deploy updates with rolling updates and rollbacks."
pubDate: 2026-02-03
tags: ["kubernetes", "deployment", "operations"]
---

## Summary

Kubernetes supports rolling updates and rollbacks for Deployments, helping teams ship changes safely.

## Common commands

```bash
kubectl rollout status deployment/api
kubectl rollout history deployment/api
kubectl rollout undo deployment/api
```

## Tips

- Pair rollouts with readiness probes.
- Monitor error rates during deploys.

## Pitfalls

- Rolling updates can still cause downtime if probes are wrong.
- Config changes can trigger full rollouts unexpectedly.
