---
title: "Git workflow basics"
description: "A minimal Git workflow for personal projects and study notes."
pubDate: 2026-02-03
tags: ["git", "workflow", "version-control"]
---

## Summary

Use Git to keep a clean history and recover from mistakes.

## Key ideas

- Commit small, focused changes.
- Use branches for experiments.
- Pull before pushing if others change the repo.

## Commands or steps

```bash
git status
git add .
git commit -m "Describe the change"
git branch feature/topic
git switch feature/topic
git log --oneline --decorate --graph
```

## Pitfalls

- Committing large unrelated changes together.
- Forgetting to pull before pushing to a shared branch.
- Editing binary files without source control strategy.

## References

- `git help status`, `git help commit`
