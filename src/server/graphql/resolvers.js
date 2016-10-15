import Users from '~/server/services/users'
import Pages from '~/server/services/Pages'

const users = new Users()
const pages = new Pages()

export default {
	RootQuery: {
		pages(root, args, ctx) {
			return []
		},
		page(root, { slug }, ctx) {
			return pages.findBySlug(slug)
		},
		user(root, { id }, ctx){
			return users.find(id)
		},
		users(root, { limit, offset }, ctx){
			return users.paginate(limit, offset)
		},
		viewer(){},
	},
	RootMutation: {
		signUp(){},
		login(){},
		saveUser(){},
		savePage(){},
	},
	Date: {
		__parseValue(value) {
			return new Date(value); // value from the client
		},
		__serialize(value) {
			return value.getTime(); // value sent to the client
		},
		__parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return parseInt(ast.value, 10); // ast value is always in string format
			}
			return null;
		},
	},
	AuthPayload: {
		data(auth, args, ctx) {
			return auth.data
		}
	},
}