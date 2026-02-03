---
title: "VPC and cloud networking basics"
description: "Subnets, routing, security groups, and common cloud network patterns."
pubDate: 2026-02-03
tags: ["cloud", "networking", "vpc", "aws", "azure", "gcp"]
---

## Summary

Cloud networking centers on isolated virtual networks with subnets, routing, and firewall rules.

## Key ideas

- Public subnets route to an internet gateway; private subnets do not.
- Route tables control traffic flow between subnets and gateways.
- Security groups and network ACLs enforce inbound/outbound rules.

## Commands or steps

```text
Checklist
- Define CIDR ranges and subnet layout
- Create public/private subnets
- Attach route tables
- Apply security groups
```

## Pitfalls

- Overlapping CIDR ranges across environments.
- Placing databases in public subnets.
- Allowing wide-open inbound rules.
