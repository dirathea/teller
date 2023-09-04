# Azure

## Authentication

Two options for getting Azure authentication are available:

1. Standard Azure [environment variable](https://docs.microsoft.com/en-us/azure/developer/go/azure-sdk-authorization). (Enable by default)
2. For get credentials via [az client](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) add `AZURE_CLI=1` to your environment variable

Then set your vault-name by specific as environment variable: `KVAULT_NAME`

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write+delete` |

## Example Config

```yaml
providers:
  azure_keyvault:
    env_sync:
      path: azure
    env:
      FOO:
        path: bar
```
