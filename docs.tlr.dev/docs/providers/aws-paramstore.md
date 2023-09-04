# AWS Paramstore

## Authentication

Your standard `AWS_DEFAULT_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` need to be populated in your environment

## Features

| Feature | Value |
| --- | --- |
| Sync | `no` |
| Mapping | `yes` |
| Modes | `read`, [write: accepting PR](https://github.com/tellerops/teller) |

## Key format
  - `env` - path based
  - `decrypt` - available in this provider, will use KMS automatically

## Example Config

```yaml
aws_ssm:
  env:
    FOO_BAR:
      path: /prod/billing-svc/vars
      decrypt: true
```