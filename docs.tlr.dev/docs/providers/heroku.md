# Heroku

## Authentication

Requires an API key populated in your environment in: `HEROKU_API_KEY` (you can fetch it from your ~/.netrc).

Generate new token with Heroku cli: `heroku authorizations:create` then use the TOKEN value.

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write` |

## Key format
- `env_sync` - name of your Heroku app
- `env` - the actual env variable name in your Heroku settings

## Example Config

```yaml
heroku:
  env_sync:
    path: my-app-dev
  env:
    MG_KEY:
      path: my-app-dev
```