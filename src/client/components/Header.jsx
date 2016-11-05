import React, { Component } from 'react'
import Navigation from './Navigation'
import theme from '../theme'

export default class Header extends Component {

	render() {
		return <header style={theme.getStyle('Header')}>
			Police Security Expo &middot; 2017
			<Navigation />
			<div style={theme.getStyle('clearfix')} />
		</header>
	}

}