import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import eslintConfigPrettier from "eslint-config-prettier";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
    },
    languageOptions: { globals: globals.browser },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off",
    },
  },
];
