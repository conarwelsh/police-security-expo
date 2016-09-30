import express from 'express'
import bodyParser from 'body-parser'
import debug from 'debug'

import schema from './schema'
// import mocks from './mocks'
import resolvers from './resolvers'
import connectors from './connectors'

import { apolloExpress, graphiqlExpress } from 'apollo-server'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

const app = express()
const log = debug('cw.graphql')

const executableSchema = makeExecutableSchema({
	typeDefs: schema,
	resolvers,
	// connectors,
	logger: { log },
	allowUndefinedInResolve: false,
	resolverValidationOptions: {},
})

// addMockFunctionsToSchema({
// 	schema: executableSchema,
// 	mocks: mocks,
// 	preserveResolvers: true,
// })

app.post('/graphql', bodyParser.json(), apolloExpress(req => ({
	schema: executableSchema,
	context: { user: req.user },
})));

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql',
}));

export default app