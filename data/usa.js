// Reise: USA von Los Angeles über New Orleans und Miami nach New York (Mietwagen bis Miami, Inlandflug nach Washington, Zug nach New York)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa = {
  titel: "Von Los Angeles über New Orleans und Miami nach New York",
  menu: "USA",
  untertitel: "Fünf Wochen USA: mit dem Mietwagen von Los Angeles über Las Vegas, Zion, Monument Valley, Albuquerque und White Sands nach Texas, über San Antonio und New Orleans an den Strand von Destin, nach Orlando und Miami; dann mit dem Flugzeug nach Washington und mit dem Zug nach New York.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    datei: "USA 10187 Horseshoe Bend Luca Galuzzi 2007.jpg",
    suche: "Horseshoe Bend Arizona|Monument Valley sunset",
    stichwort: "horseshoe bend|monument valley",
    alt: "Horseshoe Bend, Arizona"
  },
  planIntro: "Abflug ab Zürich nach Los Angeles am Sa, 19.06.2027, Rückflug ab New York am Mi, 21.07.2027 (Ankunft Do, 22.07.2027). Dazwischen eine Einwegmiete Los Angeles–Miami, ein Inlandflug nach Washington und der Zug nach New York. Ein Klick auf eine Station springt zur Beschreibung.",
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
      info: "Flug ab Zürich (ca. 12,25 Std.), Mietwagen am Flughafen abholen (Einwegmiete bis Miami)"
    },
    {datum: "21.–22. Juni", name: "2. Las Vegas", naechte: 1, info: "Mietwagen (ca. 4,5–5 Std.)"},
    {datum: "22.–24. Juni", name: "3. Zion National Park", naechte: 2, info: "Mietwagen (ca. 2,5–3 Std.), Uhr +1 Std."},
    {
      datum: "24.–25. Juni",
      name: "4. Monument Valley",
      naechte: 1,
      info: "Mietwagen über Page (ca. 4,5–5 Std.), Halt am Horseshoe Bend"
    },
    {datum: "25.–27. Juni", name: "5. Albuquerque", naechte: 2, info: "Mietwagen (ca. 5,5–6,5 Std.)"},
    {datum: "27.–28. Juni", name: "6. White Sands (Alamogordo)", naechte: 1, info: "Mietwagen (ca. 3,5–4 Std.)"},
    {
      datum: "28.–29. Juni",
      name: "Zwischenübernachtung Fort Stockton",
      naechte: 1,
      info: "Mietwagen über Roswell (ca. 5,5–6 Std.), Uhr +1 Std."
    },
    {datum: "29. Juni–1. Juli", name: "7. San Antonio", naechte: 2, info: "Mietwagen (ca. 5–5,5 Std.)"},
    {datum: "1.–3. Juli", name: "8. New Orleans", naechte: 2, info: "Mietwagen (ca. 8–8,5 Std., längster Fahrtag)"},
    {datum: "3.–6. Juli", name: "9. Destin (Golfküste)", naechte: 3, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "6.–10. Juli", name: "10. Orlando", naechte: 4, info: "Mietwagen (ca. 6–7 Std.), Uhr +1 Std."},
    {
      datum: "10.–14. Juli",
      name: "11. Miami",
      naechte: 4,
      info: "Mietwagen (ca. 3,5–4 Std.), Rückgabe am Flughafen am Abreisetag"
    },
    {datum: "14.–17. Juli", name: "12. Washington, D.C.", naechte: 3, info: "Inlandflug nonstop (ca. 2,5–3 Std.)"},
    {datum: "17.–21. Juli", name: "13. New York", naechte: 4, info: "Amtrak-Zug (ca. 3–3,5 Std.); Rückflug 21. Juli"}
  ],
  rueckflug: {
    datum: "21. Juli",
    name: "Flug New York–Zürich",
    info: "Direktflug New York (JFK)–Zürich mit SWISS, täglich; im Sommer 2026 Abflug ca. 16.15 Uhr, ca. 7,75–8 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 6 Uhr"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte, 13 Stationen und eine Zwischenübernachtung (Fort Stockton). Eine Einwegmiete Los Angeles–Miami (ca. 25 Tage) mit ca. 5’350 km und ca. 55–58 Std. reiner Fahrzeit an 11 Fahrtagen, realistisch mit Pausen, Tanken, Stau und Fahrten vor Ort ca. 63–69 Std. im Auto. Dazu ein Inlandflug Miami–Washington (ca. 2,5–3 Std.) und der Zug nach New York (ca. 3–3,5 Std.). Die längsten Fahrtage: San Antonio–New Orleans (ca. 8–8,5 Std., realistisch ca. 9,5–10 Std.), Destin–Orlando (ca. 6–7 Std.), Monument Valley–Albuquerque (ca. 5,5–6,5 Std.), White Sands–Fort Stockton über Roswell (ca. 5,5–6 Std.), Fort Stockton–San Antonio (ca. 5–5,5 Std.) und Los Angeles–Las Vegas (ca. 4,5–5 Std., mit Stau ca. 5,5–6,5 Std.)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Los Angeles mit SWISS als Direktflug ca. 12,25 Std. (Sommer 2026: täglich ausser Do, Abflug ca. 13.05 Uhr, Ankunft ca. 16.25 Uhr Ortszeit, Zeitverschiebung −9 Std.). Für Hin- und Rückflug mit SWISS liegt ein Angebot von ca. 4’000 CHF für alle vier vor. Inlandflug Miami–Washington am Mi, 14.07.2027 nonstop ca. 2,5–3 Std. (American, Delta, viele Flüge pro Tag). Rückflug: New York (JFK)–Zürich mit SWISS als Direktflug täglich, ca. 7,75–8 Std., am Mi, 21.07.2027 (Sommer 2026: Abflug ca. 16.15 Uhr, Ankunft ca. 6.10 Uhr). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Hitze und Hurrikane",
      "In Los Angeles am Meer mild (ca. 22–26 °C), im Südwesten Ende Juni 38–45 °C. Texas, die Golfküste und Florida sind im Juli ca. 32–33 °C heiss und sehr schwül, mit fast täglichen Gewittern am Nachmittag. Die Hurrikansaison dauert von Juni bis November, die meisten Stürme kommen aber von Mitte August bis Mitte Oktober (Höhepunkt um den 10. September); im Juli ist das Risiko klein, aber nicht null: Reiseversicherung und flexible Buchungen."
    ],
    [
      "Vorab buchen",
      "Einwegmiete Los Angeles–Miami (Angebot ca. 3’000 CHF inkl. Versicherung und Einweggebühr), Space Shuttle Endeavour (Zeitfenster), Unterkunft in Monument Valley (oft Monate im Voraus), Meow Wolf, Sumpftour in New Orleans, Unterkunft in Destin, Universal und Kennedy Space Center, Schnorcheltour in Key Largo, Inlandflug Miami–Washington (Gepäck einrechnen), Air and Space Museum, Amtrak Washington–New York, Aussichtsplattform und Broadway in New York."
    ],
    [
      "Optional",
      "Universal Studios Hollywood oder Disneyland (mit einer Nacht mehr in Los Angeles), Bryce Canyon (ab Zion, ca. 2 Std.), Page mit Lake Powell und Antelope Canyon (eine Nacht mehr zwischen Zion und Monument Valley), Grand Canyon (ebenfalls mit einer Nacht mehr), Santa Fe mit eigener Nacht, Carlsbad Caverns (auf der Fahrt nach Fort Stockton), Houston mit Space Center Houston (eine Nacht zwischen San Antonio und New Orleans, teilt den längsten Fahrtag), Siesta Key oder Key Largo mit eigenen Nächten, Philadelphia (Halt mit dem Zug)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Mietwagen von Los Angeles über Las Vegas nach Miami, dann mit dem Flugzeug nach Washington und mit dem Zug nach New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "air", "train"],
    karten: [
      {datei: "karten/usa.svg"},
      {titel: "Südwesten im Detail (Stationen 1 bis 6)", datei: "karten/usa-suedwesten.svg"},
      {titel: "Von Texas bis New York im Detail (Stationen 7 bis 13)", datei: "karten/usa-osten.svg"}
    ]
  },
  abwechslungIntro: "Wüste und Nationalparks, Städte des Südens, Strand und Freizeitparks wechseln sich ab, zum Schluss Washington und New York ohne Auto.",
  abwechslung: [
    [
      "Naturwunder",
      "Zion, Horseshoe Bend, Monument Valley, Sandia Peak, White Sands, Everglades und das Korallenriff bei Key Largo."
    ],
    [
      "Strand",
      "Santa Monica am Pazifik, drei Nächte an den weissen Stränden bei Destin, dazu Miami Beach und ein Schnorcheltag in Key Largo (Wasser ca. 29–31 °C)."
    ],
    [
      "Action und Freizeitparks",
      "Santa Monica Pier, Las Vegas, Meow Wolf in Santa Fe, UFO-Museum in Roswell, Sumpftour in Louisiana, Universal und Kennedy Space Center in Orlando, Airboat in den Everglades, Broadway."
    ],
    [
      "Städte und Kultur",
      "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Navajo Nation, San Antonio mit dem Alamo, New Orleans mit Jazz, Miami, Washington mit den Smithsonian-Museen, New York."
    ],
    [
      "Ruhetage",
      "Los Angeles, Zion, Albuquerque, Destin, Orlando und Miami haben mehrere Nächte; im Osten kein Auto mehr."
    ]
  ],
  stationenIntro: "Dreizehn Stationen von Los Angeles bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Los Angeles",
      land: "us",
      region: "Kalifornien",
      datum: "19.–21. Juni",
      naechte: "2 Nächte",
      anreise: "Direktflug Zürich–Los Angeles mit SWISS am Sa, 19.06.2027 (ca. 12,25 Std.; im Sommer 2026 täglich ausser Do, Abflug ca. 13.05 Uhr, Ankunft ca. 16.25 Uhr), Zeitverschiebung −9 Std. Mietwagen am Flughafen abholen (Einwegmiete bis Miami); nach Santa Monica ca. 30–45 Min.",
      text: "Der Start am Pazifik: Strand und Pier in Santa Monica, die Hügel von Hollywood mit dem berühmten Schriftzug und der Blick über die Stadt vom Griffith Observatory. Zwei Nächte, um den Jetlag zu überwinden, bevor es in die Wüste geht.",
      teens: "Santa Monica Pier mit Riesenrad, Velo am Strand bis Venice Beach (Skatepark, Muscle Beach), Griffith Observatory mit Blick auf das Hollywood-Zeichen, Space Shuttle Endeavour im California Science Center, Walk of Fame.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte gegen den Jetlag, am besten in Santa Monica: am Ankunftsabend nur noch an den Strand, am zweiten Tag Santa Monica und Venice Beach, am Abend das Griffith Observatory (Eintritt gratis, Parkplatz kostenpflichtig).",
        "<strong>Wetter:</strong> Am Meer im Juni mild (ca. 22–26 °C), am Morgen oft Hochnebel («June Gloom»), der sich über Mittag auflöst; im Landesinneren deutlich heisser.",
        "<strong>Verkehr:</strong> Staus fast den ganzen Tag. Für die Fahrt nach Las Vegas früh losfahren.",
        "<strong>Hinweis:</strong> Für das Space Shuttle Endeavour im California Science Center vorab ein Zeitfenster reservieren."
      ],
      ausserdem: "Getty Center (Kunst und Aussicht), Malibu, La Brea Tar Pits (Fossilien), Universal Studios Hollywood oder Disneyland (beide teuer, Universal ist in Orlando eingeplant).",
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
      datum: "21.–22. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Los Angeles über die Interstate 15 durch die Mojave-Wüste (ca. 4,5–5 Std., ca. 460 km; realistisch ca. 5,5–6,5 Std., weil die Ausfahrt aus Los Angeles oft staut: früh losfahren). Gleiche Zeitzone.",
      text: "Ein Abend auf dem Strip: Neonlichter, Hotels wie Freizeitparks und die Wasserspiele des Bellagio, bevor es in die Nationalparks geht.",
      teens: "High Roller (Riesenrad) bei Sonnenuntergang, Wasserspiele des Bellagio, Hotels als Kulisse, am nächsten Morgen früh Red Rock Canyon (Felsen und Aussicht).",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag ankommen, am Abend Strip und Bellagio; am nächsten Morgen Red Rock Canyon oder direkt nach Zion (ca. 2,5–3 Std.).",
        "<strong>Hitze:</strong> Im Juli werden oft 40–45 °C erreicht. Aktivitäten morgens und abends, tagsüber klimatisierte Hotels. Viel Wasser trinken.",
        "<strong>Hinweis:</strong> Glücksspiel ist erst ab 21 Jahren erlaubt. Viele Hotels verlangen zusätzlich «Resort Fees» pro Nacht (oft über 40 USD)."
      ],
      ausserdem: "Hoover-Staudamm, Fremont Street Experience (Altstadt, Lichtshow), Neon Museum, Valley of Fire State Park (rote Felsen), Sphere (nur bei Veranstaltungen).",
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
      nr: 3,
      name: "Zion National Park (Springdale)",
      land: "us",
      region: "Utah",
      datum: "22.–24. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Las Vegas über die Interstate 15 und St. George nach Springdale (ca. 2,5–3 Std., ca. 260 km). In Utah springt die Uhr +1 Std.",
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
      nr: 4,
      name: "Monument Valley (Navajo Nation)",
      land: "us",
      region: "Utah und Arizona",
      datum: "24.–25. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Springdale über Kanab und Page nach Monument Valley (ca. 4,5–5 Std., ca. 380 km). Unterwegs Halt am Horseshoe Bend bei Page (kurzer Weg ab dem Parkplatz, ca. 1 Std.). Arizona hat keine Sommerzeit, die Navajo Nation schon: Am Ziel gilt wieder dieselbe Zeit wie in Utah.",
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
      datum: "25.–27. Juni",
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
      name: "White Sands (Alamogordo)",
      land: "us",
      region: "New Mexico",
      datum: "27.–28. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Albuquerque über die Interstate 25, Carrizozo und die US-54 nach Alamogordo (ca. 3,5–4 Std., ca. 360 km).",
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
      nr: 7,
      name: "San Antonio",
      land: "us",
      region: "Texas",
      datum: "29. Juni–1. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Fort Stockton", datum: "28.–29. Juni"},
      anreise: "Mietwagen von Alamogordo über die US-70 durch Ruidoso nach Roswell (ca. 2 Std., ca. 190 km; Mittagshalt im International UFO Museum), weiter über Artesia, Carlsbad und Pecos auf der US-285 nach Fort Stockton (ca. 3,5–4 Std., ca. 350 km; viel Lastwagenverkehr aus den Ölfeldern, wenig Tankstellen), dort übernachten. In Texas springt die Uhr +1 Std. Am nächsten Tag über die Interstate 10 nach San Antonio (ca. 5–5,5 Std., ca. 520 km).",
      text: "Texanische Geschichte und Flusspromenade: die Missionsstation Alamo, der River Walk mit Booten und Restaurants am Wasser und Tex-Mex-Küche.",
      teens: "Bootsfahrt auf dem River Walk, The Alamo, Missions-Weltkulturerbe per Velo, Freizeitpark Six Flags Fiesta Texas oder Wasserpark.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte zum Ausruhen nach den langen Fahrtagen durch die Wüste.",
        "<strong>Hitze:</strong> Oft über 35 °C; River Walk am Abend am schönsten.",
        "<strong>Hinweis:</strong> The Alamo mit Zeitfenster-Tickets (Eintritt in die Kirche gratis, Reservation empfohlen).",
        "<strong>Roswell:</strong> Das International UFO Museum (täglich ca. 9–17 Uhr, Eintritt günstig, Angaben 2023: ca. 5–7 USD Erwachsene) liegt auf der Fahrt von White Sands; ca. 1–1,5 Std. einplanen."
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
      name: "New Orleans",
      land: "us",
      region: "Louisiana",
      datum: "1.–3. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von San Antonio über die Interstate 10 an Houston vorbei und durch Louisiana (ca. 8–8,5 Std. reine Fahrzeit, ca. 870 km; realistisch mit Pausen ca. 9,5–10 Std.). Der längste Fahrtag der Reise: früh losfahren, Houston nicht zur Rushhour durchqueren.",
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
      nr: 9,
      name: "Destin (Golfküste)",
      land: "us",
      region: "Florida Panhandle",
      datum: "3.–6. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von New Orleans über die Interstate 10 an die Golfküste (ca. 4–4,5 Std., ca. 400 km).",
      text: "Weisser Quarzsand und smaragdgrünes Wasser am Golf von Mexiko: drei Strandtage nach Wüste und Städten, bevor es nach Florida hineingeht.",
      teens: "Baden und Sandburgen am Henderson Beach, Delfin-Bootstour, Schnorcheln an den Jetties von Destin (ruhiges Wasser), Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte am Strand, z.B. in Destin oder Santa Rosa Beach: Baden, Schnorcheln an den Steinmolen, Bootstour zu den Delfinen. Am 4. Juli (Nationalfeiertag) Feuerwerk am Strand; Unterkünfte früh buchen.",
        "<strong>Baden:</strong> Auf die Strandflaggen achten: rote Flagge heisst gefährliche Strömung (Rip Currents), dann nicht ins Wasser.",
        "<strong>Wetter:</strong> Gewitter am Nachmittag sind häufig; Hurrikansaison."
      ],
      ausserdem: "Henderson Beach State Park, Grayton Beach, Seaside, Pensacola Beach (auf dem Weg von New Orleans).",
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
      nr: 10,
      name: "Orlando",
      land: "us",
      region: "Florida",
      datum: "6.–10. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen von Destin über die Interstate 10 und die Interstate 75 nach Orlando (ca. 6–7 Std., ca. 650 km). In Orlando gilt Eastern-Zeit, die Uhr springt +1 Std.",
      text: "Hauptstadt der Freizeitparks und Ausgangspunkt zum Kennedy Space Center, von wo die Raketen starten. Für die Teenager einer der Höhepunkte der Reise.",
      teens: "Universal Studios und Islands of Adventure (Harry Potter), Kennedy Space Center mit der Saturn-V-Rakete und dem Space Shuttle Atlantis, mit Glück ein Raketenstart.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Tag Kennedy Space Center (ca. 1 Std. östlich; mit Glück ein Raketenstart, Startplan kurz vorher prüfen), ein Tag Universal (beide Parks), ein zweiter Parktag oder Cocoa Beach, ein ruhiger Tag am Pool.",
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
      nr: 11,
      name: "Miami",
      land: "us",
      region: "Florida",
      datum: "10.–14. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen von Orlando über den Florida’s Turnpike nach Miami (ca. 3,5–4 Std., ca. 380 km, Mautstrasse).",
      text: "Art-déco-Häuser und Strand in South Beach, kubanisches Essen in Little Havana und gleich vor der Stadt die Everglades mit Alligatoren und Mangroven.",
      teens: "Airboat-Fahrt und Alligatoren in den Everglades, Strand und Art-déco-Viertel in South Beach, Graffiti-Kunst in Wynwood Walls, Little Havana mit kubanischem Essen.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Tag Everglades (Airboat oder Shark Valley Tram), ein Tag Key Largo mit Schnorcheltour am Korallenriff (ca. 1,25–1,5 Std. pro Weg), ein Tag South Beach, ein halber Tag Wynwood und Little Havana.",
        "<strong>Everglades:</strong> Eintritt ca. 35 USD pro Auto, dazu für Nicht-US-Bewohner ab 16 Jahren 100 USD pro Person, mit dem Jahrespass (250 USD) entfällt beides. Shark Valley Tram (ca. 2 Std.) 34 USD Erwachsene, 18 USD Kinder bis 12; Airboat-Touren ausserhalb des Parks ca. 27–37 USD.",
        "<strong>Schnorcheln:</strong> Bootstouren im John Pennekamp Coral Reef State Park dauern ca. 2,5 Std. mit gut einer Stunde im Wasser (2026 ca. 65–75 USD pro Person, Ausrüstung inklusive); alle müssen schwimmen können, riffschonende Sonnencreme.",
        "<strong>Wetter:</strong> Heiss und feucht (ca. 33 °C), am Nachmittag oft kurze Gewitter; Juni bis November ist Hurrikansaison, Wetterberichte verfolgen.",
        "<strong>Weiterflug:</strong> Am Mi, 14.07.2027 nonstop nach Washington (ca. 2,5–3 Std., z.B. American oder Delta nach Reagan National, viele Flüge pro Tag). Mietwagen vorher am Flughafen zurückgeben."
      ],
      ausserdem: "Key Largo und Islamorada (Riff, Mangroven), Vizcaya Museum, Key Biscayne, Frost Science Museum.",
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
      nr: 12,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "14.–17. Juli",
      naechte: "3 Nächte",
      anreise: "Inlandflug Miami–Washington nonstop (ca. 2,5–3 Std.); vom Flughafen Reagan National mit der Metro in die Stadt (ca. 20 Min.). In der Stadt Metro, Velo oder zu Fuss.",
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
      nr: 13,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "17.–21. Juli",
      naechte: "4 Nächte, Rückflug 21. Juli",
      anreise: "Amtrak-Zug ab Washington Union Station nach New York Penn Station (Northeast Regional ca. 3,5 Std., Acela ca. 3 Std.; viele Züge pro Tag). Rückflug direkt ab John F. Kennedy (SWISS) am Mi, 21.07.2027 am Nachmittag (Sommer 2026 ca. 16.15 Uhr; ca. 7,75–8 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 6 Uhr). Zum Flughafen JFK mit dem AirTrain oder Taxi ca. 1–1,5 Std., also am Mittag los.",
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
      ["Inlandflug Miami–Washington", "400–900", "600", "4 Personen inklusive aufgegebenem Gepäck"],
      [
        "Mietwagen (Einwegmiete)",
        "3’000–3’200",
        "3’000",
        "Angebot Los Angeles–Miami (ca. 25 Tage) inkl. Vollkasko, Zusatzhaftpflicht und Einweggebühr; Spanne für Extras vor Ort"
      ],
      [
        "Benzin",
        "450–550",
        "500",
        "ca. 5’350 km, Van oder SUV mit ca. 10–12 l/100 km (ca. 600 Liter); in Kalifornien am teuersten"
      ],
      [
        "Parkieren",
        "550–700",
        "650",
        "Hotels in Los Angeles, New Orleans und Miami Beach oft 35–60 USD pro Nacht, Las Vegas, San Antonio und Orlando ca. 20–35 USD; Universal, Kennedy Space Center, Strände; Motels meist gratis"
      ],
      [
        "Maut",
        "100–200",
        "150",
        "vor allem in Florida (Turnpike, Orlando, Miami), dazu die Gebühr des Vermieters für die automatische Mauterfassung"
      ],
      [
        "Zug und lokale Verkehrsmittel",
        "600–1’300",
        "900",
        "Amtrak Washington–New York, Metro und U-Bahn, Taxi zum Flughafen"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "7’550–12’250",
        "9’450",
        "ca. 130–600 CHF pro Nacht; Los Angeles, Monument Valley, Destin, Miami, Washington und New York am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’500–8’000", "6’000", "ca. 140–250 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)",
        "4’200–7’500",
        "5’650",
        "Pass 250 USD, Meow Wolf, Sandia Peak Tramway, Sumpftour, Universal, Everglades, Schnorcheltour, Aussichtsplattform und Broadway in New York usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "900–1’800",
        "1’300",
        "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"
      ],
      ["Reserve (ca. 5 %)", "1’300–2’200", "1’650", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Los Angeles (2)", "900–1’600"],
      ["2. Las Vegas (1)", "400–750"],
      ["3. Zion National Park (2)", "730–1’180"],
      ["4. Monument Valley (1)", "540–1’040"],
      ["5. Albuquerque (2)", "650–1’100"],
      ["6. White Sands (1)", "300–520"],
      ["Zwischenübernachtung Fort Stockton (1)", "150–250"],
      ["7. San Antonio (2)", "500–850"],
      ["8. New Orleans (2)", "600–1’000"],
      ["9. Destin (3)", "900–1’500"],
      ["10. Orlando (4)", "1’800–3’200"],
      ["11. Miami (4)", "1’450–2’450"],
      ["12. Washington, D.C. (3)", "1’280–2’180"],
      ["13. New York (4)", "2’650–4’420"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: ein Zimmer mit zwei Queen-Betten, Motels mit Frühstück, Imbiss statt Restaurant, Nationalpark-Jahrespass früh kaufen, die vielen Gratis-Museen in Washington nutzen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "33’850",
    spanne: "27’600–43’100",
    proTag: "ca. 1’060 CHF pro Tag, ca. 8’500 pro Person"
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
      "Seit Januar 2026 zahlen Nicht-US-Bewohner ab 16 Jahren in 11 Parks zusätzlich 100 USD pro Person; auf dieser Route betrifft das Zion und die Everglades. Der Jahrespass für Nicht-Residenten kostet 250 USD und deckt das Fahrzeug bzw. die Insassen: Für euch (zwei Erwachsene über 16) lohnt er sich klar. Für Monument Valley gilt er nicht (Navajo-Nation-Eintritt)."
    ],
    [
      "Mietwagen",
      "Familienvan oder SUV, die Einwegmiete Los Angeles–Miami früh buchen (Angebot ca. 3’000 CHF inkl. Vollkasko, Zusatzhaftpflicht und Einweggebühr; Kaution auf der Kreditkarte). In Florida viele Mautstrassen: Mautpaket des Vermieters klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Den Wagen am Flughafen Miami abgeben; im Osten Flug, Zug, Metro und U-Bahn."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Monsun",
      "Las Vegas, Zion und White Sands (anders als Los Angeles am Meer) erreichen Ende Juni 38–45 °C, ab Juli beginnt im Südwesten der Monsun mit Gewittern und Sturzfluten in Schluchten (z.B. Narrows in Zion). Texas, die Golfküste und Florida sind heiss und schwül, mit Gewittern am Nachmittag; Juni bis November ist Hurrikansaison, der Höhepunkt kommt erst ab Mitte August."
    ],
    [
      "Zeitzonen",
      "Los Angeles und Las Vegas Pazifikzeit, Utah Mountain-Zeit, Arizona ohne Sommerzeit, Navajo Nation mit Sommerzeit, New Mexico Mountain-Zeit, Texas, Louisiana und die Golfküste bei Destin Central-Zeit, Orlando, Miami und der Osten Eastern-Zeit. Zur Schweiz sind es −6 bis −9 Stunden."
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
      "Flug und Zug im Osten",
      "Inlandflug Miami–Washington mit Gepäck buchen. Amtrak-Züge Washington–New York fahren oft (Northeast Regional ca. 3,5 Std., Acela ca. 3 Std.); Tickets früh online buchen, Gepäck selbst tragen."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."
    ],
    ["Handy", "eSIM für die USA vorab kaufen. Offline-Karten für Nationalparks laden, dort gibt es oft keinen Empfang."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
