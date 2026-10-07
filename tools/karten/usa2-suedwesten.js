// Detailkarte Südwesten und Texas der Reise Las Vegas – Texas – Florida – New York (Stationen 1 bis 11).
const { basis, wege, stationen } = require('./_usa2.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Südwesten und Texas: Las Vegas bis New Orleans',
  laenge: [-116.3, -89.0], breitengrad: [28.6, 38.0], breite: 1000,
  wege: wege.slice(0, 11),
  stationen: stationen({ 1: 'l', 2: 'u', 3: 'd', 4: 'l', 5: 'r', 6: 'r', 7: 'l', 8: 'r', 9: 'd', 10: 'd', 11: 'u' }),
  zwischenstopps: [['Fort Stockton', 'FST', 0]],
  beschriftungen: [['Golf von Mexiko', 28.9, -92.5, 'sea'], ['Mexiko', 29.3, -105.0, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [36.75, -115.4], 'middle']]
});
