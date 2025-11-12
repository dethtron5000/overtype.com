import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import {defineConfig,globalIgnores} from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import jest from 'eslint-plugin-jest';

export default defineConfig([
	globalIgnores(["build/"]),
	{
		files: ['**/*.js', '**/*.jsx'],

		plugins: {'@stylistic': stylistic, jest},
		extends: [eslintJs.configs.recommended, eslintReact.configs.recommended],

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
				...globals.node
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true, 
				},
			},
		},
		rules: {
			'@stylistic/indent': ['error', 2],
		},

	},
]);
