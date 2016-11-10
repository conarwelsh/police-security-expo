import React, { Component } from 'react'
import theme from '../theme'

export default class SeminarList extends Component {

	render() {
		return <div style={theme.getStyle('Page')}>
			<h1>Seminar List</h1>
			<div style={theme.getStyle('partial underline')} />
		</div>
	}
}