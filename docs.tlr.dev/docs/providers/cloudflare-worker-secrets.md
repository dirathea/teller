# Cloudflare Workers Secrets

## Authentication

requires the following environment variables to be set:

`CLOUDFLARE_API_KEY`: Your Cloudflare api key.
`CLOUDFLARE_API_EMAIL`: Your email associated with the api key.
`CLOUDFLARE_ACCOUNT_ID`: Your account ID.

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `write` |

## Key format
  - `source` - The script name
  - `path` - Name of the secret, when using `--sync` the path will overridden by the given parameters

## Example Config

```yaml
providers:
  cloudflare_workers_secrets:
    env_sync:
      source: script-id
    env:
      foo-secret:
        path: foo-secret
        source: script-id
      foo-secret2:
        path: foo-secret
        source: script-id
```