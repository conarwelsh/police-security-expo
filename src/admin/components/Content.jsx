import React, { Component } from 'react'
import theme from '~/client/theme'

const styles = theme.get('Content')

export default class Content extends Component {

	render() {
		return <div style={styles.wrapper}>
			<div style={styles.inner}>
				{this.props.children}
			</div>
		</div>
	}

}