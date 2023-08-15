export default {
  printWidth: 120,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
