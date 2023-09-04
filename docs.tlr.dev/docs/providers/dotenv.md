# .ENV (dotenv)

## Authentication

No need. You'll be pointing to a one or more `.env` files on your disk.

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write+delete` |


## Key format
  - `env` - env key like

## Example Config

You can mix and match any number of files, sitting anywhere on your drive.

```yaml
dotenv:
  env_sync:
    path: ~/my-dot-env.env
  env:
    MG_KEY:
      path: ~/my-dot-env.env
```