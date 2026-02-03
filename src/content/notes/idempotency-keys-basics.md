---
title: "Idempotency keys basics"
description: "Make unsafe operations retryable by using idempotency keys."
pubDate: 2026-02-03
tags: ["api", "reliability", "backend"]
---

## Summary

Idempotency keys let clients safely retry requests that create or change data.

## Key ideas

- Clients send a unique key with each unsafe request.
- Servers store the key and the result for later reuse.
- Replayed requests with the same key return the original result.
- Keys should expire after a reasonable TTL.

## Guidelines

- Require idempotency keys for `POST` or side-effecting endpoints.
- Scope keys to a user or tenant to avoid cross-user reuse.
- Store request fingerprints with the key to detect mismatches.
- Choose a TTL that matches business needs and retry windows.

## Pitfalls

- Reusing keys across different requests can hide mistakes.
- Short TTLs can allow duplicate processing.
- Non-deterministic responses break idempotency guarantees.
