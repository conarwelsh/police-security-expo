import React, { Component } from 'react'
import theme from '../theme'

export default class Navigation extends Component {

	render() {
		return <nav style={theme.getStyle('Navigation')}>
			<a href='' style={theme.getStyle('Navigation.link')}>exhibitors</a>
			<a href='' style={theme.getStyle('Navigation.link')}>attendees</a>
			<a href='' style={theme.getStyle('Navigation.link')}>floorplan</a>
			<a href='' style={theme.getStyle('Navigation.link')}>accomodations</a>
		</nav>
	}

}