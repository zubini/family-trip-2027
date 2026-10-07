// Detailkarte Südwesten der Reise Las Vegas – Miami – New York (Stationen 1 bis 5).
const { basis, wege, stationen } = require('./_usa2.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Südwesten: Las Vegas, Zion, Page, Monument Valley und Grand Canyon',
  laenge: [-116.0, -109.3], breitengrad: [35.0, 37.7], breite: 1000,
  wege: wege.slice(0, 5),
  stationen: stationen({ 1: 'l', 2: 'u', 3: 'r', 4: 'u', 5: 'd' }),
  hinweise: [['Flug nach Miami ✈', [35.75, -115.2], 'middle']]
});
