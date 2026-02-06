---
title: "인시던트 시나리오: DB 커넥션 풀 고갈"
description: "풀 포화로 발생한 DB 커넥션 타임아웃에 대응합니다."
pubDate: 2026-02-03
tags: ["database", "incident-response", "troubleshooting"]
---

## 요약

커넥션 풀 고갈은 응답 지연과 타임아웃을 유발하고 연쇄 장애로 이어집니다. 즉시 완화와 근본 원인 분석을 분리해 대응해야 합니다.

## 핵심 개념

- 풀 고갈은 긴 쿼리, 커넥션 누수, 트래픽 급증이 주요 원인입니다.
- 풀 크기만 늘리면 DB의 `max_connections`에 도달해 더 큰 장애가 발생합니다.
- 임시 완화는 트래픽 제어와 캐시 활용으로 진행합니다.

## 절차

1. 풀 사용량, 대기 시간, 타임아웃 지표를 확인합니다.
2. 장시간 쿼리와 트랜잭션을 찾아 즉시 종료 여부를 판단합니다.
3. 애플리케이션 인스턴스/풀 크기를 신중히 조정합니다.
4. 타임아웃과 큐 길이를 조정해 폭주를 억제합니다.
5. 원인(쿼리/누수/배포)을 분석하고 재발 방지를 수행합니다.

## 체크리스트

- 풀 사용량/대기 시간을 모니터링함
- DB `max_connections`와 풀 크기가 정렬됨
- 장시간 트랜잭션 알림이 있음
- 커넥션 누수 탐지 로깅이 있음
- 읽기 분산 또는 캐시 완화 계획이 있음

## 명령

```bash
psql -c "select state, count(*) from pg_stat_activity group by 1;"
```
현재 커넥션 상태 분포를 확인합니다.

```bash
psql -c "select pid, usename, state, wait_event_type, now()-query_start as age, query from pg_stat_activity order by age desc limit 5;"
```
장시간 실행 중인 쿼리를 식별합니다.

```bash
ss -tan state established '( sport = :5432 )' | wc -l
```
현재 DB 포트 연결 수를 대략 확인합니다.

```bash
grep -R -n "max_connections|pool_size|connectionTimeout" config/
```
풀/DB 연결 설정 위치를 점검합니다.

## 운영 팁

- 읽기 트래픽은 캐시와 리플리카로 우선 분산합니다.
- 풀 고갈 시에는 요청 큐 제한과 동시성 제어를 적용합니다.
- 배포 직후 지표가 급증하면 롤백을 고려합니다.
- 장기적으로는 쿼리 최적화와 인덱스 개선을 병행합니다.

## 주의사항

- DB 용량 없이 풀 크기만 늘리면 장애가 심화됩니다.
- 장시간 트랜잭션을 방치하면 락 경합이 증가합니다.
- 커넥션 누수를 방치하면 반복적으로 재발합니다.
