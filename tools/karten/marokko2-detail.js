// Detailkarte der Zug-Variante Spanien, Portugal und Marokko mit den Stationen 1 bis 18.
const { orte, wege, stationen } = require('./_marokko2.js');
module.exports = {
  reise: 'marokko2',
  titel: 'Detailkarte der Reiseroute durch Spanien, Marokko und Portugal mit Auto und Fähre, in Marokko mit dem Zug',
  projektion: 'eq', parallel: 37, laenge: [-10.2, 3.8], breitengrad: [30.6, 43.8], breite: 1000,
  laender: ['ESP', 'PRT', 'MAR'],
  orte, wege, stationen: stationen.filter(s => s[0] <= 18),
  zwischenstopps: [['Porto', 'PO', 0]],
  umstiege: [['Tanger', 'TNG', 'l'], ['Dénia', 'DE', 'l']],
  beschriftungen: [
    ['Spanien', 39.4, -2.6, 'cn'], ['Portugal', 39.6, -7.95, 'cn', -80], ['Marokko', 32.6, -6.8, 'cn'], ['Frankreich', 43.55, 0.4, 'cn'],
    ['Mittelmeer', 38.6, 1.6, 'sea'], ['Atlantik', 36.5, -9.4, 'sea', -80], ['Alborán-Meer', 36.0, -3.6, 'sea']
  ],
  hinweise: [['Hin- und Rückfahrt Brig-Glis ↗', [43.4, 3.4], 'end', 0, 0]]
};
