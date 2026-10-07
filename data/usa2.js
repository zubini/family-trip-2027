// Reise: USA von Las Vegas durch die Nationalparks im Südwesten, mit dem Flugzeug nach Miami, als Roadtrip bis Washington und mit dem Zug nach New York.
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa2 = {
  titel: "Von Las Vegas über Miami nach New York",
  menu: "USA (über Florida)",
  untertitel: "Fünf Wochen USA: Nationalparks im Südwesten, mit dem Flugzeug nach Miami, dann als Roadtrip über die Florida Keys, Orlando und die Altstädte der Südstaaten durch die Appalachen nach Washington und mit dem Zug nach New York.",
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
    {datum: "18.–20. Juni", name: "1. Las Vegas", naechte: 2, info: "Mietwagen am Flughafen abholen (Rundmiete)"},
    {datum: "20.–22. Juni", name: "2. Zion National Park", naechte: 2, info: "Mietwagen (ca. 2,5–3 Std.), Uhr +1 Std."},
    {datum: "22.–24. Juni", name: "3. Page und Lake Powell", naechte: 2, info: "Mietwagen (ca. 2,5 Std.), Uhr −1 Std."},
    {datum: "24.–25. Juni", name: "4. Monument Valley", naechte: 1, info: "Mietwagen (ca. 2 Std.), Uhr +1 Std."},
    {
      datum: "25.–27. Juni",
      name: "5. Grand Canyon (South Rim)",
      naechte: 2,
      info: "Mietwagen (ca. 3,5 Std.), Uhr −1 Std."
    },
    {
      datum: "27.–28. Juni",
      name: "Zwischenübernachtung Las Vegas",
      naechte: 1,
      info: "Mietwagen über den Hoover-Staudamm (ca. 4,5–5 Std.), Rückgabe in Las Vegas"
    },
    {
      datum: "28.–30. Juni",
      name: "6. Miami",
      naechte: 2,
      info: "Inlandflug Las Vegas–Miami (ca. 4,5–5 Std.), Uhr +3 Std.; zweiten Mietwagen abholen (Einwegmiete bis Washington)"
    },
    {
      datum: "30. Juni–2. Juli",
      name: "7. Key West",
      naechte: 2,
      info: "Mietwagen über den Overseas Highway (ca. 3,5–4 Std.)"
    },
    {datum: "2.–4. Juli", name: "8. Key Largo und Islamorada", naechte: 2, info: "Mietwagen (ca. 2–2,5 Std.)"},
    {datum: "4.–7. Juli", name: "9. Orlando", naechte: 3, info: "Mietwagen (ca. 4,5–5,5 Std.)"},
    {datum: "7.–8. Juli", name: "10. St. Augustine", naechte: 1, info: "Mietwagen (ca. 1,75–2 Std.)"},
    {datum: "8.–10. Juli", name: "11. Savannah", naechte: 2, info: "Mietwagen (ca. 2,75–3 Std.)"},
    {datum: "10.–12. Juli", name: "12. Charleston", naechte: 2, info: "Mietwagen (ca. 1,75–2 Std.)"},
    {
      datum: "12.–14. Juli",
      name: "13. Asheville und Great Smoky Mountains",
      naechte: 2,
      info: "Mietwagen (ca. 4,5–5 Std.)"
    },
    {datum: "14.–15. Juli", name: "14. Shenandoah (Luray)", naechte: 1, info: "Mietwagen (ca. 6–6,5 Std.)"},
    {
      datum: "15.–18. Juli",
      name: "15. Washington, D.C.",
      naechte: 3,
      info: "Mietwagen (ca. 1,75–2 Std.), Rückgabe in Washington"
    },
    {datum: "18.–22. Juli", name: "16. New York", naechte: 4, info: "Amtrak-Zug (ca. 3–3,5 Std.); Rückflug 22. Juli"}
  ],
  rueckflug: {
    datum: "22. Juli",
    name: "Flug New York–Zürich",
    info: "Nachtflug ca. 7,5–8 Std., Ankunft in Zürich am Fr, 23.07.2027 am Morgen"
  },
  planHinweise: [
    [
      "Gesamt",
      "34 Nächte, 16 Stationen und eine Zwischenübernachtung (Las Vegas). Ein Inlandflug (Las Vegas–Miami), zwei Mietwagen (Rundmiete ab Las Vegas für ca. 10 Tage, Einwegmiete Miami–Washington für ca. 17 Tage) und der Amtrak-Zug nach New York. Insgesamt ca. 4’100 km (ca. 2’550 Meilen) und ca. 47 Std. reine Fahrzeit an 15 Fahrtagen (Südwesten ca. 16 Std., Osten ca. 31 Std.); mit Pausen, Tanken, Stau und Fahrten vor Ort realistisch ca. 55–60 Std. im Auto. Die längsten: Asheville–Luray (ca. 6–6,5 Std.), Key Largo–Orlando (ca. 4,5–5,5 Std.), Charleston–Asheville (ca. 4,5–5 Std.), Grand Canyon–Las Vegas (ca. 4,5–5 Std.) und Miami–Key West (ca. 3,5–4 Std.). Dazu der Flug nach Miami (ca. 4,5–5 Std. plus ca. 3 Std. Flughafen und Mietwagen) und der Zug nach New York (ca. 3–3,5 Std.)."
    ],
    [
      "Vorab buchen",
      "Unterkünfte im Grand Canyon und in Monument Valley (oft Monate im Voraus), Antelope-Canyon-Tour, Inlandflug Las Vegas–Miami, Unterkünfte in Key West und den Keys, Schnorcheltour im Pennekamp-Park, Tickets für Universal und das Kennedy Space Center, Fort Sumter, Zeitfenster für das Air and Space Museum, Amtrak-Züge, Aussichtsplattform und Broadway in New York, Mietwagen."
    ],
    [
      "Optional",
      "Bryce Canyon (ab Zion, ca. 2 Std., ebenfalls mit Zusatzgebühr), Dry Tortugas (ab Key West), Cocoa Beach (ab Orlando), Jekyll Island (zwischen St. Augustine und Savannah), Outer Banks an der Küste von North Carolina (statt Asheville, längere Fahrt), Gettysburg (zwischen Luray und Washington), Philadelphia (Halt mit dem Zug zwischen Washington und New York)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Las Vegas als Direktflug ca. 12 Std. (im Sommer 2026 nur an einzelnen Wochentagen; am Freitag mit einem Umstieg ca. 14–17 Std.), Ankunft am selben Tag (Zeitverschiebung −9 Std.). Inlandflug Las Vegas–Miami: Nonstop ca. 4,5–5 Std., Uhr +3 Std. Rückflug: New York–Zürich ca. 7,5–8 Std. als Nachtflug am Do, 22.07.2027, Ankunft am nächsten Morgen. Flugpläne 2027 bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf: Mietwagen im Südwesten, Inlandflug nach Miami, Mietwagen bis Washington und Amtrak nach New York. Darunter zwei Detailkarten.",
    breit: true,
    legende: ["car", "air", "train"],
    karten: [
      {datei: "karten/usa2.svg"},
      {titel: "Südwesten im Detail (Stationen 1 bis 5)", datei: "karten/usa2-suedwesten.svg"},
      {titel: "Osten im Detail (Stationen 6 bis 16)", datei: "karten/usa2-osten.svg"}
    ]
  },
  abwechslungIntro: "Wüste, Meer, Städte und Berge wechseln sich ab: zuerst die Nationalparks im Südwesten, dann Strand und Riff in Florida, Freizeitparks in Orlando, die Altstädte der Südstaaten, die Appalachen und zum Schluss Washington und New York.",
  abwechslung: [
    [
      "Naturwunder",
      "Zion, Antelope Canyon und Horseshoe Bend, Monument Valley, Grand Canyon, Everglades, Florida Keys, Great Smoky Mountains, Blue Ridge Parkway und Shenandoah mit den Luray Caverns."
    ],
    [
      "Strand und Schnorcheln",
      "South Beach in Miami, Korallenriff im Pennekamp-Park (Key Largo), Key West, Atlantikstrände in St. Augustine, auf Tybee Island und am Folly Beach."
    ],
    [
      "Action und Freizeitparks",
      "Universal in Orlando, Kennedy Space Center, Airboat in den Everglades, Flugzeugträger USS Yorktown, Air and Space Museum, Aussichtsplattformen in New York, Las Vegas."
    ],
    [
      "Städte und Kultur",
      "Las Vegas, Miami mit Little Havana, Key West, St. Augustine, Savannah, Charleston, Washington mit den Smithsonian-Museen und New York."
    ],
    [
      "Ruhetage",
      "Key Largo, Savannah und Asheville sorgen für Erholung zwischen den Fahrtagen; nach dem Flug nach Miami ein ruhiger Abend am Strand."
    ]
  ],
  stationenIntro: "Sechzehn Stationen von Las Vegas über Miami bis New York. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Las Vegas (Start)",
      land: "us",
      region: "Nevada",
      datum: "18.–20. Juni",
      naechte: "2 Nächte",
      anreise: "Flug Zürich–Las Vegas am Fr, 18.06.2027 (Direktflug ca. 12 Std. nur an einzelnen Wochentagen, sonst mit Umstieg ca. 14–17 Std.), Ankunft am selben Tag (Zeitverschiebung −9 Std.). Mietwagen am Flughafen abholen (Rundmiete, Rückgabe wieder in Las Vegas).",
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
      datum: "22.–24. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Springdale über den Zion–Mount Carmel Highway und Kanab nach Page (ca. 2,5 Std., ca. 180 km). Arizona hat keine Sommerzeit, die Uhr springt −1 Std.",
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
      nr: 4,
      name: "Monument Valley (Navajo Nation)",
      land: "us",
      region: "Utah und Arizona",
      datum: "24.–25. Juni",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Page über Kayenta nach Monument Valley (ca. 2 Std., ca. 200 km). Die Navajo Nation hat Sommerzeit, die Uhr springt +1 Std.",
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
      name: "Grand Canyon (South Rim)",
      land: "us",
      region: "Arizona",
      datum: "25.–27. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Monument Valley über Kayenta, Tuba City und Cameron zum Südrand (ca. 3,5 Std., ca. 290 km); in Arizona springt die Uhr −1 Std.",
      text: "Der Südrand des Grand Canyon ist der klassische Zugang: Aussichtspunkte direkt am Rand, Wanderwege und ein kostenloser Parkshuttle. Zwei Nächte am Rand, am besten im Park oder im nahen Tusayan.",
      teens: "Mather Point und Rim Trail (flach, grosse Aussicht), Sonnenuntergang am Hopi Point, Junior-Ranger-Programm im Visitor Center, Desert View Watchtower, ein Stück den Bright Angel Trail hinunterwandern (nicht bis zum Fluss).",
      fakten: [
        "<strong>Gebühr:</strong> Auch der Grand Canyon gehört zu den 11 Parks mit 100 USD Zusatzgebühr pro Person ab 16 Jahren. Mit dem Jahrespass (250 USD) entfällt sie.",
        "<strong>Sicherheit:</strong> Auf Trails nicht zu weit absteigen: der Aufstieg dauert doppelt so lang wie der Abstieg. Wasser, salzige Snacks und Hut mitnehmen.",
        "<strong>Weiterfahrt:</strong> Am 27. Juni über Williams, Kingman und den Hoover-Staudamm zurück nach Las Vegas (ca. 4,5–5 Std., ca. 450 km), dort übernachten und am Morgen nach Miami fliegen. Zimmer im Park sind oft Monate im Voraus ausgebucht; sonst in Tusayan oder Williams übernachten."
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
      nr: 6,
      name: "Miami",
      land: "us",
      region: "Florida",
      datum: "28.–30. Juni",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Las Vegas", datum: "27.–28. Juni"},
      anreise: "Mietwagen von Grand Canyon über den Hoover-Staudamm zurück nach Las Vegas (ca. 4,5–5 Std., ca. 450 km), dort übernachten und den Mietwagen zurückgeben. Am Morgen Inlandflug Las Vegas–Miami (Nonstop ca. 4,5–5 Std., Flugplan 2027 prüfen), Uhr +3 Std., Ankunft am späten Nachmittag. Am Flughafen Miami den zweiten Mietwagen abholen (Einwegmiete bis Washington).",
      text: "Nach der Wüste das Meer: Art-déco-Häuser und Strand in South Beach, kubanisches Essen in Little Havana und gleich vor der Stadt die Everglades mit Alligatoren und Mangroven.",
      teens: "Airboat-Fahrt und Alligatoren in den Everglades, Strand und Art-déco-Viertel in South Beach, Graffiti-Kunst in Wynwood Walls, Little Havana mit kubanischem Essen.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: am Ankunftsabend South Beach, ein Tag Everglades und Little Havana.",
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
      nr: 7,
      name: "Key West",
      land: "us",
      region: "Florida Keys",
      datum: "30. Juni–2. Juli",
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
      nr: 8,
      name: "Key Largo und Islamorada",
      land: "us",
      region: "Florida Keys",
      datum: "2.–4. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Key West zurück über den Overseas Highway nach Islamorada oder Key Largo (ca. 2–2,5 Std., ca. 160 km).",
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
      nr: 9,
      name: "Orlando",
      land: "us",
      region: "Florida",
      datum: "4.–7. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Key Largo über den Florida’s Turnpike nach Orlando (ca. 4,5–5,5 Std., ca. 440 km, Mautstrasse).",
      text: "Hauptstadt der Freizeitparks und Ausgangspunkt zum Kennedy Space Center, von wo die Raketen starten. Für die Teenager einer der Höhepunkte der Reise.",
      teens: "Universal Studios und Islands of Adventure (Harry Potter), Kennedy Space Center mit der Saturn-V-Rakete und dem Space Shuttle Atlantis, mit Glück ein Raketenstart.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Universal, ein Tag Kennedy Space Center (ca. 1 Std. östlich), ein ruhiger Tag am Pool.",
        "<strong>Tickets:</strong> Freizeitparks online und früh buchen, die Preise ändern sich je nach Tag.",
        "<strong>4. Juli:</strong> Am Nationalfeiertag sind Strassen und Parks voll, am Abend gibt es Feuerwerk. Viele Strassen in Florida sind mautpflichtig: beim Mietwagen das Mautpaket oder die Abrechnung per Kennzeichen klären."
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
      nr: 10,
      name: "St. Augustine",
      land: "us",
      region: "Florida",
      datum: "7.–8. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Orlando über die Interstate 95 an die Atlantikküste nach St. Augustine (ca. 1,75–2 Std., ca. 170 km).",
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
      nr: 11,
      name: "Savannah",
      land: "us",
      region: "Georgia",
      datum: "8.–10. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von St. Augustine über die Interstate 95 nach Savannah (ca. 2,75–3 Std., ca. 300 km).",
      text: "Eine der schönsten Altstädte der Südstaaten: 22 grüne Plätze mit Eichen voller Spanischem Moos, Häuser aus dem 19. Jahrhundert und die Uferstrasse am Savannah River.",
      teens: "Spaziergang durch die Plätze und den Forsyth Park, Geistertour am Abend, River Street mit Frachtschiffen, Strandtag auf Tybee Island mit Leuchtturm, Eichenallee von Wormsloe.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt (am Morgen und Abend, mittags heiss und schwül), ein Tag Tybee Island (ca. 30 Min.).",
        "<strong>Unterwegs:</strong> Die Altstadt ist gut zu Fuss oder mit dem Trolley zu erkunden; Auto im Hotel stehen lassen.",
        "<strong>Wetter:</strong> Im Juli heiss und feucht, am Nachmittag oft Gewitter."
      ],
      ausserdem: "Bonaventure Cemetery, City Market, Fort Pulaski, Jekyll Island (auf der Anreise).",
      bilder: [
        {titel: "Forsyth Park", suche: "Forsyth Park fountain Savannah", stichwort: "forsyth"},
        {titel: "Plätze mit Spanischem Moos", suche: "Savannah square Spanish moss", stichwort: "savannah"},
        {titel: "River Street", suche: "River Street Savannah", stichwort: "river street"},
        {titel: "Wormsloe", suche: "Wormsloe Historic Site oak avenue", stichwort: "wormsloe"},
        {titel: "Tybee Island", suche: "Tybee Island lighthouse", stichwort: "tybee"},
        {titel: "Bonaventure Cemetery", suche: "Bonaventure Cemetery Savannah", stichwort: "bonaventure"}
      ]
    },
    {
      nr: 12,
      name: "Charleston",
      land: "us",
      region: "South Carolina",
      datum: "10.–12. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Savannah über die Interstate 95 oder die Küstenstrasse US-17 nach Charleston (ca. 1,75–2 Std., ca. 175 km).",
      text: "Pastellfarbene Häuser, Kirchtürme und Gaslaternen in einer der ältesten Städte der USA. Vor dem Hafen liegt Fort Sumter, wo der Bürgerkrieg begann; Strände und Inseln sind nah.",
      teens: "Flugzeugträger USS Yorktown in Patriots Point, Boot zum Fort Sumter, Rainbow Row und Ananasbrunnen, Baden am Folly Beach, die riesige Angel Oak.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt und Fort Sumter, ein Tag Patriots Point und Strand.",
        "<strong>Geschichte:</strong> Charleston war ein grosser Sklavenhandelshafen. Das International African American Museum und Plantagen wie McLeod erzählen diese Geschichte.",
        "<strong>Fort Sumter:</strong> Nur mit dem Boot erreichbar (ca. 2,25 Std. mit Besuch); Tickets vorab."
      ],
      ausserdem: "Waterfront Park, City Market, Magnolia Plantation, Sullivan’s Island, Isle of Palms.",
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
      nr: 13,
      name: "Asheville und Great Smoky Mountains",
      ersatzsuche: "Asheville|Great Smoky Mountains|Blue Ridge Parkway",
      land: "us",
      region: "North Carolina",
      datum: "12.–14. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Charleston über Columbia und die Interstate 26 in die Berge nach Asheville (ca. 4,5–5 Std., ca. 430 km).",
      text: "Nach der Küste die Berge: bewaldete Kämme der Appalachen, Wasserfälle und der meistbesuchte Nationalpark der USA. Asheville ist eine lebendige Kleinstadt mit Musik und dem Schloss Biltmore.",
      teens: "Wanderung zu Wasserfällen und auf den Aussichtsturm Clingmans Dome, Schwarzbären und Wapiti beobachten (aus sicherer Distanz), Fahrt auf dem Blue Ridge Parkway, Baden in Naturrutschen wie Sliding Rock.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in Asheville: ein Tag Great Smoky Mountains (ca. 1–1,5 Std. bis zum Park), ein Tag Blue Ridge Parkway mit Wasserfällen oder Biltmore.",
        "<strong>Gebühr:</strong> Kein Eintritt in den Great Smoky Mountains, aber ein Parkausweis fürs Auto (2026: 5 USD pro Tag, 15 USD pro Woche).",
        "<strong>Bären:</strong> Abstand halten, kein Essen liegen lassen; im Sommer am Nachmittag Gewitter in den Bergen."
      ],
      ausserdem: "Biltmore Estate (grösstes Privathaus der USA, teurer Eintritt), Cherokee mit Museum, Mount Mitchell (höchster Berg östlich des Mississippi), Chimney Rock.",
      bilder: [
        {titel: "Great Smoky Mountains", suche: "Great Smoky Mountains National Park", stichwort: "smoky"},
        {titel: "Blue Ridge Parkway", suche: "Blue Ridge Parkway", stichwort: "blue ridge"},
        {titel: "Clingmans Dome", suche: "Clingmans Dome", stichwort: "clingmans"},
        {titel: "Asheville", suche: "Asheville downtown", stichwort: "asheville"},
        {titel: "Biltmore", suche: "Biltmore Estate Asheville", stichwort: "biltmore"},
        {titel: "Looking Glass Falls", suche: "Looking Glass Falls", stichwort: "looking glass"}
      ]
    },
    {
      nr: 14,
      name: "Shenandoah (Luray)",
      ersatzsuche: "Shenandoah|Luray",
      land: "us",
      region: "Virginia",
      datum: "14.–15. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Asheville über die Interstate 81 durch das Shenandoah-Tal nach Luray (ca. 6–6,5 Std., ca. 620 km). Der längste Fahrtag im Osten: früh starten, ein Stück Blue Ridge Parkway ist möglich, verlängert aber den Tag.",
      text: "Der Shenandoah-Nationalpark zieht sich mit der Panoramastrasse Skyline Drive über die Blue Ridge Mountains. Im Tal liegen die Tropfsteinhöhlen von Luray.",
      teens: "Luray Caverns mit Tropfsteinen und der Orgel aus Stalaktiten, Fahrt auf dem Skyline Drive mit Aussichtspunkten, kurze Wanderung zu den Dark Hollow Falls, Hirsche am Strassenrand.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht in Luray: am Abend Luray Caverns oder Sonnenuntergang auf dem Skyline Drive, am Morgen Wanderung und weiter nach Washington.",
        "<strong>Gebühr:</strong> Eintritt pro Fahrzeug, mit dem Jahrespass inklusive; die Luray Caverns sind privat und kosten extra.",
        "<strong>Mietwagen:</strong> Am nächsten Tag in Washington zurückgeben (Einwegmiete Miami–Washington)."
      ],
      ausserdem: "Stony Man Trail, Big Meadows, Shenandoah River (Kanu und Tubing), Gettysburg ist nicht weit (Abstecher).",
      bilder: [
        {titel: "Skyline Drive", suche: "Skyline Drive Shenandoah", stichwort: "skyline drive|shenandoah"},
        {titel: "Luray Caverns", suche: "Luray Caverns", stichwort: "luray"},
        {titel: "Dark Hollow Falls", suche: "Dark Hollow Falls Shenandoah", stichwort: "dark hollow"},
        {titel: "Stony Man", suche: "Stony Man Shenandoah", stichwort: "stony man"},
        {titel: "Shenandoah-Tal", suche: "Shenandoah Valley", stichwort: "shenandoah"},
        {titel: "Big Meadows", suche: "Big Meadows Shenandoah deer", stichwort: "big meadows|shenandoah"}
      ]
    },
    {
      nr: 15,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "15.–18. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Luray nach Washington (ca. 1,75–2 Std., ca. 145 km), Rückgabe der Einwegmiete am Flughafen oder in der Stadt. In der Stadt Metro und zu Fuss.",
      text: "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
      teens: "National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag National Mall und Denkmäler, ein Tag Museen, ein halber Tag Arlington oder Georgetown.",
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
      nr: 16,
      name: "New York (Finale)",
      land: "us",
      region: "New York",
      datum: "18.–22. Juli",
      naechte: "4 Nächte, Rückflug 22. Juli",
      anreise: "Amtrak-Zug ab Washington Union Station nach New York Penn Station (Northeast Regional ca. 3,5 Std., Acela ca. 2,75–3 Std.). Rückflug ab Newark oder John F. Kennedy am Do, 22.07.2027 (Flug ca. 7,5–8 Std., Ankunft in Zürich am nächsten Morgen).",
      text: "Das grosse Finale: Wolkenkratzer, Parks, Museen und Hafenpanorama, nach fünf Wochen Natur, Strand und Kleinstädten.",
      teens: "Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building oder Top of the Rock, Broadway-Musical, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: Tag 1 Midtown und Aussichtsplattform, Tag 2 Freiheitsstatue und Lower Manhattan (9/11 Memorial), Tag 3 Central Park und Museen, Tag 4 Brooklyn oder Wunschtag der Kids, Abflug am Abend.",
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
    total: "38’400",
    spanne: "29’400–49’350",
    proTag: "ca. 1’130 CHF pro Tag, ca. 9’600 pro Person",
    posten: [
      [
        "Flüge Zürich–Las Vegas und New York–Zürich",
        "4’000–6’000",
        "5’000",
        "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      ["Inlandflug Las Vegas–Miami", "700–1’400", "1’050", "ca. 150–300 CHF pro Person plus Gepäck"],
      [
        "Mietwagen (zwei Mieten, Benzin, Parken, Maut)",
        "2’800–4’800",
        "3’700",
        "Rundmiete Las Vegas (ca. 10 Tage) ohne Rückgabegebühr, Einwegmiete Miami–Washington (ca. 17 Tage) mit Rückgabegebühr; ca. 4’100 km"
      ],
      [
        "Amtrak und lokale Verkehrsmittel",
        "600–1’200",
        "850",
        "Amtrak Washington–New York, Metro und U-Bahn, Taxi, Parkhäuser in Miami und Charleston"
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
        "Pass 250 USD, Antelope Canyon, Schnorcheltour, Universal, Kennedy Space Center, Fort Sumter, Luray Caverns, Aussichtsplattform und Broadway in New York usw."
      ],
      [
        "ESTA, Versicherung, eSIM",
        "900–1’800",
        "1’300",
        "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"
      ],
      ["Reserve (ca. 10 %)", "2’650–4’500", "3’500", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Las Vegas (2)", "700–1’300"],
      ["2. Zion National Park (2)", "730–1’180"],
      ["3. Page und Lake Powell (2)", "880–1’480"],
      ["4. Monument Valley (1)", "540–1’040"],
      ["5. Grand Canyon (2)", "830–1’430"],
      ["Zwischenübernachtung Las Vegas (1)", "250–450"],
      ["6. Miami (2)", "650–1’100"],
      ["7. Key West (2)", "900–1’600"],
      ["8. Key Largo und Islamorada (2)", "700–1’200"],
      ["9. Orlando (3)", "1’050–1’900"],
      ["10. St. Augustine (1)", "300–500"],
      ["11. Savannah (2)", "600–1’000"],
      ["12. Charleston (2)", "650–1’100"],
      ["13. Asheville und Great Smoky Mountains (2)", "600–1’000"],
      ["14. Shenandoah (1)", "300–500"],
      ["15. Washington, D.C. (3)", "1’000–1’700"],
      ["16. New York (4)", "2’000–3’400"]
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
      "Zwei Mieten: im Südwesten eine Rundmiete ab und bis Las Vegas (keine Rückgabegebühr), im Osten eine Einwegmiete Miami–Washington (Rückgabegebühr, Angebote vergleichen). Familienvan oder SUV. In Florida viele Mautstrassen: Mautpaket oder Abrechnung per Kennzeichen beim Vermieter klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Vollkasko prüfen."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze, Hurrikane und Monsun",
      "Las Vegas, Zion und der Südwesten erreichen im Juni 35–45 °C; ab Juli beginnt dort der Monsun mit Gewittern und Sturzfluten in Schluchten (Narrows, Antelope Canyon). Florida und die Südstaaten sind heiss und feucht mit Gewittern am Nachmittag; Juni bis November ist Hurrikansaison: Wetterwarnungen verfolgen, flexibel bleiben. In den Appalachen angenehmer, Gewitter am Nachmittag."
    ],
    [
      "Zeitzonen",
      "Las Vegas Pazifikzeit, Utah und die Navajo Nation Mountain-Zeit, Arizona keine Sommerzeit (wie Las Vegas), der ganze Osten Eastern-Zeit. Zur Schweiz sind es im Westen −9 Stunden, im Osten −6 Stunden; der Flug nach Miami kostet drei Stunden."
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
