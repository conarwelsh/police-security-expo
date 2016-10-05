import Service from '@/Service'
import User from './User'

export {
	User,
}

export default class Users extends Service {

	static table = 'users'

	static Model = User

}