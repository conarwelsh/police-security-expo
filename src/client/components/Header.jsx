import React, { Component } from 'react'
import Radium from 'radium'
import theme from '@/ui/theme'
import ShrinkingHeader from '@/ui/ShrinkingHeader'
import Link from '@/ui/Link'

const styles = theme.get('Header')

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
			<Link
				to='/'
				style={[
					styles.brand,
					styles.brandSmall,
				]}
			>
				<img src="/img/medallion-100pixel.png" style={{ height: 40, verticalAlign: 'sub' }} />
				&nbsp;&nbsp;Police Security Expo
			</Link>
			<nav style={styles.nav}>
				<Link
					style={linkStyles}
					to='/exhibitors'
				>
					Exhibitors
				</Link>
				<Link
					style={linkStyles}
					to='/exhibitors'
				>
					Attendees
				</Link>
				<Link
					style={linkStyles}
					href='https://www.map-dynamics.com/pse2017'
					target='_blank'
				>
					Floorplan
				</Link>
				<Link
					style={linkStyles}
					to='/accomodations'
				>
					Accomodations
				</Link>
			</nav>
		</header>
	}

}

export default Radium(Header)