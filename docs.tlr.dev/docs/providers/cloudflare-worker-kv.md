# Cloudflare Workers KV

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
| Modes | `read` (write coming soon) |

## Key format
  - `env_sync` - The KV namespace ID
  - `field` - the actual key stored in the KV store
  - `env` - the actual key stored in the KV store

## Example Config

```yaml
opts:
  kv-namespace-id: <YOUR NAMESPACE ID>

providers:
  cloudflare_workers_kv:
    env_sync:
      path: "{{kv-namespace-id}}"
      remap:
        # looks up the key `test_key` and maps it to `TEST`.
        test_key: TEST
    env:
      SOME_SECRET:
        path: "{{kv-namespace-id}}"
        # Accesses the key `SOME_SECRET` in the KV namespace.
      REMAPPED_KEY:
        path: "{{kv-namespace-id}}"
        # Accesses the field `SOME_KEY` in the KV namespace and maps it to REMAPPED_KEY.
        field: SOME_KEY
```
