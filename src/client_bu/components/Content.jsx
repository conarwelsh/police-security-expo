import React, { Component } from 'react'
import theme from '@/ui/theme'

const styles = theme.get('Content')

export default class Content extends Component {

	render() {
		return <main role="main" style={styles.wrapper}>
			<div style={styles.inner}>
				{this.props.children}
			</div>
		</main>
	}

}