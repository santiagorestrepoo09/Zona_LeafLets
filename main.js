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

// mix of values
//let arr = [ 'Apple', { name: 'John' }, true, function() {
//alert('hello'); } ];
// get the object at index 1 and then show its name
//alert( arr[1].name ); // John
// get the function at index 3 and run it
//arr[3](); // hello


let data = { 
	"Bodega 1" : {
		"Geozona": "CELTA",
		"Latitude": 9.78373,
		"Latitud" :-74.81688,
	}
}

for(var k in data){
	var Geozona 	= 	data[k].Geozona;
	var Latitude 	= 	data[k].Latitude;
	var Latitud 	= 	data[k].Latitud;
	console.log(Geozona);
	console.log(Latitude);
	console.log(Latitud);
}

var lineField ;

var latlngs = [
		[4.7243454203294135, -74.18141993433166],
		[4.726952859901043, -74.1827551665659],
		[4.727798027877097, -74.18320625855162],
		[4.728427407596924, -74.18353104476834],
		[4.728769070633927, -74.18389191834251],
		[4.730531329983107, -74.18484823334744],
		[4.732388006950403, -74.18576535153055],
		[4.7331890711427995, -74.18485947619294],
		[4.735329756077897, -74.1824573120471],
		[4.736849241109028, -74.18100479574274],
		[4.73820688460512, -74.17964249800028],
		[4.740193894512148, -74.1775584530217],
		[4.7405355517380485, -74.17721562312626],
		[4.741092992112346, -74.17652094149601],
		[4.741524558544822, -74.17590745641994],
		[4.742342735828892, -74.17462635523036],
		[4.742627141057145, -74.17453838852876]	,
		[4.743029485960578, -74.17482032100857],
		[4.743577933395926, -74.17526464661789],
		[4.744512990310586, -74.17592098547124],
		[4.745182813965421, -74.1762705817613],
		[4.7457810609819395, -74.17617395886185],
		[4.746342992581295, -74.17643333674584],
		[4.746747583050121, -74.17667241549482],
		[4.747453368080635, -74.17703780001159],
		[4.7480872253587645, -74.17741446182116],
		[4.748822229344833, -74.17787908656759],
		[4.749584463999819, -74.1782932812378],
		[4.750407694141203, -74.17923551472695],
		[4.751578751228584, -74.18065194358286],
		[4.752529531250603, -74.18185635922238]
];

lineField = L.polyline(latlngs, {color:'red'}).addTo(map);




const marker2 = L.marker([4.75980604617241, -74.18418932431655]).addTo(map);

marker2.bindPopup('Bodega CELTA')

const marker = L.marker([4.652449743100209, -74.12632790687927]).addTo(map);
marker.bindPopup('Multiplaza')

const CasMArtin = L.marker([4.758649101062708, -74.03485335956827]).addTo(map);

let template = `
	<h2>2022-02-28 14:40:32
	GPS: 4377
	::
	Vehiculo: DETENIDO a 2569.2msnm</h2>`;

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
	[4.753927143048681, -74.18332015632338	],
	[4.754392103428112, -74.18170045301201	],
	[4.75461135292904, -74.18181424949758	],
	[4.754490387695777, -74.18222771006184	],
	[4.755012050112495, -74.18300152616376],
	[4.754509288514873, -74.18426087393748],

] , {
	color:'blue',
	fillOpacity:0.2
}).addTo(map).bindPopup('Zona al lado de MCT');

const Zone_2 = L.polygon([
	[4.753195372782862, -74.18290326671817],
	[4.751095820085556, -74.18032416961859],
	[4.75083653973286, -74.18042072912822],
	[4.750293921796892, -74.18091961999039],
	[4.75092207551982, -74.18172964707442],
	[4.752071461732311, -74.18315926449509],
	[4.75210621058701, -74.18334970132611],
	[4.7527290166858, -74.18340334550386],
	[4.753105907673104, -74.18307075159937],
] ,  {
	color: '#52ff52',
	fillOpacity:0.2
}).addTo(map).bindPopup('Zona al lado de MCT');


const Zone_3 = L.polygon([
	[4.732778824842421, -74.18501289945954],
	[4.73354078130976, -74.18409137227609	],
	[4.730982420855156, -74.18277996819663],
	[4.730492950425204, -74.18385845878711	],
	//[4.75460, 	-74.19251	], 
] , {
	color:'red',
	fillOpacity:0.2
}).addTo(map).bindPopup('Big cola');