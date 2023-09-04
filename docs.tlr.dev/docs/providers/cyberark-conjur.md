# CyberArk Conjur

## Authentication

Requires a username and API key populated in your environment:

- `CONJUR_AUTHN_LOGIN`
- `CONJUR_AUTHN_API_KEY`

Requires a .conjurrc file in your User's home directory:

```yaml
---
account: conjurdemo
plugins: []
appliance_url: https://conjur.example.com
cert_file: ""
```

- `account` is the organization account created during initial deployment
- `plugins` will be blank
- `appliance_url` should be the Base URI for the Conjur service
- `cert_file` should be the public key certificate if running in self-signed mode

## Features

| Feature | Value |
| --- | --- |
| Sync | `no` [sync: accepting PR](https://github.com/tellerops/teller) |
| Mapping | `yes` |
| Modes | `read+write` |

## Key format
  - `env_sync` - not supported to comply with least-privilege model
  - `env` - the secret variable path in Conjur Secrets Manager

## Example Config

```yaml
cyberark_conjur:
  env:
    DB_USERNAME:
      path: /secrets/prod/pgsql/username
    DB_PASSWORD:
      path: /secrets/prod/pgsql/password
```