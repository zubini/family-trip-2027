// Karte USA Ost: Miami – Washington – Chicago – New York, nur Mietwagen. Koordinaten als [Breite, Länge].
const orte = {
  MIA: [25.76, -80.19], KL: [25.09, -80.45], ORL: [28.54, -81.38], SAV: [32.08, -81.09], CHS: [32.78, -79.93],
  OBX: [36.02, -75.67], DC: [38.91, -77.04], PIT: [40.44, -80.00], CHI: [41.88, -87.63], SAN: [41.45, -82.71],
  NIA: [43.09, -79.07], FL: [42.38, -76.87], NY: [40.71, -74.01]
};
module.exports = {
  reise: 'usaost',
  titel: 'Karte der Reiseroute mit dem Mietwagen von Miami über Washington und Chicago nach New York',
  projektion: 'albers', laenge: [-90.5, -70.5], breitengrad: [24.3, 44.6], breite: 1000,
  laender: ['USA'],
  orte,
  wege: [
    ['car', 'Miami – Key Largo', ['MIA', [25.47, -80.48], 'KL']],
    ['car', 'Key Largo – Orlando (Florida’s Turnpike)', ['KL', [25.47, -80.48], [25.80, -80.38], [26.70, -80.20], [27.45, -80.60], [28.20, -81.10], 'ORL']],
    ['car', 'Orlando – Jacksonville – Savannah', ['ORL', [28.90, -81.20], [29.90, -81.31], [30.33, -81.66], [31.15, -81.49], 'SAV']],
    ['car', 'Savannah – Charleston', ['SAV', [32.43, -80.67], 'CHS']],
    ['car', 'Charleston – Wilmington – Outer Banks', ['CHS', [33.69, -78.89], [34.23, -77.94], [35.10, -77.04], [36.30, -76.22], [36.07, -75.79], 'OBX']],
    ['car', 'Outer Banks – Norfolk – Richmond – Washington', ['OBX', [36.25, -75.95], [36.55, -76.20], [36.85, -76.29], [37.27, -76.70], [37.54, -77.43], [38.30, -77.46], 'DC']],
    ['car', 'Washington – Pittsburgh', ['DC', [39.41, -77.41], [39.65, -77.72], [40.00, -78.24], [40.15, -79.50], 'PIT']],
    ['car', 'Pittsburgh – Toledo – Chicago', ['PIT', [41.10, -80.65], [41.33, -81.95], [41.35, -83.10], [41.60, -83.70], [41.65, -85.00], [41.68, -86.25], [41.60, -87.30], 'CHI']],
    ['car', 'Chicago – Sandusky', ['CHI', [41.62, -87.30], [41.70, -86.25], [41.67, -85.00], [41.62, -83.70], [41.40, -83.10], 'SAN']],
    ['car', 'Sandusky – Cleveland – Erie – Niagarafälle', ['SAN', [41.48, -81.69], [41.90, -80.80], [42.13, -80.09], [42.50, -79.30], [42.89, -78.88], 'NIA']],
    ['car', 'Niagarafälle – Finger Lakes', ['NIA', [43.00, -78.30], [42.95, -77.60], [42.70, -77.10], 'FL']],
    ['car', 'Finger Lakes – New York', ['FL', [42.09, -76.81], [42.10, -75.91], [41.50, -75.30], [41.10, -74.60], [40.85, -74.25], 'NY']]
  ],
  stationen: [
    [1, 'MIA', 'r'], [2, 'KL', 'l'], [3, 'ORL', 'l'], [4, 'SAV', 'l'], [5, 'CHS', 'r'], [6, 'OBX', 'r'], [7, 'DC', 'r'],
    [8, 'PIT', 'd'], [9, 'CHI', 'l'], [10, 'SAN', 'd'], [11, 'NIA', 'u'], [12, 'FL', 'r'], [13, 'NY', 'r']
  ],
  beschriftungen: [['Golf von Mexiko', 27.0, -86.5, 'sea'], ['Atlantik', 33.0, -74.5, 'sea'], ['Kanada', 44.2, -80.5, 'cn'], ['USA', 35.0, -85.5, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [25.75, -78.3], 'middle'], ['Rückflug nach Zürich ✈', [41.15, -72.2], 'middle']]
};
