// Reise: USA Süd von Los Angeles über New Orleans, Key Largo und Miami nach New York (Mietwagen bis Miami, Inlandflug nach New York)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa = {
  titel: "Von Los Angeles über New Orleans und Miami nach New York",
  menu: "USA Süd",
  untertitel: "Fünf Wochen USA: mit dem Mietwagen von Los Angeles über Las Vegas, Kanab, Monument Valley, Albuquerque und White Sands nach Texas, über Austin und New Orleans an den Strand von Destin, nach Orlando, Key Largo und Miami; dann mit dem Flugzeug nach New York.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    datei: "USA 10187 Horseshoe Bend Luca Galuzzi 2007.jpg",
    suche: "Horseshoe Bend Arizona|Monument Valley sunset",
    stichwort: "horseshoe bend|monument valley",
    alt: "Horseshoe Bend, Arizona"
  },
  planIntro: "Abflug ab Zürich nach Los Angeles am Sa, 19.06.2027, Rückflug ab New York am Mi, 21.07.2027 (Ankunft Do, 22.07.2027). Dazwischen eine Einwegmiete Los Angeles–Miami und ein Inlandflug nach New York. Ein Klick auf eine Station springt zur Beschreibung.",
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
    {datum: "21.–23. Juni", name: "2. Las Vegas", naechte: 2, info: "Mietwagen (ca. 4,5–5 Std.)"},
    {datum: "23.–25. Juni", name: "3. Kanab", naechte: 2, info: "Mietwagen (ca. 3–3,5 Std.), Uhr +1 Std."},
    {
      datum: "25.–26. Juni",
      name: "4. Monument Valley",
      naechte: 1,
      info: "Mietwagen über Page (ca. 3,5–4 Std.), Halt am Horseshoe Bend"
    },
    {datum: "26.–28. Juni", name: "5. Albuquerque", naechte: 2, info: "Mietwagen (ca. 5,5–6,5 Std.)"},
    {datum: "28.–29. Juni", name: "6. White Sands (Alamogordo)", naechte: 1, info: "Mietwagen (ca. 3,5–4 Std.)"},
    {
      datum: "29.–30. Juni",
      name: "Zwischenübernachtung Fort Stockton",
      naechte: 1,
      info: "Mietwagen über Roswell (ca. 5,5–6 Std.), Uhr +1 Std."
    },
    {datum: "30. Juni–2. Juli", name: "7. Austin", naechte: 2, info: "Mietwagen (ca. 5 Std.)"},
    {datum: "2.–4. Juli", name: "8. New Orleans", naechte: 2, info: "Mietwagen (ca. 8–8,5 Std., längster Fahrtag)"},
    {datum: "4.–8. Juli", name: "9. Destin (Golfküste)", naechte: 4, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {datum: "8.–11. Juli", name: "10. Orlando", naechte: 3, info: "Mietwagen (ca. 6–7 Std.), Uhr +1 Std."},
    {datum: "11.–14. Juli", name: "11. Key Largo", naechte: 3, info: "Mietwagen (ca. 4,5–5 Std.)"},
    {
      datum: "14.–17. Juli",
      name: "12. Miami",
      naechte: 3,
      info: "Mietwagen (ca. 1–1,25 Std.), Rückgabe am Flughafen am Abreisetag"
    },
    {
      datum: "17.–21. Juli",
      name: "13. New York",
      naechte: 4,
      info: "Inlandflug nonstop (ca. 3–3,5 Std.); Rückflug 21. Juli"
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
      "32 Nächte, 13 Stationen und eine Zwischenübernachtung (Fort Stockton). Eine Einwegmiete Los Angeles–Miami (ca. 28 Tage) mit ca. 5’550 km und ca. 57–60 Std. reiner Fahrzeit an 12 Fahrtagen, realistisch mit Pausen, Tanken, Stau und Fahrten vor Ort ca. 64–70 Std. im Auto. Dazu ein Inlandflug Miami–New York (ca. 3–3,5 Std.). Die längsten Fahrtage: Austin–New Orleans (ca. 8 Std., realistisch ca. 9,5–10 Std.), Destin–Orlando (ca. 6–7 Std.), Monument Valley–Albuquerque (ca. 5,5–6,5 Std.), White Sands–Fort Stockton über Roswell (ca. 5,5–6 Std.), Fort Stockton–Austin (ca. 5 Std.), Orlando–Key Largo (ca. 4,5–5 Std.) und Los Angeles–Las Vegas (ca. 4,5–5 Std., mit Stau ca. 5,5–6,5 Std.)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Los Angeles mit SWISS als Direktflug ca. 12,25 Std. (Sommer 2026: täglich ausser Do, Abflug ca. 13.05 Uhr, Ankunft ca. 16.25 Uhr Ortszeit, Zeitverschiebung −9 Std.). Für Hin- und Rückflug mit SWISS liegt ein Angebot von ca. 4’000 CHF für alle vier vor. Inlandflug Miami–New York am Sa, 17.07.2027 nonstop ca. 3–3,5 Std. (American, Delta und andere, viele Flüge pro Tag nach LaGuardia, JFK oder Newark). Rückflug: New York (JFK)–Zürich mit SWISS als Direktflug täglich, ca. 7,75–8 Std., am Mi, 21.07.2027 (Sommer 2026: Abflug ca. 16.15 Uhr, Ankunft ca. 6.10 Uhr). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Hitze und Hurrikane",
      "In Los Angeles am Meer mild (ca. 22–26 °C), im Südwesten Ende Juni 38–45 °C. Texas, die Golfküste und Florida sind im Juli ca. 32–33 °C heiss und sehr schwül, mit fast täglichen Gewittern am Nachmittag. Die Hurrikansaison dauert von Juni bis November, die meisten Stürme kommen aber von Mitte August bis Mitte Oktober (Höhepunkt um den 10. September); im Juli ist das Risiko klein, aber nicht null: Reiseversicherung und flexible Buchungen."
    ],
    [
      "Vorab buchen",
      "Einwegmiete Los Angeles–Miami (Angebot ca. 3’000 CHF inkl. Versicherung und Einweggebühr), Space Shuttle Endeavour (Zeitfenster), Unterkunft in Monument Valley (oft Monate im Voraus), Meow Wolf, Sumpftour in New Orleans, Unterkunft in Destin (4. Juli) und Key Largo, Universal und Kennedy Space Center, Schnorcheltour in Key Largo, Inlandflug Miami–New York (Gepäck einrechnen), Aussichtsplattform und Broadway in New York."
    ],
    [
      "Optional",
      "Universal Studios Hollywood oder Disneyland (mit einer Nacht mehr in Los Angeles), Zion (ab Kanab ca. 45 Min.) oder Bryce Canyon (ca. 1,25 Std.), beide mit Zusatzgebühr, Page mit Lake Powell und Antelope Canyon (eine Nacht mehr zwischen Kanab und Monument Valley), Grand Canyon (ebenfalls mit einer Nacht mehr), Santa Fe mit eigener Nacht, Carlsbad Caverns (auf der Fahrt nach Fort Stockton), Houston mit Space Center Houston (eine Nacht zwischen Austin und New Orleans, teilt den längsten Fahrtag), New Braunfels mit Tubing und Wasserpark (statt Austin oder mit einer Nacht mehr), Siesta Key mit eigenen Nächten, Washington (ab New York mit dem Zug ca. 3–3,5 Std., auch als Tagesausflug)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Mietwagen von Los Angeles über Las Vegas nach Key Largo und Miami, dann mit dem Flugzeug nach New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "air"],
    karten: [
      {datei: "karten/usa.svg"},
      {titel: "Südwesten im Detail (Stationen 1 bis 6)", datei: "karten/usa-suedwesten.svg"},
      {titel: "Von Texas bis New York im Detail (Stationen 7 bis 13)", datei: "karten/usa-osten.svg"}
    ]
  },
  abwechslungIntro: "Wüste und Nationalparks, Städte des Südens, Strand und Freizeitparks wechseln sich ab, zum Schluss New York ohne Auto.",
  abwechslung: [
    [
      "Naturwunder",
      "Rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak, White Sands, Everglades und das Korallenriff bei Key Largo."
    ],
    [
      "Strand",
      "Santa Monica am Pazifik, vier Nächte an den weissen Stränden bei Destin, drei Nächte in Key Largo mit Schnorcheln am Riff (Wasser ca. 29–31 °C) und Miami Beach."
    ],
    [
      "Action und Freizeitparks",
      "Santa Monica Pier, Las Vegas, Meow Wolf in Santa Fe, UFO-Museum in Roswell, Sumpftour in Louisiana, Universal und Kennedy Space Center in Orlando, Airboat in den Everglades, Broadway."
    ],
    [
      "Städte und Kultur",
      "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Navajo Nation, Austin mit Livemusik, New Orleans mit Jazz, Miami, New York."
    ],
    [
      "Ruhetage",
      "Los Angeles, Las Vegas, Kanab, Albuquerque, Destin (4 Nächte), Orlando, Key Largo und Miami haben mehrere Nächte; in New York kein Auto mehr."
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
      datum: "21.–23. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Los Angeles über die Interstate 15 durch die Mojave-Wüste (ca. 4,5–5 Std., ca. 460 km; realistisch ca. 5,5–6,5 Std., weil die Ausfahrt aus Los Angeles oft staut: früh losfahren). Gleiche Zeitzone.",
      text: "Neonlichter, Hotels wie Freizeitparks und die Wasserspiele des Bellagio: zwei Nächte nur in der Stadt, ohne Ausflüge, bevor es in die Nationalparks geht.",
      teens: "High Roller (Riesenrad) bei Sonnenuntergang, Wasserspiele des Bellagio, Gondelfahrt im Venetian, Lichtshow an der Fremont Street, eine Show am Abend, Hotels als Kulisse.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: am Ankunftsabend Strip und Bellagio, am zweiten Tag Pool und Hotels am Strip (Venetian, Caesars Palace), am Abend High Roller, Fremont Street oder eine Show.",
        "<strong>Hitze:</strong> Im Juli werden oft 40–45 °C erreicht. Aktivitäten morgens und abends, tagsüber klimatisierte Hotels. Viel Wasser trinken.",
        "<strong>Hinweis:</strong> Glücksspiel ist erst ab 21 Jahren erlaubt. Viele Hotels verlangen zusätzlich «Resort Fees» pro Nacht (oft über 40 USD).",
        "<strong>Preise:</strong> Sphere («Postcard from Earth») je nach Platz und Zeit ca. 130–175 USD pro Person, für vier also ca. 520–700 USD; eine grosse Show (z.B. Cirque du Soleil) ähnlich. High Roller ca. 25–40 USD pro Person. Meist reicht eines davon."
      ],
      ausserdem: "Neon Museum (alte Leuchtreklamen), Sphere mit dem Film «Postcard from Earth» (ca. 50 Min.), Shark Reef Aquarium im Mandalay Bay, Achterbahn im New York-New York.",
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
        "<strong>Regeln:</strong> Der Park hat eigene Navajo-Regeln (Eintritt pro Person, seit 01.01.2026 erhöht, Betrag vor Ort prüfen; keine Drohnen, nicht von der Piste abfahren). Der Nationalpark-Jahrespass gilt hier nicht.",
        "<strong>Hinweis:</strong> Die Piste ist bei Regen oft gesperrt. Unterkünfte sind einfach und knapp, früh buchen.",
        "<strong>Jeeptour:</strong> geführte Touren der Navajo je nach Dauer ca. 65–150 USD pro Person, Parkeintritt meist nicht inbegriffen; für vier also ca. 300–600 USD."
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
      name: "White Sands (Alamogordo)",
      land: "us",
      region: "New Mexico",
      datum: "28.–29. Juni",
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
      name: "Austin",
      land: "us",
      region: "Texas",
      datum: "30. Juni–2. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Fort Stockton", datum: "29.–30. Juni"},
      anreise: "Mietwagen von Alamogordo über die US-70 durch Ruidoso nach Roswell (ca. 2 Std., ca. 190 km; Mittagshalt im International UFO Museum), weiter über Artesia, Carlsbad und Pecos auf der US-285 nach Fort Stockton (ca. 3,5–4 Std., ca. 350 km; viel Lastwagenverkehr aus den Ölfeldern, wenig Tankstellen), dort übernachten. In Texas springt die Uhr +1 Std. Am nächsten Tag über die Interstate 10 und durch das Hill Country über Fredericksburg nach Austin (ca. 5 Std., ca. 545 km).",
      text: "Die junge Hauptstadt von Texas: Livemusik, Food Trucks und Barbecue, mitten in der Stadt ein Naturbad mit Quellwasser und ein See zum Paddeln. Im Sommer fliegen am Abend über eine Million Fledermäuse unter einer Brücke aus.",
      teens: "Baden im Quellwasser von Barton Springs (ca. 20 °C), Kajak oder Stand-up-Paddle auf dem Lady Bird Lake, Fledermäuse unter der Congress Avenue Bridge bei Sonnenuntergang, Livemusik und Food Trucks auf der South Congress Avenue, Texas-Barbecue.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte zum Ausruhen nach den langen Fahrtagen durch die Wüste: am Vormittag Barton Springs, am Nachmittag Pool oder Paddeln, am Abend die Fledermäuse und South Congress.",
        "<strong>Fledermäuse:</strong> Die Kolonie fliegt ca. 15–30 Min. nach Sonnenuntergang aus; vom Gehweg der Congress Avenue Bridge oder vom Ufer aus, früh dort sein. Am 4. Juli wegen des Feuerwerks unberechenbar.",
        "<strong>Baden:</strong> Barton Springs ohne Reservation, Ticket vor Ort oder in der App (2026 für Auswärtige ca. 9 USD, früh kommen). Hamilton Pool (Grotte mit Wasserfall, ca. 45 Min.) nur mit Reservation und zeitweise ohne Baden, Stand vorab prüfen.",
        "<strong>Roswell:</strong> Das International UFO Museum (täglich ca. 9–17 Uhr, Eintritt günstig, Angaben 2023: ca. 5–7 USD Erwachsene) liegt auf der Fahrt von White Sands; ca. 1–1,5 Std. einplanen."
      ],
      ausserdem: "Hamilton Pool, McKinney Falls State Park, Texas State Capitol, Bullock Texas State History Museum, New Braunfels mit Tubing (ca. 45 Min.), San Antonio mit River Walk und Alamo (ca. 1,25 Std.).",
      bilder: [
        {titel: "Skyline", suche: "Austin skyline Lady Bird Lake", stichwort: "austin"},
        {titel: "Barton Springs", suche: "Barton Springs Pool", stichwort: "barton springs"},
        {titel: "Fledermäuse", suche: "Congress Avenue Bridge bats Austin", stichwort: "bat"},
        {titel: "Lady Bird Lake", suche: "Lady Bird Lake kayak Austin", stichwort: "lady bird|kayak"},
        {titel: "South Congress", suche: "South Congress Avenue Austin", stichwort: "congress"},
        {titel: "Hamilton Pool", suche: "Hamilton Pool Preserve", stichwort: "hamilton pool"}
      ]
    },
    {
      nr: 8,
      name: "New Orleans",
      land: "us",
      region: "Louisiana",
      datum: "2.–4. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Austin über Houston und die Interstate 10 durch Louisiana (ca. 8 Std. reine Fahrzeit, ca. 820 km; realistisch mit Pausen ca. 9,5–10 Std.). Der längste Fahrtag der Reise: früh losfahren, Houston nicht zur Rushhour durchqueren.",
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
      datum: "4.–8. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen von New Orleans über die Interstate 10 an die Golfküste (ca. 4–4,5 Std., ca. 400 km).",
      text: "Weisser Quarzsand und smaragdgrünes Wasser am Golf von Mexiko: vier Strandtage nach Wüste und Städten, bevor es nach Florida hineingeht.",
      teens: "Baden und Sandburgen am Henderson Beach, Delfin-Bootstour, Schnorcheln an den Jetties von Destin (ruhiges Wasser), Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte am Strand, z.B. in Destin oder Santa Rosa Beach: Baden, Schnorcheln an den Steinmolen, Bootstour zu den Delfinen. Am Anreisetag, dem 4. Juli (Nationalfeiertag), am Abend Feuerwerk am Strand; früh losfahren und Unterkünfte früh buchen.",
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
      datum: "8.–11. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Destin über die Interstate 10 und die Interstate 75 nach Orlando (ca. 6–7 Std., ca. 650 km). In Orlando gilt Eastern-Zeit, die Uhr springt +1 Std.",
      text: "Hauptstadt der Freizeitparks und Ausgangspunkt zum Kennedy Space Center, von wo die Raketen starten. Für die Teenager einer der Höhepunkte der Reise.",
      teens: "Universal Studios und Islands of Adventure (Harry Potter), Kennedy Space Center mit der Saturn-V-Rakete und dem Space Shuttle Atlantis, mit Glück ein Raketenstart.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Kennedy Space Center (ca. 1 Std. östlich; mit Glück ein Raketenstart, Startplan kurz vorher prüfen), ein Tag Universal (beide Parks), ein ruhiger Tag am Pool oder in Cocoa Beach.",
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
      name: "Key Largo",
      land: "us",
      region: "Florida Keys",
      datum: "11.–14. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Orlando über den Florida’s Turnpike auf die erste Insel der Florida Keys (ca. 4,5–5 Std., ca. 475 km, Mautstrasse).",
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
      nr: 12,
      name: "Miami",
      land: "us",
      region: "Florida",
      datum: "14.–17. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Key Largo über die US-1 nach Miami (ca. 1–1,25 Std., ca. 100 km).",
      text: "Art-déco-Häuser und Strand in South Beach, kubanisches Essen in Little Havana und gleich vor der Stadt die Everglades mit Alligatoren und Mangroven.",
      teens: "Airboat-Fahrt und Alligatoren in den Everglades, Strand und Art-déco-Viertel in South Beach, Graffiti-Kunst in Wynwood Walls, Little Havana mit kubanischem Essen.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein halber Tag Everglades mit Airboat-Tour am Rand des Parks (ca. 45 Min. pro Weg, Tour ca. 1 Std.), ein Tag South Beach, ein halber Tag Wynwood und Little Havana.",
        "<strong>Everglades:</strong> Airboat-Touren am Tamiami Trail ausserhalb des Nationalparks ca. 27–37 USD pro Person, ohne Parkeintritt. Optional der Nationalpark selbst mit der Shark Valley Tram (ca. 2 Std., 34 USD Erwachsene, 18 USD Kinder bis 12); Eintritt ca. 35 USD pro Auto plus 100 USD pro Person ab 16 für Nicht-US-Bewohner, mit dem Jahrespass inklusive.",
        "<strong>Wetter:</strong> Heiss und feucht (ca. 33 °C), am Nachmittag oft kurze Gewitter; Juni bis November ist Hurrikansaison, Wetterberichte verfolgen.",
        "<strong>Weiterflug:</strong> Am Sa, 17.07.2027 nonstop nach New York (ca. 3–3,5 Std., z.B. American oder Delta nach LaGuardia oder JFK, viele Flüge pro Tag). Mietwagen vorher am Flughafen zurückgeben."
      ],
      ausserdem: "Vizcaya Museum, Key Biscayne, Frost Science Museum, Shark Valley im Nationalpark (mit Zusatzgebühr).",
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
      nr: 13,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "17.–21. Juli",
      naechte: "4 Nächte, Rückflug 21. Juli",
      anreise: "Inlandflug Miami–New York nonstop (ca. 3–3,5 Std.; viele Flüge pro Tag), vom Flughafen LaGuardia oder JFK mit Taxi oder Bus und U-Bahn in die Stadt (ca. 45–75 Min.). Rückflug direkt ab John F. Kennedy (SWISS) am Mi, 21.07.2027 am Nachmittag (Sommer 2026 ca. 16.15 Uhr; ca. 7,75–8 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 6 Uhr). Zum Flughafen JFK mit dem AirTrain oder Taxi ca. 1–1,5 Std., also am Mittag los.",
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
  budgetIntro: "Mittelklasse inklusive Flüge, Mietwagen, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Los Angeles und New York–Zürich (SWISS)",
        "4’000–4’500",
        "4’000",
        "Angebot für alle vier ca. 4’000 CHF (ca. 1’000 pro Person); bis zur Buchung nicht fest"
      ],
      [
        "Inlandflug Miami–New York",
        "500–850",
        "650",
        "4 Personen ca. 120–200 USD pro Person, dazu ca. 35–40 USD pro aufgegebenem Koffer"
      ],
      [
        "Mietwagen (Einwegmiete)",
        "3’000–3’600",
        "3’300",
        "Angebot Los Angeles–Miami für ca. 25 Tage inkl. Vollkasko, Zusatzhaftpflicht und Einweggebühr ca. 3’000 CHF; jetzt ca. 28 Tage, neu offerieren lassen"
      ],
      [
        "Benzin",
        "420–580",
        "470",
        "ca. 5’550 km, Van oder SUV mit ca. 10–12 l/100 km (ca. 620 Liter); in Kalifornien am teuersten"
      ],
      [
        "Parkieren",
        "500–700",
        "600",
        "Hotels in Los Angeles, New Orleans und Miami Beach oft 35–60 USD pro Nacht, Las Vegas (Strip-Hotels ca. 20–25 USD pro Tag), Austin und Orlando ca. 20–35 USD; Universal, Kennedy Space Center, Strände; Motels meist gratis"
      ],
      [
        "Maut",
        "80–200",
        "120",
        "vor allem in Florida (Turnpike, Orlando, Miami), dazu die Gebühr des Vermieters für die automatische Mauterfassung"
      ],
      [
        "Lokale Verkehrsmittel",
        "250–450",
        "300",
        "U-Bahn und Taxi in New York, Transfer vom Flughafen und zum Flughafen JFK"
      ],
      [
        "Unterkunft (Familienzimmer, 3 Sterne)",
        "7’200–10’500",
        "8’600",
        "ca. 130–500 CHF pro Nacht inkl. Steuern und «Resort Fees» (ein Zimmer mit zwei Queen-Betten); am teuersten New York (ca. 450–550 USD), Destin in der Woche des 4. Juli, Key Largo, Santa Monica und Monument Valley (ca. 350–450 USD)"
      ],
      [
        "Verpflegung (Restaurants, Imbiss, Getränke)",
        "5’000–8’500",
        "6’600",
        "ca. 220–300 USD pro Tag für 4 Personen inkl. Steuern und 15–20 % Trinkgeld (Frühstück oft im Motel inbegriffen, sonst ca. 40–60 USD)"
      ],
      [
        "Aktivitäten und Eintritte",
        "4’300–6’800",
        "5’300",
        "für 4 Personen grob: Universal mit zwei Parks ca. 840 USD, Kennedy Space Center ca. 310 USD, Sphere oder Show in Las Vegas ca. 520–700 USD, Jeeptour Monument Valley ca. 300–600 USD, Broadway ca. 520–800 USD, Freiheitsstatue und Aussichtsplattform ca. 300 USD, Sumpftour und Raddampfer ca. 400 USD, Schnorcheltour ca. 280 USD, Sandia Peak Tramway und Meow Wolf ca. 340 USD, dazu Airboat, Delfin-Tour, Sandboards usw.; zusammen ca. 6’000–6’500 USD"
      ],
      [
        "ESTA, Versicherung, eSIM",
        "400–1’100",
        "700",
        "ESTA ca. 40 USD pro Person, eSIM, Reiseversicherung mit hoher Deckung (falls nicht schon über eine Jahresversicherung abgedeckt)"
      ],
      ["Reserve (ca. 5 %)", "1’350–1’720", "1’360", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Los Angeles (2)", "900–1’590"],
      ["2. Las Vegas (2)", "700–1’300"],
      ["3. Kanab (2)", "550–920"],
      ["4. Monument Valley (1)", "540–1’040"],
      ["5. Albuquerque (2)", "640–1’090"],
      ["6. White Sands (1)", "300–520"],
      ["Zwischenübernachtung Fort Stockton (1)", "150–250"],
      ["7. Austin (2)", "530–900"],
      ["8. New Orleans (2)", "600–990"],
      ["9. Destin (4)", "1’200–1’980"],
      ["10. Orlando (3)", "1’330–2’380"],
      ["11. Key Largo (3)", "1’330–2’120"],
      ["12. Miami (3)", "1’080–1’820"],
      ["13. New York (4)", "2’630–4’380"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Grösste Posten neben Flug und Mietwagen: Unterkunft (Juli ist Hochsaison, viele Hotels verlangen zusätzliche Gebühren), Essen mit Steuer und Trinkgeld und die Eintritte, die in den USA für Teenager meist schon den Erwachsenenpreis kosten.",
      "Sparhebel: ein Zimmer mit zwei Queen-Betten, Motels mit Frühstück, Imbiss statt Restaurant, Gratis-Museen nutzen.",
      "Gerechnet mit ca. 0,83 CHF pro USD (Kurs Oktober 2026); Preise in den USA meist ohne Verkaufssteuer angeschrieben, im Restaurant kommen 15–20 % Trinkgeld dazu.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "32’000",
    spanne: "27’000–39’500",
    proTag: "ca. 1’000 CHF pro Tag, ca. 8’000 pro Person"
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
      "Seit Januar 2026 zahlen Nicht-US-Bewohner ab 16 Jahren in 11 Parks zusätzlich 100 USD pro Person; auf dieser Route nur bei den Optionen Zion, Bryce Canyon oder dem Everglades-Nationalpark. Ohne diese lohnt sich der Jahrespass für Nicht-Residenten (250 USD) nicht: White Sands kostet 25 USD pro Auto. Wer zwei dieser Parks besucht, fährt mit dem Pass günstiger. Für Monument Valley gilt er nicht (Navajo-Nation-Eintritt)."
    ],
    [
      "Mietwagen",
      "Familienvan oder SUV, die Einwegmiete Los Angeles–Miami früh buchen (Angebot ca. 3’000 CHF inkl. Vollkasko, Zusatzhaftpflicht und Einweggebühr; Kaution auf der Kreditkarte). In Florida viele Mautstrassen: Mautpaket des Vermieters klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Den Wagen am Flughafen Miami abgeben; in New York ohne Auto."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Monsun",
      "Las Vegas, Kanab und White Sands (anders als Los Angeles am Meer) erreichen Ende Juni 38–45 °C, ab Juli beginnt im Südwesten der Monsun mit Gewittern und Sturzfluten in Schluchten und Tunneln (z.B. Belly of the Dragon bei Kanab). Texas, die Golfküste und Florida sind heiss und schwül, mit Gewittern am Nachmittag; Juni bis November ist Hurrikansaison, der Höhepunkt kommt erst ab Mitte August."
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
      "Flug nach New York",
      "Inlandflug Miami–New York mit Gepäck buchen (viele Flüge pro Tag, ca. 3–3,5 Std.); vorher den Mietwagen am Flughafen Miami zurückgeben. In New York U-Bahn, Taxi und zu Fuss."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."
    ],
    ["Handy", "eSIM für die USA vorab kaufen. Offline-Karten für Nationalparks laden, dort gibt es oft keinen Empfang."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
