---
title: "Firewall rules basics"
description: "Design and audit firewall rules for least privilege."
pubDate: 2026-02-03
tags: ["networking", "security", "firewall"]
---

## Summary

Firewall rules control traffic flow and reduce risk.

## Key ideas

- Start with default deny.
- Allow only required ports and sources.
- Review rules regularly.

## Commands or steps

```text
Checklist
- Define allowed ports
- Restrict source ranges
- Audit rules quarterly
```

## Pitfalls

- Wide-open rules (0.0.0.0/0).
- Rules without clear ownership.
- No documentation for exceptions.
