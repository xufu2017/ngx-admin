module.exports = {
	root: true,
	env: {
	  node: true
	},
	'extends': [
	  'plugin:vue/essential',
	  'eslint:recommended',
	  '@vue/typescript/recommended'
	],
	parserOptions: {
		"parser":"@typescript-eslint/parser"
	},
	rules: {
		"no-unused-vars":"warn",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/camelcase":["off"],
		"@typescript-eslint/no-this-alias": [
		  "error",
		  {
			"allowDestructuring": true, // Allow `const { props, state } = this`; false by default
			"allowedNames": ["self"] // Allow `const self = this`; `[]` by default
		  }
		] 
	},
	overrides: [
	  {
		files: [
		  '**/__tests__/*.{j,t}s?(x)',
		  '**/tests/unit/**/*.spec.{j,t}s?(x)'
		],
		env: {
		  jest: true
		}
	  }
	]
  }
  