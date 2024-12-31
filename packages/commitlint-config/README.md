# `@senojs/commitlint-config`

> commitlint config

## Usage

Reference it in your `package.json`:

```json
{
  "name": "your-cool-library",
  "version": "1.0.0",
  "commitlint": {
    "extends": ["@senojs"]
  }
}
```

If you don’t want to use `package.json`, or if you need to extend the configuration to overwrite some properties from our configuration, you specify it as item in the `extends` array:

```js
/**
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  extends: ['@senojs'], // => @senojs/commitlint-config
}
```
