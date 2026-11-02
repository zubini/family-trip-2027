// Karte Singapur–Bangkok. Koordinaten als [Breite, Länge].
module.exports = {
  reise: 'asien',
  titel: 'Karte der Reiseroute von Singapur nach Bangkok mit Bus-, Zug- und Fährstrecken',
  projektion: 'eq', laenge: [96.9, 105.8], breitengrad: [0.55, 14.35], breite: 712,
  laender: ['SGP', 'MYS', 'THA'],
  orte: {
    SG: [1.3521, 103.8198], MS: [2.4330, 103.8400], TI: [2.8200, 104.1700], PB: [2.4950, 104.0900], CH: [4.4700, 101.3800], KS: [8.9200, 98.5300], RP: [8.9700, 98.8100], CL: [9.0000, 98.6600], IP: [4.6000, 101.0900], CHE: [4.1300, 103.3900], KL: [3.1390, 101.6869], ML: [2.1960, 102.2480], KTH: [4.3800, 102.4000], SK: [7.2000, 100.5900], KPL: [6.4000, 100.1300], KUAH: [6.3200, 99.8500], LGK: [6.2900, 99.7300], ST: [6.5300, 100.0700], KTG: [5.3300, 103.1400],
    KB: [5.8310, 102.5600], PER: [5.9100, 102.7400], GT: [5.4164, 100.3327], BW: [5.3990, 100.3638],
    AR: [6.4330, 100.2770], PBS: [6.6620, 100.3170], HY: [7.0035, 100.4750], NST: [8.4300, 99.9600],
    KH: [9.2350, 99.8590], DS: [9.3300, 99.7200], SMP: [9.5320, 99.9330], SM: [9.5120, 100.0136],
    MN: [9.5720, 100.0010], TS: [9.7100, 99.9850], TAO: [10.0870, 99.8270], CPP: [10.4290, 99.2640],
    CPS: [10.4980, 99.1800], HH: [12.5684, 99.9577], BK: [13.7563, 100.5018]
  },
  wege: [
    ['bus', 'Singapur – Mersing', ['SG', [1.46, 103.76], [1.73, 103.90], [2.20, 103.88], 'MS']],
    ['ferry', 'Mersing – Pulau Tengah', ['MS', [2.47, 103.96], 'PB']],
    ['bus', 'Mersing – Kluang (Taxi)', ['MS', [2.20, 103.55], [2.03, 103.32]]],
    ['train', 'Kluang – Segamat – Gemas – Kuala Lumpur (ETS)', [[2.03, 103.32], [2.50, 102.82], [2.58, 102.61], [2.72, 101.94], 'KL']],
    ['bus', 'Kuala Lumpur – Tapah – Cameron Highlands', ['KL', [3.60, 101.50], [4.10, 101.25], [4.20, 101.27], [4.38, 101.35], 'CH']],
    ['bus', 'Cameron Highlands – Ipoh', ['CH', [4.52, 101.25], 'IP']],
    ['train', 'Ipoh – Padang Besar – Hat Yai (ETS)', ['IP', [4.85, 100.74], [5.36, 100.46], [5.65, 100.49], [6.121, 100.368], [6.18, 100.37], 'AR', [6.55, 100.30], 'PBS', [6.72, 100.42], [6.85, 100.45], 'HY']],
    ['bus', 'Hat Yai – Songkhla (Taxi)', ['HY', 'SK']],
    ['bus', 'Songkhla – Thung Song – Khao Sok (privater Transfer)', ['SK', [7.45, 100.30], [7.62, 100.07], [8.16, 99.68], [8.55, 99.20], [8.85, 98.82], 'KS']],
    ['bus', 'Khao Sok – Pier Ratchaprapha', ['KS', [8.95, 98.70], 'RP']],
    ['ferry', 'Cheow-Lan-See (Longtail-Boot)', ['RP', [9.02, 98.74], 'CL']],
    ['bus', 'Pier Ratchaprapha – Surat Thani – Donsak', ['RP', [9.05, 99.10], [9.13, 99.33], 'DS']],
    ['ferry', 'Donsak – Koh Samui', ['DS', [9.40, 99.80], [9.48, 99.88], 'SMP']],
    ['bus', 'Inselstrasse Koh Samui', ['SMP', [9.51, 99.96], 'SM', [9.55, 100.005], 'MN']],
    ['ferry', 'Koh Samui – Koh Tao (über Koh Phangan)', ['MN', [9.65, 99.97], 'TS', [9.80, 99.95], [9.95, 99.88], 'TAO']],
    ['ferry', 'Koh Tao – Chumphon', ['TAO', [10.18, 99.65], [10.32, 99.43], 'CPP']],
    ['bus', 'Hafen – Bahnhof Chumphon', ['CPP', [10.47, 99.22], 'CPS']],
    ['train', 'Chumphon – Hua Hin', ['CPS', [10.72, 99.30], [11.00, 99.44], [11.21, 99.51], [11.50, 99.64], [11.812, 99.797], [12.07, 99.86], [12.38, 99.91], 'HH']],
    ['train', 'Hua Hin – Bangkok', ['HH', [12.80, 99.96], [13.111, 99.944], [13.536, 99.817], [13.8199, 100.062], [13.80, 100.30], 'BK']]
  ],
  stationen: [
    [1, 'SG', 'r'], [2, 'PB', 'r'], [3, 'KL', 'l'], [4, 'CH', 'r'], [5, 'SK', 'r'],
    [6, 'KS', 'l', 'Khao Sok'], [7, 'SM', 'r'], [8, 'TAO', 'r'], [9, 'HH', 'r'], [10, 'BK', 'r']
  ],
  zwischenstopps: [['Ipoh', 'IP', -16]],
  umstiege: [['Mersing', 'MS', 'l'], ['Padang Besar', 'PBS', 'l'], ['Hat Yai', 'HY', 'l'], ['Cheow-Lan-See', 'CL', 'r']],
  beschriftungen: [
    ['Malaysia', 3.5, 103.0, 'cn'], ['Thailand', 13.2, 99.25, 'cn'], ['Indonesien', 1.2, 100.6, 'cn'],
    ['Golf von Thailand', 11.2, 101.6, 'sea'], ['Andamanensee', 7.6, 97.75, 'sea'],
    ['Strasse von Malakka', 4.0, 99.75, 'sea', -55], ['Südchinesisches Meer', 5.2, 104.7, 'sea']
  ],
  hinweise: [['Ankunft aus Zürich ✈', 'SG', 'end', -16, 24], ['Rückflug nach Zürich ✈', 'BK', 'end', -16, -14]]
};
