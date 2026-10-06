# Familienreise 2027 – Seite bauen
#   make          index.html aus src/ neu erzeugen (nach docs/)
#   make check    prüfen, ob docs/index.html zum Quellcode passt
#   make offline  docs/index-offline.html mit eingebetteten Bildern (braucht Internet)
#   make serve    lokale Vorschau auf http://localhost:8000
#   make clean    Zwischendateien löschen

PYTHON ?= python3

.PHONY: build check offline serve clean

build:
	cd src && $(PYTHON) site.py > /dev/null
	mv src/index.html docs/index.html
	@echo "docs/index.html erzeugt"

check:
	cd src && $(PYTHON) site.py > /dev/null
	@if cmp -s src/index.html docs/index.html; then \
		rm src/index.html; echo "OK: docs/index.html ist aktuell"; \
	else \
		rm src/index.html; echo "FEHLER: docs/index.html ist veraltet – 'make' ausführen und committen"; exit 1; \
	fi

offline: build
	cd docs && $(PYTHON) ../tools/bilder-einbetten.py

serve:
	$(PYTHON) -m http.server 8000 --directory docs

clean:
	rm -rf src/build src/__pycache__ src/index.html docs/index-offline.html
