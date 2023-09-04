---
sidebar_position: 4
---
# Developer Guide

- [Add new provider](./new-provider)
- Quick testing as you code: `make lint && make test`
- Checking your work before PR, run also integration tests: `make integration`

## Linting

Linting is treated as a form of testing (using `golangci`, configuration [here](.golangci.yml)), to run:

```
$ make lint
```

## Testing

Testing is composed of _unit tests_ and _integration tests_. Integration tests are based on _testcontainers_ as well as live sandbox APIs (where containers are not available)

- Unit tests are a mix of pure and mocks based tests, abstracting each provider's interface with a custom _client_
- View [integration tests](/pkg/integration_test)

To run all unit tests without integration:

```
$ make test
```

To run all unit tests including container-based integration:

```
$ make integration
```

To run all unit tests including container and live API based integration (this is effectively **all integration tests**):

```
$ make integration_api
```

Running all tests:

```
$ make test
$ make integration_api
```