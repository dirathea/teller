---
sidebar_position: 1
---
# Installation
You can install `teller` with homebrew:

```
$ brew tap spectralops/tap && brew install teller
```

You can now use `teller` or `tlr` (if you like shortcuts!) in your terminal.

`teller` will pull variables from your various cloud providers, vaults and others, and will populate your current working session (in various ways!, see more below) so you can work safely and much more productively.

`teller` needs a tellerfile. This is a `.teller.yml` file that lives in your repo, or one that you point teller to with `teller -c your-conf.yml`.