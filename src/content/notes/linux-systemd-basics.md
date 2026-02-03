---
title: "Linux systemd basics"
description: "Manage services, logs, and startup behavior with systemd."
pubDate: 2026-02-03
tags: ["linux", "operations", "services"]
---

## Summary

systemd is the init system used by most modern Linux distributions. This note shows the essential commands for services, logs, and boot behavior.

## Key ideas

- A **unit** is a managed resource (service, timer, socket).
- `systemctl` manages units and boot states.
- `journalctl` reads logs managed by systemd.

## Commands

```bash
# service status, start, stop, restart
systemctl status nginx
systemctl start nginx
systemctl stop nginx
systemctl restart nginx

# enable/disable at boot
systemctl enable nginx
systemctl disable nginx

# list units
systemctl list-units --type=service

# view logs
journalctl -u nginx --since "1 hour ago"
```

## Pitfalls

- Restart loops often mean the unit file or config is invalid.
- `systemctl status` shows the last error and exit code.
- `journalctl -u` is the fastest way to see why a service failed.
