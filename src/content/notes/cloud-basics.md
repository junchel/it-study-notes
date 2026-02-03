---
title: "Cloud basics overview"
description: "Core cloud concepts: regions, VPC/VNet, IAM, and managed services."
pubDate: 2026-02-03
tags: ["cloud", "aws", "azure", "gcp", "it-basics"]
---

## Summary

A quick primer on shared cloud concepts across AWS, Azure, and GCP.

## Key ideas

- Regions and availability zones define where workloads run.
- VPC/VNet provides network isolation and routing control.
- IAM governs who can access what.
- Managed services reduce operational overhead.

## Commands or steps

```text
Conceptual mapping
- VPC (AWS) ~= VNet (Azure) ~= VPC (GCP)
- IAM (AWS) ~= Entra ID/RBAC (Azure) ~= IAM (GCP)
```

## Pitfalls

- Leaving public access open by default.
- Forgetting to set budgets and alerts.
- Over-provisioning resources without monitoring.
