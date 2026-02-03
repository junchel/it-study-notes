---
title: "SSH keys and access basics"
description: "Generate and manage SSH keys safely for servers and Git."
pubDate: 2026-02-03
tags: ["ssh", "security", "workflow"]
---

## Summary

SSH keys provide secure authentication without passwords when configured correctly.

## Key ideas

- Keep private keys secret and protected with a passphrase.
- Use an SSH agent to avoid retyping passphrases.
- Configure per-host settings in `~/.ssh/config`.

## Commands or steps

```bash
ssh-keygen -t ed25519 -C "your@email"
ssh-add ~/.ssh/id_ed25519
ssh -i ~/.ssh/id_ed25519 user@host
chmod 600 ~/.ssh/id_ed25519
```

Example config:

```bash
Host my-server
  HostName 203.0.113.10
  User ubuntu
  IdentityFile ~/.ssh/id_ed25519
```

## Pitfalls

- Committing private keys to a repo.
- Incorrect file permissions on `~/.ssh`.
- Mixing multiple keys without a config file.
