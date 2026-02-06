---
title: "웹 성능 진단"
description: "웹 페이지 성능을 측정하고 병목을 찾는 실무 방법을 정리합니다."
pubDate: 2026-02-03
tags: ["performance", "web", "operations"]
---

## 요약

웹 성능 진단은 사용자 경험과 직접 연결됩니다. 측정과 개선은 반드시 반복해야 합니다.

## 핵심 개념

- TTFB, LCP, CLS 같은 핵심 지표를 정의합니다.
- 네트워크, 서버, 프론트엔드 병목을 분리합니다.
- 성능 목표를 수치로 관리합니다.
- 배포 전후 비교가 중요합니다.

## 체크리스트

- 주요 페이지의 LCP/CLS/FID(또는 INP)를 추적합니다.
- 캐시와 압축 상태를 점검합니다.
- 이미지 최적화와 리소스 크기를 점검합니다.
- 서버 응답 시간을 확인합니다.

## 진단 명령

```bash
curl -s -o /dev/null -w "TTFB:%{time_starttransfer} Total:%{time_total}\n" https://example.com
```
TTFB와 전체 응답 시간을 측정합니다.

```bash
curl -I https://example.com | rg -i "cache-control|content-encoding"
```
캐시와 압축 설정을 확인합니다.

```bash
curl -s https://example.com | wc -c
```
HTML 응답 크기를 확인해 과도한 용량을 점검합니다.

```bash
rg -n "bundle" dist/ -S
```
빌드 산출물의 번들 크기 관련 항목을 확인합니다.

## 운영 팁

- 성능 회귀는 릴리스 노트에 반드시 기록합니다.
- A/B 테스트는 성능 지표와 함께 분석합니다.
- 대형 리소스는 지연 로딩을 검토합니다.

## 주의사항

- 로컬 측정 결과를 실제 사용자 경험으로 과신하지 않습니다.
- CDN 캐시 히트율이 낮으면 지연이 증가합니다.
- 최적화는 성능 목표와 비용을 함께 고려합니다.