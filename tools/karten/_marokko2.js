// Orte, Wege und Stationen der Variante Spanien / Portugal / Marokko nur mit dem Zug (data/marokko2.js). Nutzt _marokko.js.
const m = require('./_marokko.js');
const orte = Object.assign({}, m.orte, { AGF: [31.45, -8.22] });
const weg = titel => m.wege.find(x => x[1] === titel);
const bisTanger = m.wege.slice(0, m.wege.findIndex(x => x[1] === 'Tarifa – Tanger Ville (Fähre)') + 1);
const abTanger = m.wege.slice(m.wege.findIndex(x => x[1] === 'Fès – Kénitra – Tanger'));
const wege = bisTanger.concat([
  ['train', 'Tanger – Kénitra – Rabat – Casablanca (Al Boraq)', ['TNG', [35.2, -6.15], 'KEN', 'RAB', 'CASA']],
  ['train', 'Casablanca – Marrakesch', ['CASA', [32.6, -7.85], 'RAK']],
  ['car', 'Marrakesch – Agafay-Wüste (Transfer)', ['RAK', 'AGF']],
  ['car', 'Agafay-Wüste – Marrakesch (Transfer)', ['AGF', 'RAK']],
  ['train', 'Marrakesch – Casablanca – Rabat – Meknès – Fès', ['RAK', [32.6, -7.85], 'CASA', 'RAB', 'KEN', 'MEK', 'FES']]
]).concat(abTanger);
const stationen = m.stationen.filter(s => s[0] <= 8).concat([
  [9, 'CASA', 'l', 'Casablanca'], [10, 'RAK', 'r'], [11, 'AGF', 'l', 'Agafay'], [12, 'FES', 'r']
]).concat(m.stationen.filter(s => s[0] >= 13));
module.exports = { orte, wege, stationen };
