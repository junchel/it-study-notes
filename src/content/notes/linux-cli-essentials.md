---
title: "Linux CLI 필수"
description: "Linux 시스템을 탐색하고 관리하기 위한 핵심 명령과 패턴."
pubDate: 2026-02-03
tags: ["linux", "cli", "workflow"]
---

## 요약

가장 자주 쓰이는 Linux 셸 명령과 워크플로를 간결하게 정리한 레퍼런스합니다.

## 핵심 개념

- 작은 명령을 파이프로 연결해 데이터를 변환합니다.
- 정확한 사용법은 `--help`와 `man`을 우선합니다.
- 상대/절대 경로를 일관되게 사용합니다.

## 명령

```bash
pwd
```
현재 작업 디렉터리를 출력합니다.

```bash
ls -la
```
숨김 파일을 포함해 상세 목록과 권한을 확인합니다.

```bash
cd /var/log
```
로그 디렉터리로 이동합니다.

```bash
cat file.txt
```
파일 내용을 그대로 출력합니다.

```bash
less file.txt
```
파일을 페이지 단위로 탐색합니다.

```bash
head -n 20 file.txt
```
파일의 첫 20줄을 확인합니다.

```bash
tail -n 100 file.txt
```
파일의 마지막 100줄을 확인합니다.

```bash
find . -name "*.log"
```
현재 위치에서 로그 파일을 검색합니다.

```bash
grep -R "error" /var/log
```
/var/log에서 error 문자열을 재귀 검색합니다.

```bash
chmod 644 file.txt
```
파일 권한을 소유자 읽기/쓰기, 그룹/기타 읽기로 설정합니다.

```bash
chown user:group file.txt
```
파일 소유자와 그룹을 변경합니다.

```bash
systemctl status ssh
```
SSH 서비스 상태를 확인합니다.

```bash
journalctl -u ssh
```
SSH 서비스 로그를 확인합니다.

## 운영 팁

- history와 alias를 활용해 반복 작업을 줄입니다.
- 큰 파일은 less로 확인해 성능을 확보합니다.
- 와일드카드 사용 시 대상 파일을 먼저 확인합니다.

## 주의사항

- 잘못된 경로에서 `rm -rf` 실행.
- 스크립트에서 상대 경로 혼동.
- 백업이나 버전 관리 없이 파일을 수정함.

## 참고

- `man ls`, `man find`, `man grep`, `man chmod`