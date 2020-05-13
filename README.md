# Fire Station Locator 
Fetches and displays updated location data of Fire Stations in Prince Georges County, MD. Allows users to filter specific locations based on the button they clicked on. Our main target browser was computer users, but the application works with iOS 13 and Android 10. 

**[Click here to visit instance where application is used](https://firestation-377.web.app/)**

## Table of Contents
 - Developer Manual
 - [User Manual](docs/user.md) 

## Developer Manual 
We used the GET endpoint to fetch information from the API call. We then used that endpoint to get the latitude, longitude, address and whether or not a place had a medical onsite or ambulance onsite. We also used another GET to retrieve the information that we can use to display the map. This was accomplished by using an API access token we got from mapbox.

the url for the firestation data: https://data.princegeorgescountymd.gov/resource/bzf2-94qx.json

We had problems implementing a search bar and the rating system to our map and will work on how to implement that during our future development.
