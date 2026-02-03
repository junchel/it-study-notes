---
title: "UFW firewall basics"
description: "Use UFW to manage simple host firewall rules on Linux."
pubDate: 2026-02-03
tags: ["security", "linux", "firewall"]
---

## Summary

UFW (Uncomplicated Firewall) provides a simple interface to manage host-level firewall rules.

## Common commands

```bash
ufw status verbose
ufw enable
ufw disable

# allow/deny by port
ufw allow 22/tcp
ufw allow 80/tcp
ufw deny 23/tcp

# allow from specific IP
ufw allow from 203.0.113.10 to any port 22 proto tcp
```

## Pitfalls

- Always allow SSH before enabling UFW on remote servers.
- Be careful with default deny rules if you rely on health checks.
