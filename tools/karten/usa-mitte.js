// Karte USA Quer: Los Angeles – Houston – New Orleans – Chicago – Washington – New York. Koordinaten als [Breite, Länge].
// Die Wege im Südwesten kommen aus _usa.js.
const usa = require('./_usa.js');
const weg = (liste, name) => liste.find(w => w[1] === name);
const orte = Object.assign({}, usa.orte, {
  CHI: [41.88, -87.63], SAN: [41.45, -82.71], NIA: [43.09, -79.07], FL: [42.38, -76.87], NY: [40.71, -74.01],
  TUC: [35.17, -103.72], AMA: [35.22, -101.83], FW: [32.75, -97.33], HOU: [29.76, -95.37], MEM: [35.15, -90.05], STL: [38.63, -90.19]
});
module.exports = Object.assign({}, usa.basis, {
  reise: 'usamitte', orte,
  titel: 'Übersichtskarte der Reiseroute von Los Angeles über Houston, New Orleans und Chicago nach New York',
  laenge: [-120.5, -70.5], breitengrad: [27.5, 44.8], breite: 1100, klein: true,
  wege: [
    weg(usa.wege, 'Los Angeles – Las Vegas (Interstate 15)'),
    weg(usa.wege, 'Las Vegas – Hurricane – Fredonia – Kanab'),
    weg(usa.wege, 'Kanab – Page – Monument Valley'),
    weg(usa.wege, 'Monument Valley – Shiprock – Gallup – Albuquerque'),
    ['car', 'Albuquerque – Tucumcari – Amarillo (Route 66)', ['ABQ', [35.00, -106.20], [34.95, -105.00], 'TUC', [35.25, -102.60], 'AMA']],
    ['car', 'Amarillo – Wichita Falls – Fort Worth', ['AMA', [34.60, -100.20], [33.91, -98.49], [33.20, -97.80], 'FW']],
    ['car', 'Fort Worth – Houston', ['FW', [32.40, -96.80], [31.60, -96.30], [30.70, -95.60], 'HOU']],
    ['car', 'Houston – New Orleans', ['HOU', [30.08, -94.13], [30.23, -93.22], [30.22, -92.02], [30.45, -91.15], 'NOL']],
    ['car', 'New Orleans – Jackson – Memphis', ['NOL', [30.70, -90.40], [31.60, -90.40], [32.30, -90.18], [33.50, -89.80], [34.40, -89.90], 'MEM']],
    ['car', 'Memphis – St. Louis', ['MEM', [36.00, -89.75], [36.90, -89.55], [37.80, -89.90], 'STL']],
    ['car', 'St. Louis – Springfield – Chicago (Route 66)', ['STL', [39.80, -89.65], [40.48, -88.99], [41.52, -88.08], 'CHI']],
    ['car', 'Chicago – Sandusky', ['CHI', [41.62, -87.30], [41.70, -86.25], [41.67, -85.00], [41.62, -83.70], [41.40, -83.10], 'SAN']],
    ['car', 'Sandusky – Cleveland – Erie – Niagarafälle', ['SAN', [41.48, -81.69], [41.90, -80.80], [42.13, -80.09], [42.50, -79.30], [42.89, -78.88], 'NIA']],
    ['car', 'Niagarafälle – Finger Lakes', ['NIA', [43.00, -78.30], [42.95, -77.60], [42.70, -77.10], 'FL']],
    ['car', 'Finger Lakes – New York', ['FL', [42.09, -76.81], [42.10, -75.91], [41.50, -75.30], [41.10, -74.60], [40.85, -74.25], 'NY']]
  ],
  stationen: [
    [1, 'LA', 'd'], [2, 'LV', 'r'], [3, 'KAN', 'u'], [4, 'MV', 'r'], [5, 'ABQ', 'l'], [6, 'AMA', 'u'], [7, 'FW', 'l'], [8, 'HOU', 'd'], [9, 'NOL', 'd'],
    [10, 'MEM', 'r'], [11, 'STL', 'l'], [12, 'CHI', 'l'], [13, 'SAN', 'd'], [14, 'NIA', 'u'], [15, 'FL', 'r'], [16, 'NY', 'r']
  ],
  beschriftungen: [['Pazifik', 33.0, -120.0, 'sea'], ['Golf von Mexiko', 27.9, -90.5, 'sea'], ['Atlantik', 35.5, -73.0, 'sea'], ['Kanada', 44.3, -82.5, 'cn'], ['USA', 38.5, -100.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [32.9, -117.6], 'middle'], ['Rückflug nach Zürich ✈', [41.6, -73.0], 'middle']]
});
