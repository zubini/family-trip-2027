// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/marokko.js usw.).
// Platzhalter in Texten: {plan:marokko}, {plan:usa}, {plan:usamitte}, {plan:usanordost}, {plan:asien} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// steckbrief: kurze Angaben für die Übersicht «Die Reisen». Pro/Contra: je 5 kurze Stichworte. Bewertung: [Punkte 0–5, Text], relativ zu den anderen Reisen (beste Reise pro Kriterium = 5). Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Ab Sa, 19.06.2027, bis spätestens Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen beginnen am Sa, 19.06.2027, für die Familie mit Sohn (12) und Tochter (14). Zurück sind die Flugreisen am Do, 22.07.2027, die Autoreise am Sa, 24.07.2027. Ein Klick führt zum vollständigen Plan.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Wüstenfeeling, Strand und Baden, Schnorcheln, Abenteuer, Städte, Gesundheit und Sicherheit, Budget, Reisekomfort sowie CO₂ und Umwelt. Die Punkte vergleichen die Reisen untereinander: Die beste Reise in einem Kriterium bekommt 5 Punkte, die anderen im Verhältnis dazu weniger (beim Budget heisst 5: am günstigsten, beim CO₂: am wenigsten Ausstoss); 0 heisst, dass es das auf der Reise nicht gibt. Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
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
      hinflug: "Zürich–Los Angeles ca. 12,25 Std. direkt mit SWISS (im Sommer 2026 täglich ausser Do); Hin- und Rückflug für alle vier geschätzt ca. 4’400–6’000 CHF",
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
      hinflug: "Zürich–Los Angeles ca. 12,25 Std. direkt mit SWISS (im Sommer 2026 täglich ausser Do); Hin- und Rückflug für alle vier geschätzt ca. 4’400–6’000 CHF",
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
        "Ein Gabelflug, kein Inlandflug"
      ],
      contra: [
        "Teuer (ca. {plan:usamitte} CHF)",
        "Ca. 75–84 Std. im Auto, am meisten von allen",
        "Drei Fahrtage hintereinander durch Texas",
        "Kaum Strand, kein warmes Meer",
        "Wüstenhitze, Jetlag (−9 Std.), viel CO₂"
      ]
    },
    usanordost: {
      steckbrief: {anreise: "Flug nach New York, ca. 9 Std.", unterwegs: "Zug nach Washington, Mietwagen ca. 53–60 Std.", highlights: "New York, Washington, Chicago, Niagara, Québec, Boston"},
      name: "USA Nordost / Kanada (New York – Chicago – Montréal – Boston)",
      zusatz: "Rundreise im Nordosten: Washington, Chicago, Niagara, Toronto, Montréal, Québec und Boston",
      passt: "Städte, Geschichte und Kultur im Vordergrund stehen, ihr dazu Seen, Wälder, Niagara und Achterbahnen erleben möchtet, Strand und warmes Meer unwichtig sind und kürzere Flüge mit weniger Jetlag zählen.",
      kurz: "Fünf Wochen Rundreise im Nordosten: New York, mit dem Zug nach Washington, mit dem Mietwagen über Shenandoah und Cedar Point nach Chicago, über die Niagarafälle nach Toronto, Algonquin, Montréal und Québec und durch die White Mountains nach Boston.",
      route: "New York, (Zug) Washington, (Mietwagen) Shenandoah, Sandusky (Cedar Point), Chicago, Niagara Falls, Toronto, Algonquin, Montréal, Québec, White Mountains, Boston",
      stationen: "12 Stationen und 3 Zwischenübernachtungen",
      laender: "USA, Kanada",
      hinflug: "Zürich–New York (JFK) ca. 9–9,25 Std. direkt mit SWISS am Sa, 19.06.2027; Gabelflug für alle vier geschätzt ca. 4’000–5’800 CHF",
      rueckflug: "Direktflug Boston–Zürich ca. 7,25 Std. (SWISS) am Mi, 21.07.2027 am Abend, Ankunft Do, 22.07.2027 gegen Mittag; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Amtrak-Zug New York–Washington, dann Einwegmiete Washington–Boston (ca. 22 Tage) mit Fahrt durch Kanada; in New York, Washington und Boston ohne Auto",
      tempo: "Ca. 45–50 Std. reine Fahrzeit (ca. 4’400 km), realistisch mit Pausen, Stau und zwei Grenzübertritten ca. 53–60 Std. im Auto, an 13 Fahrtagen: 4 Tage mit 5–6,5 Std., die übrigen 1,5–5 Std.; dazu ca. 3–3,5 Std. Zug.",
      gesamt: "Ca. 88–96 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Transfers zusammen ca. 30–31 Std., Zug New York–Washington mit Transfers ca. 4–4,5 Std. und ca. 53–60 Std. im Auto. Uhr −6 Std., in Chicago −7 Std.",
      wetter: "New York, Washington und Chicago heiss und schwül (ca. 29–33 °C) mit Gewittern; in Kanada, Algonquin und den White Mountains angenehmer (ca. 24–28 °C, Nächte kühl), Mücken in den Wäldern.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Kanada auf dem Landweg nur mit Pass (keine eTA nötig, Stand prüfen); der Mietwagen braucht die Erlaubnis für Kanada.",
      hoehepunkte: "New York mit Freiheitsstatue und Broadway, Smithsonian-Museen in Washington, Skyline Drive in Shenandoah, Cedar Point, Chicago, Henry Ford Museum, Niagarafälle, CN Tower, Kanu in Algonquin, Montréal und die Altstadt von Québec, Mount Washington, Boston.",
      teens: "Achterbahnen in Cedar Point, Glasbalkon im Skydeck, Bootsfahrt in die Gischt der Niagarafälle, CN Tower, Kanu und Elche in Algonquin, Zahnradbahn auf den Mount Washington, Walbeobachtung, Broadway.",
      pro: [
        "Viele grosse Städte: New York bis Québec",
        "Niagara, Seen und Wälder Kanadas",
        "Kürzere Flüge, weniger Jetlag (−6 Std.)",
        "Zug nach Washington, gratis Museen",
        "Angenehmer als der heisse Süden"
      ],
      contra: [
        "Teuer (ca. {plan:usanordost} CHF)",
        "Ca. 53–60 Std. im Auto, 13 Fahrtage",
        "Kein Strand am Meer, nur Seen",
        "Viele Städte, wenig Wildnis",
        "Zwei Grenzübertritte, viel CO₂"
      ]
    },
    asien: {
      steckbrief: {anreise: "Flug nach Singapur, ca. 12–13 Std.", unterwegs: "Zug, Bus, Transfer und Boot ca. 41–49 Std.", highlights: "Pulau Tengah, Cameron Highlands, Khanom, Koh Tao, Bangkok"},
      name: "Malaysia / Thailand",
      zusatz: "von Singapur über Pulau Tengah, Kuala Lumpur und die Cameron Highlands, mit dem Zug nach Thailand und dem Golf entlang bis Bangkok",
      passt: "Schnorcheln, tropische Inseln und Strand im Vordergrund stehen, ihr dazu Singapur, Kuala Lumpur und Bangkok erleben möchtet und gern Zug fahrt.",
      kurz: "Fünf Wochen über Land und Wasser: Singapur, die Insel Pulau Tengah (Resort Batu Batu), Kuala Lumpur, die Cameron Highlands, über Ipoh mit dem Zug nach Songkhla, dann dem Golf von Thailand entlang nach Khanom, Koh Samui, Koh Tao und Bangkok.",
      route: "Singapur, (Bus, Boot) Pulau Tengah, (Boot, Zug) Kuala Lumpur, (Transfer) Cameron Highlands, (über Ipoh, Zug über die Grenze) Songkhla, Khanom, Koh Samui, Koh Tao, Hua Hin, Bangkok",
      stationen: "10 Stationen und 1 Zwischenübernachtung",
      laender: "Singapur, Malaysia, Thailand",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std.",
      rueckflug: "Direktflug Bangkok–Zürich ca. 11,5–12 Std. am Do, 22.07.2027 um die Mittagszeit, Ankunft am Abend; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Keine Flüge dazwischen; wo möglich Zug (Kluang–Kuala Lumpur, Ipoh–Padang Besar–Hat Yai, Chumphon–Hua Hin–Bangkok), sonst Bus, privater Transfer und Fähre",
      tempo: "Ca. 34–41 Std. reine Reisezeit mit Zug, Bus, Transfer und Boot, realistisch mit Wartezeiten ca. 41–49 Std.; längste Reisetage Koh Tao–Hua Hin (ca. 7–8 Std.), Pulau Tengah–Kuala Lumpur (ca. 6–7 Std.) und Ipoh–Songkhla (ca. 5,5–6,5 Std., fast nur Zug); sonst meist 2–5 Std.; meist 2–5 Nächte pro Station",
      gesamt: "Ca. 77–87 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), ca. 2 Std. Wartezeit am Flughafen, Flüge und Transfers zusammen ca. 36–38 Std., dazu ca. 41–49 Std. mit Bus, Transfer, Zug und Fähre; niemand muss selber fahren. Uhr +6 Std. (Thailand +5 Std.), Jetlag vor allem nach der Ankunft.",
      wetter: "Kuala Lumpur und Bangkok mit kurzen Gewittern am Nachmittag, die Cameron Highlands angenehm kühl (ca. 18–25 °C); die Ostküste Malaysias (Pulau Tengah) und der Golf von Thailand (Songkhla, Khanom, Samui, Tao) sind meist ruhiger; die Westküste mit Monsun wird umfahren.",
      einreise: "Singapur und Malaysia visafrei. Thailand: seit 15.09.2026 nur noch 30 Tage visafrei und höchstens zwei Landgrenz-Einreisen pro Jahr, Länderliste prüfen. Online-Anmeldungen (SG Arrival Card, MDAC, TDAC).",
      hoehepunkte: "Hausriff und Schildkröten auf Pulau Tengah, Schnorcheln auf Samui und Koh Tao (Koh Nang Yuan), Petronas Towers und Batu Caves in Kuala Lumpur, Teeplantagen und Nebelwald in den Cameron Highlands, Höhlentempel in Ipoh, Altstadt und Strand von Songkhla, Delfine bei Khanom, Ang Thong, Grand Palace und Wat Arun in Bangkok.",
      teens: "Schnorcheln, Schildkröten, Kajak, Inselhopping, Delfin-Tour, Landrover-Tour zum Mossy Forest, Dschungeltour, Erdbeeren pflücken, Wasserparks, Sentosa mit Universal Studios.",
      pro: [
        "Die meisten Schnorchel- und Strandtage",
        "Warmes Meer (ca. 29 °C) mit Riffen und Schildkröten",
        "Cameron Highlands, Kuala Lumpur, Singapur, Bangkok",
        "Niemand muss selber fahren",
        "Günstig (ca. {plan:asien} CHF)"
      ],
      contra: [
        "Viele Umstiege mit Gepäck",
        "Viele Ortswechsel, Reisetage bis 7–8 Std.",
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
      usamitte: [4, "Rosa Sanddünen bei Kanab, Horseshoe Bend, Monument Valley, Sandia Peak, Sümpfe in Louisiana, Niagarafälle und die Schlucht von Watkins Glen; abwechslungsreich, aber ohne die grossen Nationalparks."],
      usanordost: [3, "Skyline Drive in Shenandoah, Niagarafälle, Seen und Wälder in Algonquin, Montmorency-Fall und die White Mountains; schön, aber ohne die grossen Felslandschaften des Westens."],
      asien: [
        3,
        "Inseln, Strände und Riffe von Pulau Tengah bis Koh Tao, Teeplantagen und Nebelwald in den Cameron Highlands, Kalkfelsen bei Ipoh, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ],
    },
    {
      kriterium: "Dschungelfeeling",
      marokko: [0, "Kein Regenwald: Steinwüste, Palmengärten in Marrakesch und grüne Hügel im Baskenland."],
      usa: [2, "Kein Regenwald; Sümpfe in Louisiana und Mangroven in den Everglades."],
      usamitte: [1, "Kein Regenwald; Sümpfe in Louisiana."],
      usanordost: [1, "Kein Regenwald; grosse Laub- und Nadelwälder in Shenandoah, Algonquin und den White Mountains."],
      asien: [
        5,
        "Im Vergleich klar am meisten Dschungel: tropischer Inselwald auf Pulau Tengah (Villen im Wald, Waldpfade), Nebelwald (Mossy Forest) und Regenwald mit geführter Dschungeltour in den Cameron Highlands, Wasserfälle bei Khanom und im grünen Inneren von Koh Samui (Na Muang), Dschungelpfade auf Koh Tao; ein grosser Regenwald-Nationalpark ist allerdings nicht auf der Route."
      ],
    },
    {
      kriterium: "Wüstenfeeling",
      marokko: [
        3,
        "Eine Nacht im Zeltcamp in der Agafay-Steinwüste bei Marrakesch mit Kamelritt und Blick auf den Atlas, dazu die Wüste von Tabernas am Cabo de Gata als Abstecher; keine Sanddünen wie in der Sahara und im Juli sehr heiss."
      ],
      usa: [5, "Mojave um Las Vegas, rote Felswüsten in Utah und Arizona, Monument Valley, die weissen Gipsdünen von White Sands und die Chihuahua-Wüste in Westtexas."],
      usamitte: [4, "Mojave um Las Vegas, rote Felsen und Dünen bei Kanab, Monument Valley und die Wüste New Mexicos; danach Prärie."],
      usanordost: [0, "Keine Wüste."],
      asien: [0, "Keine Wüste: tropische Inseln, Regenwald und Städte."],
    },
    {
      kriterium: "Strand und Baden",
      marokko: [
        4,
        "Vier Nächte auf Formentera, dazu Costa Brava, Benidorm, Cabo de Gata, Tarifa, Cádiz, Algarve und San Sebastián; im Juli voll."
      ],
      usa: [4, "Santa Monica am Pazifik, vier Nächte an den weissen Stränden bei Destin, drei Nächte in Key Largo und drei in Miami mit Miami Beach, Wasser ca. 28–31 °C; dazwischen viele Tage ohne Meer."],
      usamitte: [1, "Santa Monica am Pazifik, Galveston als Option, Stadtstrände am Michigansee und der Strand am Eriesee bei Cedar Point; kein warmes, klares Meer."],
      usanordost: [1, "Strand am Eriesee bei Cedar Point, Stadtstrände am Michigansee, Baden in Seen und Flüssen in Algonquin und den White Mountains; kein Meer zum Baden."],
      asien: [
        5,
        "Pulau Tengah, Songkhla, Khanom, Koh Samui, Koh Tao und Hua Hin: tropische Strände mit ca. 29 °C warmem Wasser, zusammen 19 Nächte am Meer."
      ],
    },
    {
      kriterium: "Schnorcheln",
      marokko: [
        3,
        "Gutes Mittelmeer-Schnorcheln: Meeresschutzgebiet der Medes-Inseln mit grossen Fischen, vier Nächte auf Formentera (Cala Saona, Es Caló, Seegraswiesen mit sehr klarem Wasser) und das Cabo de Gata (Los Escullos, Cala de San Pedro); wenige Korallen, keine Riffe und kühleres Wasser als in den Tropen."
      ],
      usa: [2, "Drei Nächte in Key Largo mit Bootstour zum einzigen Korallenriff an der Festlandküste der USA, dazu die Steinmolen bei Destin; das Riff ist weniger farbig als in Südostasien."],
      usamitte: [0, "Kein Schnorcheln auf der Route."],
      usanordost: [0, "Kein Schnorcheln auf der Route."],
      asien: [
        5,
        "Koh Tao (5 Nächte) mit klarem Wasser, Riffen und Schildkröten, das Hausriff vor der Villa auf Pulau Tengah (teils ausgebleicht) und Ang Thong ab Koh Samui; das klarste Wasser Malaysias (Perhentians) ist nicht auf der Route."
      ],
    },
    {
      kriterium: "Abenteuer",
      marokko: [
        4,
        "Caminito del Rey, Kamelritt, Quad und Nacht im Zeltcamp in der Agafay-Wüste, Medinas mit Führer, Zugfahrten quer durch Marokko, Kajak durch die Grotten der Algarve, Surfen in San Sebastián."
      ],
      usa: [5, "Sandboarding auf den Dünen bei Kanab und auf White Sands, Kletterei durch den Belly of the Dragon, Sumpftour mit Alligatoren, Airboat in den Everglades, Schnorcheln am Riff, ein Roadtrip quer durchs Land."],
      usamitte: [5, "Sandboarding bei Kanab, Jeep-Tour im Monument Valley, Sumpftour mit Alligatoren, Klettern im City Museum, Achterbahnen in Cedar Point, Boot in die Gischt der Niagarafälle, ein Roadtrip quer durchs Land."],
      usanordost: [4, "Achterbahnen in Cedar Point, Boot in die Gischt der Niagarafälle, CN Tower, Kanu in Algonquin, Zahnradbahn auf den Mount Washington, Walbeobachtung vor Boston."],
      asien: [3, "Landrover-Tour und geführte Dschungeltour in den Cameron Highlands, Schnorcheln mit Riffhaien auf Koh Tao, Schnuppertauchen und Schildkröten auf Pulau Tengah, Kajak in Ang Thong, Delfin-Tour, Inselhopping."],
    },
    {
      kriterium: "Städte",
      marokko: [
        5,
        "Barcelona, Valencia, Casablanca, Marrakesch, Fès, Cádiz, Sevilla, Lissabon, Porto, San Sebastián und Carcassonne: europäische und marokkanische Städte im Wechsel."
      ],
      usa: [4, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Austin, New Orleans, Miami und New York mit Museen und Aussichtsplattformen."],
      usamitte: [5, "Los Angeles, Las Vegas, Albuquerque und Santa Fe, Fort Worth, Houston, New Orleans, Memphis, St. Louis, Chicago und New York."],
      usanordost: [5, "New York, Washington, Chicago, Toronto, Montréal, die Altstadt von Québec (UNESCO) und Boston: so viele grosse Städte wie auf keiner anderen Reise."],
      asien: [4, "Singapur, Kuala Lumpur und Bangkok mit Street-Food, Tempeln und Aussichtstürmen; an der Ostküste Dörfer und Kleinstädte."],
    },
    {
      kriterium: "Gesundheit und Sicherheit",
      marokko: [
        4,
        "Rund vier von fünf Wochen in Spanien, Portugal und Frankreich, dort unkompliziert. In Marokko (6 Nächte) keine Krankenversicherungskarte, kein Leitungswasser und auf Hygiene beim Essen achten; das grösste Risiko ist die Hitze in Marrakesch, in der Agafay-Wüste und in Fès (38–42 °C)."
      ],
      usa: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten, Hurrikansaison an der Golfküste und in Florida."],
      usamitte: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten und an der Golfküste, Gewitter."],
      usanordost: [5, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze und Gewitter in den Städten, Mücken in den Wäldern; Kanada sehr sicher."],
      asien: [
        3,
        "Singapur sehr sicher; in Malaysia und Thailand Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären; auf Pulau Tengah und Koh Tao ist ein grösseres Spital weit weg, Bootsfahrten bei Wellengang."
      ],
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      marokko: [5, "ca. {plan:marokko} CHF: kein Flug, Supercharging gratis, Marokko günstig; dafür Fähren und Züge in Marokko sowie Parkplatz in Tarifa."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Einwegmiete, Inlandflug und Unterkünfte in Destin, Key Largo, Miami und New York."],
      usamitte: [1, "ca. {plan:usamitte} CHF: vor allem Einwegmiete, Unterkünfte in Los Angeles, Chicago und New York."],
      usanordost: [2, "ca. {plan:usanordost} CHF: vor allem Unterkünfte in New York, Chicago und Boston, Einwegmiete und Essen."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."],
    },
    {
      kriterium: "Reisekomfort",
      marokko: [
        3,
        "Ca. 96–103 Stunden Tür zu Tür, kein Jetlag, in Marokko kein Fahren; aber Wechsel zwischen eigenem Auto, Fähre und Zug, Passkontrollen, ein langer Zugtag Marrakesch–Fès und mehrere Tage mit 7–9 Stunden."
      ],
      usa: [2, "Ca. 104–111 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, ein Inlandflug, dazu viel Zeit im Auto (ca. 64–70 Stunden an 12 Fahrtagen, ein Tag mit ca. 9,5–10 Stunden)."],
      usamitte: [1, "Ca. 108–118 Stunden Tür zu Tür: zwei Langstreckenflüge mit Jetlag (−9 Std.) und die meiste Zeit im Auto (ca. 75–84 Stunden an 15 Fahrtagen, drei Fahrtage hintereinander durch Texas)."],
      usanordost: [3, "Ca. 88–96 Stunden Tür zu Tür: kürzere Flüge mit weniger Jetlag (−6 Std.), Zug nach Washington, dann ca. 53–60 Stunden im Auto an 13 Fahrtagen mit zwei Grenzübertritten; in den Städten ohne Auto."],
      asien: [
        5,
        "Ca. 77–87 Stunden Tür zu Tür: zwei Direktflüge mit Jetlag, dazu ca. 41–49 Stunden mit Zug, Bus, Transfer und Fähre (längster Reisetag ca. 7–8 Stunden), Wechsel mit Gepäck; niemand muss selber fahren."
      ],
    },
    {
      kriterium: "CO₂ und Umwelt (mehr Punkte = weniger CO₂)",
      marokko: [
        5,
        "Kein Flug: Elektroauto (ca. 1’100 kWh), zwei kurze Fähren, Züge in Marokko (ohne Mietwagen); grob geschätzt ca. 0,1–0,2 t CO₂ pro Person."
      ],
      usa: [1, "Zwei Langstreckenflüge und ein Inlandflug (zusammen ca. 17’700 km) und ca. 5’550 km Mietwagen, grob geschätzt ca. 3,7 t CO₂ pro Person."],
      usamitte: [1, "Zwei Langstreckenflüge (zusammen ca. 15’800 km) und ca. 6’700 km Mietwagen, grob geschätzt ca. 3,6 t CO₂ pro Person."],
      usanordost: [2, "Zwei Langstreckenflüge (zusammen ca. 12’300 km) und ca. 4’400 km Mietwagen, grob geschätzt ca. 2,8 t CO₂ pro Person."],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ],
    }
  ]
};
