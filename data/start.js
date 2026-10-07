// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/spanien.js usw.).
// Platzhalter in Texten: {plan:spanien}, {plan:marokko}, {plan:usa}, {plan:usa2}, {plan:asien} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Ab Fr, 18.06.2027 für fünf Wochen, 2 Erwachsene und 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen dauern 33 bis 36 Nächte und sind für die Familie mit Sohn (12) und Tochter (14) geplant. Die beiden Reisen mit dem eigenen Auto ohne Flug und Jetlag können bis Sa, 24.07.2027 dauern, die anderen enden am Do, 22.07.2027. Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Wüstenfeeling, Strand und Baden, Schnorcheln, Abenteuer, Städte, Gesundheit und Sicherheit, Budget, Reisekomfort sowie CO₂ und Umwelt. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig, beim CO₂: wenig Ausstoss). Die Skala ist fest und nicht nur ein Vergleich der Reisen: 5 heisst Weltklasse (z.B. tropische Riffe beim Schnorcheln, kurze Etappen beim Reisekomfort), 0 heisst, dass es das auf der Reise nicht gibt. Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
  budgetIntro: "Mittelklasse inklusive Flüge bzw. Autokosten, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.",
  vergleichIntro: "Die wichtigsten Unterschiede nebeneinander.",
  entscheidIntro: "Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln, Städte und Kultur ohne Flug oder Nationalparks und Roadtrip im Vordergrund stehen.",
  reisen: {
    spanien: {
      name: "Spanien / Portugal",
      zusatz: "Roadtrip ab Brig-Glis",
      passt: "ihr ohne Flug und Jetlag reisen, Städte, Kultur und Schnorcheln im Mittelmeer verbinden möchtet und viele Stunden am Steuer in Kauf nehmt.",
      kurz: "Fünf Wochen mit dem eigenen Elektroauto im Wechsel von Städten, Strand und Natur: Schnorcheln bei den Medes-Inseln, Barcelona, Valencia, Ibiza und Formentera, Andalusien, die Algarve, Lissabon, Porto und der Norden Spaniens.",
      route: "Brig-Glis, Sète, Costa Brava (L’Estartit), Barcelona, Valencia, Ibiza, Formentera, Benidorm, Granada, Cabo de Gata, Caminito del Rey, Sevilla, Algarve (Lagos), Lissabon, Porto, Playa de las Catedrales, Bilbao, Bardenas Reales, Montpellier, Brig-Glis",
      stationen: "15 Stationen und 3 Zwischenübernachtungen",
      laender: "Frankreich, Spanien, Portugal",
      hinflug: "Kein Flug: mit dem eigenen Auto ab Brig-Glis, Zwischenstopp am Meer in Sète (ca. 7–7,5 Std.), dann an die Costa Brava (ca. 2,5–3 Std.)",
      rueckflug: "Mit dem Auto in zwei Tagen über Montpellier (ca. 7–7,5 und 6,5–7 Std.), Ankunft Sa, 24.07.2027",
      dazwischen: "Keine Flüge: eigenes Elektroauto, dazu drei Autofähren (Dénia–Ibiza, Ibiza–Formentera, Formentera–Dénia)",
      tempo: "Ca. 69 Std. reine Reisezeit (ca. 62 Std. Elektroauto für ca. 6’000 km und ca. 6–7 Std. Fähre), realistisch mit Pausen, Ladestopps, Check-in und Stau ca. 83–86 Std.; 3 lange Fahrtage mit 6,5–8 Std. plus Ladestopps (Brig-Glis–Sète, Bardenas–Montpellier, Montpellier–Brig-Glis), dazu Benidorm–Granada (ca. 4–4,5 Std.) und Formentera–Benidorm (Fähre und Auto); sonst meist 2–3,5 Std.",
      gesamt: "Ca. 83–86 Std. Tür zu Tür, ohne Flughafen und ohne Jetlag: davon realistisch ca. 74–76 Std. im Elektroauto inklusive ca. 11–13 Ladestopps an Superchargern (ca. 62 Std. reine Fahrzeit) und ca. 9–10 Std. für die Fähren inklusive Check-in.",
      wetter: "Heiss und trocken: in Andalusien und den Bardenas oft 35–42 °C, an den Küsten 28–32 °C; Portugal und der Norden angenehmer, Mittelmeer ca. 23–26 °C.",
      einreise: "Schengen: Identitätskarte genügt, keine Formulare. Crit’Air-Vignette für Frankreich, Registrierung für die Umweltzone Barcelona, elektronische Maut in Portugal.",
      hoehepunkte: "Schnorcheln bei den Medes-Inseln, Sagrada Família, Oceanogràfic in Valencia, Schnorcheln an den Buchten von Ibiza und Formentera, Terra Mítica und Aqualandia in Benidorm, Alhambra und Gorafe, Cabo de Gata, Caminito del Rey, Sevilla, Kajak durch die Grotten der Algarve, Lissabon, Porto, Playa de las Catedrales, Bardenas Reales.",
      teens: "Freizeit- und Wasserparks (Terra Mítica, Aqualandia), Schnorcheln und Kajak, Grotten der Algarve, Caminito del Rey, Game-of-Thrones-Drehorte, Höhlen und Felsbögen bei Ebbe, Surfen in Galicien.",
      pro: [
        "Kein Flug und kein Jetlag, Tür zu Tür wenig Reisezeit (ca. 83–86 Std.); zwei Tage länger möglich",
        "Schnorcheln bewusst eingeplant: Meeresschutzgebiet der Medes-Inseln, sechs Nächte auf Ibiza und Formentera, Cabo de Gata und Tabarca; dazwischen Städte, Strand und Natur im Wechsel",
        "Städte und Kultur: Barcelona, Valencia, Granada mit der Alhambra, Sevilla, Lissabon und Porto",
        "Unkompliziert und sicher: Europa, keine Impfungen, eigenes Auto mit viel Platz fürs Gepäck",
        "Wenig CO₂ und günstig (Laden an Superchargern gratis)"
      ],
      contra: [
        "Ca. 74–76 Std. im Auto inklusive Ladestopps, am ersten und letzten Tag je ca. 8–9 Std.",
        "Grosse Hitze in Andalusien und den Bardenas (oft 35–42 °C)",
        "Hochsaison: Strände voll; Fähren, Zufahrt fürs Auto auf Ibiza und Formentera, Unterkünfte und Alhambra früh buchen",
        "Keine Korallenriffe und kein Dschungel; der Atlantik in Galicien ist kühl"
      ]
    },
    marokko: {
      name: "Spanien / Portugal / Marokko",
      zusatz: "Roadtrip ab Brig-Glis, Marokko mit Fähre",
      passt: "ihr ohne Flug reisen, Städte in Spanien und Portugal mit einer Woche Marokko (Medina, Atlas, Wüste) verbinden möchtet und grosse Hitze, viele Reisetage und mehrere Wechsel zwischen Auto, Fähre und Zug in Kauf nehmt.",
      kurz: "Fünf Wochen mit dem eigenen Elektroauto durch Spanien, Portugal und Südfrankreich mit Schnorcheln bei den Medes-Inseln und am Cabo de Gata, dazu rund sechs Tage Marokko mit Fähre, Zug und Mietwagen: Marrakesch, Hoher Atlas, Wüste bei Merzouga und Fès.",
      route: "Brig-Glis, Sète, Costa Brava (L’Estartit), Barcelona, Valencia, Cabo de Palos, Cabo de Gata, Caminito del Rey, Tarifa, (Fähre) Tanger, Marrakesch, Dadès-Schlucht, Merzouga, Fès, Cádiz, Sevilla, Algarve (Lagos), Lissabon, Porto, Playa de las Catedrales, San Sebastián, Carcassonne, Avignon, Brig-Glis",
      stationen: "18 Stationen und 2 Zwischenübernachtungen",
      laender: "Frankreich, Spanien, Marokko, Portugal",
      hinflug: "Kein Flug: mit dem eigenen Auto ab Brig-Glis, Zwischenstopp in Sète (ca. 7–7,5 Std.), dann an die Costa Brava (ca. 2,5–3 Std.)",
      rueckflug: "Mit dem Auto ab Avignon über Lyon und Genf (ca. 5,5–6 Std.), Ankunft Sa, 24.07.2027",
      dazwischen: "Keine Flüge: eigenes Elektroauto; nach Marokko mit der Fähre ohne Auto (Tarifa–Tanger), dort Zug und Mietwagen (Einwegmiete Marrakesch–Fès)",
      tempo: "Ca. 75 Std. reine Fahrzeit (ca. 5’550 km eigenes Auto, ca. 1’000 km Mietwagen), dazu Fähren und Züge in Marokko (ca. 11–13 Std.); realistisch ca. 102–107 Std. Tür zu Tür; die längsten Tage: Brig-Glis–Sète (ca. 7–7,5 Std.), Merzouga–Fès (ca. 7 Std.), Fès–Cádiz und Tarifa–Marrakesch (Fähre und Zug, je ca. 7–9 Std.), Ribadeo–San Sebastián (ca. 5 Std.)",
      gesamt: "Ca. 102–107 Std. Tür zu Tür, ohne Flughafen und ohne Jetlag: davon realistisch ca. 86–90 Std. im Auto inklusive Ladestopps (ca. 75 Std. reine Fahrzeit) und ca. 16–18 Std. für Fähren und Züge in Marokko mit Passkontrolle und Umsteigen.",
      wetter: "Sehr heiss: Marrakesch und Fès oft 38–42 °C, die Wüste bei Merzouga 42–45 °C, Andalusien 35–40 °C; Lissabon, San Sebastián und die Küsten angenehmer.",
      einreise: "Schengen bis auf Marokko: dort Reisepass für alle (Identitätskarte genügt nicht), kein Visum. Internationaler Führerausweis für den Mietwagen, Crit’Air-Vignette für Frankreich, Umweltzone Barcelona, elektronische Maut in Portugal.",
      hoehepunkte: "Schnorcheln bei den Medes-Inseln und am Cabo de Gata, Sagrada Família, Oceanogràfic, Caminito del Rey, Jemaa el-Fna in Marrakesch, Pass über den Hohen Atlas, Aït Ben Haddou, Kamelritt und Nacht im Wüstencamp, Medina von Fès, Cádiz, Sevilla, Grotten der Algarve, Lissabon, Felsbögen der Playa de las Catedrales, San Sebastián, Carcassonne.",
      teens: "Kamelritt und Sandboarding in der Wüste, Souks und Gaukler in Marrakesch, Game-of-Thrones-Drehorte, Kajak an der Algarve, Surfen in San Sebastián, Ritterburg Carcassonne.",
      pro: [
        "Kein Flug und kein Jetlag, und trotzdem eine Woche Afrika: Marrakesch, Atlas, Wüste und Fès",
        "Viele Städte: Barcelona, Valencia, Marrakesch, Fès, Sevilla, Lissabon, Porto, San Sebastián",
        "Grosse Abwechslung zwischen Mittelmeer, Wüste, Atlantik, Baskenland und Südfrankreich",
        "Günstig (ca. {plan:marokko} CHF) und wenig CO₂; Laden an Superchargern gratis"
      ],
      contra: [
        "Grosse Hitze im Juli: in der Wüste bei Merzouga 42–45 °C, einige Camps schliessen im Sommer; auch Marrakesch und Fès sehr heiss",
        "Tür zu Tür ca. 102–107 Std., viele Wechsel zwischen eigenem Auto, Fähre, Zug und Mietwagen; einige lange Tage mit 7–9 Std.",
        "Für Marokko Reisepass für alle, keine Krankenversicherungskarte, kein Leitungswasser; aufdringliche Händler in den Medinas",
        "Weniger Badetage im warmen Mittelmeer als bei Spanien / Portugal"
      ]
    },
    usa: {
      name: "USA (Las Vegas – New York)",
      zusatz: "Nationalparks und Grossstädte",
      passt: "Nationalparks, Roadtrip und Grossstädte im Vordergrund stehen und das höhere Budget (rund {mehrkosten} CHF mehr) passt.",
      kurz: "Fünf Wochen quer durch die USA mit Nationalparks, Grossen Seen und Grossstädten.",
      route: "Las Vegas, Zion, Page, Grand Canyon, Monument Valley, Santa Fe, White Sands, Chicago, Sandusky, Niagara Falls, Washington, Philadelphia, New York",
      stationen: "13 Stationen und 1 Zwischenübernachtung",
      laender: "USA (Nevada bis New York)",
      hinflug: "Zürich–Las Vegas ca. 12 Std. direkt (nicht ganzjährig), sonst 14–17 Std.",
      rueckflug: "New York–Zürich ca. 7,5–8 Std.",
      dazwischen: "Keine Flüge dazwischen: Mietwagen und 2-Tage-Roadtrip, im Osten Amtrak",
      tempo: "Ca. 60 Std. reine Fahrzeit (ca. 5’800 km), realistisch mit Pausen und Stau ca. 70–75 Std. im Auto, an 11 Fahrtagen: Roadtrip mit 10 und 12 Std., 5 Tage mit 4–7 Std., 4 Tage mit 2,5–3,5 Std.",
      gesamt: "Ca. 102–109 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), ca. 2 Std. Wartezeit am Flughafen, Flüge, Einreise und Mietwagen zusammen ca. 32–34 Std. (mit Direktflug, mit Umsteigen mehr), dazu ca. 70–75 Std. im Auto. Uhr −9 Std., Jetlag vor allem nach der Rückkehr.",
      wetter: "Las Vegas, Zion und White Sands 38–45 °C; ab Juli Monsungewitter und Sturzfluten im Südwesten; im Osten heiss und schwül mit Gewittern.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Nationalpark-Jahrespass für Nicht-Residenten 250 USD, 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Parks.",
      hoehepunkte: "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands, Chicago, Niagarafälle, Washington, New York.",
      teens: "Cedar Point (Achterbahnen), Meow Wolf, Sandboarding auf White Sands, Smithsonian, New York.",
      pro: [
        "Die spektakulärsten Landschaften: Zion, Grand Canyon, Antelope Canyon, Monument Valley, White Sands und die Niagarafälle",
        "Grossstädte wie Las Vegas, Chicago, Washington und New York mit vielen Teenager-Highlights, dazu Cedar Point",
        "Eigenes Tempo mit dem Mietwagen, sehr gute medizinische Versorgung"
      ],
      contra: [
        "Teuer (ca. {plan:usa} CHF), Einwegmiete und Unterkünfte in New York, Arztkosten sehr hoch",
        "Am meisten Zeit im Auto (ca. 70–75 Std.), zwei Tage mit 10 und 12 Std. reiner Fahrzeit; Tür zu Tür ca. 102–109 Std. und Jetlag",
        "Hitze im Südwesten (Las Vegas oft über 40 °C) und Gewitter im Monsun",
        "Kaum Strand und kein Schnorcheln, zwei Langstreckenflüge mit viel CO₂, ESTA-Regeln vorab prüfen"
      ]
    },
    usa2: {
      name: "USA (Las Vegas – Florida – New York)",
      zusatz: "Roadtrip über Texas und Florida",
      passt: "ihr Nationalparks, Texas und New Orleans, Strand in Florida und die Ostküste in einem grossen Roadtrip ohne Inlandflug verbinden möchtet und sehr viele Fahrtage sowie das höchste Budget in Kauf nehmt.",
      kurz: "Fünf Wochen Roadtrip quer durch die USA: Nationalparks im Südwesten, New Mexico, San Antonio, Houston und New Orleans, die Golfküste, Orlando und die Florida Keys, dann die Ostküste hinauf nach Washington und mit dem Zug nach New York.",
      route: "Las Vegas, Zion, Page, Grand Canyon, Monument Valley, Albuquerque, White Sands, Carlsbad Caverns, Fort Stockton, San Antonio, Houston, New Orleans, Destin, Orlando, Key Largo, Key West, Miami, St. Augustine, Charleston, Williamsburg, Washington, New York",
      stationen: "21 Stationen und 1 Zwischenübernachtung",
      laender: "USA (Nevada bis New York)",
      hinflug: "Zürich–Las Vegas ca. 12 Std. direkt (nur an einzelnen Wochentagen), sonst 14–17 Std.",
      rueckflug: "New York–Zürich ca. 7,5–8 Std.",
      dazwischen: "Keine Flüge dazwischen: eine Einwegmiete Las Vegas–Washington, dann Amtrak nach New York",
      tempo: "Ca. 80–85 Std. reine Fahrzeit (ca. 7’600 km), realistisch mit Pausen und Stau ca. 95–103 Std. im Auto an 20 Fahrtagen; die längsten: Charleston–Williamsburg (ca. 7–7,5 Std.), Destin–Orlando (ca. 6–7 Std.), Monument Valley–Albuquerque (ca. 5,5–6,5 Std.), Houston–New Orleans (ca. 5–6 Std.)",
      gesamt: "Ca. 130–145 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen und zurück (je ca. 2,5 Std.), Flüge mit Wartezeiten, Einreise und Mietwagen zusammen ca. 26–32 Std., Amtrak Washington–New York ca. 4–5 Std. mit Transfers, dazu ca. 95–103 Std. im Auto. Uhr −9 Std. bei der Ankunft, −6 Std. im Osten; Jetlag vor allem nach der Rückkehr.",
      wetter: "Südwesten 35–45 °C, ab Juli Monsungewitter; Texas, die Golfküste und Florida heiss und feucht mit Gewittern am Nachmittag, Hurrikansaison; im Osten schwül.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Nationalpark-Jahrespass für Nicht-Residenten 250 USD, 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Parks (u.a. Zion, Grand Canyon, Everglades).",
      hoehepunkte: "Zion, Antelope Canyon, Grand Canyon, Monument Valley, White Sands, Carlsbad Caverns, San Antonio, Space Center Houston, New Orleans, weisse Strände bei Destin, Universal und Kennedy Space Center, Florida Keys mit Korallenriff, Charleston, Washington, New York.",
      teens: "Narrows in Zion, Antelope Canyon, Dünenrutschen auf White Sands, Tropfsteinhöhle, Space Center Houston, Sumpftour in Louisiana, Universal, Raketen im Kennedy Space Center, Schnorcheln am Riff, Busch Gardens, Freiheitsstatue.",
      pro: [
        "Am meisten von den USA: Nationalparks, Wüste, Texas, New Orleans, Golfküste, Florida, Südstaaten, Washington und New York",
        "Kein Inlandflug: eine durchgehende Einwegmiete von Las Vegas bis Washington",
        "Viele Teenager-Highlights: Universal, zwei Raumfahrtzentren, Schnorcheln, Sumpftour, Antelope Canyon, Freiheitsstatue",
        "Rückflug ab New York täglich direkt"
      ],
      contra: [
        "Sehr viele Fahrtage: ca. 95–103 Std. im Auto an 20 Fahrtagen, acht Stationen mit nur einer Nacht; Tür zu Tür ca. 130–145 Std.",
        "Am teuersten (ca. {plan:usa2} CHF): Einwegmiete quer durchs Land mit hoher Rückgabegebühr, Unterkünfte in New York und Key West; Arztkosten sehr hoch",
        "Hitze im Südwesten und in Texas, Hurrikansaison in Florida und an der Golfküste",
        "Zwei Langstreckenflüge mit viel CO₂ und sehr viele Autokilometer; Hinflug direkt nur an einzelnen Wochentagen"
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
      rueckflug: "Direktflug Bangkok–Zürich ca. 11,5–12 Std.",
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
      spanien: [
        4,
        "Abwechslungsreich: Felsküste und Grotten der Algarve, Buchten von Ibiza und Formentera, Vulkanküste am Cabo de Gata, Schlucht des Caminito del Rey, Halbwüsten Bardenas Reales und Gorafe, Felsbögen der Playa de las Catedrales; keine grossen Nationalparks wie in den USA."
      ],
      marokko: [
        4,
        "Vulkanküste am Cabo de Gata, Hoher Atlas, Dadès- und Todra-Schlucht, Sanddünen des Erg Chebbi, Felsküste der Algarve, Felsbögen der Playa de las Catedrales, Baskenküste; keine grossen Nationalparks wie in den USA."
      ],
      usa: [
        5,
        "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle: spektakuläre Landschaften."
      ],
      usa2: [
        5,
        "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands, Carlsbad Caverns, Everglades und Florida Keys."
      ],
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ]
    },
    {
      kriterium: "Dschungelfeeling",
      spanien: [0, "Kein Regenwald: Halbwüsten, Küsten, Pinienwälder und im Norden grüne Hügel."],
      marokko: [0, "Kein Regenwald: Wüste, Oasen mit Palmen, Zedernwälder im Mittleren Atlas und grüne Hügel im Baskenland."],
      usa: [0, "Kein Dschungel: Wüsten, Canyons, Seen und im Osten Laubwälder."],
      usa2: [1, "Mangroven und Sümpfe in den Everglades und in Louisiana, aber kein Regenwald."],
      asien: [
        3,
        "Dschungelwanderung auf Tioman, Wasserfälle und Inselwälder; kein grosser zusammenhängender Regenwald auf der Route."
      ]
    },
    {
      kriterium: "Wüstenfeeling",
      spanien: [
        2,
        "Halbwüsten statt Sanddünen: Bardenas Reales, die Badlands von Gorafe und die Wüste von Tabernas beim Cabo de Gata."
      ],
      marokko: [
        5,
        "Das stärkste Wüstenerlebnis im Vergleich: Kamelritt und Nacht im Zeltcamp in den Sanddünen des Erg Chebbi am Rand der Sahara, dazu Steinwüsten, Oasen und Kasbahs; nur eine Nacht und im Juli sehr heiss."
      ],
      usa: [
        4,
        "Mojave-Wüste um Las Vegas, rote Felswüsten in Utah und Arizona, Monument Valley und die weissen Gipsdünen von White Sands."
      ],
      usa2: [
        4,
        "Mojave-Wüste um Las Vegas, Monument Valley, die Gipsdünen von White Sands und die Chihuahua-Wüste in New Mexico und Westtexas."
      ],
      asien: [0, "Keine Wüste: tropische Inseln, Regenwald und Städte."]
    },
    {
      kriterium: "Strand und Baden",
      spanien: [
        4,
        "Viele Strandtage auf Ibiza, Formentera, in Benidorm, am Cabo de Gata und an der Algarve, Mittelmeer ca. 23–26 °C; im Juli aber voll, und kein tropisch warmes Wasser."
      ],
      marokko: [
        3,
        "Strandtage am Cabo de Gata, in Tarifa, Cádiz, an der Algarve und in San Sebastián; weniger Badetage als bei Spanien / Portugal und oft der kühlere Atlantik."
      ],
      usa: [
        1,
        "Kaum Meer auf der Route; Baden höchstens im Lake Powell, in Hotelpools oder am Lake Michigan in Chicago."
      ],
      usa2: [
        3,
        "Weisse Strände bei Destin, die Florida Keys, Miami Beach und der Atlantik bei St. Augustine mit ca. 28–30 °C warmem Wasser; aber nur rund 7 von 34 Nächten am Meer, Gewitter am Nachmittag und Strömung bei roter Flagge."
      ],
      asien: [
        5,
        "Tioman, Perhentian Islands, Khanom, Koh Samui, Koh Tao und Hua Hin: tropische Strände mit ca. 29 °C warmem Wasser an fast jeder zweiten Station."
      ]
    },
    {
      kriterium: "Schnorcheln",
      spanien: [
        4,
        "Schnorcheln an vier Orten mit besonders klarem Wasser: im Meeresschutzgebiet der Medes-Inseln (grosse Fische, geführte Bootstour), sechs Nächte auf Ibiza und Formentera (Cala Xarraca, Punta de sa Galera, Cala Saona, Es Caló) und am Cabo de Gata (Los Escullos, Cala de San Pedro), dazu Tabarca; wenige Korallen (z.B. Gorgonien bei den Medes-Inseln), keine Riffe und kühleres Wasser als in den Tropen."
      ],
      marokko: [
        3,
        "Schnorcheln im Meeresschutzgebiet der Medes-Inseln, bei Cabo de Palos (Islas Hormigas) und am Cabo de Gata (Los Escullos, Cala de San Pedro): klares Wasser über Felsen und Seegras; wenige Korallen und keine Inseltage wie auf Ibiza."
      ],
      usa: [0, "Kein Schnorcheln im Meer; höchstens Baden im Lake Powell oder in den Narrows."],
      usa2: [
        3,
        "Korallenriff im John Pennekamp Coral Reef State Park bei Key Largo, optional Dry Tortugas; sonst kaum Schnorcheln auf der Route."
      ],
      asien: [
        5,
        "Tioman, Perhentian Islands, Koh Samui und Koh Tao: fast jede Inselstation hat Riffe, Schildkröten und Schnorchelboote."
      ]
    },
    {
      kriterium: "Abenteuer",
      spanien: [
        3,
        "Caminito del Rey, Kajak durch die Grotten der Algarve, Achterbahnen in Terra Mítica, Schnorcheln, Pisten durch die Bardenas und Gorafe; eher Entdecken als Wildnis."
      ],
      marokko: [
        4,
        "Caminito del Rey, Kamelritt und Nacht im Wüstencamp, Sandboarding, Pass über den Hohen Atlas, Medinas mit Führer, Kajak durch die Grotten der Algarve, Surfen in San Sebastián."
      ],
      usa: [4, "Durch die Narrows waten, Antelope Canyon, 2-Tage-Roadtrip und Cedar Point."],
      usa2: [
        4,
        "Narrows in Zion, Antelope Canyon, Dünenrutschen, Tropfsteinhöhle, Sumpftour, Airboat in den Everglades, Schnorcheln am Riff, Achterbahnen in Orlando und Williamsburg."
      ],
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."]
    },
    {
      kriterium: "Städte",
      spanien: [
        5,
        "Barcelona, Valencia, Granada, Sevilla, Lissabon und Porto mit Alhambra, Sagrada Família und viel Kultur."
      ],
      marokko: [
        5,
        "Barcelona, Valencia, Marrakesch, Fès, Cádiz, Sevilla, Lissabon, Porto, San Sebastián und Avignon: europäische und marokkanische Städte im Wechsel."
      ],
      usa: [5, "Las Vegas, Chicago, Washington, Philadelphia und New York mit Museen und Aussichtsplattformen."],
      usa2: [
        5,
        "Las Vegas, San Antonio, Houston, New Orleans, Miami, Charleston, Washington und New York, dazu Key West und St. Augustine."
      ],
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."]
    },
    {
      kriterium: "Gesundheit und Sicherheit",
      spanien: [
        5,
        "Europa: Krankenversicherungskarte gilt, Leitungswasser trinkbar, gute Spitäler, keine Impfungen nötig; Vorsicht bei Hitze, Taschendieben und auf langen Autofahrten."
      ],
      marokko: [
        4,
        "Fünf von sechs Wochen in Spanien, Portugal und Frankreich, dort unkompliziert. In Marokko (6 Nächte) keine Krankenversicherungskarte, kein Leitungswasser und auf Hygiene beim Essen achten; das grösste Risiko ist die extreme Hitze in der Wüste (42–45 °C) und in Marrakesch."
      ],
      usa: [
        4,
        "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze in der Wüste, sonst unkompliziert."
      ],
      usa2: [
        4,
        "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze im Südwesten, Hurrikansaison in Florida."
      ],
      asien: [
        3,
        "Singapur sehr sicher; in Malaysia und Thailand Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären; auf den Inseln (Tioman, Perhentian) ist ein Spital weit weg, Bootsfahrten bei Wellengang."
      ]
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      spanien: [
        4,
        "ca. {plan:spanien} CHF: kein Flug, Laden an Tesla-Superchargern gratis; dafür Maut, Fähren und teure Unterkünfte in der Hochsaison."
      ],
      marokko: [4, "ca. {plan:marokko} CHF: kein Flug, Supercharging gratis, Marokko günstig; dafür Fähren, Züge und Mietwagen in Marokko sowie Parkplatz in Tarifa."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Unterkünfte und Mietwagen."],
      usa2: [1, "ca. {plan:usa2} CHF: Einwegmiete Las Vegas–Washington mit Rückgabegebühr, Unterkünfte in New York, Key West und den Nationalparks."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."]
    },
    {
      kriterium: "Reisekomfort",
      spanien: [
        3,
        "Tür zu Tür wenig Reisezeit (ca. 83–86 Stunden), kein Flughafen, kein Jetlag, eigenes Auto mit viel Platz fürs Gepäck, die meisten Etappen 2–3,5 Stunden; dafür ca. 74–76 Stunden im Auto inklusive Ladestopps, am ersten und letzten Tag je ca. 8–9 Stunden. Die Fähren sind kurz (zusammen ca. 6–7 Stunden)."
      ],
      marokko: [
        2,
        "Ca. 102–107 Stunden Tür zu Tür, kein Jetlag; aber viele Wechsel zwischen eigenem Auto, Fähre, Zug und Mietwagen, Passkontrollen und mehrere lange Tage mit 7–9 Stunden."
      ],
      usa: [
        2,
        "Ca. 102–109 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, dazu am meisten Zeit im Auto (ca. 70–75 Stunden), mit 10 und 12 Stunden reiner Fahrzeit an den zwei Roadtrip-Tagen."
      ],
      usa2: [
        1,
        "Ca. 130–145 Stunden Tür zu Tür: zwei Langstreckenflüge mit Jetlag und ca. 95–103 Stunden im Auto an 20 Fahrtagen, die längsten 6–7,5 Stunden; acht Stationen mit nur einer Nacht."
      ],
      asien: [
        2,
        "Ca. 101–108 Stunden Tür zu Tür: zwei Direktflüge mit Jetlag, dazu ca. 65–70 Stunden mit Bus, Zug und Fähre und viele Umstiege mit Gepäck; niemand muss selber fahren."
      ]
    },
    {
      kriterium: "CO₂ und Umwelt (mehr Punkte = weniger CO₂)",
      spanien: [
        5,
        "Kein Flug: Elektroauto (ca. 1’200 kWh, Strom in Frankreich ca. 30 g, in Spanien und Portugal ca. 120–130 g CO₂ pro kWh) und drei kurze Fähren; grob geschätzt ca. 0,1–0,2 t CO₂ pro Person."
      ],
      marokko: [
        5,
        "Kein Flug: Elektroauto (ca. 1’100 kWh), zwei kurze Fähren, Züge und ca. 1’000 km Mietwagen mit Benzin in Marokko; grob geschätzt ca. 0,15–0,25 t CO₂ pro Person."
      ],
      usa: [
        1,
        "Zwei Langstreckenflüge (ca. 15’000 km) und ca. 6’000 km Mietwagen, grob geschätzt ca. 3–3,5 t CO₂ pro Person."
      ],
      usa2: [
        1,
        "Zwei Langstreckenflüge (ca. 15’000 km) und ca. 7’600 km Mietwagen, grob geschätzt ca. 3,5–4 t CO₂ pro Person."
      ],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ]
    }
  ]
};
