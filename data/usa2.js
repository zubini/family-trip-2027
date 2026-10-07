// Reise: USA als Roadtrip von Las Vegas durch den Südwesten, Texas, die Golfküste und Florida die Ostküste hinauf bis Washington, mit dem Zug nach New York.
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa2 = {
  titel: "Von Las Vegas über Florida nach New York",
  menu: "USA (über Florida)",
  untertitel: "Fünf Wochen Roadtrip quer durch die USA: Nationalparks im Südwesten, Texas, New Orleans, die Golfküste, Orlando und die Florida Keys, dann die Ostküste hinauf nach Washington und mit dem Zug nach New York.",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Seven Mile Bridge Florida Keys|Florida Keys aerial",
    stichwort: "seven mile|florida keys",
    alt: "Overseas Highway in den Florida Keys"
  },
  planIntro: "Abflug ab Zürich am Fr, 18.06.2027 nach Las Vegas, Rückflug ab New York am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18. Juni",
    name: "Flug Zürich–Las Vegas",
    info: "Abflug am Fr, 18.06.2027, Direktflug ca. 12 Std. nur an einzelnen Wochentagen, sonst mit Umstieg ca. 14–17 Std.; Ankunft am selben Tag"
  },
  plan: [
    {
      datum: "18.–20. Juni",
      name: "1. Las Vegas",
      naechte: 2,
      info: "Mietwagen am Flughafen abholen (Einwegmiete bis Washington)"
    },
    {datum: "20.–22. Juni", name: "2. Zion National Park", naechte: 2, info: "Mietwagen (ca. 2,5–3 Std.), Uhr +1 Std."},
    {datum: "22.–23. Juni", name: "3. Page und Lake Powell", naechte: 1, info: "Mietwagen (ca. 2,5 Std.), Uhr −1 Std."},
    {datum: "23.–24. Juni", name: "4. Grand Canyon (South Rim)", naechte: 1, info: "Mietwagen (ca. 2,5 Std.)"},
    {datum: "24.–25. Juni", name: "5. Monument Valley", naechte: 1, info: "Mietwagen (ca. 3,5 Std.), Uhr +1 Std."},
    {datum: "25.–26. Juni", name: "6. Albuquerque", naechte: 1, info: "Mietwagen (ca. 5,5–6,5 Std.)"},
    {datum: "26.–27. Juni", name: "7. White Sands (Alamogordo)", naechte: 1, info: "Mietwagen (ca. 3,5–4 Std.)"},
    {datum: "27.–28. Juni", name: "8. Carlsbad Caverns", naechte: 1, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {
      datum: "28.–29. Juni",
      name: "Zwischenübernachtung Fort Stockton",
      naechte: 1,
      info: "Mietwagen (ca. 2,5–3,5 Std.), Uhr +1 Std."
    },
    {datum: "29. Juni–1. Juli", name: "9. San Antonio", naechte: 2, info: "Mietwagen (ca. 5–5,5 Std.)"},
    {datum: "1.–2. Juli", name: "10. Houston", naechte: 1, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {datum: "2.–4. Juli", name: "11. New Orleans", naechte: 2, info: "Mietwagen (ca. 5–6 Std.)"},
    {datum: "4.–6. Juli", name: "12. Destin (Golfküste)", naechte: 2, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "6.–8. Juli", name: "13. Orlando", naechte: 2, info: "Mietwagen (ca. 6–7 Std.), Uhr +1 Std."},
    {datum: "8.–10. Juli", name: "14. Key Largo und Islamorada", naechte: 2, info: "Mietwagen (ca. 4,5–5,5 Std.)"},
    {
      datum: "10.–12. Juli",
      name: "15. Key West",
      naechte: 2,
      info: "Mietwagen über den Overseas Highway (ca. 2–2,5 Std.)"
    },
    {datum: "12.–13. Juli", name: "16. Miami", naechte: 1, info: "Mietwagen (ca. 3,5–4 Std.)"},
    {datum: "13.–14. Juli", name: "17. St. Augustine", naechte: 1, info: "Mietwagen (ca. 4,5–5 Std.)"},
    {datum: "14.–16. Juli", name: "18. Charleston", naechte: 2, info: "Mietwagen über Savannah (ca. 4,5–5,5 Std.)"},
    {datum: "16.–17. Juli", name: "19. Williamsburg", naechte: 1, info: "Mietwagen (ca. 7–7,5 Std.)"},
    {
      datum: "17.–19. Juli",
      name: "20. Washington, D.C.",
      naechte: 2,
      info: "Mietwagen (ca. 2,5–3 Std.), Rückgabe in Washington"
    },
    {datum: "19.–22. Juli", name: "21. New York", naechte: 3, info: "Amtrak-Zug (ca. 3–3,5 Std.); Rückflug 22. Juli"}
  ],
  rueckflug: {
    datum: "22. Juli",
    name: "Flug New York–Zürich",
    info: "Nachtflug ca. 7,5–8 Std., Ankunft in Zürich am Fr, 23.07.2027 am Morgen"
  },
  planHinweise: [
    [
      "Gesamt",
      "34 Nächte, 21 Stationen und eine Zwischenübernachtung (Fort Stockton). Keine Inlandflüge: nur Hin- und Rückflug, dazwischen eine Einwegmiete Las Vegas–Washington (ca. 29 Tage) und der Amtrak-Zug nach New York. Insgesamt ca. 7’600 km (ca. 4’700 Meilen) und ca. 80–85 Std. reine Fahrzeit an 20 Fahrtagen; mit Pausen, Tanken, Stau und Fahrten vor Ort realistisch ca. 95–103 Std. im Auto. Die längsten: Williamsburg (ca. 7–7,5 Std. ab Charleston), Destin–Orlando (ca. 6–7 Std.), Monument Valley–Albuquerque (ca. 5,5–6,5 Std.), Houston–New Orleans (ca. 5–6 Std.), Fort Stockton–San Antonio und Key Largo–Orlando (je ca. 5–5,5 Std.). Acht Stationen mit nur einer Nacht."
    ],
    [
      "Vorab buchen",
      "Unterkünfte im Grand Canyon und in Monument Valley (oft Monate im Voraus), Antelope-Canyon-Tour, Zeitfenster für Carlsbad Caverns, Unterkünfte in Key West und den Keys, Schnorcheltour im Pennekamp-Park, Tickets für Universal und das Kennedy Space Center, Fort Sumter, Zeitfenster für das Air and Space Museum, Amtrak-Züge, Aussichtsplattform und Broadway in New York, Einwegmiete."
    ],
    [
      "Optional",
      "Bryce Canyon (ab Zion, ca. 2 Std., ebenfalls mit Zusatzgebühr), Santa Fe mit Meow Wolf (ab Albuquerque, ca. 1 Std.), Big Bend National Park (ab Fort Stockton, Umweg), Galveston (Strand, ab Houston), Dry Tortugas (ab Key West), Savannah mit einer eigenen Nacht, Philadelphia (Halt mit dem Zug zwischen Washington und New York)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Las Vegas als Direktflug ca. 12 Std. (im Sommer 2026 nur an einzelnen Wochentagen; am Freitag mit einem Umstieg ca. 14–17 Std.), Ankunft am selben Tag (Zeitverschiebung −9 Std.). Rückflug: New York–Zürich ca. 7,5–8 Std. als Nachtflug am Do, 22.07.2027, Ankunft am nächsten Morgen. Flugpläne 2027 bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege mit dem Mietwagen von Las Vegas über Texas und Florida bis Washington und mit Amtrak nach New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "train"],
    karten: [
      {datei: "karten/usa2.svg"},
      {titel: "Südwesten und Texas im Detail (Stationen 1 bis 11)", datei: "karten/usa2-suedwesten.svg"},
      {titel: "Golfküste, Florida und Ostküste im Detail (Stationen 11 bis 21)", datei: "karten/usa2-osten.svg"}
    ]
  },
  abwechslungIntro: "Wüste, Städte, Meer und Geschichte wechseln sich ab: Nationalparks im Südwesten, Höhle und Dünen in New Mexico, die Städte von Texas und New Orleans, Strand an der Golfküste und in den Keys, Freizeitparks in Orlando und zum Schluss die Ostküste. Nach langen Fahrtagen jeweils eine Station mit zwei Nächten.",
  abwechslung: [
    [
      "Naturwunder",
      "Zion, Antelope Canyon und Horseshoe Bend, Grand Canyon, Monument Valley, White Sands, Carlsbad Caverns, Everglades und Florida Keys."
    ],
    [
      "Strand und Schnorcheln",
      "Weisse Strände bei Destin, Korallenriff im Pennekamp-Park (Key Largo), Key West, South Beach in Miami, Atlantikstrand in St. Augustine."
    ],
    [
      "Action und Freizeitparks",
      "Universal in Orlando, Kennedy Space Center und Space Center Houston, Sandia Peak Tramway, Busch Gardens Williamsburg, Flugzeugträger in Charleston, Las Vegas."
    ],
    [
      "Städte und Kultur",
      "Las Vegas, Albuquerque, San Antonio mit dem Alamo, Houston, New Orleans mit Jazz, Miami, St. Augustine, Charleston, Colonial Williamsburg, Washington und New York."
    ],
    [
      "Ruhetage",
      "Zion, San Antonio, Destin und die Keys mit je zwei Nächten sorgen für Erholung zwischen den Fahrtagen."
    ]
  ],
  stationenIntro: "Einundzwanzig Stationen von Las Vegas über Texas und Florida bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Las Vegas (Start)",
      land: "us",
      region: "Nevada",
      datum: "18.–20. Juni",
      naechte: "2 Nächte",
      anreise: "Flug Zürich–Las Vegas am Fr, 18.06.2027 (Direktflug ca. 12 Std. nur an einzelnen Wochentagen, sonst mit Umstieg ca. 14–17 Std.), Ankunft am selben Tag (Zeitverschiebung −9 Std.). Mietwagen am Flughafen abholen (Einwegmiete bis Washington).",
      text: "Der Einstieg in der Wüste: Neonlichter, Hotels wie Freizeitparks und die Wasserspiele des Bellagio. Zwei Nächte, um den Jetlag zu überwinden, bevor es in die Nationalparks geht.",
      teens: "High Roller (Riesenrad) bei Sonnenuntergang, Wasserspiele des Bellagio, Red Rock Canyon (Felsen und Aussicht) früh am Morgen, Hoover-Staudamm als Halbtagesausflug, Shows und Hotels als Kulisse.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte gegen den Jetlag; am ersten Abend früh schlafen, am zweiten Tag Red Rock Canyon am Morgen und der Strip am Abend.",
        "<strong>Hitze:</strong> Im Juli werden oft 40–45 °C erreicht. Aktivitäten morgens und abends, tagsüber klimatisierte Hotels. Viel Wasser trinken.",
        "<strong>Hinweis:</strong> Glücksspiel ist erst ab 21 Jahren erlaubt. Viele Hotels verlangen zusätzlich «Resort Fees» pro Nacht (oft über 40 USD)."
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
      nr: 2,
      name: "Zion National Park (Springdale)",
      land: "us",
      region: "Utah",
      datum: "20.–22. Juni",
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
      nr: 3,
      name: "Page und Lake Powell",
      land: "us",
      region: "Arizona",
      datum: "22.–23. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Springdale über den Zion–Mount Carmel Highway und Kanab nach Page (ca. 2,5 Std., ca. 180 km). Arizona hat keine Sommerzeit, die Uhr springt −1 Std.",
      text: "Kleinstadt am Lake Powell mit zwei weltberühmten Fotomotiven: dem Horseshoe Bend und dem Antelope Canyon. Beides liegt auf oder neben Navajo-Land.",
      teens: "Geführte Tour durch den Antelope Canyon (Zeitfenster vorab buchen), Horseshoe Bend zum Sonnenuntergang, Bootsfahrt oder Baden im Lake Powell.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag Antelope Canyon (Tour mit Zeitfenster), am Abend Horseshoe Bend.",
        "<strong>Hinweis:</strong> Der Antelope Canyon ist nur mit zugelassenen Navajo-Führern zugänglich. Bei Gewitter oder Regen in der Umgebung werden Touren wegen Sturzfluten abgesagt (Juli: Monsun).",
        "<strong>Zeit:</strong> Page richtet sich nach der Arizona-Zeit (keine Sommerzeit). Die Uhr ändert sich gegenüber Utah um eine Stunde."
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
      nr: 4,
      name: "Grand Canyon (South Rim)",
      land: "us",
      region: "Arizona",
      datum: "23.–24. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Page über den Highway 89 und Cameron zum Südrand (ca. 2,5 Std., ca. 220 km).",
      text: "Der Südrand des Grand Canyon ist der klassische Zugang: Aussichtspunkte direkt am Rand, Wanderwege und ein kostenloser Parkshuttle. Eine Nacht am Rand reicht für Sonnenuntergang und Sonnenaufgang, am besten im Park oder im nahen Tusayan.",
      teens: "Mather Point und Rim Trail (flach, grosse Aussicht), Sonnenuntergang am Hopi Point, Junior-Ranger-Programm im Visitor Center, Desert View Watchtower, ein Stück den Bright Angel Trail hinunterwandern (nicht bis zum Fluss).",
      fakten: [
        "<strong>Gebühr:</strong> Auch der Grand Canyon gehört zu den 11 Parks mit 100 USD Zusatzgebühr pro Person ab 16 Jahren. Mit dem Jahrespass (250 USD) entfällt sie.",
        "<strong>Sicherheit:</strong> Auf Trails nicht zu weit absteigen: der Aufstieg dauert doppelt so lang wie der Abstieg. Wasser, salzige Snacks und Hut mitnehmen.",
        "<strong>Unterkunft:</strong> Zimmer im Park sind oft Monate im Voraus ausgebucht; sonst in Tusayan übernachten."
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
      nr: 5,
      name: "Monument Valley (Navajo Nation)",
      land: "us",
      region: "Utah und Arizona",
      datum: "24.–25. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen vom Südrand über Cameron, Tuba City und Kayenta nach Monument Valley (ca. 3,5 Std., ca. 290 km). Die Navajo Nation hat Sommerzeit, die Uhr springt +1 Std.",
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
      nr: 6,
      name: "Albuquerque",
      land: "us",
      region: "New Mexico",
      datum: "25.–26. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Monument Valley über Kayenta, Shiprock und Gallup auf die Interstate 40 nach Albuquerque (ca. 5,5–6,5 Std., ca. 520 km). Einer der längeren Fahrtage: früh starten.",
      text: "Die grösste Stadt New Mexicos am Rio Grande: eine Altstadt mit Lehmziegelbauten, die Route 66 und eine der längsten Pendelseilbahnen der Welt auf den Sandia Peak.",
      teens: "Sandia Peak Tramway auf über 3’100 m mit Blick über die Wüste (oben kühl), Old Town mit Lehmziegelkirche, Felszeichnungen im Petroglyph National Monument, Neonschilder an der Route 66.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Abend Sandia Peak zum Sonnenuntergang oder Old Town, am Morgen weiter nach White Sands.",
        "<strong>Höhe:</strong> Albuquerque liegt auf ca. 1’600 m, der Sandia Peak auf ca. 3’160 m: Jacke für oben, Sonnencreme und viel trinken.",
        "<strong>Abstecher:</strong> Santa Fe mit Meow Wolf liegt ca. 1 Std. nördlich; mit einer zweiten Nacht möglich."
      ],
      ausserdem: "Indian Pueblo Cultural Center, Explora (Wissenschaftsmuseum), Santa Fe (ca. 1 Std.), Kasha-Katuwe Tent Rocks.",
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
      nr: 7,
      name: "White Sands (Alamogordo)",
      land: "us",
      region: "New Mexico",
      datum: "26.–27. Juni",
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
      nr: 8,
      name: "Carlsbad Caverns",
      land: "us",
      region: "New Mexico",
      datum: "27.–28. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Alamogordo über die Bergstrasse US-82 durch Cloudcroft und Artesia nach Carlsbad (ca. 3–3,5 Std., ca. 300 km).",
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
      name: "San Antonio",
      land: "us",
      region: "Texas",
      datum: "29. Juni–1. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Fort Stockton", datum: "28.–29. Juni"},
      anreise: "Mietwagen von Carlsbad über die US-285 nach Fort Stockton (ca. 2,5–3,5 Std., ca. 250 km; schmale Strasse mit viel Lastwagenverkehr, wenig Tankstellen), dort übernachten. In Texas springt die Uhr +1 Std. Am nächsten Tag über die Interstate 10 nach San Antonio (ca. 5–5,5 Std., ca. 520 km).",
      text: "Texanische Geschichte und Flusspromenade: die Missionsstation Alamo, der River Walk mit Booten und Restaurants am Wasser und Tex-Mex-Küche.",
      teens: "Bootsfahrt auf dem River Walk, The Alamo, Missions-Weltkulturerbe per Velo, Freizeitpark Six Flags Fiesta Texas oder Wasserpark.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte zum Ausruhen nach den langen Fahrtagen durch die Wüste.",
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
      nr: 10,
      name: "Houston",
      land: "us",
      region: "Texas",
      datum: "1.–2. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von San Antonio über die Interstate 10 (ca. 3–3,5 Std., ca. 320 km).",
      text: "Die Raumfahrtstadt: Im Space Center Houston steht man in der Halle der Saturn-V-Rakete und neben dem Kontrollraum der Mondlandungen.",
      teens: "Space Center Houston mit Tram-Tour zum Mission Control und zur Saturn-V-Halle, Museum District, Abend am Buffalo Bayou.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht; das Space Center liegt ca. 40 Min. südöstlich der Stadt und eignet sich auch als Halt auf der Anreise.",
        "<strong>Hitze:</strong> Heiss und feucht; das Space Center ist zum grossen Teil klimatisiert."
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
      nr: 11,
      name: "New Orleans",
      land: "us",
      region: "Louisiana",
      datum: "2.–4. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Houston über die Interstate 10 durch Louisiana (ca. 5–6 Std., ca. 560 km).",
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
      nr: 12,
      name: "Destin (Golfküste)",
      land: "us",
      region: "Florida Panhandle",
      datum: "4.–6. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von New Orleans über die Interstate 10 an die Golfküste (ca. 4–4,5 Std., ca. 400 km).",
      text: "Weisser Quarzsand und smaragdgrünes Wasser am Golf von Mexiko: zwei Strandtage nach den Städten, bevor es nach Florida hineingeht.",
      teens: "Baden und Sandburgen am Henderson Beach, Delfin-Bootstour, Schnorcheln an den Jetties von Destin (ruhiges Wasser), Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte am Strand, z.B. in Destin oder Santa Rosa Beach. Am 4. Juli (Nationalfeiertag) Feuerwerk am Strand; Unterkünfte früh buchen.",
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
      nr: 13,
      name: "Orlando",
      land: "us",
      region: "Florida",
      datum: "6.–8. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Destin über die Interstate 10 und 75 nach Orlando (ca. 6–7 Std., ca. 620 km). In Orlando gilt Eastern-Zeit, die Uhr springt +1 Std.",
      text: "Hauptstadt der Freizeitparks und Ausgangspunkt zum Kennedy Space Center, von wo die Raketen starten. Für die Teenager einer der Höhepunkte der Reise.",
      teens: "Universal Studios und Islands of Adventure (Harry Potter), Kennedy Space Center mit der Saturn-V-Rakete und dem Space Shuttle Atlantis, mit Glück ein Raketenstart.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Universal, ein Tag Kennedy Space Center (ca. 1 Std. östlich).",
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
      nr: 14,
      name: "Key Largo und Islamorada",
      land: "us",
      region: "Florida Keys",
      datum: "8.–10. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Orlando über den Florida’s Turnpike nach Key Largo (ca. 4,5–5,5 Std., ca. 440 km, Mautstrasse).",
      text: "Die oberen Keys sind das Schnorchelrevier der Reise: das einzige lebende Korallenriff auf dem Festlandsockel der USA liegt vor der Küste, mit Papageifischen, Rochen und manchmal Schildkröten.",
      teens: "Schnorcheltour zum Riff im John Pennekamp Coral Reef State Park, Kajak durch die Mangroven, Tarpune füttern bei Robbie’s in Islamorada, Delfine im Dolphin Research Center.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte; die Schnorcheltour gleich am ersten Morgen buchen, damit der zweite Tag als Ausweichtag bleibt, falls Wind und Wellen die Bootstour verhindern.",
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
      nr: 15,
      name: "Key West",
      land: "us",
      region: "Florida Keys",
      datum: "10.–12. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Key Largo über den Overseas Highway und die Seven Mile Bridge bis ans Ende der Keys (ca. 2–2,5 Std., ca. 160 km).",
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
      nr: 16,
      name: "Miami",
      land: "us",
      region: "Florida",
      datum: "12.–13. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Key West zurück über den Overseas Highway nach Miami (ca. 3,5–4 Std., ca. 260 km).",
      text: "Art-déco-Häuser und Strand in South Beach, kubanisches Essen in Little Havana und gleich vor der Stadt die Everglades mit Alligatoren und Mangroven.",
      teens: "Airboat-Fahrt und Alligatoren in den Everglades, Strand und Art-déco-Viertel in South Beach, Graffiti-Kunst in Wynwood Walls, Little Havana mit kubanischem Essen.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Abend South Beach und Ocean Drive; die Everglades (Airboat) liegen auf der Anreise aus den Keys bei Homestead.",
        "<strong>Wetter:</strong> Heiss und feucht, am Nachmittag oft kurze Gewitter; Juni bis November ist Hurrikansaison, Wetterberichte verfolgen.",
        "<strong>Everglades:</strong> Gehört zu den 11 Parks mit 100 USD Zusatzgebühr pro Person ab 16 Jahren für Nicht-US-Bewohner; mit dem Jahrespass (250 USD) entfällt sie. Airboat-Touren gibt es auch ausserhalb des Parks."
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
      nr: 17,
      name: "St. Augustine",
      land: "us",
      region: "Florida",
      datum: "13.–14. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Miami über die Interstate 95 nach St. Augustine (ca. 4,5–5 Std., ca. 500 km).",
      text: "Die älteste von Europäern gegründete Stadt der USA (1565): eine spanische Festung am Meer, enge Gassen mit Balkonen und ein langer Atlantikstrand gleich vor der Stadt.",
      teens: "Festung Castillo de San Marcos mit Kanonenvorführung, Aufstieg auf den Leuchtturm (219 Stufen), Altstadtgasse St. George Street, Baden am St. Augustine Beach, Alligator Farm.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag Festung und Altstadt, am Abend Strand, am Morgen Leuchtturm und weiter nach Savannah.",
        "<strong>Castillo de San Marcos:</strong> Gehört zum Nationalpark-Dienst; mit dem Jahrespass inklusive.",
        "<strong>Baden:</strong> Auf die Strandflaggen achten, am Atlantik gibt es Strömungen."
      ],
      ausserdem: "Flagler College (ehemaliges Hotel), Bridge of Lions, Fort Matanzas, Anastasia State Park.",
      bilder: [
        {
          titel: "Castillo de San Marcos",
          suche: "Castillo de San Marcos St Augustine",
          stichwort: "castillo|san marcos"
        },
        {titel: "Altstadt", suche: "St George Street St Augustine", stichwort: "st george|augustine"},
        {titel: "Leuchtturm", suche: "St Augustine Lighthouse", stichwort: "lighthouse"},
        {titel: "Flagler College", suche: "Flagler College St Augustine", stichwort: "flagler"},
        {titel: "Strand", suche: "St Augustine Beach pier", stichwort: "augustine"},
        {titel: "Bridge of Lions", suche: "Bridge of Lions St Augustine", stichwort: "bridge of lions"}
      ]
    },
    {
      nr: 18,
      name: "Charleston",
      land: "us",
      region: "South Carolina",
      datum: "14.–16. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von St. Augustine über die Interstate 95 nach Charleston (ca. 4,5–5,5 Std., ca. 440 km); Halt in der Altstadt von Savannah mit ihren Plätzen und Eichen möglich.",
      text: "Pastellfarbene Häuser, Kirchtürme und Gaslaternen in einer der ältesten Städte der USA. Vor dem Hafen liegt Fort Sumter, wo der Bürgerkrieg begann; Strände und Inseln sind nah.",
      teens: "Flugzeugträger USS Yorktown in Patriots Point, Boot zum Fort Sumter, Rainbow Row und Ananasbrunnen, Baden am Folly Beach, die riesige Angel Oak.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt und Fort Sumter, ein Tag Patriots Point und Strand.",
        "<strong>Geschichte:</strong> Charleston war ein grosser Sklavenhandelshafen. Das International African American Museum und Plantagen wie McLeod erzählen diese Geschichte.",
        "<strong>Fort Sumter:</strong> Nur mit dem Boot erreichbar (ca. 2,25 Std. mit Besuch); Tickets vorab."
      ],
      ausserdem: "Savannah (Halt auf der Anreise), Waterfront Park, City Market, Magnolia Plantation, Sullivan’s Island, Isle of Palms.",
      bilder: [
        {titel: "Rainbow Row", suche: "Rainbow Row Charleston", stichwort: "rainbow row"},
        {titel: "Ananasbrunnen", suche: "Pineapple Fountain Charleston", stichwort: "pineapple"},
        {titel: "Fort Sumter", suche: "Fort Sumter Charleston", stichwort: "sumter"},
        {titel: "USS Yorktown", suche: "USS Yorktown Patriots Point", stichwort: "yorktown"},
        {titel: "Angel Oak", suche: "Angel Oak Tree Charleston", stichwort: "angel oak"},
        {titel: "Folly Beach", suche: "Folly Beach pier", stichwort: "folly"}
      ]
    },
    {
      nr: 19,
      name: "Williamsburg",
      land: "us",
      region: "Virginia",
      datum: "16.–17. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Charleston über die Interstate 95 nach Williamsburg (ca. 7–7,5 Std., ca. 720 km). Der längste Fahrtag im Osten: früh starten.",
      text: "Colonial Williamsburg zeigt die Hauptstadt der britischen Kolonie Virginia als Freilichtmuseum mit Darstellern in Kostümen. In der Nähe liegen Jamestown, wo 1607 die erste dauerhafte englische Siedlung entstand, und Yorktown, wo der Unabhängigkeitskrieg endete.",
      teens: "Achterbahnen im Freizeitpark Busch Gardens Williamsburg, Handwerk und Musketen-Vorführungen in Colonial Williamsburg, Nachbauten der Schiffe von 1607 im Jamestown Settlement.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Abend durch Colonial Williamsburg, am Morgen Busch Gardens oder Jamestown, dann weiter nach Washington.",
        "<strong>Colonial Williamsburg:</strong> Die Strassen sind frei zugänglich, für die Gebäude und Vorführungen braucht es ein Ticket.",
        "<strong>Weiterfahrt:</strong> Auf der Interstate 95 nach Washington gibt es oft Stau; ausserhalb der Stosszeiten fahren."
      ],
      ausserdem: "Yorktown Battlefield, Water Country USA (Wasserpark), Virginia Beach (ca. 1 Std.).",
      bilder: [
        {titel: "Colonial Williamsburg", suche: "Colonial Williamsburg", stichwort: "williamsburg"},
        {titel: "Governor’s Palace", suche: "Governor's Palace Williamsburg", stichwort: "governor"},
        {titel: "Busch Gardens", suche: "Busch Gardens Williamsburg", stichwort: "busch gardens"},
        {titel: "Jamestown Settlement", suche: "Jamestown Settlement ships", stichwort: "jamestown"},
        {
          titel: "Duke of Gloucester Street",
          suche: "Duke of Gloucester Street Williamsburg",
          stichwort: "gloucester|williamsburg"
        },
        {titel: "Yorktown", suche: "Yorktown Battlefield Virginia", stichwort: "yorktown"}
      ]
    },
    {
      nr: 20,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "17.–19. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Williamsburg über die Interstate 64 und 95 nach Washington (ca. 2,5–3 Std., ca. 250 km), Rückgabe der Einwegmiete am Flughafen oder in der Stadt. In der Stadt Metro und zu Fuss.",
      text: "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
      teens: "National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag National Mall und Denkmäler, ein Tag Museen (Air and Space, Natural History).",
        "<strong>Hitze:</strong> Im Juli heiss und schwül, nachmittags oft Gewitter; Museen als Hitzepause einplanen.",
        "<strong>Hinweis:</strong> Das White House ist von innen nur nach früher Anfrage über die Schweizer Botschaft zu besichtigen, von aussen jederzeit. Den Mietwagen bei der Ankunft zurückgeben; in der Stadt sind Metro und Taxi besser."
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
      nr: 21,
      name: "New York (Finale)",
      land: "us",
      region: "New York",
      datum: "19.–22. Juli",
      naechte: "3 Nächte, Rückflug 22. Juli",
      anreise: "Amtrak-Zug ab Washington Union Station nach New York Penn Station (Northeast Regional ca. 3,5 Std., Acela ca. 2,75–3 Std.). Rückflug ab Newark oder John F. Kennedy am Do, 22.07.2027 (Flug ca. 7,5–8 Std., Ankunft in Zürich am nächsten Morgen).",
      text: "Das grosse Finale: Wolkenkratzer, Parks, Museen und Hafenpanorama, nach fünf Wochen Natur, Strand und Kleinstädten.",
      teens: "Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building oder Top of the Rock, Broadway-Musical, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: Tag 1 Midtown und Aussichtsplattform, Tag 2 Freiheitsstatue und Lower Manhattan (9/11 Memorial), Tag 3 Central Park oder Brooklyn, Abflug am Abend.",
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
  abschluss: "Rückflug ab New York nach Zürich am Do, 22.07.2027 (ca. 7,5–8 Std.), Ankunft am nächsten Morgen.",
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 34,
    total: "39’550",
    spanne: "30’550–50’750",
    proTag: "ca. 1’165 CHF pro Tag, ca. 9’900 pro Person",
    posten: [
      [
        "Flüge Zürich–Las Vegas und New York–Zürich",
        "4’000–6’000",
        "5’000",
        "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Mietwagen (Einwegmiete, Benzin, Parken, Maut)",
        "4’500–7’500",
        "5’800",
        "Las Vegas–Washington (ca. 29 Tage, ca. 7’600 km); die Rückgabegebühr für eine Einwegmiete quer durchs Land kann bis gegen 1’500 USD betragen"
      ],
      [
        "Amtrak und lokale Verkehrsmittel",
        "600–1’200",
        "850",
        "Amtrak Washington–New York, Metro und U-Bahn, Taxi, Parkhäuser in New Orleans, Miami und Charleston"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "8’500–13’500",
        "10’800",
        "ca. 150–600 CHF pro Nacht; New York, Key West und die Nationalparks am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’750–8’150", "6’200", "ca. 140–240 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)",
        "4’500–8’000",
        "6’000",
        "Pass 250 USD, Antelope Canyon, Sandia Peak Tramway, Space Center Houston, Universal, Kennedy Space Center, Schnorcheltour, Busch Gardens, Aussichtsplattform und Broadway in New York usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "900–1’800",
        "1’300",
        "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"
      ],
      ["Reserve (ca. 10 %)", "2’800–4’600", "3’600", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Las Vegas (2)", "700–1’300"],
      ["2. Zion National Park (2)", "730–1’180"],
      ["3. Page und Lake Powell (1)", "450–750"],
      ["4. Grand Canyon (1)", "420–720"],
      ["5. Monument Valley (1)", "540–1’040"],
      ["6. Albuquerque (1)", "250–400"],
      ["7. White Sands (1)", "300–520"],
      ["8. Carlsbad Caverns (1)", "250–400"],
      ["Zwischenübernachtung Fort Stockton (1)", "150–250"],
      ["9. San Antonio (2)", "500–850"],
      ["10. Houston (1)", "300–500"],
      ["11. New Orleans (2)", "600–1’000"],
      ["12. Destin (2)", "600–1’000"],
      ["13. Orlando (2)", "700–1’300"],
      ["14. Key Largo und Islamorada (2)", "700–1’200"],
      ["15. Key West (2)", "900–1’600"],
      ["16. Miami (1)", "350–600"],
      ["17. St. Augustine (1)", "300–500"],
      ["18. Charleston (2)", "650–1’100"],
      ["19. Williamsburg (1)", "300–500"],
      ["20. Washington, D.C. (2)", "700–1’150"],
      ["21. New York (3)", "1’500–2’600"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: weniger Nächte in Key West, Frühstück im Hotel, Imbiss statt Restaurant, Nationalpark-Jahrespass früh kaufen, Unterkunft in New Jersey oder Brooklyn statt Manhattan.",
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
      "Familienvan oder SUV, die Einwegmiete Las Vegas–Washington früh buchen (Rückgabegebühr oft hoch, Angebote mehrerer Firmen vergleichen). In Florida viele Mautstrassen: Mautpaket oder Abrechnung per Kennzeichen beim Vermieter klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Vollkasko prüfen."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze, Hurrikane und Monsun",
      "Las Vegas, Zion und der Südwesten erreichen im Juni 35–45 °C; ab Juli beginnt dort der Monsun mit Gewittern und Sturzfluten in Schluchten (Narrows, Antelope Canyon). Texas, die Golfküste und Florida sind heiss und feucht mit Gewittern am Nachmittag; Juni bis November ist Hurrikansaison: Wetterwarnungen verfolgen, flexibel bleiben. Im Osten schwül."
    ],
    [
      "Zeitzonen",
      "Las Vegas Pazifikzeit, Utah, New Mexico und die Navajo Nation Mountain-Zeit, Arizona keine Sommerzeit (wie Las Vegas), Texas, Louisiana und die Florida Panhandle Central-Zeit, Orlando und der ganze Osten Eastern-Zeit. Zur Schweiz sind es −9 bis −6 Stunden."
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
    ],
    [
      "Amtrak",
      "Die Züge Washington–New York fahren oft und sind schnell; Tickets früh online buchen (günstiger), Gepäck selbst tragen."
    ]
  ]
};
