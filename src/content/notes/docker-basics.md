---
title: "Docker basics for local labs"
description: "Core Docker concepts and commands for repeatable lab environments."
pubDate: 2026-02-03
tags: ["docker", "devops", "workflow"]
---

## Summary

Docker lets you package and run services consistently across machines.

## Key ideas

- Images are immutable templates; containers are running instances.
- Use volumes for persistent data.
- Keep Dockerfiles small and layered.

## Commands or steps

```bash
docker version
docker pull nginx:latest
docker run -p 8080:80 nginx:latest
docker ps -a
docker logs <container-id>
docker stop <container-id>
docker rm <container-id>
```

## Pitfalls

- Forgetting to map ports when testing locally.
- Storing secrets inside images.
- Leaving unused containers and images, consuming disk space.

## References

- Official Docker docs
