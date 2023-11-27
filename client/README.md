# Resumate (Client)

## React + TypeScript + Vite

The template used for this project provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This project uses one of two official plugins available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## ESLint configuration

This project's ESLint configuration was updated to enable type aware lint rules:

- The top-level `parserOptions` property in the ESLint configuration was edited by adding:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- The `plugin:@typescript-eslint/recommended` was replaced with `plugin:@typescript-eslint/strict-type-checked`
- The `plugin:@typescript-eslint/stylistic-type-checked` was added.
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) was installed, and `plugin:react/recommended` & `plugin:react/jsx-runtime` were added to to the `extends` list

## Jest for testing

This project's testing framework is Jest.
