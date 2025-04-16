# `@senojs/eslint-config`

> ESLint config

## Usage

To use our config, import the package inside of an `eslint.config.js` file and add it into the exported array using `extends`, like this:

```js
import senoESLintConfig from '@senojs/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    extends: [senoESLintConfig],

    // anything from here will override myconfig
    rules: {
      'no-unused-vars': 'warn',
    },
  },
])
```
