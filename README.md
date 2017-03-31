# eslint-config-kaola 

[![npm](https://img.shields.io/npm/v/eslint-config-kaola.svg?style=flat-square)]()

ESLint rules for Kaola.

## Installation

`$ npm i eslint eslint-config-kaola -D`

## Usage

In your `.eslintrc` file, add:

```js
{
    "extends": [ "kaola" ],
    "rules": {}
}
```

ONLY need core rules ?

```js
{
    "extends": [ "kaola/rules/core" ],
    "rules": {}
}
```

## License

MIT