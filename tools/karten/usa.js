// Übersichtskarte Las Vegas–New York.
const { basis, wege } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Übersichtskarte der Reiseroute von Las Vegas nach New York',
  laenge: [-124.5, -66.5], breitengrad: [24.5, 49.5], breite: 1100, klein: true,
  wege,
  stationen: require('./_usa.js').stationen(),
  zwischenstopps: [['Oklahoma City', 'OK', 0]],
  beschriftungen: [['Pazifik', 35.5, -126.0, 'sea'], ['Atlantik', 36.0, -71.0, 'sea'], ['Golf von Mexiko', 26.5, -90.0, 'sea'],
    ['Kanada', 49.5, -100.0, 'cn'], ['Mexiko', 28.5, -104.5, 'cn'], ['USA', 38.0, -98.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [33.6, -118.8], 'middle'], ['Rückflug nach Zürich ✈', [38.4, -69.2], 'middle']]
});
