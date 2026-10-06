// Karte Singapur–Bangkok. Koordinaten als [Breite, Länge].
module.exports = {
  reise: 'asien',
  titel: 'Karte der Reiseroute von Singapur nach Bangkok mit Bus-, Zug- und Fährstrecken',
  projektion: 'eq', laenge: [96.9, 105.8], breitengrad: [0.55, 14.35], breite: 712,
  laender: ['SGP', 'MYS', 'THA'],
  orte: {
    SG: [1.3521, 103.8198], MS: [2.4330, 103.8400], TI: [2.8200, 104.1700], KL: [3.1390, 101.6869],
    KB: [5.8310, 102.5600], PER: [5.9100, 102.7400], GT: [5.4164, 100.3327], BW: [5.3990, 100.3638],
    AR: [6.4330, 100.2770], PB: [6.6620, 100.3170], HY: [7.0035, 100.4750], NST: [8.4300, 99.9600],
    KH: [9.2350, 99.8590], DS: [9.3300, 99.7200], SMP: [9.5320, 99.9330], SM: [9.5120, 100.0136],
    MN: [9.5720, 100.0010], TS: [9.7100, 99.9850], TAO: [10.0870, 99.8270], CPP: [10.4290, 99.2640],
    CPS: [10.4980, 99.1800], HH: [12.5684, 99.9577], BK: [13.7563, 100.5018]
  },
  wege: [
    ['bus', 'Singapur – Mersing', ['SG', [1.46, 103.76], [1.73, 103.90], [2.20, 103.88], 'MS']],
    ['ferry', 'Mersing – Pulau Tioman', ['MS', [2.58, 104.02], 'TI']],
    ['bus', 'Mersing – Kuala Lumpur', ['MS', [2.03, 103.32], [2.51, 102.82], [2.47, 102.23], [2.72, 101.94], 'KL']],
    ['bus', 'Kuala Lumpur – Kuala Besut', ['KL', [3.25, 101.75], [3.52, 101.91], [3.79, 101.86], [4.18, 102.05], [4.88, 101.97], [5.53, 102.20], [5.77, 102.22], [5.74, 102.49], 'KB']],
    ['ferry', 'Kuala Besut – Perhentian Islands', ['KB', [5.87, 102.65], 'PER']],
    ['bus', 'Kuala Besut – Penang (über Jeli und Gerik)', ['KB', [5.74, 102.49], [5.80, 102.15], [5.70, 101.84], [5.43, 101.13], [5.68, 100.92], [5.36, 100.56], [5.35, 100.42], [5.355, 100.33], 'GT']],
    ['ferry', 'George Town – Butterworth', ['GT', 'BW']],
    ['train', 'Butterworth – Padang Besar', ['BW', [5.647, 100.487], [5.816, 100.472], [6.121, 100.368], [6.18, 100.37], 'AR', [6.55, 100.30], 'PB']],
    ['train', 'Padang Besar – Hat Yai', ['PB', [6.72, 100.42], [6.85, 100.45], 'HY']],
    ['bus', 'Hat Yai – Nakhon Si Thammarat – Khanom', ['HY', [7.20, 100.30], [7.62, 100.07], [7.90, 100.02], [8.16, 99.98], 'NST', [8.80, 99.92], [9.05, 99.88], 'KH']],
    ['bus', 'Khanom – Donsak', ['KH', [9.29, 99.80], 'DS']],
    ['ferry', 'Donsak – Koh Samui', ['DS', [9.40, 99.80], [9.48, 99.88], 'SMP']],
    ['bus', 'Inselstrasse Koh Samui', ['SMP', [9.51, 99.96], 'SM', [9.55, 100.005], 'MN']],
    ['ferry', 'Koh Samui – Koh Tao (über Koh Phangan)', ['MN', [9.65, 99.97], 'TS', [9.80, 99.95], [9.95, 99.88], 'TAO']],
    ['ferry', 'Koh Tao – Chumphon', ['TAO', [10.18, 99.65], [10.32, 99.43], 'CPP']],
    ['bus', 'Hafen – Bahnhof Chumphon', ['CPP', [10.47, 99.22], 'CPS']],
    ['train', 'Chumphon – Hua Hin', ['CPS', [10.72, 99.30], [11.00, 99.44], [11.21, 99.51], [11.50, 99.64], [11.812, 99.797], [12.07, 99.86], [12.38, 99.91], 'HH']],
    ['train', 'Hua Hin – Bangkok', ['HH', [12.80, 99.96], [13.111, 99.944], [13.536, 99.817], [13.8199, 100.062], [13.80, 100.30], 'BK']]
  ],
  stationen: [
    [1, 'SG', 'r'], [2, 'TI', 'r'], [3, 'KL', 'l'], [4, 'PER', 'r'], [5, 'GT', 'l'], [6, 'KH', 'r'],
    [7, 'SM', 'r'], [8, 'TAO', 'r'], [9, 'HH', 'r'], [10, 'BK', 'r']
  ],
  zwischenstopps: [['Kuala Besut', 'KB', 14], ['Hat Yai', 'HY', 0]],
  umstiege: [['Mersing', 'MS', 'l']],
  beschriftungen: [
    ['Malaysia', 4.2, 101.35, 'cn'], ['Thailand', 13.2, 99.25, 'cn'], ['Indonesien', 1.2, 100.6, 'cn'],
    ['Golf von Thailand', 11.2, 101.6, 'sea'], ['Andamanensee', 7.6, 97.75, 'sea'],
    ['Strasse von Malakka', 4.0, 99.75, 'sea', -55], ['Südchinesisches Meer', 5.2, 104.7, 'sea']
  ],
  hinweise: [['Ankunft aus Zürich ✈', 'SG', 'end', -16, 24], ['Rückflug nach Zürich ✈', 'BK', 'end', -16, -14]]
};
