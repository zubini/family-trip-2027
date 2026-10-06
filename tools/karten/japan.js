// Karte Japan-Rundreise. Koordinaten als [Breite, Länge].
module.exports = {
  reise: 'japan',
  titel: 'Karte der Japan-Rundreise ab Tokio mit Zug- und Fährstrecken',
  projektion: 'eq', parallel: 34, laenge: [129.4, 141.4], breitengrad: [29.9, 37.6], breite: 1000,
  laender: ['JPN'],
  orte: {
    NRT: [35.77, 140.39], TOK: [35.681, 139.767], SJK: [35.69, 139.70], YOK: [35.47, 139.62], NIK: [36.75, 139.60],
    HAK: [35.233, 139.10], ODA: [35.256, 139.155], ATA: [35.10, 139.08], ITO: [34.97, 139.10], SHI: [34.68, 138.94],
    SHZ: [34.97, 138.39], HAM: [34.70, 137.73], NAG: [35.17, 136.88], GIF: [35.41, 136.76], GER: [35.81, 137.24],
    TAK: [36.14, 137.25], MAI: [35.31, 136.29], KYO: [35.00, 135.76], OSA: [34.73, 135.50], KOB: [34.69, 135.20],
    HIM: [34.83, 134.69], OKA: [34.666, 133.918], UNO: [34.49, 133.95], NAO: [34.46, 133.99], FUK: [34.49, 133.36],
    HIR: [34.40, 132.475], MIY: [34.30, 132.32], TOKU: [34.05, 131.81], KOK: [33.886, 130.88], HKT: [33.59, 130.42],
    KUM: [32.79, 130.69], YAT: [32.52, 130.66], KAG: [31.58, 130.54], YAK: [30.40, 130.55]
  },
  wege: [
    ['train', 'Tokio – Nikko', ['TOK', [35.95, 139.75], [36.38, 139.73], 'NIK']],
    ['train', 'Nikko – Tokio – Hakone', ['NIK', [36.38, 139.73], [35.95, 139.75], 'TOK', 'SJK', [35.44, 139.40], 'ODA', 'HAK']],
    ['train', 'Hakone – Nagoya – Takayama', ['HAK', 'ODA', 'ATA', 'SHZ', 'HAM', 'NAG', 'GIF', 'GER', 'TAK']],
    ['train', 'Takayama – Nagoya – Kyoto', ['TAK', 'GER', 'GIF', 'NAG', 'MAI', 'KYO']],
    ['train', 'Kyoto – Osaka', ['KYO', 'OSA']],
    ['train', 'Osaka – Hiroshima', ['OSA', 'KOB', 'HIM', 'OKA', 'FUK', 'HIR']],
    ['ferry', 'Miyajimaguchi – Miyajima', [[34.31, 132.30], 'MIY']],
    ['train', 'Hiroshima – Kagoshima', ['HIR', 'TOKU', 'KOK', 'HKT', 'KUM', 'YAT', 'KAG']],
    ['ferry', 'Kagoshima – Yakushima (hin und zurück)', ['KAG', [31.20, 130.66], [30.80, 130.70], 'YAK']],
    ['train', 'Kagoshima – Okayama', ['KAG', 'YAT', 'KUM', 'HKT', 'KOK', 'TOKU', 'HIR', 'FUK', 'OKA']],
    ['train', 'Okayama – Uno (Ausflug Naoshima)', ['OKA', 'UNO']],
    ['ferry', 'Uno – Naoshima', ['UNO', 'NAO']],
    ['train', 'Okayama – Nagoya – Atami – Shimoda', ['OKA', 'HIM', 'KOB', 'OSA', 'KYO', 'MAI', 'NAG', 'HAM', 'SHZ', 'ATA', 'ITO', 'SHI']],
    ['train', 'Shimoda – Tokio', ['SHI', 'ITO', 'ATA', 'ODA', [35.44, 139.40], 'YOK', 'TOK']]
  ],
  stationen: [
    ['1, 11', 'TOK', 'r', 'Tokio'], [2, 'NIK', 'u'], [3, 'HAK', 'l'], [4, 'TAK', 'u'], [5, 'KYO', 'u'], [6, 'OSA', 'd'],
    [7, 'HIR', 'l', 'Hiroshima'], [8, 'YAK', 'r'], [9, 'OKA', 'u', 'Okayama'], [10, 'SHI', 'd', 'Shimoda']
  ],
  zwischenstopps: [['Kagoshima', 'KAG', 0]],
  umstiege: [['Nagoya', 'NAG', 'r']],
  beschriftungen: [
    ['Japan', 36.6, 138.6, 'cn'],
    ['Japanisches Meer', 37.0, 134.0, 'sea'], ['Pazifik', 32.2, 137.5, 'sea'], ['Ostchinesisches Meer', 30.9, 130.6, 'sea'],
    ['Kyushu', 32.4, 131.3, 'cn'], ['Shikoku', 33.6, 133.4, 'cn']
  ],
  hinweise: [['✈ Ankunft und Rückflug: Narita', [34.75, 140.05], 'middle']]
};
