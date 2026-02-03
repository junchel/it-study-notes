---
title: "Canary deployments"
description: "Roll out changes gradually to reduce risk."
pubDate: 2026-02-03
tags: ["deployment", "ci-cd", "reliability"]
---

## Summary

Canary deployments send a small percentage of traffic to a new version before full rollout.

## Benefits

- Early detection of issues.
- Safer rollbacks.
- Real user validation.

## Workflow

1. Deploy new version to a small subset.
2. Monitor error rates and latency.
3. Gradually increase traffic.
4. Complete rollout or rollback.

## Pitfalls

- If metrics are weak, bad changes can slip through.
- Ensure canary and baseline traffic are comparable.
