# React Vite Project Template

This template contains a common entry point used for a lot of React projects that I will do

## Technologies

- [React Hook Form](https://react-hook-form.com/): For handling complex form states and their necessary processing
- [Zod](https://zod.dev/): For defining schemas used for validation of forms
- [Material UI](https://mui.com/material-ui/): UI and icons Library for the application (Configuration of base theming template included!)
- [React Query by TanStack](https://tanstack.com/query/v3/docs/framework/react/overview): Handles complex network query issues such as caching, prefetching and stale data
- [Axios](https://axios-http.com/docs/intro): Provides a Promise-based framework to make network calls
- [React router](https://reactrouter.com/en/main): Provides navigation for our SPA
- [Notistack](https://notistack.com/): Snackbar provider for the application, will be generally used for error handling and success response relating to network calls or form validations

## How to use this template?

- Clone this template with `git clone`
- 

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
