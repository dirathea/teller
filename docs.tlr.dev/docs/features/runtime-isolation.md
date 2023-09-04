# Runtime Isolation

## :running: Running subprocesses

Manually exporting and setting up environment variables for running a process with demo-like / production-like set up?

Got bitten by using `.env.production` and exposing it in the local project itself?

Using `teller` and a `.teller.yml` file that exposes nothing to the prying eyes, you can work fluently and seamlessly with zero risk, also no need for quotes:

```
$ teller run -- your-process arg1 arg2... --switch1 ...
```

## :mag_right: Inspecting variables

This will output the current variables `teller` picks up. Only first 2 letters will be shown from each, of course.

```
$ teller show
```

## :tv: Local shell population

Hardcoding secrets into your shell scripts and dotfiles?

In some cases it makes sense to eval variables into your current shell. For example in your `.zshrc` it makes much more sense to use `teller`, and not hardcode all those into the `.zshrc` file itself.

In this case, this is what you should add:

```
eval "$(teller sh)"
```

## :whale: Easy Docker environment

Tired of grabbing all kinds of variables, setting those up, and worried about these appearing in your shell history as well?

Use this one liner from now on:

```
$ docker run --rm -it --env-file <(teller env) alpine sh
```