// Gemeinsame Orte und Wege für die drei USA-Karten (Dateien mit _ sind keine eigenen Karten).
const orte = {
  LV: [36.17, -115.14], ZI: [37.30, -113.03], PG: [36.91, -111.46], GC: [36.06, -112.14], MV: [36.98, -110.11],
  SF: [35.69, -105.94], WS: [32.82, -106.10], OK: [35.47, -97.52], CH: [41.88, -87.63], SA: [41.45, -82.71],
  NI: [43.09, -79.06], DC: [38.91, -77.04], PH: [39.95, -75.17], NY: [40.71, -74.01]
};
const wege = [
  ['car', 'Las Vegas – Zion', ['LV', [36.80, -114.07], [37.10, -113.58], [37.18, -113.29], 'ZI']],
  ['car', 'Zion – Page', ['ZI', [37.23, -112.68], [37.05, -112.53], 'PG']],
  ['car', 'Page – Grand Canyon', ['PG', [36.78, -111.58], [35.88, -111.41], [36.04, -111.83], 'GC']],
  ['car', 'Grand Canyon – Monument Valley', ['GC', [36.04, -111.83], [35.88, -111.41], [36.13, -111.24], [36.71, -110.26], 'MV']],
  ['car', 'Monument Valley – Santa Fe', ['MV', [36.60, -109.20], [36.79, -108.69], [36.73, -108.22], [36.30, -107.20], [35.31, -106.55], 'SF']],
  ['car', 'Santa Fe – White Sands', ['SF', [35.08, -106.65], [34.10, -106.90], [33.64, -105.88], [33.07, -106.02], [32.90, -106.00], 'WS']],
  ['car', 'White Sands – Oklahoma City', ['WS', [32.89, -105.96], [33.33, -105.67], [33.39, -104.52], [34.40, -103.20], [35.22, -101.83], [35.21, -100.25], [35.41, -99.40], 'OK']],
  ['car', 'Oklahoma City – Chicago', ['OK', [36.15, -95.99], [37.21, -93.29], [37.95, -91.77], [38.63, -90.20], [39.78, -89.65], [40.48, -88.99], 'CH']],
  ['car', 'Chicago – Sandusky', ['CH', [41.59, -87.30], [41.67, -86.25], [41.70, -84.90], [41.65, -83.54], 'SA']],
  ['car', 'Sandusky – Niagara Falls', ['SA', [41.50, -81.69], [42.13, -80.09], [42.65, -78.80], 'NI']],
  ['car', 'Niagara Falls – Washington', ['NI', [42.65, -78.80], [42.08, -78.43], [40.79, -77.86], [40.27, -76.88], [39.29, -76.61], 'DC']],
  ['train', 'Washington – Philadelphia', ['DC', [39.29, -76.61], [39.74, -75.55], 'PH']],
  ['train', 'Philadelphia – New York', ['PH', [40.22, -74.76], [40.50, -74.45], [40.73, -74.17], 'NY']]
];
// Stationen mit kurzen Namen; «seiten» wählt die Stationen und die Seite der Beschriftung
const STATIONEN = [[1, 'LV', 'Las Vegas'], [2, 'ZI', 'Zion'], [3, 'PG', 'Page'], [4, 'GC', 'Grand Canyon'], [5, 'MV', 'Monument Valley'],
  [6, 'SF', 'Santa Fe'], [7, 'WS', 'White Sands'], [8, 'CH', 'Chicago'], [9, 'SA', 'Sandusky'], [10, 'NI', 'Niagara Falls'],
  [11, 'DC', 'Washington, D.C.'], [12, 'PH', 'Philadelphia'], [13, 'NY', 'New York']];
const UEBERSICHT = { 1: 'l', 2: 'u', 3: 'r', 4: 'l', 5: 'r', 6: 'r', 7: 'r', 8: 'l', 9: 'd', 10: 'u', 11: 'l', 12: 'd', 13: 'r' };
const stationen = (seiten = UEBERSICHT) => STATIONEN.filter(s => seiten[s[0]]).map(([nr, o, name]) => [nr, o, seiten[nr], name]);
module.exports = { orte, wege, stationen, basis: { reise: 'usa', projektion: 'albers', laender: ['USA'], orte } };
