import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import {defineConfig,globalIgnores} from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import jest from 'eslint-plugin-jest';
import html from "@html-eslint/eslint-plugin";

export default defineConfig([
	globalIgnores(["dist/","build/"]),
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
  {
    files: ["**/*.html"],
    plugins: {
      html,
    },
    extends: ["html/recommended"],
    language: "html/html",
    rules: {
      "html/use-baseline": "off"
    }
  }
]);
