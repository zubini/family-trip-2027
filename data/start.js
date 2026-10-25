// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/marokko.js usw.).
// Platzhalter in Texten: {plan:marokko}, {plan:usa}, {plan:usaost}, {plan:usamitte}, {plan:asien} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// Pro/Contra: je 5 kurze Stichworte. Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Ab Sa, 19.06.2027, bis spätestens Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen beginnen am Sa, 19.06.2027 und sind für die Familie mit Sohn (12) und Tochter (14) geplant. Die Reise mit dem eigenen Auto dauert bis Sa, 24.07.2027 (35 Nächte); die Flugreisen enden schon am Do, 22.07.2027 (32 Nächte), damit zwei Tage gegen den Jetlag bleiben. Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.",
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
      zusatz: "Roadtrip vom Südwesten über die Golfküste nach Florida, dann Washington und New York",
      passt: "Nationalparks, ein grosser Roadtrip, Städte des Südens, Strand in Destin und Miami und zum Schluss Washington und New York im Vordergrund stehen, ihr viele Fahrtage in Kauf nehmt und das höhere Budget (rund {mehrkosten} CHF mehr) passt.",
      kurz: "Fünf Wochen USA: mit dem Mietwagen von Los Angeles über Las Vegas, Kanab, Monument Valley, Albuquerque und White Sands nach Texas, über San Antonio und New Orleans an den Strand von Destin, nach Orlando und Miami; dann Inlandflug nach Washington und Zug nach New York.",
      route: "Los Angeles, Las Vegas, Kanab, Monument Valley, Albuquerque, White Sands, (Roswell) Fort Stockton, San Antonio, New Orleans, Destin, Orlando, Miami, (Flug) Washington, (Zug) New York",
      stationen: "13 Stationen und 1 Zwischenübernachtung",
      laender: "USA (Nevada bis Florida, Washington, New York)",
      hinflug: "Zürich–Los Angeles ca. 12,25 Std. direkt mit SWISS (im Sommer 2026 täglich ausser Do); Hin- und Rückflug für alle vier ca. 4’000 CHF",
      rueckflug: "Direktflug New York (JFK)–Zürich ca. 7,75–8 Std. (SWISS, täglich) am Mi, 21.07.2027, Ankunft Do, 22.07.2027 am Morgen; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Einwegmiete Los Angeles–Miami (ca. 25 Tage), Inlandflug Miami–Washington (ca. 2,5–3 Std.), Amtrak Washington–New York (ca. 3–3,5 Std.)",
      tempo: "Ca. 55–58 Std. reine Fahrzeit (ca. 5’350 km), realistisch mit Pausen und Stau ca. 63–69 Std. im Auto, an 11 Fahrtagen: San Antonio–New Orleans ca. 8–8,5 Std. (realistisch ca. 9,5–10 Std.), 4 Tage mit 5–7 Std., die übrigen 2,5–5 Std.; dazu ein Inlandflug und ein Zug im Osten.",
      gesamt: "Ca. 107–114 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Mietwagen zusammen ca. 31 Std., der Inlandflug nach Washington mit Transfers ca. 7 Std., der Zug nach New York ca. 4 Std. und ca. 63–69 Std. im Auto. Uhr −6 bis −9 Std., Jetlag vor allem nach der Rückkehr.",
      wetter: "Im Südwesten Ende Juni 38–45 °C, ab Juli Monsungewitter; Texas, die Golfküste und Florida heiss und feucht (ca. 32–33 °C) mit Gewittern am Nachmittag, Hurrikansaison mit Höhepunkt erst ab Mitte August; Washington und New York heiss und schwül.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Nationalparks, auf der Route nur bei den Optionen Zion, Bryce Canyon oder Everglades-Nationalpark (Jahrespass für Nicht-Residenten 250 USD).",
      hoehepunkte: "Santa Monica und Griffith Observatory in Los Angeles, Las Vegas, rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak und Meow Wolf, White Sands, UFO-Museum in Roswell, Alamo, New Orleans, weisse Strände bei Destin, Universal und Kennedy Space Center, Everglades, Korallenriff bei Key Largo, Miami Beach, Smithsonian-Museen in Washington, New York.",
      teens: "Santa Monica Pier und Venice Beach, Sandboarding auf den Dünen bei Kanab und auf White Sands, UFO-Museum, Sumpftour, Raketen im Kennedy Space Center mit Alligatoren, Strand in Destin, Universal, Airboat und Schnorcheln am Riff, Air and Space Museum, New York.",
      pro: [
        "Monument Valley, Horseshoe Bend, White Sands",
        "Los Angeles, Las Vegas und New York",
        "Universal und Kennedy Space Center",
        "Strand in Santa Monica, Destin und Miami",
        "Ab Washington ohne Auto"
      ],
      contra: [
        "Am teuersten (ca. {plan:usa} CHF)",
        "Ca. 63–69 Std. im Auto",
        "Ein Fahrtag mit ca. 9,5–10 Std.",
        "Wüstenhitze bis 45 °C",
        "Jetlag (−9 Std.), drei Flüge, viel CO₂"
      ]
    },
    usaost: {
      name: "USA Ostküste (Miami – Niagara – New York)",
      zusatz: "Roadtrip nur mit dem Mietwagen: Florida, Städte des Südens, Strände, Washington, Niagara und New York",
      passt: "Strand und Riff in Florida, Freizeitparks, Städte des Südens, Niagara und New York im Vordergrund stehen, ihr den Westen schon kennt und lieber weniger fahrt als auf den anderen USA-Reisen.",
      kurz: "Fünf Wochen an der Ostküste der USA nur mit dem Mietwagen: von Miami über Key Largo, Orlando, Savannah, Charleston und die Outer Banks nach Washington, über Hershey zu den Niagarafällen und durch die Finger Lakes nach New York.",
      route: "Miami, Key Largo, Orlando, Savannah, Charleston, Outer Banks, Washington, Hershey, Niagarafälle, Finger Lakes, New York",
      stationen: "11 Stationen",
      laender: "USA (Florida bis New York)",
      hinflug: "Zürich–Miami ca. 10,5 Std. direkt mit SWISS (im Sommer 2026 täglich)",
      rueckflug: "Direktflug New York (JFK)–Zürich ca. 7,75–8 Std. (SWISS, täglich) am Mi, 21.07.2027, Ankunft Do, 22.07.2027 am Morgen; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Einwegmiete Miami–New York (ca. 28 Tage), kein Inlandflug, in New York ohne Auto",
      tempo: "Ca. 38–42 Std. reine Fahrzeit (ca. 3’700 km), realistisch mit Pausen und Stau ca. 44–50 Std. im Auto, an 10 Fahrtagen: Charleston–Outer Banks ca. 7–7,75 Std., Hershey–Niagarafälle ca. 5,75–6,25 Std., die übrigen 1–5 Std.; fast überall drei Nächte.",
      gesamt: "Ca. 76–82 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Mietwagen zusammen ca. 29 Std. und ca. 44–50 Std. im Auto. Uhr −6 Std.",
      wetter: "Florida, Georgia und South Carolina heiss und sehr schwül (ca. 32–33 °C) mit Gewittern am Nachmittag, Washington oft heiss, an den Niagarafällen und in den Finger Lakes angenehmer (ca. 26–29 °C); Hurrikansaison mit Höhepunkt erst ab Mitte August.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Kein Nationalpark-Jahrespass nötig; Wright Brothers Memorial 10 USD pro Person ab 16. Nach Kanada (Niagara) zu Fuss mit dem Pass.",
      hoehepunkte: "South Beach und Airboat in den Everglades, Korallenriff bei Key Largo, Universal und Kennedy Space Center, Savannah und Charleston, Dünen und wilde Pferde auf den Outer Banks, Smithsonian-Museen in Washington, Hersheypark, Niagarafälle, Schluchten der Finger Lakes, New York.",
      teens: "Schnorcheln am Riff, Universal, Raketen im Kennedy Space Center, Geistertour in Savannah, wilde Pferde, Air and Space Museum, Achterbahnen und Schokolade in Hershey, Maid of the Mist, New York.",
      pro: [
        "Strand und Riff in Florida, viele Strandtage",
        "Universal, Kennedy Space Center, Hersheypark",
        "Savannah, Charleston, Washington",
        "Niagarafälle und New York zum Schluss",
        "Am wenigsten Fahren der USA-Reisen, −6 Std."
      ],
      contra: [
        "Teuer (ca. {plan:usaost} CHF)",
        "Ca. 44–50 Std. im Auto",
        "Ein Fahrtag mit 7–7,75 Std.",
        "Keine Wüste, keine grossen Nationalparks",
        "Schwüle Hitze im Süden"
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
      usaost: [3, "Everglades am Rand, Korallenriff bei Key Largo, Dünen und wilde Pferde auf den Outer Banks, Niagarafälle und die Schluchten der Finger Lakes; schöne Küsten und Wasserfälle, aber keine grossen Nationalparks."],
      usamitte: [4, "Rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak, Sümpfe in Louisiana, Niagarafälle und die Schlucht von Watkins Glen; abwechslungsreich, aber ohne die grossen Nationalparks."],
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ]
    },
    {
      kriterium: "Dschungelfeeling",
      marokko: [0, "Kein Regenwald: Steinwüste, Palmengärten in Marrakesch und grüne Hügel im Baskenland."],
      usa: [1, "Kein Regenwald; Sümpfe in Louisiana und Mangroven in den Everglades."],
      usaost: [1, "Kein Regenwald; Mangroven in Key Largo und Sümpfe der Everglades."],
      usamitte: [1, "Kein Regenwald; Sümpfe in Louisiana."],
      asien: [
        3,
        "Dschungelwanderung auf Tioman, Wasserfälle und Inselwälder; kein grosser zusammenhängender Regenwald auf der Route."
      ]
    },
    {
      kriterium: "Wüstenfeeling",
      marokko: [
        3,
        "Eine Nacht im Zeltcamp in der Agafay-Steinwüste bei Marrakesch mit Kamelritt und Blick auf den Atlas, dazu die Wüste von Tabernas am Cabo de Gata als Abstecher; keine Sanddünen wie in der Sahara und im Juli sehr heiss."
      ],
      usa: [4, "Mojave um Las Vegas, rote Felswüsten in Utah und Arizona, Monument Valley, die weissen Gipsdünen von White Sands und die Chihuahua-Wüste in Westtexas."],
      usaost: [0, "Keine Wüste; nur Küstendünen auf den Outer Banks."],
      usamitte: [4, "Mojave um Las Vegas, rote Felsen und Dünen bei Kanab, Monument Valley und die Wüste New Mexicos; danach Prärie."],
      asien: [0, "Keine Wüste: tropische Inseln, Regenwald und Städte."]
    },
    {
      kriterium: "Strand und Baden",
      marokko: [
        4,
        "Vier Nächte auf Formentera, dazu Costa Brava, Benidorm, Cabo de Gata, Tarifa, Cádiz, Algarve und San Sebastián; im Juli voll."
      ],
      usa: [3, "Santa Monica am Pazifik, drei Nächte an den weissen Stränden bei Destin und vier Nächte in Miami mit Miami Beach, Wasser ca. 28–31 °C; dazwischen viele Tage ohne Meer."],
      usaost: [3, "Miami Beach, drei Nächte in Key Largo, Tybee Island, Folly Beach und drei Nächte auf den Outer Banks, Wasser im Süden ca. 28–31 °C; im Norden Badestellen an Seen."],
      usamitte: [1, "Santa Monica am Pazifik, Galveston als Option, Stadtstrände am Michigansee und der Strand am Eriesee bei Cedar Point; kein warmes, klares Meer."],
      asien: [
        5,
        "Tioman, Perhentian Islands, Khanom, Koh Samui, Koh Tao und Hua Hin: tropische Strände mit ca. 29 °C warmem Wasser an fast jeder zweiten Station."
      ]
    },
    {
      kriterium: "Schnorcheln",
      marokko: [
        3,
        "Gutes Mittelmeer-Schnorcheln: Meeresschutzgebiet der Medes-Inseln mit grossen Fischen, vier Nächte auf Formentera (Cala Saona, Es Caló, Seegraswiesen mit sehr klarem Wasser) und das Cabo de Gata (Los Escullos, Cala de San Pedro); wenige Korallen, keine Riffe und kühleres Wasser als in den Tropen."
      ],
      usa: [2, "Ein Tagesausflug von Miami nach Key Largo mit Bootstour zum einzigen Korallenriff an der Festlandküste der USA, dazu die Steinmolen bei Destin; das Riff ist weniger farbig als in Südostasien."],
      usaost: [2, "Drei Nächte in Key Largo mit Bootstour zum einzigen Korallenriff an der Festlandküste der USA; weniger farbig als in Südostasien."],
      usamitte: [0, "Kein Schnorcheln auf der Route."],
      asien: [
        5,
        "Tioman, Perhentian Islands, Koh Samui und Koh Tao: fast jede Inselstation hat Riffe, Schildkröten und Schnorchelboote."
      ]
    },
    {
      kriterium: "Abenteuer",
      marokko: [
        3,
        "Caminito del Rey, Kamelritt, Quad und Nacht im Zeltcamp in der Agafay-Wüste, Medinas mit Führer, Zugfahrten quer durch Marokko, Kajak durch die Grotten der Algarve, Surfen in San Sebastián."
      ],
      usa: [4, "Sandboarding auf den Dünen bei Kanab und auf White Sands, Kletterei durch den Belly of the Dragon, Sumpftour mit Alligatoren, Airboat in den Everglades, Schnorcheln am Riff, ein Roadtrip quer durchs Land."],
      usaost: [4, "Airboat mit Alligatoren, Schnorcheln am Riff, Kajak in den Mangroven, Pferde-Tour auf den Outer Banks, Achterbahnen in Hersheypark, Boot in die Gischt der Niagarafälle, Schlucht von Watkins Glen."],
      usamitte: [4, "Sandboarding bei Kanab, Jeep-Tour im Monument Valley, Sumpftour mit Alligatoren, Klettern im City Museum, Achterbahnen in Cedar Point, Boot in die Gischt der Niagarafälle, ein Roadtrip quer durchs Land."],
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."]
    },
    {
      kriterium: "Städte",
      marokko: [
        5,
        "Barcelona, Valencia, Casablanca, Marrakesch, Fès, Cádiz, Sevilla, Lissabon, Porto, San Sebastián und Carcassonne: europäische und marokkanische Städte im Wechsel."
      ],
      usa: [5, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, San Antonio, New Orleans, Miami, Washington und New York mit Museen und Aussichtsplattformen."],
      usaost: [5, "Miami, Savannah, Charleston, Washington und New York mit Museen und Aussichtsplattformen."],
      usamitte: [5, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Fort Worth, Houston, New Orleans, Memphis, St. Louis, Chicago und New York."],
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."]
    },
    {
      kriterium: "Gesundheit und Sicherheit",
      marokko: [
        4,
        "Rund vier von fünf Wochen in Spanien, Portugal und Frankreich, dort unkompliziert. In Marokko (6 Nächte) keine Krankenversicherungskarte, kein Leitungswasser und auf Hygiene beim Essen achten; das grösste Risiko ist die Hitze in Marrakesch, in der Agafay-Wüste und in Fès (38–42 °C)."
      ],
      usa: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten, Hurrikansaison an der Golfküste und in Florida."],
      usaost: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); schwüle Hitze und Hurrikansaison im Süden."],
      usamitte: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten und an der Golfküste, Gewitter."],
      asien: [
        3,
        "Singapur sehr sicher; in Malaysia und Thailand Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären; auf den Inseln (Tioman, Perhentian) ist ein Spital weit weg, Bootsfahrten bei Wellengang."
      ]
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      marokko: [4, "ca. {plan:marokko} CHF: kein Flug, Supercharging gratis, Marokko günstig; dafür Fähren und Züge in Marokko sowie Parkplatz in Tarifa."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Einwegmiete, Inlandflug und Unterkünfte in Miami und New York."],
      usaost: [1, "ca. {plan:usaost} CHF: vor allem Einwegmiete, Unterkünfte in Miami, Key Largo, Washington und New York und Freizeitparks."],
      usamitte: [1, "ca. {plan:usamitte} CHF: vor allem Einwegmiete, Unterkünfte in Los Angeles, Chicago und New York."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."]
    },
    {
      kriterium: "Reisekomfort",
      marokko: [
        3,
        "Ca. 96–103 Stunden Tür zu Tür, kein Jetlag, in Marokko kein Fahren; aber Wechsel zwischen eigenem Auto, Fähre und Zug, Passkontrollen, ein langer Zugtag Marrakesch–Fès und mehrere Tage mit 7–9 Stunden."
      ],
      usa: [1, "Ca. 107–114 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, ein Inlandflug, dazu viel Zeit im Auto (ca. 63–69 Stunden an 11 Fahrtagen, ein Tag mit ca. 9,5–10 Stunden und vier mit 5–7 Stunden)."],
      usaost: [3, "Ca. 76–82 Stunden Tür zu Tür: zwei Langstreckenflüge mit wenig Zeitverschiebung (−6 Std.); ca. 44–50 Stunden im Auto an 10 Fahrtagen, nur ein Tag mit 7–7,75 Stunden, fast überall drei Nächte."],
      usamitte: [1, "Ca. 108–118 Stunden Tür zu Tür: zwei Langstreckenflüge mit Jetlag (−9 Std.) und die meiste Zeit im Auto (ca. 75–84 Stunden an 15 Fahrtagen, drei Fahrtage hintereinander durch Texas)."],
      asien: [
        2,
        "Ca. 101–108 Stunden Tür zu Tür: zwei Direktflüge mit Jetlag, dazu ca. 65–70 Stunden mit Bus, Zug und Fähre und viele Umstiege mit Gepäck; niemand muss selber fahren."
      ]
    },
    {
      kriterium: "CO₂ und Umwelt (mehr Punkte = weniger CO₂)",
      marokko: [
        5,
        "Kein Flug: Elektroauto (ca. 1’100 kWh), zwei kurze Fähren, Züge in Marokko (ohne Mietwagen); grob geschätzt ca. 0,1–0,2 t CO₂ pro Person."
      ],
      usa: [1, "Zwei Langstreckenflüge und ein Inlandflug (zusammen ca. 17’500 km) und ca. 5’350 km Mietwagen, grob geschätzt ca. 3,6 t CO₂ pro Person."],
      usaost: [1, "Zwei Langstreckenflüge (zusammen ca. 14’400 km) und ca. 3’700 km Mietwagen, grob geschätzt ca. 2,9 t CO₂ pro Person."],
      usamitte: [1, "Zwei Langstreckenflüge (zusammen ca. 15’800 km) und ca. 6’700 km Mietwagen, grob geschätzt ca. 3,6 t CO₂ pro Person."],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ]
    }
  ]
};
