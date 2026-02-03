---
title: "Linux performance debugging"
description: "Use top, vmstat, iostat, and other tools to find bottlenecks."
pubDate: 2026-02-03
tags: ["linux", "performance", "troubleshooting"]
---

## Summary

Performance debugging starts with CPU, memory, disk, and network checks.

## Key ideas

- Identify the bottleneck before making changes.
- Compare current metrics to a baseline.
- Look for saturation and queueing.

## Commands or steps

```bash
top
htop
vmstat 1 5
iostat -x 1 5
free -m
```

## Pitfalls

- Optimizing without a baseline.
- Ignoring disk IO wait times.
- Forgetting that noisy neighbors can skew results.
