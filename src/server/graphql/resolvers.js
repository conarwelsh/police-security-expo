import Users from '~/server/services/users'

const users = new Users()

export default {
	RootQuery: {
		user(root, { id }, ctx){
			return users.find(id)
		},
		users(root, { limit, offset }, ctx){
			return users.paginate(limit, offset)
		},
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
}