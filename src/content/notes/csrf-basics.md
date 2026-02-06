---
title: "CSRF 기본"
description: "상태 변경 요청을 사이트 간 요청 위조로부터 보호합니다."
pubDate: 2026-02-03
tags: ["security", "web", "auth"]
---

## 요약

CSRF 공격은 로그인된 브라우저를 속여 원치 않는 동작을 수행하게 합니다.

## 핵심 개념

- 쿠키는 브라우저에서 자동으로 전송합니다.
- CSRF 토큰은 요청이 사이트에서 왔음을 증명합니다.
- SameSite 쿠키는 교차 사이트 쿠키 전송을 줄입니다.
- Origin/Referer 검사는 추가 방어층입니다.
- 토큰은 사용자 세션과 묶어야 합니다.

## 명령

```bash
rg -n "csrf" src -S
```
CSRF 방어 로직을 확인합니다.

```bash
curl -I https://example.com | rg -i "set-cookie"
```
SameSite 쿠키 설정을 확인합니다.

```bash
curl -i -X POST https://example.com/api/profile -H "Origin: https://example.com"
```
Origin 헤더가 있는 요청이 정상 처리되는지 확인합니다.

## 운영 팁

- 상태 변경 엔드포인트에 CSRF 토큰을 요구합니다.
- `SameSite=Lax` 또는 `SameSite=Strict`를 설정합니다.
- 가능하면 `Origin` 또는 `Referer` 헤더를 검증합니다.
- 변경 작업은 `POST`, `PUT`, `DELETE`를 사용합니다.
- 토큰은 요청마다 재사용 가능 여부를 정책으로 정의합니다.

## 주의사항

- JSON 엔드포인트에 CSRF 보호를 끄면 위험합니다.
- 명확한 이유 없이 `SameSite=None`을 사용하면 노출이 증가합니다.
- 세션 간 토큰을 재사용하고 회전하지 않으면 탈취 위험이 커집니다.
