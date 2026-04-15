---
description: Testing standards and conventions
globs: "**/*.{test,spec}.{ts,tsx,js,jsx}"
---

# Testing Rules

- Write tests for all new features and bug fixes
- Use `describe` blocks to group related tests
- Use clear, descriptive test names: `it('should return null when user is not found')`
- Prefer integration tests over unit tests for components
- Mock external dependencies (API calls, third-party services), not internal modules
- Test behavior, not implementation details
- Aim for meaningful coverage, not 100% line coverage
- Use `beforeEach` for shared setup; avoid shared mutable state between tests
- Keep test files next to the source files they test
