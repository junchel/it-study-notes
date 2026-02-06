---
title: "로그 로테이션 기본"
description: "logrotate로 로그 크기와 보존을 안전하게 관리합니다."
pubDate: 2026-02-03
tags: ["operations", "logging", "linux"]
---

## 요약

로그 로테이션은 디스크 고갈을 방지하고 로그 관리를 단순화합니다.

## 핵심 개념

- **주기/크기 기준**으로 회전합니다(daily, size 등).
- **압축**으로 저장 공간을 줄이는 데 활용합니다.
- **보존 개수**로 롤백/감사 범위를 유지합니다.

## 예시 설정

```text
/var/log/nginx/*.log {
  daily
  rotate 7
  compress
  delaycompress
  missingok
  notifempty
  create 0640 www-data adm
  sharedscripts
  postrotate
    systemctl reload nginx
  endscript
}
```

설정 항목의 의미를 아래에 정리합니다.
- `daily`: 하루 단위로 회전합니다.
- `rotate 7`: 7개 보관 후 삭제합니다.
- `compress`: 오래된 로그를 압축합니다.
- `delaycompress`: 직전 파일은 압축을 한 번 미룹니다.
- `missingok`: 파일이 없으면 오류 없이 진행합니다.
- `notifempty`: 비어 있으면 회전하지 않습니다.
- `create 0640 ...`: 새 로그 파일 권한/소유자를 설정합니다.
- `postrotate`: 회전 후 서비스가 로그를 다시 열도록 합니다.

## 명령

```bash
logrotate -d /etc/logrotate.conf
```
실제 적용 없이 설정을 점검합니다(드라이 런).

```bash
logrotate -f /etc/logrotate.conf
```
조건과 관계없이 강제로 회전을 실행합니다.

```bash
logrotate -v /etc/logrotate.conf
```
자세한 로그를 출력해 회전 여부를 확인합니다.

## 운영 팁

- 회전 후 애플리케이션 재열기 신호를 확인합니다.
- 압축과 보존 기간을 정책으로 고정합니다.
- 테스트 환경에서 먼저 적용합니다.

## 주의사항

- 서비스가 로그 재오픈을 지원하지 않으면 회전 후 로그가 끊길 수 있으므로 주의합니다.
- 로그가 계속 커지면 설정 경로와 스케줄(크론/타이머)을 점검합니다.