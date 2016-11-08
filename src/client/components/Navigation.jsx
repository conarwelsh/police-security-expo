import React, { Component } from 'react'
import theme from '../theme'

export default class Navigation extends Component {

	render() {
		return <nav style={theme.getStyle('Navigation')}>
			<a href='/exhibitors' style={theme.getStyle('Navigation.link')}>exhibitors</a>
			<a href='/attendees' style={theme.getStyle('Navigation.link')}>attendees</a>
			<a
				href='https://www.map-dynamics.com/pse2017'
				target='_blank'
				style={theme.getStyle('Navigation.link')}
			>
				floorplan
			</a>
			<a href='/accommodations' style={theme.getStyle('Navigation.link')}>accommodations</a>
		</nav>
	}

}