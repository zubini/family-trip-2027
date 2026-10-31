// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/marokko.js usw.).
// Platzhalter in Texten: {plan:marokko}, {plan:usa}, {plan:usamitte}, {plan:usaappalachen}, {plan:asien}, {plan:indonesien} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// Pro/Contra: je 5 kurze Stichworte. Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Ab Sa, 19.06.2027, bis spätestens Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen beginnen am Sa, 19.06.2027 und sind für die Familie mit Sohn (12) und Tochter (14) geplant. Die Reise mit dem eigenen Auto dauert bis Sa, 24.07.2027 (35 Nächte); die Flugreisen enden schon am Do, 22.07.2027 (32 Nächte; bei Singapur / Malaysia / Indonesien 31 Nächte und zwei Nachtflüge), damit zwei Tage gegen den Jetlag bleiben. Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Wüstenfeeling, Strand und Baden, Schnorcheln, Abenteuer, Städte, Gesundheit und Sicherheit, Budget, Reisekomfort sowie CO₂ und Umwelt. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig, beim CO₂: wenig Ausstoss). Die Skala ist fest und nicht nur ein Vergleich der Reisen: 5 heisst Weltklasse (z.B. tropische Riffe beim Schnorcheln, kurze Etappen beim Reisekomfort), 0 heisst, dass es das auf der Reise nicht gibt. Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
  budgetIntro: "Mittelklasse inklusive Flüge bzw. Autokosten, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.",
  vergleichIntro: "Die wichtigsten Unterschiede nebeneinander.",
  entscheidIntro: "Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln, Städte und Kultur ohne Flug oder Nationalparks und Roadtrip im Vordergrund stehen.",
  reisen: {
    marokko: {
      name: "Spanien / Portugal / Marokko",
      zusatz: "Roadtrip ab Brig-Glis, Marokko mit Fähre und Zug",
      passt: "ihr ohne Flug reisen, Städte in Spanien und Portugal mit sechs Nächten Marokko (Casablanca, Marrakesch, Agafay-Wüste, Fès) verbinden möchtet und grosse Hitze, viele Reisetage und Wechsel zwischen Auto, Fähre und Zug in Kauf nehmt.",
      kurz: "Fünf Wochen mit dem eigenen Elektroauto durch Spanien, Portugal und Südfrankreich mit Schnorcheln bei den Medes-Inseln, vier Nächten auf Formentera, Benidorm und dem Cabo de Gata, dazu sechs Nächte Marokko nur mit Fähre und Zug: Casablanca, Marrakesch, eine Nacht im Zeltcamp in der Agafay-Wüste und Fès.",
      route: "Brig-Glis, Sète, Costa Brava (L’Estartit), Barcelona, Valencia, Formentera, Benidorm, Cabo de Gata, Caminito del Rey, Tarifa, (Fähre) Tanger, Casablanca, Marrakesch, Agafay-Wüste, Fès, Cádiz, Sevilla, Algarve (Lagos), Lissabon, Porto, Playa de las Catedrales, San Sebastián, Carcassonne, Brig-Glis",
      stationen: "19 Stationen und 2 Zwischenübernachtungen",
      laender: "Frankreich, Spanien, Marokko, Portugal",
      hinflug: "Kein Flug: mit dem eigenen Auto ab Brig-Glis, Zwischenstopp in Sète (ca. 7–7,5 Std.), dann an die Costa Brava (ca. 2,5–3 Std.)",
      rueckflug: "Mit dem Auto ab Carcassonne über Montpellier, Lyon und Genf (ca. 7,5–8 Std., mit Pausen und Ladestopps ca. 9 Std.), Ankunft Sa, 24.07.2027",
      dazwischen: "Keine Flüge: eigenes Elektroauto, Autofähre Dénia–Formentera; nach Marokko mit der Fähre ohne Auto (Tarifa–Tanger), dort nur Züge (Tanger–Casablanca–Marrakesch, zurück über Fès) und ein Transfer in die Agafay-Wüste",
      tempo: "Ca. 59 Std. reine Fahrzeit im eigenen Auto (ca. 5’600 km), dazu Fähren nach Formentera und über die Meerenge (zusammen ca. 6–8 Std.), Züge in Marokko (ca. 15–17 Std.) und Transfers; realistisch ca. 96–103 Std. Tür zu Tür; die längsten Tage: Brig-Glis–Sète (ca. 7–7,5 Std.), Carcassonne–Brig-Glis (ca. 7,5–8 Std.), Agafay–Fès (Transfer und Zug, ca. 7,5–8,5 Std.), Fès–Cádiz (Zug und Fähre, ca. 7–9 Std.), Ribadeo–San Sebastián (ca. 5 Std.)",
      gesamt: "Ca. 96–103 Std. Tür zu Tür, ohne Flughafen und ohne Jetlag: davon realistisch ca. 68–71 Std. im Auto inklusive Ladestopps (ca. 59 Std. reine Fahrzeit) und ca. 28–32 Std. für Fähren, Züge und Transfers mit Passkontrolle und Umsteigen.",
      wetter: "Sehr heiss: Marrakesch, die Agafay-Wüste und Fès oft 38–42 °C, Andalusien 35–40 °C; Casablanca, Lissabon, San Sebastián und die Küsten angenehmer.",
      einreise: "Schengen bis auf Marokko: dort Reisepass für alle (Identitätskarte genügt nicht), kein Visum. Crit’Air-Vignette für Frankreich, Umweltzone Barcelona, elektronische Maut in Portugal.",
      hoehepunkte: "Schnorcheln bei den Medes-Inseln, auf Formentera und am Cabo de Gata, Sagrada Família, Oceanogràfic, Terra Mítica und Aqualandia in Benidorm, Caminito del Rey, Hassan-II.-Moschee in Casablanca, Jemaa el-Fna in Marrakesch, Kamelritt und Nacht im Zeltcamp in der Agafay-Wüste, Medina von Fès, Cádiz, Sevilla, Grotten der Algarve, Lissabon, Felsbögen der Playa de las Catedrales, San Sebastián, Carcassonne.",
      teens: "Wasserpark Aqualandia oder Terra Mítica in Benidorm, Kamelritt und Quad in der Agafay-Wüste, Souks und Gaukler in Marrakesch, Game-of-Thrones-Drehorte, Kajak an der Algarve, Surfen in San Sebastián, Ritterburg Carcassonne.",
      pro: [
        "Kein Flug, kein Jetlag",
        "Sechs Nächte Marokko, ohne dort selber zu fahren",
        "Viele Städte von Barcelona bis Lissabon",
        "Mittelmeer, Wüste und Atlantik im Wechsel",
        "Günstig (ca. {plan:marokko} CHF), wenig CO₂"
      ],
      contra: [
        "Hitze in Marokko bis 42 °C",
        "Agafay ist eine Steinwüste, ohne Sanddünen",
        "Viele Wechsel zwischen Auto, Fähre und Zug",
        "Mehrere lange Tage mit 7–9 Std.",
        "In Marokko kein Leitungswasser, aufdringliche Händler"
      ]
    },
    usa: {
      name: "USA Süd (Los Angeles – Florida – New York)",
      zusatz: "Roadtrip vom Südwesten über die Golfküste nach Florida, dann Flug nach New York",
      passt: "Nationalparks, ein grosser Roadtrip, Städte des Südens, Strand in Destin, Key Largo und Miami und zum Schluss New York im Vordergrund stehen, ihr viele Fahrtage in Kauf nehmt und das höhere Budget (rund {mehrkosten} CHF mehr) passt.",
      kurz: "Fünf Wochen USA: mit dem Mietwagen von Los Angeles über Las Vegas, Kanab, Monument Valley, Albuquerque und White Sands nach Texas, über San Antonio und New Orleans an den Strand von Destin, nach Orlando, Key Largo und Miami; dann Inlandflug nach New York.",
      route: "Los Angeles, Las Vegas, Kanab, Monument Valley, Albuquerque, White Sands, (Roswell) Fort Stockton, San Antonio, New Orleans, Destin, Orlando, Key Largo, Miami, (Flug) New York",
      stationen: "13 Stationen und 1 Zwischenübernachtung",
      laender: "USA (Kalifornien bis Florida, New York)",
      hinflug: "Zürich–Los Angeles ca. 12,25 Std. direkt mit SWISS (im Sommer 2026 täglich ausser Do); Hin- und Rückflug für alle vier ca. 4’000 CHF",
      rueckflug: "Direktflug New York (JFK)–Zürich ca. 7,75–8 Std. (SWISS, täglich) am Mi, 21.07.2027, Ankunft Do, 22.07.2027 am Morgen; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Einwegmiete Los Angeles–Miami (ca. 28 Tage), Inlandflug Miami–New York (ca. 3–3,5 Std.)",
      tempo: "Ca. 57–60 Std. reine Fahrzeit (ca. 5’550 km), realistisch mit Pausen und Stau ca. 64–70 Std. im Auto, an 12 Fahrtagen: San Antonio–New Orleans ca. 8–8,5 Std. (realistisch ca. 9,5–10 Std.), 5 Tage mit 4,5–7 Std., die übrigen 1–5 Std.; dazu ein Inlandflug.",
      gesamt: "Ca. 104–111 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Mietwagen zusammen ca. 31 Std., der Inlandflug nach New York mit Transfers ca. 7 Std. und ca. 64–70 Std. im Auto. Uhr −6 bis −9 Std., Jetlag vor allem nach der Rückkehr.",
      wetter: "Im Südwesten Ende Juni 38–45 °C, ab Juli Monsungewitter; Texas, die Golfküste und Florida heiss und feucht (ca. 32–33 °C) mit Gewittern am Nachmittag, Hurrikansaison mit Höhepunkt erst ab Mitte August; New York heiss und schwül.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Nationalparks, auf der Route nur bei den Optionen Zion, Bryce Canyon oder Everglades-Nationalpark (Jahrespass für Nicht-Residenten 250 USD).",
      hoehepunkte: "Santa Monica und Griffith Observatory in Los Angeles, Las Vegas, rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak und Meow Wolf, White Sands, UFO-Museum in Roswell, Alamo, New Orleans, weisse Strände bei Destin, Universal und Kennedy Space Center, Everglades, drei Nächte Key Largo mit Korallenriff, Miami Beach, New York.",
      teens: "Santa Monica Pier und Venice Beach, Sandboarding auf den Dünen bei Kanab und auf White Sands, UFO-Museum, Sumpftour, Raketen im Kennedy Space Center mit Alligatoren, Strand in Destin, Universal, Airboat und Schnorcheln am Riff, New York.",
      pro: [
        "Monument Valley, Horseshoe Bend, White Sands",
        "Los Angeles, Las Vegas und New York",
        "Universal und Kennedy Space Center",
        "Strand in Santa Monica, Destin und Miami",
        "Drei Nächte Key Largo mit Riff, in New York ohne Auto"
      ],
      contra: [
        "Am teuersten (ca. {plan:usa} CHF)",
        "Ca. 63–69 Std. im Auto",
        "Ein Fahrtag mit ca. 9,5–10 Std.",
        "Wüstenhitze bis 45 °C",
        "Jetlag (−9 Std.), drei Flüge, viel CO₂"
      ]
    },
    usamitte: {
      name: "USA Mitte (Los Angeles – Chicago – New York)",
      zusatz: "Roadtrip ohne Inlandflug: Südwesten, Texas, den Mississippi hinauf, Grosse Seen und New York",
      passt: "ein sehr grosser Roadtrip quer durchs Land im Vordergrund steht, mit Monument Valley, Space Center Houston, New Orleans, Chicago, Niagara und New York, Strand und warmes Meer weniger wichtig sind und ihr die meisten Fahrstunden aller Varianten in Kauf nehmt.",
      kurz: "Fünf Wochen quer durch die USA ohne Inlandflug: mit dem Mietwagen von Los Angeles über Las Vegas, Kanab und Monument Valley nach Albuquerque, über Amarillo und Fort Worth nach Houston und New Orleans, über Memphis und St. Louis nach Chicago, über Cedar Point und die Niagarafälle in die Finger Lakes und nach New York.",
      route: "Los Angeles, Las Vegas, Kanab, Monument Valley, Albuquerque, Amarillo, Fort Worth, Houston, New Orleans, Memphis, St. Louis, Chicago, Sandusky (Cedar Point), Niagarafälle, Finger Lakes, New York",
      stationen: "16 Stationen",
      laender: "USA (Kalifornien bis New York, Texas, Louisiana)",
      hinflug: "Zürich–Los Angeles ca. 12,25 Std. direkt mit SWISS (im Sommer 2026 täglich ausser Do); Hin- und Rückflug für alle vier ca. 4’000 CHF",
      rueckflug: "Direktflug New York (JFK)–Zürich ca. 7,75–8 Std. (SWISS, täglich) am Mi, 21.07.2027, Ankunft Do, 22.07.2027 am Morgen; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Einwegmiete Los Angeles–New York (ca. 28 Tage), kein Inlandflug, in New York ohne Auto",
      tempo: "Ca. 65–72 Std. reine Fahrzeit (ca. 6’700 km), realistisch mit Pausen und Stau ca. 75–84 Std. im Auto, an 15 Fahrtagen: 5 Tage mit 5–6,5 Std., die übrigen 3–5 Std.; von Albuquerque bis Houston drei Fahrtage hintereinander.",
      gesamt: "Ca. 108–118 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Mietwagen zusammen ca. 31 Std. und ca. 75–84 Std. im Auto. Uhr −9 Std. in Los Angeles, −6 Std. im Osten.",
      wetter: "In Los Angeles am Meer mild, in Las Vegas und im Südwesten Ende Juni 38–45 °C, ab Juli Monsungewitter; in Texas, Louisiana und Tennessee heiss und sehr schwül mit Gewittern, Hurrikansaison an der Golfküste (im Juli selten); an den Grossen Seen und in den Finger Lakes angenehmer (ca. 26–29 °C), New York heiss und schwül.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Kein Nationalpark-Jahrespass nötig (Zion, Bryce oder Grand Canyon nur als Option mit 100 USD Zusatzgebühr pro Person ab 16). Nach Kanada (Niagara) zu Fuss mit dem Pass.",
      hoehepunkte: "Santa Monica und Griffith Observatory, Las Vegas, rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak und Meow Wolf, Cadillac Ranch, Viehtrieb in Fort Worth, Space Center Houston, New Orleans, Memphis, Gateway Arch und City Museum, Chicago, Cedar Point, Niagarafälle, Finger Lakes, New York.",
      teens: "Santa Monica Pier, Sandboarding bei Kanab, Jeep-Tour im Monument Valley, Cadillac Ranch, Longhorns in Fort Worth, Space Center Houston, Sumpftour mit Alligatoren, City Museum, Glasbalkon im Skydeck, Achterbahnen in Cedar Point, Maid of the Mist, New York.",
      pro: [
        "Einmal quer durchs Land, Süden und Norden",
        "Monument Valley, Kanab, Niagara",
        "Space Center Houston, New Orleans, Chicago",
        "Cedar Point, City Museum, Sumpftour",
        "Flugangebot ca. 4’000 CHF, kein Inlandflug"
      ],
      contra: [
        "Teuer (ca. {plan:usamitte} CHF)",
        "Ca. 75–84 Std. im Auto, am meisten von allen",
        "Drei Fahrtage hintereinander durch Texas",
        "Kaum Strand, kein warmes Meer",
        "Wüstenhitze, Jetlag (−9 Std.), viel CO₂"
      ]
    },
    usaappalachen: {
      name: "USA Appalachen (Los Angeles – Smoky Mountains – New York)",
      zusatz: "Roadtrip ohne Inlandflug: Südwesten, Texas, New Orleans, Golfküste, Appalachen, Washington und New York",
      passt: "ein grosser Roadtrip quer durchs Land mit viel Abwechslung im Vordergrund steht, von Wüste und Monument Valley über Jazz in New Orleans und Strand am Golf bis zu grünen Bergen mit Bären, und ihr viele Fahrtage in Kauf nehmt.",
      kurz: "Fünf Wochen quer durch die USA ohne Inlandflug: mit dem Mietwagen von Los Angeles über Las Vegas, Kanab und Monument Valley nach Albuquerque, über Amarillo, Fort Worth und Houston nach New Orleans, an den Strand von Alabama, in die Great Smoky Mountains und das Shenandoah-Tal, nach Washington und New York.",
      route: "Los Angeles, Las Vegas, Kanab, Monument Valley, Albuquerque, Amarillo, Fort Worth, Houston, New Orleans, Gulf Shores, Chattanooga, Great Smoky Mountains, Shenandoah, Washington, New York",
      stationen: "15 Stationen",
      laender: "USA (Kalifornien bis New York, Texas, Louisiana, Alabama, Tennessee, Virginia)",
      hinflug: "Zürich–Los Angeles ca. 12,25 Std. direkt mit SWISS (im Sommer 2026 täglich ausser Do); Hin- und Rückflug für alle vier ca. 4’000 CHF",
      rueckflug: "Direktflug New York (JFK)–Zürich ca. 7,75–8 Std. (SWISS, täglich) am Mi, 21.07.2027, Ankunft Do, 22.07.2027 am Morgen; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Einwegmiete Los Angeles–New York (ca. 28 Tage), kein Inlandflug, in New York ohne Auto",
      tempo: "Ca. 58–65 Std. reine Fahrzeit (ca. 6’000 km), realistisch mit Pausen und Stau ca. 67–76 Std. im Auto, an 14 Fahrtagen: 6 Tage mit 5–7 Std., die übrigen 1,5–5 Std.; von Albuquerque bis Houston drei Fahrtage hintereinander.",
      gesamt: "Ca. 100–110 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Mietwagen zusammen ca. 31 Std. und ca. 67–76 Std. im Auto. Uhr −9 Std. in Los Angeles, −6 Std. im Osten.",
      wetter: "In Los Angeles am Meer mild, in Las Vegas und im Südwesten Ende Juni 38–45 °C; in Texas, Louisiana und an der Golfküste heiss und sehr schwül mit Gewittern, Hurrikansaison (im Juli selten); in den Smoky Mountains und im Shenandoah-Tal angenehmer, Washington und New York heiss und schwül.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Kein Nationalpark-Jahrespass nötig: Smoky Mountains ohne Eintritt (Parkkarte ca. 5 USD pro Tag), Shenandoah ca. 30 USD pro Auto.",
      hoehepunkte: "Santa Monica und Griffith Observatory, Las Vegas, rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak und Meow Wolf, Cadillac Ranch, Viehtrieb in Fort Worth, Space Center Houston, New Orleans mit Feuerwerk am 4. Juli, Strand in Gulf Shores, Ruby Falls, Great Smoky Mountains, Skyline Drive und Luray Caverns, Washington, New York.",
      teens: "Santa Monica Pier, Sandboarding bei Kanab, Jeep-Tour im Monument Valley, Longhorns in Fort Worth, Space Center Houston, Sumpftour mit Alligatoren, Delfine im Golf, Wasserfall in der Höhle, Schwarzbären, Tubing und Bergachterbahn, Air and Space Museum, New York.",
      pro: [
        "Wüste, Südstaaten, Strand, Berge",
        "Monument Valley, Smoky Mountains, Shenandoah",
        "New Orleans am 4. Juli, Washington, New York",
        "Strand am Golf, Bären und Wasserfälle",
        "Flugangebot ca. 4’000 CHF, kein Inlandflug"
      ],
      contra: [
        "Teuer (ca. {plan:usaappalachen} CHF)",
        "Ca. 67–76 Std. im Auto",
        "Drei Fahrtage hintereinander durch Texas",
        "Kaum Schnorcheln, Strand nur am Golf",
        "Hitze im Süden, Jetlag (−9 Std.)"
      ]
    },
    asien: {
      name: "Malaysia / Thailand",
      zusatz: "von Singapur nach Bangkok",
      passt: "Schnorcheln, tropische Inseln und Strand im Vordergrund stehen und ihr dazu Singapur, Kuala Lumpur, Penang und Bangkok erleben möchtet.",
      kurz: "Fünf Wochen über Land und Wasser durch Singapur, Malaysia und Thailand.",
      route: "Singapur, Pulau Tioman, Kuala Lumpur, Perhentian Islands, Penang, Khanom, Koh Samui, Koh Tao, Hua Hin, Bangkok",
      stationen: "10 Stationen und 2 Zwischenübernachtungen",
      laender: "Singapur, Malaysia, Thailand",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std.",
      rueckflug: "Direktflug Bangkok–Zürich ca. 11,5–12 Std. am Do, 22.07.2027 um die Mittagszeit, Ankunft am Abend; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Keine Flüge dazwischen, alles per Bus, Zug und Fähre",
      tempo: "Ca. 55–60 Std. reine Reisezeit mit Bus, Zug und Fähre, realistisch mit Wartezeiten ca. 65–70 Std.; 6 lange Reisetage mit 5–9 Std. (Tioman–Kuala Lumpur, Kuala Lumpur–Kuala Besut, Perhentian–Penang, Penang–Hat Yai, Hat Yai–Khanom, Koh Tao–Hua Hin)",
      gesamt: "Ca. 101–108 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), ca. 2 Std. Wartezeit am Flughafen, Flüge und Transfers zusammen ca. 36–38 Std., dazu ca. 65–70 Std. mit Bus, Zug und Fähre; niemand muss selber fahren. Uhr +6 Std. (Thailand +5 Std.), Jetlag vor allem nach der Ankunft.",
      wetter: "Penang und Bangkok haben Regenzeit; die Ostküste Malaysias (Tioman, Perhentian) und der Golf von Thailand (Samui, Tao) sind meist ruhiger.",
      einreise: "Singapur und Malaysia visafrei. Thailand: seit 15.09.2026 nur noch 30 Tage visafrei und höchstens zwei Landgrenz-Einreisen pro Jahr, Länderliste prüfen. Online-Anmeldungen (SG Arrival Card, MDAC, TDAC).",
      hoehepunkte: "Schnorcheln auf Tioman, den Perhentians, Samui und Koh Tao, Street-Food in Penang, Delfine bei Khanom, Ang Thong, Grand Palace und Wat Arun in Bangkok.",
      teens: "Schnorcheln, Inselhopping, Wasserparks, Sentosa mit Universal Studios, Kajak.",
      pro: [
        "Die meisten Schnorchel- und Strandtage",
        "Warmes Meer (ca. 29 °C) mit Riffen und Schildkröten",
        "Singapur, Kuala Lumpur, Penang und Bangkok",
        "Niemand muss selber fahren",
        "Günstig (ca. {plan:asien} CHF)"
      ],
      contra: [
        "Viele Umstiege mit Gepäck",
        "Sechs lange Reisetage mit 5–9 Std.",
        "Regenzeit und schwüle Hitze",
        "Dengue-Mücken, kein Leitungswasser",
        "Jetlag (+6 Std.), viel CO₂"
      ]
    },
    indonesien: {
      name: "Singapur / Malaysia / Indonesien",
      zusatz: "Singapur, Tioman, Bali, Gili-Inseln und Komodo in der Trockenzeit",
      passt: "Schnorcheln, Inseln und Strand im Vordergrund stehen, dazu Abenteuer wie Komodowarane, Mantas, Rafting und Dschungel, und ihr Bus, Fähren, kurze Flüge und Bootsfahrten in Kauf nehmt.",
      kurz: "Fünf Wochen Singapur, Malaysia und Indonesien: Singapur, die Dschungelinsel Tioman, Bali mit Ubud und Amed, die Gili-Inseln, Komodo, Nusa Lembongan, Südbali und zum Schluss Sentosa.",
      route: "Singapur, (Bus, Fähre) Pulau Tioman, (Flug) Ubud, Amed, (Boot) Gili Air, (Flug) Labuan Bajo (Komodo), (Flug, Boot) Nusa Lembongan, Südbali, (Flug) Singapur und Sentosa",
      stationen: "9 Stationen und 1 Zwischenübernachtung",
      laender: "Singapur, Malaysia (Tioman), Indonesien (Bali, Gili-Inseln, Flores)",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std. (SWISS) am Sa, 19.06.2027 am Abend, Ankunft So am Nachmittag",
      rueckflug: "Direktflug Singapur–Zürich ca. 13–13,5 Std. (SWISS) in der Nacht auf den Do, 22.07.2027, Ankunft am frühen Morgen; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Bus und Fähre nach Tioman und zurück, vier kurze Flüge (je ca. 1–2,75 Std.), Schnellboote nach Gili Air und Nusa Lembongan, Fahrer auf Bali",
      tempo: "Niemand muss selber fahren: zweimal Bus und Fähre (je ca. 5,5–6,5 Std.), ca. 6–8 Std. mit Fahrer, ca. 3–4 Std. Schnellboot und vier kurze Flüge, mit Transfers je ein halber bis ganzer Reisetag; überall 2–4 Nächte.",
      gesamt: "Ca. 75–85 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Langstreckenflüge mit Wartezeiten, Einreise und Transfers zusammen ca. 34 Std., Bus und Fähren nach Tioman ca. 12 Std., vier Regionalflüge mit Transfers ca. 20–24 Std., Boote und Fahrten ca. 9–12 Std. Uhr +6 Std.",
      wetter: "Trockenzeit auf Bali, den Gili-Inseln und Flores, beste Zeit auch auf Tioman: ca. 29–32 °C, wenig Regen; Singapur ca. 31 °C und schwül mit kurzen Schauern; Meer ca. 27–29 °C.",
      einreise: "Singapur und Malaysia visumfrei (SG Arrival Card, MDAC). Indonesien: Visum bei Ankunft oder e-VOA (2026 ca. 500’000 IDR pro Person, Erhöhung geplant), Bali-Abgabe 150’000 IDR pro Person; nur offizielle Seiten nutzen.",
      hoehepunkte: "Gardens by the Bay, Dschungel und Riffe auf Tioman, Reisterrassen und Rafting bei Ubud, Wrack bei Amed, Schildkröten auf Gili Air, Komodowarane und Mantas, Nusa Lembongan, Uluwatu mit Kecak-Tanz, Universal Studios Singapore.",
      teens: "Schnorcheln auf Tioman, Dschungel-Wanderung, Rafting, Schildkröten und Mantas, Komodowarane, Klippenspringen, Surfkurs, Waterbom Bali, Universal Studios Singapore.",
      pro: [
        "Weltklasse-Schnorcheln: Schildkröten, Mantas",
        "Komodowarane, Dschungel, Rafting",
        "Trockenzeit, angenehm warm",
        "Niemand muss selber fahren",
        "Drei Länder, Singapur am Anfang und Ende"
      ],
      contra: [
        "Vier kurze Flüge, Bus, Fähren und Boote",
        "Lange Anreise, Jetlag (+6 Std.)",
        "Dengue, Tollwut, Malaria auf Flores",
        "Einfache Versorgung auf kleinen Inseln",
        "Viel CO₂"
      ]
    }
  },
  bewertung: [
    {
      kriterium: "Natur und Landschaft",
      marokko: [
        3,
        "Schöne Küsten und einzelne Naturhöhepunkte: Vulkanküste am Cabo de Gata, Schlucht des Caminito del Rey, Agafay-Steinwüste vor dem Hohen Atlas, Felsküste der Algarve, Felsbögen der Playa de las Catedrales; viele Tage in Städten und keine grossen Nationalparks wie in den USA."
      ],
      usa: [5, "Rote Felsen und rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak, White Sands, die Everglades und das Korallenriff der Keys: spektakuläre und abwechslungsreiche Landschaften."],
      usamitte: [4, "Rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak, Sümpfe in Louisiana, Niagarafälle und die Schlucht von Watkins Glen; abwechslungsreich, aber ohne die grossen Nationalparks."],
      usaappalachen: [5, "Rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak, Palo Duro Canyon, Sümpfe in Louisiana, Golfküste, Wälder und Wasserfälle der Smoky Mountains, Blue Ridge Mountains und Luray Caverns: sehr abwechslungsreich."],
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ],
      indonesien: [5, "Dschungelinsel Tioman, Reisterrassen und Wälder bei Ubud, Vulkane Agung und Rinjani, Inseln und Buchten im Komodo-Nationalpark mit Waranen, Riffe: spektakulär und abwechslungsreich."],
    },
    {
      kriterium: "Dschungelfeeling",
      marokko: [0, "Kein Regenwald: Steinwüste, Palmengärten in Marrakesch und grüne Hügel im Baskenland."],
      usa: [1, "Kein Regenwald; Sümpfe in Louisiana und Mangroven in den Everglades."],
      usamitte: [1, "Kein Regenwald; Sümpfe in Louisiana."],
      usaappalachen: [1, "Kein Regenwald; Sümpfe in Louisiana und dichte Laubwälder in den Smoky Mountains."],
      asien: [
        3,
        "Dschungelwanderung auf Tioman, Wasserfälle und Inselwälder; kein grosser zusammenhängender Regenwald auf der Route."
      ],
      indonesien: [3, "Dschungel und Wasserfälle auf Tioman und bei Ubud, Mangroven auf Nusa Lembongan; kein grosser zusammenhängender Regenwald auf der Route."],
    },
    {
      kriterium: "Wüstenfeeling",
      marokko: [
        3,
        "Eine Nacht im Zeltcamp in der Agafay-Steinwüste bei Marrakesch mit Kamelritt und Blick auf den Atlas, dazu die Wüste von Tabernas am Cabo de Gata als Abstecher; keine Sanddünen wie in der Sahara und im Juli sehr heiss."
      ],
      usa: [4, "Mojave um Las Vegas, rote Felswüsten in Utah und Arizona, Monument Valley, die weissen Gipsdünen von White Sands und die Chihuahua-Wüste in Westtexas."],
      usamitte: [4, "Mojave um Las Vegas, rote Felsen und Dünen bei Kanab, Monument Valley und die Wüste New Mexicos; danach Prärie."],
      usaappalachen: [4, "Mojave um Las Vegas, rote Felsen und Dünen bei Kanab, Monument Valley und die Wüste New Mexicos."],
      asien: [0, "Keine Wüste: tropische Inseln, Regenwald und Städte."],
      indonesien: [1, "Keine Wüste; trockene Savanne auf den Komodo-Inseln."]
    },
    {
      kriterium: "Strand und Baden",
      marokko: [
        4,
        "Vier Nächte auf Formentera, dazu Costa Brava, Benidorm, Cabo de Gata, Tarifa, Cádiz, Algarve und San Sebastián; im Juli voll."
      ],
      usa: [3, "Santa Monica am Pazifik, vier Nächte an den weissen Stränden bei Destin, drei Nächte in Key Largo und drei in Miami mit Miami Beach, Wasser ca. 28–31 °C; dazwischen viele Tage ohne Meer."],
      usamitte: [1, "Santa Monica am Pazifik, Galveston als Option, Stadtstrände am Michigansee und der Strand am Eriesee bei Cedar Point; kein warmes, klares Meer."],
      usaappalachen: [2, "Santa Monica am Pazifik und drei Nächte in Gulf Shores am Golf von Mexiko, Wasser ca. 29–30 °C; sonst viele Tage ohne Meer."],
      asien: [
        5,
        "Tioman, Perhentian Islands, Khanom, Koh Samui, Koh Tao und Hua Hin: tropische Strände mit ca. 29 °C warmem Wasser an fast jeder zweiten Station."
      ],
      indonesien: [5, "Tioman, Gili Air, Pink Beach bei Komodo, Nusa Lembongan und Südbali mit Surfstränden: tropische Strände mit ca. 27–29 °C warmem Wasser."],
    },
    {
      kriterium: "Schnorcheln",
      marokko: [
        3,
        "Gutes Mittelmeer-Schnorcheln: Meeresschutzgebiet der Medes-Inseln mit grossen Fischen, vier Nächte auf Formentera (Cala Saona, Es Caló, Seegraswiesen mit sehr klarem Wasser) und das Cabo de Gata (Los Escullos, Cala de San Pedro); wenige Korallen, keine Riffe und kühleres Wasser als in den Tropen."
      ],
      usa: [2, "Drei Nächte in Key Largo mit Bootstour zum einzigen Korallenriff an der Festlandküste der USA, dazu die Steinmolen bei Destin; das Riff ist weniger farbig als in Südostasien."],
      usamitte: [0, "Kein Schnorcheln auf der Route."],
      usaappalachen: [0, "Kein Schnorcheln auf der Route; das Wasser am Golf ist eher trüb."],
      asien: [
        5,
        "Tioman, Perhentian Islands, Koh Samui und Koh Tao: fast jede Inselstation hat Riffe, Schildkröten und Schnorchelboote."
      ],
      indonesien: [5, "Riffe im Marine Park von Tioman, Schildkröten auf den Gili-Inseln, Mantas bei Komodo und Nusa Penida, ein Wrack bei Amed: Weltklasse-Schnorcheln."],
    },
    {
      kriterium: "Abenteuer",
      marokko: [
        3,
        "Caminito del Rey, Kamelritt, Quad und Nacht im Zeltcamp in der Agafay-Wüste, Medinas mit Führer, Zugfahrten quer durch Marokko, Kajak durch die Grotten der Algarve, Surfen in San Sebastián."
      ],
      usa: [4, "Sandboarding auf den Dünen bei Kanab und auf White Sands, Kletterei durch den Belly of the Dragon, Sumpftour mit Alligatoren, Airboat in den Everglades, Schnorcheln am Riff, ein Roadtrip quer durchs Land."],
      usamitte: [4, "Sandboarding bei Kanab, Jeep-Tour im Monument Valley, Sumpftour mit Alligatoren, Klettern im City Museum, Achterbahnen in Cedar Point, Boot in die Gischt der Niagarafälle, ein Roadtrip quer durchs Land."],
      usaappalachen: [4, "Sandboarding bei Kanab, Jeep-Tour im Monument Valley, Sumpftour mit Alligatoren, Delfin-Bootstour, Höhlen, Tubing und Bergachterbahn in den Smoky Mountains, ein Roadtrip quer durchs Land."],
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."],
      indonesien: [5, "Dschungel-Wanderung auf Tioman, Rafting, Surfkurs, Komodowarane mit Ranger, Schnorcheln mit Mantas, Klippenspringen."],
    },
    {
      kriterium: "Städte",
      marokko: [
        5,
        "Barcelona, Valencia, Casablanca, Marrakesch, Fès, Cádiz, Sevilla, Lissabon, Porto, San Sebastián und Carcassonne: europäische und marokkanische Städte im Wechsel."
      ],
      usa: [5, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, San Antonio, New Orleans, Miami und New York mit Museen und Aussichtsplattformen."],
      usamitte: [5, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Fort Worth, Houston, New Orleans, Memphis, St. Louis, Chicago und New York."],
      usaappalachen: [5, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Fort Worth, Houston, New Orleans, Chattanooga, Washington und New York."],
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."],
      indonesien: [2, "Singapur, dazu Tempel und Tänze auf Bali und malaiische Dörfer auf Tioman; sonst kleine Orte."],
    },
    {
      kriterium: "Gesundheit und Sicherheit",
      marokko: [
        4,
        "Rund vier von fünf Wochen in Spanien, Portugal und Frankreich, dort unkompliziert. In Marokko (6 Nächte) keine Krankenversicherungskarte, kein Leitungswasser und auf Hygiene beim Essen achten; das grösste Risiko ist die Hitze in Marrakesch, in der Agafay-Wüste und in Fès (38–42 °C)."
      ],
      usa: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten, Hurrikansaison an der Golfküste und in Florida."],
      usamitte: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten und an der Golfküste, Gewitter."],
      usaappalachen: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten und an der Golfküste, Bären in den Bergen."],
      asien: [
        3,
        "Singapur sehr sicher; in Malaysia und Thailand Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären; auf den Inseln (Tioman, Perhentian) ist ein Spital weit weg, Bootsfahrten bei Wellengang."
      ],
      indonesien: [3, "Singapur sehr sicher; in Indonesien Dengue, Tollwut auf Bali (Affen und Hunde meiden), auf Flores Malaria-Risiko, kein Leitungswasser; auf den kleinen Inseln nur einfache Kliniken, Strömungen beim Schnorcheln."]
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      marokko: [4, "ca. {plan:marokko} CHF: kein Flug, Supercharging gratis, Marokko günstig; dafür Fähren und Züge in Marokko sowie Parkplatz in Tarifa."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Einwegmiete, Inlandflug und Unterkünfte in Destin, Key Largo, Miami und New York."],
      usamitte: [1, "ca. {plan:usamitte} CHF: vor allem Einwegmiete, Unterkünfte in Los Angeles, Chicago und New York."],
      usaappalachen: [1, "ca. {plan:usaappalachen} CHF: vor allem Einwegmiete, Unterkünfte in Los Angeles, Gulf Shores, Washington und New York."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."],
      indonesien: [3, "ca. {plan:indonesien} CHF: Langstreckenflug und vier Regionalflüge kosten, Unterkunft und Essen in Malaysia und Indonesien günstig."],
    },
    {
      kriterium: "Reisekomfort",
      marokko: [
        3,
        "Ca. 96–103 Stunden Tür zu Tür, kein Jetlag, in Marokko kein Fahren; aber Wechsel zwischen eigenem Auto, Fähre und Zug, Passkontrollen, ein langer Zugtag Marrakesch–Fès und mehrere Tage mit 7–9 Stunden."
      ],
      usa: [1, "Ca. 104–111 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, ein Inlandflug, dazu viel Zeit im Auto (ca. 64–70 Stunden an 12 Fahrtagen, ein Tag mit ca. 9,5–10 Stunden)."],
      usamitte: [1, "Ca. 108–118 Stunden Tür zu Tür: zwei Langstreckenflüge mit Jetlag (−9 Std.) und die meiste Zeit im Auto (ca. 75–84 Stunden an 15 Fahrtagen, drei Fahrtage hintereinander durch Texas)."],
      usaappalachen: [1, "Ca. 100–110 Stunden Tür zu Tür: zwei Langstreckenflüge mit Jetlag (−9 Std.) und viel Zeit im Auto (ca. 67–76 Stunden an 14 Fahrtagen, drei Fahrtage hintereinander durch Texas)."],
      asien: [
        2,
        "Ca. 101–108 Stunden Tür zu Tür: zwei Direktflüge mit Jetlag, dazu ca. 65–70 Stunden mit Bus, Zug und Fähre und viele Umstiege mit Gepäck; niemand muss selber fahren."
      ],
      indonesien: [2, "Ca. 75–85 Stunden Tür zu Tür: zwei lange Direktflüge mit Jetlag, Bus und Fähre nach Tioman, vier Regionalflüge und mehrere Schnellboote mit Gepäck; niemand muss selber fahren, überall 2–4 Nächte."],
    },
    {
      kriterium: "CO₂ und Umwelt (mehr Punkte = weniger CO₂)",
      marokko: [
        5,
        "Kein Flug: Elektroauto (ca. 1’100 kWh), zwei kurze Fähren, Züge in Marokko (ohne Mietwagen); grob geschätzt ca. 0,1–0,2 t CO₂ pro Person."
      ],
      usa: [1, "Zwei Langstreckenflüge und ein Inlandflug (zusammen ca. 17’700 km) und ca. 5’550 km Mietwagen, grob geschätzt ca. 3,7 t CO₂ pro Person."],
      usamitte: [1, "Zwei Langstreckenflüge (zusammen ca. 15’800 km) und ca. 6’700 km Mietwagen, grob geschätzt ca. 3,6 t CO₂ pro Person."],
      usaappalachen: [1, "Zwei Langstreckenflüge (zusammen ca. 15’800 km) und ca. 6’000 km Mietwagen, grob geschätzt ca. 3,5 t CO₂ pro Person."],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ],
      indonesien: [1, "Zwei Langstreckenflüge (ca. 20’600 km) und vier Regionalflüge (ca. 4’500 km), grob geschätzt ca. 4,3 t CO₂ pro Person."],
    }
  ]
};
