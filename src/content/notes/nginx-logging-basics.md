---
title: "Nginx 로깅 기본"
description: "접근 로그와 에러 로그로 트래픽과 오류를 진단합니다."
pubDate: 2026-02-03
tags: ["web", "logging", "operations"]
---

## 요약

Nginx 로그는 트래픽 흐름, 오류, 지연을 가장 빠르게 확인할 수 있는 자료로 활용합니다.

## 핵심 개념

- access/error 로그를 분리해 관리합니다.
- 포맷에 요청 ID를 포함합니다.
- 로그 회전과 보관 정책을 운영합니다.

## 기본 위치

- 접근 로그: `/var/log/nginx/access.log`
- 에러 로그: `/var/log/nginx/error.log`

## 명령

```bash
tail -f /var/log/nginx/access.log
```
실시간 요청 흐름을 확인합니다.

```bash
tail -f /var/log/nginx/error.log
```
오류 로그를 실시간으로 확인합니다.

```bash
grep ' 5[0-9][0-9] ' /var/log/nginx/access.log | head
```
5xx 응답을 빠르게 샘플링합니다.

```bash
awk '{print $7}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head
```
요청 경로별 트래픽 상위를 집계합니다.

## 커스텀 로그 포맷 예시

```text
log_format main '$remote_addr - $request '
                '$status $body_bytes_sent '
                '$request_time $upstream_response_time';
```

로그 포맷에서 사용되는 주요 필드를 아래에 정리합니다.
- `$remote_addr`: 클라이언트 IP
- `$request`: 메서드와 경로
- `$status`: 응답 코드
- `$request_time`: Nginx 처리 시간
- `$upstream_response_time`: 업스트림 응답 시간

## 운영 팁

- 업스트림 응답 시간과 상태 코드를 로그에 포함합니다.
- 로그 로테이션과 보존 정책을 명확히 합니다.
- 민감한 값은 마스킹합니다.

## 주의사항

- 로그가 커지면 로테이션을 반드시 설정합니다.
- 에러가 업스트림에서 발생할 수 있으므로 애플리케이션 로그도 확인합니다.