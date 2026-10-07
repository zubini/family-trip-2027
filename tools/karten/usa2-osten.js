// Detailkarte Golfküste, Florida und Ostküste der Reise Las Vegas – Texas – Florida – New York (Stationen 11 bis 21).
const { basis, wege, stationen } = require('./_usa2.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Golfküste, Florida und Ostküste: New Orleans bis New York',
  laenge: [-91.0, -72.5], breitengrad: [24.3, 41.3], breite: 900,
  wege: wege.slice(11),
  stationen: stationen({ 11: 'u', 12: 'd', 13: 'l', 14: 'r', 15: 'd', 16: 'r', 17: 'r', 18: 'r', 19: 'r', 20: 'l', 21: 'r' }),
  beschriftungen: [['Atlantik', 31.0, -76.5, 'sea'], ['Golf von Mexiko', 27.0, -87.0, 'sea']],
  hinweise: [['Rückflug nach Zürich ✈', [41.0, -73.6], 'middle']]
});
