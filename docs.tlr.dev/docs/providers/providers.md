---
sidebar_position: 3
---
import DocCardList from '@theme/DocCardList';

# Providers

For each provider, there are a few points to understand:

- Sync - full sync support. Can we provide a path to a whole environment and have it synced (all keys, all values). Some of the providers support this and some don't.
- Key format - some of the providers expect a path-like key, some env-var like, and some don't care. We'll specify for each.

## General provider configuration

We use the following general structure to specify sync mapping for all providers:

```yaml
# you can use either `env_sync` or `env` or both
env_sync:
  path: ... # path to mapping
  remap:
    PROVIDER_VAR1: VAR3 # Maps PROVIDER_VAR1 to local env var VAR3
env:
  VAR1:
    path: ... # path to value or mapping
    field: <key> # optional: use if path contains a k/v dict
    decrypt: true | false # optional: use if provider supports encryption at the value side
    severity: high | medium | low | none # optional: used for secret scanning, default is high. 'none' means not a secret
    redact_with: "**XXX**" # optional: used as a placeholder swapping the secret with it. default is "**REDACTED**"
  VAR2:
    path: ...
```

### Remapping Provider Variables

Providers which support syncing a list of keys and values can be remapped to different environment variable keys. Typically, when teller syncs paths from `env_sync`, the key returned from the provider is directly mapped to the environment variable key. In some cases it might be necessary to have the provider key mapped to a different variable without changing the provider settings. This can be useful when using `env_sync` for [Hashicorp Vault Dynamic Database credentials](https://www.vaultproject.io/docs/secrets/databases):

```yaml
env_sync:
  path: database/roles/my-role
  remap:
    username: PGUSER
    password: PGPASSWORD
```

Additionally, you can remap key settings by using `remap_with` instead of `remap`:
```yaml
env_sync:
  path: database/roles/my-role
  remap_with: # Use either remap or remap_with, not both.
    username:
      field: PGUSER
      severity: none
    password:
      field: PGPASSWORD
      severity: high
      redact_with: "**XXX**"
```

After remapping, the local environment variable `PGUSER` will contain the provider value for `username` and `PGPASSWORD` will contain the provider value for `password`.

# List Providers

<DocCardList />
