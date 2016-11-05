import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Home from './pages/Home'

export default <Router history={browserHistory}>
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
	</Route>
</Router>