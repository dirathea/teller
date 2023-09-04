# Vercel

## Authentication

Requires an API key populated in your environment in: `VERCEL_TOKEN`.

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read`, [write: accepting PR](https://github.com/tellerops/teller) |

## Key format
  - `env_sync` - name of your Vercel app
  - `env` - the actual env variable name in your Vercel settings

## Example Config

```yaml
vercel:
  env_sync:
    path: my-app-dev
  env:
    MG_KEY:
      path: my-app-dev
```
