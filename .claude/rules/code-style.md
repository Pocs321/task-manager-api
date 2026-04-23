---
description: Code style conventions for all TypeScript source files
globs: "src/**/*.ts"
---

# Code Style Rules

- Use 2-space indentation
- Use single quotes for strings
- Always use semicolons
- Prefer `const` over `let`; never use `var`
- Use arrow functions for callbacks
- Use async/await, never raw callbacks or .then chains
- Destructure objects and arrays when accessing multiple properties
- Prefer early returns over deep nesting
- Use explicit return types on exported functions
- Keep files under 200 lines — split if larger
