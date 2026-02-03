---
title: "HTTP status codes quick guide"
description: "Common status codes and what they mean in practice."
pubDate: 2026-02-03
tags: ["http", "web", "api"]
---

## Summary

This is a quick reference for the most common HTTP status codes you will see when building or debugging web services.

## 2xx Success

- **200 OK**: Request succeeded, response returned.
- **201 Created**: Resource created, common for POST.
- **204 No Content**: Success with no response body.

## 3xx Redirects

- **301 Moved Permanently**: Canonical URL changed.
- **302 Found**: Temporary redirect.
- **304 Not Modified**: Cache is still valid.

## 4xx Client errors

- **400 Bad Request**: Invalid request or payload.
- **401 Unauthorized**: Missing or invalid auth.
- **403 Forbidden**: Authenticated but not allowed.
- **404 Not Found**: Resource does not exist.
- **429 Too Many Requests**: Rate limited.

## 5xx Server errors

- **500 Internal Server Error**: Unexpected backend failure.
- **502 Bad Gateway**: Proxy error or upstream failure.
- **503 Service Unavailable**: Service overloaded or down.
- **504 Gateway Timeout**: Upstream timeout.

## Pitfalls

- Use 401 vs 403 correctly for auth scenarios.
- 502/504 usually point to upstream or proxy issues, not client bugs.
