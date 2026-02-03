---
title: "Transaction isolation levels"
description: "Choose isolation levels to balance consistency and concurrency."
pubDate: 2026-02-03
tags: ["database", "sql", "consistency"]
---

## Summary

Isolation levels control how transactions see each other's changes.

## Key ideas

- Higher isolation reduces anomalies but can increase contention.
- Read committed prevents dirty reads but allows non-repeatable reads.
- Repeatable read prevents non-repeatable reads but can allow phantoms.
- Serializable provides the strongest guarantees but lowest concurrency.

## Guidelines

- Use the lowest isolation that meets correctness requirements.
- Identify which anomalies are acceptable for each workflow.
- Test critical paths under concurrent load.
- Document isolation assumptions in your data layer.

## Pitfalls

- Assuming default isolation is always safe.
- Using serializable everywhere and causing lock contention.
- Mixing isolation levels without understanding interactions.
