// Detailkarte USA Quer: New Orleans bis New York (Stationen 9 bis 16).
const mitte = require('./usa-mitte.js');
module.exports = Object.assign({}, mitte, {
  titel: 'Detailkarte von New Orleans über Memphis, Chicago und Niagara nach New York',
  laenge: [-92.0, -72.6], breitengrad: [29.6, 44.2], breite: 1000, klein: false,
  wege: mitte.wege.slice(8),
  stationen: [[9, 'NOL', 'l'], [10, 'MEM', 'r'], [11, 'STL', 'r'], [12, 'CHI', 'l'], [13, 'SAN', 'd'], [14, 'NIA', 'u'], [15, 'FL', 'r'], [16, 'NY', 'r']],
  beschriftungen: [['Kanada', 44.0, -79.5, 'cn'], ['Atlantik', 35.0, -74.5, 'sea'], ['Golf von Mexiko', 29.8, -88.5, 'sea']],
  hinweise: [['Rückflug nach Zürich ✈', [41.2, -73.4], 'middle']]
});
