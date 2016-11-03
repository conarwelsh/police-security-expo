'use strict'

const path = require('path')
const Builder = require('webpack-builder')

const builder = new Builder({
	outputFolder: path.join(__dirname, 'public'),
})

builder.babel('js/client.js', path.join(__dirname, 'src', 'client'))

module.exports = builder.toWebpack()