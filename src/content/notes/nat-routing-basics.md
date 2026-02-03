---
title: "NAT and routing basics"
description: "Understand NAT, gateways, and routing tables."
pubDate: 2026-02-03
tags: ["networking", "routing", "nat"]
---

## Summary

Routing decides where traffic goes; NAT translates addresses between networks.

## Key ideas

- NAT enables private subnets to reach the internet.
- Routing tables decide next hops.
- Asymmetric routing causes hard-to-debug issues.

## Commands or steps

```text
Checklist
- Validate routes and gateways
- Confirm NAT placement
- Trace paths end-to-end
```

## Pitfalls

- Missing routes for return traffic.
- NAT in the wrong subnet.
- Overlapping CIDR ranges.
