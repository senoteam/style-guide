export default {
  printWidth: 100,
  quoteProps: "consistent",
  semi: false,
  singleQuote: true,

  importOrder: [
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^[./](?!.*ss$).*$",
    "ss$",
  ],
  importOrderSeparation: true,

  tailwindFunctions: ["classNames"],

  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
};
