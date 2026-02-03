---
title: "Cloud network security basics"
description: "Security groups, NACLs, and WAF layers in cloud networking."
pubDate: 2026-02-03
tags: ["cloud", "security", "networking"]
---

## Summary

Cloud network security is layered with security groups, NACLs, and optional WAFs.

## Key ideas

- Security groups are stateful; NACLs are stateless.
- Use least privilege for inbound and outbound rules.
- WAF protects web apps from common attacks.

## Commands or steps

```text
Checklist
- Harden security groups
- Restrict NACLs per subnet
- Enable WAF for public endpoints
```

## Pitfalls

- Wide-open inbound rules.
- Conflicting NACLs and security group rules.
- No visibility into blocked traffic.
