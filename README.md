# eslint-config-kaola

[![npm](https://img.shields.io/npm/v/eslint-config-kaola.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-kaola)
[![Build Status](https://img.shields.io/travis/kaola-fed/eslint-config-kaola.svg?style=flat-square)](https://travis-ci.org/kaola-fed/eslint-config-kaola)

ESLint rules for Kaola.

|Type|Extends|
|---|---|
|Default|kaola|
|ES2015+|kaola/esnext|
|vue|kaola/vue|

## Installation

```bash
$ npm i eslint eslint-config-kaola -D
```

## Usage

```json
{
    "extends": "kaola"
}
```

Add npm scripts:

```json
"scripts": {
    "test": "npm run lint",
    "lint": "eslint path/to/file"
}
```

After that, simply run

```bash
$ npm t
```

## License

MIT
