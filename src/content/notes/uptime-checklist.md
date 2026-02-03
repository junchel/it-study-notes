---
title: "Uptime checklist"
description: "Quick checks to validate service availability."
pubDate: 2026-02-03
tags: ["operations", "reliability", "troubleshooting"]
---

## Summary

Use this checklist when a service looks down or degraded.

## Checklist

- Confirm DNS resolves correctly.
- Check HTTP response from edge and origin.
- Verify SSL/TLS certificate validity.
- Confirm upstream dependencies (DB, cache).
- Review recent deploys or config changes.

## Quick commands

```bash
curl -I https://example.com
dig example.com
```

## Pitfalls

- CDN cache can mask origin failures.
- Local DNS cache can mislead results.
