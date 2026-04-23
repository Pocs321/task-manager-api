---
description: Automatically triggered when the user asks to create a new API endpoint, route, service, or Terraform module.
---

# New Component Skill

When creating a new API endpoint:

1. Create route file in src/routes/
2. Create controller in src/controllers/
3. Create service with business logic in src/services/
4. Add Zod validation schema
5. Add Prisma model if new entity needed
6. Register route in the main app
7. Write tests with Jest + Supertest

When creating a new Terraform module:

1. Create module directory in infra/modules/
2. Add main.tf, variables.tf, outputs.tf
3. Tag all resources
4. Reference from root main.tf
