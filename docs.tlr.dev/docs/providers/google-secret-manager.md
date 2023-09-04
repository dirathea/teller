# Google Secret Manager

## Authentication

You should populate `GOOGLE_APPLICATION_CREDENTIALS=account.json` in your environment to your relevant `account.json` that you get from Google.

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write+delete` |


## Key format
  - `env` - path based, needs to include a version
  - `env_sync` - your project's path (gets the secrets latest version), when using --sync a new secret version will be created
  - `decrypt` - available in this provider, will use KMS automatically

## Example Config

```yaml
google_secretmanager:
  env_sync:
    # secrets version is not relevant here since we are getting the latest version
    path: projects/44882
  env:
    MG_KEY:
      # need to supply the relevant version (versions/1)
      path: projects/44882/secrets/MG_KEY/versions/1
```
