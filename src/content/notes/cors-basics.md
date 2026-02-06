---
title: "CORS 기본"
description: "브라우저에서 API에 접근 가능한 출처를 제어합니다."
pubDate: 2026-02-03
tags: ["web", "security", "api"]
---

## 요약

CORS(Cross-Origin Resource Sharing)는 브라우저가 교차 출처 요청을 제어하는 보안 모델입니다.

## 핵심 개념

- **Origin** = 스킴 + 호스트 + 포트.
- 서버가 허용하지 않으면 브라우저가 교차 출처 요청을 차단합니다.
- 프리플라이트 요청은 `OPTIONS`를 사용합니다.
- 단순 요청과 프리플라이트 요청의 조건이 다릅니다.
- 서버 정책은 브라우저에만 적용되며 서버 간 통신에는 영향을 주지 않습니다.

## 예시 헤더

```text
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Authorization, Content-Type
```
CORS 응답 헤더 설정 예시입니다.

## 명령

```bash
curl -I -H "Origin: https://example.com" https://api.example.com
```
CORS 응답 헤더를 확인합니다.

```bash
curl -i -X OPTIONS -H "Origin: https://example.com" -H "Access-Control-Request-Method: POST" https://api.example.com
```
프리플라이트 요청에 대한 응답을 확인합니다.

```bash
rg -n "Access-Control-Allow-Origin" config/ -S
```
CORS 설정 위치를 찾습니다.

## 운영 팁

- 허용 오리진을 구체적으로 지정합니다.
- credentials와 와일드카드 조합을 피합니다.
- 프리플라이트 캐시 시간을 적절히 설정합니다.
- 로컬/스테이징/프로덕션별로 허용 오리진을 분리합니다.

## 주의사항

- 자격 증명과 함께 `*`를 사용할 수 없습니다.
- 프리플라이트 실패는 일반 네트워크 오류처럼 보이기도 합니다.
- 헤더 누락은 브라우저에서 CORS 에러로만 나타납니다.
