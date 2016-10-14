import React, { Component } from 'react'
import theme from '@/ui/theme'
import Button from '@/ui/Button'
import { Link } from 'react-router'

import FullPage from '~/client/components/FullPage'

const palette = theme.get('palette')
const styles = theme.get('Home')

export default class Home extends Component {

	render() {
		return <div style={styles.wrapper}>
			<FullPage
				bgImg="/img/RGK_0743.jpg"
				bgColor="black"
				style={{
					textAlign: 'center',
				}}
			>
				<div style={{
					backgroundColor: 'rgba(0,0,0,0.75)',
					color: '#fff',
					padding: '2em',
					display: 'inline-block',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translateY(-50%) translateX(-50%)',
				}}>
					<h1 style={{ textTransform: 'uppercase' }}>Technology and Solutions</h1>
	            	<h3>For today and tomorrow</h3>
	            	<div>
						<Button
							href="#attendee"
							kind="primary"
							style={{ display: 'inline-block', marginRight: 10 }}
						>
							Register as Attendee
						</Button>
						<Button
							href="#exhibitor"
							kind="primary"
							style={{ display: 'inline-block', marginRight: 10 }}
						>
							Register as Exhibitor
						</Button>
						<Button
							to="/accomodations"
							kind="accent"
							style={{ display: 'inline-block', marginLeft: 10 }}
						>
							Book Hotel
						</Button>
					</div>
				</div>
			</FullPage>
			<FullPage
				bgImg="/img/RGK_0732.jpg"
				bgColor="black"
			>
				<div style={{
					backgroundColor: 'rgba(0,0,0,0.75)',
					color: '#fff',
					padding: '2em',
					display: 'inline-block',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translateY(-50%) translateX(-50%)',
				}}>
					<h1 style={{textAlign: 'center'}}>The Industry Super Show</h1>

					<p>
						Featuring the latest products, services & technological advances
						needed by law enforcement and security professionals.
					</p>

					<p>
						On Tuesday & Wednesday, June 27 & 28, 2017, the 31st Annual Police Security Expo
						will take place in the “state of the art” Atlantic City (New Jersey) Convention Center.
						This is the Industry’s longest running, most respected, and best known “product based” showcase.
					</p>

					<p style={{fontSize:'1.3em'}}>
						There are over 750 Exhibits on display; seminar programs; product
						demonstrations; & <strong>new product updates</strong>. These events
						are all scheduled with convenient time slots to ensure the value of
						your time spent at the Expo.
					</p>

					<p>
						Over 7000 Industry Professionals are expected to attend. Since one quarter of the
						nation’s largest population base resides within 300 miles of Atlantic City, this
						premier destination is the perfect location for attracting Industry Professionals
						charged with the responsibility of securing their communities and businesses,
						while protecting themselves on the job.
					</p>
				</div>
			</FullPage>
			<FullPage
				bgImg="/img/RGK_0761.JPG"
				bgColor="red"
			>
				<div style={{
					backgroundColor: 'rgba(0,0,0,0.75)',
					color: '#fff',
					padding: '2em',
					display: 'inline-block',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translateY(-50%) translateX(-50%)',
				}}>
					<h2>
						Be seen among the crowd, develop key relationships, launch a new product, say
						"hello" to existing clients, or go head-to-head with your competition.
					</h2>

					<div style={{textAlign:'center'}}>
						<h2>Exhibit Opens</h2>
						<p>Tuesday, June 27, 2017 10:00AM - 5:00PM</p>
						<p>Wednesday, June 28, 2017 10:00AM - 3:30PM</p>

						<h2>Location</h2>
						<p>
							Atlantic City Convention Center
							<br />
							Halls C, FLEX & B (Entranceway Hall C)
							<br />
							One Convention Blvd, Atlantic City, NJ
						</p>

						<h2>Exhibitor Setup</h2>
						<p>
							Monday, June 26, 2017 8:00AM - 6:00PM
						</p>
					</div>
				</div>
			</FullPage>
			{/*bgImg="/img/RGK_0003.jpg"*/}
			<FullPage
				bgImg="/img/RGK_0748.jpg"
				bgColor="white"
				id="attendee"
			>
				<div style={{
					backgroundColor: 'rgba(0,0,0,0.75)',
					color: '#fff',
					padding: '2em',
					display: 'inline-block',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translateY(-50%) translateX(-50%)',
				}}>
					<h1>Attendee Info</h1>

					<p style={{fontSize:'1.3em'}}>Over 750 exhibits all on one floor</p>

					<p>
						Connect with Suppliers, Industry Counterparts, Customers & Prospects more effectively and efficiently.
					</p>

					<p>
						Attendees must register to attend and present appropriate
						credentials. All of our attendees share a common interest and goal –
						to view goods, products and services to make them safer and more
						effective on the job.
					</p>

					<Link to="/seminars">
						<Button kind="primary">Seminars List</Button>
					</Link>
					<Link to="/exhibitors">
						<Button kind="primary">Exhibitor List</Button>
					</Link>
					<Link to="/floorplan">
						<Button kind="primary">Floorplan</Button>
					</Link>
				</div>
			</FullPage>
			<FullPage
				bgImg="/img/RGK_0743.jpg"
				bgColor="blue"
				id="exhibitor"
			>
				<div style={{
					backgroundColor: 'rgba(0,0,0,0.75)',
					color: '#fff',
					padding: '2em',
					display: 'inline-block',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translateY(-50%) translateX(-50%)',
				}}>
					<h1>Register to Exhibit</h1>

					<h3>Make the Connections that Count!</h3>

					<p style={{ fontSize: "1.3em" }}>
						The industry's longest running, most respected,
						attendee-driven product showcase.
					</p>

					<p>
						Strengthen your relationships with Customers, Dealers, and other Industry Suppliers in
						a time-tested forum where you are certain to obtain new business leads, close sales and get results.
					</p>

					<p>Average annual attendance of 7500 industry professionals.</p>

					<p>257,000 sqft of usable floor space - all on one floor.</p>

					<p>Average annual attendance of 7500 industry professionals.</p>

					<p>
						One quarter of the population of the United States lives within 300 miles
						of Atlantic City, New Jersey.
					</p>

					<Button
						kind="accent"
						href="/files/PSE17 Application & Exhibit Space Contract.pdf"
						target="_blank"
					>
						Register Now
					</Button>
					<Button kind="accent">Download Prospectus</Button>
					<Button kind="accent">Download Service Manual</Button>
				</div>
			</FullPage>
		</div>
	}

}