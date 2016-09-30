import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import theme from '@/ui/theme'

const palette = theme.palette

const LG_HEADER_SIZE = 150
const SM_HEADER_SIZE = 75

const RadiumLink = Radium(Link)

const styles = {
	header: {
		width: '100%',
		height: LG_HEADER_SIZE,
		overflow: 'hidden',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 999,
		backgroundColor: palette.primary,
		color: palette.primaryOffset,
		transition: 'height 0.3s',

		sizes: {
			big: {
				// height: LG_HEADER_SIZE,
			},
			small: {
				height: SM_HEADER_SIZE,
				// lineHeight: SM_HEADER_SIZE,
			},
		},
	},
	brand: {
		display: 'inline-block',
		height: LG_HEADER_SIZE,
		// lineHeight: `${LG_HEADER_SIZE}px`,
		lineHeight: `60px`,
		float: 'left',
		fontFamily: '"Open Sans", sans-serif',
		fontSize: '60px',
		fontWeight: '300',
		transition: 'all 0.3s',
		textTransform: 'uppercase',
		paddingLeft: '30px',
		margin: `${65/2}px`,
		
		sizes: {
			big: {
			},
			small: {
				width: '150px',
				height: SM_HEADER_SIZE,
				lineHeight: `${SM_HEADER_SIZE}px`,
				fontSize: '30px',
				margin: 0,
			},
		},
	},
	nav: {
		display: 'inline-block',
		float: 'right',
		paddingRight: '30px',

		sizes: {
			big: {
			},
			small: {
			},
		},
	},
	link: {
		lineHeight: `${LG_HEADER_SIZE}px`,
		marginLeft: '20px',
		color: 'rgba(255,255,255,0.6)',
		fontSize: '18px',
		transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
		textDecoration: 'none',
		textTransform: 'lowercase',
		letterSpacing: '0.3rem',

		':hover': {
			color: 'rgba(255,255,255,1)',
		},

		sizes: {
			big: {
			},
			small: {
				lineHeight: `${SM_HEADER_SIZE}px`,
			},
		},
	},
	slogan: {
		color: '#fff',
		// fontFamily: '"Open Sans", sans-serif',
		fontSize: '24px',
		lineHeight: '24px',
		fontWeight: '300',
		letterSpacing: '8px',
		// lineHeight: '28.8px',
		opacity: '0.6',
		textTransform: 'uppercase',
		transition: 'opacity 0.3s ease-in-out',
		float: 'right',
		clear: 'left',

		':hover': {
			opacity: '0.8',
		},

		sizes: {
			small: {
				display: 'none',
			},
		},
	},
}

class Header extends Component {

	constructor(...args) {
		super(...args)

		this.state = {
			didScroll: false,
			isSmall: false,	
		}

		this._handleScroll = this._handleScroll.bind(this)
		this.scrollPage = this.scrollPage.bind(this)
	}

	componentDidMount() {
		this.scrollPage()
		window.addEventListener('scroll', this._handleScroll, false)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this._handleScroll)
	}

	_handleScroll() {
		if( ! this.state.didScroll ) {
			this.state.didScroll = true
			this.scrollPage()
		}
	}

	scrollPage() {
		const sy = this.scrollY()

		if(sy >= (LG_HEADER_SIZE - SM_HEADER_SIZE)) {
			this.setState({
				isSmall: true,
				didScroll: false,
			})
		}
		else {
			this.setState({
				isSmall: false,
				didScroll: false,
			})
		}
	}

	scrollY() {
		return window.pageYOffset
			|| document.documentElement.scrollTop
	}

	render() {
		const size = this.state.isSmall ? 'small' : 'big'
		const linkStyles = [
			styles.link,
			styles.link.sizes[size],
		]

		return <header style={[
			styles.header,
			styles.header.sizes[size],
		]}>
			<div style={[
				styles.brand,
				styles.brand.sizes[size],
			]}>
				<div style={{ float: 'left' }}>
					<span style={{fontWeight: '600', color: 'rgba(0,0,0,0.1)'}}>Conar</span>
					Welsh
				</div>
				<span style={[
					styles.slogan,
					styles.slogan.sizes[size],
				]}>
					Administration
				</span>
			</div>
			<nav style={[
				styles.nav,
				styles.nav.sizes[size],
			]}>
				<RadiumLink style={linkStyles} to='/admin'>Dashboard</RadiumLink>
				<RadiumLink style={linkStyles} to='/admin/posts'>Posts</RadiumLink>
				<RadiumLink style={linkStyles} to='/admin/tags'>Tags</RadiumLink>
				<RadiumLink style={linkStyles} to='/admin/users'>Users</RadiumLink>
			</nav>
		</header>
	}

}

export default Radium(Header)