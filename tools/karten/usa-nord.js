// Karte USA Nord: Los Angeles – Route 66 – Chicago – Washington – New York. Koordinaten als [Breite, Länge].
// Die Wege im Südwesten kommen aus _usa.js, die an den Grossen Seen aus usa-ost.js.
const usa = require('./_usa.js'), ost = require('./usa-ost.js');
const weg = (liste, name) => liste.find(w => w[1] === name);
const orte = Object.assign({}, usa.orte, ost.orte, {
  TUC: [35.17, -103.72], AMA: [35.22, -101.83], OKC: [35.47, -97.52], TUL: [36.15, -95.99], JOP: [37.08, -94.51],
  STL: [38.63, -90.19], PHL: [39.95, -75.16]
});
module.exports = Object.assign({}, usa.basis, {
  reise: 'usanord', orte,
  titel: 'Übersichtskarte der Reiseroute von Los Angeles über die Route 66 und Chicago nach New York',
  laenge: [-120.5, -70.5], breitengrad: [31.0, 44.8], breite: 1100, klein: true,
  wege: [
    weg(usa.wege, 'Los Angeles – Las Vegas (Interstate 15)'),
    weg(usa.wege, 'Las Vegas – Hurricane – Fredonia – Kanab'),
    weg(usa.wege, 'Kanab – Page – Monument Valley'),
    weg(usa.wege, 'Monument Valley – Shiprock – Gallup – Albuquerque'),
    ['car', 'Albuquerque – Tucumcari – Amarillo (Route 66)', ['ABQ', [35.00, -106.20], [34.95, -105.00], 'TUC', [35.25, -102.60], 'AMA']],
    ['car', 'Amarillo – Oklahoma City – Tulsa (Route 66)', ['AMA', [35.30, -100.50], [35.40, -99.40], 'OKC', [35.75, -96.80], 'TUL']],
    ['car', 'Tulsa – Joplin – St. Louis (Route 66)', ['TUL', [36.36, -95.40], 'JOP', [37.20, -93.29], [37.95, -91.77], 'STL']],
    ['car', 'St. Louis – Springfield – Chicago (Route 66)', ['STL', [39.80, -89.65], [40.48, -88.99], [41.52, -88.08], 'CHI']],
    weg(ost.wege, 'Chicago – Sandusky'),
    weg(ost.wege, 'Sandusky – Cleveland – Erie – Niagarafälle'),
    weg(ost.wege, 'Niagarafälle – Finger Lakes'),
    ['car', 'Finger Lakes – Harrisburg – Washington', ['FL', [42.09, -76.81], [41.24, -77.00], [40.27, -76.88], [39.41, -77.41], 'DC']],
    ['train', 'Washington – Philadelphia (Amtrak)', ['DC', [39.29, -76.61], [39.74, -75.55], 'PHL']],
    ['train', 'Philadelphia – New York (Amtrak)', ['PHL', [40.22, -74.76], [40.50, -74.45], [40.73, -74.17], 'NY']]
  ],
  stationen: [
    [1, 'LA', 'd'], [2, 'LV', 'r'], [3, 'KAN', 'u'], [4, 'MV', 'r'], [5, 'ABQ', 'l'], [6, 'AMA', 'd'], [7, 'TUL', 'd'], [8, 'STL', 'd'],
    [9, 'CHI', 'l'], [10, 'SAN', 'd'], [11, 'NIA', 'u'], [12, 'FL', 'r'], [13, 'DC', 'l'], [14, 'PHL', 'd'], [15, 'NY', 'r']
  ],
  beschriftungen: [['Pazifik', 33.0, -120.0, 'sea'], ['Atlantik', 35.5, -73.0, 'sea'], ['Kanada', 44.3, -82.5, 'cn'], ['USA', 38.5, -100.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [32.9, -117.6], 'middle'], ['Rückflug nach Zürich ✈', [41.6, -73.0], 'middle']]
});
