// Übersichtskarte der Reise Las Vegas – Miami – New York.
const { basis, wege, stationen } = require('./_usa2.js');
module.exports = Object.assign({}, basis, {
  titel: 'Übersichtskarte der Reiseroute von Las Vegas über Miami nach New York',
  laenge: [-118.5, -70.0], breitengrad: [24.0, 42.5], breite: 1100, klein: true,
  wege,
  stationen: stationen({ 1: 'r', 2: 'r', 3: 'r', 4: 'r', 5: 'r', 6: 'r', 7: 'r', 8: 'r', 9: 'r', 10: 'r', 11: 'r', 12: 'r', 13: 'r', 14: 'r', 15: 'r', 16: 'r' }),
  zwischenstopps: [],
  beschriftungen: [['Golf von Mexiko', 26.0, -90.0, 'sea'], ['Atlantik', 33.0, -74.0, 'sea'], ['Pazifik', 33.5, -119.0, 'sea'], ['Mexiko', 27.5, -104.5, 'cn'], ['USA', 38.5, -97.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [35.3, -115.6], 'middle'], ['Rückflug nach Zürich ✈', [41.5, -73.0], 'middle']]
});
