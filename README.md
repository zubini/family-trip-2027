# Familienreise 2027

**Zur Seite: https://zubini.github.io/family-trip-2027/**

Reiseführer und Variantenvergleich für die Familienreise 2027 (Sa, 19. Juni bis Sa, 24. Juli, 2 Erwachsene und 2 Kids) mit drei Varianten:

- **Spanien / Portugal / Marokko**: mit dem eigenen Auto ab Brig-Glis, rund sechs Tage Marokko mit Fähre, Zug und Mietwagen; als Variante in Marokko nur mit dem Zug bis Marrakesch
- **USA (Las Vegas – New York)**: Nationalparks, Roadtrip nach Chicago und an die Ostküste
- **Malaysia / Thailand**: von Singapur nach Bangkok

Dazu eine Einstiegsseite mit Vergleich, Bewertung, Budget sowie Pro und Contra und eine Seite mit den Quellen.

## Aufbau

Reines HTML, CSS und JavaScript, ohne Build-Schritt. Was im Repo liegt, ist die Webseite.

```
index.html        Seitengerüst
data/             die Inhalte, hier wird fast alles geändert
  start.js        Einstiegsseite: Texte, Bewertung, Pro und Contra
  marokko.js      Spanien / Portugal / Marokko (eigenes Auto, Marokko mit Fähre und Mietwagen)
  marokko2.js     Variante: in Marokko nur mit dem Zug bis Marrakesch
  usa.js          USA (Las Vegas–New York)
  asien.js        Malaysia / Thailand (Singapur–Bangkok)
  quellen.js      Seite «Quellen» (Belege für Fahrzeiten, Einreise, Bilder)
  bilder-unsplash.js  Unsplash-Fotos (erzeugt von tools/bilder-unsplash.js)
css/              Gestaltung (basis, navigation, reise, karte, start)
js/app.js         baut die Seite aus den Daten, lädt Bilder, Navigation
js/schutz.js      einfache Passwortsperre (nur Prüfwert im Repo, kein echter Schutz; Anleitung für neues Passwort in der Datei)
karten/           Routenkarten als SVG (werden erzeugt, nicht von Hand ändern)
tools/karten/     Kartenbeschreibungen: Orte, Wege, Stationen pro Karte
tools/karte.js    zeichnet die Karten aus tools/karten/ nach karten/
tools/geo/        Küstenlinien für die Karten
tools/pruefen.js  prüft die Daten auf Widersprüche
tools/version.js  hängt beim Veröffentlichen Versionen an CSS/JS an (Cache)
CLAUDE.md         Regeln für Änderungen
```

## Inhalte ändern

Die verbindlichen Regeln für Änderungen (Folgeänderungen bei Routen, Zeitangaben, Quellen, Schreibweise, Datenschutz) stehen in [`CLAUDE.md`](CLAUDE.md).

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
- **Unsplash:** Die ersten vier Bilder jeder Station und die Titelbilder kommen, wenn möglich, von Unsplash. Die GitHub-Action «Unsplash-Bilder» sucht sie stündlich mit `tools/bilder-unsplash.js` (Schlüssel im Repository-Secret `UNSPLASH_ACCESS_KEY`, 50 Anfragen pro Stunde) und schreibt sie nach `data/bilder-unsplash.js`. Ein unpassendes Foto dort löschen und den Eintrag auf `0` setzen, dann kommt wieder das Commons-Bild. Neue oder geänderte `suche`-Texte werden beim nächsten Lauf gesucht. Bilder mit fester Commons-`datei` (von Hand ausgewählt) sucht das Werkzeug nicht.
- **Ersatzbilder:** Findet die Seite zu einem Motiv kein Bild, sucht sie ein anderes Bild der Station (über den Stationsnamen). Heisst der Ort auf Englisch anders, `ersatzsuche` setzen (z.B. `"Lisbon"`).
- **Quellen:** Neue Belege in `data/quellen.js` als `["Beschreibung", "https://…"]` in die passende Gruppe eintragen.
- **Varianten:** Eine Reise kann eine Alternative haben (eigene Datei mit `alternativeZu: "<reise>"`, beide mit `variante` als Text im Umschalter). Die Alternative erscheint nicht im Menü und nicht auf der Einstiegsseite, sondern als Umschalter oben auf der Reiseseite. Eigene Karten unter `tools/karten/` anlegen.
- **Reihenfolge:** Die Navigation folgt der Reihenfolge der Skripte in `index.html`, die Spalten der Einstiegsseite der Reihenfolge in `data/start.js`.
- **Texte** dürfen einfaches HTML enthalten (`<b>`, `<strong>`).
- **Symbol der Anreise** (Bus, Zug, Schiff, Flug, Auto) wird am Anfang des Anreise-Textes erkannt (z.B. «Mit dem Auto…», «Autofähre…», «Zug…»).
- **Länder-Etikett:** `land` ist das Kürzel für die Farbe (`sg`, `my`, `th`, `us`, `es`, `pt`, Farben in `css/reise.css`), `region` der angezeigte Text.

Prüfen vor dem Push (braucht [Node.js](https://nodejs.org)). Geprüft werden Daten und Nächte, Budget-Summen und die Daten in den Karten:

```sh
node tools/pruefen.js
```

Die GitHub-Action macht das bei jedem Push ebenfalls und veröffentlicht nur, wenn alles stimmt.

## Ansehen

`index.html` per Doppelklick im Browser öffnen, ganz ohne Server. Die Bilder werden von Wikimedia Commons geladen und brauchen deshalb Internet.

## Karten

Die Karten werden aus kurzen Beschreibungen erzeugt. Für eine neue oder geänderte Karte:

1. In `tools/karten/<name>.js` Orte, Wege und Stationen eintragen (Vorlage: eine bestehende Datei kopieren). Dateien mit `_` am Anfang enthalten Orte und Wege, die mehrere Karten gemeinsam nutzen.
2. `node tools/karte.js <name>` ausführen. Das schreibt `karten/<name>.svg`.
3. In `data/<reise>.js` unter `karte.karten` die Datei eintragen.

Aufbau einer Beschreibung (Koordinaten immer `[Breite, Länge]`, z.B. aus Google Maps per Rechtsklick):

| Feld | Inhalt |
|---|---|
| `reise` | Name der Datendatei; Namen und Daten der Stationen kommen von dort |
| `projektion`, `laenge`, `breitengrad`, `breite` | Ausschnitt und Bildbreite; `parallel` gleicht die Verzerrung abseits des Äquators aus |
| `laender` | Länder, die hell dargestellt werden (Kürzel wie `ESP`, `PRT`) |
| `orte` | benannte Koordinaten, damit Wege und Stationen sie wiederverwenden können |
| `wege` | `[Verkehrsmittel, Bezeichnung, [Orte oder Koordinaten]]`; Verkehrsmittel: `bus`, `car`, `train`, `ferry`, `air` |
| `stationen` | `[Nummer, Ort, Seite der Beschriftung (l/r/u/d), eigener Name optional]` |
| `zwischenstopps`, `umstiege` | kleine weisse Punkte mit Beschriftung |
| `klein` | Stationen nur als Punkte ohne Nummer (für Übersichtskarten) |
| `beschriftungen`, `hinweise` | Länder- und Meernamen, freie Texte wie «Ankunft aus Zürich» |

`node tools/pruefen.js` meldet, wenn eine Karte nach einer Änderung (z.B. neue Daten) nicht neu gezeichnet wurde.
Die Wege sind vereinfachte Linien, keine exakten Strassen- oder Fährverläufe. Die Küstenlinien stammen aus einem
MIT-lizenzierten Datensatz (siehe `tools/geo/LICENSE-kuestenlinien.txt`).

## Veröffentlichen

Die Seite liegt auf GitHub Pages. Bei jedem Push auf den Standard-Branch prüft die GitHub-Action die Daten und veröffentlicht danach die Seite. Dabei hängt `tools/version.js` an jede CSS-, JS- und Kartendatei einen Hash ihres Inhalts an, damit der Browser Änderungen sofort lädt. Voraussetzung ist einmalig *Settings → Pages → Source:* „GitHub Actions“ (ist eingerichtet).
