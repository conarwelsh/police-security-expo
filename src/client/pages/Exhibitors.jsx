import React, { Component } from 'react'
import theme from '../theme'

export default class Exhibitors extends Component {

	render() {
		return <div style={theme.get('Page')}>
			<h1>Exhibitors</h1>
			<div style={theme.getStyle('partial underline')} />
		</div>
	}
}