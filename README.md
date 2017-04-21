# eslint-config-kaola

[![npm](https://img.shields.io/npm/v/eslint-config-kaola.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-kaola)

ESLint rules for Kaola.

|Type|Extends|
|---|---|
|Default|kaola|
|ES2015+|kaola/esnext|

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

Add some scripts into `package.json`:

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
