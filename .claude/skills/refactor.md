---
description: Automatically triggered when the user asks to refactor, simplify, or clean up code. Handles extraction, renaming, restructuring, and dead code removal.
---

# Refactor Skill

When refactoring code:

1. Read the entire file first to understand the full context
2. Identify what can be simplified, extracted, or renamed
3. Make changes incrementally - one logical change at a time
4. Preserve all existing behavior (no functional changes)
5. Run tests after refactoring to verify nothing broke
6. If tests don't exist for the refactored code, suggest adding them
