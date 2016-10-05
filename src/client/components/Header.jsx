import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import theme from '@/ui/theme'
import ShrinkingHeader from '@/ui/ShrinkingHeader'

const styles = theme.get('Header')

const RadiumLink = Radium(Link)

class Header extends Component {

	render() {
		const linkStyles = [
			styles.link,
			styles.linkSmall,
		]
		
		return <header
			style={[
				styles.header,
				styles.headerSmall
			]}
		>
			<div style={[
				styles.brand,
				styles.brandSmall,
			]}>
				Police Security Expo
			</div>
			<nav style={styles.nav}>
				<RadiumLink style={linkStyles} to='/exhibitors'>Exhibitors</RadiumLink>
				<RadiumLink style={linkStyles} to='/accomodations'>Accomodations</RadiumLink>
				<RadiumLink style={linkStyles} to='/floorplan'>Floorplan</RadiumLink>
			</nav>
		</header>
	}

}

export default Radium(Header)