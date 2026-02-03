---
title: "SSH hardening basics"
description: "Reduce SSH risk with simple, high-impact hardening steps."
pubDate: 2026-02-03
tags: ["security", "ssh", "linux"]
---

## Summary

SSH is a common entry point for servers. This note lists practical hardening steps to reduce exposure.

## Quick wins

- Disable password auth and use keys.
- Restrict SSH to trusted IPs.
- Change the default port only if necessary (not a substitute for auth).

## Example config

```text
# /etc/ssh/sshd_config
PasswordAuthentication no
PermitRootLogin no
PubkeyAuthentication yes
AllowUsers deploy admin
```

## Commands

```bash
# test config and reload
sshd -t
systemctl reload sshd
```

## Pitfalls

- Always keep a backup session open when changing SSH settings.
- Lock yourself out? Use console access or cloud recovery tools.
