---
title: "Password storage basics"
description: "Store passwords safely with hashing and proper parameters."
pubDate: 2026-02-03
tags: ["security", "auth", "backend"]
---

## Summary

Passwords must be stored as strong hashes to resist offline attacks.

## Key ideas

- Use adaptive hashing algorithms like Argon2, bcrypt, or scrypt.
- Add a unique salt per password.
- Tune parameters to be slow enough to deter brute force.
- Never store plaintext or reversible passwords.

## Guidelines

- Prefer Argon2id when available and well supported.
- Store algorithm parameters with the hash for upgrades.
- Enforce strong password policies and rate limits.
- Rotate hashes when parameters are updated.

## Pitfalls

- Using fast hashes like SHA-256 for passwords.
- Reusing salts or using a global salt.
- Logging or exposing passwords in error reports.
