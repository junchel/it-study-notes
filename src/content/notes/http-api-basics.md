---
title: "HTTP 및 API 기본"
description: "메서드, 상태 코드, 헤더, curl 워크플로."
pubDate: 2026-02-03
tags: ["http", "api", "networking"]
---

## 요약

HTTP 메서드와 상태 코드를 이해하면 API 트러블슈팅이 빨라집니다.

## 핵심 개념

- GET은 읽기, POST는 생성, PUT은 대체, PATCH는 업데이트합니다.
- 2xx = 성공, 4xx = 클라이언트 오류, 5xx = 서버 오류.
- 헤더는 인증, 캐싱, 콘텐츠 타입을 설명합니다.
- 멱등성(idempotency) 여부에 따라 재시도 전략이 달라집니다.

## 명령

```bash
curl -I https://example.com
```
응답 헤더만 빠르게 확인합니다.

```bash
curl -v https://example.com
```
요청/응답 헤더와 연결 과정을 상세히 확인합니다.

```bash
curl -H "Accept: application/json" https://api.example.com/items
```
응답 포맷을 명시해 API 계약을 확인합니다.

```bash
curl -X POST https://api.example.com/items -H "Content-Type: application/json" -d '{"name":"test"}'
```
JSON 본문을 포함한 POST 요청을 전송합니다.

```bash
curl -s -o /dev/null -w "%{http_code}\\n" https://api.example.com/health
```
상태 코드만 간단히 확인합니다.

## 운영 팁

- 상태 코드와 오류 형식을 일관되게 정의합니다.
- 타임아웃과 재시도 정책을 명확히 문서화합니다.
- 버전 전략과 호환성 기준을 초기에 합의합니다.
- 요청/응답 샘플을 문서에 포함합니다.

## 주의사항

- 인증 헤더를 빠뜨림.
- 301/302 리다이렉트를 성공 응답으로 착각함.
- 잘못된 `Content-Type`을 전송함.
