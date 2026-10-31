// Detailkarte Bali und Lombok (Stationen 2 bis 5, 7 und 9).
const ueb = require('./indonesien.js');
module.exports = Object.assign({}, ueb, {
  titel: 'Detailkarte von Bali und Lombok mit Ubud, Amed, Gili Air, Kuta, Nusa Lembongan und Jimbaran',
  parallel: -8.5, laenge: [114.4, 116.7], breitengrad: [-9.15, -7.95], breite: 1000,
  wege: ueb.wege.filter(w => !/Singapur|Yogyakarta|Labuan Bajo|Komodo/.test(w[1])),
  stationen: [[2, 'UBD', 'l'], [3, 'AMD', 'u'], [4, 'GA', 'u'], [5, 'KUT', 'd'], [7, 'LEM', 'd'], [9, 'JIM', 'l']],
  beschriftungen: [['Bali', -8.25, 115.0, 'cn'], ['Lombok', -8.55, 116.45, 'cn'], ['Lombokstrasse', -8.7, 115.75, 'sea']],
  hinweise: [['Flughafen Bali ✈', [-8.80, 115.30], 'start'], ['Flughafen Lombok ✈', [-8.70, 116.33], 'start']]
});
