---
title: "Linux cron basics"
description: "Schedule recurring tasks using cron and crontab."
pubDate: 2026-02-03
tags: ["linux", "operations", "automation"]
---

## Summary

Cron runs scheduled commands at specific times. It is simple and reliable for recurring jobs.

## Cron format

```
* * * * * command
| | | | |
| | | | └─ day of week (0-6)
| | | └── month (1-12)
| | └─── day of month (1-31)
| └──── hour (0-23)
└───── minute (0-59)
```

## Common commands

```bash
# edit current user's crontab
crontab -e

# list current user's jobs
crontab -l

# system-wide cron files
ls /etc/cron.d
```

## Pitfalls

- Cron runs with a minimal environment; set PATH explicitly.
- Long-running jobs can overlap without lock files.
