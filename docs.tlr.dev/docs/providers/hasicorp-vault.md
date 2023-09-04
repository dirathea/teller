# Hashicorp Vault

## Authentication

If you have the Vault CLI configured and working, there's no special action to take.

Configuration is environment based, as defined by client standard. See variables [here](https://github.com/hashicorp/vault/blob/api/v1.0.4/api/client.go#L28).

## Features

|  |  |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write` |

## Key format

path based, usually starts with `secret/data/`, and more generically `[engine name]/data`

## Example

```yaml
hashicorp_vault:
  env_sync:
    path: secret/data/demo/billing/web/env
  env:
    SMTP_PASS:
      path: secret/data/demo/wordpress
      field: smtp
```