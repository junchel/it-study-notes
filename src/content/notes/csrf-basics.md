---
title: "CSRF basics"
description: "Protect state-changing requests from cross-site request forgery."
pubDate: 2026-02-03
tags: ["security", "web", "auth"]
---

## Summary

CSRF attacks trick a logged-in browser into performing unwanted actions.

## Key ideas

- Cookies are sent automatically by browsers.
- CSRF tokens prove the request came from your site.
- SameSite cookies reduce cross-site cookie sending.
- Origin and referer checks add another layer.

## Guidelines

- Require CSRF tokens for state-changing endpoints.
- Set cookies with `SameSite=Lax` or `SameSite=Strict`.
- Validate `Origin` or `Referer` headers when available.
- Prefer `POST`, `PUT`, or `DELETE` for mutations.

## Pitfalls

- Disabling CSRF protection for JSON endpoints.
- Using `SameSite=None` without a strong reason.
- Reusing tokens across sessions without rotation.
