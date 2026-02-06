---
title: "로그 분석 기본"
description: "로그 수집, 질의, 해석으로 장애를 빠르게 진단합니다."
pubDate: 2026-02-03
tags: ["logging", "observability", "security", "operations"]
---

## 요약

로그는 “무엇이 언제 일어났는지”를 보여주는 가장 직접적인 증거합니다.

## 핵심 개념

- **구조화 로그**: JSON 등으로 필드를 고정해 검색성을 높입니다.
- **상관 ID**: 요청 단위 추적을 가능하게 합니다.
- **시간 동기화**: NTP가 맞지 않으면 타임라인이 뒤틀립니다.

## 명령

```bash
journalctl -u nginx --since "1 hour ago"
```
최근 1시간 동안의 서비스 로그를 빠르게 확인합니다.

```bash
grep -n "ERROR" /var/log/app.log
```
오류 라인을 줄 번호와 함께 추출합니다.

```bash
rg "timeout" /var/log/app.log
```
ripgrep로 타임아웃 패턴을 빠르게 탐색합니다.

```bash
awk '{print $9}' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head
```
응답 코드 분포를 집계해 5xx 증가 여부를 파악합니다.

```bash
jq -c 'select(.level=="error")' /var/log/app.json
```
JSON 로그에서 error 레벨만 필터링합니다.

## 해석 포인트

- **시간 창**: 장애 시점 ±5분부터 좁혀가며 확인합니다.
- **패턴**: 동일 IP, 동일 요청 경로, 동일 오류 코드의 반복을 찾습니다.
- **상관성**: 에러 증가 시점과 배포/설정 변경 시점을 비교합니다.

## 운영 팁

- 필드명을 표준화해 검색 효율을 높입니다.
- 노이즈가 큰 로그는 샘플링합니다.
- 요청 ID로 시스템 간 추적을 연결합니다.

## 주의사항

- 민감 정보를 마스킹 없이 로깅하면 보안 사고로 이어집니다.
- 접근 통제 없이 로그를 저장하면 개인정보/보안 이슈가 발생합니다.
- 서버 간 시간 불일치는 원인 분석을 어렵게 만듭니다.