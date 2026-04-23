---
description: Testing standards for Jest + Supertest
globs: "**/*.{test,spec}.ts"
---

# Testing Rules

- Use Jest + Supertest for API endpoint tests
- Use `describe` blocks to group by endpoint or feature
- Clear test names: `it('should return 404 when task not found')`
- Test all HTTP status codes: 200, 201, 400, 404, 500
- Test input validation (missing fields, wrong types)
- Mock external services, but use a real test database when possible
- Clean up test data in afterEach/afterAll
- Never depend on test execution order
