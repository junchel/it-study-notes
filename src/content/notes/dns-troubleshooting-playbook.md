---
title: "DNS troubleshooting playbook"
description: "Step-by-step checks for resolving DNS failures and slow lookups."
pubDate: 2026-02-03
tags: ["dns", "troubleshooting", "networking"]
---

## Summary

Use this playbook when DNS lookups fail, return the wrong result, or are slow.

## Quick checks

1. Confirm the local resolver settings.
2. Query the authoritative server directly.
3. Check TTLs and cache behavior.

## Commands

```bash
# Linux
dig example.com
dig @8.8.8.8 example.com
dig +trace example.com

# Windows
nslookup example.com
ipconfig /displaydns
ipconfig /flushdns
```

## Typical causes

- Missing or incorrect A/AAAA records.
- Stale cache after a recent change.
- Nameserver delegation misconfigured.
- DNSSEC issues.

## Pitfalls

- DNS propagation can take hours.
- Some resolvers cache failures (NXDOMAIN) for the TTL.
