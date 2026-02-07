# RBAC 운영 가이드

## 목표

- 모든 사용자는 웹에서 콘텐츠를 읽을 수 있습니다.
- 편집은 GitHub PR 기반으로 제한합니다.
- 코드/설정 경로는 관리자만 수정할 수 있습니다.

## 적용 요소

- `/.github/CODEOWNERS`
- `/.github/rbac.config.json`
- `/.github/workflows/rbac.yml`
- `/scripts/check-rbac.mjs`

## 권한 모델

- `Viewer`: 사이트 읽기만 가능합니다.
- `Editor`: 노트 파일만 수정 PR을 올릴 수 있습니다.
- `Admin`: 코드/설정/워크플로 포함 전체 경로를 수정할 수 있습니다.

## 편집 권한 설정

1. `/.github/rbac.config.json`의 `admins`에 관리자 GitHub 계정을 등록합니다.
2. `/.github/rbac.config.json`의 `board_editors`에 게시판별 편집자를 등록합니다.
3. 노트 파일 frontmatter에 `board`를 지정하면 해당 보드 기준으로 권한을 검사합니다.

```md
---
title: "RAG 검색 파이프라인"
description: "..."
pubDate: 2026-02-08
tags: ["ai", "rag"]
board: "ai"
---
```

`board`가 없으면 `default_board`를 사용합니다.
`board`를 지정했는데 `rbac.config.json`에 없는 값이면 PR이 실패합니다.

## GitHub 설정(필수)

레포 Settings > Branches > Branch protection rules에서 `main`에 아래를 적용합니다.

1. `Require a pull request before merging` 활성화
2. `Require approvals`는 단독 운영 레포면 `0`, 다중 운영이면 `1` 이상으로 설정
3. `Require review from Code Owners`는 다중 운영 시 활성화(권장)
4. `Require status checks to pass before merging` 활성화
5. Status checks에 `rbac` 체크를 추가
6. (조직 레포인 경우) `Restrict who can push to matching branches`에서 관리자만 direct push 허용(권장)

## 동작 방식

1. PR 생성 시 `RBAC Policy Check`가 변경 파일 목록을 계산합니다.
2. 노트 파일(`src/content/notes/**/*.md`)은 `board` 기준 편집자 권한을 검사합니다.
3. 코드/설정 파일(`admin_only_paths`)은 관리자 계정인지 검사합니다.
4. 위반 시 워크플로가 실패하고 merge가 차단됩니다.
