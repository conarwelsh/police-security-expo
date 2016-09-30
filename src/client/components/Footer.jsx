import React, { Component } from 'react'
import theme from '@/ui/theme'

const palette = theme.get('palette')
const styles = theme.get('Footer')

export default class Footer extends Component {

	render() {
		return <footer style={styles.footer}>
			Copyright 2016
		</footer>
	}

}