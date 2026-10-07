// Variante der USA-Reise: von Miami über die Florida Keys und die Golfküste in den Südwesten bis Las Vegas.
// Erscheint nicht im Menü; auf der USA-Seite lässt sich oben zwischen den Varianten umschalten (alternativeZu, variante).
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa2 = {
  titel: "Von Miami nach Las Vegas",
  menu: "USA (Miami–Las Vegas)",
  variante: "Miami – Las Vegas",
  alternativeZu: "usa",
  untertitel: "Fünf Wochen von Florida in den Westen: Florida Keys mit Korallenriff, Orlando, Golfküste, New Orleans, Texas, Carlsbad Caverns und die Nationalparks im Südwesten.",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Seven Mile Bridge Florida Keys|Florida Keys aerial",
    stichwort: "seven mile|florida keys",
    alt: "Seven Mile Bridge in den Florida Keys"
  },
  planIntro: "Abflug ab Zürich am Fr, 18.06.2027 nach Miami, Rückflug ab Las Vegas am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18. Juni",
    name: "Flug Zürich–Miami",
    info: "Abflug am Fr, 18.06.2027, Direktflug ca. 10,5 Std., Ankunft am selben Tag"
  },
  plan: [
    {datum: "18.–21. Juni", name: "1. Miami", naechte: 3, info: "Mietwagen am Flughafen abholen"},
    {
      datum: "21.–23. Juni",
      name: "2. Key West",
      naechte: 2,
      info: "Mietwagen über den Overseas Highway (ca. 3,5–4 Std.)"
    },
    {datum: "23.–26. Juni", name: "3. Key Largo und Islamorada", naechte: 3, info: "Mietwagen (ca. 2–2,5 Std.)"},
    {datum: "26.–29. Juni", name: "4. Orlando", naechte: 3, info: "Mietwagen (ca. 4,5–5,5 Std.)"},
    {
      datum: "29. Juni–2. Juli",
      name: "5. Destin (Golfküste)",
      naechte: 3,
      info: "Mietwagen (ca. 6–7 Std.), Uhr −1 Std."
    },
    {datum: "2.–4. Juli", name: "6. New Orleans", naechte: 2, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "4.–5. Juli", name: "7. Houston", naechte: 1, info: "Mietwagen (ca. 5–6 Std.)"},
    {datum: "5.–7. Juli", name: "8. San Antonio", naechte: 2, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {datum: "7.–8. Juli", name: "Zwischenübernachtung Fort Stockton", naechte: 1, info: "Mietwagen (ca. 5–5,5 Std.)"},
    {datum: "8.–9. Juli", name: "9. Carlsbad Caverns", naechte: 1, info: "Mietwagen (ca. 2,5–3,5 Std.), Uhr −1 Std."},
    {datum: "9.–10. Juli", name: "10. White Sands (Alamogordo)", naechte: 1, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {datum: "10.–12. Juli", name: "11. Santa Fe", naechte: 2, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "12.–13. Juli", name: "12. Monument Valley", naechte: 1, info: "Mietwagen (ca. 6,5–7 Std.)"},
    {
      datum: "13.–15. Juli",
      name: "13. Grand Canyon (South Rim)",
      naechte: 2,
      info: "Mietwagen (ca. 3,5 Std.), Uhr −1 Std."
    },
    {datum: "15.–17. Juli", name: "14. Page und Lake Powell", naechte: 2, info: "Mietwagen (ca. 2,5 Std.)"},
    {datum: "17.–19. Juli", name: "15. Zion National Park", naechte: 2, info: "Mietwagen (ca. 2,5 Std.), Uhr +1 Std."},
    {
      datum: "19.–22. Juli",
      name: "16. Las Vegas",
      naechte: 3,
      info: "Mietwagen (ca. 2,5–3 Std.), Uhr −1 Std.; Rückflug 22. Juli"
    }
  ],
  rueckflug: {
    datum: "22. Juli",
    name: "Flug Las Vegas–Zürich",
    info: "Direktflug ca. 10,5 Std. nur an einzelnen Wochentagen, am Donnerstag mit Umstieg ca. 14–17 Std."
  },
  planHinweise: [
    [
      "Gesamt",
      "34 Nächte, 16 Stationen und eine Zwischenübernachtung (Fort Stockton). Keine Inlandflüge: nur Hin- und Rückflug, dazwischen eine Einwegmiete Miami–Las Vegas (ca. 31 Tage). Insgesamt ca. 6’000 km und ca. 64–65 Std. reine Fahrzeit an 16 Fahrtagen; mit Pausen, Tanken, Stau und Fahrten vor Ort realistisch ca. 74–78 Std. im Auto. Die längsten: Santa Fe–Monument Valley (ca. 6,5–7 Std.), Orlando–Destin (ca. 6–7 Std.), New Orleans–Houston (ca. 5–6 Std.), San Antonio–Fort Stockton (ca. 5–5,5 Std.) und Key Largo–Orlando (ca. 4,5–5,5 Std.)."
    ],
    [
      "Vorab buchen",
      "Unterkünfte in Key West und den Keys, Schnorcheltour im Pennekamp-Park, Fähre zu den Dry Tortugas, Tickets für Universal und das Kennedy Space Center, Zeitfenster für Carlsbad Caverns, Unterkünfte im Grand Canyon und in Monument Valley (oft Monate im Voraus), Antelope-Canyon-Tour, Meow Wolf, Mietwagen mit Einwegmiete."
    ],
    [
      "Optional",
      "Dry Tortugas (ab Key West), Galveston (Strand, ab Houston), Big Bend National Park (ab Fort Stockton, Umweg), Bryce Canyon (ab Zion, ca. 2 Std.), Hoover-Staudamm (ab Las Vegas)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Miami als Direktflug täglich, ca. 10,5 Std. (Sommer 2026: Abflug am Mittag, Ankunft am späten Nachmittag, Zeitverschiebung −6 Std.). Rückflug: Las Vegas–Zürich als Direktflug ca. 10,5 Std., im Sommer 2026 aber nur Mo, Mi und Sa; am Do, 22.07.2027 mit einem Umstieg ca. 14–17 Std., oder einen Tag früher am Mi, 21.07.2027 direkt. Flugpläne 2027 bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege mit dem Mietwagen von Miami über die Keys und die Golfküste in den Südwesten. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car"],
    karten: [
      {datei: "karten/usa2.svg"},
      {titel: "Florida und Golfküste im Detail (Stationen 1 bis 8)", datei: "karten/usa2-suedosten.svg"},
      {titel: "Südwesten im Detail (Stationen 9 bis 16)", datei: "karten/usa2-suedwesten.svg"}
    ]
  },
  abwechslungIntro: "Nach langen Fahrtagen jeweils einen ruhigen Tag einplanen. Strand, Freizeitparks, Städte und Nationalparks wechseln sich ab.",
  abwechslung: [
    [
      "Strand und Schnorcheln",
      "Korallenriff im Pennekamp-Park (Key Largo), Florida Keys, Dry Tortugas, weisse Strände an der Golfküste bei Destin."
    ],
    [
      "Action und Freizeitparks",
      "Universal in Orlando, Kennedy Space Center und Space Center Houston, Airboat in den Everglades, Las Vegas, Meow Wolf in Santa Fe."
    ],
    [
      "Naturwunder",
      "Everglades, Carlsbad Caverns, White Sands, Monument Valley, Grand Canyon, Antelope Canyon und Horseshoe Bend, Zion."
    ],
    [
      "Städte und Kultur",
      "Miami mit Little Havana, Key West, New Orleans mit Jazz, San Antonio mit dem Alamo, Santa Fe, Navajo Nation."
    ],
    ["Ruhetage", "Islamorada, Destin und Santa Fe sorgen für Erholung zwischen den Fahrtagen."]
  ],
  stationenIntro: "Sechzehn Stationen von Miami bis Las Vegas. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      land: "us",
      name: "Miami",
      region: "Florida",
      datum: "18.–21. Juni",
      naechte: "3 Nächte",
      anreise: "Direktflug Zürich–Miami am Fr, 18.06.2027 (ca. 10,5 Std., täglich), Ankunft am späten Nachmittag (Zeitverschiebung −6 Std.). Mietwagen am Flughafen abholen.",
      text: "Der Einstieg in die USA: Art-déco-Häuser und Strand in South Beach, kubanisches Essen in Little Havana und gleich vor der Stadt die Everglades mit Alligatoren und Mangroven.",
      teens: "Airboat-Fahrt und Alligatoren in den Everglades, Strand und Art-déco-Viertel in South Beach, Graffiti-Kunst in Wynwood Walls, Little Havana mit kubanischem Essen.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, um den Jetlag zu überwinden: ein Tag Everglades, ein Tag Strand und South Beach, ein Tag Wynwood und Little Havana.",
        "<strong>Wetter:</strong> Heiss und feucht, am Nachmittag oft kurze Gewitter; Juni bis November ist Hurrikansaison, Wetterberichte verfolgen.",
        "<strong>Mietwagen:</strong> Eine Einwegmiete Miami–Las Vegas (ca. 31 Tage) früh buchen; die Rückgabegebühr in einem anderen Bundesstaat ist hoch."
      ],
      ausserdem: "Everglades National Park (Shark Valley), Vizcaya Museum, Key Biscayne, Frost Science Museum.",
      bilder: [
        {titel: "South Beach", suche: "Miami South Beach|Miami Beach", stichwort: "miami beach|south beach"},
        {titel: "Everglades", suche: "Everglades National Park airboat|Everglades", stichwort: "everglades"},
        {titel: "Art déco", suche: "Ocean Drive Miami art deco", stichwort: "ocean drive|art deco"},
        {titel: "Wynwood Walls", suche: "Wynwood Walls Miami", stichwort: "wynwood"},
        {titel: "Little Havana", suche: "Little Havana Miami Calle Ocho", stichwort: "little havana|calle ocho"},
        {titel: "Skyline", suche: "Miami skyline", stichwort: "miami"}
      ]
    },
    {
      nr: 2,
      land: "us",
      name: "Key West",
      region: "Florida Keys",
      datum: "21.–23. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Miami über den Overseas Highway und die Seven Mile Bridge bis ans Ende der Keys (ca. 3,5–4 Std., ca. 260 km).",
      text: "Die südlichste Stadt der USA am Ende einer Kette von Inseln und Brücken: bunte Holzhäuser, Hühner auf der Strasse und jeden Abend das Sonnenuntergangsfest am Mallory Square.",
      teens: "Seven Mile Bridge auf der Fahrt, Sonnenuntergang am Mallory Square, Schnorcheln am Riff per Boot, optional Tagesausflug zum Fort in den Dry Tortugas.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte; Unterkünfte in Key West sind im Sommer teuer, früh buchen.",
        "<strong>Dry Tortugas:</strong> Fähre «Yankee Freedom» ca. 2,5 Std. pro Weg, mit ca. 4 Std. auf der Insel (Fort, Schnorcheln); 2026 ab ca. 235 USD pro Erwachsenen und 180 USD pro Kind, oft ausgebucht.",
        "<strong>Unterwegs:</strong> Bahia Honda State Park mit Strand und alter Eisenbahnbrücke liegt auf dem Weg."
      ],
      ausserdem: "Mallory Square, Duval Street, Southernmost Point, Hemingway House (mit den Katzen), Fort Zachary Taylor (Strand).",
      bilder: [
        {titel: "Seven Mile Bridge", suche: "Seven Mile Bridge Florida Keys", stichwort: "seven mile"},
        {titel: "Mallory Square", suche: "Mallory Square sunset Key West", stichwort: "mallory"},
        {titel: "Dry Tortugas", suche: "Fort Jefferson Dry Tortugas", stichwort: "jefferson|tortugas"},
        {titel: "Bahia Honda", suche: "Bahia Honda State Park", stichwort: "bahia honda"},
        {titel: "Southernmost Point", suche: "Southernmost point Key West", stichwort: "southernmost"},
        {titel: "Duval Street", suche: "Duval Street Key West", stichwort: "duval"}
      ]
    },
    {
      nr: 3,
      land: "us",
      name: "Key Largo und Islamorada",
      region: "Florida Keys",
      datum: "23.–26. Juni",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Key West zurück über den Overseas Highway nach Islamorada oder Key Largo (ca. 2–2,5 Std., ca. 160 km).",
      text: "Die oberen Keys sind das Schnorchelrevier der Reise: das einzige lebende Korallenriff auf dem Festlandsockel der USA liegt vor der Küste, mit Papageifischen, Rochen und manchmal Schildkröten.",
      teens: "Schnorcheltour zum Riff im John Pennekamp Coral Reef State Park, Kajak durch die Mangroven, Tarpune füttern bei Robbie’s in Islamorada, Delfine im Dolphin Research Center.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, damit ein Ausweichtag bleibt, falls Wind und Wellen eine Bootstour verhindern.",
        "<strong>Schnorcheln:</strong> Bootstouren im Pennekamp-Park dauern ca. 2,5 Std. mit gut einer Stunde im Wasser (2026 ca. 65–75 USD pro Person, Ausrüstung inklusive); alle müssen schwimmen können.",
        "<strong>Riff:</strong> Riffschonende Sonnencreme verwenden, Korallen nicht berühren."
      ],
      ausserdem: "Christ of the Abyss (Statue unter Wasser), History of Diving Museum, Anne’s Beach.",
      bilder: [
        {titel: "Korallenriff", suche: "John Pennekamp Coral Reef State Park", stichwort: "pennekamp"},
        {titel: "Schnorcheln", suche: "Key Largo snorkeling reef", stichwort: "key largo"},
        {titel: "Islamorada", suche: "Islamorada Florida", stichwort: "islamorada"},
        {titel: "Mangroven", suche: "Florida Keys mangroves kayak", stichwort: "mangrove"},
        {titel: "Christ of the Abyss", suche: "Christ of the Abyss Key Largo", stichwort: "abyss"},
        {titel: "Anne’s Beach", suche: "Anne's Beach Islamorada", stichwort: "anne"}
      ]
    },
    {
      nr: 4,
      land: "us",
      name: "Orlando",
      region: "Florida",
      datum: "26.–29. Juni",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Key Largo über den Florida’s Turnpike nach Orlando (ca. 4,5–5,5 Std., ca. 440 km, Mautstrasse).",
      text: "Hauptstadt der Freizeitparks und Ausgangspunkt zum Kennedy Space Center, von wo die Raketen starten. Für die Teenager einer der Höhepunkte der Reise.",
      teens: "Universal Studios und Islands of Adventure (Harry Potter), Kennedy Space Center mit der Saturn-V-Rakete und dem Space Shuttle Atlantis, mit Glück ein Raketenstart.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Universal, ein Tag Kennedy Space Center (ca. 1 Std. östlich), ein ruhiger Tag am Pool.",
        "<strong>Tickets:</strong> Freizeitparks online und früh buchen, die Preise ändern sich je nach Tag.",
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
      nr: 5,
      land: "us",
      name: "Destin (Golfküste)",
      region: "Florida Panhandle",
      datum: "29. Juni–2. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Orlando über die Interstate 10 an die Golfküste (ca. 6–7 Std., ca. 620 km). Die Panhandle liegt in der Central-Zeitzone, die Uhr springt −1 Std.",
      text: "Weisser Quarzsand und smaragdgrünes Wasser am Golf von Mexiko: drei Strandtage nach den Freizeitparks, bevor es in die Städte am Golf geht.",
      teens: "Baden und Sandburgen am Henderson Beach, Delfin-Bootstour, Schnorcheln an den Jetties von Destin (ruhiges Wasser), Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte am Strand, z.B. in Destin oder Santa Rosa Beach.",
        "<strong>Baden:</strong> Auf die Strandflaggen achten: rote Flagge heisst gefährliche Strömung (Rip Currents), dann nicht ins Wasser.",
        "<strong>Wetter:</strong> Gewitter am Nachmittag sind häufig; Hurrikansaison."
      ],
      ausserdem: "Henderson Beach State Park, Grayton Beach, Seaside, Pensacola Beach (auf dem Weg nach New Orleans).",
      bilder: [
        {titel: "Strand", suche: "Destin Florida beach", stichwort: "destin"},
        {titel: "Henderson Beach", suche: "Henderson Beach State Park", stichwort: "henderson"},
        {titel: "Grayton Beach", suche: "Grayton Beach State Park", stichwort: "grayton"},
        {titel: "Seaside", suche: "Seaside Florida", stichwort: "seaside"},
        {titel: "Smaragdküste", suche: "Emerald Coast Florida", stichwort: "emerald coast"},
        {titel: "Pensacola Beach", suche: "Pensacola Beach", stichwort: "pensacola"}
      ]
    },
    {
      nr: 6,
      land: "us",
      name: "New Orleans",
      region: "Louisiana",
      datum: "2.–4. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Destin über die Interstate 10 (ca. 4–4,5 Std., ca. 400 km).",
      text: "Jazz, Balkone mit schmiedeeisernen Geländern und kreolische Küche im French Quarter, dazu Sümpfe mit Alligatoren gleich vor der Stadt.",
      teens: "Sumpftour mit Alligatoren, Raddampfer auf dem Mississippi, Beignets im Café du Monde, Strassenmusik im French Quarter, Insektenmuseum Audubon Insectarium.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte.",
        "<strong>Hitze:</strong> Sehr feucht und heiss; Programm am Morgen und Abend, mittags klimatisierte Museen.",
        "<strong>Sicherheit:</strong> Im French Quarter abends auf belebten Strassen bleiben, Wertsachen nicht offen tragen."
      ],
      ausserdem: "Garden District, National WWII Museum, Jackson Square, Frenchmen Street (Jazz).",
      bilder: [
        {titel: "French Quarter", suche: "French Quarter New Orleans balconies", stichwort: "french quarter"},
        {titel: "Sumpftour", suche: "Louisiana swamp tour alligator|Louisiana bayou", stichwort: "swamp|bayou"},
        {titel: "Raddampfer", suche: "Steamboat Natchez New Orleans", stichwort: "natchez"},
        {titel: "Jackson Square", suche: "Jackson Square New Orleans", stichwort: "jackson square"},
        {titel: "Garden District", suche: "Garden District New Orleans", stichwort: "garden district"},
        {titel: "Café du Monde", suche: "Cafe du Monde New Orleans", stichwort: "du monde"}
      ]
    },
    {
      nr: 7,
      land: "us",
      name: "Houston",
      region: "Texas",
      datum: "4.–5. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von New Orleans über die Interstate 10 (ca. 5–6 Std., ca. 560 km).",
      text: "Die Raumfahrtstadt: Im Space Center Houston steht man in der Halle der Saturn-V-Rakete und neben dem Kontrollraum der Mondlandungen. Am 4. Juli feiert Houston den Nationalfeiertag mit Feuerwerk.",
      teens: "Space Center Houston mit Tram-Tour zum Mission Control und zur Saturn-V-Halle, Feuerwerk zum 4. Juli.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht; das Space Center liegt ca. 40 Min. südöstlich der Stadt und eignet sich auch als Halt auf der Weiterfahrt.",
        "<strong>4. Juli:</strong> Am Nationalfeiertag sind Strassen und Unterkünfte voll, früh buchen."
      ],
      ausserdem: "Museum District, Buffalo Bayou Park, Galveston (Strand, ca. 1 Std.).",
      bilder: [
        {titel: "Space Center Houston", suche: "Space Center Houston", stichwort: "space center houston"},
        {titel: "Saturn V", suche: "Saturn V Johnson Space Center", stichwort: "saturn"},
        {
          titel: "Mission Control",
          suche: "Christopher C. Kraft Mission Control Center|Mission Control Houston",
          stichwort: "mission control"
        },
        {titel: "Skyline", suche: "Houston skyline", stichwort: "houston"},
        {titel: "Buffalo Bayou", suche: "Buffalo Bayou Park Houston", stichwort: "buffalo bayou"},
        {titel: "Galveston", suche: "Galveston Pleasure Pier", stichwort: "galveston"}
      ]
    },
    {
      nr: 8,
      land: "us",
      name: "San Antonio",
      region: "Texas",
      datum: "5.–7. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Houston über die Interstate 10 (ca. 3–3,5 Std., ca. 320 km).",
      text: "Texanische Geschichte und Flusspromenade: die Missionsstation Alamo, der River Walk mit Booten und Restaurants am Wasser und Tex-Mex-Küche.",
      teens: "Bootsfahrt auf dem River Walk, The Alamo, Missions-Weltkulturerbe per Velo, Freizeitpark Six Flags Fiesta Texas oder Wasserpark.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte vor der langen Fahrt nach Westen.",
        "<strong>Hitze:</strong> Oft über 35 °C; River Walk am Abend am schönsten.",
        "<strong>Hinweis:</strong> The Alamo mit Zeitfenster-Tickets (Eintritt in die Kirche gratis, Reservation empfohlen)."
      ],
      ausserdem: "San Antonio Missions (Unesco), Pearl District, Natural Bridge Caverns (Höhle).",
      bilder: [
        {titel: "River Walk", suche: "San Antonio River Walk", stichwort: "river walk"},
        {titel: "The Alamo", suche: "The Alamo San Antonio", stichwort: "alamo"},
        {titel: "Mission San José", suche: "Mission San Jose San Antonio", stichwort: "mission san jos"},
        {titel: "Flussboot", suche: "San Antonio River Walk boat", stichwort: "river walk"},
        {titel: "Natural Bridge Caverns", suche: "Natural Bridge Caverns", stichwort: "natural bridge"},
        {titel: "Pearl District", suche: "Pearl Brewery San Antonio", stichwort: "pearl"}
      ]
    },
    {
      nr: 9,
      land: "us",
      name: "Carlsbad Caverns",
      region: "New Mexico",
      datum: "8.–9. Juli",
      naechte: "1 Nacht",
      zwischenstopp: {text: "Zwischenübernachtung in Fort Stockton", datum: "7.–8. Juli"},
      anreise: "Mietwagen von San Antonio über die Interstate 10 nach Fort Stockton (ca. 5–5,5 Std., ca. 520 km), dort übernachten. Am nächsten Tag über die US-285 nach Carlsbad (ca. 2,5–3,5 Std., ca. 250 km; schmale Strasse mit viel Lastwagenverkehr, wenig Tankstellen). In New Mexico springt die Uhr −1 Std.",
      text: "Riesige Tropfsteinhöhlen unter der Wüste: Ein Rundweg führt durch den «Big Room», einen der grössten Höhlensäle Nordamerikas. Am Abend fliegen im Sommer Hunderttausende Fledermäuse aus.",
      teens: "Abstieg zu Fuss durch den natürlichen Eingang oder per Lift, Rundgang durch den Big Room, Fledermausflug in der Abenddämmerung.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht in Carlsbad oder White’s City.",
        "<strong>Tickets:</strong> Zeitfenster-Reservation auf recreation.gov (1 USD) dringend empfohlen, dazu Eintritt 15 USD pro Person ab 16 Jahren; Kids bis 15 gratis.",
        "<strong>Hinweis:</strong> In der Höhle sind es ganzjährig ca. 13 °C: eine Jacke mitnehmen."
      ],
      ausserdem: "Living Desert Zoo and Gardens, Guadalupe Mountains National Park (Texas).",
      bilder: [
        {titel: "Big Room", suche: "Carlsbad Caverns Big Room", stichwort: "big room|carlsbad"},
        {titel: "Tropfsteine", suche: "Carlsbad Caverns formations", stichwort: "carlsbad"},
        {
          titel: "Natürlicher Eingang",
          suche: "Carlsbad Caverns natural entrance",
          stichwort: "natural entrance|carlsbad"
        },
        {titel: "Fledermäuse", suche: "Carlsbad Caverns bat flight", stichwort: "bat"},
        {
          titel: "Guadalupe Mountains",
          suche: "Guadalupe Peak|Guadalupe Mountains National Park",
          stichwort: "guadalupe"
        },
        {titel: "Chihuahua-Wüste", suche: "Chihuahuan Desert New Mexico", stichwort: "chihuahuan"}
      ]
    },
    {
      nr: 10,
      name: "White Sands (Alamogordo)",
      land: "us",
      region: "New Mexico",
      datum: "9.–10. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Carlsbad über Artesia und die Bergstrasse US-82 durch Cloudcroft nach Alamogordo (ca. 3–3,5 Std., ca. 300 km).",
      text: "Weisse Gipsdünen in der Wüste von New Mexico: ein einzigartiger Landschaftstyp, durch den man barfuss wandert und auf Plastikschlitten die Dünen hinunterrutscht. White Sands ist ein Nationalpark.",
      teens: "Dünenrutschen mit Schlitten (im Visitor Center erhältlich), Sonnenuntergangs-Spaziergang, Wanderung auf dem Alkali Flat Trail (nur früh oder spät).",
      fakten: [
        "<strong>Hitze:</strong> Im Juli bis 40 °C und kaum Schatten. Früh am Morgen oder zum Sonnenuntergang gehen, genug Wasser mitnehmen.",
        "<strong>Hinweis:</strong> Die Strasse durch den Park kann wegen Raketentests auf dem benachbarten Testgelände zeitweise gesperrt sein; Lage vorab prüfen.",
        "<strong>Gebühr:</strong> Eintritt pro Fahrzeug (mit dem Jahrespass inklusive); White Sands gehört nicht zu den Parks mit 100 USD Zusatzgebühr."
      ],
      ausserdem: "Space History Museum in Alamogordo, Three Rivers Petroglyph Site, Lincoln National Forest (kühler).",
      bilder: [
        {titel: "Gipsdünen", suche: "White Sands National Park dunes|White Sands dunes", stichwort: "white sands"},
        {titel: "Sonnenuntergang", suche: "White Sands sunset", stichwort: "white sands"},
        {titel: "Besucherzentrum", suche: "White Sands National Monument Visitor Center", stichwort: "visitor center"},
        {
          titel: "Weisse Eidechse",
          suche: "Holbrookia maculata White Sands|bleached earless lizard",
          stichwort: "holbrookia|lizard"
        },
        {titel: "Yucca", suche: "White Sands yucca|White Sands plants", stichwort: "white sands"},
        {titel: "Raumfahrtmuseum", suche: "New Mexico Museum of Space History", stichwort: "space history"}
      ]
    },
    {
      nr: 11,
      name: "Santa Fe",
      land: "us",
      region: "New Mexico",
      datum: "10.–12. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Alamogordo über die US-54 und Albuquerque nach Santa Fe (ca. 4–4,5 Std.).",
      text: "Die Hauptstadt von New Mexico auf rund 2’100 Metern Höhe: Lehmziegel-Architektur, Kunstgalerien und die Landschaft des Südwestens. Nach der Wildnis kommt hier wieder Stadtleben.",
      teens: "Meow Wolf «House of Eternal Return» (immersive Kunstwelt, Tickets vorab), Bandelier National Monument (Felswohnungen und Leitern), Plaza und Canyon Road, Bradbury Science Museum in Los Alamos.",
      fakten: [
        "<strong>Höhe:</strong> Auf 2’100 m Sonnencreme, viel trinken und am ersten Tag nicht übertreiben.",
        "<strong>Hinweis:</strong> Am Nachmittag sind Monsungewitter möglich; in Schluchten und auf Bergstrassen achtsam fahren.",
        "<strong>Essen:</strong> Neu-mexikanische Küche mit roten und grünen Chilis (nach der Schärfe fragen)."
      ],
      ausserdem: "Georgia O’Keeffe Museum, Loretto Chapel, Kasha-Katuwe Tent Rocks (Wanderung), Albuquerque (Altstadt, Petroglyph National Monument).",
      bilder: [
        {titel: "Plaza", suche: "Santa Fe Plaza|Santa Fe New Mexico plaza", stichwort: "santa fe"},
        {titel: "Meow Wolf", suche: "Meow Wolf Santa Fe|House of Eternal Return", stichwort: "meow wolf"},
        {titel: "Bandelier", suche: "Bandelier National Monument", stichwort: "bandelier"},
        {titel: "Canyon Road", suche: "Canyon Road Santa Fe", stichwort: "canyon road"},
        {titel: "Loretto Chapel", suche: "Loretto Chapel Santa Fe", stichwort: "loretto"},
        {
          titel: "Tent Rocks",
          suche: "Kasha-Katuwe Tent Rocks National Monument|Tent Rocks",
          stichwort: "tent rocks|kasha"
        }
      ]
    },
    {
      nr: 12,
      name: "Monument Valley (Navajo Nation)",
      land: "us",
      region: "Utah und Arizona",
      datum: "12.–13. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Santa Fe über Farmington und Shiprock (ca. 6,5–7 Std., ca. 620 km). Einer der längeren Fahrtage: früh starten.",
      text: "Die roten Sandsteintürme aus unzähligen Westernfilmen liegen im Navajo Tribal Park an der Grenze von Utah und Arizona. Eine Nacht reicht, wenn ihr Sonnenuntergang und Sonnenaufgang erlebt.",
      teens: "Valley Drive (ca. 27 km Schotterpiste, mit eigenem Fahrzeug oder geführter Jeeptour der Navajo), Fotostopp am Forrest Gump Point auf der Strasse 163, Sonnenaufgang vom Balkon des The View Hotel (früh buchen).",
      fakten: [
        "<strong>Zeit:</strong> Die Navajo Nation führt die Sommerzeit ein, Arizona nicht: Die Uhr springt um eine Stunde. Zeiten für Touren und Abfahrten genau prüfen.",
        "<strong>Regeln:</strong> Der Park hat eigene Navajo-Regeln (Eintritt pro Person, keine Drohnen, nicht von der Piste abfahren). Der Nationalpark-Jahrespass gilt hier nicht.",
        "<strong>Hinweis:</strong> Die Piste ist bei Regen oft gesperrt. Unterkünfte sind einfach und knapp, früh buchen."
      ],
      ausserdem: "Goosenecks State Park, Valley of the Gods (Schotterstrasse), Mexican Hat (Felsformation), Four Corners Monument (optional, ca. 1,5 Std.).",
      bilder: [
        {titel: "Monument Valley", suche: "Monument Valley Utah Arizona|Monument Valley", stichwort: "monument valley"},
        {titel: "Navajo-Hogan", suche: "Navajo hogan Monument Valley|Navajo hogan", stichwort: "hogan"},
        {
          titel: "Forrest Gump Point",
          suche: "Forrest Gump Point US 163|US 163 Monument Valley",
          stichwort: "163|forrest gump"
        },
        {titel: "Valley of the Gods", suche: "Valley of the Gods Utah", stichwort: "valley of the gods"},
        {titel: "Goosenecks", suche: "Goosenecks State Park", stichwort: "goosenecks"},
        {titel: "Sonnenuntergang", suche: "Monument Valley sunset", stichwort: "monument valley"}
      ]
    },
    {
      nr: 13,
      name: "Grand Canyon (South Rim)",
      land: "us",
      region: "Arizona",
      datum: "13.–15. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Monument Valley über Kayenta, Tuba City und Cameron zum Südrand (ca. 3,5 Std., ca. 290 km). Arizona hat keine Sommerzeit, die Uhr springt −1 Std.",
      text: "Der Südrand des Grand Canyon ist der klassische Zugang: Aussichtspunkte direkt am Rand, Wanderwege und ein kostenloser Parkshuttle. Zwei Nächte am Rand, am besten im Park oder im nahen Tusayan.",
      teens: "Mather Point und Rim Trail (flach, grosse Aussicht), Sonnenuntergang am Hopi Point, Junior-Ranger-Programm im Visitor Center, Desert View Watchtower, ein Stück den Bright Angel Trail hinunterwandern (nicht bis zum Fluss).",
      fakten: [
        "<strong>Gebühr:</strong> Auch der Grand Canyon gehört zu den 11 Parks mit 100 USD Zusatzgebühr pro Person ab 16 Jahren. Mit dem Jahrespass (250 USD) entfällt sie.",
        "<strong>Sicherheit:</strong> Auf Trails nicht zu weit absteigen: der Aufstieg dauert doppelt so lang wie der Abstieg. Wasser, salzige Snacks und Hut mitnehmen.",
        "<strong>Unterkunft:</strong> Zimmer im Park sind oft Monate im Voraus ausgebucht; sonst in Tusayan oder Williams übernachten."
      ],
      ausserdem: "Desert View Drive (Panoramastrasse), Grand Canyon Railway (Williams), Cameron Trading Post.",
      bilder: [
        {titel: "South Rim", suche: "Grand Canyon South Rim|Grand Canyon National Park", stichwort: "grand canyon"},
        {titel: "Mather Point", suche: "Mather Point Grand Canyon", stichwort: "mather point"},
        {titel: "Kalifornischer Kondor", suche: "California condor Grand Canyon|California condor", stichwort: "condor"},
        {titel: "Desert View", suche: "Desert View Watchtower", stichwort: "desert view"},
        {titel: "Bright Angel Trail", suche: "Bright Angel Trail Grand Canyon", stichwort: "bright angel"},
        {titel: "Maultiere", suche: "Grand Canyon mule ride|Grand Canyon mules", stichwort: "mule"}
      ]
    },
    {
      nr: 14,
      name: "Page und Lake Powell",
      land: "us",
      region: "Arizona",
      datum: "15.–17. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen vom Südrand über Cameron und den Highway 89 nach Page (ca. 2,5 Std.).",
      text: "Kleinstadt am Lake Powell mit zwei weltberühmten Fotomotiven: dem Horseshoe Bend und dem Antelope Canyon. Beides liegt auf oder neben Navajo-Land.",
      teens: "Geführte Tour durch den Antelope Canyon (Zeitfenster vorab buchen), Horseshoe Bend zum Sonnenuntergang, Bootsfahrt oder Baden im Lake Powell.",
      fakten: [
        "<strong>Hinweis:</strong> Der Antelope Canyon ist nur mit zugelassenen Navajo-Führern zugänglich. Bei Gewitter oder Regen in der Umgebung werden Touren wegen Sturzfluten abgesagt (Juli: Monsun).",
        "<strong>Zeit:</strong> Page richtet sich nach der Arizona-Zeit (keine Sommerzeit). Die Uhr ändert sich gegenüber Utah um eine Stunde.",
        "<strong>Hitze:</strong> Mittags 38 °C und mehr; Touren am frühen Morgen oder am Abend wählen."
      ],
      ausserdem: "Glen Canyon Dam (Besucherzentrum), Wahweap-Strand, Rainbow Bridge (nur per Boot), Waterholes Canyon (Tour).",
      bilder: [
        {titel: "Horseshoe Bend", suche: "Horseshoe Bend Arizona", stichwort: "horseshoe bend"},
        {titel: "Antelope Canyon", suche: "Antelope Canyon|Lower Antelope Canyon", stichwort: "antelope canyon"},
        {titel: "Lake Powell", suche: "Lake Powell Arizona|Lake Powell", stichwort: "lake powell"},
        {titel: "Glen Canyon Dam", suche: "Glen Canyon Dam", stichwort: "glen canyon dam"},
        {
          titel: "Rainbow Bridge",
          suche: "Rainbow Bridge National Monument|Rainbow Bridge Lake Powell",
          stichwort: "rainbow bridge national|lake powell"
        },
        {titel: "Page", suche: "Page Arizona|Wahweap Bay", stichwort: "page|wahweap"}
      ]
    },
    {
      nr: 15,
      name: "Zion National Park (Springdale)",
      land: "us",
      region: "Utah",
      datum: "17.–19. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Page über Kanab nach Springdale (ca. 2,5 Std.). In Utah springt die Uhr +1 Std.",
      text: "Rote Felsklippen, grüne Schluchten und der Virgin River: Zion ist einer der schönsten Nationalparks der USA. Das Dorf Springdale liegt direkt am Parkeingang.",
      teens: "Riverside Walk und Wandern durch den Fluss in «The Narrows» (Wasserschuhe und Wanderstöcke leihbar), Emerald Pools, Canyon Overlook Trail, kostenloser Parkshuttle ab dem Visitor Center.",
      fakten: [
        "<strong>Gebühr:</strong> Zion gehört zu den 11 Parks mit 100 USD Zusatzgebühr pro Person ab 16 Jahren für Nicht-US-Bewohner (die Teenager sind davon ausgenommen). Für die Reise lohnt sich der Nicht-Residenten-Jahrespass (250 USD).",
        "<strong>Sicherheit:</strong> Juli ist Monsunzeit. Bei Gewitterwarnung werden die Narrows wegen Sturzflutgefahr gesperrt; aktuelle Lage im Visitor Center prüfen.",
        "<strong>Hinweis:</strong> Angels Landing braucht eine Genehmigung und ist exponiert, für die Kids nicht eingeplant."
      ],
      ausserdem: "Watchman Trail, Zion–Mount Carmel Highway (Panoramastrasse), Kolob Canyons (ruhiger Nordteil), Bryce Canyon als Tagesausflug (ca. 2 Std., ebenfalls mit Zusatzgebühr).",
      bilder: [
        {titel: "Zion Canyon", suche: "Zion Canyon Virgin River|Zion National Park", stichwort: "zion"},
        {titel: "The Narrows", suche: "The Narrows Zion|Zion Narrows", stichwort: "narrows"},
        {titel: "Emerald Pools", suche: "Emerald Pools Zion", stichwort: "emerald pools"},
        {titel: "Angels Landing", suche: "Angels Landing Zion", stichwort: "angels landing"},
        {titel: "Mount Carmel Highway", suche: "Zion Mount Carmel Highway", stichwort: "carmel"},
        {titel: "Watchman", suche: "The Watchman Zion|Watchman Zion", stichwort: "watchman"}
      ]
    },
    {
      nr: 16,
      name: "Las Vegas (Finale)",
      land: "us",
      region: "Nevada",
      datum: "19.–22. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Springdale über St. George und die Interstate 15 (ca. 2,5–3 Std.); in Nevada springt die Uhr −1 Std. Mietwagen am Flughafen zurückgeben.",
      text: "Der Schluss in der Wüste: Neonlichter, Hotels wie Freizeitparks und am letzten Abend die Wasserspiele des Bellagio, bevor es zurück nach Zürich geht.",
      teens: "High Roller (Riesenrad) bei Sonnenuntergang, Wasserspiele des Bellagio, Red Rock Canyon (Felsen und Aussicht) früh am Morgen, Hoover-Staudamm als Halbtagesausflug, Shows und Hotels als Kulisse.",
      fakten: [
        "<strong>Hitze:</strong> Im Juli werden oft 40–45 °C erreicht. Aktivitäten morgens und abends, tagsüber klimatisierte Hotels. Viel Wasser trinken.",
        "<strong>Hinweis:</strong> Glücksspiel ist erst ab 21 Jahren erlaubt. Viele Hotels verlangen zusätzlich «Resort Fees» pro Nacht (oft über 40 USD).",
        "<strong>Rückflug:</strong> Am Do, 22.07.2027. Direktflüge Las Vegas–Zürich gibt es nur an einzelnen Wochentagen (Sommer 2026: Mo, Mi, Sa, ca. 10,5 Std.); am Donnerstag mit Umstieg ca. 14–17 Std. Flugplan 2027 prüfen."
      ],
      ausserdem: "Fremont Street Experience (Altstadt, Lichtshow), Neon Museum, Valley of Fire State Park (rote Felsen), Madame Tussauds, Sphere (nur bei Veranstaltungen).",
      bilder: [
        {titel: "Strip", suche: "Las Vegas Strip night|Las Vegas Boulevard", stichwort: "las vegas"},
        {titel: "Bellagio", suche: "Fountains of Bellagio", stichwort: "bellagio"},
        {titel: "High Roller", suche: "High Roller Las Vegas|High Roller observation wheel", stichwort: "high roller"},
        {titel: "Fremont Street", suche: "Fremont Street Experience", stichwort: "fremont"},
        {titel: "Red Rock Canyon", suche: "Red Rock Canyon National Conservation Area", stichwort: "red rock"},
        {titel: "Valley of Fire", suche: "Valley of Fire State Park", stichwort: "valley of fire"}
      ]
    }
  ],
  abschluss: "Rückflug ab Las Vegas nach Zürich am Do, 22.07.2027 (mit Umstieg ca. 14–17 Std., direkt nur an einzelnen Wochentagen).",
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 34,
    total: "36’800",
    spanne: "28’300–47’450",
    proTag: "ca. 1’080 CHF pro Tag, ca. 9’200 pro Person",
    posten: [
      [
        "Flüge Zürich–Miami und Las Vegas–Zürich",
        "4’000–6’000",
        "5’000",
        "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Mietwagen (Einwegmiete, Benzin, Parken, Maut)",
        "3’800–6’500",
        "5’000",
        "Miami–Las Vegas (ca. 31 Tage, ca. 3’700 Meilen); die Rückgabegebühr für eine Einwegmiete quer durchs Land kann bis gegen 1’500 USD betragen"
      ],
      ["Lokale Verkehrsmittel", "300–700", "500", "Taxi, Parkhäuser in Miami und New Orleans"],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "7’500–12’000",
        "9’500",
        "ca. 150–600 CHF pro Nacht, Key West, die Keys und die Nationalparks am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’750–8’150", "6’200", "ca. 140–240 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)",
        "4’500–8’000",
        "6’000",
        "Pass 250 USD, Universal, Kennedy Space Center, Schnorcheltour, Dry Tortugas, Space Center Houston, Antelope Canyon usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "900–1’800",
        "1’300",
        "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"
      ],
      ["Reserve (ca. 10 %)", "2’550–4’300", "3’300", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Miami (3)", "900–1’500"],
      ["2. Key West (2)", "900–1’600"],
      ["3. Key Largo und Islamorada (3)", "1’050–1’800"],
      ["4. Orlando (3)", "1’050–1’900"],
      ["5. Destin (3)", "900–1’500"],
      ["6. New Orleans (2)", "600–1’000"],
      ["7. Houston (1)", "300–500"],
      ["8. San Antonio (2)", "500–850"],
      ["Zwischenübernachtung Fort Stockton (1)", "150–250"],
      ["9. Carlsbad Caverns (1)", "250–400"],
      ["10. White Sands (1)", "300–520"],
      ["11. Santa Fe (2)", "780–1’330"],
      ["12. Monument Valley (1)", "540–1’040"],
      ["13. Grand Canyon (2)", "830–1’430"],
      ["14. Page und Lake Powell (2)", "880–1’480"],
      ["15. Zion National Park (2)", "730–1’180"],
      ["16. Las Vegas (3)", "1’070–1’970"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: weniger Nächte in Key West, Frühstück im Hotel, Imbiss statt Restaurant, Nationalpark-Jahrespass früh kaufen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ]
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
      "Seit Januar 2026 zahlen Nicht-US-Bewohner ab 16 Jahren in 11 Parks zusätzlich 100 USD pro Person (u.a. Zion und Grand Canyon). Der Jahrespass für Nicht-Residenten kostet 250 USD und deckt das Fahrzeug bzw. die Insassen. Für euch (zwei Erwachsene über 16) lohnt sich der Pass bei zwei solchen Parks. Für Monument Valley gilt er nicht (Navajo-Nation-Eintritt)."
    ],
    [
      "Mietwagen",
      "Familienvan oder SUV, die Einwegmiete Miami–Las Vegas früh buchen (Rückgabegebühr oft hoch, Angebote mehrerer Firmen vergleichen). In Florida viele Mautstrassen: Mautpaket oder Abrechnung per Kennzeichen beim Vermieter klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Vollkasko prüfen."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze, Hurrikane und Monsun",
      "Florida und die Golfküste sind im Sommer heiss und feucht, mit Gewittern am Nachmittag; Juni bis November ist Hurrikansaison: Wetterwarnungen verfolgen, flexibel bleiben. Las Vegas, Zion und White Sands erreichen im Juli 38–45 °C; im Südwesten beginnt der Monsun mit Gewittern und Sturzfluten in Schluchten (Narrows, Antelope Canyon). Wanderungen früh starten, genug Wasser dabei haben."
    ],
    [
      "Zeitzonen",
      "Florida (ohne Panhandle) Eastern-Zeit, Panhandle, Louisiana und Texas Central-Zeit, New Mexico und Utah Mountain-Zeit, Arizona keine Sommerzeit, Navajo Nation Sommerzeit, Las Vegas Pazifikzeit. Zur Schweiz sind es −6 bis −9 Stunden."
    ],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung mit hoher Deckung ist in den USA unverzichtbar, Arztkosten sind sehr hoch. Zusätzlich Annullationsschutz für Flüge, Hotels und Mietwagen."
    ],
    [
      "Navajo Nation",
      "Monument Valley und Antelope Canyon liegen auf Navajo-Land mit eigenen Regeln: Eintritt pro Person, geführte Touren, keine Drohnen, kein Alkohol. Respektvoll verhalten, Fotos von Menschen nur mit Erlaubnis."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Konsulate) notieren; EDA-Reiseplattform nutzen."
    ],
    ["Handy", "eSIM für die USA vorab kaufen. Offline-Karten für Nationalparks laden, dort gibt es oft keinen Empfang."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."],
    [
      "Strand und Meer",
      "Auf die Strandflaggen achten (rote Flagge: gefährliche Strömung), riffschonende Sonnencreme verwenden, Quallen und Stechrochen beachten (beim Gehen im flachen Wasser die Füsse schleifen lassen). In Süsswasser in Florida nicht baden: Alligatoren."
    ]
  ]
};
