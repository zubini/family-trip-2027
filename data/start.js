// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/marokko.js usw.).
// Platzhalter in Texten: {plan:marokko}, {plan:usa}, {plan:asien} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
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
        "Kein Flug und kein Jetlag, und trotzdem sechs Nächte Afrika: Casablanca, Marrakesch, Agafay-Wüste und Fès, ohne selber in Marokko zu fahren",
        "Viele Städte: Barcelona, Valencia, Casablanca, Marrakesch, Fès, Sevilla, Lissabon, Porto, San Sebastián",
        "Grosse Abwechslung zwischen Mittelmeer, Wüste, Atlantik, Baskenland und Südfrankreich",
        "Günstig (ca. {plan:marokko} CHF) und wenig CO₂; Laden an Superchargern gratis"
      ],
      contra: [
        "Grosse Hitze im Juli: Marrakesch, die Agafay-Wüste und Fès oft 38–42 °C; die Agafay ist eine Steinwüste ohne Sanddünen",
        "Tür zu Tür ca. 96–103 Std., Wechsel zwischen eigenem Auto, Fähre und Zug; einige lange Tage mit 7–9 Std.; Bauarbeiten an der Bahnstrecke nach Marrakesch (Fahrplan kurz vorher prüfen)",
        "Für Marokko Reisepass für alle, keine Krankenversicherungskarte, kein Leitungswasser; aufdringliche Händler in den Medinas",
        "Lange Reisetage wie Agafay–Fès (ca. 7,5–8,5 Std.) und Fès–Cádiz (Zug und Fähre, ca. 7–9 Std.); auf Formentera keine Supercharger"
      ]
    },
    usa: {
      name: "USA (Las Vegas – New Orleans – New York)",
      zusatz: "Roadtrip vom Südwesten über den Süden an die Ostküste",
      passt: "Nationalparks, ein grosser Roadtrip, Städte des Südens, etwas Strand und zum Schluss Washington und New York im Vordergrund stehen, ihr sehr viele Fahrtage in Kauf nehmt und das höhere Budget (rund {mehrkosten} CHF mehr) passt.",
      kurz: "Fünf Wochen USA ohne Inlandflug: mit dem Mietwagen von Las Vegas durch Zion, Antelope Canyon, Monument Valley und White Sands, über Texas und New Orleans an den Strand von Destin, durch die Great Smoky Mountains und Shenandoah nach Washington, dann mit dem Zug nach New York.",
      route: "Las Vegas, Zion, Page, Monument Valley, Santa Fe, White Sands, Carlsbad Caverns, Fort Stockton, San Antonio, Houston, New Orleans, Destin, Atlanta, Great Smoky Mountains, Shenandoah, Washington, (Zug) New York",
      stationen: "16 Stationen und 1 Zwischenübernachtung",
      laender: "USA (Nevada bis New York)",
      hinflug: "Zürich–Las Vegas ca. 11,5 Std. direkt (nur an einzelnen Wochentagen, im Sommer 2026 auch samstags), sonst 14–17 Std.",
      rueckflug: "Direktflug New York (JFK)–Zürich ca. 7,75–8 Std. (SWISS, täglich) am Mi, 21.07.2027, Ankunft Do, 22.07.2027 am Morgen; zwei Tage Puffer gegen den Jetlag",
      dazwischen: "Keine Flüge dazwischen: Einwegmiete Las Vegas–Washington (ca. 25 Tage), Amtrak Washington–New York (ca. 3–3,5 Std.)",
      tempo: "Ca. 59–62 Std. reine Fahrzeit (ca. 5’600 km), realistisch mit Pausen und Stau ca. 70–74 Std. im Auto, an 15 Fahrtagen: 6 Tage mit 5–7,5 Std., die übrigen 2–4,5 Std.; dazu der Zug nach New York.",
      gesamt: "Ca. 106–111 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Mietwagen zusammen ca. 30 Std., der Zug nach New York ca. 4 Std. und ca. 70–74 Std. im Auto. Uhr −6 bis −9 Std., Jetlag vor allem nach der Rückkehr.",
      wetter: "Im Südwesten Ende Juni 38–45 °C, ab Juli Monsungewitter; Texas, New Orleans und die Golfküste heiss und feucht, Hurrikansaison; in den Smokies und in Shenandoah kühler mit Gewittern; Washington und New York heiss und schwül.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Nationalpark-Jahrespass für Nicht-Residenten 250 USD, 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Parks; in den Smokies Parkticket statt Eintritt.",
      hoehepunkte: "Zion, Antelope Canyon, Horseshoe Bend, Monument Valley, Meow Wolf, White Sands, Carlsbad Caverns, Alamo, Space Center Houston, New Orleans, weisse Strände bei Destin, Georgia Aquarium, Great Smoky Mountains, Skyline Drive und Luray Caverns, Smithsonian-Museen in Washington, New York.",
      teens: "Narrows in Zion, Antelope Canyon, Sandboarding auf White Sands, Space Center Houston, Strand und Delfine in Destin, Schwarzbären in den Smokies, Dollywood, Air and Space Museum, New York.",
      pro: [
        "Kein Inlandflug: ein Roadtrip am Stück von der Wüste bis an die Ostküste, Wagen in Washington zurück, dann Zug",
        "Spektakuläre Landschaften: Zion, Antelope Canyon, Monument Valley, White Sands, Carlsbad Caverns, Great Smoky Mountains und Shenandoah",
        "Abwechslung: Nationalparks, Städte des Südens (San Antonio, New Orleans, Atlanta), drei Strandtage in Destin und zum Schluss Washington und New York",
        "Sehr gute medizinische Versorgung, viele Teenager-Highlights; Rückkehr zwei Tage vor Ferienende gegen den Jetlag"
      ],
      contra: [
        "Am teuersten (ca. {plan:usa} CHF): Einwegmiete quer durchs Land mit hoher Rückgabegebühr, Unterkünfte in Monument Valley, Destin und New York; Arztkosten sehr hoch",
        "Am meisten Reisezeit: ca. 70–74 Std. im Auto an 15 Fahrtagen, sechs lange Tage mit 5–7,5 Std.; Tür zu Tür ca. 106–111 Std. und Jetlag",
        "Hitze im Südwesten (oft über 40 °C) und Hurrikansaison an der Golfküste; wenig Strand, kein Schnorcheln am Riff",
        "Zwei Langstreckenflüge mit viel CO₂; Direktflug nach Las Vegas nur an einzelnen Wochentagen, ESTA-Regeln vorab prüfen"
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
        "Die meisten Schnorchel- und Strandtage: Tioman, Perhentian Islands, Koh Samui und Koh Tao bei ca. 29 °C warmem Wasser",
        "Städte mit Street-Food und Tempeln: Singapur, Kuala Lumpur, Penang und Bangkok",
        "Direktflüge hin und zurück, unterwegs muss niemand selber fahren; günstig (ca. {plan:asien} CHF)"
      ],
      contra: [
        "Tür zu Tür ca. 101–108 Std., davon 6 lange Reisetage mit 5–9 Std. und viele Umstiege mit Gepäck; Jetlag",
        "Regenzeit in Penang und Bangkok, schwüle Hitze",
        "Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären",
        "Zwei Langstreckenflüge mit viel CO₂; Thailand nur 30 Tage visafrei, Regeln prüfen"
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
      usa: [5, "Zion, Antelope Canyon, Horseshoe Bend, Monument Valley, White Sands, Carlsbad Caverns, die Great Smoky Mountains und Shenandoah: spektakuläre und abwechslungsreiche Landschaften (Grand Canyon nur als Option)."],
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ]
    },
    {
      kriterium: "Dschungelfeeling",
      marokko: [0, "Kein Regenwald: Steinwüste, Palmengärten in Marrakesch und grüne Hügel im Baskenland."],
      usa: [1, "Kein Regenwald; dichte, feuchte Laubwälder in den Great Smoky Mountains und Sümpfe in Louisiana."],
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
      asien: [0, "Keine Wüste: tropische Inseln, Regenwald und Städte."]
    },
    {
      kriterium: "Strand und Baden",
      marokko: [
        4,
        "Vier Nächte auf Formentera, dazu Costa Brava, Benidorm, Cabo de Gata, Tarifa, Cádiz, Algarve und San Sebastián; im Juli voll."
      ],
      usa: [2, "Drei Nächte an den weissen Stränden bei Destin mit ca. 28–30 °C warmem Wasser, dazu Lake Powell; sonst kaum Meer."],
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
      usa: [1, "Nur an den Steinmolen bei Destin (Fische, ruhiges Wasser); kein Korallenriff auf der Route."],
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
      usa: [4, "Durch die Narrows waten, Antelope Canyon, Sandboarding auf White Sands, Carlsbad Caverns, Wanderungen in den Smokies, ein Roadtrip quer durchs Land."],
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."]
    },
    {
      kriterium: "Städte",
      marokko: [
        5,
        "Barcelona, Valencia, Casablanca, Marrakesch, Fès, Cádiz, Sevilla, Lissabon, Porto, San Sebastián und Carcassonne: europäische und marokkanische Städte im Wechsel."
      ],
      usa: [5, "Las Vegas, Santa Fe, San Antonio, New Orleans, Atlanta, Washington und New York mit Museen und Aussichtsplattformen."],
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."]
    },
    {
      kriterium: "Gesundheit und Sicherheit",
      marokko: [
        4,
        "Rund vier von fünf Wochen in Spanien, Portugal und Frankreich, dort unkompliziert. In Marokko (6 Nächte) keine Krankenversicherungskarte, kein Leitungswasser und auf Hygiene beim Essen achten; das grösste Risiko ist die Hitze in Marrakesch, in der Agafay-Wüste und in Fès (38–42 °C)."
      ],
      usa: [4, "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten, Hurrikansaison an der Golfküste."],
      asien: [
        3,
        "Singapur sehr sicher; in Malaysia und Thailand Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären; auf den Inseln (Tioman, Perhentian) ist ein Spital weit weg, Bootsfahrten bei Wellengang."
      ]
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      marokko: [4, "ca. {plan:marokko} CHF: kein Flug, Supercharging gratis, Marokko günstig; dafür Fähren und Züge in Marokko sowie Parkplatz in Tarifa."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Einwegmiete mit Rückgabegebühr und Unterkünfte in den Nationalparks und in New York."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."]
    },
    {
      kriterium: "Reisekomfort",
      marokko: [
        3,
        "Ca. 96–103 Stunden Tür zu Tür, kein Jetlag, in Marokko kein Fahren; aber Wechsel zwischen eigenem Auto, Fähre und Zug, Passkontrollen, ein langer Zugtag Marrakesch–Fès und mehrere Tage mit 7–9 Stunden."
      ],
      usa: [1, "Ca. 106–111 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, dazu am meisten Zeit im Auto (ca. 70–74 Stunden an 15 Fahrtagen, sechs Tage mit 5–7,5 Stunden)."],
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
      usa: [1, "Zwei Langstreckenflüge (zusammen ca. 15’000 km) und ca. 5’600 km Mietwagen, grob geschätzt ca. 3–3,5 t CO₂ pro Person."],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ]
    }
  ]
};
