# prettier-semi-cli

Standalone CLI for [semistandard-prettier-eslint](https://github.com/bySabi/semistandard-prettier-eslint)

[![npm version](https://badge.fury.io/js/prettier-semi-cli.svg)](https://badge.fury.io/js/prettier-semi-cli)
[![npm downloads](https://img.shields.io/npm/dm/prettier-semi-cli.svg?style=flat-square)](https://www.npmjs.com/package/prettier-semi-cli)

Formats your JavaScript using [`prettier`](https://github.com/jlongster/prettier) followed by [`semistandard --fix`][semistandard]

*  [prettier](https://github.com/prettier/prettier) is a wonderful tool for code prettify.
*  [semistandard][semistandard] is `zero configuration pain` tool based on ESLint.

The two packages are great and very well designed, that can be used together with a minimum effort


## Installation
    $ npm install prettier-semi-cli -g

## Usage
Ex: package.json
```json
"scripts": {
  ...
  "lint": "semistandard --verbose | snazzy",
  "format": "prettier-semi --write '**/*.js'"
}
```

### If you don't like `semicolons` use **standard** version
* [prettier-std-cli](https://github.com/bySabi/prettier-std-cli)

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[MIT][mit-license]

[mit-license]:./LICENSE

[semistandard]: https://github.com/Flet/semistandard
