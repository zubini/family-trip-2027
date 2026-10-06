# Familienreise 2027

**Zur Seite: https://zubini.github.io/family-trip-2027/**

Reiseführer und Variantenvergleich für die Familienreise 2027 (18. Juni bis 22. Juli, 2 Erwachsene, 2 Kids) mit drei Varianten:

- **Singapur – Bangkok** über Malaysia und Thailand
- **Singapur – Bali** über Malaysia und Java
- **Las Vegas – New York** quer durch die USA

Dazu eine Einstiegsseite mit Vergleich, Bewertung, Budget sowie Pro und Contra und eine Seite mit den Quellen.

## Aufbau

Reines HTML, CSS und JavaScript, ohne Build-Schritt. Was im Repo liegt, ist die Webseite.

```
index.html        Seitengerüst
data/             die Inhalte, hier wird fast alles geändert
  start.js        Einstiegsseite: Texte, Bewertung, Pro und Contra
  asien.js        Singapur–Bangkok
  bali.js         Singapur–Bali
  usa.js          Las Vegas–New York
  quellen.js      Seite «Quellen» (Belege für Fahrzeiten, Einreise, Bilder)
css/              Gestaltung (basis, navigation, reise, karte, start)
js/app.js         baut die Seite aus den Daten, lädt Bilder, Navigation
karten/           Routenkarten als SVG
tools/pruefen.js  prüft die Daten auf Widersprüche
```

## Inhalte ändern

Datei in `data/` bearbeiten, committen, pushen. Die Seite wird automatisch neu veröffentlicht.

Jede Reise in `data/` enthält der Reihe nach:

| Feld | Inhalt |
|---|---|
| `titel`, `untertitel`, `titelbild` | Kopfbereich |
| `hinflug`, `plan`, `rueckflug` | Reiseplan-Tabelle |
| `planHinweise` | Hinweise unter dem Reiseplan |
| `karte` | Einleitung, Legende und Karten-Dateien |
| `abwechslung` | Kacheln «Abwechslung unterwegs» |
| `stationen` | die Stationen mit Anreise, Text, Teens, Fakten, Bildern |
| `budget` | Gesamtbetrag, Posten, Kosten pro Station, Hinweise |
| `tipps` | «Wichtige Hinweise» zum Aufklappen |

**Regeln:**

- **Daten ohne Wochentag eintragen**, z.B. `"19.–22. Juni"` oder `"22. Juli"`. Wochentage und das Jahr 2027 ergänzt `js/app.js` selbst.
- **Plan und Stationen müssen zusammenpassen:** gleiches Datum und gleiche Nächte. Die Nächte im Plan ergeben zusammen `budget.naechte`.
- **Budget:** Die Beträge werden von Hand gepflegt. Die Einstiegsseite liest Planwert, Spanne und Nächte automatisch aus den Reisen.
- **Bewertung und Pro/Contra** in `data/start.js` sind eine Einschätzung. Bei Änderungen an den Reisen von Hand nachziehen.
- **Bilder:** Jedes Bild hat einen `titel` (Bildunterschrift) und entweder eine feste `datei` auf Wikimedia Commons oder `suche` (Suchbegriffe, mit `|` getrennt) und `stichwort` (muss im Dateinamen vorkommen). Gesuchte Bilder werden beim Öffnen der Seite automatisch gefunden.
- **Quellen:** Neue Belege in `data/quellen.js` als `["Beschreibung", "https://…"]` in die passende Gruppe eintragen.
- **Texte** dürfen einfaches HTML enthalten (`<b>`, `<strong>`).
- **Symbol der Anreise** (Bus, Zug, Schiff, Flug, Auto) wird am Anfang des Anreise-Textes erkannt.
- **Länder-Etikett:** `land` ist das Kürzel für die Farbe (`sg`, `my`, `th`, `id`, `us`, Farben in `css/reise.css`), `region` der angezeigte Text.

Prüfen vor dem Push (braucht [Node.js](https://nodejs.org)):

```sh
node tools/pruefen.js
```

Die GitHub-Action macht das bei jedem Push ebenfalls und veröffentlicht nur, wenn alles stimmt.

## Ansehen

`index.html` per Doppelklick im Browser öffnen, ganz ohne Server. Die Bilder werden von Wikimedia Commons geladen und brauchen deshalb Internet.

## Karten

Die Karten in `karten/` sind fertige SVG-Dateien und lassen sich mit jedem Texteditor oder Vektorprogramm (z.B. Inkscape) bearbeiten. Die Wege sind vereinfachte Linien, keine exakten Strassen- oder Fährverläufe. Die Küstenlinien stammen aus einem MIT-lizenzierten Datensatz (siehe `karten/LICENSE-kuestenlinien.txt`).

## Veröffentlichen

Die Seite liegt auf GitHub Pages. Bei jedem Push auf den Standard-Branch prüft die GitHub-Action die Daten und veröffentlicht danach die Seite. Voraussetzung ist einmalig *Settings → Pages → Source:* „GitHub Actions“ (ist eingerichtet).
