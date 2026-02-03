---
title: "Log levels basics"
description: "Use consistent log levels to improve signal and debugging."
pubDate: 2026-02-03
tags: ["logging", "observability", "operations"]
---

## Summary

Log levels help teams separate noise from signal and respond faster during incidents.

## Common levels

- **DEBUG**: detailed, high-volume diagnostics.
- **INFO**: normal operation events.
- **WARN**: unexpected conditions that are non-fatal.
- **ERROR**: failed operations that need attention.
- **FATAL**: service cannot continue.

## Tips

- Use structured logs (JSON) when possible.
- Include correlation IDs for tracing.

## Pitfalls

- Overusing ERROR makes alerting noisy.
- Missing context fields makes logs hard to search.
