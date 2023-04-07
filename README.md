# AWS EC2 Run Instance Action

[![LICENSE](https://img.shields.io/badge/license-BSD3-green)](LICENSE)
[![Latest Release](https://img.shields.io/github/v/release/truemark/ssh-known-hosts-action)](https://github.com/truemark/ssh-known-hosts-action/releases)
![GitHub closed issues](https://img.shields.io/github/issues-closed/truemark/ssh-known-hosts-action)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/truemark/ssh-known-hosts-action)
![build-test](https://github.com/truemark/ssh-known-hosts-action/workflows/build-test/badge.svg)

GitHub action used to update the ssh known_hosts file

## Examples

```yml

```

## Inputs

| Name                        | Type       | Required | Description                                                                                                |
|-----------------------------|------------|----------|------------------------------------------------------------------------------------------------------------|
| type                        | string     | Yes      | Type of the SSH key, either 'rsa' or 'ecdsa'. Default is 'ecdsa'                                           |
| name                        | string     | Yes      | Name of the SSH key. This will be used as the file name for the keys. Defaults are ids_rsa or id_ed25519   |

## Outputs
| Name               | Type       | Description              |
|--------------------|------------|--------------------------|
| private-key-path   | string     | Path to the private key  |
| public-key-path    | string     | Path to the public key   |
| public-key         | string     | SSH public key           |

## Development

> Install `node version 16`

Install the dependencies
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:
```bash
$ npm test
```
