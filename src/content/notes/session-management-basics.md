---
title: "Session management basics"
description: "Keep user sessions secure with strong cookies and expiration."
pubDate: 2026-02-03
tags: ["security", "auth", "web"]
---

## Summary

Session management keeps authentication secure while supporting smooth user experiences.

## Key ideas

- Session IDs should be random and unguessable.
- Server-side sessions store state; cookies store identifiers.
- Expiration can be fixed or sliding.
- Secure cookie flags reduce theft risks.

## Guidelines

- Use `HttpOnly`, `Secure`, and `SameSite` cookie flags.
- Rotate session IDs on login and privilege changes.
- Set reasonable idle and absolute expiration times.
- Store minimal data in the session.

## Pitfalls

- Long-lived sessions increase account takeover risk.
- Storing secrets in cookies or local storage.
- Session fixation from unrotated IDs.
