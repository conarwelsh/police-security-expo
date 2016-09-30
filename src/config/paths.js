import path from 'path'

const BASE = path.resolve(__dirname, '../../')
const SERVER = path.join(BASE, 'src', 'server')

export default {
	public: path.join(BASE, 'public'),
	views: path.join(SERVER, 'views'),
}