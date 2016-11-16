import React, { Component } from 'react'
import theme from '../theme'
import Button from '~/Button'

export default class Exhibitors extends Component {

	render() {
		return <div style={theme.getStyle('Page')}>
			<h1>Exhibitors</h1>
			<div style={theme.getStyle('partial underline')} />

			<p>
				<Button href="/files/PSE17 Application & Exhibit Space Contract.pdf" target="_blank" kind="primary">
					Exhibitor Application
				</Button>
			</p>

			<p>
				<Button target="_blank" kind="primary">
					Exhibitor Prospectus - Coming Soon
				</Button>
			</p>

			<p>
				<Button href="/rates" kind="primary">
					Exhibitor Space Rental Rates
				</Button>
			</p>
			
			<p>
				<Button href="/name-badges" kind="primary">
					Exhibitor Name Badge
				</Button>
			</p>

			<p>
				<Button href="https://www.map-dynamics.com/pse2017" target="_blank" kind="primary">
					Floorplan
				</Button>
			</p>

			<img src="/img/website7.jpg" />
			<img src="/img/website5.jpg" />
		</div>
	}
}