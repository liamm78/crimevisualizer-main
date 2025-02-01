
var map = L.map('map').setView([40.71, -74], 10);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(nydata1).addTo(map);

console.log(nydata1.features[0].properties.total_felonies)

function style(feature) {
    return {
        fillColor: getColor(feature.properties.total_felonies),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function getColor(d) {
    return d > 6000 ? '#800026' :
           d > 5000  ? '#BD0026' :
           d > 4000  ? '#E31A1C' :
           d > 3000  ? '#FC4E2A' :
           d > 2000   ? '#FD8D3C' :
           d > 1000   ? '#FEB24C' :
           d > 500   ? '#FED976' :
                      '#FFEDA0';
}

L.geoJson(nydata1, {style: style}).addTo(map);