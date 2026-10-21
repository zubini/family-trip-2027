// Detailkarte Texas bis New York (Stationen 8 bis 16).
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte von Texas über die Golfküste und die Appalachen bis New York',
  laenge: [-104.0, -72.5], breitengrad: [28.6, 41.6], breite: 1000,
  wege: wege.slice(6),
  stationen: stationen({ 8: 'l', 9: 'd', 10: 'd', 11: 'd', 12: 'l', 13: 'l', 14: 'l', 15: 'r', 16: 'r' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  beschriftungen: [['Golf von Mexiko', 27.8, -90.0, 'sea'], ['Atlantik', 34.5, -74.5, 'sea']],
  hinweise: [['Rückflug nach Zürich ✈', [41.2, -73.6], 'middle']]
});
