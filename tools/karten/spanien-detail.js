// Detailkarte Spanien / Portugal mit den Stationen 1 bis 12.
const { orte, wege, stationen } = require('./_spanien.js');
module.exports = {
  reise: 'spanien',
  titel: 'Detailkarte der Reiseroute durch Spanien und Portugal mit Auto- und Fährstrecken',
  projektion: 'eq', parallel: 40, laenge: [-10.4, 5.4], breitengrad: [35.9, 44.0], breite: 1000,
  laender: ['ESP', 'PRT'],
  orte, wege, stationen,
  zwischenstopps: [['Sète', 'SE', 0], ['Carcassonne', 'CA', 0], ['Bilbao', 'BI', -12]],
  umstiege: [['Formentera', 'FO', 'r'], ['Dénia', 'DE', 'l']],
  beschriftungen: [
    ['Spanien', 40.0, -3.3, 'cn'], ['Portugal', 39.4, -7.9, 'cn', -80], ['Frankreich', 43.75, 1.0, 'cn'],
    ['Mittelmeer', 37.9, 2.6, 'sea'], ['Atlantik', 40.6, -9.95, 'sea', -80], ['Golf von Biskaya', 43.85, -4.5, 'sea'], ['Alborán-Meer', 36.2, -3.6, 'sea']
  ],
  hinweise: [['Hinfahrt ab Brig-Glis ↗', 'SE', 'end', -12, -12], ['Rückfahrt nach Brig-Glis ↗', 'CA', 'end', -12, -12]]
};
