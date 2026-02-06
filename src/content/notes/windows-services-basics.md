---
title: "Windows 서비스 기초"
description: "Windows 서비스의 상태 확인과 운영 기본 절차를 정리합니다."
pubDate: 2026-02-03
tags: ["windows", "operations", "infrastructure"]
---

## 요약

Windows 서비스는 서버의 핵심 백그라운드 작업 단위입니다. 상태 모니터링과 자동 재시작 설정이 중요합니다.

## 핵심 개념

- 서비스는 자동/수동/사용 안 함으로 시작 유형을 가집니다.
- 종속성 서비스가 종료되면 연쇄 장애가 발생합니다.
- 이벤트 로그를 통한 원인 추적이 필수입니다.
- 복구 옵션으로 자동 재시작을 설정합니다.

## 체크리스트

- 핵심 서비스의 시작 유형과 복구 옵션을 확인합니다.
- 서비스 계정 권한을 최소화합니다.
- 이벤트 로그에서 오류 패턴을 확인합니다.
- 배포 후 서비스 재시작 순서를 문서화합니다.

## 명령

```powershell
Get-Service | Sort-Object Status, DisplayName
```
서비스 목록과 상태를 확인합니다.

```powershell
Get-Service -Name "W32Time"
```
특정 서비스의 상태를 확인합니다.

```powershell
Set-Service -Name "W32Time" -StartupType Automatic
```
서비스 시작 유형을 자동으로 변경합니다.

```powershell
Restart-Service -Name "W32Time"
```
서비스를 재시작해 변경 사항을 적용합니다.

```powershell
Get-EventLog -LogName System -Newest 20 | Where-Object {$_.Source -like "Service Control Manager"}
```
서비스 관련 이벤트를 빠르게 확인합니다.

## 운영 팁

- 자동 복구 횟수와 간격을 설정해 일시적 장애에 대응합니다.
- 서비스 계정 비밀번호 변경 정책을 수립합니다.
- 중요 서비스는 별도 모니터링과 알림을 연결합니다.

## 주의사항

- 서비스 강제 종료는 데이터 손상 위험이 있습니다.
- 종속성 서비스 변경 시 영향을 반드시 검토합니다.
- 로그 저장 공간이 부족하면 장애 분석이 어려워집니다.