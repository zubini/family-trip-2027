// Reise: USA von Las Vegas über New Orleans nach New York (Mietwagen bis Washington, Zug nach New York, kein Inlandflug)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa = {
  titel: "Von Las Vegas über New Orleans nach New York",
  menu: "USA",
  untertitel: "Fünf Wochen USA ohne Inlandflug: mit dem Mietwagen von Las Vegas durch die Nationalparks im Südwesten, über Texas und New Orleans an die Golfküste, durch die Great Smoky Mountains und Shenandoah nach Washington, dann mit dem Zug nach New York.",
  zeitraum: "Sa, 19.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    datei: "USA 10187 Horseshoe Bend Luca Galuzzi 2007.jpg",
    suche: "Horseshoe Bend Arizona|Monument Valley sunset",
    stichwort: "horseshoe bend|monument valley",
    alt: "Horseshoe Bend, Arizona"
  },
  planIntro: "Abflug ab Zürich nach Las Vegas am Sa, 19.06.2027, Rückflug ab New York am Fr, 23.07.2027 (Ankunft Sa, 24.07.2027). Dazwischen eine Einwegmiete Las Vegas–Washington und der Zug nach New York, kein Inlandflug. Ein Klick auf eine Station springt zur Beschreibung.",
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
      info: "Flug ab Zürich (ca. 11,5 Std.), Mietwagen am Flughafen abholen (Einwegmiete bis Washington)"
    },
    {datum: "21.–23. Juni", name: "2. Zion National Park", naechte: 2, info: "Mietwagen (ca. 2,5–3 Std.), Uhr +1 Std."},
    {datum: "23.–24. Juni", name: "3. Page und Lake Powell", naechte: 1, info: "Mietwagen (ca. 2,5 Std.), Uhr −1 Std."},
    {datum: "24.–26. Juni", name: "4. Grand Canyon (South Rim)", naechte: 2, info: "Mietwagen (ca. 2,5 Std.)"},
    {datum: "26.–27. Juni", name: "5. Monument Valley", naechte: 1, info: "Mietwagen (ca. 3,5 Std.), Uhr +1 Std."},
    {datum: "27.–29. Juni", name: "6. Santa Fe", naechte: 2, info: "Mietwagen (ca. 6,5–7 Std.)"},
    {datum: "29.–30. Juni", name: "7. White Sands (Alamogordo)", naechte: 1, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "30. Juni–1. Juli", name: "8. Carlsbad Caverns", naechte: 1, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {
      datum: "1.–2. Juli",
      name: "Zwischenübernachtung Fort Stockton",
      naechte: 1,
      info: "Mietwagen (ca. 2,5–3,5 Std.), Uhr +1 Std."
    },
    {datum: "2.–4. Juli", name: "9. San Antonio", naechte: 2, info: "Mietwagen (ca. 5–5,5 Std.)"},
    {datum: "4.–5. Juli", name: "10. Houston", naechte: 1, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {datum: "5.–7. Juli", name: "11. New Orleans", naechte: 2, info: "Mietwagen (ca. 5–6 Std.)"},
    {datum: "7.–10. Juli", name: "12. Destin (Golfküste)", naechte: 3, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "10.–11. Juli", name: "13. Atlanta", naechte: 1, info: "Mietwagen (ca. 5–5,5 Std.), Uhr +1 Std."},
    {datum: "11.–14. Juli", name: "14. Great Smoky Mountains", naechte: 3, info: "Mietwagen (ca. 3,75–4,5 Std.)"},
    {datum: "14.–16. Juli", name: "15. Shenandoah (Luray)", naechte: 2, info: "Mietwagen (ca. 6–7,5 Std.)"},
    {
      datum: "16.–19. Juli",
      name: "16. Washington, D.C.",
      naechte: 3,
      info: "Mietwagen (ca. 1,75–2 Std.), Rückgabe in Washington"
    },
    {datum: "19.–23. Juli", name: "17. New York", naechte: 4, info: "Amtrak-Zug (ca. 3–3,5 Std.); Rückflug 23. Juli"}
  ],
  rueckflug: {
    datum: "23. Juli",
    name: "Flug New York–Zürich",
    info: "Direktflug New York (JFK)–Zürich mit SWISS, täglich; im Sommer 2026 Abflug ca. 16.15 Uhr, ca. 7,75–8 Std., Ankunft in Zürich am Sa, 24.07.2027 um ca. 6 Uhr"
  },
  planHinweise: [
    [
      "Gesamt",
      "34 Nächte, 17 Stationen und eine Zwischenübernachtung (Fort Stockton). Eine Einwegmiete Las Vegas–Washington (ca. 27 Tage) mit ca. 5’900 km und ca. 63–66 Std. reiner Fahrzeit an 16 Fahrtagen, realistisch mit Pausen, Tanken, Stau und Fahrten vor Ort ca. 74–78 Std. im Auto. Dazu der Zug nach New York (ca. 3–3,5 Std.). Die längsten Fahrtage: Monument Valley–Santa Fe (ca. 6,5–7 Std.), Great Smoky Mountains–Luray (ca. 6–7,5 Std.), Houston–New Orleans (ca. 5–6 Std.), Destin–Atlanta (ca. 5–5,5 Std.), Fort Stockton–San Antonio (ca. 5–5,5 Std.)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Las Vegas mit Edelweiss als Direktflug ca. 11,5 Std. (Sommer 2026: Mo, Mi und Sa, Abflug ca. 13.55 Uhr, Ankunft ca. 16.25 Uhr Ortszeit, Zeitverschiebung −9 Std.; sonst mit Umstieg ca. 14–17 Std.). Rückflug: New York (JFK)–Zürich mit SWISS als Direktflug täglich, ca. 7,75–8 Std., am Fr, 23.07.2027 (Sommer 2026: Abflug ca. 16.15 Uhr, Ankunft ca. 6.10 Uhr; Zeitverschiebung +6 Std.). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Vorab buchen",
      "Einwegmiete Las Vegas–Washington, Unterkünfte im Grand Canyon und in Monument Valley (oft Monate im Voraus), Antelope-Canyon-Tour, Meow Wolf, Zeitfenster für Carlsbad Caverns, Space Center Houston, Unterkunft in Destin, Parkticket für die Great Smoky Mountains, Dollywood, Air and Space Museum, Amtrak Washington–New York, Aussichtsplattform und Broadway in New York."
    ],
    [
      "Optional",
      "Bryce Canyon (ab Zion, ca. 2 Std.), Big Bend National Park (ab Fort Stockton, Umweg), Galveston (Strand, ab Houston), Memphis und Nashville statt Atlanta (Musikroute), Blue Ridge Parkway (zwischen den Smokies und Shenandoah), Mount Vernon (ab Washington), Philadelphia (Halt mit dem Zug)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Mietwagen von Las Vegas nach Washington, dann mit dem Zug nach New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "train"],
    karten: [
      {datei: "karten/usa.svg"},
      {titel: "Südwesten im Detail (Stationen 1 bis 8)", datei: "karten/usa-suedwesten.svg"},
      {titel: "Von Texas bis New York im Detail (Stationen 9 bis 17)", datei: "karten/usa-osten.svg"}
    ]
  },
  abwechslungIntro: "Nach langen Fahrtagen jeweils einen ruhigen Tag einplanen. Wüste und Nationalparks, Städte des Südens, Strand und grüne Berge wechseln sich ab, zum Schluss Washington und New York ohne Auto.",
  abwechslung: [
    [
      "Naturwunder",
      "Zion, Antelope Canyon und Horseshoe Bend, Grand Canyon, Monument Valley, White Sands, Carlsbad Caverns, Great Smoky Mountains, Shenandoah mit den Luray Caverns."
    ],
    ["Strand", "Drei Nächte an den weissen Stränden der Golfküste bei Destin (Wasser ca. 28–30 °C), dazu Lake Powell."],
    [
      "Action und Freizeitparks",
      "Las Vegas, Meow Wolf in Santa Fe, Space Center Houston, Georgia Aquarium, Dollywood, Narrows in Zion."
    ],
    [
      "Städte und Kultur",
      "Las Vegas, Santa Fe, Navajo Nation, San Antonio mit dem Alamo, New Orleans mit Jazz, Atlanta, Washington mit den Smithsonian-Museen, New York."
    ],
    [
      "Ruhetage",
      "Santa Fe, Destin und die Smokies sorgen für Erholung zwischen den Fahrtagen; im Osten kein Auto mehr."
    ]
  ],
  stationenIntro: "Siebzehn Stationen von Las Vegas bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
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
      name: "Page und Lake Powell",
      land: "us",
      region: "Arizona",
      datum: "23.–24. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Springdale über den Zion–Mount Carmel Highway und Kanab nach Page (ca. 2,5 Std., ca. 180 km). Arizona hat keine Sommerzeit, die Uhr springt −1 Std.",
      text: "Kleinstadt am Lake Powell mit zwei weltberühmten Fotomotiven: dem Horseshoe Bend und dem Antelope Canyon. Beides liegt auf oder neben Navajo-Land.",
      teens: "Geführte Tour durch den Antelope Canyon (Zeitfenster vorab buchen), Horseshoe Bend zum Sonnenuntergang, Bootsfahrt oder Baden im Lake Powell.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag Antelope Canyon (Tour mit Zeitfenster), am Abend Horseshoe Bend, am Morgen ein Bad im Lake Powell.",
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
      datum: "24.–26. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Page über den Highway 89 und Cameron zum Südrand (ca. 2,5 Std., ca. 220 km).",
      text: "Der Südrand des Grand Canyon ist der klassische Zugang: Aussichtspunkte direkt am Rand, Wanderwege und ein kostenloser Parkshuttle. Zwei Nächte am Rand, am besten im Park oder im nahen Tusayan.",
      teens: "Mather Point und Rim Trail (flach, grosse Aussicht), Sonnenuntergang am Hopi Point, Junior-Ranger-Programm im Visitor Center, Desert View Watchtower, ein Stück den Bright Angel Trail hinunterwandern (nicht bis zum Fluss).",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Sonnenuntergang und Sonnenaufgang am Rim, ein Tag Rim Trail und ein Stück Bright Angel Trail am Morgen, Desert View Drive.",
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
      datum: "26.–27. Juni",
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
      name: "Santa Fe",
      land: "us",
      region: "New Mexico",
      datum: "27.–29. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Monument Valley über Shiprock und Farmington nach Santa Fe (ca. 6,5–7 Std., ca. 620 km). Einer der längsten Fahrtage: früh starten.",
      text: "Die Hauptstadt von New Mexico auf rund 2’100 Metern Höhe: Lehmziegel-Architektur, Kunstgalerien und die Landschaft des Südwestens. Nach der Wildnis kommt hier wieder Stadtleben.",
      teens: "Meow Wolf «House of Eternal Return» (immersive Kunstwelt, Tickets vorab), Bandelier National Monument (Felswohnungen und Leitern), Plaza und Canyon Road, Bradbury Science Museum in Los Alamos.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Plaza, Meow Wolf und Pueblo-Felswohnungen bei Bandelier; Ruhetag nach der langen Fahrt.",
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
      nr: 7,
      name: "White Sands (Alamogordo)",
      land: "us",
      region: "New Mexico",
      datum: "29.–30. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Santa Fe über Albuquerque, die Interstate 25 und die US-54 nach Alamogordo (ca. 4–4,5 Std., ca. 360 km).",
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
      datum: "30. Juni–1. Juli",
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
      datum: "2.–4. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Fort Stockton", datum: "1.–2. Juli"},
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
      datum: "4.–5. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von San Antonio über die Interstate 10 (ca. 3–3,5 Std., ca. 320 km).",
      text: "Die Raumfahrtstadt: Im Space Center Houston steht man in der Halle der Saturn-V-Rakete und neben dem Kontrollraum der Mondlandungen.",
      teens: "Space Center Houston mit Tram-Tour zum Mission Control und zur Saturn-V-Halle, Museum District, Abend am Buffalo Bayou.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht; das Space Center liegt ca. 40 Min. südöstlich der Stadt und eignet sich auch als Halt auf der Anreise.",
        "<strong>Hitze:</strong> Heiss und feucht; das Space Center ist zum grossen Teil klimatisiert.",
        "<strong>4. Juli:</strong> Am Nationalfeiertag (Sonntag) gibt es abends Feuerwerk; Strassen und Unterkünfte sind voll, früh buchen."
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
      datum: "5.–7. Juli",
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
      datum: "7.–10. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von New Orleans über die Interstate 10 an die Golfküste (ca. 4–4,5 Std., ca. 400 km).",
      text: "Weisser Quarzsand und smaragdgrünes Wasser am Golf von Mexiko: drei Strandtage nach Wüste und Städten, bevor es in die Berge geht.",
      teens: "Baden und Sandburgen am Henderson Beach, Delfin-Bootstour, Schnorcheln an den Jetties von Destin (ruhiges Wasser), Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte am Strand, z.B. in Destin oder Santa Rosa Beach: Baden, Schnorcheln an den Steinmolen, Bootstour zu den Delfinen.",
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
      nr: 13,
      name: "Atlanta",
      land: "us",
      region: "Georgia",
      datum: "10.–11. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Destin über Montgomery nach Atlanta (ca. 5–5,5 Std., ca. 535 km). In Georgia gilt die Eastern-Zeit, die Uhr springt +1 Std.",
      text: "Die grösste Stadt der Südstaaten: der Olympiapark der Spiele von 1996, eines der grössten Aquarien der Welt und die Geschichte der Bürgerrechtsbewegung um Martin Luther King.",
      teens: "Georgia Aquarium mit Walhaien, World of Coca-Cola (Getränke aus aller Welt probieren), Wasserspiele im Centennial Olympic Park, Geburtshaus von Martin Luther King.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag Aquarium oder World of Coca-Cola, am Abend der Olympiapark, am Morgen weiter in die Berge.",
        "<strong>Eintritte:</strong> Georgia Aquarium je nach Tag ca. 55–65 USD, World of Coca-Cola ca. 25 USD ab 13 Jahren; Kombiticket online. Beides liegt direkt am Olympiapark. Preise vorab prüfen.",
        "<strong>Verkehr:</strong> Im Grossraum Atlanta oft Stau; Hotel mit Parkplatz in der Innenstadt wählen."
      ],
      ausserdem: "Stone Mountain Park, Atlanta BeltLine (Spazierweg), Zoo Atlanta, Martin Luther King Jr. National Historical Park (gratis).",
      bilder: [
        {titel: "Georgia Aquarium", suche: "Georgia Aquarium whale shark", stichwort: "aquarium|whale shark"},
        {titel: "Centennial Olympic Park", suche: "Centennial Olympic Park Atlanta", stichwort: "olympic|atlanta"},
        {titel: "World of Coca-Cola", suche: "World of Coca-Cola Atlanta", stichwort: "coca"},
        {titel: "Skyline", suche: "Atlanta skyline", stichwort: "atlanta"},
        {titel: "Martin Luther King", suche: "Martin Luther King Jr National Historical Park", stichwort: "king"},
        {titel: "Stone Mountain", suche: "Stone Mountain Georgia", stichwort: "stone mountain"}
      ]
    },
    {
      nr: 14,
      name: "Great Smoky Mountains (Gatlinburg)",
      ersatzsuche: "Great Smoky Mountains|Gatlinburg",
      land: "us",
      region: "Tennessee",
      datum: "11.–14. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Atlanta über die Interstate 75, Chattanooga und Knoxville nach Gatlinburg (ca. 3,75–4,5 Std., ca. 315 km).",
      text: "Der meistbesuchte Nationalpark der USA: bewaldete Berge im Dunst, Wasserfälle, Schwarzbären und alte Farmhäuser im Tal Cades Cove. Nach Wüste und Golfküste grün und etwas kühler.",
      teens: "Wanderung zum Felsbogen Arch Rock am Alum Cave Trail, Aussichtsturm auf dem Kuwohi (früher Clingmans Dome), Rundfahrt durch Cades Cove mit Bären und Hirschen, Hängebrücken in Anakeesta, Achterbahnen in Dollywood.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Kuwohi und Alum Cave, ein Tag Cades Cove, ein Tag Dollywood oder Anakeesta.",
        "<strong>Parken:</strong> Kein Eintritt, aber ab 15 Min. Parken ein Parkticket (5 USD pro Tag, 15 USD pro Woche, online auf recreation.gov); der Nationalpark-Jahrespass gilt dafür nicht.",
        "<strong>Hinweis:</strong> Cades Cove war 2026 mittwochs für Autos gesperrt (nur Velos); der Weg zu den Laurel Falls ist seit Januar 2025 wegen Bauarbeiten zu. Für 2027 vorab prüfen.",
        "<strong>Freizeitparks:</strong> Dollywood 2026 ab ca. 95 USD pro Person (ab 10 Jahren Erwachsenenpreis), Anakeesta ca. 35–40 USD. Preise vorab prüfen."
      ],
      ausserdem: "Pigeon Forge, Ripley’s Aquarium of the Smokies, Roaring Fork Motor Nature Trail, Newfound Gap.",
      bilder: [
        {titel: "Great Smoky Mountains", suche: "Great Smoky Mountains National Park", stichwort: "smoky"},
        {titel: "Cades Cove", suche: "Cades Cove", stichwort: "cades"},
        {titel: "Kuwohi", suche: "Clingmans Dome observation tower", stichwort: "clingmans|kuwohi"},
        {titel: "Schwarzbär", suche: "black bear Great Smoky Mountains", stichwort: "bear"},
        {titel: "Alum Cave", suche: "Alum Cave Trail Arch Rock", stichwort: "alum|arch rock"},
        {titel: "Gatlinburg", suche: "Gatlinburg Tennessee", stichwort: "gatlinburg"}
      ]
    },
    {
      nr: 15,
      name: "Shenandoah (Luray)",
      ersatzsuche: "Shenandoah National Park|Luray",
      land: "us",
      region: "Virginia",
      datum: "14.–16. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen über die Interstate 40 und die Interstate 81 durch das Shenandoah-Tal nach Luray (ca. 6–7,5 Std., ca. 630 km). Einer der längsten Fahrtage: früh starten.",
      text: "Ein langer Bergrücken in Virginia mit der Panoramastrasse Skyline Drive, Wasserfällen, Hirschen und weiter Aussicht über das Shenandoah-Tal. Bei Luray liegen grosse Tropfsteinhöhlen.",
      teens: "Luray Caverns, Wanderung zu den Dark Hollow Falls, Aussicht vom Stony Man, Hirsche am Strassenrand in der Abenddämmerung.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Skyline Drive mit kurzen Wanderungen, ein halber Tag Luray Caverns.",
        "<strong>Eintritt:</strong> 30 USD pro Auto für 7 Tage, mit dem Jahrespass inklusive (keine Zusatzgebühr für Nicht-Residenten). Der Skyline Drive ist 105 Meilen (ca. 170 km) lang, Tempo 35 mph, ganze Strecke ca. 3 Std.",
        "<strong>Luray Caverns:</strong> ca. 36 USD Erwachsene, ca. 18 USD Kinder von 6 bis 12 (die Tochter zahlt den Erwachsenenpreis); Preise vorab prüfen.",
        "<strong>Wandern:</strong> Dark Hollow Falls ca. 2,3 km hin und zurück, der Rückweg ist steil; Wasser mitnehmen."
      ],
      ausserdem: "Big Meadows, Skyland, Front Royal, Weingüter im Shenandoah-Tal.",
      bilder: [
        {titel: "Skyline Drive", suche: "Skyline Drive Shenandoah", stichwort: "skyline|shenandoah"},
        {titel: "Luray Caverns", suche: "Luray Caverns", stichwort: "luray"},
        {titel: "Dark Hollow Falls", suche: "Dark Hollow Falls Shenandoah", stichwort: "dark hollow|falls"},
        {titel: "Stony Man", suche: "Stony Man Shenandoah", stichwort: "stony man"},
        {titel: "Shenandoah-Tal", suche: "Shenandoah Valley view", stichwort: "shenandoah"},
        {titel: "Hirsch", suche: "deer Shenandoah National Park", stichwort: "deer"}
      ]
    },
    {
      nr: 16,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "16.–19. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Luray über die US-211 und die Interstate 66 nach Washington (ca. 1,75–2 Std., ca. 150 km; vor der Stadt oft Stau). Mietwagen bei der Ankunft zurückgeben, z.B. am Flughafen Reagan National oder an der Union Station; in der Stadt Metro, Velo oder zu Fuss.",
      text: "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
      teens: "National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag National Mall und Denkmäler, ein Tag Museen (Air and Space, Natural History), ein halber Tag Arlington oder Georgetown.",
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
      datum: "19.–23. Juli",
      naechte: "4 Nächte, Rückflug 23. Juli",
      anreise: "Amtrak-Zug ab Washington Union Station nach New York Penn Station (Northeast Regional ca. 3,5 Std., Acela ca. 3 Std.; viele Züge pro Tag). Rückflug direkt ab John F. Kennedy (SWISS) am Fr, 23.07.2027 am Nachmittag (Sommer 2026 ca. 16.15 Uhr; ca. 7,75–8 Std., Ankunft in Zürich am Sa, 24.07.2027 um ca. 6 Uhr). Zum Flughafen JFK mit dem AirTrain oder Taxi ca. 1–1,5 Std., also am Mittag los.",
      text: "Das grosse Finale: Wolkenkratzer, Parks, Museen und Hafenpanorama.",
      teens: "Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building oder Top of the Rock, Broadway-Musical, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: Tag 1 Midtown und Aussichtsplattform, Tag 2 Freiheitsstatue und Lower Manhattan (9/11 Memorial), Tag 3 Central Park und Museen, Tag 4 Brooklyn Bridge und Wunschprogramm der Kids; am Abreisetag nur noch der Vormittag (Gepäck im Hotel lassen).",
        "<strong>Ohne Auto:</strong> In Manhattan kostet ein Parkplatz ca. 35–85 USD pro Nacht, dazu die Staugebühr von 9 USD pro Tag; darum endet die Mietwagenfahrt in Washington.",
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
  abschluss: "Direktflug ab New York (JFK) nach Zürich am Fr, 23.07.2027 am Nachmittag (ca. 7,75–8 Std.), Ankunft am Sa, 24.07.2027 am frühen Morgen, dann mit der Bahn nach Brig-Glis.",
  budgetIntro: "Mittelklasse inklusive Flüge, Mietwagen, Zug, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Las Vegas und New York–Zürich",
        "4’000–6’000",
        "5’000",
        "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Mietwagen (Einwegmiete, Benzin, Parken, Maut)",
        "3’500–6’000",
        "4’600",
        "Las Vegas–Washington (ca. 27 Tage, ca. 3’700 Meilen); die Rückgabegebühr für eine Einwegmiete quer durchs Land kann bis gegen 1’500 USD betragen"
      ],
      [
        "Zug und lokale Verkehrsmittel",
        "600–1’400",
        "900",
        "Amtrak Washington–New York, Metro und U-Bahn, Taxi zum Flughafen"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "8’400–13’300",
        "10’450",
        "ca. 150–700 CHF pro Nacht; Nationalparks, Destin, Washington und New York am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’750–8’150", "6’200", "ca. 140–250 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)",
        "4’600–8’300",
        "6’100",
        "Pass 250 USD, Antelope Canyon, Meow Wolf, Space Center Houston, Georgia Aquarium, Dollywood, Luray Caverns, Aussichtsplattform und Broadway in New York usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "900–1’800",
        "1’300",
        "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"
      ],
      ["Reserve (ca. 10 %)", "2’700–4’550", "3’500", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Las Vegas (2)", "710–1’310"],
      ["2. Zion National Park (2)", "730–1’180"],
      ["3. Page und Lake Powell (1)", "440–740"],
      ["4. Grand Canyon (2)", "830–1’430"],
      ["5. Monument Valley (1)", "540–1’040"],
      ["6. Santa Fe (2)", "780–1’330"],
      ["7. White Sands (1)", "300–520"],
      ["8. Carlsbad Caverns (1)", "250–400"],
      ["Zwischenübernachtung Fort Stockton (1)", "150–250"],
      ["9. San Antonio (2)", "500–850"],
      ["10. Houston (1)", "300–500"],
      ["11. New Orleans (2)", "600–1’000"],
      ["12. Destin (3)", "900–1’500"],
      ["13. Atlanta (1)", "350–600"],
      ["14. Great Smoky Mountains (3)", "1’000–1’700"],
      ["15. Shenandoah (2)", "600–1’000"],
      ["16. Washington, D.C. (3)", "1’280–2’180"],
      ["17. New York (4)", "2’650–4’420"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: ein Zimmer mit zwei Queen-Betten, Motels mit Frühstück, Imbiss statt Restaurant, Nationalpark-Jahrespass früh kaufen, die vielen Gratis-Museen in Washington nutzen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 34,
    total: "38’050",
    spanne: "29’500–49’500",
    proTag: "ca. 1’120 CHF pro Tag, ca. 9’500 pro Person"
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
      "Familienvan oder SUV, die Einwegmiete Las Vegas–Washington früh buchen (Rückgabegebühr oft hoch, Anbieter vergleichen). Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Vollkasko prüfen, Maut im Osten einplanen. Den Wagen in Washington abgeben: in New York sind Parkplätze sehr teuer."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Monsun",
      "Las Vegas, Zion und White Sands erreichen Ende Juni 38–45 °C, ab Juli beginnt im Südwesten der Monsun mit Gewittern und Sturzfluten in Schluchten (Narrows, Antelope Canyon). Texas und die Golfküste sind heiss und schwül, Juni bis November ist Hurrikansaison. In den Smokies und in Shenandoah ist es kühler, mit Gewittern am Nachmittag."
    ],
    [
      "Zeitzonen",
      "Las Vegas Pazifikzeit, Utah Mountain-Zeit, Arizona ohne Sommerzeit, Navajo Nation mit Sommerzeit, New Mexico Mountain-Zeit, Texas, Louisiana und die Golfküste bei Destin Central-Zeit, Georgia, Tennessee, Virginia und der Osten Eastern-Zeit. Zur Schweiz sind es −6 bis −9 Stunden."
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
      "Amtrak-Züge Washington–New York fahren oft (Northeast Regional ca. 3,5 Std., Acela ca. 3 Std.); Tickets früh online buchen, Gepäck selbst tragen."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."
    ],
    ["Handy", "eSIM für die USA vorab kaufen. Offline-Karten für Nationalparks laden, dort gibt es oft keinen Empfang."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
