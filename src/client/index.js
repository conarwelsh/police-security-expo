import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
import theme from './theme'
import router from './router'

render(
	router,
	document.getElementById('root'),
)