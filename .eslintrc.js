module.exports = {
    extends: [
        "plugin:react/recommended", 
        "plugin:@typescript-eslint/recommended", 
        "plugin:prettier/recommended",
        "plugin:react/jsx-runtime"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true 
        }
    },
    plugins: [
        "@typescript-eslint"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "@typescript-eslint/no-var-requires": 0,
        'prettier/prettier': ['off', { singleQuote: true }]
    },
};
