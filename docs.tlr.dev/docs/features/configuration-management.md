# Configuration Management

## :beetle: Detect secrets and value drift

You can detect _secret drift_ by comparing values from different providers against each other. It might be that you want to pin a set of keys in different providers to always be the same value; when they aren't -- that means you have a drift.

In most cases, keys in providers would be similar which we call _mirrored_ providers. Example:

```
Provider1:
  MG_PASS=foo***

Provider2:
  MG_PASS=foo***   # Both keys are called MG_PASS
```

To detected mirror drifts, we use `teller mirror-drift`.

```bash
$ teller mirror-drift --source global-dotenv --target my-dotenv

Drifts detected: 2

changed [] global-dotenv FOO_BAR "n***** != my-dotenv FOO_BAR ne*****
missing [] global-dotenv FB 3***** ??
```

Use `mirror-drift --sync ...` in order to declare that the two providers should represent a completely synchronized mirror (all keys, all values).

As always, the specific provider definitions are in your `teller.yml` file.

## :beetle: Detect secrets and value drift (graph links between providers)

Some times you want to check drift between two providers, and two unrelated keys. For example:

```
Provider1:
  MG_PASS=foo***

Provider2:
  MAILGUN_PASS=foo***
```

This poses a challenge. We need some way to "wire" the keys `MG_PASS` and `MAILGUN_PASS` and declare a relationship of source (`MG_PASS`) and destination, or sink (`MAILGUN_PASS`).

For this, you can label mappings as `source` and couple with the appropriate sink as `sink`, effectively creating a graph of wirings. We call this `graph-drift` (use same label value for both to wire them together). Then, source values will be compared against sink values in your configuration:

```yaml
providers:
  dotenv:
    env_sync:
      path: ~/my-dot-env.env
      source: s1
  dotenv2:
    kind: dotenv
    env_sync:
      path: ~/other-dot-env.env
      sink: s1
```

And run

```
$ teller graph-drift dotenv dotenv2 -c your-config.yml
```

![](https://user-images.githubusercontent.com/83390/117453797-07512380-af4e-11eb-949e-cc875e854fad.png)

## :scroll: Populate templates

Have a kickstarter project you want to populate quickly with some variables (not secrets though!)?

Have a production project that just _has_ to have a file to read that contains your variables?

You can use `teller` to inject variables into your own templates (based on [go templates](https://golang.org/pkg/text/template/)).

With this template:

```go
Hello, {{.Teller.EnvByKey "FOO_BAR" "default-value" }}!
```

Run:

```
$ teller template my-template.tmpl out.txt
```

Will get you, assuming `FOO_BAR=Spock`:

```
Hello, Spock!
```

## :arrows_counterclockwise: Copy/sync data between providers

In cases where you want to sync between providers, you can do that with `teller copy`.

**Specific mapping key sync**

```bash
$ teller copy --from dotenv1 --to dotenv2,heroku1
```

This will:

1. Grab all mapped values from source (`dotenv1`)
2. For each target provider, find the matching mapped key, and copy the value from source into it

**Full copy sync**

```bash
$ teller copy --sync --from dotenv1 --to dotenv2,heroku1
```

This will:

1. Grab all mapped values from source (`dotenv1`)
2. For each target provider, perform a full copy of values from source into the mapped `env_sync` key

Notes:

- The mapping per provider is as configured in your `teller.yaml` file, in the `env_sync` or `env` properties.
- This sync will try to copy _all_ values from the source.

## :bike: Write and multi-write to providers

Teller providers supporting _write_ use cases which allow writing values _into_ providers.

Remember, for this feature it still revolves around definitions in your `teller.yml` file:

```bash
$ teller put FOO_BAR=$MY_NEW_PASS --providers dotenv -c .teller.write.yml
```

A few notes:

- Values are key-value pair in the format: `key=value` and you can specify multiple pairs at once
- When you're specifying a literal sensitive value, make sure to use an ENV variable so that nothing sensitive is recorded in your history
- The flag `--providers` lets you push to one or more providers at once
- `FOO_BAR` must be a mapped key in your configuration for each provider you want to update

Sometimes you don't have a mapped key in your configuration file and want to perform an ad-hoc write, you can do that with `--path`:

```
$ teller put SMTP_PASS=newpass --path secret/data/foo --providers hashicorp_vault
```

A few notes:

- The pair `SMTP_PASS=newpass` will be pushed to the specified path
- While you can push to multiple providers, please make sure the _path semantics_ are the same

## :x: Delete and multi-delete from providers

Teller providers support _deleting_ values _from_ providers.

This feature revolves around definitions in your `teller.yml` file:

```bash
$ teller delete FOO_BAR --providers dotenv -c .teller.yml
```

A few notes:

- You can specify multiple keys to delete, for example:

  ```bash
  $ teller delete FOO BAR BAZ --providers dotenv
  ```

- The flag `--providers` lets you push to one or more providers at once
- All keys must be a mapped key in your configuration for each provider you want to delete from

Sometimes you don't have a mapped key in your configuration file and want to perform an ad-hoc delete. You can do that with the `--path` flag:

```bash
$ teller delete FOO BAR --path ~/my-env-file.env --providers dotenv
```

You can also delete all keys at once for a given path, without specifying them one by one:

```bash
$ teller delete --all-keys --path ~/my-env-file.env --providers dotenv
```

## `YAML` Export in YAML format

You can export in a YAML format, suitable for [GCloud](https://cloud.google.com/functions/docs/env-var):

```
$ teller yaml
```

Example format:

```yaml
FOO: "1"
KEY: VALUE
```

## `JSON` Export in JSON format

You can export in a JSON format, suitable for piping through `jq` or other workflows:

```
$ teller json
```

Example format:

```json
{
  "FOO": "1"
}
```