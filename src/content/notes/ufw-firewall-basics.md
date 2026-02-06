---
title: "UFW 방화벽 기초"
description: "Ubuntu에서 UFW로 기본 방화벽 정책을 구성하는 방법을 정리합니다."
pubDate: 2026-02-03
tags: ["security", "linux", "network"]
---

## 요약

UFW는 간단한 명령으로 방화벽 규칙을 관리할 수 있습니다. 기본 정책과 허용 포트 관리가 핵심입니다.

## 핵심 개념

- 기본 정책은 `deny incoming`, `allow outgoing`이 일반적입니다.
- SSH 접근은 차단되지 않도록 주의합니다.
- 규칙은 순서와 범위를 고려합니다.
- 로그는 필요 시에만 활성화합니다.

## 체크리스트

- SSH 포트를 허용한 뒤 UFW를 활성화합니다.
- 애플리케이션 포트만 제한적으로 오픈합니다.
- 변경 전후 규칙을 검증합니다.
- 인바운드 정책을 최소화합니다.

## 명령

```bash
sudo ufw status verbose
```
현재 정책과 규칙을 확인합니다.

```bash
sudo ufw default deny incoming
```
인바운드 기본 정책을 차단으로 설정합니다.

```bash
sudo ufw default allow outgoing
```
아웃바운드 기본 정책을 허용으로 설정합니다.

```bash
sudo ufw allow 22/tcp
```
SSH 포트를 허용해 원격 접속을 보장합니다.

```bash
sudo ufw enable
```
방화벽을 활성화합니다.

## 운영 팁

- 운영 환경은 IP 범위를 제한해 접근을 최소화합니다.
- 변경 후 즉시 접속 테스트를 진행합니다.
- 규칙 변경 내역을 기록합니다.

## 주의사항

- 규칙을 잘못 설정하면 원격 접속이 끊길 수 있습니다.
- 서비스 포트 변경 시 UFW도 함께 갱신합니다.
- 로그 활성화는 디스크 사용량을 증가시킬 수 있습니다.