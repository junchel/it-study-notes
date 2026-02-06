---
title: "SSL 인증서 갱신"
description: "만료 전에 인증서를 갱신하고 장애를 예방하는 실무 절차를 정리합니다."
pubDate: 2026-02-03
tags: ["security", "web", "operations"]
---

## 요약

인증서 만료는 즉시 장애로 이어질 수 있습니다. 자동 갱신, 만료 모니터링, 롤백 경로가 필수입니다.

## 핵심 개념

- 인증서 체인(중간 인증서 포함)을 올바르게 구성해야 합니다.
- 자동 갱신은 정기 검증과 알림이 함께 필요합니다.
- 갱신 실패 시 임시 대체 인증서 전략을 준비합니다.

## 체크리스트

- 만료 30일 전부터 알림을 받도록 설정합니다.
- 스테이징에서 갱신 절차를 검증합니다.
- 인증서 교체 후 대상 서비스 재시작을 확인합니다.
- 이전 인증서를 안전하게 보관해 롤백 가능하게 합니다.

## 점검 및 갱신 명령

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null 2>/dev/null | openssl x509 -noout -dates
```
현재 인증서의 유효 기간을 확인합니다.

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null 2>/dev/null | openssl x509 -noout -issuer -subject
```
발급자와 주체 정보를 확인해 체인 이상 여부를 점검합니다.

```bash
sudo certbot renew --dry-run
```
Certbot 갱신 테스트로 자동 갱신 가능 여부를 확인합니다.

```bash
sudo certbot renew
```
실제 인증서를 갱신합니다.

```bash
sudo systemctl reload nginx
```
갱신된 인증서가 적용되도록 웹 서버를 리로드합니다.

## 운영 팁

- 다중 도메인은 SAN 인증서를 활용합니다.
- 갱신 직후 헬스 체크와 브라우저 테스트를 수행합니다.
- 인증서 키 권한을 최소화합니다.

## 주의사항

- 체인이 깨지면 일부 브라우저에서 오류가 발생합니다.
- 갱신 후 CDN 캐시 정책 때문에 반영 지연이 있을 수 있습니다.
- 자동 갱신 실패 알림이 없으면 만료 위험이 커집니다.