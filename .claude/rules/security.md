---
description: Security rules applied to all files
globs: "**/*"
---

# Security Rules

- NEVER hardcode passwords, API keys, tokens, or connection strings
- NEVER commit .env, .tfvars, terraform.tfstate, or credential files
- Use AWS Secrets Manager for all sensitive values
- Database connections must use SSL in production
- Validate and sanitize all user inputs
- Use parameterized queries (Prisma handles this)
- JWT tokens must have expiration
- Security groups: least-privilege, no 0.0.0.0/0 on database ports
