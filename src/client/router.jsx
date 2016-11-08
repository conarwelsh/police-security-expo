import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Home from './pages/Home'
import Accommodations from './pages/Accommodations'
import Rates from './pages/Rates'
import Attendees from './pages/Attendees'
import Exhibitors from './pages/Exhibitors'

export default <Router history={browserHistory}>
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="/accommodations" component={Accommodations} />
		<Route path="/rates" component={Rates} />
		<Route path="/attendees" component={Attendees} />
		<Route path="/exhibitors" component={Exhibitors} />
	</Route>
</Router>