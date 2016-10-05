import { User } from '~/server/services/users'
import { AuthPayload } from '~/server/services/auth'

const schemaDef = `
	schema {
		query: RootQuery
	}
`

const rootQuery = `
	type RootQuery {
		viewer: User
		user(email: String!): User
		users(limit: Int, offset: Int): [User]
		pages: [Page]
		page(slug: String!): Page
	}

	type RootMutation {
		signUp (
			email: String!
			password: String!
			firstName: String
			lastName: String
		): User

		login (
			email: String!
			password: String!
		): AuthPayload

		saveUser (
			user: userInput
		): User

		savePage (
			page: pageInput
		): Page
	}

	type Page {
		id: String!
		title: String
		slug: String
		body: String
		publishedAt: Date
		createdAt: Date
		updatedAt: Date
	}

	input userInput {
		id: String
		email: String!
		password: String
		firstName: String
		lastName: String
	}

	input pageInput {
		id: String
		title: String
		slug: String
		body: String
		publishedAt: Date
	}
`

const DateScalar = `
	scalar Date
`

export default [
	schemaDef,
	rootQuery,
	DateScalar,
	
	AuthPayload,
	User.schemaType(),
]