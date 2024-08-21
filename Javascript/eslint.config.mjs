import globals from "globals";
// eslint.config.js
import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          // "sourceType": "module",
          // "impliedStrict": true
        }
      },
      globals: globals.browser,
    }
  },
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    },
  },
];
