---
title: "리버스 프록시 기본"
description: "리버스 프록시로 백엔드 트래픽을 라우팅합니다."
pubDate: 2026-02-03
tags: ["web", "networking", "architecture"]
---

## 요약

리버스 프록시는 백엔드 서비스 앞단에서 라우팅, TLS 종료, 로깅을 담당합니다.

## 핵심 개념

- **단일 진입점**: 여러 서비스 앞에서 통합 진입점을 제공합니다.
- **TLS 종료**: HTTPS를 종료하고 내부에는 HTTP로 전달할 수 있습니다.
- **추가 기능**: 레이트 리밋, 캐싱, 인증 연동 등.

## 예시 (Nginx)

```nginx
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

기본 리버스 프록시 설정으로 헤더를 전달합니다.

## 명령

```bash
nginx -t
```
설정 문법을 검사합니다.

```bash
systemctl reload nginx
```
다운타임 없이 설정을 재적용합니다.

```bash
curl -I http://example.com
```
리버스 프록시를 통해 응답 헤더를 확인합니다.

## 운영 팁

- 타임아웃과 버퍼 크기를 트래픽 특성에 맞게 조정합니다.
- 클라이언트 IP 전달 헤더를 일관되게 설정합니다.
- TLS 종료 위치를 명확히 정하고 로깅을 일치시킵니다.

## 주의사항

- 필요한 헤더가 누락되면 인증/리다이렉트가 깨질 수 있습니다.
- 타임아웃은 백엔드 동작에 맞춰 조정해야 합니다.
- 변경 후 `curl -I`로 실제 응답을 꼭 확인합니다.