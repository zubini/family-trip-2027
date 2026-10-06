// Detailkarte Osten (Stationen 8 bis 13).
const { basis, wege } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Osten: Chicago bis New York',
  laenge: [-91.2, -71.0], breitengrad: [38.2, 44.6], breite: 1000,
  wege: wege.slice(8),
  stationen: require('./_usa.js').stationen({ 8: 'r', 9: 'd', 10: 'u', 11: 'l', 12: 'l', 13: 'r' }),
  hinweise: [['Rückflug nach Zürich ✈', [41.2, -72.0], 'end']]
});
