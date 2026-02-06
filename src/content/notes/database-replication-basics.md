---
title: "데이터베이스 복제 기본"
description: "Primary/Replica 구성, 지연, 페일오버 고려사항."
pubDate: 2026-02-03
tags: ["database", "replication", "reliability"]
---

## 요약

복제는 적절히 관리되면 가용성과 읽기 확장성을 개선합니다.

## 핵심 개념

- Primary는 쓰기를 처리하고, Replica는 읽기를 처리합니다.
- 복제 지연을 모니터링합니다.
- 페일오버와 스플릿 브레인 방지 전략을 준비합니다.
- 동기 복제는 데이터 손실을 줄이지만 지연이 증가합니다.
- 비동기 복제는 성능이 좋지만 지연이 발생합니다.

## 명령

```bash
psql -c "select client_addr,state,write_lag,flush_lag,replay_lag from pg_stat_replication;"
```
PostgreSQL 복제 지연 상태를 확인합니다.

```bash
psql -c "select now() - pg_last_xact_replay_timestamp() as replication_delay;"
```
Replica의 재생 지연을 확인합니다.

## 체크리스트

- 복제 지연 모니터링
- 정기적인 페일오버 테스트
- 읽기/쓰기 라우팅 정의
- 복제 오류 알림 설정

## 운영 팁

- 복제 지연을 지속적으로 모니터링합니다.
- 동기/비동기 복제 방식의 트레이드오프를 문서화합니다.
- 장애 조치 절차를 사전에 연습합니다.
- 애플리케이션에서 읽기 지연 허용 범위를 정의합니다.

## 주의사항

- Replica가 항상 최신이라고 가정하면 데이터 불일치가 발생합니다.
- Primary 장애 대비 계획이 없으면 복구 시간이 길어집니다.
- 쓰기가 실수로 Replica로 라우팅되면 오류가 발생합니다.
