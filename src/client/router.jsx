import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Application from '~/client/containers/Application'
import {
	Home,
} from './pages'

export default <Router history={browserHistory}>
	<Route path="/" component={Application}>
		<IndexRoute component={Home} />
	</Route>
</Router>