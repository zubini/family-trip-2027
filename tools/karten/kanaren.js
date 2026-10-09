// Karte Ferien auf Fuerteventura und Teneriffa.
const { orte, beschriftungen } = require('./_kanaren.js');
module.exports = {
  reise: 'kanaren',
  titel: 'Karte der Reiseroute auf Fuerteventura und Teneriffa mit Mietwagen und Fähre',
  projektion: 'eq', parallel: 28.4, laenge: [-17.4, -13.3], breitengrad: [27.6, 29.3], breite: 1000,
  laender: ['ESP'],
  orte,
  wege: [
    ['car', 'Flughafen Fuerteventura – Corralejo', ['FUE', 'CO']],
    ['car', 'Corralejo – Puerto del Rosario – Morro Jable', ['CO', 'PR', [28.25, -14.0], [28.17, -14.2], 'MJ']],
    ['ferry', 'Morro Jable – Las Palmas – Santa Cruz de Tenerife (Fähre)', ['MJ', [27.95, -14.9], 'LP', [28.3, -15.9], 'SCT']],
    ['car', 'Santa Cruz – Puerto de la Cruz', ['SCT', [28.48, -16.35], 'PC']],
    ['car', 'Puerto de la Cruz – Costa Adeje', ['PC', [28.45, -16.4], [28.3, -16.4], [28.12, -16.5], 'CA']],
    ['car', 'Costa Adeje – Flughafen Teneriffa Süd', ['CA', 'TFS']]
  ],
  stationen: [[1, 'CO', 'l'], [2, 'MJ', 'l'], [3, 'PC', 'u'], [4, 'CA', 'l']],
  umstiege: [['Las Palmas', 'LP', 'r'], ['Flughafen', 'FUE', 'r'], ['Flughafen', 'TFS', 'r']],
  beschriftungen
};
