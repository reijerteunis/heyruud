import {FlatCompat} from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: true,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next",
      "plugin:import/recommended",
      "plugin:promise/recommended",
      "plugin:jsdoc/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:better-tailwindcss/recommended",
      "prettier",
    ],
    plugins: [
      "import",
      "unused-imports",
      "promise",
      "jsdoc",
      "prettier",
      "jsx-a11y",
      "better-tailwindcss",
    ],
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/app/globals.css",
        allowedCustomClasses: ["font-display", "dark"],
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      // --- import plugin rules ---
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          "alphabetize": {order: "asc", caseInsensitive: true},
        },
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/no-extraneous-dependencies": "error",
      // --- unused-imports plugin rules ---
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off", // Avoid conflict with unused-imports
      // --- promise plugin rules ---
      "promise/always-return": "warn",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "error",
      // --- jsdoc plugin rules ---
      "jsdoc/check-alignment": "error",
      "jsdoc/check-indentation": "error",
      // --- general strictness ---
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-var": "error",
      "prefer-const": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      // --- prettier ---
      "prettier/prettier": "error",
    },
  }),
];

export default eslintConfig;
