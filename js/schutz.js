// Einfacher Zugangsschutz: blendet die Seite aus, bis das Passwort eingegeben ist.
// Kein echter Schutz (Repo und Daten sind öffentlich), hält nur zufällige Besucher ab.
// Im Repo steht nur der SHA-256-Wert von SALZ + Passwort. Neues Passwort setzen:
//   node -e "console.log(require('crypto').createHash('sha256').update('familienreise-2027:NEUES_PASSWORT').digest('hex'))"
(function () {
  var SALZ = 'familienreise-2027:';
  var WERT = 'ef41cae5c38d45a89c14c4bcabaf9e634b9de190f041a8c26f31eddc7eae763e';
  var SCHLUESSEL = 'zugang2027';
  var html = document.documentElement;

  function lesen() { try { return localStorage.getItem(SCHLUESSEL); } catch (e) { return null; } }
  function merken() { try { localStorage.setItem(SCHLUESSEL, WERT); } catch (e) {} }
  if (lesen() === WERT) return;
  html.className += ' gesperrt';

  // SHA-256 (ohne crypto.subtle, damit es auch per file:// und auf älteren Geräten läuft)
  function sha256(text) {
    var K = [], H = [], i, j;
    function frac(x) { return ((x - Math.floor(x)) * 4294967296) | 0; }
    for (var n = 2, z = 0; z < 64; n++) {
      var prim = true;
      for (j = 2; j * j <= n; j++) if (n % j === 0) { prim = false; break; }
      if (prim) { if (z < 8) H[z] = frac(Math.pow(n, 1 / 2)); K[z++] = frac(Math.pow(n, 1 / 3)); }
    }
    var b = unescape(encodeURIComponent(text)), w = [], l = b.length * 8;
    for (i = 0; i < b.length; i++) w[i >> 2] |= b.charCodeAt(i) << (24 - (i % 4) * 8);
    w[l >> 5] |= 0x80 << (24 - l % 32);
    w[((l + 64 >> 9) << 4) + 15] = l;
    function rot(x, n) { return (x >>> n) | (x << (32 - n)); }
    for (i = 0; i < w.length; i += 16) {
      var a = H.slice(0), W = [];
      for (j = 0; j < 64; j++) {
        if (j < 16) W[j] = w[i + j] | 0;
        else {
          var s0 = rot(W[j - 15], 7) ^ rot(W[j - 15], 18) ^ (W[j - 15] >>> 3);
          var s1 = rot(W[j - 2], 17) ^ rot(W[j - 2], 19) ^ (W[j - 2] >>> 10);
          W[j] = (W[j - 16] + s0 + W[j - 7] + s1) | 0;
        }
        var t1 = a[7] + (rot(a[4], 6) ^ rot(a[4], 11) ^ rot(a[4], 25)) + ((a[4] & a[5]) ^ (~a[4] & a[6])) + K[j] + W[j];
        var t2 = (rot(a[0], 2) ^ rot(a[0], 13) ^ rot(a[0], 22)) + ((a[0] & a[1]) ^ (a[0] & a[2]) ^ (a[1] & a[2]));
        a = [(t1 + t2) | 0].concat(a.slice(0, 7));
        a[4] = (a[4] + t1) | 0;
      }
      for (j = 0; j < 8; j++) H[j] = (H[j] + a[j]) | 0;
    }
    var hex = '';
    for (i = 0; i < 8; i++) hex += ('0000000' + (H[i] >>> 0).toString(16)).slice(-8);
    return hex;
  }

  function maske() {
    var box = document.createElement('div');
    box.id = 'sperre';
    box.innerHTML = '<form><h1>Familienreise 2027</h1><p>Bitte Passwort eingeben.</p>' +
      '<input type="password" autocomplete="current-password" aria-label="Passwort" autofocus>' +
      '<button type="submit">Öffnen</button><p class="fehler" aria-live="polite"></p></form>';
    document.body.appendChild(box);
    var form = box.querySelector('form'), feld = box.querySelector('input'), fehler = box.querySelector('.fehler');
    form.onsubmit = function (e) {
      e.preventDefault();
      if (sha256(SALZ + feld.value) === WERT) {
        merken();
        html.className = html.className.replace(' gesperrt', '');
        box.parentNode.removeChild(box);
      } else {
        fehler.textContent = 'Falsches Passwort.';
        feld.value = '';
        feld.focus();
      }
    };
    feld.focus();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', maske);
  else maske();
})();
