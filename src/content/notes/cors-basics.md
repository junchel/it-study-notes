---
title: "CORS basics"
description: "Control which origins can access your APIs from browsers."
pubDate: 2026-02-03
tags: ["web", "security", "api"]
---

## Summary

CORS (Cross-Origin Resource Sharing) is a browser security model that controls cross-origin requests.

## Key ideas

- **Origin** = scheme + host + port.
- Browsers block cross-origin calls unless the server allows them.
- Preflight requests use `OPTIONS`.

## Example headers

```text
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Authorization, Content-Type
```

## Pitfalls

- Using `*` with credentials is not allowed.
- Preflight failures often look like generic network errors.
