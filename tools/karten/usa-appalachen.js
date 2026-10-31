// Karte USA Appalachen: Los Angeles – New Orleans – Smoky Mountains – New York. Koordinaten als [Breite, Länge].
// Die Wege bis New Orleans kommen aus usa-mitte.js.
const mitte = require('./usa-mitte.js');
const weg = name => mitte.wege.find(w => w[1] === name);
const orte = Object.assign({}, mitte.orte, {
  GS: [30.25, -87.70], CHA: [35.05, -85.31], GSM: [35.71, -83.51], SHE: [38.67, -78.46], DC: [38.91, -77.04], NY: [40.71, -74.01]
});
module.exports = Object.assign({}, mitte, {
  reise: 'usaappalachen', orte,
  titel: 'Übersichtskarte der Reiseroute von Los Angeles über New Orleans und die Smoky Mountains nach New York',
  laenge: [-120.5, -70.5], breitengrad: [27.5, 42.5], breite: 1100, klein: true,
  wege: [
    weg('Los Angeles – Las Vegas (Interstate 15)'), weg('Las Vegas – Hurricane – Fredonia – Kanab'), weg('Kanab – Page – Monument Valley'),
    weg('Monument Valley – Shiprock – Gallup – Albuquerque'), weg('Albuquerque – Tucumcari – Amarillo (Route 66)'), weg('Amarillo – Wichita Falls – Fort Worth'),
    weg('Fort Worth – Houston'), weg('Houston – New Orleans'),
    ['car', 'New Orleans – Gulf Shores', ['NOL', [30.40, -89.00], [30.69, -88.04], [30.40, -87.75], 'GS']],
    ['car', 'Gulf Shores – Montgomery – Birmingham – Chattanooga', ['GS', [31.00, -87.50], [32.37, -86.30], [33.52, -86.80], [34.40, -86.00], 'CHA']],
    ['car', 'Chattanooga – Knoxville – Smoky Mountains', ['CHA', [35.45, -84.60], [35.96, -83.92], 'GSM']],
    ['car', 'Smoky Mountains – Roanoke – Shenandoah', ['GSM', [35.96, -83.92], [36.60, -82.20], [37.27, -79.94], [38.15, -79.07], 'SHE']],
    ['car', 'Shenandoah – Washington', ['SHE', [38.85, -78.00], 'DC']],
    ['car', 'Washington – New York', ['DC', [39.29, -76.61], [39.74, -75.55], [40.22, -74.76], [40.50, -74.45], [40.73, -74.17], 'NY']]
  ],
  stationen: [
    [1, 'LA', 'd'], [2, 'LV', 'r'], [3, 'KAN', 'u'], [4, 'MV', 'r'], [5, 'ABQ', 'l'], [6, 'AMA', 'u'], [7, 'FW', 'l'], [8, 'HOU', 'd'],
    [9, 'NOL', 'd'], [10, 'GS', 'd'], [11, 'CHA', 'l'], [12, 'GSM', 'r'], [13, 'SHE', 'l'], [14, 'DC', 'r'], [15, 'NY', 'r']
  ],
  umstiege: [],
  beschriftungen: [['Pazifik', 33.0, -120.0, 'sea'], ['Golf von Mexiko', 27.9, -90.5, 'sea'], ['Atlantik', 35.0, -72.5, 'sea'], ['USA', 38.5, -100.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [32.9, -117.6], 'middle'], ['Rückflug nach Zürich ✈', [41.6, -73.0], 'middle']]
});
