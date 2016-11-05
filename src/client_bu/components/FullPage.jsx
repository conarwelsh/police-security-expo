import React, { Component } from 'react'
import Radium from 'radium'
import theme from '@/ui/theme'

const styles = theme.get('FullPage')

class FullPage extends Component {

	render() {
		const {
			style,
			id,
		} = this.props

		return <div id={id} style={[
			styles,
			{
				backgroundColor: this.props.bgColor,
				borderTop: `1px solid ${this.props.bgColor}`,
			},
			style,
		]}>
			<div style={{
				backgroundImage: `url(${this.props.bgImg})`,
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				backgroundSize: 'cover',
				opacity: '0.6',
				width: '100%',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: 10,
			}} />
			<div style={{
				position: 'relative',
				zIndex: 100,
				width: '100%',
				height: '100%',
			}}>
				{this.props.children}
			</div>
		</div>
	}

}

export default Radium(FullPage)