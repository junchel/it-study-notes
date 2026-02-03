---
title: "Kubernetes namespaces basics"
description: "Organize resources and reduce blast radius with namespaces."
pubDate: 2026-02-03
tags: ["kubernetes", "operations", "security"]
---

## Summary

Namespaces segment resources within a cluster and help isolate teams, environments, or workloads.

## Key ideas

- Separate dev/stage/prod into different namespaces.
- Apply resource quotas and policies per namespace.
- RBAC permissions often map to namespaces.

## Commands

```bash
kubectl get namespaces
kubectl create namespace staging
kubectl config set-context --current --namespace=staging
```

## Pitfalls

- Shared resources (CRDs, nodes) still cross namespace boundaries.
- Forgetting namespace context can cause accidental changes.
