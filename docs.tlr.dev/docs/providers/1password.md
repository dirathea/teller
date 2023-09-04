# 1Password

## Authentication

To integrate with the 1Password API, you should have system-to-system secret management running in your infrastructure/localhost [more details here](https://support.1password.com/connect-deploy-docker/).

Requires the following environment variables to be set:
`OP_CONNECT_HOST` - The hostname of the 1Password Connect API
`OP_CONNECT_TOKEN` - The API token to be used to authenticate the client to a 1Password Connect API.

## Features

| Feature | Value |
| --- | --- |
| Sync | `no` |
| Mapping | `yes`, returns all fields on specific secret item |
| Modes | `read+write` |

## Key format
  - `env_sync` - Will return all the fields under the secret item.
    - `path` - Mandatory field: Secret item name. (expected unique secret item with the same name)
    - `source` - Mandatory field: vaultUUID to query
  - `env`
    - `path` - Mandatory field: Secret item name. (expected unique secret item with the same name)
    - `source` - Mandatory field: vaultUUID to query
    - `field` - Mandatory field: the specific field name (notesPlain, {custom label name}, password, type etc).

## Example Config

```yaml
1password:
  env_sync:
    path: security-note
    source: VAULT-ID
  env:
    SECURITY_NOTE_TITLE:
      path: security-note-title
      source: VAULT-ID
      field: lable1
    NOTE_SECRET:
      path: login-title
      source: VAULT-ID
      field: password
    CREDIT_CARD:
      path: credit-card-title
      source: VAULT-ID
      field: type
```

## Run Example:

Example:

```sh
OP_CONNECT_HOST="http://localhost:8080" OP_CONNECT_TOKEN=""  teller yaml
```