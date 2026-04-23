---
description: Review current changes before committing
---

Review the following changes for bugs, security issues, and potential improvements.

## Current Git Diff

```
$(`git diff`)
```

## Staged Changes

```
$(`git diff --staged`)
```

## Checklist

- Are there any bugs or logic errors?
- Are there any security concerns (hardcoded secrets, SQL injection, missing validation)?
- Are API responses consistent (`{ data, error, message }`)?
- Are Terraform changes safe? Will they destroy resources?
- Are Docker best practices followed (multi-stage, non-root, layer caching)?
- Are there missing tests for new functionality?

Provide a summary of findings and suggest fixes.
