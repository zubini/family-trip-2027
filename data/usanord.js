// Reise: USA Nord von Los Angeles über die Route 66 und Chicago nach New York (Einwegmiete Los Angeles–Washington, Zug nach New York, kein Inlandflug)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usanord = {
  titel: "Von Los Angeles über die Route 66 und Chicago nach New York",
  menu: "USA Nord",
  untertitel: "Fünf Wochen quer durch die USA ohne Inlandflug: mit dem Mietwagen von Los Angeles über Las Vegas, Kanab und Monument Valley nach Albuquerque, auf der Route 66 über Amarillo, Tulsa und St. Louis nach Chicago, über Cedar Point, die Niagarafälle und die Finger Lakes nach Washington; dann mit dem Zug über Philadelphia nach New York.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {suche: "Route 66 sign|Route 66", stichwort: "route 66", alt: "Route 66"},
  planIntro: "Abflug ab Zürich nach Los Angeles am Sa, 19.06.2027, Rückflug ab New York am Mi, 21.07.2027 (Ankunft Do, 22.07.2027). Dazwischen eine Einwegmiete Los Angeles–Washington und der Zug über Philadelphia nach New York, ohne Inlandflug. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Flug Zürich–Los Angeles",
    info: "Abflug am Sa, 19.06.2027, Direktflug mit SWISS ca. 12,25 Std. (im Sommer 2026 täglich ausser Do), Ankunft am selben Tag am späten Nachmittag"
  },
  plan: [
    {
      datum: "19.–21. Juni",
      name: "1. Los Angeles",
      naechte: 2,
      info: "Flug ab Zürich (ca. 12,25 Std.), Mietwagen am Flughafen abholen (Einwegmiete bis Washington)"
    },
    {datum: "21.–23. Juni", name: "2. Las Vegas", naechte: 2, info: "Mietwagen (ca. 4,5–5 Std.)"},
    {datum: "23.–25. Juni", name: "3. Kanab", naechte: 2, info: "Mietwagen (ca. 3–3,5 Std.), Uhr +1 Std."},
    {
      datum: "25.–26. Juni",
      name: "4. Monument Valley (Navajo Nation)",
      naechte: 1,
      info: "Mietwagen über Page (ca. 3,5–4 Std.), Halt am Horseshoe Bend"
    },
    {datum: "26.–28. Juni", name: "5. Albuquerque", naechte: 2, info: "Mietwagen (ca. 5,5–6,5 Std.)"},
    {datum: "28.–29. Juni", name: "6. Amarillo", naechte: 1, info: "Mietwagen (ca. 4–4,5 Std.), Uhr +1 Std."},
    {datum: "29.–30. Juni", name: "7. Tulsa", naechte: 1, info: "Mietwagen (ca. 5,25–5,75 Std.)"},
    {datum: "30. Juni–2. Juli", name: "8. St. Louis", naechte: 2, info: "Mietwagen (ca. 6–6,5 Std.)"},
    {datum: "2.–6. Juli", name: "9. Chicago", naechte: 4, info: "Mietwagen (ca. 4,5–5 Std.)"},
    {
      datum: "6.–8. Juli",
      name: "10. Sandusky (Cedar Point)",
      naechte: 2,
      info: "Mietwagen (ca. 4,5–4,75 Std.), Uhr +1 Std."
    },
    {datum: "8.–10. Juli", name: "11. Niagarafälle", naechte: 2, info: "Mietwagen (ca. 4,5–4,75 Std.)"},
    {datum: "10.–13. Juli", name: "12. Finger Lakes", naechte: 3, info: "Mietwagen (ca. 3 Std.)"},
    {
      datum: "13.–16. Juli",
      name: "13. Washington, D.C.",
      naechte: 3,
      info: "Mietwagen (ca. 5,5–6 Std.), Rückgabe in Washington"
    },
    {datum: "16.–17. Juli", name: "14. Philadelphia", naechte: 1, info: "Amtrak-Zug (ca. 1,5–2 Std.)"},
    {datum: "17.–21. Juli", name: "15. New York", naechte: 4, info: "Amtrak-Zug (ca. 1–1,5 Std.); Rückflug 21. Juli"}
  ],
  rueckflug: {
    datum: "21. Juli",
    name: "Flug New York–Zürich",
    info: "Direktflug New York (JFK)–Zürich mit SWISS, täglich; im Sommer 2026 Abflug ca. 16.15 Uhr, ca. 7,75–8 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 6 Uhr"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte, 15 Stationen. Eine Einwegmiete Los Angeles–Washington (ca. 24 Tage) mit ca. 5’450 km und ca. 54–60 Std. reiner Fahrzeit an 12 Fahrtagen, realistisch mit Pausen, Tanken, Stau und Fahrten vor Ort ca. 62–70 Std. im Auto. Dazu der Zug Washington–Philadelphia–New York (zusammen ca. 2,5–3,5 Std.). Die längsten Fahrtage: Monument Valley–Albuquerque (ca. 5,5–6,5 Std.), Tulsa–St. Louis (ca. 6–6,5 Std.), Finger Lakes–Washington (ca. 5,5–6 Std.), Amarillo–Tulsa (ca. 5,25–5,75 Std.) und Los Angeles–Las Vegas (ca. 4,5–5 Std., mit Stau ca. 5,5–6,5 Std.). Von Albuquerque bis St. Louis drei Fahrtage hintereinander."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Los Angeles mit SWISS als Direktflug ca. 12,25 Std. (Sommer 2026: täglich ausser Do, Abflug ca. 13.05 Uhr, Ankunft ca. 16.25 Uhr Ortszeit, Zeitverschiebung −9 Std.). Für Hin- und Rückflug mit SWISS liegt ein Angebot von ca. 4’000 CHF für alle vier vor. Rückflug: New York (JFK)–Zürich mit SWISS als Direktflug täglich, ca. 7,75–8 Std., am Mi, 21.07.2027 (Sommer 2026: Abflug ca. 16.15 Uhr, Ankunft ca. 6.10 Uhr). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "In Los Angeles am Meer mild (ca. 22–26 °C), in Las Vegas und im Südwesten Ende Juni 38–45 °C, in Texas, Oklahoma und Missouri heiss und oft schwül (ca. 33–36 °C) mit Gewittern; an den Grossen Seen und in den Finger Lakes angenehmer (ca. 26–29 °C), Washington und New York heiss und schwül."
    ],
    [
      "Vorab buchen",
      "Einwegmiete Los Angeles–Washington (Gebühr vergleichen), Space Shuttle Endeavour (Zeitfenster), Unterkunft in Monument Valley (oft Monate im Voraus), Meow Wolf, Gateway Arch (Zeitfenster), Skydeck und Bootstour in Chicago, Cedar Point, Air and Space Museum, Amtrak Washington–Philadelphia–New York, Aussichtsplattform und Broadway in New York."
    ],
    [
      "Optional",
      "Grand Canyon (eine Nacht mehr zwischen Kanab und Albuquerque), Santa Fe mit eigener Nacht, Oklahoma City National Memorial (auf dem Weg nach Tulsa), die kanadische Seite der Niagarafälle (zu Fuss über die Rainbow Bridge), Corning Museum of Glass, Gettysburg (auf dem Weg nach Washington)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Mietwagen von Los Angeles durch den Südwesten und auf der Route 66 nach Chicago, an den Grossen Seen entlang nach Washington, dann mit dem Zug über Philadelphia nach New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "train"],
    karten: [
      {datei: "karten/usa-nord.svg"},
      {titel: "Südwesten und Route 66 im Detail (Stationen 1 bis 8)", datei: "karten/usa-nord-west.svg"},
      {titel: "Von St. Louis bis New York im Detail (Stationen 8 bis 15)", datei: "karten/usa-nord-ost.svg"}
    ]
  },
  abwechslungIntro: "Pazifik, Wüste und Felsen, die Route 66 durch die Prärie, Grossstadt am See, Achterbahnen, Wasserfälle und zum Schluss die Ostküste ohne Auto.",
  abwechslung: [
    [
      "Natur",
      "Rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak, Palo Duro Canyon, Niagarafälle und die Schluchten der Finger Lakes."
    ],
    [
      "Strand",
      "Santa Monica am Pazifik, Stadtstrände am Michigansee, Strand am Eriesee bei Cedar Point und Badestellen in den Finger Lakes; kein warmes Meer."
    ],
    [
      "Action und Freizeitparks",
      "Santa Monica Pier, Las Vegas, Sandboarding bei Kanab, Meow Wolf, Cadillac Ranch, City Museum in St. Louis, Skydeck in Chicago, Achterbahnen in Cedar Point, Maid of the Mist, Broadway."
    ],
    [
      "Städte und Kultur",
      "Los Angeles, Las Vegas, Albuquerque und Santa Fe, St. Louis, Chicago, Washington, Philadelphia, New York; dazu die Route 66 mit Leuchtreklamen und Kuriositäten."
    ],
    [
      "Ruhetage",
      "Los Angeles, Las Vegas, Kanab, Albuquerque, St. Louis, Chicago (4 Nächte) und die Finger Lakes haben mehrere Nächte; ab Washington kein Auto mehr."
    ]
  ],
  stationenIntro: "Fünfzehn Stationen von Los Angeles bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Los Angeles",
      land: "us",
      region: "Kalifornien",
      datum: "19.–21. Juni",
      naechte: "2 Nächte",
      anreise: "Direktflug Zürich–Los Angeles mit SWISS am Sa, 19.06.2027 (ca. 12,25 Std.; im Sommer 2026 täglich ausser Do, Abflug ca. 13.05 Uhr, Ankunft ca. 16.25 Uhr), Zeitverschiebung −9 Std. Mietwagen am Flughafen abholen (Einwegmiete bis Washington); nach Santa Monica ca. 30–45 Min.",
      text: "Der Start am Pazifik: Strand und Pier in Santa Monica, die Hügel von Hollywood mit dem berühmten Schriftzug und der Blick über die Stadt vom Griffith Observatory. Zwei Nächte, um den Jetlag zu überwinden, bevor es in die Wüste geht.",
      teens: "Santa Monica Pier mit Riesenrad, Velo am Strand bis Venice Beach (Skatepark, Muscle Beach), Griffith Observatory mit Blick auf das Hollywood-Zeichen, Space Shuttle Endeavour im California Science Center, Walk of Fame.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte gegen den Jetlag, am besten in Santa Monica: am Ankunftsabend nur noch an den Strand, am zweiten Tag Santa Monica und Venice Beach, am Abend das Griffith Observatory (Eintritt gratis, Parkplatz kostenpflichtig).",
        "<strong>Wetter:</strong> Am Meer im Juni mild (ca. 22–26 °C), am Morgen oft Hochnebel («June Gloom»), der sich über Mittag auflöst; im Landesinneren deutlich heisser.",
        "<strong>Verkehr:</strong> Staus fast den ganzen Tag. Für die Fahrt nach Las Vegas früh losfahren.",
        "<strong>Hinweis:</strong> Für das Space Shuttle Endeavour im California Science Center vorab ein Zeitfenster reservieren."
      ],
      ausserdem: "Getty Center (Kunst und Aussicht), Malibu, La Brea Tar Pits (Fossilien), Universal Studios Hollywood oder Disneyland (beide teuer; auf dieser Reise der einzige grosse Filmpark).",
      bilder: [
        {titel: "Santa Monica Pier", suche: "Santa Monica Pier", stichwort: "santa monica"},
        {titel: "Griffith Observatory", suche: "Griffith Observatory", stichwort: "griffith"},
        {titel: "Hollywood-Zeichen", suche: "Hollywood Sign", stichwort: "hollywood"},
        {titel: "Venice Beach", suche: "Venice Beach California", stichwort: "venice"},
        {
          titel: "Space Shuttle Endeavour",
          suche: "Space Shuttle Endeavour California Science Center",
          stichwort: "endeavour"
        },
        {titel: "Getty Center", suche: "Getty Center Los Angeles", stichwort: "getty"}
      ]
    },
    {
      nr: 2,
      name: "Las Vegas",
      land: "us",
      region: "Nevada",
      datum: "21.–23. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Los Angeles über die Interstate 15 durch die Mojave-Wüste (ca. 4,5–5 Std., ca. 460 km; realistisch ca. 5,5–6,5 Std., weil die Ausfahrt aus Los Angeles oft staut: früh losfahren). Gleiche Zeitzone.",
      text: "Neonlichter, Hotels wie Freizeitparks und die Wasserspiele des Bellagio: zwei Nächte nur in der Stadt, ohne Ausflüge, bevor es in die Nationalparks geht.",
      teens: "High Roller (Riesenrad) bei Sonnenuntergang, Wasserspiele des Bellagio, Gondelfahrt im Venetian, Lichtshow an der Fremont Street, eine Show am Abend, Hotels als Kulisse.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: am Ankunftsabend Strip und Bellagio, am zweiten Tag Pool und Hotels am Strip (Venetian, Caesars Palace), am Abend High Roller, Fremont Street oder eine Show.",
        "<strong>Hitze:</strong> Im Juli werden oft 40–45 °C erreicht. Aktivitäten morgens und abends, tagsüber klimatisierte Hotels. Viel Wasser trinken.",
        "<strong>Hinweis:</strong> Glücksspiel ist erst ab 21 Jahren erlaubt. Viele Hotels verlangen zusätzlich «Resort Fees» pro Nacht (oft über 40 USD)."
      ],
      ausserdem: "Neon Museum (alte Leuchtreklamen), Sphere (nur bei Veranstaltungen), Shark Reef Aquarium im Mandalay Bay, Achterbahn im New York-New York.",
      bilder: [
        {titel: "Strip", suche: "Las Vegas Strip night|Las Vegas Boulevard", stichwort: "las vegas"},
        {titel: "Bellagio", suche: "Fountains of Bellagio", stichwort: "bellagio"},
        {titel: "High Roller", suche: "High Roller Las Vegas|High Roller observation wheel", stichwort: "high roller"},
        {titel: "Fremont Street", suche: "Fremont Street Experience", stichwort: "fremont"},
        {titel: "Venetian", suche: "The Venetian Las Vegas", stichwort: "venetian"},
        {titel: "Neon Museum", suche: "Neon Museum Las Vegas", stichwort: "neon"}
      ]
    },
    {
      nr: 3,
      name: "Kanab",
      land: "us",
      region: "Utah",
      datum: "23.–25. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Las Vegas über die Interstate 15 bis Hurricane, dann über Colorado City und Fredonia nach Kanab (ca. 3–3,5 Std., ca. 320 km), ohne Fahrt durch den Zion-Nationalpark. In Utah springt die Uhr +1 Std.",
      text: "Kleiner Westernort zwischen roten Felsen, früher Kulisse vieler Hollywood-Western. Von hier aus sind rosa Sanddünen, eine Felsschlucht und eine Höhle schnell erreichbar, ohne die Menschenmassen der grossen Nationalparks.",
      teens: "Sandboarding und Sandschlitten auf den Coral Pink Sand Dunes, Kletterpartie durch den Tunnel «Belly of the Dragon», Moqui Cave (Höhle mit kleinem Museum), Tierheim Best Friends Animal Sanctuary, Westernkulissen im Ort.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Coral Pink Sand Dunes (ca. 30 Min. westlich) am Morgen und Abend, dazwischen Pool; ein halber Tag Belly of the Dragon, Moqui Cave und Best Friends nördlich von Kanab (ca. 10–20 Min.).",
        "<strong>Dünen:</strong> Eintritt ca. 15 USD pro Auto; Sandboards und Sandschlitten werden im Visitor Center für ca. 25 USD pro Stück vermietet (solange Vorrat). Im Sommer bis knapp 40 °C, der Sand wird sehr heiss: nur am Morgen oder am Abend.",
        "<strong>Gratis:</strong> Belly of the Dragon (Entwässerungstunnel unter der Strasse, unebener Boden, bei Gewitter meiden) und Führungen in Best Friends (Zeiten vorab prüfen); Moqui Cave kostet einen kleinen Eintritt.",
        "<strong>Option:</strong> Zion (ca. 45 Min.) oder Bryce Canyon (ca. 1,25 Std.) als Tagesausflug; beide mit 100 USD Zusatzgebühr pro Person ab 16 Jahren für Nicht-US-Bewohner."
      ],
      ausserdem: "Little Hollywood Museum (Westernkulissen), Moqui-Sandhöhlen, Vermilion Cliffs, Wire Pass (Schlucht, nur bei trockenem Wetter).",
      bilder: [
        {titel: "Coral Pink Sand Dunes", suche: "Coral Pink Sand Dunes State Park", stichwort: "coral pink"},
        {
          titel: "Sandboarding",
          suche: "Coral Pink Sand Dunes sandboarding|Coral Pink Sand Dunes",
          stichwort: "coral pink|sand"
        },
        {titel: "Belly of the Dragon", suche: "Belly of the Dragon Kanab|Belly of the Dragon Utah", stichwort: "dragon"},
        {titel: "Kanab", suche: "Kanab Utah", stichwort: "kanab"},
        {titel: "Vermilion Cliffs", suche: "Vermilion Cliffs Kanab|Vermilion Cliffs Utah", stichwort: "vermilion"},
        {titel: "Moqui Cave", suche: "Moqui Cave Kanab", stichwort: "moqui"}
      ]
    },
    {
      nr: 4,
      name: "Monument Valley (Navajo Nation)",
      land: "us",
      region: "Utah und Arizona",
      datum: "25.–26. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Kanab über Page nach Monument Valley (ca. 3,5–4 Std., ca. 320 km). Unterwegs Halt am Horseshoe Bend bei Page (kurzer Weg ab dem Parkplatz, ca. 1 Std.). Arizona hat keine Sommerzeit (Uhr −1 Std. in Page), die Navajo Nation schon: Am Ziel gilt wieder dieselbe Zeit wie in Utah.",
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
      nr: 5,
      name: "Albuquerque",
      land: "us",
      region: "New Mexico",
      datum: "26.–28. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Monument Valley über Kayenta, Shiprock und Gallup auf die Interstate 40 nach Albuquerque (ca. 5,5–6,5 Std., ca. 520 km). Einer der längeren Fahrtage: früh starten.",
      text: "Die grösste Stadt New Mexicos am Rio Grande: eine Altstadt mit Lehmziegelbauten, die Route 66 und eine der längsten Pendelseilbahnen der Welt auf den Sandia Peak.",
      teens: "Sandia Peak Tramway auf über 3’100 m mit Blick über die Wüste (oben kühl), Old Town mit Lehmziegelkirche, Felszeichnungen im Petroglyph National Monument, Neonschilder an der Route 66, Meow Wolf in Santa Fe (begehbare Kunstwelt, Tagesausflug).",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Old Town und mit der Sandia Peak Tramway zum Sonnenuntergang, ein Tag Santa Fe mit Meow Wolf und der Altstadt (ca. 1 Std. nördlich).",
        "<strong>Höhe:</strong> Albuquerque liegt auf ca. 1’600 m, der Sandia Peak auf ca. 3’160 m: Jacke für oben, Sonnencreme und viel trinken."
      ],
      ausserdem: "Santa Fe (Meow Wolf, Plaza), Petroglyph National Monument, Indian Pueblo Cultural Center, Kasha-Katuwe Tent Rocks.",
      bilder: [
        {titel: "Sandia Peak Tramway", suche: "Sandia Peak Tramway Albuquerque", stichwort: "sandia"},
        {titel: "Old Town", suche: "Albuquerque Old Town San Felipe de Neri", stichwort: "old town|albuquerque|felipe"},
        {titel: "Petroglyphen", suche: "Petroglyph National Monument", stichwort: "petroglyph"},
        {titel: "Route 66", suche: "Route 66 Albuquerque neon", stichwort: "route 66"},
        {
          titel: "Rio Grande",
          suche: "Rio Grande Albuquerque bosque|Albuquerque sunset",
          stichwort: "rio grande|albuquerque"
        },
        {
          titel: "Tent Rocks",
          suche: "Kasha-Katuwe Tent Rocks National Monument|Tent Rocks",
          stichwort: "tent rocks|kasha"
        }
      ]
    },
    {
      nr: 6,
      name: "Amarillo",
      land: "us",
      region: "Texas",
      datum: "28.–29. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Albuquerque auf der Interstate 40, der alten Route 66 entlang, nach Amarillo (ca. 4–4,5 Std., ca. 465 km). In Texas springt die Uhr +1 Std. Unterwegs Halt in Tucumcari (Leuchtreklamen der Route 66).",
      text: "Route 66 im texanischen Panhandle: bunt besprayte Cadillacs im Feld und gleich vor der Stadt der Palo Duro Canyon, die zweitgrösste Schlucht der USA.",
      teens: "Autos besprayen auf der Cadillac Ranch (Spraydosen mitbringen), Palo Duro Canyon am Abend oder frühen Morgen, ein Riesensteak im Big Texan Steak Ranch.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht als Zwischenhalt auf der Route 66: Cadillac Ranch am Abend, Palo Duro Canyon (ca. 30 Min. südlich) am Abend oder am nächsten Morgen.",
        "<strong>Gebühr:</strong> Palo Duro Canyon State Park ca. 8 USD pro Person ab 13 Jahren; Cadillac Ranch gratis.",
        "<strong>Hitze:</strong> Im Sommer oft über 35 °C; im Canyon nur früh am Morgen wandern, viel Wasser mitnehmen."
      ],
      ausserdem: "Texas Route 66 Visitor Center, Panhandle-Plains Historical Museum, die Musikshow «TEXAS» im Palo Duro Canyon (Sommer, Abend).",
      bilder: [
        {titel: "Cadillac Ranch", suche: "Cadillac Ranch Amarillo", stichwort: "cadillac"},
        {titel: "Palo Duro Canyon", suche: "Palo Duro Canyon", stichwort: "palo duro"},
        {titel: "Lighthouse", suche: "Lighthouse Rock Palo Duro", stichwort: "lighthouse|palo duro"},
        {titel: "Route 66", suche: "Route 66 Texas sign", stichwort: "route 66"},
        {titel: "Tucumcari", suche: "Tucumcari Route 66 neon|Blue Swallow Motel", stichwort: "tucumcari|blue swallow"},
        {titel: "Big Texan", suche: "Big Texan Steak Ranch", stichwort: "big texan"}
      ]
    },
    {
      nr: 7,
      name: "Tulsa",
      land: "us",
      region: "Oklahoma",
      datum: "29.–30. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Amarillo über die Interstate 40 und Oklahoma City nach Tulsa (ca. 5,25–5,75 Std., ca. 585 km; Turner Turnpike mit Maut).",
      text: "Route-66-Stadt mit Art-déco-Häusern und einem der besten Parks der USA am Arkansas River.",
      teens: "Gathering Place (riesiger Park mit Abenteuerspielplatz, Kletterturm, Wasserspielen und Booten, gratis), Neonschilder der Route 66, Blue Whale of Catoosa (Route-66-Kuriosität).",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Abend Gathering Place oder das Route-66-Viertel; am nächsten Morgen Halt am Blue Whale of Catoosa auf dem Weg nach St. Louis.",
        "<strong>Gratis:</strong> Gathering Place ohne Eintritt; Blue Whale of Catoosa ohne Eintritt (Öffnung vorab prüfen, zeitweise Renovation)."
      ],
      ausserdem: "Philbrook Museum, Woody Guthrie Center, Art-déco-Viertel, Oklahoma City National Memorial (auf dem Weg).",
      bilder: [
        {titel: "Gathering Place", suche: "Gathering Place Tulsa", stichwort: "gathering place"},
        {titel: "Blue Whale", suche: "Blue Whale of Catoosa", stichwort: "blue whale"},
        {titel: "Route 66", suche: "Route 66 Tulsa neon|Route 66 Rising", stichwort: "route 66"},
        {titel: "Art déco", suche: "Tulsa art deco Boston Avenue", stichwort: "tulsa|art deco"},
        {titel: "Skyline", suche: "Tulsa skyline", stichwort: "tulsa"},
        {titel: "Arkansas River", suche: "Arkansas River Tulsa", stichwort: "arkansas"}
      ]
    },
    {
      nr: 8,
      name: "St. Louis",
      land: "us",
      region: "Missouri",
      datum: "30. Juni–2. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Tulsa über die Interstate 44, die alte Route 66, nach St. Louis (ca. 6–6,5 Std., ca. 640 km; Will Rogers Turnpike mit Maut). Unterwegs Halt am Blue Whale of Catoosa.",
      text: "Tor zum Westen am Mississippi: der 192 m hohe Gateway Arch und das City Museum, ein riesiges Kletter- und Abenteuerhaus aus Fundstücken.",
      teens: "Mit der kleinen Kabinenbahn auf den Gateway Arch, City Museum (Rutschen, Tunnel, Kletterkäfige auf dem Dach), Raddampfer auf dem Mississippi, Baseball im Busch Stadium.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte zum Ausruhen nach drei Fahrtagen: ein halber Tag Gateway Arch, ein halber Tag City Museum, dazu Zoo oder Pool.",
        "<strong>Gateway Arch:</strong> Fahrt auf die Spitze 2026 ca. 15–19 USD ab 16 Jahren, ca. 11–15 USD für Kinder 3–15, mit Zeitfenster; vorab buchen.",
        "<strong>City Museum:</strong> Eintritt ca. 20–22 USD pro Person ab 3 Jahren, Dach mit eigenem Eintritt; Kleidung zum Klettern und Knieschoner empfohlen.",
        "<strong>Gratis:</strong> Saint Louis Zoo und Science Center ohne Eintritt (Parkplatz kostet)."
      ],
      ausserdem: "Saint Louis Zoo (gratis), Saint Louis Science Center (gratis), Forest Park, Raddampfer-Rundfahrt.",
      bilder: [
        {titel: "Gateway Arch", suche: "Gateway Arch St. Louis", stichwort: "gateway arch"},
        {titel: "City Museum", suche: "City Museum St. Louis", stichwort: "city museum"},
        {titel: "Mississippi", suche: "Mississippi River St. Louis riverboat", stichwort: "mississippi|riverboat"},
        {titel: "Forest Park", suche: "Forest Park St. Louis", stichwort: "forest park"},
        {titel: "Busch Stadium", suche: "Busch Stadium St. Louis", stichwort: "busch"},
        {titel: "Skyline", suche: "St. Louis skyline", stichwort: "st. louis|saint louis"}
      ]
    },
    {
      nr: 9,
      name: "Chicago",
      land: "us",
      region: "Illinois",
      datum: "2.–6. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen von St. Louis über die Interstate 55, der Route 66 entlang, nach Chicago (ca. 4,5–5 Std., ca. 475 km). In Chicago endet die Route 66. Auto im Hotel parkieren.",
      text: "Wolkenkratzer am Michigansee: Architektur, Museen, Strände mitten in der Stadt und der Blick vom Glasbalkon im 103. Stock.",
      teens: "Glasbalkon im Skydeck (Willis Tower), Architektur-Bootstour auf dem Chicago River, Navy Pier mit Riesenrad, «The Bean» im Millennium Park, Museum of Science and Industry (U-Boot U-505), Strand am Michigansee, Deep-Dish-Pizza.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Tag Innenstadt mit Bootstour und Skydeck, ein Tag Museen (Science and Industry oder Field Museum) und Navy Pier, ein Tag Strand am See, ein freier Tag. Rund um den 4. Juli Feuerwerke am Seeufer (Termine vorab prüfen).",
        "<strong>Preise:</strong> Skydeck ca. 32 USD Erwachsene, 24 USD Kinder 3–11; Architektur-Bootstour ca. 45–50 USD pro Person. Kombitickets sind günstiger.",
        "<strong>Parkieren:</strong> In der Innenstadt teuer (Hotel oft 50–70 USD pro Nacht); in der Stadt mit der Hochbahn «L» und zu Fuss unterwegs sein."
      ],
      ausserdem: "Field Museum (Dinosaurier «Sue»), Shedd Aquarium, Art Institute, Wrigley Field (Baseball), Lincoln Park Zoo (gratis).",
      bilder: [
        {titel: "Skyline", suche: "Chicago skyline Lake Michigan|Chicago skyline", stichwort: "chicago"},
        {titel: "The Bean", suche: "Cloud Gate Chicago", stichwort: "cloud gate|bean"},
        {titel: "Chicago River", suche: "Chicago River architecture boat", stichwort: "chicago river"},
        {titel: "Skydeck", suche: "Skydeck Chicago ledge|Willis Tower Skydeck", stichwort: "skydeck|ledge"},
        {titel: "Navy Pier", suche: "Navy Pier Chicago", stichwort: "navy pier"},
        {
          titel: "Museum of Science and Industry",
          suche: "Museum of Science and Industry Chicago",
          stichwort: "science and industry"
        }
      ]
    },
    {
      nr: 10,
      name: "Sandusky (Cedar Point)",
      land: "us",
      region: "Ohio",
      datum: "6.–8. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Chicago über die Indiana Toll Road und den Ohio Turnpike nach Sandusky am Eriesee (ca. 4,5–4,75 Std., ca. 470 km, Maut). Die Uhr springt wieder +1 Std.",
      text: "Achterbahnen am Eriesee: Cedar Point gilt als einer der besten Achterbahn-Parks der Welt, auf einer Halbinsel mit eigenem Strand.",
      teens: "Ein ganzer Tag Cedar Point mit Achterbahnen wie Millennium Force und Steel Vengeance, Strand am Eriesee, Wasserpark Cedar Point Shores.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein ganzer Tag Cedar Point, am Ankunfts- oder Abreisetag Strand oder die Rock & Roll Hall of Fame in Cleveland (ca. 1 Std.).",
        "<strong>Tickets:</strong> Tageseintritt an der Kasse ca. 105 USD, online mit Aktionen deutlich günstiger; Parkplatz ca. 20–30 USD. Für einzelne Bahnen gelten Mindestgrössen.",
        "<strong>Öffnungszeiten:</strong> Im Sommer meist ca. 10–22 Uhr; Kalender vorab prüfen."
      ],
      ausserdem: "Rock & Roll Hall of Fame (Cleveland), Fähre nach Kelleys Island, Wasserpark Cedar Point Shores.",
      bilder: [
        {titel: "Cedar Point", suche: "Cedar Point amusement park", stichwort: "cedar point"},
        {titel: "Millennium Force", suche: "Millennium Force Cedar Point", stichwort: "millennium force"},
        {titel: "Steel Vengeance", suche: "Steel Vengeance Cedar Point", stichwort: "steel vengeance"},
        {titel: "Eriesee", suche: "Lake Erie Sandusky|Cedar Point beach", stichwort: "lake erie|beach"},
        {
          titel: "Rock & Roll Hall of Fame",
          suche: "Rock and Roll Hall of Fame Cleveland",
          stichwort: "rock and roll|hall of fame"
        },
        {titel: "Marblehead", suche: "Marblehead Lighthouse Ohio", stichwort: "marblehead"}
      ]
    },
    {
      nr: 11,
      name: "Niagarafälle",
      land: "us",
      region: "New York",
      datum: "8.–10. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Sandusky über Cleveland, Erie und Buffalo zu den Niagarafällen (ca. 4,5–4,75 Std., ca. 440 km; New York State Thruway mit Maut). Übernachtung auf der amerikanischen Seite, ohne Grenzübertritt mit dem Auto.",
      text: "Die berühmtesten Wasserfälle Nordamerikas: mit dem Boot bis in die Gischt des Hufeisenfalls und auf Holzstegen direkt an den Bridal Veil Falls.",
      teens: "Bootsfahrt mit der Maid of the Mist in die Gischt, Cave of the Winds (Holzstege am Wasserfall, Regenponcho inklusive), Goat Island, Beleuchtung und Feuerwerk am Abend.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Maid of the Mist, Cave of the Winds und Goat Island; am Abend die beleuchteten Fälle.",
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
      nr: 12,
      name: "Finger Lakes",
      land: "us",
      region: "New York",
      datum: "10.–13. Juli",
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
      nr: 13,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "13.–16. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von den Finger Lakes über Williamsport und Harrisburg nach Washington (ca. 5,5–6 Std., ca. 485 km) und dort abgeben (z.B. am Flughafen Reagan National oder an der Union Station). In der Stadt Metro und zu Fuss.",
      text: "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
      teens: "National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag National Mall und Denkmäler, ein Tag Museen (Air and Space, Natural History), ein halber Tag Arlington oder Georgetown.",
        "<strong>Hitze:</strong> Im Juli heiss und schwül, nachmittags oft Gewitter; Museen als Hitzepause einplanen.",
        "<strong>Hinweis:</strong> Das White House ist von innen nur nach früher Anfrage über die Schweizer Botschaft zu besichtigen, von aussen jederzeit."
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
      nr: 14,
      name: "Philadelphia",
      land: "us",
      region: "Pennsylvania",
      datum: "16.–17. Juli",
      naechte: "1 Nacht",
      anreise: "Amtrak-Zug ab Washington Union Station nach Philadelphia 30th Street (ca. 1,5–2 Std.; viele Züge pro Tag).",
      text: "Geburtsort der USA: Independence Hall, wo die Unabhängigkeitserklärung unterzeichnet wurde, die Liberty Bell und die Treppe aus dem Film «Rocky».",
      teens: "Liberty Bell und Independence Hall, die «Rocky Steps» vor dem Kunstmuseum hinauflaufen, Philly Cheesesteak und Reading Terminal Market, Franklin Institute (Wissenschaftsmuseum).",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht als Halt zwischen Washington und New York: am Nachmittag Altstadt mit Liberty Bell, am Abend Rocky Steps; am Morgen weiter.",
        "<strong>Independence Hall:</strong> Eintritt gratis, aber mit Zeitfenster-Ticket (im Visitor Center oder vorab gegen kleine Gebühr); Liberty Bell ohne Ticket, Sicherheitskontrolle.",
        "<strong>Gepäck:</strong> Hotel nahe beim Bahnhof oder in der Altstadt wählen; Taxi oder Uber zwischen Bahnhof und Hotel."
      ],
      ausserdem: "Franklin Institute, Philadelphia Museum of Art, Elfreth’s Alley (älteste bewohnte Gasse der USA), Eastern State Penitentiary (altes Gefängnis).",
      bilder: [
        {titel: "Independence Hall", suche: "Independence Hall Philadelphia", stichwort: "independence hall"},
        {titel: "Liberty Bell", suche: "Liberty Bell", stichwort: "liberty bell"},
        {titel: "Rocky Steps", suche: "Rocky Steps Philadelphia Museum of Art", stichwort: "rocky|museum of art"},
        {titel: "Reading Terminal Market", suche: "Reading Terminal Market", stichwort: "reading terminal"},
        {titel: "Elfreth’s Alley", suche: "Elfreth's Alley", stichwort: "elfreth"},
        {titel: "Skyline", suche: "Philadelphia skyline", stichwort: "philadelphia"}
      ]
    },
    {
      nr: 15,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "17.–21. Juli",
      naechte: "4 Nächte, Rückflug 21. Juli",
      anreise: "Amtrak-Zug ab Philadelphia nach New York Penn Station (ca. 1–1,5 Std.; viele Züge pro Tag). Rückflug direkt ab John F. Kennedy (SWISS) am Mi, 21.07.2027 am Nachmittag (Sommer 2026 ca. 16.15 Uhr; ca. 7,75–8 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 6 Uhr). Zum Flughafen JFK mit dem AirTrain oder Taxi ca. 1–1,5 Std., also am Mittag los.",
      text: "Das grosse Finale: Wolkenkratzer, Parks, Museen und Hafenpanorama.",
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
        "Flüge Zürich–Los Angeles und New York–Zürich (SWISS)",
        "4’000–4’500",
        "4’000",
        "Angebot für alle vier ca. 4’000 CHF (ca. 1’000 pro Person); bis zur Buchung nicht fest"
      ],
      [
        "Mietwagen (Einwegmiete)",
        "2’800–3’600",
        "3’100",
        "Los Angeles–Washington (ca. 24 Tage) inkl. Vollkasko, Zusatzhaftpflicht und Einweggebühr; geschätzt nach dem Angebot Los Angeles–Miami, Angebote vergleichen"
      ],
      [
        "Benzin",
        "400–550",
        "470",
        "ca. 5’450 km, Van oder SUV mit ca. 10–12 l/100 km (ca. 600 Liter); in Kalifornien am teuersten"
      ],
      [
        "Parkieren",
        "450–700",
        "550",
        "Hotels in Los Angeles und Chicago oft 45–70 USD pro Nacht, Las Vegas (Strip-Hotels ca. 20–25 USD pro Tag) und St. Louis ca. 20–30 USD; Cedar Point, Niagara; Motels meist gratis; ab Washington kein Auto mehr"
      ],
      [
        "Maut",
        "100–200",
        "130",
        "Turnpikes in Oklahoma, Indiana Toll Road, Ohio Turnpike, New York State Thruway, dazu die Gebühr des Vermieters für die automatische Mauterfassung"
      ],
      [
        "Zug und lokale Verkehrsmittel",
        "450–800",
        "550",
        "Amtrak Washington–Philadelphia–New York, Metro in Washington, Hochbahn in Chicago, U-Bahn in New York, Taxi oder AirTrain zum Flughafen"
      ],
      [
        "Unterkunft (Familienzimmer, 3 Sterne)",
        "6’300–9’200",
        "7’300",
        "ca. 110–420 CHF pro Nacht inkl. Steuern (ein Zimmer mit zwei Queen-Betten); Los Angeles, Monument Valley, Chicago, Washington und New York am teuersten, in Las Vegas zusätzlich «Resort Fees»"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’500–8’000", "6’000", "ca. 140–250 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte",
        "2’700–4’000",
        "3’200",
        "Show in Las Vegas, Sandboards bei Kanab, Monument Valley mit Jeep-Tour, Sandia Peak Tramway, Meow Wolf, Gateway Arch, City Museum, Skydeck und Bootstour, Cedar Point, Maid of the Mist, Aussichtsplattform und Broadway in New York usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "400–1’100",
        "700",
        "ESTA ca. 40 USD pro Person, eSIM, Reiseversicherung mit hoher Deckung (falls nicht schon über eine Jahresversicherung abgedeckt)"
      ],
      ["Reserve (ca. 5 %)", "1’100–1’650", "1’300", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Los Angeles (2)", "700–1’100"],
      ["2. Las Vegas (2)", "830–1’320"],
      ["3. Kanab (2)", "620–990"],
      ["4. Monument Valley (1)", "620–990"],
      ["5. Albuquerque (2)", "680–1’080"],
      ["6. Amarillo (1)", "250–390"],
      ["7. Tulsa (1)", "230–360"],
      ["8. St. Louis (2)", "610–960"],
      ["9. Chicago (4)", "1’790–2’850"],
      ["10. Sandusky (2)", "740–1’180"],
      ["11. Niagarafälle (2)", "670–1’060"],
      ["12. Finger Lakes (3)", "800–1’260"],
      ["13. Washington, D.C. (3)", "1’190–1’890"],
      ["14. Philadelphia (1)", "300–470"],
      ["15. New York (4)", "2’570–4’070"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: ein Zimmer mit zwei Queen-Betten, Motels mit Frühstück, Imbiss statt Restaurant, Hotels mit Gratis-Parkplatz ausserhalb der Innenstädte, die Gratis-Museen in Washington nutzen.",
      "Gerechnet mit ca. 0,83 CHF pro USD (Kurs Oktober 2026); Preise in den USA meist ohne Verkaufssteuer angeschrieben, im Restaurant kommen 15–20 % Trinkgeld dazu.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "27’300",
    spanne: "23’200–34’300",
    proTag: "ca. 850 CHF pro Tag, ca. 6’800 pro Person"
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
      "Auf dieser Route braucht ihr keinen Nationalpark-Jahrespass: Kanab, Monument Valley (Navajo Nation), Palo Duro Canyon und Watkins Glen sind keine Nationalparks; beim Gateway Arch kostet nur die Fahrt auf die Spitze. Zion, Bryce Canyon und Grand Canyon (Optionen) kosten 100 USD Zusatzgebühr pro Person ab 16 (seit Januar 2026); wer zwei davon besucht, fährt mit dem Jahrespass (250 USD) günstiger."
    ],
    [
      "Mietwagen",
      "Familienvan oder SUV, die Einwegmiete Los Angeles–Washington früh buchen und Angebote vergleichen (Einweggebühr). Mautstrassen vor allem in Oklahoma, Indiana, Ohio und New York: Mautpaket des Vermieters klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Wer mit dem Auto nach Kanada will, braucht die Erlaubnis des Vermieters. Den Wagen in Washington abgeben."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Gewitter",
      "Las Vegas und der Südwesten erreichen Ende Juni 38–45 °C, ab Juli Monsungewitter mit Sturzfluten in Schluchten. In Texas, Oklahoma und Missouri heiss, Gewitter und selten Tornados: Wetterwarnungen auf dem Handy beachten. An den Grossen Seen angenehmer."
    ],
    [
      "Zeitzonen",
      "Los Angeles und Las Vegas Pazifikzeit (−9 Std. zur Schweiz), Utah, Navajo Nation und New Mexico Mountain-Zeit, Arizona ohne Sommerzeit, Texas, Oklahoma, Missouri und Chicago Central-Zeit, ab Ohio Eastern-Zeit (−6 Std.)."
    ],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung mit hoher Deckung ist in den USA unverzichtbar, Arztkosten sind sehr hoch. Zusätzlich Annullationsschutz für Flüge, Hotels und Mietwagen."
    ],
    [
      "Navajo Nation",
      "Monument Valley liegt auf Navajo-Land mit eigenen Regeln: Eintritt pro Person, geführte Touren, keine Drohnen, kein Alkohol. Respektvoll verhalten, Fotos von Menschen nur mit Erlaubnis."
    ],
    [
      "Zug im Osten",
      "Amtrak-Züge Washington–Philadelphia–New York fahren oft (Northeast Regional, Acela schneller und teurer); Tickets früh online buchen, Gepäck selbst tragen."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."
    ],
    [
      "Handy",
      "eSIM für die USA vorab kaufen. Offline-Karten laden, im Südwesten und auf der Route 66 gibt es Strecken ohne Empfang."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
