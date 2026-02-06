---
title: "GitHub Pages 커스텀 도메인 DNS 설정"
description: "jjchwordpress.cloud를 GitHub Pages로 연결하고 HTTPS를 확인합니다."
pubDate: 2026-02-03
tags: ["dns", "github-pages", "deployment", "domains"]
---

## 요약

`jjchwordpress.cloud`를 GitHub Pages에 연결하고 HTTPS를 검증하는 DNS 절차를 정리합니다.

## 핵심 개념

- 도메인 연결은 DNS 레코드 설정이 핵심입니다.
- CNAME/A 레코드와 TTL을 정확히 관리합니다.
- 인증/검증 레코드가 필요할 수 있습니다.
- HTTPS 인증서 발급까지 완료되어야 정상 접속됩니다.

## 절차

1. `public/CNAME`을 `jjchwordpress.cloud`로 유지합니다(이미 설정됨).
2. 도메인 등록기관의 DNS 설정에서 apex 설정을 선택합니다.
   - 등록기관이 `ALIAS` 또는 `ANAME`을 지원하면 apex를 GitHub Pages 대상으로 연결합니다.
   - 지원하지 않으면 GitHub 문서의 최신 IP로 `A` 레코드를 사용합니다.
3. (선택) `www` 서브도메인을 GitHub Pages 대상으로 `CNAME`으로 연결합니다.
4. 레코드를 저장하고 DNS 전파를 기다립니다.

## 검증

- GitHub Pages 설정에서 DNS 검증 상태를 확인합니다.
- `https://jjchwordpress.cloud` 접속 후 HTTPS 활성화를 확인합니다.
- DNS 응답을 확인합니다:

```bash
nslookup jjchwordpress.cloud
```
apex 도메인의 DNS 응답을 확인합니다.

```bash
nslookup www.jjchwordpress.cloud
```
www 서브도메인의 DNS 응답을 확인합니다.

```bash
dig jjchwordpress.cloud +short
```
레코드 전파 결과를 간단히 확인합니다.

```bash
curl -I https://jjchwordpress.cloud
```
HTTPS 응답과 리다이렉션 상태를 확인합니다.

## 운영 팁

- 전환 전 TTL을 낮춰 전파 시간을 줄입니다.
- CNAME 또는 ALIAS 설정을 확인하고 충돌을 방지합니다.
- HTTPS 인증서 발급을 사전에 완료합니다.
- `www` 사용 여부에 따라 리다이렉트 정책을 통일합니다.

## 주의사항

- GitHub Pages IP는 변경될 수 있으니 공식 문서의 최신 IP를 사용합니다.
- DNS 전파에는 시간이 걸리므로 재시도 전에 기다립니다.
- HTTPS가 활성화되기 전까지 브라우저 경고가 발생할 수 있습니다.

## 참고

- GitHub Pages 커스텀 도메인 문서
