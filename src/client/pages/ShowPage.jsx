import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Remarkable from 'remarkable'

class ShowPage extends Component {

	render() {
		const {
			page
		} = this.props.data

		if( ! page){
			return <div>
				Not Found
			</div>
		}

		const {
			title,
			body,
		} = page

		const md = new Remarkable({
			html: true,
		});

		const rendered = md.render(body)

		return <div>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: rendered }} />
		</div>
	}

}

const getPage = gql`
	query getPage($slug: String!) {
		page(slug: $slug) {
			id
			title
			slug
			body
			createdAt
			updatedAt
			publishedAt
		}
	}
`

const withPage = graphql(getPage, {
	options: ownProps => ({
		variables: {
			slug: ownProps.params.slug,
		}
	})
})

export default withPage(ShowPage)