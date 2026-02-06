---
title: "콘텐츠 보안 정책(CSP) 기본"
description: "CSP로 XSS 위험을 줄이고 브라우저 로드를 통제합니다."
pubDate: 2026-02-03
tags: ["security", "web", "frontend"]
---

## 요약

CSP는 브라우저가 로드할 수 있는 스크립트, 스타일, 리소스를 정의해 XSS 영향을 줄입니다.

## 핵심 개념

- `default-src`는 모든 리소스 유형의 기준을 설정합니다.
- `script-src`는 실행 가능한 스크립트를 제어하며 가장 중요합니다.
- nonce 또는 hash로 안전한 인라인 스크립트를 허용합니다.
- `report-uri` 또는 `report-to`로 위반을 수집합니다.
- `report-only`로 영향 범위를 측정한 뒤 본 적용합니다.

## 명령

```bash
curl -I https://example.com | rg -i "content-security-policy"
```
응답에 CSP 헤더가 있는지 확인합니다.

```bash
rg -n "Content-Security-Policy|script-src|default-src" config/ -S
```
CSP 설정 위치와 정책 항목을 점검합니다.

## 예시 정책

```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; object-src 'none'; base-uri 'self'
```
기본적으로 자체 도메인만 허용하고 위험한 리소스를 차단합니다.

## 운영 팁

- 엄격한 정책으로 시작해 필요할 때만 완화합니다.
- 필요한 인라인 스크립트에는 nonce를 사용합니다.
- 가능하면 `unsafe-inline`, `unsafe-eval`을 금지합니다.
- CSP 리포트를 모니터링하고 위반을 수정합니다.
- 서드파티 도메인은 최소화하고 목록을 정기 점검합니다.

## 주의사항

- 과도하게 허용적인 정책은 보호 효과가 없습니다.
- 새 자산 추가 시 CSP 업데이트를 잊으면 리소스 로딩이 깨집니다.
- 출력 인코딩 없이 CSP만 의존하면 XSS가 남습니다.
