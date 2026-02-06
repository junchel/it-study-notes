---
title: "XSS 기초"
description: "교차 사이트 스크립팅 공격의 원인과 방어 전략을 정리합니다."
pubDate: 2026-02-03
tags: ["security", "web", "frontend"]
---

## 요약

XSS는 사용자 입력을 신뢰할 때 발생합니다. 입력 검증과 출력 인코딩이 핵심 방어 수단입니다.

## 핵심 개념

- 반사형, 저장형, DOM 기반 XSS로 구분합니다.
- 입력 검증과 출력 인코딩은 역할이 다릅니다.
- Content Security Policy(CSP)로 피해 범위를 제한합니다.
- 쿠키 보호를 위해 HttpOnly를 사용합니다.

## 체크리스트

- 모든 사용자 입력을 검증합니다.
- HTML/JS 컨텍스트에 맞는 인코딩을 적용합니다.
- CSP를 적용하고 위반 리포트를 모니터링합니다.
- 템플릿 엔진의 자동 이스케이프를 유지합니다.

## 명령

```bash
rg -n "dangerouslySetInnerHTML|innerHTML" src -S
```
직접 HTML 삽입 지점을 찾아 위험 구간을 점검합니다.

```bash
rg -n "<script" public -S
```
인라인 스크립트 사용 여부를 확인합니다.

```bash
curl -I https://example.com | rg -i "content-security-policy"
```
CSP 헤더가 적용되어 있는지 확인합니다.

```bash
rg -n "sanitize|escape" src -S
```
입력/출력 인코딩 유틸이 사용되는지 확인합니다.

## 운영 팁

- 사용자 입력 처리 함수는 재사용 가능한 유틸로 표준화합니다.
- CSP는 보고 모드에서 충분히 검증 후 강제합니다.
- 보안 테스트에 XSS 시나리오를 포함합니다.

## 주의사항

- 일부 프론트 프레임워크에서도 부주의하면 XSS가 발생합니다.
- CSP가 있어도 모든 공격을 막는 것은 아닙니다.
- 서드파티 스크립트는 신뢰 경계를 낮춥니다.