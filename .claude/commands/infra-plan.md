---
description: Run terraform plan and review infrastructure changes
---

Review the planned Terraform changes.

## Terraform Plan

```
$(`cd infra && terraform plan -no-color 2>&1 || echo "Terraform not initialized or no infra/ directory"`)
```

## Checklist

- Will any resources be DESTROYED? Flag these as critical.
- Are all new resources properly tagged?
- Are security groups least-privilege?
- Are secrets referenced from Secrets Manager (not hardcoded)?
- Will there be downtime?

Summarize what will change and flag any risks.
