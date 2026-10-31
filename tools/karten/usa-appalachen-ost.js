// Detailkarte USA Appalachen: New Orleans bis New York (Stationen 9 bis 15).
const app = require('./usa-appalachen.js');
module.exports = Object.assign({}, app, {
  titel: 'Detailkarte von New Orleans über die Golfküste, die Smoky Mountains und Shenandoah nach New York',
  laenge: [-91.5, -72.6], breitengrad: [29.4, 41.4], breite: 1000, klein: false,
  wege: app.wege.slice(8),
  stationen: [[9, 'NOL', 'l'], [10, 'GS', 'd'], [11, 'CHA', 'l'], [12, 'GSM', 'r'], [13, 'SHE', 'l'], [14, 'DC', 'r'], [15, 'NY', 'r']],
  beschriftungen: [['Golf von Mexiko', 29.6, -88.5, 'sea'], ['Atlantik', 35.0, -74.0, 'sea']],
  hinweise: [['Rückflug nach Zürich ✈', [41.15, -73.4], 'middle']]
});
