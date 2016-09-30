module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		node: true
	},
	extends: "eslint:recommended",
	rules: {
		"strict": 0,
	    "max-len": [1, 120, 2, {ignoreComments: true}],
	    "no-console": 0,
	    "no-unused-vars": 1,
	    "no-empty": 1,
		// "graphql/template-strings": ['errors', {
		// 	env: 'apollo',
		// 	schemaJson: require('./schema.json')
		// }]
	},
	// plugins: [
	// 	'graphql'
	// ]
}