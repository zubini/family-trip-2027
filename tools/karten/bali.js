// Karte Singapur–Bali. Koordinaten als [Breite, Länge].
module.exports = {
  reise: 'bali',
  titel: 'Karte der Reiseroute von Singapur über Malaysia und Java nach Bali',
  projektion: 'eq', laenge: [98.0, 118.6], breitengrad: [-10.6, 4.8], breite: 1000,
  laender: ['SGP', 'MYS', 'IDN'],
  orte: {
    SG: [1.3521, 103.8198], MS: [2.4330, 103.8400], TI: [2.8200, 104.1700], KL: [3.1390, 101.6869],
    JK: [-6.2000, 106.8500], YO: [-7.7900, 110.3600], MA: [-7.9800, 112.6300], BA: [-8.2200, 114.3700],
    GI: [-8.1700, 114.4400], UB: [-8.5100, 115.2600], SN: [-8.6900, 115.2600], PN: [-8.7300, 115.5400], UL: [-8.8300, 115.0900]
  },
  wege: [
    ['bus', 'Singapur – Mersing', ['SG', [1.46, 103.76], [1.73, 103.90], [2.20, 103.88], 'MS']],
    ['ferry', 'Mersing – Pulau Tioman', ['MS', [2.58, 104.02], 'TI']],
    ['bus', 'Mersing – Kuala Lumpur', ['MS', [2.03, 103.32], [2.51, 102.82], [2.47, 102.23], [2.72, 101.94], 'KL']],
    ['air', 'Kuala Lumpur – Jakarta', ['KL', [-1.5, 104.5], 'JK']],
    ['train', 'Jakarta – Yogyakarta', ['JK', [-6.5, 107.7], [-6.71, 108.56], [-7.42, 109.24], [-7.70, 109.90], 'YO']],
    ['train', 'Yogyakarta – Malang', ['YO', [-7.57, 110.82], [-7.62, 111.52], [-7.70, 112.00], 'MA']],
    ['bus', 'Malang – Banyuwangi', ['MA', [-7.95, 113.20], [-8.07, 113.70], [-8.10, 114.10], 'BA']],
    ['ferry', 'Ketapang – Gilimanuk', ['BA', [-8.21, 114.39], 'GI']],
    ['bus', 'Gilimanuk – Ubud', ['GI', [-8.36, 114.62], [-8.46, 114.90], [-8.50, 115.12], 'UB']],
    ['bus', 'Ubud – Sanur', ['UB', 'SN']],
    ['ferry', 'Sanur – Nusa Penida', ['SN', [-8.73, 115.45], 'PN']],
    ['bus', 'Sanur – Uluwatu', ['SN', [-8.78, 115.19], 'UL']]
  ],
  stationen: [
    [1, 'SG', 'r'], [2, 'TI', 'r'], [3, 'KL', 'l'], [4, 'JK', 'u'], [5, 'YO', 'd'], [6, 'MA', 'd'], [7, 'BA', 'u'],
    ['8–10', [-8.62, 115.30], 'd', 'Ubud, Nusa Penida, Uluwatu']
  ],
  umstiege: [['Mersing', 'MS', 'l']],
  beschriftungen: [
    ['Sumatra', -1.9, 102.3, 'cn'], ['Java', -7.1, 108.2, 'cn'], ['Borneo', 0.3, 112.5, 'cn'], ['Malaysia', 4.6, 102.0, 'cn'],
    ['Javasee', -4.7, 110.3, 'sea'], ['Indischer Ozean', -9.2, 106.4, 'sea'], ['Strasse von Malakka', 2.9, 100.0, 'sea', -40],
    ['Südchinesisches Meer', 5.0, 106.4, 'sea']
  ],
  hinweise: [['Ankunft aus Zürich ✈', [1.0, 103.9], 'start'], ['Rückflug nach Zürich ✈', [-10.0, 115.3], 'middle']]
};
