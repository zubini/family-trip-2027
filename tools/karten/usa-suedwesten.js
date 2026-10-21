// Detailkarte Südwesten (Stationen 1 bis 7).
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Südwesten: Las Vegas bis Carlsbad Caverns',
  laenge: [-117.5, -101.2], breitengrad: [30.4, 38.4], breite: 1000,
  wege: wege.slice(0, 8),
  stationen: stationen({ 1: 'l', 2: 'u', 3: 'r', 4: 'r', 5: 'r', 6: 'l', 7: 'r' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  hinweise: [['Ankunft aus Zürich ✈', [35.6, -115.2], 'middle'], ['nach San Antonio →', [30.6, -101.6], 'end']]
});
