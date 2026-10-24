// Detailkarte Texas bis New York (Stationen 6 bis 13).
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte von Texas über die Golfküste und Florida bis New York',
  laenge: [-104.0, -71.0], breitengrad: [24.3, 41.6], breite: 1000,
  wege: wege.slice(6),
  stationen: stationen({ 6: 'l', 7: 'd', 8: 'd', 9: 'u', 10: 'r', 11: 'r', 12: 'r', 13: 'r' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  beschriftungen: [['Golf von Mexiko', 27.8, -90.0, 'sea'], ['Atlantik', 34.5, -74.5, 'sea']],
  hinweise: [['Rückflug nach Zürich ✈', [41.2, -73.6], 'middle']]
});
