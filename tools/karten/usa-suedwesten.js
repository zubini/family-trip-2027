// Detailkarte Südwesten (Stationen 1 bis 5).
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Südwesten: Las Vegas bis White Sands und Fort Stockton',
  laenge: [-117.5, -101.2], breitengrad: [30.4, 38.4], breite: 1000,
  wege: wege.slice(0, 7),
  stationen: stationen({ 1: 'l', 2: 'u', 3: 'r', 4: 'l', 5: 'l' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  umstiege: [['Roswell', 'ROS', 'r']],
  hinweise: [['Ankunft aus Zürich ✈', [35.6, -115.2], 'middle'], ['nach San Antonio →', [30.6, -101.6], 'end']]
});
