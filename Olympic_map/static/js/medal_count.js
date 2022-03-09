// Add console.log to check to see if our code is working.
console.log("working");
const C = {};
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//  --------------------------------------------------  add a dark layer------------------------------------------------------------
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//  -
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [40.7, -94.5],
    zoom: 3,
    layers: [streets]
});


// Test marker on Afganastan
// let marker = L.marker([33.7680065,66.2385139]).addTo(map);
// marker.bindPopup("Afghanastan");


// Create a base layer that holds all three maps.
let baseMaps = {
    "Streets": streets,
    "Dark": dark
};


// Accessing olympic Geojson
let OlyData = "/static/json/rewoundGeoJson.geojson"
// Grab the Geojson
d3.json(OlyData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);
})
// Trying out the popup 13.5.2
 L.geoJSON(OlyData, {
    // latitude = feature.properties.summer.latitude,
    pointToLayer: function(feature, layer) {
         console.log(feature);
         console.log(layer);
         return L.circleMarker(layer)
      .bindPopup("<h2>" + feature.properties.summer + "</h2>");

      }
 }).addTo(map);

// 1. Add a 2nd layer group for the tectonic plate data.
let summerOlympics = new L.LayerGroup();
let winterOlympics = new L.LayerGroup();

// 2. Add a reference to the tectonic plates group to the overlays object.
let overlays = {
    "Summer Olympics": summerOlympics,
    "Winter Olympics": winterOlympics
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve geojson data
d3.json("/static/json/rewoundGeoJson.geojson").then(function(OlyData) {
    function style(feature) {
		return {
			fillColor: "#E3E3E3",
			weight: 1,
			opacity: 0.4,
			color: 'white',
			fillOpacity: 0.3
		};
    }
    C.geojson= L.geoJson(OlyData, { 
		onEachFeature: onEachFeature,
		style : style
	}).addTo(map);

	function onEachFeature(feature, layer){
		layer.on({
			click : onCountryClick,
			mouseover : onCountryHighLight,
			mouseout : onCountryMouseOut
		});
        
	}
});


// Then we add the summer layer to our map.
summerOlympics.addTo(map);

/**
 * Callback for mouse out of the country border. Will take care of the ui aspects, and will call
 * other callbacks after done.
 * @param e the event
 */
 function onCountryMouseOut(e){
	C.geojson.resetStyle(e.target);
//	$("#countryHighlighted").text("No selection");

	var countryName = e.target.feature.properties.name;
	var countryCode = e.target.feature.properties.iso_a2;
//callback when mouse exits a country polygon goes here, for additional actions
}

/**
 * Callback for when a country is clicked. Will take care of the ui aspects, and it will call
 * other callbacks when done
 * @param e
 */
function onCountryClick(e){
//callback for clicking inside a polygon
}

/**
 * Callback for when a country is highlighted. Will take care of the ui aspects, and it will call
 * other callbacks after done.
 * @param e
 */
function onCountryHighLight(e){
	var layer = e.target;

	layer.setStyle({
		weight: 2,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}


//callback when mouse enters a country polygon goes here, for additional actions
}
// Module 13.4.2 code for looping through array and create a marker for each.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.population + ", " + city.country_medal_total + "</h2> <hr> <h3>Population " + city.population + "</h3>")
//   .addTo(map);
// });