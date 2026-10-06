// Gemeinsame Orte und Wege für die Spanien-Karten. Koordinaten als [Breite, Länge].
const orte = {
  BR: [46.316, 7.988], MA: [46.10, 7.07], GE: [46.204, 6.143], LY: [45.764, 4.836], VA: [44.933, 4.892],
  OR: [44.138, 4.81], NI: [43.837, 4.360], MP: [43.611, 3.877], SE: [43.403, 3.697], NB: [43.184, 3.004],
  PP: [42.699, 2.895], FIG: [42.267, 2.961], ES: [42.054, 3.198], GI: [41.98, 2.82], BC: [41.385, 2.173],
  PA: [39.57, 2.64], MAL: [39.63, 2.98], IB: [38.909, 1.432], FO: [38.705, 1.45], DE: [38.840, 0.106],
  AL: [38.345, -0.481], MU: [37.992, -1.13], LO: [37.677, -1.70], AM: [36.834, -2.464], SJ: [36.765, -2.106],
  GU: [37.30, -3.137], GR: [37.177, -3.599], LJ: [37.17, -4.15], AN: [37.019, -4.56], EC: [36.906, -4.759],
  SV: [37.389, -5.984], HU: [37.26, -6.95], AY: [37.21, -7.41], ALB: [37.17, -8.20], GRA: [38.17, -8.57],
  SET: [38.60, -8.95], LI: [38.722, -9.139], LE: [39.74, -8.81], CO: [40.21, -8.43], AV: [40.64, -8.65],
  PO: [41.15, -8.61], BG: [41.55, -8.42], VL: [42.03, -8.64], LU: [43.01, -7.56], RI: [43.536, -7.04],
  OV: [43.36, -5.85], SA: [43.46, -3.80], BI: [43.263, -2.935], VI: [42.85, -2.67], LG: [42.465, -2.445],
  BA: [42.13, -1.55], ZA: [41.65, -0.88], LL: [41.617, 0.62], MR: [41.73, 1.83], VC: [41.93, 2.25],
  CA: [43.213, 2.353], BE: [38.54, -0.13]
};
const wege = [
  ['car', 'Brig-Glis – Genf – Lyon – Montpellier – Sète', ['BR', 'MA', [46.38, 6.85], [46.45, 6.55], 'GE', [46.0, 5.8], [45.95, 5.35], 'LY', 'VA', 'OR', 'NI', 'MP', 'SE']],
  ['car', 'Sète – Perpignan – L’Estartit (Costa Brava)', ['SE', 'NB', 'PP', [42.45, 2.87], 'FIG', [42.10, 3.05], 'ES']],
  ['car', 'Costa Brava – Barcelona', ['ES', 'GI', [41.70, 2.60], 'BC']],
  ['ferry', 'Barcelona – Palma (Autofähre)', ['BC', [40.6, 2.45], 'PA']],
  ['car', 'Mallorca', ['PA', 'MAL']],
  ['ferry', 'Palma – Ibiza (Autofähre)', ['PA', [39.2, 2.0], 'IB']],
  ['ferry', 'Ibiza – Formentera (Schnellfähre, Tagesausflug)', ['IB', 'FO']],
  ['ferry', 'Ibiza – Dénia (Autofähre)', ['IB', [38.9, 0.8], 'DE']],
  ['car', 'Dénia – Benidorm', ['DE', [38.75, -0.05], 'BE']],
  ['car', 'Benidorm – Alicante – Murcia – Cabo de Gata', ['BE', 'AL', 'MU', 'LO', [37.2, -2.0], 'SJ']],
  ['car', 'Cabo de Gata – Almería – Guadix – Granada', ['SJ', 'AM', [37.05, -2.75], 'GU', 'GR']],
  ['car', 'Granada – Loja – Antequera – El Chorro', ['GR', 'LJ', 'AN', 'EC']],
  ['car', 'El Chorro – Sevilla', ['EC', 'AN', [37.25, -5.10], 'SV']],
  ['car', 'Sevilla – Huelva – Algarve – Lissabon', ['SV', 'HU', 'AY', 'ALB', [37.6, -8.25], 'GRA', 'SET', 'LI']],
  ['car', 'Lissabon – Porto (A1)', ['LI', [39.2, -8.75], 'LE', 'CO', 'AV', 'PO']],
  ['car', 'Porto – Braga – Lugo – Ribadeo', ['PO', 'BG', 'VL', [42.5, -8.1], 'LU', 'RI']],
  ['car', 'Ribadeo – Nordküste – Bilbao', ['RI', [43.5, -6.5], 'OV', [43.42, -4.8], 'SA', 'BI']],
  ['car', 'Bilbao – Vitoria – Logroño – Bardenas Reales', ['BI', 'VI', 'LG', [42.3, -2.0], 'BA']],
  ['car', 'Bardenas – Saragossa – Lleida – Perpignan – Carcassonne', ['BA', 'ZA', 'LL', 'MR', 'VC', 'GI', 'FIG', 'PP', 'NB', 'CA']],
  ['car', 'Carcassonne – Montpellier – Lyon – Genf – Brig-Glis', ['CA', 'NB', 'MP', 'NI', 'OR', 'VA', 'LY', [45.95, 5.35], [46.0, 5.8], 'GE', [46.45, 6.55], [46.38, 6.85], 'MA', 'BR']]
];
const stationen = [
  [1, 'ES', 'r'], [2, 'BC', 'l'], [3, 'MAL', 'r'], [4, 'IB', 'u'], [5, 'BE', 'r'], [6, 'SJ', 'r'], [7, 'GR', 'u'],
  [8, 'EC', 'd'], [9, 'SV', 'u'], [10, 'LI', 'l'], [11, 'PO', 'l'], [12, 'RI', 'u'], [13, 'BA', 'r']
];
module.exports = { orte, wege, stationen };
