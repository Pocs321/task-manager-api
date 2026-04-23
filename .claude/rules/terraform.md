---
description: Terraform conventions for infrastructure code
globs: "infra/**/*.tf"
---

# Terraform Rules

- Use modules for reusable infrastructure (ecs/, rds/, alb/, vpc/)
- Every resource must have tags: Project, Environment, ManagedBy
- Use variables with descriptions and types — no hardcoded values
- Use `terraform fmt` before committing
- Outputs should expose ARNs, endpoints, and IDs needed by other modules
- Security groups: deny all by default, allow only what's needed
- Use data sources to reference existing resources, not hardcoded IDs
- Never store secrets in .tf files — reference Secrets Manager
