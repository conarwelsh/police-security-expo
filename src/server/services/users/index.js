import Service from '@/Service'
import User from './User'
import { recordAction } from '~/server/middleware'
import {
	isLoggedIn,
	isAdmin,
} from '@/Auth/middleware'

export {
	User,
}

export default class Users extends Service {

	static table = 'users'

	static Model = User

	static before = [
		isLoggedIn,
		isAdmin,
	]

	static after = [
		recordAction,
	]

}