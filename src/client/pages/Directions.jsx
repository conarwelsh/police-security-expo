import React, { Component } from 'react'
import theme from '../theme'

export default class Directions extends Component {

	render() {
		return <div style={theme.getStyle('Page')}>
			<h1>Directions</h1>
			<div style={theme.getStyle('partial underline')} />

			<h2>Atlantic City Convention Center</h2>
			<p className="lead">1 Convention Blvd, Atlantic City, NJ 08401</p>
			
			<h3>DRIVING DIRECTIONS TO ATLANTIC CITY, NEW JERSEY:</h3>
			<p>
				Philadelphia (55 miles), Newark, NJ (110 miles), Baltimore, MD (168 miles), Pittsburgh, PA (354 miles), New York City (132 miles), Washington, DC (173 miles) Boston, MA (328 miles)
			</p>
			<p>
				From Baltimore, Washington D.C., and South: I-95 North to the Walt Whitman Bridge (Philadelphia), to 42 South to the Atlantic City Expressway.The Atlantic City Convention Center and Expo Hotels are located at the base of the Expressway.
			</p>
			<p>
				From New York and North: Major Interstate highways connect with the Garden State Parkway South to Exit 38 Atlantic City Expressway. The Atlantic City Convention Center and Expo Hotels are located at the base of the Expressway.
			</p>
			<p>
				From Philadelphia and West: Exit Pennsylvania Turnpike at Valley Forge Exit #24, onto Schuylkill Expressway (Rt. 76 East) through Philadelphia to the Walt Whitman Bridge, to 42 South to the Atlantic City Expressway. The Atlantic City Convention Center and Expo Hotels are located at the base of the Expressway.
			</p>

			<h2>Airports</h2>
			<p>
				Atlantic City Airport (20 minutes), Philadelphia Intl. Airport (preferred airport -1 hour), Newark (NJ) Intl. Airport (2.5 hours), John F. Kennedy (NY) Airport (3 hours), Baltimore-Washington Intl. Airport (4.5 hours)
			</p>

			<h3>SHUTTLE/TRAIN/CAR SERVICE: Shuttle Service from Philadelphia Intl. Airport Only:</h3>
			<ul>
				<li>Tropiano Transportation: 800-559-2040</li>
				<li>Rapid Rover: 609-344-0100</li>
			</ul>

			<p>&nbsp;</p>

			<h3>Shuttle Service from Atlantic City Airport Only:</h3>
			<ul>
				<li>Atlantic City Jitney Association: 609-344-8642</li>
				<li>Rapid Transportation: (609) 407-SAFE</li>
				<li>Train Service: SEPTA – Airport Trains to 30th Street Station, Philadelphia 215-580-4000 Once at 30th Street Station, NJ Transit Trains to Atlantic City. For Schedules & Rate Information visit: www.njtransit.com Car/Van Service from Philadelphia Intl. Airport or Atlantic City Airport:</li>
				<li>Rapid Transportation 609-407-SAFE</li>
				<li>Lou’s Luxury Car Service 609-383-1457</li>
			</ul>

			<p>&nbsp;</p>

			<h3>Limousine Companies servicing All Airports to Atlantic City, NJ</h3>
			<ul>
				<li>Rapid Transportation 609-407-SAFE</li>
				<li>Joe’s Limo Service: 609-457-8807</li>
				<li>Carey Limousines 800-336-1355</li>
				<li>Atlantic Limousines 609-347-0034</li>
				<li>Atlantic City Visitor Information: 1-888-228-4748 www.atlanticitynj.com</li>
			</ul>

			<p>&nbsp;</p>

			<h3>DIRECTIONS TO THE ATLANTIC CITY CONVENTION CENTER’S LOADING DOCK:</h3>
			<p>
				Vehicles will take the Atlantic City Expressway and get off at the at the Atlantic City Connector. Take the Bacharach Blvd./CONVENTION CENTER EXIT.
				This will put your vehicle in the proper direction for staging during move in.
				HAND CARRIED EQUIPMENT can be brought in thru the Convention Center’s Underground Parking Garage or through a staging area on the loading dock which is managed by AEX Convention Services. Atlantic City Convention Center – PARKING GARAGE
				Parking Fee: $15 PER DAY.
			</p>
			<p>
				DIRECTIONS: From the Atlantic City Expressway:
				At the end of the Expressway, make a left on Arctic Ave. and then a left on Michigan Ave. straight into the Atlantic City Convention Center parking garage.
			</p>
		</div>
	}
}