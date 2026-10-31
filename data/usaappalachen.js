// Reise: USA Appalachen von Los Angeles über New Orleans, die Golfküste und die Smoky Mountains nach New York (Einwegmiete Los Angeles–New York, kein Inlandflug)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usaappalachen = {
  titel: "Von Los Angeles über New Orleans und die Smoky Mountains nach New York",
  menu: "USA Appalachen",
  untertitel: "Fünf Wochen quer durch die USA ohne Inlandflug: mit dem Mietwagen von Los Angeles über Las Vegas, Kanab und Monument Valley nach Albuquerque, über Amarillo, Fort Worth und Houston nach New Orleans, an den Strand von Alabama, in die Great Smoky Mountains und das Shenandoah-Tal, nach Washington und New York.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Great Smoky Mountains sunrise|Skyline Drive Shenandoah",
    stichwort: "smoky|shenandoah",
    alt: "Great Smoky Mountains"
  },
  planIntro: "Abflug ab Zürich nach Los Angeles am Sa, 19.06.2027, Rückflug ab New York am Mi, 21.07.2027 (Ankunft Do, 22.07.2027). Dazwischen eine Einwegmiete Los Angeles–New York, ohne Inlandflug. Ein Klick auf eine Station springt zur Beschreibung.",
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
      info: "Flug ab Zürich (ca. 12,25 Std.), Mietwagen am Flughafen abholen (Einwegmiete bis New York)"
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
    {datum: "29.–30. Juni", name: "7. Fort Worth", naechte: 1, info: "Mietwagen (ca. 5–5,5 Std.)"},
    {datum: "30. Juni–2. Juli", name: "8. Houston", naechte: 2, info: "Mietwagen (ca. 3,75–4,25 Std.)"},
    {datum: "2.–5. Juli", name: "9. New Orleans", naechte: 3, info: "Mietwagen (ca. 5–5,5 Std.)"},
    {datum: "5.–8. Juli", name: "10. Gulf Shores (Alabama)", naechte: 3, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {datum: "8.–9. Juli", name: "11. Chattanooga", naechte: 1, info: "Mietwagen (ca. 6,5–7 Std.), Uhr +1 Std."},
    {datum: "9.–12. Juli", name: "12. Great Smoky Mountains", naechte: 3, info: "Mietwagen (ca. 2,5–2,75 Std.)"},
    {datum: "12.–14. Juli", name: "13. Shenandoah (Luray)", naechte: 2, info: "Mietwagen (ca. 6–6,5 Std.)"},
    {datum: "14.–17. Juli", name: "14. Washington, D.C.", naechte: 3, info: "Mietwagen (ca. 1,5–2 Std.)"},
    {
      datum: "17.–21. Juli",
      name: "15. New York",
      naechte: 4,
      info: "Mietwagen (ca. 3,75–4,25 Std.), Rückgabe am Flughafen; Rückflug 21. Juli"
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
      "32 Nächte, 15 Stationen. Eine Einwegmiete Los Angeles–New York (ca. 28 Tage) mit ca. 6’000 km und ca. 58–65 Std. reiner Fahrzeit an 14 Fahrtagen, realistisch mit Pausen, Tanken, Stau und Fahrten vor Ort ca. 67–76 Std. im Auto. Die längsten Fahrtage: Gulf Shores–Chattanooga (ca. 6,5–7 Std.), Smoky Mountains–Shenandoah (ca. 6–6,5 Std.), Monument Valley–Albuquerque (ca. 5,5–6,5 Std.), Amarillo–Fort Worth und Houston–New Orleans (je ca. 5–5,5 Std.). Von Albuquerque bis Houston drei Fahrtage hintereinander."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Los Angeles mit SWISS als Direktflug ca. 12,25 Std. (Sommer 2026: täglich ausser Do, Abflug ca. 13.05 Uhr, Ankunft ca. 16.25 Uhr Ortszeit, Zeitverschiebung −9 Std.). Für Hin- und Rückflug mit SWISS liegt ein Angebot von ca. 4’000 CHF für alle vier vor. Rückflug: New York (JFK)–Zürich mit SWISS als Direktflug täglich, ca. 7,75–8 Std., am Mi, 21.07.2027 (Sommer 2026: Abflug ca. 16.15 Uhr, Ankunft ca. 6.10 Uhr). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "In Los Angeles am Meer mild (ca. 22–26 °C), in Las Vegas und im Südwesten Ende Juni 38–45 °C; in Texas, Louisiana und an der Golfküste heiss und sehr schwül (ca. 32–36 °C) mit Gewittern, Hurrikansaison (im Juli selten); in den Smoky Mountains und im Shenandoah-Tal angenehmer (ca. 25–30 °C, in der Höhe kühler), Washington und New York heiss und schwül."
    ],
    [
      "Vorab buchen",
      "Einwegmiete Los Angeles–New York (Gebühr vergleichen), Space Shuttle Endeavour (Zeitfenster), Unterkunft in Monument Valley (oft Monate im Voraus), Meow Wolf, Space Center Houston, Sumpftour und Unterkunft in New Orleans (4. Juli), Unterkunft in Gulf Shores, Ferienhaus in den Smoky Mountains, Air and Space Museum, Aussichtsplattform und Broadway in New York."
    ],
    [
      "Optional",
      "Grand Canyon (eine Nacht mehr zwischen Kanab und Albuquerque), Santa Fe mit eigener Nacht, Galveston (ab Houston), Nashville (Musik, eine Nacht zwischen Chattanooga und den Smoky Mountains statt der direkten Fahrt), Blue Ridge Parkway, Philadelphia (Halt auf dem Weg nach New York)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Mietwagen von Los Angeles durch den Südwesten nach Texas und New Orleans, an die Golfküste und durch die Appalachen nach Washington und New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car"],
    karten: [
      {datei: "karten/usa-appalachen.svg"},
      {titel: "Südwesten und Texas im Detail (Stationen 1 bis 9)", datei: "karten/usa-appalachen-west.svg"},
      {titel: "Von New Orleans bis New York im Detail (Stationen 9 bis 15)", datei: "karten/usa-appalachen-ost.svg"}
    ]
  },
  abwechslungIntro: "Pazifik, Wüste und Felsen, Prärie und Cowboys, Raumfahrt, Jazz am Mississippi, Strand am Golf, grüne Berge mit Bären und Wasserfällen, zum Schluss Hauptstadt und New York.",
  abwechslung: [
    [
      "Natur",
      "Rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak, Palo Duro Canyon, Sümpfe in Louisiana, Golfküste, Wälder und Wasserfälle der Smoky Mountains, Blue Ridge Mountains und Luray Caverns."
    ],
    [
      "Strand",
      "Santa Monica am Pazifik und drei Nächte in Gulf Shores am Golf von Mexiko (Wasser ca. 29–30 °C); kein Schnorcheln."
    ],
    [
      "Action und Freizeitparks",
      "Santa Monica Pier, Las Vegas, Sandboarding bei Kanab, Meow Wolf, Cadillac Ranch, Viehtrieb in Fort Worth, Space Center Houston, Sumpftour, Delfin-Bootstour, Ruby Falls, Tubing und Anakeesta oder Dollywood, Broadway."
    ],
    [
      "Städte und Kultur",
      "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Fort Worth, Houston, New Orleans mit Jazz und dem Feuerwerk am 4. Juli, Chattanooga, Washington mit den Smithsonian-Museen, New York."
    ],
    [
      "Ruhetage",
      "Los Angeles, Las Vegas, Kanab, Albuquerque, Houston, New Orleans, Gulf Shores, die Smoky Mountains und Washington haben mehrere Nächte; in New York kein Auto mehr."
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
      anreise: "Direktflug Zürich–Los Angeles mit SWISS am Sa, 19.06.2027 (ca. 12,25 Std.; im Sommer 2026 täglich ausser Do, Abflug ca. 13.05 Uhr, Ankunft ca. 16.25 Uhr), Zeitverschiebung −9 Std. Mietwagen am Flughafen abholen (Einwegmiete bis New York); nach Santa Monica ca. 30–45 Min.",
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
      name: "Fort Worth",
      land: "us",
      region: "Texas",
      datum: "29.–30. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Amarillo über die US-287 durch die Prärie nach Fort Worth (ca. 5–5,5 Std., ca. 545 km).",
      text: "Cowboy-Stadt im Grossraum Dallas: In den Stockyards treiben Cowboys zweimal täglich Longhorn-Rinder durch die Strasse.",
      teens: "Viehtrieb der Longhorns in den Stockyards (gratis), Rodeo am Freitag- oder Samstagabend, Labyrinth Cowtown Cattlepen Maze, Westernstiefel anprobieren.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am späten Nachmittag Viehtrieb in den Stockyards (täglich ca. 11.30 und 16 Uhr, Zeiten vorab prüfen), am Abend Stockyards und Rodeo, falls am Wochenende.",
        "<strong>Hitze:</strong> Oft über 35 °C; viel Wasser, Hut."
      ],
      ausserdem: "Sixth Floor Museum in Dallas (Attentat auf Kennedy), AT&T Stadium (Dallas Cowboys), Fort Worth Zoo.",
      bilder: [
        {
          titel: "Longhorns",
          suche: "Fort Worth Stockyards cattle drive|Fort Worth Herd",
          stichwort: "stockyards|longhorn|cattle"
        },
        {titel: "Stockyards", suche: "Fort Worth Stockyards", stichwort: "stockyards"},
        {titel: "Rodeo", suche: "Stockyards Championship Rodeo|Cowtown Coliseum", stichwort: "rodeo|cowtown"},
        {titel: "Exchange Avenue", suche: "Exchange Avenue Fort Worth", stichwort: "exchange"},
        {titel: "Skyline", suche: "Fort Worth skyline", stichwort: "fort worth"},
        {titel: "Dallas", suche: "Dallas skyline", stichwort: "dallas"}
      ]
    },
    {
      nr: 8,
      name: "Houston",
      land: "us",
      region: "Texas",
      datum: "30. Juni–2. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Fort Worth über die Interstate 45 nach Houston (ca. 3,75–4,25 Std., ca. 420 km).",
      text: "Die Raumfahrtstadt: Im Space Center Houston steht man in der Halle der Saturn-V-Rakete und fährt mit der Tram zum Kontrollraum der Mondlandungen.",
      teens: "Space Center Houston mit Tram-Tour zum Mission Control und zur Saturn-V-Halle, Museum District, Abend am Buffalo Bayou, Strand in Galveston.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Space Center Houston (ca. 40 Min. südöstlich der Stadt), ein halber Tag Museum District oder Strand in Galveston (ca. 1 Std.).",
        "<strong>Space Center:</strong> 2026 ca. 30 USD ab 12 Jahren, ca. 25 USD für Kinder 4–11; online günstiger und mit Zeitfenster.",
        "<strong>Hitze:</strong> Heiss und feucht; das Space Center ist zum grossen Teil klimatisiert."
      ],
      ausserdem: "Museum District (Naturkundemuseum mit Dinosauriern), Buffalo Bayou Park, Galveston mit Pleasure Pier (ca. 1 Std.).",
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
      nr: 9,
      name: "New Orleans",
      land: "us",
      region: "Louisiana",
      datum: "2.–5. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Houston über die Interstate 10 durch Louisiana (ca. 5–5,5 Std., ca. 560 km).",
      text: "Jazz, Balkone mit schmiedeeisernen Geländern und kreolische Küche im French Quarter, dazu Sümpfe mit Alligatoren gleich vor der Stadt.",
      teens: "Sumpftour mit Alligatoren, Raddampfer auf dem Mississippi, Beignets im Café du Monde, Strassenmusik im French Quarter, Insektenmuseum Audubon Insectarium.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: French Quarter und Raddampfer, ein halber Tag Sumpftour, am 4. Juli am Abend das Feuerwerk «Go 4th on the River» über dem Mississippi (gratis, ca. 21 Uhr, Termin vorab prüfen).",
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
      nr: 10,
      name: "Gulf Shores (Alabama)",
      land: "us",
      region: "Alabama",
      datum: "5.–8. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von New Orleans über die Interstate 10 an die Küste von Alabama (ca. 3–3,5 Std., ca. 310 km).",
      text: "Weisser Sand und warmes Wasser am Golf von Mexiko: drei Strandtage zwischen Südstaaten-Städten und den Bergen.",
      teens: "Baden und Sandburgen, Delfin-Bootstour (ca. 1,5–2 Std.), Velo im Gulf State Park (Gratis-Velos), langer Pier am Gulf State Park, Wasserpark Waterville USA, Go-Karts.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte am Strand in Gulf Shores oder Orange Beach: zwei Strandtage, eine Delfin-Bootstour am späten Nachmittag, Velo im Gulf State Park.",
        "<strong>Baden:</strong> Auf die Strandflaggen achten: rote Flagge heisst gefährliche Strömung (Rip Currents), dann nicht ins Wasser. Wasser im Juli ca. 29–30 °C.",
        "<strong>Wetter:</strong> Heiss und schwül, Gewitter am Nachmittag; Hurrikansaison (im Juli selten)."
      ],
      ausserdem: "Fort Morgan, Alabama Gulf Coast Zoo, The Wharf mit Riesenrad in Orange Beach, Bon Secour National Wildlife Refuge.",
      bilder: [
        {titel: "Strand", suche: "Gulf Shores Alabama beach", stichwort: "gulf shores"},
        {titel: "Orange Beach", suche: "Orange Beach Alabama", stichwort: "orange beach"},
        {titel: "Gulf State Park Pier", suche: "Gulf State Park Pier", stichwort: "pier"},
        {titel: "Delfine", suche: "dolphin cruise Gulf Shores|bottlenose dolphin Gulf of Mexico", stichwort: "dolphin"},
        {titel: "Fort Morgan", suche: "Fort Morgan Alabama", stichwort: "fort morgan"},
        {titel: "The Wharf", suche: "The Wharf Orange Beach ferris wheel", stichwort: "wharf"}
      ]
    },
    {
      nr: 11,
      name: "Chattanooga",
      land: "us",
      region: "Tennessee",
      datum: "8.–9. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Gulf Shores über Montgomery und Birmingham nach Chattanooga (ca. 6,5–7 Std., ca. 670 km). In Tennessee gilt Eastern-Zeit, die Uhr springt +1 Std.",
      text: "Stadt am Tennessee River zu Füssen des Lookout Mountain: ein unterirdischer Wasserfall, eine der steilsten Standseilbahnen der Welt und ein grosses Süsswasser-Aquarium.",
      teens: "Ruby Falls (Wasserfall in einer Höhle, ca. 340 m unter dem Berg), Lookout Mountain Incline Railway, Aussicht vom Rock City, Tennessee Aquarium.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht als Halt vor den Smoky Mountains: am Abend Flussufer, am nächsten Morgen Ruby Falls oder die Incline Railway, dann weiter.",
        "<strong>Tickets:</strong> Ruby Falls, Incline Railway und Rock City gibt es auch als Kombiticket; online früh buchen, Preise 2026 vorab prüfen."
      ],
      ausserdem: "Walnut Street Bridge (Fussgängerbrücke), Coolidge Park mit Karussell, Creative Discovery Museum.",
      bilder: [
        {titel: "Ruby Falls", suche: "Ruby Falls", stichwort: "ruby falls"},
        {titel: "Incline Railway", suche: "Lookout Mountain Incline Railway", stichwort: "incline"},
        {titel: "Rock City", suche: "Rock City Lookout Mountain", stichwort: "rock city"},
        {titel: "Tennessee Aquarium", suche: "Tennessee Aquarium", stichwort: "aquarium"},
        {titel: "Walnut Street Bridge", suche: "Walnut Street Bridge Chattanooga", stichwort: "walnut"},
        {titel: "Skyline", suche: "Chattanooga skyline", stichwort: "chattanooga"}
      ]
    },
    {
      nr: 12,
      name: "Great Smoky Mountains",
      land: "us",
      region: "Tennessee",
      datum: "9.–12. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Chattanooga über Knoxville nach Gatlinburg oder Townsend am Rand des Nationalparks (ca. 2,5–2,75 Std., ca. 250 km).",
      text: "Der meistbesuchte Nationalpark der USA: bewaldete Berge im Nebel, Wasserfälle, Schwarzbären und Hirsche, alte Blockhäuser der Siedler.",
      teens: "Schwarzbären und Hirsche im Tal Cades Cove (am frühen Morgen), Wanderung zu den Laurel Falls, Aussicht vom Clingmans Dome, Tubing auf dem Little River bei Townsend, Hängebrücken und Achterbahn auf Schienen im Anakeesta, Freizeitpark Dollywood.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, z.B. in einem Ferienhaus (Cabin): ein Tag Cades Cove und Laurel Falls, ein Tag Tubing und Anakeesta oder Dollywood, ein Tag Clingmans Dome.",
        "<strong>Gebühren:</strong> Kein Eintritt in den Park, aber wer länger als 15 Minuten parkiert, braucht eine Parkkarte (ca. 5 USD pro Tag, 15 USD pro Woche, online oder vor Ort); Pässe gelten dafür nicht.",
        "<strong>Bären:</strong> Abstand halten (mind. 45 m), nichts füttern, Essen nicht im Auto offen liegen lassen; im Sommer kurze Gewitter am Nachmittag."
      ],
      ausserdem: "Roaring Fork Motor Nature Trail, Abrams Falls, Ober Mountain mit Seilbahn, Ripley’s Aquarium of the Smokies in Gatlinburg.",
      bilder: [
        {titel: "Smoky Mountains", suche: "Great Smoky Mountains National Park", stichwort: "smoky"},
        {titel: "Cades Cove", suche: "Cades Cove", stichwort: "cades cove"},
        {titel: "Laurel Falls", suche: "Laurel Falls Smoky Mountains", stichwort: "laurel falls"},
        {titel: "Schwarzbär", suche: "black bear Great Smoky Mountains", stichwort: "bear"},
        {titel: "Clingmans Dome", suche: "Clingmans Dome", stichwort: "clingmans"},
        {titel: "Blockhaus", suche: "Cades Cove cabin", stichwort: "cabin"}
      ]
    },
    {
      nr: 13,
      name: "Shenandoah (Luray)",
      land: "us",
      region: "Virginia",
      datum: "12.–14. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von den Smoky Mountains über die Interstate 81 durch das Shenandoah-Tal nach Luray (ca. 6–6,5 Std., ca. 630 km).",
      text: "Grüne Bergrücken der Blue Ridge Mountains mit der Panoramastrasse Skyline Drive, Wasserfällen und einer der schönsten Tropfsteinhöhlen der USA.",
      teens: "Luray Caverns mit riesigen Tropfsteinen und einer Orgel aus Stalaktiten, Wanderung zum Wasserfall Dark Hollow Falls, Hirsche auf den Wiesen von Big Meadows, Aussichtspunkte am Skyline Drive.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein halber Tag Luray Caverns, ein Tag Skyline Drive mit kurzer Wanderung.",
        "<strong>Gebühren:</strong> Shenandoah ca. 30 USD pro Auto für 7 Tage (eine Erhöhung war angekündigt, vorab prüfen); Luray Caverns ca. 36 USD Erwachsene, 18 USD Kinder 6–12."
      ],
      ausserdem: "Stony Man Trail (kurz, mit Aussicht), Shenandoah River (Kanu und Tubing), Skyline Caverns.",
      bilder: [
        {titel: "Skyline Drive", suche: "Skyline Drive Shenandoah", stichwort: "skyline drive"},
        {titel: "Luray Caverns", suche: "Luray Caverns", stichwort: "luray"},
        {titel: "Dark Hollow Falls", suche: "Dark Hollow Falls", stichwort: "dark hollow"},
        {titel: "Big Meadows", suche: "Big Meadows Shenandoah", stichwort: "big meadows"},
        {titel: "Blue Ridge", suche: "Blue Ridge Mountains Shenandoah", stichwort: "blue ridge"},
        {titel: "Shenandoah River", suche: "Shenandoah River", stichwort: "shenandoah river"}
      ]
    },
    {
      nr: 14,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "14.–17. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Luray über die Interstate 66 nach Washington (ca. 1,5–2 Std., ca. 150 km). Auto im Hotel parkieren; in der Stadt Metro und zu Fuss.",
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
      nr: 15,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "17.–21. Juli",
      naechte: "4 Nächte, Rückflug 21. Juli",
      anreise: "Mietwagen von Washington über die Interstate 95 nach New York (ca. 3,75–4,25 Std., ca. 350 km, mit Maut und oft Stau) und am Flughafen (z.B. Newark) abgeben, von dort mit Zug oder Taxi in die Stadt. Rückflug direkt ab John F. Kennedy (SWISS) am Mi, 21.07.2027 am Nachmittag (Sommer 2026 ca. 16.15 Uhr; ca. 7,75–8 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 6 Uhr). Zum Flughafen JFK mit dem AirTrain oder Taxi ca. 1–1,5 Std., also am Mittag los.",
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
        "2’900–3’800",
        "3’200",
        "Los Angeles–New York (ca. 28 Tage) inkl. Vollkasko, Zusatzhaftpflicht und Einweggebühr; geschätzt nach dem Angebot Los Angeles–Miami, Angebote vergleichen"
      ],
      [
        "Benzin",
        "420–580",
        "480",
        "ca. 6’000 km, Van oder SUV mit ca. 10–12 l/100 km (ca. 660 Liter); in Kalifornien am teuersten"
      ],
      [
        "Parkieren",
        "400–650",
        "500",
        "Hotels in Los Angeles und Washington oft 45–60 USD pro Nacht, New Orleans ca. 40–50 USD, Las Vegas (Strip-Hotels ca. 20–25 USD pro Tag), Houston ca. 20–30 USD; Parkkarte Smoky Mountains; Motels und Ferienhäuser meist gratis; in New York kein Auto mehr"
      ],
      [
        "Maut",
        "100–200",
        "130",
        "Mautstrassen um Houston und Dallas, Brücken und Tunnel zwischen Washington und New York, dazu die Gebühr des Vermieters für die automatische Mauterfassung"
      ],
      [
        "Lokale Verkehrsmittel",
        "250–450",
        "300",
        "Metro in Washington, U-Bahn in New York, Zug oder Taxi vom Mietwagen-Flughafen und zum Flughafen JFK"
      ],
      [
        "Unterkunft (Familienzimmer, 3 Sterne)",
        "6’200–9’000",
        "7’100",
        "ca. 110–420 CHF pro Nacht inkl. Steuern (ein Zimmer mit zwei Queen-Betten oder Ferienhaus); Los Angeles, Monument Valley, Gulf Shores, Washington und New York am teuersten, in Las Vegas zusätzlich «Resort Fees»"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’500–8’000", "6’000", "ca. 140–250 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte",
        "2’800–4’200",
        "3’300",
        "Show in Las Vegas, Sandboards bei Kanab, Monument Valley mit Jeep-Tour, Sandia Peak Tramway, Meow Wolf, Space Center Houston, Sumpftour und Raddampfer, Delfin-Bootstour, Ruby Falls, Tubing und Anakeesta, Luray Caverns, Aussichtsplattform und Broadway in New York usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "400–1’100",
        "700",
        "ESTA ca. 40 USD pro Person, eSIM, Reiseversicherung mit hoher Deckung (falls nicht schon über eine Jahresversicherung abgedeckt)"
      ],
      ["Reserve (ca. 5 %)", "1’100–1’600", "1’300", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Los Angeles (2)", "700–1’100"],
      ["2. Las Vegas (2)", "830–1’320"],
      ["3. Kanab (2)", "620–990"],
      ["4. Monument Valley (1)", "620–990"],
      ["5. Albuquerque (2)", "680–1’080"],
      ["6. Amarillo (1)", "250–390"],
      ["7. Fort Worth (1)", "260–410"],
      ["8. Houston (2)", "580–920"],
      ["9. New Orleans (3)", "1’100–1’740"],
      ["10. Gulf Shores (3)", "1’080–1’710"],
      ["11. Chattanooga (1)", "380–600"],
      ["12. Great Smoky Mountains (3)", "1’000–1’590"],
      ["13. Shenandoah (2)", "620–990"],
      ["14. Washington, D.C. (3)", "1’190–1’890"],
      ["15. New York (4)", "2’570–4’070"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: ein Zimmer mit zwei Queen-Betten, Motels mit Frühstück, Imbiss statt Restaurant, Hotels mit Gratis-Parkplatz ausserhalb der Innenstädte, die Gratis-Museen in Washington nutzen.",
      "Gerechnet mit ca. 0,83 CHF pro USD (Kurs Oktober 2026); Preise in den USA meist ohne Verkaufssteuer angeschrieben, im Restaurant kommen 15–20 % Trinkgeld dazu.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "27’010",
    spanne: "23’100–34’100",
    proTag: "ca. 840 CHF pro Tag, ca. 6’800 pro Person"
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
      "Kein Nationalpark-Jahrespass nötig: In den Great Smoky Mountains gibt es keinen Eintritt, nur eine Parkkarte (ca. 5 USD pro Tag oder 15 USD pro Woche), Shenandoah kostet ca. 30 USD pro Auto, Kanab, Monument Valley (Navajo Nation) und Palo Duro sind keine Nationalparks. Zion, Bryce Canyon und Grand Canyon (Optionen) kosten 100 USD Zusatzgebühr pro Person ab 16 (seit Januar 2026)."
    ],
    [
      "Mietwagen",
      "Familienvan oder SUV, die Einwegmiete Los Angeles–New York früh buchen und Angebote vergleichen (Einweggebühr). Mautstrassen vor allem in Texas und zwischen Washington und New York: Mautpaket des Vermieters klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Den Wagen vor New York am Flughafen abgeben (z.B. Newark)."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Gewitter",
      "Las Vegas und der Südwesten erreichen Ende Juni 38–45 °C, ab Juli Monsungewitter mit Sturzfluten in Schluchten. In Texas, Louisiana und an der Golfküste heiss und schwül mit Gewittern, Hurrikansaison (Höhepunkt erst ab Mitte August). In den Bergen angenehmer, aber Gewitter am Nachmittag."
    ],
    [
      "Zeitzonen",
      "Los Angeles und Las Vegas Pazifikzeit (−9 Std. zur Schweiz), Utah, Navajo Nation und New Mexico Mountain-Zeit, Arizona ohne Sommerzeit, Texas, Louisiana und Alabama Central-Zeit, ab Tennessee Eastern-Zeit (−6 Std.)."
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
      "Bären",
      "In den Smoky Mountains und in Shenandoah leben Schwarzbären: Abstand halten, nie füttern, Essen und Abfall verschliessen; bei einer Begegnung ruhig zurückziehen."
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
