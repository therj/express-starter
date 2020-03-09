module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2020": true
    },
    "extends": [
        "airbnb-base",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2020
    },
    "rules": {
        "prettier/prettier": "error",
        "quotes": "single"
    }
};
