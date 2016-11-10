import React, { Component } from 'react'
import theme from '../theme'

export default class Rates extends Component {

	render() {
		return <div style={theme.getStyle('Page')}>
			<h1>
				Exhibit Space<br />
				<strong>Rental Rates</strong>
			</h1>
			<div style={theme.getStyle('partial underline')} />

			<p>
				Exhibit space is in 10’ x 10’ (100 sq.ft.) blocks
				Any exhibitor may display products of NO MORE THAN two (2)
				companies or clients, which they represent, in a single 10’ x 10’ Exhibit space.
			</p>

			<p>&nbsp;</p>

			<h3>Standard Option #1</h3>
			<p>
				<strong>Full payment received before February 8, 2017</strong>
				= $1275. per 10’ x 10’ (100 sq.ft.) space.
			</p>
			<p>
				<strong>Full or partial Payment Balance received after February 8, 2017</strong>
				= $1350. per 10’ x 10’ (100 sq.ft.) space (no exceptions )
			</p>

			<h3>Standard (No Furniture) Option #1 INCLUDES:</h3>
			<p>
				Identification Sign stating company name with Booth number,
				background & side divider drapery (8 ft. high with 42” side curtains),
				a complimentary listing in the Police Security Expo 2017 Directory,
				Expo Website Exhibitor listing with your website domain name link,
				up to five (5) complimentary Exhibitor Badges per 100 square foot
				block, PSE 2017 Expo banner image for your website with Expo
				domain name link, Post-Expo registered Attendee listing available by
				download with password provided at the Expo, Guard Service during
				non-show hours, use of Security Lock-Up room during non-show
				hours, Exhibitor Service Manual containing a comprehensive
				“Exhibitor Rights” package with booth set up &amp; dismantling
				instructions &amp; preferred Exhibitor rates for additional
				Equipment rentals, No vehicle spotting charges.
			</p>

			<p>&nbsp;</p>

			<h3>Deluxe Option #2 (Furniture Package):</h3>
			<p>
				<strong>Full payment received before February 8, 2017</strong>
				= $1395. per 10’ x 10’ (100 sq.ft.) space.
			</p>
			<p>
				<strong>Full or partial payment received after February 8, 2017</strong>
				= $1475. per 10’ x 10’ (100 sq.ft.) space (no exceptions )
			</p>

			<h3>Deluxe Furniture Option #2 INCLUDES:</h3>
			<p>
				All of the standard features in Option #1, plus ONE
				6 ft. display table (30” high), Two side chairs, one wastebasket,
				9’ x 10’ Blue booth carpeting (no color substitutions).
			</p>

			<h3>MULTIPLE BOOTH DISCOUNTS:</h3>
			<p>
				Deduct $50.00 from each 10’ x 10’ space if six or more Exhibit space blocks are contracted from Option #1 or Option #2.
				Exhibitors taking twelve or more (10’ x 10’) spaces will be given a complimentary full page advertisement in the official Expo Directory (artwork to be supplied by Exhibitor).
			</p>
		</div>
	}
}