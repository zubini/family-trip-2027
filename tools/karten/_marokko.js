// Orte, Wege und Stationen der Reise Spanien / Portugal / Marokko (data/marokko.js). Nutzt die Orte aus _spanien.js.
const sp = require('./_spanien.js');
const orte = Object.assign({}, sp.orte, {
  TAR: [36.013, -5.606], TNG: [35.78, -5.81], KEN: [34.26, -6.58], RAB: [34.02, -6.84], CASA: [33.59, -7.62],
  RAK: [31.63, -8.0], TIC: [31.29, -7.38], ABH: [31.047, -7.13], OUZ: [30.92, -6.91], DAD: [31.43, -5.95],
  TIN: [31.51, -5.53], ERF: [31.43, -4.23], MRZ: [31.10, -4.01], MID: [32.68, -4.74], IFR: [33.53, -5.11],
  FES: [34.03, -5.0], MEK: [33.90, -5.55], CAD: [36.53, -6.29], MAD: [40.42, -3.70], BAD: [38.88, -6.97],
  ELV: [38.88, -7.16], MER: [38.92, -6.34], SOR: [41.76, -2.47], TUD: [42.06, -1.60], PAM: [42.81, -1.65],
  SS: [43.32, -1.98], BAY: [43.49, -1.47], PAU: [43.30, -0.37], TOU: [43.60, 1.44], NIM: [43.84, 4.36]
});
const weg = titel => sp.wege.find(x => x[1] === titel)[2];
const wege = [
  ['car', 'Brig-Glis – Genf – Lyon – Montpellier – Sète', weg('Brig-Glis – Genf – Lyon – Montpellier – Sète')],
  ['car', 'Sète – Perpignan – Barcelona', weg('Sète – Perpignan – Barcelona')],
  ['car', 'Barcelona – Tarragona – Valencia', weg('Barcelona – Tarragona – Valencia')],
  ['car', 'Valencia – Alicante – Murcia – Almería – Cabo de Gata', ['VAL', [39.0, -0.2], 'BE', 'AL', 'MU', 'LO', [37.2, -1.9], 'AM', 'SJ']],
  ['car', 'Cabo de Gata – Almería – Málaga – Tarifa', ['SJ', 'AM', 'MOT', 'MAG', [36.5, -4.9], [36.2, -5.35], 'TAR']],
  ['ferry', 'Tarifa – Tanger Ville (Fähre)', ['TAR', 'TNG']],
  ['train', 'Tanger – Kénitra – Rabat – Casablanca – Marrakesch', ['TNG', [35.2, -6.15], 'KEN', 'RAB', 'CASA', [32.6, -7.85], 'RAK']],
  ['car', 'Marrakesch – Tizi n’Tichka – Aït Ben Haddou – Ouarzazate – Dadès', ['RAK', [31.45, -7.6], 'TIC', 'ABH', 'OUZ', [31.05, -6.55], [31.3, -6.2], 'DAD']],
  ['car', 'Dadès – Tinghir – Erfoud – Merzouga', ['DAD', 'TIN', [31.4, -4.9], 'ERF', 'MRZ']],
  ['car', 'Merzouga – Erfoud – Midelt – Ifrane – Fès', ['MRZ', 'ERF', [31.93, -4.43], [32.3, -4.6], 'MID', [33.1, -5.0], 'IFR', 'FES']],
  ['train', 'Fès – Kénitra – Tanger', ['FES', 'MEK', 'KEN', [35.2, -6.15], 'TNG']],
  ['ferry', 'Tanger Ville – Tarifa (Fähre)', ['TNG', [35.9, -5.68], 'TAR']],
  ['car', 'Tarifa – Cádiz', ['TAR', [36.3, -5.9], 'CAD']],
  ['car', 'Cádiz – Sevilla', ['CAD', [36.85, -6.05], 'SV']],
  ['car', 'Sevilla – Huelva – Lagos', weg('Sevilla – Huelva – Lagos')],
  ['car', 'Lagos – Lissabon (A2)', weg('Lagos – Lissabon (A2)')],
  ['car', 'Lissabon – Badajoz – Madrid', ['LI', [38.65, -8.6], [38.57, -7.91], 'ELV', 'BAD', 'MER', [39.47, -6.37], [39.95, -5.17], [40.25, -4.4], 'MAD']],
  ['car', 'Madrid – Soria – Tudela (Bardenas Reales)', ['MAD', [40.63, -3.16], [41.1, -2.65], 'SOR', [41.85, -2.0], 'TUD', 'BA']],
  ['car', 'Bardenas – Pamplona – San Sebastián', ['BA', 'TUD', 'PAM', [43.05, -1.9], 'SS']],
  ['car', 'San Sebastián – Bayonne – Toulouse – Carcassonne', ['SS', 'BAY', 'PAU', [43.23, 0.07], 'TOU', 'CA']],
  ['car', 'Carcassonne – Narbonne – Montpellier – Avignon', ['CA', 'NB', [43.34, 3.22], 'MP', 'NIM', 'AVI']],
  ['car', 'Avignon – Lyon – Genf – Brig-Glis', ['AVI', 'OR', 'VA', 'LY', [45.95, 5.35], [46.0, 5.8], 'GE', [46.45, 6.55], [46.38, 6.85], 'MA', 'BR']]
];
const stationen = [
  [1, 'BC', 'l'], [2, 'VAL', 'l'], [3, 'SJ', 'r'], [4, 'TAR', 'l'], [5, 'RAK', 'l'], [6, 'DAD', 'u', 'Dadès'], [7, 'MRZ', 'r'], [8, 'FES', 'r'],
  [9, 'CAD', 'l'], [10, 'SV', 'u'], [11, 'LAG', 'd', 'Algarve'], [12, 'LI', 'l'], [13, 'MAD', 'r'], [14, 'BA', 'r'], [15, 'SS', 'u'],
  [16, 'CA', 'u'], [17, 'AVI', 'u']
];
module.exports = { orte, wege, stationen };
