// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/marokko.js usw.).
// Platzhalter in Texten: {plan:marokko}, {plan:kanaren}, {plan:usa}, {plan:asien} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Sa, 19.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen dauern vom Sa, 19.06.2027 bis zum Sa, 24.07.2027 und sind für die Familie mit Sohn (12) und Tochter (14) geplant: die Reise mit dem eigenen Auto und die Kanaren (Tagesflüge) 35 Nächte, die Fernreisen 34 Nächte vor Ort (Hinflug am Abend bzw. Nachtflug zurück). Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Wüstenfeeling, Strand und Baden, Schnorcheln, Abenteuer, Städte, Gesundheit und Sicherheit, Budget, Reisekomfort sowie CO₂ und Umwelt. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig, beim CO₂: wenig Ausstoss). Die Skala ist fest und nicht nur ein Vergleich der Reisen: 5 heisst Weltklasse (z.B. tropische Riffe beim Schnorcheln, kurze Etappen beim Reisekomfort), 0 heisst, dass es das auf der Reise nicht gibt. Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
  budgetIntro: "Mittelklasse inklusive Flüge bzw. Autokosten, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.",
  vergleichIntro: "Die wichtigsten Unterschiede nebeneinander.",
  entscheidIntro: "Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln in den Tropen, Ferien mit kurzen Wegen, Städte und Kultur ohne Flug oder Nationalparks und Roadtrip im Vordergrund stehen.",
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
    kanaren: {
      name: "Kanarische Inseln",
      zusatz: "Ferien auf Fuerteventura und Teneriffa",
      passt: "ihr vor allem Ferien mit Strand, Pool und kurzen Wegen möchtet, dazu Teide, Wale und Wasserpark, ohne lange Flüge und ohne Jetlag; Städte und Kultur stehen nicht im Vordergrund.",
      kurz: "Fünf Wochen Kanaren mit Direktflügen ab Zürich: zwei Wochen Strand, Dünen und Surfen auf Fuerteventura, drei Wochen Teneriffa mit Teide, Lorbeerwald, Siam Park und Walen. Als Variante eine Rundreise über fünf Inseln.",
      route: "Fuerteventura (Corralejo, Morro Jable), (Fähre) Teneriffa (Puerto de la Cruz, Costa Adeje)",
      stationen: "4 Stationen auf zwei Inseln",
      laender: "Spanien (Kanarische Inseln)",
      hinflug: "Direktflug Zürich–Fuerteventura ca. 3,75–4 Std. (Edelweiss, im Sommer 2026 samstags um ca. 6.20 Uhr; Sommerflugplan 2027 noch offen)",
      rueckflug: "Direktflug Teneriffa Süd–Zürich ca. 4–4,25 Std. am Sa, 24.07.2027, Ankunft am Nachmittag",
      dazwischen: "Mietwagen auf beiden Inseln, eine Fähre Morro Jable–Santa Cruz de Tenerife (ca. 4–4,5 Std.)",
      tempo: "Ca. 5 Std. im Mietwagen an 4 Fahrtagen (längste Fahrt Corralejo–Morro Jable ca. 1,75–2 Std.) und eine Fähre (ca. 4–4,5 Std.); zusammen mit Flügen und Bahn ca. 22 Std. reine Reisezeit, realistisch ca. 28–31 Std. Tür zu Tür.",
      gesamt: "Ca. 28–31 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std., wegen des frühen Abflugs am Vorabend), ca. 2 Std. am Flughafen, zwei Direktflüge je ca. 4 Std., ca. 5 Std. im Mietwagen und eine Fähre (ca. 4–4,5 Std.) mit Check-in. Uhr −1 Std., kein Jetlag.",
      wetter: "Meist 25–29 °C, nachts ca. 20 °C; im Juli viel Wind auf Fuerteventura, im Norden Teneriffas oft Wolken. Bei Calima (Saharastaub) heiss und dunstig. Atlantik ca. 21–22 °C.",
      einreise: "Spanien und Schengen: Identitätskarte genügt, kein Visum. Europäische Krankenversicherungskarte gilt. Bewilligungen für Isla de Lobos, Teide-Gipfel und Masca vorab reservieren.",
      hoehepunkte: "Dünen von Corralejo, Isla de Lobos, Surfkurs, Cofete und Sotavento, Teide mit der Seilbahn, Lorbeerwald von Anaga, La Laguna, Loro Parque, Siam Park, Wale und Delfine, Meeresschildkröten in El Puertito, Masca-Schlucht.",
      teens: "Surfkurs, Siam Park, Bootstour zu den Walen, Schnorcheln mit Schildkröten, Sandrutschen in den Dünen, Teide, Masca-Schlucht.",
      pro: [
        "Sehr wenig Reisezeit (ca. 28–31 Std. Tür zu Tür), Direktflüge von ca. 4 Std., kein Jetlag (Uhr −1 Std.)",
        "Echte Ferien mit langen Aufenthalten, Pool und Strand, dazu Teide, Wale, Siam Park und Surfen",
        "Angenehmes Klima um 25–29 °C statt 38–45 °C; europäischer Standard, Identitätskarte genügt",
        "Günstig (ca. {plan:kanaren} CHF); als Variante eine Rundreise über fünf Inseln mit mehr Abwechslung"
      ],
      contra: [
        "Wenig Städte und Kultur, eher Feriengebiete; weniger Abwechslung als die Rundreisen",
        "Atlantik kühl (ca. 21–22 °C), keine Riffe, im Juli sehr windig auf Fuerteventura",
        "Hochsaison in den Sommerferien: Flüge und Apartments früh ausgebucht; Sommerflugplan 2027 noch offen, Abflug sehr früh am Morgen",
        "Zwei Flüge mit CO₂ (ca. 1,3–1,5 t pro Person), auch wenn deutlich weniger als bei den Fernreisen"
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
      hinflug: "Zürich–Las Vegas ca. 12 Std. direkt (nur an einzelnen Wochentagen, Sommerflugplan 2027 noch offen), sonst 14–17 Std.",
      rueckflug: "New York–Zürich ca. 7,5–8 Std. als Nachtflug am Fr, 23.07.2027, Ankunft Sa, 24.07.2027",
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
    asien: {
      name: "Malaysia / Thailand",
      zusatz: "von Singapur nach Bangkok",
      passt: "Schnorcheln, tropische Inseln und Strand im Vordergrund stehen und ihr dazu Singapur, Kuala Lumpur, Penang und Bangkok erleben möchtet.",
      kurz: "Fünf Wochen über Land und Wasser durch Singapur, Malaysia und Thailand.",
      route: "Singapur, Pulau Tioman, Kuala Lumpur, Perhentian Islands, Penang, Khanom, Koh Samui, Koh Tao, Hua Hin, Bangkok",
      stationen: "10 Stationen und 2 Zwischenübernachtungen",
      laender: "Singapur, Malaysia, Thailand",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std.",
      rueckflug: "Direktflug Bangkok–Zürich ca. 11,5–12 Std. am Sa, 24.07.2027 um die Mittagszeit, Ankunft am Abend",
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
      kanaren: [4, "Teide-Nationalpark (Unesco) mit Vulkanlandschaft, Dünen von Corralejo, Vulkaninsel Lobos, Cofete, Lorbeerwald von Anaga und die Klippen von Los Gigantes; kleiner und weniger spektakulär als die Nationalparks der USA."],
      usa: [
        5,
        "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle: spektakuläre Landschaften."
      ],
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ]
    },
    {
      kriterium: "Dschungelfeeling",
      marokko: [0, "Kein Regenwald: Steinwüste, Palmengärten in Marrakesch und grüne Hügel im Baskenland."],
      kanaren: [2, "Kein Regenwald, aber Lorbeerwald (Nebelwald) im Anaga-Gebirge auf Teneriffa; in der Rundreise dazu Garajonay auf La Gomera."],
      usa: [0, "Kein Dschungel: Wüsten, Canyons, Seen und im Osten Laubwälder."],
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
      kanaren: [3, "Sanddünen von Corralejo, die kahle Halbwüste Fuerteventuras und die Vulkanlandschaft am Teide; keine Wüstennacht wie in Marokko."],
      usa: [
        4,
        "Mojave-Wüste um Las Vegas, rote Felswüsten in Utah und Arizona, Monument Valley und die weissen Gipsdünen von White Sands."
      ],
      asien: [0, "Keine Wüste: tropische Inseln, Regenwald und Städte."]
    },
    {
      kriterium: "Strand und Baden",
      marokko: [
        4,
        "Vier Nächte auf Formentera, dazu Costa Brava, Benidorm, Cabo de Gata, Tarifa, Cádiz, Algarve und San Sebastián; im Juli voll."
      ],
      kanaren: [4, "Lange helle Strände auf Fuerteventura, Lobos, Sotavento, Pools und Badebuchten auf Teneriffa; Atlantik ca. 21–22 °C, im Juli windig, auf Strömungen achten."],
      usa: [
        1,
        "Kaum Meer auf der Route; Baden höchstens im Lake Powell, in Hotelpools oder am Lake Michigan in Chicago."
      ],
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
      kanaren: [3, "Atlantik-Schnorcheln mit Meeresschildkröten in El Puertito, Felsbecken in Abades, Isla de Lobos; Wasser ca. 21–22 °C, keine Korallenriffe."],
      usa: [0, "Kein Schnorcheln im Meer; höchstens Baden im Lake Powell oder in den Narrows."],
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
      kanaren: [3, "Surfkurs, Wind- und Kitesurfen, Teide mit Seilbahn oder zu Fuss, Masca-Schlucht, Bootstour zu den Walen, Siam Park; eher Ferien als Abenteuer."],
      usa: [4, "Durch die Narrows waten, Antelope Canyon, 2-Tage-Roadtrip und Cedar Point."],
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."]
    },
    {
      kriterium: "Städte",
      marokko: [
        5,
        "Barcelona, Valencia, Casablanca, Marrakesch, Fès, Cádiz, Sevilla, Lissabon, Porto, San Sebastián und Carcassonne: europäische und marokkanische Städte im Wechsel."
      ],
      kanaren: [2, "La Laguna (Unesco), La Orotava, Santa Cruz und Puerto de la Cruz; keine Grossstadt auf der Route (in der Rundreise dazu Las Palmas)."],
      usa: [5, "Las Vegas, Chicago, Washington, Philadelphia und New York mit Museen und Aussichtsplattformen."],
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."]
    },
    {
      kriterium: "Gesundheit und Sicherheit",
      marokko: [
        4,
        "Rund vier von fünf Wochen in Spanien, Portugal und Frankreich, dort unkompliziert. In Marokko (6 Nächte) keine Krankenversicherungskarte, kein Leitungswasser und auf Hygiene beim Essen achten; das grösste Risiko ist die Hitze in Marrakesch, in der Agafay-Wüste und in Fès (38–42 °C)."
      ],
      kanaren: [5, "Spanien mit europäischem Standard, Krankenversicherungskarte gilt, kurze Wege, angenehmes Klima; auf Strömungen achten (nur an bewachten Stränden baden) und auf die starke Sonne."],
      usa: [
        4,
        "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze in der Wüste, sonst unkompliziert."
      ],
      asien: [
        3,
        "Singapur sehr sicher; in Malaysia und Thailand Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären; auf den Inseln (Tioman, Perhentian) ist ein Spital weit weg, Bootsfahrten bei Wellengang."
      ]
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      marokko: [4, "ca. {plan:marokko} CHF: kein Flug, Supercharging gratis, Marokko günstig; dafür Fähren und Züge in Marokko sowie Parkplatz in Tarifa."],
      kanaren: [4, "ca. {plan:kanaren} CHF: kurze Flüge, Apartments mit Küche; dafür Hochsaison in den Sommerferien und zwei Mietwagen."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Unterkünfte und Mietwagen."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."]
    },
    {
      kriterium: "Reisekomfort",
      marokko: [
        3,
        "Ca. 96–103 Stunden Tür zu Tür, kein Jetlag, in Marokko kein Fahren; aber Wechsel zwischen eigenem Auto, Fähre und Zug, Passkontrollen, ein langer Zugtag Marrakesch–Fès und mehrere Tage mit 7–9 Stunden."
      ],
      kanaren: [5, "Ca. 28–31 Stunden Tür zu Tür, Direktflüge von ca. 4 Stunden, kein Jetlag, nur vier Unterkünfte und kurze Fahrten; einziger langer Tag ist die Fähre nach Teneriffa."],
      usa: [
        2,
        "Ca. 102–109 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, dazu am meisten Zeit im Auto (ca. 70–75 Stunden), mit 10 und 12 Stunden reiner Fahrzeit an den zwei Roadtrip-Tagen."
      ],
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
      kanaren: [3, "Zwei Mittelstreckenflüge (zusammen ca. 6’500 km pro Person), Mietwagen und eine Fähre; grob geschätzt ca. 1,3–1,5 t CO₂ pro Person."],
      usa: [
        1,
        "Zwei Langstreckenflüge (ca. 15’000 km) und ca. 6’000 km Mietwagen, grob geschätzt ca. 3–3,5 t CO₂ pro Person."
      ],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ]
    }
  ]
};
