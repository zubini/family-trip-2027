// Reise: USA Nordost und Kanada, Rundreise von New York über Washington, Chicago, Niagara, Toronto, Montréal und Québec nach Boston
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.usanordost = {
  titel: "USA Nordost und Kanada: New York, Washington, Chicago, Niagara, Montréal und Boston",
  menu: "USA Nordost / Kanada",
  untertitel: "Fünf Wochen Städte, Seen und Wälder: New York, mit dem Zug nach Washington, mit dem Mietwagen durch die Berge von Shenandoah zu den Achterbahnen von Cedar Point und nach Chicago, über die Niagarafälle nach Kanada mit Toronto, Algonquin, Montréal und Québec und durch die White Mountains nach Boston.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {suche: "Niagara Falls Horseshoe Falls|Niagara Falls", stichwort: "niagara", alt: "Niagarafälle"},
  planIntro: "Abflug ab Zürich nach New York am Sa, 19.06.2027, Rückflug ab Boston am Mi, 21.07.2027 am Abend (Ankunft Do, 22.07.2027). Von New York mit dem Zug nach Washington, dort den Mietwagen abholen und in Boston zurückgeben (Einwegmiete mit Fahrt durch Kanada, ca. 22 Tage). Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Flug Zürich–New York",
    info: "Abflug am Sa, 19.06.2027 am Vormittag, Direktflug mit SWISS ca. 9–9,25 Std., Ankunft in New York (JFK) am frühen Nachmittag Ortszeit"
  },
  plan: [
    {
      datum: "19.–23. Juni",
      name: "1. New York",
      naechte: 4,
      info: "Flug ab Zürich (ca. 9–9,25 Std.), mit Zug oder Taxi in die Stadt (ca. 1–1,5 Std.)"
    },
    {datum: "23.–26. Juni", name: "2. Washington", naechte: 3, info: "Amtrak-Zug ab Penn Station (ca. 3–3,5 Std.)"},
    {
      datum: "26.–28. Juni",
      name: "3. Shenandoah (Luray)",
      naechte: 2,
      info: "Mietwagen in Washington abholen, Fahrt nach Luray (ca. 2–2,5 Std.)"
    },
    {datum: "28.–29. Juni", name: "Zwischenübernachtung Pittsburgh", naechte: 1, info: "Mietwagen (ca. 4,5–5 Std.)"},
    {datum: "29. Juni–1. Juli", name: "4. Sandusky (Cedar Point)", naechte: 2, info: "Mietwagen (ca. 3,25–3,75 Std.)"},
    {datum: "1.–4. Juli", name: "5. Chicago", naechte: 3, info: "Mietwagen (ca. 5–5,5 Std.), Uhr −1 Std."},
    {
      datum: "4.–5. Juli",
      name: "Zwischenübernachtung Dearborn (Detroit)",
      naechte: 1,
      info: "Mietwagen (ca. 5–5,5 Std.), Uhr +1 Std."
    },
    {
      datum: "5.–7. Juli",
      name: "6. Niagara Falls (Kanada)",
      naechte: 2,
      info: "Mietwagen über die Grenze bei Detroit–Windsor (ca. 4,5–5,5 Std. mit Grenze)"
    },
    {datum: "7.–9. Juli", name: "7. Toronto", naechte: 2, info: "Mietwagen (ca. 1,5–2 Std.)"},
    {datum: "9.–11. Juli", name: "8. Algonquin", naechte: 2, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {
      datum: "11.–12. Juli",
      name: "Zwischenübernachtung Ottawa",
      naechte: 1,
      info: "Mietwagen durch den Park (ca. 4,5–5 Std.)"
    },
    {datum: "12.–14. Juli", name: "9. Montréal", naechte: 2, info: "Mietwagen (ca. 2–2,5 Std.)"},
    {datum: "14.–16. Juli", name: "10. Québec", naechte: 2, info: "Mietwagen (ca. 3–3,5 Std.)"},
    {
      datum: "16.–18. Juli",
      name: "11. White Mountains (North Conway)",
      naechte: 2,
      info: "Mietwagen über die Grenze (ca. 5,5–6,5 Std. mit Grenze)"
    },
    {
      datum: "18.–21. Juli",
      name: "12. Boston",
      naechte: 3,
      info: "Mietwagen (ca. 3–3,5 Std.), Rückgabe bei der Ankunft; Rückflug 21. Juli"
    }
  ],
  rueckflug: {
    datum: "21. Juli",
    name: "Flug Boston–Zürich",
    info: "Direktflug Boston–Zürich mit SWISS am Mi, 21.07.2027 am Abend (2026: ab ca. 21.40 Uhr), ca. 7,25 Std., Ankunft in Zürich am Do, 22.07.2027 gegen Mittag"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte, 12 Stationen und drei Zwischenübernachtungen (Pittsburgh, Dearborn, Ottawa). New York–Washington mit dem Zug (ca. 3–3,5 Std.), danach eine Einwegmiete Washington–Boston (ca. 22 Tage) mit ca. 4’400 km und ca. 45–50 Std. reiner Fahrzeit an 13 Fahrtagen, realistisch mit Pausen, Tanken, Stau und zwei Grenzübertritten ca. 53–60 Std. im Auto. Die längsten Fahrtage: Québec–White Mountains (ca. 5,5–6,5 Std.), Sandusky–Chicago, Chicago–Dearborn und Dearborn–Niagara (je ca. 5–5,5 Std.). In Chicago Uhr −1 Std., sonst überall Eastern-Zeit (−6 Std. zur Schweiz)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–New York (JFK) mit SWISS als Direktflug ca. 9–9,25 Std. am Sa, 19.06.2027 am Vormittag, Ankunft am frühen Nachmittag (Zeitverschiebung −6 Std.). Rückflug: Boston–Zürich mit SWISS als Direktflug ca. 7,25 Std. am Mi, 21.07.2027 am Abend (2026: Abflug ca. 21.40 Uhr), Ankunft am Do, 22.07.2027 gegen Mittag. Gabelflug (hin nach New York, zurück ab Boston), geschätzt ca. 1’000–1’450 CHF pro Person im Juli, für alle vier ca. 4’000–5’800 CHF. Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "New York, Washington und Chicago im Juli heiss und schwül (ca. 29–33 °C), Gewitter am Nachmittag; in Kanada, Algonquin und den White Mountains angenehmer (ca. 24–28 °C, Nächte kühl). In Algonquin im Juli Mücken, Mückenschutz und lange Kleider für den Abend."
    ],
    [
      "Vorab buchen",
      "Amtrak New York–Washington (früh günstiger), Einwegmiete Washington–Boston mit Erlaubnis für Kanada (Einweggebühr vergleichen), Aussichtsplattform und Broadway in New York, Cedar Point, Unterkünfte in Niagara Falls, Algonquin und Québec (im Juli schnell voll), Bootsfahrt an den Niagarafällen, Zahnradbahn auf den Mount Washington."
    ],
    [
      "Optional",
      "Philadelphia (auf dem Weg nach Washington, mit dem Zug), Fallingwater (Haus von Frank Lloyd Wright, zwischen Shenandoah und Pittsburgh), Indiana Dunes am Michigansee, Thousand Islands (zwischen Toronto und Montréal), Tadoussac mit Walbeobachtung (ab Québec), Cape Cod (ab Boston)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Zug von New York nach Washington, mit dem Mietwagen über die Appalachen nach Cedar Point und Chicago, an den Grossen Seen entlang nach Niagara und Toronto, durch die Wälder von Algonquin nach Montréal und Québec und über die White Mountains nach Boston.",
    breit: true,
    legende: ["train", "car"],
    karten: [{datei: "karten/usa-nordost.svg"}]
  },
  abwechslungIntro: "Weltstadt, Hauptstadt mit Museen, Berge, Achterbahnen, Grossstadt am See, Wasserfälle, Kanadas Städte und Wälder, französisch geprägtes Québec, Berge in Neuengland und zum Schluss Boston.",
  abwechslung: [
    [
      "Natur",
      "Skyline Drive und Wasserfälle in Shenandoah, Strand am Eriesee, Niagarafälle, Seen und Wälder in Algonquin (mit Glück Elche), Montmorency-Fall bei Québec, Mount Washington und Flume Gorge in den White Mountains."
    ],
    [
      "Strand und Baden",
      "Strand am Eriesee bei Cedar Point, Stadtstrände am Michigansee in Chicago, Baden im See in Algonquin, Flussbaden in den White Mountains; kein warmes Meer."
    ],
    [
      "Action und Freizeitparks",
      "Achterbahnen in Cedar Point, Glasbalkon im Skydeck, Bootsfahrt in die Gischt der Niagarafälle, CN Tower, Kanu in Algonquin, Zahnradbahn auf den Mount Washington, Broadway in New York."
    ],
    [
      "Städte und Kultur",
      "New York, Washington mit den Smithsonian-Museen (gratis), Chicago, Henry Ford Museum bei Detroit, Toronto, Ottawa, Montréal und die Altstadt von Québec (UNESCO) auf Französisch, Boston mit dem Freedom Trail."
    ],
    [
      "Ruhetage",
      "New York, Washington, Chicago und Boston haben je 3–4 Nächte, sonst meist 2; drei Ein-Nacht-Halte unterwegs. In New York, Washington und Boston kein Auto."
    ]
  ],
  stationenIntro: "Zwölf Stationen von New York bis Boston. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "New York",
      land: "us",
      region: "New York",
      datum: "19.–23. Juni",
      naechte: "4 Nächte",
      anreise: "Direktflug Zürich–New York (JFK) mit SWISS am Sa, 19.06.2027 (ca. 9–9,25 Std., Abflug am Vormittag, Ankunft am frühen Nachmittag), Zeitverschiebung −6 Std. Mit AirTrain und U-Bahn oder Taxi nach Manhattan (ca. 1–1,5 Std.).",
      text: "Der Start in der Weltstadt: Wolkenkratzer, Central Park, Freiheitsstatue und Broadway. Vier Nächte, um den Jetlag zu überwinden; ein Auto braucht ihr hier nicht.",
      teens: "Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building, Top of the Rock oder Summit, Broadway-Musical, Velo im Central Park, High Line, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: Ankunftsabend am Times Square, ein Tag Freiheitsstatue und Downtown, ein Tag Central Park und Museum, ein Tag Brooklyn oder Coney Island, an einem Abend Broadway.",
        "<strong>Unterwegs:</strong> U-Bahn mit OMNY (Kreditkarte oder Handy), viel zu Fuss; Taxi und Uber für den Flughafen.",
        "<strong>Preise:</strong> Broadway im Schnitt ca. 130 USD pro Ticket, Aussichtsplattformen ca. 45–60 USD pro Person; früh online buchen."
      ],
      ausserdem: "American Museum of Natural History, 9/11 Memorial, Staten Island Ferry (gratis, mit Blick auf die Freiheitsstatue), Chelsea Market, Little Island.",
      bilder: [
        {titel: "Skyline", suche: "Manhattan skyline", stichwort: "manhattan|skyline"},
        {titel: "Freiheitsstatue", suche: "Statue of Liberty", stichwort: "liberty"},
        {titel: "Central Park", suche: "Central Park New York", stichwort: "central park"},
        {titel: "Times Square", suche: "Times Square New York", stichwort: "times square"},
        {titel: "Brooklyn Bridge", suche: "Brooklyn Bridge", stichwort: "brooklyn"},
        {titel: "High Line", suche: "High Line New York", stichwort: "high line"}
      ]
    },
    {
      nr: 2,
      name: "Washington",
      ersatzsuche: "Washington DC",
      land: "us",
      region: "District of Columbia",
      datum: "23.–26. Juni",
      naechte: "3 Nächte",
      anreise: "Amtrak-Zug ab New York Penn Station nach Washington Union Station (Northeast Regional ca. 3,25–3,5 Std., Acela ca. 3 Std.; mehrmals pro Stunde, früh gebucht günstiger). In der Stadt Metro und zu Fuss, noch kein Auto.",
      text: "Die Hauptstadt mit Weissem Haus, Kapitol und der langen National Mall. Die meisten Smithsonian-Museen kosten keinen Eintritt, ideal auch an heissen oder regnerischen Tagen.",
      teens: "National Air and Space Museum (Raketen und Mondkapsel), Naturkundemuseum mit Dinosauriern und dem Hope-Diamanten, International Spy Museum, Lincoln Memorial am Abend, Velo oder E-Scooter entlang der Mall, Weisses Haus von aussen.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag National Mall mit Denkmälern (am Abend, wenn es kühler ist), ein Tag Museen, ein halber Tag Kapitol oder Georgetown.",
        "<strong>Eintritt:</strong> Smithsonian-Museen und Zoo gratis (für einige Museen Zeitfenster online reservieren); Führung im Kapitol gratis mit Reservation; Spy Museum kostet Eintritt.",
        "<strong>Mietwagen:</strong> Erst bei der Abreise abholen (z.B. Union Station oder Flughafen Reagan), damit in Washington kein Parkplatz nötig ist."
      ],
      ausserdem: "Arlington National Cemetery, Georgetown am Potomac, Library of Congress, National Zoo mit Pandas (je nach Stand), Bootsfahrt auf dem Potomac.",
      bilder: [
        {titel: "Kapitol", suche: "United States Capitol", stichwort: "capitol"},
        {titel: "Lincoln Memorial", suche: "Lincoln Memorial", stichwort: "lincoln"},
        {
          titel: "National Mall",
          suche: "National Mall Washington Monument",
          stichwort: "national mall|washington monument"
        },
        {titel: "Air and Space Museum", suche: "National Air and Space Museum", stichwort: "air and space"},
        {titel: "Weisses Haus", suche: "White House Washington", stichwort: "white house"},
        {titel: "Georgetown", suche: "Georgetown Washington DC", stichwort: "georgetown"}
      ]
    },
    {
      nr: 3,
      name: "Shenandoah (Luray)",
      ersatzsuche: "Shenandoah National Park",
      land: "us",
      region: "Virginia",
      datum: "26.–28. Juni",
      naechte: "2 Nächte",
      anreise: "Mietwagen in Washington abholen (Einwegmiete bis Boston, mit Erlaubnis für Kanada), dann nach Luray im Shenandoah Valley (ca. 1,75 Std. Fahrt, mit Abholung ca. 2–2,5 Std.).",
      text: "Bewaldete Bergkämme der Blue Ridge Mountains mit dem Skyline Drive, Wasserfällen und weiten Blicken über das Tal; dazu die grösste Tropfsteinhöhle im Osten der USA. Ein grüner Gegensatz zu den Städten.",
      teens: "Wanderung zu einem Wasserfall (Dark Hollow Falls, ca. 2,5 km hin und zurück) oder auf den Felsen Stony Man, Aussichtspunkte am Skyline Drive, Rehe und mit Glück Schwarzbären, Tropfsteinhöhle Luray Caverns, Kanu oder Tubing auf dem Shenandoah River.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Skyline Drive mit kurzen Wanderungen, ein halber Tag Luray Caverns oder Fluss.",
        "<strong>Gebühr:</strong> Shenandoah-Nationalpark ca. 30 USD pro Auto für 7 Tage; er gehört nicht zu den Parks mit 100 USD Zusatzgebühr für Nicht-US-Bewohner. Luray Caverns ca. 35 USD pro Person.",
        "<strong>Hinweis:</strong> Im Sommer Gewitter am Nachmittag; Wanderungen am Morgen. Essen von Bären fernhalten."
      ],
      ausserdem: "Old Rag (anspruchsvolle Kletterwanderung, mit Tagesbewilligung), Big Meadows mit Rehen am Abend, Fallingwater (Option auf dem Weg nach Pittsburgh, Umweg ca. 1 Std.).",
      bilder: [
        {titel: "Skyline Drive", suche: "Skyline Drive Shenandoah", stichwort: "skyline drive|shenandoah"},
        {titel: "Dark Hollow Falls", suche: "Dark Hollow Falls", stichwort: "dark hollow"},
        {titel: "Luray Caverns", suche: "Luray Caverns", stichwort: "luray"},
        {titel: "Stony Man", suche: "Stony Man Shenandoah", stichwort: "stony man"},
        {titel: "Shenandoah River", suche: "Shenandoah River", stichwort: "shenandoah"},
        {titel: "Blue Ridge", suche: "Blue Ridge Mountains Virginia", stichwort: "blue ridge"}
      ]
    },
    {
      nr: 4,
      name: "Sandusky (Cedar Point)",
      ersatzsuche: "Cedar Point",
      land: "us",
      region: "Ohio",
      datum: "29. Juni–1. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenstopp in Pittsburgh", datum: "28.–29. Juni"},
      anreise: "Mietwagen von Luray nach Pittsburgh (ca. 4,5–5 Std.), Übernachtung (Abend mit der Standseilbahn Duquesne Incline auf den Mount Washington, Blick auf die Flüsse und die Stadt). Am nächsten Tag weiter nach Sandusky am Eriesee (ca. 3,25–3,75 Std.).",
      text: "Cedar Point gilt als einer der besten Achterbahnparks der Welt: eine Halbinsel im Eriesee mit Rekordbahnen, Strand und Wasserpark. Ein ganzer Tag für die Kids.",
      teens: "Ein ganzer Tag Cedar Point mit Achterbahnen wie Millennium Force, Steel Vengeance und Top Thrill 2, Strand am Eriesee, Wasserpark Cedar Point Shores.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Ankunft am Nachmittag, ein voller Tag im Park.",
        "<strong>Tickets:</strong> Tageseintritt an der Kasse ca. 105 USD, online mit Aktionen deutlich günstiger; Parkplatz ca. 20–35 USD. Für einzelne Bahnen gelten Mindestgrössen.",
        "<strong>Tipp:</strong> Früh am Morgen bei Parköffnung da sein; Fast Lane kostet extra."
      ],
      ausserdem: "Kelleys Island oder Put-in-Bay mit der Fähre, Strand am Eriesee, Rock and Roll Hall of Fame in Cleveland (auf dem Weg, ca. 1 Std. vor Sandusky).",
      bilder: [
        {titel: "Cedar Point", suche: "Cedar Point amusement park", stichwort: "cedar point"},
        {titel: "Millennium Force", suche: "Millennium Force Cedar Point", stichwort: "millennium"},
        {titel: "Steel Vengeance", suche: "Steel Vengeance", stichwort: "steel vengeance"},
        {titel: "Eriesee", suche: "Lake Erie beach Ohio", stichwort: "erie"},
        {titel: "Duquesne Incline", suche: "Duquesne Incline Pittsburgh", stichwort: "duquesne|incline"},
        {titel: "Pittsburgh", suche: "Pittsburgh skyline", stichwort: "pittsburgh"}
      ]
    },
    {
      nr: 5,
      name: "Chicago",
      land: "us",
      region: "Illinois",
      datum: "1.–4. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von Sandusky der Ohio- und Indiana-Mautstrasse entlang nach Chicago (ca. 4,75 Std. Fahrt, mit Pausen ca. 5–5,5 Std.), Uhr −1 Std. Auto im Hotel parkieren und in der Stadt mit der Hochbahn «L» und zu Fuss unterwegs sein.",
      text: "Grossstadt am Michigansee mit berühmter Architektur, Strand mitten in der Stadt und Deep-Dish-Pizza. Am 4. Juli, dem Nationalfeiertag, geht es weiter; Feuerwerke gibt es oft schon am Vorabend.",
      teens: "Glasbalkon im Skydeck (Willis Tower), Architektur-Bootstour auf dem Chicago River, Navy Pier mit Riesenrad, «The Bean» im Millennium Park, Museum of Science and Industry (U-Boot U-505), Strand am Michigansee, Deep-Dish-Pizza.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Downtown mit Bootstour und Millennium Park, ein Tag Museum und Strand, ein Abend am Navy Pier.",
        "<strong>Preise:</strong> Skydeck ca. 32 USD Erwachsene, Architektur-Bootstour ca. 45–50 USD pro Person; Kombitickets sind günstiger.",
        "<strong>Parkieren:</strong> In der Innenstadt teuer (Hotel oft 50–70 USD pro Nacht)."
      ],
      ausserdem: "Field Museum mit dem T-Rex «Sue», Shedd Aquarium, Lincoln Park Zoo (gratis), Baseball im Wrigley Field, Indiana Dunes (Option auf der Weiterfahrt).",
      bilder: [
        {titel: "Skyline", suche: "Chicago skyline lake", stichwort: "chicago"},
        {titel: "Cloud Gate", suche: "Cloud Gate Chicago", stichwort: "cloud gate|bean"},
        {titel: "Skydeck", suche: "Willis Tower Skydeck ledge", stichwort: "skydeck|willis"},
        {titel: "Navy Pier", suche: "Navy Pier Chicago", stichwort: "navy pier"},
        {titel: "Chicago River", suche: "Chicago River architecture boat", stichwort: "chicago river"},
        {titel: "Michigansee", suche: "Chicago beach Lake Michigan", stichwort: "lake michigan|beach"}
      ]
    },
    {
      nr: 6,
      name: "Niagara Falls (Kanada)",
      ersatzsuche: "Niagara Falls",
      land: "ca",
      region: "Ontario",
      datum: "5.–7. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenstopp in Dearborn (Detroit)", datum: "4.–5. Juli"},
      anreise: "Mietwagen von Chicago nach Dearborn bei Detroit (ca. 4,5 Std. Fahrt, mit Pausen ca. 5–5,5 Std.; Uhr +1 Std.), Übernachtung, am Morgen das Henry Ford Museum (Autos, Flugzeuge, Präsidentenwagen). Am Nachmittag über die Grenze bei Detroit–Windsor nach Kanada und durch Ontario nach Niagara Falls (ca. 4 Std. Fahrt, mit Grenze ca. 4,5–5,5 Std.).",
      text: "Die mächtigen Hufeisenfälle von der kanadischen Seite aus, wo der Blick am besten ist. Dazu die bunte, laute Clifton Hill und am Abend beleuchtete Fälle mit Feuerwerk.",
      teens: "Bootsfahrt mit Niagara City Cruises in die Gischt, Journey Behind the Falls (Tunnel hinter den Fällen), Zipline zu den Fällen, Clifton Hill mit Riesenrad, Beleuchtung und Feuerwerk am Abend.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Ankunft am Abend mit beleuchteten Fällen, ein voller Tag mit Boot und Tunnel, am Abend Feuerwerk (im Sommer meist täglich).",
        "<strong>Preise:</strong> Bootsfahrt ca. 35 CAD, Journey Behind the Falls ca. 25 CAD pro Person; Parkieren nahe den Fällen ca. 25–35 CAD pro Tag.",
        "<strong>Grenze:</strong> Mit dem Auto nach Kanada: Pass für alle vier, keine eTA nötig bei der Einreise auf dem Landweg. Lebensmittel (Obst, Fleisch) vorher aufbrauchen."
      ],
      ausserdem: "Niagara-on-the-Lake (hübsches Städtchen, ca. 25 Min.), Whirlpool Aero Car über dem Strudel, Butterfly Conservatory, die amerikanische Seite mit Cave of the Winds (zu Fuss über die Rainbow Bridge).",
      bilder: [
        {titel: "Hufeisenfälle", suche: "Horseshoe Falls Niagara", stichwort: "horseshoe|niagara"},
        {titel: "Bootsfahrt", suche: "Niagara Falls boat tour", stichwort: "boat|niagara"},
        {titel: "Beleuchtung", suche: "Niagara Falls illuminated night", stichwort: "niagara"},
        {titel: "Clifton Hill", suche: "Clifton Hill Niagara Falls", stichwort: "clifton"},
        {titel: "Henry Ford Museum", suche: "Henry Ford Museum Dearborn", stichwort: "henry ford"},
        {titel: "Niagara-on-the-Lake", suche: "Niagara-on-the-Lake", stichwort: "niagara-on-the-lake"}
      ]
    },
    {
      nr: 7,
      name: "Toronto",
      land: "ca",
      region: "Ontario",
      datum: "7.–9. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Niagara Falls am Ontariosee entlang nach Toronto (ca. 1,5–2 Std.; die Autobahn 407 ist mautpflichtig, besser die QEW nehmen).",
      text: "Kanadas grösste Stadt am Ontariosee: CN Tower, Inseln mit Stränden vor der Skyline und Quartiere aus aller Welt. Gut für zwei entspannte Stadttage.",
      teens: "CN Tower mit Glasboden (oder EdgeWalk aussen am Turm, ab 13 Jahren), Ripley's Aquarium, Fähre zu den Toronto Islands mit Velo und Strand, Kensington Market, Hockey Hall of Fame, Baseball der Blue Jays.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag CN Tower und Aquarium, ein Tag Toronto Islands.",
        "<strong>Preise:</strong> CN Tower ca. 45 CAD, Ripley's Aquarium ca. 45 CAD pro Person (Kombiticket günstiger); Fähre zu den Inseln ca. 9 CAD.",
        "<strong>Parkieren:</strong> Hotelparkplatz in der Innenstadt ca. 40–50 CAD pro Nacht; in der Stadt U-Bahn und Strassenbahn."
      ],
      ausserdem: "Royal Ontario Museum, Distillery District, St. Lawrence Market, Casa Loma (Schloss), Scarborough Bluffs.",
      bilder: [
        {titel: "CN Tower", suche: "CN Tower Toronto", stichwort: "cn tower"},
        {titel: "Skyline", suche: "Toronto skyline from Toronto Islands", stichwort: "toronto"},
        {titel: "Toronto Islands", suche: "Toronto Islands", stichwort: "toronto island"},
        {titel: "Ripley's Aquarium", suche: "Ripley's Aquarium of Canada", stichwort: "ripley"},
        {titel: "Kensington Market", suche: "Kensington Market Toronto", stichwort: "kensington"},
        {titel: "Distillery District", suche: "Distillery District Toronto", stichwort: "distillery"}
      ]
    },
    {
      nr: 8,
      name: "Algonquin",
      ersatzsuche: "Algonquin Provincial Park",
      land: "ca",
      region: "Ontario",
      datum: "9.–11. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Toronto nach Norden über Huntsville an den Westrand des Algonquin-Parks (ca. 2,5–3 Std. Fahrt, mit Pausen ca. 3–3,5 Std.). Unterkunft z.B. am Oxtongue Lake oder bei Huntsville.",
      text: "Kanadas bekanntester Provinzpark: Seen, Wälder und Felsen, so weit das Auge reicht, mit Biebern, Seetauchern und mit Glück Elchen am Strassenrand. Das Kanada-Gefühl der Reise.",
      teens: "Kanu auf dem Canoe Lake oder Smoke Lake (Verleih am See), kurze Wanderwege mit Aussicht (Lookout Trail, Track and Tower), Elche am Highway 60 am frühen Morgen, Baden im See, Lagerfeuer am Abend.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Kanu und Baden, kurze Wanderungen am Morgen und am Abend.",
        "<strong>Gebühr:</strong> Tageskarte für das Auto ca. 20–25 CAD, Kanu ca. 40–60 CAD pro Tag; früh reservieren.",
        "<strong>Hinweis:</strong> Im Juli Mücken und am Abend Bremsen: Mückenschutz, lange Kleider. Kaum Handyempfang im Park."
      ],
      ausserdem: "Algonquin Visitor Centre mit Aussichtsterrasse, Logging Museum, Arrowhead Provincial Park, Bootsfahrt auf den Muskoka-Seen.",
      bilder: [
        {titel: "Algonquin", suche: "Algonquin Provincial Park lake", stichwort: "algonquin"},
        {titel: "Kanu", suche: "Canoe Lake Algonquin", stichwort: "canoe"},
        {titel: "Elch", suche: "Moose Algonquin", stichwort: "moose"},
        {titel: "Lookout Trail", suche: "Algonquin Lookout Trail view", stichwort: "algonquin|lookout"},
        {titel: "Seetaucher", suche: "Common loon lake", stichwort: "loon"},
        {titel: "Wald", suche: "Algonquin Park forest", stichwort: "algonquin|forest"}
      ]
    },
    {
      nr: 9,
      name: "Montréal",
      ersatzsuche: "Montreal",
      land: "ca",
      region: "Québec",
      datum: "12.–14. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenstopp in Ottawa", datum: "11.–12. Juli"},
      anreise: "Mietwagen auf dem Highway 60 quer durch den Algonquin-Park und weiter nach Ottawa (ca. 4,5–5 Std.), Übernachtung (Abend am Parlament und am Rideau-Kanal). Am nächsten Tag nach Montréal (ca. 2–2,5 Std.).",
      text: "Französischsprachige Grossstadt mit Altstadt am Sankt-Lorenz-Strom, Hausberg Mont Royal und vielen Festivals im Sommer. Bagels, Poutine und ein bisschen Europa in Nordamerika.",
      teens: "Vieux-Montréal und der alte Hafen mit Riesenrad und Zipline, Aussicht vom Mont Royal, Biodôme und Olympiaturm, Unterwasser- und Lichtshows, Poutine probieren.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt und alter Hafen, ein halber Tag Mont Royal oder Olympiapark.",
        "<strong>Sprache:</strong> Französisch ist Amtssprache, Englisch wird fast überall verstanden. Verkehrsschilder nur auf Französisch.",
        "<strong>Ottawa:</strong> Führungen im Parlament gratis (Reservation empfohlen); im Sommer Wachablösung am Morgen."
      ],
      ausserdem: "Basilique Notre-Dame, Jean-Talon-Markt, Lachine-Kanal mit Velo, Musée des beaux-arts; in Ottawa das Kanadische Museum für Geschichte.",
      bilder: [
        {titel: "Vieux-Montréal", suche: "Old Montreal", stichwort: "montreal|vieux"},
        {titel: "Notre-Dame", suche: "Notre-Dame Basilica Montreal", stichwort: "notre-dame"},
        {titel: "Mont Royal", suche: "Mount Royal Montreal view", stichwort: "royal"},
        {titel: "Alter Hafen", suche: "Old Port of Montreal", stichwort: "port|montreal"},
        {titel: "Biodôme", suche: "Montreal Biodome Olympic Stadium", stichwort: "biod|olympic"},
        {titel: "Parlament Ottawa", suche: "Parliament Hill Ottawa", stichwort: "parliament|ottawa"}
      ]
    },
    {
      nr: 10,
      name: "Québec",
      ersatzsuche: "Quebec City",
      land: "ca",
      region: "Québec",
      datum: "14.–16. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Montréal am Sankt-Lorenz-Strom entlang nach Québec (ca. 3 Std. Fahrt, mit Pausen ca. 3–3,5 Std.).",
      text: "Die einzige Stadt mit Stadtmauer nördlich von Mexiko: Gassen, Steinhäuser und das Schlosshotel Château Frontenac hoch über dem Fluss. Die Altstadt ist UNESCO-Welterbe.",
      teens: "Standseilbahn in die Unterstadt, Terrasse Dufferin mit Blick auf den Fluss, Strassenkünstler im Quartier Petit Champlain, Montmorency-Fall (höher als Niagara) mit Seilbahn, Hängebrücke und Zipline, Fähre nach Lévis mit Blick auf die Altstadt.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt zu Fuss, ein halber Tag Montmorency-Fall.",
        "<strong>Parkieren:</strong> In der Altstadt eng; Hotel mit Parkplatz wählen und zu Fuss gehen.",
        "<strong>Preise:</strong> Montmorency-Fall: Parkplatz und Seilbahn kosten extra, Zipline separat."
      ],
      ausserdem: "Plaines d'Abraham, Île d'Orléans mit Erdbeeren und Hofläden, Walbeobachtung in Tadoussac (ca. 3 Std. entfernt, eine Nacht mehr nötig).",
      bilder: [
        {titel: "Château Frontenac", suche: "Chateau Frontenac", stichwort: "frontenac"},
        {titel: "Petit Champlain", suche: "Quartier Petit Champlain", stichwort: "champlain"},
        {titel: "Montmorency-Fall", suche: "Montmorency Falls", stichwort: "montmorency"},
        {titel: "Altstadt", suche: "Old Quebec street", stichwort: "quebec"},
        {titel: "Terrasse Dufferin", suche: "Dufferin Terrace Quebec", stichwort: "dufferin"},
        {titel: "Stadtmauer", suche: "Fortifications of Quebec", stichwort: "fortif|quebec"}
      ]
    },
    {
      nr: 11,
      name: "White Mountains (North Conway)",
      ersatzsuche: "White Mountains New Hampshire",
      land: "us",
      region: "New Hampshire",
      datum: "16.–18. Juli",
      naechte: "2 Nächte",
      anreise: "Mietwagen von Québec nach Süden über die Grenze zurück in die USA und durch die Wälder von Maine oder Vermont nach North Conway (ca. 5,5 Std. Fahrt, mit Grenze und Pausen ca. 5,5–6,5 Std.).",
      text: "Die Berge Neuenglands mit dem Mount Washington, Schluchten, Flüssen zum Baden und kleinen Holzbrücken. Zwei ruhige Tage in der Natur vor dem Ende in Boston.",
      teens: "Zahnradbahn auf den Mount Washington (eine der steilsten der Welt) oder die Autostrasse hinauf, Flume Gorge (Holzstege durch die Schlucht), Baden in Flusspools am Kancamagus Highway, Sommerrodelbahn oder Zipline.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Mount Washington, ein Tag Flume Gorge und Kancamagus Highway.",
        "<strong>Preise:</strong> Zahnradbahn ca. 85–100 USD pro Person, früh buchen; Flume Gorge ca. 20–25 USD.",
        "<strong>Wetter:</strong> Auf dem Gipfel des Mount Washington auch im Juli kalt und windig (oft unter 10 °C): Jacken mitnehmen."
      ],
      ausserdem: "Diana's Baths (Wasserfälle), Conway Scenic Railroad (Ausflugszug), Lost River Gorge, Shopping in North Conway (ohne Verkaufssteuer).",
      bilder: [
        {titel: "Mount Washington", suche: "Mount Washington Cog Railway", stichwort: "cog|washington"},
        {titel: "Flume Gorge", suche: "Flume Gorge", stichwort: "flume"},
        {titel: "Kancamagus Highway", suche: "Kancamagus Highway", stichwort: "kancamagus"},
        {titel: "White Mountains", suche: "White Mountains New Hampshire", stichwort: "white mountains"},
        {titel: "Gedeckte Brücke", suche: "covered bridge New Hampshire", stichwort: "covered bridge"},
        {titel: "Diana's Baths", suche: "Diana's Baths", stichwort: "diana"}
      ]
    },
    {
      nr: 12,
      name: "Boston",
      land: "us",
      region: "Massachusetts",
      datum: "18.–21. Juli",
      naechte: "3 Nächte",
      anreise: "Mietwagen von North Conway nach Boston (ca. 2,75 Std. Fahrt, mit Pausen ca. 3–3,5 Std.) und bei der Ankunft am Flughafen oder in der Stadt zurückgeben. In Boston mit der U-Bahn «T» und zu Fuss.",
      text: "Älteste Grossstadt der USA mit Backsteinquartieren, Hafen und der Geschichte der Unabhängigkeit, dazu die Universitäten Harvard und MIT. Ein ruhiger Abschluss ohne Auto.",
      teens: "Freedom Trail mit rotem Strich durch die Altstadt, Walbeobachtung ab dem Hafen, Fenway Park (Baseball oder Führung), Harvard und MIT in Cambridge, New England Aquarium, Quincy Market.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Freedom Trail und Hafen, ein Tag Walbeobachtung, ein halber Tag Cambridge; am Mittwochabend zum Flughafen.",
        "<strong>Preise:</strong> Walbeobachtung ca. 65–75 USD pro Person (ca. 3–4 Std.), Fenway-Führung ca. 25–30 USD.",
        "<strong>Abreise:</strong> Der Flughafen Logan liegt nahe der Stadt (U-Bahn oder Taxi ca. 20–30 Min.); der Rückflug geht spät am Abend."
      ],
      ausserdem: "Boston Common und Public Garden mit Schwanenbooten, Museum of Science, USS Constitution, Cape Cod (Tagesausflug, mit dem Auto vor der Rückgabe).",
      bilder: [
        {titel: "Freedom Trail", suche: "Freedom Trail Boston", stichwort: "freedom trail"},
        {titel: "Beacon Hill", suche: "Beacon Hill Boston Acorn Street", stichwort: "beacon|acorn"},
        {titel: "Hafen", suche: "Boston Harbor skyline", stichwort: "boston"},
        {titel: "Fenway Park", suche: "Fenway Park", stichwort: "fenway"},
        {titel: "Walbeobachtung", suche: "humpback whale Stellwagen Bank", stichwort: "whale"},
        {titel: "Harvard", suche: "Harvard Yard", stichwort: "harvard"}
      ]
    }
  ],
  abschluss: "Direktflug ab Boston nach Zürich am Mi, 21.07.2027 am Abend (ca. 7,25 Std.), Ankunft am Do, 22.07.2027 gegen Mittag, dann mit der Bahn nach Brig-Glis. Bis zum Ferienende bleiben zwei Tage gegen den Jetlag.",
  budgetIntro: "Mittelklasse inklusive Flüge, Zug, Mietwagen, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–New York und Boston–Zürich (SWISS)",
        "4’000–5’800",
        "4’800",
        "eigene Schätzung: Gabelflug direkt im Juli ca. 1’000–1’450 CHF pro Person (Hochsaison und Schulferien; beide Teenager zahlen den Erwachsenenpreis)"
      ],
      ["Amtrak New York–Washington", "200–500", "300", "4 Personen ca. 60–150 USD pro Person, früh gebucht günstiger"],
      [
        "Mietwagen (Einwegmiete Washington–Boston)",
        "2’200–3’200",
        "2’600",
        "ca. 22 Tage, Van oder SUV, inkl. Vollkasko, Zusatzhaftpflicht, Einweggebühr und Erlaubnis für Kanada; Angebote vergleichen"
      ],
      [
        "Benzin",
        "350–500",
        "420",
        "ca. 4’400 km, Van oder SUV mit ca. 10–12 l/100 km (ca. 480 Liter); in Kanada etwas teurer"
      ],
      [
        "Parkieren",
        "450–700",
        "550",
        "Hotels in Chicago (ca. 50–70 USD pro Nacht), Toronto, Montréal und Québec (ca. 30–50 CAD), Niagara und Cedar Point; in New York, Washington und Boston kein Auto"
      ],
      [
        "Maut",
        "120–220",
        "160",
        "Pennsylvania Turnpike, Ohio Turnpike, Indiana Toll Road, Chicago Skyway, dazu die Gebühr des Vermieters für die automatische Mauterfassung"
      ],
      [
        "Lokale Verkehrsmittel",
        "350–600",
        "450",
        "U-Bahn und Taxi in New York, Washington und Boston, Flughafentransfers, Fähren in Toronto und Québec"
      ],
      [
        "Unterkunft (Familienzimmer, 3 Sterne)",
        "7’000–10’300",
        "8’500",
        "ca. 150–450 CHF pro Nacht inkl. Steuern (ein Zimmer mit zwei Queen-Betten); am teuersten New York (ca. 450–550 USD), Boston, Chicago und Washington"
      ],
      [
        "Verpflegung (Restaurants, Imbiss, Getränke)",
        "5’000–8’500",
        "6’600",
        "ca. 220–300 USD pro Tag für 4 Personen inkl. Steuern und 15–20 % Trinkgeld (Frühstück oft im Hotel inbegriffen)"
      ],
      [
        "Aktivitäten und Eintritte",
        "3’200–5’200",
        "4’000",
        "für 4 Personen grob: Broadway ca. 520–800 USD, Freiheitsstatue und Aussichtsplattform ca. 300 USD, Cedar Point ca. 370 USD, Chicago (Skydeck, Bootstour, Museum) ca. 500 USD, Niagara ca. 250 CAD, CN Tower und Aquarium ca. 360 CAD, Zahnradbahn Mount Washington ca. 360 USD, Walbeobachtung ca. 280 USD, Luray Caverns, Henry Ford Museum, Kanu usw.; die Smithsonian-Museen in Washington sind gratis"
      ],
      [
        "ESTA, Versicherung, eSIM",
        "400–1’100",
        "700",
        "ESTA ca. 40 USD pro Person, eSIM für USA und Kanada, Reiseversicherung mit hoher Deckung (falls nicht schon über eine Jahresversicherung abgedeckt)"
      ],
      ["Reserve (ca. 5 %)", "1’230–1’380", "1’420", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. New York (4)", "2’900–4’600"],
      ["2. Washington (3)", "1’300–2’000"],
      ["3. Shenandoah (2)", "650–1’000"],
      ["Zwischenübernachtung Pittsburgh (1)", "300–480"],
      ["4. Sandusky (2)", "850–1’350"],
      ["5. Chicago (3)", "1’600–2’500"],
      ["Zwischenübernachtung Dearborn (1)", "380–600"],
      ["6. Niagara Falls (2)", "750–1’150"],
      ["7. Toronto (2)", "850–1’300"],
      ["8. Algonquin (2)", "650–1’000"],
      ["Zwischenübernachtung Ottawa (1)", "330–520"],
      ["9. Montréal (2)", "800–1’250"],
      ["10. Québec (2)", "780–1’200"],
      ["11. White Mountains (2)", "900–1’400"],
      ["12. Boston (3)", "1’700–2’700"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
      "Grösste Posten neben Flug und Mietwagen: Unterkunft in den Städten (Juli ist Hochsaison), Essen mit Steuer und Trinkgeld und die Eintritte, die für Teenager meist schon den Erwachsenenpreis kosten.",
      "Sparhebel: Smithsonian-Museen und Parks sind gratis, ein Zimmer mit zwei Queen-Betten, Motels mit Frühstück, Imbiss statt Restaurant, Hotels ausserhalb der Innenstädte mit Gratis-Parkplatz.",
      "Gerechnet mit ca. 0,83 CHF pro USD und ca. 0,60 CHF pro CAD (Kurs Oktober 2026); Preise ohne Verkaufssteuer angeschrieben, im Restaurant kommen 15–20 % Trinkgeld dazu.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "30’500",
    spanne: "24’500–38’000",
    proTag: "ca. 950 CHF pro Tag, ca. 7’650 pro Person"
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise USA (ESTA)",
      "Für die visafreie Einreise braucht jede Person, auch die Kids, vor dem Abflug eine ESTA-Genehmigung (seit Herbst 2025 ca. 40 USD pro Person). Erlaubt sind bis zu 90 Tage; die Zeit in Kanada zählt mit. Bei der Rückkehr aus Kanada auf dem Landweg reicht die ESTA. Aktuelle Regeln auf der offiziellen CBP-Website prüfen."
    ],
    [
      "Einreise Kanada",
      "Schweizer brauchen für die Einreise auf dem Landweg (mit dem Auto) keine eTA, nur den Pass; die eTA ist nur bei Flugreisen nach Kanada nötig. Stand vor der Reise auf der offiziellen Seite der kanadischen Regierung (IRCC) prüfen. Für die Kids eine Kopie der Pässe mitnehmen."
    ],
    ["Reisepass", "Biometrischer Reisepass für alle vier, mind. 6 Monate gültig. Zusätzlich Kopien aufbewahren."],
    [
      "Mietwagen",
      "Einwegmiete Washington–Boston mit ausdrücklicher Erlaubnis für Kanada (im Vertrag vermerkt, Versicherungskarte für Kanada verlangen). Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. In Kanada gelten km/h und Liter, in Québec sind alle Schilder auf Französisch und Rechtsabbiegen bei Rot ist in Montréal verboten."
    ],
    [
      "Tanken und Zahlen",
      "An vielen Zapfsäulen in den USA wird nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. In Kanada Kanadische Dollar (CAD), Kreditkarten überall. Trinkgeld im Restaurant 15–20 %."
    ],
    [
      "Hitze und Gewitter",
      "In New York, Washington und Chicago im Juli oft über 30 °C und schwül mit Gewittern; in Kanada und den Bergen angenehmer. In Algonquin und den White Mountains Mücken: Mückenschutz und lange Kleider für den Abend."
    ],
    [
      "Zeitzonen",
      "New York, Washington, Ohio, Detroit, Ontario, Québec und Neuengland Eastern-Zeit (−6 Std. zur Schweiz), Chicago Central-Zeit (−7 Std.)."
    ],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung mit hoher Deckung ist in den USA unverzichtbar, Arztkosten sind sehr hoch; in Kanada ebenfalls teuer. Zusätzlich Annullationsschutz für Flüge, Hotels und Mietwagen."
    ],
    [
      "Notfall",
      "In den USA und in Kanada 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulate New York und Montréal, Botschaft Ottawa) notieren; EDA-Reiseplattform nutzen."
    ],
    [
      "Handy",
      "eSIM für USA und Kanada vorab kaufen (Roaming in Kanada sonst teuer). Offline-Karten laden; in Algonquin und den White Mountains wenig Empfang."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
