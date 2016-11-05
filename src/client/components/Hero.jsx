import React, { Component } from 'react'
import Button from '~/Button'
import theme from '../theme'
import BackgroundSlideshow from '~/BackgroundSlideshow'
import FadeOnScroll from '~/FadeOnScroll'

// animate each line of text

export default class Hero extends Component {

	render() {
		// return <BackgroundSlideshow
		// 	className="s-grid-stretch s-grid-sm-12 s-grid-lg-6"
		// 	images={[
		// 		'/img/expo-floor-1300pixels-bw.jpg',
		// 		'/img/RGK_0651.JPG',
		// 		'/img/RGK_0732.JPG',
		// 	]}
		// 	style={{
		// 		height: '100%',
		// 	}}
		// >
		return <div
			className="s-grid-stretch s-grid-sm-12 s-grid-lg-6"
			style={{
				height: '100%',
			}}
		>
			<div className="s-grid-cell hidden-mobile">
			</div>
			
			<div className="s-grid-cell">
				<FadeOnScroll style={{
					padding: '300px 0'
				}}>
					<h1>
						<small>31st Annual</small>
						<br />
						Police Security Expo
					</h1>
					
					<div style={theme.getStyle('partial underline')} />
					
					<p className="lead">
						June 27th & 28th, 2017
					</p>

					<p>
						The industry's longest running, most respected, attendee-driven product showcase.
					</p>
					
					<p>
						Technology and solutions
						for today and tomorrow
					</p>

					<section className="s-grid-top s-grid-sm-12 s-grid-md-6">
						<div className="s-grid-cell">
							<Button kind="primary" style={{width:'100%'}}>Attendee Registration</Button>
						</div>
						<div className="s-grid-cell">
							<Button kind="outline" style={{width:'100%'}}>Exhibitor Registration</Button>
						</div>
					</section>
				</FadeOnScroll>
			</div>
		</div>
		// </BackgroundSlideshow>
	}

}