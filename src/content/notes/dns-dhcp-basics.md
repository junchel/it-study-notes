---
title: "DNS와 DHCP 기본"
description: "이름 해석과 주소 할당을 위한 핵심 개념 및 점검 절차."
pubDate: 2026-02-03
tags: ["networking", "dns", "dhcp", "it-basics"]
---

## 요약

DNS는 이름을 IP로 해석하고, DHCP는 클라이언트에 IP 설정을 할당합니다. 두 시스템 모두 안정적인 네트워킹에 필수합니다.

## 핵심 개념

- DNS는 캐시와 TTL을 사용하는 분산 데이터베이스입니다.
- DHCP는 주소를 임대하고 게이트웨이/DNS 설정을 제공합니다.
- 서버를 파기 전에 클라이언트 설정을 먼저 확인합니다.
- DNS는 권한 서버와 리졸버가 분리되어 동작합니다.

## 명령

```bash
ipconfig /all
```
Windows 네트워크 구성과 DNS 서버 정보를 확인합니다.

```bash
nslookup example.com
```
도메인의 DNS 응답을 조회합니다.

```bash
ipconfig /displaydns
```
로컬 DNS 캐시 내용을 확인합니다.

```bash
ipconfig /flushdns
```
로컬 DNS 캐시를 비웁니다.

```bash
ipconfig /release
```
DHCP 임대를 해제합니다.

```bash
ipconfig /renew
```
DHCP 임대를 갱신합니다.

```bash
nslookup -type=soa example.com
```
권한 서버와 SOA 정보를 확인합니다.

## 운영 팁

- DNS 변경 전 TTL을 낮춰 전파 지연을 줄입니다.
- DHCP 예약과 스코프 범위를 문서화해 충돌을 예방합니다.
- 장애 시에는 권한 서버와 리졸버 응답을 분리해 확인합니다.
- 중요한 도메인은 외부 리졸버로도 확인합니다.

## 주의사항

- 오래된 DNS 캐시가 변경을 가립니다.
- 하나의 네트워크에 DHCP 서버가 여러 개면 충돌합니다.
- 잘못된 검색 도메인이 예상치 못한 해석을 유발합니다.
