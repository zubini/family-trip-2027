// Karte der USA-Variante New York – Florida.
module.exports = {
  reise: 'usa2',
  titel: 'Karte der Reiseroute von New York über Washington, die Smokies und Charleston nach Florida',
  projektion: 'albers', laender: ['USA'],
  laenge: [-88.5, -70.5], breitengrad: [24.3, 41.6], breite: 1000,
  orte: {
    NY: [40.71, -74.01], DC: [38.91, -77.04], LUR: [38.67, -78.46], GAT: [35.71, -83.51], ASH: [35.60, -82.55], CHS: [32.78, -79.93],
    SAV: [32.08, -81.09], STA: [29.90, -81.31], ORL: [28.54, -81.38], SIK: [27.27, -82.55], NAP: [26.14, -81.79], HMS: [25.47, -80.48],
    KL: [25.09, -80.44], MIA: [25.76, -80.19]
  },
  wege: [
    ['train', 'New York – Washington (Amtrak)', ['NY', [40.73, -74.17], [40.50, -74.45], [40.22, -74.76], [39.74, -75.55], [39.29, -76.61], 'DC']],
    ['car', 'Washington – Luray', ['DC', [38.88, -77.60], [38.70, -78.17], 'LUR']],
    ['car', 'Luray – Interstate 81 – Gatlinburg', ['LUR', [38.45, -78.87], [38.15, -79.07], [37.27, -79.94], [37.10, -81.10], [36.60, -82.20], [36.10, -83.30], [35.87, -83.56], 'GAT']],
    ['car', 'Gatlinburg – Asheville – Charleston', ['GAT', [35.75, -83.10], 'ASH', [35.20, -82.20], [34.95, -81.93], [34.00, -81.03], [33.20, -80.30], 'CHS']],
    ['car', 'Charleston – Savannah', ['CHS', [32.70, -80.40], [32.45, -80.80], 'SAV']],
    ['car', 'Savannah – St. Augustine', ['SAV', [31.15, -81.50], [30.33, -81.66], 'STA']],
    ['car', 'St. Augustine – Orlando', ['STA', [29.20, -81.05], [28.80, -81.30], 'ORL']],
    ['car', 'Orlando – Siesta Key', ['ORL', [28.05, -82.00], [27.95, -82.40], [27.40, -82.45], 'SIK']],
    ['car', 'Siesta Key – Alligator Alley – Key Largo', ['SIK', [26.65, -81.85], 'NAP', [26.15, -81.00], [26.10, -80.40], [25.60, -80.45], 'HMS', 'KL']],
    ['car', 'Key Largo – Miami', ['KL', 'HMS', 'MIA']]
  ],
  stationen: [[1, 'NY', 'r'], [2, 'DC', 'r'], [3, 'LUR', 'l', 'Shenandoah'], [4, 'GAT', 'l', 'Smoky Mountains'], [5, 'CHS', 'r'], [6, 'SAV', 'r'],
    [7, 'STA', 'r'], [8, 'ORL', 'r'], [9, 'SIK', 'l', 'Siesta Key'], [10, 'KL', 'l', 'Key Largo'], [11, 'MIA', 'r']],
  beschriftungen: [['Atlantik', 33.0, -75.5, 'sea'], ['Golf von Mexiko', 27.0, -86.0, 'sea']],
  hinweise: [['Ankunft aus Zürich ✈', [41.25, -73.4], 'middle'], ['Rückflug nach Zürich ✈', [26.2, -79.5], 'middle']]
};
