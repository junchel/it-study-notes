---
title: "Kubernetes 트러블슈팅 체크리스트"
description: "Kubernetes에서 Pod, Deployment, Service를 디버깅합니다."
pubDate: 2026-02-03
tags: ["kubernetes", "troubleshooting", "devops"]
---

## 요약

Pod 상태를 확인한 뒤 이벤트, 로그, 서비스 라우팅을 점검합니다.

## 핵심 개념

- 이벤트, 로그, 자원 상태를 순서대로 확인합니다.
- 문제 범위를 네임스페이스와 노드로 좁힙니다.
- 롤백과 롤아웃 상태를 함께 확인합니다.

## 절차

1. Pod 상태와 이벤트를 확인합니다.
2. 컨테이너 로그를 확인합니다.
3. 서비스 셀렉터와 엔드포인트를 검증합니다.
4. 인그레스 또는 로드밸런서 상태를 점검합니다.

## 명령

```bash
kubectl get pods
```
파드 목록과 상태를 확인합니다.

```bash
kubectl describe pod <name>
```
파드 상세 정보와 이벤트를 확인합니다.

```bash
kubectl logs <pod>
```
파드 로그를 확인해 오류를 찾습니다.

```bash
kubectl get svc
```
서비스 목록과 포트 구성을 확인합니다.

```bash
kubectl get endpoints
```
서비스에 연결된 엔드포인트를 확인합니다.

## 운영 팁

- 이벤트와 상태를 먼저 확인해 범위를 좁힙니다.
- Pod, Node, 네임스페이스 순서로 원인을 분리합니다.
- 메트릭과 로그를 함께 확인합니다.

## 주의사항

- Pod 스케줄 실패 시 이벤트를 무시함.
- 리소스 제한 누락.
- 라벨/셀렉터 불일치.