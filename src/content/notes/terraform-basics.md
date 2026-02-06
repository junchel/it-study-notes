---
title: "Terraform 기초"
description: "IaC 기반 인프라를 코드로 관리하는 기본 원칙과 운영 포인트를 정리합니다."
pubDate: 2026-02-03
tags: ["infrastructure", "automation", "devops"]
---

## 요약

Terraform은 인프라를 코드로 선언하고 상태(state)로 관리합니다. 상태 관리와 모듈화가 실무 핵심입니다.

## 핵심 개념

- HCL로 인프라 구성을 선언합니다.
- 상태 파일은 단일 진실(Source of Truth)입니다.
- 계획(Plan)과 적용(Apply)을 분리합니다.
- 모듈로 반복 구성을 표준화합니다.

## 체크리스트

- 상태 파일을 원격 백엔드에 저장합니다.
- 변경 전 `plan` 결과를 리뷰합니다.
- 민감 값은 `sensitive`로 처리합니다.
- 모듈 버전을 고정합니다.

## 명령

```bash
terraform fmt -recursive
```
구성 파일을 일관된 스타일로 정리합니다.

```bash
terraform init
```
프로바이더와 백엔드를 초기화합니다.

```bash
terraform validate
```
구성 문법과 기본 유효성을 검사합니다.

```bash
terraform plan -out=tfplan
```
변경 사항을 사전에 확인하고 결과를 파일로 저장합니다.

```bash
terraform apply tfplan
```
검토된 계획을 그대로 적용해 변경을 최소화합니다.

## 운영 팁

- 상태 잠금(lock)을 지원하는 백엔드를 사용합니다.
- 작업자는 최소 권한으로 실행합니다.
- 환경별 워크스페이스 대신 별도 디렉터리 분리를 검토합니다.

## 주의사항

- 상태 파일 유출은 보안 사고로 이어집니다.
- 수동 변경은 드리프트를 유발합니다.
- `apply` 전에 항상 `plan`을 확인합니다.