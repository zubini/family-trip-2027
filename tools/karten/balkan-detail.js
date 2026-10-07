// Detailkarte der Adria-Rundreise mit den Stationen 1 bis 14.
const { orte, wege, stationen } = require('./_balkan.js');
module.exports = {
  reise: 'balkan',
  titel: 'Detailkarte der Rundreise um die Adria mit Auto- und Fährstrecken',
  projektion: 'eq', parallel: 42, laenge: [11.8, 22.8], breitengrad: [38.5, 46.0], breite: 1000,
  laender: ['ITA', 'SVN', 'HRV', 'MNE', 'ALB', 'GRC'],
  orte, wege, stationen,
  zwischenstopps: [['Venedig', 'VE', 0], ['Shkodër', 'SH', 0]],
  umstiege: [['Igoumenitsa', 'IG', 'r'], ['Bari', 'BA', 'l']],
  beschriftungen: [
    ['Italien', 42.2, 13.9, 'cn'], ['Slowenien', 45.85, 14.7, 'cn'], ['Kroatien', 45.45, 16.3, 'cn'],
    ['Bosnien und Herzegowina', 44.1, 17.9, 'cn'], ['Montenegro', 42.9, 19.35, 'cn'], ['Serbien', 44.0, 20.9, 'cn'],
    ['Kosovo', 42.6, 20.9, 'cn'], ['Nordmazedonien', 41.6, 21.6, 'cn'], ['Albanien', 41.0, 20.25, 'cn'], ['Griechenland', 39.2, 22.0, 'cn'],
    ['Adria', 43.0, 15.4, 'sea', 35], ['Ionisches Meer', 38.9, 19.3, 'sea']
  ],
  hinweise: [['← Hin- und Rückfahrt Brig-Glis', [45.8, 11.9], 'start', 0, 0]]
};
