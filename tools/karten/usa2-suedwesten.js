// Detailkarte Südwesten der Variante Miami–Las Vegas (Stationen 9 bis 16).
const { basis, wege, stationen } = require('./_usa2.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Südwesten: Carlsbad Caverns bis Las Vegas',
  laenge: [-117.5, -101.2], breitengrad: [30.4, 38.4], breite: 1000,
  wege: wege.slice(7),
  stationen: stationen({ 9: 'r', 10: 'l', 11: 'r', 12: 'r', 13: 'l', 14: 'r', 15: 'u', 16: 'l' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  hinweise: [['Rückflug nach Zürich ✈', [35.7, -115.2], 'middle']]
});
