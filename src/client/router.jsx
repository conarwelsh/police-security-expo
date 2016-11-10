import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Home from './pages/Home'
import Accommodations from './pages/Accommodations'
import Rates from './pages/Rates'
import Attendees from './pages/Attendees'
import Exhibitors from './pages/Exhibitors'
import NameBadges from './pages/NameBadges'
import ExhibitorList from './pages/ExhibitorList'
import SeminarList from './pages/SeminarList'
import Directions from './pages/Directions'

export default <Router history={browserHistory}>
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="/accommodations" component={Accommodations} />
		<Route path="/rates" component={Rates} />
		<Route path="/attendees" component={Attendees} />
		<Route path="/exhibitors" component={Exhibitors} />
		<Route path="/name-badges" component={NameBadges} />
		<Route path="/exhibitor-list" component={ExhibitorList} />
		<Route path="/seminar-list" component={SeminarList} />
		<Route path="/directions" component={Directions} />
	</Route>
</Router>