---
title: "Secrets management basics"
description: "Store, rotate, and access secrets without exposing them in code."
pubDate: 2026-02-03
tags: ["security", "secrets", "operations"]
---

## Summary

Secrets should be stored outside code and rotated regularly to reduce risk.

## Key ideas

- Use dedicated secret managers or vaults.
- Rotate credentials and revoke unused keys.
- Audit access and avoid secrets in logs.

## Commands or steps

```text
Checklist
- Centralize secrets in a vault
- Enforce least privilege
- Rotate and audit access quarterly
```

## Pitfalls

- Hardcoding secrets in repos.
- Exposing secrets in CI logs.
- Sharing credentials across teams.
