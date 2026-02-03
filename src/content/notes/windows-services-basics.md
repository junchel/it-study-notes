---
title: "Windows services basics"
description: "Start, stop, and troubleshoot Windows services with built-in tools."
pubDate: 2026-02-03
tags: ["windows", "operations", "services"]
---

## Summary

Windows services run background workloads such as web servers, database agents, and monitoring tools. This note covers the fastest ways to manage and troubleshoot them.

## Key ideas

- Services can be managed via Services MMC, `sc.exe`, or PowerShell.
- Startup types control when a service runs (Automatic, Manual, Disabled).
- Event Viewer is the first place to check failures.

## Commands (PowerShell)

```powershell
# list services
Get-Service | Sort-Object Status, DisplayName

# start/stop/restart
Start-Service -Name "Spooler"
Stop-Service -Name "Spooler"
Restart-Service -Name "Spooler"

# view service details
Get-Service -Name "Spooler" | Select-Object *
```

## Troubleshooting

- Check **Event Viewer → Windows Logs → System** for service failures.
- Use `sc query` to check the latest status and exit code.

## Pitfalls

- Services can be set to run under specific accounts; password changes can break them.
- Dependencies may prevent a service from starting.
