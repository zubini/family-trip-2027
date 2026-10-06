// Übersichtskarte Spanien / Portugal mit Hin- und Rückfahrt ab Brig-Glis.
const { orte, wege, stationen } = require('./_spanien.js');
module.exports = {
  reise: 'spanien',
  titel: 'Übersichtskarte der Reiseroute mit dem eigenen Auto von Brig-Glis durch Spanien und Portugal',
  projektion: 'eq', parallel: 41.5, laenge: [-10.2, 10.0], breitengrad: [35.7, 47.2], breite: 1000, klein: true,
  laender: ['ESP', 'PRT', 'FRA', 'CHE'],
  orte, wege, stationen,
  zwischenstopps: [['Brig-Glis', 'BR', 0], ['Sète', 'SE', 0], ['Carcassonne', 'CA', 0], ['Bilbao', 'BI', -12]],
  umstiege: [['Dénia', 'DE', 'l']],
  beschriftungen: [
    ['Spanien', 39.9, -3.6, 'cn'], ['Portugal', 39.6, -7.95, 'cn', -80], ['Frankreich', 45.6, 1.3, 'cn'], ['Schweiz', 46.95, 7.6, 'cn'],
    ['Italien', 45.2, 8.6, 'cn'],
    ['Mittelmeer', 40.4, 5.6, 'sea'], ['Atlantik', 40.5, -9.9, 'sea', -80], ['Golf von Biskaya', 45.2, -4.4, 'sea'], ['Balearen', 38.7, 3.4, 'sea']
  ]
};
