---
title: "Kubernetes 네임스페이스 기본"
description: "네임스페이스로 리소스를 분리하고 영향 범위를 줄입니다."
pubDate: 2026-02-03
tags: ["kubernetes", "operations", "security"]
---

## 요약

네임스페이스는 클러스터 내 리소스를 분리해 팀, 환경, 워크로드를 격리합니다.

## 핵심 개념

- dev/stage/prod를 서로 다른 네임스페이스로 분리합니다.
- 네임스페이스별 리소스 쿼터와 정책을 적용합니다.
- RBAC 권한은 종종 네임스페이스 단위로 매핑합니다.

## 명령

```bash
kubectl get namespaces
```
네임스페이스 목록을 확인합니다.

```bash
kubectl create namespace staging
```
staging 네임스페이스를 생성합니다.

```bash
kubectl config set-context --current --namespace=staging
```
현재 컨텍스트의 기본 네임스페이스를 staging으로 전환합니다.

## 운영 팁

- 환경별로 네임스페이스를 분리해 권한과 자원을 격리합니다.
- 리소스 쿼터와 네트워크 정책을 함께 적용해 안전성을 높입니다.
- 라벨과 어노테이션 규칙을 정해 검색성과 자동화를 강화합니다.

## 주의사항

- 공유 리소스(CRD, 노드)는 네임스페이스 경계를 넘습니다.
- 네임스페이스 컨텍스트를 잊으면 실수로 변경할 수 있습니다.