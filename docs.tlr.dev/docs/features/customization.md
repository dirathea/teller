# Customization

## :white_check_mark: Prompts and options

There are a few options that you can use:

- **carry_env** - carry the environment from the parent process into the child process. By default we isolate the child process from the parent process. (default: _false_)

- **confirm** - an interactive question to prompt the user before taking action (such as running a process). (default: _empty_)

- **opts** - a dict for our own variable/setting substitution mechanism. For example:

```
opts:
  region: env:AWS_REGION
  stage: qa
```

And now you can use paths like `/{{stage}}/{{region}}/billing-svc` where ever you want (this templating is available for the **confirm** question too).

If you prefix a value with `env:` it will get pulled from your current environment.