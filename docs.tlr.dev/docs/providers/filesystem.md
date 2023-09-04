# File System

Allows to work against filesystem structure. for example:

```
.
└── /folder
    ├── settings/
    │   ├── billing-svc
    │   └── all/
    │       ├── foo
    └── bar
```

## Features

| Feature | Value |
| --- | --- |
| Sync | `yes` |
| Mapping | `yes` |
| Modes | `read+write` |

## Example Config

```yaml
providers:
  filesystem:
    env_sync:
      path: /folder/settings
    env:
      ETC_DSN:
        path: /folder/bar
```