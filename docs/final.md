# Fire Station Locator

## Team Members
Shayon Zadeh, Alex Onufrak, Alamin Iqbal, Victor Uduma

## Application Deployment
**[Click here to visit instance where application is deployed](https://firestation-377.web.app/)**

## Information Problem
The information problem we aimed to solve was finding optimal places to buy a home in PG County. We were looking specifically at safety and emergency service availability to determine which areas are optimal and which are not.
We chose the fire department as the emergency service to focus on, since fire station proximity effects home insurance prices. Not all fire stations provide the same services and are of the same quality. Fire stations either have or don't have both a medical unit and/or an ambulance. They also are either run by the state, county or volunteers.

## Stakeholders 
The stakeholders for this project were people looking to purchase a house in PG county, as well as current residence. For those looking to purchase houses this application can help determine which fire station is better than the others and look at proximity of houses to those stations.

## Target Browsers
The browsers that were targeted was both mobile and computer platforms. Both Android 10 and iOS 13, as well as PC and Macs can run the application.

## Data
We aquired the locations and information about all the fire stations in PG County from PG County's open data website.

**[Click here to visit website where the data was aquired.](https://data.princegeorgescountymd.gov/Public-Safety/County-Fire-Stations/bzf2-94qx)**

## Strategies and Problem Solutions
We chose to create a map that marks each fire station in PG County. We added filters to help narrow down the fire stations based on services provided, ambulance and medical unit. We also added an address search bar to quickly zoom in on the desired location, and a service rating section that displayes the information of the selected station along with a custome rating based on that information.

## Technical Rationale
For this application we chose to use Leaflet to display our map. We chose this library because it is an easy-to-use and light-weight library which we had previous experience with in class. The documentation for Leaflet is well-structured with a lot of examples and tutorials that has a large community that provides extra examples and support. Leaflet also has an abundant amount of plugins that can be useful.

## System Impact on Problem
Our final system helped address the problem by making a free easy to use website accessible for everyone. When looking to buy a house in PG County a quick use of our website can help narrow down locations to look at based on fire station proximity, as well as what services are provided by each station in order to pick one with the most services.

## Challenges
We had trouble implementing API calls correctly and the JSON related to it. Our initial map had fire station locations hard-coded, which wouldn’t allow for implementation of filter and search functions. It also didn't accomplish the task in the way specified in our final deliverable requirnements. We also had difficulty connecting our functions (filter and search bar) to the map. These difficulties came from us trying to implement our original design, which didn't really change our final design.

## Future Work
For future work regarding to this project there were several elements that could be added and current elements that can be expanded. Adding all emergency service in PG County to the map, police and medical. Expanding the scope of the application to include more counties, states or the whole country. Adding locations of fire hydrants is also another addition since proximity to those also decreases home insurance. We also would work on implementing the address search bar, rating system, and a better criteria for rating each fire station.