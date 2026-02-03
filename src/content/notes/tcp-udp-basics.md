---
title: "TCP vs UDP basics"
description: "Understand reliability, latency, and use cases for TCP and UDP."
pubDate: 2026-02-03
tags: ["networking", "performance"]
---

## Summary

TCP and UDP are the two main transport protocols used by most networked applications. This note highlights when to use each and how to troubleshoot.

## Key differences

- **TCP**: connection-oriented, reliable, ordered delivery.
- **UDP**: connectionless, best-effort, lower overhead.
- TCP retransmits lost packets; UDP does not.

## Common use cases

- TCP: HTTP/HTTPS, SSH, databases.
- UDP: DNS, streaming, real-time gaming, VoIP.

## Commands

```bash
# show listening TCP/UDP sockets
ss -tuln

# quick DNS test (UDP)
dig example.com
```

## Pitfalls

- Packet loss impacts TCP as latency increases due to retransmits.
- UDP apps must handle loss and ordering at the application layer.
