const apikey = 'pk.eyJ1IjoiZHNyZXN0cmVwbzA0IiwiYSI6ImNsMGNmaHpjdjE2ZmozanFzdWthbGx0ZnAifQ.Trq1pnwbGNw0sfWckkFZIA';

var map = L.map('map').setView([4.753444385910403, -74.1812870341233], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apikey
}).addTo(map);

//add MArker 

const marker2 = L.marker([4.75980604617241, -74.18418932431655]).addTo(map);

marker2.bindPopup('Bodega CELTA')

const marker = L.marker([4.652449743100209, -74.12632790687927]).addTo(map);
marker.bindPopup('Multiplaza')

const CasMArtin = L.marker([4.758649101062708, -74.03485335956827]).addTo(map);

let template = `
		<h1>Casa Martin</h1>
		<img width="150" height="150" src="casamartin.jpeg">
	`;

CasMArtin.bindPopup(template)

//casa Santiago 4.619531922208161, -74.17263630189592
const marker3 = L.marker([4.619531922208161, -74.17263630189592]).addTo(map);
marker3.bindPopup('Casa Santiago')




//add  cricle 

const circle = L.circle([4.764909930804294, -74.18147598463185], {
	radius:60,
	color:'red'
}).addTo(map).bindPopup('<H1>Celta </H1>');


// add Ploygon 

const polygon = L.polygon([
	[4.75390, 	-74.18090	],
	[4.75310, 	-74.18060	],
	[4.75280, 	-74.18150	],
	[4.75360, 	-74.18251	],
	//[4.75460, 	-74.19251	], 
] , {
	color:'orange',
	fillOpacity:0.2
}).addTo(map).bindPopup('MCT - Administracion');

const polygon2 = L.polygon([
	[4.75590, -74.18190	],
	[4.75510, -74.18260	],
	[4.75480, -74.18350	],
	[4.75490, -74.18151	],
] , {
	color:'blue',
	fillOpacity:0.2
}).addTo(map).bindPopup('Zona al lado de MCT');