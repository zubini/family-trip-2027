// Karte Rundreise über fünf Kanarische Inseln.
const { orte, beschriftungen } = require('./_kanaren.js');
module.exports = {
  reise: 'kanaren2',
  titel: 'Karte der Rundreise über Fuerteventura, Lanzarote, Gran Canaria, Teneriffa und La Gomera mit Mietwagen und Fähren',
  projektion: 'eq', parallel: 28.4, laenge: [-17.4, -13.3], breitengrad: [27.6, 29.3], breite: 1000,
  laender: ['ESP'],
  orte,
  wege: [
    ['car', 'Flughafen Fuerteventura – Corralejo', ['FUE', 'CO']],
    ['ferry', 'Corralejo – Playa Blanca (Fähre)', ['CO', 'PB']],
    ['ferry', 'Playa Blanca – Corralejo (Fähre)', ['PB', [28.8, -13.82], 'CO']],
    ['car', 'Corralejo – Puerto del Rosario – Morro Jable', ['CO', 'PR', [28.25, -14.0], [28.17, -14.2], 'MJ']],
    ['ferry', 'Morro Jable – Las Palmas (Fähre)', ['MJ', [27.95, -14.9], 'LP']],
    ['car', 'Las Palmas – Maspalomas', ['LP', [27.95, -15.4], 'MAS']],
    ['car', 'Maspalomas – Agaete', ['MAS', [27.95, -15.4], 'LP', 'AG']],
    ['ferry', 'Agaete – Santa Cruz de Tenerife (Fähre)', ['AG', 'SCT']],
    ['car', 'Santa Cruz – Puerto de la Cruz', ['SCT', [28.48, -16.35], 'PC']],
    ['car', 'Puerto de la Cruz – Los Cristianos', ['PC', [28.45, -16.4], [28.3, -16.4], [28.12, -16.5], 'LC']],
    ['ferry', 'Los Cristianos – San Sebastián de La Gomera (Fähre)', ['LC', 'SSG']],
    ['ferry', 'San Sebastián de La Gomera – Los Cristianos (Fähre)', ['SSG', [28.06, -16.9], 'LC']],
    ['car', 'Los Cristianos – Costa Adeje', ['LC', 'CA']],
    ['car', 'Costa Adeje – Flughafen Teneriffa Süd', ['CA', 'TFS']]
  ],
  stationen: [[1, 'CO', 'l'], [2, 'PB', 'l'], [3, 'MJ', 'l'], [4, 'MAS', 'd'], [5, 'PC', 'u'], [6, 'SSG', 'u', 'La Gomera'], [7, 'CA', 'd']],
  umstiege: [['Las Palmas', 'LP', 'r'], ['Agaete', 'AG', 'l'], ['Los Cristianos', 'LC', 'r']],
  beschriftungen: beschriftungen.filter(b => b[0] !== 'La Gomera')
};
