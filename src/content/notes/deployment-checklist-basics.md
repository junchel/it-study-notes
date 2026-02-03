---
title: "Deployment checklist basics"
description: "Reduce release risk with a simple, repeatable checklist."
pubDate: 2026-02-03
tags: ["deployment", "operations", "reliability"]
---

## Summary

A deployment checklist prevents avoidable outages and ensures releases are repeatable.

## Key ideas

- Validate preconditions before shipping.
- Verify rollback plans and monitoring.
- Communicate changes to stakeholders.
- Record what changed for later review.

## Guidelines

- Confirm build and tests are green.
- Verify config and secrets are up to date.
- Ensure dashboards and alerts cover the new paths.
- Run a post-deploy smoke test.

## Pitfalls

- Skipping database migration checks.
- Deploying without monitoring coverage.
- No rollback plan when issues appear.
