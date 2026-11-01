// Reise 1: Singapur – Bangkok (über Malaysia und Thailand)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.asien = {
  titel: "Von Singapur nach Bangkok",
  menu: "Malaysia / Thailand",
  untertitel: "Fünf Wochen über Land und Wasser: Singapur, die Insel Tioman, Kuala Lumpur und Langkawi, dann mit der Fähre nach Thailand, an den Golf mit Khanom, Koh Samui und Koh Tao und nach Bangkok.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    datei: "Nang Yuan Island, Koh Tao (48109157601).jpg",
    suche: "Koh Nang Yuan|Nang Yuan Island Koh Tao",
    stichwort: "nang yuan|nangyuan",
    alt: "Koh Nang Yuan bei Koh Tao, Thailand"
  },
  planIntro: "Abflug ab Zürich am Sa, 19.06.2027 am Abend, Rückflug ab Bangkok am Do, 22.07.2027 um die Mittagszeit. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19.–20. Juni",
    name: "Flug Zürich–Singapur",
    info: "Direktflug ca. 12–13 Std., Ankunft in Singapur am So, 20.06.2027"
  },
  plan: [
    {
      datum: "20.–23. Juni",
      name: "1. Singapur",
      naechte: 3,
      info: "Flug ab Zürich (Sa, ca. 22.40 Uhr), Ankunft am späten Nachmittag"
    },
    {
      datum: "23.–27. Juni",
      name: "2. Pulau Tioman (Pahang)",
      naechte: 4,
      info: "Bus nach Mersing (ca. 3,5–4 Std.), Fähre (ca. 1,5–2 Std.)"
    },
    {datum: "27.–28. Juni", name: "Zwischenübernachtung Mersing", naechte: 1, info: "Fähre ab Tioman (ca. 1,5–2 Std.)"},
    {
      datum: "28. Juni–1. Juli",
      name: "3. Kuala Lumpur",
      naechte: 3,
      info: "Taxi nach Kluang (ca. 1,5 Std.), ETS-Zug (ca. 3,5 Std.)"
    },
    {
      datum: "1.–4. Juli",
      name: "4. Langkawi",
      naechte: 3,
      info: "ETS-Zug nach Arau (ca. 4,5–5 Std.), Taxi, Fähre ab Kuala Perlis (ca. 1,25 Std.); insgesamt ca. 7–8 Std."
    },
    {
      datum: "4.–5. Juli",
      name: "Zwischenübernachtung Songkhla (Thailand)",
      naechte: 1,
      info: "Fähre nach Satun (ca. 1,25 Std.), Minivan oder Taxi (ca. 2,5–3 Std.); insgesamt ca. 5–6 Std."
    },
    {
      datum: "5.–8. Juli",
      name: "5. Khanom",
      naechte: 3,
      info: "Zug Hat Yai–Nakhon Si Thammarat (ca. 2,75–3 Std.), Taxi (ca. 1,5 Std.); insgesamt ca. 5,5–6,5 Std."
    },
    {datum: "8.–12. Juli", name: "6. Koh Samui", naechte: 4, info: "Minivan zum Donsak Pier, Autofähre (ca. 2,5 Std.)"},
    {datum: "12.–17. Juli", name: "7. Koh Tao", naechte: 5, info: "Katamaran ab Samui (ca. 1,5–2 Std.)"},
    {
      datum: "17.–19. Juli",
      name: "8. Hua Hin / Khao Sam Roi Yot",
      naechte: 2,
      info: "Katamaran nach Chumphon (ca. 1,5–2 Std.), Zug nach Hua Hin (ca. 3,5–4 Std.); insgesamt ca. 7–8 Std."
    },
    {datum: "19.–22. Juli", name: "9. Bangkok", naechte: 3, info: "Zug (ca. 3,5–4 Std.); Rückflug 22. Juli"}
  ],
  rueckflug: {
    datum: "22. Juli",
    name: "Flug Bangkok–Zürich",
    info: "Rückflug um die Mittagszeit, Direktflug ca. 11,5–12 Std., Ankunft in Zürich am Abend"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte, 9 Stationen und zwei Zwischenübernachtungen (Mersing, Songkhla). Nur Hin- und Rückflug; wo möglich mit dem Zug (Kluang–Kuala Lumpur–Arau, Hat Yai–Nakhon Si Thammarat, Chumphon–Hua Hin–Bangkok), sonst mit Bus, Fähre und privatem Transfer. Die längsten Reisetage sind Kuala Lumpur–Langkawi (ca. 7–8 Std., vor allem Zug) und Koh Tao–Hua Hin (ca. 7–8 Std.); weitere längere Tage: Singapur–Tioman, Mersing–Kuala Lumpur, Langkawi–Songkhla und Songkhla–Khanom (je ca. 5–6,5 Std.). Zusammen sind es zwischen Singapur und Bangkok ca. 40–47 Stunden reine Reisezeit; mit Wartezeiten auf Fähren und Züge, Grenzübertritt und Transfers zur Unterkunft realistisch ca. 47–56 Stunden."
    ],
    [
      "Vorab buchen",
      "Bus nach Mersing und Fähre nach Tioman, ETS-Züge Kluang–Kuala Lumpur und Kuala Lumpur–Arau (KTMB), Fähren Kuala Perlis–Langkawi und Langkawi–Satun, Unterkunft auf Tioman, Langkawi, Koh Samui und Koh Tao, Züge Hat Yai–Nakhon Si Thammarat und Chumphon–Hua Hin–Bangkok (SRT), Petronas-Skybridge, Katamarane Samui–Tao–Chumphon. Lange Reisetage früh am Morgen starten."
    ],
    [
      "Optional",
      "Taman Negara (Regenwald mit Hängebrücken und Nachtwanderung; 2 Nächte zwischen Mersing und Kuala Lumpur), Perhentian Islands oder Redang (klarstes Wasser Malaysias, aber mit zwei langen Reisetagen), Malakka (Altstadt, UNESCO; statt der Nacht in Mersing), Koh Phangan (zwischen Samui und Tao), Kanchanaburi (ab Bangkok)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Direktflug Zürich–Singapur ca. 12–13 Std. (Zeitverschiebung +6 Std.). Abflug am Sa, 19.06.2027 um ca. 22.40 Uhr, Ankunft am So, 20.06.2027 am späten Nachmittag. Rückflug: Direktflug Bangkok–Zürich ca. 11,5–12 Std. (Zeitverschiebung −5 Std.) am Do, 22.07.2027 um die Mittagszeit (Ankunft in Zürich am Abend). Mit Umstieg dauert die Reise meist 15–18 Std. Direktflüge und Flugzeiten bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel.",
    breit: false,
    legende: ["bus", "car", "train", "ferry"],
    karten: [{datei: "karten/asien.svg"}]
  },
  abwechslungIntro: "Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen.",
  abwechslung: [
    [
      "Action und Freizeitparks",
      "Singapur (Sentosa, Universal, Wasserpark), Kuala Lumpur (Sunway Lagoon, Petronas-Skybridge), Langkawi (Seilbahn und Sky Bridge, Mangroventour), Pulau Tioman (Dschungel, Riffe), Hua Hin (Wasserpark), Bangkok (Safari World, SEA LIFE)."
    ],
    [
      "Kultur und Geschichte",
      "Kuala Lumpur (Batu Caves, Merdeka Square), Altstadt von Songkhla (ein Abend), Khao Sam Roi Yot (Höhle), Bangkok (Grand Palace, Wat Pho), Ayutthaya (Tempelruinen)."
    ],
    [
      "Natur und Tiere",
      "Mandai Wildlife Reserve, Dschungel und Riffe auf Tioman, Mangroven mit Seeadlern und Regenwald auf Langkawi, Batu Caves, Delfine in Khanom, Ang Thong Marine Park, Schnorcheln auf Samui und vor allem Koh Tao (Koh Nang Yuan, Shark Bay)."
    ],
    [
      "Strand und Erholung",
      "Tioman (4 Nächte), Khanom (3), Koh Samui (4), Koh Tao (5), Hua Hin. Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen."
    ],
    ["Mitmachen", "Muay-Thai-Schnupperkurs, Kajak/SUP, Street-Food- und Tuk-Tuk-Touren."]
  ],
  stationenIntro: "Neun Stationen von Singapur bis Bangkok: Tioman, nach einer Nacht in Mersing Kuala Lumpur, mit Zug und Fähre nach Langkawi, mit der Fähre nach Thailand und nach einer Nacht in Songkhla dem Golf von Thailand entlang nach Bangkok. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Singapur",
      ersatzsuche: "Singapore",
      land: "sg",
      region: "Singapur",
      datum: "20.–23. Juni",
      naechte: "3 Nächte",
      anreise: "Direktflug Zürich–Singapur (ca. 12–13 Std.), MRT in die Stadt (ca. 30–40 Min.). Vor Ort MRT und Grab.",
      text: "Idealer Einstieg mit Teenagern: sicher, sauber, gut ausgeschildert, mit vielen Attraktionen für 12- und 14-Jährige. Die ersten Tage dienen auch zum Ankommen und zum Überwinden des Jetlags.",
      teens: "Sentosa-Tag (★): Universal Studios Singapore, Adventure Cove Waterpark, Skyline Luge, Strand und abends die Show «Wings of Time». Dazu Singapore Oceanarium (früher S.E.A. Aquarium), Mandai Wildlife Reserve (Zoo, River Wonders, Night Safari), Science Centre, ArtScience Museum. Tickets online, bei einigen Bahnen gelten Grössenbeschränkungen.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, Ankunft am Sonntagnachmittag oder -abend, danach zwei volle Tage. Pro Tag nur eine Hauptattraktion plus Pause im Hotel (Hitze und Jetlag).",
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
      datum: "23.–27. Juni",
      naechte: "4 Nächte",
      anreise: "Fernbus von Singapur nach Mersing (ca. 3,5–4 Std., je nach Anbieter Halt direkt am Hafen Mersing Jetty oder am Busbahnhof; Grenzkontrolle einplanen), dann Fähre nach Tioman (ca. 1,5–2 Std.). Früh am Morgen starten, damit ihr eine Nachmittagsfähre erreicht. Bus und Fähre vorab buchen.",
      text: "Grüne Dschungelinsel vor der Ostküste Malaysias mit Korallenriffen, Wasserfällen und kleinen Dörfern ohne Autoverkehr. Die beste Reisezeit ist Mai bis September, also genau euer Zeitraum. Ein ruhiger Einstieg nach Singapur mit viel Natur.",
      teens: "Schnorcheltour zu den vorgelagerten Inseln (Pulau Tulai, Chebeh, Renggis), Dschungel-Wanderung quer über die Insel (Tekek–Juara, ca. 2–3 Std.), Wasserfälle, Kajak und Strandtage.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: eine Schnorcheltour zu den vorgelagerten Inseln, eine Dschungel-Wanderung zum Wasserfall, Kajak und Strandtage. Basis zum Beispiel an der ruhigen Westseite (Salang, Air Batang) oder im östlichen Juara; ein Wechsel der Inselseite kostet Zeit (Boot oder Wanderweg).",
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
      datum: "28. Juni–1. Juli",
      naechte: "3 Nächte",
      anreise: "Fähre von Tioman nach Mersing (ca. 1,5–2 Std.), Übernachtung in Mersing (kleiner Fischerort mit Hafen, Seafood am Abend). Am Morgen Taxi oder Transfer nach Kluang (ca. 1,5 Std.), dann ETS-Zug auf der neuen elektrischen Strecke nach KL Sentral (ca. 3,5 Std.; nur einige Züge pro Tag, früh bei KTMB reservieren); insgesamt ca. 5,5–6 Std. Alternative: Fernbus ab Mersing direkt nach Kuala Lumpur (ca. 5–6 Std.).",
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
      ],
      zwischenstopp: {text: "Zwischenstopp in Mersing", datum: "27.–28. Juni"}
    },
    {
      nr: 4,
      name: "Langkawi",
      land: "my",
      region: "Malaysia",
      datum: "1.–4. Juli",
      naechte: "3 Nächte",
      anreise: "ETS-Zug ab KL Sentral nach Arau (ca. 4,5–5 Std.; früh bei KTMB reservieren), Taxi zum Fährhafen Kuala Perlis (ca. 20 Min.), Fähre nach Kuah auf Langkawi (ca. 1,25 Std., mehrmals täglich; bei Monsun Fahrplan prüfen); insgesamt ca. 7–8 Std.",
      text: "Inselgruppe an der Grenze zu Thailand mit regenwaldbedeckten Bergen, Mangroven, Wasserfällen und Stränden; UNESCO-Geopark und zollfrei. Im Juli ist Monsun an der Westküste: eher Seilbahn, Mangroven und Wasserfälle als Badeferien.",
      teens: "Seilbahn SkyCab auf den Gunung Mat Cincang mit der Hängebrücke Sky Bridge, Bootstour durch die Mangroven im Kilim Geoforest Park (Seeadler, Fledermaushöhle), Wasserfall Seven Wells, Aquarium Underwater World, Sonnenuntergang am Strand Pantai Cenang.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Seilbahn und Seven Wells, ein Tag Mangroventour, ein Strand- oder Reservetag für Regen (Aquarium, Einkaufen). Programm je nach Wetter tauschen.",
        "<strong>Wetter:</strong> Im Juli Südwest-Monsun, je nach Quelle ca. 140–250 mm Regen an 13–23 Tagen, meist als Schauer; das Meer ist oft unruhig und trüb, Inselhopping und Bootstouren können ausfallen. Die Seilbahn schliesst bei Gewitter und starkem Wind.",
        "<strong>Unterwegs:</strong> Grab oder Mietwagen mit Fahrer; Unterkunft am besten bei Pantai Cenang. Die Insel ist zollfrei (Schokolade, Sportartikel günstig)."
      ],
      ausserdem: "Pulau Dayang Bunting mit Süsswassersee (Inselhopping, nur bei ruhiger See), Wasserfall Telaga Tujuh, Durian-Perangin-Wasserfall, Reisfeld-Museum Laman Padi, Nachtmärkte (je nach Wochentag an anderen Orten).",
      bilder: [
        {titel: "Sky Bridge", suche: "Langkawi Sky Bridge", stichwort: "sky bridge|skybridge"},
        {titel: "SkyCab", suche: "Langkawi cable car SkyCab", stichwort: "cable|skycab"},
        {titel: "Kilim Geoforest Park", suche: "Kilim Geoforest Park mangrove", stichwort: "kilim"},
        {titel: "Pantai Cenang", suche: "Pantai Cenang Langkawi", stichwort: "cenang"},
        {titel: "Seven Wells", suche: "Telaga Tujuh Seven Wells waterfall Langkawi", stichwort: "telaga|seven wells"},
        {titel: "Dayang Bunting", suche: "Pulau Dayang Bunting lake", stichwort: "dayang bunting"}
      ]
    },
    {
      nr: 5,
      name: "Khanom",
      land: "th",
      region: "Thailand",
      datum: "5.–8. Juli",
      naechte: "3 Nächte",
      anreise: "Am Vortag Fähre von Kuah (Langkawi) nach Satun (Hafen Tammalang, ca. 1,25 Std.; nur ein- bis zweimal pro Tag, bei Monsun Ausfälle möglich; Uhr −1 Std.), Einreise nach Thailand im Hafen, dann Minivan oder Taxi über Hat Yai nach Songkhla (ca. 2,5–3 Std.); insgesamt ca. 5–6 Std. Übernachtung in Songkhla (Altstadt und Strand Samila am Abend). Satun und Songkhla-Stadt liegen ausserhalb der Gebiete, von denen das EDA abrät (Narathiwat, Yala, Pattani und die südlichen Distrikte von Songkhla). Am Morgen taxi oder Grab von Songkhla zum Bahnhof Hat Yai (ca. 45 Min.), Zug nach Nakhon Si Thammarat (ca. 2,75–3 Std.; nur wenige Züge pro Tag, Fahrplan bei der SRT prüfen), dann Taxi oder Minivan nach Khanom (ca. 1,5 Std.); mit Wartezeit insgesamt ca. 5,5–6,5 Std. Schneller ist ein privater Transfer ab Songkhla (ca. 3,5 Std.).",
      text: "Ruhiger Küstenort am Golf von Thailand mit einsamen Stränden, Wasserfällen und rosa Delfinen. Ein entspannter Halt am Meer vor den Inseln.",
      teens: "Delfin-Bootstour ab Pak Nam (Sichtung nicht garantiert), Hin Lat Wasserfälle, Strandtage, Schnorcheln und Kajak.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: Ankunft am Nachmittag, am nächsten Tag Delfin-Tour am Morgen und Wasserfälle, ein Strand- und Pooltag. Unterkunft mit Pool vorab buchen, das Angebot ist klein.",
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
      ],
      zwischenstopp: {text: "Zwischenstopp in Songkhla", datum: "4.–5. Juli"}
    },
    {
      nr: 6,
      name: "Koh Samui",
      land: "th",
      region: "Thailand",
      datum: "8.–12. Juli",
      naechte: "4 Nächte",
      anreise: "Minivan von Khanom zum Donsak Pier (ca. 1 Std.), dann Autofähre (Seatran/Raja) direkt nach Samui (ca. 1,5 Std.).",
      text: "Thailands grosse Familieninsel mit guter Infrastruktur, Stränden und Ausflügen. Im Juli sind die Wetterbedingungen im Golf meist stabil.",
      teens: "Tagesausflug in den Ang Thong Marine Park (Kajak, Schnorcheln, Wanderung zum Aussichtspunkt), Strandtage in Lamai/Chaweng, Na Muang Wasserfälle.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte, mit einem Tagesausflug in den Ang Thong Marine Park; Unterkunft mit Pool und Familienzimmer. Bophut/Mae Nam sind ruhiger als Chaweng.",
        "<strong>Sicherheit:</strong> Rote Flaggen am Strand beachten, Schwimmwesten bei Bootsausflügen, kein Roller mit den Teenagern.",
        "<strong>Mitmachen:</strong> Kajak/SUP, Dschungelpark mit Seilrutschen im Inselinneren."
      ],
      ausserdem: "Wat Plai Laem, Fisherman's Village (Walking Street nur freitags, im Reiseplan am Ankunftstag, Fr, 9. Juli möglich), Hin Ta Hin Yai, Tierschutzprojekte mit ethischer Ausrichtung statt Elefantenreiten.",
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
      nr: 7,
      name: "Koh Tao",
      land: "th",
      region: "Thailand",
      datum: "12.–17. Juli",
      naechte: "5 Nächte",
      anreise: "Highspeed-Katamaran der Lomprayah von Koh Samui über Koh Phangan nach Koh Tao (ca. 1,5–2 Std.). Online vorab buchen, Wellengang kann stärker sein.",
      text: "Das Schnorchelparadies im Golf von Thailand mit klarem, ruhigem Wasser und der berühmten Sandbank von Koh Nang Yuan.",
      teens: "Schnorcheln (Shark Bay, Japanese Gardens, Mango Bay), Koh Nang Yuan (Aussichtspunkt, Strand), Bootsausflug rund um die Insel.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: zwei Schnorcheltouren (rund um die Insel und Koh Nang Yuan), Schnorcheln vom Strand (Shark Bay, Aow Leuk), Kajak und Strandtage. Schnorchelwesten für alle, Teenager beim Schnorcheln nicht allein lassen.",
        "<strong>Praktisch:</strong> Eintritt für Nang Yuan, früh anreisen. Seekrankheitstabletten für Bootsfahrten bereithalten.",
        "<strong>Mitmachen:</strong> Kajak/SUP, Sonnenuntergangs-Bootstour, Wanderung zu den Aussichtspunkten."
      ],
      ausserdem: "John-Suwan-Aussichtspunkt, Freedom Beach, Sairee Beach (Sonnenuntergang), Wanderungen, Haistation-Besuch (Ethik beachten).",
      bilder: [
        {titel: "Riffhai", suche: "blacktip reef shark|Carcharhinus melanopterus", stichwort: "blacktip|melanopterus"},
        {titel: "Sairee Beach", suche: "Sairee Beach Ko Tao|Sairee", stichwort: "sairee"},
        {titel: "Aussichtspunkt", suche: "John-Suwan Viewpoint Koh Tao|Koh Tao viewpoint", stichwort: "suwan|viewpoint"},
        {titel: "Tanote Bay", suche: "Tanote Bay Ko Tao|Tanote Bay", stichwort: "tanote"},
        {titel: "Shark Bay", suche: "Shark Bay Ko Tao|Thian Og bay", stichwort: "shark bay|thian og"},
        {titel: "Mango Bay", suche: "Mango Bay Ko Tao|Ao Mamuang", stichwort: "mango bay|mamuang"}
      ]
    },
    {
      nr: 8,
      name: "Hua Hin / Khao Sam Roi Yot",
      land: "th",
      region: "Thailand",
      datum: "17.–19. Juli",
      naechte: "2 Nächte",
      anreise: "Katamaran Lomprayah von Koh Tao nach Chumphon (ca. 1,5–2 Std.), Taxi zum Bahnhof (ca. 15 Min.), dann Zug nach Hua Hin (ca. 3,5–4 Std.; nur einige Züge pro Tag, auf den Katamaran abstimmen und vorab bei der SRT reservieren). Insgesamt ca. 7–8 Std.; Verpflegung mitnehmen. Alternative: Lomprayah-Bus im Kombiticket (Abfahrt Koh Tao 10:15, Ankunft Hua Hin ca. 17 Uhr).",
      text: "Königliche Küstenstadt mit breitem Strand, Wasserpark und Nationalpark. Ein entspannter Zwischenhalt vor der Grossstadt.",
      teens: "Vana Nava Water Jungle (Wasserpark), Strandtage, Reiten am Strand, Santorini Park (Fotospots), Wanderung zur Phraya-Nakhon-Höhle (ca. 30–45 Min. steil).",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Khao Sam Roi Yot mit Phraya-Nakhon-Höhle, dazu Strand und Märkte am Abend. Der Wasserpark ist optional.",
        "<strong>Märkte:</strong> Der Cicada Market (Fr–So abends) ist im Reiseplan am Sa, 17. Juli möglich; der Nachtmarkt im Zentrum ist täglich offen.",
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
      nr: 9,
      name: "Bangkok",
      land: "th",
      region: "Thailand",
      datum: "19.–22. Juli",
      naechte: "3 Nächte, Rückflug 22. Juli",
      anreise: "Zug von Hua Hin nach Bangkok (ca. 3,5–4 Std.), Ankunft je nach Zug am Bahnhof Krung Thep Aphiwat oder Hua Lamphong; weiter mit MRT oder Taxi. Minivans sind etwas schneller (ca. 3 Std.).",
      text: "Vielfältiges Finale: Tempel, Flussfahrten, Aquarium und Nachtmärkte. Zwei Nächte reichen für die wichtigsten Höhepunkte der Stadt.",
      teens: "SEA LIFE Bangkok Ocean World (Siam Paragon), Safari World (nur bei genug Zeit), Khlong-Bootsfahrt, Tempelbesichtigung in Ayutthaya.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Ein voller Tag für Grand Palace, Wat Pho und Wat Arun, ein Tag Ayutthaya (Tempelruinen, ca. 1,5 Std. mit Zug oder Minivan). Der Rückflug geht um die Mittagszeit: am Abreisetag früh zum Flughafen.",
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
  abschluss: "Rückflug ab Bangkok nach Zürich am Do, 22.07.2027 um die Mittagszeit (Direktflug ca. 11,5–12 Std.), Ankunft in Zürich am Abend und mit der Bahn nach Brig-Glis. Bis zum Ferienende bleiben zwei Tage gegen den Jetlag.",
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 32,
    total: "18’000",
    spanne: "14’500–22’500",
    proTag: "ca. 560 CHF pro Tag, ca. 4’500 pro Person",
    posten: [
      [
        "Flüge Zürich–Singapur und Bangkok–Zürich",
        "4’400–5’600",
        "5’000",
        "ca. 1’100–1’400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Fernverkehr (Bus, Zug, Fähre, Minivan)",
        "800–1’350",
        "1’000",
        "Bus Singapur–Mersing, Fähren Mersing–Tioman, Taxi nach Kluang und ETS-Züge nach Kuala Lumpur und Arau, Fähren nach Langkawi und nach Satun, Minivan nach Songkhla, Zug Hat Yai–Nakhon Si Thammarat und Taxi nach Khanom, Fähren Samui–Tao–Chumphon, Zug nach Hua Hin und Bangkok"
      ],
      ["Lokale Transfers", "400–800", "550", "Grab, MRT/Skytrain, Wassertaxis, Songthaew"],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)",
        "3’100–4’900",
        "3’900",
        "ca. 50–140 CHF pro Nacht, Singapur ca. 250–300; auf den Inseln im Juli gefragt, früh buchen"
      ],
      [
        "Verpflegung (Hawker, Restaurants, Getränke)",
        "2’400–3’800",
        "3’000",
        "ca. 75–120 CHF pro Tag für 4 Personen, Singapur am teuersten"
      ],
      [
        "Aktivitäten und Eintritte",
        "2’100–3’300",
        "2’600",
        "Universal und Sentosa, Mandai, Schnorcheltouren, Marine-Park-Gebühren, Petronas-Skybridge, Sunway Lagoon, Seilbahn SkyCab und Mangroventour auf Langkawi, Ang Thong, Wasserpark Hua Hin, Safari World usw."
      ],
      [
        "Versicherung, eSIM, Medikamente, Impfungen",
        "600–1’200",
        "900",
        "Reisekranken- und Annullationsschutz, Reiseapotheke"
      ],
      ["Reserve (ca. 5 %)", "700–1’550", "1’050", "Souvenirs, Wäsche, Unvorhergesehenes"],
      [
        "<strong>Total</strong>",
        "<strong>14’500–22’500</strong>",
        "<strong>ca. 18’000</strong>",
        "ca. 560 CHF pro Tag, ca. 4’500 pro Person"
      ]
    ],
    stationen: [
      ["1. Singapur (3)", "1’320–1’950"],
      ["2. Pulau Tioman (4)", "750–1’270"],
      ["Zwischenübernachtung Mersing (1)", "100–180"],
      ["3. Kuala Lumpur (3)", "550–910"],
      ["4. Langkawi (3)", "650–1’050"],
      ["Zwischenübernachtung Songkhla (1)", "170–280"],
      ["5. Khanom (3)", "570–960"],
      ["6. Koh Samui (4)", "1’000–1’590"],
      ["7. Koh Tao (5)", "1’000–1’620"],
      ["8. Hua Hin / Khao Sam Roi Yot (2)", "430–670"],
      ["9. Bangkok (3)", "730–1’220"]
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
      "Pro Tag maximal ein grösserer Transfer, lange Fahrten morgens, Nachmittage zur Erholung. Pro Station meist 2–4 Nächte. Hitze, Jetlag und Regen einplanen. Bei Fähr- oder Zugausfällen Puffer nutzen."
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
      "Alle Strecken sind ohne Inlandflug geplant, wo möglich mit dem Zug (KTMB in Malaysia, SRT in Thailand; Züge früh reservieren, wenige Verbindungen pro Tag), sonst mit Bus, Fähre und privatem Transfer. Sicherheitsgurte in Taxis und Minivans nutzen. Grab-Fahrten bevorzugen, Roller meiden. Fähren und Katamarane früh buchen und Seekrankheitsmittel bereithalten."
    ],
    [
      "Bildschirmzeit &amp; Beschäftigung",
      "Für lange Transfers Bücher, Downloads, Kartenspiele und Kopfhörer einpacken."
    ],
    [
      "Einreise (Schweizer Pass)",
      "Singapur und Malaysia sind für Touristen visafrei. Thailand hat seit 15. September 2026 die visafreie Aufenthaltsdauer auf 30 Tage verkürzt (vorher 60) und visafreie Einreisen über Landgrenzen auf zwei pro Kalenderjahr begrenzt. Auf dieser Route seid ihr ca. 18 Tage in Thailand und reist einmal über Land bzw. See ein (im Hafen Tammalang in Satun); ob die Schweiz auf der Liste der visabefreiten Länder steht, beim Thai-Konsulat oder EDA prüfen. Online-Anmeldungen: SG Arrival Card (Singapur), MDAC (Malaysia), TDAC (Thailand). Reisepass mind. 6 Monate gültig."
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
      "Heiss und feucht, Regenschauer. Kuala Lumpur, Langkawi (Südwest-Monsun) und Bangkok haben im Juli häufiger Regen und Gewitter; die Ostküste Malaysias (Tioman) und der Golf von Thailand (Samui, Tao) sind im Juni und Juli meist ruhiger."
    ]
  ]
};
