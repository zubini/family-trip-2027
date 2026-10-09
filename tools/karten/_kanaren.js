// Orte der Kanarischen Inseln für data/kanaren.js und data/kanaren2.js. Koordinaten als [Breite, Länge].
const orte = {
  FUE: [28.45, -13.865], CO: [28.735, -13.865], LOB: [28.75, -13.82], PR: [28.50, -13.86], MJ: [28.05, -14.35],
  PB: [28.86, -13.83], TIM: [29.01, -13.75],
  LP: [28.14, -15.42], MAS: [27.76, -15.58], AG: [28.10, -15.71],
  SCT: [28.47, -16.25], PC: [28.415, -16.55], CA: [28.09, -16.73], LC: [28.05, -16.72], TFS: [28.045, -16.575],
  SSG: [28.09, -17.11]
};
const beschriftungen = [
  ['Fuerteventura', 28.35, -14.15, 'cn', -55], ['Lanzarote', 29.12, -13.62, 'cn'], ['Gran Canaria', 27.96, -15.68, 'cn'],
  ['Teneriffa', 28.28, -16.62, 'cn'], ['La Gomera', 28.22, -17.12, 'cn'], ['Atlantik', 28.85, -15.6, 'sea']
];
module.exports = { orte, beschriftungen };
