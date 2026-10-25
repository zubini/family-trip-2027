// Detailkarte USA Quer: Los Angeles bis New Orleans (Stationen 1 bis 9).
const mitte = require('./usa-mitte.js');
module.exports = Object.assign({}, mitte, {
  titel: 'Detailkarte von Los Angeles über Albuquerque und Texas bis New Orleans',
  laenge: [-119.6, -88.4], breitengrad: [28.8, 38.6], breite: 1000, klein: false,
  wege: mitte.wege.slice(0, 8),
  stationen: mitte.stationen.filter(s => s[0] <= 8).concat([[9, 'NOL', 'u']]),
  umstiege: [['Tucumcari', 'TUC', 'u']],
  beschriftungen: [['Pazifik', 32.4, -119.2, 'sea'], ['Golf von Mexiko', 28.9, -92.5, 'sea'], ['USA', 37.0, -100.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [33.2, -117.0], 'middle']]
});
