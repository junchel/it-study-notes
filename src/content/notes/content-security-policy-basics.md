---
title: "Content Security Policy basics"
description: "Use CSP to reduce XSS risk and control what browsers can load."
pubDate: 2026-02-03
tags: ["security", "web", "frontend"]
---

## Summary

CSP defines which scripts, styles, and resources a browser may load, reducing XSS impact.

## Key ideas

- `default-src` sets the baseline for all resource types.
- `script-src` controls executable scripts and is the most critical directive.
- Nonces or hashes allow safe inline scripts.
- `report-uri` or `report-to` captures violations.

## Guidelines

- Start with a strict policy and relax only as needed.
- Use nonces for required inline scripts.
- Disallow `unsafe-inline` and `unsafe-eval` if possible.
- Monitor CSP reports and fix violations.

## Pitfalls

- Overly permissive policies that don't add protection.
- Forgetting to update CSP when adding new assets.
- Relying on CSP alone without output encoding.
