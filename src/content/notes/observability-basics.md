---
title: "Observability basics"
description: "Logs, metrics, traces, and a practical monitoring checklist."
pubDate: 2026-02-03
tags: ["monitoring", "devops", "observability"]
---

## Summary

Observability helps you detect, diagnose, and prevent incidents with logs, metrics, and traces.

## Key ideas

- Metrics show trends; logs show events; traces show request flow.
- Start with the golden signals: latency, traffic, errors, saturation.
- Alert on symptoms, not on raw resource thresholds alone.

## Commands or steps

```bash
# Example: basic Linux log tailing
tail -f /var/log/syslog
```

## Pitfalls

- Too many alerts causing fatigue.
- Missing context in logs (no request IDs).
- Monitoring without clear SLOs.
