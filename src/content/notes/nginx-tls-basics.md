---
title: "Nginx TLS 기본"
description: "Nginx에서 HTTPS를 종료하고 백엔드로 안전하게 전달합니다."
pubDate: 2026-02-03
tags: ["web", "security", "tls"]
---

## 요약

Nginx는 TLS 종료 지점을 제공해 인증서 관리와 트래픽 암호화를 중앙화할 수 있습니다.

## 핵심 개념

- **TLS 종료**: Nginx에서 HTTPS를 해제하고 내부로 HTTP를 전달합니다.
- **체인 인증서**: 브라우저가 신뢰하도록 전체 체인을 제공합니다.
- **원본 스킴 전달**: 백엔드가 HTTPS 요청임을 알 수 있도록 헤더를 전달합니다.

## 예시 설정

```nginx
server {
  listen 443 ssl http2;
  server_name example.com;

  ssl_certificate /etc/ssl/certs/example.fullchain.pem;
  ssl_certificate_key /etc/ssl/private/example.key;
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_prefer_server_ciphers on;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

TLS 종료, 인증서 지정, 안전한 프로토콜 설정 후 백엔드로 프록시합니다.

## 명령

```bash
nginx -t
```
Nginx 설정 문법과 포함 파일을 검사합니다.

```bash
systemctl reload nginx
```
다운타임 없이 설정을 재적용합니다.

```bash
openssl s_client -connect example.com:443 -servername example.com
```
인증서 체인과 프로토콜 협상을 확인합니다.

```bash
curl -I https://example.com
```
HTTPS 응답과 보안 헤더를 빠르게 확인합니다.

## 운영 팁

- TLS 버전과 암호군을 최신 권장으로 유지합니다.
- OCSP 스테이플링을 활성화해 핸드셰이크 지연을 줄입니다.
- 인증서 만료를 모니터링합니다.

## 주의사항

- 체인 인증서가 누락되면 브라우저 경고가 발생합니다.
- `X-Forwarded-Proto`를 전달하지 않으면 리다이렉트/콜백 URL이 깨질 수 있습니다.
- TLS 설정 변경 후 반드시 `nginx -t`와 실접속 테스트를 수행합니다.