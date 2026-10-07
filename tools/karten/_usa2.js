// Orte, Wege und Stationen der Reise Las Vegas – Miami – New York (data/usa2.js). Der Westen nutzt die Orte aus _usa.js.
const usa = require('./_usa.js');
const orte = Object.assign({}, usa.orte, {
  MIA: [25.76, -80.19], HMS: [25.47, -80.48], KL: [25.09, -80.44], ISL: [24.92, -80.63], MAR: [24.71, -81.09], KW: [24.555, -81.78],
  ORL: [28.54, -81.38], SAG: [29.89, -81.31], SAV: [32.08, -81.09], CHS: [32.78, -79.93], AVL: [35.60, -82.55], LUR: [38.66, -78.46]
});
const weg = titel => usa.wege.find(x => x[1] === titel)[2];
const KEYS = ['MIA', 'HMS', 'KL', 'ISL', 'MAR', [24.66, -81.38], 'KW'];
const wege = [
  ['car', 'Las Vegas – Zion', weg('Las Vegas – Zion')],
  ['car', 'Zion – Page', weg('Zion – Page')],
  ['car', 'Page – Kayenta – Monument Valley', ['PG', [36.72, -110.85], [36.73, -110.25], 'MV']],
  ['car', 'Monument Valley – Grand Canyon', weg('Grand Canyon – Monument Valley').slice().reverse()],
  ['car', 'Grand Canyon – Williams – Kingman – Hoover-Staudamm – Las Vegas', ['GC', [35.60, -112.15], [35.25, -112.19], [35.19, -114.05], [36.02, -114.74], 'LV']],
  ['air', 'Las Vegas – Miami (Inlandflug)', ['LV', [32.0, -98.0], 'MIA']],
  ['car', 'Miami – Key West (Overseas Highway)', KEYS],
  ['car', 'Key West – Key Largo', KEYS.slice(2).reverse()],
  ['car', 'Key Largo – Orlando (Florida’s Turnpike)', ['KL', 'HMS', [25.80, -80.42], [26.70, -80.20], [27.45, -80.60], [28.20, -81.10], 'ORL']],
  ['car', 'Orlando – Daytona – St. Augustine', ['ORL', [28.90, -81.20], [29.21, -81.05], 'SAG']],
  ['car', 'St. Augustine – Jacksonville – Savannah', ['SAG', [30.33, -81.66], [31.15, -81.49], 'SAV']],
  ['car', 'Savannah – Charleston', ['SAV', [32.45, -80.85], [32.70, -80.40], 'CHS']],
  ['car', 'Charleston – Columbia – Asheville', ['CHS', [34.00, -81.03], [34.95, -81.93], 'AVL']],
  ['car', 'Asheville – Interstate 81 – Luray', ['AVL', [36.31, -82.35], [36.60, -82.19], [37.27, -79.94], [38.45, -78.87], [38.65, -78.67], 'LUR']],
  ['car', 'Luray – Washington', ['LUR', [38.75, -78.20], [38.88, -77.60], 'DC']],
  ['train', 'Washington – New York (Amtrak)', ['DC', [39.29, -76.61], [39.74, -75.55], 'PH', [40.22, -74.76], [40.50, -74.45], [40.73, -74.17], 'NY']]
];
const STATIONEN = [[1, 'LV', 'Las Vegas'], [2, 'ZI', 'Zion'], [3, 'PG', 'Page'], [4, 'MV', 'Monument Valley'], [5, 'GC', 'Grand Canyon'],
  [6, 'MIA', 'Miami'], [7, 'KW', 'Key West'], [8, 'KL', 'Key Largo'], [9, 'ORL', 'Orlando'], [10, 'SAG', 'St. Augustine'],
  [11, 'SAV', 'Savannah'], [12, 'CHS', 'Charleston'], [13, 'AVL', 'Asheville'], [14, 'LUR', 'Shenandoah'], [15, 'DC', 'Washington, D.C.'], [16, 'NY', 'New York']];
const stationen = seiten => STATIONEN.filter(s => seiten[s[0]]).map(([nr, o, name]) => [nr, o, seiten[nr], name]);
module.exports = { orte, wege, stationen, basis: { reise: 'usa2', projektion: 'albers', laender: ['USA'], orte } };
