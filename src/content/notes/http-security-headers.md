---
title: "HTTP 보안 헤더"
description: "표준 응답 헤더로 브라우저 보안을 강화합니다."
pubDate: 2026-02-03
tags: ["security", "web", "http"]
---

## 요약

보안 헤더는 클릭재킹, XSS, 콘텐츠 스니핑 같은 일반 공격을 줄여줍니다.

## 핵심 개념

- 보안 헤더는 브라우저 보호를 강화합니다.
- HSTS/Frame/CSP의 목적을 구분합니다.
- 잘못된 설정은 사이트 기능에 영향을 줍니다.

## 주요 헤더

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
```
보안 헤더 설정 예시를 나열합니다.

## 명령

```bash
curl -I https://example.com | rg -i "strict-transport-security|x-frame-options|content-security-policy"
```
보안 헤더 적용 여부를 확인합니다.

```bash
rg -n "Strict-Transport-Security|X-Frame-Options|Referrer-Policy" config/ -S
```
보안 헤더 설정 위치를 점검합니다.

```bash
curl -I https://example.com | rg -i "permissions-policy"
```
Permissions-Policy 적용 여부를 확인합니다.

## 운영 팁

- CSP는 report-only로 시작해 영향도를 확인합니다.
- HSTS는 선행 테스트 후 점진적으로 적용합니다.
- 보안 헤더 적용 여부를 정기적으로 점검합니다.
- 배포 전 staging에서 브라우저 콘솔 오류를 확인합니다.

## 주의사항

- 엄격한 CSP는 서드파티 스크립트를 깨뜨릴 수 있습니다.
- HSTS는 HTTPS가 안정된 뒤에만 활성화합니다.
- 헤더를 중복 설정하면 브라우저 동작이 예측 불가능해집니다.
