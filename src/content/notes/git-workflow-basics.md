---
title: "Git 워크플로 기본"
description: "개인 프로젝트와 학습 노트를 위한 최소 Git 워크플로."
pubDate: 2026-02-03
tags: ["git", "workflow", "version-control"]
---

## 요약

Git으로 깔끔한 히스토리를 유지하고 실수에서 복구할 수 있습니다.

## 핵심 개념

- 작고 집중된 변경으로 커밋합니다.
- 실험은 브랜치에서 진행합니다.
- 공동 작업이면 푸시 전에 먼저 pull합니다.
- 변경 전후를 검토하는 습관이 품질을 높입니다.

## 명령

```bash
git status
```
작업 트리와 스테이징 상태를 확인합니다.

```bash
git diff
```
스테이징 전 변경 내용을 확인합니다.

```bash
git add .
```
현재 변경 사항을 스테이징합니다.

```bash
git commit -m "Describe the change"
```
스테이징된 변경을 커밋으로 기록합니다.

```bash
git branch feature/topic
```
새 기능 브랜치를 생성합니다.

```bash
git switch feature/topic
```
생성한 브랜치로 전환합니다.

```bash
git log --oneline --decorate --graph
```
커밋 히스토리를 요약 그래프로 확인합니다.

```bash
git pull --rebase
```
원격 변경을 리베이스 방식으로 반영합니다.

## 운영 팁

- 작은 단위로 PR을 만들어 리뷰 부담을 줄입니다.
- 리베이스 또는 머지 전략을 팀 규칙으로 고정합니다.
- CI 통과를 머지 조건으로 설정합니다.
- 커밋 메시지는 변경 의도를 명확히 작성합니다.

## 주의사항

- 관련 없는 큰 변경을 한 번에 커밋함.
- 공유 브랜치에 푸시 전에 pull을 잊음.
- 바이너리 파일을 소스 관리 전략 없이 수정함.

## 참고

- `git help status`, `git help commit`
