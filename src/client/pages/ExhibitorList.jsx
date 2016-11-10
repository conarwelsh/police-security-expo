import React, { Component } from 'react'
import theme from '../theme'

export default class ExhibitorList extends Component {

	render() {
		return <div style={theme.getStyle('Page')}>
			<h1>Exhibitor List</h1>
			<div style={theme.getStyle('partial underline')} />
		</div>
	}
}