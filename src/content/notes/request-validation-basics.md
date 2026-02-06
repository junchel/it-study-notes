---
title: "요청 검증 기본"
description: "입력을 초기에 검증해 버그와 보안 문제를 줄입니다."
pubDate: 2026-02-03
tags: ["api", "security", "backend"]
---

## 요약

입력 검증은 잘못된 데이터와 위험한 요청이 비즈니스 로직에 들어오기 전에 차단합니다.

## 핵심 개념

- **경계 검증**: 요청이 들어오는 가장 바깥에서 검증합니다.
- **스키마 기반**: 타입/길이/형식을 명시적으로 정의합니다.
- **정규화**: 동일 입력이 동일한 형태로 처리되도록 통일합니다.

## 명령

```bash
curl -X POST https://api.example.com/items -H "Content-Type: application/json" -d '{"name":""}'
```
빈 문자열 입력을 보내 서버가 적절히 400을 반환하는지 확인합니다.

```bash
curl -X POST https://api.example.com/items -H "Content-Type: application/json" -d '{"name":"test","extra":"x"}'
```
예상치 못한 필드를 보내 필드 차단 정책이 동작하는지 확인합니다.

```bash
curl -X POST https://api.example.com/items -H "Content-Type: application/json" -d '{"name":"a"}' -i
```
응답 헤더/바디에서 필드 단위 오류 메시지를 확인합니다.

## 운영 팁

- 수용 가능한 길이/패턴을 명확히 정의합니다.
- 에러 메시지는 필드 단위로 구체적으로 반환합니다.
- 바디뿐 아니라 쿼리/헤더도 검증합니다.

## 주의사항

- 클라이언트 검증만 믿으면 우회가 가능합니다.
- 알 수 없는 필드를 허용하면 보안 구멍이 생깁니다.
- 엔드포인트마다 검증 기준이 다르면 유지보수가 어려워집니다.
