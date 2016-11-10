import React, { Component } from 'react'
import Button from '~/Button'
import theme from '../theme'
import BackgroundSlideshow from '~/BackgroundSlideshow'
import FadeOnScroll from '~/FadeOnScroll'

// animate each line of text

export default class Hero extends Component {

	render() {
		return <BackgroundSlideshow
			className="s-grid-stretch s-grid-sm-12 s-grid-lg-6"
			images={[
				'/img/banner1.jpg',
				'/img/banner2.jpg',
				'/img/banner3.jpg',
				'/img/banner4.jpg',
				'/img/banner5.jpg',
			]}
			style={{
				height: '100%',
				backgroundPosition: 'center center',
			}}
		>
			<div className="s-grid-cell hidden-mobile" style={{ textAlign: 'center' }}>
				<img src="/img/trade-show-executive.jpeg" style={{ marginTop: 150 }} />
			</div>
			
			<div className="s-grid-cell">
				<FadeOnScroll style={{
					backgroundColor: 'rgba(0,0,0,0.5)',
					margin: '300px 0',
					padding: 50,
					color: '#fff',
				}}>
					<img src="/img/ps-banner.jpeg" />
					
					<p>
						The industry's longest running, most respected, attendee-driven product showcase.
					</p>
					
					<p>
						Technology and solutions
						for today and tomorrow
					</p>

					<section className="s-grid-top s-grid-sm-12 s-grid-md-6">
						<div className="s-grid-cell">
							<Button
								to='/attendees'
								kind="primary"
								style={{width:'100%'}}
							>
								Attendee Registration
							</Button>
						</div>
						<div className="s-grid-cell">
							<Button
								to='/exhibitors'
								kind="accent"
								style={{width:'100%'}}
							>
								Exhibitor Registration
							</Button>
						</div>
					</section>
				</FadeOnScroll>
			</div>
		</BackgroundSlideshow>
	}

}