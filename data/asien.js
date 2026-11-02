// Reise 1: Singapur – Bangkok (über Malaysia und Thailand)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.asien = {
  titel: "Von Singapur nach Bangkok",
  menu: "Malaysia / Thailand",
  untertitel: "Fünf Wochen über Land und Wasser: Singapur, die kleine Insel Pulau Tengah mit dem Öko-Resort Batu Batu, Kuala Lumpur und die kühlen Cameron Highlands, dann über Ipoh mit dem Zug nach Songkhla, dem Golf von Thailand entlang nach Khanom, Koh Samui und Koh Tao und nach Bangkok.",
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
      datum: "23.–28. Juni",
      name: "2. Pulau Tengah (Batu Batu)",
      naechte: 5,
      info: "Fernbus oder Transfer nach Mersing (ca. 3–4 Std.), Speedboot des Resorts (ca. 20–30 Min.)"
    },
    {
      datum: "28.–30. Juni",
      name: "3. Kuala Lumpur",
      naechte: 2,
      info: "Speedboot nach Mersing, Taxi nach Kluang (ca. 1,5 Std.), ETS-Zug (ca. 3,5 Std.); insgesamt ca. 6–7 Std."
    },
    {
      datum: "30. Juni–3. Juli",
      name: "4. Cameron Highlands",
      naechte: 3,
      info: "Privater Transfer (ca. 3,5 Std.) oder Fernbus (ca. 4 Std.)"
    },
    {datum: "3.–4. Juli", name: "Zwischenübernachtung Ipoh", naechte: 1, info: "Privater Transfer (ca. 1,5–2 Std.)"},
    {
      datum: "4.–6. Juli",
      name: "5. Songkhla (Thailand)",
      naechte: 2,
      info: "ETS-Zug ab Ipoh nach Padang Besar (ca. 3–3,5 Std.), Grenze, Zug nach Hat Yai (ca. 45 Min.), Taxi (ca. 45 Min.); insgesamt ca. 5,5–6,5 Std."
    },
    {
      datum: "6.–8. Juli",
      name: "6. Khanom",
      naechte: 2,
      info: "Privater Transfer (ca. 3,5 Std.) oder Zug ab Hat Yai mit Taxi (ca. 5,5–6,5 Std.)"
    },
    {datum: "8.–11. Juli", name: "7. Koh Samui", naechte: 3, info: "Minivan zum Donsak Pier, Autofähre (ca. 2,5 Std.)"},
    {datum: "11.–16. Juli", name: "8. Koh Tao", naechte: 5, info: "Katamaran ab Samui (ca. 1,5–2 Std.)"},
    {
      datum: "16.–18. Juli",
      name: "9. Hua Hin / Khao Sam Roi Yot",
      naechte: 2,
      info: "Katamaran nach Chumphon (ca. 1,5–2 Std.), Zug nach Hua Hin (ca. 3,5–4 Std.); insgesamt ca. 7–8 Std."
    },
    {datum: "18.–22. Juli", name: "10. Bangkok", naechte: 4, info: "Zug (ca. 3,5–4 Std.); Rückflug 22. Juli"}
  ],
  rueckflug: {
    datum: "22. Juli",
    name: "Flug Bangkok–Zürich",
    info: "Rückflug um die Mittagszeit, Direktflug ca. 11,5–12 Std., Ankunft in Zürich am Abend"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte, 10 Stationen und eine Zwischenübernachtung (Ipoh). Nur Hin- und Rückflug; wo möglich mit dem Zug (Kluang–Kuala Lumpur, Ipoh–Padang Besar–Hat Yai, Chumphon–Hua Hin–Bangkok), sonst mit Bus, Boot, Fähre und privatem Transfer. Die längsten Reisetage sind Koh Tao–Hua Hin (ca. 7–8 Std.), Pulau Tengah–Kuala Lumpur (ca. 6–7 Std.) und Ipoh–Songkhla (ca. 5,5–6,5 Std., fast nur Zug, mit Grenze im Bahnhof); dazu Singapur–Pulau Tengah (ca. 4,5–5,5 Std.) und Kuala Lumpur–Cameron Highlands (ca. 3,5–4 Std.). Zusammen sind es zwischen Singapur und Bangkok ca. 34–41 Stunden reine Reisezeit; mit Wartezeiten auf Boote und Züge, Grenzübertritt und Transfers zur Unterkunft realistisch ca. 41–49 Stunden."
    ],
    [
      "Vorab buchen",
      "Batu Batu auf Pulau Tengah (nur 22 Villen; Familienvilla, Essen und Speedboot ab Mersing anfragen), Bus oder Transfer Singapur–Mersing, ETS-Züge Kluang–Kuala Lumpur und Ipoh–Padang Besar (KTMB), Transfers nach und ab den Cameron Highlands, Halbtagestour mit Mossy Forest, Transfer Songkhla–Khanom, Unterkunft in Khanom, auf Koh Samui und Koh Tao, Züge Chumphon–Hua Hin–Bangkok (SRT), Petronas-Skybridge, Katamarane Samui–Tao–Chumphon."
    ],
    [
      "Optional",
      "Tioman (grössere Dschungelinsel, mit öffentlicher Fähre ab Mersing), Pulau Besar (einfachere, günstigere Resorts mit Paket), Langkawi (im Juli Monsun an der Westküste), Taman Negara (Regenwald, 2 Nächte zwischen Mersing und Kuala Lumpur), Malakka, Belum-Regenwald (ab Ipoh, ca. 2,5 Std.), Koh Phangan (zwischen Samui und Tao), Kanchanaburi (ab Bangkok)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Direktflug Zürich–Singapur ca. 12–13 Std. (Zeitverschiebung +6 Std.). Abflug am Sa, 19.06.2027 um ca. 22.40 Uhr, Ankunft am So, 20.06.2027 am späten Nachmittag. Rückflug: Direktflug Bangkok–Zürich ca. 11,5–12 Std. (Zeitverschiebung −5 Std.) am Do, 22.07.2027 um die Mittagszeit (Ankunft in Zürich am Abend). Mit Umstieg dauert die Reise meist 15–18 Std. Direktflüge und Flugzeiten bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel.",
    breit: false,
    legende: ["bus", "train", "ferry"],
    karten: [{datei: "karten/asien.svg"}]
  },
  abwechslungIntro: "Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen.",
  abwechslung: [
    [
      "Action und Freizeitparks",
      "Singapur (Sentosa, Universal, Wasserpark), Kuala Lumpur (Sunway Lagoon, Petronas-Skybridge), Pulau Tengah (Kajak, Schnuppertauchen, Schildkröten), Khanom (Delfin-Tour), Hua Hin (Wasserpark), Bangkok (Safari World, SEA LIFE)."
    ],
    [
      "Kultur und Geschichte",
      "Kuala Lumpur (Batu Caves, Merdeka Square), Ipoh mit Höhlentempeln und Altstadt, Altstadt von Songkhla, Wat Phra Mahathat in Nakhon Si Thammarat (auf dem Weg nach Khanom), Khao Sam Roi Yot (Höhle), Bangkok (Grand Palace, Wat Pho), Ayutthaya (Tempelruinen)."
    ],
    [
      "Natur und Tiere",
      "Mandai Wildlife Reserve, Hausriff und Schildkröten auf Pulau Tengah, Teeplantagen, Nebelwald und geführte Dschungeltour (Rafflesia) in den Cameron Highlands, Batu Caves, Wasservogelpark Khu Khut bei Songkhla, rosa Delfine und Wasserfälle in Khanom, Ang Thong Marine Park, Schnorcheln auf Samui und vor allem Koh Tao (Koh Nang Yuan, Shark Bay)."
    ],
    [
      "Strand und Erholung",
      "Pulau Tengah (5 Nächte), Songkhla (2), Khanom (2), Koh Samui (3), Koh Tao (5), Hua Hin. Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen."
    ],
    ["Mitmachen", "Muay-Thai-Schnupperkurs, Kajak/SUP, Street-Food- und Tuk-Tuk-Touren."]
  ],
  stationenIntro: "Zehn Stationen von Singapur bis Bangkok: Pulau Tengah vor Mersing, Kuala Lumpur, die Cameron Highlands, nach einer Nacht in Ipoh mit dem Zug über die Grenze nach Songkhla und dem Golf von Thailand entlang nach Bangkok. Über jeder Station steht, wie ihr dorthin kommt.",
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
      name: "Pulau Tengah (Batu Batu)",
      ersatzsuche: "Pulau Tengah Johor",
      land: "my",
      region: "Malaysia",
      datum: "23.–28. Juni",
      naechte: "5 Nächte",
      anreise: "Am Morgen mit dem Fernbus (ca. 3,5–4 Std. mit Grenze) oder bequemer mit privatem Transfer (ca. 3–3,5 Std.) von Singapur nach Mersing, dann mit dem Speedboot des Resorts nach Pulau Tengah (ca. 20–30 Min.; Abfahrtszeit vom Resort, Transfer ab Singapur beim Resort anfragen). Insgesamt ca. 4,5–5,5 Std.",
      text: "Kleine Privatinsel im Marinepark vor Mersing mit nur einem Resort: Batu Batu, ein Öko-Resort mit 22 Villen am Strand und im Wald. Nach dem Langstreckenflug und Singapur fünf ruhige, bequeme Tage mit Hausriff vor der Villa, Schildkröten und Kajak; Boot, Villa und Essen aus einer Hand.",
      teens: "Schnorcheln am Hausriff direkt vom Strand (drei Bereiche, für Anfänger geeignet), mit Glück Meeresschildkröten, Schildkröten-Schutzprojekt mit Nestern am Strand (März bis Oktober), Kajak und Stand-up-Paddle, Waldpfade über die Insel, Schnuppertauchen bei Batu Batu Dive, Bootsausflug zu den Nachbarinseln.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte zum Ankommen nach Jetlag und Stadt: Strand- und Schnorcheltage am Hausriff, ein Bootsausflug zu den Nachbarinseln, Kajak, am Abend Schildkröten-Programm.",
        "<strong>Unterkunft:</strong> Batu Batu ist das einzige Resort der Insel (22 Villen, auch mit zwei Schlafzimmern); Familien willkommen. Preise ab ca. 200 GBP pro Villa und Nacht (i-escape, ohne Jahr), mit Familienvilla und Essen grob ca. 450–750 CHF pro Nacht für vier. Direkt beim Resort anfragen und für den Juli früh buchen.",
        "<strong>Riff und Schildkröten:</strong> Das Hausriff ist im flachen Teil teils ausgebleicht, im Norden mit grossen Korallen (ca. 4 m tief, eher für gute Schwimmer); Sicht je nach Tag mässig. Grüne Meeresschildkröten und Echte Karettschildkröten legen von März bis Oktober ihre Eier am Strand ab.",
        "<strong>Praktisch:</strong> Keine weiteren Restaurants oder Läden auf der Insel, medizinische Versorgung erst in Mersing. Mückenschutz für den Abend."
      ],
      ausserdem: "Pulau Besar und Pulau Rawa (Bootsausflug), Tauchgänge im Marinepark, Mersing mit Fischmarkt am Rückreisetag.",
      bilder: [
        {titel: "Batu Batu", suche: "Batu Batu resort Pulau Tengah", stichwort: "batu batu|tengah"},
        {titel: "Pulau Tengah", suche: "Pulau Tengah Johor", stichwort: "tengah"},
        {titel: "Strand", suche: "Pulau Tengah beach Mersing", stichwort: "tengah|beach"},
        {
          titel: "Meeresschildkröte",
          suche: "hawksbill turtle swimming|Eretmochelys imbricata",
          stichwort: "hawksbill|turtle"
        },
        {
          titel: "Korallenriff",
          suche: "Mersing coral reef snorkeling|Sultan Iskandar Marine Park",
          stichwort: "coral|reef|mersing"
        },
        {titel: "Mersing", suche: "Mersing jetty", stichwort: "mersing"}
      ]
    },
    {
      nr: 3,
      name: "Kuala Lumpur",
      land: "my",
      region: "Malaysia",
      datum: "28.–30. Juni",
      naechte: "2 Nächte",
      anreise: "Am Morgen mit dem Speedboot des Resorts zurück nach Mersing (ca. 20–30 Min.), Taxi oder Transfer nach Kluang (ca. 1,5 Std.), dann ETS-Zug auf der neuen elektrischen Strecke nach KL Sentral (ca. 3,5 Std.; nur einige Züge pro Tag, früh bei KTMB reservieren und auf das Boot abstimmen); insgesamt ca. 6–7 Std. Alternative: Fernbus ab Mersing direkt nach Kuala Lumpur (ca. 5–6 Std.).",
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
      name: "Cameron Highlands",
      land: "my",
      region: "Malaysia",
      datum: "30. Juni–3. Juli",
      naechte: "3 Nächte",
      anreise: "Mit privatem Transfer (ca. 3,5 Std.) oder Fernbus ab dem Busbahnhof Terminal Bersepadu Selatan (ca. 4 Std.) von Kuala Lumpur nach Tanah Rata in den Cameron Highlands. Die letzte Stunde führt über eine kurvige Bergstrasse: Mittel gegen Reiseübelkeit mitnehmen.",
      text: "Bergland auf rund 1’500 m mit grünen Teeplantagen, Nebelwald, Erdbeerfarmen und kleinen Orten im Kolonialstil. Mit ca. 18–25 °C am Tag und kühlen Nächten eine angenehme Pause von der Hitze, mitten im Regenwald des Landesinneren.",
      teens: "Teeplantage BOH Sungei Palas mit Aussicht über die Hänge, Holzstege durch den moosbewachsenen Nebelwald (Mossy Forest) am Gunung Brinchang, geführte Dschungeltour zur Riesenblume Rafflesia mit Besuch in einem Orang-Asli-Dorf (Blasrohr-Vorführung) oder geführte Bergwanderung, Erdbeeren selber pflücken, Schmetterlings- und Insektengarten, Teehaus mit Scones.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: Ankunft am Nachmittag, ein Tag Teeplantage und Mossy Forest (Halbtagestour im Landrover) mit Erdbeerfarm, ein Tag geführte Dschungeltour (Rafflesia und Orang-Asli-Dorf oder Bergwanderung, z.B. Gunung Jasar), am Abend Nachtmarkt in Brinchang (am Wochenende).",
        "<strong>Wetter:</strong> Am Tag ca. 18–25 °C, in der Nacht ca. 14–16 °C: Pullover und Regenjacke mitnehmen; im Juli meist am Nachmittag Schauer, am Morgen oft klar.",
        "<strong>Dschungel:</strong> Geführte Touren buchen Anbieter in Tanah Rata, grob ca. 100–200 MYR pro Person für einen halben Tag (Richtwert, aktuelle Preise vor Ort). Ob eine Rafflesia gerade blüht, ist Glückssache; die Führer wissen es meist einige Tage vorher. Viele der früher nummerierten Wanderwege sind zeitweise geschlossen oder schlecht markiert, es gab Unfälle mit verirrten Wanderern: nur mit Führer gehen. Gute Schuhe, Regenjacke und Blutegel-Socken mitnehmen."
      ],
      ausserdem: "Kellie's Castle (Ruine, auf dem Weg nach Ipoh), Lata-Iskandar-Wasserfall an der Bergstrasse, Kaktus- und Rosengärten, Time Tunnel Museum.",
      bilder: [
        {titel: "Teeplantage", suche: "Cameron Highlands tea plantation|BOH tea plantation", stichwort: "tea|cameron"},
        {titel: "Mossy Forest", suche: "Mossy Forest Cameron Highlands", stichwort: "mossy"},
        {titel: "Sungei Palas", suche: "Sungei Palas tea", stichwort: "palas|tea"},
        {titel: "Erdbeerfarm", suche: "Cameron Highlands strawberry farm", stichwort: "strawberr"},
        {titel: "Tanah Rata", suche: "Tanah Rata Cameron Highlands", stichwort: "tanah rata|cameron"},
        {titel: "Kek Lok Tong (Ipoh)", suche: "Kek Lok Tong Ipoh cave temple", stichwort: "kek lok tong|ipoh"}
      ],
      nr: 4
    },
    {
      nr: 5,
      name: "Songkhla",
      land: "th",
      region: "Thailand",
      datum: "4.–6. Juli",
      naechte: "2 Nächte",
      anreise: "Privater Transfer von den Cameron Highlands hinunter nach Ipoh (ca. 1,5–2 Std.), Übernachtung in Ipoh: Altstadt mit Wandmalereien und Kolonialbauten, buddhistische Höhlentempel in den Kalkfelsen (Kek Lok Tong, Sam Poh Tong) und am Abend das berühmte Essen (Ipoh White Coffee, Hühnchen mit Sojasprossen). Am Morgen ETS-Zug ab Ipoh nach Padang Besar (ca. 3–3,5 Std., früh bei KTMB reservieren), Aus- und Einreise im Bahnhof, Pendelzug nach Hat Yai (ca. 45 Min., nur wenige Züge pro Tag; sonst Taxi ca. 1 Std.), dann Taxi oder Grab nach Songkhla (ca. 45 Min.); insgesamt ca. 5,5–6,5 Std. Dieser Weg meidet die Grenzprovinzen Narathiwat, Yala und Pattani und die südlichen Distrikte von Songkhla, von deren Besuch abgeraten wird; Songkhla-Stadt und Hat Yai gehören nicht dazu.",
      text: "Ruhige Hafenstadt am Golf von Thailand zwischen Meer und Songkhla-See, kaum Touristen aus dem Westen: eine Altstadt mit chinesisch-portugiesischen Häusern und Wandmalereien, der Stadtstrand Samila und die Insel Koh Yo im See. Zwei Nächte zum Ausruhen nach drei Reisetagen, am ruhigeren Golf statt im Monsun der Westküste.",
      teens: "Wandmalereien und Cafés in der Altstadt (Nakhon Nok und Nang Ngam Road), Strand Samila mit der Meerjungfrau-Statue, Aussicht vom Hügel Khao Tang Kuan (Standseilbahn), Fischerboote und Seafood auf Koh Yo, Abendmarkt.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: am Ankunftsabend an den Strand Samila, am nächsten Tag Altstadt und Standseilbahn auf den Khao Tang Kuan, am Nachmittag Koh Yo oder Pool.",
        "<strong>Baden:</strong> Samila ist eher ein Spazier- und Picknickstrand; zum Baden sind Khanom und die Inseln besser. Im Juli warm, ab und zu Schauer.",
        "<strong>Sicherheit:</strong> Songkhla-Stadt und Hat Yai liegen ausserhalb der Gebiete, von denen das EDA abrät; nicht weiter nach Süden oder Osten (Chana, Thepha, Pattani) fahren. Reisehinweise vor der Abreise prüfen."
      ],
      ausserdem: "Wat Matchimawat mit Wandmalereien, Nationalmuseum Songkhla (altes chinesisches Haus), Institut für südthailändische Studien auf Koh Yo, Wasservogelpark Khu Khut (Bootsfahrt, Tagesausflug), Hat Yai mit grossen Märkten.",
      bilder: [
        {titel: "Samila", suche: "Samila Beach Songkhla mermaid", stichwort: "samila|mermaid"},
        {titel: "Altstadt", suche: "Songkhla Old Town street art|Nang Ngam Road", stichwort: "songkhla|nang ngam"},
        {titel: "Koh Yo", suche: "Ko Yo Songkhla|Koh Yor", stichwort: "ko yo|koh yo|koh yor"},
        {titel: "Khao Tang Kuan", suche: "Khao Tang Kuan Songkhla", stichwort: "tang kuan"},
        {titel: "Songkhla-See", suche: "Songkhla Lake|Thale Sap Songkhla", stichwort: "songkhla"},
        {titel: "Wat Matchimawat", suche: "Wat Matchimawat Songkhla", stichwort: "matchimawat"}
      ],
      zwischenstopp: {text: "Zwischenstopp in Ipoh", datum: "3.–4. Juli"}
    },
    {
      nr: 6,
      name: "Khanom",
      land: "th",
      region: "Thailand",
      datum: "6.–8. Juli",
      naechte: "2 Nächte",
      anreise: "Mit privatem Transfer von Songkhla über Nakhon Si Thammarat nach Khanom (ca. 3,5 Std.). Alternative mit dem Zug: Taxi zum Bahnhof Hat Yai (ca. 45 Min.), Zug nach Nakhon Si Thammarat (ca. 2,75–3 Std.; nur wenige Züge pro Tag) und Taxi nach Khanom (ca. 1,5 Std.), mit Wartezeit insgesamt ca. 5,5–6,5 Std.",
      text: "Ruhiger Küstenort am Golf von Thailand mit einsamen Stränden, Wasserfällen und rosa Delfinen. Ein entspannter Halt am Meer vor den Inseln.",
      teens: "Delfin-Bootstour ab Pak Nam (Sichtung nicht garantiert), Hin Lat Wasserfälle, Strandtage, Schnorcheln und Kajak.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Ankunft am Nachmittag, am nächsten Morgen Delfin-Tour, danach Wasserfälle Hin Lat oder Strand und Pool. Unterkunft mit Pool vorab buchen, das Angebot ist klein.",
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
      datum: "8.–11. Juli",
      naechte: "3 Nächte",
      anreise: "Minivan von Khanom zum Donsak Pier (ca. 1 Std.), dann Autofähre (Seatran/Raja) direkt nach Samui (ca. 1,5 Std.).",
      text: "Thailands grosse Familieninsel mit guter Infrastruktur, Stränden und Ausflügen. Im Juli sind die Wetterbedingungen im Golf meist stabil.",
      teens: "Tagesausflug in den Ang Thong Marine Park (Kajak, Schnorcheln, Wanderung zum Aussichtspunkt), Strandtage in Lamai/Chaweng, Na Muang Wasserfälle.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, mit einem Tagesausflug in den Ang Thong Marine Park; Unterkunft mit Pool und Familienzimmer. Bophut/Mae Nam sind ruhiger als Chaweng.",
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
      nr: 8,
      name: "Koh Tao",
      land: "th",
      region: "Thailand",
      datum: "11.–16. Juli",
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
      nr: 9,
      name: "Hua Hin / Khao Sam Roi Yot",
      land: "th",
      region: "Thailand",
      datum: "16.–18. Juli",
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
      nr: 10,
      name: "Bangkok",
      land: "th",
      region: "Thailand",
      datum: "18.–22. Juli",
      naechte: "4 Nächte, Rückflug 22. Juli",
      anreise: "Zug von Hua Hin nach Bangkok (ca. 3,5–4 Std.), Ankunft je nach Zug am Bahnhof Krung Thep Aphiwat oder Hua Lamphong; weiter mit MRT oder Taxi. Minivans sind etwas schneller (ca. 3 Std.).",
      text: "Vielfältiges Finale: Tempel, Flussfahrten, Aquarium und Nachtmärkte. Zwei Nächte reichen für die wichtigsten Höhepunkte der Stadt.",
      teens: "SEA LIFE Bangkok Ocean World (Siam Paragon), Safari World (nur bei genug Zeit), Khlong-Bootsfahrt, Tempelbesichtigung in Ayutthaya.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte. Ein voller Tag für Grand Palace, Wat Pho und Wat Arun, ein Tag Ayutthaya (Tempelruinen, ca. 1,5 Std. mit Zug oder Minivan), ein Tag Safari World oder SEA LIFE und Märkte. Der Rückflug geht um die Mittagszeit: am Abreisetag früh zum Flughafen.",
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
    total: "19’000",
    spanne: "15’500–24’000",
    proTag: "ca. 590 CHF pro Tag, ca. 4’750 pro Person",
    posten: [
      [
        "Flüge Zürich–Singapur und Bangkok–Zürich",
        "4’400–5’600",
        "5’000",
        "ca. 1’100–1’400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Fernverkehr (Bus, Zug, Fähre, Minivan)",
        "900–1’450",
        "1’100",
        "Bus oder Transfer Singapur–Mersing, Speedboot nach Pulau Tengah, Taxi nach Kluang und ETS-Zug nach Kuala Lumpur, Transfers in die Cameron Highlands und nach Ipoh, ETS-Zug Ipoh–Padang Besar und Zug nach Hat Yai, privater Transfer Songkhla–Khanom, Fähren Samui–Tao–Chumphon, Zug nach Hua Hin und Bangkok"
      ],
      ["Lokale Transfers", "400–800", "550", "Grab, MRT/Skytrain, Wassertaxis, Songthaew"],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)",
        "4’300–6’700",
        "5’200",
        "Pulau Tengah (Batu Batu, mit Essen) grob ca. 450–750 CHF pro Nacht, sonst ca. 50–140 CHF pro Nacht, Singapur ca. 250–300; auf den Inseln im Juli gefragt, früh buchen"
      ],
      [
        "Verpflegung (Hawker, Restaurants, Getränke)",
        "2’300–3’600",
        "2’900",
        "ca. 75–120 CHF pro Tag für 4 Personen, Singapur am teuersten"
      ],
      [
        "Aktivitäten und Eintritte",
        "2’200–3’400",
        "2’700",
        "Universal und Sentosa, Mandai, Schnorcheltouren, Marine-Park-Gebühren, Petronas-Skybridge, Sunway Lagoon, Touren mit Teeplantage, Mossy Forest und Dschungel (Rafflesia) in den Cameron Highlands, Delfin-Tour in Khanom, Ang Thong, Wasserpark Hua Hin, Safari World usw."
      ],
      [
        "Versicherung, eSIM, Medikamente, Impfungen",
        "600–1’200",
        "900",
        "Reisekranken- und Annullationsschutz, Reiseapotheke"
      ],
      ["Reserve (ca. 5 %)", "400–1’250", "650", "Souvenirs, Wäsche, Unvorhergesehenes"],
      [
        "<strong>Total</strong>",
        "<strong>15’500–24’000</strong>",
        "<strong>ca. 19’000</strong>",
        "ca. 590 CHF pro Tag, ca. 4’750 pro Person"
      ]
    ],
    stationen: [
      ["1. Singapur (3)", "1’320–1’950"],
      ["2. Pulau Tengah (5)", "2’300–3’800"],
      ["3. Kuala Lumpur (2)", "370–610"],
      ["4. Cameron Highlands (3)", "600–980"],
      ["Zwischenübernachtung Ipoh (1)", "130–220"],
      ["5. Songkhla (2)", "330–560"],
      ["6. Khanom (2)", "380–640"],
      ["7. Koh Samui (3)", "750–1’190"],
      ["8. Koh Tao (5)", "1’000–1’620"],
      ["9. Hua Hin / Khao Sam Roi Yot (2)", "430–670"],
      ["10. Bangkok (4)", "970–1’630"]
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
      "Singapur und Malaysia sind für Touristen visafrei. Thailand hat seit 15. September 2026 die visafreie Aufenthaltsdauer auf 30 Tage verkürzt (vorher 60) und visafreie Einreisen über Landgrenzen auf zwei pro Kalenderjahr begrenzt. Auf dieser Route seid ihr ca. 21 Tage in Thailand und reist einmal über Land ein (im Bahnhof Padang Besar); ob die Schweiz auf der Liste der visabefreiten Länder steht, beim Thai-Konsulat oder EDA prüfen. Online-Anmeldungen: SG Arrival Card (Singapur), MDAC (Malaysia), TDAC (Thailand). Reisepass mind. 6 Monate gültig."
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
      "Heiss und feucht, Regenschauer; in den Cameron Highlands kühl (ca. 18–25 °C, nachts ca. 15 °C). Kuala Lumpur und Bangkok haben im Juli häufiger Regen und Gewitter; die Ostküste Malaysias (Pulau Tengah) und der Golf von Thailand (Songkhla, Khanom, Samui, Tao) sind im Juni und Juli meist ruhiger. Die Westküste (Penang, Langkawi) liegt im Juli im Südwest-Monsun."
    ]
  ]
};
