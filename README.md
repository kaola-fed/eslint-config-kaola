# eslint-config-kaola

[![npm](https://img.shields.io/npm/v/eslint-config-kaola.svg?style=flat-square)]()

ESLint rules for Kaola.

## Installation

`$ npm i eslint eslint-config-kaola -D`

## Usage

1. You should then setup a configuration file:
```
$ ./node_modules/.bin/eslint --init
```

2. In your `.eslintrc` file, add:
```js
{
    "extends": "kaola"
}
```

3. After that, you can run ESLint on any file or directory like this:
```
$ ./node_modules/.bin/eslint yourfile.js
```
Or add a script to package.json:
```json
"scripts": {
    "test": "eslint yourfile.js"
}
```
```shell
$ npm test
```

## License

MIT
