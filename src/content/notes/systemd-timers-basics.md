---
title: "systemd 타이머 기초"
description: "cron 대신 systemd 타이머로 주기 작업을 운영하는 방법을 정리합니다."
pubDate: 2026-02-03
tags: ["linux", "operations", "automation"]
---

## 요약

systemd 타이머는 서비스와 함께 주기 작업을 관리할 수 있는 표준 방식입니다. 로그와 상태 관리가 쉽습니다.

## 핵심 개념

- 타이머 유닛은 서비스 유닛과 연결됩니다.
- `OnCalendar`와 `OnBootSec`로 실행 주기를 정의합니다.
- `Persistent=true`는 누락된 실행을 보정합니다.
- 상태 확인과 로그 확인이 systemd 내에서 가능합니다.

## 체크리스트

- 타이머 이름과 서비스 이름을 일치시킵니다.
- 실행 실패 시 재시도 정책을 정의합니다.
- 로그 보존과 알림 기준을 정합니다.
- `systemd-analyze`로 타이머 로드 여부를 확인합니다.

## 설정 예시

```bash
sudo systemctl list-timers --all
```
등록된 타이머 목록과 다음 실행 시간을 확인합니다.

```bash
sudo systemctl cat backup.timer
```
타이머 유닛 파일 내용을 확인합니다.

```bash
sudo systemctl cat backup.service
```
연결된 서비스 유닛 내용을 확인합니다.

```bash
sudo systemctl enable --now backup.timer
```
타이머를 활성화하고 즉시 시작합니다.

```bash
sudo journalctl -u backup.service -n 50
```
타이머 실행 로그를 확인합니다.

## 운영 팁

- 타이머는 idempotent한 작업에 적합합니다.
- 실행 시간 변동을 줄이기 위해 자원 사용을 고려합니다.
- 실패 알림은 별도 모니터링과 연동합니다.

## 주의사항

- 단위 파일 수정 후 `daemon-reload`가 필요합니다.
- 중복 타이머는 중복 실행을 유발합니다.
- 작업 실패 시 원인 파악을 위해 로그 구조를 표준화합니다.