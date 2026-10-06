// Reise 5: Costa-Rica-Rundreise ab San José (Mietwagen, Shuttle und Boot, keine Inlandflüge)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.costarica = {
  titel: "Costa-Rica-Rundreise ab San José",
  menu: "Costa Rica",
  untertitel: "Fünf Wochen Regenwald, Vulkane und zwei Meere: Karibik, Arenal, Nebelwald und die wilde Osa-Halbinsel am Pazifik.",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Arenal Volcano|Manuel Antonio beach|Corcovado National Park",
    stichwort: "arenal|manuel antonio|corcovado",
    alt: "Landschaft in Costa Rica"
  },
  planIntro: "Abflug ab Zürich am Fr, 18.06.2027, Rückflug ab San José am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18. Juni",
    name: "Flug Zürich–San José",
    info: "Abflug am Fr, 18.06.2027, Direktflug ca. 12,5 Std., Ankunft am selben Tag am Nachmittag (Flugtage prüfen)"
  },
  plan: [
    {datum: "18.–19. Juni", name: "Erste Nacht in Alajuela", naechte: 1, info: "Hotel nahe dem Flughafen San José"},
    {datum: "19.–22. Juni", name: "1. Tortuguero", naechte: 3, info: "Shuttle bis La Pavona, Boot durch die Kanäle (ca. 4,5–5,5 Std.)"},
    {datum: "22.–26. Juni", name: "2. Puerto Viejo und Cahuita", naechte: 4, info: "Boot und Shuttle an die Südkaribik (ca. 5–6 Std.)"},
    {datum: "26. Juni–1. Juli", name: "3. La Fortuna und Arenal", naechte: 5, info: "Mietwagen ab Puerto Viejo (ca. 5,5–6 Std.)"},
    {datum: "1.–4. Juli", name: "4. Monteverde", naechte: 3, info: "Mietwagen um den Arenal-See (ca. 3,5 Std.)"},
    {datum: "4.–8. Juli", name: "5. Manuel Antonio", naechte: 4, info: "Mietwagen über die Küste (ca. 3,5–4 Std.)"},
    {datum: "8.–11. Juli", name: "6. Uvita", naechte: 3, info: "Mietwagen (ca. 1–1,5 Std.)"},
    {datum: "11.–16. Juli", name: "7. Drake Bay (Osa)", naechte: 5, info: "Mietwagen bis Sierpe, Boot (ca. 2,5–3 Std. insgesamt)"},
    {datum: "16.–18. Juli", name: "8. San Gerardo de Dota", naechte: 2, info: "Boot nach Sierpe, Mietwagen in die Berge (ca. 5–5,5 Std.)"},
    {datum: "18.–21. Juli", name: "9. Turrialba", naechte: 3, info: "Mietwagen über Cartago (ca. 2,5–3 Std.)"},
    {datum: "21.–22. Juli", name: "Letzte Nacht in Alajuela", naechte: 1, info: "Mietwagen zum Flughafen (ca. 2–2,5 Std.), Rückgabe am Abreisetag"}
  ],
  rueckflug: {datum: "22. Juli", name: "Flug San José–Zürich", info: "Rückflug ab San José, Direktflug ca. 11 Std., Ankunft am nächsten Tag"},
  planHinweise: [
    [
      "Gesamt",
      "34 Nächte, 9 Stationen und je eine Nacht in Alajuela am Anfang und am Ende. Nur Hin- und Rückflug: an die Karibik mit Shuttle und Boot, danach mit dem Mietwagen, nach Tortuguero und Drake Bay mit dem Boot. Die längsten Reisetage: Puerto Viejo–La Fortuna (ca. 5,5–6 Std.), Tortuguero–Puerto Viejo (ca. 5–6 Std.), Drake Bay–San Gerardo de Dota (ca. 5–5,5 Std.) und San José–Tortuguero (ca. 4,5–5,5 Std.). Zusammen sind es ca. 35–40 Stunden reine Fahrzeit; auf den kurvigen, oft nassen Strassen mit Pausen und Bootswartezeiten realistisch ca. 45 Stunden."
    ],
    [
      "Vorab buchen",
      "Lodges in Tortuguero und Drake Bay (oft mit Vollpension, Bootstransfer und Touren), Shuttle und Boot nach Tortuguero, Mietwagen (4×4, Einwegmiete ab Puerto Viejo), Corcovado-Tour (nur mit lizenziertem Guide, Plätze begrenzt), Schnorcheltour zur Isla del Caño, Rafting auf dem Pacuare."
    ],
    [
      "Mietwagen",
      "Ein 4×4 ist für Monteverde, Uvita und San Gerardo de Dota sinnvoll. Die Haftpflichtversicherung ist in Costa Rica Pflicht und oft nicht im Online-Preis enthalten. Nicht im Dunkeln fahren (ab ca. 18 Uhr), Waze nutzen, nichts sichtbar im Auto lassen."
    ],
    [
      "Optional",
      "Rio Celeste und Vulkan Tenorio (Tagesausflug ab La Fortuna), Rincón de la Vieja und Strände in Guanacaste (Nordwesten, trockener), Vulkan Poás (ab Alajuela), Bocas del Toro in Panama (ab Puerto Viejo, Grenzübertritt nötig)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Edelweiss-Direktflug Zürich–San José ca. 12,5 Std. (Zeitverschiebung −8 Std.), Ankunft am selben Tag. Rückflug: Direktflug San José–Zürich ca. 11 Std. über Nacht, Ankunft am nächsten Tag. Edelweiss fliegt ca. dreimal pro Woche: Fliegt am Fr, 18.06. oder Do, 22.07.2027 kein Direktflug, auf einen Nachbartag ausweichen oder mit Umstieg fliegen (z.B. über Madrid, Frankfurt oder Amsterdam, ca. 15–18 Std.). Flugtage und Zeiten bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel.",
    breit: true,
    legende: ["bus", "car", "ferry"],
    karten: [{datei: "karten/costarica.svg"}]
  },
  abwechslungIntro: "Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen. Touren am Morgen, am Nachmittag regnet es oft.",
  abwechslung: [
    ["Action und Abenteuer", "Ziplines und Hängebrücken in La Fortuna und Monteverde, Canyoning, Rafting auf dem Pacuare, Surf-Schnupperstunde in Uvita oder Puerto Viejo."],
    ["Natur und Tiere", "Faultiere, Affen, Tukane, Kaimane, Frösche und Aras: Tortuguero, Corcovado, Manuel Antonio. Dazu Meeresschildkröten und mit Glück die ersten Buckelwale."],
    ["Vulkane und Nebelwald", "Arenal mit heissen Quellen, Nebelwald in Monteverde, Quetzal-Vögel in San Gerardo de Dota, Vulkan Irazú bei Turrialba."],
    ["Strand und Schnorcheln", "Korallenriff im Cahuita-Nationalpark, Isla del Caño vor Drake Bay (bestes Schnorcheln der Reise), Strände in Manuel Antonio und Uvita."],
    ["Kultur", "Karibische Küche und Musik in Puerto Viejo, Kakao- und Kaffeetouren, Bribri-Gemeinschaft bei Puerto Viejo, Markt in San José."]
  ],
  stationenIntro: "Neun Stationen von der Karibik über die Vulkane bis zur Osa-Halbinsel am Pazifik. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Tortuguero (Start)",
      land: "cr",
      region: "Karibik",
      datum: "19.–22. Juni",
      naechte: "3 Nächte",
      zwischenstopp: {text: "Erste Nacht in Alajuela", datum: "18.–19. Juni"},
      anreise: "Direktflug Zürich–San José (ca. 12,5 Std.), Hotel nahe dem Flughafen. Am Morgen Shuttle durch den Nationalpark Braulio Carrillo nach La Pavona (ca. 2,5–3 Std.), dann Boot durch die Kanäle nach Tortuguero (ca. 1–1,5 Std.).",
      text: "Dorf ohne Strassen zwischen Kanälen, Regenwald und Karibikstrand, nur per Boot erreichbar. Tortuguero ist einer der wichtigsten Nistplätze für Meeresschildkröten.",
      teens: "Kanutour im Morgengrauen zu Kaimanen, Affen und Tukanen, Nachtwanderung zu Fröschen und Spinnen, nächtliche Schildkröten-Tour mit Guide, Dschungelwanderung auf den Cerro Tortuguero.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Die meisten Lodges bieten Pakete mit Transfer, Vollpension und Touren an.",
        "<strong>Schildkröten:</strong> Ende Juni ist Übergangszeit: Lederschildkröten nisten bis Juni, Suppenschildkröten ab Juli (Höhepunkt August und September). Sichtungen sind möglich, aber nicht sicher.",
        "<strong>Baden:</strong> Am Strand nicht schwimmen: starke Strömung und Haie; Lodges haben Pools.",
        "<strong>Gepäck:</strong> Grosses Gepäck kann beim Shuttle-Anbieter in San José bleiben, nur Taschen ins Boot."
      ],
      ausserdem: "Sea Turtle Conservancy (Besucherzentrum), Dorf Tortuguero mit Cafés, Kajakverleih, Strand bei Sonnenuntergang.",
      bilder: [
        {titel: "Kanäle", suche: "Tortuguero canal|Tortuguero National Park", stichwort: "tortuguero"},
        {titel: "Suppenschildkröte", suche: "green sea turtle Tortuguero|Chelonia mydas Tortuguero", stichwort: "tortuguero|chelonia"},
        {titel: "Kaiman", suche: "spectacled caiman Costa Rica", stichwort: "caiman"},
        {titel: "Tukan", suche: "keel-billed toucan Costa Rica", stichwort: "toucan"},
        {titel: "Rotaugenlaubfrosch", suche: "red-eyed tree frog Costa Rica|Agalychnis callidryas", stichwort: "agalychnis|tree frog"},
        {titel: "Strand", suche: "Tortuguero beach", stichwort: "tortuguero"}
      ]
    },
    {
      nr: 2,
      name: "Puerto Viejo und Cahuita",
      land: "cr",
      region: "Südkaribik",
      datum: "22.–26. Juni",
      naechte: "4 Nächte",
      anreise: "Boot durch die Kanäle nach Moín (ca. 3–3,5 Std.) und Shuttle nach Puerto Viejo (ca. 1–1,5 Std.); alternativ Boot zurück nach La Pavona und Shuttle (ähnlich lang). Insgesamt ca. 5–6 Std.",
      text: "Entspannte Südkaribik mit Palmenstränden, Regenwald bis ans Meer und afro-karibischer Kultur. Im Cahuita-Nationalpark liegt eines der wenigen Korallenriffe des Landes.",
      teens: "Schnorcheln am Riff von Cahuita (nur mit Guide), Velotour entlang der Strände nach Punta Uva und Manzanillo, Jaguar Rescue Center (verletzte Wildtiere), Surfstunde am Playa Cocles.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte. Velos sind hier das Verkehrsmittel; viele Unterkünfte verleihen sie.",
        "<strong>Wetter:</strong> Die Karibikküste hat ein eigenes Klima; auch im Juli regnet es zeitweise. Die Sicht beim Schnorcheln hängt von Wellen und Regen ab.",
        "<strong>Baden:</strong> Starke Strömungen an manchen Stränden; Punta Uva und Cahuita (Playa Blanca) sind meist ruhig.",
        "<strong>Mietwagen:</strong> Für die Weiterfahrt den Mietwagen hier übernehmen (Filiale vor Ort oder Lieferung durch den Vermieter)."
      ],
      ausserdem: "Gandoca-Manzanillo-Wildschutzgebiet, Schokoladentour, Bribri-Wasserfall, Ara-Projekt in Manzanillo.",
      bilder: [
        {titel: "Cahuita", suche: "Cahuita National Park beach|Cahuita", stichwort: "cahuita"},
        {titel: "Punta Uva", suche: "Punta Uva beach", stichwort: "punta uva"},
        {titel: "Manzanillo", suche: "Manzanillo Costa Rica beach|Gandoca Manzanillo", stichwort: "manzanillo"},
        {titel: "Puerto Viejo", suche: "Puerto Viejo de Talamanca", stichwort: "puerto viejo"},
        {titel: "Pfeilgiftfrosch", suche: "Oophaga pumilio|strawberry poison dart frog", stichwort: "oophaga|pumilio|poison"},
        {titel: "Korallenriff", suche: "Cahuita coral reef", stichwort: "cahuita|coral"}
      ]
    },
    {
      nr: 3,
      name: "La Fortuna und Arenal",
      land: "cr",
      region: "Alajuela",
      datum: "26. Juni–1. Juli",
      naechte: "5 Nächte",
      anreise: "Mietwagen über Limón, Guápiles und Puerto Viejo de Sarapiquí nach La Fortuna (ca. 5,5–6 Std., ca. 270 km).",
      text: "Am Fuss des kegelförmigen Vulkans Arenal liegt das Abenteuerzentrum des Landes: Hängebrücken, Wasserfall, heisse Quellen und Regenwald.",
      teens: "Hängebrücken im Regenwald, Zipline über die Baumkronen, Canyoning, Baden unter dem Wasserfall La Fortuna, Abend in den heissen Quellen, Wanderung über alte Lavafelder.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte, mit einem Tagesausflug zum türkisfarbenen Rio Celeste (ca. 1,5 Std. pro Weg).",
        "<strong>Vulkan:</strong> Der Arenal ist seit 2010 ruhig; der Gipfel ist gesperrt, oft in Wolken.",
        "<strong>Alter:</strong> Für Ziplines und Canyoning gelten Mindestalter und -gewicht; beide Kids erfüllen sie meist."
      ],
      ausserdem: "Arenal-See (Kajak), Mistico-Hängebrückenpark, Ecocentro Danaus, Kakao-Tour, Vulkan Tenorio.",
      bilder: [
        {titel: "Arenal", suche: "Arenal Volcano", stichwort: "arenal"},
        {titel: "Wasserfall La Fortuna", suche: "La Fortuna Waterfall", stichwort: "fortuna"},
        {titel: "Rio Celeste", suche: "Rio Celeste Tenorio", stichwort: "celeste"},
        {titel: "Hängebrücke", suche: "Arenal hanging bridges|Mistico hanging bridge", stichwort: "hanging bridge|arenal"},
        {titel: "Heisse Quellen", suche: "Tabacon hot springs|Arenal hot springs", stichwort: "tabacon|hot spring"},
        {titel: "Tenorio", suche: "Tenorio Volcano National Park", stichwort: "tenorio"}
      ]
    },
    {
      nr: 4,
      name: "Monteverde",
      land: "cr",
      region: "Puntarenas",
      datum: "1.–4. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen um den Arenal-See über Tilarán nach Monteverde (ca. 3,5 Std.); die letzten Kilometer sind kurvig und teils unbefestigt. Ohne Auto gibt es das Jeep-Boot-Jeep-Transfer über den See (ca. 3 Std.).",
      text: "Der Nebelwald in den Bergen ist moosig, kühl und voller Orchideen. Bekannt für Hängebrücken, lange Ziplines und Nachtwanderungen.",
      teens: "Lange Zipline mit «Superman»-Strecke, Nachttour mit Taranteln, Faultieren und Fröschen, Hängebrücken im Nebelwald, Kaffeefarm.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Morgens ist die Chance auf klare Sicht und Tiere am grössten.",
        "<strong>Kleidung:</strong> Kühl (ca. 15–22 °C) und feucht: Pullover und Regenjacke.",
        "<strong>Reservate:</strong> Monteverde und Santa Elena früh am Morgen mit Guide besuchen, Tickets online."
      ],
      ausserdem: "Santa-Elena-Reservat, Kolibri-Garten, Schmetterlingsgarten, Curi-Cancha-Reservat, Käserei.",
      bilder: [
        {titel: "Nebelwald", suche: "Monteverde Cloud Forest", stichwort: "monteverde"},
        {titel: "Zipline", suche: "zip line Monteverde|canopy zip line Costa Rica", stichwort: "zip"},
        {titel: "Nasenbär", suche: "white-nosed coati Costa Rica|Nasua narica", stichwort: "coati|nasua"},
        {titel: "Glasfrosch", suche: "glass frog Costa Rica|Hyalinobatrachium", stichwort: "glass frog|hyalinobatrachium"},
        {titel: "Santa Elena", suche: "Santa Elena Cloud Forest Reserve", stichwort: "santa elena"},
        {titel: "Orchidee", suche: "Monteverde orchid", stichwort: "monteverde|orchid"}
      ]
    },
    {
      nr: 5,
      name: "Manuel Antonio",
      land: "cr",
      region: "Zentralpazifik",
      datum: "4.–8. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen über die Küstenstrasse 34 an Jacó vorbei nach Quepos und Manuel Antonio (ca. 3,5–4 Std.). Halt an der Tárcoles-Brücke mit Krokodilen.",
      text: "Kleiner Nationalpark, in dem Regenwald direkt an weisse Sandstrände grenzt. Affen, Faultiere und Waschbären sind fast garantiert.",
      teens: "Nationalpark mit Guide (Faultiere, Kapuzineraffen, Totenkopfäffchen), Baden an der Playa Manuel Antonio, Katamaran-Ausflug mit Schnorcheln, Kajak in den Mangroven, Surfstunde in Playa Espadilla.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte. Der Park ist dienstags geschlossen (am Di, 06.07.2027 also nicht einplanen), Tickets nur online und mit Zeitfenster.",
        "<strong>Hinweis:</strong> Affen nicht füttern, Essen gut verstauen; in den Park dürfen keine Snacks und Plastiktüten mitgenommen werden.",
        "<strong>Wetter:</strong> Grüne Saison: Vormittags oft sonnig, nachmittags Schauer. Ende Juni oder Juli gibt es oft eine trockenere Phase («Veranillo»)."
      ],
      ausserdem: "Playa Biesanz, Rainmaker-Park (Hängebrücken), Marina Pez Vela in Quepos, Nauyaca-Wasserfälle (auf dem Weg nach Uvita).",
      bilder: [
        {titel: "Manuel Antonio", suche: "Manuel Antonio National Park beach|Manuel Antonio", stichwort: "manuel antonio"},
        {titel: "Totenkopfäffchen", suche: "squirrel monkey Manuel Antonio|Saimiri oerstedii", stichwort: "saimiri|squirrel monkey"},
        {titel: "Kapuzineraffe", suche: "white-faced capuchin Costa Rica", stichwort: "capuchin"},
        {titel: "Faultier", suche: "sloth Manuel Antonio|two-toed sloth Costa Rica", stichwort: "sloth"},
        {titel: "Playa Espadilla", suche: "Playa Espadilla", stichwort: "espadilla"},
        {titel: "Tárcoles", suche: "Tarcoles River crocodiles", stichwort: "tarcoles|tárcoles"}
      ]
    },
    {
      nr: 6,
      name: "Uvita",
      land: "cr",
      region: "Südpazifik",
      datum: "8.–11. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen über die Costanera nach Uvita (ca. 1–1,5 Std.), unterwegs Abstecher zu den Nauyaca-Wasserfällen.",
      text: "Ruhige Küste mit dem Meeresnationalpark Marino Ballena, dessen Sandbank bei Ebbe die Form einer Walflosse hat. Ab Juli kommen Buckelwale aus der Südhalbkugel zum Kalben.",
      teens: "Bei Ebbe über die «Walflosse» laufen, Bootstour zu Walen und Delfinen, Nauyaca-Wasserfälle mit Badebecken, Surfstunde in Dominical.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Den Strand nach den Gezeiten planen.",
        "<strong>Wale:</strong> Die Saison der südlichen Buckelwale beginnt im Juli und hat ihren Höhepunkt im August und September; Anfang Juli sind Sichtungen möglich, aber nicht sicher.",
        "<strong>Baden:</strong> In Dominical starke Brandung, nur mit Surflehrer ins Wasser."
      ],
      ausserdem: "Playa Ventanas (Höhlen bei Ebbe), Cascada Pavón, Playa Hermosa, Ojochal (Restaurants).",
      bilder: [
        {titel: "Walflosse", suche: "Marino Ballena National Park whale tail|Marino Ballena", stichwort: "ballena"},
        {titel: "Buckelwal", suche: "humpback whale Costa Rica|humpback whale breaching", stichwort: "humpback"},
        {titel: "Nauyaca", suche: "Nauyaca Waterfalls", stichwort: "nauyaca"},
        {titel: "Uvita", suche: "Uvita beach Costa Rica|Playa Uvita", stichwort: "uvita"},
        {titel: "Playa Ventanas", suche: "Playa Ventanas Costa Rica", stichwort: "ventanas"},
        {titel: "Dominical", suche: "Dominical beach", stichwort: "dominical"}
      ]
    },
    {
      nr: 7,
      name: "Drake Bay (Osa)",
      land: "cr",
      region: "Osa-Halbinsel",
      datum: "11.–16. Juli",
      naechte: "5 Nächte",
      anreise: "Mietwagen nach Sierpe (ca. 1 Std.), Auto auf einem bewachten Parkplatz lassen, Boot durch die Mangroven und über das Meer nach Drake Bay (ca. 1–1,5 Std.). Insgesamt ca. 2,5–3 Std.",
      text: "Abgelegene Bucht am Rand des Corcovado-Nationalparks, des artenreichsten Ortes Mittelamerikas. Hier ist der Regenwald noch wild: Tapire, Aras, vier Affenarten und mit viel Glück Pumas.",
      teens: "Ganztagestour in den Corcovado (Station Sirena oder San Pedrillo) mit Guide, Schnorcheln an der Isla del Caño mit Schildkröten, Rochen und Riffhaien, Nachttour, Wanderung am Küstenpfad zu einsamen Stränden.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: ein Tag Corcovado, ein Tag Isla del Caño, dazu Strand- und Ruhetage und Puffer für schlechtes Wetter.",
        "<strong>Unterkunft:</strong> Lodges meist mit Vollpension; Strom und Internet teils eingeschränkt.",
        "<strong>Corcovado:</strong> Nur mit lizenziertem Guide und Reservierung; Tagestouren starten früh mit dem Boot.",
        "<strong>Boot:</strong> Die Bootsfahrt kann bei Wellengang ruppig sein; nasse Landung am Strand, Gepäck in wasserdichten Taschen."
      ],
      ausserdem: "Rio Agujitas (Kajak), Playa San Josecito, Wale und Delfine bei der Bootsfahrt, Mangroven von Sierpe.",
      bilder: [
        {titel: "Corcovado", suche: "Corcovado National Park", stichwort: "corcovado"},
        {titel: "Drake Bay", suche: "Drake Bay Costa Rica|Bahia Drake", stichwort: "drake|bahia drake"},
        {titel: "Isla del Caño", suche: "Isla del Caño", stichwort: "caño|cano"},
        {titel: "Tapir", suche: "Baird's tapir Corcovado|Baird's tapir", stichwort: "tapir"},
        {titel: "Ara", suche: "scarlet macaw Costa Rica|scarlet macaw Osa", stichwort: "macaw"},
        {titel: "Sierpe", suche: "Sierpe River mangroves|Sierpe", stichwort: "sierpe"}
      ]
    },
    {
      nr: 8,
      name: "San Gerardo de Dota",
      land: "cr",
      region: "Talamanca-Berge",
      datum: "16.–18. Juli",
      naechte: "2 Nächte",
      anreise: "Boot nach Sierpe (ca. 1–1,5 Std.), dann Mietwagen über Uvita oder San Isidro und die Panamericana in die Berge (ca. 3,5–4 Std.); die letzten 9 km sind steil, 4×4 empfohlen. Insgesamt ca. 5–5,5 Std.",
      text: "Kühles Bergtal auf über 2’000 Metern mit Eichenwäldern und Forellenbächen. Hier sieht man den Quetzal, einen der schönsten Vögel Amerikas.",
      teens: "Quetzal-Tour am frühen Morgen, Wanderung zum Wasserfall, Forellen fangen und grillen, Lagerfeuer am Abend.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte zum Erholen nach der Osa-Halbinsel.",
        "<strong>Kälte:</strong> Nachts nur ca. 5–10 °C: warme Kleidung mitnehmen, viele Lodges haben Kamine.",
        "<strong>Quetzal:</strong> Mit einem lokalen Guide sind die Chancen sehr gut, vor allem früh am Morgen."
      ],
      ausserdem: "Los-Quetzales-Nationalpark, Cerro de la Muerte (Aussicht), Savegre-Fluss, Kolibri-Futterstellen.",
      bilder: [
        {titel: "Quetzal", suche: "resplendent quetzal San Gerardo de Dota|resplendent quetzal", stichwort: "quetzal"},
        {titel: "Savegre", suche: "Savegre River San Gerardo de Dota|Savegre", stichwort: "savegre"},
        {titel: "Bergwald", suche: "Los Quetzales National Park", stichwort: "quetzales"},
        {titel: "Kolibri", suche: "fiery-throated hummingbird", stichwort: "hummingbird"},
        {titel: "Cerro de la Muerte", suche: "Cerro de la Muerte", stichwort: "cerro de la muerte"},
        {titel: "Tal", suche: "San Gerardo de Dota valley|San Gerardo de Dota", stichwort: "dota"}
      ]
    },
    {
      nr: 9,
      name: "Turrialba (Finale)",
      land: "cr",
      region: "Cartago",
      datum: "18.–21. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen über Cartago nach Turrialba (ca. 2,5–3 Std.).",
      text: "Grünes Tal mit Kaffeefarmen zwischen den Vulkanen Irazú und Turrialba. Der Pacuare gilt als einer der schönsten Wildwasserflüsse der Welt.",
      teens: "Rafting auf dem Pacuare durch den Regenwald-Canyon (ganzer Tag), Krater des Vulkans Irazú mit Blick auf beide Meere bei klarem Wetter, Kaffeefarm, Ausgrabungsstätte Guayabo.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, danach eine Nacht in Alajuela vor dem Rückflug.",
        "<strong>Rafting:</strong> Pacuare ist Klasse III bis IV; Mindestalter meist 12 Jahre, bei hohem Wasserstand teils höher. Mit dem Anbieter klären.",
        "<strong>Irazú:</strong> Früh am Morgen hinfahren, später ziehen Wolken auf; auf 3’400 Metern ist es kalt."
      ],
      ausserdem: "Basilika in Cartago, Orosi-Tal, Lankester-Botanischer-Garten, Mercado Central in San José (auf dem Weg zum Flughafen).",
      bilder: [
        {titel: "Pacuare", suche: "Pacuare River rafting|Pacuare River", stichwort: "pacuare"},
        {titel: "Irazú", suche: "Irazu Volcano crater", stichwort: "irazu|irazú"},
        {titel: "Guayabo", suche: "Guayabo National Monument", stichwort: "guayabo"},
        {titel: "Orosi-Tal", suche: "Orosi Valley", stichwort: "orosi"},
        {titel: "Cartago", suche: "Basilica de Los Angeles Cartago", stichwort: "cartago"},
        {titel: "Kaffee", suche: "coffee plantation Costa Rica", stichwort: "coffee"}
      ]
    }
  ],
  abschluss: "Nach einer letzten Nacht in Alajuela Rückflug ab San José nach Zürich am Do, 22.07.2027 (Direktflug ca. 11 Std., Flugtage prüfen).",
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 34,
    total: "28’600",
    spanne: "21’700–36’000",
    proTag: "ca. 840 CHF pro Tag, ca. 7’150 pro Person",
    posten: [
      ["Flüge Zürich–San José retour", "4’800–6’400", "5’600", "ca. 1’200–1’600 pro Person (Juli ist Hochsaison; beide Kids zahlen Vollpreis)"],
      ["Fernverkehr (Mietwagen, Shuttles, Boote)", "2’900–4’300", "3’600", "4×4 für ca. 27 Tage inkl. Pflichtversicherung und Benzin, Shuttles und Boote Tortuguero–Puerto Viejo, Boot Sierpe–Drake Bay retour"],
      ["Lokale Transfers und Parkieren", "200–500", "300", "Taxis, Velomiete, bewachte Parkplätze"],
      ["Unterkunft (Familienzimmer oder Lodge)", "5’100–9’500", "7’000", "ca. 150–280 CHF pro Nacht; Lodges in Tortuguero und Drake Bay mit Vollpension teurer"],
      ["Verpflegung (Sodas, Restaurants, Getränke)", "3’400–6’100", "4’600", "ca. 100–180 CHF pro Tag für 4 Personen; einfache Sodas sind günstig"],
      ["Aktivitäten und Eintritte", "3’000–5’000", "4’000", "Corcovado-Tour, Isla del Caño, Ziplines, Canyoning, Rafting, Nachttouren, Parkeintritte und Guides"],
      ["Versicherung, eSIM, Medikamente, Impfungen", "600–1’200", "900", "Reisekranken- und Annullationsschutz, Reiseapotheke"],
      ["Reserve (ca. 10 %)", "1’700–3’000", "2’600", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["Erste Nacht in Alajuela (1)", "200–350"],
      ["1. Tortuguero (3)", "1’400–2’300"],
      ["2. Puerto Viejo und Cahuita (4)", "1’100–1’900"],
      ["3. La Fortuna und Arenal (5)", "1’800–3’200"],
      ["4. Monteverde (3)", "1’000–1’800"],
      ["5. Manuel Antonio (4)", "1’400–2’500"],
      ["6. Uvita (3)", "800–1’400"],
      ["7. Drake Bay (5)", "2’300–3’900"],
      ["8. San Gerardo de Dota (2)", "550–950"],
      ["9. Turrialba (3)", "900–1’600"],
      ["Letzte Nacht in Alajuela (1)", "200–350"]
    ],
    hinweise: [
      "Preise für die Kids: Bei Touren und Parks gibt es Kinderpreise oft nur bis 11 oder 12 Jahre; die Tochter (14) zahlt meist den Erwachsenenpreis.",
      "Sparhebel: Mittagessen in Sodas (Casado), Unterkünfte mit Küche, Touren direkt bei lokalen Guides buchen, Flüge früh buchen.",
      "Costa Rica ist das teuerste Land Mittelamerikas; viele Preise sind in US-Dollar. Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich)."
    ]
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    ["Einreise", "Für Schweizer Reisende visumfrei bis 90 Tage. Der Reisepass muss bei der Ausreise noch gültig sein (sechs Monate empfohlen), ein Rück- oder Weiterflugticket wird verlangt. Die Ausreisegebühr ist meist im Flugpreis enthalten. Vor Abreise beim EDA prüfen."],
    ["Währung und Zahlung", "Costa-Rica-Colón; US-Dollar wird fast überall angenommen. Karten funktionieren in Städten und Lodges, für Sodas, Parkplätze und Trinkgeld Bargeld (Colones oder kleine Dollarnoten) mitnehmen."],
    ["Wetter im Juni und Juli", "Grüne Saison: grün, weniger Touristen, morgens oft sonnig, nachmittags Regen. Ende Juni oder im Juli gibt es oft eine trockenere Phase («Veranillo de San Juan»). Am Pazifik und in den Bergen meist besser als an der Karibik; in Monteverde und San Gerardo de Dota kühl."],
    ["Zeitzone", "Costa Rica ist UTC−6 ohne Sommerzeit, im Sommer 8 Stunden hinter der Schweiz."],
    ["Autofahren", "Schweizer Führerausweis reicht für bis zu 90 Tage. Viele Strassen sind kurvig, schmal und nach Regen schlammig; Flüsse nicht durchqueren. Nicht im Dunkeln fahren, Waze nutzen, Wertsachen nie im Auto lassen."],
    ["Transport-Apps", "Waze (Strassen und Sperrungen), Google Maps offline, Shuttle-Anbieter wie Interbus oder Caribe Shuttle, Uber in San José."],
    ["Gesundheit", "Impfstatus aller vier Reisenden beim Hausarzt oder Tropeninstitut mind. 6–8 Wochen vorher klären (Hepatitis A, Tetanus). Mückenschutz gegen Dengue, vor allem an der Karibik. Leitungswasser ist in den meisten Orten trinkbar, an der Karibik und auf Osa besser Flaschenwasser. Geschlossene Schuhe im Wald (Schlangen)."],
    ["Naturgefahren", "Starke Strömungen (Rip Currents) an vielen Stränden: nur an bewachten oder ruhigen Stränden baden. Vulkane können gesperrt sein; Erdbeben kommen vor. Nach starkem Regen sind Strassen teils durch Erdrutsche gesperrt."],
    ["Versicherung", "Reisekranken- und Rücktransportversicherung für alle vier, inkl. Rafting, Zipline und Schnorcheln. Beim Mietwagen auf die Pflichthaftpflicht (SLI/TPL) achten."],
    ["Kultur und Verhalten", "«Pura vida» ist Gruss und Lebensgefühl. Wildtiere nicht füttern oder anfassen. Trinkgeld: in Restaurants sind meist 10 % Service enthalten, Guides freuen sich über ein Trinkgeld."],
    ["Gesetze", "Harte Strafen für Drogenbesitz. Drohnen in Nationalparks verboten."],
    ["Notfall", "Notruf 911. Schweizer Botschaft in San José notieren; EDA-Reiseplattform nutzen."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt, z.B. Zipline, Nachttour oder Surfstunde."]
  ]
};
