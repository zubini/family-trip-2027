// Detailkarte Florida und Golfküste der Variante Miami–Las Vegas (Stationen 1 bis 8).
const { basis, wege, stationen } = require('./_usa2.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Florida und Golfküste: Miami bis San Antonio',
  laenge: [-100.6, -78.0], breitengrad: [24.2, 31.4], breite: 1000,
  wege: wege.slice(0, 8),
  stationen: stationen({ 1: 'r', 2: 'd', 3: 'l', 4: 'r', 5: 'u', 6: 'd', 7: 'd', 8: 'l' }),
  beschriftungen: [['Golf von Mexiko', 27.2, -90.0, 'sea'], ['Atlantik', 29.0, -80.2, 'sea']],
  hinweise: [['Ankunft aus Zürich ✈', [26.2, -79.6], 'end'], ['nach Fort Stockton →', [30.1, -100.4], 'start']]
});
