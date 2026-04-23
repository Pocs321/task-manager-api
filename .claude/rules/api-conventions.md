---
description: REST API conventions for route and controller files
globs: "src/{routes,controllers}/**/*.ts"
---

# API Conventions

- Use RESTful naming: GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id
- Return consistent shape: `{ data, error, message }`
- Use correct status codes: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error
- Validate request body with Zod before processing
- Controllers handle HTTP — no business logic
- Services handle business logic — no req/res objects
- Always include error handling middleware
- Use pagination for list endpoints: `?page=1&limit=20`
