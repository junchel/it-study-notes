---
title: "Kubernetes 프로브 기본"
description: "라이브니스, 레디니스, 스타트업 프로브로 Pod를 건강하게 유지합니다."
pubDate: 2026-02-03
tags: ["kubernetes", "reliability", "operations"]
---

## 요약

프로브는 컨테이너가 건강한지, 트래픽을 받을 준비가 되었는지 Kubernetes에 알려줍니다.

## 핵심 개념

- liveness/readiness/startup 프로브의 목적이 다릅니다.
- 프로브 실패는 재시작 또는 트래픽 차단을 트리거합니다.
- 타임아웃과 실패 횟수를 서비스 특성에 맞춥니다.

## 프로브 종류

- **Liveness**: 컨테이너가 멈췄을 때 재시작합니다.
- **Readiness**: 준비되지 않으면 서비스 엔드포인트에서 제거합니다.
- **Startup**: 느린 시작 앱에 시간을 주고 이후 라이브니스 체크를 시작합니다.

## 예시

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 10
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```

livenessProbe 설정 예시로 헬스 체크 기준을 정의합니다.

## 명령

```bash
kubectl get pod app-123 -n prod -o yaml | rg -n "livenessProbe|readinessProbe|startupProbe"
```
프로브 정의가 포함되어 있는지 확인합니다.

```bash
kubectl describe pod app-123 -n prod | rg -n "Liveness|Readiness"
```
프로브 실패 이력을 확인합니다.

## 운영 팁

- 초기 지연 시간을 충분히 주어 기동 실패를 방지합니다.
- 라이브니스와 레디니스 프로브를 분리합니다.
- 프로브는 경량 엔드포인트로 구성합니다.

## 주의사항

- 너무 엄격한 프로브는 재시작을 유발합니다.
- 레디니스는 의존성(DB, 캐시) 상태를 반영해야 합니다.