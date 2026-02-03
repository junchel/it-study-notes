---
title: "OAuth and JWT basics"
description: "Understand tokens, scopes, and common OAuth flows."
pubDate: 2026-02-03
tags: ["security", "auth", "oauth", "jwt"]
---

## Summary

OAuth delegates access, while JWT provides a portable token format.

## Key ideas

- OAuth defines authorization flows and scopes.
- JWTs are signed tokens containing claims.
- Tokens should be short-lived and rotated.

## Commands or steps

```text
Checklist
- Identify the OAuth flow
- Validate JWT signature
- Check token expiration
```

## Pitfalls

- Storing access tokens in insecure storage.
- Accepting unsigned or expired tokens.
- Overly broad scopes.
