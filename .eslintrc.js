module.exports = {
  globals: {
    $nuxt: false,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'prettier',
  ],
  rules: {
    'no-console': 1,
    'no-debugger': 1,
    'no-multi-spaces': 0,
    'no-unused-vars': 1,
    'no-irregular-whitespace': 1,
    'max-len': 0,
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
}
