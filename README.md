# ucdn

Tool for uploading assets to AWS S3.

## Installation

```sh
$ yarn global add @cadolabs/ucdn
```

or

```sh
$ npm i -g @cadolabs/ucdn
```

## Usage

### Upload

```sh
$ ucdn upload -c /path/to/config/file.yaml -C production
```

## Options

All following options except `config` and `config-key` can be configured using the config file.

Available AWS regions can be viewed at https://docs.aws.amazon.com/sns/latest/dg/sns-supported-regions-countries.html.

```
--config, -c                            path to config file                    [default: "./ucdn.yml"]
--config-key, -C                        root config key                        [default: null]
--region, -r                            AWS geographical area                  [default: "eu-west-1"]
--dir, -d                               assets directory                       [default: "dist/"]
--bucket, -b                            AWS bucket for upload                  [required]
--exclude, -e                           excluded extenstions                   [default: ["html","gz"]]
--accessKeyId, --access-key-id          AWS access key ID                      [required]
--secretAccessKey, --secret-access-key  AWS secret access key                  [required]
--targetDir, --target-dir               AWS bucket target directory            [default: ""]
--concurrencyLimit, --processes         Limit of concurrent upload processes   [default: 100]
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Cado-Labs/ucdn.

## License

Released under MIT License.
