---
title: "데드락 기본"
description: "트랜잭션 시스템에서 데드락을 탐지하고 피합니다."
pubDate: 2026-02-03
tags: ["database", "reliability", "sql"]
---

## 요약

데드락은 트랜잭션들이 서로의 락을 순환적으로 기다릴 때 발생합니다.

## 핵심 개념

- 두 트랜잭션이 서로 필요한 락을 동시에 잡을 수 있습니다.
- 데이터베이스는 데드락을 감지하고 희생 트랜잭션을 중단합니다.
- 일관된 락 순서는 데드락을 줄입니다.
- 짧은 트랜잭션이 위험을 낮춥니다.
- 읽기-수정-쓰기 패턴은 데드락을 유발하기 쉽습니다.

## 명령

```bash
psql -c "select pid,locktype,relation::regclass,mode,granted from pg_locks;"
```
현재 잠금 상태를 확인합니다.

```bash
psql -c "select now(), pid, wait_event, query from pg_stat_activity where wait_event is not null;"
```
락 대기 중인 쿼리를 확인합니다.

```bash
mysql -e "show engine innodb status\G"
```
InnoDB 데드락 정보를 확인합니다.

## 운영 팁

- 테이블과 행을 일관된 순서로 접근합니다.
- 트랜잭션을 작고 예측 가능하게 유지합니다.
- 중단된 트랜잭션을 백오프와 함께 재시도합니다.
- 데드락 로그와 패턴을 모니터링합니다.
- 배치 작업은 트래픽이 낮은 시간대로 이동합니다.

## 주의사항

- 애플리케이션 로직에서 데드락 오류를 무시함.
- 장기 배치 작업이 OLTP 트래픽과 충돌함.
- 서비스 간 접근 패턴이 뒤섞여 있음.
