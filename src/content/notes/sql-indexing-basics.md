---
title: "SQL 인덱싱 기초"
description: "쿼리 성능을 개선하는 인덱스 설계와 운영 포인트를 정리합니다."
pubDate: 2026-02-03
tags: ["database", "backend", "performance"]
---

## 요약

인덱스는 조회 성능을 높이지만 쓰기 비용과 저장 비용을 증가시킵니다. 워크로드에 맞는 설계가 핵심입니다.

## 핵심 개념

- 인덱스는 읽기 성능을 높이고 쓰기 성능을 낮춥니다.
- 카디널리티와 선택도가 인덱스 효율을 좌우합니다.
- 복합 인덱스는 컬럼 순서가 중요합니다.
- 과도한 인덱스는 유지 비용을 크게 증가시킵니다.

## 체크리스트

- 자주 필터링/조인되는 컬럼부터 검토합니다.
- 불필요한 인덱스 중복을 제거합니다.
- 쿼리 계획을 확인하고 인덱스 사용 여부를 검증합니다.
- 대량 배치 작업 전에 인덱스 영향도를 확인합니다.

## 쿼리와 명령

```sql
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE customer_id = 42;
```
실제 실행 계획과 버퍼 사용량을 확인해 병목을 파악합니다.

```sql
CREATE INDEX idx_orders_customer_id ON orders (customer_id);
```
조회 빈도가 높은 컬럼에 기본 인덱스를 추가합니다.

```sql
CREATE INDEX idx_orders_customer_status ON orders (customer_id, status);
```
복합 조건 필터링을 위해 복합 인덱스를 만듭니다.

```sql
DROP INDEX IF EXISTS idx_orders_customer_status;
```
사용되지 않는 인덱스를 제거해 쓰기 비용을 줄입니다.

```sql
ANALYZE orders;
```
통계 정보를 최신화해 최적 실행 계획을 유도합니다.

## 운영 팁

- 인덱스 생성은 트래픽이 낮은 시간에 수행합니다.
- 쿼리 로그와 슬로우 쿼리 리포트를 함께 봅니다.
- 대형 테이블은 파티션 전략과 함께 검토합니다.

## 주의사항

- 인덱스 추가는 쓰기 지연을 증가시킬 수 있습니다.
- 복합 인덱스는 왼쪽부터 일치하는 조건에서만 효과가 큽니다.
- 너무 많은 인덱스는 캐시 효율을 떨어뜨립니다.