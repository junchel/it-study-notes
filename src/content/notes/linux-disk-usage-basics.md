---
title: "Linux disk usage basics"
description: "Find large files and check filesystem usage quickly."
pubDate: 2026-02-03
tags: ["linux", "operations", "troubleshooting"]
---

## Summary

Disk issues are common in production. This note shows quick commands to identify usage hotspots.

## Commands

```bash
# filesystem usage
df -h

# directory sizes
du -h --max-depth=1 /var

# find large files (over 1GB)
find / -type f -size +1G -print
```

## Tips

- Check `/var/log` and `/tmp` first.
- Databases often use `/var/lib`.

## Pitfalls

- `df` can show free space while a deleted file is still held open.
- Inodes can run out before disk space.
