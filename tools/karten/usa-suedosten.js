// Detailkarte Florida und Golfküste (Stationen 1 bis 7).
const { basis, wege, stationen } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Florida und Golfküste: Miami bis San Antonio',
  laenge: [-100.6, -78.0], breitengrad: [24.6, 31.4], breite: 1000,
  wege: wege.slice(0, 7),
  stationen: stationen({ 1: 'r', 2: 'l', 3: 'r', 4: 'u', 5: 'd', 6: 'd', 7: 'l' }),
  beschriftungen: [['Golf von Mexiko', 27.2, -90.0, 'sea'], ['Atlantik', 29.0, -80.2, 'sea']],
  hinweise: [['Ankunft aus Zürich ✈', [26.2, -79.6], 'end'], ['nach Fort Stockton →', [30.1, -100.4], 'start']]
});
