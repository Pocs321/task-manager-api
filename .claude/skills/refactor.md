---
description: Automatically triggered when the user asks to refactor, simplify, clean up, or reorganize code or infrastructure.
---

# Refactor Skill

When refactoring:

1. Read the full file to understand context
2. For API code: extract business logic to services, keep controllers thin
3. For Terraform: extract repeated patterns into modules
4. For Docker: optimize layer caching and reduce image size
5. Make changes incrementally
6. Preserve all existing behavior
7. Run tests after refactoring
