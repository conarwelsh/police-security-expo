import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Button from '@/ui/Button'
import DataTable from '@/ui/DataTable'

class Users extends Component {

	render() {
		const users = this.props.users || []

		return <div>
			<h1>Users</h1>

			<DataTable
				data={users}
				cols={[
					{
						name: 'email',
						display: 'Email',
					},
					{
						name: 'firstName',
						display: 'First Name',
					},
					{
						name: 'lastName',
						display: 'Last Name',
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

const paginatedUsers = gql`
	query getUsers($limit: Int, $offset: Int) {
		users(limit: $limit, offset: $offset) {
			id
			email
			firstName
			lastName
		}
	}
`

const PER_PAGE = 5

export default graphql(paginatedUsers, {
	options(props) {
		return {
			variables: {
				offset: 0,
				limit: PER_PAGE,
			},
			forceFetch: true,
		}
	},
	props: ({ data: { loading, users, fetchMore }}) => ({
		loading,
		users,
		loadMore() {
			return fetchMore({
				variables: {
					offset: users.length
				},
				updateQuery: (prev, { fetchMoreResult }) => {
					if(! fetchMoreResult.data){
						return prev
					}
					
					return Object.assign({}, prev, {
						users: [...prev.users, ...fetchMoreResult.data.users]
					})
				}
			})
		}
	}),
})(Users)