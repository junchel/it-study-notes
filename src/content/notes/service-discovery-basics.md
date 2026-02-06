---
title: "서비스 디스커버리 기초"
description: "동적 인프라에서 서비스 위치를 자동으로 찾는 기본 패턴을 정리합니다."
pubDate: 2026-02-03
tags: ["infrastructure", "network", "operations"]
---

## 요약

서비스 디스커버리는 인스턴스 변화가 잦은 환경에서 안정적으로 트래픽을 라우팅하기 위한 핵심 구성 요소입니다.

## 핵심 개념

- 클라이언트 사이드와 서버 사이드 디스커버리로 나뉩니다.
- DNS 기반 디스커버리는 단순하지만 TTL 제어가 중요합니다.
- 레지스트리(Consul, etcd)는 상태 기반 디스커버리를 제공합니다.
- 헬스 체크가 디스커버리 품질을 좌우합니다.

## 체크리스트

- 헬스 체크 기준과 타임아웃을 명확히 정의합니다.
- 장애 시 레지스트리에서 즉시 제거되도록 설정합니다.
- 서비스 이름 규칙을 팀 단위로 표준화합니다.
- DNS TTL과 캐시 정책을 일관되게 운영합니다.

## 명령

```bash
dig +short SRV _grpc._tcp.api.internal
```
SRV 레코드 기반 디스커버리가 정상인지 확인합니다.

```bash
nslookup api.internal
```
기본 DNS 이름 해석이 정상인지 확인합니다.

```bash
curl -s http://consul.service.consul:8500/v1/catalog/services | jq '. | keys'
```
Consul 레지스트리에 등록된 서비스 목록을 확인합니다.

```bash
curl -s http://consul.service.consul:8500/v1/health/service/api?passing=true | jq 'length'
```
헬스 체크를 통과한 인스턴스 수를 확인합니다.

## 운영 팁

- 디스커버리 실패 시 캐시된 엔드포인트로 우회하는 전략을 준비합니다.
- 네임스페이스별로 서비스 이름 충돌을 피합니다.
- 레지스트리 장애 대비를 위해 복제/쿼럼 구성을 유지합니다.

## 주의사항

- TTL이 너무 길면 장애 인스턴스가 오래 남습니다.
- 레지스트리 API를 직접 호출하는 클라이언트는 장애에 취약합니다.
- 인스턴스 자동 등록/해제 흐름을 배포 파이프라인과 연계합니다.