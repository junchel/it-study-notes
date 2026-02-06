---
title: "메시지 큐 기본"
description: "큐/토픽, 소비자, 재시도와 DLQ를 통한 비동기 처리."
pubDate: 2026-02-03
tags: ["messaging", "architecture", "backend"]
---

## 요약

메시지 큐는 서비스 간 결합도를 낮추고 트래픽 스파이크를 완충합니다.

## 핵심 개념

- **프로듀서/컨슈머**: 생산자는 메시지를 넣고 소비자는 비동기로 처리합니다.
- **큐 vs 토픽**: 큐는 하나가 소비, 토픽은 다수로 팬아웃합니다.
- **전송 보장**: at-least-once가 일반적이며 중복을 대비해야 합니다.
- **DLQ**: 반복 실패 메시지를 격리해 원인 분석과 재처리를 돕습니다.

## 운영 팁

- 멱등성 처리로 중복 소비를 허용합니다.
- 재시도 횟수와 지연(backoff)을 명확히 정의합니다.
- 처리 시간에 맞춰 가시성 타임아웃/락을 설정합니다.
- 큐 깊이, 처리 지연, 실패율을 모니터링합니다.

## 명령

```bash
rabbitmqctl list_queues name messages consumers
```
큐별 메시지 수와 소비자 수를 확인합니다(RabbitMQ 사용 시).

```bash
kafka-topics --bootstrap-server localhost:9092 --list
```
브로커에 존재하는 토픽 목록을 확인합니다(Kafka 사용 시).

```bash
kafka-consumer-groups --bootstrap-server localhost:9092 --describe --group my-group
```
컨슈머 그룹의 lag를 확인해 병목 여부를 판단합니다(Kafka 사용 시).

## 주의사항

- 멱등성이 없으면 중복 처리로 데이터가 망가질 수 있습니다.
- 무제한 재시도는 시스템을 과부하로 몰아넣습니다.
- 큐 깊이를 모니터링하지 않으면 장애를 늦게 감지합니다.