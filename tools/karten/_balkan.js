// Gemeinsame Orte und Wege für die Karten der Adria-Rundreise. Koordinaten als [Breite, Länge].
const orte = {
  BR: [46.316, 7.988], SIM: [46.25, 8.03], DOMO: [46.116, 8.29], GRA: [45.93, 8.45], MI: [45.464, 9.19],
  BS: [45.54, 10.22], VR: [45.438, 10.99], PD: [45.41, 11.88], VE: [45.49, 12.24], TS: [45.65, 13.78],
  KP: [45.55, 13.73], RV: [45.08, 13.64], RI: [45.33, 14.44], OTO: [44.87, 15.24], PL: [44.88, 15.62],
  ST: [43.508, 16.44], SG: [43.184, 16.60], JE: [43.16, 16.69], SU: [43.124, 17.19], DR: [43.155, 17.25],
  PB: [42.93, 17.6], DU: [42.65, 18.094], HN: [42.45, 18.53], KO: [42.424, 18.771], BU: [42.286, 18.84],
  BAR: [42.093, 19.10], UL: [41.93, 19.21], SH: [42.068, 19.513], TI: [41.327, 19.819], FI: [40.72, 19.56],
  BE: [40.705, 19.95], VL: [40.466, 19.49], HI: [40.10, 19.745], SA: [39.875, 20.005], KS: [39.77, 20.00],
  KAK: [39.90, 20.32], IO: [39.665, 20.85], MET: [39.75, 21.15], KA: [39.705, 21.626], PR: [38.96, 20.75],
  LE: [38.79, 20.62], IG: [39.50, 20.265], BA: [41.13, 16.87], PO: [40.996, 17.22], BL: [41.32, 16.28],
  FG: [41.46, 15.55], MF: [41.62, 15.92], VI: [41.88, 16.18], TE: [42.0, 15.0], PE: [42.46, 14.21],
  AN: [43.617, 13.517], PS: [43.91, 12.91], RN: [44.06, 12.57], FO: [44.22, 12.04], BO: [44.494, 11.343],
  PC: [45.05, 9.70]
};
const wege = [
  ['car', 'Brig-Glis – Simplon – Mailand – Verona – Venedig-Mestre', ['BR', 'SIM', 'DOMO', 'GRA', 'MI', 'BS', 'VR', 'PD', 'VE']],
  ['car', 'Venedig – Triest – Koper – Rovinj', ['VE', [45.75, 12.9], [45.8, 13.5], 'TS', 'KP', [45.35, 13.7], 'RV']],
  ['car', 'Rovinj – Rijeka – Plitvicer Seen', ['RV', [45.25, 13.95], 'RI', [45.15, 14.9], 'OTO', 'PL']],
  ['car', 'Plitvicer Seen – Autobahn A1 – Split', ['PL', [44.6, 15.75], [44.35, 15.6], [44.12, 15.6], [43.85, 15.9], [43.6, 16.15], 'ST']],
  ['ferry', 'Split – Stari Grad (Autofähre)', ['ST', [43.36, 16.42], 'SG']],
  ['car', 'Stari Grad – Jelsa – Sućuraj', ['SG', 'JE', [43.13, 17.0], 'SU']],
  ['ferry', 'Sućuraj – Drvenik (Autofähre)', ['SU', 'DR']],
  ['car', 'Drvenik – Pelješac-Brücke – Dubrovnik', ['DR', [43.05, 17.43], 'PB', [42.85, 17.72], [42.72, 17.95], 'DU']],
  ['car', 'Dubrovnik – Herceg Novi – Kotor', ['DU', [42.55, 18.28], 'HN', [42.48, 18.69], 'KO']],
  ['car', 'Kotor – Budva – Bar – Ulcinj – Shkodër', ['KO', 'BU', 'BAR', 'UL', 'SH']],
  ['car', 'Shkodër – Tirana – Fier – Berat', ['SH', [41.78, 19.64], 'TI', [41.0, 19.6], 'FI', 'BE']],
  ['car', 'Berat – Vlorë – Llogara-Pass – Himarë', ['BE', 'FI', 'VL', [40.22, 19.58], 'HI']],
  ['car', 'Himarë – Sarandë – Ksamil', ['HI', [40.0, 19.9], 'SA', 'KS']],
  ['car', 'Ksamil – Kakavia – Ioannina – Kalambaka', ['KS', 'SA', [39.85, 20.12], 'KAK', 'IO', 'MET', 'KA']],
  ['car', 'Kalambaka – Ioannina – Preveza – Lefkada', ['KA', 'MET', 'IO', [39.3, 20.95], [39.05, 20.85], 'PR', 'LE']],
  ['car', 'Lefkada – Igoumenitsa', ['LE', 'PR', [39.28, 20.45], 'IG']],
  ['ferry', 'Igoumenitsa – Bari (Nachtfähre)', ['IG', [39.52, 20.05], [39.6, 19.85], [39.9, 19.5], [40.25, 19.1], [40.6, 18.55], [41.15, 17.3], 'BA']],
  ['car', 'Bari – Polignano a Mare', ['BA', 'PO']],
  ['car', 'Polignano – Bari – Foggia – Vieste', ['PO', 'BA', 'BL', 'FG', 'MF', 'VI']],
  ['car', 'Vieste – Pescara – Ancona – Rimini (A14)', ['VI', [41.9, 15.9], [41.85, 15.45], 'TE', 'PE', [42.9, 13.9], 'AN', 'PS', 'RN']],
  ['car', 'Rimini – Bologna – Mailand – Simplon – Brig-Glis', ['RN', 'FO', 'BO', [44.65, 10.93], [44.8, 10.33], 'PC', [45.3, 9.4], 'MI', 'GRA', 'DOMO', 'SIM', 'BR']]
];
const stationen = [
  [1, 'RV', 'l', 'Istrien'], [2, 'PL', 'r'], [3, 'ST', 'u'], [4, 'JE', 'd'], [5, 'DU', 'l'], [6, 'KO', 'r'], [7, 'BE', 'r'],
  [8, 'HI', 'l'], [9, 'KS', 'l'], [10, 'KA', 'r'], [11, 'LE', 'l'], [12, 'PO', 'd', 'Apulien'], [13, 'VI', 'u', 'Gargano'], [14, 'RN', 'u', 'Rimini']
];
module.exports = { orte, wege, stationen };
