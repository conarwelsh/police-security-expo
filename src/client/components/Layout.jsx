import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import theme from '../theme'

export default class Layout extends Component {

	render() {
		const {
			children,
		} = this.props

		return <section>
			<Header />
			<main role="main">
				{children}
				<Footer />
			</main>
		</section>
	}

}