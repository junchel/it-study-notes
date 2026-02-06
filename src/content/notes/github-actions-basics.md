---
title: "GitHub Actions 기본"
description: "GitHub Actions로 CI 워크플로를 자동화합니다."
pubDate: 2026-02-03
tags: ["ci-cd", "github", "automation"]
---

## 요약

GitHub Actions는 푸시, PR, 스케줄에 맞춰 자동 워크플로를 실행합니다.

## 핵심 개념

- 워크플로는 `.github/workflows/`에 위치합니다.
- 잡은 GitHub 호스티드 또는 셀프 호스티드 러너에서 실행합니다.
- 스텝은 셸 명령이나 미리 준비된 액션을 실행합니다.

## 간단한 예시

```yaml
name: CI
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
```
GitHub Actions CI 워크플로우 기본 구조 예시입니다.

## 명령

```bash
ls .github/workflows
```
워크플로 파일 목록을 확인합니다.

```bash
rg -n "jobs:" .github/workflows/*.yml -S
```
워크플로의 잡 정의를 빠르게 점검합니다.

```bash
rg -n "uses:" .github/workflows/*.yml -S
```
사용 중인 액션 버전을 확인합니다.

## 운영 팁

- 의존성 캐시를 사용해 빌드 시간을 줄입니다.
- 액션 버전을 고정해 공급망 위험을 줄입니다.
- 시크릿은 필요한 작업에만 최소 범위로 노출합니다.
- 배포 잡에는 승인 조건을 두어 안전성을 높입니다.

## 주의사항

- 시크릿 누락은 조용한 실패로 이어질 수 있습니다.
- 캐시된 의존성이 빌드 문제를 숨길 수 있습니다.
- 과도한 병렬화는 실행 시간을 늘릴 수 있습니다.
