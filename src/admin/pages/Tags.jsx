import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Button from '@/ui/Button'
import DataTable from '@/ui/DataTable'

class Tags extends Component {

	render() {
		const tags = this.props.tags || []

		return <div>
			<h1>Tags</h1>

			<DataTable
				data={tags}
				cols={[
					{
						name: 'name',
						display: 'Name',
					},
					{
						name: 'numPosts',
						display: '# Posts',
					},
				]}
			/>

			<div style={{ textAlign: 'center' }}>
				<Button
					onClick={this.props.loadMore}
				>
					Load More
				</Button>
			</div>
		</div>
	}

}

const paginatedTags = gql`
	query getTags($limit: Int, $offset: Int) {
		tags(limit: $limit, offset: $offset) {
			id
			name
			numPosts
		}
	}
`

const PER_PAGE = 5

export default graphql(paginatedTags, {
	options(props) {
		return {
			variables: {
				offset: 0,
				limit: PER_PAGE,
			},
			forceFetch: true,
		}
	},
	props: ({ data: { loading, tags, fetchMore }}) => ({
		loading,
		tags,
		loadMore() {
			return fetchMore({
				variables: {
					offset: tags.length
				},
				updateQuery: (prev, { fetchMoreResult }) => {
					if(! fetchMoreResult.data){
						return prev
					}
					
					return Object.assign({}, prev, {
						tags: [...prev.tags, ...fetchMoreResult.data.tags]
					})
				}
			})
		}
	}),
})(Tags)