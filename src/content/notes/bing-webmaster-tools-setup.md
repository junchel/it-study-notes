---
title: "Bing 웹마스터 도구 설정"
description: "jjchwordpress.cloud 소유권을 확인하고 사이트맵을 제출합니다."
pubDate: 2026-02-03
tags: ["seo", "search", "bing", "deployment"]
---

## 요약

이 노트는 Bing Webmaster Tools에 사이트를 연결하고 사이트맵을 제출하는 방법을 설명합니다.

## 핵심 개념

- 사이트 소유권 검증이 수집 시작 조건입니다.
- 사이트맵 제출로 크롤링 범위를 제어합니다.
- 인덱싱 오류와 크롤링 이슈를 모니터링합니다.
- 인증 방식에 따라 배포나 DNS 변경이 필요합니다.

## 절차

1. Bing Webmaster Tools를 열고 사이트 추가: `https://jjchwordpress.cloud`
2. 인증 방식 선택:
   - DNS TXT 레코드(권장)
   - HTML 파일 업로드(`public/`에 파일을 넣고 재배포)
   - 메타 태그(사이트 레이아웃에 메타 태그 추가)
3. 사이트맵 제출:
   - `https://jjchwordpress.cloud/sitemap.xml`
4. 홈 페이지와 몇 개 노트를 수동 URL 제출합니다.

## 인증 옵션

- DNS는 장기적으로 가장 안정적인 방법입니다.
- HTML 파일 업로드는 DNS를 제어하지 못할 때 유용합니다.
- 메타 태그는 간단하지만 레이아웃 수정이 필요합니다.

## 명령

```bash
dig jjchwordpress.cloud TXT +short
```
DNS TXT 레코드 전파 상태를 확인합니다.

```bash
curl -I https://jjchwordpress.cloud/sitemap.xml
```
사이트맵이 정상적으로 제공되는지 확인합니다.

```bash
curl -I https://jjchwordpress.cloud/robots.txt
```
robots.txt가 검색 봇을 차단하지 않는지 확인합니다.

## 운영 팁

- DNS로 소유권을 검증해 운영 환경에 영향 없이 인증합니다.
- robots.txt 적용 후 사이트맵을 제출합니다.
- 크롤링 오류와 인덱싱 상태를 주기적으로 확인합니다.
- 신규 콘텐츠는 URL 검사 기능으로 빠르게 제출합니다.
- 인증 정보와 DNS 변경 내역을 기록합니다.

## 주의사항

- 반드시 `https` 버전을 추가해야 합니다.
- DNS 인증은 전파에 시간이 걸릴 수 있습니다.
- 사이트맵이 404이면 인덱싱이 지연됩니다.

## 참고

- Bing Webmaster Tools 공식 문서
