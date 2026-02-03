---
title: "Health checks basics"
description: "Design liveness and readiness checks that keep services reliable."
pubDate: 2026-02-03
tags: ["reliability", "operations", "backend"]
---

## Summary

Health checks control traffic routing and detect failures quickly.

## Key ideas

- Liveness checks confirm the process is alive.
- Readiness checks confirm the service can handle traffic.
- Shallow checks are fast; deep checks validate dependencies.
- Load balancers and orchestrators rely on check results.

## Guidelines

- Keep liveness checks simple and fast.
- Use readiness checks to gate traffic during startup.
- Cache expensive dependency checks.
- Return clear status codes and messages.

## Pitfalls

- Deep liveness checks can trigger unnecessary restarts.
- Slow checks can cause false negatives and flapping.
- Missing checks hide partial failures.
