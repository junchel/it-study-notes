---
title: "SSO and MFA essentials"
description: "Centralized access with SSO and stronger authentication with MFA."
pubDate: 2026-02-03
tags: ["security", "auth", "sso", "mfa"]
---

## Summary

Single Sign-On reduces credential sprawl while MFA adds a strong second factor.

## Key ideas

- Use an identity provider for centralized auth.
- Enforce MFA for privileged access.
- Prefer phishing-resistant MFA when possible.

## Commands or steps

```text
Checklist
- Require MFA for admins
- Enable conditional access policies
- Audit MFA enrollment regularly
```

## Pitfalls

- Allowing legacy protocols without MFA.
- Using SMS MFA without risk-based controls.
- Not enforcing re-authentication for sensitive actions.
