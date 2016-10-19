import moment from 'moment'
import Users from '~/server/services/users'
import Pages from '~/server/services/pages'

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
			if(value !== '0000-00-00 00:00:00'){
				let time = moment(value, "YYYY-MM-DD HH:mm:ss")
				return time.toDate().getTime(); // value sent to the client
			}
			else {
				return 0
			}
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
	Page: {
		publishedAt(page, args, ctx) {
			return page.published_at
			// return moment(page.created_at, "YYYY-MM-DD HH:mm:ss")
		},
		createdAt(page, args, ctx) {
			return page.created_at
			// return moment(page.created_at, "YYYY-MM-DD HH:mm:ss")
		},
		updatedAt(page, args, ctx) {
			return page.updated_at
			// return moment(page.updated_at, "YYYY-MM-DD HH:mm:ss")
		},
	},
	User: {
		createdAt(user, args, ctx) {
			return user.created_at
			// return moment(user.created_at, "YYYY-MM-DD HH:mm:ss")
		},
		updatedAt(user, args, ctx) {
			return user.updated_at
			// return moment(user.updated_at, "YYYY-MM-DD HH:mm:ss")
		},
	},
}