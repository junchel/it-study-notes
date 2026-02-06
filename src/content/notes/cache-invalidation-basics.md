---
title: "캐시 무효화 기본"
description: "성능을 해치지 않으면서 캐시를 신선하게 유지합니다."
pubDate: 2026-02-03
tags: ["caching", "performance", "backend"]
---

## 요약

캐시 무효화는 신선도와 속도·비용의 균형을 맞춥니다.

## 핵심 개념

- 시간 기반 만료는 단순하고 예측 가능합니다.
- 이벤트 기반 무효화는 데이터를 신선하게 유지합니다.
- 캐시 키는 결과를 바꾸는 모든 입력을 포함해야 합니다.
- stale-while-revalidate는 갱신 스파이크를 완화합니다.
- 캐시 스탬피드 방지를 위해 락 또는 백오프를 사용합니다.
- 퍼지(purge)와 밴(ban) 정책을 구분해 운영합니다.

## 명령

```bash
curl -I https://example.com
```
Cache-Control과 ETag 헤더를 확인합니다.

```bash
curl -I -H "Cache-Control: no-cache" https://example.com
```
캐시를 우회한 응답과 비교합니다.

```bash
rg -n "Cache-Control|ETag|Surrogate-Control" config/ -S
```
캐시 헤더 설정 위치를 찾습니다.

```bash
rg -n "cache key|cache_key" src -S
```
캐시 키 생성 로직이 존재하는지 확인합니다.

## 예시 캐시 키

```text
product:{id}:currency:{currency}:locale:{locale}
```
결과에 영향을 주는 파라미터를 모두 포함하도록 키를 설계합니다.

## 운영 팁

- 비즈니스가 허용하는 신선도 수준에 맞춰 TTL을 설정합니다.
- 중요 데이터 쓰기 시 캐시를 무효화합니다.
- 스키마 변경 시 버전 캐시 키를 사용합니다.
- 히트율과 stale 응답 비율을 모니터링합니다.
- 인기 키는 사전 워밍업으로 초기 지연을 줄입니다.
- 갱신 시점에 백그라운드 재생성을 적용합니다.

## 주의사항

- 핵심 입력을 누락하면 잘못된 데이터가 반환됩니다.
- TTL이 너무 짧으면 캐시 가치가 감소합니다.
- 대량 무효화는 트래픽 스파이크를 만들 수 있습니다.
