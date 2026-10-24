// Detailkarte Südwesten (Stationen 1 bis 6).
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Südwesten: Los Angeles bis White Sands und Fort Stockton',
  laenge: [-119.6, -101.2], breitengrad: [30.4, 38.4], breite: 1000,
  wege: wege.slice(0, 8),
  stationen: stationen({ 1: 'l', 2: 'r', 3: 'u', 4: 'r', 5: 'l', 6: 'l' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  umstiege: [['Roswell', 'ROS', 'r']],
  hinweise: [['Ankunft aus Zürich ✈', [33.4, -118.3], 'middle'], ['nach San Antonio →', [30.6, -101.6], 'end']]
});
