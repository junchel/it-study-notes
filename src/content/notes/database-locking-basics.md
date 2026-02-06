---
title: "데이터베이스 락 기본"
description: "락을 이해해 블로킹과 장애를 예방합니다."
pubDate: 2026-02-03
tags: ["database", "sql", "operations"]
---

## 요약

락은 데이터 무결성을 보호하지만 오래 유지되면 다른 작업을 막을 수 있습니다.

## 핵심 개념

- 공유 락은 읽기를 허용하고, 배타 락은 쓰기를 보호합니다.
- 락 에스컬레이션은 경합을 증가시킬 수 있습니다.
- 긴 트랜잭션은 예상보다 오래 락을 잡습니다.
- 인덱스는 잠기는 데이터 범위를 줄입니다.
- 데드락은 탐지 후 롤백으로 해결됩니다.

## 명령

```bash
psql -c "select pid,locktype,relation::regclass,mode,granted from pg_locks;"
```
PostgreSQL 잠금 현황을 확인합니다.

```bash
psql -c "select blocked.pid as blocked_pid, blocking.pid as blocking_pid from pg_locks blocked join pg_locks blocking on blocking.locktype = blocked.locktype and blocking.database is not distinct from blocked.database and blocking.relation is not distinct from blocked.relation and blocking.pid != blocked.pid where not blocked.granted;"
```
블로킹 관계를 확인합니다.

```bash
mysql -e "show engine innodb status\G"
```
InnoDB 잠금과 대기 정보를 확인합니다.

## 운영 팁

- 트랜잭션을 짧고 집중적으로 유지합니다.
- 테이블 스캔을 피하도록 적절한 인덱스를 사용합니다.
- 락 대기 시간과 블로킹 쿼리를 모니터링합니다.
- 불필요한 `SELECT ... FOR UPDATE`를 피합니다.
- 대량 작업은 배치로 쪼개 락 보유 시간을 줄입니다.

## 주의사항

- 피크 시간에 유지보수 작업을 실행하면 대기가 급증합니다.
- 인덱스 부족으로 락 범위가 커지면 경합이 심화됩니다.
- 외부 호출 중에 락을 잡고 있으면 장기 블로킹이 발생합니다.
