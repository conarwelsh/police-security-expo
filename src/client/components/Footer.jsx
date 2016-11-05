import React, { Component } from 'react'
import theme from '../theme'

export default class Footer extends Component {

	render() {
		return <footer style={theme.getStyle('Footer')}>
			<section className="s-grid-stretch s-grid-sm-12 s-grid-md-3">
				<div className="s-grid-cell">
					<img src="/img/medallion-100pixel.png" />
					
					<p className="lead">
						Police Security Expo 2017
					</p>

					<address>
						P.O. Box 20068<br />
						Sarasota, FL<br />
						34276
					</address>

					<address>
						police-securityexpo@comcast.net
					</address>

					<address>
						P. 1-800-323-1927<br />
						F. 941-927-5407
					</address>
				</div>
				<div className="s-grid-cell">
					<h4>Page Links</h4>
					<ul>
						<li>
							<a href=''>exhibitors</a>
						</li>
						<li>
							<a href=''>attendees</a>
						</li>
						<li>
							<a href=''>floorplan</a>
						</li>
						<li>
							<a href=''>accomodations</a>
						</li>
					</ul>
				</div>
				<div className="s-grid-cell">
					<h4>Something Else</h4>
				</div>
				<div className="s-grid-cell">
					<h4>More Summary Content</h4>
				</div>
			</section>

			<section className="s-grid-stretch s-grid-sm-6" style={theme.getStyle('Footer.copyright')}>
				<div className="s-grid-cell">
					&copy; SA 2016
				</div>
				<div className="s-grid-cell" style={theme.getStyle('text right')}>
					facebook
					twitter
					etc
				</div>
			</section>
		</footer>
	}

}