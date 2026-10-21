// Gemeinsame Orte, Wege und Stationen für die drei USA-Karten (Dateien mit _ sind keine eigenen Karten).
const orte = {
  LV: [36.17, -115.14], ZI: [37.30, -113.03], PG: [36.91, -111.46], GC: [36.06, -112.14], MV: [36.98, -110.11],
  SF: [35.69, -105.94], WS: [32.82, -106.10], CAR: [32.42, -104.23], FST: [30.89, -102.88], SAT: [29.42, -98.49],
  HOU: [29.76, -95.37], NOL: [29.95, -90.07], DES: [30.39, -86.50], ATL: [33.75, -84.39], GAT: [35.71, -83.51],
  LUR: [38.67, -78.46], DC: [38.91, -77.04], NY: [40.71, -74.01]
};
const wege = [
  ['car', 'Las Vegas – Zion', ['LV', [36.80, -114.07], [37.10, -113.58], [37.18, -113.29], 'ZI']],
  ['car', 'Zion – Page', ['ZI', [37.23, -112.68], [37.05, -112.53], 'PG']],
  ['car', 'Page – Grand Canyon', ['PG', [36.78, -111.58], [35.88, -111.41], [36.04, -111.83], 'GC']],
  ['car', 'Grand Canyon – Monument Valley', ['GC', [36.04, -111.83], [35.88, -111.41], [36.13, -111.24], [36.71, -110.26], 'MV']],
  ['car', 'Monument Valley – Santa Fe', ['MV', [36.60, -109.20], [36.79, -108.69], [36.73, -108.22], [36.30, -107.20], [35.31, -106.55], 'SF']],
  ['car', 'Santa Fe – White Sands', ['SF', [35.08, -106.65], [34.10, -106.90], [33.64, -105.88], [33.07, -106.02], [32.90, -106.00], 'WS']],
  ['car', 'White Sands – Carlsbad (über Cloudcroft)', ['WS', [32.90, -105.96], [32.96, -105.74], [32.84, -104.40], 'CAR']],
  ['car', 'Carlsbad – Fort Stockton', ['CAR', [31.42, -103.49], 'FST']],
  ['car', 'Fort Stockton – San Antonio', ['FST', [30.71, -101.20], [30.57, -100.64], [30.05, -99.20], 'SAT']],
  ['car', 'San Antonio – Houston', ['SAT', [29.70, -96.50], 'HOU']],
  ['car', 'Houston – New Orleans', ['HOU', [30.08, -94.13], [30.23, -93.22], [30.22, -92.02], [30.45, -91.15], 'NOL']],
  ['car', 'New Orleans – Destin', ['NOL', [30.40, -89.00], [30.69, -88.04], [30.42, -87.20], 'DES']],
  ['car', 'Destin – Montgomery – Atlanta', ['DES', [30.75, -86.57], [31.30, -86.30], [32.38, -86.30], [32.60, -85.50], [33.00, -84.90], 'ATL']],
  ['car', 'Atlanta – Chattanooga – Knoxville – Gatlinburg', ['ATL', [34.50, -84.90], [35.05, -85.31], [35.60, -84.50], [35.96, -83.92], [35.87, -83.56], 'GAT']],
  ['car', 'Gatlinburg – Interstate 81 – Luray', ['GAT', [35.87, -83.56], [36.10, -83.30], [36.60, -82.20], [37.10, -81.10], [37.27, -79.94], [38.15, -79.07], [38.45, -78.87], 'LUR']],
  ['car', 'Luray – Washington', ['LUR', [38.70, -78.17], [38.88, -77.60], 'DC']],
  ['train', 'Washington – New York (Amtrak)', ['DC', [39.29, -76.61], [39.74, -75.55], [40.22, -74.76], [40.50, -74.45], [40.73, -74.17], 'NY']]
];
const STATIONEN = [[1, 'LV', 'Las Vegas'], [2, 'ZI', 'Zion'], [3, 'PG', 'Page'], [4, 'GC', 'Grand Canyon'], [5, 'MV', 'Monument Valley'],
  [6, 'SF', 'Santa Fe'], [7, 'WS', 'White Sands'], [8, 'CAR', 'Carlsbad'], [9, 'SAT', 'San Antonio'], [10, 'HOU', 'Houston'],
  [11, 'NOL', 'New Orleans'], [12, 'DES', 'Destin'], [13, 'ATL', 'Atlanta'], [14, 'GAT', 'Smoky Mountains'], [15, 'LUR', 'Shenandoah'],
  [16, 'DC', 'Washington, D.C.'], [17, 'NY', 'New York']];
const stationen = seiten => STATIONEN.filter(s => seiten[s[0]]).map(([nr, o, name]) => [nr, o, seiten[nr], name]);
module.exports = { orte, wege, stationen, basis: { reise: 'usa', projektion: 'albers', laender: ['USA'], orte } };
