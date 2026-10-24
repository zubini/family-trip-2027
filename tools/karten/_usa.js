// Gemeinsame Orte, Wege und Stationen für die drei USA-Karten (Dateien mit _ sind keine eigenen Karten).
const orte = {
  LA: [34.02, -118.49], LV: [36.17, -115.14], KAN: [37.05, -112.53], PG: [36.91, -111.46], MV: [36.98, -110.11], ABQ: [35.08, -106.65],
  SF: [35.69, -105.94], WS: [32.82, -106.10], ROS: [33.39, -104.52], CAR: [32.42, -104.23], FST: [30.89, -102.88],
  SAT: [29.42, -98.49], HOU: [29.76, -95.37], NOL: [29.95, -90.07], DES: [30.39, -86.50], ORL: [28.54, -81.38],
  MIA: [25.76, -80.19], DC: [38.91, -77.04], NY: [40.71, -74.01]
};
const wege = [
  ['car', 'Los Angeles – Las Vegas (Interstate 15)', ['LA', [34.07, -117.80], [34.10, -117.43], [34.30, -117.47], [34.90, -117.02], [35.27, -116.07], [35.61, -115.39], 'LV']],
  ['car', 'Las Vegas – Hurricane – Fredonia – Kanab', ['LV', [36.80, -114.07], [37.10, -113.58], [37.17, -113.29], [36.99, -112.98], [36.95, -112.53], 'KAN']],
  ['car', 'Kanab – Page – Monument Valley', ['KAN', [37.00, -112.20], [37.08, -111.66], 'PG', [36.70, -111.20], [36.60, -110.70], [36.71, -110.26], 'MV']],
  ['car', 'Monument Valley – Shiprock – Gallup – Albuquerque', ['MV', [36.60, -109.20], [36.79, -108.69], [35.53, -108.74], [35.20, -107.50], 'ABQ']],
  ['car', 'Albuquerque – Carrizozo – White Sands', ['ABQ', [34.10, -106.90], [33.64, -105.88], [33.07, -106.02], [32.90, -106.00], 'WS']],
  ['car', 'White Sands – Ruidoso – Roswell', ['WS', [33.07, -106.02], [33.33, -105.67], [33.39, -105.27], 'ROS']],
  ['car', 'Roswell – Carlsbad – Pecos – Fort Stockton', ['ROS', [32.84, -104.40], 'CAR', [31.42, -103.49], 'FST']],
  ['car', 'Fort Stockton – San Antonio', ['FST', [30.71, -101.20], [30.57, -100.64], [30.05, -99.20], 'SAT']],
  ['car', 'San Antonio – Houston – New Orleans', ['SAT', [29.70, -96.50], 'HOU', [30.08, -94.13], [30.23, -93.22], [30.22, -92.02], [30.45, -91.15], 'NOL']],
  ['car', 'New Orleans – Destin', ['NOL', [30.40, -89.00], [30.69, -88.04], [30.42, -87.20], 'DES']],
  ['car', 'Destin – Orlando', ['DES', [30.65, -86.20], [30.70, -85.40], [30.44, -84.28], [30.20, -82.60], [29.65, -82.33], [28.95, -82.00], 'ORL']],
  ['car', 'Orlando – Miami (Florida’s Turnpike)', ['ORL', [28.20, -81.10], [27.45, -80.60], [26.70, -80.20], 'MIA']],
  ['air', 'Miami – Washington (Inlandflug)', ['MIA', [30.5, -79.6], [35.0, -78.2], 'DC']],
  ['train', 'Washington – New York (Amtrak)', ['DC', [39.29, -76.61], [39.74, -75.55], [40.22, -74.76], [40.50, -74.45], [40.73, -74.17], 'NY']]
];
const STATIONEN = [[1, 'LA', 'Los Angeles'], [2, 'LV', 'Las Vegas'], [3, 'KAN', 'Kanab'], [4, 'MV', 'Monument Valley'], [5, 'ABQ', 'Albuquerque'], [6, 'WS', 'White Sands'],
  [7, 'SAT', 'San Antonio'], [8, 'NOL', 'New Orleans'], [9, 'DES', 'Destin'], [10, 'ORL', 'Orlando'], [11, 'MIA', 'Miami'],
  [12, 'DC', 'Washington, D.C.'], [13, 'NY', 'New York']];
const stationen = seiten => STATIONEN.filter(s => seiten[s[0]]).map(([nr, o, name]) => [nr, o, seiten[nr], name]);
module.exports = { orte, wege, stationen, basis: { reise: 'usa', projektion: 'albers', laender: ['USA'], orte } };
