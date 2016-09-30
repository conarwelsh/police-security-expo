import config from '@/config'

import cache from './cache'
import database from './database'
import paths from './paths'
import server from './server'

config.set({
	cache,
	database,
	paths,
	server,
})

export default config