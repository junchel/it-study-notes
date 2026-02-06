---
title: "SLI/SLO 기초"
description: "서비스 품질을 수치화하는 SLI/SLO의 개념과 운영 기준을 정리합니다."
pubDate: 2026-02-03
tags: ["sre", "monitoring", "operations"]
---

## 요약

SLI는 측정 지표, SLO는 목표 수준입니다. 명확한 SLO는 우선순위와 트레이드오프를 정리해줍니다.

## 핵심 개념

- SLI는 성공률, 지연 시간, 가용성 등으로 정의합니다.
- SLO는 측정 가능한 목표와 기간을 포함합니다.
- 오류 예산(Error Budget)은 출시 속도와 안정성의 균형을 만듭니다.
- 사용자 관점의 지표가 가장 중요합니다.

## 체크리스트

- SLI 정의가 사용자 경험과 직접 연결되는지 검토합니다.
- SLO 기간(7/28/30일)을 서비스 특성에 맞춰 정합니다.
- 오류 예산 소진 시 의사결정 프로세스를 만듭니다.
- 대시보드와 알림을 SLO에 맞춰 구성합니다.

## 명령

```bash
curl -s "http://localhost:9090/api/v1/query?query=rate(http_requests_total{job='api',status=~'5..'}[5m])"
```
5xx 오류율 SLI를 Prometheus에서 조회합니다.

```bash
curl -s "http://localhost:9090/api/v1/query?query=rate(http_requests_total{job='api'}[5m])"
```
전체 요청률을 조회해 오류율과 함께 계산합니다.

```bash
curl -s "http://localhost:9090/api/v1/query?query=histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket{job='api'}[5m])) by (le))"
```
P95 지연 시간을 SLI로 조회합니다.

```bash
promtool query instant http://localhost:9090 "up{job='api'}"
```
기본 가용성 지표가 정상 수집되는지 확인합니다.

## 운영 팁

- SLO를 지키지 못할 때 대응 기준을 사전에 합의합니다.
- 신규 기능은 SLO 영향 분석을 포함해 배포합니다.
- 작은 SLO부터 시작해 점진적으로 정교화합니다.

## 주의사항

- 내부 지표만 보면 실제 사용자 경험과 어긋날 수 있습니다.
- 알림 임계치는 SLO 위반 가능성과 직접 연결합니다.
- 과도한 SLO는 비용을 급격히 증가시킬 수 있습니다.