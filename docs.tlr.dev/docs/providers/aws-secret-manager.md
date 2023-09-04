# AWS Secrets Manager

## Authentication

Your standard `AWS_DEFAULT_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` need to be populated in your environment

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write` |


## Key format
  - `env_sync` - path based
  - `env` - path based

## Example Config

```yaml
aws_secretsmanager:
  env_sync:
    path: /prod/billing-svc
  env:
    MG_KEY:
      path: /prod/billing-svc/vars/mg
```