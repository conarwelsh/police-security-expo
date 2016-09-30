import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import theme from '@/ui/theme'
import ShrinkingHeader from '@/ui/ShrinkingHeader'

const styles = theme.get('Header')

const RadiumLink = Radium(Link)

class Header extends Component {

	state = {
		largeHeader: true
	}

	_handleHeaderChange(isLarge) {
		this.setState({
			largeHeader: isLarge
		})
	}

	render() {
		const isLg = this.state.largeHeader

		const linkStyles = [
			styles.link,
			!isLg && styles.linkSmall,
		]
		
		return <ShrinkingHeader
			style={styles.header}
			small={styles.headerSmall}
			isLarge={isLg}
			onChange={this._handleHeaderChange.bind(this)}
		>
			<div style={[
				styles.brand,
				! isLg && styles.brandSmall,
			]}>
				Boilerplate
			</div>
			<nav style={styles.nav}>
				<RadiumLink style={linkStyles} to='/'>Home</RadiumLink>
				<RadiumLink style={linkStyles} to='/about'>About</RadiumLink>
				<RadiumLink style={linkStyles} to='/contact'>Contact</RadiumLink>
			</nav>
		</ShrinkingHeader>
	}

}

export default Radium(Header)