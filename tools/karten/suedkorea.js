// Karte Südkorea: Seoul, Ostküste, Gyeongju, Busan, Tongyeong und Jeju. Koordinaten als [Breite, Länge].
const orte = {
  SEL: [37.57, 126.98], SEL2: [37.47, 127.19], ICN: [37.46, 126.44], GMP: [37.56, 126.80], SOK: [38.20, 128.59], GAN: [37.75, 128.90],
  GYE: [35.84, 129.21], BUS: [35.16, 129.16], PUS: [35.18, 128.94], TON: [34.85, 128.43],
  CJU: [33.51, 126.49], HYE: [33.39, 126.24], SGP: [33.25, 126.56]
};
module.exports = {
  reise: 'suedkorea', orte,
  titel: 'Karte der Reiseroute von Seoul über die Berge an die Ostküste, der Küste entlang nach Busan und Tongyeong, mit dem Flugzeug nach Jeju und zurück nach Seoul',
  projektion: 'eq', parallel: 36, laenge: [124.9, 130.4], breitengrad: [32.85, 38.75], breite: 560,
  laender: ['KOR'],
  wege: [
    ['train', 'Flughafen Incheon – Seoul (AREX)', ['ICN', 'SEL']],
    ['bus', 'Seoul – Chuncheon – Yangyang – Sokcho', ['SEL', [37.70, 127.35], [37.88, 127.73], [38.03, 128.20], [38.08, 128.60], 'SOK']],
    ['bus', 'Sokcho – Gangneung (der Küste entlang)', ['SOK', [38.07, 128.64], [37.90, 128.82], 'GAN']],
    ['train', 'Gangneung – Samcheok – Uljin – Pohang – Gyeongju (Donghae-Linie)', ['GAN', [37.52, 129.11], [37.44, 129.17], [36.99, 129.40], [36.41, 129.37], [36.03, 129.36], 'GYE']],
    ['train', 'Gyeongju – Ulsan – Busan', ['GYE', [35.54, 129.31], 'BUS']],
    ['bus', 'Busan – Geoje – Tongyeong', ['BUS', [35.10, 128.95], [35.03, 128.70], [34.90, 128.60], 'TON']],
    ['bus', 'Tongyeong – Changwon – Flughafen Busan-Gimhae', ['TON', [34.98, 128.33], [35.22, 128.62], 'PUS']],
    ['air', 'Busan – Jeju', ['PUS', 'CJU']],
    ['car', 'Flughafen Jeju – Westküste – Seogwipo – Flughafen Jeju', ['CJU', [33.46, 126.33], 'HYE', [33.29, 126.30], 'SGP', [33.40, 126.62], 'CJU']],
    ['air', 'Jeju – Seoul-Gimpo', ['CJU', 'GMP']],
    ['car', 'Gimpo – Jamsil', ['GMP', 'SEL2']]
  ],
  stationen: [[1, 'SEL', 'u'], [2, 'SOK', 'r'], [3, 'GAN', 'r'], [4, 'GYE', 'r'], [5, 'BUS', 'r'], [6, 'TON', 'd'], [7, 'HYE', 'l'], [8, 'SGP', 'r'], [9, 'SEL2', 'r']],
  beschriftungen: [['Südkorea', 36.6, 127.9, 'cn'], ['Nordkorea', 38.6, 126.2, 'cn'], ['Japanisches Meer', 37.0, 130.0, 'sea', 70], ['Gelbes Meer', 35.6, 125.6, 'sea'], ['Jeju', 33.0, 126.45, 'cn']],
  hinweise: [['Ankunft aus Zürich ✈', [37.28, 126.35], 'end'], ['Rückflug nach Zürich ✈', [37.62, 126.35], 'end']]
};
