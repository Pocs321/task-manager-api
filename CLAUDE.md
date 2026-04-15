# Project Handbook

## Overview

This is the main project handbook for Claude. Read this at the start of every session.

## Build & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## Architecture

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **State management**: React Context / hooks
- **API layer**: REST with fetch
- **Testing**: Vitest + React Testing Library

## Project Structure

```
src/
  components/    # Reusable UI components
  pages/         # Page-level components / routes
  hooks/         # Custom React hooks
  utils/         # Helper functions
  services/      # API client / service layer
  types/         # TypeScript type definitions
  assets/        # Static assets (images, fonts)
public/          # Public static files
tests/           # Test files
```

## Conventions

- Use TypeScript strict mode
- Prefer functional components with hooks
- Name components in PascalCase, files in kebab-case
- Use named exports (not default exports)
- Keep components small and focused (< 150 lines)
- Co-locate tests next to source files when possible

## Error Handling

- Use try/catch at service boundaries
- Display user-friendly error messages via toast/notification
- Log errors to console in development only
- Never swallow errors silently

## Git

- Write concise commit messages in imperative mood
- One logical change per commit
- Always run lint and tests before committing

## Gotchas

- Do NOT read or commit `.env` files
- Do NOT install packages without user approval
- Always check for existing utilities before creating new ones
- Be careful with `any` types - prefer `unknown` when the type is uncertain
