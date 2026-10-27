import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';
export default [globalIgnores(['.next/**','node_modules/**']), js.configs.recommended, react.configs.flat.recommended, react.configs.flat['jsx-runtime'], { files: ['**/*.{js,mjs,jsx}'], languageOptions: { globals: { URL: 'readonly' }, parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } } }, rules: { 'react/prop-types': 'off' } }];