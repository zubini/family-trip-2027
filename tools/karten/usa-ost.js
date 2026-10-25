// Karte USA Ostküste: Miami – Washington – Niagarafälle – New York, nur Mietwagen. Koordinaten als [Breite, Länge].
const orte = {
  MIA: [25.76, -80.19], KL: [25.09, -80.45], ORL: [28.54, -81.38], SAV: [32.08, -81.09], CHS: [32.78, -79.93],
  OBX: [36.02, -75.67], DC: [38.91, -77.04], HER: [40.29, -76.65], NIA: [43.09, -79.07], FL: [42.38, -76.87], NY: [40.71, -74.01]
};
module.exports = {
  reise: 'usaost',
  titel: 'Karte der Reiseroute mit dem Mietwagen von Miami der Ostküste entlang über Washington und die Niagarafälle nach New York',
  projektion: 'albers', laenge: [-85.5, -70.0], breitengrad: [24.3, 44.2], breite: 1000,
  laender: ['USA'],
  orte,
  wege: [
    ['car', 'Miami – Key Largo', ['MIA', [25.47, -80.48], 'KL']],
    ['car', 'Key Largo – Orlando (Florida’s Turnpike)', ['KL', [25.47, -80.48], [25.80, -80.38], [26.70, -80.20], [27.45, -80.60], [28.20, -81.10], 'ORL']],
    ['car', 'Orlando – Jacksonville – Savannah', ['ORL', [28.90, -81.20], [29.90, -81.31], [30.33, -81.66], [31.15, -81.49], 'SAV']],
    ['car', 'Savannah – Charleston', ['SAV', [32.43, -80.67], 'CHS']],
    ['car', 'Charleston – Wilmington – Outer Banks', ['CHS', [33.69, -78.89], [34.23, -77.94], [35.10, -77.04], [36.30, -76.22], [36.07, -75.79], 'OBX']],
    ['car', 'Outer Banks – Norfolk – Richmond – Washington', ['OBX', [36.25, -75.95], [36.55, -76.20], [36.85, -76.29], [37.27, -76.70], [37.54, -77.43], [38.30, -77.46], 'DC']],
    ['car', 'Washington – Frederick – Hershey', ['DC', [39.41, -77.41], [39.83, -77.23], [40.20, -76.95], 'HER']],
    ['car', 'Hershey – Harrisburg – Rochester – Niagarafälle', ['HER', [40.27, -76.88], [41.24, -77.00], [42.14, -77.05], [42.60, -77.60], [43.10, -77.65], [43.00, -78.40], 'NIA']],
    ['car', 'Niagarafälle – Finger Lakes', ['NIA', [43.00, -78.30], [42.95, -77.60], [42.70, -77.10], 'FL']],
    ['car', 'Finger Lakes – New York', ['FL', [42.09, -76.81], [42.10, -75.91], [41.50, -75.30], [41.10, -74.60], [40.85, -74.25], 'NY']]
  ],
  stationen: [
    [1, 'MIA', 'r'], [2, 'KL', 'l'], [3, 'ORL', 'l'], [4, 'SAV', 'l'], [5, 'CHS', 'r'], [6, 'OBX', 'r'], [7, 'DC', 'l'],
    [8, 'HER', 'l'], [9, 'NIA', 'u'], [10, 'FL', 'r'], [11, 'NY', 'r']
  ],
  beschriftungen: [['Golf von Mexiko', 27.0, -84.5, 'sea'], ['Atlantik', 33.0, -74.5, 'sea'], ['Kanada', 44.0, -79.5, 'cn'], ['USA', 35.0, -82.5, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [25.75, -78.3], 'middle'], ['Rückflug nach Zürich ✈', [41.15, -72.2], 'middle']]
};
