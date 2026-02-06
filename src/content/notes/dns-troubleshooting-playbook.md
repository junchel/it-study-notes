---
title: "DNS 트러블슈팅 플레이북"
description: "DNS 실패와 느린 조회를 해결하기 위한 단계별 점검."
pubDate: 2026-02-03
tags: ["dns", "troubleshooting", "networking"]
---

## 요약

DNS 조회가 실패하거나 잘못된 결과를 반환하거나 느릴 때 사용하는 플레이북입니다.

## 핵심 개념

- DNS는 캐시와 TTL 영향으로 지연 반영됩니다.
- 권한 서버와 리졸버를 분리해 점검합니다.
- 네임서버 위임과 레코드 오류가 흔한 원인입니다.

## 빠른 점검

1. 로컬 리졸버 설정을 확인합니다.
2. 권한 있는 네임서버에 직접 질의합니다.
3. TTL과 캐시 동작을 확인합니다.

## 명령

### Linux

```bash
dig example.com
```
기본 리졸버로 도메인 응답을 확인합니다.

```bash
dig example.com +short
```
응답의 IP만 간단히 확인합니다.

```bash
dig @8.8.8.8 example.com
```
공용 DNS(8.8.8.8)로 직접 질의해 로컬 문제를 분리합니다.

```bash
dig +trace example.com
```
루트부터 권한 서버까지의 경로를 추적합니다.

### Windows

```bash
nslookup example.com
```
Windows에서 DNS 질의 결과를 확인합니다.

```bash
nslookup -type=ns example.com
```
권한 네임서버 정보를 확인합니다.

```bash
ipconfig /displaydns
```
로컬 DNS 캐시 내용을 확인합니다.

```bash
ipconfig /flushdns
```
로컬 DNS 캐시를 비웁니다.

## 일반 원인

- 누락되거나 잘못된 A/AAAA 레코드.
- 최근 변경 후 남아있는 캐시.
- 네임서버 위임 설정 오류.
- DNSSEC 이슈.

## 운영 팁

- 클라이언트 캐시와 리졸버를 먼저 확인합니다.
- 권한 서버와 중간 캐시 응답을 비교합니다.
- 다른 네트워크에서 재현해 범위를 확인합니다.
- 변경 직후에는 TTL을 고려해 전파 시간을 확보합니다.

## 주의사항

- DNS 전파는 수 시간이 걸릴 수 있습니다.
- 일부 리졸버는 실패(NXDOMAIN)도 TTL 동안 캐시합니다.
- 잘못된 CNAME 체인은 조회 실패를 유발합니다.
