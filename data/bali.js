// Reise 2: Singapur – Bali (über Malaysia und Java)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.bali = {
  titel: "Von Singapur nach Bali",
  menu: "Singapur–Bali",
  untertitel: "Fünf Wochen durch Malaysia, Java und Bali: Vulkane, Tempel, Regenwald und Inseln.",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene, 2 Kids",
  titelbild: {
    suche: "Mount Bromo sunrise|Tegalalang rice terrace|Pura Ulun Danu Bratan|Tanah Lot temple",
    stichwort: "bromo|tegalalang|ulun danu|tanah lot",
    alt: "Landschaft in Indonesien"
  },
  planIntro: "Abflug ab Zürich am Fr, 18.06.2027 um 22 Uhr, Rückflug ab Bali (Denpasar) am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18.–19. Juni",
    name: "Flug Zürich–Singapur",
    info: "Abflug Fr, 18.06.2027 um 22 Uhr, Direktflug ca. 12–13 Std., Ankunft in Singapur am Sa, 19.06.2027"
  },
  plan: [
    {
      datum: "19.–22. Juni",
      name: "1. Singapur",
      naechte: 3,
      info: "Flug ab Zürich (Fr, 22 Uhr), Ankunft am Nachmittag oder Abend"
    },
    {
      datum: "22.–26. Juni",
      name: "2. Pulau Tioman (Pahang)",
      naechte: 4,
      info: "Bus nach Mersing (ca. 3,5–4 Std.), Fähre (ca. 1,5–2 Std.)"
    },
    {datum: "26.–29. Juni", name: "3. Kuala Lumpur", naechte: 3, info: "Fähre nach Mersing, Bus (ca. 5–6 Std.)"},
    {datum: "29. Juni–1. Juli", name: "4. Jakarta", naechte: 2, info: "Flug ab Kuala Lumpur (ca. 2–2,5 Std.)"},
    {datum: "1.–6. Juli", name: "5. Yogyakarta", naechte: 5, info: "Zug ab Jakarta (ca. 6–6,5 Std.)"},
    {datum: "6.–9. Juli", name: "6. Bromo und Malang", naechte: 3, info: "Zug nach Malang (ca. 7–8 Std.)"},
    {datum: "9.–11. Juli", name: "7. Ijen und Banyuwangi", naechte: 2, info: "Privatfahrer (ca. 6–8 Std.)"},
    {
      datum: "11.–15. Juli",
      name: "8. Ubud (Bali)",
      naechte: 4,
      info: "Fähre Ketapang–Gilimanuk, Privatfahrer (ca. 5–6 Std. insgesamt)"
    },
    {
      datum: "15.–18. Juli",
      name: "9. Nusa Penida",
      naechte: 3,
      info: "Privatfahrer nach Sanur, Speedboot (ca. 1,5–2 Std. insgesamt)"
    },
    {
      datum: "18.–22. Juli",
      name: "10. Uluwatu (Südbali)",
      naechte: 4,
      info: "Speedboot und Transfer (ca. 2–2,5 Std.); Rückflug 22. Juli ab Denpasar"
    }
  ],
  rueckflug: {datum: "22. Juli", name: "Flug Bali–Zürich", info: "Rückflug ab Denpasar mit einem Stopp, ca. 17–22 Std."},
  planHinweise: [
    [
      "Gesamt",
      "33 Nächte, 10 Stationen. Hinflug nach Singapur, Rückflug ab Bali. Ein einziger Flug dazwischen (Kuala Lumpur–Jakarta); alle anderen Strecken per Bus, Zug und Fähre. Die längsten Reisetage: Tioman–Kuala Lumpur (ca. 7–8 Std.), Jakarta–Yogyakarta (ca. 6–6,5 Std.), Yogyakarta–Malang (ca. 7–8 Std.), Bromo–Banyuwangi (ca. 6–8 Std.) und Banyuwangi–Ubud (ca. 5–6 Std.). Zusammen seid ihr zwischen Singapur und Bali ca. 50 Stunden unterwegs."
    ],
    [
      "Vorab buchen",
      "Zugtickets in Java (KAI Access, früh buchen), Speedboote für Nusa Penida, Unterkünfte auf Bali in der Hochsaison, Bus und Fähre nach Tioman."
    ],
    [
      "Optional",
      "Sumatra (Bukittinggi, Lake Toba, Bukit Lawang mit Orang-Utans; nur mit zusätzlichem Flug sinnvoll), Bandung (Teeplantagen, Hochgeschwindigkeitszug ab Jakarta), Lombok (Gili-Inseln per Speedboot ab Bali)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Direktflug Zürich–Singapur ca. 12–13 Std. (Zeitverschiebung +6 Std.). Abflug am Fr, 18.06.2027 um 22 Uhr, Ankunft am Sa, 19.06.2027 am späten Nachmittag. Rückflug: Denpasar (Bali) hat keinen Direktflug nach Zürich. Mit einem Stopp (z.B. Singapur, Doha, Dubai oder Istanbul) dauert die Rückreise meist ca. 17–22 Std. inklusive Umstieg (Zeitverschiebung −6 Std.). Abflug am Do, 22.07.2027, Ankunft in Zürich meist am nächsten Tag. Flugzeiten bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel. Die Stationen 8 bis 10 liegen eng beieinander auf Bali.",
    breit: true,
    legende: ["bus", "train", "ferry", "air"],
    karten: [{datei: "karten/bali.svg"}]
  },
  abwechslungIntro: "Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen.",
  abwechslung: [
    [
      "Action und Freizeitparks",
      "Singapur (Sentosa, Universal, Wasserpark), Kuala Lumpur (Sunway Lagoon), Jakarta (Dunia Fantasi), Uluwatu (Surf-Schnupperstunde)."
    ],
    [
      "Kultur und Geschichte",
      "Yogyakarta (Borobudur, Prambanan, Kraton), Ubud (Tempel, Kecak-Tanz), Jakarta (Kota Tua) und die Wassertempel auf Bali."
    ],
    [
      "Natur und Tiere",
      "Dschungel und Riffe auf Tioman, Bromo und Ijen (Vulkane), Wasserfälle auf Java und Bali, Mantarochen bei Nusa Penida."
    ],
    [
      "Strand und Erholung",
      "Tioman, Nusa Penida und Uluwatu. Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen."
    ],
    [
      "Mitmachen",
      "Jeeptour auf den Bromo, nächtlicher Ijen-Aufstieg, Höhlen-Tubing, Surf-Schnupperstunde, Street-Food-Touren."
    ]
  ],
  stationenIntro: "Zehn Stationen von Singapur bis Bali. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Singapur",
      land: "sg",
      region: "Singapur",
      datum: "19.–22. Juni",
      naechte: "3 Nächte",
      anreise: "Direktflug Zürich–Singapur (ca. 12–13 Std.), MRT in die Stadt (ca. 30–40 Min.). Vor Ort MRT und Grab.",
      text: "Idealer Einstieg mit Teenagern: sicher, sauber, gut ausgeschildert, mit vielen Attraktionen für 12- und 14-Jährige. Die ersten Tage dienen auch zum Ankommen und zum Überwinden des Jetlags.",
      teens: "Sentosa-Tag (★): Universal Studios Singapore, Adventure Cove Waterpark, Skyline Luge, Strand und abends die Show «Wings of Time». Dazu Singapore Oceanarium (früher S.E.A. Aquarium), Mandai Wildlife Reserve (Zoo, River Wonders, Night Safari), Science Centre, ArtScience Museum. Tickets online, bei einigen Bahnen gelten Grössenbeschränkungen.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, Ankunft am Samstagnachmittag oder -abend, danach zwei volle Tage. Pro Tag nur eine Hauptattraktion plus Pause im Hotel (Hitze und Jetlag).",
        "<strong>Essen:</strong> Hawker Centres sind günstig und familienfreundlich (Hainan-Chicken-Reis, Satay, Laksa). Wasserflaschen sind überall erhältlich.",
        "<strong>Regeln:</strong> Vapes und Kaugummi-Import sind verboten; Bussgelder sind hoch."
      ],
      ausserdem: "Supertrees-Lichtshow (19:45/20:45, ★), Cloud Forest &amp; Flower Dome, Seilbahn nach Sentosa (Mount Faber Line), Chinatown, Botanic Gardens (gratis), Jewel Changi mit Regenwasserfall.",
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
      name: "Pulau Tioman (Pahang)",
      land: "my",
      region: "Malaysia",
      datum: "22.–26. Juni",
      naechte: "4 Nächte",
      anreise: "Fernbus von Singapur nach Mersing (ca. 3,5–4 Std., je nach Anbieter Halt direkt am Hafen Mersing Jetty oder am Busbahnhof; Grenzkontrolle einplanen), dann Fähre nach Tioman (ca. 1,5–2 Std.). Früh am Morgen starten, damit ihr eine Nachmittagsfähre erreicht. Bus und Fähre vorab buchen.",
      text: "Grüne Dschungelinsel vor der Ostküste Malaysias mit Korallenriffen, Wasserfällen und kleinen Dörfern ohne Autoverkehr. Die beste Reisezeit ist Mai bis September, also genau euer Zeitraum. Ein ruhiger Einstieg nach Singapur mit viel Natur.",
      teens: "Schnorcheltour zu den vorgelagerten Inseln (Pulau Tulai, Chebeh, Renggis), Dschungel-Wanderung quer über die Insel (Tekek–Juara, ca. 2–3 Std.), Wasserfälle, Kajak und Strandtage.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte. Basis zum Beispiel an der ruhigen Westseite (Salang, Air Batang) oder im östlichen Juara; ein Wechsel der Inselseite kostet Zeit (Boot oder Wanderweg).",
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
      name: "Kuala Lumpur",
      land: "my",
      region: "Malaysia",
      datum: "26.–29. Juni",
      naechte: "3 Nächte",
      anreise: "Fähre von Tioman nach Mersing (ca. 1,5–2 Std.), dann Fernbus nach Kuala Lumpur (ca. 5–6 Std.). Die Direktverbindung Mersing–Kuala Lumpur vorab prüfen; Fähre am Morgen nehmen, damit ihr abends ankommt.",
      text: "Malaysias Hauptstadt bietet Wolkenkratzer, Aquarium, Parks und Wasserspass. Gute Infrastruktur und günstige Preise.",
      teens: "Petronas-Skybridge (Zeitfenster früh online buchen), Aquaria KLCC (Aquarium im Kuala Lumpur City Centre), Petrosains Science Discovery Centre, Kuala Lumpur Bird Park, Sunway Lagoon (Wasser- und Freizeitpark).",
      fakten: [
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
      name: "Jakarta",
      land: "id",
      region: "Indonesien",
      datum: "29. Juni–1. Juli",
      naechte: "2 Nächte",
      anreise: "Flug Kuala Lumpur–Jakarta (ca. 2–2,5 Std.), Transfer vom Flughafen Soekarno-Hatta in die Stadt (ca. 1 Std.).",
      text: "Indonesiens Hauptstadt als Ankunftsort auf Java: Kolonialviertel, Moscheen, Museen und ein grosser Freizeitpark. Zwei Nächte reichen für den Einstieg.",
      teens: "Dunia Fantasi (Achterbahnen) im Freizeitpark Ancol, Wasserspass im Strandpark Ancol, Aussicht vom Nationalmonument Monas.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Fortbewegung mit Grab oder Gojek, MRT und TransJakarta; Staus einplanen.",
        "<strong>Hinweis:</strong> Der Flug Kuala Lumpur–Jakarta ist der einzige Flug zwischen Hin- und Rückflug; alle anderen Strecken gehen per Bus, Zug und Fähre."
      ],
      ausserdem: "Kota Tua (Altstadt) mit Fatahillah-Platz, Istiqlal-Moschee und Kathedrale, Sunda-Kelapa-Hafen, Kepulauan Seribu (Inselgruppe, Tagesausflug).",
      bilder: [
        {titel: "Kota Tua", suche: "Kota Tua Jakarta Fatahillah Square", stichwort: "fatahillah|kota tua"},
        {titel: "Monas", suche: "Monas National Monument Jakarta|Monas", stichwort: "monas|national monument"},
        {titel: "Istiqlal-Moschee", suche: "Istiqlal Mosque Jakarta", stichwort: "istiqlal"},
        {titel: "Sunda Kelapa", suche: "Sunda Kelapa harbour Jakarta|Sunda Kelapa", stichwort: "sunda kelapa"},
        {titel: "Skyline", suche: "Jakarta skyline|Jakarta Sudirman skyline", stichwort: "jakarta"},
        {titel: "Kathedrale", suche: "Jakarta Cathedral|Gereja Katedral Jakarta", stichwort: "cathedral|katedral"}
      ]
    },
    {
      nr: 5,
      name: "Yogyakarta",
      land: "id",
      region: "Indonesien",
      datum: "1.–6. Juli",
      naechte: "5 Nächte",
      anreise: "Zug ab Jakarta Gambir nach Yogyakarta (Tugu), Eksekutif-Klasse (ca. 6–6,5 Std., z.B. Argo Dwipangga oder Taksaka). Tickets über KAI Access oder tiket.com.",
      text: "Kulturelles Herz Javas mit Sultanspalast, Batik-Handwerk und zwei Welterbestätten: Borobudur und Prambanan.",
      teens: "Aufstieg in Borobudur (Eintritt und Besucherzahl vorab online prüfen), Prambanan, Jeeptour am Merapi-Vulkan, Höhlen-Tubing in der Pindul-Höhle.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: ein Tag Borobudur und Prambanan, ein Tag Stadt (Kraton, Taman Sari), ein Tag Merapi oder Pindul-Höhle, dazu Ruhetage. Borobudur früh am Morgen, mittags Pausen wegen der Hitze.",
        "<strong>Dresscode:</strong> Schultern und Knie bedecken, in Tempeln teils Sarong.",
        "<strong>Essen:</strong> Gudeg (Jackfruit-Eintopf), Angkringan-Strassenstände, Bakpia."
      ],
      ausserdem: "Kraton (Sultanspalast), Taman Sari (Wasserschloss), Malioboro-Strasse, Parangtritis-Strand, Ullen-Sentalu-Museum.",
      bilder: [
        {titel: "Borobudur", suche: "Borobudur temple sunrise|Borobudur", stichwort: "borobudur"},
        {titel: "Prambanan", suche: "Prambanan temple", stichwort: "prambanan"},
        {titel: "Taman Sari", suche: "Taman Sari Yogyakarta water castle|Taman Sari", stichwort: "taman sari"},
        {titel: "Kraton", suche: "Kraton Yogyakarta|Yogyakarta Sultan Palace", stichwort: "kraton"},
        {titel: "Malioboro", suche: "Malioboro Street Yogyakarta|Malioboro", stichwort: "malioboro"},
        {titel: "Merapi", suche: "Mount Merapi|Gunung Merapi", stichwort: "merapi"}
      ]
    },
    {
      nr: 6,
      name: "Bromo und Malang",
      land: "id",
      region: "Indonesien",
      datum: "6.–9. Juli",
      naechte: "3 Nächte",
      anreise: "Zug Yogyakarta–Malang (ca. 7–8 Std., Fahrplan prüfen). Von Malang per Jeep oder Auto nach Bromo.",
      text: "Vulkanlandschaft des Tengger-Massivs mit dem berühmten Sonnenaufgang über dem Bromo. Malang dient als angenehme Basis in den Bergen.",
      teens: "Jeeptour zum Sonnenaufgang am Penanjakan, Sandmeer und Bromo-Krater, Madakaripura-Wasserfall, Tumpak Sewu (Tagesausflug).",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Die Jeeptour startet um ca. 2–3 Uhr morgens.",
        "<strong>Kälte:</strong> Morgens nahe 0–5 °C: Jacke, Mütze und Handschuhe mitbringen.",
        "<strong>Hinweis:</strong> Der Zugang zum Krater kann bei Aktivität gesperrt sein; Lage vorab prüfen."
      ],
      ausserdem: "Savannah (Teletubbies Hill), Kampung Warna-Warni in Malang, Coban-Rondo-Wasserfall, Jodipan-Dorf.",
      bilder: [
        {titel: "Bromo-Sonnenaufgang", suche: "Mount Bromo sunrise Penanjakan|Mount Bromo", stichwort: "bromo"},
        {titel: "Sandmeer", suche: "Bromo Tengger Semeru sea of sand|Tengger caldera", stichwort: "bromo|tengger"},
        {titel: "Tumpak Sewu", suche: "Tumpak Sewu waterfall", stichwort: "tumpak sewu"},
        {titel: "Madakaripura", suche: "Madakaripura waterfall", stichwort: "madakaripura"},
        {titel: "Savanne", suche: "Bromo savanna Teletubbies hill|Bromo savannah", stichwort: "bromo|savanna"},
        {titel: "Kampung Warna-Warni", suche: "Kampung Warna Warni Malang|Jodipan Malang", stichwort: "malang|jodipan"}
      ]
    },
    {
      nr: 7,
      name: "Ijen und Banyuwangi",
      land: "id",
      region: "Indonesien",
      datum: "9.–11. Juli",
      naechte: "2 Nächte",
      anreise: "Privatfahrer von Bromo nach Banyuwangi (ca. 6–8 Std.) oder Zug ab Malang (ca. 7–8 Std., Fahrplan prüfen).",
      text: "Östlicher Zipfel Javas: Der Ijen-Krater mit türkisfarbenem Säuresee und dem «Blue Fire» ist eines der spektakulärsten Naturerlebnisse der Reise.",
      teens: "Nächtlicher Aufstieg zum Ijen-Krater (ca. 1,5–2 Std., Start ca. 1–2 Uhr) zum «Blue Fire», Sonnenaufgang über dem Kratersee. Für den Sohn (12) anspruchsvoll, aber machbar; mit Guide.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Am Tag nach dem Aufstieg Ruhetag.",
        "<strong>Sicherheit:</strong> Gasmaske tragen (am Parkeingang leihbar), Kraterrand nicht ohne Guide betreten; Zugang bei erhöhter Aktivität gesperrt.",
        "<strong>Respekt:</strong> Die Schwefelarbeiter nicht als Fotomotiv ausbeuten."
      ],
      ausserdem: "Baluran-Nationalpark (Savanne), Pulau Merah (Strand), Alas-Purwo-Nationalpark.",
      bilder: [
        {titel: "Ijen-Kratersee", suche: "Ijen crater lake|Kawah Ijen", stichwort: "ijen"},
        {titel: "Blue Fire", suche: "Ijen blue fire|Kawah Ijen blue fire", stichwort: "ijen"},
        {titel: "Schwefelarbeiter", suche: "Ijen sulfur miner|Ijen sulphur miners", stichwort: "ijen"},
        {titel: "Baluran", suche: "Baluran National Park savanna|Baluran", stichwort: "baluran"},
        {titel: "Pulau Merah", suche: "Pulau Merah beach Banyuwangi|Red Island beach", stichwort: "merah|red island"},
        {titel: "Ketapang", suche: "Ketapang harbour Banyuwangi|Banyuwangi", stichwort: "banyuwangi|ketapang"}
      ]
    },
    {
      nr: 8,
      name: "Ubud (Bali)",
      land: "id",
      region: "Indonesien",
      datum: "11.–15. Juli",
      naechte: "4 Nächte",
      anreise: "Fähre Ketapang–Gilimanuk (ca. 1 Std.), dann Privatfahrer nach Ubud (ca. 3,5–4,5 Std., kurvige Strassen). Mit Wartezeit am Hafen insgesamt ca. 5–6 Std.",
      text: "Kultureller Mittelpunkt Balis mit Reisterrassen, Tempeln, Tanzaufführungen und Kunsthandwerk. Gute Basis für Ausflüge ins Hochland.",
      teens: "Tegalalang-Reisterrassen früh am Morgen, Heiliger Affenwald, Wasserfälle (Tegenungan, Tibumana), optional Sonnenaufgangs-Trek auf den Mount Batur.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte. Juli ist Hochsaison: Unterkünfte und Touren früh buchen.",
        "<strong>Hinweis:</strong> Tollwut kommt vor; Affen und Hunde nicht füttern oder anfassen, bei Biss sofort ärztlich behandeln lassen. Touristenabgabe für Bali beachten."
      ],
      ausserdem: "Tirta Empul (Reinigungsritual, Sarong Pflicht), Goa Gajah, Campuhan Ridge Walk, Kecak-Tanz, Ubud-Palast und Markt.",
      bilder: [
        {titel: "Tegalalang", suche: "Tegalalang rice terrace", stichwort: "tegalalang"},
        {
          titel: "Affenwald",
          suche: "Sacred Monkey Forest Sanctuary Ubud|Monkey Forest Ubud",
          stichwort: "monkey forest"
        },
        {titel: "Tirta Empul", suche: "Tirta Empul temple", stichwort: "tirta empul"},
        {titel: "Tegenungan", suche: "Tegenungan waterfall", stichwort: "tegenungan"},
        {titel: "Campuhan", suche: "Campuhan Ridge Walk Ubud|Campuhan ridge", stichwort: "campuhan"},
        {titel: "Ubud-Palast", suche: "Puri Saren Agung Ubud|Ubud Palace", stichwort: "puri saren|ubud palace"}
      ]
    },
    {
      nr: 9,
      name: "Nusa Penida",
      land: "id",
      region: "Indonesien",
      datum: "15.–18. Juli",
      naechte: "3 Nächte",
      anreise: "Privatfahrer von Ubud nach Sanur (ca. 1 Std.), Speedboot nach Nusa Penida (ca. 30–45 Min.).",
      text: "Wilde Klippeninsel vor Bali mit spektakulären Aussichtspunkten, Buchten und Schnorchelplätzen mit Mantarochen.",
      teens: "Schnorcheln mit Mantarochen am Manta Point (mit Guide), Kelingking Beach (steiler Abstieg), Angel's Billabong, Broken Beach.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Strassen sind steil und schlecht: lieber Fahrer als Roller.",
        "<strong>Boot:</strong> Wellengang kann im Juli stark sein; Seekrankheitstabletten bereithalten, Fahrplan flexibel halten."
      ],
      ausserdem: "Diamond Beach, Atuh Beach, Seganing-Wasserfall, Nusa Lembongan (Mangroven, Ausflug).",
      bilder: [
        {titel: "Kelingking Beach", suche: "Kelingking Beach Nusa Penida", stichwort: "kelingking"},
        {titel: "Broken Beach", suche: "Broken Beach Nusa Penida", stichwort: "broken beach"},
        {titel: "Angel's Billabong", suche: "Angel's Billabong Nusa Penida", stichwort: "billabong"},
        {titel: "Crystal Bay", suche: "Crystal Bay Nusa Penida", stichwort: "crystal bay"},
        {titel: "Diamond Beach", suche: "Diamond Beach Nusa Penida", stichwort: "diamond beach"},
        {titel: "Manta Point", suche: "manta ray Nusa Penida|Manta Point", stichwort: "manta"}
      ]
    },
    {
      nr: 10,
      name: "Uluwatu (Südbali, Finale)",
      land: "id",
      region: "Indonesien",
      datum: "18.–22. Juli",
      naechte: "4 Nächte, Rückflug 22. Juli",
      anreise: "Speedboot von Nusa Penida nach Sanur, Transfer nach Uluwatu (ca. 1,5 Std.). Rückflug ab Denpasar.",
      text: "Abschluss an den Klippen der Bukit-Halbinsel mit Surfstränden, Sonnenuntergängen und dem berühmten Uluwatu-Tempel.",
      teens: "Kecak-Tanz bei Sonnenuntergang am Uluwatu-Tempel (Affen stehlen Brillen und Handys), Surf-Schnupperstunde für Anfänger, Strände Padang Padang und Bingin.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte. Der Flughafen Denpasar ist ca. 45–60 Min. entfernt; am Abreisetag Puffer für den Verkehr einplanen.",
        "<strong>Essen:</strong> Gegrillter Fisch am Strand von Jimbaran."
      ],
      ausserdem: "Tanah Lot (Tempel im Meer), Melasti-Strand, Suluban-Strand, Garuda-Wisnu-Kencana-Statue.",
      bilder: [
        {titel: "Uluwatu-Tempel", suche: "Pura Luhur Uluwatu cliff|Uluwatu temple", stichwort: "uluwatu"},
        {titel: "Padang Padang", suche: "Padang Padang beach Uluwatu|Padang Padang beach", stichwort: "padang padang"},
        {titel: "Tanah Lot", suche: "Tanah Lot temple", stichwort: "tanah lot"},
        {titel: "Jimbaran", suche: "Jimbaran beach", stichwort: "jimbaran"},
        {titel: "Suluban", suche: "Suluban beach Uluwatu|Blue Point beach Uluwatu", stichwort: "suluban|blue point"},
        {titel: "Melasti", suche: "Melasti beach Bali", stichwort: "melasti"}
      ]
    }
  ],
  abschluss: "Rückflug ab Denpasar (Bali) nach Zürich am Do, 22.07.2027 (mit einem Stopp, ca. 17–22 Std.).",
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 33,
    total: "20’400",
    spanne: "15’800–25’400",
    proTag: "ca. 620 CHF pro Tag, ca. 5’100 pro Person",
    posten: [
      [
        "Flüge Zürich–Singapur und Bali–Zürich",
        "4’400–5’600",
        "5’000",
        "ca. 1’100–1’400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Fernverkehr (Bus, Zug, Fähre, ein Flug)",
        "1’080–2’140",
        "1’500",
        "Bus und Fähren Tioman, Bus nach Kuala Lumpur, Flug Kuala Lumpur–Jakarta, Züge Java, Privatfahrer und Fähren Ost-Java–Bali, Speedboote"
      ],
      ["Lokale Transfers", "450–900", "600", "Grab, Gojek, MRT, Wassertaxis"],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)",
        "3’030–5’040",
        "4’000",
        "ca. 50–180 CHF pro Nacht, Singapur ca. 220–300"
      ],
      [
        "Verpflegung (Hawker, Restaurants, Getränke)",
        "2’460–3’970",
        "3’200",
        "ca. 50–180 CHF pro Tag für 4 Personen, Singapur am teuersten"
      ],
      [
        "Aktivitäten und Eintritte",
        "2’350–4’200",
        "3’300",
        "Universal, Borobudur, Jeeptour Bromo, Ijen-Guide, Bootstouren, Schnorcheln usw."
      ],
      [
        "Versicherung, eSIM, Medikamente, Impfungen",
        "600–1’200",
        "900",
        "Reisekranken- und Annullationsschutz, Reiseapotheke"
      ],
      ["Reserve (ca. 10 %)", "1’450–2’300", "1’850", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Singapur (3)", "1’520–2’240"],
      ["2. Pulau Tioman (4)", "850–1’450"],
      ["3. Kuala Lumpur (3)", "630–1’050"],
      ["4. Jakarta (2)", "420–790"],
      ["5. Yogyakarta (5)", "950–1’600"],
      ["6. Bromo und Malang (3)", "610–1’080"],
      ["7. Ijen und Banyuwangi (2)", "350–660"],
      ["8. Ubud (4)", "880–1’510"],
      ["9. Nusa Penida (3)", "720–1’250"],
      ["10. Uluwatu (4)", "910–1’580"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) zahlt bei Eintritten oft noch den Kinderpreis, die Tochter (14) meist den Vollpreis.",
      "Sparhebel: lokale Restaurants statt Hotelessen, Familienzimmer statt zwei Zimmer, Flüge früh buchen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug- und Hotelpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ]
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise Indonesien",
      "Für Schweizer Reisende gilt eine Visa-on-Arrival bzw. e-VOA für 30 Tage; ihr seid ca. 23 Tage in Indonesien, eine Verlängerung ist nicht nötig. Zusätzlich online: Einreiseformular für Indonesien und die Touristenabgabe für Bali. Reisepass mind. 6 Monate gültig. Alle Angaben vor Abreise bei den offiziellen Portalen prüfen."
    ],
    [
      "Einreise Singapur und Malaysia",
      "Beide Länder sind für Touristen visafrei. Online-Anmeldungen: SG Arrival Card (Singapur) und MDAC (Malaysia)."
    ],
    [
      "Währung und Zahlung",
      "Singapur-Dollar, Malaysischer Ringgit und Indonesische Rupiah. In Indonesien Bargeld für ländliche Gegenden mitnehmen; Geldautomaten haben Limits pro Abhebung. QRIS (QR-Zahlung) ist in Städten verbreitet."
    ],
    [
      "Wetter im Juni und Juli",
      "Trockenzeit auf Java und Bali (beste Reisezeit, Bali Hochsaison). Bromo und Ijen sind nachts sehr kalt. Die Ostküste Malaysias (Tioman) ist im Juni und Juli meist ruhig."
    ],
    ["Zeitzonen", "Singapur, Malaysia und Bali UTC+8, Java UTC+7. Zur Schweiz sind es im Sommer 5 bis 6 Stunden."],
    [
      "Transport-Apps",
      "Grab und Gojek (Taxi, Roller), KAI Access (Zug), tiket.com und Traveloka (Flug, Zug), Google Maps offline. Auf Bali: Speedboote für Nusa Penida vorab online buchen."
    ],
    [
      "Gesundheit",
      "Impfstatus aller vier Reisenden beim Hausarzt oder Tropeninstitut mind. 6–8 Wochen vorher klären (Hepatitis A, Tetanus, Typhus; Tollwut-Risiko auf Bali beachten). Dengue-Mückenschutz. Leitungswasser nicht trinken. Alkohol nur in seriösen Lokalen (Methanol-Risiko bei selbst gemischten Getränken)."
    ],
    [
      "Vulkane und Naturgefahren",
      "Bromo, Ijen, Merapi und Agung können Zugangsbeschränkungen haben. Offizielle Lagemeldungen (MAGMA Indonesia) beachten. Erdbeben kommen vor."
    ],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung für alle vier, inkl. Wandern und Schnorcheln. Roller mit den Teenagern meiden; Helm tragen."
    ],
    [
      "Kultur und Verhalten",
      "Java ist mehrheitlich muslimisch, Bali hinduistisch. Dezente Kleidung bei Tempeln und Moscheen, Schuhe ausziehen, rechte Hand zum Geben und Essen nutzen, Kopf nicht berühren."
    ],
    ["Gesetze", "Sehr harte Strafen für Drogenbesitz. Drohnen nur mit Bewilligung."],
    [
      "Notfall",
      "Indonesien 112, Malaysia 999, Singapur 999 (Polizei) und 995 (Ambulanz). Schweizer Vertretungen (Botschaft Jakarta, Konsulat Bali) notieren; EDA-Reiseplattform nutzen."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
