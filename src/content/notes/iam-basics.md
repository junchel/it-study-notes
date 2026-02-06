---
title: "IAM 및 접근 제어 기본"
description: "역할, 정책, 최소 권한, 접근 리뷰 관행."
pubDate: 2026-02-03
tags: ["security", "iam", "cloud"]
---

## 요약

IAM은 인증과 권한 부여를 분리해 최소 권한을 적용하는 체계입니다. 사람 계정과 서비스 계정을 분리하고, 단기 자격 증명과 접근 리뷰로 위험을 줄입니다.

## 핵심 개념

- 인증(Authentication)과 권한(Authorization)을 명확히 분리합니다.
- 사람 계정과 워크로드 계정을 분리하고 역할 기반으로 권한을 부여합니다.
- 최소 권한과 직무 분리를 기본 원칙으로 합니다.
- MFA와 단기 토큰(세션)을 기본으로 사용합니다.
- 접근 로그와 변경 이력을 장기 보관합니다.

## 절차

1. 사용자, 서비스, 시스템 계정을 인벤토리화합니다.
2. 직무별 역할과 그룹을 정의하고 권한을 매핑합니다.
3. MFA/SSO를 강제하고 루트 계정을 보호합니다.
4. 단기 토큰과 키 회전 정책을 적용합니다.
5. 접근 요청/승인/회수 프로세스를 문서화합니다.
6. 월간 접근 리뷰와 로그 감사로 이상 행위를 탐지합니다.

## 체크리스트

- 루트/관리자 계정에 MFA가 적용됨
- 사람 계정과 서비스 계정이 분리됨
- 역할/그룹 기반 권한 모델이 적용됨
- 접근 키 회전 및 만료 정책이 있음
- 접근 로그와 변경 이력이 보관됨
- 정기 권한 리뷰 일정이 있음

## 명령

```bash
aws sts get-caller-identity
```
현재 인증된 주체를 확인합니다.

```bash
aws iam list-users --query "Users[].UserName" --output table
```
사용자 계정 목록을 확인합니다.

```bash
aws iam list-roles --query "Roles[].RoleName" --output table
```
역할 목록을 확인합니다.

```bash
aws iam get-account-summary
```
계정의 보안 설정 요약을 확인합니다.

```bash
aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=ConsoleLogin --max-results 5
```
최근 콘솔 로그인 이벤트를 조회합니다.

## 운영 팁

- 장기 키 대신 역할 기반 접근과 단기 토큰을 우선 사용합니다.
- 권한 경계(Permission Boundary)로 개발 계정을 제한합니다.
- 계정/역할에 소유자와 시스템 태그를 부여합니다.
- 루트 계정 사용 알림을 즉시 전송하도록 설정합니다.

## 주의사항

- 공유 계정 사용은 감사와 추적을 어렵게 합니다.
- 광범위한 관리자 권한을 기본으로 부여하면 사고 범위가 커집니다.
- 퇴사/권한 변경 시 회수가 누락되면 장기 위험이 됩니다.
