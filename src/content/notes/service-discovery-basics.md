---
title: "Service discovery basics"
description: "Find and route to service instances without hardcoding IPs."
pubDate: 2026-02-03
tags: ["networking", "architecture", "microservices"]
---

## Summary

Service discovery makes service endpoints dynamic, resilient, and easier to scale.

## Key ideas

- DNS-based discovery is simple and widely supported.
- Registry-based discovery allows richer metadata and health checks.
- Discovery can be client-side or server-side (via a proxy).
- Health checks determine which instances receive traffic.

## Guidelines

- Use health checks and remove unhealthy instances quickly.
- Cache discovery results with sensible TTLs.
- Avoid single points of failure in the discovery system.
- Keep development and production discovery paths consistent.

## Pitfalls

- Stale caches can route traffic to dead instances.
- Hardcoded IPs or ports break scaling and failover.
- Too frequent health checks can overload small services.
