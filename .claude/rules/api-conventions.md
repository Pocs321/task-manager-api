---
description: API layer conventions for service files
globs: "src/services/**/*.{ts,js}"
---

# API Conventions

- All API calls go through the `services/` layer - never call fetch directly from components
- Use async/await, not raw Promises
- Return typed responses; avoid `any`
- Handle HTTP errors consistently: check `response.ok`, throw on failure
- Use constants for base URLs and endpoint paths
- Include proper error messages that can be shown to users
- Add request/response type definitions in `types/`
