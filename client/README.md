# Resumate > Client

## Vite + React + TypeScript

This project uses the Vite template, which provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This document was originally provided by the template, and has been altered to explain the relevant implemented changes.

One of the two official plugins that are available for Fast Refresh is used: [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) from [Babel](https://babeljs.io/)

## ESLint

The ESLint configuration has been altered to enable type aware lint rules:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

In addition, the following plugins have been added to the `extends` list of the ESLint configuration:

- `plugin:@typescript-eslint/strict-type-checked`
- `plugin:@typescript-eslint/stylistic-type-checked`
- `plugin:react/recommended`
- `plugin:react/jsx-runtime`

The [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) package was also installed.
