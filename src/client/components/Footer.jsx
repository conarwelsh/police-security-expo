import React, { Component } from 'react'
import theme from '../theme'

export default class Footer extends Component {

	render() {
		return <footer style={theme.getStyle('Footer')}>
			<section className="s-grid-stretch s-grid-sm-12 s-grid-md-3">
				<div className="s-grid-cell">
					<h3>
						Police Security Expo 2017
					</h3>

					<img src="/img/medallion-100pixel.png" />

					<h5>Mailing</h5>
					<address>
						P.O. Box 20068<br />
						Sarasota, FL<br />
						34276
					</address>
					<br />

					<h5>Contact</h5>
					<address>
						police-securityexpo@comcast.net
					</address>
					<br />

					<address>
						P. 1-800-323-1927<br />
						F. 941-927-5407
					</address>
				</div>
				<div className="s-grid-cell">
					<h3>Pages</h3>
					<ul>
						<li>
							<a href='/exhibitors'>exhibitors</a>
						</li>
						<li>
							<a href='/attendees'>attendees</a>
						</li>
						<li>
							<a href='https://www.map-dynamics.com/pse2017'>floorplan</a>
						</li>
						<li>
							<a href='/accommodations'>accommodations</a>
						</li>
						<li>
							<a href='/rates'>rental rates</a>
						</li>
					</ul>
				</div>
				<div className="s-grid-cell">
					<h3>Expo Hours</h3>
					<p>Tuesday, June 27, 2017 10:00AM - 5:00PM</p>
					<p>Wednesday, June 28, 2017 10:00AM - 3:30PM</p>
				</div>
				<div className="s-grid-cell">
					<h3>Future Dates</h3>

					<p>
						Atlantic City (NJ) Convention Center
						<br /><br />
						32nd Annual  Police Security  Expo 2018 - JUNE 26 & 27, 2018<br />
						33rd  Annual  Police Security  Expo 2019 - JUNE 25 & 26, 2019<br />
						34th  Annual  Police  Security Expo 2020 - JUNE 23 & 24, 2020<br />
						<br /><br />
						Expo Dates listed are Tuesday & Wednesday
						<br /><br />
						Exhibit Setup is the Monday prior.
					</p>
				</div>
			</section>


			<section style={theme.getStyle('Footer.copyright')}>
				<address style={{
					textAlign: 'center',
				}}>
					Atlantic City Convention Center Halls C, FLEX & B (Entranceway Hall C)<br />
					One Convention Blvd<br />
					Atlantic City, NJ
				</address>

				<div className="s-grid-stretch s-grid-sm-6">
					<div className="s-grid-cell">
						&copy; SA 2016
					</div>
					<div className="s-grid-cell" style={theme.getStyle('text right')}>
						facebook
						twitter
						etc
					</div>
				</div>
			</section>
		</footer>
	}

}