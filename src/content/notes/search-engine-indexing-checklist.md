---
title: "검색 엔진 인덱싱 체크리스트"
description: "검색 노출을 위한 필수 설정과 점검 항목을 실무 관점에서 정리합니다."
pubDate: 2026-02-03
tags: ["seo", "web", "operations"]
---

## 요약

검색 엔진 인덱싱은 접근성, 크롤링 허용, 구조화된 메타데이터가 핵심입니다. 체크리스트 기반으로 누락을 줄여야 합니다.

## 핵심 개념

- robots.txt는 크롤링 허용 범위를 결정합니다.
- sitemap.xml은 페이지 탐색 비용을 낮춥니다.
- canonical은 중복 콘텐츠를 정리합니다.
- HTTP 상태 코드와 렌더링 가능 여부가 인덱싱의 기본입니다.

## 체크리스트

- robots.txt가 200으로 응답하고 크롤링을 차단하지 않는지 확인합니다.
- sitemap.xml을 제공하고 최신 페이지가 포함되었는지 점검합니다.
- 모든 중요 페이지가 200 응답을 반환하는지 확인합니다.
- canonical URL이 자기 자신 또는 대표 URL을 가리키는지 확인합니다.
- noindex, nofollow 메타 태그가 의도치 않게 적용되지 않았는지 확인합니다.
- 중요한 페이지가 로그인이나 JS 렌더링에만 의존하지 않는지 확인합니다.

## 명령

```bash
curl -I https://example.com/robots.txt
```
robots.txt 응답 코드와 캐시 정책을 확인합니다.

```bash
curl -s https://example.com/sitemap.xml | head -n 20
```
사이트맵이 정상적으로 제공되고 최신 URL이 포함되는지 확인합니다.

```bash
curl -I https://example.com/important-page
```
핵심 페이지가 200 응답을 반환하는지 확인합니다.

```bash
curl -s https://example.com/important-page | grep -i "rel=\"canonical\""
```
canonical 태그가 기대한 URL로 설정되어 있는지 확인합니다.

```bash
curl -s https://example.com/important-page | grep -i "noindex"
```
의도치 않은 noindex 메타 태그가 있는지 확인합니다.

## 운영 팁

- 배포 파이프라인에 인덱싱 체크를 자동화합니다.
- 중요 페이지는 페이지 속도 최적화와 함께 점검합니다.
- 리다이렉트는 301을 기본으로 하고 체인을 피합니다.

## 주의사항

- 스테이징 도메인에 production sitemap이 노출되지 않도록 분리합니다.
- CDN 캐시가 robots.txt를 오래 유지하지 않도록 TTL을 관리합니다.
- 404가 많은 사이트는 크롤링 우선순위가 낮아질 수 있습니다.