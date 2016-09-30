import { forOwn, upperFirst, toLower } from 'lodash'
import Model from '@/Model'
import moment from 'moment'

export default class User extends Model {

	static properties = {
		id: 'Int',
		email: 'String',
		firstName: 'String',
		lastName: 'String',
		password: 'String',
		createdAt: 'Date',
		updatedAt: 'Date',
		facebookId: 'String',
		githubId: 'String',
		googleId: 'String',
		linkedinId: 'String',
	}

	static virtuals = [
		'fullName',
		'token',
	]

	static hidden = [
		'password',
	]

	constructor(...args) {
		super(...args)
		this.token = '123asd234'
	}

	getEmailAttribute() {
		return toLower(this.attributes.email || '')
	}

	getFirstNameAttribute() {
		return upperFirst(this.attributes.firstName || '')
	}

	getLastNameAttribute() {
		return upperFirst(this.attributes.lastName || '')
	}

	getCreatedAtAttribute() {
		return moment(this.attributes.createdAt, 'YYYY/MM/DD HH:mm:ss')
	}

	getUpdatedAtAttribute() {
		return moment(this.attributes.updatedAt, 'YYYY/MM/DD HH:mm:ss')
	}

	get fullName() {
		return [
			this.firstName,
			this.lastName,
		].join(' ')
	}

}