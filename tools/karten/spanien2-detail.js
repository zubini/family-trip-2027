// Detailkarte Spanien / Portugal in umgekehrter Reihenfolge mit den Stationen 1 bis 14.
const { orte, wege2: wege, stationen2: stationen } = require('./_spanien.js');
module.exports = {
  reise: 'spanien2',
  titel: 'Detailkarte der umgekehrten Reiseroute durch Spanien und Portugal mit Auto- und Fährstrecken',
  projektion: 'eq', parallel: 40, laenge: [-10.4, 6.0], breitengrad: [35.9, 44.3], breite: 1000,
  laender: ['ESP', 'PRT'],
  orte, wege, stationen,
  zwischenstopps: [['Sète', 'SE', 0], ['Avignon', 'AVI', 0], ['Bilbao', 'BI', -12]],
  umstiege: [['Formentera', 'FO', 'r'], ['Dénia', 'DE', 'l']],
  beschriftungen: [
    ['Spanien', 40.0, -3.3, 'cn'], ['Portugal', 39.4, -7.9, 'cn', -80], ['Frankreich', 43.75, 1.0, 'cn'],
    ['Mittelmeer', 37.9, 2.6, 'sea'], ['Atlantik', 40.6, -9.95, 'sea', -80], ['Golf von Biskaya', 43.85, -4.5, 'sea'], ['Alborán-Meer', 36.2, -3.6, 'sea']
  ],
  hinweise: [['Hinfahrt ab Brig-Glis ↗', 'SE', 'end', -12, -12], ['Rückfahrt nach Brig-Glis ↗', 'AVI', 'end', -12, -4]]
};
