const mymap = L.map('mapid').setView([38.8447892, -76.8266697], 9);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{
//  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//  maxZoom: 18,
//  id: 'mapbox/streets-v11',
//  tileSize: 512,
//  zoomOffset: -1,
//  accessToken: "pk.eyJ1IjoidnUwMDQiLCJhIjoiY2s4bnI4dmpoMHh5cjNybDNzeXF3NGp5MSJ9.qrLb1eD34bEonAWDMGC8AA"
//
//}).addTo(mymap)

const attribution = 
'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(mymap) 

let fgMedicalunit= L.featureGroup();
let fgAmbulance = L.featureGroup();
let fgOtherMarkers = L.featureGroup();

const url = 'https://data.princegeorgescountymd.gov/resource/bzf2-94qx.json';
async function getData() {
  const response = await fetch(url)
  const data = await response.json();
  
  for (item of data) {
    var lat = item.location_1.latitude;
    var lng = item.location_1.longitude;
    var addy = item.human_address;
    var ambuLance = item.ambulance_onsite;
    var medicalOnsite = item.medical_unit_onsite;
    var icon = L.icon({
        iconUrl: '/firemen.png',
        iconSize:     [32, 37], // size of the icon
    });
    
    const marker = L.marker([lat, lng], {icon: icon}, title=item.station_name).addTo(mymap);

    const txt = `${item.station_name}`;
    marker.bindPopup(txt);
    if(ambuLance == 'Y'){
        fgAmbulance.addLayer(marker);
    }else if(medicalOnsite == 'Y'){
        
        fgMedicalunit.addLayer(marker);
    }else{
        fgOtherMarkers.addLayer(marker);
    }

    console.log(item)

    

}
fgAmbulance.addTo(mymap);
fgMedicalunit.addTo(mymap);
fgOtherMarkers.addTo(mymap);

$("#all").click(function() {

    mymap.addLayer(fgAmbulance);
    mymap.addLayer(fgMedicalunit);
    mymap.addLayer(fgOtherMarkers);
    $().button('toggle')

});

$("#ambulance").click(function() {
    mymap.addLayer(fgAmbulance);
    if(mymap.hasLayer(fgMedicalunit)){
        mymap.removeLayer(fgMedicalunit);
        $().button('toggle')

    }
    if(mymap.hasLayer(fgOtherMarkers)){

        mymap.removeLayer(fgOtherMarkers);
    }

});

$("#medicalunit").click(function() {
    mymap.addLayer(fgMedicalunit);
    if(mymap.hasLayer(fgAmbulance)){
        mymap.removeLayer(fgAmbulance);
        $().button('toggle')
    }
    if(mymap.hasLayer(fgOtherMarkers)) {
        mymap.removeLayer(fgOtherMarkers);
    }

});

}

getData();
