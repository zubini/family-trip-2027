// Übersichtskarte Miami – Las Vegas – Washington – New York.
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Übersichtskarte der Reiseroute von Miami über Las Vegas nach New York',
  laenge: [-120.5, -70.5], breitengrad: [23.8, 42.5], breite: 1100, klein: true,
  wege,
  stationen: stationen({ 1: 'r', 2: 'r', 3: 'r', 4: 'r', 5: 'r', 6: 'r', 7: 'r', 8: 'r', 9: 'r', 10: 'r', 11: 'r', 12: 'r', 13: 'r', 14: 'r', 15: 'r', 16: 'r', 17: 'r', 18: 'r' }),
  zwischenstopps: [['Fort Stockton', 'FST', 14]],
  beschriftungen: [['Golf von Mexiko', 26.5, -90.0, 'sea'], ['Atlantik', 32.0, -74.5, 'sea'], ['Pazifik', 33.5, -120.0, 'sea'], ['Mexiko', 27.5, -104.5, 'cn'], ['USA', 37.5, -97.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [26.3, -80.6], 'end'], ['Rückflug nach Zürich ✈', [41.6, -73.6], 'middle']]
});
