# Configuration

Run `teller new` and follow the wizard, pick the providers you like and it will generate a `.teller.yml` for you.

Alternatively, you can use the following minimal template or [view a full example](https://github.com/tellerops/teller/blob/master/.teller.example.yml):

```yaml
project: project_name
opts:
  stage: development

# remove if you don't like the prompt
confirm: Are you sure you want to run in {{stage}}?

providers:
  # uses environment vars to configure
  # https://github.com/hashicorp/vault/blob/api/v1.0.4/api/client.go#L28
  hashicorp_vault:
    env_sync:
      path: secret/data/{{stage}}/services/billing

  # this will fuse vars with the below .env file
  # use if you'd like to grab secrets from outside of the project tree
  dotenv:
    env_sync:
      path: ~/billing.env.{{stage}}
```

Now you can just run processes with:

```
$ teller run node src/server.js
Service is up.
Loaded configuration: Mailgun, SMTP
Port: 5050
```

Behind the scenes: `teller` fetched the correct variables, placed those (and _just_ those) in `ENV` for the `node` process to use.