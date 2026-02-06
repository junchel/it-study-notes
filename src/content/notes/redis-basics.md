---
title: "Redis 기본"
description: "캐싱, 큐, 빠른 데이터 접근을 위한 Redis 활용."
pubDate: 2026-02-03
tags: ["database", "caching", "performance"]
---

## 요약

Redis는 메모리 기반 데이터 저장소로 캐시, 큐, 공유 상태에 자주 사용합니다.

## 핵심 개념

- **캐시**: DB 부하를 줄이고 지연을 낮춥니다.
- **카운터**: 속도 제한, 동시성 제어에 유용합니다.
- **Pub/Sub**: 간단한 이벤트 전달에 사용합니다.

## 명령

```bash
redis-cli PING
```
Redis가 응답하는지 확인합니다(PONG 기대).

```bash
redis-cli SET key value
```
문자열 키-값을 저장합니다.

```bash
redis-cli GET key
```
키 값을 조회합니다.

```bash
redis-cli TTL key
```
키의 남은 TTL(초)을 확인합니다.

```bash
redis-cli INFO memory | head
```
메모리 사용량 요약을 확인합니다.

## 운영 팁

- maxmemory 정책과 메모리 사용량을 모니터링합니다.
- 데이터 유실 허용 여부에 따라 RDB/AOF를 선택합니다.
- 핫키를 피하도록 키 설계를 점검합니다.

## 주의사항

- 메모리 압박은 예기치 않은 키 삭제(eviction)를 유발합니다.
- 값이 너무 크면 직렬화/네트워크 비용이 증가합니다.
- TTL을 설정하지 않으면 캐시가 영구적으로 남을 수 있습니다.