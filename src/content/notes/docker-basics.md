---
title: "로컬 랩을 위한 Docker 기본"
description: "반복 가능한 실습 환경을 위한 Docker 핵심 개념과 명령."
pubDate: 2026-02-03
tags: ["docker", "devops", "workflow"]
---

## 요약

Docker는 서비스를 패키징해 어떤 머신에서도 일관되게 실행할 수 있게 합니다.

## 핵심 개념

- 이미지가 불변 템플릿이고, 컨테이너는 실행 인스턴스입니다.
- 영속 데이터는 볼륨을 사용합니다.
- Dockerfile은 작고 계층적으로 유지합니다.
- 컨테이너는 격리된 프로세스이며 호스트 커널을 공유합니다.

## 명령

```bash
docker version
```
Docker 클라이언트/서버 버전을 확인합니다.

```bash
docker pull nginx:latest
```
Nginx 최신 이미지를 내려받습니다.

```bash
docker run -p 8080:80 nginx:latest
```
컨테이너를 실행하고 8080 포트를 80 포트로 매핑합니다.

```bash
docker volume ls
```
볼륨 목록을 확인합니다.

```bash
docker ps -a
```
모든 컨테이너 목록을 확인합니다.

```bash
docker logs <container-id>
```
지정한 컨테이너 로그를 확인합니다.

```bash
docker stop <container-id>
```
지정한 컨테이너를 중지합니다.

```bash
docker rm <container-id>
```
지정한 컨테이너를 삭제합니다.

## 운영 팁

- 데이터는 볼륨에 저장해 컨테이너 재시작에 대비합니다.
- 이미지 태그는 고정해 예기치 않은 변경을 피합니다.
- 필요 시 non-root 사용자로 실행합니다.
- 리소스 제한을 설정해 로컬 머신 과부하를 방지합니다.

## 주의사항

- 로컬 테스트 시 포트 매핑을 잊으면 접속할 수 없습니다.
- 시크릿을 이미지 안에 저장하면 유출 위험이 큽니다.
- 사용하지 않는 컨테이너/이미지가 디스크를 잠식합니다.

## 참고

- 공식 Docker 문서
