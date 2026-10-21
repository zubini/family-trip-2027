// Reise: USA von Miami über Las Vegas nach New York (Mietwagen bis Las Vegas, Inlandflug nach Washington, Zug nach New York)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa = {
  titel: "Von Miami über Las Vegas nach New York",
  menu: "USA",
  untertitel: "Fünf Wochen USA: mit dem Mietwagen von Florida über die Keys, die Golfküste, New Orleans und Texas zu den Nationalparks im Südwesten bis Las Vegas, dann mit dem Flugzeug nach Washington und mit dem Zug nach New York.",
  zeitraum: "Sa, 19.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    datei: "USA 10187 Horseshoe Bend Luca Galuzzi 2007.jpg",
    suche: "Horseshoe Bend Arizona|Monument Valley sunset",
    stichwort: "horseshoe bend|monument valley",
    alt: "Horseshoe Bend, Arizona"
  },
  planIntro: "Abflug ab Zürich nach Miami am Sa, 19.06.2027, Rückflug ab New York am Fr, 23.07.2027 (Ankunft Sa, 24.07.2027). Dazwischen eine Einwegmiete Miami–Las Vegas, ein Inlandflug nach Washington und der Zug nach New York. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Flug Zürich–Miami",
    info: "Abflug am Sa, 19.06.2027, Direktflug ca. 10,5 Std. (täglich), Ankunft am selben Tag am späten Nachmittag"
  },
  plan: [
    {
      datum: "19.–21. Juni",
      name: "1. Miami",
      naechte: 2,
      info: "Flug ab Zürich (ca. 10,5 Std.), Mietwagen am Flughafen abholen (Einwegmiete bis Las Vegas)"
    },
    {
      datum: "21.–25. Juni",
      name: "2. Key Largo und Islamorada",
      naechte: 4,
      info: "Mietwagen über den Highway US-1 (ca. 1,25–1,5 Std.)"
    },
    {datum: "25.–28. Juni", name: "3. Orlando", naechte: 3, info: "Mietwagen (ca. 4,5–5,5 Std.)"},
    {datum: "28.–30. Juni", name: "4. Destin (Golfküste)", naechte: 2, info: "Mietwagen (ca. 6–7 Std.), Uhr −1 Std."},
    {datum: "30. Juni–2. Juli", name: "5. New Orleans", naechte: 2, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "2.–3. Juli", name: "6. Houston", naechte: 1, info: "Mietwagen (ca. 5–6 Std.)"},
    {datum: "3.–5. Juli", name: "7. San Antonio", naechte: 2, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {datum: "5.–6. Juli", name: "Zwischenübernachtung Fort Stockton", naechte: 1, info: "Mietwagen (ca. 5–5,5 Std.)"},
    {datum: "6.–7. Juli", name: "8. Carlsbad Caverns", naechte: 1, info: "Mietwagen (ca. 2,5–3,5 Std.), Uhr −1 Std."},
    {datum: "7.–8. Juli", name: "9. White Sands (Alamogordo)", naechte: 1, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {datum: "8.–9. Juli", name: "10. Santa Fe", naechte: 1, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "9.–10. Juli", name: "11. Monument Valley", naechte: 1, info: "Mietwagen (ca. 6,5–7 Std.)"},
    {
      datum: "10.–12. Juli",
      name: "12. Grand Canyon (South Rim)",
      naechte: 2,
      info: "Mietwagen (ca. 3,5 Std.), Uhr −1 Std."
    },
    {datum: "12.–13. Juli", name: "13. Page und Lake Powell", naechte: 1, info: "Mietwagen (ca. 2,5 Std.)"},
    {datum: "13.–15. Juli", name: "14. Zion National Park", naechte: 2, info: "Mietwagen (ca. 2,5 Std.), Uhr +1 Std."},
    {
      datum: "15.–17. Juli",
      name: "15. Las Vegas",
      naechte: 2,
      info: "Mietwagen (ca. 2,5–3 Std.), Uhr −1 Std.; Rückgabe am Flughafen"
    },
    {
      datum: "17.–20. Juli",
      name: "16. Washington, D.C.",
      naechte: 3,
      info: "Inlandflug nonstop (ca. 4,5–5 Std.), Uhr +3 Std."
    },
    {datum: "20.–23. Juli", name: "17. New York", naechte: 3, info: "Amtrak-Zug (ca. 3–3,5 Std.); Rückflug 23. Juli"}
  ],
  rueckflug: {
    datum: "23. Juli",
    name: "Flug New York–Zürich",
    info: "Nachtflug ab Newark oder John F. Kennedy ca. 7,5–8 Std., Ankunft in Zürich am Sa, 24.07.2027 am Morgen"
  },
  planHinweise: [
    [
      "Gesamt",
      "34 Nächte, 17 Stationen und eine Zwischenübernachtung (Fort Stockton). Eine Einwegmiete Miami–Las Vegas (ca. 28 Tage) mit ca. 5’700 km und ca. 59–60 Std. reiner Fahrzeit an 15 Fahrtagen, realistisch mit Pausen, Tanken, Stau und Fahrten vor Ort ca. 69–73 Std. im Auto. Dazu ein Inlandflug Las Vegas–Washington (ca. 4,5–5 Std.) und der Zug nach New York (ca. 3–3,5 Std.). Die längsten Fahrtage: Santa Fe–Monument Valley (ca. 6,5–7 Std.), Orlando–Destin (ca. 6–7 Std.), New Orleans–Houston (ca. 5–6 Std.), San Antonio–Fort Stockton (ca. 5–5,5 Std.), Key Largo–Orlando (ca. 4,5–5,5 Std.)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Miami mit SWISS als Direktflug täglich, ca. 10,5 Std. (Sommer 2026: Abflug ca. 13 Uhr, Ankunft ca. 17.30 Uhr Ortszeit, Zeitverschiebung −6 Std.). Rückflug: New York–Zürich ca. 7,5–8 Std. als Nachtflug am Fr, 23.07.2027 (Zeitverschiebung +6 Std.), Ankunft am Sa, 24.07.2027 am Morgen. Inlandflug Las Vegas–Washington am Sa, 17.07.2027 nonstop ca. 4,5–5 Std. (Uhr +3 Std.). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Vorab buchen",
      "Einwegmiete Miami–Las Vegas, Inlandflug Las Vegas–Washington (Gepäck einrechnen), Amtrak Washington–New York, Unterkünfte in den Keys, Schnorcheltour im Pennekamp-Park, Universal und Kennedy Space Center, Zeitfenster für Carlsbad Caverns, Unterkünfte im Grand Canyon und in Monument Valley (oft Monate im Voraus), Antelope-Canyon-Tour, Meow Wolf, Air and Space Museum, Aussichtsplattform und Broadway in New York."
    ],
    [
      "Optional",
      "Key West als Tagesausflug ab Key Largo, Galveston (Strand, ab Houston), Big Bend National Park (ab Fort Stockton, Umweg), Bryce Canyon (ab Zion, ca. 2 Std.), Hoover-Staudamm (ab Las Vegas), Mount Vernon (ab Washington), Coney Island (New York)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Mietwagen von Miami nach Las Vegas, dann mit dem Flugzeug nach Washington und mit dem Zug nach New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "air", "train"],
    karten: [
      {datei: "karten/usa.svg"},
      {titel: "Florida und Golfküste im Detail (Stationen 1 bis 7)", datei: "karten/usa-suedosten.svg"},
      {titel: "Südwesten im Detail (Stationen 8 bis 15)", datei: "karten/usa-suedwesten.svg"}
    ]
  },
  abwechslungIntro: "Nach langen Fahrtagen jeweils einen ruhigen Tag einplanen. Strand, Freizeitparks, Städte und Nationalparks wechseln sich ab, zum Schluss die zwei grossen Städte im Osten.",
  abwechslung: [
    [
      "Strand und Schnorcheln",
      "Korallenriff im Pennekamp-Park (Key Largo), Florida Keys mit Seven Mile Bridge und Bahia Honda, weisse Strände an der Golfküste bei Destin."
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
      "Miami mit Little Havana, New Orleans mit Jazz, San Antonio mit dem Alamo, Santa Fe, Navajo Nation, Washington mit den Smithsonian-Museen, New York."
    ],
    ["Ruhetage", "Islamorada, Destin und Zion sorgen für Erholung zwischen den Fahrtagen; im Osten kein Auto mehr."]
  ],
  stationenIntro: "Siebzehn Stationen von Miami bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Miami",
      land: "us",
      region: "Florida",
      datum: "19.–21. Juni",
      naechte: "2 Nächte",
      anreise: "Direktflug Zürich–Miami am Sa, 19.06.2027 (SWISS, ca. 10,5 Std., täglich; im Sommer 2026 Abflug ca. 13 Uhr, Ankunft ca. 17.30 Uhr), Zeitverschiebung −6 Std. Mietwagen am Flughafen abholen.",
      text: "Der Einstieg in die USA: Art-déco-Häuser und Strand in South Beach, kubanisches Essen in Little Havana und gleich vor der Stadt die Everglades mit Alligatoren und Mangroven.",
      teens: "Airboat-Fahrt und Alligatoren in den Everglades, Strand und Art-déco-Viertel in South Beach, Graffiti-Kunst in Wynwood Walls, Little Havana mit kubanischem Essen.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte gegen den Jetlag: ein Tag Everglades mit Airboat, ein halber Tag South Beach und Little Havana.",
        "<strong>Wetter:</strong> Heiss und feucht, am Nachmittag oft kurze Gewitter; Juni bis November ist Hurrikansaison, Wetterberichte verfolgen.",
        "<strong>Mietwagen:</strong> Eine Einwegmiete Miami–Las Vegas (ca. 28 Tage) früh buchen; die Rückgabegebühr in einem anderen Bundesstaat ist hoch."
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
      name: "Key Largo und Islamorada",
      land: "us",
      region: "Florida Keys",
      datum: "21.–25. Juni",
      naechte: "4 Nächte",
      anreise: "Mietwagen von Miami über den Highway US-1 nach Key Largo oder Islamorada (ca. 1,25–1,5 Std., ca. 95 km).",
      text: "Die oberen Keys sind das Schnorchelrevier der Reise: das einzige lebende Korallenriff auf dem Festlandsockel der USA liegt vor der Küste, mit Papageifischen, Rochen und manchmal Schildkröten.",
      teens: "Schnorcheltour zum Riff im John Pennekamp Coral Reef State Park, Kajak durch die Mangroven, Tarpune füttern bei Robbie’s in Islamorada, Delfine im Dolphin Research Center.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: Schnorcheltour (mit Ausweichtag bei Wind), Kajak in den Mangroven, ein Tag über die Seven Mile Bridge zum Bahia Honda State Park (ca. 1,5–2 Std. pro Weg), ein ruhiger Strandtag.",
        "<strong>Schnorcheln:</strong> Bootstouren im Pennekamp-Park dauern ca. 2,5 Std. mit gut einer Stunde im Wasser (2026 ca. 65–75 USD pro Person, Ausrüstung inklusive); alle müssen schwimmen können.",
        "<strong>Riff:</strong> Riffschonende Sonnencreme verwenden, Korallen nicht berühren."
      ],
      ausserdem: "Christ of the Abyss (Statue unter Wasser), History of Diving Museum, Anne’s Beach. Key West als langer Tagesausflug (ca. 2–2,5 Std. pro Weg).",
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
      nr: 3,
      name: "Orlando",
      land: "us",
      region: "Florida",
      datum: "25.–28. Juni",
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
      nr: 4,
      name: "Destin (Golfküste)",
      land: "us",
      region: "Florida Panhandle",
      datum: "28.–30. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Orlando über die Interstate 10 an die Golfküste (ca. 6–7 Std., ca. 620 km). Die Panhandle liegt in der Central-Zeitzone, die Uhr springt −1 Std.",
      text: "Weisser Quarzsand und smaragdgrünes Wasser am Golf von Mexiko: drei Strandtage nach den Freizeitparks, bevor es in die Städte am Golf geht.",
      teens: "Baden und Sandburgen am Henderson Beach, Delfin-Bootstour, Schnorcheln an den Jetties von Destin (ruhiges Wasser), Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte am Strand, z.B. in Destin oder Santa Rosa Beach.",
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
      nr: 5,
      name: "New Orleans",
      land: "us",
      region: "Louisiana",
      datum: "30. Juni–2. Juli",
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
      nr: 6,
      name: "Houston",
      land: "us",
      region: "Texas",
      datum: "2.–3. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von New Orleans über die Interstate 10 (ca. 5–6 Std., ca. 560 km).",
      text: "Die Raumfahrtstadt: Im Space Center Houston steht man in der Halle der Saturn-V-Rakete und neben dem Kontrollraum der Mondlandungen. Am 4. Juli feiert Houston den Nationalfeiertag mit Feuerwerk.",
      teens: "Space Center Houston mit Tram-Tour zum Mission Control und zur Saturn-V-Halle, Feuerwerk zum 4. Juli.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht; das Space Center liegt ca. 40 Min. südöstlich der Stadt und eignet sich auch als Halt auf der Weiterfahrt."
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
      nr: 7,
      name: "San Antonio",
      land: "us",
      region: "Texas",
      datum: "3.–5. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Houston über die Interstate 10 (ca. 3–3,5 Std., ca. 320 km).",
      text: "Texanische Geschichte und Flusspromenade: die Missionsstation Alamo, der River Walk mit Booten und Restaurants am Wasser und Tex-Mex-Küche.",
      teens: "Bootsfahrt auf dem River Walk, The Alamo, Missions-Weltkulturerbe per Velo, Freizeitpark Six Flags Fiesta Texas oder Wasserpark.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte vor der langen Fahrt nach Westen.",
        "<strong>Hitze:</strong> Oft über 35 °C; River Walk am Abend am schönsten.",
        "<strong>Hinweis:</strong> The Alamo mit Zeitfenster-Tickets (Eintritt in die Kirche gratis, Reservation empfohlen).",
        "<strong>4. Juli:</strong> Der Nationalfeiertag fällt in San Antonio auf einen Sonntag: Feuerwerk, volle Strassen und Unterkünfte, früh buchen."
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
      nr: 8,
      name: "Carlsbad Caverns",
      land: "us",
      region: "New Mexico",
      datum: "6.–7. Juli",
      naechte: "1 Nacht",
      zwischenstopp: {text: "Zwischenübernachtung in Fort Stockton", datum: "5.–6. Juli"},
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
      nr: 9,
      name: "White Sands (Alamogordo)",
      land: "us",
      region: "New Mexico",
      datum: "7.–8. Juli",
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
      nr: 10,
      name: "Santa Fe",
      land: "us",
      region: "New Mexico",
      datum: "8.–9. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Alamogordo über die US-54 und Albuquerque nach Santa Fe (ca. 4–4,5 Std.).",
      text: "Die Hauptstadt von New Mexico auf rund 2’100 Metern Höhe: Lehmziegel-Architektur, Kunstgalerien und die Landschaft des Südwestens. Nach der Wildnis kommt hier wieder Stadtleben.",
      teens: "Meow Wolf «House of Eternal Return» (immersive Kunstwelt, Tickets vorab), Bandelier National Monument (Felswohnungen und Leitern), Plaza und Canyon Road, Bradbury Science Museum in Los Alamos.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Ankunftsabend die Plaza, am Morgen Meow Wolf, dann die lange Fahrt nach Monument Valley.",
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
      nr: 11,
      name: "Monument Valley (Navajo Nation)",
      land: "us",
      region: "Utah und Arizona",
      datum: "9.–10. Juli",
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
      nr: 12,
      name: "Grand Canyon (South Rim)",
      land: "us",
      region: "Arizona",
      datum: "10.–12. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Monument Valley über Kayenta, Tuba City und Cameron zum Südrand (ca. 3,5 Std., ca. 290 km). Arizona hat keine Sommerzeit, die Uhr springt −1 Std.",
      text: "Der Südrand des Grand Canyon ist der klassische Zugang: Aussichtspunkte direkt am Rand, Wanderwege und ein kostenloser Parkshuttle. Zwei Nächte am Rand, am besten im Park oder im nahen Tusayan.",
      teens: "Mather Point und Rim Trail (flach, grosse Aussicht), Sonnenuntergang am Hopi Point, Junior-Ranger-Programm im Visitor Center, Desert View Watchtower, ein Stück den Bright Angel Trail hinunterwandern (nicht bis zum Fluss).",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Sonnenuntergang und Sonnenaufgang am Rim, ein Tag Rim Trail und ein Stück Bright Angel Trail am Morgen, Desert View Drive.",
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
      nr: 13,
      name: "Page und Lake Powell",
      land: "us",
      region: "Arizona",
      datum: "12.–13. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen vom Südrand über Cameron und den Highway 89 nach Page (ca. 2,5 Std.).",
      text: "Kleinstadt am Lake Powell mit zwei weltberühmten Fotomotiven: dem Horseshoe Bend und dem Antelope Canyon. Beides liegt auf oder neben Navajo-Land.",
      teens: "Geführte Tour durch den Antelope Canyon (Zeitfenster vorab buchen), Horseshoe Bend zum Sonnenuntergang, Bootsfahrt oder Baden im Lake Powell.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: Horseshoe Bend am Abend, Antelope Canyon am Morgen.",
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
      nr: 14,
      name: "Zion National Park (Springdale)",
      land: "us",
      region: "Utah",
      datum: "13.–15. Juli",
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
      nr: 15,
      name: "Las Vegas",
      land: "us",
      region: "Nevada",
      datum: "15.–17. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Springdale über St. George und die Interstate 15 (ca. 2,5–3 Std.); in Nevada springt die Uhr −1 Std. Die Einwegmiete am Flughafen zurückgeben (am Abflugtag).",
      text: "Der Schluss in der Wüste: Neonlichter, Hotels wie Freizeitparks und am letzten Abend die Wasserspiele des Bellagio, bevor es mit dem Flugzeug nach Washington geht.",
      teens: "High Roller (Riesenrad) bei Sonnenuntergang, Wasserspiele des Bellagio, Red Rock Canyon (Felsen und Aussicht) früh am Morgen, Hoover-Staudamm als Halbtagesausflug, Shows und Hotels als Kulisse.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Abend auf dem Strip, ein Tag Hoover-Staudamm oder Pool, Shows und Hotels.",
        "<strong>Hitze:</strong> Im Juli werden oft 40–45 °C erreicht. Aktivitäten morgens und abends, tagsüber klimatisierte Hotels. Viel Wasser trinken.",
        "<strong>Hinweis:</strong> Glücksspiel ist erst ab 21 Jahren erlaubt. Viele Hotels verlangen zusätzlich «Resort Fees» pro Nacht (oft über 40 USD).",
        "<strong>Weiterflug:</strong> Am Sa, 17.07.2027 nonstop nach Washington (ca. 4,5–5 Std., z.B. nach Reagan National oder Dulles), Uhr +3 Std.: am besten ein Flug am Morgen, Ankunft am Abend."
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
    },
    {
      nr: 16,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "17.–20. Juli",
      naechte: "3 Nächte",
      anreise: "Inlandflug Las Vegas–Washington nonstop (ca. 4,5–5 Std., z.B. Southwest oder American nach Reagan National, United oder Frontier nach Dulles; Fahrplan prüfen), Uhr +3 Std. Vom Flughafen Reagan National mit der Metro in die Stadt (ca. 20 Min.), von Dulles ca. 45–60 Min.",
      text: "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
      teens: "National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: am Ankunftsabend ankommen, ein Tag National Mall und Denkmäler, ein Tag Museen (Air and Space, Natural History).",
        "<strong>Hitze:</strong> Im Juli heiss und schwül, nachmittags oft Gewitter; Museen als Hitzepause einplanen.",
        "<strong>Hinweis:</strong> Das White House ist von innen nur nach früher Anfrage über die Schweizer Botschaft zu besichtigen, von aussen jederzeit. In der Stadt Metro, Velo oder zu Fuss; kein Auto nötig."
      ],
      ausserdem: "Arlington National Cemetery, Mount Vernon (Landsitz von George Washington), Georgetown, National Zoo (gratis), Holocaust Memorial Museum (Zeitfenster).",
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
      nr: 17,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "20.–23. Juli",
      naechte: "3 Nächte, Rückflug 23. Juli",
      anreise: "Amtrak-Zug ab Washington Union Station nach New York Penn Station (Northeast Regional ca. 3,5 Std., Acela ca. 3 Std.; viele Züge pro Tag). Rückflug ab Newark oder John F. Kennedy am Abend des Fr, 23.07.2027 (ca. 7,5–8 Std., Ankunft in Zürich am Sa, 24.07.2027 am Morgen).",
      text: "Das grosse Finale: Wolkenkratzer, Parks, Museen und Hafenpanorama.",
      teens: "Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building oder Top of the Rock, Broadway-Musical, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: Tag 1 Freiheitsstatue und Lower Manhattan (9/11 Memorial), Tag 2 Central Park, Museen und Aussichtsplattform am Abend, Tag 3 Brooklyn Bridge und Wunschprogramm der Kids; am Abreisetag Gepäck im Hotel lassen.",
        "<strong>Fortbewegung:</strong> U-Bahn mit OMNY (Kreditkarte oder Handy), Fähren, Taxi und Uber.",
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
  abschluss: "Rückflug ab New York nach Zürich am Abend des Fr, 23.07.2027 (ca. 7,5–8 Std.), Ankunft am Sa, 24.07.2027 am Morgen.",
  budgetIntro: "Mittelklasse inklusive Flüge, Mietwagen, Zug, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Miami und New York–Zürich",
        "4’000–6’000",
        "5’000",
        "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      ["Inlandflug Las Vegas–Washington", "600–1’200", "800", "4 Personen inklusive aufgegebenem Gepäck"],
      [
        "Mietwagen (Einwegmiete, Benzin, Parken, Maut)",
        "3’450–5’850",
        "4’500",
        "Miami–Las Vegas (ca. 28 Tage, ca. 3’700 Meilen); die Rückgabegebühr für eine Einwegmiete quer durchs Land kann bis gegen 1’500 USD betragen"
      ],
      [
        "Zug und lokale Verkehrsmittel",
        "650–1’600",
        "1’100",
        "Amtrak Washington–New York, Metro und U-Bahn, Taxi, Parkhäuser in Miami und New Orleans"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "8’400–13’300",
        "10’450",
        "ca. 150–700 CHF pro Nacht; die Keys, die Nationalparks, Washington und New York am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’900–8’400", "6’400", "ca. 140–250 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)",
        "4’700–8’400",
        "6’200",
        "Pass 250 USD, Universal, Kennedy Space Center, Schnorcheltour, Space Center Houston, Antelope Canyon, Aussichtsplattform und Broadway in New York usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "900–1’800",
        "1’300",
        "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"
      ],
      ["Reserve (ca. 10 %)", "2’750–4’650", "3’580", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Miami (2)", "600–1’000"],
      ["2. Key Largo und Islamorada (4)", "1’400–2’400"],
      ["3. Orlando (3)", "1’050–1’900"],
      ["4. Destin (2)", "600–1’000"],
      ["5. New Orleans (2)", "600–1’000"],
      ["6. Houston (1)", "300–500"],
      ["7. San Antonio (2)", "500–850"],
      ["Zwischenübernachtung Fort Stockton (1)", "150–250"],
      ["8. Carlsbad Caverns (1)", "250–400"],
      ["9. White Sands (1)", "300–520"],
      ["10. Santa Fe (1)", "390–670"],
      ["11. Monument Valley (1)", "540–1’040"],
      ["12. Grand Canyon (2)", "830–1’430"],
      ["13. Page und Lake Powell (1)", "440–740"],
      ["14. Zion National Park (2)", "730–1’180"],
      ["15. Las Vegas (2)", "710–1’310"],
      ["16. Washington, D.C. (3)", "1’280–2’180"],
      ["17. New York (3)", "2’000–3’300"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: Frühstück im Hotel, Imbiss statt Restaurant, Nationalpark-Jahrespass früh kaufen, die vielen Gratis-Museen in Washington nutzen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 34,
    total: "39’330",
    spanne: "30’400–51’200",
    proTag: "ca. 1’160 CHF pro Tag, ca. 9’800 pro Person"
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
      "Familienvan oder SUV, die Einwegmiete Miami–Las Vegas früh buchen (Rückgabegebühr oft hoch). Viele Strassen in Florida haben Maut: Mautpaket des Vermieters klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Vollkasko prüfen. Im Osten kein Auto: Flug, Zug, Metro und U-Bahn."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Monsun",
      "Florida, die Golfküste und Texas sind heiss und schwül mit Gewittern am Nachmittag; Juni bis November ist Hurrikansaison. Im Südwesten erreichen Las Vegas, Zion und White Sands im Juli 38–45 °C, dazu Monsungewitter und Sturzfluten in Schluchten (Narrows, Antelope Canyon). Auf Warnungen achten, Wanderungen früh starten, genug Wasser dabei haben."
    ],
    [
      "Zeitzonen",
      "Florida und der Osten Eastern-Zeit, Panhandle, Louisiana und Texas Central-Zeit, New Mexico und Utah Mountain-Zeit, Arizona ohne Sommerzeit, Navajo Nation mit Sommerzeit, Las Vegas Pazifikzeit. Zur Schweiz sind es −6 bis −9 Stunden."
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
      "Zug im Nordosten",
      "Amtrak-Züge Washington–New York fahren oft (Northeast Regional ca. 3,5 Std., Acela ca. 3 Std.); Tickets früh online buchen, Gepäck selbst tragen. Für den Inlandflug Las Vegas–Washington das Gepäck mitbuchen."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."
    ],
    ["Handy", "eSIM für die USA vorab kaufen. Offline-Karten für Nationalparks laden, dort gibt es oft keinen Empfang."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
