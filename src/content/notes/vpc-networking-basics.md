---
title: "VPC 네트워킹 기초"
description: "VPC 구성 요소와 라우팅, 보안 그룹의 기본 원리를 정리합니다."
pubDate: 2026-02-03
tags: ["cloud", "network", "infrastructure"]
---

## 요약

VPC는 클라우드 네트워크의 격리된 공간입니다. 서브넷, 라우팅, 게이트웨이 구성이 핵심입니다.

## 핵심 개념

- 퍼블릭/프라이빗 서브넷을 구분합니다.
- 라우팅 테이블로 트래픽 흐름을 정의합니다.
- 인터넷 게이트웨이와 NAT 게이트웨이를 분리합니다.
- 보안 그룹과 NACL의 역할을 구분합니다.

## 체크리스트

- 퍼블릭 서브넷에만 인터넷 게이트웨이를 연결합니다.
- 프라이빗 서브넷은 NAT를 통해 아웃바운드만 허용합니다.
- 라우팅 테이블이 의도한 경로를 갖는지 확인합니다.
- 보안 그룹은 최소 권한으로 설계합니다.

## 명령

```bash
aws ec2 describe-vpcs --query "Vpcs[].{Id:VpcId,Cidr:CidrBlock}" --output table
```
VPC 목록과 CIDR 범위를 확인합니다.

```bash
aws ec2 describe-subnets --query "Subnets[].{Id:SubnetId,Cidr:CidrBlock,Az:AvailabilityZone}" --output table
```
서브넷 구성과 가용 영역 분포를 확인합니다.

```bash
aws ec2 describe-route-tables --query "RouteTables[].Routes" --output json | head -n 20
```
라우팅 테이블의 경로를 확인합니다.

```bash
aws ec2 describe-security-groups --query "SecurityGroups[].{Id:GroupId,Name:GroupName}" --output table
```
보안 그룹 목록을 확인합니다.

## 운영 팁

- CIDR 설계는 장기 확장을 고려해 여유 있게 잡습니다.
- 보안 그룹 변경 이력은 감사 대상에 포함합니다.
- 서브넷 간 통신은 필요 최소로만 허용합니다.

## 주의사항

- NAT 비용은 트래픽 규모에 따라 급증할 수 있습니다.
- 라우팅 오류는 전체 서비스 장애로 이어질 수 있습니다.
- 공용 서브넷에 민감 리소스를 두지 않습니다.