import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import debug from 'debug'

import config from '../config'

const { server, paths } = config

const app = express()
const logger = debug('ps.server')

app.use(express.static(paths.public))
app.set('view engine', 'pug')
app.set('views', paths.views)

app.use(bodyParser.json())

app.get('/*', (req, res, next) => {
	res.render('client')
})

app.use((err, req, res, next) => {
	res.render('500')
})

app.listen(server.port, () => {
	logger(`Application listening on port ${server.port}`)
})

export default app