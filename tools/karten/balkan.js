// Übersichtskarte der Adria-Rundreise mit Hin- und Rückfahrt ab Brig-Glis.
const { orte, wege, stationen } = require('./_balkan.js');
module.exports = {
  reise: 'balkan',
  titel: 'Übersichtskarte der Rundreise mit dem eigenen Auto von Brig-Glis rund um die Adria',
  projektion: 'eq', parallel: 42.5, laenge: [7.3, 22.5], breitengrad: [38.3, 47.0], breite: 1000, klein: true,
  laender: ['CHE', 'ITA', 'SVN', 'HRV', 'MNE', 'ALB', 'GRC'],
  orte, wege, stationen,
  zwischenstopps: [['Brig-Glis', 'BR', 0], ['Gardasee', 'SIR', 0]],
  umstiege: [['Igoumenitsa', 'IG', 'r'], ['Bari', 'BA', 'l']],
  beschriftungen: [
    ['Schweiz', 46.85, 8.4, 'cn'], ['Italien', 43.4, 11.7, 'cn'], ['Österreich', 46.9, 13.6, 'cn'], ['Slowenien', 46.15, 14.9, 'cn'],
    ['Kroatien', 45.55, 16.4, 'cn'], ['Bosnien und Herzegowina', 44.25, 17.9, 'cn'], ['Montenegro', 42.85, 19.35, 'cn'],
    ['Albanien', 41.2, 20.2, 'cn'], ['Griechenland', 39.3, 21.6, 'cn'], ['Serbien', 44.0, 20.9, 'cn'],
    ['Adria', 43.1, 15.2, 'sea', 35], ['Ionisches Meer', 38.7, 19.2, 'sea'], ['Tyrrhenisches Meer', 39.9, 12.6, 'sea']
  ]
};
