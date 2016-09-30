import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import Content from '~/client/components/Content'
import Header from '~/client/components/Header'
import Footer from '~/client/components/Footer'
import theme from '@/ui/theme'

const styles = theme.get('Application')

export default class Application extends Component {

	constructor(...args) {
		super(...args)
		const { schema } = this.props
		const networkInterface = createNetworkInterface('http://localhost:3000/graphql')

		networkInterface.use([{
			applyMiddleware(req, next) {
				if(! req.options.headers) {
					req.options.headers = {}
				}

				req.options.headers.authorization = localStorage.getItem('token')
					|| null

				next()
			}
		}])
		
		this.client = new ApolloClient({
			networkInterface,
			dataIdFromObject: r => r.id
		})
	}

	logout() {
		localStorage.removeItem('token')
		this.client.resetStore()
	}

	render() {
		let {
			children,
			location,
		} = this.props

		return <ApolloProvider client={this.client}>
			<div style={styles.wrapper}>
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
				<Footer />
			</div>
		</ApolloProvider>
	}

}