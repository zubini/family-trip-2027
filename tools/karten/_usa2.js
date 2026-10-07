// Orte, Wege und Stationen der Reise Las Vegas – Texas – Florida – New York (data/usa2.js). Der Westen nutzt die Orte aus _usa.js.
const usa = require('./_usa.js');
const orte = Object.assign({}, usa.orte, {
  ABQ: [35.08, -106.65], CAR: [32.42, -104.23], FST: [30.89, -102.88], SAT: [29.42, -98.49], HOU: [29.76, -95.37],
  NOL: [29.95, -90.07], DES: [30.39, -86.50], ORL: [28.54, -81.38], MIA: [25.76, -80.19], HMS: [25.47, -80.48],
  KL: [25.09, -80.44], ISL: [24.92, -80.63], MAR: [24.71, -81.09], KW: [24.555, -81.78], SAG: [29.89, -81.31],
  SAV: [32.08, -81.09], CHS: [32.78, -79.93], WBG: [37.27, -76.71]
});
const weg = titel => usa.wege.find(x => x[1] === titel)[2];
const wege = [
  ['car', 'Las Vegas – Zion', weg('Las Vegas – Zion')],
  ['car', 'Zion – Page', weg('Zion – Page')],
  ['car', 'Page – Grand Canyon', weg('Page – Grand Canyon')],
  ['car', 'Grand Canyon – Monument Valley', weg('Grand Canyon – Monument Valley')],
  ['car', 'Monument Valley – Shiprock – Gallup – Albuquerque', ['MV', [36.92, -109.09], [36.79, -108.69], [35.53, -108.74], [35.10, -107.40], 'ABQ']],
  ['car', 'Albuquerque – Carrizozo – White Sands', ['ABQ', [34.10, -106.90], [33.64, -105.88], [33.07, -106.02], 'WS']],
  ['car', 'White Sands – Cloudcroft – Carlsbad', ['WS', [32.90, -105.96], [32.96, -105.74], [32.84, -104.40], 'CAR']],
  ['car', 'Carlsbad – Fort Stockton', ['CAR', [31.42, -103.49], 'FST']],
  ['car', 'Fort Stockton – San Antonio', ['FST', [30.71, -101.20], [30.57, -100.64], [30.05, -99.20], 'SAT']],
  ['car', 'San Antonio – Houston', ['SAT', [29.70, -96.50], 'HOU']],
  ['car', 'Houston – New Orleans', ['HOU', [30.08, -94.13], [30.23, -93.22], [30.22, -92.02], [30.45, -91.15], 'NOL']],
  ['car', 'New Orleans – Destin', ['NOL', [30.40, -89.00], [30.69, -88.04], [30.42, -87.20], 'DES']],
  ['car', 'Destin – Orlando', ['DES', [30.65, -86.20], [30.70, -85.40], [30.44, -84.28], [30.20, -82.60], [29.65, -82.33], [28.95, -82.00], 'ORL']],
  ['car', 'Orlando – Key Largo (Florida’s Turnpike)', ['ORL', [28.20, -81.10], [27.45, -80.60], [26.70, -80.20], [25.80, -80.42], 'HMS', 'KL']],
  ['car', 'Key Largo – Key West (Overseas Highway)', ['KL', 'ISL', 'MAR', [24.66, -81.38], 'KW']],
  ['car', 'Key West – Miami', ['KW', [24.66, -81.38], 'MAR', 'ISL', 'KL', 'HMS', 'MIA']],
  ['car', 'Miami – St. Augustine', ['MIA', [26.70, -80.10], [27.60, -80.40], [28.40, -80.75], [29.21, -81.05], 'SAG']],
  ['car', 'St. Augustine – Savannah – Charleston', ['SAG', [30.33, -81.66], [31.15, -81.49], 'SAV', [32.45, -80.85], [32.70, -80.40], 'CHS']],
  ['car', 'Charleston – Interstate 95 – Williamsburg', ['CHS', [33.05, -80.45], [34.20, -79.75], [35.50, -78.35], [36.70, -77.55], [37.22, -77.40], 'WBG']],
  ['car', 'Williamsburg – Richmond – Washington', ['WBG', [37.54, -77.44], [38.30, -77.46], 'DC']],
  ['train', 'Washington – New York (Amtrak)', ['DC', [39.29, -76.61], [39.74, -75.55], 'PH', [40.22, -74.76], [40.50, -74.45], [40.73, -74.17], 'NY']]
];
const STATIONEN = [[1, 'LV', 'Las Vegas'], [2, 'ZI', 'Zion'], [3, 'PG', 'Page'], [4, 'GC', 'Grand Canyon'], [5, 'MV', 'Monument Valley'],
  [6, 'ABQ', 'Albuquerque'], [7, 'WS', 'White Sands'], [8, 'CAR', 'Carlsbad'], [9, 'SAT', 'San Antonio'], [10, 'HOU', 'Houston'],
  [11, 'NOL', 'New Orleans'], [12, 'DES', 'Destin'], [13, 'ORL', 'Orlando'], [14, 'KL', 'Key Largo'], [15, 'KW', 'Key West'],
  [16, 'MIA', 'Miami'], [17, 'SAG', 'St. Augustine'], [18, 'CHS', 'Charleston'], [19, 'WBG', 'Williamsburg'], [20, 'DC', 'Washington, D.C.'], [21, 'NY', 'New York']];
const stationen = seiten => STATIONEN.filter(s => seiten[s[0]]).map(([nr, o, name]) => [nr, o, seiten[nr], name]);
module.exports = { orte, wege, stationen, basis: { reise: 'usa2', projektion: 'albers', laender: ['USA'], orte } };
