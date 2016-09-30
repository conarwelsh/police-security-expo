import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import moment from 'moment'
import Button from '@/ui/Button'
import DataTable from '@/ui/DataTable'
import { Link } from 'react-router'

class Posts extends Component {

	render() {
		const posts = this.props.posts || []

		return <div>
			<h1>Posts</h1>
			
			<Link to="/admin/posts/create">
				<Button>Create</Button>
			</Link>

			<DataTable
				data={posts}
				cols={[
					{
						name: 'title',
						display: 'Title',
					},
					{
						name: 'tags',
						display: 'Tags',
						format(tags) {
							return tags.map(tag => {
								return tag.name
							})
							.join(', ')
						}
					},
					{
						name: 'publishedAt',
						display: 'Published At',
						format(val) {
							return moment(val).fromNow()
						}
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

const paginatedPosts = gql`
	query getPosts($limit: Int, $offset: Int) {
		posts(limit: $limit, offset: $offset) {
			id
			title
			publishedAt

			tags {
				name
			}
		}
	}
`

const PER_PAGE = 5

export default graphql(paginatedPosts, {
	options(props) {
		return {
			variables: {
				offset: 0,
				limit: PER_PAGE,
			},
			forceFetch: true,
		}
	},
	props: ({ data: { loading, posts, fetchMore }}) => ({
		loading,
		posts,
		loadMore() {
			return fetchMore({
				variables: {
					offset: posts.length
				},
				updateQuery: (prev, { fetchMoreResult }) => {
					if(! fetchMoreResult.data){
						return prev
					}
					
					return Object.assign({}, prev, {
						posts: [...prev.posts, ...fetchMoreResult.data.posts]
					})
				}
			})
		}
	}),
})(Posts)