---
title: "Kubernetes 요청과 제한"
description: "요청과 제한으로 CPU/메모리 사용을 제어합니다."
pubDate: 2026-02-03
tags: ["kubernetes", "operations", "performance"]
---

## 요약

요청과 제한은 Pod 스케줄링을 돕고 클러스터 안정성을 위해 리소스 사용을 제한합니다.

## 핵심 개념

- **Requests**: 스케줄링에 사용되는 보장 리소스.
- **Limits**: 컨테이너가 사용할 수 있는 최대 리소스.
- CPU는 스로틀링될 수 있고, 메모리는 초과 시 OOM으로 종료될 수 있습니다.

## 예시

```yaml
resources:
  requests:
    cpu: "250m"
    memory: "256Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"
```

CPU/메모리 요청과 제한을 설정하는 YAML 예시입니다.

## 명령

```bash
kubectl describe pod app-123 -n prod | rg -n "Requests|Limits"
```
파드에 설정된 요청/제한 값을 확인합니다.

```bash
kubectl top pod -n prod
```
실제 자원 사용량을 확인해 요청/제한을 조정합니다.

## 운영 팁

- 초기 값은 관측된 p95 사용량에 맞춰 설정합니다.
- 제한이 너무 낮으면 OOMKill이 발생하므로 점진적으로 조정합니다.
- HPA와 VPA를 함께 고려해 자동 확장 정책을 설계합니다.

## 주의사항

- 요청이 너무 높으면 스케줄링 유연성이 줄어듭니다.
- 제한이 너무 낮으면 스로틀링이나 크래시가 발생합니다.