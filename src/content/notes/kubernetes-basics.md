---
title: "Kubernetes 기본"
description: "Pod, Deployment, Service와 클러스터 워크로드 디버깅."
pubDate: 2026-02-03
tags: ["kubernetes", "devops", "containers"]
---

## 요약

Kubernetes는 컨테이너 워크로드를 오케스트레이션하고 서비스를 지속적으로 실행합니다.

## 핵심 개념

- Pod는 배포 가능한 최소 단위합니다.
- Deployment는 레플리카와 롤아웃을 관리합니다.
- Service는 Pod를 안정적인 네트워크로 노출합니다.

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
파드 로그를 확인합니다.

```bash
kubectl get svc
```
서비스 목록과 포트 구성을 확인합니다.

## 운영 팁

- 네임스페이스와 라벨을 표준화합니다.
- 선언형 매니페스트를 기준으로 변경을 관리합니다.
- 리소스 쿼터로 과도한 사용을 방지합니다.

## 주의사항

- Pod가 시작 실패할 때 이벤트를 확인하지 않음.
- 리소스 제한을 설정하지 않음.
- 레디니스/라이브니스 프로브 없이 배포함.