import React, { Component } from 'react'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import theme from '../theme'
import CenteredVertical from '~/CenteredVertical'
import BackgroundSlideshow from '~/BackgroundSlideshow'

export default class Home extends Component {

	render() {
		return <div>
			<Hero />
			<Overview />

			

			<section className="s-grid-stretch s-grid-sm-12 s-grid-md-6" style={{
				minHeight: 500,
				borderTop: '1px solid #dedede',
			}}>
				<div className="s-grid-cell" style={{marginTop:0,marginBottom:0}}>
					<CenteredVertical>
						<h1>
							Develop
							<br />
							<strong>Relationships</strong>
						</h1>
						<div style={theme.getStyle('partial underline')} />
						<p>
							Be seen among the crowd, develop key relationships, launch a new product, say "hello" to existing clients, or go head-to-head with your competition.
						</p>
						<p>
							Connect with Suppliers, Industry Counterparts, Customers & Prospects more effectively and efficiently.
						</p>
						<p>
							Strengthen your relationships with Customers, Dealers, and other Industry Suppliers in a time-tested forum where you are certain to obtain new business leads, close sales and get results.
						</p>
					</CenteredVertical>
				</div>
				<div className="s-grid-cell hidden-mobile" style={{marginTop:0,marginBottom:0}}>
					<div className="overlay-wrapper">
						<div
							style={{
								width: '100%',
								height: '100%',
								backgroundImage: "url(/img/website9.jpg)",
								backgroundSize: 'cover',
							}}
						/>
						<div className="light-overlay" />
					</div>
				</div>
			</section>



			<section className="s-grid-stretch s-grid-sm-12 s-grid-md-6" style={{
				minHeight: 500,
			}}>
				<div className="s-grid-cell hidden-mobile" style={{marginTop:0,marginBottom:0}}>
					<div className="overlay-wrapper">
						<div
							style={{
								width: '100%',
								height: '100%',
								backgroundImage: "url(/img/website1.jpg)",
								backgroundSize: 'cover',
							}}
						/>
						<div className="light-overlay" />
					</div>
				</div>
				<div className="s-grid-cell" style={{marginTop:0,marginBottom:0}}>
					<CenteredVertical>
						<h1>
							Over
							<br />
							<strong>750 Exhibits</strong>
						</h1>
						<div style={theme.getStyle('partial underline')} />
						<p>
							There are over 750 Exhibits on display; seminar programs; product demonstrations; & new product updates. These events are all scheduled with convenient time slots to ensure the value of your time spent at the Expo.
						</p>
						<p>
							Connect with Suppliers, Industry Counterparts, Customers & Prospects more effectively and efficiently.
						</p>
					</CenteredVertical>
				</div>
			</section>




			<section className="s-grid-stretch" style={{
				padding:'100px 2em',
				borderTop: '1px solid #dedede',
			}}>
				<div className="s-grid-cell s-grid-cell-sm-12 s-grid-cell-md-6">
					<h1>
						Attendance of over
						<br />
						<strong>7500 Industry Professionals</strong>
					</h1>
					<div style={theme.getStyle('partial underline')} />
				</div>
				<div className="s-grid-cell s-grid-cell-sm-12 s-grid-cell-md-3">
					<h3>Attendees Include</h3>
					<ul>
						<li>Police Chiefs</li>
						<li>Police Department Directors</li>
						<li>Municipal Police (All Ranks)</li>
						<li>State Police (All Ranks)</li>
						<li>County Police (All Ranks)</li>
						<li>Airport Police/TSA Allied Association Representatives</li>
						<li>College/University Campus Police Correction Officers</li>
						<li>Federal & State Agencies</li>
						<li>Housing Police</li>
						<li>Juvenile Officers</li>
						<li>Marine Police</li>
						<li>Narcotics Officers</li>
						<li>Park Police</li>
						<li>School Resource Officers</li>
						<li>Sheriff’s Departments</li>
						<li>Tactical Teams</li>
						<li>Traffic Safety Officers</li>
						<li>Transit Police</li>
						<li>Wardens/Superintendents</li>
					</ul>
				</div>
				<div className="s-grid-cell s-grid-cell-sm-12 s-grid-cell-md-3">
					<h3>Specialists Include</h3>
					<ul>
						<li>Business Representatives Consultants</li>
						<li>Corporate Security Administrators</li>
						<li>Emergency Response Coordinators</li>
						<li>Executive & Command Staff</li>
						<li>Fire/Rescue Officers</li>
						<li>First Responders</li>
						<li>Fleet Managers</li>
						<li>Hazardous Materials Coordinators</li>
						<li>Homeland Security Agencies</li>
						<li>Mayors/City Managers</li>
						<li>Private Detectives/Investigators</li>
						<li>Private Security Firms</li>
						<li>Prosecutors</li>
						<li>Procurement Departments</li>
						<li>Public Utilities Managers</li>
						<li>Purchasing Agents</li>
						<li>Risk Management Officers</li>
						<li>Training Academies/Directors</li>
					</ul>
				</div>
			</section>



			
			<BackgroundSlideshow
				style={{
					textAlign:'center',
					padding:'100px 2em',
					backgroundAttachment: 'fixed',
				}}
				images={[
					'/img/videobg.jpg',
				]}
			>
				<div className="videoWrapper">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/2D8kFwmlSMg"
						frameBorder="0"
						allowFullScreen
					/>
				</div>
			</BackgroundSlideshow>




			<section style={{
				padding:'100px 2em'
			}}>
				{/*<h1>
					Sponsored by
				</h1>
				<div style={theme.getStyle('partial underline')} />*/}

				<section className="s-grid-stretch s-grid-sm-12 s-grid-md-4">
					<div className="s-grid-cell">
						<CenteredVertical style={{textAlign:'center'}}>
							<img style={{maxWidth:250}} src="/img/cropped-logopng-100-1.png" />
						</CenteredVertical>
					</div>
					<div className="s-grid-cell">
						<CenteredVertical style={{textAlign:'center'}}>
							<img style={{maxWidth:250}} src="/img/NJ%20Chiefs%20logo-JPEG%20file.jpg" />
						</CenteredVertical>
					</div>
					<div className="s-grid-cell">
						<CenteredVertical style={{textAlign:'center'}}>
							<img style={{maxWidth:250}} src="/img/swa-logo.png" />
						</CenteredVertical>
					</div>
				</section>
			</section>
		</div>
	}

}

/*<section
	style={{
		padding:'100px 2em',
		backgroundColor:'#dedede',
	}}
>
	<div
		style={{
			maxWidth: 600,
			margin: '0 auto',
		}}
	>
		<h1>
			Exhibitor
			<br />
			<strong>Setup</strong>
		</h1>
		<div style={theme.getStyle('partial underline')} />

		<p>Monday, June 26, 2017 8:00AM - 6:00PM</p>

		<p>Attendees must register to attend and present appropriate credentials. Additional Expo Information: police-securityexpo@comcast.net Atlantic City Information: www.atlanticcitynj.com</p>
		<p> All of our attendees share a common interest and goal – to view goods, products and services to make them safer and more effective on the job.</p>
	</div>
</section>*/