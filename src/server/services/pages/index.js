import Service from '@/Service'
import Page from './Page'

export {
	Page,
}

export default class Pages extends Service {

	static table = 'pages'

	static Model = Page

	findBySlug(slug) {
		return this.sql(this.table)
			.select()
			.where('slug', slug)
			.then(results => new this.Model(results[0]))
	}

}
