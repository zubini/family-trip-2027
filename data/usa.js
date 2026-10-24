// Reise: USA von Las Vegas über New Orleans und Miami nach New York (Mietwagen bis Miami, Inlandflug nach Washington, Zug nach New York)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa = {
  titel: "Von Las Vegas über New Orleans und Miami nach New York",
  menu: "USA",
  untertitel: "Fünf Wochen USA: mit dem Mietwagen von Las Vegas über Zion, Monument Valley, Albuquerque und White Sands nach Texas, über Houston und New Orleans an den Strand von Destin, nach Orlando und Miami; dann mit dem Flugzeug nach Washington und mit dem Zug nach New York.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    datei: "USA 10187 Horseshoe Bend Luca Galuzzi 2007.jpg",
    suche: "Horseshoe Bend Arizona|Monument Valley sunset",
    stichwort: "horseshoe bend|monument valley",
    alt: "Horseshoe Bend, Arizona"
  },
  planIntro: "Abflug ab Zürich nach Las Vegas am Sa, 19.06.2027, Rückflug ab New York am Mi, 21.07.2027 (Ankunft Do, 22.07.2027). Dazwischen eine Einwegmiete Las Vegas–Miami, ein Inlandflug nach Washington und der Zug nach New York. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Flug Zürich–Las Vegas",
    info: "Abflug am Sa, 19.06.2027, Direktflug ca. 11,5 Std. (nur an einzelnen Wochentagen), Ankunft am selben Tag am späten Nachmittag"
  },
  plan: [
    {
      datum: "19.–21. Juni",
      name: "1. Las Vegas",
      naechte: 2,
      info: "Flug ab Zürich (ca. 11,5 Std.), Mietwagen am Flughafen abholen (Einwegmiete bis Miami)"
    },
    {datum: "21.–23. Juni", name: "2. Zion National Park", naechte: 2, info: "Mietwagen (ca. 2,5–3 Std.), Uhr +1 Std."},
    {
      datum: "23.–24. Juni",
      name: "3. Monument Valley",
      naechte: 1,
      info: "Mietwagen über Page (ca. 4,5–5 Std.), Halt am Horseshoe Bend"
    },
    {datum: "24.–26. Juni", name: "4. Albuquerque", naechte: 2, info: "Mietwagen (ca. 5,5–6,5 Std.)"},
    {datum: "26.–27. Juni", name: "5. White Sands (Alamogordo)", naechte: 1, info: "Mietwagen (ca. 3,5–4 Std.)"},
    {
      datum: "27.–28. Juni",
      name: "Zwischenübernachtung Fort Stockton",
      naechte: 1,
      info: "Mietwagen über Roswell (ca. 5,5–6 Std.), Uhr +1 Std."
    },
    {datum: "28.–30. Juni", name: "6. San Antonio", naechte: 2, info: "Mietwagen (ca. 5–5,5 Std.)"},
    {datum: "30. Juni–2. Juli", name: "7. Houston", naechte: 2, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {datum: "2.–4. Juli", name: "8. New Orleans", naechte: 2, info: "Mietwagen (ca. 5–6 Std.)"},
    {datum: "4.–7. Juli", name: "9. Destin (Golfküste)", naechte: 3, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "7.–10. Juli", name: "10. Orlando", naechte: 3, info: "Mietwagen (ca. 6–7 Std.), Uhr +1 Std."},
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
      "32 Nächte, 13 Stationen und eine Zwischenübernachtung (Fort Stockton). Eine Einwegmiete Las Vegas–Miami (ca. 25 Tage) mit ca. 4’900 km und ca. 50–54 Std. reiner Fahrzeit an 11 Fahrtagen, realistisch mit Pausen, Tanken, Stau und Fahrten vor Ort ca. 58–64 Std. im Auto. Dazu ein Inlandflug Miami–Washington (ca. 2,5–3 Std.) und der Zug nach New York (ca. 3–3,5 Std.). Die längsten Fahrtage: Destin–Orlando (ca. 6–7 Std.), Monument Valley–Albuquerque (ca. 5,5–6,5 Std.), White Sands–Fort Stockton über Roswell (ca. 5,5–6 Std.), Houston–New Orleans und Fort Stockton–San Antonio (je ca. 5–6 Std.)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Las Vegas mit Edelweiss als Direktflug ca. 11,5 Std. (Sommer 2026: Mo, Mi und Sa, Abflug ca. 13.55 Uhr, Ankunft ca. 16.25 Uhr Ortszeit, Zeitverschiebung −9 Std.; sonst mit Umstieg ca. 14–17 Std.). Inlandflug Miami–Washington am Mi, 14.07.2027 nonstop ca. 2,5–3 Std. (American, Delta, viele Flüge pro Tag). Rückflug: New York (JFK)–Zürich mit SWISS als Direktflug täglich, ca. 7,75–8 Std., am Mi, 21.07.2027 (Sommer 2026: Abflug ca. 16.15 Uhr, Ankunft ca. 6.10 Uhr). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Hitze und Hurrikane",
      "Im Südwesten Ende Juni 38–45 °C. Texas, die Golfküste und Florida sind im Juli ca. 32–33 °C heiss und sehr schwül, mit fast täglichen Gewittern am Nachmittag. Die Hurrikansaison dauert von Juni bis November, die meisten Stürme kommen aber von Mitte August bis Mitte Oktober (Höhepunkt um den 10. September); im Juli ist das Risiko klein, aber nicht null: Reiseversicherung und flexible Buchungen."
    ],
    [
      "Vorab buchen",
      "Einwegmiete Las Vegas–Miami (Gebühr vergleichen), Unterkunft in Monument Valley (oft Monate im Voraus), Meow Wolf, Space Center Houston, Sumpftour in New Orleans, Unterkunft in Destin, Universal und Kennedy Space Center, Schnorcheltour in Key Largo, Inlandflug Miami–Washington (Gepäck einrechnen), Air and Space Museum, Amtrak Washington–New York, Aussichtsplattform und Broadway in New York."
    ],
    [
      "Optional",
      "Bryce Canyon (ab Zion, ca. 2 Std.), Page mit Lake Powell und Antelope Canyon (eine Nacht mehr zwischen Zion und Monument Valley), Grand Canyon (ebenfalls mit einer Nacht mehr), Santa Fe mit eigener Nacht, Carlsbad Caverns (auf der Fahrt nach Fort Stockton), Galveston (Strand, ab Houston), Siesta Key oder Key Largo mit eigenen Nächten, Philadelphia (Halt mit dem Zug)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Mietwagen von Las Vegas nach Miami, dann mit dem Flugzeug nach Washington und mit dem Zug nach New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "air", "train"],
    karten: [
      {datei: "karten/usa.svg"},
      {titel: "Südwesten im Detail (Stationen 1 bis 5)", datei: "karten/usa-suedwesten.svg"},
      {titel: "Von Texas bis New York im Detail (Stationen 6 bis 13)", datei: "karten/usa-osten.svg"}
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
      "Drei Nächte an den weissen Stränden bei Destin, dazu Miami Beach und ein Schnorcheltag in Key Largo (Wasser ca. 29–31 °C)."
    ],
    [
      "Action und Freizeitparks",
      "Las Vegas, Meow Wolf in Santa Fe, UFO-Museum in Roswell, Space Center Houston, Sumpftour in Louisiana, Universal und Kennedy Space Center in Orlando, Airboat in den Everglades, Broadway."
    ],
    [
      "Städte und Kultur",
      "Las Vegas, Albuquerque und Santa Fe, Navajo Nation, San Antonio mit dem Alamo, Houston, New Orleans mit Jazz, Miami, Washington mit den Smithsonian-Museen, New York."
    ],
    ["Ruhetage", "Zion, Albuquerque, Destin und Miami haben mehrere Nächte; im Osten kein Auto mehr."]
  ],
  stationenIntro: "Dreizehn Stationen von Las Vegas bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Las Vegas",
      land: "us",
      region: "Nevada",
      datum: "19.–21. Juni",
      naechte: "2 Nächte",
      anreise: "Direktflug Zürich–Las Vegas am Sa, 19.06.2027 (Edelweiss, ca. 11,5 Std.; im Sommer 2026 Mo, Mi und Sa, Abflug ca. 13.55 Uhr, Ankunft ca. 16.25 Uhr), Zeitverschiebung −9 Std. Mietwagen am Flughafen abholen (Einwegmiete bis Washington).",
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
      datum: "21.–23. Juni",
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
      name: "Monument Valley (Navajo Nation)",
      land: "us",
      region: "Utah und Arizona",
      datum: "23.–24. Juni",
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
      nr: 4,
      name: "Albuquerque",
      land: "us",
      region: "New Mexico",
      datum: "24.–26. Juni",
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
      nr: 5,
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
      nr: 6,
      name: "San Antonio",
      land: "us",
      region: "Texas",
      datum: "28.–30. Juni",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Fort Stockton", datum: "27.–28. Juni"},
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
      nr: 7,
      name: "Houston",
      land: "us",
      region: "Texas",
      datum: "30. Juni–2. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von San Antonio über die Interstate 10 (ca. 3–3,5 Std., ca. 320 km).",
      text: "Die Raumfahrtstadt: Im Space Center Houston steht man in der Halle der Saturn-V-Rakete und neben dem Kontrollraum der Mondlandungen.",
      teens: "Space Center Houston mit Tram-Tour zum Mission Control und zur Saturn-V-Halle, Museum District, Abend am Buffalo Bayou.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Space Center Houston (ca. 40 Min. südöstlich der Stadt), ein halber Tag Museum District oder Strand in Galveston (ca. 1 Std.).",
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
      nr: 8,
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
      nr: 9,
      name: "Destin (Golfküste)",
      land: "us",
      region: "Florida Panhandle",
      datum: "4.–7. Juli",
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
      datum: "7.–10. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Destin über die Interstate 10 und die Interstate 75 nach Orlando (ca. 6–7 Std., ca. 650 km). In Orlando gilt Eastern-Zeit, die Uhr springt +1 Std.",
      text: "Hauptstadt der Freizeitparks und Ausgangspunkt zum Kennedy Space Center, von wo die Raketen starten. Für die Teenager einer der Höhepunkte der Reise.",
      teens: "Universal Studios und Islands of Adventure (Harry Potter), Kennedy Space Center mit der Saturn-V-Rakete und dem Space Shuttle Atlantis, mit Glück ein Raketenstart.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Universal (beide Parks), ein Tag Kennedy Space Center oder ein zweiter Parktag, ein ruhiger Tag am Pool.",
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
        "Flüge Zürich–Las Vegas und New York–Zürich",
        "4’000–6’000",
        "5’000",
        "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      ["Inlandflug Miami–Washington", "400–900", "600", "4 Personen inklusive aufgegebenem Gepäck"],
      [
        "Mietwagen (Einwegmiete, Benzin, Parken, Maut)",
        "3’500–6’000",
        "4’600",
        "Las Vegas–Miami (ca. 25 Tage, ca. 3’050 Meilen); die Rückgabegebühr für eine Einwegmiete quer durchs Land kann bis gegen 1’500 USD betragen"
      ],
      [
        "Zug und lokale Verkehrsmittel",
        "600–1’300",
        "900",
        "Amtrak Washington–New York, Metro und U-Bahn, Taxi zum Flughafen"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "7’400–11’800",
        "9’200",
        "ca. 130–600 CHF pro Nacht; Monument Valley, Destin, Miami, Washington und New York am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’500–8’000", "6’000", "ca. 140–250 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)",
        "4’300–7’700",
        "5’800",
        "Pass 250 USD, Meow Wolf, Sandia Peak Tramway, Space Center Houston, Sumpftour, Universal, Everglades, Schnorcheltour, Aussichtsplattform und Broadway in New York usw."
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
      ["1. Las Vegas (2)", "710–1’310"],
      ["2. Zion National Park (2)", "730–1’180"],
      ["3. Monument Valley (1)", "540–1’040"],
      ["4. Albuquerque (2)", "650–1’100"],
      ["5. White Sands (1)", "300–520"],
      ["Zwischenübernachtung Fort Stockton (1)", "150–250"],
      ["6. San Antonio (2)", "500–850"],
      ["7. Houston (2)", "650–1’100"],
      ["8. New Orleans (2)", "600–1’000"],
      ["9. Destin (3)", "900–1’500"],
      ["10. Orlando (3)", "1’350–2’400"],
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
    total: "35’050",
    spanne: "26’900–45’700",
    proTag: "ca. 1’100 CHF pro Tag, ca. 8’800 pro Person"
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
      "Familienvan oder SUV, die Einwegmiete Las Vegas–Miami früh buchen (Rückgabegebühr oft hoch, Anbieter vergleichen). In Florida viele Mautstrassen: Mautpaket des Vermieters klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Den Wagen am Flughafen Miami abgeben; im Osten Flug, Zug, Metro und U-Bahn."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Monsun",
      "Las Vegas, Zion und White Sands erreichen Ende Juni 38–45 °C, ab Juli beginnt im Südwesten der Monsun mit Gewittern und Sturzfluten in Schluchten (z.B. Narrows in Zion). Texas, die Golfküste und Florida sind heiss und schwül, mit Gewittern am Nachmittag; Juni bis November ist Hurrikansaison, der Höhepunkt kommt erst ab Mitte August."
    ],
    [
      "Zeitzonen",
      "Las Vegas Pazifikzeit, Utah Mountain-Zeit, Arizona ohne Sommerzeit, Navajo Nation mit Sommerzeit, New Mexico Mountain-Zeit, Texas, Louisiana und die Golfküste bei Destin Central-Zeit, Orlando, Miami und der Osten Eastern-Zeit. Zur Schweiz sind es −6 bis −9 Stunden."
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
