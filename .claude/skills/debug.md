---
description: Automatically triggered when the user reports a bug, error, failing test, or deployment issue.
---

# Debug Skill

When debugging:

1. Read the error message carefully
2. Check relevant source files, logs, and configuration
3. For API errors: trace from route → controller → service → database
4. For infra errors: check Terraform state, security groups, IAM roles
5. For Docker errors: check Dockerfile, docker-compose, and build logs
6. Identify root cause, not just symptoms
7. Propose a minimal fix
8. Suggest a test to prevent regression
