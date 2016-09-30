import RestfulService from '@/RestfulService'

import users from './users'

export default function() {
	const app = this
	
	app.use('/api/users', new RestfulService(users))
}