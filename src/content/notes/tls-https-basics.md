---
title: "TLS/HTTPS 기초"
description: "HTTPS의 보안 원리와 TLS 설정의 기본 포인트를 정리합니다."
pubDate: 2026-02-03
tags: ["security", "web", "network"]
---

## 요약

TLS는 전송 구간의 기밀성과 무결성을 보장합니다. 올바른 프로토콜 버전과 구성 설정이 핵심입니다.

## 핵심 개념

- TLS는 인증서 기반으로 서버 신뢰를 구축합니다.
- HTTP는 HTTPS로 리다이렉트해야 합니다.
- 최신 프로토콜(TLS 1.2/1.3)을 사용합니다.
- HSTS로 HTTPS 강제를 유지합니다.

## 체크리스트

- TLS 1.0/1.1을 비활성화합니다.
- 안전하지 않은 암호 스위트는 제거합니다.
- 인증서 체인을 정상적으로 구성합니다.
- 보안 헤더(HSTS 등)를 함께 설정합니다.

## 명령

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null 2>/dev/null | openssl x509 -noout -dates
```
인증서 유효 기간을 확인합니다.

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null 2>/dev/null | openssl x509 -noout -issuer -subject
```
발급자와 대상 도메인이 올바른지 확인합니다.

```bash
curl -I https://example.com | rg -i "strict-transport-security"
```
HSTS 헤더가 설정되어 있는지 확인합니다.

```bash
curl -I http://example.com
```
HTTP 요청이 HTTPS로 리다이렉트되는지 확인합니다.

## 운영 팁

- 인증서 갱신 자동화를 운영 표준으로 만듭니다.
- CDN을 사용하는 경우 TLS 종료 지점을 명확히 합니다.
- 클라이언트 호환성 테스트를 수행합니다.

## 주의사항

- 중간 인증서 누락은 일부 클라이언트에서 오류를 유발합니다.
- 과도한 보안 설정은 레거시 클라이언트와 충돌할 수 있습니다.
- TLS 설정 변경은 성능과 호환성에 영향을 줍니다.