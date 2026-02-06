---
title: "Kubernetes 롤아웃 기본"
description: "롤링 업데이트와 롤백으로 안전하게 배포합니다."
pubDate: 2026-02-03
tags: ["kubernetes", "deployment", "operations"]
---

## 요약

Kubernetes는 Deployment에 대해 롤링 업데이트와 롤백을 지원해 안전하게 변경을 배포할 수 있습니다.

## 핵심 개념

- 롤아웃은 점진적 배포로 위험을 낮춥니다.
- 상태 확인과 히스토리 관리가 중요합니다.
- 실패 시 자동 중지/롤백을 준비합니다.

## 자주 쓰는 명령

```bash
kubectl rollout status deployment/api
```
디플로이먼트 롤아웃 진행 상태를 확인합니다.

```bash
kubectl rollout history deployment/api
```
디플로이먼트의 롤아웃 히스토리를 확인합니다.

```bash
kubectl rollout undo deployment/api
```
이전 리비전으로 롤백합니다.

## 명령

```bash
kubectl rollout status deploy/app -n prod
```
롤아웃 진행 상태를 확인합니다.

```bash
kubectl rollout history deploy/app -n prod
```
배포 히스토리를 확인합니다.

## 운영 팁

- 롤아웃과 레디니스 프로브를 함께 사용합니다.
- 배포 중 오류율을 모니터링합니다.

## 주의사항

- 프로브가 잘못되면 롤링 업데이트도 다운타임을 만들 수 있습니다.
- 설정 변경이 예기치 않은 전체 롤아웃을 유발할 수 있습니다.