# LastPass

## Authentication

Requires the following environment variables to be set:
`LASTPASS_USERNAME` - LastPass username
`LASTPASS_PASSWORD` - LastPass password

## Features

| Feature | Value |
| --- | --- |
| Sync | `no` |
| Mapping | `no` |
| Modes | `read` |

## Key format
  - `env_sync` - Will return all the fields under the secret item.
    - `path` - Mandatory field: Secret item ID.
  - `env`
    - `path` - Mandatory field: Secret item ID.
    - `field` - Optional field: by default taking `password` property. in case you want other property un-mark this line and set the LastPass property name.