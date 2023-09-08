module.exports = {
  printWidth: 100,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  importOrder: ['^[./](?!.*ss$).*$', 'ss$'],
  importOrderSeparation: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
