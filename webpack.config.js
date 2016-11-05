'use strict'

const path = require('path')
const Builder = require('webpack-builder')
const sgrid = require('s-grid')

const builder = new Builder({
	outputFolder: path.join(__dirname, 'public'),
	debug: false,
})

builder.babel('js/client.js', path.join(__dirname, 'src', 'client'))

builder.stylus('css/client.css', path.join(__dirname, 'src', 'client', 'styles.styl'), {
	extract: true,
})

let config = builder.toWebpack()

config.stylus = {
	use: [sgrid()]
}

module.exports = config