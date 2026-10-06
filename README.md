# Familienreise 2027

Reiseführer und Variantenvergleich für die Familienreise 2027 – als eine einzige, statische HTML-Seite.
Die Seite enthält drei Reisevarianten:

- **Singapur – Bangkok**
- **Singapur – Bali**
- **Las Vegas – New York**

Dazu eine Einstiegsseite mit Vergleich, Bewertung nach Wünschen sowie Pro und Contra, Karten (SVG, offline), Tagesplänen, Budget und Tipps.

## Aufbau des Repos

```
docs/                 fertige Webseite (das, was man im Browser öffnet)
  index.html          wird aus src/ erzeugt – nicht von Hand ändern
src/                  Python-Generator für die Seite
  site.py             Einstieg: Seitenaufbau, Navigation, Bildlader (JS)
  gen3.py             Grundlayout, Farben (CSS), Datumsfunktionen
  gen2.py, imgs.py    Singapur–Bangkok: Plan, Stationen, Budget, Tipps, Bilder
  svgmap.py, route.py Singapur–Bangkok: Karte und Wege
  trip_bali.py        Singapur–Bali: alles
  trip_usa.py         Las Vegas–New York: alles
  maps_new.py         Karten Bali/USA: Koordinaten und Wege
  svgmap2.py          Karten Bali/USA: Zeichnen
  start_page.py       Einstiegsseite: Vergleich, Bewertung, Pro/Contra
  start.css           Styles der Einstiegsseite
  gen.py              Altlast (erste Indonesien-Version, liefert Hilfswerte)
  geo/                Küstenlinien (MIT-Lizenz, siehe LICENSE-countries-land-10km.txt)
tools/
  bilder-einbetten.py erzeugt docs/index-offline.html mit eingebetteten Bildern
Makefile              Befehle zum Bauen und Prüfen
```

## Benutzen

Voraussetzung: Python 3 – keine Zusatzpakete, für den Build kein Internet.

```sh
make            # docs/index.html aus src/ neu erzeugen
make check      # prüfen, ob docs/index.html zum Quellcode passt
make serve      # Vorschau auf http://localhost:8000
make offline    # docs/index-offline.html mit eingebetteten Bildern (braucht Internet)
make clean      # Zwischendateien löschen
```

Ohne `make`: `cd src && python3 site.py` erzeugt `src/index.html`.

**Ablauf beim Ändern:** Datei in `src/` bearbeiten → `make` → `docs/index.html` mit committen.
Die GitHub-Action prüft bei jedem Push mit `make check`, dass beides zusammenpasst.

Die Bilder werden im Browser von Wikimedia Commons nachgeladen. Wer die Seite ohne Internet
(oder in einer Vorschau) ansehen will, erzeugt mit `make offline` eine Version mit eingebetteten Bildern.

## Wichtige Regeln beim Ändern

- **Nächte und Daten müssen zusammenpassen.** Jede Reise hat eine Plan-Tabelle (`plan` bzw. `PLAN`) und die Stationen mit Datum (`tt` bzw. `ST`). Beide müssen dieselben Daten und Nächte haben. Das Budget (Spannen, Planwert, Stationskosten) wird von Hand mitgeführt.
- **Einstiegsseite:** Die Budgetzahlen dort werden automatisch aus den Reisen gelesen. Die Bewertungspunkte und die Pro-und-Contra-Texte in `start_page.py` sind eine Einschätzung und müssen bei Änderungen an den Reisen von Hand angepasst werden.
- **Jahr und Wochentage:** Die Wochentage werden aus dem Jahr 2027 berechnet (`gen3.py`, Funktionen `fd` und `fdin`).
- **Bilder:** Jedes Bild hat eine Bildunterschrift, Suchbegriffe (mit `|` getrennte Alternativen) und Stichworte, die im Dateinamen vorkommen müssen. Fest eingesetzte Bilder haben als viertes Element den Dateinamen auf Wikimedia Commons.
- **Karten:** Die Wege sind vereinfachte Linien (Koordinaten in `maps_new.py`, `route.py`), keine exakten Strassen- oder Fährverläufe.

## Altlasten

- `gen.py` ist die erste Version der Indonesien-Reise. Sie wird nur wegen einiger Hilfswerte geladen und kann entfernt werden, wenn `gen2.py` entsprechend angepasst wird.
- Die Daten für Singapur–Bangkok liegen in `gen2.py`, weil sie dort über viele Änderungen gewachsen sind. Singapur–Bali und Las Vegas–New York sind sauberer in eigene Dateien aufgeteilt.

## Veröffentlichen (optional)

Die Seite kann über GitHub Pages veröffentlicht werden – standardmässig ist das **aus**:

1. *Settings → Pages → Source:* „GitHub Actions“
2. *Settings → Secrets and variables → Actions → Variables:* `DEPLOY_PAGES` = `true`

Danach wird bei jedem Push auf `main` veröffentlicht. Hinweis: Bei privaten Repos braucht Pages einen bezahlten GitHub-Plan, und die Seite ist dann trotzdem öffentlich erreichbar.
