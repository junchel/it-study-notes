---
title: "SSO/MFA 기초"
description: "단일 로그인과 다중 인증의 기본 개념과 운영 포인트를 정리합니다."
pubDate: 2026-02-03
tags: ["security", "identity", "operations"]
---

## 요약

SSO는 인증을 통합하고 MFA는 보안을 강화합니다. 운영 시 정책, UX, 예외 처리를 균형 있게 설계해야 합니다.

## 핵심 개념

- SSO는 SAML/OIDC 같은 표준 프로토콜을 사용합니다.
- MFA는 추가 인증 요소로 계정 탈취 위험을 줄입니다.
- 조건부 접근 정책은 위치/기기/위험도를 반영합니다.
- 장애 시 대체 로그인 경로를 준비합니다.

## 체크리스트

- 계정 생성/해지 흐름을 IdP와 동기화합니다.
- MFA 강제 적용 대상과 예외를 문서화합니다.
- 인증 실패율과 사용자 문의를 모니터링합니다.
- 백업 코드/복구 절차를 제공합니다.

## 명령

```bash
curl -I https://idp.example.com/.well-known/openid-configuration
```
OIDC 메타데이터가 정상 제공되는지 확인합니다.

```bash
curl -s https://idp.example.com/.well-known/openid-configuration | jq '.issuer, .authorization_endpoint'
```
발급자와 엔드포인트 설정을 검증합니다.

```bash
openssl s_client -connect idp.example.com:443 -servername idp.example.com </dev/null 2>/dev/null | openssl x509 -noout -dates
```
IdP 인증서 만료 여부를 점검합니다.

```bash
rg -n "MFA|2FA" docs/policies -S
```
정책 문서에 MFA 기준이 명시되어 있는지 확인합니다.

## 운영 팁

- 임시 우회 정책은 기간과 승인을 명확히 제한합니다.
- IdP 장애 시 로그인 우회 경로를 런북에 포함합니다.
- 로그인을 감사 로그와 SIEM에 연동합니다.

## 주의사항

- 예외 계정이 누적되면 정책이 무력화됩니다.
- MFA 등록률이 낮으면 공격 표면이 커집니다.
- 프로토콜 설정 변경은 모든 서비스에 영향을 줍니다.