---
title: "Traceroute and MTR basics"
description: "Diagnose network paths and latency with traceroute and mtr."
pubDate: 2026-02-03
tags: ["networking", "troubleshooting", "performance"]
---

## Summary

Traceroute and MTR help you see the network path and identify where latency or packet loss occurs.

## Commands

```bash
# Linux/macOS
traceroute example.com
mtr -rwzbc 100 example.com

# Windows
tracert example.com
pathping example.com
```

## How to read results

- Look for spikes in latency between hops.
- Consistent loss at one hop suggests a network issue.
- Some routers deprioritize ICMP, so loss alone can be misleading.

## Pitfalls

- ICMP filtering can make paths appear broken.
- Always compare results from multiple networks if possible.
