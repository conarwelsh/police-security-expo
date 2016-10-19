import React, { Component } from 'react'
import Radium from 'radium'
import theme from '~/client/theme'
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
				to='/admin'
				style={[
					styles.brand,
					styles.brandSmall,
				]}
			>
				Administration
			</Link>
			<nav style={styles.nav}>
				<Link style={linkStyles} to='/admin'>Dashboard</Link>
				<Link style={linkStyles} to='/admin/posts'>Posts</Link>
				<Link style={linkStyles} to='/admin/tags'>Tags</Link>
				<Link style={linkStyles} to='/admin/users'>Users</Link>
			</nav>
		</header>
	}

}

export default Radium(Header)