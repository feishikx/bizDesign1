module.exports = {
    ignorePatterns: ["src/stories/"],
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended", // ESLint official recommended
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier", // use Prettier handle ESLint conflicts
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
      "prettier/prettier": "warn",
      "react/prop-types": "off", 
      "no-console": "warn",
      "react/react-in-jsx-scope": "off", // close on Vite/Next.js env
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };