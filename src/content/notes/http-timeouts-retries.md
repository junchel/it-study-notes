---
title: "HTTP timeouts and retries"
description: "Prevent cascading failures with sensible timeout and retry settings."
pubDate: 2026-02-03
tags: ["http", "reliability", "performance"]
---

## Summary

Timeouts and retries protect services from slow dependencies and reduce cascading failures.

## Key ideas

- Set timeouts at every hop (client, proxy, server).
- Retries should be limited and use backoff.
- Only retry idempotent requests safely.

## Guidelines

- Keep timeouts slightly above normal p95 latency.
- Use jitter to avoid retry storms.
- Fail fast when a dependency is down.

## Pitfalls

- No timeouts can cause thread exhaustion.
- Aggressive retries can amplify outages.
