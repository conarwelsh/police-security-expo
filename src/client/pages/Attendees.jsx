import React, { Component } from 'react'
import theme from '../theme'
import Button from '~/Button'
import Input from '~/Input'

export default class Attendees extends Component {

	render() {
		return <div style={theme.get('Page')}>
			<h1>Attendees</h1>
			<div style={theme.getStyle('partial underline')} />

			<h2>Register here to attend Police Security Expo 2017</h2>

			<p>
				Open to industry professionals only<br />
				free admission - identification required at the door
			</p>


			<h3>Atlantic City (NJ) Convention Center Dates & Times:</h3>
			<p>
				Tuesday, June 27, 2017 10:00 am – 5:00 pm<br />
				Wednesday, June 28, 2017 10:00 am – 3:30 pm
			</p>


			<form>
				<fieldset>

					<Input placeholder="First Name" />
					<Input placeholder="Last Name" />
					<Input placeholder="Title" />
					<Input placeholder="Department/Organization" />
					<Input placeholder="Mailing Address for Name Badge Return" />
					<Input placeholder="City" />
					<Input placeholder="State" />
					<Input placeholder="Zipcode" />
					<Input placeholder="Telephone" />
					<Input placeholder="Email Address" />

					<label>
						<input type="checkbox" />
						I am interested in Attending Police Security Expo 2017
					</label>

					<label>
						<input type="checkbox" />
						I am interested in Exhibiting at Police Security Expo 2017
					</label>

					<label>
						<input type="checkbox" />
						Please send me more information
					</label>

					<hr />

					<h4>Affiliation</h4>
					<label>
						<input type="checkbox" />
						Law Enforcement
					</label>
					<label>
						<input type="checkbox" />
						Security
					</label>
					<label>
						<input type="checkbox" />
						Emergency Responder
					</label>
					<label>
						<input type="checkbox" />
						Other (Specify)
						<input type="text" placeholder="Specify" />
					</label>

					<hr />

					<h4>Dates Attending Expo</h4>
					<label>
						<input type="checkbox" />
						Tuesday, June 27, 2017
					</label>
					<label>
						<input type="checkbox" />
						Wednesday, June 28, 2017
					</label>

					<label>
						Planning on Attending Seminars?
						<input type="radio" value="yes" />
						<input type="radio" value="no" />
					</label>

					<p>Note: If you do not wish to receive PSE notifications and Exhibitor updates by Email, please do not include your Email address on this Registration Form.</p>
					<p>All other fields must be filled out completely or badge request cannot be processed. PSE 2017 Name Badge Inserts will be mailed out to the address you listed on this Registration Form approximately 2 weeks prior to the Expo dates.</p>
				</fieldset>
			</form>

			<Button href="/exhibitor-list" kind="primary">
				Exhibitor List
			</Button>
			<Button href="/seminar-list" kind="primary">
				Seminars
			</Button>
			<Button href="https://www.map-dynamics.com/pse2017" kind="primary">
				Floorplan
			</Button>

		</div>
	}
}