---
title: "상관 ID 기본"
description: "상관 ID로 서비스 간 요청을 추적합니다."
pubDate: 2026-02-03
tags: ["observability", "logging", "troubleshooting"]
---

## 요약

상관 ID는 서비스 간 로그를 연결해 단일 요청을 끝까지 추적할 수 있게 합니다.

## 핵심 개념

- 분산 시스템에서 요청 추적의 기준점입니다.
- 게이트웨이부터 전달/생성이 중요합니다.
- 로그와 트레이스에 동일 ID를 남깁니다.
- ID 형식(UUID 등)을 표준화해 파싱을 단순화합니다.
- 내부에서 생성된 ID는 중간에서 변경하지 않습니다.

## 동작 방식

- 엣지(게이트웨이 또는 첫 서비스)에서 ID를 생성합니다.
- 헤더를 통해 다운스트림 서비스로 전달합니다.
- 로그와 트레이스에 포함합니다.

## 일반 헤더

```text
X-Request-ID: 7f4c2c1e-9e47-4d26-b3dd-12a7a3a0f9e5
Traceparent: 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01
```
요청 추적 헤더 예시로 상관관계 ID를 보여줍니다.

## 명령

```bash
rg -n "X-Request-ID|X-Correlation-ID" src -S
```
상관 ID 처리 위치를 확인합니다.

```bash
rg -n "traceparent|tracestate" src -S
```
분산 추적 헤더 처리 여부를 점검합니다.

```bash
curl -H "X-Request-ID: req-123" https://api.example.com/health
```
상관 ID가 로그에 반영되는지 확인합니다.

## 운영 팁

- 가장 앞단에서 ID를 생성해 전체 흐름에 전달합니다.
- 로그와 트레이스에 동일한 키로 기록합니다.
- 외부 호출에도 ID를 전파합니다.
- 샘플링 여부와 무관하게 핵심 오류 로그에는 ID를 남깁니다.

## 주의사항

- 중간에서 ID를 덮어쓰면 추적성이 깨집니다.
- 모든 홉에서 ID를 로깅하지 않으면 추적이 끊깁니다.
