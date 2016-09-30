import { User } from '~/server/services/users'

const schemaDef = `
	schema {
		query: RootQuery
	}
`

const rootQuery = `
	type RootQuery {
		user(id: Int): User
		users(limit: Int, offset: Int): [User]
	}
`

const DateScalar = `
	scalar Date
`

export default [
	schemaDef,
	rootQuery,
	DateScalar,
	User.schemaType(),
]