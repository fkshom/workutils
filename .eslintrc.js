module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    // 'prettier',
  ],
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/no-unused-components": "off",
    "no-unused-vars": "off",
    // "vue/max-attributes-per-line": [
    //   "error",
    //   {
    //     "singleline": 5,
    //     "multiline": {
    //       "max": 1,
    //       "allowFirstLine": false
    //     }
    //   }
    // ],
  },
}
