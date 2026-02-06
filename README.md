# IT 스터디 노트 사이트

Astro로 만든 정적 지식베이스입니다. 노트는 Markdown으로 작성되고 빠른 HTML 페이지와 정적 검색 인덱스로 빌드됩니다.

## 요구 사항

- Node.js 18+ (LTS 권장)

## 빠른 시작

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:4321`로 접속합니다.

## 로컬 접속 문제 해결

- 포트가 이미 사용 중인지 확인:

```bash
lsof -i :4321
```

- 포트를 바꿔 실행:

```bash
npm run dev -- --port 4322
```

- 외부 접속이 필요하면 호스트 바인딩:

```bash
npm run dev -- --host
```

## 빌드

```bash
npm run build
npm run preview
```

빌드 결과는 `dist/`에 생성됩니다. `postbuild` 스크립트에서 Pagefind가 검색 인덱스를 생성합니다.

## 배포 (GitHub Pages)

1. GitHub 저장소를 만들고 이 프로젝트를 푸시합니다.
2. GitHub Pages를 `gh-pages` 워크플로 환경으로 활성화합니다.
3. 저장소 변수 설정:
   - `SITE_URL`: 최종 사이트 URL (예: `https://jjchwordpress.cloud`)
   - `SITE_BASE`: `/` (서브 경로 배포 시 `/your-repo/`)
4. `.github/workflows/deploy.yml`이 빌드/배포를 수행합니다.

### 자동 배포 트리거

- `main` 브랜치로 푸시하면 자동으로 빌드/배포가 실행됩니다.
- 배포 완료 후 `deploy.yml`에서 실서비스 URL(`SITE_URL`)과 `sitemap.xml` 가용성을 자동 검증합니다.

### 지속 모니터링

- `.github/workflows/monitor.yml`이 30분 주기로 사이트 가용성을 확인합니다.
- 장애 감지 시 GitHub Issue를 자동 생성하고, 복구 감지 시 해당 Issue를 자동 종료합니다.
- 수동 점검이 필요하면 GitHub Actions에서 `Monitor site availability`를 수동 실행할 수 있습니다.

## 검색 엔진 색인

1. `https://jjchwordpress.cloud/sitemap.xml`이 정상 로드되는지 확인합니다.
2. Google Search Console에 사이트를 추가하고 사이트맵을 제출합니다.
3. `public/robots.txt`에 올바른 사이트맵 URL을 유지합니다.
