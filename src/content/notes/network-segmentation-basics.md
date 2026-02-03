---
title: "Network segmentation basics"
description: "Reduce blast radius with subnets, VLANs, and access rules."
pubDate: 2026-02-03
tags: ["networking", "security", "segmentation"]
---

## Summary

Segmentation limits lateral movement and reduces risk.

## Key ideas

- Separate public, app, and data tiers.
- Use least privilege between segments.
- Monitor traffic between zones.

## Commands or steps

```text
Checklist
- Define tiers and subnet boundaries
- Apply ACLs and firewall rules
- Audit inter-segment traffic
```

## Pitfalls

- Flat networks with shared access.
- Overly complex rules that nobody understands.
- Missing monitoring on east-west traffic.
