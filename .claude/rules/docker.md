---
description: Docker conventions for container files
globs: "{Dockerfile,docker-compose*.yml}"
---

# Docker Rules

- Use multi-stage builds: stage 1 builds, stage 2 runs
- Base production image on node:alpine for smallest size
- Run as non-root user (USER node)
- Copy only package*.json first, then npm install (layer caching)
- Use .dockerignore to exclude node_modules, .git, .env
- Expose only the necessary port
- Use HEALTHCHECK instruction
- Pin base image versions (e.g., node:20-alpine, not node:latest)
