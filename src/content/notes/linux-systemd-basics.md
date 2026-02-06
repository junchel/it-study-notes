---
title: "Linux systemd 기본"
description: "systemd로 서비스, 로그, 부팅 동작을 관리합니다."
pubDate: 2026-02-03
tags: ["linux", "operations", "services"]
---

## 요약

systemd는 대부분의 현대 Linux 배포판에서 사용하는 init 시스템입니다. 이 노트는 서비스, 로그, 부팅 동작을 위한 필수 명령을 보여줍니다.

## 핵심 개념

- **유닛**은 관리되는 리소스(서비스, 타이머, 소켓)합니다.
- `systemctl`은 유닛과 부팅 상태를 관리합니다.
- `journalctl`은 systemd가 관리하는 로그를 읽습니다.

## 명령

```bash
systemctl status nginx
```
Nginx 서비스의 현재 상태를 확인합니다.

```bash
systemctl start nginx
```
Nginx 서비스를 시작합니다.

```bash
systemctl stop nginx
```
Nginx 서비스를 중지합니다.

```bash
systemctl restart nginx
```
Nginx 서비스를 재시작합니다.

```bash
systemctl enable nginx
```
부팅 시 자동 시작되도록 설정합니다.

```bash
systemctl disable nginx
```
부팅 시 자동 시작을 해제합니다.

```bash
systemctl list-units --type=service
```
서비스 유닛 목록을 확인합니다.

```bash
journalctl -u nginx --since "1 hour ago"
```
최근 1시간 동안의 Nginx 로그를 확인합니다.

## 운영 팁

- Restart 정책으로 장애 복구를 자동화합니다.
- 서비스 의존성을 명시해 기동 순서를 보장합니다.
- journalctl로 로그 수집을 표준화합니다.

## 주의사항

- 재시작 루프는 유닛 파일이나 설정이 잘못되었을 때 흔합니다.
- `systemctl status`는 마지막 오류와 종료 코드를 보여줍니다.
- `journalctl -u`가 서비스 실패 원인을 가장 빠르게 보여줍니다.