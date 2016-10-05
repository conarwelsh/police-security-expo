import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Application from '~/client/containers/Application'
import {
	Home,
	ShowPage,
} from './pages'

export default <Router history={browserHistory}>
	<Route path="/" component={Application}>
		<IndexRoute component={Home} />
		<Route path=":slug" component={ShowPage} />
	</Route>
</Router>