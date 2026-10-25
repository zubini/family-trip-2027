// Karte USA Quer: Los Angeles – Houston – New Orleans – Chicago – Washington – New York. Koordinaten als [Breite, Länge].
// Die Wege im Südwesten kommen aus _usa.js, die an den Grossen Seen aus usa-ost.js.
const usa = require('./_usa.js'), ost = require('./usa-ost.js');
const weg = (liste, name) => liste.find(w => w[1] === name);
const orte = Object.assign({}, usa.orte, ost.orte, {
  TUC: [35.17, -103.72], AMA: [35.22, -101.83], FW: [32.75, -97.33], HOU: [29.76, -95.37], MEM: [35.15, -90.05], STL: [38.63, -90.19]
});
module.exports = Object.assign({}, usa.basis, {
  reise: 'usaquer', orte,
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
    weg(ost.wege, 'Chicago – Sandusky'),
    weg(ost.wege, 'Sandusky – Cleveland – Erie – Niagarafälle'),
    weg(ost.wege, 'Niagarafälle – Finger Lakes'),
    weg(ost.wege, 'Finger Lakes – New York')
  ],
  stationen: [
    [1, 'LA', 'd'], [2, 'LV', 'r'], [3, 'KAN', 'u'], [4, 'MV', 'r'], [5, 'ABQ', 'l'], [6, 'AMA', 'u'], [7, 'FW', 'l'], [8, 'HOU', 'd'], [9, 'NOL', 'd'],
    [10, 'MEM', 'r'], [11, 'STL', 'l'], [12, 'CHI', 'l'], [13, 'SAN', 'd'], [14, 'NIA', 'u'], [15, 'FL', 'r'], [16, 'NY', 'r']
  ],
  beschriftungen: [['Pazifik', 33.0, -120.0, 'sea'], ['Golf von Mexiko', 27.9, -90.5, 'sea'], ['Atlantik', 35.5, -73.0, 'sea'], ['Kanada', 44.3, -82.5, 'cn'], ['USA', 38.5, -100.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [32.9, -117.6], 'middle'], ['Rückflug nach Zürich ✈', [41.6, -73.0], 'middle']]
});
