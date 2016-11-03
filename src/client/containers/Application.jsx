import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Content from '~/client/components/Content'
import Header from '~/client/components/Header'
import theme from '@/ui/theme'

const styles = theme.get('Application')

export default class Application extends Component {

	render() {
		let {
			children,
			location,
		} = this.props

		return <div style={styles.wrapper}>
			<Header />
			<ReactCSSTransitionGroup
				component={Content}
				transitionName="page-animation"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>
				{React.cloneElement(children, {
					key: location.pathname
				})}
			</ReactCSSTransitionGroup>
		</div>
	}

}