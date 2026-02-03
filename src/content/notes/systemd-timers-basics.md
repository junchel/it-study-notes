---
title: "systemd timers basics"
description: "Schedule jobs with systemd timers instead of cron."
pubDate: 2026-02-03
tags: ["linux", "operations", "services"]
---

## Summary

systemd timers can replace cron with better logging and dependency management.

## Key ideas

- Timers trigger systemd service units.
- Timers support calendar and monotonic schedules.
- Logs are available via `journalctl`.

## Example

```ini
# /etc/systemd/system/backup.service
[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh

# /etc/systemd/system/backup.timer
[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

## Commands

```bash
systemctl enable --now backup.timer
systemctl list-timers
journalctl -u backup.service
```

## Pitfalls

- Forgetting to enable the timer means it never runs.
- Use `Persistent=true` to catch up missed runs after downtime.
