import React, { Component } from 'react'
import theme from '../theme'
import CenteredVertical from '~/CenteredVertical'

export default class Overview extends Component {

	render() {
		return <section className="s-grid-stretch" style={{padding:'100px 2em'}}>
			<div className="s-grid-cell s-grid-cell-md-4 hidden-mobile" style={{textAlign:'center'}}>
				<CenteredVertical>
					<img
						src="/img/transparent background - pse17 logo.png"
						style={theme.getStyle('Overview.image')}
					/>
				</CenteredVertical>
			</div>
			<div className="s-grid-cell s-grid-cell-sm-12 s-grid-cell-md-8">
				<h1>
					Industry
					<br />
					<strong>Super Show</strong>
				</h1>
				
				<div style={theme.getStyle('partial underline')} />
				
				<section className="s-grid-top s-grid-cell-sm-12 s-grid-md-6">
					<div className="s-grid-cell">
						<h3>Latest Products & Services</h3>
						<p>
							Featuring the latest products, services & technological advances needed by law enforcement and security professionals.
						</p>
					</div>
					<div className="s-grid-cell">
						<h3>State of the Art</h3>
						<p>
							The Expo will take place in the “state of the art” Atlantic City (New Jersey) Convention Center. This is the Industry’s longest running, most respected, and best known “product based” showcase.
						</p>
					</div>
					<div className="s-grid-cell">
						<h3>Free Admission</h3>
						<p>
							If you have a law enforcement or security badge... The Police Security Expo is for you! Police Security Expo 2017 is open to all Industry Professionals with <strong>no admission fees</strong>.
						</p>
					</div>
					<div className="s-grid-cell">
						<h3>All Under One Roof</h3>
						<p>
							Review, Compare, Evaluate, Price Shop, and Purchase the newest goods & services in the Industry.
						</p>
					</div>
				</section>
			</div>
		</section>
	}

}