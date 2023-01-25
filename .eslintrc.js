module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        'airbnb-typescript/base',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "sourceType": "module",
      "project": './tsconfig.json',
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
