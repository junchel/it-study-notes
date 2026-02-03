---
title: "SLI/SLO basics"
description: "Define service reliability targets using SLI and SLO."
pubDate: 2026-02-03
tags: ["sre", "reliability", "monitoring"]
---

## Summary

SLIs and SLOs help teams define measurable reliability goals and make tradeoffs between speed and stability.

## Key ideas

- **SLI (Service Level Indicator)**: a metric that reflects user experience.
- **SLO (Service Level Objective)**: the target for that metric.
- **Error budget**: allowed amount of failure within the SLO.

## Examples

- Availability: `99.9%` successful requests over 30 days.
- Latency: `p95 < 300ms` for read requests.
- Freshness: data lag less than 5 minutes.

## How to start

1. Pick the most user-visible workflow.
2. Choose a single metric to represent it.
3. Set a target that matches current reality.
4. Review monthly and adjust.

## Pitfalls

- Measuring what is easy instead of what users feel.
- Choosing a target far from current performance.
