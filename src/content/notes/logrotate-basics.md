---
title: "Log rotation basics"
description: "Keep logs small and safe using logrotate."
pubDate: 2026-02-03
tags: ["operations", "logging", "linux"]
---

## Summary

Log rotation prevents disks from filling up and keeps logs manageable. This note covers the basics of logrotate.

## Key ideas

- Rotate by size or time (daily, weekly).
- Compress older logs.
- Keep a fixed number of rotated files.

## Common config

```text
/var/log/nginx/*.log {
  daily
  rotate 7
  compress
  missingok
  notifempty
  create 0640 www-data adm
  sharedscripts
  postrotate
    systemctl reload nginx
  endscript
}
```

## Commands

```bash
# test a config without applying
logrotate -d /etc/logrotate.conf

# force a run
logrotate -f /etc/logrotate.conf
```

## Pitfalls

- If logs keep growing, check the logrotate schedule or config path.
- Make sure the service can reopen log files after rotation.
