---
title: "HTTP 상태 코드 빠른 가이드"
description: "자주 쓰는 상태 코드와 실무에서의 의미."
pubDate: 2026-02-03
tags: ["http", "web", "api"]
---

## 요약

웹 서비스를 만들거나 디버깅할 때 자주 마주치는 HTTP 상태 코드를 빠르게 정리합니다.

## 핵심 개념

- 2xx/4xx/5xx 의미를 명확히 구분합니다.
- 상태 코드는 클라이언트 재시도와 오류 처리에 영향을 줍니다.
- 오류 응답에도 일관된 본문을 제공합니다.

## 2xx 성공

- **200 OK**: 요청 성공, 응답 반환.
- **201 Created**: 리소스 생성(POST에서 흔함).
- **204 No Content**: 본문 없는 성공.

## 3xx 리다이렉트

- **301 Moved Permanently**: 정규 URL 변경.
- **302 Found**: 임시 리다이렉트.
- **304 Not Modified**: 캐시가 유효함.

## 4xx 클라이언트 오류

- **400 Bad Request**: 요청 또는 페이로드가 잘못됨.
- **401 Unauthorized**: 인증 누락 또는 실패.
- **403 Forbidden**: 인증되었지만 권한 없음.
- **404 Not Found**: 리소스가 존재하지 않음.
- **429 Too Many Requests**: 속도 제한.
- **422 Unprocessable Entity**: 유효성 검증 실패.

## 5xx 서버 오류

- **500 Internal Server Error**: 예기치 않은 백엔드 실패.
- **502 Bad Gateway**: 프록시 오류 또는 업스트림 실패.
- **503 Service Unavailable**: 과부하 또는 다운.
- **504 Gateway Timeout**: 업스트림 타임아웃.

## 명령

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://example.com/health
```
응답 상태 코드를 빠르게 확인합니다.

```bash
rg -n "status" src -S
```
코드에서 상태 코드 반환 지점을 확인합니다.

```bash
curl -I https://example.com
```
리다이렉트와 헤더 기반 상태 코드를 확인합니다.

## 운영 팁

- 상태 코드는 기능별로 일관되게 사용합니다.
- 오류를 200으로 반환하지 않도록 정책을 명확히 합니다.
- 5xx 증가는 즉시 알림 대상으로 설정합니다.
- 429는 Retry-After 헤더로 재시도 시간을 안내합니다.

## 주의사항

- 인증 시나리오에서 401과 403을 정확히 사용합니다.
- 502/504는 대개 업스트림이나 프록시 문제이지 클라이언트 버그가 아닙니다.
