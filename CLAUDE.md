# Project Handbook

## Overview

REST API application (Task Manager) deployed on AWS ECS Fargate with full CI/CD pipeline.
Auto-deploys on PR merge via GitHub Actions with blue/green deployment.

## Architecture

```
GitHub → GitHub Actions (CI/CD)
  → Docker Build (multi-stage)
  → ECR (store image)
  → ECS Fargate (run container)
  → ALB (load balancer, HTTPS, health checks)
  → RDS PostgreSQL (Multi-AZ, encrypted)
  → Secrets Manager (DB credentials)
```

## Tech Stack

- **Language**: Node.js + TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL (AWS RDS)
- **ORM**: Prisma
- **Testing**: Jest + Supertest
- **Container**: Docker (multi-stage build)
- **IaC**: Terraform
- **CI/CD**: GitHub Actions
- **Cloud**: AWS (ECS Fargate, ALB, RDS, ECR, Secrets Manager)

## Build & Run

```bash
# Local development
npm install
npm run dev                # Start with hot reload
npm run build              # Compile TypeScript
npm test                   # Run tests
npm run lint               # Lint code

# Docker
docker build -t task-api . # Build image
docker compose up          # Run locally with PostgreSQL

# Terraform
cd infra/
terraform init
terraform plan             # Preview changes
terraform apply            # Deploy infrastructure

# Database
npx prisma migrate dev     # Run migrations locally
npx prisma generate        # Generate client
npx prisma studio          # Open DB browser
```

## Project Structure

```
src/
  routes/          # Express route handlers
  controllers/     # Request/response logic
  services/        # Business logic
  models/          # Prisma schema & types
  middleware/      # Auth, error handling, validation
  utils/           # Helper functions
  config/          # App configuration
  __tests__/       # Test files
infra/
  modules/         # Terraform modules
    ecs/           # ECS Fargate service + task definition
    rds/           # RDS PostgreSQL + security groups
    alb/           # Load balancer + target groups
    ecr/           # Container registry
    vpc/           # Networking
    secrets/       # Secrets Manager
  environments/    # Per-environment tfvars
.github/
  workflows/       # GitHub Actions CI/CD pipelines
```

## Conventions

- Use TypeScript strict mode
- Use async/await, never raw callbacks
- Validate all inputs with Zod schemas
- Use Prisma for all database operations
- Keep controllers thin — business logic goes in services/
- Return consistent API responses: `{ data, error, message }`
- Use HTTP status codes correctly (201 for create, 404 for not found, etc.)

## Security

- NEVER hardcode secrets — use Secrets Manager or environment variables
- NEVER commit .env, .tfvars, or credential files
- All RDS connections use SSL
- API authentication via JWT tokens
- Validate and sanitize all user inputs
- Security groups: least-privilege access

## Docker

- Use multi-stage builds (builder → production)
- Production image based on node:alpine
- Run as non-root user in container
- Never copy node_modules into image — install in build stage
- Keep image size under 200MB

## Terraform

- Use modules for reusable components
- Use workspaces or tfvars for environments (dev/staging/prod)
- Always run `terraform plan` before `terraform apply`
- State stored in S3 with DynamoDB locking
- Tag all resources with Project, Environment, ManagedBy

## Git

- Write concise commit messages in imperative mood
- One logical change per commit
- PR merges to main trigger auto-deploy
- Use conventional commits: feat:, fix:, infra:, docs:, test:

## Gotchas

- Do NOT run `terraform destroy` without explicit approval
- Do NOT push directly to main — always use PRs
- Do NOT store secrets in Terraform state — use Secrets Manager references
- RDS deletion protection is ON — disable manually if needed
- ECS tasks need at least 512 CPU / 1024 MB memory for Express
