// Detailkarte Südwesten (Stationen 1 bis 7).
const { basis, wege } = require('./_usa.js');
module.exports = Object.assign({}, basis, {
  titel: 'Detailkarte Südwesten: Las Vegas bis White Sands',
  laenge: [-117.5, -103.8], breitengrad: [31.0, 38.4], breite: 1000,
  wege: wege.slice(0, 7),
  stationen: require('./_usa.js').stationen({ 1: 'l', 2: 'u', 3: 'r', 4: 'l', 5: 'r', 6: 'r', 7: 'r' }),
  hinweise: [['Roadtrip nach Chicago →', [32.3, -104.9], 'start']]
});
