// Detailkarte Texas bis New York (Stationen 7 bis 15).
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte von Texas über die Golfküste und die Appalachen bis New York',
  laenge: [-104.0, -72.5], breitengrad: [28.6, 41.6], breite: 1000,
  wege: wege.slice(5),
  stationen: stationen({ 7: 'l', 8: 'd', 9: 'd', 10: 'd', 11: 'l', 12: 'l', 13: 'l', 14: 'r', 15: 'r' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  beschriftungen: [['Golf von Mexiko', 27.8, -90.0, 'sea'], ['Atlantik', 34.5, -74.5, 'sea']],
  hinweise: [['Rückflug nach Zürich ✈', [41.2, -73.6], 'middle']]
});
