// Übersichtskarte Las Vegas – New Orleans – New York.
const { basis, wege, stationen } = require('./_usa.js');
const alle = {};
for (let i = 1; i <= 17; i++) alle[i] = 'r';
module.exports = Object.assign({}, basis, {
  titel: 'Übersichtskarte der Reiseroute von Las Vegas über New Orleans nach New York',
  laenge: [-120.5, -70.5], breitengrad: [27.0, 43.0], breite: 1100, klein: true,
  wege,
  stationen: stationen(alle),
  zwischenstopps: [['Fort Stockton', 'FST', 14]],
  beschriftungen: [['Golf von Mexiko', 27.8, -90.0, 'sea'], ['Atlantik', 33.0, -74.5, 'sea'], ['Pazifik', 33.5, -120.0, 'sea'], ['Mexiko', 28.6, -104.5, 'cn'], ['USA', 38.5, -97.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [35.3, -115.2], 'middle'], ['Rückflug nach Zürich ✈', [41.6, -73.6], 'middle']]
});
