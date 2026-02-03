---
title: "JWT security pitfalls"
description: "Common mistakes to avoid when using JWTs."
pubDate: 2026-02-03
tags: ["security", "auth", "jwt"]
---

## Summary

JWTs are powerful but easy to misuse. This note highlights common pitfalls.

## Pitfalls

- Accepting tokens without verifying signature.
- Allowing `alg=none` or weak algorithms.
- Long-lived tokens without rotation.
- Storing sensitive data in the payload.

## Recommendations

- Use short expiration times.
- Rotate signing keys and support key IDs (`kid`).
- Validate issuer, audience, and expiration.

## Quick checklist

- Signature verified
- `exp` enforced
- `iss` and `aud` validated
