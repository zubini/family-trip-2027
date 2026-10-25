// Detailkarte USA Nord: St. Louis bis New York (Stationen 8 bis 15).
const nord = require('./usa-nord.js');
module.exports = Object.assign({}, nord, {
  titel: 'Detailkarte von St. Louis über Chicago, Niagara und Washington nach New York',
  laenge: [-91.0, -72.6], breitengrad: [37.9, 44.2], breite: 1000, klein: false,
  wege: nord.wege.slice(7),
  stationen: [[8, 'STL', 'r'], [9, 'CHI', 'l'], [10, 'SAN', 'd'], [11, 'NIA', 'u'], [12, 'FL', 'r'], [13, 'DC', 'l'], [14, 'PHL', 'l'], [15, 'NY', 'r']],
  beschriftungen: [['Kanada', 44.0, -79.5, 'cn'], ['Atlantik', 38.6, -73.5, 'sea']],
  hinweise: [['Rückflug nach Zürich ✈', [41.2, -73.4], 'middle']]
});
