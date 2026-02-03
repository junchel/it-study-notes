---
title: "Circuit breaker basics"
description: "Stop cascading failures by cutting off unhealthy dependencies."
pubDate: 2026-02-03
tags: ["reliability", "architecture", "backend"]
---

## Summary

Circuit breakers prevent repeated calls to failing services and give them time to recover.

## Key ideas

- Breakers move between closed, open, and half-open states.
- Failure thresholds trigger an open state.
- Half-open probes test recovery before closing.
- Fallbacks reduce user impact.

## Guidelines

- Configure breakers per dependency, not globally.
- Combine with timeouts and limited retries.
- Emit metrics and alerts for breaker state changes.
- Provide graceful fallbacks when possible.

## Pitfalls

- A global breaker can take down healthy paths.
- Aggressive thresholds can cause flapping.
- Missing fallbacks can turn brief issues into outages.
