---
title: "Windows troubleshooting basics"
description: "Core tools and commands for diagnosing Windows issues."
pubDate: 2026-02-03
tags: ["windows", "troubleshooting", "it-basics"]
---

## Summary

Use built-in tools to inspect processes, services, logs, and network status before changing anything.

## Key ideas

- Check services and event logs first.
- Confirm network and DNS before app-level debugging.
- Capture symptoms and time windows for log searches.

## Commands or steps

```powershell
Get-Process
Get-Service
Get-EventLog -LogName System -Newest 50
Get-WinEvent -LogName Application -MaxEvents 50
ipconfig /all
Test-NetConnection -ComputerName 8.8.8.8 -Port 53
netstat -ano
Get-Volume
sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth
```

## Pitfalls

- Running repair commands without a restore point or backup.
- Forgetting to run admin shells for system-level commands.
- Searching logs without a time filter.

## References

- Windows Event Viewer
- Microsoft docs for SFC and DISM
