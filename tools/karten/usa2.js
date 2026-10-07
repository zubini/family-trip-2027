// Übersichtskarte der Reise Las Vegas – Texas – Florida – New York.
const { basis, wege, stationen } = require('./_usa2.js');
const alle = {}; for (let i = 1; i <= 21; i++) alle[i] = 'r';
module.exports = Object.assign({}, basis, {
  titel: 'Übersichtskarte der Reiseroute von Las Vegas über Texas und Florida nach New York',
  laenge: [-118.5, -70.0], breitengrad: [24.0, 42.5], breite: 1100, klein: true,
  wege,
  stationen: stationen(alle),
  zwischenstopps: [['Fort Stockton', 'FST', 14]],
  beschriftungen: [['Golf von Mexiko', 26.0, -90.0, 'sea'], ['Atlantik', 33.0, -74.0, 'sea'], ['Pazifik', 33.5, -119.0, 'sea'], ['Mexiko', 27.5, -104.5, 'cn'], ['USA', 38.5, -97.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [35.3, -115.6], 'middle'], ['Rückflug nach Zürich ✈', [41.5, -73.0], 'middle']]
});
