import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import Application from '~/admin/containers/Application'
import {
	Dashboard,
	Post,
	PostCreate,
	Posts,
	Tag,
	Tags,
	User,
	Users,
} from './pages'

export default <Router history={browserHistory}>
	<Route path="/admin" component={Application}>
		<IndexRoute component={Dashboard} />
		<Route path="posts/create" component={PostCreate} />	
		<Route path="posts/:slug" component={Post} />	
		<Route path="posts" component={Posts} />
		<Route path="users/:email" component={User} />
		<Route path="users" component={Users} />	
		<Route path="tags/:name" component={Tag} />
		<Route path="tags" component={Tags} />
	</Route>
</Router>