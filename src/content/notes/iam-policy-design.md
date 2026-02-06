---
title: "클라우드 IAM 정책 설계"
description: "최소 권한을 위한 실전 클라우드 접근 정책 팁."
pubDate: 2026-02-03
tags: ["cloud", "iam", "security"]
---

## 요약

IAM 정책은 허용할 액션과 리소스를 최소화해 위험을 줄입니다. 명시적 거부, 조건, 리소스 스코프를 활용해 안전하면서도 실무에 맞는 정책을 설계해야 합니다.

## 핵심 개념

- 기본은 거부(Deny)이며 필요한 권한만 명시적으로 허용합니다.
- 액션과 리소스는 가능한 한 구체적으로 제한합니다.
- 조건 키(MFA, IP, 태그 등)로 추가 제약을 걸어 방어력을 높입니다.
- 권한 경계와 조직 정책(SCP)을 활용해 상한선을 둡니다.
- 정책 평가 순서를 이해하고 명시적 거부를 우선 적용합니다.

## 절차

1. 업무 흐름에 필요한 액션과 리소스를 목록화합니다.
2. 리소스 ARN을 좁게 지정하고 와일드카드를 최소화합니다.
3. 조건(시간, MFA, 태그, IP 등)을 적용해 범위를 줄입니다.
4. 정책 시뮬레이터로 실제 허용/거부를 검증합니다.
5. 역할에 부착하고 운영 로그로 사용 흔적을 확인합니다.
6. 정기적으로 사용되지 않는 권한을 제거합니다.

## 정책 예시

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::example-bucket/*"]
    }
  ]
}
```
특정 버킷 읽기만 허용하는 최소 권한 예시입니다.

## 명령

```bash
aws iam simulate-principal-policy --policy-source-arn arn:aws:iam::123456789012:role/AppRole --action-names s3:GetObject --resource-arns arn:aws:s3:::example-bucket/*
```
정책이 특정 액션을 허용하는지 시뮬레이션합니다.

```bash
aws iam list-attached-role-policies --role-name AppRole
```
역할에 부착된 정책을 확인합니다.

```bash
aws iam get-policy-version --policy-arn arn:aws:iam::123456789012:policy/AppPolicy --version-id v1
```
정책 버전 내용을 조회합니다.

```bash
aws iam list-policies --scope Local --only-attached
```
계정 내 사용 중인 로컬 정책 목록을 확인합니다.

## 운영 팁

- 읽기 전용 정책으로 시작해 필요한 권한만 추가합니다.
- `iam:PassRole`는 최소 범위로 제한합니다.
- 개발/테스트 계정에는 권한 경계를 적용합니다.
- 정책 변경은 리뷰와 변경 로그를 남깁니다.

## 주의사항

- `Action: *` 또는 `Resource: *`는 과도한 권한을 초래합니다.
- 조건 없는 정책은 예상치 못한 권한 확장을 유발합니다.
- 정책 변경을 테스트 없이 적용하면 장애가 발생할 수 있습니다.
