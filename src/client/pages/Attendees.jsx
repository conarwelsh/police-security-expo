import React, { Component } from 'react'
import theme from '../theme'

export default class Attendees extends Component {

	render() {
		return <div style={theme.get('Page')}>
			<h1>Attendees</h1>
			<div style={theme.getStyle('partial underline')} />
		</div>
	}
}