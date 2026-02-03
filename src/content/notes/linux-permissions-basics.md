---
title: "Linux file permissions basics"
description: "Users, groups, and permission bits for Linux files and directories."
pubDate: 2026-02-03
tags: ["linux", "security", "permissions"]
---

## Summary

Permissions control who can read, write, and execute files.

## Key ideas

- rwx bits apply to user, group, and others.
- Use groups to manage shared access.
- Prefer least privilege on system files.

## Commands or steps

```bash
ls -l
chmod 640 file.txt
chown user:group file.txt
chmod -R 750 /srv/app
```

## Pitfalls

- Setting permissions too open (777).
- Forgetting execute bit for directories.
- Misconfigured ownership on service folders.
