---
title: "Docker image optimization"
description: "Reduce image size and build time with simple patterns."
pubDate: 2026-02-03
tags: ["docker", "devops", "performance"]
---

## Summary

Smaller images build faster, deploy faster, and reduce security exposure.

## Techniques

- Use multi-stage builds.
- Pin base images with specific tags.
- Clean package caches in the same layer.
- Only copy what you need.

## Example (multi-stage)

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
```

## Pitfalls

- Leaving build tools in the final image.
- Using `latest` tags can break reproducibility.
