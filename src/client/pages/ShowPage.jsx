import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ShowPage extends Component {

	render() {
		const {
			page
		} = this.props.data

		if( ! page){
			return <div>
				Coming Soon
			</div>
		}

		return <div>
			<h1>{page.title}</h1>
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