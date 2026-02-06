---
title: "HTTP 캐싱 헤더 기본"
description: "Cache-Control, ETag, 브라우저/CDN 캐싱 핵심."
pubDate: 2026-02-03
tags: ["http", "caching", "performance"]
---

## 요약

캐싱 헤더는 클라이언트와 CDN의 부하를 줄이고 응답 시간을 개선합니다.

## 핵심 개념

- `Cache-Control`은 TTL과 캐싱 동작을 제어합니다.
- `ETag`는 조건부 요청을 가능하게 합니다.
- 불변 자산은 긴 TTL로 제공합니다.
- `Vary`는 헤더에 따른 캐시 분리를 설정합니다.

## 명령

```bash
curl -I https://example.com/assets/app.css
```
정적 자산의 캐싱 헤더를 확인합니다.

```bash
curl -I -H "If-None-Match: \"etag-value\"" https://example.com/assets/app.css
```
ETag 기반 조건부 요청을 테스트합니다.

## 체크리스트

- 정적 자산에 Cache-Control 설정
- ETag 또는 Last-Modified 사용
- 개발자 도구에서 캐시 동작 확인

## 운영 팁

- 정적 자산과 동적 응답의 캐시 정책을 분리합니다.
- ETag와 Cache-Control을 함께 사용해 재검증 비용을 줄입니다.
- 개인화 응답에는 캐시를 비활성화합니다.
- `Vary: Accept-Encoding`을 설정해 압축 캐시를 분리합니다.

## 주의사항

- 동적/개인화 응답을 캐싱함.
- 버전 없는 자산에 긴 TTL을 설정함.
- 캐시 무효화 전략이 없음.
