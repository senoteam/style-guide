# `@senojs/eslint-config`

> ESLint config

## Usage

To use our config, import the package inside of an `eslint.config.js` file and add it into the exported array, like this:

```js
import senoESLintConfig from '@senojs/eslint-config'

export default [
  ...senoESLintConfig,

  // anything from here will override myconfig
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
]
```
