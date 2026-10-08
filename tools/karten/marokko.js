// Übersichtskarte Spanien / Portugal / Marokko mit Hin- und Rückfahrt ab Brig-Glis.
const { orte, wege, stationen } = require('./_marokko.js');
module.exports = {
  reise: 'marokko',
  titel: 'Übersichtskarte der Reiseroute mit dem eigenen Auto von Brig-Glis nach Spanien, Marokko und Portugal, in Marokko mit dem Zug',
  projektion: 'eq', parallel: 38, laenge: [-10.5, 9.5], breitengrad: [30.4, 47.0], breite: 1000, klein: true,
  laender: ['ESP', 'PRT', 'FRA', 'CHE', 'MAR'],
  orte, wege, stationen,
  zwischenstopps: [['Brig-Glis', 'BR', 0], ['Sète', 'SE', 0], ['Porto', 'PO', 0]],
  umstiege: [['Tanger', 'TNG', 'l'], ['Dénia', 'DE', 'l']],
  beschriftungen: [
    ['Spanien', 40.0, -3.0, 'cn'], ['Portugal', 39.6, -7.95, 'cn', -80], ['Frankreich', 45.6, 1.5, 'cn'], ['Schweiz', 46.95, 7.6, 'cn'],
    ['Marokko', 32.5, -6.5, 'cn'], ['Algerien', 32.0, 1.5, 'cn'],
    ['Mittelmeer', 39.0, 4.5, 'sea'], ['Atlantik', 37.0, -9.6, 'sea', -80]
  ]
};
