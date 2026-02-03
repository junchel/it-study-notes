---
title: "API error handling basics"
description: "Design consistent error responses that clients can act on."
pubDate: 2026-02-03
tags: ["api", "backend", "reliability"]
---

## Summary

Good error handling makes failures predictable and easier to debug.

## Key ideas

- Use a consistent error envelope across endpoints.
- Separate client errors (4xx) from server errors (5xx).
- Include stable error codes for programmatic handling.
- Log correlation IDs for traceability.

## Guidelines

- Define a small set of error codes and document them.
- Return actionable messages without leaking internals.
- Map validation failures to 400-level responses.
- Include a request or trace ID in responses and logs.

## Pitfalls

- Inconsistent error shapes across endpoints.
- Overly verbose messages that expose sensitive data.
- Using 200 responses for errors.
