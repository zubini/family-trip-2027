// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/marokko.js usw.).
// Platzhalter in Texten: {plan:marokko}, {plan:usa}, {plan:usamitte}, {plan:asien}, {plan:malaysia} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// steckbrief: kurze Angaben für die Übersicht «Die Reisen». Pro/Contra: je 5 kurze Stichworte. Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Ab Sa, 19.06.2027, bis spätestens Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen beginnen am Sa, 19.06.2027, für die Familie mit Sohn (12) und Tochter (14). Zurück sind die Flugreisen am Do, 22.07.2027, die Autoreise am Sa, 24.07.2027. Ein Klick führt zum vollständigen Plan.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Wüstenfeeling, Strand und Baden, Schnorcheln, Abenteuer, Städte, Gesundheit und Sicherheit, Budget, Reisekomfort sowie CO₂ und Umwelt. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig, beim CO₂: wenig Ausstoss). Die Skala ist fest und nicht nur ein Vergleich der Reisen: 5 heisst Weltklasse (z.B. tropische Riffe beim Schnorcheln, kurze Etappen beim Reisekomfort), 0 heisst, dass es das auf der Reise nicht gibt. Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
  budgetIntro: "Mittelklasse inklusive Flüge bzw. Autokosten, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.",
  vergleichIntro: "Die wichtigsten Unterschiede nebeneinander.",
  entscheidIntro: "Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln, Städte und Kultur ohne Flug oder Nationalparks und Roadtrip im Vordergrund stehen.",
  reisen: {
    marokko: {
      steckbrief: {anreise: "Eigenes Auto ab Brig-Glis", unterwegs: "Auto ca. 59 Std., Züge in Marokko ca. 16 Std.", highlights: "Formentera, Marrakesch, Agafay-Wüste, Algarve, Lissabon"},
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
      steckbrief: {anreise: "Flug nach Los Angeles, ca. 12 Std.", unterwegs: "Mietwagen ca. 64–70 Std., Flug Miami–New York", highlights: "Monument Valley, New Orleans, Kennedy Space Center, Key Largo, New York"},
      name: "USA Süd (Los Angeles – Florida – New York)",
      zusatz: "Roadtrip vom Südwesten über die Golfküste nach Florida, dann Flug nach New York",
      passt: "Nationalparks, ein grosser Roadtrip, Städte des Südens, Strand in Destin, Key Largo und Miami und zum Schluss New York im Vordergrund stehen, ihr viele Fahrtage in Kauf nehmt und das höhere Budget (rund {mehrkosten} CHF mehr) passt.",
      kurz: "Fünf Wochen USA: mit dem Mietwagen von Los Angeles über Las Vegas, Kanab, Monument Valley, Albuquerque und White Sands nach Texas, über Austin und New Orleans an den Strand von Destin, nach Orlando, Key Largo und Miami; dann Inlandflug nach New York.",
      route: "Los Angeles, Las Vegas, Kanab, Monument Valley, Albuquerque, White Sands, (Roswell) Fort Stockton, Austin, New Orleans, Destin, Orlando, Key Largo, Miami, (Flug) New York",
      stationen: "13 Stationen und 1 Zwischenübernachtung",
      laender: "USA (Kalifornien bis Florida, New York)",
      hinflug: "Zürich–Los Angeles ca. 12,25 Std. direkt mit SWISS (im Sommer 2026 täglich ausser Do); Hin- und Rückflug für alle vier ca. 4’000 CHF",
      rueckflug: "Direktflug New York (JFK)–Zürich ca. 7,75–8 Std. (SWISS, täglich) am Mi, 21.07.2027, Ankunft Do, 22.07.2027 am Morgen; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Einwegmiete Los Angeles–Miami (ca. 28 Tage), Inlandflug Miami–New York (ca. 3–3,5 Std.)",
      tempo: "Ca. 57–60 Std. reine Fahrzeit (ca. 5’550 km), realistisch mit Pausen und Stau ca. 64–70 Std. im Auto, an 12 Fahrtagen: Austin–New Orleans ca. 8 Std. (realistisch ca. 9,5–10 Std.), 5 Tage mit 4,5–7 Std., die übrigen 1–5 Std.; dazu ein Inlandflug.",
      gesamt: "Ca. 104–111 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Mietwagen zusammen ca. 31 Std., der Inlandflug nach New York mit Transfers ca. 7 Std. und ca. 64–70 Std. im Auto. Uhr −6 bis −9 Std., Jetlag vor allem nach der Rückkehr.",
      wetter: "Im Südwesten Ende Juni 38–45 °C, ab Juli Monsungewitter; Texas, die Golfküste und Florida heiss und feucht (ca. 32–33 °C) mit Gewittern am Nachmittag, Hurrikansaison mit Höhepunkt erst ab Mitte August; New York heiss und schwül.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Nationalparks, auf der Route nur bei den Optionen Zion, Bryce Canyon oder Everglades-Nationalpark (Jahrespass für Nicht-Residenten 250 USD).",
      hoehepunkte: "Santa Monica und Griffith Observatory in Los Angeles, Las Vegas, rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak und Meow Wolf, White Sands, UFO-Museum in Roswell, Fledermäuse in Austin, New Orleans, weisse Strände bei Destin, Universal und Kennedy Space Center, Everglades, drei Nächte Key Largo mit Korallenriff, Miami Beach, New York.",
      teens: "Santa Monica Pier und Venice Beach, Barton Springs und Fledermäuse in Austin, Sandboarding auf den Dünen bei Kanab und auf White Sands, UFO-Museum, Sumpftour, Raketen im Kennedy Space Center mit Alligatoren, Strand in Destin, Universal, Airboat und Schnorcheln am Riff, New York.",
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
      steckbrief: {anreise: "Flug nach Los Angeles, ca. 12 Std.", unterwegs: "Mietwagen ca. 75–84 Std.", highlights: "Monument Valley, Space Center Houston, New Orleans, Chicago, Niagara"},
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
    asien: {
      steckbrief: {anreise: "Flug nach Singapur, ca. 12–13 Std.", unterwegs: "Bus, Transfer, Zug und Fähre ca. 54–64 Std.", highlights: "Tioman, Malakka, Taman Negara, Perhentian, Koh Tao, Bangkok"},
      name: "Malaysia / Thailand",
      zusatz: "von Singapur über Malakka, Kuala Lumpur, Taman Negara und die Perhentians nach Bangkok",
      passt: "Schnorcheln, tropische Inseln und Strand im Vordergrund stehen, ihr dazu Malakka, Kuala Lumpur, Regenwald, Singapur und Bangkok erleben möchtet.",
      kurz: "Fünf Wochen über Land und Wasser: Singapur, Tioman, Malakka, Kuala Lumpur, der Regenwald von Taman Negara, die Perhentians, der Golf von Thailand und Bangkok.",
      route: "Singapur, Pulau Tioman, Malakka, Kuala Lumpur, Taman Negara, Perhentian Islands, (über Hat Yai) Khanom, Koh Samui, Koh Tao, Hua Hin, Bangkok",
      stationen: "11 Stationen und 1 Zwischenübernachtung",
      laender: "Singapur, Malaysia, Thailand",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std.",
      rueckflug: "Direktflug Bangkok–Zürich ca. 11,5–12 Std. am Do, 22.07.2027 um die Mittagszeit, Ankunft am Abend; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Keine Flüge dazwischen, alles per Bus, privatem Transfer, Zug und Fähre",
      tempo: "Ca. 45–54 Std. reine Reisezeit mit Bus, Transfer, Zug und Fähre, realistisch mit Wartezeiten ca. 54–64 Std.; längster Reisetag Perhentian–Hat Yai mit ca. 8–9 Std., direkt danach Hat Yai–Khanom (ca. 5–6 Std.); weitere längere Tage Singapur–Tioman, Tioman–Malakka, Taman Negara–Perhentian und Koh Tao–Hua Hin (je ca. 5–7 Std.); meist 2–4 Nächte pro Station",
      gesamt: "Ca. 90–102 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), ca. 2 Std. Wartezeit am Flughafen, Flüge und Transfers zusammen ca. 36–38 Std., dazu ca. 54–64 Std. mit Bus, Transfer, Zug und Fähre; niemand muss selber fahren. Uhr +6 Std. (Thailand +5 Std.), Jetlag vor allem nach der Ankunft.",
      wetter: "Malakka, Kuala Lumpur, Taman Negara und Bangkok mit kurzen Gewittern am Nachmittag; die Ostküste Malaysias (Tioman, Perhentian) und der Golf von Thailand (Samui, Tao) sind meist ruhiger.",
      einreise: "Singapur und Malaysia visafrei. Thailand: seit 15.09.2026 nur noch 30 Tage visafrei und höchstens zwei Landgrenz-Einreisen pro Jahr, Länderliste prüfen. Online-Anmeldungen (SG Arrival Card, MDAC, TDAC).",
      hoehepunkte: "Schnorcheln auf Tioman, den Perhentians, Samui und Koh Tao, Altstadt von Malakka, Hängebrücken und Nachtwanderung in Taman Negara, Delfine bei Khanom, Ang Thong, Grand Palace und Wat Arun in Bangkok.",
      teens: "Schnorcheln, Inselhopping, Nachtwanderung im Dschungel, Hängebrücken, Wasserparks, Sentosa mit Universal Studios, Kajak.",
      pro: [
        "Die meisten Schnorchel- und Strandtage",
        "Warmes Meer (ca. 29 °C) mit Riffen und Schildkröten",
        "Malakka, Kuala Lumpur, Taman Negara, Singapur und Bangkok",
        "Niemand muss selber fahren",
        "Günstig (ca. {plan:asien} CHF)"
      ],
      contra: [
        "Viele Umstiege mit Gepäck",
        "Ein Reisetag mit 8–9 Std., viele Ortswechsel",
        "Regenzeit und schwüle Hitze",
        "Dengue-Mücken, kein Leitungswasser",
        "Jetlag (+6 Std.), viel CO₂"
      ]
    },
    malaysia: {
      steckbrief: {anreise: "Flug nach Singapur, ca. 12–13 Std.", unterwegs: "Bus, Transfer und Boot, ein kurzer Flug nach Bangkok", highlights: "Tioman, Taman Negara, Perhentian, Redang, Bangkok"},
      name: "Singapur / Malaysia / Bangkok",
      zusatz: "Inseln und Regenwald an der Ostküste Malaysias, zum Schluss Bangkok",
      passt: "Inseln, Schnorcheln und Dschungel im Vordergrund stehen und ihr Busse, Transfers, Boote und einen kurzen Flug in Kauf nehmt.",
      kurz: "Fünf Wochen Singapur, Malaysia und Bangkok: Singapur, Tioman, Cherating, Taman Negara, die Inseln Perhentian und Redang, Kuala Lumpur und zum Schluss Bangkok.",
      route: "Singapur, (Bus, Fähre) Pulau Tioman, Cherating, (Transfer) Taman Negara, Perhentian Islands, Pulau Redang, (Transfer) Kuala Lumpur, (Flug) Bangkok",
      stationen: "8 Stationen",
      laender: "Singapur, Malaysia, Thailand",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std. (SWISS) am Sa, 19.06.2027 am Abend, Ankunft So am Nachmittag",
      rueckflug: "Direktflug Bangkok–Zürich ca. 11,5–12 Std. (SWISS) am Do, 22.07.2027 um die Mittagszeit, Ankunft am Abend; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Fernbus, private Transfers, Speedboote und Fähren, dann ein kurzer Flug Kuala Lumpur–Bangkok",
      tempo: "Niemand muss selber fahren: Bus und Transfers je ca. 3–5,5 Std., dazu Boote; längster Reisetag Taman Negara–Perhentian ca. 6–7 Std., Redang–Kuala Lumpur ca. 6–6,5 Std.; ein kurzer Flug am Schluss; überall 3–5 Nächte.",
      gesamt: "Ca. 68–75 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Langstreckenflüge mit Wartezeiten, Einreise und Transfers zusammen ca. 32 Std., Bus, Transfers und Boote ca. 30–34 Std., ein kurzer Flug mit Transfers ca. 5–6 Std. Uhr +6 Std. (Thailand +5 Std.).",
      wetter: "Beste Zeit an der Ostküste Malaysias (März bis Oktober): ruhige See, klares Wasser, ca. 30–32 °C; im Landesinneren und in Kuala Lumpur schwül mit Gewittern; in Bangkok Regenzeit mit kurzen, heftigen Schauern; Meer ca. 28–30 °C.",
      einreise: "Singapur, Malaysia und Thailand visumfrei (SG Arrival Card, MDAC, TDAC online vor der Ankunft; Thailand bis 30 Tage, Stand vorab prüfen).",
      hoehepunkte: "Gardens by the Bay und Universal Studios, Dschungelinsel Tioman, Glühwürmchen bei Cherating, Regenwald von Taman Negara mit Hängebrücken, Schildkröten und Riffhaie auf den Perhentians, klares Wasser auf Redang, Petronas Towers und Batu Caves, Grand Palace und Ayutthaya in Bangkok.",
      teens: "Universal Studios, Schnorcheln mit Schildkröten und Riffhaien, Surfkurs, Glühwürmchen, Nachtwanderung im Dschungel, Bootsfahrt durch Stromschnellen, Sunway Lagoon, Tempel und Märkte in Bangkok.",
      pro: [
        "Beste Reisezeit an der Ostküste",
        "Inseln: Perhentian, Redang, Tioman",
        "Regenwald, Schildkröten, Glühwürmchen",
        "Bangkok zum Schluss, ein einziger kurzer Flug",
        "Günstig (ca. {plan:malaysia} CHF)"
      ],
      contra: [
        "Viele Transfers mit Bus, Van und Boot",
        "Lange Anreise, Jetlag (+6 Std.)",
        "Fähren von Gezeiten und Wetter abhängig",
        "Dengue, Blutegel im Dschungel",
        "Teils wie Malaysia / Thailand"
      ]
    },
    suedkorea: {
      steckbrief: {anreise: "Flug nach Seoul, ca. 11,5 Std.", unterwegs: "Expressbus und Zug, zwei kurze Inlandflüge, Mietwagen auf Jeju", highlights: "Seoul, Seoraksan, Gyeongju, Busan, Jeju"},
      name: "Südkorea",
      zusatz: "Seoul, Berge und Ostküste, Gyeongju, Busan und die Vulkaninsel Jeju",
      passt: "Städte, Kultur, Essen und Natur gemischt sein sollen, ihr Sicherheit und kurze Etappen schätzt und mit Regentagen in der Regenzeit leben könnt.",
      kurz: "Knapp fünf Wochen Südkorea: Seoul, Sokcho mit dem Nationalpark Seoraksan, Gangneung, die Königsstadt Gyeongju, Busan, Tongyeong, neun Nächte auf Jeju und zum Schluss nochmals Seoul.",
      route: "Seoul, (Bus) Sokcho / Seoraksan, Gangneung, (Zug) Gyeongju, Busan, (Bus) Tongyeong, (Flug) Jeju Westküste, (Mietwagen) Seogwipo, (Flug) Seoul",
      stationen: "9 Stationen",
      laender: "Südkorea",
      hinflug: "Direktflug Zürich–Seoul ca. 11,5 Std. (Korean Air) am Sa, 19.06.2027 am Abend, Ankunft So am Nachmittag",
      rueckflug: "Direktflug Seoul–Zürich ca. 13,5 Std. (Korean Air) am Do, 22.07.2027 am Vormittag, Ankunft am Abend; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Expressbusse und Züge, zwei kurze Inlandflüge (Busan–Jeju, Jeju–Seoul), auf Jeju ein Mietwagen",
      tempo: "Kurze Etappen: Bus und Zug meist 1–3 Std., längster Reisetag ohne Flug Gangneung–Gyeongju ca. 4–5,5 Std.; zwei Flugtage mit je ca. 5–6 Std. Tür zu Tür; selber fahren nur auf Jeju; meist 3–5 Nächte.",
      gesamt: "Ca. 61–68 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Langstreckenflüge mit Wartezeiten, Einreise und Transfers zusammen ca. 40 Std., Bus, Zug und Mietwagen ca. 11–16 Std., zwei Inlandflüge mit Transfers zusammen ca. 10–12 Std. Uhr +7 Std.",
      wetter: "Regenzeit (Jangma) von ca. Ende Juni bis Ende Juli: oft heftiger Regen, dazwischen schwül-heiss mit ca. 28–32 °C; ab Juli Taifune möglich, vor allem auf Jeju und in Busan; Meer ca. 21–25 °C.",
      einreise: "Visumfrei bis 90 Tage. K-ETA für die Schweiz bis 31.12.2026 ausgesetzt, Stand für 2027 vorab prüfen; e-Arrival Card online.",
      hoehepunkte: "Paläste und Hanok-Viertel in Seoul, Granitberge von Seoraksan, Königsgräber und Bulguksa in Gyeongju, Strände und Gamcheon in Busan, Seilbahn und Luge in Tongyeong, Vulkankrater, Lavahöhlen und Wasserfälle auf Jeju, die DMZ.",
      teens: "K-Pop und Street-Food in Seoul, Lotte World, Seilbahnen, Schienenvelo, Velotour in Gyeongju, Skyline Luge, Surfkurs auf Jeju, Hallasan, DMZ-Tour.",
      pro: [
        "Sehr sicher, sauber, Leitungswasser trinkbar",
        "Städte, Kultur und Natur gemischt",
        "Kurze Etappen mit Bus und Zug",
        "Neun Nächte auf der Vulkaninsel Jeju",
        "Keine Dengue, keine Impfungen nötig"
      ],
      contra: [
        "Die ganze Reise in der Regenzeit",
        "Taifune ab Juli möglich",
        "Meer kühler, kaum Schnorcheln",
        "Lange Flüge, Jetlag (+7 Std.)",
        "Teurer als Asien (ca. {plan:suedkorea} CHF)"
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
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ],
      malaysia: [4, "Regenwald von Taman Negara, Dschungel und Wasserfälle auf Tioman, Inseln und Riffe der Ostküste, Mangroven mit Glühwürmchen; eher sanfte als dramatische Landschaften."],
      suedkorea: [4, "Granitgipfel und Wasserfälle in Seoraksan, die Inselwelt bei Tongyeong, auf Jeju Vulkankrater, Lavahöhlen, Wasserfälle am Meer und der Hallasan; dazwischen viele Tage in Städten."],
    },
    {
      kriterium: "Dschungelfeeling",
      marokko: [0, "Kein Regenwald: Steinwüste, Palmengärten in Marrakesch und grüne Hügel im Baskenland."],
      usa: [1, "Kein Regenwald; Sümpfe in Louisiana und Mangroven in den Everglades."],
      usamitte: [1, "Kein Regenwald; Sümpfe in Louisiana."],
      asien: [
        4,
        "Taman Negara, einer der ältesten Regenwälder der Welt, mit Hängebrücken, Nachtwanderung und Bootsfahrt, dazu der Dschungel auf Tioman."
      ],
      malaysia: [4, "Taman Negara, einer der ältesten Regenwälder der Welt, mit Hängebrücken und Nachtwanderung, dazu der Dschungel auf Tioman."],
      suedkorea: [1, "Kein Dschungel; dichte Wälder in Seoraksan und der Gotjawal-Wald auf Jeju."],
    },
    {
      kriterium: "Wüstenfeeling",
      marokko: [
        3,
        "Eine Nacht im Zeltcamp in der Agafay-Steinwüste bei Marrakesch mit Kamelritt und Blick auf den Atlas, dazu die Wüste von Tabernas am Cabo de Gata als Abstecher; keine Sanddünen wie in der Sahara und im Juli sehr heiss."
      ],
      usa: [4, "Mojave um Las Vegas, rote Felswüsten in Utah und Arizona, Monument Valley, die weissen Gipsdünen von White Sands und die Chihuahua-Wüste in Westtexas."],
      usamitte: [4, "Mojave um Las Vegas, rote Felsen und Dünen bei Kanab, Monument Valley und die Wüste New Mexicos; danach Prärie."],
      asien: [0, "Keine Wüste: tropische Inseln, Regenwald und Städte."],
      malaysia: [0, "Keine Wüste: Regenwald und tropische Inseln."],
      suedkorea: [0, "Keine Wüste."],
    },
    {
      kriterium: "Strand und Baden",
      marokko: [
        4,
        "Vier Nächte auf Formentera, dazu Costa Brava, Benidorm, Cabo de Gata, Tarifa, Cádiz, Algarve und San Sebastián; im Juli voll."
      ],
      usa: [3, "Santa Monica am Pazifik, vier Nächte an den weissen Stränden bei Destin, drei Nächte in Key Largo und drei in Miami mit Miami Beach, Wasser ca. 28–31 °C; dazwischen viele Tage ohne Meer."],
      usamitte: [1, "Santa Monica am Pazifik, Galveston als Option, Stadtstrände am Michigansee und der Strand am Eriesee bei Cedar Point; kein warmes, klares Meer."],
      asien: [
        5,
        "Tioman, Perhentian Islands, Khanom, Koh Samui, Koh Tao und Hua Hin: tropische Strände mit ca. 29 °C warmem Wasser an fast jeder zweiten Station."
      ],
      malaysia: [5, "Perhentian, Redang, Tioman und Cherating: tropische Strände mit ca. 28–30 °C warmem Wasser an fast der Hälfte der Tage."],
      suedkorea: [3, "Stadtstrände in Busan, Strände an der Ostküste (Badesaison erst ab Juli) und Hyeopjae und Jungmun auf Jeju; Wasser ca. 21–25 °C, Regentage und Taifune können Strandtage kosten."],
    },
    {
      kriterium: "Schnorcheln",
      marokko: [
        3,
        "Gutes Mittelmeer-Schnorcheln: Meeresschutzgebiet der Medes-Inseln mit grossen Fischen, vier Nächte auf Formentera (Cala Saona, Es Caló, Seegraswiesen mit sehr klarem Wasser) und das Cabo de Gata (Los Escullos, Cala de San Pedro); wenige Korallen, keine Riffe und kühleres Wasser als in den Tropen."
      ],
      usa: [2, "Drei Nächte in Key Largo mit Bootstour zum einzigen Korallenriff an der Festlandküste der USA, dazu die Steinmolen bei Destin; das Riff ist weniger farbig als in Südostasien."],
      usamitte: [0, "Kein Schnorcheln auf der Route."],
      asien: [
        5,
        "Tioman, Perhentian Islands, Koh Samui und Koh Tao: fast jede Inselstation hat Riffe, Schildkröten und Schnorchelboote."
      ],
      malaysia: [5, "Schildkröten und Riffhaie auf den Perhentians, klares Wasser und Korallengärten auf Redang, Riffe auf Tioman."],
      suedkorea: [1, "Wenig: einzelne Buchten auf Jeju und Bootsausflüge bei Seogwipo, kühleres Wasser und kaum Korallen."],
    },
    {
      kriterium: "Abenteuer",
      marokko: [
        3,
        "Caminito del Rey, Kamelritt, Quad und Nacht im Zeltcamp in der Agafay-Wüste, Medinas mit Führer, Zugfahrten quer durch Marokko, Kajak durch die Grotten der Algarve, Surfen in San Sebastián."
      ],
      usa: [4, "Sandboarding auf den Dünen bei Kanab und auf White Sands, Kletterei durch den Belly of the Dragon, Sumpftour mit Alligatoren, Airboat in den Everglades, Schnorcheln am Riff, ein Roadtrip quer durchs Land."],
      usamitte: [4, "Sandboarding bei Kanab, Jeep-Tour im Monument Valley, Sumpftour mit Alligatoren, Klettern im City Museum, Achterbahnen in Cedar Point, Boot in die Gischt der Niagarafälle, ein Roadtrip quer durchs Land."],
      asien: [4, "Nachtwanderung im Dschungel, Hängebrücken und Bootsfahrt durch Stromschnellen in Taman Negara, Schnorcheln mit Riffhaien, Kajak, Inselhopping."],
      malaysia: [4, "Nachtwanderung im Dschungel, Bootsfahrt durch Stromschnellen, Schnorcheln mit Riffhaien, Surfkurs, Glühwürmchen-Tour."],
      suedkorea: [3, "Wanderung auf den Hallasan oder in Seoraksan, Lavahöhle, Surfkurs, Skyline Luge, Schienenvelo, DMZ-Tour."],
    },
    {
      kriterium: "Städte",
      marokko: [
        5,
        "Barcelona, Valencia, Casablanca, Marrakesch, Fès, Cádiz, Sevilla, Lissabon, Porto, San Sebastián und Carcassonne: europäische und marokkanische Städte im Wechsel."
      ],
      usa: [5, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Austin, New Orleans, Miami und New York mit Museen und Aussichtsplattformen."],
      usamitte: [5, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Fort Worth, Houston, New Orleans, Memphis, St. Louis, Chicago und New York."],
      asien: [4, "Singapur, die Altstadt von Malakka (UNESCO), Kuala Lumpur und Bangkok mit Street-Food, Tempeln und Aussichtstürmen; an der Ostküste Dörfer und Kleinstädte."],
      malaysia: [4, "Singapur, Kuala Lumpur und Bangkok mit Street-Food, Tempeln, Märkten und Aussichtstürmen."],
      suedkorea: [5, "Seoul als Weltstadt mit Palästen, Hanok-Vierteln und K-Pop, dazu Busan und die alte Königsstadt Gyeongju (UNESCO)."],
    },
    {
      kriterium: "Gesundheit und Sicherheit",
      marokko: [
        4,
        "Rund vier von fünf Wochen in Spanien, Portugal und Frankreich, dort unkompliziert. In Marokko (6 Nächte) keine Krankenversicherungskarte, kein Leitungswasser und auf Hygiene beim Essen achten; das grösste Risiko ist die Hitze in Marrakesch, in der Agafay-Wüste und in Fès (38–42 °C)."
      ],
      usa: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten, Hurrikansaison an der Golfküste und in Florida."],
      usamitte: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten und an der Golfküste, Gewitter."],
      asien: [
        3,
        "Singapur sehr sicher; in Malaysia und Thailand Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären; auf den Inseln (Tioman, Perhentian) ist ein Spital weit weg, Bootsfahrten bei Wellengang."
      ],
      malaysia: [4, "Singapur und Malaysia sicher mit guter Versorgung in den Städten; Dengue, Blutegel im Dschungel, auf den Inseln nur einfache Kliniken, kein Leitungswasser in Malaysia."],
      suedkorea: [5, "Sehr sicher, ausgezeichnete Spitäler, Leitungswasser trinkbar, keine besonderen Impfungen und kaum Dengue; Hitze, Starkregen und Taifune beachten."],
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      marokko: [4, "ca. {plan:marokko} CHF: kein Flug, Supercharging gratis, Marokko günstig; dafür Fähren und Züge in Marokko sowie Parkplatz in Tarifa."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Einwegmiete, Inlandflug und Unterkünfte in Destin, Key Largo, Miami und New York."],
      usamitte: [1, "ca. {plan:usamitte} CHF: vor allem Einwegmiete, Unterkünfte in Los Angeles, Chicago und New York."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."],
      malaysia: [4, "ca. {plan:malaysia} CHF: Langstreckenflug und ein kurzer Flug, sonst günstig."],
      suedkorea: [3, "ca. {plan:suedkorea} CHF: Langstreckenflüge in der Hochsaison, Unterkünfte in Seoul, Busan und auf Jeju; Essen und Verkehr günstig."],
    },
    {
      kriterium: "Reisekomfort",
      marokko: [
        3,
        "Ca. 96–103 Stunden Tür zu Tür, kein Jetlag, in Marokko kein Fahren; aber Wechsel zwischen eigenem Auto, Fähre und Zug, Passkontrollen, ein langer Zugtag Marrakesch–Fès und mehrere Tage mit 7–9 Stunden."
      ],
      usa: [1, "Ca. 104–111 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, ein Inlandflug, dazu viel Zeit im Auto (ca. 64–70 Stunden an 12 Fahrtagen, ein Tag mit ca. 9,5–10 Stunden)."],
      usamitte: [1, "Ca. 108–118 Stunden Tür zu Tür: zwei Langstreckenflüge mit Jetlag (−9 Std.) und die meiste Zeit im Auto (ca. 75–84 Stunden an 15 Fahrtagen, drei Fahrtage hintereinander durch Texas)."],
      asien: [
        2,
        "Ca. 90–102 Stunden Tür zu Tür: zwei Direktflüge mit Jetlag, dazu ca. 54–64 Stunden mit Bus, Transfer, Zug und Fähre (ein Reisetag mit ca. 8–9 Stunden) und viele Umstiege mit Gepäck; niemand muss selber fahren."
      ],
      malaysia: [3, "Ca. 68–75 Stunden Tür zu Tür: zwei lange Direktflüge mit Jetlag, Busse, Transfers und Boote mit Gepäck, zum Schluss ein kurzer Flug; niemand muss selber fahren."],
      suedkorea: [4, "Ca. 61–68 Stunden Tür zu Tür: zwei lange Direktflüge mit Jetlag (+7 Std.), sonst kurze Etappen mit pünktlichen Bussen und Zügen, zwei kurze Inlandflüge, selber fahren nur auf Jeju."],
    },
    {
      kriterium: "CO₂ und Umwelt (mehr Punkte = weniger CO₂)",
      marokko: [
        5,
        "Kein Flug: Elektroauto (ca. 1’100 kWh), zwei kurze Fähren, Züge in Marokko (ohne Mietwagen); grob geschätzt ca. 0,1–0,2 t CO₂ pro Person."
      ],
      usa: [1, "Zwei Langstreckenflüge und ein Inlandflug (zusammen ca. 17’700 km) und ca. 5’550 km Mietwagen, grob geschätzt ca. 3,7 t CO₂ pro Person."],
      usamitte: [1, "Zwei Langstreckenflüge (zusammen ca. 15’800 km) und ca. 6’700 km Mietwagen, grob geschätzt ca. 3,6 t CO₂ pro Person."],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ],
      malaysia: [1, "Zwei Langstreckenflüge (ca. 19’500 km) und ein kurzer Flug (ca. 1’200 km), grob geschätzt ca. 3,9 t CO₂ pro Person."],
      suedkorea: [1, "Zwei Langstreckenflüge (zusammen ca. 19’000 km, um Russland herum) und zwei Inlandflüge (zusammen ca. 750 km), grob geschätzt ca. 3,8 t CO₂ pro Person."],
    }
  ]
};
