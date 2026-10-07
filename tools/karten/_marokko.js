// Orte, Wege und Stationen der Reise Spanien / Portugal / Marokko (data/marokko.js). Nutzt die Orte aus _spanien.js.
const sp = require('./_spanien.js');
const orte = Object.assign({}, sp.orte, {
  TAR: [36.013, -5.606], TNG: [35.78, -5.81], KEN: [34.26, -6.58], RAB: [34.02, -6.84], CASA: [33.59, -7.62],
  RAK: [31.63, -8.0], TIC: [31.29, -7.38], ABH: [31.047, -7.13], OUZ: [30.92, -6.91], DAD: [31.43, -5.95],
  TIN: [31.51, -5.53], ERF: [31.43, -4.23], MRZ: [31.10, -4.01], MID: [32.68, -4.74], IFR: [33.53, -5.11],
  FES: [34.03, -5.0], MEK: [33.90, -5.55], CAD: [36.53, -6.29], MAD: [40.42, -3.70], BAD: [38.88, -6.97],
  ELV: [38.88, -7.16], MER: [38.92, -6.34], SOR: [41.76, -2.47], TUD: [42.06, -1.60], PAM: [42.81, -1.65],
  SS: [43.32, -1.98], SAL: [40.965, -5.664], GUA: [40.54, -7.27], VLD: [41.65, -4.72], CPA: [37.63, -0.69], BUR: [42.34, -3.70], BAY: [43.49, -1.47], PAU: [43.30, -0.37], TOU: [43.60, 1.44], NIM: [43.84, 4.36]
});
const weg = titel => sp.wege.find(x => x[1] === titel)[2];
const wege = [
  ['car', 'Brig-Glis – Genf – Lyon – Montpellier – Sète', weg('Brig-Glis – Genf – Lyon – Montpellier – Sète')],
  ['car', 'Sète – Perpignan – Figueres – L’Estartit', weg('Sète – Perpignan – Figueres – L’Estartit')],
  ['car', 'L’Estartit – Girona – Barcelona', weg('L’Estartit – Girona – Barcelona')],
  ['car', 'Barcelona – Tarragona – Valencia', weg('Barcelona – Tarragona – Valencia')],
  ['car', 'Valencia – Alicante – Cabo de Palos – Almería – Cabo de Gata', ['VAL', [39.0, -0.2], 'BE', 'AL', [37.9, -0.8], 'CPA', 'LO', [37.2, -1.9], 'AM', 'SJ']],
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
  ['car', 'Lissabon – Porto (A1)', weg('Lissabon – Porto (A1)')],
  ['car', 'Porto – Braga – Lugo – Ribadeo', weg('Porto – Braga – Lugo – Ribadeo')],
  ['car', 'Ribadeo – Nordküste – Bilbao – San Sebastián', weg('Ribadeo – Nordküste – Bilbao').concat([[43.29, -2.4], 'SS'])],
  ['car', 'San Sebastián – Bayonne – Toulouse – Carcassonne', ['SS', 'BAY', 'PAU', [43.23, 0.07], 'TOU', 'CA']],
  ['car', 'Carcassonne – Narbonne – Montpellier – Avignon', ['CA', 'NB', [43.34, 3.22], 'MP', 'NIM', 'AVI']],
  ['car', 'Avignon – Lyon – Genf – Brig-Glis', ['AVI', 'OR', 'VA', 'LY', [45.95, 5.35], [46.0, 5.8], 'GE', [46.45, 6.55], [46.38, 6.85], 'MA', 'BR']]
];
const stationen = [
  [1, 'ES', 'l', 'Costa Brava'], [2, 'BC', 'l'], [3, 'VAL', 'l'], [4, 'SJ', 'r'], [5, 'TAR', 'l'], [6, 'RAK', 'l'], [7, 'DAD', 'u', 'Dadès'], [8, 'MRZ', 'r'], [9, 'FES', 'r'],
  [10, 'CAD', 'l'], [11, 'SV', 'u'], [12, 'LAG', 'd', 'Algarve'], [13, 'LI', 'l'], [14, 'RI', 'u', 'Catedrales'], [15, 'SS', 'u'],
  [16, 'CA', 'u'], [17, 'AVI', 'u']
];
module.exports = { orte, wege, stationen };
