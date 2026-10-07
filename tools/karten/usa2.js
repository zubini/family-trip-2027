// Übersichtskarte der Variante Miami–Las Vegas.
const { basis, wege, stationen } = require('./_usa2.js');
module.exports = Object.assign({}, basis, {
  titel: 'Übersichtskarte der Reiseroute von Miami nach Las Vegas',
  laenge: [-118.5, -78.5], breitengrad: [23.8, 38.8], breite: 1100, klein: true,
  wege,
  stationen: stationen({ 1: 'r', 2: 'r', 3: 'r', 4: 'r', 5: 'r', 6: 'r', 7: 'r', 8: 'r', 9: 'r', 10: 'r', 11: 'r', 12: 'r', 13: 'r', 14: 'r', 15: 'r', 16: 'r' }),
  zwischenstopps: [['Fort Stockton', 'FST', 14]],
  beschriftungen: [['Golf von Mexiko', 26.5, -90.0, 'sea'], ['Atlantik', 30.0, -79.6, 'sea'], ['Pazifik', 33.5, -119.0, 'sea'], ['Mexiko', 27.5, -104.5, 'cn'], ['USA', 36.0, -97.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [26.3, -80.6], 'end'], ['Rückflug nach Zürich ✈', [37.6, -115.2], 'middle']]
});
