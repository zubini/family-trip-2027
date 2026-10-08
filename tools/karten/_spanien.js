// Gemeinsame Orte und Wege für Spanien und Portugal (genutzt von _marokko.js). Koordinaten als [Breite, Länge].
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
  CA: [43.213, 2.353], BE: [38.54, -0.13], IBN: [39.11, 1.52], LAG: [37.10, -8.67], BAZ: [37.49, -2.77], MOT: [36.75, -3.52], MAG: [36.72, -4.42], VAL: [39.47, -0.376], AVI: [43.95, 4.81], TER: [40.34, -1.11],
  DA: [41.11, -1.41], SAG: [39.68, -0.27], CS: [39.99, -0.05], TA: [41.12, 1.25]
};
const wege = [
  ['car', 'Brig-Glis – Genf – Lyon – Montpellier – Sète', ['BR', 'MA', [46.38, 6.85], [46.45, 6.55], 'GE', [46.0, 5.8], [45.95, 5.35], 'LY', 'VA', 'OR', 'NI', 'MP', 'SE']],
  ['car', 'Sète – Perpignan – Figueres – L’Estartit', ['SE', 'NB', 'PP', [42.45, 2.87], 'FIG', [42.12, 3.08], 'ES']],
  ['car', 'L’Estartit – Girona – Barcelona', ['ES', 'GI', [41.70, 2.60], 'BC']],
  ['car', 'Barcelona – Tarragona – Valencia', ['BC', [41.55, 2.10], 'TA', [40.8, 0.7], 'CS', 'SAG', 'VAL']],
  ['car', 'Valencia – Dénia', ['VAL', [39.0, -0.2], 'DE']],
  ['ferry', 'Dénia – Ibiza (Autofähre)', ['DE', [38.95, 0.6], 'IB']],
  ['car', 'Ibiza-Stadt – Portinatx', ['IB', [39.0, 1.45], 'IBN']],
  ['ferry', 'Ibiza – Formentera (Autofähre)', ['IB', 'FO']],
  ['ferry', 'Formentera – Dénia (Autofähre)', ['FO', [38.7, 0.6], 'DE']],
  ['car', 'Dénia – Benidorm', ['DE', [38.75, -0.05], 'BE']],
  ['car', 'Benidorm – Alicante – Murcia – Baza – Granada', ['BE', 'AL', 'MU', 'LO', 'BAZ', 'GU', 'GR']],
  ['car', 'Granada – Guadix – Almería – Cabo de Gata', ['GR', 'GU', [37.05, -2.75], 'AM', 'SJ']],
  ['car', 'Cabo de Gata – Almería – Málaga – El Chorro', ['SJ', 'AM', 'MOT', 'MAG', 'EC']],
  ['car', 'El Chorro – Sevilla', ['EC', 'AN', [37.25, -5.10], 'SV']],
  ['car', 'Sevilla – Huelva – Lagos', ['SV', 'HU', 'AY', 'ALB', 'LAG']],
  ['car', 'Lagos – Lissabon (A2)', ['LAG', [37.6, -8.45], 'GRA', 'SET', 'LI']],
  ['car', 'Lissabon – Porto (A1)', ['LI', [39.2, -8.75], 'LE', 'CO', 'AV', 'PO']],
  ['car', 'Porto – Braga – Lugo – Ribadeo', ['PO', 'BG', 'VL', [42.5, -8.1], 'LU', 'RI']],
  ['car', 'Ribadeo – Nordküste – Bilbao', ['RI', [43.5, -6.5], 'OV', [43.42, -4.8], 'SA', 'BI']],
  ['car', 'Bilbao – Vitoria – Logroño – Bardenas Reales', ['BI', 'VI', 'LG', [42.3, -2.0], 'BA']],
  ['car', 'Bardenas – Saragossa – Lleida – Perpignan – Montpellier', ['BA', 'ZA', 'LL', 'MR', 'VC', 'GI', 'FIG', 'PP', 'NB', 'MP']],
  ['car', 'Montpellier – Lyon – Genf – Brig-Glis', ['MP', 'NI', 'OR', 'VA', 'LY', [45.95, 5.35], [46.0, 5.8], 'GE', [46.45, 6.55], [46.38, 6.85], 'MA', 'BR']]
];
const stationen = [
  [1, 'ES', 'r', 'Costa Brava'], [2, 'BC', 'l'], [3, 'VAL', 'l'], [4, 'IBN', 'r'], [5, 'FO', 'r'], [6, 'BE', 'r'], [7, 'GR', 'u'], [8, 'SJ', 'r'],
  [9, 'EC', 'd'], [10, 'SV', 'u'], [11, 'LAG', 'd', 'Algarve'], [12, 'LI', 'l'], [13, 'PO', 'l'], [14, 'RI', 'u'], [15, 'BA', 'r']
];
module.exports = { orte, wege, stationen };
