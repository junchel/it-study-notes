---
title: "DNS and DHCP basics"
description: "Core concepts and troubleshooting steps for name resolution and address assignment."
pubDate: 2026-02-03
tags: ["networking", "dns", "dhcp", "it-basics"]
---

## Summary

DNS resolves names to IPs; DHCP assigns IP configuration to clients. Both are critical for reliable networking.

## Key ideas

- DNS is a distributed database with caching and TTL.
- DHCP leases addresses and provides gateway/DNS settings.
- Always verify client config before digging into servers.

## Commands or steps

```bash
ipconfig /all
nslookup example.com
ipconfig /flushdns
ipconfig /release
ipconfig /renew
```

## Pitfalls

- Stale DNS cache hides changes.
- Multiple DHCP servers on one network cause conflicts.
- Incorrect search domains cause unexpected name resolution.
