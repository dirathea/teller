# Consul

## Authentication

If you have the Consul CLI working and configured, there's no special action to take.

Configuration is environment based, as defined by client standard. See variables [here](https://github.com/hashicorp/consul/blob/master/api/api.go#L28).

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write` |

## Key Format
- `env_sync` - path based, we use the last segment as the variable name
- `env` - any string, no special requirement

## Example Config

```yaml
consul:
  env_sync:
    path: ops/config
  env:
    SLACK_HOOK:
      path: ops/config/slack
```