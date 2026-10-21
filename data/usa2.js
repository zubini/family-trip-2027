// Variante der USA-Reise (data/usa.js): von New York über Washington, die Smokies und die Altstädte des Südens nach Florida
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usa2 = {
  titel: "Von New York nach Florida",
  menu: "USA",
  alternativeZu: "usa",
  variante: "New York – Florida",
  untertitel: "Fünf Wochen USA im Osten: New York und Washington, die Berge von Shenandoah und den Smokies, die Altstädte Charleston, Savannah und St. Augustine, Freizeitparks in Orlando, Strand an der Golfküste, Korallenriff in den Keys und zum Schluss Miami.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Seven Mile Bridge Florida Keys|Florida Keys aerial",
    stichwort: "seven mile|florida keys",
    alt: "Overseas Highway in den Florida Keys"
  },
  planIntro: "Abflug ab Zürich nach New York am Sa, 19.06.2027, Rückflug ab Miami am Mi, 21.07.2027 (Ankunft Do, 22.07.2027). Zuerst New York und Washington ohne Auto, dann eine Einwegmiete Washington–Miami. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Flug Zürich–New York",
    info: "Direktflug ca. 9,5 Std. (SWISS, täglich), Ankunft am selben Tag am späten Nachmittag"
  },
  plan: [
    {
      datum: "19.–23. Juni",
      name: "1. New York",
      naechte: 4,
      info: "Flug ab Zürich (ca. 9,5 Std.), AirTrain und U-Bahn nach Manhattan"
    },
    {datum: "23.–26. Juni", name: "2. Washington, D.C.", naechte: 3, info: "Amtrak-Zug (ca. 3–3,5 Std.)"},
    {
      datum: "26.–28. Juni",
      name: "3. Shenandoah (Luray)",
      naechte: 2,
      info: "Mietwagen ab Washington (ca. 1,75–2 Std.; Einwegmiete bis Miami)"
    },
    {datum: "28. Juni–1. Juli", name: "4. Great Smoky Mountains", naechte: 3, info: "Mietwagen (ca. 6–7 Std.)"},
    {datum: "1.–3. Juli", name: "5. Charleston", naechte: 2, info: "Mietwagen über Asheville (ca. 5,75–6,25 Std.)"},
    {datum: "3.–5. Juli", name: "6. Savannah", naechte: 2, info: "Mietwagen (ca. 2 Std.)"},
    {datum: "5.–6. Juli", name: "7. St. Augustine", naechte: 1, info: "Mietwagen (ca. 2,75–3 Std.)"},
    {datum: "6.–10. Juli", name: "8. Orlando", naechte: 4, info: "Mietwagen (ca. 1,75 Std.)"},
    {datum: "10.–14. Juli", name: "9. Siesta Key (Golfküste)", naechte: 4, info: "Mietwagen (ca. 2,25 Std.)"},
    {
      datum: "14.–18. Juli",
      name: "10. Key Largo und Islamorada",
      naechte: 4,
      info: "Mietwagen durch die Everglades (ca. 4,5–5 Std.)"
    },
    {datum: "18.–21. Juli", name: "11. Miami", naechte: 3, info: "Mietwagen (ca. 1,25–1,5 Std.); Rückflug 21. Juli"}
  ],
  rueckflug: {
    datum: "21. Juli",
    name: "Flug Miami–Zürich",
    info: "Direktflug mit SWISS, täglich; im Sommer 2026 Abflug ca. 19.40 Uhr, ca. 9 Std., Ankunft in Zürich am Do, 22.07.2027 um ca. 10.50 Uhr"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte, 11 Stationen. Zuerst New York und Washington mit dem Zug (ca. 3–3,5 Std.), dann eine Einwegmiete Washington–Miami (ca. 25 Tage) mit ca. 2’800 km und ca. 29–31 Std. reiner Fahrzeit an 9 Fahrtagen, realistisch ca. 35–38 Std. im Auto. Die längsten Fahrtage: Luray–Gatlinburg (ca. 6–7 Std.), Gatlinburg–Charleston (ca. 5,75–6,25 Std.), Siesta Key–Key Largo (ca. 4,5–5 Std.); die übrigen 1,25–3 Std."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–New York JFK mit SWISS als Direktflug täglich, ca. 9,5 Std. (Sommer 2026: Abflug ca. 13.15 Uhr, Ankunft ca. 16.35 Uhr Ortszeit, Zeitverschiebung −6 Std.). Rückflug: Miami–Zürich mit SWISS als Direktflug täglich, ca. 9 Std., am Mi, 21.07.2027 (Sommer 2026: Abflug ca. 19.40 Uhr, Ankunft ca. 10.50 Uhr). Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Hitze und Hurrikane",
      "Im Juli ist es in Florida ca. 33 °C heiss, sehr schwül, mit fast täglichen Gewittern am Nachmittag; Wasser ca. 29–31 °C. Die Hurrikansaison dauert von Juni bis November, die meisten Stürme kommen aber von Mitte August bis Mitte Oktober (Höhepunkt um den 10. September). Im Juli ist das Risiko klein, aber nicht null: Reiseversicherung und flexible Buchungen."
    ],
    [
      "Vorab buchen",
      "Flüge, Einwegmiete Washington–Miami (Gebühr vergleichen), Amtrak New York–Washington, Aussichtsplattform und Broadway in New York, Air and Space Museum, Parkticket Smokies, Dollywood, Fort Sumter, Universal und Kennedy Space Center, Apartment in Siesta Key, Unterkunft und Schnorcheltour in Key Largo."
    ],
    [
      "Optional",
      "Philadelphia (Halt mit dem Zug), Blue Ridge Parkway und Asheville (zwischen den Smokies und Charleston), Hilton Head Island, Cocoa Beach (ab Orlando), Key West (Tagesausflug ab Key Largo), Dry Tortugas."
    ],
    [
      "Unterschied zur Route ab Las Vegas",
      "Gleiche Reisedaten und gleiche Teile im Osten (New York, Washington, Shenandoah, Smokies). Statt Wüste, Texas und New Orleans: Altstädte Charleston, Savannah und St. Augustine, Orlando, Strand an der Golfküste und Korallenriff in den Keys. Rund die Hälfte der Fahrzeit, mehr Strand und Schnorcheln, aber keine Nationalparks im Westen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Zug von New York nach Washington, dann mit dem Mietwagen bis Miami.",
    breit: true,
    legende: ["car", "train"],
    karten: [{datei: "karten/usa2.svg"}]
  },
  abwechslungIntro: "Grossstädte, grüne Berge, Altstädte des Südens, Freizeitparks und Strand wechseln sich ab; nach langen Fahrtagen ein ruhiger Tag.",
  abwechslung: [
    [
      "Städte und Kultur",
      "New York, Washington mit den Smithsonian-Museen, Charleston, Savannah, St. Augustine (älteste Stadt der USA) und Miami."
    ],
    [
      "Natur",
      "Shenandoah mit den Luray Caverns, Great Smoky Mountains, Everglades, Mangroven und das Korallenriff der Keys."
    ],
    [
      "Strand und Schnorcheln",
      "Tybee Island, St. Augustine Beach, vier Nächte Siesta Key an der Golfküste, vier Nächte Key Largo mit Schnorcheltour am Riff, Miami Beach. Wasser ca. 29–31 °C."
    ],
    [
      "Action und Freizeitparks",
      "Universal und Kennedy Space Center in Orlando, Dollywood, Airboat in den Everglades, Broadway in New York."
    ],
    ["Ruhetage", "Siesta Key und Key Largo sind Strandferien; in New York und Washington kein Auto."]
  ],
  stationenIntro: "Elf Stationen von New York bis Miami. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "19.–23. Juni",
      naechte: "4 Nächte",
      anreise: "Direktflug Zürich–New York JFK am Sa, 19.06.2027 (SWISS, täglich; im Sommer 2026 Abflug ca. 13.15 Uhr, Ankunft ca. 16.35 Uhr), Zeitverschiebung −6 Std. Mit AirTrain und U-Bahn oder Taxi nach Manhattan (ca. 1–1,5 Std.).",
      text: "Der Start in der grössten Stadt der USA: Wolkenkratzer, Parks, Museen und Hafenpanorama.",
      teens: "Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building oder Top of the Rock, Broadway-Musical, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte gegen den Jetlag und für die Highlights: Tag 1 Midtown und Aussichtsplattform, Tag 2 Freiheitsstatue und Lower Manhattan (9/11 Memorial), Tag 3 Central Park und Museen, Tag 4 Brooklyn Bridge und Wunschprogramm der Kids.",
        "<strong>Ohne Auto:</strong> In Manhattan kostet ein Parkplatz ca. 35–85 USD pro Nacht, dazu die Staugebühr von 9 USD pro Tag; darum beginnt die Mietwagenfahrt erst in Washington.",
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
    },
    {
      nr: 2,
      name: "Washington, D.C.",
      land: "us",
      region: "Washington, D.C.",
      datum: "23.–26. Juni",
      naechte: "3 Nächte",
      anreise: "Amtrak-Zug ab New York Penn Station nach Washington Union Station (Northeast Regional ca. 3,5 Std., Acela ca. 3 Std.; viele Züge pro Tag). In der Stadt Metro, Velo oder zu Fuss.",
      text: "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
      teens: "National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag National Mall und Denkmäler, ein Tag Museen (Air and Space, Natural History), ein halber Tag Arlington oder Georgetown.",
        "<strong>Hitze:</strong> Im Juli heiss und schwül, nachmittags oft Gewitter; Museen als Hitzepause einplanen.",
        "<strong>Hinweis:</strong> Das White House ist von innen nur nach früher Anfrage über die Schweizer Botschaft zu besichtigen, von aussen jederzeit. Den Mietwagen (Einwegmiete bis Miami) erst am Abreisetag abholen."
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
      nr: 3,
      name: "Shenandoah (Luray)",
      ersatzsuche: "Shenandoah National Park|Luray",
      land: "us",
      region: "Virginia",
      datum: "26.–28. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen ab Washington über die Interstate 66 und die US-211 nach Luray (ca. 1,75–2 Std., ca. 150 km); vor der Stadt oft Stau.",
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
      nr: 4,
      name: "Great Smoky Mountains (Gatlinburg)",
      ersatzsuche: "Great Smoky Mountains|Gatlinburg",
      land: "us",
      region: "Tennessee",
      datum: "28. Juni–1. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Luray über die Interstate 81 und die Interstate 40 nach Gatlinburg (ca. 6–7 Std., ca. 630–680 km). Einer der längsten Fahrtage: früh starten.",
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
      nr: 5,
      name: "Charleston",
      land: "us",
      region: "South Carolina",
      datum: "1.–3. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Gatlinburg über die Berge nach Asheville und auf der Interstate 26 nach Charleston (ca. 5,75–6,25 Std., ca. 560 km); in Asheville Mittagshalt möglich.",
      text: "Pastellfarbene Häuser, Kirchtürme und Gaslaternen in einer der ältesten Städte der USA. Vor dem Hafen liegt Fort Sumter, wo der Bürgerkrieg begann; Strände und Inseln sind nah.",
      teens: "Flugzeugträger USS Yorktown in Patriots Point, Boot zum Fort Sumter, Rainbow Row und Ananasbrunnen, Baden am Folly Beach, die riesige Angel Oak.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt und Fort Sumter, ein Tag Patriots Point und Strand.",
        "<strong>Geschichte:</strong> Charleston war ein grosser Sklavenhandelshafen. Das International African American Museum und Plantagen wie McLeod erzählen diese Geschichte.",
        "<strong>Fort Sumter:</strong> Nur mit dem Boot erreichbar (ca. 2,25 Std. mit Besuch); 2026 ca. 35 USD ab 12 Jahren, Tickets vorab."
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
      nr: 6,
      name: "Savannah",
      land: "us",
      region: "Georgia",
      datum: "3.–5. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Charleston über die US-17 und die Interstate 95 nach Savannah (ca. 2 Std., ca. 175 km).",
      text: "Eine der schönsten Altstädte des Südens: 22 grüne Plätze unter Eichen mit Spanischem Moos, alte Backsteinhäuser am Fluss und in einer halben Stunde der Strand von Tybee Island.",
      teens: "Trolley oder Geisterführung am Abend, Brunnen im Forsyth Park, River Street mit Schiffen, Strand und Leuchtturm auf Tybee Island, Delfine vom Boot aus.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt mit den Plätzen und der River Street, ein Tag Tybee Island (Strand, Leuchtturm, ca. 30 Min.).",
        "<strong>4. Juli:</strong> Am Nationalfeiertag (Sonntag) Feuerwerk am Fluss; Unterkünfte früh buchen.",
        "<strong>Hitze:</strong> Schwül und heiss, am Nachmittag oft Gewitter; Programm am Morgen und Abend."
      ],
      ausserdem: "Bonaventure Cemetery, Wormsloe (Eichenallee), Fort Pulaski, Hilton Head Island.",
      bilder: [
        {titel: "Plätze mit Eichen", suche: "Savannah Georgia square oak Spanish moss", stichwort: "savannah|moss"},
        {titel: "Forsyth Park", suche: "Forsyth Park fountain Savannah", stichwort: "forsyth"},
        {titel: "River Street", suche: "River Street Savannah", stichwort: "savannah|river"},
        {titel: "Tybee Island", suche: "Tybee Island lighthouse", stichwort: "tybee"},
        {titel: "Wormsloe", suche: "Wormsloe oak avenue", stichwort: "wormsloe|oak"},
        {titel: "Altstadt", suche: "Savannah historic district", stichwort: "savannah"}
      ]
    },
    {
      nr: 7,
      name: "St. Augustine",
      land: "us",
      region: "Florida",
      datum: "5.–6. Juli",
      naechte: "1 Nacht",
      anreise: "Mietwagen von Savannah über die Interstate 95 nach St. Augustine (ca. 2,75–3 Std., ca. 305 km).",
      text: "Die älteste von Europäern gegründete Stadt der USA (1565): eine spanische Festung am Meer, enge Gassen mit Balkonen und ein langer Atlantikstrand gleich vor der Stadt.",
      teens: "Festung Castillo de San Marcos mit Kanonenvorführung, Aufstieg auf den Leuchtturm (219 Stufen), Altstadtgasse St. George Street, Baden am St. Augustine Beach, Alligator Farm.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag Festung und Altstadt, am Abend Strand, am Morgen Leuchtturm und weiter nach Orlando.",
        "<strong>Castillo de San Marcos:</strong> Eintritt 15 USD pro Person ab 16 Jahren (Kids gratis), nur mit Karte; mit dem Jahrespass inklusive.",
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
      nr: 8,
      name: "Orlando",
      land: "us",
      region: "Florida",
      datum: "6.–10. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen von St. Augustine über die Interstate 95 und die Interstate 4 nach Orlando (ca. 1,75 Std., ca. 170 km).",
      text: "Hauptstadt der Freizeitparks und Ausgangspunkt zum Kennedy Space Center, von wo die Raketen starten. Für die Teenager einer der Höhepunkte der Reise.",
      teens: "Universal Studios und Islands of Adventure (Harry Potter), Kennedy Space Center mit der Saturn-V-Rakete und dem Space Shuttle Atlantis, mit Glück ein Raketenstart.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: zwei Tage Universal (beide Parks oder Epic Universe), ein Tag Kennedy Space Center (ca. 1 Std. östlich), ein ruhiger Tag am Pool.",
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
      nr: 9,
      name: "Siesta Key (Golfküste)",
      ersatzsuche: "Siesta Key|Siesta Beach",
      land: "us",
      region: "Florida",
      datum: "10.–14. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen von Orlando über die Interstate 4 und die Interstate 75 nach Siesta Key bei Sarasota (ca. 2,25 Std., ca. 220 km).",
      text: "Eine Insel vor Sarasota mit einem der bekanntesten Strände der USA: feiner weisser Quarzsand, der auch in der Sonne kühl bleibt, und ruhiges, warmes Wasser im Golf von Mexiko.",
      teens: "Baden und Sandburgen am Siesta Beach, Schnorcheln am Point of Rocks (Fische, manchmal Seekühe), Kajak durch die Mangroven, Sonnenuntergang am Strand, Haifischzähne suchen in Venice.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte Strandferien in einem Apartment, mit Ruhetagen nach den Freizeitparks.",
        "<strong>Strand:</strong> Siesta Beach hat Sand aus ca. 99 % Quarz; der Gratis-Parkplatz (ca. 850–950 Plätze) ist früh voll, am Wochenende vor 10 Uhr da sein. Die Gratis-Bahn Siesta Key Breeze fährt täglich über die Insel.",
        "<strong>Schnorcheln:</strong> Point of Rocks am Südende von Crescent Beach: flach und ruhig, Einstieg vom Strand, Sicht oft nur ein paar Meter; der Zugang hat nur ca. 20 Parkplätze.",
        "<strong>Wetter:</strong> Fast täglich Gewitter am späten Nachmittag; bei Blitz sofort aus dem Wasser."
      ],
      ausserdem: "Sarasota mit der Altstadt, Myakka River State Park (Alligatoren), Venice Beach, Lido Key.",
      bilder: [
        {titel: "Siesta Beach", suche: "Siesta Key beach", stichwort: "siesta"},
        {titel: "Weisser Sand", suche: "Siesta Key white sand", stichwort: "siesta|sand"},
        {titel: "Sonnenuntergang", suche: "Siesta Key sunset", stichwort: "siesta|sunset"},
        {titel: "Seekuh", suche: "manatee Florida", stichwort: "manatee"},
        {titel: "Mangroven", suche: "Sarasota mangrove kayak", stichwort: "mangrove|kayak"},
        {titel: "Myakka River", suche: "Myakka River State Park alligator", stichwort: "myakka|alligator"}
      ]
    },
    {
      nr: 10,
      name: "Key Largo und Islamorada",
      land: "us",
      region: "Florida Keys",
      datum: "14.–18. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen von Siesta Key über die Interstate 75 (Alligator Alley quer durch die Everglades) und Homestead nach Key Largo oder Islamorada (ca. 4,5–5 Std., ca. 470 km). Alternativ über den Tamiami Trail mit Halt in Shark Valley (ähnlich lang).",
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
      nr: 11,
      name: "Miami",
      land: "us",
      region: "Florida",
      datum: "18.–21. Juli",
      naechte: "3 Nächte, Rückflug 21. Juli",
      anreise: "Mietwagen von Key Largo über den Highway US-1 nach Miami (ca. 1,25–1,5 Std., ca. 95 km).",
      text: "Art-déco-Häuser und Strand in South Beach, kubanisches Essen in Little Havana und gleich vor der Stadt die Everglades mit Alligatoren und Mangroven.",
      teens: "Airboat-Fahrt und Alligatoren in den Everglades, Strand und Art-déco-Viertel in South Beach, Graffiti-Kunst in Wynwood Walls, Little Havana mit kubanischem Essen.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Everglades (Airboat oder Shark Valley Tram), ein Tag South Beach, ein halber Tag Wynwood und Little Havana.",
        "<strong>Everglades:</strong> Eintritt ca. 35 USD pro Auto, dazu für Nicht-US-Bewohner ab 16 Jahren 100 USD pro Person, mit dem Jahrespass (250 USD) entfällt beides. Shark Valley Tram (ca. 2 Std.) 34 USD Erwachsene, 18 USD Kinder bis 12; Airboat-Touren ausserhalb des Parks ca. 27–37 USD.",
        "<strong>Wetter:</strong> Heiss und feucht (ca. 33 °C), am Nachmittag oft kurze Gewitter; Juni bis November ist Hurrikansaison, Wetterberichte verfolgen.",
        "<strong>Rückflug:</strong> Am Mi, 21.07.2027 direkt mit SWISS ab Miami (im Sommer 2026 Abflug ca. 19.40 Uhr, ca. 9 Std., Ankunft in Zürich am nächsten Morgen ca. 10.50 Uhr). Mietwagen am Flughafen zurückgeben."
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
    }
  ],
  abschluss: "Rückflug ab Miami nach Zürich am Mi, 21.07.2027 am Abend (ca. 9 Std.), Ankunft am Do, 22.07.2027 am Vormittag, dann mit der Bahn nach Brig-Glis. Bis zum Ferienende bleiben zwei Tage gegen den Jetlag.",
  budgetIntro: "Mittelklasse inklusive Flüge, Mietwagen, Zug, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–New York und Miami–Zürich",
        "4’000–6’000",
        "5’000",
        "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Mietwagen (Einwegmiete, Benzin, Parken, Maut)",
        "2’300–4’000",
        "3’000",
        "Washington–Miami (ca. 25 Tage, ca. 1’750 Meilen); Rückgabegebühr typischerweise ca. 250–500 USD, Gesamtpreise vergleichen; Maut in Florida"
      ],
      [
        "Zug und lokale Verkehrsmittel",
        "600–1’300",
        "900",
        "Amtrak New York–Washington, U-Bahn und Metro, Taxi vom Flughafen"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "8’000–13’000",
        "10’100",
        "ca. 150–600 CHF pro Nacht; New York, Washington, Siesta Key und die Keys am teuersten"
      ],
      ["Verpflegung (Restaurants, Imbiss, Getränke)", "4’500–8’000", "6’000", "ca. 140–250 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)",
        "4’500–8’000",
        "6’000",
        "Pass 250 USD, Aussichtsplattform und Broadway, Dollywood, Fort Sumter, zwei Tage Universal, Kennedy Space Center, Schnorcheltour, Everglades"
      ],
      [
        "ESTA, Versicherung, eSIM",
        "900–1’800",
        "1’300",
        "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"
      ],
      ["Reserve (ca. 5 %)", "1’250–2’100", "1’600", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. New York (4)", "2’650–4’420"],
      ["2. Washington, D.C. (3)", "1’280–2’180"],
      ["3. Shenandoah (2)", "600–1’000"],
      ["4. Great Smoky Mountains (3)", "1’000–1’700"],
      ["5. Charleston (2)", "750–1’250"],
      ["6. Savannah (2)", "650–1’100"],
      ["7. St. Augustine (1)", "300–500"],
      ["8. Orlando (4)", "1’800–3’200"],
      ["9. Siesta Key (4)", "1’300–2’200"],
      ["10. Key Largo und Islamorada (4)", "1’400–2’400"],
      ["11. Miami (3)", "1’050–1’800"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei den grossen Freizeitparks und im Kennedy Space Center schon den Erwachsenenpreis; bei der Shark Valley Tram zahlt der Sohn noch den Kinderpreis.",
      "Sparhebel: ein Zimmer mit zwei Queen-Betten, Apartment mit Küche in Siesta Key und den Keys, nur ein Tag Universal, die Gratis-Museen in Washington.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "33’900",
    spanne: "26’100–44’200",
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
      "Seit Januar 2026 zahlen Nicht-US-Bewohner ab 16 Jahren in 11 Parks zusätzlich 100 USD pro Person; auf dieser Route betrifft das die Everglades. Der Jahrespass für Nicht-Residenten kostet 250 USD und deckt das Fahrzeug bzw. die Insassen: Er lohnt sich knapp (Everglades mit Zusatzgebühr, Shenandoah, Castillo de San Marcos). In den Smokies braucht es zusätzlich ein Parkticket."
    ],
    [
      "Mietwagen",
      "Familienvan oder SUV, die Einwegmiete Washington–Miami früh buchen und Gesamtpreise vergleichen (Rückgabegebühr). In Florida viele Mautstrassen: Mautpaket des Vermieters klären. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Hurrikane",
      "Florida und der Süden sind im Juli ca. 32–33 °C heiss und sehr schwül, mit fast täglichen Gewittern am Nachmittag (bei Blitz aus dem Wasser). Die Hurrikansaison läuft von Juni bis November, mit dem Höhepunkt Mitte August bis Mitte Oktober; im Juli ist ein Sturm selten, aber möglich: Wetterberichte verfolgen, Reiseversicherung und flexible Buchungen. In Shenandoah und den Smokies ist es kühler."
    ],
    ["Zeitzonen", "Die ganze Route liegt in der Eastern-Zeit, 6 Stunden hinter der Schweiz."],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung mit hoher Deckung ist in den USA unverzichtbar, Arztkosten sind sehr hoch. Zusätzlich Annullationsschutz für Flüge, Hotels und Mietwagen."
    ],
    [
      "Zug im Nordosten",
      "Amtrak-Züge New York–Washington fahren oft (Northeast Regional ca. 3,5 Std., Acela ca. 3 Std.); Tickets früh online buchen, Gepäck selbst tragen."
    ],
    [
      "Notfall",
      "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."
    ],
    [
      "Handy",
      "eSIM für die USA vorab kaufen. Offline-Karten für die Smokies und die Everglades laden, dort gibt es oft keinen Empfang."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
