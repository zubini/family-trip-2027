// Gemeinsame Orte, Wege und Stationen für die drei USA-Karten (Dateien mit _ sind keine eigenen Karten).
const orte = {
  MIA: [25.76, -80.19], HMS: [25.47, -80.48], KL: [25.09, -80.44], ISL: [24.92, -80.63], MAR: [24.71, -81.09], KW: [24.555, -81.78],
  ORL: [28.54, -81.38], DES: [30.39, -86.50], NOL: [29.95, -90.07], HOU: [29.76, -95.37], SAT: [29.42, -98.49], FST: [30.89, -102.88],
  CAR: [32.42, -104.23], WS: [32.82, -106.10], SF: [35.69, -105.94], MV: [36.98, -110.11], GC: [36.06, -112.14], PG: [36.91, -111.46],
  ZI: [37.30, -113.03], LV: [36.17, -115.14], DC: [38.91, -77.04], NY: [40.71, -74.01]
};
const wege = [
  ['car', 'Miami – Key Largo', ['MIA', 'HMS', 'KL']],
  ['car', 'Key Largo – Orlando (Florida’s Turnpike)', ['KL', 'HMS', [25.80, -80.42], [26.70, -80.20], [27.45, -80.60], [28.20, -81.10], 'ORL']],
  ['car', 'Orlando – Destin', ['ORL', [28.95, -82.00], [29.65, -82.33], [30.20, -82.60], [30.44, -84.28], [30.70, -85.40], [30.65, -86.20], 'DES']],
  ['car', 'Destin – New Orleans', ['DES', [30.42, -87.20], [30.69, -88.04], [30.40, -89.00], 'NOL']],
  ['car', 'New Orleans – Houston', ['NOL', [30.45, -91.15], [30.22, -92.02], [30.23, -93.22], [30.08, -94.13], 'HOU']],
  ['car', 'Houston – San Antonio', ['HOU', [29.70, -96.50], 'SAT']],
  ['car', 'San Antonio – Fort Stockton', ['SAT', [30.05, -99.20], [30.57, -100.64], [30.71, -101.20], 'FST']],
  ['car', 'Fort Stockton – Carlsbad', ['FST', [31.42, -103.49], 'CAR']],
  ['car', 'Carlsbad – White Sands (über Cloudcroft)', ['CAR', [32.84, -104.40], [32.96, -105.74], [32.90, -105.96], 'WS']],
  ['car', 'White Sands – Santa Fe', ['WS', [32.90, -106.00], [33.07, -106.02], [33.64, -105.88], [34.10, -106.90], [35.08, -106.65], 'SF']],
  ['car', 'Santa Fe – Monument Valley', ['SF', [35.31, -106.55], [36.30, -107.20], [36.73, -108.22], [36.79, -108.69], [36.60, -109.20], 'MV']],
  ['car', 'Monument Valley – Grand Canyon', ['MV', [36.71, -110.26], [36.13, -111.24], [35.88, -111.41], [36.04, -111.83], 'GC']],
  ['car', 'Grand Canyon – Page', ['GC', [36.04, -111.83], [35.88, -111.41], [36.78, -111.58], 'PG']],
  ['car', 'Page – Zion', ['PG', [37.05, -112.53], [37.23, -112.68], 'ZI']],
  ['car', 'Zion – Las Vegas', ['ZI', [37.18, -113.29], [37.10, -113.58], [36.80, -114.07], 'LV']],
  ['air', 'Las Vegas – Washington (Inlandflug)', ['LV', [38.6, -104.0], [39.4, -92.0], [39.3, -84.0], 'DC']],
  ['train', 'Washington – New York (Amtrak)', ['DC', [39.29, -76.61], [39.74, -75.55], [40.22, -74.76], [40.50, -74.45], [40.73, -74.17], 'NY']]
];
const STATIONEN = [[1, 'MIA', 'Miami'], [2, 'KL', 'Key Largo'], [3, 'ORL', 'Orlando'], [4, 'DES', 'Destin'],
  [5, 'NOL', 'New Orleans'], [6, 'HOU', 'Houston'], [7, 'SAT', 'San Antonio'], [8, 'CAR', 'Carlsbad'], [9, 'WS', 'White Sands'],
  [10, 'SF', 'Santa Fe'], [11, 'MV', 'Monument Valley'], [12, 'GC', 'Grand Canyon'], [13, 'PG', 'Page'], [14, 'ZI', 'Zion'], [15, 'LV', 'Las Vegas'],
  [16, 'DC', 'Washington, D.C.'], [17, 'NY', 'New York']];
const stationen = seiten => STATIONEN.filter(s => seiten[s[0]]).map(([nr, o, name]) => [nr, o, seiten[nr], name]);
module.exports = { orte, wege, stationen, basis: { reise: 'usa', projektion: 'albers', laender: ['USA'], orte } };
