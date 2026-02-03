---
title: "Automation scripting basics"
description: "Bash and PowerShell patterns for repeatable IT work."
pubDate: 2026-02-03
tags: ["automation", "scripting", "powershell", "bash"]
---

## Summary

Scripts reduce manual work and keep operations consistent.

## Key ideas

- Make scripts idempotent when possible.
- Log outputs and errors for troubleshooting.
- Keep secrets out of scripts.

## Commands or steps

```bash
#!/usr/bin/env bash
set -euo pipefail

echo "Hello, automation"
```

```powershell
$ErrorActionPreference = "Stop"
Write-Host "Hello, automation"
```

## Pitfalls

- Hardcoding credentials.
- Running destructive commands without checks.
- Missing error handling and logging.
