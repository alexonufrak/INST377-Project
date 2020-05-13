# Fire Station Locator 
Fetches and displays updated location data of Fire Stations in Prince Georges County, MD. Allows users to filter specific locations based on the button they clicked on. Our main target browser was computer users, but the application works with iOS 13 and Android 10. 

**[Click here to visit instance where application is used](https://firestation-377.web.app/)**

## Table of Contents
 - [Developer Manual](#developer_manual)
 - [User Manual](docs/user.md) 

## Developer Manual 
### Installation
#### Clone
 -   Clone this repo to your local machine using `https://github.com/alexonufrak/INST377-Project`
#### Bootstrap
 This site is configured using Bootstrap 4 as the CSS framework. For more information regarding documentation, [click here](https://getbootstrap.com/docs/4.0/getting-started/introduction/).
 #### Leaflet.js
 In order to properly view the map, you must include the [leaflet.js library](https://leafletjs.com/). To prepare your page, prepare with the following steps:
 
 - Include Leaflet CSS file in the head section of your document:  
 `<link  rel="stylesheet"  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="  crossorigin=""/>`
 
 - Include Leaflet JavaScript file **after** Leaflet’s CSS: 
 `<!-- Make sure you put this AFTER Leaflet's CSS -->  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>`
 
 - Put a `div` element with a certain `id` where you want your map to be: 
 `<div id="mapid"></div>`
 
 - Make sure the map container has a defined height, for example by setting it in CSS: 
 `#mapid  { height: 180px; }`
#### Mapbox
In order to display a map on leaflet.js, you must use a third-party map platform's API. [Visit here](https://www.mapbox.com/studio/account/tokens/) to request an access token, or the leaflet.js library link above.

### Deploy on Server
In order to get it running on a server, leave room open for future developments, and test your code using easier command line notation, we used [Firebase](https://firebase.google.com/). If you would like to follow a video explaining the basics of Firebase, along with visual installation instructions, [**click here**](https://www.youtube.com/watch?v=9kRgVxULbag). For a brief overview, follow the instructions below:

 1. Install [node.js](https://nodejs.org/en/).
 2. Visit  [firebase.google.com](https://firebase.google.com/) and create a project using an existing google account. 
 3. Within the project, navigate to **Settings > Your Apps** and copy the Firebase SDK Snippet to load into your webpage, **if you already have a directory.**
 4. Install the Firebase command line tools `npm install firebase-tools -g`
 5. Open your favorite code editor (we tested this on VS code) and `run firebase init hosting`
 6. Use `firebase serve` to create a local server to test your code
 7. To publicly deploy your code, run `firebase deploy`

### API
We used the GET endpoint to fetch information from the API call. We then used that endpoint to get the latitude, longitude, address and whether or not a place had a medical onsite or ambulance onsite. We also used another GET to retrieve the information that we can use to display the map. This was accomplished by using an API access token we got from mapbox.

The url for the firestation data: https://data.princegeorgescountymd.gov/resource/bzf2-94qx.json
### Road Map & Bugs
We had problems implementing a search bar and the rating system to our map and will work on how to implement that during our future development.
