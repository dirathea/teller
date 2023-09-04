# KeyPass

## Authentication

requires the following environment variables to be set:

`KEYPASS_PASSWORD`: Password database credentials
`KEYPASS_DB_PATH`: Database path

## Features

| Feature | Value |
| --- | --- |
| Sync | `no` |
| Mapping | `yes` |
| Modes | `read` |

## Example Config

```yaml
providers:
  keypass:
    env_sync:
      path: redis/config
      # source: Optional, all fields is the default. Supported fields: Notes, Title, Password, URL, UserName
    env:
      ETC_DSN:
        path: redis/config/foobar
        # source: Optional, Password is the default. Supported fields: Notes, Title, Password, URL, UserName
```
