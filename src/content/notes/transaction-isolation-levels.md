---
title: "트랜잭션 격리 수준"
description: "데이터 정합성과 동시성 성능을 조절하는 격리 수준의 차이를 정리합니다."
pubDate: 2026-02-03
tags: ["database", "backend", "consistency"]
---

## 요약

격리 수준은 트랜잭션 간 간섭을 제어합니다. 강한 격리는 안전하지만 성능 비용이 큽니다.

## 핵심 개념

- READ UNCOMMITTED: 더티 리드 허용.
- READ COMMITTED: 더티 리드 방지.
- REPEATABLE READ: 동일 트랜잭션 내 재조회 일관성 보장.
- SERIALIZABLE: 가장 강력하지만 비용이 높습니다.

## 체크리스트

- 워크로드에 맞는 격리 수준을 선택합니다.
- 잠금 대기와 데드락을 모니터링합니다.
- 격리 수준 변경 시 성능 영향을 측정합니다.
- 쿼리 패턴을 기준으로 설계합니다.

## 쿼리 예시

```sql
SHOW transaction_isolation;
```
현재 세션의 격리 수준을 확인합니다.

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
```
세션의 격리 수준을 변경합니다.

```sql
BEGIN;
```
트랜잭션을 시작합니다.

```sql
COMMIT;
```
트랜잭션을 종료합니다.

```sql
SELECT * FROM orders WHERE id = 42 FOR UPDATE;
```
행 잠금을 걸어 동시 업데이트를 제어합니다.

## 운영 팁

- OLTP는 보통 READ COMMITTED 또는 REPEATABLE READ를 사용합니다.
- 대량 배치 작업은 별도 격리 수준을 검토합니다.
- 인덱스 최적화로 잠금 범위를 줄입니다.

## 주의사항

- SERIALIZABLE은 성능 저하와 데드락 위험이 높습니다.
- 격리 수준 변경은 전체 서비스에 영향을 줄 수 있습니다.
- ORM 기본 설정을 확인해야 합니다.