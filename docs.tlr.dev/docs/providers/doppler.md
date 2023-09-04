# Doppler

## Authentication

Install the [doppler cli][dopplercli] then run `doppler login`. You'll also need to configure your desired "project" for any given directory using `doppler configure`. Alternatively, you can set a global project by running `doppler configure set project <my-project>` from your home directory.

## Features


| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read` |

## Key format
  - `env` - env key like

## Example Config

```yaml
doppler:
  env_sync:
    path: prd
  env:
    MG_KEY:
      path: prd
      field: OTHER_MG_KEY # (optional)
```

[dopplercli]: https://docs.doppler.com/docs/cli