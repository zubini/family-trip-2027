// Karte Costa-Rica-Rundreise. Koordinaten als [Breite, Länge].
module.exports = {
  reise: 'costarica',
  titel: 'Karte der Costa-Rica-Rundreise ab San José mit Mietwagen-, Shuttle- und Bootsstrecken',
  projektion: 'eq', parallel: 10, laenge: [-86.0, -82.4], breitengrad: [8.2, 11.3], breite: 1000,
  laender: ['CRI'],
  orte: {
    SJO: [9.998, -84.204], SJ: [9.93, -84.08], BRA: [10.10, -83.95], GUA: [10.215, -83.785], CAR: [10.37, -83.73],
    PAV: [10.53, -83.65], TOR: [10.54, -83.505], MOIN: [10.00, -83.08], LIM: [9.99, -83.03], CAH: [9.735, -82.84],
    PV: [9.656, -82.754], SIQ: [10.10, -83.51], SAR: [10.45, -84.02], FOR: [10.47, -84.645], TIL: [10.47, -84.97],
    MON: [10.31, -84.825], BAR: [9.98, -84.72], ORO: [9.91, -84.52], TAR: [9.77, -84.63], JAC: [9.615, -84.63],
    PAR: [9.52, -84.32], QUE: [9.43, -84.16], MA: [9.39, -84.14], DOM: [9.25, -83.86], UVI: [9.16, -83.74],
    PAL: [8.96, -83.47], SIE: [8.86, -83.47], DRA: [8.69, -83.67], SIS: [9.37, -83.70], DOTA: [9.55, -83.81],
    CART: [9.86, -83.92], TUR: [9.90, -83.68]
  },
  wege: [
    ['bus', 'San José – La Pavona (Shuttle)', ['SJO', 'SJ', 'BRA', 'GUA', 'CAR', 'PAV']],
    ['ferry', 'La Pavona – Tortuguero', ['PAV', [10.56, -83.56], 'TOR']],
    ['ferry', 'Tortuguero – Moín (Kanäle)', ['TOR', [10.30, -83.38], [10.12, -83.20], 'MOIN']],
    ['bus', 'Moín – Puerto Viejo (Shuttle)', ['MOIN', 'LIM', 'CAH', 'PV']],
    ['car', 'Puerto Viejo – La Fortuna', ['PV', 'CAH', 'LIM', 'SIQ', 'GUA', [10.42, -83.90], 'SAR', [10.40, -84.30], [10.45, -84.45], 'FOR']],
    ['car', 'La Fortuna – Monteverde', ['FOR', [10.50, -84.78], [10.56, -84.90], 'TIL', 'MON']],
    ['car', 'Monteverde – Manuel Antonio', ['MON', [10.12, -84.86], 'BAR', 'ORO', 'TAR', 'JAC', 'PAR', 'QUE', 'MA']],
    ['car', 'Manuel Antonio – Uvita', ['MA', 'QUE', [9.33, -84.00], 'DOM', 'UVI']],
    ['car', 'Uvita – Sierpe', ['UVI', [9.05, -83.60], 'PAL', 'SIE']],
    ['ferry', 'Sierpe – Drake Bay (hin und zurück)', ['SIE', [8.85, -83.56], [8.78, -83.63], 'DRA']],
    ['car', 'Sierpe – San Gerardo de Dota', ['SIE', 'PAL', [9.05, -83.60], 'UVI', 'DOM', 'SIS', [9.50, -83.75], 'DOTA']],
    ['car', 'San Gerardo de Dota – Turrialba', ['DOTA', [9.64, -83.85], 'CART', 'TUR']],
    ['car', 'Turrialba – Alajuela (Flughafen)', ['TUR', 'CART', 'SJ', 'SJO']]
  ],
  stationen: [
    [1, 'TOR', 'r'], [2, 'PV', 'u', 'Puerto Viejo'], [3, 'FOR', 'u', 'La Fortuna'], [4, 'MON', 'l'], [5, 'MA', 'l'],
    [6, 'UVI', 'r'], [7, 'DRA', 'l', 'Drake Bay'], [8, 'DOTA', 'r', 'San Gerardo de Dota'], [9, 'TUR', 'r']
  ],
  zwischenstopps: [['Alajuela (Flughafen)', 'SJO', -14]],
  umstiege: [['La Pavona', 'PAV', 'l'], ['Sierpe', 'SIE', 'r']],
  beschriftungen: [
    ['Costa Rica', 9.65, -83.35, 'cn'], ['Nicaragua', 11.1, -84.9, 'cn'], ['Panama', 8.55, -82.65, 'cn'],
    ['Karibisches Meer', 10.6, -82.9, 'sea'], ['Pazifik', 8.75, -85.0, 'sea'], ['Halbinsel Nicoya', 9.95, -85.35, 'cn']
  ],
  hinweise: [['✈ Ankunft und Rückflug', 'SJO', 'end', -12, -30]]
};
