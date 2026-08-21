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

The config file is optional — the default `./ucdn.yml` may be absent, but a path passed explicitly via `--config` must exist.

Available AWS regions can be viewed at https://docs.aws.amazon.com/sns/latest/dg/sns-supported-regions-countries.html.

```
--config, -c                            path to config file                    [default: "./ucdn.yml"]
--config-key, -C                        root config key                        [default: null]
--region, -r                            AWS geographical area                  [default: "eu-west-1"]
--dir, -d                               assets directory                       [default: "dist/"]
--bucket, -b                            AWS bucket for upload                  [required]
--exclude, -e                           excluded extensions                    [default: ["html","gz"]]
--accessKeyId, --access-key-id          AWS access key ID                      [required]
--secretAccessKey, --secret-access-key  AWS secret access key                  [required]
--targetDir, --target-dir               AWS bucket target directory            [default: ""]
--concurrencyLimit, --processes         Limit of concurrent upload processes   [default: 100]
```

### exclude

Extensions are listed without a leading dot. Repeat the option to exclude several of them. `-e` and `--exclude` are the same option, so both forms can be mixed:

```sh
$ ucdn upload -e html -e gz -e map
```

The passed extensions replace the default `["html", "gz"]` list instead of extending it, so keep the defaults you still need, as in the example above.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Cado-Labs/ucdn.

## License

Released under MIT License.
