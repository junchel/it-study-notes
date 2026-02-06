---
title: "HTTP/2 및 HTTP/3 기본"
description: "HTTP/1.1, HTTP/2, HTTP/3의 주요 차이점."
pubDate: 2026-02-03
tags: ["http", "web", "performance"]
---

## 요약

HTTP/2는 멀티플렉싱과 헤더 압축으로 지연과 오버헤드를 줄입니다. HTTP/3는 QUIC(UDP) 위에서 동작해 핸드셰이크와 손실 복구를 개선합니다.

## 핵심 개념

- HTTP/2는 단일 TCP 연결에서 멀티플렉싱을 수행하지만 TCP HOL(Head-of-Line) 문제는 남습니다.
- HTTP/3는 QUIC 기반으로 스트림 단위 손실 복구와 0-RTT를 지원합니다.
- ALPN으로 프로토콜을 협상하며, 대부분의 브라우저는 TLS를 요구합니다.
- HTTP/3는 Alt-Svc 헤더로 광고하며 HTTP/1.1 폴백을 유지합니다.

## 절차

1. 엣지/서버가 TLS 1.2+와 ALPN을 지원하는지 확인합니다.
2. HTTP/2를 활성화하고 주요 지표(p95, 오류율)를 모니터링합니다.
3. HTTP/3(QUIC)를 활성화하고 443/UDP 허용 여부를 점검합니다.
4. Alt-Svc 헤더로 HTTP/3를 광고하고, 폴백 경로를 유지합니다.
5. HTTP/1.1, HTTP/2, HTTP/3의 성능 차이를 비교합니다.

## 체크리스트

- TLS 인증서와 ALPN이 정상 동작함
- 443/UDP가 네트워크/방화벽에서 허용됨
- Alt-Svc 헤더가 정확히 설정됨
- HTTP/1.1 폴백이 유지됨
- 프로토콜별 지표 비교 리포트가 있음

## 명령

```bash
curl -I --http2 https://example.com
```
HTTP/2로 협상되는지 확인합니다.

```bash
curl -I --http3 https://example.com
```
HTTP/3 지원 여부를 확인합니다.

```bash
curl -I https://example.com | grep -i alt-svc
```
HTTP/3 광고(Alt-Svc) 헤더를 확인합니다.

```bash
openssl s_client -alpn h2 -connect example.com:443 </dev/null | grep -i alpn
```
ALPN 협상 결과를 확인합니다.

```bash
curl -I --http1.1 https://example.com
```
HTTP/1.1 폴백 동작을 확인합니다.

## 운영 팁

- HTTP/3는 CDN에서 먼저 활성화하고 점진적으로 확장합니다.
- 패킷 손실이 많은 환경에서는 HTTP/3 성능이 더 개선될 수 있습니다.
- 헤더 크기를 줄이면 HPACK/QPACK 효율이 높아집니다.
- 0-RTT는 재전송 위험이 있어 멱등 요청에만 사용합니다.

## 주의사항

- 일부 네트워크는 UDP를 차단해 HTTP/3가 실패할 수 있습니다.
- 잘못된 Alt-Svc 설정은 반복 협상 문제를 일으킬 수 있습니다.
- HTTP/3 활성화 후에도 HTTP/1.1 폴백을 제거하면 호환성 문제가 발생합니다.
