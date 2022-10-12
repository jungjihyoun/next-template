module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "standard",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "space-before-function-paren": "off",
    "no-tabs": "off",
    indent: "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: false,
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/indent": "off",
    "no-unused-vars": "off",
    "node/no-unsupported-features/es-syntax": "off",
  },
};
