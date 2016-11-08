import React, { Component } from 'react'
import Navigation from './Navigation'
import theme from '../theme'

export default class Header extends Component {

	render() {
		return <header style={theme.getStyle('Header')}>
			<a href='/'>
				<img style={{height:40,verticalAlign:'middle'}} src="/img/medallion-100pixel.png" />
				&nbsp;&nbsp;
				Police Security Expo &middot; 2017
			</a>
			<Navigation />
			<div style={theme.getStyle('clearfix')} />
		</header>
	}

}