# Security Enhancement

## :warning: Scan for secrets

Teller can help you fight secret sprawl and hard coded secrets, as well as be the best productivity tool for working with your vault.

It can also integrate into your CI and serve as a shift-left security tool for your DevSecOps pipeline.

Look for your vault-kept secrets in your code by running:

```
$ teller scan
```

You can run it as a linter in your CI like so:

```
run: teller scan --silent
```

It will break your build if it finds something (returns exit code `1`).

Use Teller for productively and securely running your processes and you get this for free -- nothing to configure. If you have data that you're bringing that you're sure isn't sensitive, flag it in your `teller.yml`:

```
dotenv:
  env:
    FOO:
      path: ~/my-dot-env.env
      severity: none # will skip scanning. possible values: high | medium | low | none
```

By default we treat all entries as sensitive, with value `high`.

## :recycle: Redact secrets from process outputs, logs, and files

You can use `teller` as a redaction tool across your infrastructure, and run processes while redacting their output as well as clean up logs and live tails of logs.

Run a process and redact its output in real time:

```
$ teller run --redact -- your-process arg1 arg2
```

Pipe any process output, tail or logs into teller to redact those, live:

```
$ cat some.log | teller redact
```

It should also work with `tail -f`:

```
$ tail -f /var/log/apache.log | teller redact
```

Finally, if you've got some files you want to redact, you can do that too:

```
$ teller redact --in dirty.csv --out clean.csv
```

If you omit `--in` Teller will take `stdin`, and if you omit `--out` Teller will output to `stdout`.