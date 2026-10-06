// Familienreise 2027: baut die Seite aus den Daten in data/*.js
// Aufbau: 1. Hilfsfunktionen  2. Reiseseiten  3. Einstiegsseite  3b. Quellen  4. Bildlader  5. Navigation
(function () {
'use strict';

// ---------- 1. Hilfsfunktionen ----------

var JAHR = 2027;
var MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
var MONAT = MONATE.join('|');
var WOCHENTAGE = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

function zwei(n) { return (n < 10 ? '0' : '') + n; }

// "19. Juni" -> "Sa, 19.06.2027"
function tag(d, monat) {
  var m = MONATE.indexOf(monat) + 1;
  var x = new Date(JAHR, m - 1, +d);
  return WOCHENTAGE[x.getDay()] + ', ' + zwei(+d) + '.' + zwei(m) + '.' + JAHR;
}

// "19.–22. Juni" -> "Sa, 19.06.2027 – Di, 22.06.2027", "22. Juli" -> "Do, 22.07.2027"
function datum(t) {
  var m = t.match(new RegExp('^\\s*(\\d+)\\.(?: (' + MONAT + '))?–(\\d+)\\. (' + MONAT + ')\\s*$'));
  if (m) return tag(m[1], m[2] || m[4]) + ' – ' + tag(m[3], m[4]);
  m = t.match(new RegExp('^\\s*(\\d+)\\. (' + MONAT + ')\\s*$'));
  if (m) return tag(m[1], m[2]);
  return t;
}

// Ersetzt alle Daten in einem Text (z.B. "4 Nächte, Rückflug 22. Juli")
function datenImText(t) {
  t = t.replace(new RegExp('(\\d+)\\.(?: (' + MONAT + '))?–(\\d+)\\. (' + MONAT + ')', 'g'), function (x) { return datum(x); });
  // (ohne Lookbehind, damit auch ältere iPhones und iPads die Seite anzeigen)
  return t.replace(new RegExp('(^|[^\\d.])(\\d+)\\. (' + MONAT + ')(?! 20)', 'g'), function (x, vor, d, m) { return vor + tag(d, m); });
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}

function naechte(n) { return n + ' ' + (n == 1 ? 'Nacht' : 'Nächte'); }

// Zahl aus "20’600" bzw. Zahl -> "20’600"
function zahl(s) { return parseInt(String(s).replace(/\D/g, ''), 10); }
function chf(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '’'); }
function runden(x, stelle) { var f = Math.pow(10, stelle); return Math.round(x / f) * f; }

function liste(arr, fn) { return arr.map(fn).join(''); }

// Bilder von Wikimedia Commons
function commonsUrl(datei, breite) {
  var q = encodeURIComponent(datei.replace(/ /g, '_')).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  }).replace(/%2F/g, '/');
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + q + '?width=' + breite;
}

// Fotos von Unsplash (data/bilder-unsplash.js, erzeugt von tools/bilder-unsplash.js) mit Nennung des Fotografen
var UTM = 'utm_source=familienreise_2027&utm_medium=referral';
function unsplash(b) {
  var u = typeof window !== 'undefined' && window.UNSPLASH;
  return (u && b.suche && u[b.suche]) || null;
}
function uUrl(f, w) { return f.url + (f.url.indexOf('?') < 0 ? '?' : '&') + 'w=' + w + '&q=75&auto=format&fit=crop'; }
function credit(f) {
  return '<span class="credit">Foto: <a href="' + esc(f.profil) + '" target="_blank" rel="noopener">' + esc(f.name) + '</a> / ' +
    '<a href="https://unsplash.com/?' + UTM + '" target="_blank" rel="noopener">Unsplash</a></span>';
}

// fb = Ersatzsuche (Name der Station), falls zum Motiv kein Bild gefunden wird
function bild(b, fb) {
  var ersatz = fb ? ' data-fb="' + esc(fb) + '"' : '';
  var f = unsplash(b);
  if (f) {
    return '<figure><img src="' + uUrl(f, 1280) + '" srcset="' + uUrl(f, 640) + ' 640w, ' + uUrl(f, 1280) + ' 1280w" sizes="(max-width: 640px) 100vw, 60vw" loading="lazy" alt="' + esc(b.titel) +
      '" data-u="1" data-q="' + esc(b.suche) + '" data-kw="' + esc(b.stichwort) + '"' + ersatz + ' style="background:' + esc(f.farbe || '#E4EEEC') + '"><figcaption>' + b.titel + '</figcaption>' + credit(f) + '</figure>';
  }
  if (b.datei) {
    return '<figure><img src="' + commonsUrl(b.datei, 1280) + '" loading="lazy" alt="' + esc(b.titel) + '" data-file="' + esc(b.datei) + '"' + ersatz + '><figcaption>' + b.titel + '</figcaption></figure>';
  }
  return '<figure><img data-q="' + esc(b.suche) + '" data-kw="' + esc(b.stichwort) + '" alt="' + esc(b.titel) + '"' + ersatz + '><figcaption>' + b.titel + '</figcaption></figure>';
}

function titelbild(b) {
  var f = unsplash(b);
  if (f) {
    return '<img src="' + uUrl(f, 2400) + '" srcset="' + [1280, 1920, 2560].map(function (w) { return uUrl(f, w) + ' ' + w + 'w'; }).join(', ') +
      '" sizes="100vw" alt="' + esc(b.alt) + '" data-u="1" data-q="' + esc(b.suche) + '" data-kw="' + esc(b.stichwort) + '" data-hero="1" fetchpriority="high">' + credit(f);
  }
  var a = '<img';
  if (b.datei) {
    a += ' src="' + commonsUrl(b.datei, 2400) + '" srcset="' + [1280, 1920, 2560].map(function (w) { return commonsUrl(b.datei, w) + ' ' + w + 'w'; }).join(', ') +
      '" sizes="100vw" data-file="' + esc(b.datei) + '"';
  }
  if (b.suche) a += ' data-q="' + esc(b.suche) + '" data-kw="' + esc(b.stichwort) + '" data-hero="1"';
  a += ' alt="' + esc(b.alt) + '"';
  if (b.datei) a += ' fetchpriority="high"';
  return a + '>';
}

var ICONS = {
  auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16l1.5-5.5A2 2 0 0 1 8.4 9h7.2a2 2 0 0 1 1.9 1.5L19 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="18" r=".8"/><circle cx="16.5" cy="18" r=".8"/></svg>',
  schiff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/><path d="M5 14l-1-4h16l-2 4"/><path d="M12 4v6M8 10V7h8v3"/></svg>',
  zug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M8 20l-2 2M16 20l2 2"/><circle cx="9" cy="13" r=".8"/><circle cx="15" cy="13" r=".8"/></svg>',
  bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="15" rx="2"/><path d="M4 11h16M7 18v2M17 18v2"/><circle cx="8" cy="14.5" r=".8"/><circle cx="16" cy="14.5" r=".8"/></svg>',
  flug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14L3 11l1-2 7 1 5-6a1.5 1.5 0 0 1 2 2l-6 5 1 7-2 1-3-7z"/></svg>'
};

// Symbol für die Anreise, erkannt am Anfang des Textes
function icon(t) {
  if (/^(Mietwagen|Mit dem Auto|Auto\b)/.test(t)) return ICONS.auto;
  if (/flug/i.test(t.slice(0, 20))) return ICONS.flug;
  if (/^Autofähre/.test(t) || /Fähre|Katamaran|Speedboot|Boot/.test(t.slice(0, 60))) return ICONS.schiff;
  if (/Zug|ETS/.test(t.slice(0, 40))) return ICONS.zug;
  return ICONS.bus;
}

// ---------- 2. Reiseseiten ----------

function kurzname(name) { return name.split(' / ')[0].replace(/\s*\(.*\)/g, ''); }

function planZeile(z, k, extra) {
  var n = z.name, nacht = z.naechte === undefined ? '–' : naechte(z.naechte);
  var m = n.match(/^(\d+)\./);
  if (!m || extra) {
    return '<div class="prow tr"><span class="d">' + datum(z.datum) + '</span><span class="n">' + n + '</span><span class="k">' + nacht + '</span><span class="a">' + z.info + '</span></div>';
  }
  return '<div class="prow"><span class="d">' + datum(z.datum) + '</span><span class="n"><a href="#' + k + '-s' + m[1] + '">' + n + '</a></span><span class="k">' + nacht + '</span><span class="a">' + z.info + '</span></div>';
}

function station(s, k) {
  var z = s.zwischenstopp, zn = z && z.naechte || 1;
  var vor = z ? '<b>' + z.text + '</b> (' + datum(z.datum) + ', ' + naechte(zn) + '). ' : '';
  return '<div class="leg"><span class="ic" aria-hidden="true">' + icon(s.anreise) + '</span><p><b>Anreise:</b> ' + vor + s.anreise + '</p></div>' +
    '<article class="stop" id="' + k + '-s' + s.nr + '"><span class="num">' + s.nr + '</span>\n' +
    '<div class="shead"><h3>' + s.name + '</h3><span class="tag ' + s.land + '">' + s.region + '</span><p class="when">' + datum(s.datum) + ', <b>' + datenImText(s.naechte) + '</b></p></div>\n' +
    '<div class="gal">' + liste(s.bilder, function (b) { return bild(b, s.ersatzsuche || kurzname(s.name).split(' und ').join('|')); }) + '</div>\n' +
    '<p class="lead">' + s.text + '</p>' + (s.teens ? '<div class="teen"><h4>Für Teens</h4><p>' + s.teens + '</p></div>' : '') + '\n' +
    '<ul class="facts">' + liste(s.fakten, function (f) { return '<li>' + f + '</li>'; }) + '</ul>\n' +
    '<p class="more"><b>Ausserdem sehenswert:</b> ' + s.ausserdem + '</p>' + (s.warnung ? '<div class="warn">' + s.warnung + '</div>' : '') + '\n' +
    '</article>';
}

function tabelle(kopf, zeilen) {
  var td = function (z) { return '<tr>' + z.map(function (c, i) { return '<td data-label="' + kopf[i] + '">' + c + '</td>'; }).join('') + '</tr>'; };
  return '<table class="pl"><tr>' + liste(kopf, function (h) { return '<th>' + h + '</th>'; }) + '</tr>' + liste(zeilen, td) + '</table>';
}

function budget(b) {
  return '<div class="btot"><strong>' + b.total + ' CHF</strong><span>Planwert für ' + b.naechte + ' Nächte, 2 Erwachsene und 2 Kids. Spanne ' + b.spanne + ' CHF, ' + b.proTag + '.</span></div>' +
    '<div class="tbl">' + tabelle(['Kategorie', 'Spanne', 'Planwert', 'Grundlage'], b.posten) + '</div>' +
    '<div class="tbl">' + tabelle(['Station (Nächte)', 'Unterkunft, Essen, Aktivitäten'], b.stationen) + '</div>' +
    '<ul class="bnotes">' + liste(b.hinweise, function (h) { return '<li>' + h + '</li>'; }) + '</ul>';
}

var LEGENDE = {
  bus: ['lb', 'Bus, Minivan, Taxi'], car: ['lc', 'Mietwagen'], train: ['lt', 'Zug'], ferry: ['lf', 'Fähre, Boot'], air: ['la', 'Flug']
};

// Version für den Browser-Cache, gesetzt von tools/version.js beim Veröffentlichen (<html data-v="…">)
var VERSION = typeof document !== 'undefined' && document.documentElement.getAttribute('data-v');

function karte(K, name) {
  var obj = function (x) {
    return '<div class="mapwrap' + (K.breit ? ' wide' : '') + '"><object data="' + x.datei + (VERSION ? '?v=' + VERSION : '') + '" type="image/svg+xml" aria-label="' + esc(x.titel || 'Routenkarte ' + name) + '"></object></div>';
  };
  var lg = '<div class="lg">' + liste(K.legende, function (m) { return '<span><i class="' + LEGENDE[m][0] + '"></i>' + LEGENDE[m][1] + '</span>'; }) +
    '<span><b class="lz"></b>Zwischenübernachtung oder Umstieg</span></div>';
  return '<p class="intro">' + K.intro + '</p>' + obj(K.karten[0]) + lg +
    liste(K.karten.slice(1), function (x) { return '<p class="mapnote">' + x.titel + '</p>' + obj(x); });
}

// Varianten einer Reise (z.B. umgekehrte Reihenfolge): Reisen mit alternativeZu erscheinen nicht im Menü,
// sondern als Umschalter auf der Seite der Hauptreise und ihrer Alternativen.
function gruppe(k, alle) {
  var g = alle[k].alternativeZu || k;
  return Object.keys(alle).filter(function (x) { return x === g || alle[x].alternativeZu === g; });
}
function varianten(k, alle) {
  var ks = gruppe(k, alle);
  if (ks.length < 2) return '';
  return '<p class="var" role="group" aria-label="Variante"><span>Reihenfolge:</span>' + liste(ks, function (x) {
    return '<a href="#' + x + '"' + (x === k ? ' class="on" aria-current="true"' : '') + '>' + alle[x].variante + '</a>';
  }) + '</p>';
}

function reise(k, R, alle) {
  var p = k + '-';
  var hero = '<header class="hero">' + titelbild(R.titelbild) + '<div class="wrap"><p class="when">' + R.zeitraum + '</p><h1>' + R.titel + '</h1><p class="sub">' + R.untertitel + '</p>' + (alle ? varianten(k, alle) : '') +
    '<ol class="chain">' + liste(R.stationen, function (s) { return '<li><a href="#' + p + 's' + s.nr + '">' + esc(kurzname(s.name)) + '</a></li>'; }) + '</ol></div></header>';
  var plan = planZeile(R.hinflug, k, true) + liste(R.plan, function (z) { return planZeile(z, k); }) + planZeile(R.rueckflug, k, true);
  return '<div class="trip" id="trip-' + k + '" hidden>\n' + hero + '\n' +
    '<nav class="top" aria-label="Abschnitte"><div class="wrap">\n' +
    '<a href="#' + p + 'plan">Reiseplan</a><a href="#' + p + 'karte">Karte</a><a href="#' + p + 'stationen">Stationen</a><a href="#' + p + 'budget">Budget</a><a href="#' + p + 'tipps">Tipps</a>\n' +
    '</div></nav>\n<main>\n' +
    '<section id="' + p + 'plan"><div class="wrap">\n<h2>Reiseplan</h2>\n<p class="intro">' + R.planIntro + '</p>\n' +
    '<div class="plan">' + plan + '</div>\n' +
    '<div class="notes">' + liste(R.planHinweise, function (x) { return '<p><b>' + x[0] + '</b>' + x[1] + '</p>'; }) + '</div>\n</div></section>\n' +
    '<section id="' + p + 'karte" style="padding-top:0"><div class="wrap">\n<h2>Die Route auf der Karte</h2>\n' + karte(R.karte, R.menu) + '\n</div></section>\n' +
    '<section style="padding-top:0"><div class="wrap">\n<h2>Abwechslung unterwegs</h2>\n<p class="intro">' + R.abwechslungIntro + '</p>\n' +
    '<div class="mix">' + liste(R.abwechslung, function (x) { return '<div><h3>' + x[0] + '</h3><p>' + x[1] + '</p></div>'; }) + '</div>\n</div></section>\n' +
    '<section id="' + p + 'stationen" style="background:#E4EEEC"><div class="wrap">\n<h2>Die Stationen</h2>\n<p class="intro">' + R.stationenIntro + '</p>\n' +
    '<div class="stops">' + liste(R.stationen, function (s) { return station(s, k); }) + '</div>\n<p class="arrive">' + R.abschluss + '</p>\n</div></section>\n' +
    '<section id="' + p + 'budget"><div class="wrap">\n<h2>Budget</h2>\n<p class="intro">' + R.budgetIntro + '</p>\n' + budget(R.budget) + '\n</div></section>\n' +
    '<section id="' + p + 'tipps" style="padding-top:0"><div class="wrap">\n<h2>Wichtige Hinweise</h2>\n<p class="intro">' + R.tippsIntro + '</p>\n' +
    '<div class="tips">' + liste(R.tipps, function (x) { return '<details><summary>' + x[0] + '</summary><p>' + x[1] + '</p></details>'; }) + '</div>\n</div></section>\n' +
    '</main>\n</div>';
}

// ---------- 3. Einstiegsseite ----------

function einstieg(S, REISEN) {
  var keys = Object.keys(S.reisen);
  var B = {};
  keys.forEach(function (k) {
    var b = REISEN[k].budget, sp = b.spanne.split('–');
    B[k] = { plan: zahl(b.total), lo: zahl(sp[0]), hi: zahl(sp[1]), nights: b.naechte, zeit: REISEN[k].zeitraum.split(', 2 ')[0] };
    B[k].day = runden(B[k].plan / B[k].nights, 1);
    B[k].pp = runden(B[k].plan / 4, 2);
  });
  var mehr = chf(runden(B.usa.plan - B.asien.plan, 3));
  var fuell = function (t) {
    return t.replace(/\{mehrkosten\}/g, mehr).replace(/\{plan:(\w+)\}/g, function (x, k) { return chf(B[k].plan); });
  };
  var T = keys.map(function (k) { var t = S.reisen[k]; t.k = k; return t; });

  var karten = liste(T, function (t) {
    return '<article class="vcard"><div class="vtag">' + t.laender + '</div><h3>' + t.name + '</h3><p class="vsub">' + t.zusatz + '</p><p>' + t.kurz + '</p>' +
      '<dl><div><dt>Nächte</dt><dd>' + B[t.k].nights + '</dd></div><div><dt>Budget (Plan)</dt><dd>' + chf(B[t.k].plan) + ' CHF</dd></div><div><dt>Hinreise</dt><dd>' + t.hinflug + '</dd></div><div><dt>Rückreise</dt><dd>' + t.rueckflug + '</dd></div></dl>' +
      '<p class="vhl">' + t.hoehepunkte + '</p><a class="btn" href="#' + t.k + '">Zur Reise</a></article>';
  });

  var mx = Math.max.apply(null, keys.map(function (k) { return B[k].hi; }));
  var pct = function (x) { return (100 * x / mx).toFixed(1); };
  // Budgetbalken nach Planwert sortiert, günstigste Reise zuerst
  var nachPreis = T.slice().sort(function (a, b) { return B[a.k].plan - B[b.k].plan; });
  var balken = liste(nachPreis, function (t) {
    var b = B[t.k];
    return '<div class="brow"><div class="bl"><b>' + t.name + '</b><span>' + t.zusatz + '</span></div>' +
      '<div class="track"><i class="range" style="left:' + pct(b.lo) + '%;width:' + pct(b.hi - b.lo) + '%"></i><i class="plan" style="left:' + pct(b.plan) + '%"></i></div>' +
      '<div class="bv">' + chf(b.plan) + ' CHF<small>Spanne ' + chf(b.lo) + '–' + chf(b.hi) + ' CHF, ca. ' + chf(b.day) + ' CHF pro Tag</small></div></div>';
  });

  var kopf = '<thead><tr><th></th>' + liste(T, function (t) { return '<th scope="col">' + t.name + '<small>' + t.zusatz + '</small></th>'; }) + '</tr></thead>';
  var ZEILEN = [
    ['Route', 'route'], ['Nächte vor Ort', function (b) { return b.nights + ' Nächte (' + b.zeit + ')'; }],
    ['Stationen', 'stationen'], ['Länder', 'laender'], ['Hinreise', 'hinflug'], ['Rückreise', 'rueckflug'],
    ['Flüge dazwischen', 'dazwischen'], ['Reisetempo', 'tempo'],
    ['Budget (Plan, 4 Personen)', function (b) { return '<b>' + chf(b.plan) + ' CHF</b> (Spanne ' + chf(b.lo) + '–' + chf(b.hi) + ' CHF)'; }],
    ['Pro Tag und pro Person', function (b) { return 'ca. ' + chf(b.day) + ' CHF pro Tag, ca. ' + chf(b.pp) + ' CHF pro Person'; }],
    ['Wetter im Juli', 'wetter'], ['Einreise', 'einreise'], ['Höhepunkte', 'hoehepunkte'], ['Für die Teenager', 'teens']
  ];
  var vergleich = '<table class="cmp">' + kopf + '<tbody>' + liste(ZEILEN, function (z) {
    return '<tr><th scope="row">' + z[0] + '</th>' + liste(T, function (t) {
      return '<td data-label="' + t.name + '">' + (typeof z[1] === 'function' ? z[1](B[t.k]) : t[z[1]]) + '</td>';
    }) + '</tr>';
  }) + '</tbody></table>';

  var punkte = function (n) {
    return '<span class="dots" role="img" aria-label="' + n + ' von 5 Punkten"><span>' + '●'.repeat(n) + '</span><span class="off">' + '●'.repeat(5 - n) + '</span></span>';
  };
  var bewertung = '<table class="cmp rate">' + kopf + '<tbody>' + liste(S.bewertung, function (z) {
    return '<tr><th scope="row">' + z.kriterium + '</th>' + liste(T, function (t) {
      return '<td data-label="' + t.name + '">' + punkte(z[t.k][0]) + '<span class="rtxt">' + fuell(z[t.k][1]) + '</span></td>';
    }) + '</tr>';
  }) + '</tbody></table>';

  var proContra = liste(T, function (t) {
    return '<article class="pcard"><h3>' + t.name + '</h3><p class="fit"><b>Passt am besten, wenn</b> ' + fuell(t.passt) + '</p>' +
      '<h4>Dafür spricht</h4><ul class="pro">' + liste(t.pro, function (x) { return '<li>' + x + '</li>'; }) + '</ul>' +
      '<h4>Dagegen spricht</h4><ul class="con">' + liste(t.contra, function (x) { return '<li>' + x + '</li>'; }) + '</ul></article>';
  });

  return '<div class="trip" id="trip-start" hidden>' +
    '<header class="hero hero-start"><div class="wrap"><p class="when">' + S.zeitraum + '</p><h1>' + S.titel + '</h1>' +
    '<p class="sub">' + S.untertitel + '</p>' +
    '</div></header>' +
    '<main>' +
    '<section id="start-reisen"><div class="wrap"><h2>Die Reisen</h2><p class="intro">' + S.reisenIntro + '</p>' +
    '<div class="vgrid">' + karten + '</div></div></section>' +
    '<section id="start-bewertung" style="padding-top:0"><div class="wrap"><h2>Bewertung nach euren Wünschen</h2><p class="intro">' + S.bewertungIntro + '</p>' +
    '<div class="cmpwrap">' + bewertung + '</div></div></section>' +
    '<section id="start-budget" style="padding-top:0"><div class="wrap"><h2>Budget im Vergleich</h2><p class="intro">' + S.budgetIntro + '</p>' +
    '<div class="bars">' + balken + '</div></div></section>' +
    '<section id="start-vergleich" style="padding-top:0"><div class="wrap"><h2>Direktvergleich</h2>' +
    '<p class="intro">' + S.vergleichIntro + '</p><div class="cmpwrap">' + vergleich + '</div></div></section>' +
    '<section id="start-entscheid" style="background:#E4EEEC"><div class="wrap"><h2>Wofür spricht was</h2><p class="intro">' + S.entscheidIntro + '</p>' +
    '<div class="pgrid">' + proContra + '</div></div></section>' +
    '</main></div>';
}

// ---------- 3b. Quellen ----------

function quellen(Q) {
  return '<div class="trip" id="trip-quellen" hidden><main><section class="quellen"><div class="wrap">' +
    '<h2>' + Q.titel + '</h2><p class="intro">' + Q.intro + '</p>' +
    liste(Q.gruppen, function (g) {
      return '<h3>' + g.titel + '</h3><ul>' + liste(g.links, function (l) {
        return '<li><a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + l[0] + '</a></li>';
      }) + '</ul>';
    }) + '</div></section></main></div>';
}

// Seite zusammensetzen (auch von tools/pruefen.js genutzt, deshalb ohne DOM)
function seite(S, REISEN, Q) {
  var h = einstieg(S, REISEN);
  Object.keys(REISEN).forEach(function (k) { h += '\n' + reise(k, REISEN[k], REISEN); });
  if (Q) h += '\n' + quellen(Q);
  return h;
}

if (typeof document === 'undefined') { module.exports = { seite: seite, reise: reise, einstieg: einstieg, datum: datum }; return; }

var inhalt = document.getElementById('inhalt');
inhalt.innerHTML = seite(window.START, window.REISEN, window.QUELLEN);
document.getElementById('menu').insertAdjacentHTML('beforeend', liste(Object.keys(window.REISEN).filter(function (k) { return !window.REISEN[k].alternativeZu; }), function (k) {
  return '<a href="#' + k + '" data-trip="' + k + '">' + window.REISEN[k].menu + '</a>';
}) + (window.QUELLEN ? '<a class="neben" href="#quellen" data-trip="quellen">Quellen</a>' : ''));

// ---------- 4. Bildlader ----------
// Bilder mit data-file kommen direkt von Commons. Bilder mit data-q werden über die Commons-Suche
// gefunden (zuerst «Quality Images»), sonst über Wikipedia. Gefunden wird nur, was die Stichworte
// (data-kw) im Dateinamen enthält.

var used = {};
var BAD = /\b(map|locator|flag|logo|diagram|plan|icon|coat of arms|chart|poster|stamp|sign|svg|drawing|sketch|engraving|lithograph)\b/i;
function norm(t) { return t.toLowerCase().replace(/[_\-]/g, ' '); }
function okKw(title, kw) { var t = norm(title); return kw.split('|').some(function (k) { return t.indexOf(norm(k).trim()) >= 0; }); }
function search(q, kw, qi, hero, minw) {
  if (qi) q += ' haswbstatement:P6731=Q63348049|P6731=Q63348069';
  var u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=40&gsrsearch=' +
    encodeURIComponent(q + ' filetype:bitmap') + '&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=' + (hero ? 2560 : 1280);
  return fetch(u).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
    if (!d || !d.query) return null;
    var pages = Object.keys(d.query.pages).map(function (k) { return d.query.pages[k]; }).sort(function (a, b) { return a.index - b.index; });
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i], ii = p.imageinfo && p.imageinfo[0];
      if (!ii || ii.mime !== 'image/jpeg' || BAD.test(p.title)) continue;
      if (ii.width < (hero ? 3000 : (minw || 1000)) || ii.width < ii.height * (hero ? 1.3 : 1)) continue;
      if (kw && !okKw(p.title, kw)) continue;
      if (used[ii.url]) continue;
      used[ii.url] = 1;
      return { src: ii.thumburl || ii.url, alt: p.title.replace(/^File:/, '').replace(/\.[a-z]+$/i, '') };
    }
    return null;
  });
}
function wp(base, kw) {
  var i = 0;
  return (function nx() {
    if (i >= base.length) return Promise.resolve(null);
    var q = base[i++];
    var u = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrlimit=3&gsrsearch=' + encodeURIComponent(q) +
      '&prop=pageimages&piprop=thumbnail&pithumbsize=1280';
    return fetch(u).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
      if (d && d.query) {
        var ps = Object.keys(d.query.pages).map(function (k) { return d.query.pages[k]; }).sort(function (a, b) { return a.index - b.index; });
        for (var n = 0; n < ps.length; n++) {
          var p = ps[n], th = p.thumbnail && p.thumbnail.source;
          if (!th || !/\.jpe?g(\?|$)/i.test(th) || used[th]) continue;
          if (kw && !okKw(p.title, kw)) continue;
          used[th] = 1;
          return { src: th, alt: p.title };
        }
      }
      return nx();
    }).catch(function () { return nx(); });
  })();
}
function hide(img) { var f = img.closest('figure'); if (f) f.style.display = 'none'; else img.remove(); }
function setze(img, h) {
  img.src = h.src; img.title = h.alt;
  img.onerror = function () { img.onerror = null; ersatz(img); };
}
// Kein Bild zum Motiv gefunden oder Bild defekt: ein anderes Bild der Station suchen (data-fb),
// erst wenn auch das nichts ergibt, wird die Kachel ausgeblendet.
function ersatz(img, fertig) {
  var fb = img.dataset.fb, j = 0;
  var ende = function () { if (fertig) fertig(); };
  if (!fb || img.__fb) { hide(img); ende(); return; }
  img.__fb = 1;
  var namen = fb.split('|');
  (function versuch() {
    if (j >= namen.length) {
      wp(namen, fb).then(function (h) { if (h) setze(img, h); else hide(img); ende(); }).catch(function () { hide(img); ende(); });
      return;
    }
    search(namen[j++], fb, 0, false, 600).then(function (h) {
      if (h) { setze(img, h); ende(); } else versuch();
    }).catch(function () { hide(img); ende(); });
  })();
}
var queue = [];
function next() {
  if (!queue.length) return;
  var img = queue.shift();
  var base = img.dataset.q.split('|'), kw = img.dataset.kw || '', j = 0, qs = [];
  var hero = img.hasAttribute('data-hero');
  qs.push([base[0], 1, 1000]); qs.push([base[0], 0, 1000]);
  if (base[1]) qs.push([base[1], 0, 1000]);
  if (!hero) qs.push([base[0], 0, 600]);
  (function tryq() {
    if (j >= qs.length) {
      wp(base, kw).then(function (h) {
        if (h) { setze(img, h); next(); } else ersatz(img, next);
      }).catch(function () { ersatz(img, next); });
      return;
    }
    var t = qs[j++];
    search(t[0], kw, t[1], hero, t[2]).then(function (h) {
      if (h) { setze(img, h); next(); } else tryq();
    }).catch(function () { hide(img); next(); });
  })();
}
var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); queue.push(e.target); next(); } });
}, { rootMargin: '900px 0px' }) : null;
function ladeBilder(root) {
  [].slice.call(root.querySelectorAll('img[data-file]')).forEach(function (i) {
    if (i.__f) return;
    i.__f = 1;
    i.onerror = function () {
      if (i.dataset.q && !i.__q) { i.__q = 1; i.removeAttribute('srcset'); i.removeAttribute('src'); queue.push(i); next(); } else { i.onerror = null; ersatz(i); }
    };
  });
  // Unsplash-Foto lädt nicht: Hinweis auf den Fotografen entfernen und wie bisher auf Commons suchen
  [].slice.call(root.querySelectorAll('img[data-u]')).forEach(function (i) {
    if (i.__f) return;
    i.__f = 1;
    i.onerror = function () {
      i.onerror = null;
      var c = i.parentNode.querySelector('.credit');
      if (c) c.parentNode.removeChild(c);
      i.removeAttribute('srcset'); i.removeAttribute('src'); i.__q = 1; queue.push(i); next();
    };
  });
  [].slice.call(root.querySelectorAll('img[data-q]')).forEach(function (i) {
    if (!i.getAttribute('src') && !i.__q) { i.__q = 1; if (io && !i.closest('.hero')) io.observe(i); else queue.push(i); }
  });
  for (var k = 0; k < 6; k++) next();
}

// ---------- 5. Navigation ----------
// Immer nur eine Reise ist sichtbar. Die Adresse (#bali, #bali-s3 usw.) bestimmt, welche.

var trips = ['start'].concat(Object.keys(window.REISEN), window.QUELLEN ? ['quellen'] : []);
function show(k) {
  trips.forEach(function (t) { document.getElementById('trip-' + t).hidden = (t !== k); });
  var haupt = window.REISEN[k] && window.REISEN[k].alternativeZu || k;
  [].slice.call(document.querySelectorAll('.gnav a[data-trip]')).forEach(function (a) { a.classList.toggle('on', a.dataset.trip === haupt); });
  var name = k === 'quellen' ? window.QUELLEN.titel : k !== 'start' && window.REISEN[k].menu;
  document.title = name ? 'Familienreise 2027 · ' + name : 'Familienreise 2027';
  ladeBilder(document.getElementById('trip-' + k));
}
var cur = null;
function route() {
  var h = location.hash.replace('#', '');
  var k = null;
  trips.forEach(function (t) { if (h === t || h.indexOf(t + '-') === 0) k = t; });
  if (!k) k = cur || 'start';
  if (k !== cur) { show(k); cur = k; window.scrollTo(0, 0); }
  if (h.indexOf('-') > 0) {
    var el = document.getElementById(h);
    if (el) {
      setTimeout(function () { el.scrollIntoView(); }, 30);
      setTimeout(function () { var t = el.getBoundingClientRect().top; if (t < 0 || t > 260) el.scrollIntoView(); }, 700);
    }
  } else if (h === k) { window.scrollTo(0, 0); }
}
// Menü auf schmalen Bildschirmen: auf- und zuklappen, nach einer Auswahl wieder schliessen
var gnav = document.querySelector('.gnav'), menuBtn = gnav.querySelector('.menu-btn');
function menu(offen) { gnav.classList.toggle('offen', offen); menuBtn.setAttribute('aria-expanded', offen ? 'true' : 'false'); }
menuBtn.addEventListener('click', function () { menu(!gnav.classList.contains('offen')); });
document.addEventListener('click', function (e) { if (!gnav.contains(e.target) || e.target.closest('.menu a, a.logo')) menu(false); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu(false); });

// Abschnittsleiste: den Abschnitt markieren, in dem man sich gerade befindet
var spyGeplant = false;
function markiereAbschnitt() {
  spyGeplant = false;
  var leiste = cur && cur !== 'start' && cur !== 'quellen' ? document.querySelector('#trip-' + cur + ' nav.top') : null;
  if (!leiste) return;
  var grenze = leiste.getBoundingClientRect().bottom + 40, aktiv = null;
  [].slice.call(leiste.querySelectorAll('a')).forEach(function (a) {
    var sec = document.getElementById(a.getAttribute('href').slice(1));
    if (sec && sec.getBoundingClientRect().top <= grenze) aktiv = a;
  });
  [].slice.call(leiste.querySelectorAll('a')).forEach(function (a) { a.classList.toggle('on', a === aktiv); });
}
window.addEventListener('scroll', function () {
  if (!spyGeplant) { spyGeplant = true; window.requestAnimationFrame(markiereAbschnitt); }
}, { passive: true });

window.addEventListener('hashchange', route);
route();
markiereAbschnitt();
})();
