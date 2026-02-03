---
title: "Audit logging basics"
description: "Record security-relevant events to support investigations and compliance."
pubDate: 2026-02-03
tags: ["security", "logging", "operations"]
---

## Summary

Audit logs track sensitive actions so teams can detect abuse and investigate incidents.

## Key ideas

- Capture who did what, when, and from where.
- Immutable logs protect integrity.
- Separate audit logs from application logs.
- Retention and access controls are part of the design.

## Guidelines

- Log authentication events and privilege changes.
- Include request IDs and actor identifiers.
- Protect logs with write-once or append-only storage.
- Review audit logs regularly or alert on anomalies.

## Pitfalls

- Logging sensitive data like passwords or tokens.
- Missing coverage for admin and data export actions.
- Storing logs without access controls.
