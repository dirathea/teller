# Process Env

Load the environment variables from the parent process as needed.

## Authentication

No need.

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read` |

## Key format
  - `env_sync` - Will return all the environment variables in the parent process
    - `path` - Value isn't required or used
  - `env`
    - `field` - Optional field: specific environment variable in the parent process

## Example Config

```yaml
providers:
  process_env:
    env:
      ETC_DSN:
        # Optional: accesses the environment variable `SOME_KEY` and maps it to ETC_DSN
        field: SOME_KEY
```