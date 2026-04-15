---
description: Run tests and analyze results
---

Run the test suite and provide a summary of results.

## Test Output

```
$(`npm test -- --reporter=verbose 2>&1 || true`)
```

## Analysis

- How many tests passed vs failed?
- Are there any flaky or skipped tests?
- Suggest fixes for any failing tests.
