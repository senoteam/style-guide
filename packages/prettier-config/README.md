# `@senojs/prettier-config`

> prettier config

## Usage

Reference it in your `package.json`:

```json
{
  "name": "your-cool-library",
  "version": "1.0.0",
  "prettier": "@senojs/prettier-config"
}
```

If you don’t want to use `package.json`, or if you need to extend the configuration to overwrite some properties from our configuration, import the file in a `.prettierrc.js` file and export the modifications, e.g:

```js
import senoPrettierConfig from '@senojs/prettier-config'

export default {
  ...senoPrettierConfig,
  printWidth: 120,
}
```
