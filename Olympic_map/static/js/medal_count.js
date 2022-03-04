// Add console.log to check to see if our code is working.
console.log("working");

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

 var countries = [
    {
        "Country":{
         "0":"Afghanistan",
         "1":"Albania",
         "2":"Algeria",
         "3":"Andorra",
         "4":"Angola",
         "5":"Antigua and Barbuda",
         "6":"Argentina",
         "7":"Armenia",
         "8":"Australia",
         "9":"Austria",
         "10":"Azerbaijan",
         "11":"Bahamas",
         "12":"Bahrain",
         "13":"Bangladesh",
         "14":"Barbados",
         "15":"Belarus",
         "16":"Belgium",
         "17":"Belize",
         "18":"Benin",
         "19":"Bhutan",
         "20":"Bolivia",
         "21":"Bosnia and Herzegovina",
         "22":"Botswana",
         "23":"Brazil",
         "24":"Brunei",
         "25":"Bulgaria",
         "26":"Burkina Faso",
         "27":"Myanmar",
         "28":"Burundi",
         "29":"Cape Verde",
         "30":"Cambodia",
         "31":"Cameroon",
         "32":"Canada",
         "33":"Central African Republic",
         "34":"Chad",
         "35":"Chile",
         "36":"China",
         "37":"Colombia",
         "38":"Congo (Brazzaville)",
         "39":"Congo (Kinshasa)",
         "40":"Costa Rica",
         "41":"Cote d'Ivoire",
         "42":"Croatia",
         "43":"Cuba",
         "44":"Cyprus",
         "45":"Czech Republic",
         "46":"Denmark",
         "47":"Djibouti",
         "48":"Dominica",
         "49":"Dominican Republic",
         "50":"Ecuador",
         "51":"Egypt",
         "52":"El Salvador",
         "53":"Equatorial Guinea",
         "54":"Eritrea",
         "55":"Estonia",
         "56":"Swaziland",
         "57":"Ethiopia",
         "58":"Fiji",
         "59":"Finland",
         "60":"France",
         "61":"Gabon",
         "62":"Gambia",
         "63":"Georgia",
         "64":"Germany",
         "65":"Ghana",
         "66":"Greece",
         "67":"Grenada",
         "68":"Guatemala",
         "69":"Guinea",
         "70":"Guinea-Bissau",
         "71":"Guyana",
         "72":"Haiti",
         "73":"Honduras",
         "74":"Hungary",
         "75":"Iceland",
         "76":"India",
         "77":"Indonesia",
         "78":"Iran",
         "79":"Iraq",
         "80":"Ireland",
         "81":"Israel",
         "82":"Italy",
         "83":"Jamaica",
         "84":"Japan",
         "85":"Jordan",
         "86":"Kazakhstan",
         "87":"Kenya",
         "88":"South Korea",
         "89":"Kosovo",
         "90":"Kuwait",
         "91":"Kyrgyzstan",
         "92":"Laos",
         "93":"Latvia",
         "94":"Lebanon",
         "95":"Liberia",
         "96":"Libya",
         "97":"Liechtenstein",
         "98":"Lithuania",
         "99":"Luxembourg",
         "100":"Madagascar",
         "101":"Malawi",
         "102":"Malaysia",
         "103":"Maldives",
         "104":"Mali",
         "105":"Malta",
         "106":"Mauritania",
         "107":"Mauritius",
         "108":"Mexico",
         "109":"Moldova",
         "110":"Monaco",
         "111":"Mongolia",
         "112":"Montenegro",
         "113":"Morocco",
         "114":"Mozambique",
         "115":"Namibia",
         "116":"Nepal",
         "117":"Netherlands",
         "118":"New Zealand",
         "119":"Nicaragua",
         "120":"Niger",
         "121":"Nigeria",
         "122":"North Macedonia",
         "123":"Norway",
         "124":"Oman",
         "125":"Pakistan",
         "126":"Panama",
         "127":"Papua New Guinea",
         "128":"Paraguay",
         "129":"Peru",
         "130":"Philippines",
         "131":"Poland",
         "132":"Portugal",
         "133":"Qatar",
         "134":"Romania",
         "135":"Russia",
         "136":"Rwanda",
         "137":"Saint Kitts and Nevis",
         "138":"Saint Lucia",
         "139":"Saint Vincent and the Grenadines",
         "140":"San Marino",
         "141":"Sao Tome and Principe",
         "142":"Saudi Arabia",
         "143":"Senegal",
         "144":"Serbia",
         "145":"Seychelles",
         "146":"Sierra Leone",
         "147":"Singapore",
         "148":"Slovakia",
         "149":"Slovenia",
         "150":"Somalia",
         "151":"South Africa",
         "152":"South Sudan",
         "153":"Spain",
         "154":"Sri Lanka",
         "155":"Sudan",
         "156":"Suriname",
         "157":"Sweden",
         "158":"Switzerland",
         "159":"Syria",
         "160":"Taiwan",
         "161":"Tanzania",
         "162":"Thailand",
         "163":"Timor Leste",
         "164":"Togo",
         "165":"Trinidad and Tobago",
         "166":"Tunisia",
         "167":"Turkey",
         "168":"United States of America",
         "169":"Uganda",
         "170":"Ukraine",
         "171":"United Arab Emirates",
         "172":"United Kingdom",
         "173":"Uruguay",
         "174":"Uzbekistan",
         "175":"Venezuela",
         "176":"Vietnam",
         "177":"West Bank and Gaza",
         "178":"Zambia",
         "179":"Zimbabwe"
        },
        "Latitude":{
         "0":33.7680065,
         "1":41.000028,
         "2":28.0000272,
         "3":42.5407167,
         "4":-11.8775768,
         "5":17.2234721,
         "6":-34.9964963,
         "7":40.7696272,
         "8":-24.7761086,
         "9":47.2000338,
         "10":40.3936294,
         "11":24.7736546,
         "12":26.1551249,
         "13":24.4768783,
         "14":13.1500331,
         "15":53.4250605,
         "16":50.6402809,
         "17":16.8259793,
         "18":9.5293472,
         "19":27.549511,
         "20":-17.0568696,
         "21":44.3053476,
         "22":-23.1681782,
         "23":-10.3333333,
         "24":4.4137155,
         "25":42.6073975,
         "26":12.0753083,
         "27":17.1750495,
         "28":-3.3634357,
         "29":16.0000552,
         "30":13.5066394,
         "31":4.6125522,
         "32":61.0666922,
         "33":7.0323598,
         "34":15.6134137,
         "35":-31.7613365,
         "36":35.000074,
         "37":2.8894434,
         "38":-0.7264327,
         "39":-2.9814344,
         "40":10.2735633,
         "41":7.9897371,
         "42":45.5643442,
         "43":23.0131338,
         "44":34.9823018,
         "45":49.8167003,
         "46":55.670249,
         "47":11.8145966,
         "48":19.0974031,
         "49":19.0974031,
         "50":-1.3397668,
         "51":26.2540493,
         "52":13.8000382,
         "53":1.613172,
         "54":15.9500319,
         "55":58.7523778,
         "56":-26.5624806,
         "57":10.2116702,
         "58":-18.1239696,
         "59":63.2467777,
         "60":46.603354,
         "61":-0.8999695,
         "62":13.470062,
         "63":32.3293809,
         "64":51.0834196,
         "65":8.0300284,
         "66":38.9953683,
         "67":12.1360374,
         "68":15.6356088,
         "69":10.7226226,
         "70":12.100035,
         "71":4.8417097,
         "72":19.1399952,
         "73":15.2572432,
         "74":47.1817585,
         "75":64.9841821,
         "76":22.3511148,
         "77":-2.4833826,
         "78":32.6475314,
         "79":33.0955793,
         "80":52.865196,
         "81":31.5313113,
         "82":42.6384261,
         "83":18.1152958,
         "84":36.5748441,
         "85":31.1667049,
         "86":47.2286086,
         "87":1.4419683,
         "88":35.7724185,
         "89":42.5869578,
         "90":29.2733964,
         "91":41.5089324,
         "92":20.0171109,
         "93":56.8406494,
         "94":33.8750629,
         "95":5.7499721,
         "96":26.8234472,
         "97":47.1416307,
         "98":55.3500003,
         "99":49.8158683,
         "100":-18.9249604,
         "101":-13.2687204,
         "102":4.5693754,
         "103":4.7064352,
         "104":16.3700359,
         "105":35.8885993,
         "106":20.2540382,
         "107":-20.2759451,
         "108":19.4326296,
         "109":47.2879608,
         "110":43.7323492,
         "111":46.8250388,
         "112":42.9868853,
         "113":31.1728205,
         "114":-19.302233,
         "115":-23.2335499,
         "116":28.1083929,
         "117":52.5001698,
         "118":-41.5000831,
         "119":12.6090157,
         "120":17.7356214,
         "121":9.6000359,
         "122":41.6171214,
         "123":64.5731537,
         "124":21.0000287,
         "125":30.3308401,
         "126":8.559559,
         "127":-5.6816069,
         "128":-23.3165935,
         "129":-6.8699697,
         "130":12.7503486,
         "131":52.215933,
         "132":40.0332629,
         "133":25.3336984,
         "134":45.9852129,
         "135":64.6863136,
         "136":-1.9646631,
         "137":17.250512,
         "138":13.8250489,
         "139":12.90447,
         "140":43.9458623,
         "141":0.8875498,
         "142":25.6242618,
         "143":14.4750607,
         "144":44.02432285,
         "145":-4.6574977,
         "146":8.6400349,
         "147":1.357107,
         "148":48.7411522,
         "149":45.8133113,
         "150":8.3676771,
         "151":-28.8166236,
         "152":7.8699431,
         "153":39.3262345,
         "154":7.5554942,
         "155":14.5844444,
         "156":4.1413025,
         "157":59.6749712,
         "158":46.7985624,
         "159":34.6401861,
         "160":23.9739374,
         "161":-6.5247123,
         "162":14.8971921,
         "163":-8.5151979,
         "164":8.7800265,
         "165":10.8677845,
         "166":33.8439408,
         "167":38.9597594,
         "168":39.7837304,
         "169":1.5333554,
         "170":49.4871968,
         "171":24.0002488,
         "172":54.7023545,
         "173":-32.8755548,
         "174":41.32373,
         "175":8.0018709,
         "176":13.2904027,
         "177":31.4331663,
         "178":-14.5186239,
         "179":-18.4554963
        },
        "Longitude":{
         "0":66.2385139,
         "1":19.9999619,
         "2":2.9999825,
         "3":1.5732033,
         "4":17.5691241,
         "5":-61.9554608,
         "6":-64.9672817,
         "7":44.6736646,
         "8":134.755,
         "9":13.199959,
         "10":47.7872508,
         "11":-78.0000547,
         "12":50.5344606,
         "13":90.2932426,
         "14":-59.5250305,
         "15":27.6971358,
         "16":4.6667145,
         "17":-88.7600927,
         "18":2.2584408,
         "19":90.5119273,
         "20":-64.9912286,
         "21":17.5961467,
         "22":24.5928742,
         "23":-53.2,
         "24":114.5653908,
         "25":25.4856617,
         "26":-1.6880314,
         "27":95.9999652,
         "28":29.8870575,
         "29":-24.0083947,
         "30":104.869423,
         "31":13.1535811,
         "32":-107.9917071,
         "33":19.9981227,
         "34":19.0156172,
         "35":-71.3187697,
         "36":104.999927,
         "37":-73.783892,
         "38":15.6419155,
         "39":23.8222636,
         "40":-84.0739102,
         "41":-5.5679458,
         "42":17.0118954,
         "43":-80.8328748,
         "44":33.1451285,
         "45":15.4749544,
         "46":10.3333283,
         "47":42.8453061,
         "48":-70.3028026,
         "49":-70.3028026,
         "50":-79.3666965,
         "51":29.2675469,
         "52":-88.9140683,
         "53":10.5170357,
         "54":37.9999668,
         "55":25.3319078,
         "56":31.3991317,
         "57":38.6521203,
         "58":179.0122737,
         "59":25.9209164,
         "60":1.8883335,
         "61":11.6899699,
         "62":-15.4900464,
         "63":-83.1137366,
         "64":10.4234469,
         "65":-1.0800271,
         "66":21.9877132,
         "67":-61.6904045,
         "68":-89.8988087,
         "69":-10.7083587,
         "70":-14.9000214,
         "71":-58.6416891,
         "72":-72.3570972,
         "73":-86.0755145,
         "74":19.5060937,
         "75":-18.1059013,
         "76":78.6677428,
         "77":117.8902853,
         "78":54.5643516,
         "79":44.1749775,
         "80":-7.9794599,
         "81":34.8667654,
         "82":12.674297,
         "83":-77.15984546,
         "84":139.2394179,
         "85":36.941628,
         "86":65.2093197,
         "87":38.4313975,
         "88":127.7965435,
         "89":20.9021231,
         "90":47.4979476,
         "91":74.724091,
         "92":103.378253,
         "93":24.7537645,
         "94":35.843409,
         "95":-9.3658524,
         "96":18.1236723,
         "97":9.5531527,
         "98":23.7499997,
         "99":6.1296751,
         "100":46.4416422,
         "101":33.9301963,
         "102":102.2656823,
         "103":73.3287853,
         "104":-2.2900239,
         "105":14.4476911,
         "106":-9.2399263,
         "107":57.5703566,
         "108":-99.1331785,
         "109":28.5670941,
         "110":7.4276832,
         "111":103.8499736,
         "112":19.5180992,
         "113":-7.3362482,
         "114":34.9144977,
         "115":17.3231107,
         "116":84.0917139,
         "117":5.7480821,
         "118":172.8344077,
         "119":-85.2936911,
         "120":9.3238432,
         "121":7.9999721,
         "122":21.7168387,
         "123":11.52803644,
         "124":57.0036901,
         "125":71.247499,
         "126":-81.1308434,
         "127":144.2489081,
         "128":-58.1693445,
         "129":-75.0458515,
         "130":122.7312101,
         "131":19.134422,
         "132":-7.8896263,
         "133":51.2295295,
         "134":24.6859225,
         "135":97.7453061,
         "136":30.0644358,
         "137":-62.6725973,
         "138":-60.975036,
         "139":-61.2765569,
         "140":12.458306,
         "141":6.9648718,
         "142":42.3528328,
         "143":-14.4529612,
         "144":21.07657433,
         "145":55.4540146,
         "146":-11.8400269,
         "147":103.8194992,
         "148":19.4528646,
         "149":14.4808369,
         "150":49.083416,
         "151":24.991639,
         "152":29.6667897,
         "153":-4.8380649,
         "154":80.7137847,
         "155":29.4917691,
         "156":-56.0771187,
         "157":14.5208584,
         "158":8.2319736,
         "159":39.0494106,
         "160":120.9820179,
         "161":35.7878438,
         "162":100.83273,
         "163":125.8375756,
         "164":1.0199765,
         "165":-60.9821067,
         "166":9.400138,
         "167":34.9249653,
         "168":-100.4458825,
         "169":32.2166578,
         "170":31.2718321,
         "171":53.9994829,
         "172":-3.2765753,
         "173":-56.0201525,
         "174":63.9528098,
         "175":-66.1109318,
         "176":108.4265113,
         "177":34.3779285,
         "178":27.5599164,
         "179":29.7468414
        }
    }
 ];
// Test marker on Afganastan
  let marker = L.marker([33.7680065,66.2385139]).addTo(map);
marker.bindPopup("Afghanastan");

 // Get data from cities.js
// let countryData = countries;
// Loop through the cities array and create one marker for each city.
// countryData.forEach(function(country) {
//     console.log(country)
//     L.marker(country.Latitude, country.Longitude)
//     .bindPopup("<h2>" + country.country + ", "  )
//     .addTo(map);
//   });
// console.log(countries);
//  var countryNames = countries.map(function(country){
//     countryName = country.Country,
//     Latitude = country.Latitude,
//     Longitude = country.Longitude;
//     return {countryName, Latitude,Longitude}
// });
// console.log(countryNames);


// Loop through the cities array and create one marker for each city.
// countryNames.forEach(function(country) {
//     console.log(country)
//     L.marker(country.location)
//     .bindPopup("<h2>" + country.country + ", " + city.population + "</h2> <hr> <h3>Population " + country.population + "</h3>")
//   .addTo(map);
// });
// Create a base layer that holds all three maps.
let baseMaps = {
    "Streets": streets,
    "Dark": dark
  };
  // 1. Add a 2nd layer group for the tectonic plate data.
let medalCount = new L.LayerGroup();
let GDP = new L.LayerGroup();
let Population = new L.LayerGroup();
// 2. Add a reference to the tectonic plates group to the overlays object.
let overlays = {
  "Total Medals": medalCount,
  "GDP": GDP,
  "Country Population": Population
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the Olympic GeoJSON data.


// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {

//   // This function returns the style data for each of the earthquakes we plot on
//   // the map. We pass the magnitude of the earthquake into two separate functions
//   // to calculate the color and radius.
//   function styleInfo(feature) {
//     return {
//       opacity: 1,
//       fillOpacity: 1,
//       fillColor: getColor(feature.properties.mag),
//       color: "#000000",
//       radius: getRadius(feature.properties.mag),
//       stroke: true,
//       weight: 0.5
//     };
//   }
 // This function determines the color of the marker based on the magnitude of the earthquake.
//  function getColor(magnitude) {
//     if (magnitude > 5) {
//       return "#ea2c2c";
//     }
//     if (magnitude > 4) {
//       return "#ea822c";
//     }
//     if (magnitude > 3) {
//       return "#ee9c00";
//     }
//     if (magnitude > 2) {
//       return "#eecc00";
//     }
//     if (magnitude > 1) {
//       return "#d4ee00";
//     }
//     return "#98ee00";
//   }


// This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
//   function getRadius(magnitude) {
//     if (magnitude === 0) {
//       return 1;
//     }
//     return magnitude * 4;
//   }

//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     	// We turn each feature into a circleMarker on the map.
//     	pointToLayer: function(feature, latlng) {
//       		console.log(data);
//       		return L.circleMarker(latlng);
//         },
//       // We set the style for each circleMarker using our styleInfo function.
//     style: styleInfo,
//      // We create a popup for each circleMarker to display the magnitude and location of the earthquake
//      //  after the marker has been created and styled.
//      onEachFeature: function(feature, layer) {
//       layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
//     }
//   }).addTo(allEarthquakes);

//   // Then we add the medal layer to our map.
//   medalCount.addTo(map);





 // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
//  d3.json("").then(function(data) {
//    L.geoJson(llData, myStyle).addTo(tectonicPlates)
  
//    //Add the earthquake layer to our map
//   Country.addTo(map);
//  });