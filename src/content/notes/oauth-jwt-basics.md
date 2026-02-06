---
title: "OAuth와 JWT 기본"
description: "토큰, 스코프, 주요 OAuth 플로우를 이해합니다."
pubDate: 2026-02-03
tags: ["security", "auth", "oauth", "jwt"]
---

## 요약

OAuth는 권한 위임을 정의하고, JWT는 이를 담는 토큰 포맷을 정의합니다.

## 핵심 개념

- **OAuth**: 인가 플로우와 스코프를 정의합니다.
- **JWT**: 서명된 클레임 집합으로 토큰을 전달합니다.
- **수명/회전**: 액세스 토큰은 짧게, 리프레시는 회전합니다.

## 체크리스트

- 인가 플로우 식별 (Authorization Code, Client Credentials 등)
- JWT 서명 검증
- 만료 시간(exp) 검증
- 스코프 최소화

## 명령

```bash
jq -R 'split(".") | .[1] | @base64d | fromjson' <<< "$JWT"
```
JWT 페이로드를 디코딩해 클레임을 확인합니다(서명 검증은 별도 필요).

```bash
openssl dgst -sha256 -verify pub.pem -signature sig.bin data.txt
```
공개키로 서명을 검증하는 예시를 제공합니다(라이브러리 사용 권장).

## 운영 팁

- 공개 클라이언트에는 PKCE를 적용합니다.
- 스코프와 권한을 최소화합니다.
- 토큰 저장 위치와 접근 권한을 제한합니다.

## 주의사항

- 액세스 토큰을 로컬 스토리지 같은 취약한 저장소에 보관하지 않습니다.
- 서명 검증 없이 페이로드를 신뢰하면 보안 사고로 이어집니다.
- 과도한 스코프는 권한 남용을 유발합니다.