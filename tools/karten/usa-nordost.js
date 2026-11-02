// Karte USA Nordost und Kanada: New York – Washington – Chicago – Niagara – Toronto – Montréal – Québec – Boston. Koordinaten als [Breite, Länge].
const orte = {
  NY: [40.71, -74.01], DC: [38.90, -77.04], LUR: [38.67, -78.46], PIT: [40.44, -80.00], SAN: [41.45, -82.71], CHI: [41.88, -87.63],
  DEA: [42.30, -83.23], NIA: [43.09, -79.08], TOR: [43.65, -79.38], ALG: [45.35, -78.85], OTT: [45.42, -75.70], MTL: [45.50, -73.57],
  QUE: [46.81, -71.21], NC: [44.05, -71.13], BOS: [42.36, -71.06]
};
module.exports = {
  reise: 'usanordost', orte, projektion: 'eq', parallel: 43,
  titel: 'Karte der Rundreise von New York mit dem Zug nach Washington und mit dem Mietwagen über Chicago, Niagara, Toronto, Montréal und Québec nach Boston',
  laenge: [-89.5, -67.0], breitengrad: [37.6, 47.6], breite: 1000,
  laender: ['USA', 'CAN'],
  wege: [
    ['train', 'New York – Philadelphia – Washington (Amtrak)', ['NY', [40.22, -74.76], [39.95, -75.17], [39.29, -76.61], 'DC']],
    ['car', 'Washington – Luray', ['DC', [38.85, -77.50], [38.80, -78.10], 'LUR']],
    ['car', 'Luray – Pittsburgh', ['LUR', [39.20, -78.20], [39.65, -78.75], [39.95, -79.40], 'PIT']],
    ['car', 'Pittsburgh – Sandusky', ['PIT', [40.80, -80.60], [41.10, -81.50], [41.35, -82.20], 'SAN']],
    ['car', 'Sandusky – Toledo – Chicago', ['SAN', [41.62, -83.70], [41.67, -85.00], [41.70, -86.25], [41.62, -87.30], 'CHI']],
    ['car', 'Chicago – Kalamazoo – Dearborn', ['CHI', [41.62, -87.30], [41.90, -86.60], [42.29, -85.59], [42.25, -84.40], 'DEA']],
    ['car', 'Dearborn – Windsor – London – Niagara Falls', ['DEA', [42.30, -83.05], [42.40, -82.20], [42.98, -81.25], [43.20, -79.85], 'NIA']],
    ['car', 'Niagara Falls – Toronto', ['NIA', [43.25, -79.75], 'TOR']],
    ['car', 'Toronto – Huntsville – Algonquin', ['TOR', [44.40, -79.65], [45.33, -79.22], 'ALG']],
    ['car', 'Algonquin – Ottawa (Highway 60)', ['ALG', [45.55, -78.25], [45.50, -77.30], 'OTT']],
    ['car', 'Ottawa – Montréal', ['OTT', [45.55, -74.70], 'MTL']],
    ['car', 'Montréal – Québec', ['MTL', [46.05, -72.80], [46.55, -71.80], 'QUE']],
    ['car', 'Québec – Grenze – North Conway', ['QUE', [46.20, -70.90], [45.40, -70.70], [44.70, -71.00], 'NC']],
    ['car', 'North Conway – Boston', ['NC', [43.40, -71.20], [42.80, -71.15], 'BOS']]
  ],
  stationen: [[1, 'NY', 'r'], [2, 'DC', 'r'], [3, 'LUR', 'l'], [4, 'SAN', 'd'], [5, 'CHI', 'l'], [6, 'NIA', 'd'], [7, 'TOR', 'l'],
    [8, 'ALG', 'u'], [9, 'MTL', 'r'], [10, 'QUE', 'r'], [11, 'NC', 'r'], [12, 'BOS', 'r']],
  zwischenstopps: [['Pittsburgh', 'PIT', 0], ['Dearborn', 'DEA', 0], ['Ottawa', 'OTT', 0]],
  beschriftungen: [['Kanada', 46.9, -80.5, 'cn'], ['USA', 39.6, -84.5, 'cn'], ['Atlantik', 39.3, -71.5, 'sea'], ['Michigansee', 43.8, -87.2, 'sea'], ['Eriesee', 42.15, -80.9, 'sea'], ['Ontariosee', 43.6, -77.8, 'sea']],
  hinweise: [['Ankunft aus Zürich ✈', [40.25, -73.6], 'start'], ['Rückflug nach Zürich ✈', [41.75, -70.3], 'middle']]
};
