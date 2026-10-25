// Reise: USA Ostküste von Miami der Küste entlang über Washington und die Niagarafälle nach New York (nur Mietwagen, Einwegmiete Miami–New York)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usaost = {
  titel: "Von Miami der Ostküste entlang nach New York",
  menu: "USA Ostküste",
  untertitel: "Fünf Wochen an der Ostküste der USA, nur mit dem Mietwagen: von Miami über Key Largo, Orlando, Savannah, Charleston und die Outer Banks nach Washington, über Hershey zu den Niagarafällen und durch die Finger Lakes nach New York.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Outer Banks beach|Charleston Rainbow Row",
    stichwort: "outer banks|charleston",
    alt: "Ostküste der USA"
  },
  planIntro: "Abflug ab Zürich nach Miami am Sa, 19.06.2027, Rückflug ab New York am Mi, 21.07.2027 (Ankunft Do, 22.07.2027). Dazwischen eine Einwegmiete Miami–New York, ohne Inlandflug. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Flug Zürich–Miami",
    info: "Abflug am Sa, 19.06.2027, Direktflug mit SWISS ca. 10,5 Std. (im Sommer 2026 täglich), Ankunft am selben Tag am späten Nachmittag"
  },
  plan: [
    {
      datum: "19.–23. Juni",
      name: "1. Miami",
      naechte: 4,
      info: "Flug ab Zürich (ca. 10,5 Std.), Mietwagen am Flughafen abholen (Einwegmiete bis New York)"
    },
    {datum: "23.–26. Juni", name: "2. Key Largo", naechte: 3, info: "Mietwagen (ca. 1–1,25 Std.)"},
    {datum: "26.–29. Juni", name: "3. Orlando", naechte: 3, info: "Mietwagen (ca. 4,5–5 Std.)"},
    {datum: "29. Juni–2. Juli", name: "4. Savannah", naechte: 3, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "2.–5. Juli", name: "5. Charleston", naechte: 3, info: "Mietwagen (ca. 2 Std.)"},
    {datum: "5.–8. Juli", name: "6. Outer Banks", naechte: 3, info: "Mietwagen (ca. 7–7,75 Std., längster Fahrtag)"},
    {datum: "8.–11. Juli", name: "7. Washington, D.C.", naechte: 3, info: "Mietwagen (ca. 4,75–5,25 Std.)"},
    {datum: "11.–13. Juli", name: "8. Hershey", naechte: 2, info: "Mietwagen (ca. 2,25–2,5 Std.)"},
    {datum: "13.–14. Juli", name: "9. Niagarafälle", naechte: 1, info: "Mietwagen (ca. 5,75–6,25 Std.)"},
    {datum: "14.–17. Juli", name: "10. Finger Lakes", naechte: 3, info: "Mietwagen (ca. 3 Std.)"},
    {
      datum: "17.–21. Juli",
      name: "11. New York",
      naechte: 4,
      info: "Mietwagen (ca. 4–4,5 Std.), Rückgabe am Flughafen; Rückflug 21. Juli"
    }
  ],
  rueckflug: {
    datum: "21. Juli",
    name: "Flug New York–Zürich",
    info: "Direktflug New York (JFK)–Zürich mit SWISS, täglich; im Sommer 2026 Abflug ca. 16.15 Uhr, ca. 7,75–8 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 6 Uhr"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte, 11 Stationen. Eine Einwegmiete Miami–New York (ca. 28 Tage) mit ca. 3’700 km und ca. 38–42 Std. reiner Fahrzeit an 10 Fahrtagen, realistisch mit Pausen, Tanken und Stau ca. 44–50 Std. im Auto. Der längste Fahrtag: Charleston–Outer Banks (ca. 7–7,75 Std., realistisch ca. 8,5–9 Std.); dazu Hershey–Niagarafälle (ca. 5,75–6,25 Std.), Outer Banks–Washington, Key Largo–Orlando und Orlando–Savannah mit je ca. 4–5 Std."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Miami mit SWISS als Direktflug ca. 10,5 Std. (Sommer 2026: täglich, Abflug ca. 13.05 Uhr, Ankunft ca. 17.30 Uhr Ortszeit, Zeitverschiebung −6 Std.). Rückflug: New York (JFK)–Zürich mit SWISS als Direktflug täglich, ca. 7,75–8 Std., am Mi, 21.07.2027 (Sommer 2026: Abflug ca. 16.15 Uhr, Ankunft ca. 6.10 Uhr). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "In Florida, Georgia und South Carolina ca. 32–33 °C und sehr schwül, mit Gewittern am Nachmittag; Washington oft heiss und schwül, an den Niagarafällen und in den Finger Lakes angenehmer (ca. 26–29 °C). Die Hurrikansaison beginnt im Juni, die meisten Stürme kommen aber erst ab Mitte August."
    ],
    [
      "Vorab buchen",
      "Einwegmiete Miami–New York (Gebühr vergleichen), Schnorcheltour in Key Largo, Universal und Kennedy Space Center, Fähre zum Fort Sumter, Unterkunft auf den Outer Banks, Air and Space Museum, Hersheypark, Aussichtsplattform und Broadway in New York."
    ],
    [
      "Optional",
      "St. Augustine (Halt auf dem Weg nach Savannah), Cape Hatteras, Gettysburg (ab Hershey ca. 1 Std.), die kanadische Seite der Niagarafälle (zu Fuss über die Rainbow Bridge), Corning Museum of Glass, Philadelphia (Halt auf dem Weg nach New York)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Mietwagen von Miami der Küste entlang nach Washington, über Hershey zu den Niagarafällen und durch die Finger Lakes nach New York.",
    breit: true,
    legende: ["car"],
    karten: [{datei: "karten/usa-ost.svg"}]
  },
  abwechslungIntro: "Strand und Riff in Florida, Freizeitparks, Städte des Südens, Dünen, Hauptstadt, Schokolade und Achterbahnen, Wasserfälle und zum Schluss New York.",
  abwechslung: [
    [
      "Natur",
      "Everglades, Korallenriff bei Key Largo, Dünen und wilde Pferde auf den Outer Banks, Niagarafälle, Schluchten mit Wasserfällen in den Finger Lakes."
    ],
    [
      "Strand",
      "Miami Beach, drei Nächte in Key Largo mit Schnorcheln (Wasser ca. 29–31 °C), Tybee Island, Folly Beach und drei Nächte auf den Outer Banks."
    ],
    [
      "Action und Freizeitparks",
      "Airboat in den Everglades, Universal und Kennedy Space Center, Geistertour in Savannah, Pferde-Tour auf den Outer Banks, Hersheypark, Maid of the Mist, Broadway."
    ],
    ["Städte und Kultur", "Miami, Savannah, Charleston, Washington mit den Smithsonian-Museen, New York."],
    [
      "Ruhetage",
      "Vier Nächte in Miami, sonst fast überall drei Nächte, nur Hershey zwei und die Niagarafälle eine; in New York kein Auto mehr."
    ]
  ],
  stationenIntro: "Elf Stationen von Miami bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Miami",
      land: "us",
      region: "Florida",
      datum: "19.–23. Juni",
      naechte: "4 Nächte",
      anreise: "Direktflug Zürich–Miami mit SWISS am Sa, 19.06.2027 (ca. 10,5 Std.; im Sommer 2026 täglich, Abflug ca. 13.05 Uhr, Ankunft ca. 17.30 Uhr), Zeitverschiebung −6 Std. Mietwagen am Flughafen abholen (Einwegmiete bis New York); nach Miami Beach ca. 20–30 Min.",
      text: "Der Start am Meer: Art-déco-Häuser und Strand in South Beach, kubanisches Essen in Little Havana und gleich vor der Stadt die Everglades mit Alligatoren.",
      teens: "Strand und Art-déco-Viertel in South Beach, Airboat-Fahrt mit Alligatoren in den Everglades, Graffiti-Kunst in Wynwood Walls, Little Havana mit kubanischem Essen.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte gegen den Jetlag: am Ankunftsabend nur noch an den Strand, ein Tag South Beach, ein halber Tag Everglades mit Airboat-Tour am Rand des Parks (ca. 45 Min. pro Weg), ein halber Tag Wynwood und Little Havana, ein Strand- und Pooltag.",
        "<strong>Everglades:</strong> Airboat-Touren am Tamiami Trail ausserhalb des Nationalparks ca. 27–37 USD pro Person, ohne Parkeintritt (im Park selbst 100 USD Zusatzgebühr pro Person ab 16 für Nicht-US-Bewohner).",
        "<strong>Wetter:</strong> Heiss und feucht (ca. 32–33 °C), am Nachmittag oft kurze Gewitter; Juni bis November ist Hurrikansaison, im Juni ist das Risiko aber klein."
      ],
      ausserdem: "Vizcaya Museum, Key Biscayne, Frost Science Museum, Shark Valley im Nationalpark (mit Zusatzgebühr).",
      bilder: [
        {titel: "South Beach", suche: "Miami South Beach|Miami Beach", stichwort: "miami beach|south beach"},
        {titel: "Everglades", suche: "Everglades airboat|Everglades", stichwort: "everglades"},
        {titel: "Art déco", suche: "Ocean Drive Miami art deco", stichwort: "ocean drive|art deco"},
        {titel: "Wynwood Walls", suche: "Wynwood Walls Miami", stichwort: "wynwood"},
        {titel: "Little Havana", suche: "Little Havana Miami Calle Ocho", stichwort: "little havana|calle ocho"},
        {titel: "Skyline", suche: "Miami skyline", stichwort: "miami"}
      ]
    },
    {
      nr: 2,
      name: "Key Largo",
      land: "us",
      region: "Florida Keys",
      datum: "23.–26. Juni",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Miami über die US-1 auf die erste Insel der Florida Keys (ca. 1–1,25 Std., ca. 100 km).",
      text: "Die erste Insel der Florida Keys: Mangroven, türkises Wasser und das einzige Korallenriff an der Festlandküste der USA, ohne Tagesausflug direkt vor der Unterkunft.",
      teens: "Schnorcheltour zum Riff im John Pennekamp Coral Reef State Park, Kajak durch die Mangroven, Glasbodenboot, Sonnenuntergang am Steg.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Schnorcheltour (ca. 2,5 Std., gut eine Stunde im Wasser), ein Tag Kajak in den Mangroven oder Islamorada, ein Strand- und Pooltag.",
        "<strong>Schnorcheln:</strong> Bootstouren 2026 ca. 65–75 USD pro Person, Ausrüstung inklusive; alle müssen schwimmen können, riffschonende Sonnencreme. Wasser ca. 29–31 °C.",
        "<strong>Hinweis:</strong> Bei Wind und Gewitter fallen Touren aus; zwei Ersatztage sind eingeplant."
      ],
      ausserdem: "Islamorada mit dem Theater of the Sea, Robbie’s (Tarpune füttern), Dolphin Research Center (Marathon, ca. 1 Std.).",
      bilder: [
        {titel: "Korallenriff", suche: "John Pennekamp Coral Reef State Park", stichwort: "pennekamp|reef"},
        {titel: "Schnorcheln", suche: "Key Largo snorkeling", stichwort: "snorkel"},
        {titel: "Mangroven", suche: "Key Largo mangroves kayak|Florida Keys mangroves", stichwort: "mangrove"},
        {titel: "Florida Keys", suche: "Florida Keys Overseas Highway|Key Largo", stichwort: "keys|key largo"},
        {titel: "Christus der Tiefe", suche: "Christ of the Abyss Key Largo", stichwort: "christ of the abyss|abyss"},
        {titel: "Islamorada", suche: "Islamorada Florida", stichwort: "islamorada"}
      ]
    },
    {
      nr: 3,
      name: "Orlando",
      land: "us",
      region: "Florida",
      datum: "26.–29. Juni",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Key Largo über den Florida’s Turnpike nach Orlando (ca. 4,5–5 Std., ca. 475 km, Mautstrasse).",
      text: "Hauptstadt der Freizeitparks und Ausgangspunkt zum Kennedy Space Center, von wo die Raketen starten.",
      teens: "Universal Studios und Islands of Adventure (Harry Potter), Kennedy Space Center mit der Saturn-V-Rakete und dem Space Shuttle Atlantis, mit Glück ein Raketenstart.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Kennedy Space Center (ca. 1 Std. östlich; Startplan kurz vorher prüfen), ein Tag Universal (beide Parks), ein ruhiger Tag am Pool oder in Cocoa Beach.",
        "<strong>Tickets:</strong> Kennedy Space Center 2026 ca. 77 USD ab 12 Jahren; Universal mit zwei Parks an einem Tag ca. 190–225 USD je nach Datum (die Kids zahlen den Erwachsenenpreis). Früh online buchen.",
        "<strong>Maut:</strong> Viele Strassen in Florida sind mautpflichtig; beim Mietwagen das Mautpaket oder die Abrechnung per Kennzeichen klären."
      ],
      ausserdem: "Walt Disney World, Cocoa Beach, ICON Park mit Riesenrad.",
      bilder: [
        {titel: "Kennedy Space Center", suche: "Kennedy Space Center Visitor Complex", stichwort: "kennedy"},
        {titel: "Space Shuttle Atlantis", suche: "Space Shuttle Atlantis Kennedy", stichwort: "atlantis"},
        {titel: "Universal", suche: "Universal Studios Florida", stichwort: "universal"},
        {titel: "Saturn V", suche: "Saturn V Kennedy Space Center", stichwort: "saturn"},
        {titel: "Raketenstart", suche: "rocket launch Cape Canaveral", stichwort: "canaveral|launch"},
        {titel: "Cocoa Beach", suche: "Cocoa Beach pier", stichwort: "cocoa beach"}
      ]
    },
    {
      nr: 4,
      name: "Savannah",
      land: "us",
      region: "Georgia",
      datum: "29. Juni–2. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Orlando über die Interstate 95 nach Savannah (ca. 4–4,5 Std., ca. 450 km). Halt in St. Augustine möglich (älteste Stadt der USA, ca. 1 Std. Umweg).",
      text: "Die Stadt der Plätze: Eichen mit Spanischem Moos, alte Häuser und Brunnen, dazu der Strand von Tybee Island ca. 30 Min. entfernt.",
      teens: "Geistertour am Abend, Spaziergang durch die Plätze und am Flussufer, Strand und Leuchtturm auf Tybee Island, Delfin-Bootstour.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein halber Tag Altstadt, ein ganzer Tag Tybee Island mit Strand, am Abend eine Geistertour, ein freier Tag.",
        "<strong>Hitze:</strong> Sehr schwül; Altstadt am Morgen und Abend, mittags Strand oder Pool."
      ],
      ausserdem: "Forsyth Park, Bonaventure Cemetery, Fort Pulaski, Wormsloe (Eichenallee).",
      bilder: [
        {titel: "Forsyth Park", suche: "Forsyth Park Savannah fountain", stichwort: "forsyth"},
        {titel: "Eichenallee", suche: "Wormsloe Savannah oak avenue|Savannah live oaks", stichwort: "wormsloe|oak"},
        {titel: "Altstadt", suche: "Savannah historic district", stichwort: "savannah"},
        {titel: "Tybee Island", suche: "Tybee Island lighthouse", stichwort: "tybee"},
        {titel: "River Street", suche: "River Street Savannah", stichwort: "river street"},
        {titel: "Chippewa Square", suche: "Chippewa Square Savannah", stichwort: "chippewa"}
      ]
    },
    {
      nr: 5,
      name: "Charleston",
      land: "us",
      region: "South Carolina",
      datum: "2.–5. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Savannah über die US-17 nach Charleston (ca. 2 Std., ca. 170 km).",
      text: "Bunte Häuserzeilen, Kirchtürme und Hafen: Charleston ist eine der schönsten Altstädte des Südens, mit Fort Sumter, wo der Bürgerkrieg begann.",
      teens: "Fähre zum Fort Sumter, Rainbow Row und Hafenpromenade, Flugzeugträger USS Yorktown in Patriots Point, Folly Beach.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Altstadt und Fort Sumter, ein Tag Folly Beach, ein halber Tag Patriots Point mit dem Flugzeugträger. Am Abend des 4. Juli Feuerwerk über dem Hafen (Termine vorab prüfen).",
        "<strong>Fort Sumter:</strong> Nur mit der Fähre von Fort Sumter Tours erreichbar (ca. 2,25 Std. mit Besuch; ca. 35–43 USD Erwachsene, Kinder günstiger).",
        "<strong>Geschichte:</strong> Die Plantagen rund um Charleston erzählen auch von der Sklaverei; McLeod Plantation stellt das in den Mittelpunkt."
      ],
      ausserdem: "Patriots Point mit der USS Yorktown, McLeod Plantation, Angel Oak (riesige Eiche), Shem Creek.",
      bilder: [
        {titel: "Rainbow Row", suche: "Rainbow Row Charleston", stichwort: "rainbow row"},
        {titel: "Fort Sumter", suche: "Fort Sumter", stichwort: "sumter"},
        {titel: "USS Yorktown", suche: "USS Yorktown Patriots Point", stichwort: "yorktown"},
        {titel: "Folly Beach", suche: "Folly Beach South Carolina", stichwort: "folly"},
        {titel: "Angel Oak", suche: "Angel Oak Tree", stichwort: "angel oak"},
        {titel: "Waterfront Park", suche: "Pineapple Fountain Charleston", stichwort: "pineapple|charleston"}
      ]
    },
    {
      nr: 6,
      name: "Outer Banks",
      land: "us",
      region: "North Carolina",
      datum: "5.–8. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Charleston über Wilmington und Elizabeth City nach Kill Devil Hills (ca. 7–7,75 Std. reine Fahrzeit, ca. 710 km; realistisch mit Pausen ca. 8,5–9 Std.). Der längste Fahrtag der Reise: früh losfahren.",
      text: "Lange, schmale Sandinseln zwischen Atlantik und Lagune: die höchsten Wanderdünen der Ostküste, Leuchttürme, wilde Pferde und der Hügel, auf dem die Gebrüder Wright 1903 zum ersten Motorflug starteten.",
      teens: "Jeep-Tour zu den wilden Pferden bei Corolla, Dünen von Jockey’s Ridge bei Sonnenuntergang (Drachensteigen, Kurse im Hängegleiten), Wright Brothers National Memorial, Baden und Bodyboarden.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte in Kill Devil Hills oder Nags Head: ein Tag Pferde-Tour, ein Strandtag, Dünen und Wright Brothers Memorial am Abend.",
        "<strong>Gebühren:</strong> Wright Brothers National Memorial 10 USD pro Person ab 16; Pferde-Touren (ca. 2 Std.) ca. 45–65 USD Erwachsene, Kinder günstiger.",
        "<strong>Hinweis:</strong> Sandboarding auf Jockey’s Ridge ist nur vom 1. Oktober bis 31. März erlaubt. Beim Baden auf Strömungen (Rip Currents) und die Flaggen achten."
      ],
      ausserdem: "Leuchtturm Bodie Island, Currituck Beach Lighthouse, North Carolina Aquarium auf Roanoke Island, Cape Hatteras (ca. 1,5 Std. südlich).",
      bilder: [
        {titel: "Jockey’s Ridge", suche: "Jockey's Ridge State Park dunes", stichwort: "jockey"},
        {titel: "Wilde Pferde", suche: "Corolla wild horses|Banker horse", stichwort: "horse"},
        {titel: "Wright Brothers", suche: "Wright Brothers National Memorial", stichwort: "wright"},
        {titel: "Bodie Island", suche: "Bodie Island Lighthouse", stichwort: "bodie"},
        {titel: "Strand", suche: "Outer Banks beach|Nags Head beach", stichwort: "outer banks|nags head"},
        {titel: "Currituck", suche: "Currituck Beach Lighthouse", stichwort: "currituck"}
      ]
    },
    {
      nr: 7,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "8.–11. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von den Outer Banks über Norfolk und die Interstate 64 und 95 nach Washington (ca. 4,75–5,25 Std., ca. 440 km; mit Stau am Hampton Roads Bridge-Tunnel und um Washington ca. 6–7 Std.). Auto im Hotel parkieren; in der Stadt Metro und zu Fuss.",
      text: "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
      teens: "National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag National Mall und Denkmäler, ein Tag Museen (Air and Space, Natural History), ein halber Tag Arlington oder Georgetown.",
        "<strong>Hitze:</strong> Im Juli heiss und schwül, nachmittags oft Gewitter; Museen als Hitzepause einplanen.",
        "<strong>Hinweis:</strong> Das White House ist von innen nur nach früher Anfrage über die Schweizer Botschaft zu besichtigen, von aussen jederzeit."
      ],
      ausserdem: "Arlington National Cemetery, Georgetown, National Zoo (gratis), Holocaust Memorial Museum (Zeitfenster).",
      bilder: [
        {titel: "Lincoln Memorial", suche: "Lincoln Memorial Washington", stichwort: "lincoln memorial"},
        {titel: "Washington Monument", suche: "Washington Monument", stichwort: "washington monument"},
        {titel: "Capitol", suche: "United States Capitol Washington", stichwort: "capitol"},
        {titel: "Air and Space Museum", suche: "National Air and Space Museum Washington", stichwort: "air and space"},
        {titel: "Smithsonian Castle", suche: "Smithsonian Institution Building castle", stichwort: "smithsonian"},
        {titel: "Jefferson Memorial", suche: "Jefferson Memorial Tidal Basin", stichwort: "jefferson memorial"}
      ]
    },
    {
      name: "Hershey",
      land: "us",
      region: "Pennsylvania",
      anreise: "Mietwagen von Washington über die Interstate 270 und die US-15 nach Hershey (ca. 2,25–2,5 Std., ca. 210 km).",
      text: "Die Schokoladenstadt: Strassenlaternen in Form von Schokoküssen, eine Fahrt durch die Schokoladenfabrik und Hersheypark mit Achterbahnen und Wasserpark.",
      teens: "Hersheypark mit Achterbahnen wie Candymonium und Skyrush und dem Wasserpark The Boardwalk, Fahrt durch die Schokoladenherstellung in Hershey’s Chocolate World, eigene Schokolade gestalten.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein ganzer Tag Hersheypark (Wasserpark inklusive), ein halber Tag Chocolate World.",
        "<strong>Tickets:</strong> Hersheypark an der Kasse bis ca. 90 USD, online mit Datum oft deutlich günstiger; die Fahrt durch Chocolate World ist gratis, Extras kosten.",
        "<strong>Hinweis:</strong> Im Sommer viele Leute; früh im Park sein, Wasserpark am Nachmittag."
      ],
      ausserdem: "Gettysburg (Schlachtfeld des Bürgerkriegs, ca. 1 Std.), ZooAmerica, Hershey Gardens mit Schmetterlingshaus.",
      bilder: [
        {titel: "Hersheypark", suche: "Hersheypark", stichwort: "hersheypark"},
        {titel: "Achterbahn", suche: "Hersheypark roller coaster|Candymonium", stichwort: "coaster|candymonium"},
        {titel: "Chocolate World", suche: "Hershey's Chocolate World", stichwort: "chocolate world"},
        {titel: "Kiss-Laternen", suche: "Hershey Kiss street lights", stichwort: "kiss|street"},
        {titel: "Hershey", suche: "Hershey Pennsylvania", stichwort: "hershey"},
        {titel: "Gettysburg", suche: "Gettysburg battlefield", stichwort: "gettysburg"}
      ],
      nr: 8,
      datum: "11.–13. Juli",
      naechte: "2 Nächte"
    },
    {
      nr: 9,
      name: "Niagarafälle",
      land: "us",
      region: "New York",
      datum: "13.–14. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Hershey über Harrisburg, die US-15 und die Interstate 390 nach Rochester und weiter zu den Niagarafällen (ca. 5,75–6,25 Std., ca. 525 km; New York State Thruway mit Maut). Übernachtung auf der amerikanischen Seite, ohne Grenzübertritt mit dem Auto.",
      text: "Die berühmtesten Wasserfälle Nordamerikas: mit dem Boot bis in die Gischt des Hufeisenfalls und auf Holzstegen direkt an den Bridal Veil Falls.",
      teens: "Bootsfahrt mit der Maid of the Mist in die Gischt, Cave of the Winds (Holzstege am Wasserfall, Regenponcho inklusive), Goat Island, Beleuchtung und Feuerwerk am Abend.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag Maid of the Mist und Cave of the Winds, am Abend die beleuchteten Fälle, am nächsten Morgen Goat Island und weiter.",
        "<strong>Preise:</strong> Maid of the Mist 2026 ca. 30 USD Erwachsene, ca. 20 USD Kinder 6–12 (inkl. Lift); Cave of the Winds mit eigenem Eintritt.",
        "<strong>Kanada:</strong> Die kanadische Seite mit dem besten Blick ist zu Fuss über die Rainbow Bridge erreichbar (Pass mitnehmen). Mit dem Mietwagen nach Kanada nur mit Erlaubnis des Vermieters."
      ],
      ausserdem: "Whirlpool State Park, Old Fort Niagara, Aquarium of Niagara, auf der kanadischen Seite Journey Behind the Falls.",
      bilder: [
        {titel: "Niagarafälle", suche: "Niagara Falls", stichwort: "niagara"},
        {titel: "Maid of the Mist", suche: "Maid of the Mist Niagara", stichwort: "maid of the mist"},
        {titel: "Hufeisenfall", suche: "Horseshoe Falls", stichwort: "horseshoe"},
        {titel: "Cave of the Winds", suche: "Cave of the Winds Niagara", stichwort: "cave of the winds"},
        {titel: "Bridal Veil Falls", suche: "Bridal Veil Falls Niagara", stichwort: "bridal veil"},
        {titel: "Rainbow Bridge", suche: "Rainbow Bridge Niagara", stichwort: "rainbow bridge"}
      ]
    },
    {
      nr: 10,
      name: "Finger Lakes",
      land: "us",
      region: "New York",
      datum: "14.–17. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von den Niagarafällen nach Watkins Glen oder Ithaca am Seneca- bzw. Cayugasee (ca. 3 Std., ca. 270 km).",
      text: "Lange, schmale Seen zwischen Hügeln, Schluchten mit Wasserfällen und Badestellen: ruhige Tage vor dem Finale in New York.",
      teens: "Gorge Trail in Watkins Glen (19 Wasserfälle auf ca. 3 km), Baden im Pool von Robert H. Treman oder im See, Taughannock Falls, Kajak oder Stand-up-Paddle auf dem See.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Morgen Watkins Glen (früh, bevor es voll wird), ein Tag Ithaca mit Wasserfällen und Baden, ein ruhiger Tag am See.",
        "<strong>Gebühr:</strong> Watkins Glen State Park ca. 10 USD pro Auto (Pool inklusive); die Schlucht ist steil mit vielen Stufen und nass."
      ],
      ausserdem: "Corning Museum of Glass (Glasblasen selber probieren), Robert H. Treman State Park, Taughannock Falls, Seneca Lake.",
      bilder: [
        {titel: "Watkins Glen", suche: "Watkins Glen State Park gorge", stichwort: "watkins glen"},
        {titel: "Taughannock Falls", suche: "Taughannock Falls", stichwort: "taughannock"},
        {titel: "Senecasee", suche: "Seneca Lake New York", stichwort: "seneca"},
        {titel: "Ithaca", suche: "Ithaca Falls|Ithaca gorges", stichwort: "ithaca"},
        {titel: "Robert H. Treman", suche: "Robert H. Treman State Park", stichwort: "treman"},
        {titel: "Corning Museum of Glass", suche: "Corning Museum of Glass", stichwort: "corning"}
      ]
    },
    {
      nr: 11,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "17.–21. Juli",
      naechte: "4 Nächte, Rückflug 21. Juli",
      anreise: "Mietwagen von den Finger Lakes nach New York (ca. 4–4,5 Std., ca. 360 km) und am Flughafen (z.B. Newark oder LaGuardia) abgeben, von dort mit Zug oder Taxi in die Stadt. Rückflug direkt ab John F. Kennedy (SWISS) am Mi, 21.07.2027 am Nachmittag (Sommer 2026 ca. 16.15 Uhr; ca. 7,75–8 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 6 Uhr). Zum Flughafen JFK mit dem AirTrain oder Taxi ca. 1–1,5 Std., also am Mittag los.",
      text: "Das grosse Finale: Wolkenkratzer, Parks, Museen und Hafenpanorama, ohne Auto.",
      teens: "Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building oder Top of the Rock, Broadway-Musical, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: Tag 1 Midtown und Aussichtsplattform, Tag 2 Freiheitsstatue und Lower Manhattan (9/11 Memorial), Tag 3 Central Park und Museen, Tag 4 Brooklyn Bridge und Wunschprogramm der Kids; am Abreisetag nur noch der Vormittag (Gepäck im Hotel lassen).",
        "<strong>Ohne Auto:</strong> In New York U-Bahn mit OMNY (Kreditkarte oder Handy), Fähren, Taxi und Uber; ein Parkplatz in Manhattan würde ca. 35–85 USD pro Nacht kosten.",
        "<strong>Hinweis:</strong> Im Hochsommer heiss, Gewitter möglich. Tickets für Aussichtsplattformen und Broadway früh buchen."
      ],
      ausserdem: "High Line, Chelsea Market, Natural History Museum, Metropolitan Museum, Staten-Island-Fähre (gratis), Bronx Zoo, Yankee Stadium.",
      bilder: [
        {
          titel: "Freiheitsstatue",
          suche: "Statue of Liberty New York|Statue of Liberty",
          stichwort: "statue of liberty"
        },
        {titel: "Skyline", suche: "Manhattan skyline New York|Manhattan skyline", stichwort: "manhattan|new york"},
        {titel: "Brooklyn Bridge", suche: "Brooklyn Bridge New York", stichwort: "brooklyn bridge"},
        {titel: "Central Park", suche: "Central Park New York|Central Park", stichwort: "central park"},
        {titel: "Times Square", suche: "Times Square New York|Times Square", stichwort: "times square"},
        {titel: "Empire State", suche: "Empire State Building", stichwort: "empire state"}
      ]
    }
  ],
  abschluss: "Direktflug ab New York (JFK) nach Zürich am Mi, 21.07.2027 am Nachmittag (ca. 7,75–8 Std.), Ankunft am Do, 22.07.2027 am frühen Morgen, dann mit der Bahn nach Brig-Glis. Bis zum Ferienende bleiben zwei Tage gegen den Jetlag.",
  budgetIntro: "Mittelklasse inklusive Flüge, Mietwagen, Zug, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Miami und New York–Zürich",
        "3’800–5’000",
        "4’300",
        "ca. 950–1’250 pro Person mit SWISS (Juli ist Hochsaison; beide Teenager zahlen Vollpreis); Angebot einholen"
      ],
      [
        "Mietwagen (Einwegmiete)",
        "2’600–3’600",
        "3’000",
        "Miami–New York (ca. 28 Tage) inkl. Vollkasko, Zusatzhaftpflicht und Einweggebühr; Schätzung, Angebote vergleichen"
      ],
      ["Benzin", "250–380", "300", "ca. 3’700 km, Van oder SUV mit ca. 10–12 l/100 km (ca. 410 Liter)"],
      [
        "Parkieren",
        "450–750",
        "600",
        "Hotels in Miami Beach und Washington oft 45–60 USD pro Nacht, Savannah, Charleston und Orlando ca. 20–35 USD; Freizeitparks, Strände, Niagara; Motels meist gratis; in New York kein Auto mehr"
      ],
      [
        "Maut",
        "100–200",
        "130",
        "Florida’s Turnpike, Brücken und Tunnel in Virginia, New York State Thruway, dazu die Gebühr des Vermieters für die automatische Mauterfassung"
      ],
      [
        "Lokale Verkehrsmittel",
        "250–400",
        "280",
        "Metro in Washington, U-Bahn in New York, Zug oder Taxi vom Mietwagen-Flughafen und zum Flughafen JFK"
      ],
      [
        "Unterkunft (Familienzimmer, 3 Sterne)",
        "7’000–9’800",
        "8’200",
        "ca. 180–420 CHF pro Nacht inkl. Steuern (ein Zimmer mit zwei Queen-Betten); Miami, Key Largo, Charleston, Outer Banks, Washington und New York am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’500–8’000", "6’000", "ca. 140–250 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte",
        "2’800–4’200",
        "3’400",
        "Airboat, Schnorcheltour, Kennedy Space Center, Universal (ca. 860 USD für vier), Fort Sumter, Pferde-Tour, Hersheypark, Maid of the Mist, Aussichtsplattform und Broadway in New York usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "400–1’100",
        "700",
        "ESTA ca. 40 USD pro Person, eSIM, Reiseversicherung mit hoher Deckung (falls nicht schon über eine Jahresversicherung abgedeckt)"
      ],
      ["Reserve (ca. 5 %)", "1’100–1’650", "1’350", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Miami (4)", "1’590–2’520"],
      ["2. Key Largo (3)", "1’350–2’150"],
      ["3. Orlando (3)", "1’630–2’580"],
      ["4. Savannah (3)", "970–1’540"],
      ["5. Charleston (3)", "1’100–1’740"],
      ["6. Outer Banks (3)", "1’160–1’830"],
      ["7. Washington, D.C. (3)", "1’190–1’890"],
      ["8. Hershey (2)", "740–1’180"],
      ["9. Niagarafälle (1)", "340–530"],
      ["10. Finger Lakes (3)", "820–1’300"],
      ["11. New York (4)", "2’570–4’070"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: ein Zimmer mit zwei Queen-Betten, Motels mit Frühstück, Imbiss statt Restaurant, Hotels mit Gratis-Parkplatz ausserhalb der Innenstädte, die Gratis-Museen in Washington nutzen.",
      "Gerechnet mit ca. 0,83 CHF pro USD (Kurs Oktober 2026); Preise in den USA meist ohne Verkaufssteuer angeschrieben, im Restaurant kommen 15–20 % Trinkgeld dazu.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "28’260",
    spanne: "23’300–35’100",
    proTag: "ca. 880 CHF pro Tag, ca. 7’100 pro Person"
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise USA (ESTA)",
      "Für die visafreie Einreise braucht jede Person, auch die Kids, vor dem Abflug eine ESTA-Genehmigung (seit Herbst 2025 ca. 40 USD pro Person). Erlaubt sind bis zu 90 Tage. Die US-Behörde plant zusätzliche Angaben (z.B. Social-Media-Konten der letzten fünf Jahre); der Stand ist bei Planung noch offen. Aktuelle Regeln auf der offiziellen CBP-Website prüfen."
    ],
    ["Reisepass", "Biometrischer Reisepass für alle vier, mind. 6 Monate gültig. Zusätzlich Kopien aufbewahren."],
    [
      "Nationalparks und Gebühren",
      "Auf dieser Route braucht ihr keinen Nationalpark-Jahrespass: Die Airboat-Touren liegen ausserhalb des Everglades-Nationalparks, das Wright Brothers Memorial kostet 10 USD pro Person ab 16. Wer doch in den Everglades-Nationalpark fährt, zahlt dort 100 USD Zusatzgebühr pro Person ab 16 (seit Januar 2026)."
    ],
    [
      "Mietwagen",
      "Familienvan oder SUV, die Einwegmiete Miami–New York früh buchen und Angebote vergleichen (Einweggebühr). Viele Mautstrassen in Florida, Brücken und Tunnel in Virginia, der New York State Thruway: Mautpaket des Vermieters klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Wer mit dem Auto nach Kanada will, braucht die Erlaubnis des Vermieters. Den Wagen vor New York am Flughafen abgeben."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Hurrikane",
      "Im Süden heiss und sehr schwül (ca. 32–33 °C) mit Gewittern am Nachmittag; im Norden angenehmer. Die Hurrikansaison dauert von Juni bis November, der Höhepunkt kommt erst ab Mitte August: Wetterberichte verfolgen, flexible Buchungen."
    ],
    ["Zeitzonen", "Auf der ganzen Route Eastern-Zeit (−6 Std. zur Schweiz)."],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung mit hoher Deckung ist in den USA unverzichtbar, Arztkosten sind sehr hoch. Zusätzlich Annullationsschutz für Flüge, Hotels und Mietwagen."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."
    ],
    ["Handy", "eSIM für die USA vorab kaufen, Offline-Karten laden."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
