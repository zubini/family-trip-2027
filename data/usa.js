// Reise 3: Las Vegas – New York (quer durch die USA)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa = {
  titel: "Von Las Vegas nach New York",
  menu: "Las Vegas–New York",
  untertitel: "Fünf Wochen quer durch die USA: Nationalparks im Südwesten, Chicago und die Grossen Seen, Niagarafälle, Washington und New York.",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene, 2 Kids",
  titelbild: {
    datei: "USA 10187 Horseshoe Bend Luca Galuzzi 2007.jpg",
    suche: "Horseshoe Bend Arizona|Monument Valley sunset",
    stichwort: "horseshoe bend|monument valley",
    alt: "Horseshoe Bend, Arizona"
  },
  planIntro: "Abflug ab Zürich am Fr, 18.06.2027, Rückflug ab New York am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18. Juni",
    name: "Flug Zürich–Las Vegas",
    info: "Abflug am Fr, 18.06.2027, Direktflug ca. 12 Std. (mit Umstieg ca. 14–17 Std.), Ankunft am selben Tag"
  },
  plan: [
    {datum: "18.–21. Juni", name: "1. Las Vegas", naechte: 3, info: "Mietwagen am Flughafen abholen"},
    {datum: "21.–23. Juni", name: "2. Zion National Park", naechte: 2, info: "Mietwagen ab Las Vegas (ca. 2,5–3 Std.)"},
    {datum: "23.–25. Juni", name: "3. Page und Lake Powell", naechte: 2, info: "Mietwagen (ca. 2,5 Std.)"},
    {datum: "25.–27. Juni", name: "4. Grand Canyon (South Rim)", naechte: 2, info: "Mietwagen (ca. 2,5 Std.)"},
    {datum: "27.–28. Juni", name: "5. Monument Valley", naechte: 1, info: "Mietwagen (ca. 3,5–4 Std.)"},
    {datum: "28.–30. Juni", name: "6. Santa Fe", naechte: 2, info: "Mietwagen (ca. 5,5–6 Std.)"},
    {datum: "30. Juni–1. Juli", name: "7. White Sands (Alamogordo)", naechte: 1, info: "Mietwagen (ca. 4–4,5 Std.)"},
    {
      datum: "1.–2. Juli",
      name: "Zwischenübernachtung Oklahoma City",
      naechte: 1,
      info: "Roadtrip Tag 1: White Sands–Oklahoma City (ca. 10 Std.)"
    },
    {datum: "2.–5. Juli", name: "8. Chicago", naechte: 3, info: "Roadtrip Tag 2: Oklahoma City–Chicago (ca. 12 Std.)"},
    {datum: "5.–7. Juli", name: "9. Sandusky und Cedar Point", naechte: 2, info: "Mietwagen ab Chicago (ca. 5–6 Std.)"},
    {datum: "7.–9. Juli", name: "10. Niagara Falls", naechte: 2, info: "Mietwagen (ca. 4,5 Std.)"},
    {
      datum: "9.–13. Juli",
      name: "11. Washington, D.C.",
      naechte: 4,
      info: "Mietwagen (ca. 7 Std.), Rückgabe in Washington"
    },
    {datum: "13.–15. Juli", name: "12. Philadelphia", naechte: 2, info: "Amtrak-Zug (ca. 2 Std.)"},
    {datum: "15.–22. Juli", name: "13. New York", naechte: 7, info: "Amtrak-Zug (ca. 1,5 Std.); Rückflug 22. Juli"}
  ],
  rueckflug: {
    datum: "22. Juli",
    name: "Flug New York–Zürich",
    info: "Rückflug ab Newark oder John F. Kennedy, ca. 7,5–8 Std."
  },
  planHinweise: [
    [
      "Gesamt",
      "34 Nächte, 13 Stationen und eine Zwischenübernachtung (Oklahoma City). Keine Inlandflüge: nur Hin- und Rückflug. Eine Einwegmiete (Las Vegas–Washington, ca. 25 Tage) und Amtrak-Züge im Nordosten. Die längsten Fahrtage: Roadtrip White Sands–Oklahoma City (ca. 10 Std.) und Oklahoma City–Chicago (ca. 12 Std.), Monument Valley–Santa Fe (ca. 5,5–6 Std.), Chicago–Sandusky (ca. 5–6 Std.) und Niagara Falls–Washington (ca. 7 Std.)."
    ],
    [
      "Vorab buchen",
      "Unterkünfte im Grand Canyon und in Monument Valley (oft Monate im Voraus), Antelope-Canyon-Tour, Meow Wolf, Cedar Point, Zeitfenster-Tickets für Smithsonian und Independence Hall, Amtrak-Züge, Mietwagen mit Einwegmiete."
    ],
    [
      "Optional",
      "Bryce Canyon (ab Zion, 2 Std.), Mackinac Island (Michigan, ab Chicago, autofreie Insel), Kanada-Seite der Niagarafälle, Gettysburg (Halt auf der Strecke nach Washington), Boston (ab New York per Zug, ca. 4 Std.). Für den Roadtrip: dritte Fahrtag-Variante mit Übernachtung in St. Louis."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Las Vegas ca. 12 Std. als Direktflug (nicht ganzjährig; mit Umstieg ca. 14–17 Std.). Abflug am Fr, 18.06.2027, Ankunft am selben Tag (Zeitverschiebung −9 Std.). Rückflug: New York–Zürich ca. 7,5–8 Std. als Nachtflug am Do, 22.07.2027 (Zeitverschiebung +6 Std.), Ankunft am nächsten Morgen. Direktflüge und Flugzeiten bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege: Mietwagen (inklusive 2-Tage-Roadtrip nach Chicago) und Amtrak im Osten. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "train"],
    karten: [
      {datei: "karten/usa.svg"},
      {titel: "Südwesten im Detail (Stationen 1 bis 7)", datei: "karten/usa-suedwesten.svg"},
      {titel: "Osten im Detail (Stationen 8 bis 13)", datei: "karten/usa-osten.svg"}
    ]
  },
  abwechslungIntro: "Nach langen Fahrtagen jeweils einen ruhigen Tag einplanen.",
  abwechslung: [
    [
      "Naturwunder",
      "Zion, Antelope Canyon und Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle."
    ],
    [
      "Action und Freizeitparks",
      "Las Vegas (High Roller, Hotels), Cedar Point (Achterbahnen), Coney Island, Meow Wolf in Santa Fe."
    ],
    [
      "Städte und Museen",
      "Chicago, Washington (Smithsonian), Philadelphia und New York mit Aussichtsplattformen und Broadway."
    ],
    [
      "Geschichte und Kultur",
      "Navajo Nation, Pueblo-Felswohnungen bei Bandelier, Unabhängigkeit in Philadelphia und Washington, Freiheitsstatue."
    ],
    [
      "Ruhetage",
      "Santa Fe, Sandusky und der Reservetag in Washington und New York sorgen für Erholung nach den langen Fahrtagen."
    ]
  ],
  stationenIntro: "Dreizehn Stationen von Las Vegas bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Las Vegas",
      land: "us",
      region: "Nevada",
      datum: "18.–21. Juni",
      naechte: "3 Nächte",
      anreise: "Flug Zürich–Las Vegas am Fr, 18.06.2027 (Direktflug ca. 12 Std., mit Umstieg ca. 14–17 Std.), Ankunft am selben Tag (Zeitverschiebung −9 Std.). Mietwagen am Flughafen abholen.",
      text: "Der Einstieg in die USA: Neonlichter, Hotels wie Freizeitparks und Wüste direkt vor der Stadt. Drei Nächte reichen, um den Jetlag zu überwinden und die Highlights zu sehen, bevor es in die Nationalparks geht.",
      teens: "High Roller (Riesenrad) bei Sonnenuntergang, Wasserspiele des Bellagio, Red Rock Canyon (Felsen und Aussicht) früh am Morgen, Hoover-Staudamm als Halbtagesausflug, Shows und Hotels als Kulisse.",
      fakten: [
        "<strong>Hitze:</strong> Im Juli werden oft 40–45 °C erreicht. Aktivitäten morgens und abends, tagsüber klimatisierte Hotels. Viel Wasser trinken.",
        "<strong>Hinweis:</strong> Glücksspiel ist erst ab 21 Jahren erlaubt. Viele Hotels verlangen zusätzlich «Resort Fees» pro Nacht (oft über 40 USD).",
        "<strong>Mietwagen:</strong> Am Flughafen abholen; eine einzige Einwegmiete bis Washington früh buchen (Familienvan oder SUV, ca. 25 Tage)."
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
      anreise: "Mietwagen ab Las Vegas über die Interstate 15 nach St. George und Springdale (ca. 2,5–3 Std.).",
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
      datum: "23.–25. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Springdale über Kanab und den Highway 89 (ca. 2,5 Std.).",
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
        {titel: "Upper Antelope", suche: "Upper Antelope Canyon light beam", stichwort: "antelope"},
        {titel: "Page", suche: "Page Arizona|Wahweap Bay", stichwort: "page|wahweap"}
      ]
    },
    {
      nr: 4,
      name: "Grand Canyon (South Rim)",
      land: "us",
      region: "Arizona",
      datum: "25.–27. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Page über Cameron zum Südrand (ca. 2,5 Std.).",
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
        {titel: "Hopi Point", suche: "Hopi Point Grand Canyon", stichwort: "hopi point"},
        {titel: "Desert View", suche: "Desert View Watchtower", stichwort: "desert view"},
        {titel: "Bright Angel Trail", suche: "Bright Angel Trail Grand Canyon", stichwort: "bright angel"},
        {titel: "Sonnenuntergang", suche: "Grand Canyon sunset", stichwort: "grand canyon"}
      ]
    },
    {
      nr: 5,
      name: "Monument Valley (Navajo Nation)",
      land: "us",
      region: "Utah und Arizona",
      datum: "27.–28. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen vom Grand Canyon über Cameron, Tuba City und Kayenta (ca. 3,5–4 Std.).",
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
        {
          titel: "Mitten Buttes",
          suche: "Mitten Buttes Monument Valley|Monument Valley Mittens",
          stichwort: "mitten|monument valley"
        },
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
      datum: "28.–30. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Monument Valley über Shiprock und Farmington (ca. 5,5–6 Std.).",
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
      nr: 7,
      name: "White Sands (Alamogordo)",
      land: "us",
      region: "New Mexico",
      datum: "30. Juni–1. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Santa Fe über Albuquerque und die US-54 (ca. 4–4,5 Std.).",
      text: "Weisse Gipsdünen in der Wüste von New Mexico: ein einzigartiger Landschaftstyp, durch den man barfuss wandert und auf Plastikschlitten die Dünen hinunterrutscht. White Sands ist ein Nationalpark.",
      teens: "Dünenrutschen mit Schlitten (im Visitor Center erhältlich), Sonnenuntergangs-Spaziergang, Wanderung auf dem Alkali Flat Trail (nur früh oder spät).",
      fakten: [
        "<strong>Hitze:</strong> Im Juli bis 40 °C und kaum Schatten. Früh am Morgen oder zum Sonnenuntergang gehen, genug Wasser mitnehmen.",
        "<strong>Hinweis:</strong> Die Strasse durch den Park kann wegen Raketentests auf dem benachbarten Testgelände zeitweise gesperrt sein; Lage vorab prüfen. Am nächsten Morgen beginnt der Roadtrip nach Chicago (siehe Chicago).",
        "<strong>Gebühr:</strong> Eintritt pro Fahrzeug (mit dem Jahrespass inklusive); White Sands gehört nicht zu den Parks mit 100 USD Zusatzgebühr."
      ],
      ausserdem: "Space History Museum in Alamogordo, Three Rivers Petroglyph Site, Lincoln National Forest (kühler).",
      bilder: [
        {titel: "Gipsdünen", suche: "White Sands National Park dunes|White Sands dunes", stichwort: "white sands"},
        {titel: "Sonnenuntergang", suche: "White Sands sunset", stichwort: "white sands"},
        {titel: "Dune Drive", suche: "White Sands dune drive|White Sands road", stichwort: "white sands"},
        {titel: "Alkali Flat", suche: "Alkali Flat White Sands", stichwort: "alkali"},
        {titel: "Yucca", suche: "White Sands yucca|White Sands plants", stichwort: "white sands"},
        {titel: "Gipsdünen am Morgen", suche: "White Sands New Mexico sunrise", stichwort: "white sands"}
      ]
    },
    {
      nr: 8,
      name: "Chicago",
      land: "us",
      region: "Illinois",
      datum: "2.–5. Juli",
      naechte: "3 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Oklahoma City", datum: "1.–2. Juli"},
      anreise: "Mietwagen-Roadtrip in 2 Tagen ab White Sands (zusammen ca. 1’420 Meilen, ca. 22 Std. Fahrt) mit Übernachtung in Oklahoma City, Zeitverschiebung +1 Std.",
      text: "Die grosse Stadt am Michigansee mit Wolkenkratzern, Parks und Stadtstrand. Hier beginnt der Osten: Chicago ist das Tor zu den Grossen Seen. Ihr kommt nach zwei langen Fahrtagen an.",
      teens: "Skydeck im Willis Tower (Glasbalkon «Ledge»), Architektur-Bootsfahrt auf dem Chicago River, Millennium Park mit «Cloud Gate» (The Bean), Navy Pier mit Riesenrad, Field Museum und Shedd Aquarium.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Rund um den Unabhängigkeitstag (Sonntag, 4. Juli; Feiertag Montag, 5. Juli) sind Feuerwerke, Menschenmassen und höhere Preise zu erwarten.",
        "<strong>Roadtrip (2 Tage):</strong> Tag 1 (Do, 01.07.2027) White Sands – Roswell – Clovis – Amarillo – Oklahoma City, ca. 630 Meilen (ca. 10 Std. Fahrt); Halt am UFO-Museum in Roswell und am Cadillac Ranch bei Amarillo, Abend in Oklahoma City (Bricktown, Oklahoma City National Memorial). Tag 2 (Fr, 02.07.2027) Oklahoma City – Tulsa – St. Louis (Gateway Arch) – Chicago, ca. 790 Meilen (ca. 12 Std. Fahrt).",
        "<strong>Essen:</strong> Deep-Dish-Pizza und Chicago-Style-Hot-Dog.",
        "<strong>Fortbewegung:</strong> Hochbahn «L», Bus und Wassertaxi; in der Stadt braucht ihr kein Auto. Der Mietwagen bleibt im Parkhaus des Hotels (ca. 60–80 USD pro Nacht, vorab erfragen)."
      ],
      ausserdem: "Lincoln Park Zoo (gratis), Oak Street Beach, Wrigley Field (Baseball), Museum of Science and Industry, Garfield Park Conservatory.",
      warnung: "<strong>Sehr lange Fahrtage:</strong> Zusammen ca. 22 Stunden reine Fahrzeit, also 10 und 12 Stunden pro Tag. Früh starten (ca. 6 Uhr), Fahrerwechsel nach spätestens 2 Stunden, regelmässige Pausen, Teenager mit Spielen und Hörbüchern beschäftigen. Wenn das zu viel ist: drei Tage mit einer zusätzlichen Übernachtung in St. Louis einplanen und Chicago auf 2 Nächte kürzen.",
      bilder: [
        {titel: "Skyline", suche: "Chicago skyline Lake Michigan|Chicago skyline", stichwort: "chicago"},
        {titel: "Cloud Gate", suche: "Cloud Gate Chicago|The Bean Chicago", stichwort: "cloud gate"},
        {titel: "Willis Tower", suche: "Willis Tower Chicago", stichwort: "willis tower"},
        {titel: "Navy Pier", suche: "Navy Pier Chicago", stichwort: "navy pier"},
        {titel: "Chicago River", suche: "Chicago River architecture|Chicago River", stichwort: "chicago river"},
        {
          titel: "Oak Street Beach",
          suche: "Oak Street Beach Chicago|Chicago beach Lake Michigan",
          stichwort: "chicago|oak street"
        }
      ]
    },
    {
      nr: 9,
      name: "Sandusky und Cedar Point (Eriesee)",
      land: "us",
      region: "Ohio",
      datum: "5.–7. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen ab Chicago über die Interstate 90 (ca. 5–6 Std.).",
      text: "Am Südufer des Eriesees liegt Cedar Point, einer der berühmtesten Achterbahn-Parks der Welt. Die Region eignet sich für zwei Tage Action und ein Stück Strand an den Grossen Seen.",
      teens: "Cedar Point (Achterbahnen wie Steel Vengeance und Millennium Force; Tickets online, Grössenbeschränkung beachten), Strand am Eriesee, Fähre zur Insel Put-in-Bay.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag im Park, ein Tag Strand und Inseln.",
        "<strong>Hinweis:</strong> Rund um den Feiertag am 5. Juli ist der Park voll und teuer; früh am Morgen im Park sein.",
        "<strong>Mietwagen:</strong> Ihr fahrt mit demselben Wagen weiter, den ihr in Las Vegas übernommen habt."
      ],
      ausserdem: "Cleveland (Rock and Roll Hall of Fame, ca. 1 Std.), Kelleys Island (Gletscherrillen), Lake Erie Islands.",
      bilder: [
        {titel: "Cedar Point", suche: "Cedar Point Sandusky Ohio|Cedar Point amusement park", stichwort: "cedar point"},
        {titel: "Steel Vengeance", suche: "Steel Vengeance roller coaster", stichwort: "steel vengeance"},
        {titel: "Millennium Force", suche: "Millennium Force Cedar Point", stichwort: "millennium force"},
        {
          titel: "Put-in-Bay",
          suche: "Put-in-Bay Ohio|Perry's Victory Memorial",
          stichwort: "put-in-bay|put in bay|perry"
        },
        {titel: "Eriesee", suche: "Lake Erie shore Ohio|Lake Erie Sandusky", stichwort: "lake erie|sandusky"},
        {titel: "Cleveland", suche: "Cleveland skyline Lake Erie|Cleveland Ohio skyline", stichwort: "cleveland"}
      ]
    },
    {
      nr: 10,
      name: "Niagara Falls",
      land: "us",
      region: "New York",
      datum: "7.–9. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen ab Sandusky entlang des Eriesees über Cleveland und Buffalo (ca. 4,5 Std.).",
      text: "Die grössten Wasserfälle Nordamerikas an der Grenze zu Kanada: Tosende Wassermassen, Gischt und Regenbogen. Ihr übernachtet auf der US-Seite im Bundesstaat New York.",
      teens: "Bootsfahrt «Maid of the Mist» direkt an die Fälle, «Cave of the Winds» (Holzstege am Fuss der Fälle), Beleuchtung der Fälle am Abend.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte.",
        "<strong>Kanada:</strong> Ein Abstecher auf die kanadische Seite (Rainbow Bridge, mit Reisepass) bietet die bessere Gesamtaussicht auf die Fälle. Einreisebestimmungen für Kanada vorab prüfen.",
        "<strong>Hinweis:</strong> Die Regenponchos auf den Booten sind inklusive; Wechselkleidung für die Kids einpacken."
      ],
      ausserdem: "Goat Island, Niagara Gorge Trail, Old Fort Niagara, Buffalo (Chicken Wings).",
      bilder: [
        {titel: "Niagarafälle", suche: "Niagara Falls|Niagara Falls New York", stichwort: "niagara"},
        {titel: "American Falls", suche: "American Falls Niagara", stichwort: "american falls"},
        {titel: "Horseshoe Falls", suche: "Horseshoe Falls Niagara", stichwort: "horseshoe falls"},
        {titel: "Maid of the Mist", suche: "Maid of the Mist Niagara", stichwort: "maid of the mist"},
        {titel: "Abends", suche: "Niagara Falls night illumination|Niagara Falls at night", stichwort: "niagara"},
        {
          titel: "Goat Island",
          suche: "Goat Island Niagara Falls|Three Sisters Islands",
          stichwort: "goat island|three sisters"
        }
      ]
    },
    {
      nr: 11,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "9.–13. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen ab Niagara Falls (ca. 7 Std., Halt in Gettysburg möglich), Rückgabe der Einwegmiete am Flughafen oder beim Hotel in Washington.",
      text: "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
      teens: "National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Tag National Mall, ein Tag Museen, ein Tag Arlington und Mount Vernon, ein Reservetag.",
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
      nr: 12,
      name: "Philadelphia",
      land: "us",
      region: "Pennsylvania",
      datum: "13.–15. Juli",
      naechte: "2 Nächte",
      anreise: "Amtrak-Zug ab Washington Union Station nach Philadelphia 30th Street Station (ca. 2 Std.).",
      text: "Die Wiege der USA: Hier wurden die Unabhängigkeitserklärung und die Verfassung unterzeichnet. Ein kompakter Zwischenstopp zwischen Washington und New York.",
      teens: "Independence Hall und Liberty Bell (Zeitfenster-Tickets vorab), Rocky Steps vor dem Museum of Art, Franklin Institute (Wissenschaftsmuseum), Reading Terminal Market (Philly Cheesesteak).",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte; Altstadt gut zu Fuss.",
        "<strong>Hinweis:</strong> Der Mietwagen ist bereits in Washington zurückgegeben; die Strecke nach Philadelphia und New York geht bequem mit dem Zug."
      ],
      ausserdem: "Elfreth’s Alley, Eastern State Penitentiary, Betsy Ross House, Love Park.",
      bilder: [
        {titel: "Independence Hall", suche: "Independence Hall Philadelphia", stichwort: "independence hall"},
        {titel: "Liberty Bell", suche: "Liberty Bell Philadelphia", stichwort: "liberty bell"},
        {titel: "Skyline", suche: "Philadelphia skyline", stichwort: "philadelphia"},
        {titel: "Museum of Art", suche: "Philadelphia Museum of Art steps", stichwort: "museum of art"},
        {titel: "Reading Terminal", suche: "Reading Terminal Market Philadelphia", stichwort: "reading terminal"},
        {titel: "Love Park", suche: "Love Park Philadelphia|LOVE statue Philadelphia", stichwort: "love"}
      ]
    },
    {
      nr: 13,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "15.–22. Juli",
      naechte: "7 Nächte, Rückflug 22. Juli",
      anreise: "Amtrak-Zug ab Philadelphia 30th Street nach New York Penn Station (ca. 1,5 Std.). Rückflug ab Newark oder John F. Kennedy am Do, 22.07.2027 (Flug ca. 7,5–8 Std., Ankunft in Zürich am nächsten Morgen).",
      text: "Das grosse Finale: Wolkenkratzer, Parks, Museen und Hafenpanorama. Sieben Nächte erlauben Highlights und Ruhetage.",
      teens: "Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building oder Top of the Rock, Broadway-Musical, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
      fakten: [
        "<strong>Dauer:</strong> 7 Nächte: Tag 1 Midtown, Tag 2 Freiheitsstatue und Lower Manhattan (9/11 Memorial), Tag 3 Central Park und Museen, Tag 4 Brooklyn und Coney Island, Tag 5 Wunschtag der Kids, dazu Reservetage.",
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
  abschluss: "Rückflug ab New York nach Zürich am Do, 22.07.2027 (ca. 7,5–8 Std.).",
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 34,
    total: "35’600",
    spanne: "26’800–45’800",
    proTag: "ca. 1’050 CHF pro Tag, ca. 8’900 pro Person",
    posten: [
      [
        "Flüge Zürich–Las Vegas und New York–Zürich",
        "4’000–6’000",
        "5’000",
        "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Mietwagen (1 Einwegmiete, Benzin, Parken, Maut)",
        "2’700–5’300",
        "3’800",
        "Las Vegas–Washington (ca. 25 Tage, ca. 4’400 Meilen), Parken in Chicago ca. 60–80 USD pro Nacht"
      ],
      [
        "Bahn und lokale Verkehrsmittel",
        "500–1’200",
        "800",
        "Amtrak Washington–Philadelphia–New York, Metro und U-Bahn, Taxi"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "7’650–12’170",
        "9’900",
        "ca. 100–550 CHF pro Nacht, New York und Nationalparks am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’750–8’150", "6’200", "ca. 140–240 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)",
        "3’850–7’050",
        "5’400",
        "Pass 250 USD, Antelope Canyon, Cedar Point, Skydeck, Freiheitsstatue, Broadway usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "900–1’800",
        "1’300",
        "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"
      ],
      ["Reserve (ca. 10 %)", "2’450–4’200", "3’250", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Las Vegas (3)", "1’070–1’970"],
      ["2. Zion National Park (2)", "730–1’180"],
      ["3. Page und Lake Powell (2)", "880–1’480"],
      ["4. Grand Canyon (2)", "830–1’430"],
      ["5. Monument Valley (1)", "540–1’040"],
      ["6. Santa Fe (2)", "780–1’330"],
      ["7. White Sands (1)", "300–520"],
      ["Zwischenübernachtung Oklahoma City (1)", "240–400"],
      ["8. Chicago (3)", "1’770–2’870"],
      ["9. Sandusky und Cedar Point (2)", "930–1’530"],
      ["10. Niagara Falls (2)", "780–1’380"],
      ["11. Washington, D.C. (4)", "1’710–2’910"],
      ["12. Philadelphia (2)", "830–1’380"],
      ["13. New York (7)", "4’630–7’730"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Sparhebel: weniger Nächte in New York, Frühstück im Hotel, Imbiss statt Restaurant, Nationalpark-Jahrespass früh kaufen.",
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
      "Familienvan oder SUV, die Einwegmiete Las Vegas–Washington früh buchen (Gebühr oft hoch). In Chicago Parkgebühren einplanen. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Vollkasko prüfen, Gebühren und Mautstrassen im Osten einplanen."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Monsun",
      "Las Vegas, Zion und White Sands erreichen im Juli 38–45 °C. Ab Juli beginnt der Monsun im Südwesten: Gewitter und Sturzfluten in Schluchten (Narrows, Antelope Canyon). Auf Warnungen achten, Wanderungen früh starten, genug Wasser dabei haben."
    ],
    [
      "Zeitzonen",
      "Las Vegas Pazifikzeit, Utah Mountain-Zeit, Arizona keine Sommerzeit, Navajo Nation Sommerzeit, New Mexico Mountain-Zeit, Chicago Central-Zeit, Osten Eastern-Zeit. Zur Schweiz sind es −6 bis −9 Stunden."
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
      "Amtrak-Züge Washington–Philadelphia–New York sind schnell und bequem; Tickets früh online buchen, Gepäck selbst tragen."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."
    ],
    ["Handy", "eSIM für die USA vorab kaufen. Offline-Karten für Nationalparks laden, dort gibt es oft keinen Empfang."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
