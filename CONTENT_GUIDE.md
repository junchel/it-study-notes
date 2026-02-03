# Content Guide

## New note template

Create a new Markdown file in `src/content/notes/`.

```md
---
title: "Your note title"
description: "Short summary for lists and SEO"
pubDate: 2026-02-03
tags: ["networking", "linux"]
---

## Summary

Write a short overview of the problem or topic.

## Key ideas

- Bullet points that highlight the core ideas.

## Commands or steps

- Include terminal commands or step-by-step procedures.

## Pitfalls

- Common mistakes or gotchas.

## References

List URLs or citations you used.
```

## Tag rules

- Use short nouns or noun phrases.
- Reuse existing tags to keep navigation clean.
- Avoid duplicates like `API` and `apis`.

## Drafts

Add `draft: true` in the frontmatter to hide a note from the build.
