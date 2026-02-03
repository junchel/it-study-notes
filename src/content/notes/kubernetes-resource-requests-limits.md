---
title: "Kubernetes requests and limits"
description: "Control CPU and memory usage with requests and limits."
pubDate: 2026-02-03
tags: ["kubernetes", "operations", "performance"]
---

## Summary

Requests and limits help Kubernetes schedule pods correctly and protect cluster stability by bounding resource usage.

## Key ideas

- **Requests**: guaranteed resources used for scheduling.
- **Limits**: maximum resources a container can use.
- CPU can be throttled; memory over-limit can cause OOM kills.

## Example

```yaml
resources:
  requests:
    cpu: "250m"
    memory: "256Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"
```

## Pitfalls

- Requests too high reduce scheduling flexibility.
- Limits too low cause throttling or crashes.
