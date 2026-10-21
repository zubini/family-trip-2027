// Karte der USA-Variante New York – Florida.
module.exports = {
  reise: 'usa2',
  titel: 'Karte der Reiseroute von New York über Washington, die Smokies, New Orleans und Houston nach Florida',
  projektion: 'albers', laender: ['USA'],
  laenge: [-97.0, -71.0], breitengrad: [24.3, 41.6], breite: 1000,
  orte: {
    NY: [40.71, -74.01], DC: [38.91, -77.04], LUR: [38.67, -78.46], GAT: [35.71, -83.51], BHM: [33.52, -86.80], NOL: [29.95, -90.07],
    HOU: [29.76, -95.37], LAF: [30.22, -92.02], DES: [30.39, -86.50], ORL: [28.54, -81.38], SIK: [27.27, -82.55], NAP: [26.14, -81.79], HMS: [25.47, -80.48],
    KL: [25.09, -80.44], MIA: [25.76, -80.19]
  },
  wege: [
    ['train', 'New York – Washington (Amtrak)', ['NY', [40.73, -74.17], [40.50, -74.45], [40.22, -74.76], [39.74, -75.55], [39.29, -76.61], 'DC']],
    ['car', 'Washington – Luray', ['DC', [38.88, -77.60], [38.70, -78.17], 'LUR']],
    ['car', 'Luray – Interstate 81 – Gatlinburg', ['LUR', [38.45, -78.87], [38.15, -79.07], [37.27, -79.94], [37.10, -81.10], [36.60, -82.20], [36.10, -83.30], [35.87, -83.56], 'GAT']],
    ['car', 'Gatlinburg – Chattanooga – Birmingham', ['GAT', [35.96, -83.92], [35.05, -85.31], [34.50, -85.90], 'BHM']],
    ['car', 'Birmingham – New Orleans', ['BHM', [33.20, -87.55], [32.35, -88.70], [31.30, -89.30], [30.40, -89.80], 'NOL']],
    ['car', 'New Orleans – Houston', ['NOL', [30.45, -91.15], 'LAF', [30.23, -93.22], [30.08, -94.13], 'HOU']],
    ['car', 'Houston – Lafayette', ['HOU', [30.08, -94.13], [30.23, -93.22], 'LAF']],
    ['car', 'Lafayette – Baton Rouge – Mobile – Destin', ['LAF', [30.45, -91.15], [30.40, -89.80], [30.69, -88.04], [30.42, -87.20], 'DES']],
    ['car', 'Destin – Orlando', ['DES', [30.65, -86.20], [30.70, -85.40], [30.44, -84.28], [30.20, -82.60], [29.65, -82.33], [28.95, -82.00], 'ORL']],
    ['car', 'Orlando – Siesta Key', ['ORL', [28.05, -82.00], [27.95, -82.40], [27.40, -82.45], 'SIK']],
    ['car', 'Siesta Key – Alligator Alley – Key Largo', ['SIK', [26.65, -81.85], 'NAP', [26.15, -81.00], [26.10, -80.40], [25.60, -80.45], 'HMS', 'KL']],
    ['car', 'Key Largo – Miami', ['KL', 'HMS', 'MIA']]
  ],
  stationen: [[1, 'NY', 'r'], [2, 'DC', 'r'], [3, 'LUR', 'l', 'Shenandoah'], [4, 'GAT', 'l', 'Smoky Mountains'], [5, 'NOL', 'd'], [6, 'HOU', 'd'],
    [7, 'DES', 'u'], [8, 'ORL', 'r'], [9, 'SIK', 'l', 'Siesta Key'], [10, 'KL', 'l', 'Key Largo'], [11, 'MIA', 'r']],
  zwischenstopps: [['Birmingham', 'BHM', 0], ['Lafayette', 'LAF', 14]],
  beschriftungen: [['Atlantik', 33.0, -75.5, 'sea'], ['Golf von Mexiko', 27.0, -89.0, 'sea']],
  hinweise: [['Ankunft aus Zürich ✈', [41.25, -73.4], 'middle'], ['Rückflug nach Zürich ✈', [26.2, -79.5], 'middle']]
};
