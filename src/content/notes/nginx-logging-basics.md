---
title: "Nginx logging basics"
description: "Understand access and error logs for Nginx."
pubDate: 2026-02-03
tags: ["web", "logging", "operations"]
---

## Summary

Nginx logs are the fastest way to diagnose traffic issues, errors, and latency.

## Default locations

- Access log: `/var/log/nginx/access.log`
- Error log: `/var/log/nginx/error.log`

## Useful commands

```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# top endpoints by count
awk '{print $7}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head
```

## Custom log format

```text
log_format main '$remote_addr - $request '
                '$status $body_bytes_sent '
                '$request_time';
```

## Pitfalls

- Large logs need rotation to avoid disk fill.
- Errors can be in upstream logs, not just Nginx.
