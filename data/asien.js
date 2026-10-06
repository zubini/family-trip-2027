// Reise 1: Singapur – Bangkok (über Malaysia und Thailand)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.asien = {
  titel: "Von Singapur nach Bangkok",
  menu: "Singapur–Bangkok",
  untertitel: "Fünf Wochen über Land und Wasser durch Singapur, Malaysia und Thailand, mit Dschungel, Inseln und Grossstadt.",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    datei: "Nang Yuan Island, Koh Tao (48109157601).jpg",
    suche: "Koh Nang Yuan|Nang Yuan Island Koh Tao",
    stichwort: "nang yuan|nangyuan",
    alt: "Koh Nang Yuan bei Koh Tao, Thailand"
  },
  planIntro: "Abflug ab Zürich am Fr, 18.06.2027 um 22 Uhr, Rückflug ab Bangkok am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18.–19. Juni",
    name: "Flug Zürich–Singapur",
    info: "Direktflug ca. 12–13 Std., Ankunft in Singapur am Sa, 19.06.2027"
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
    {datum: "26.–29. Juni", name: "3. Kuala Lumpur", naechte: 3, info: "Fähre nach Mersing (ca. 1,5–2 Std.), Bus (ca. 5–6 Std.); insgesamt ca. 7–8 Std."},
    {
      datum: "29.–30. Juni",
      name: "Zwischenübernachtung Kuala Besut",
      naechte: 1,
      info: "Fernbus ab Kuala Lumpur (ca. 8–9 Std.)"
    },
    {
      datum: "30. Juni–3. Juli",
      name: "4. Perhentian Islands",
      naechte: 3,
      info: "Speedboot ab Kuala Besut (ca. 30–45 Min.)"
    },
    {
      datum: "3.–6. Juli",
      name: "5. Penang / George Town",
      naechte: 3,
      info: "Speedboot und Minivan über Gerik (ca. 7–8 Std. insgesamt)"
    },
    {
      datum: "6.–7. Juli",
      name: "Zwischenübernachtung Hat Yai (Thailand)",
      naechte: 1,
      info: "Fähre nach Butterworth, ETS-Zug nach Padang Besar (ca. 2 Std.), Grenze, Pendelzug nach Hat Yai (ca. 45 Min.); insgesamt ca. 5–6 Std."
    },
    {datum: "7.–9. Juli", name: "6. Khanom", naechte: 2, info: "Minivan mit Umstieg in Nakhon Si Thammarat oder Privattransfer (ca. 5–6 Std.)"},
    {datum: "9.–13. Juli", name: "7. Koh Samui", naechte: 4, info: "Minivan zum Donsak Pier, Autofähre (ca. 2,5 Std.)"},
    {datum: "13.–18. Juli", name: "8. Koh Tao", naechte: 5, info: "Katamaran ab Samui (ca. 1,5–2 Std.)"},
    {
      datum: "18.–20. Juli",
      name: "9. Hua Hin / Khao Sam Roi Yot",
      naechte: 2,
      info: "Katamaran nach Chumphon, Bus oder Zug nach Hua Hin (ca. 7 Std. insgesamt)"
    },
    {datum: "20.–22. Juli", name: "10. Bangkok", naechte: 2, info: "Zug oder Minivan (ca. 3–4 Std.); Rückflug 22. Juli"}
  ],
  rueckflug: {datum: "22. Juli", name: "Flug Bangkok–Zürich", info: "Rückflug, Direktflug ca. 11,5–12 Std."},
  planHinweise: [
    [
      "Gesamt",
      "33 Nächte, 10 Stationen und zwei Zwischenübernachtungen (Kuala Besut, Hat Yai). Nur Hin- und Rückflug, alle Strecken dazwischen per Bus, Zug und Fähre. Die längsten Reisetage (Tioman–Kuala Lumpur, Kuala Lumpur–Kuala Besut, Perhentian–Penang, Penang–Hat Yai, Hat Yai–Khanom, Koh Tao–Hua Hin) dauern ca. 5–9 Stunden. Zusammen sind es zwischen Singapur und Bangkok ca. 55–60 Stunden reine Reisezeit; mit Wartezeiten auf Fähren und Züge, Grenzübertritten und Transfers zur Unterkunft realistisch ca. 65–70 Stunden."
    ],
    [
      "Vorab buchen",
      "Bus nach Mersing und Fähre nach Tioman, Bus nach Kuala Besut, Unterkunft auf Tioman und den Perhentians, ETS-Zug und Katamarane Samui–Tao–Chumphon online reservieren und Fahrpläne prüfen. Lange Reisetage früh am Morgen starten."
    ],
    [
      "Optional",
      "Ipoh (Höhlentempel, zwischen Kuala Lumpur und Penang), Koh Phangan (zwischen Samui und Tao), Kanchanaburi (Brücke am Kwai, Erawan-Wasserfälle, ab Bangkok)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Direktflug Zürich–Singapur ca. 12–13 Std. (Zeitverschiebung +6 Std.). Abflug am Fr, 18.06.2027 um 22 Uhr, Ankunft am Sa, 19.06.2027 am späten Nachmittag. Rückflug: Direktflug Bangkok–Zürich ca. 11,5–12 Std. (Zeitverschiebung −5 Std.) am Do, 22.07.2027. Mit Umstieg dauert die Reise meist 15–18 Std. Direktflüge und Flugzeiten bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel. Mit der Maus über eine Linie oder Station fahren zeigt Details.",
    breit: false,
    legende: ["bus", "train", "ferry"],
    karten: [{datei: "karten/asien.svg"}]
  },
  abwechslungIntro: "Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen.",
  abwechslung: [
    [
      "Action und Freizeitparks",
      "Singapur (Sentosa, Universal, Wasserpark), Kuala Lumpur (Sunway Lagoon), Penang (Escape Adventure Park), Pulau Tioman (Dschungel, Riffe), Hua Hin (Wasserpark), Bangkok (Safari World, SEA LIFE)."
    ],
    [
      "Kultur und Geschichte",
      "George Town, Khao Sam Roi Yot (Höhle), Bangkok (Grand Palace, Wat Pho), Ayutthaya (Tempelruinen)."
    ],
    [
      "Natur und Tiere",
      "Mandai Wildlife Reserve, Batu Caves, Penang National Park, Schildkröten auf den Perhentians, Dschungel und Riffe auf Tioman, Delfine in Khanom, Wasserfälle, Schnorcheln auf Samui und Tao, Ang Thong Marine Park."
    ],
    [
      "Strand und Erholung",
      "Tioman, Perhentian Islands, Khanom, Koh Samui, Koh Tao, Hua Hin. Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen."
    ],
    ["Mitmachen", "Muay-Thai-Schnupperkurs, Kajak/SUP, Street-Food- und Tuk-Tuk-Touren."]
  ],
  stationenIntro: "Zehn Stationen von Singapur bis Bangkok. Über jeder Station steht, wie ihr dorthin kommt.",
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
      name: "Perhentian Islands",
      land: "my",
      region: "Malaysia",
      datum: "30. Juni–3. Juli",
      naechte: "3 Nächte",
      zwischenstopp: {text: "Zwischenstopp in Kuala Besut", datum: "29.–30. Juni"},
      anreise: "Fernbus ab dem Busbahnhof Terminal Bersepadu Selatan in Kuala Lumpur nach Kuala Besut (ca. 8–9 Std.), dort eine Übernachtung, am Morgen Speedboot zu den Inseln (ca. 30–45 Min.). Bus und Boot früh buchen; Nachtbusse gibt es auch, sind mit Teenagern aber anstrengend.",
      text: "Zwei autofreie Inseln an der Ostküste mit glasklarem Wasser, weissen Stränden und Schildkröten. Juni liegt mitten in der Saison (ca. März bis Oktober); der Monsun an der Ostküste beginnt erst im November.",
      teens: "Schnorcheltour mit Meeresschildkröten und Schwarzspitzen-Riffhaien (Shark Point, Turtle Point), Kajak, Strandtage, Dschungelpfad zwischen den Buchten.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Perhentian Besar ist ruhiger und familienfreundlicher, Kecil (Long Beach) lebhafter und einfacher.",
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
      nr: 5,
      name: "Penang / George Town",
      land: "my",
      region: "Malaysia",
      datum: "3.–6. Juli",
      naechte: "3 Nächte",
      anreise: "Speedboot von den Perhentians nach Kuala Besut, dann Minivan über den East-West-Highway (Gerik) nach Penang (Boot ca. 30–45 Min., Minivan ca. 5–6 Std., mit Wartezeit insgesamt ca. 7–8 Std.); Boot und Minivan werden oft als Kombi-Ticket angeboten. Früh starten. Weiterreise nach Thailand: Fähre George Town–Butterworth, ETS-Zug nach Padang Besar (ca. 2 Std.), Grenzübergang, Pendelzug nach Hat Yai (ca. 45 Min.; nur drei Züge pro Tag, Fahrplan prüfen), dort eine Übernachtung.",
      text: "Streetfood-Hochburg mit Wandkunst, Strand und Bergbahn. Auch Teenager lieben die Street-Art-Rallye durch die Gassen.",
      teens: "Penang Hill (Standseilbahn, Kanopyweg), Entopia (Schmetterlinge/Insekten), Escape Adventure Park (Wasserrutschen), Strand in Batu Ferringhi, Street-Art-Schnitzeljagd.",
      fakten: [
        "<strong>Essen:</strong> Char Kway Teow, Satay, Cendol, Hawker Centres. Bei scharfen Gerichten «nicht scharf» bestellen, falls nötig.",
        "<strong>Dauer:</strong> 2 Nächte. Altstadt per Grab und zu Fuss, mittags Pausen wegen Hitze.",
        "<strong>Mitmachen:</strong> Kajak an der Küste, Wassersport am Strand von Batu Ferringhi."
      ],
      ausserdem: "Pinang Peranakan Mansion, Khoo Kongsi, Fort Cornwallis, Clan Jetties (Chew Jetty), Penang National Park (Monkey Beach per Boot).",
      warnung: "<strong>Sicherheitshinweis:</strong> Die Provinzen Narathiwat, Yala und Pattani im tiefen Süden Thailands (teils auch Songkhla) haben Reisewarnungen. Der Grenzübergang Padang Besar und die Stadt Hat Yai gehören nicht dazu, die aktuelle Lage und die EDA-Reisehinweise vorab prüfen. Nicht weiter in den tiefen Süden reisen.",
      bilder: [
        {
          titel: "Wandkunst",
          suche: "George Town Penang street art mural|Penang street art",
          stichwort: "street art|mural"
        },
        {titel: "Kek Lok Si", suche: "Kek Lok Si temple Penang|Kek Lok Si", stichwort: "kek lok si"},
        {titel: "Chew Jetty", suche: "Chew Jetty Penang|Clan Jetties Penang", stichwort: "jetty|jetties"},
        {titel: "Penang Hill", suche: "Penang Hill funicular|Penang Hill", stichwort: "penang hill|bukit bendera"},
        {titel: "Khoo Kongsi", suche: "Khoo Kongsi Penang", stichwort: "khoo kongsi"},
        {
          titel: "Blue Mansion",
          suche: "Cheong Fatt Tze Mansion|Blue Mansion Penang",
          stichwort: "cheong fatt tze|blue mansion"
        }
      ]
    },
    {
      nr: 6,
      name: "Khanom",
      land: "th",
      region: "Thailand",
      datum: "7.–9. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenstopp in Hat Yai", datum: "6.–7. Juli"},
      anreise: "Minivan von Hat Yai nach Nakhon Si Thammarat (ca. 3 Std.), dort umsteigen nach Khanom (ca. 1,5 Std.); mit Wartezeit ca. 5–6 Std. Ein Privattransfer (ca. 4,5 Std.) ist bequemer.",
      text: "Ruhiger Küstenort am Golf von Thailand mit einsamen Stränden, Wasserfällen und rosa Delfinen. Ein entspannter Zwischenhalt nach der langen Reise aus dem Süden.",
      teens: "Delfin-Bootstour ab Pak Nam (Sichtung nicht garantiert), Hin Lat Wasserfälle, Strandtage, Schnorcheln und Kajak.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Ankunft am Nachmittag, am nächsten Tag Delfin-Tour am Morgen und Wasserfälle. Unterkunft mit Pool vorab buchen, das Angebot ist klein.",
        "<strong>Praktisch:</strong> Kaum Touristen; Taxi oder Songthaew für Ausflüge organisieren, keine Roller."
      ],
      ausserdem: "Hat Nai Plao, Hat Na Dan, Kokosnuss-Plantagen, lokale Meeresfrüchte-Lokale; bei genug Zeit Nakhon Si Thammarat mit Wat Phra Mahathat.",
      bilder: [
        {titel: "Rosa Delfine", suche: "Indo-Pacific humpback dolphin|Sousa chinensis", stichwort: "humpback|sousa"},
        {titel: "Khanom", suche: "Khanom beach|Khanom district", stichwort: "khanom"},
        {titel: "Küste bei Khanom", suche: "Khanom Nakhon Si Thammarat coast|Khanom", stichwort: "khanom"},
        {
          titel: "Wat Phra Mahathat",
          suche: "Wat Phra Mahathat Woramahawihan Nakhon Si Thammarat",
          stichwort: "mahathat"
        },
        {
          titel: "Longtailboot",
          suche: "long-tail boat Thailand beach|longtail boat Thailand",
          stichwort: "long-tail|longtail|long tail"
        },
        {
          titel: "Kokospalmen",
          suche: "coconut plantation Nakhon Si Thammarat|coconut palms beach Thailand",
          stichwort: "coconut"
        }
      ]
    },
    {
      nr: 7,
      name: "Koh Samui",
      land: "th",
      region: "Thailand",
      datum: "9.–13. Juli",
      naechte: "4 Nächte",
      anreise: "Minivan von Khanom zum Donsak Pier (ca. 1 Std.), dann Autofähre (Seatran/Raja) direkt nach Samui (ca. 1,5 Std.).",
      text: "Thailands grosse Familieninsel mit guter Infrastruktur, Stränden und Ausflügen. Im Juli sind die Wetterbedingungen im Golf meist stabil.",
      teens: "Tagesausflug in den Ang Thong Marine Park (Kajak, Schnorcheln, Wanderung zum Aussichtspunkt), Strandtage in Lamai/Chaweng, Na Muang Wasserfälle.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte, Unterkunft mit Pool und Familienzimmer. Bophut/Mae Nam sind ruhiger als Chaweng.",
        "<strong>Sicherheit:</strong> Rote Flaggen am Strand beachten, Schwimmwesten bei Bootsausflügen, kein Roller mit den Teenagern.",
        "<strong>Mitmachen:</strong> Kajak/SUP, Dschungelpark mit Seilrutschen im Inselinneren."
      ],
      ausserdem: "Wat Plai Laem, Fisherman's Village (Walking Street nur freitags, im Reiseplan am Freitag, 9. Juli möglich), Hin Ta Hin Yai, Tierschutzprojekte mit ethischer Ausrichtung statt Elefantenreiten.",
      bilder: [
        {titel: "Big Buddha", suche: "Big Buddha Koh Samui|Wat Phra Yai Ko Samui", stichwort: "big buddha|phra yai"},
        {titel: "Wat Plai Laem", suche: "Wat Plai Laem Ko Samui|Wat Plai Laem", stichwort: "plai laem"},
        {titel: "Lamai Beach", suche: "Lamai beach Ko Samui|Lamai Samui", stichwort: "lamai"},
        {titel: "Chaweng Beach", suche: "Chaweng beach Ko Samui|Chaweng", stichwort: "chaweng"},
        {titel: "Ang Thong", suche: "Ang Thong National Marine Park|Mu Ko Ang Thong", stichwort: "ang thong"},
        {titel: "Na Muang Wasserfall", suche: "Na Muang waterfall Ko Samui|Namuang waterfall", stichwort: "muang"}
      ]
    },
    {
      nr: 8,
      name: "Koh Tao",
      land: "th",
      region: "Thailand",
      datum: "13.–18. Juli",
      naechte: "5 Nächte",
      anreise: "Highspeed-Katamaran der Lomprayah von Koh Samui über Koh Phangan nach Koh Tao (ca. 1,5–2 Std.). Online vorab buchen, Wellengang kann stärker sein.",
      text: "Das Schnorchelparadies im Golf von Thailand mit klarem, ruhigem Wasser und der berühmten Sandbank von Koh Nang Yuan.",
      teens: "Schnorcheln (Shark Bay, Japanese Gardens, Mango Bay), Koh Nang Yuan (Aussichtspunkt, Strand), Bootsausflug rund um die Insel.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte. Schnorchelwesten für alle, Teenager beim Schnorcheln nicht allein lassen.",
        "<strong>Praktisch:</strong> Eintritt für Nang Yuan, früh anreisen. Seekrankheitstabletten für Bootsfahrten bereithalten.",
        "<strong>Mitmachen:</strong> Kajak/SUP, Sonnenuntergangs-Bootstour, Wanderung zu den Aussichtspunkten."
      ],
      ausserdem: "John-Suwan-Aussichtspunkt, Freedom Beach, Sairee Beach (Sonnenuntergang), Wanderungen, Haistation-Besuch (Ethik beachten).",
      bilder: [
        {titel: "Koh Nang Yuan", suche: "Ko Nang Yuan sandbar|Koh Nang Yuan", stichwort: "nang yuan"},
        {titel: "Sairee Beach", suche: "Sairee Beach Ko Tao|Sairee", stichwort: "sairee"},
        {titel: "Koh Tao", suche: "Ko Tao island bay|Koh Tao", stichwort: "ko tao|koh tao"},
        {titel: "Tanote Bay", suche: "Tanote Bay Ko Tao|Tanote Bay", stichwort: "tanote"},
        {titel: "Shark Bay", suche: "Shark Bay Ko Tao|Thian Og bay", stichwort: "shark bay|thian og"},
        {titel: "Mango Bay", suche: "Mango Bay Ko Tao|Ao Mamuang", stichwort: "mango bay|mamuang"}
      ]
    },
    {
      nr: 9,
      name: "Hua Hin / Khao Sam Roi Yot",
      land: "th",
      region: "Thailand",
      datum: "18.–20. Juli",
      naechte: "2 Nächte",
      anreise: "Katamaran Lomprayah von Koh Tao nach Chumphon (ca. 1,5–2 Std.), weiter mit dem Lomprayah-Bus (Kombiticket, Abfahrt Koh Tao 10:15, Ankunft Hua Hin ca. 17 Uhr) oder mit dem Zug nach Hua Hin. Gesamtreise ca. 7 Std.; Verpflegung mitnehmen.",
      text: "Königliche Küstenstadt mit breitem Strand, Wasserpark und Nationalpark. Ein entspannter Zwischenhalt vor der Grossstadt.",
      teens: "Vana Nava Water Jungle (Wasserpark), Strandtage, Reiten am Strand, Santorini Park (Fotospots), Wanderung zur Phraya-Nakhon-Höhle (ca. 30–45 Min. steil).",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Khao Sam Roi Yot mit Phraya-Nakhon-Höhle, dazu Strand und Märkte am Abend. Der Wasserpark ist optional.",
        "<strong>Cicada Market:</strong> Fr–So abends, im Reiseplan am Sonntag, 18. Juli möglich.",
        "<strong>Phraya Nakhon:</strong> Möglichst vormittags, wenn das Sonnenlicht in die Höhle fällt. Wasser und festes Schuhwerk mitnehmen."
      ],
      ausserdem: "Hua Hin Night Market, Khao Takiab (Affenberg, Affen nicht füttern), Pala-U Wasserfall, Khao Sam Roi Yot Sumpf (Vögel), Königlicher Bahnhof.",
      bilder: [
        {
          titel: "Phraya-Nakhon-Höhle",
          suche: "Phraya Nakhon Cave Kuha Karuhas pavilion|Phraya Nakhon Cave",
          stichwort: "phraya nakhon|kuha karuhas"
        },
        {titel: "Khao Sam Roi Yot", suche: "Khao Sam Roi Yot National Park|Sam Roi Yot", stichwort: "sam roi yot"},
        {titel: "Bahnhof Hua Hin", suche: "Hua Hin railway station", stichwort: "hua hin"},
        {titel: "Strand Hua Hin", suche: "Hua Hin beach|Hua Hin", stichwort: "hua hin"},
        {titel: "Khao Takiab", suche: "Khao Takiab Hua Hin|Khao Takiap", stichwort: "takiab|takiap"},
        {titel: "Laem Sala", suche: "Laem Sala beach Sam Roi Yot|Laem Sala", stichwort: "laem sala"}
      ]
    },
    {
      nr: 10,
      name: "Bangkok",
      land: "th",
      region: "Thailand",
      datum: "20.–22. Juli",
      naechte: "2 Nächte, Rückflug 22. Juli",
      anreise: "Zug oder Minivan von Hua Hin nach Bangkok (ca. 3–4 Std.), Ankunft je nach Zug am Bahnhof Krung Thep Aphiwat oder Hua Lamphong; weiter mit MRT oder Taxi.",
      text: "Vielfältiges Finale: Tempel, Flussfahrten, Aquarium und Nachtmärkte. Zwei Nächte reichen für die wichtigsten Höhepunkte der Stadt.",
      teens: "SEA LIFE Bangkok Ocean World (Siam Paragon), Safari World (nur bei genug Zeit), Khlong-Bootsfahrt, Tempelbesichtigung in Ayutthaya.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Ein voller Tag für Grand Palace, Wat Pho und Wat Arun; Ayutthaya passt nur, wenn der Rückflug erst am Abend des 22. Juli geht. Am Abreisetag Puffer für den Weg zum Flughafen einplanen.",
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
  abschluss: "Rückflug ab Bangkok nach Zürich am Do, 22.07.2027 (Direktflug ca. 11,5–12 Std.).",
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 33,
    total: "20’600",
    spanne: "16’300–25’300",
    proTag: "ca. 620 CHF pro Tag, ca. 5’150 pro Person",
    posten: [
      [
        "Flüge Zürich–Singapur und Bangkok–Zürich",
        "4’400–5’600",
        "5’000",
        "ca. 1’100–1’400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Fernverkehr (Bus, Zug, Fähre, Minivan)",
        "870–1’580",
        "1’200",
        "Bus Singapur–Mersing, Fähren Mersing–Tioman, Bus nach Kuala Lumpur und Kuala Besut, Boote Perhentian, Minivan nach Penang, Fähre/ETS/Zug nach Hat Yai, Minivans nach Khanom, Fähren Samui–Tao–Chumphon, Zug nach Hua Hin/Bangkok"
      ],
      ["Lokale Transfers", "500–1’000", "600", "Grab, MRT/Skytrain, Wassertaxis, Songthaew"],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)",
        "3’350–5’300",
        "4’300",
        "ca. 80–170 CHF pro Nacht, Singapur ca. 220–300"
      ],
      [
        "Verpflegung (Hawker, Restaurants, Getränke)",
        "2’750–4’300",
        "3’500",
        "ca. 70–180 CHF pro Tag für 4 Personen, Singapur am teuersten"
      ],
      [
        "Aktivitäten und Eintritte",
        "2’350–4’050",
        "3’200",
        "Universal, Schnorcheltouren, Marine-Park-Gebühren, Ang Thong usw."
      ],
      [
        "Versicherung, eSIM, Medikamente, Impfungen",
        "600–1’200",
        "900",
        "Reisekranken- und Annullationsschutz, Reiseapotheke"
      ],
      ["Reserve (ca. 10 %)", "1’500–2’300", "1’850", "Souvenirs, Wäsche, Unvorhergesehenes"],
      [
        "<strong>Total</strong>",
        "<strong>16’300–25’300</strong>",
        "<strong>ca. 20’600</strong>",
        "ca. 620 CHF pro Tag, ca. 5’150 pro Person"
      ]
    ],
    stationen: [
      ["1. Singapur (3)", "1’520–2’240"],
      ["2. Pulau Tioman (4)", "850–1’450"],
      ["3. Kuala Lumpur (3)", "630–1’050"],
      ["Zwischenübernachtung Kuala Besut (1)", "140–220"],
      ["4. Perhentian Islands (3)", "760–1’290"],
      ["5. Penang (3)", "630–1’000"],
      ["Zwischenübernachtung Hat Yai (1)", "140–270"],
      ["6. Khanom (2)", "440–740"],
      ["7. Koh Samui (4)", "1’150–1’830"],
      ["8. Koh Tao (5)", "1’150–1’850"],
      ["9. Hua Hin / Khao Sam Roi Yot (2)", "490–770"],
      ["10. Bangkok (2)", "560–950"]
    ],
    hinweise: [
      "<strong>Preise für die Kids:</strong> Der Sohn (12) zahlt bei Eintritten oft noch den Kinderpreis (teils nur bis 11), die Tochter (14) meist den Vollpreis.",
      "<strong>Sparhebel:</strong> Hawker Centres und lokale Restaurants statt Hotelessen, Familienzimmer statt zwei Zimmer, Flüge früh buchen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug- und Hotelpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ]
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Reisetempo",
      "Pro Tag maximal ein grösserer Transfer, lange Fahrten morgens, Nachmittage zur Erholung. Pro Station meist 3–6 Nächte, kürzere Aufenthalte nur als Zwischenhalt. Hitze, Jetlag und Regen einplanen. Bei Fähr- oder Zugausfällen Puffer nutzen."
    ],
    [
      "Beteiligung der Teenager",
      "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt. Ein Reisetagebuch oder Fotoprojekt macht die Reise für Teenager zum eigenen Projekt."
    ],
    [
      "Unterkunft",
      "Familienzimmer oder zwei Zimmer mit Verbindungstür, Pool, Klimaanlage und gute Bewertungen zu Sauberkeit. Ab Samui lieber Hotels mit Frühstück und Strandnähe."
    ],
    [
      "Dokumente",
      "Jede Person braucht einen eigenen Reisepass (mind. 6 Monate gültig). Kopien und Fotos aller Pässe, Impfausweise, Versicherungsnachweise mitführen."
    ],
    [
      "Gesundheit",
      "Impfstatus aller vier Reisenden beim Hausarzt/Tropeninstitut mind. 6–8 Wochen vorher klären. Dengue-Mückenschutz, Sonnencreme (hoher LSF), Hut, Rashguard (UV-Shirt). Reiseapotheke (Fieber, Durchfall, Elektrolyte, Reisekrankheit): Präparate und Dosierungen für die Teenager vorab mit dem Arzt besprechen."
    ],
    [
      "Wasser &amp; Essen",
      "Nur abgefülltes oder gefiltertes Wasser, Eiswürfel nur in seriösen Lokalen. Einfache Gerichte (Reis, Nudeln, Omelette, Obst) sind überall erhältlich."
    ],
    [
      "Wasser-Sicherheit",
      "Schwimmwesten auf Booten, rote Flaggen ernst nehmen, Teenager beim Schnorcheln nicht allein lassen, Strömungen beachten. Quallensaison und Wellengang vor Ort bei der Unterkunft erfragen."
    ],
    [
      "Transport",
      "Alle Strecken sind ohne Inlandflug per Bus, Zug und Fähre geplant. Sicherheitsgurte in Taxis und Minivans nutzen. Grab-Fahrten bevorzugen, Roller meiden. Fähren, Katamarane und Züge früh buchen und Seekrankheitsmittel bereithalten."
    ],
    [
      "Bildschirmzeit &amp; Beschäftigung",
      "Für lange Transfers Bücher, Downloads, Kartenspiele und Kopfhörer einpacken."
    ],
    [
      "Einreise (Schweizer Pass)",
      "Singapur und Malaysia sind für Touristen visafrei. Thailand hat seit 15. September 2026 die visafreie Aufenthaltsdauer auf 30 Tage verkürzt (vorher 60) und visafreie Einreisen über Landgrenzen auf zwei pro Kalenderjahr begrenzt. Auf dieser Route seid ihr ca. 16 Tage in Thailand und reist einmal über Land ein; ob die Schweiz auf der Liste der visabefreiten Länder steht, beim Thai-Konsulat oder EDA prüfen. Online-Anmeldungen: SG Arrival Card (Singapur), MDAC (Malaysia), TDAC (Thailand). Reisepass mind. 6 Monate gültig."
    ],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung für die ganze Familie, inkl. Schnorcheln und Wassersport."
    ],
    [
      "Notfall",
      "Singapur 999/995, Malaysia 999, Thailand 191/1669 (Touristenpolizei 1155). Schweizer Vertretungen notieren; EDA-Reiseplattform nutzen."
    ],
    [
      "Geld &amp; Technik",
      "Währungen SGD, MYR, THB; Kreditkarte ohne Fremdwährungsgebühr. eSIM für die Region, Grab, 12go.asia, Google Maps offline, Powerbank im Handgepäck."
    ],
    [
      "Wetter im Juni/Juli",
      "Heiss und feucht, Regenschauer. Penang und Bangkok haben Regenzeit; die Ostküste Malaysias (Tioman, Perhentian) und der Golf von Thailand (Samui, Tao) sind im Juni und Juli meist ruhiger."
    ]
  ]
};
