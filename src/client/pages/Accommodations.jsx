import React, { Component } from 'react'
import theme from '../theme'

export default class Accommodations extends Component {

	render() {
		return <div style={theme.get('Page')}>
			<h1>
				Hotel Guestroom<br />
				<strong>Information</strong>
			</h1>
			<div style={theme.getStyle('partial underline')} />
						
			<p>The best time to book your hotel guestroom is now!</p>

			<p>When you call the Hotel...be sure to identify yourself as being with the
			Police Security Expo to get their special Expo group rates.</p>

			<h3>RESORTS, Host Hotel:</h3>
			
			<p>
				Join the NJ State Association of Chiefs of Police (Expo Sponsor) staying at Resorts.
				(On the Boardwalk)
				$119 S/D per night, plus tax & occupancy fee
				https://resortsac.reztrip.com/classic/en/special_offer?action=show&controller=landings&locale=en&rate_code=VPSE17&rate_code=VPSE17&vr=3
			</p>


			<p>
				CAESARS ATLANTIC CITY:
				Closest Casino Hotel to the Convention Center
				$119 S/D per night, plus tax & occupancy fee
				For Reservations call: 1-888-516-2215 RESERVATION GROUP CODE: SC06Pl7
				https://aws.passkey.com/go/SC06PL7
			</p>


			<p>
				SHERATON A.C. CONVENTION CENTER HOTEL:
				(Non-Casino Hotel) – connected to the Atlantic City Convention Center
				$130 S/D per night, plus tax & occupancy fee
				For Reservations call: 1-888-627-7212 MENTION: Police Security Expo 2017 https://www.starwoodmeeting.com/events/start.action?id=1609141013&key=30B064D6
			</p>


			<p>
				TROPICANA CASINO HOTEL:
				(On the Boardwalk- Home of The Quarter Entertainment Complex)
				$75 S/D per night, plus tax & occupancy fee
				For Reservations call: 1-800-247-8767 RESERVATION GROUP CODE: HPSE17 http://tropac3.net/offercode/HPSE17
			</p>


			<p>
				BORGATA HOTEL, CASINO & SPA:
				(Upscale Hotel – located in the Marina Area)
				$135 S/$155D per night, plus tax & occupancy fee
				For Reservations call: 1-609-317-1000 RESERVATION GROUP CODE: GBSTE17
				https://www.theborgata.com/hotel/booking/select-your-room?checkin=6-25-2017&nights=4&guests=2&offer=GBSTE17A
			</p>


			<p>
				GOLDEN NUGGET – ATLANTIC CITY CASINO HOTEL:
				(Upscale Hotel – located in the Marina Area)
				$89 S/D per night, plus tax & occupancy fee
				For Reservations call: 1-800-777-8477 RESERVATION GROUP CODE: APSEC17
			</p>

		</div>
	}

}