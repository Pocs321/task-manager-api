---
description: Build and validate Docker image
---

Build the Docker image and check for issues.

## Docker Build

```
$(`docker build -t task-api . 2>&1 || echo "Docker build failed or Docker not running"`)
```

## Image Size

```
$(`docker images task-api --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}" 2>&1 || true`)
```

## Checklist

- Did the build succeed?
- Is the image size under 200MB?
- Is it using multi-stage build?
- Is it running as non-root user?

Report findings and suggest optimizations if needed.
