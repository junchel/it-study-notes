# 아키텍처

## 목표

- IT 학습 노트를 Markdown으로 관리한다.
- 호스팅 비용 없이 빠른 정적 페이지를 제공한다.
- 백엔드 없이 전체 텍스트 검색을 제공한다.
- 사이트맵과 메타데이터로 검색 엔진 색인을 보장한다.

## 구조

- `src/content/notes/`: 프런트매터 포함 Markdown 노트
- `src/pages/`: Astro 페이지(홈, 노트 목록, 태그 페이지)
- `src/components/`: UI 구성 요소(카드, 검색, 태그)
- `src/layouts/`: 공통 SEO/네비게이션을 포함한 레이아웃
- `public/`: 정적 자산(`robots.txt`, `og.svg`, favicon)

## 데이터 흐름

1. Markdown 노트를 `astro:content`로 읽는다.
2. 페이지는 `getCollection`으로 목록/상세 페이지를 렌더링한다.
3. `sitemap.xml.ts`에서 노트와 태그 URL을 생성한다.
4. `postbuild` 단계에서 Pagefind가 검색 인덱스를 만든다.

## 배포

- GitHub Actions가 사이트를 빌드하고 GitHub Pages로 배포한다.
- 환경 변수 `SITE_URL`, `SITE_BASE`로 경로를 설정한다.

## 비용

모든 구성 요소는 무료다.

- Astro (오픈소스)
- GitHub Pages (무료 호스팅)
- GitHub Actions (공개 저장소 무료)
- Google Search Console (무료)
