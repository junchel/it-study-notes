---
title: "SSH 하드닝 기초"
description: "SSH 접근을 안전하게 운영하기 위한 기본 보안 설정을 정리합니다."
pubDate: 2026-02-03
tags: ["security", "operations", "linux"]
---

## 요약

SSH 하드닝은 인증 방식 강화와 접근 통제가 핵심입니다. 기본 설정만으로도 공격 표면을 크게 줄일 수 있습니다.

## 핵심 개념

- 비밀번호 로그인보다 키 기반 인증이 안전합니다.
- 루트 로그인 비활성화는 기본입니다.
- 포트 변경은 보안의 핵심이 아니라 보조 수단입니다.
- 허용 사용자/그룹을 최소화해야 합니다.

## 체크리스트

- `PasswordAuthentication no`로 비밀번호 로그인을 차단합니다.
- `PermitRootLogin no`로 루트 접근을 금지합니다.
- MFA나 포트 노크 등 추가 통제를 검토합니다.
- 접속 시도는 감사 로그로 모니터링합니다.

## 설정 예시

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
```
설정 변경 전 백업을 만듭니다.

```bash
sudo rg -n "^PasswordAuthentication|^PermitRootLogin" /etc/ssh/sshd_config
```
현재 설정 값을 빠르게 확인합니다.

```bash
sudo sed -i '' 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
```
비밀번호 로그인을 비활성화합니다.

```bash
sudo sed -i '' 's/^#\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
```
루트 로그인을 차단합니다.

```bash
sudo sshd -t
```
설정 문법 오류가 없는지 테스트합니다.

```bash
sudo systemctl restart sshd
```
변경 사항을 적용합니다.

## 운영 팁

- 변경 후 기존 세션을 유지한 채 새 세션으로 검증합니다.
- 보안 그룹/방화벽에서 관리 IP만 허용합니다.
- 접속 실패 알림을 SIEM과 연동합니다.

## 주의사항

- 설정 오류로 접속이 끊길 수 있으니 백업과 콘솔 접근을 준비합니다.
- 키 파일 권한은 엄격하게 유지합니다.
- MFA 적용 시 복구 절차를 문서화합니다.