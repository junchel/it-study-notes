---
title: "Incident scenario: disk full"
description: "Recover from disk saturation without data loss."
pubDate: 2026-02-03
tags: ["linux", "incident-response", "operations"]
---

## Summary

Full disks can crash services and corrupt data if not handled quickly.

## Steps

1. Identify large files and growth sources.
2. Clear logs or temporary files safely.
3. Expand storage or adjust retention policies.
4. Add monitoring alerts for disk usage.

## Pitfalls

- Deleting active files without service checks.
- Ignoring inode exhaustion.
- No retention policies for logs.
