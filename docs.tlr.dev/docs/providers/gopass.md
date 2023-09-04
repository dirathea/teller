# Gopass

## Authentication

If you have the Gopass working and configured, there's no special action to take.

Configuration is environment based, as defined by client standard. See variables [here](https://github.com/gopasspw/gopass/blob/master/docs/config.md).

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write` |

## Key format
  - `env_sync` - path based, we use the last segment as the variable name
  - `env` - any string, no special requirement

## Example Config

```yaml
gopass:
  env_sync:
    path: foo
  env:
    SLACK_HOOK:
      path: path: foo/bar
```