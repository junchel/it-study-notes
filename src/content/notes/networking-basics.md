---
title: "트러블슈팅을 위한 네트워킹 기본"
description: "IP, DNS, 라우팅, 핵심 네트워크 점검 명령."
pubDate: 2026-02-03
tags: ["networking", "troubleshooting", "it-basics"]
---

## 요약

패킷이 이동하는 경로를 이해하고, DNS와 라우팅을 검증하는 것이 문제 해결의 출발점합니다.

## 핵심 개념

- DNS는 이름을 IP로 해석하고, 라우팅은 경로를 결정합니다.
- 지연과 패킷 손실은 원인이 다르므로 분리해서 봅니다.
- 실패 계층(L3/L4/L7)을 먼저 식별합니다.

## 명령

```bash
ip a
```
인터페이스와 IP 주소를 확인해 잘못된 IP 할당 여부를 점검합니다.

```bash
ip route
```
기본 게이트웨이와 라우팅 테이블을 확인합니다.

```bash
nslookup example.com
```
DNS 해석이 정상인지 확인합니다.

```bash
ping 8.8.8.8
```
L3 수준의 기본 연결성을 확인합니다.

```bash
traceroute example.com
```
패킷이 어떤 경로를 거치는지 추적합니다.

```bash
curl -I https://example.com
```
L7 수준에서 HTTP 응답과 헤더를 확인합니다.

```bash
ss -tulpn
```
로컬에서 리스닝 중인 포트를 확인합니다.

## 운영 팁

- IP 계획과 서브넷 구성을 문서화합니다.
- DNS와 라우팅 변경은 점진적으로 적용합니다.
- 지연과 패킷 손실을 지속적으로 측정합니다.

## 주의사항

- `ping`만으로 HTTP 동작을 보장할 수 없습니다.
- DNS 캐시가 변경 사항을 숨길 수 있습니다.
- 문서에서 공인/사설 IP 범위를 혼동하지 않습니다.