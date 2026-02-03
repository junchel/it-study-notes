---
title: "Linux CLI essentials"
description: "Core commands and patterns for navigating and managing Linux systems."
pubDate: 2026-02-03
tags: ["linux", "cli", "workflow"]
---

## Summary

A compact reference for the most common Linux shell commands and workflows.

## Key ideas

- Combine small commands with pipes to transform data.
- Prefer `--help` and `man` for authoritative usage details.
- Use relative and absolute paths consistently.

## Commands or steps

```bash
pwd
ls -la
cd /var/log
cat file.txt
less file.txt
head -n 20 file.txt
tail -n 100 file.txt
find . -name "*.log"
grep -R "error" /var/log
chmod 644 file.txt
chown user:group file.txt
systemctl status ssh
journalctl -u ssh
```

## Pitfalls

- Running `rm -rf` on the wrong path.
- Confusing relative paths when using scripts.
- Editing files without a backup or version control.

## References

- `man ls`, `man find`, `man grep`, `man chmod`
