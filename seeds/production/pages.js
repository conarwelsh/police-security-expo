
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pages').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('pages').insert({
          id: 1,
          title: '',
          slug: 'floorplan',
          body: "<link rel='stylesheet' href='https://f073797bc04c36d81e26-e77d9efa26b314096886a4d1d7556ce0.ssl.cf1.rackcdn.com/map-embed.css'><div class='imWrapper'><div class='imContainer'><iframe id='imFrame' src='//www.map-dynamics.com/pse2017/?embed=true' allowfullscreen scrolling='yes'></iframe></div></div>",
        }),
        knex('pages').insert({
          id: 2,
          title: 'Accomodations',
          slug: 'accomodations',
          body: `# Hotel Acommodation Information

[Parking Locations]()


## {insert Google Map here...}

### Driving Directions to Atlantic City, New Jersey

#### From the Atlantic City Expressway

At the end of the Expressway, make a left on Arctic Ave. and then a left on Michigan Ave. straight into the
Atlantic City Convention Center parking garage.
From Philadelphia and West

Exit the Pennsylvania Turnpike at Valley Forge, Exit 326, onto Schuylkill Expressway (Route 76 East)
through Philadelphia to the Walt Whitman Bridge. Continue to follow signs for the Atlantic City Expressway.
From New York and North

Major Interstate Highways connect with the Garden State Parkway South. Follow Garden State Parkway
South to Exit 38 (Atlantic City Expressway). Follow Atlantic City Expressway directions.
From Baltimore, Washington & South

Take I-95 to the Walt Whitman Bridge (Philadelphia). Cross the Walt Whitman Bridge and follow N/S
Freeway to the Atlantic City Expressway. Follow Atlantic City Expressway directions.
From Norfolk, VA area

Follow Route 13 and Route 9 to Cape May-Lewes Ferry, then take Garden State Parkway North to Exit 38
(Atlantic City Expressway) into Atlantic City. Follow Atlantic City Expressway directions.
Truck Traffic/Loading Dock

All trucks bound for the New Atlantic City Convention Center, MUST access the city via the Atlantic City
Expressway. At the end of the Atlantic City Convention Center follow the expressway to the right and take
the Atlantic City Connector. Take the first exit marked Convention Center/Bacharach Boulevard and Loading
Dock access will be to the right. Trucks may not park the last 100 feet on Bacharach Boulevard before the
Expressway on/off ramp.

###### Milage From

* **Philadelphia**: 55 miles
* **New York**: 132 miles
* **Newark, NJ**: 110 miles
* **Washington, DC**: 173 miles
* **Baltimore**: 168 miles
* **Boston**: 328 miles
* **Pittsburgh**: 354 miles

##### Driving Time

* **Atlantic City International Airport**: 20 minutes
* **Philadelphia International Airport**: 1 hour

##### Rail Service

The NJTransit Rail Terminal is conveniently located within the Convention Center and connects Atlantic City
to Philadelphia at 30th Street Station and Amtrak's Northeast corridor lines. For more information, call 973-
275-5555, or visit their website at www.njtransit.com.

ACES - New York City to Atlantic City Direct Train Service ACES (Atlantic City Express Service), a joint
venture of Borgata, Caesars and Harrah's Resort, is offering light rail service between New York's Penn
Station and the Atlantic City Rail Terminal. Express trains will operate Friday through Sunday. Multi-level rail
cars offer passengers comfortable leather seating, private lounge, food and beverage kiosks. For schedules
and ticket pricing, visit www.acestrain.com

##### Air Service

Atlantic City International Airport (ACIA) is an easy 20-minute drive from Atlantic City. Scheduled carriers
servicing ACIA include Spirit Airlines (1-800-772-7117) and AirTran (1-800-247-8726). Philadelphia
International Airport is about 60 minutes away. For more information about Atlantic City International
Airport, visit www.acairport.com. `,
        }),
        knex('pages').insert({
          id: 3,
          title: 'Exhibitors',
          slug: 'exhibitors',
          body: '',
        })
      ]);
    });
};
