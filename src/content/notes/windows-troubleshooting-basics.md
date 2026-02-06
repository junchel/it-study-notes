---
title: "Windows 트러블슈팅 기초"
description: "Windows 서버 문제를 빠르게 진단하기 위한 기본 점검 절차를 정리합니다."
pubDate: 2026-02-03
tags: ["windows", "operations", "diagnostics"]
---

## 요약

Windows 트러블슈팅은 이벤트 로그, 서비스 상태, 자원 사용량 점검이 핵심입니다. 기본 절차를 반복 가능하게 만듭니다.

## 핵심 개념

- 이벤트 로그가 1차 원인 분석의 출발점입니다.
- 서비스/프로세스 상태와 자원 지표를 동시에 봅니다.
- 네트워크 문제는 DNS, 라우팅, 방화벽을 순서대로 확인합니다.
- 변경 내역을 추적해야 재발을 막을 수 있습니다.

## 체크리스트

- System/Application 로그에서 오류를 확인합니다.
- CPU/메모리/디스크 사용률을 확인합니다.
- 서비스 상태와 재시작 여부를 확인합니다.
- 최근 배포나 설정 변경을 점검합니다.

## 명령

```powershell
Get-EventLog -LogName System -Newest 50
```
최근 시스템 이벤트를 확인합니다.

```powershell
Get-EventLog -LogName Application -Newest 50
```
애플리케이션 로그의 오류를 확인합니다.

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10
```
CPU를 가장 많이 사용하는 프로세스를 확인합니다.

```powershell
Get-Process | Sort-Object WS -Descending | Select-Object -First 10
```
메모리를 많이 사용하는 프로세스를 확인합니다.

```powershell
Get-NetTCPConnection | Sort-Object -Property State | Select-Object -First 10
```
네트워크 연결 상태를 확인합니다.

## 운영 팁

- 문제 발생 시점을 기준으로 로그를 필터링합니다.
- 성능 카운터 수집을 상시화합니다.
- 변경 사항은 티켓과 연결해 추적합니다.

## 주의사항

- 로그 순환으로 과거 기록이 사라질 수 있습니다.
- 일시적 스파이크는 원인 분석을 어렵게 합니다.
- 네트워크 이슈는 서버 외부 원인일 수도 있습니다.