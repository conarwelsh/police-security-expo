import React, { Component } from 'react'
import theme from '@/ui/theme'

const palette = theme.palette

const styles = {
	wrapper: {
		width: '100%',
		backgroundColor: palette.primaryOffset,
	},
	inner: {
		maxWidth: '60%',
		margin: '0 auto',
		padding: '150px 1em 2em',
	}
}

export default class Content extends Component {

	render() {
		return <main role="main" style={styles.wrapper}>
			<div style={styles.inner}>
				{this.props.children}
			</div>
		</main>
	}

}