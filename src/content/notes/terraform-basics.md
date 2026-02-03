---
title: "Infrastructure as Code (Terraform) basics"
description: "Define infrastructure with code and track changes safely."
pubDate: 2026-02-03
tags: ["iac", "terraform", "automation", "cloud"]
---

## Summary

IaC lets you manage infrastructure with versioned, repeatable code.

## Key ideas

- Use state files to track deployed resources.
- Review plans before applying changes.
- Separate environments with workspaces or folders.

## Commands or steps

```bash
terraform init
terraform plan
terraform apply
```

## Pitfalls

- Storing state files without encryption or locking.
- Applying changes without a plan review.
- Mixing environments in one state.
