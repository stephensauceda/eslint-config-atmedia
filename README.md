# eslint-config-atmedia

An ESLint config for our JavaScript projects

## Usage

1. Install the package and its dependencies in your project

`yarn add -D eslint eslint-config-atmedia eslint-plugin-{prettier,react,react-hooks,import,jsx-a11y}`

2. Add an `.eslintrc.js` to your project and extend the config

```js
//.eslintrc
module.exports = {
  extends: 'atmedia'
};
```
