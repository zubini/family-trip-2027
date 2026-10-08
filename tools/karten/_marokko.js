// Orte, Wege und Stationen der Reise Spanien / Portugal / Marokko (data/marokko.js), in Marokko mit dem Zug. Nutzt die Orte aus _spanien.js.
const sp = require('./_spanien.js');
const orte = Object.assign({}, sp.orte, {
  TAR: [36.013, -5.606], TNG: [35.78, -5.81], KEN: [34.26, -6.58], RAB: [34.02, -6.84], CASA: [33.59, -7.62],
  RAK: [31.63, -8.0], AGF: [31.45, -8.22],
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
  ['car', 'Valencia – Dénia', weg('Valencia – Dénia')],
  ['ferry', 'Dénia – Formentera (Autofähre)', ['DE', [38.7, 0.6], 'FO']],
  ['ferry', 'Formentera – Dénia (Autofähre)', weg('Formentera – Dénia (Autofähre)')],
  ['car', 'Dénia – Benidorm', weg('Dénia – Benidorm')],
  ['car', 'Benidorm – Alicante – Murcia – Almería – Cabo de Gata', ['BE', 'AL', 'MU', 'LO', [37.2, -1.9], 'AM', 'SJ']],
  ['car', 'Cabo de Gata – Almería – Málaga – El Chorro', weg('Cabo de Gata – Almería – Málaga – El Chorro')],
  ['car', 'El Chorro – Málaga – Tarifa', ['EC', [36.80, -4.55], 'MAG', [36.5, -4.9], [36.2, -5.35], 'TAR']],
  ['ferry', 'Tarifa – Tanger Ville (Fähre)', ['TAR', 'TNG']],
  ['train', 'Tanger – Kénitra – Rabat – Casablanca (Al Boraq)', ['TNG', [35.2, -6.15], 'KEN', 'RAB', 'CASA']],
  ['train', 'Casablanca – Marrakesch', ['CASA', [32.6, -7.85], 'RAK']],
  ['car', 'Marrakesch – Agafay-Wüste (Transfer)', ['RAK', 'AGF']],
  ['car', 'Agafay-Wüste – Marrakesch (Transfer)', ['AGF', 'RAK']],
  ['train', 'Marrakesch – Casablanca – Rabat – Meknès – Fès', ['RAK', [32.6, -7.85], 'CASA', 'RAB', 'KEN', 'MEK', 'FES']],
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
  ['car', 'Carcassonne – Narbonne – Montpellier – Lyon – Genf – Brig-Glis', ['CA', 'NB', [43.34, 3.22], 'MP', 'NIM', 'OR', 'VA', 'LY', [45.95, 5.35], [46.0, 5.8], 'GE', [46.45, 6.55], [46.38, 6.85], 'MA', 'BR']]
];
const stationen = [
  [1, 'ES', 'l', 'Costa Brava'], [2, 'BC', 'l'], [3, 'VAL', 'l'], [4, 'FO', 'r'], [5, 'BE', 'l'], [6, 'SJ', 'r'], [7, 'EC', 'u', 'Caminito del Rey'], [8, 'TAR', 'l'],
  [9, 'CASA', 'l', 'Casablanca'], [10, 'RAK', 'r'], [11, 'AGF', 'l', 'Agafay'], [12, 'FES', 'r'], [13, 'CAD', 'l'], [14, 'SV', 'u'], [15, 'LAG', 'd', 'Algarve'],
  [16, 'LI', 'l'], [17, 'RI', 'u', 'Catedrales'], [18, 'SS', 'u'], [19, 'CA', 'u']
];
module.exports = { orte, wege, stationen };
