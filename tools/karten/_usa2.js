// Orte, Wege und Stationen der Variante Miami–Las Vegas (data/usa2.js). Der Westen nutzt die Orte aus _usa.js.
const usa = require('./_usa.js');
const orte = Object.assign({}, usa.orte, {
  MIA: [25.76, -80.19], HMS: [25.47, -80.48], KL: [25.09, -80.44], ISL: [24.92, -80.63], MAR: [24.71, -81.09], KW: [24.555, -81.78],
  ORL: [28.54, -81.38], DES: [30.39, -86.50], NOL: [29.95, -90.07], HOU: [29.76, -95.37], SAT: [29.42, -98.49], FST: [30.89, -102.88],
  CAR: [32.42, -104.23]
});
// Wege aus _usa.js in umgekehrter Richtung (z.B. Santa Fe – Monument Valley)
const rueck = (titel, neu) => { const w = usa.wege.find(x => x[1] === titel); return ['car', neu, w[2].slice().reverse()]; };
const KEYS = ['MIA', 'HMS', 'KL', 'ISL', 'MAR', [24.66, -81.38], 'KW'];
const wege = [
  ['car', 'Miami – Key West (Overseas Highway)', KEYS],
  ['car', 'Key West – Key Largo', KEYS.slice(2).reverse()],
  ['car', 'Key Largo – Orlando (Florida’s Turnpike)', ['KL', 'HMS', [25.80, -80.42], [26.70, -80.20], [27.45, -80.60], [28.20, -81.10], 'ORL']],
  ['car', 'Orlando – Destin', ['ORL', [28.95, -82.00], [29.65, -82.33], [30.20, -82.60], [30.44, -84.28], [30.70, -85.40], [30.65, -86.20], 'DES']],
  ['car', 'Destin – New Orleans', ['DES', [30.42, -87.20], [30.69, -88.04], [30.40, -89.00], 'NOL']],
  ['car', 'New Orleans – Houston', ['NOL', [30.45, -91.15], [30.22, -92.02], [30.23, -93.22], [30.08, -94.13], 'HOU']],
  ['car', 'Houston – San Antonio', ['HOU', [29.70, -96.50], 'SAT']],
  ['car', 'San Antonio – Fort Stockton', ['SAT', [30.05, -99.20], [30.57, -100.64], [30.71, -101.20], 'FST']],
  ['car', 'Fort Stockton – Carlsbad', ['FST', [31.42, -103.49], 'CAR']],
  ['car', 'Carlsbad – White Sands (über Cloudcroft)', ['CAR', [32.84, -104.40], [32.96, -105.74], [32.90, -105.96], 'WS']],
  rueck('Santa Fe – White Sands', 'White Sands – Santa Fe'),
  rueck('Monument Valley – Santa Fe', 'Santa Fe – Monument Valley'),
  rueck('Grand Canyon – Monument Valley', 'Monument Valley – Grand Canyon'),
  rueck('Page – Grand Canyon', 'Grand Canyon – Page'),
  rueck('Zion – Page', 'Page – Zion'),
  rueck('Las Vegas – Zion', 'Zion – Las Vegas')
];
const STATIONEN = [[1, 'MIA', 'Miami'], [2, 'KW', 'Key West'], [3, 'KL', 'Key Largo'], [4, 'ORL', 'Orlando'], [5, 'DES', 'Destin'],
  [6, 'NOL', 'New Orleans'], [7, 'HOU', 'Houston'], [8, 'SAT', 'San Antonio'], [9, 'CAR', 'Carlsbad'], [10, 'WS', 'White Sands'],
  [11, 'SF', 'Santa Fe'], [12, 'MV', 'Monument Valley'], [13, 'GC', 'Grand Canyon'], [14, 'PG', 'Page'], [15, 'ZI', 'Zion'], [16, 'LV', 'Las Vegas']];
const stationen = seiten => STATIONEN.filter(s => seiten[s[0]]).map(([nr, o, name]) => [nr, o, seiten[nr], name]);
module.exports = { orte, wege, stationen, basis: { reise: 'usa2', projektion: 'albers', laender: ['USA'], orte } };
