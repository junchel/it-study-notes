---
title: "자동화 스크립팅 기본"
description: "반복 가능한 IT 작업을 위한 Bash 및 PowerShell 패턴."
pubDate: 2026-02-03
tags: ["automation", "scripting", "powershell", "bash"]
---

## 요약

스크립트는 수작업을 줄이고 운영을 일관되게 만듭니다.

## 핵심 개념

- 가능하면 스크립트를 멱등하게 작성합니다.
- 출력과 오류를 로그로 남겨 트러블슈팅에 활용합니다.
- 시크릿을 스크립트에 직접 넣지 않습니다.
- 입력 검증과 종료 코드를 표준화합니다.
- 동시 실행을 고려해 락이나 중복 실행 방지를 추가합니다.
- 실행 환경을 명시해 재현성을 확보합니다.

## 명령

```bash
set -euo pipefail; echo "안녕하세요, 자동화"
```
오류 시 중단하도록 설정하고 메시지를 출력합니다.

```bash
bash -n scripts/backup.sh
```
스크립트 문법 오류를 사전에 점검합니다.

```powershell
$ErrorActionPreference = "Stop"; Write-Host "안녕하세요, 자동화"
```
오류 처리 정책을 설정하고 메시지를 출력합니다.

```powershell
Get-Content .\\scripts\\backup.ps1 -ErrorAction Stop
```
스크립트 파일이 정상적으로 읽히는지 확인합니다.

## 예시 스크립트

```bash
#!/usr/bin/env bash
set -euo pipefail
lockfile="/tmp/backup.lock"
test -e "$lockfile" && exit 1
trap 'rm -f "$lockfile"' EXIT
touch "$lockfile"
```
중복 실행을 방지하기 위한 최소한의 안전 장치를 보여줍니다.

## 운영 팁

- 스크립트는 멱등성을 보장하도록 설계합니다.
- 로그와 종료 코드를 표준화합니다.
- 드라이런 옵션을 제공해 안전성을 높입니다.
- 파괴적 동작은 `--force` 같은 명시적 플래그로 제한합니다.
- 실행 전후의 상태 변화를 로그로 남깁니다.

## 주의사항

- 자격 증명을 하드코딩하면 보안 사고로 이어집니다.
- 확인 없이 파괴적 명령을 실행하면 복구가 어렵습니다.
- 오류 처리와 로깅이 없으면 문제 재현이 불가능합니다.
