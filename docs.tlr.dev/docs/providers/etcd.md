# Etcd

## Authentication

If you have `etcdctl` already working there's no special action to take.

We follow how `etcdctl` takes its authentication settings. These environment variables need to be populated

- `ETCDCTL_ENDPOINTS`

For TLS:

- `ETCDCTL_CA_FILE`
- `ETCDCTL_CERT_FILE`
- `ETCDCTL_KEY_FILE`

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
etcd:
  env_sync:
    path: /prod/billing-svc
  env:
    MG_KEY:
      path: /prod/billing-svc/vars/mg
```