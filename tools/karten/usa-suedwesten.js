// Detailkarte Südwesten (Stationen 8 bis 15).
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Südwesten: Carlsbad Caverns bis Las Vegas',
  laenge: [-117.5, -101.2], breitengrad: [30.4, 38.4], breite: 1000,
  wege: wege.slice(6, 15),
  stationen: stationen({ 8: 'r', 9: 'l', 10: 'r', 11: 'r', 12: 'l', 13: 'r', 14: 'u', 15: 'l' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  hinweise: [['Flug nach Washington ✈', [35.7, -115.2], 'middle']]
});
