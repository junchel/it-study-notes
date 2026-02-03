---
title: "Incident scenario: DNS outage"
description: "Mitigate and communicate during name resolution failures."
pubDate: 2026-02-03
tags: ["dns", "incident-response", "networking"]
---

## Summary

DNS outages break service discovery and user access.

## Steps

1. Confirm DNS resolution failures and scope.
2. Switch to secondary DNS provider if available.
3. Reduce TTL for critical records after stabilization.
4. Communicate impact and resolution steps.

## Pitfalls

- Single DNS provider without failover.
- Long TTLs delaying recovery.
- Missing runbooks for DNS changes.
