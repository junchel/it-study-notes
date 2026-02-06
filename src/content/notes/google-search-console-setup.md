---
title: "Google Search Console 설정"
description: "jjchwordpress.cloud 소유권을 확인하고 사이트맵을 제출합니다."
pubDate: 2026-02-03
tags: ["seo", "search", "google", "deployment"]
---

## 요약

이 노트는 사이트를 Google Search Console에 연결하고 사이트맵을 제출하는 방법을 설명합니다.

## 핵심 개념

- 소유권 검증이 수집 시작 조건입니다.
- 사이트맵 제출로 색인 범위를 안내합니다.
- 크롤링 오류를 모니터링합니다.
- 도메인 속성은 모든 서브도메인을 포함합니다.

## 절차

1. Google Search Console을 열고 `jjchwordpress.cloud`에 대해 **도메인** 속성을 추가합니다.
2. 소유권을 확인합니다.
   - DNS 방식(권장): 등록기관에 TXT 레코드를 추가한 뒤 검증을 기다립니다.
   - 대안: `public/`에 HTML 파일을 두고 재배포하는 방식.
3. 검증 후 **사이트맵**에서 제출:
   - `https://jjchwordpress.cloud/sitemap.xml`
4. **URL 검사**로 홈 페이지와 몇 개 노트의 색인을 요청합니다.

## 인증 옵션

- DNS(장기적으로 가장 안정적).
- HTML 파일 업로드(DNS 접근이 느리거나 어려울 때).
- 사이트 헤더에 메타 태그 추가(레이아웃에 `<meta>` 추가 필요).

## 명령

```bash
dig jjchwordpress.cloud TXT +short
```
DNS TXT 레코드 전파 상태를 확인합니다.

```bash
curl -I https://jjchwordpress.cloud/sitemap.xml
```
사이트맵이 정상적으로 제공되는지 확인합니다.

## 운영 팁

- DNS 검증을 사용해 운영 영향을 최소화합니다.
- 사이트맵 제출 후 색인 범위를 확인합니다.
- 검색 성과와 커버리지를 정기적으로 점검합니다.
- 주요 변경 후 URL 검사로 빠르게 색인을 요청합니다.

## 주의사항

- DNS 검증은 전파에 시간이 걸릴 수 있습니다.
- `https` 프로토콜과 정확한 도메인을 사용합니다.
- 도메인을 변경하면 새 도메인을 별도 속성으로 추가/검증해야 합니다.
- robots.txt로 크롤링을 차단하지 않는지 확인합니다.

## 참고

- Google Search Console 공식 문서
