// Detailkarte USA Nord: Los Angeles bis St. Louis (Stationen 1 bis 8).
const nord = require('./usa-nord.js');
module.exports = Object.assign({}, nord, {
  titel: 'Detailkarte von Los Angeles über die Route 66 bis St. Louis',
  laenge: [-119.6, -89.2], breitengrad: [32.4, 39.6], breite: 1000, klein: false,
  wege: nord.wege.slice(0, 8),
  stationen: [[1, 'LA', 'd'], [2, 'LV', 'r'], [3, 'KAN', 'u'], [4, 'MV', 'r'], [5, 'ABQ', 'l'], [6, 'AMA', 'd'], [7, 'TUL', 'd'], [8, 'STL', 'd']],
  umstiege: [['Tucumcari', 'TUC', 'u'], ['Oklahoma City', 'OKC', 'u']],
  beschriftungen: [['Pazifik', 32.9, -118.9, 'sea'], ['USA', 37.5, -100.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [33.2, -117.0], 'middle'], ['nach Chicago →', [39.3, -90.2], 'end']]
});
