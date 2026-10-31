// Reise: Singapur und Malaysia (Malakka, Kuala Lumpur, Taman Negara, Perhentian, Redang, Cherating, Tioman), vier Wochen, ohne Inlandflug
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.malaysia = {
  titel: "Singapur und Malaysia: Dschungel und Inseln an der Ostküste",
  menu: "Singapur / Malaysia",
  untertitel: "Vier Wochen ohne Inlandflug: Singapur, die Altstadt von Malakka, Kuala Lumpur, der Regenwald von Taman Negara und die Inseln der Ostküste Perhentian, Redang und Tioman, dazu das Strand- und Surfdorf Cherating; zum Schluss Sentosa.",
  zeitraum: "Sa, 19.06.2027 bis Mo, 19.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Perhentian Islands|Redang Island",
    stichwort: "perhentian|redang",
    alt: "Perhentian-Inseln, Malaysia"
  },
  planIntro: "Abflug ab Zürich nach Singapur am Sa, 19.06.2027 am Abend, Rückflug ab Singapur am So, 18.07.2027 in der Nacht (Ankunft Mo, 19.07.2027 am Morgen). 28 Nächte im Land, dazu zwei Nächte im Flugzeug. Dazwischen nur Busse, private Transfers, Fähren und Boote, kein Inlandflug. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19.–20. Juni",
    name: "Flug Zürich–Singapur",
    info: "Direktflug mit SWISS ca. 12–13 Std., Abflug am Sa am späten Abend, Ankunft in Singapur am So, 20.06.2027 am Nachmittag"
  },
  plan: [
    {
      datum: "20.–22. Juni",
      name: "1. Singapur",
      naechte: 2,
      info: "Flug ab Zürich (Sa, ca. 22.40 Uhr), Ankunft am So am späten Nachmittag"
    },
    {datum: "22.–24. Juni", name: "2. Malakka", naechte: 2, info: "Fernbus (ca. 3,5–4,5 Std. mit Grenze)"},
    {datum: "24.–27. Juni", name: "3. Kuala Lumpur", naechte: 3, info: "Fernbus (ca. 2–2,5 Std.)"},
    {datum: "27.–30. Juni", name: "4. Taman Negara", naechte: 3, info: "Privater Transfer (ca. 3,5–4 Std.)"},
    {
      datum: "30. Juni–5. Juli",
      name: "5. Perhentian Islands",
      naechte: 5,
      info: "Privater Transfer (ca. 5–5,5 Std.), Speedboot (ca. 30–45 Min.)"
    },
    {datum: "5.–8. Juli", name: "6. Pulau Redang", naechte: 3, info: "Speedboot, Auto und Boot (ca. 2,5–3 Std.)"},
    {datum: "8.–11. Juli", name: "7. Cherating", naechte: 3, info: "Boot und Auto (ca. 3,5 Std.)"},
    {datum: "11.–15. Juli", name: "8. Pulau Tioman", naechte: 4, info: "Auto (ca. 3–3,5 Std.), Fähre (ca. 1,5–2 Std.)"},
    {
      datum: "15.–18. Juli",
      name: "9. Singapur und Sentosa",
      naechte: 3,
      info: "Fähre (ca. 1,5–2 Std.), Fernbus (ca. 3,5–4 Std. mit Grenze); Rückflug 18. Juli"
    }
  ],
  rueckflug: {
    datum: "18.–19. Juli",
    name: "Flug Singapur–Zürich",
    info: "Direktflug mit SWISS am So, 18.07.2027 kurz vor Mitternacht, ca. 13–13,5 Std., Ankunft in Zürich am Mo, 19.07.2027 am frühen Morgen"
  },
  planHinweise: [
    [
      "Gesamt",
      "28 Nächte im Land, 9 Stationen, kein Inlandflug. Fernbusse (Singapur–Malakka ca. 3,5–4,5 Std., Malakka–Kuala Lumpur ca. 2–2,5 Std., Mersing–Singapur ca. 3,5–4 Std.), private Transfers (Kuala Lumpur–Taman Negara ca. 3,5–4 Std., Taman Negara–Kuala Besut ca. 5–5,5 Std., Merang–Cherating ca. 2,5–3 Std., Cherating–Mersing ca. 3–3,5 Std.) und Boote (zusammen ca. 5–6 Std.). Der längste Reisetag ist Taman Negara–Perhentian mit ca. 6–7 Std. Niemand muss selber fahren."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Singapur mit SWISS als Direktflug ca. 12–13 Std. am Sa, 19.06.2027 am späten Abend (Ankunft So am Nachmittag, Zeitverschiebung +6 Std.). Rückflug: Singapur–Zürich mit SWISS am So, 18.07.2027 kurz vor Mitternacht (Sommer 2026 ca. 23.00–23.30 Uhr), Ankunft Mo, 19.07.2027 ca. 6 Uhr. Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "An der Ostküste Malaysias (Perhentian, Redang, Tioman, Cherating) ist von etwa März bis Oktober die beste Zeit, im Juli meist ruhige See und klares Wasser; der Monsun beginnt erst im November. In Kuala Lumpur, Malakka und Taman Negara ca. 31–33 °C, schwül, kurze Gewitter am Nachmittag. Singapur ca. 31 °C. Meer ca. 28–30 °C."
    ],
    [
      "Vorab buchen",
      "Flüge Zürich–Singapur, Busse Singapur–Malakka und Mersing–Singapur, private Transfers, Unterkunft auf den Perhentians und auf Redang (im Juli früh ausgebucht), Fähre nach Tioman, Petronas-Skybridge, Universal Studios Singapore."
    ],
    [
      "Optional",
      "Cameron Highlands (Teeplantagen, kühler, zwischen Kuala Lumpur und Taman Negara), Pulau Kapas (kleine Insel bei Marang), Kuala Terengganu mit der Kristallmoschee, Mandai Night Safari in Singapur."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Bus von Singapur über Malakka nach Kuala Lumpur, mit dem Transfer durch den Regenwald an die Ostküste, mit Boot und Auto der Küste entlang nach Süden und mit Fähre und Bus zurück nach Singapur.",
    breit: true,
    legende: ["bus", "car", "ferry"],
    karten: [{datei: "karten/malaysia.svg"}]
  },
  abwechslungIntro: "Grossstadt, Altstadt, Metropole, Regenwald, drei Inseln und ein Surfdorf, zum Schluss Freizeitpark.",
  abwechslung: [
    [
      "Natur",
      "Regenwald von Taman Negara mit Hängebrücken und Flüssen, Dschungel und Wasserfälle auf Tioman, Mangroven mit Glühwürmchen bei Cherating."
    ],
    [
      "Strand und Schnorcheln",
      "Perhentian (5 Nächte), Redang mit dem klarsten Wasser der Ostküste und Tioman: Schildkröten, Riffhaie und Korallengärten, Wasser ca. 28–30 °C."
    ],
    [
      "Action und Freizeitparks",
      "Nachtwanderung im Dschungel, Bootsfahrt durch Stromschnellen, Schnorcheltouren, Surfkurs, Glühwürmchen-Tour, Sunway Lagoon, Universal Studios Singapore."
    ],
    [
      "Städte und Kultur",
      "Singapur, Malakka (Unesco), Kuala Lumpur mit Petronas Towers und Batu Caves, Orang-Asli-Dorf, malaiische Dörfer an der Ostküste."
    ],
    ["Ruhetage", "Überall 2–5 Nächte; die Perhentians haben 5, Tioman 4 Nächte."]
  ],
  stationenIntro: "Neun Stationen von Singapur über Malakka, Kuala Lumpur und Taman Negara an die Ostküste und zurück nach Singapur. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Singapur",
      ersatzsuche: "Singapore",
      land: "sg",
      region: "Singapur",
      datum: "20.–22. Juni",
      naechte: "2 Nächte",
      anreise: "Direktflug Zürich–Singapur mit SWISS (ca. 12–13 Std., Abflug am Sa, 19.06.2027 am späten Abend, Ankunft am So, 20.06.2027 am Nachmittag), Zeitverschiebung +6 Std. Mit der MRT in die Stadt (ca. 30–40 Min.).",
      text: "Sanfter Einstieg in Asien: sicher, sauber und gut organisiert. Zwei Nächte zum Ankommen, mit Gärten, Skyline und Hawker-Essen; Sentosa und Universal folgen am Schluss der Reise.",
      teens: "Gardens by the Bay mit Supertrees und Cloud Forest, Lichtshow am Abend, Marina Bay, Chinatown, Hawker Centres, Jewel Changi mit dem Regenwasserfall.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Ankunft am Sonntagnachmittag, ein voller Tag in der Stadt (Gärten, Marina Bay, Chinatown), am Abend die Supertrees-Lichtshow.",
        "<strong>Essen:</strong> Hawker Centres sind günstig und familienfreundlich (Hainan-Chicken-Reis, Satay, Laksa). Wasserflaschen sind überall erhältlich.",
        "<strong>Regeln:</strong> Vapes und Kaugummi-Import sind verboten; Bussgelder sind hoch."
      ],
      ausserdem: "Botanic Gardens (gratis), Little India, Mandai Wildlife Reserve (Zoo und Night Safari), ArtScience Museum.",
      bilder: [
        {titel: "Supertrees", datei: "Singapore (SG), Gardens by the Bay, Supertree Grove -- 2019 -- 4752.jpg"},
        {
          titel: "Marina Bay Sands",
          datei: "Marina Bay Sands and illuminated polyhedral building Louis Vuitton over the water at blue hour with pink clouds in Singapore.jpg"
        },
        {titel: "Cloud Forest", datei: "Cloud Forest, Gardens by the Bay, Singapore.jpg"},
        {titel: "Merlion", datei: "Merlión, Marina Bay, Singapur, 2023-08-18, DD 45-47 HDR.jpg"},
        {titel: "Chinatown", datei: "Pagoda Street Chinatown Singapore.jpg"},
        {titel: "Sentosa", suche: "Siloso Beach Sentosa|Sentosa island beach", stichwort: "sentosa|siloso"}
      ]
    },
    {
      nr: 2,
      name: "Malakka",
      land: "my",
      region: "Malaysia",
      datum: "22.–24. Juni",
      naechte: "2 Nächte",
      anreise: "Fernbus von Singapur nach Malakka (ca. 3,5–4,5 Std. mit Grenzkontrolle; viele Busse pro Tag, vorab buchen). Malaysia hat dieselbe Zeit wie Singapur.",
      text: "Alte Handelsstadt am Meer (Unesco-Welterbe): rote Kolonialbauten der Holländer, chinesische Ladenhäuser, Tempel und Moscheen nebeneinander, abends Markt in der Jonker Street.",
      teens: "Bootsfahrt auf dem Malakka-Fluss, bunt beleuchtete Fahrradrikschas, Nachtmarkt in der Jonker Street (Wochenende), Aussicht vom Turm Menara Taming Sari, Nyonya-Essen.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt mit Flussboot, am Abend Jonker Street.",
        "<strong>Hitze:</strong> Mittags sehr heiss; Altstadt am Morgen und Abend, dazwischen Museum oder Hotelpool."
      ],
      ausserdem: "A Famosa (Festungstor), Christ Church und Stadthuys am Roten Platz, Baba-Nyonya-Museum, Cheng-Hoon-Teng-Tempel.",
      bilder: [
        {titel: "Roter Platz", suche: "Dutch Square Malacca|Stadthuys Malacca", stichwort: "stadthuys|dutch square"},
        {titel: "Malakka-Fluss", suche: "Malacca River", stichwort: "malacca river"},
        {titel: "Jonker Street", suche: "Jonker Street Malacca", stichwort: "jonker"},
        {titel: "Rikscha", suche: "Malacca trishaw", stichwort: "trishaw"},
        {titel: "A Famosa", suche: "A Famosa Malacca", stichwort: "famosa"},
        {titel: "Cheng Hoon Teng", suche: "Cheng Hoon Teng Temple", stichwort: "cheng hoon"}
      ]
    },
    {
      nr: 3,
      name: "Kuala Lumpur",
      land: "my",
      region: "Malaysia",
      datum: "24.–27. Juni",
      naechte: "3 Nächte",
      anreise: "Fernbus von Malakka nach Kuala Lumpur (ca. 2–2,5 Std., viele Busse pro Tag, Ankunft am Busbahnhof Terminal Bersepadu Selatan, von dort mit der Bahn oder Grab in die Stadt).",
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
      nr: 4,
      name: "Taman Negara",
      land: "my",
      region: "Malaysia",
      datum: "27.–30. Juni",
      naechte: "3 Nächte",
      anreise: "Mit privatem Transfer von Kuala Lumpur nach Kuala Tahan am Rand des Nationalparks (ca. 3,5–4 Std.; mit dem Shuttlebus und Umstieg in Jerantut deutlich länger). Klassisch ist auch die letzte Strecke mit dem Boot ab Kuala Tembeling (ca. 2,5–3 Std., je nach Wasserstand).",
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
      datum: "30. Juni–5. Juli",
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
      datum: "5.–8. Juli",
      naechte: "3 Nächte",
      anreise: "Speedboot nach Kuala Besut (ca. 30–45 Min.), mit dem Auto nach Merang (ca. 1–1,25 Std.), Boot nach Redang (ca. 45 Min.). Viele Resorts bieten Pakete mit Transfer, Essen und Schnorcheln.",
      text: "Die Insel mit dem klarsten Wasser der Ostküste: weisse Strände, Korallengärten direkt vor dem Strand und eine Schildkröten-Station.",
      teens: "Schnorcheln im Marine Park um Pulau Pinang, Schildkröten und Riffhaie, Schildkröten-Station Chagar Hutang (Eiablage nachts, nur mit Führung), Kajak und Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: Schnorcheltouren im Marine Park, Strand, am Abend evtl. Führung zu den Schildkröten.",
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
      name: "Cherating",
      land: "my",
      region: "Malaysia",
      datum: "8.–11. Juli",
      naechte: "3 Nächte",
      anreise: "Boot nach Merang (ca. 45 Min.), mit dem Auto über Kuala Terengganu und Kemaman nach Cherating (ca. 2,5–3 Std.).",
      text: "Entspanntes Strand- und Surfdorf an der Ostküste: lange Strände, Mangrovenfluss mit Glühwürmchen und eine Station für Meeresschildkröten.",
      teens: "Glühwürmchen-Bootsfahrt auf dem Cherating-Fluss am Abend, Surfkurs für Anfänger, Schildkröten-Station in Chendor, Kajak in den Mangroven, Batik-Kurs.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Surfkurs, eine Glühwürmchen-Tour (ca. 1 Std. ab ca. 19.30 Uhr, ca. 15–25 CHF pro Person), Strand und Pool.",
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
      nr: 8,
      name: "Pulau Tioman",
      land: "my",
      region: "Malaysia",
      datum: "11.–15. Juli",
      naechte: "4 Nächte",
      anreise: "Mit dem Auto von Cherating über Kuantan und Pekan nach Mersing (ca. 3–3,5 Std.), dann Fähre nach Tioman (ca. 1,5–2 Std.; nur wenige Fähren pro Tag, abhängig von den Gezeiten, vorab buchen).",
      text: "Grüne Dschungelinsel vor der Ostküste mit Korallenriffen, Wasserfällen und kleinen Dörfern ohne Autoverkehr; der ruhige Abschluss am Meer.",
      teens: "Schnorcheltour zu den vorgelagerten Inseln (Pulau Tulai, Chebeh, Renggis), Dschungel-Wanderung quer über die Insel (Tekek–Juara, ca. 2–3 Std.), Wasserfälle, Kajak und Strandtage.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte. Basis z.B. an der ruhigen Westseite (Salang, Air Batang) oder in Juara im Osten: eine Schnorcheltour zu den vorgelagerten Inseln, eine Dschungel-Wanderung, Strandtage.",
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
      nr: 9,
      name: "Singapur und Sentosa",
      ersatzsuche: "Singapore",
      land: "sg",
      region: "Singapur",
      datum: "15.–18. Juli",
      naechte: "3 Nächte, Rückflug 18. Juli",
      anreise: "Fähre von Tioman nach Mersing (ca. 1,5–2 Std., am Morgen), Fernbus nach Singapur (ca. 3,5–4 Std. mit Grenzkontrolle). Rückflug Singapur–Zürich mit SWISS am So, 18.07.2027 kurz vor Mitternacht (Sommer 2026 ca. 23.00–23.30 Uhr; ca. 13–13,5 Std.), Ankunft in Zürich am Mo, 19.07.2027 am frühen Morgen.",
      text: "Das Finale für die Kids: ein ganzer Tag Sentosa mit Universal Studios, Wasserpark und Strand, bevor es in der Nacht nach Hause geht.",
      teens: "Sentosa-Tag (★): Universal Studios Singapore, Adventure Cove Waterpark, Skyline Luge, Strand und abends die Show «Wings of Time». Dazu Singapore Oceanarium (früher S.E.A. Aquarium), Mandai Wildlife Reserve (Zoo, River Wonders, Night Safari), Science Centre, ArtScience Museum. Tickets online, bei einigen Bahnen gelten Grössenbeschränkungen.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: Ankunft am Abend, ein ganzer Tag Universal Studios, ein Tag Adventure Cove Waterpark, Skyline Luge oder Mandai, am Abreisetag Jewel Changi, am Abend zum Flughafen.",
        "<strong>Essen:</strong> Hawker Centres sind günstig und familienfreundlich (Hainan-Chicken-Reis, Satay, Laksa). Wasserflaschen sind überall erhältlich."
      ],
      ausserdem: "Singapore Oceanarium, Wings of Time (Abendshow), Seilbahn nach Sentosa, Jewel Changi mit Regenwasserfall.",
      bilder: [
        {titel: "Universal Studios", suche: "Universal Studios Singapore", stichwort: "universal"},
        {titel: "Sentosa", suche: "Siloso Beach Sentosa|Sentosa island beach", stichwort: "sentosa|siloso"},
        {titel: "Skyline Luge", suche: "Skyline Luge Sentosa", stichwort: "luge"},
        {titel: "Seilbahn", suche: "Singapore Cable Car Sentosa", stichwort: "cable car"},
        {titel: "Jewel Changi", suche: "Jewel Changi Rain Vortex", stichwort: "jewel|vortex"},
        {titel: "Oceanarium", suche: "S.E.A. Aquarium Singapore", stichwort: "aquarium"}
      ]
    }
  ],
  abschluss: "Direktflug ab Singapur nach Zürich in der Nacht auf den Mo, 19.07.2027 (ca. 13–13,5 Std.), Ankunft am frühen Morgen, dann mit der Bahn nach Brig-Glis. Bis zum Ferienende bleiben einige Tage zum Ankommen.",
  budgetIntro: "Mittelklasse inklusive Flüge, Busse, Transfers, Boote, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Singapur und zurück (SWISS)",
        "4’400–5’600",
        "5’000",
        "ca. 1’100–1’400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Busse, Transfers, Fähren und Boote",
        "1’000–1’800",
        "1’300",
        "Busse Singapur–Malakka–Kuala Lumpur und Mersing–Singapur, private Transfers nach Taman Negara, nach Kuala Besut und der Küste entlang, Speedboote zu den Perhentians und nach Redang, Fähre nach Tioman, Grab, MRT"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)",
        "3’100–4’900",
        "3’900",
        "ca. 90–150 CHF pro Nacht in Malaysia, in Singapur ca. 250–300; Redang meist als Resortpaket"
      ],
      [
        "Verpflegung (Hawker, Restaurants, Getränke)",
        "2’000–3’200",
        "2’500",
        "ca. 70–90 CHF pro Tag für 4 Personen in Malaysia, in Singapur mehr"
      ],
      [
        "Aktivitäten und Eintritte",
        "1’600–2’600",
        "2’000",
        "Gardens by the Bay, Flussboot in Malakka, Petronas-Skybridge, Taman Negara mit Führer, Schnorcheltouren und Marine-Park-Gebühren, Surfkurs, Glühwürmchen-Tour, Universal Studios Singapore usw."
      ],
      [
        "Versicherung, eSIM, Reiseapotheke, Impfungen",
        "500–1’200",
        "800",
        "Reisekranken- und Annullationsschutz, Impfungen (z.B. Hepatitis A), Mückenschutz"
      ],
      ["Reserve (ca. 5 %)", "650–950", "800", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Singapur (2)", "780–1’240"],
      ["2. Malakka (2)", "350–560"],
      ["3. Kuala Lumpur (3)", "580–920"],
      ["4. Taman Negara (3)", "610–960"],
      ["5. Perhentian Islands (5)", "980–1’550"],
      ["6. Pulau Redang (3)", "640–1’020"],
      ["7. Cherating (3)", "560–880"],
      ["8. Pulau Tioman (4)", "640–1’020"],
      ["9. Singapur und Sentosa (3)", "1’710–2’720"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen in Singapur teils noch Kinderpreise (bis 12), in Malaysia oft Kinderpreise oder günstige Eintritte.",
      "Sparhebel: Busse statt privater Transfers, Hawker und lokale Restaurants, einfache Chalets auf den Inseln, Resortpakete auf Redang vergleichen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug- und Hotelpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 28,
    total: "16’300",
    spanne: "13’300–20’300",
    proTag: "ca. 580 CHF pro Tag, ca. 4’100 pro Person"
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise",
      "Singapur und Malaysia sind für Schweizer visumfrei. Vor der Ankunft online die SG Arrival Card (Singapur) und die MDAC (Malaysia Digital Arrival Card) ausfüllen, beide gratis und nur auf den offiziellen Seiten. Bei jeder Busfahrt über die Grenze zwei Kontrollen. Reisepass mind. 6 Monate gültig."
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
      "Auf den Inseln und in Taman Negara kaum Geldautomaten, genug Bargeld (MYR) mitnehmen; sonst Kreditkarte. eSIM für Singapur und Malaysia. Steckdosen Typ G (britisch), Adapter mitnehmen."
    ],
    ["Zeitzonen", "Singapur und Malaysia +6 Std. zur Schweiz."],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung; auf den Inseln nur einfache Kliniken, Spitäler in Kuala Lumpur und Singapur sehr gut."
    ],
    [
      "Notfall",
      "In Malaysia 999, in Singapur 995 (Ambulanz) und 999 (Polizei); Schweizer Botschaft in Kuala Lumpur und Singapur. EDA-Reisehinweise vor der Abreise lesen."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
