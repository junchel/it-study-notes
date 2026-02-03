---
title: "Networking basics for troubleshooting"
description: "A quick guide to IP, DNS, routing, and core troubleshooting commands."
pubDate: 2026-02-03
tags: ["networking", "troubleshooting", "it-basics"]
---

## Summary

Understand how packets move and how to verify DNS, routing, and connectivity.

## Key ideas

- DNS resolves names to IPs; routing decides the path.
- Latency and packet loss point to different root causes.
- Always identify the failing layer before changing anything.

## Commands or steps

```bash
ip a
ip route
nslookup example.com
ping 8.8.8.8
traceroute example.com
curl -I https://example.com
```

## Pitfalls

- Testing only with `ping` (ICMP) and assuming HTTP will work.
- Forgetting that DNS caching can hide changes.
- Mixing up public and private IP ranges in documentation.

## References

- RFC 1918 (private IP ranges)
