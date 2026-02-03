---
title: "XSS basics"
description: "Prevent cross-site scripting with proper output encoding and CSP."
pubDate: 2026-02-03
tags: ["security", "web", "frontend"]
---

## Summary

XSS lets attackers run scripts in a victim's browser. Preventing it protects users and sessions.

## Key ideas

- Output encoding is the primary defense.
- Context matters: HTML, attribute, URL, and JS contexts need different escaping.
- CSP reduces the impact of missed encoding.
- Avoid `innerHTML` with untrusted data.

## Guidelines

- Encode output at render time, not on input.
- Use safe templating by default and avoid raw HTML injection.
- Sanitize rich text with a well-maintained library.
- Set a strict CSP and remove inline scripts.

## Pitfalls

- Using the wrong escaping for a context.
- Trusting user input from upstream systems.
- Allowing inline scripts in CSP without a strong reason.
