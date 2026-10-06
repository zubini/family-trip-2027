# Regeln für dieses Projekt

Familienreise 2027: Reiseführer und Vergleich mehrerer Reisevarianten als statische Webseite
(https://zubini.github.io/family-trip-2027/). Aufbau und Datenfelder stehen im README.
Diese Regeln gelten für alle Änderungen, egal ob von Hand oder mit Claude.

## 1. Änderungen ziehen Folgeänderungen nach sich

Eine Reise ist an vielen Stellen beschrieben. Wer etwas ändert, zieht **alle** betroffenen Stellen nach.

**Route geändert** (Station neu, entfernt, getauscht oder Verkehrsmittel anders):
- Fahrzeiten **neu recherchieren**, nicht schätzen oder übernehmen: `plan[].info`, `stationen[].anreise`
  der neuen **und** der folgenden Station (deren Anreise beginnt jetzt woanders).
- Summen neu rechnen: Gesamtzeit und «längste Reisetage» in `planHinweise` («Gesamt»),
  `tempo` und `dazwischen` in `data/start.js`, Bewertung «Reisekomfort», Pro und Contra.
- Daten und Nächte (siehe unten), Nummern der Stationen und Links im Plan.
- Budget: Posten (v.a. Fernverkehr, Unterkunft), Stationskosten, Total, Spanne, Betrag pro Tag und Person.
- Karte: Beschreibung in `tools/karten/<name>.js` anpassen (Orte, Wege, Stationen) und `node tools/karte.js <name>` ausführen.
  Die SVG-Dateien in `karten/` nie von Hand ändern.
- Texte, die die Route nennen: `untertitel`, `stationenIntro`, `abwechslung`, `tipps`,
  in `data/start.js` `route`, `stationen`, `hoehepunkte`, Bewertung.
- Neue Quellen in `data/quellen.js` eintragen.

**Daten oder Nächte geändert:**
- `plan`, `stationen[].datum` und `naechte`, `zwischenstopp.datum`.
- Ausgeschriebene Daten mit Wochentag in Texten (z.B. «Fr, 18.06.2027» in `planIntro`, Flughinweisen, Fakten).
- Karten neu zeichnen (`node tools/karte.js`); die Tooltips übernehmen die Daten automatisch.
- `budget.naechte` und die Nächte bei den Stationskosten.

**Preise geändert:** Posten, Total, Spanne, «pro Tag» und «pro Person» passend halten.
Die Einstiegsseite rechnet Planwert und Spanne automatisch, die Texte in der Bewertung nicht immer.

**Reise verändert:** Bewertungspunkte und Pro/Contra in `data/start.js` kritisch überprüfen.
Sie sind eine Einschätzung und werden nicht automatisch angepasst.

## 2. Zeitangaben

- Immer **zwei Werte** angeben, wo es um Summen geht: **reine Fahr- bzw. Reisezeit** und eine
  **realistische Einschätzung** mit Pausen, Tanken, Stau, Wartezeiten auf Fähren und Züge, Grenzen und
  Transfers. Faustregel: realistisch = rein + 15–25 %.
- Pro Etappe: gerundete Spanne, z.B. «ca. 4,5–5 Std.». Teilstrecken nennen, wenn es mehrere
  Verkehrsmittel sind, z.B. «Fähre (ca. 1,5–2 Std.), Bus (ca. 5–6 Std.); insgesamt ca. 7–8 Std.»
- Die Gesamtzeit muss zur Summe der Etappen passen. Bei jeder Änderung nachrechnen.
- Zeitzonenwechsel erwähnen (z.B. «Uhr +1 Std.»).
- Fahrpläne mit wenigen Verbindungen pro Tag als solche kennzeichnen (z.B. «nur drei Züge pro Tag»).
- Distanzen in km; wo Meilen stehen, sinnvoll gerundet umrechnen und an allen Stellen gleich halten.

## 3. Fakten und Quellen

- Fahrzeiten, Preise, Einreiseregeln und Gebühren **recherchieren und belegen**: Quelle in `data/quellen.js`.
- Offizielle Quellen bevorzugen (Bahnbetreiber, Fähranbieter, Botschaften, EDA, Nationalparks).
- Regeln mit Datum («seit 15.09.2026») vor einer Änderung auf Aktualität prüfen.
- Unsicheres als solches kennzeichnen («Fahrplan prüfen», «vorab bestätigen») statt es zu erfinden.
- Was sich nicht prüfen liess, offen sagen.

## 4. Sprache und Schreibweise

- Deutsch in Schweizer Rechtschreibung: **ss statt ß** (Strasse, grosse), Beträge in **CHF**.
- Tausendertrenner Apostroph: `20’600`. Spannen und Strecken mit Halbgeviertstrich: `5–6 Std.`, `Zürich–Singapur`.
- Anführungszeichen «…». Abkürzungen: «ca.», «Std.», «Min.», «z.B.».
- Daten in den Daten-Dateien **ohne Wochentag** (`"19.–22. Juni"`), die Wochentage rechnet `js/app.js`.
- Familie: 2 Erwachsene und 2 Kids, Sohn (12) und Tochter (14). Kurz, sachlich, ohne Werbesprache. Keine Empfehlung für eine Variante: die Seite informiert, entscheiden tut die Familie.

## 5. Datenschutz

Das Repo und die Seite sind **öffentlich**. Keine Namen, Geburtsdaten, Passnummern, Buchungsnummern,
Adressen, Telefonnummern oder sonstigen persönlichen Daten eintragen.

## 6. Technik

- **Kein Build, keine Frameworks, keine npm-Pakete.** Reines HTML, CSS und JavaScript.
- Inhalte gehören in `data/`, nicht in `js/app.js` oder `index.html`.
- JavaScript so schreiben, dass es auch auf älteren iPhones und iPads läuft (kein Regex-Lookbehind,
  keine neuesten Sprachfeatures). Die Seite muss auch per Doppelklick (`file://`) funktionieren:
  kein `fetch` für eigene Dateien.
- Bilder nur von Unsplash oder Wikimedia Commons: in den Daten `suche` plus `stichwort` (oder eine feste Commons-`datei`).
  Die ersten vier Bilder jeder Station und die Titelbilder sucht `tools/bilder-unsplash.js` (GitHub-Action «Unsplash-Bilder»)
  auf Unsplash und schreibt sie nach `data/bilder-unsplash.js`; der Rest und alles ohne Treffer kommt von Commons.
  Bei Unsplash-Fotos immer den Fotografen nennen (macht `js/app.js`). Den Schlüssel nie ins Repo schreiben.
- Karten werden mit `tools/karte.js` erzeugt (eigenständige SVG-Dateien mit eigenem `<style>`). Die Küstenlinien-Lizenz bleibt erhalten.
- Neue CSS- oder JS-Dateien mit normalem Pfad in `index.html` einbinden; die Cache-Versionen setzt `tools/version.js` beim Veröffentlichen.
- Neue Farben für Länder-Etiketten in `css/reise.css` ergänzen.
- Neue Reise: `data/<name>.js` nach Vorlage einer bestehenden Reise, in `index.html` einbinden, Einträge in
  `data/start.js` (Reisen, Bewertung) und `data/quellen.js` ergänzen, Karte unter `tools/karten/` anlegen.

## 7. Prüfen und veröffentlichen

- Vor jedem Commit: `node tools/pruefen.js` (prüft Daten, Nächte, Budget und ob die Karten aktuell sind).
- Grössere Änderungen zusätzlich im Browser anschauen, auf Desktop- und Handybreite.
- Neue Widerspruchsarten, die sich automatisch prüfen lassen, in `tools/pruefen.js` ergänzen.
- Kleine Commits mit aussagekräftiger Nachricht auf Deutsch. Jeder Push auf den Standard-Branch
  wird nach erfolgreicher Prüfung automatisch veröffentlicht.
