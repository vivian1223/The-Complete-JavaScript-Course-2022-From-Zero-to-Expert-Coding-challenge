module.exports = {
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
	],
	"rules": {
		"vue/script-indent": [
			"error",
			4
		],
		"vue/html-indent": [
			"error",
			4
		],
		"vue/component-name-in-template-casing": [
			"error",
			"PascalCase"
		],
		"no-console": 0,
		"no-debugger": 0,
		"max-len": [
			"error", {
				"code": 140,
				"tabWidth": 4,
				"ignoreRegExpLiterals": true,
				"ignoreTemplateLiterals": true,
				"ignoreStrings": true,
				"ignoreUrls": true,
				"ignoreTrailingComments": true,
				"ignoreComments": true,
				"ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\("
			}],
		"no-invalid-this": 0,
		"capIsNew": 0,
		"require-jsdoc": 0,
		"new-cap": 0,
		"valid-jsdoc": 0,
		"arrow-spacing": 2,
		"semi": 2,
		"no-dupe-class-members": 2,
		"no-new-wrappers": 2,
		"space-before-blocks": 2,
		"array-bracket-spacing": 2,
		"object-curly-spacing": 0,
		"comma-style": 2,
		"block-spacing": 2,
		"no-multiple-empty-lines": 2,
		"key-spacing": 2,
		"computed-property-spacing": 2,
		"comma-spacing": 2,
		"spaced-comment": 2,
		"space-in-parens": 2,
		"space-infix-ops": 2,
		"nonblock-statement-body-position": 2,
		"brace-style": [2, "1tbs", {"allowSingleLine": true}],
		"no-mixed-operators": 2,
		"no-param-reassign": 2,
		"no-duplicate-imports": 2,
		"prefer-arrow-callback": 2,
		"no-alert": 2,
		"no-array-constructor": 2,
		"no-caller": 2,
		"no-catch-shadow": 2,
		"no-extend-native": 2,
		"no-extra-bind": 2,
		"no-implied-eval": 2,
		"no-iterator": 2,
		"no-label-var": 2,
		"no-labels": 2,
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-multi-spaces": 2,
		"no-multi-str": 2,
		"no-native-reassign": 2,
		"no-new": 2,
		"no-new-func": 2,
		"no-new-object": 2,
		"no-octal-escape": 2,
		"no-proto": 2,
		"no-return-assign": 2,
		"no-script-url": 2,
		"no-sequences": 2,
		"no-shadow": 2,
		"no-shadow-restricted-names": 2,
		"no-spaced-func": 2,
		"no-trailing-spaces": 2,
		"no-undef-init": 2,
		"no-underscore-dangle": 0,
		"no-unused-expressions": 2,
		"no-use-before-define": 2,
		"no-with": 2,
		"camelcase": 1,
		"consistent-return": 2,
		"curly": [2, "all"],
		"dot-notation": [2, { "allowKeywords": true }],
		"eol-last": 2,
		"no-extra-parens": [2, "functions"],
		"eqeqeq": 2,
		"new-parens": 2,
		"space-unary-ops": [2, { "words": true, "nonwords": false }],
		"yoda": [2, "never"],
		"no-eval": ["error", {"allowIndirect": true}],
		"indent": [
			"error", "tab", {
				"CallExpression": {
					"arguments": 2
				},
				"FunctionDeclaration": {
					"body": 1,
					"parameters": "first"
				},
				"FunctionExpression": {
					"body": 1,
					"parameters": "first"
				},
				"ArrayExpression": "first",
				"ObjectExpression": 1,
				"SwitchCase": 1,
				"ignoredNodes": [
					"ConditionalExpression",
					"MemberExpression",
					"TemplateLiteral"
				]
			}
		]
	},
};
