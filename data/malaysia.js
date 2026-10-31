// Reise: Singapur, Malaysia (Tioman, Cherating, Taman Negara, Perhentian, Redang, Kuala Lumpur) und Bangkok, fünf Wochen
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.malaysia = {
  titel: "Singapur, Malaysia und Bangkok: Dschungel und Inseln an der Ostküste",
  menu: "Singapur / Malaysia / Bangkok",
  untertitel: "Fünf Wochen: Singapur, die Dschungelinsel Tioman, das Surfdorf Cherating, der Regenwald von Taman Negara und die Inseln Perhentian und Redang, dann nach Kuala Lumpur und zum Schluss mit dem Flugzeug nach Bangkok.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Perhentian Islands|Redang Island",
    stichwort: "perhentian|redang",
    alt: "Perhentian-Inseln, Malaysia"
  },
  planIntro: "Abflug ab Zürich nach Singapur am Sa, 19.06.2027 am Abend, Rückflug ab Bangkok am Do, 22.07.2027 um die Mittagszeit (Ankunft am Abend). 32 Nächte im Land, dazu eine Nacht im Flugzeug. Dazwischen Busse, private Transfers, Fähren und Boote, am Schluss ein kurzer Flug nach Bangkok. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19.–20. Juni",
    name: "Flug Zürich–Singapur",
    info: "Direktflug mit SWISS ca. 12–13 Std., Abflug am Sa am späten Abend, Ankunft in Singapur am So, 20.06.2027 am Nachmittag"
  },
  plan: [
    {
      datum: "20.–23. Juni",
      name: "1. Singapur",
      naechte: 3,
      info: "Flug ab Zürich (Sa, ca. 22.40 Uhr), Ankunft am So am späten Nachmittag"
    },
    {
      datum: "23.–28. Juni",
      name: "2. Pulau Tioman",
      naechte: 5,
      info: "Fernbus (ca. 3,5–4 Std. mit Grenze), Fähre (ca. 1,5–2 Std.)"
    },
    {datum: "28. Juni–2. Juli", name: "3. Cherating", naechte: 4, info: "Fähre (ca. 1,5–2 Std.), Auto (ca. 3–3,5 Std.)"},
    {datum: "2.–5. Juli", name: "4. Taman Negara", naechte: 3, info: "Privater Transfer (ca. 3,5–4 Std.)"},
    {
      datum: "5.–10. Juli",
      name: "5. Perhentian Islands",
      naechte: 5,
      info: "Privater Transfer (ca. 5–5,5 Std.), Speedboot (ca. 30–45 Min.)"
    },
    {datum: "10.–14. Juli", name: "6. Pulau Redang", naechte: 4, info: "Speedboot, Auto und Boot (ca. 2,5–3 Std.)"},
    {
      datum: "14.–17. Juli",
      name: "7. Kuala Lumpur",
      naechte: 3,
      info: "Boot (ca. 45 Min.), privater Transfer (ca. 5–5,5 Std.)"
    },
    {
      datum: "17.–22. Juli",
      name: "8. Bangkok",
      naechte: 5,
      info: "Flug Kuala Lumpur–Bangkok (ca. 2–2,25 Std.), Uhr −1 Std.; Rückflug 22. Juli"
    }
  ],
  rueckflug: {
    datum: "22. Juli",
    name: "Flug Bangkok–Zürich",
    info: "Direktflug mit SWISS am Do, 22.07.2027 um die Mittagszeit, ca. 11,5–12 Std., Ankunft in Zürich am Abend"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte im Land, 8 Stationen. Fernbus Singapur–Mersing (ca. 3,5–4 Std.), private Transfers (Mersing–Cherating ca. 3–3,5 Std., Cherating–Taman Negara ca. 3,5–4 Std., Taman Negara–Kuala Besut ca. 5–5,5 Std., Merang–Kuala Lumpur ca. 5–5,5 Std.), Boote (zusammen ca. 5–6 Std.) und ein kurzer Flug Kuala Lumpur–Bangkok (ca. 2–2,25 Std.). Der längste Reisetag ist Taman Negara–Perhentian mit ca. 6–7 Std. Niemand muss selber fahren."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Singapur mit SWISS als Direktflug ca. 12–13 Std. am Sa, 19.06.2027 am späten Abend (Ankunft So am Nachmittag, Zeitverschiebung +6 Std.). Rückflug: Bangkok–Zürich mit SWISS als Direktflug ca. 11,5–12 Std. am Do, 22.07.2027 um die Mittagszeit, Ankunft am Abend. Ein Gabelflug (hin nach Singapur, zurück ab Bangkok); Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "An der Ostküste Malaysias (Tioman, Cherating, Perhentian, Redang) ist von etwa März bis Oktober die beste Zeit, im Juli meist ruhige See und klares Wasser. In Taman Negara und Kuala Lumpur ca. 31–33 °C, schwül, kurze Gewitter am Nachmittag. In Bangkok ist im Juli Regenzeit mit kurzen, heftigen Schauern. Meer ca. 28–30 °C."
    ],
    [
      "Vorab buchen",
      "Flüge Zürich–Singapur und Bangkok–Zürich, Flug Kuala Lumpur–Bangkok (Gepäck einrechnen), Bus Singapur–Mersing und Fähre nach Tioman, private Transfers, Unterkunft auf den Perhentians und auf Redang (im Juli früh ausgebucht), Universal Studios Singapore, Petronas-Skybridge."
    ],
    [
      "Optional",
      "Malakka (eine Nacht zwischen Singapur und Kuala Lumpur, mit dem Bus), Cameron Highlands (Teeplantagen, kühler), Pulau Kapas, Kuala Terengganu mit der Kristallmoschee, Floating Market bei Bangkok."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit Bus und Fähre von Singapur nach Tioman, der Ostküste entlang nach Norden mit einem Abstecher in den Regenwald, mit dem Transfer nach Kuala Lumpur und mit dem Flugzeug nach Bangkok.",
    breit: true,
    legende: ["bus", "car", "ferry", "air"],
    karten: [{datei: "karten/malaysia.svg"}]
  },
  abwechslungIntro: "Grossstadt, Dschungelinsel, Surfdorf, Regenwald, zwei Inseln, Metropole und zum Schluss Tempel und Märkte in Bangkok.",
  abwechslung: [
    [
      "Natur",
      "Dschungel und Wasserfälle auf Tioman, Mangroven mit Glühwürmchen bei Cherating, Regenwald von Taman Negara mit Hängebrücken und Flüssen."
    ],
    [
      "Strand und Schnorcheln",
      "Tioman, Perhentian (5 Nächte) und Redang mit dem klarsten Wasser der Ostküste: Schildkröten, Riffhaie und Korallengärten, Wasser ca. 28–30 °C; dazu der Strand von Cherating."
    ],
    [
      "Action und Freizeitparks",
      "Universal Studios Singapore, Surfkurs, Glühwürmchen-Tour, Nachtwanderung im Dschungel, Bootsfahrt durch Stromschnellen, Schnorcheltouren, Sunway Lagoon, Safari World."
    ],
    [
      "Städte und Kultur",
      "Singapur, Kuala Lumpur mit Petronas Towers und Batu Caves, Bangkok mit Grand Palace, Wat Pho und Ayutthaya, Orang-Asli-Dorf, malaiische Dörfer an der Ostküste."
    ],
    ["Ruhetage", "Überall 3–5 Nächte; Tioman, die Perhentians und Bangkok haben je 5 Nächte."]
  ],
  stationenIntro: "Acht Stationen von Singapur der Ostküste Malaysias entlang nach Norden, dann über Kuala Lumpur nach Bangkok. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Singapur",
      ersatzsuche: "Singapore",
      land: "sg",
      region: "Singapur",
      datum: "20.–23. Juni",
      naechte: "3 Nächte",
      anreise: "Direktflug Zürich–Singapur mit SWISS (ca. 12–13 Std., Abflug am Sa, 19.06.2027 am späten Abend, Ankunft am So, 20.06.2027 am Nachmittag), Zeitverschiebung +6 Std. Mit der MRT in die Stadt (ca. 30–40 Min.).",
      text: "Sanfter Einstieg in Asien: sicher, sauber und gut organisiert. Drei Nächte zum Ankommen, mit Gärten, Skyline, Hawker-Essen und einem Tag auf Sentosa.",
      teens: "Universal Studios Singapore oder Adventure Cove Waterpark auf Sentosa, Gardens by the Bay mit Supertrees und Cloud Forest, Lichtshow am Abend, Marina Bay, Chinatown, Hawker Centres.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: Ankunft am Sonntagnachmittag, ein Tag Gärten, Marina Bay und Chinatown, ein Tag Sentosa mit Universal oder Wasserpark. Pro Tag nur eine Hauptattraktion plus Pause (Hitze und Jetlag).",
        "<strong>Essen:</strong> Hawker Centres sind günstig und familienfreundlich (Hainan-Chicken-Reis, Satay, Laksa). Wasserflaschen sind überall erhältlich.",
        "<strong>Regeln:</strong> Vapes und Kaugummi-Import sind verboten; Bussgelder sind hoch."
      ],
      ausserdem: "Botanic Gardens (gratis), Mandai Wildlife Reserve (Zoo und Night Safari), Skyline Luge, Seilbahn nach Sentosa, Jewel Changi mit dem Regenwasserfall.",
      bilder: [
        {titel: "Supertrees", datei: "Singapore (SG), Gardens by the Bay, Supertree Grove -- 2019 -- 4752.jpg"},
        {
          titel: "Marina Bay Sands",
          datei: "Marina Bay Sands and illuminated polyhedral building Louis Vuitton over the water at blue hour with pink clouds in Singapore.jpg"
        },
        {titel: "Cloud Forest", datei: "Cloud Forest, Gardens by the Bay, Singapore.jpg"},
        {titel: "Merlion", datei: "Merlión, Marina Bay, Singapur, 2023-08-18, DD 45-47 HDR.jpg"},
        {titel: "Universal Studios", suche: "Universal Studios Singapore", stichwort: "universal"},
        {titel: "Sentosa", suche: "Siloso Beach Sentosa|Sentosa island beach", stichwort: "sentosa|siloso"}
      ]
    },
    {
      nr: 2,
      name: "Pulau Tioman",
      land: "my",
      region: "Malaysia",
      datum: "23.–28. Juni",
      naechte: "5 Nächte",
      anreise: "Fernbus von Singapur nach Mersing (ca. 3,5–4 Std. mit Grenzkontrolle; je nach Anbieter Halt direkt am Hafen), dann Fähre nach Tioman (ca. 1,5–2 Std.; nur wenige Fähren pro Tag, abhängig von den Gezeiten). Früh am Morgen starten, Bus und Fähre vorab buchen.",
      text: "Grüne Dschungelinsel vor der Ostküste mit Korallenriffen, Wasserfällen und kleinen Dörfern ohne Autoverkehr; ein ruhiger Einstieg nach Singapur.",
      teens: "Schnorcheltour zu den vorgelagerten Inseln (Pulau Tulai, Chebeh, Renggis), Dschungel-Wanderung quer über die Insel (Tekek–Juara, ca. 2–3 Std.), Wasserfälle, Kajak und Strandtage.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte. Basis z.B. an der ruhigen Westseite (Salang, Air Batang) oder in Juara im Osten: eine Schnorcheltour zu den vorgelagerten Inseln, eine Dschungel-Wanderung zum Wasserfall, Kajak und Strandtage.",
        "<strong>Praktisch:</strong> Die Fähre fährt nur wenige Male pro Tag zu festen Zeiten, vorab Ticket buchen und rechtzeitig am Hafen sein (Mersing Jetty oder Tanjung Gemok). Bargeld mitnehmen, Geldautomaten sind selten. Die Insel ist zollfrei.",
        "<strong>Kultur:</strong> Pahang ist überwiegend muslimisch; ausserhalb der Strände Schultern und Knie bedecken."
      ],
      ausserdem: "Asah-Wasserfall bei Juara, Marine-Park-Schnorchelplätze, Kajak entlang der Küste, Sonnenuntergang am Strand von Salang, Dschungelpfade mit Warane und Makaken.",
      bilder: [
        {titel: "Pulau Tioman", suche: "Tioman Island|Pulau Tioman", stichwort: "tioman"},
        {titel: "Juara Strand", suche: "Juara beach Tioman|Pantai Juara", stichwort: "juara"},
        {titel: "Salang", suche: "Salang Tioman|Kampung Salang", stichwort: "salang"},
        {titel: "Tekek", suche: "Tekek Tioman|Kampung Tekek", stichwort: "tekek"},
        {titel: "Dschungel", suche: "Tioman jungle|Tioman rainforest", stichwort: "tioman"},
        {titel: "Korallenriff", suche: "Tioman coral reef|Tioman snorkeling", stichwort: "tioman"}
      ]
    },
    {
      nr: 3,
      name: "Cherating",
      land: "my",
      region: "Malaysia",
      datum: "28. Juni–2. Juli",
      naechte: "4 Nächte",
      anreise: "Fähre von Tioman nach Mersing (ca. 1,5–2 Std., am Morgen), mit dem Auto über Rompin, Pekan und Kuantan nach Cherating (ca. 3–3,5 Std.).",
      text: "Entspanntes Strand- und Surfdorf an der Ostküste: lange Strände, Mangrovenfluss mit Glühwürmchen und eine Station für Meeresschildkröten.",
      teens: "Glühwürmchen-Bootsfahrt auf dem Cherating-Fluss am Abend, Surfkurs für Anfänger, Schildkröten-Station in Chendor, Kajak in den Mangroven, Batik-Kurs.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Surfkurs, eine Glühwürmchen-Tour (ca. 1 Std. ab ca. 19.30 Uhr, ca. 15–25 CHF pro Person), ein Abend bei der Schildkröten-Station, Strand und Pool.",
        "<strong>Baden:</strong> Im Juli eher ruhige See; auf Strömungen achten, Surfkurse nur bei passender Welle."
      ],
      ausserdem: "Schildkröten-Station Chendor (am besten am Abend), Kuantan mit Teluk Cempedak, Sungai Lembing (alte Minenstadt, Hängebrücke).",
      bilder: [
        {titel: "Cherating", suche: "Cherating beach", stichwort: "cherating"},
        {titel: "Glühwürmchen", suche: "firefly mangrove Malaysia|Cherating fireflies", stichwort: "firefl"},
        {titel: "Surfen", suche: "Cherating surf", stichwort: "surf"},
        {titel: "Schildkröten", suche: "Cherating turtle sanctuary|Chendor turtle", stichwort: "turtle"},
        {titel: "Mangroven", suche: "Cherating river mangrove", stichwort: "mangrove|cherating"},
        {titel: "Teluk Cempedak", suche: "Teluk Cempedak Kuantan", stichwort: "cempedak"}
      ]
    },
    {
      nr: 4,
      name: "Taman Negara",
      land: "my",
      region: "Malaysia",
      datum: "2.–5. Juli",
      naechte: "3 Nächte",
      anreise: "Mit privatem Transfer von Cherating über Kuantan und Jerantut nach Kuala Tahan am Rand des Nationalparks (ca. 3,5–4 Std.).",
      text: "Einer der ältesten Regenwälder der Welt: Dschungelpfade, Hängebrücken in den Baumkronen, Flüsse mit Stromschnellen und ein Dorf der Orang Asli.",
      teens: "Nachtwanderung mit Führer (Insekten, Skorpione, mit Glück Tapire), Hängebrücken im Kronendach (Canopy Walkway), Bootsfahrt durch Stromschnellen, Besuch bei den Orang Asli, Baden im Fluss bei Lata Berkoh.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte in Kuala Tahan: ein Tag Canopy Walkway und Dschungelpfad, eine Nachtwanderung, ein Tag Bootsfahrt mit Stromschnellen und Orang-Asli-Dorf.",
        "<strong>Canopy Walkway:</strong> Zeitweise wegen Renovation geschlossen und an einem Wochentag zu; vorab prüfen. Eintritt und Gebühren sind tief.",
        "<strong>Ausrüstung:</strong> Lange Kleidung, gute Schuhe, Mückenschutz und Blutegel-Socken; es ist feucht und heiss. Kein Geldautomat im Park, Bargeld mitnehmen."
      ],
      ausserdem: "Bukit Teresek (Aussichtshügel), Gua Telinga (Höhle mit Fledermäusen), schwimmende Restaurants am Fluss in Kuala Tahan.",
      bilder: [
        {titel: "Regenwald", suche: "Taman Negara rainforest", stichwort: "taman negara"},
        {titel: "Canopy Walkway", suche: "Taman Negara canopy walkway", stichwort: "canopy"},
        {titel: "Tembeling", suche: "Tembeling River Taman Negara", stichwort: "tembeling"},
        {titel: "Kuala Tahan", suche: "Kuala Tahan Taman Negara", stichwort: "kuala tahan"},
        {titel: "Stromschnellen", suche: "Lata Berkoh Taman Negara", stichwort: "berkoh"},
        {titel: "Tapir", suche: "Malayan tapir", stichwort: "tapir"}
      ]
    },
    {
      nr: 5,
      name: "Perhentian Islands",
      land: "my",
      region: "Malaysia",
      datum: "5.–10. Juli",
      naechte: "5 Nächte",
      anreise: "Mit privatem Transfer von Kuala Tahan über Gua Musang nach Kuala Besut (ca. 5–5,5 Std.; mit dem Minivan oft 6–8 Std.), dann Speedboot zu den Inseln (ca. 30–45 Min., letzte Boote am späten Nachmittag). Früh losfahren.",
      text: "Zwei autofreie Inseln an der Ostküste mit glasklarem Wasser, weissen Stränden und Schildkröten. Juni liegt mitten in der Saison (ca. März bis Oktober); der Monsun an der Ostküste beginnt erst im November.",
      teens: "Schnorcheltour mit Meeresschildkröten und Schwarzspitzen-Riffhaien (Shark Point, Turtle Point), Kajak, Strandtage, Dschungelpfad zwischen den Buchten.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte, am besten auf Perhentian Besar (ruhiger, familienfreundlich): zwei Schnorcheltouren, Kajak, Strandtage, Dschungelpfad zwischen den Buchten.",
        "<strong>Praktisch:</strong> Keine Geldautomaten, genug Bargeld mitbringen; Marine-Park-Gebühr bar am Steg. Fortbewegung nur per Wassertaxi. Unterkünfte sind eher einfach, früh buchen.",
        "<strong>Kultur:</strong> Die Festlandprovinzen Terengganu und Kelantan sind konservativ-muslimisch; ausserhalb der Strände Schultern und Knie bedecken. Alkohol ist nur eingeschränkt erhältlich."
      ],
      ausserdem: "Turtle Beach und Shark Point (Schnorcheln), Romantic Beach, Windmill Viewpoint auf Kecil, Teluk Pauh (Hausriff auf Besar), Sonnenuntergang an der Coral Bay.",
      bilder: [
        {titel: "Perhentian Kecil", suche: "Perhentian Kecil beach|Pulau Perhentian Kecil", stichwort: "perhentian"},
        {titel: "Perhentian Besar", suche: "Perhentian Besar beach|Pulau Perhentian Besar", stichwort: "perhentian"},
        {
          titel: "Meeresschildkröte",
          suche: "green sea turtle Malaysia|Chelonia mydas swimming",
          stichwort: "turtle|chelonia"
        },
        {titel: "Long Beach", suche: "Long Beach Perhentian Kecil|Perhentian Long Beach", stichwort: "perhentian"},
        {titel: "Wassertaxi", suche: "Perhentian islands boat|Perhentian jetty", stichwort: "perhentian"},
        {titel: "Korallenriff", suche: "Perhentian coral reef|Perhentian snorkeling", stichwort: "perhentian|coral"}
      ]
    },
    {
      nr: 6,
      name: "Pulau Redang",
      land: "my",
      region: "Malaysia",
      datum: "10.–14. Juli",
      naechte: "4 Nächte",
      anreise: "Speedboot nach Kuala Besut (ca. 30–45 Min.), mit dem Auto nach Merang (ca. 1–1,25 Std.), Boot nach Redang (ca. 45 Min.). Viele Resorts bieten Pakete mit Transfer, Essen und Schnorcheln.",
      text: "Die Insel mit dem klarsten Wasser der Ostküste: weisse Strände, Korallengärten direkt vor dem Strand und eine Schildkröten-Station.",
      teens: "Schnorcheln im Marine Park um Pulau Pinang, Schildkröten und Riffhaie, Schildkröten-Station Chagar Hutang (Eiablage nachts, nur mit Führung), Kajak und Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: Schnorcheltouren im Marine Park, Strand und Kajak, am Abend evtl. Führung zu den Schildkröten.",
        "<strong>Gebühren:</strong> Marine-Park-Gebühr für Ausländer 2026 ca. 30 MYR pro Erwachsenem und 15 MYR pro Kind, bar am Steg; Boot ab Merang ca. 55–100 MYR hin und zurück pro Person, oft im Resortpaket.",
        "<strong>Unterkunft:</strong> Meist Resorts mit Vollpension; im Juli früh buchen."
      ],
      ausserdem: "Long Beach (Pasir Panjang), Teluk Dalam, Aussichtspunkt über der Bucht, Pulau Lang Tengah (Nachbarinsel).",
      bilder: [
        {titel: "Redang", suche: "Redang Island beach", stichwort: "redang"},
        {titel: "Pasir Panjang", suche: "Pasir Panjang Redang", stichwort: "redang|pasir panjang"},
        {titel: "Schnorcheln", suche: "Redang snorkeling coral", stichwort: "redang|coral|snorkel"},
        {titel: "Schildkröte", suche: "Chagar Hutang turtle Redang|green turtle Redang", stichwort: "turtle"},
        {titel: "Marine Park", suche: "Pulau Pinang Redang Marine Park", stichwort: "marine park|redang"},
        {titel: "Steg", suche: "Redang jetty", stichwort: "jetty|redang"}
      ]
    },
    {
      nr: 7,
      name: "Kuala Lumpur",
      land: "my",
      region: "Malaysia",
      datum: "14.–17. Juli",
      naechte: "3 Nächte",
      anreise: "Boot von Redang nach Merang (ca. 45 Min.), dann mit privatem Transfer über den East Coast Expressway nach Kuala Lumpur (ca. 5–5,5 Std., ca. 450 km; mit dem Fernbus ab Kuala Terengganu ca. 6–7 Std.).",
      text: "Malaysias Hauptstadt bietet Wolkenkratzer, Aquarium, Parks und Wasserspass. Gute Infrastruktur und günstige Preise.",
      teens: "Petronas-Skybridge (Zeitfenster früh online buchen), Aquaria KLCC (Aquarium im Kuala Lumpur City Centre), Petrosains Science Discovery Centre, Kuala Lumpur Bird Park, Sunway Lagoon (Wasser- und Freizeitpark).",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Petronas Towers und KLCC-Park, ein Morgen Batu Caves, ein Tag Sunway Lagoon oder Aquarium und Street-Food.",
        "<strong>Batu Caves:</strong> Früh morgens hingehen (Hitze, Menschenmengen), 272 Stufen. Makaken stehlen gern Essen und Brillen. Schultern und Knie bedecken.",
        "<strong>Essen:</strong> Jalan Alor (Strassenküche), Food Courts in den Einkaufszentren (klimatisiert, familienfreundlich).",
        "<strong>Fortbewegung:</strong> LRT/MRT/Monorail und Grab.",
        "<strong>Mitmachen:</strong> Street-Food-Tour durch Chinatown und Bukit Bintang."
      ],
      ausserdem: "Menara Kuala Lumpur (Fernsehturm mit Aussicht, günstiger als die Petronas-Skybridge), Merdeka Square, Islamic Arts Museum, Petaling Street, Thean Hou Tempel, Perdana Botanical Garden.",
      bilder: [
        {titel: "Petronas Towers", suche: "Petronas Twin Towers|Petronas Towers night", stichwort: "petronas"},
        {titel: "Batu Caves", datei: "Batu Caves (18355395004).jpg"},
        {titel: "Thean Hou Tempel", suche: "Thean Hou Temple Kuala Lumpur", stichwort: "thean hou"},
        {
          titel: "Sultan Abdul Samad",
          suche: "Sultan Abdul Samad Building|Merdeka Square Kuala Lumpur",
          stichwort: "sultan abdul samad|merdeka"
        },
        {
          titel: "Menara Kuala Lumpur",
          suche: "Menara Kuala Lumpur KL Tower|KL Tower",
          stichwort: "menara kuala lumpur|kl tower"
        },
        {titel: "Jalan Alor", suche: "Jalan Alor food street|Jalan Alor", stichwort: "jalan alor"}
      ]
    },
    {
      nr: 8,
      name: "Bangkok",
      land: "th",
      region: "Thailand",
      datum: "17.–22. Juli",
      naechte: "5 Nächte, Rückflug 22. Juli",
      anreise: "Flug Kuala Lumpur–Bangkok (ca. 2–2,25 Std., viele Flüge pro Tag; Ankunft in Suvarnabhumi oder Don Mueang), in Thailand springt die Uhr −1 Std. In die Stadt mit Airport Rail Link, Taxi oder Grab (ca. 45–60 Min.). Rückflug Bangkok–Zürich mit SWISS am Do, 22.07.2027 um die Mittagszeit (ca. 11,5–12 Std.), Ankunft in Zürich am Abend.",
      text: "Vielfältiges Finale: Tempel, Flussfahrten, Aquarium und Nachtmärkte, bevor es nach Hause geht.",
      teens: "SEA LIFE Bangkok Ocean World (Siam Paragon), Safari World (nur bei genug Zeit), Khlong-Bootsfahrt, Tempelbesichtigung in Ayutthaya.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: ein Tag Grand Palace, Wat Pho und Wat Arun mit dem Boot auf dem Chao Phraya, ein Tag Ayutthaya (Tempelruinen, ca. 1,5 Std.), ein Tag SEA LIFE oder Safari World, ein Morgen schwimmender Markt, am Abend Nachtmärkte. Der Rückflug geht um die Mittagszeit: am Abreisetag früh zum Flughafen.",
        "<strong>Dresscode:</strong> Grand Palace und Wat Pho verlangen bedeckte Schultern und lange Hosen/Röcke, auch für die Teenager.",
        "<strong>Juli:</strong> Regenzeit, nachmittags kurze Schauer. Indoor-Alternativen (Aquarium, Museen, Malls) einplanen.",
        "<strong>Mitmachen:</strong> Muay-Thai-Schnupperkurs, Tuk-Tuk-Food-Tour am Abend, Escape Rooms in den Einkaufszentren."
      ],
      ausserdem: "Wat Pho (liegender Buddha, ★), Chinatown am Abend (Yaowarat), ICONSIAM, Jim Thompson House, Lumphini Park, Asiatique (Riverfront-Nachtmarkt mit Riesenrad, abends täglich geöffnet).",
      bilder: [
        {titel: "Wat Arun", suche: "Wat Arun Bangkok|Wat Arun", stichwort: "wat arun"},
        {
          titel: "Grand Palace",
          suche: "Grand Palace Bangkok Wat Phra Kaew|Wat Phra Kaew",
          stichwort: "grand palace|phra kaew"
        },
        {titel: "Wat Pho", suche: "Wat Pho reclining Buddha|Wat Pho", stichwort: "wat pho|reclining"},
        {titel: "Chinatown", suche: "Yaowarat Road Bangkok|Yaowarat", stichwort: "yaowarat|chinatown"},
        {
          titel: "Ayutthaya",
          suche: "Wat Mahathat Ayutthaya Buddha head tree|Ayutthaya Historical Park",
          stichwort: "ayutthaya"
        },
        {
          titel: "Chao Phraya",
          suche: "Chao Phraya River Bangkok boat|Chao Phraya Express boat",
          stichwort: "chao phraya"
        }
      ]
    }
  ],
  abschluss: "Direktflug ab Bangkok nach Zürich am Do, 22.07.2027 um die Mittagszeit (ca. 11,5–12 Std.), Ankunft am Abend, dann mit der Bahn nach Brig-Glis. Bis zum Ferienende bleiben zwei Tage gegen den Jetlag.",
  budgetIntro: "Mittelklasse inklusive Flüge, Busse, Transfers, Boote, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Singapur und Bangkok–Zürich (SWISS)",
        "4’400–5’600",
        "5’000",
        "Gabelflug, ca. 1’100–1’400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      ["Flug Kuala Lumpur–Bangkok", "300–650", "450", "ca. 80–160 pro Person inkl. Gepäck"],
      [
        "Busse, Transfers, Fähren und Boote",
        "1’100–1’800",
        "1’400",
        "Bus Singapur–Mersing, Fähren nach Tioman und zurück, private Transfers der Küste entlang, nach Taman Negara, nach Kuala Besut und von Merang nach Kuala Lumpur, Speedboote zu den Perhentians und nach Redang, Flughafen-Transfers, Grab, MRT, Boote in Bangkok"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)",
        "3’300–5’100",
        "4’150",
        "ca. 90–150 CHF pro Nacht in Malaysia und Bangkok, in Singapur ca. 250–300; Redang meist als Resortpaket"
      ],
      [
        "Verpflegung (Hawker, Restaurants, Getränke)",
        "2’200–3’500",
        "2’750",
        "ca. 70–90 CHF pro Tag für 4 Personen in Malaysia, in Singapur mehr"
      ],
      [
        "Aktivitäten und Eintritte",
        "1’900–3’100",
        "2’400",
        "Gardens by the Bay, Universal Studios Singapore, Schnorcheltouren und Marine-Park-Gebühren, Surfkurs, Glühwürmchen-Tour, Taman Negara mit Führer, Petronas-Skybridge, Sunway Lagoon, Grand Palace, Ayutthaya, SEA LIFE oder Safari World usw."
      ],
      [
        "Versicherung, eSIM, Reiseapotheke, Impfungen",
        "500–1’200",
        "800",
        "Reisekranken- und Annullationsschutz, Impfungen (z.B. Hepatitis A), Mückenschutz"
      ],
      ["Reserve (ca. 5 %)", "700–1’050", "850", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Singapur (3)", "1’790–2’830"],
      ["2. Pulau Tioman (5)", "800–1’260"],
      ["3. Cherating (4)", "710–1’120"],
      ["4. Taman Negara (3)", "610–960"],
      ["5. Perhentian Islands (5)", "980–1’550"],
      ["6. Pulau Redang (4)", "840–1’340"],
      ["7. Kuala Lumpur (3)", "710–1’130"],
      ["8. Bangkok (5)", "1’210–1’920"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen in Singapur teils noch Kinderpreise (bis 12), in Malaysia und Thailand oft Kinderpreise oder günstige Eintritte.",
      "Sparhebel: Busse statt privater Transfers, Hawker und lokale Restaurants, einfache Chalets auf den Inseln, Resortpakete auf Redang vergleichen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug- und Hotelpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "17’800",
    spanne: "14’400–22’000",
    proTag: "ca. 560 CHF pro Tag, ca. 4’500 pro Person"
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise",
      "Singapur, Malaysia und Thailand: für Schweizer Touristen visumfrei (Thailand seit 15.09.2026 bis 30 Tage; vorab beim EDA prüfen). Vor der Ankunft online die SG Arrival Card (Singapur), die MDAC (Malaysia) und die TDAC (Thailand) ausfüllen, alle gratis und nur auf den offiziellen Seiten. Reisepass mind. 6 Monate gültig."
    ],
    [
      "Gesundheit",
      "Dengue in Malaysia und Singapur (Mückenschutz tagsüber); auf dieser Route kaum Malaria. Im Dschungel Blutegel (Socken über die Hose, Blutegel-Socken). Reisemedizinische Beratung 6–8 Wochen vorher."
    ],
    [
      "Wasser und Essen",
      "In Malaysia kein Leitungswasser, Flaschenwasser ist überall erhältlich; Hawker-Essen ist meist sicher, wenn es frisch gekocht ist. In Singapur kann man Leitungswasser trinken."
    ],
    [
      "Wasser-Sicherheit",
      "Schnorcheltouren nur mit Führer und Schwimmwesten für die Kids; riffschonende Sonnencreme, Korallen nicht berühren. Strömungen zwischen den Inseln beachten."
    ],
    [
      "Transport",
      "Busse und Fähren früh buchen (12go, Easybook oder direkt), Fähren nach Tioman und zu den Inseln hängen von Gezeiten und Wetter ab. Für die langen Strecken durchs Landesinnere lohnt sich ein privater Transfer (Van mit Fahrer)."
    ],
    [
      "Kultur",
      "Die Ostküste (Terengganu, Kelantan, Pahang) ist konservativ-muslimisch: ausserhalb der Strände Schultern und Knie bedecken, Alkohol nur eingeschränkt. In Moscheen und Tempeln Schuhe ausziehen."
    ],
    [
      "Geld und Technik",
      "Auf den Inseln und in Taman Negara kaum Geldautomaten, genug Bargeld (MYR) mitnehmen; in Bangkok Baht (THB), sonst Kreditkarte. eSIM für die Region. Steckdosen in Singapur und Malaysia Typ G (britisch), in Thailand meist A/B/C; Adapter mitnehmen."
    ],
    ["Zeitzonen", "Singapur und Malaysia +6 Std. zur Schweiz, Thailand +5 Std."],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung; auf den Inseln nur einfache Kliniken, Spitäler in Kuala Lumpur und Singapur sehr gut."
    ],
    [
      "Notfall",
      "In Malaysia 999, in Singapur 995 (Ambulanz) und 999 (Polizei), in Thailand 1669 (Ambulanz) und 1155 (Touristenpolizei); Schweizer Botschaften in Singapur, Kuala Lumpur und Bangkok. EDA-Reisehinweise vor der Abreise lesen."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
