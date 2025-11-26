module.exports = {
  printWidth: 100,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^[./](?!.*ss$).*$', 'ss$'],
  importOrderSeparation: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
