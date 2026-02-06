---
title: "Docker 이미지 최적화"
description: "간단한 패턴으로 이미지 크기와 빌드 시간을 줄입니다."
pubDate: 2026-02-03
tags: ["docker", "devops", "performance"]
---

## 요약

작은 이미지는 빌드와 배포가 빠르고 보안 노출도 줄입니다.

## 핵심 개념

- 이미지 레이어 수와 크기가 빌드/배포 속도를 좌우합니다.
- 멀티 스테이지 빌드로 런타임 이미지에 필요한 것만 남깁니다.
- 캐시 활용을 위해 변경이 잦은 레이어를 뒤로 배치합니다.

## 기법

- 멀티 스테이지 빌드를 사용합니다.
- 특정 태그로 베이스 이미지를 고정합니다.
- 같은 레이어에서 패키지 캐시를 정리합니다.
- 필요한 것만 복사합니다.

## 예시 (멀티 스테이지)

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
```
멀티 스테이지 빌드로 빌드 산출물만 런타임 이미지에 포함하는 예시입니다.

## 명령

```bash
docker history app:latest
```
이미지 레이어별 용량을 확인합니다.

```bash
docker images --format "table {{.Repository}}\\t{{.Tag}}\\t{{.Size}}"
```
이미지 크기를 빠르게 비교합니다.

```bash
docker system df
```
이미지, 레이어, 볼륨 사용량을 요약합니다.

## 운영 팁

- 멀티 스테이지 빌드를 사용해 런타임 이미지 크기를 최소화합니다.
- 레이어 수를 줄이기 위해 관련 명령을 하나의 RUN으로 묶습니다.
- 불필요한 파일은 .dockerignore로 제외해 캐시 효율을 높입니다.
- 베이스 이미지 업데이트 주기를 정해 보안 패치를 반영합니다.

## 주의사항

- 빌드 도구가 최종 이미지에 남아있음.
- `latest` 태그 사용은 재현성을 깨뜨릴 수 있습니다.
