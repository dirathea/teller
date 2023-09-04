# GitHub

## Usage:

```sh
$ teller put FROM_TELLER=00000 FROM_TELLER_2=00002 --providers github --sync # Add secrets with dynamic secrets name (take from env_sync)
$ teller put FROM_TELLER=1111 FROM_TELLER_2=222 --providers github # Add defined secrets name from env key (YAML key will be the name of the secret)
$ teller delete FROM_TELLER --providers github # Delete specific secret
$ teller delete FROM_TELLER FROM_TELLER_2 --providers github --all-keys --path={OWNER}/{REPO-NAME} # Delete all repo secrets, limited to 100 secrets per repository
```

## Authentication

requires the following environment variables to be set:

`GITHUB_AUTH_TOKEN`: GitHub token.

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `write` |

## Key format
  - `path` - Contain the repo owner and the repo name with `/` separator

## Example Config

```yaml
providers:
  github:
    env_sync:
      path: owner/repo-name
    env:
      FROM_TELLER:
        path: owner/repo-name
      FROM_TELLER_2:
        path: owner/repo-name
```
