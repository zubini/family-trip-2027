// Detailkarte Osten der Reise Las Vegas – Miami – New York (Stationen 6 bis 16).
const { basis, wege, stationen } = require('./_usa2.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Osten: Miami bis New York mit Mietwagen und Amtrak',
  laenge: [-86.5, -72.5], breitengrad: [24.3, 41.3], breite: 800,
  wege: wege.slice(6),
  stationen: stationen({ 6: 'r', 7: 'd', 8: 'l', 9: 'l', 10: 'r', 11: 'r', 12: 'r', 13: 'l', 14: 'l', 15: 'r', 16: 'r' }),
  beschriftungen: [['Atlantik', 31.0, -76.5, 'sea'], ['Golf von Mexiko', 27.0, -85.0, 'sea']],
  hinweise: [['Ankunft aus Las Vegas ✈', [26.6, -79.4], 'start'], ['Rückflug nach Zürich ✈', [41.0, -73.6], 'middle']]
});
