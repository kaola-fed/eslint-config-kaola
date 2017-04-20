# eslint-config-kaola

[![npm](https://img.shields.io/npm/v/eslint-config-kaola.svg?style=flat-square)]()

ESLint rules for Kaola.

## Installation

`$ npm i eslint eslint-config-kaola -D`

## Usage

In your `.eslintrc` file, add:

```js
{
    "extends": "kaola"
}
```

If working on an ES6 project, extend the ES6 version of the configuration:

```json
{
  "extends": "kaola/es6"
}
```

Add a script to `package.json`:

```json
"scripts": {
    "test": "eslint path/yourfile.js"
}
```

After that, you can run ESLint like this:

```shell
$ npm test
```

## License

MIT
