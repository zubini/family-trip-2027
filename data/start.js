// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/spanien.js usw.).
// Platzhalter in Texten: {plan:spanien}, {plan:usa}, {plan:usa2}, {plan:asien} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Ab Fr, 18.06.2027 für fünf Wochen, 2 Erwachsene und 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen dauern 33 bis 36 Nächte und sind für die Familie mit Sohn (12) und Tochter (14) geplant. Spanien / Portugal ohne Flug und Jetlag kann bis Sa, 24.07.2027 dauern, die anderen enden am Do, 22.07.2027. Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Strand und Baden, Schnorcheln, Abenteuer, Städte, Gesundheit und Sicherheit, Budget, Reisekomfort sowie CO₂ und Umwelt. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig, beim CO₂: wenig Ausstoss). Die Skala ist fest und nicht nur ein Vergleich der vier Reisen: 5 heisst Weltklasse (z.B. tropische Riffe beim Schnorcheln, kurze Etappen beim Reisekomfort), 0 heisst, dass es das auf der Reise nicht gibt. Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
  budgetIntro: "Mittelklasse inklusive Flüge bzw. Autokosten, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.",
  vergleichIntro: "Die wichtigsten Unterschiede nebeneinander.",
  entscheidIntro: "Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln, Städte und Kultur ohne Flug oder Nationalparks und Roadtrip im Vordergrund stehen.",
  reisen: {
    spanien: {
      name: "Spanien / Portugal",
      zusatz: "Roadtrip ab Brig-Glis",
      passt: "ihr ohne Flug und Jetlag reisen, Städte, Kultur und Schnorcheln im Mittelmeer verbinden möchtet und viele Stunden am Steuer in Kauf nehmt.",
      kurz: "Fünf Wochen mit dem eigenen Elektroauto im Wechsel von Städten, Strand und Natur: Barcelona, Valencia, Ibiza und Formentera, Andalusien, die Algarve, Lissabon, Porto und der Norden Spaniens.",
      route: "Brig-Glis, Sète, Barcelona, Valencia, Ibiza, Formentera, Benidorm, Granada, Cabo de Gata, Caminito del Rey, Sevilla, Algarve (Lagos), Lissabon, Porto, Playa de las Catedrales, Bilbao, Bardenas Reales, Montpellier, Brig-Glis",
      stationen: "14 Stationen und 3 Zwischenübernachtungen",
      laender: "Frankreich, Spanien, Portugal",
      hinflug: "Kein Flug: mit dem eigenen Auto ab Brig-Glis, Zwischenstopp am Meer in Sète (ca. 7–7,5 Std.), dann nach Barcelona (ca. 3–3,5 Std.)",
      rueckflug: "Mit dem Auto in zwei Tagen über Montpellier (ca. 7–7,5 und 6,5–7 Std.), Ankunft Sa, 24.07.2027",
      dazwischen: "Keine Flüge: eigenes Elektroauto, dazu drei Autofähren (Dénia–Ibiza, Ibiza–Formentera, Formentera–Dénia)",
      tempo: "Ca. 68 Std. reine Reisezeit (ca. 61 Std. Elektroauto für ca. 5’950 km und ca. 6–7 Std. Fähre), realistisch mit Pausen, Ladestopps, Check-in und Stau ca. 82–85 Std.; 3 lange Fahrtage mit 6,5–8 Std. plus Ladestopps (Brig-Glis–Sète, Bardenas–Montpellier, Montpellier–Brig-Glis), dazu Benidorm–Granada (ca. 4–4,5 Std.) und Formentera–Benidorm (Fähre und Auto); sonst meist 2–3,5 Std.",
      gesamt: "Ca. 82–85 Std. Tür zu Tür, ohne Flughafen und ohne Jetlag: davon realistisch ca. 73–75 Std. im Elektroauto inklusive ca. 11–13 Ladestopps an Superchargern (ca. 61 Std. reine Fahrzeit) und ca. 9–10 Std. für die Fähren inklusive Check-in.",
      wetter: "Heiss und trocken: in Andalusien und den Bardenas oft 35–42 °C, an den Küsten 28–32 °C; Portugal und der Norden angenehmer, Mittelmeer ca. 23–26 °C.",
      einreise: "Schengen: Identitätskarte genügt, keine Formulare. Crit’Air-Vignette für Frankreich, Registrierung für die Umweltzone Barcelona, elektronische Maut in Portugal.",
      hoehepunkte: "Sagrada Família, Oceanogràfic in Valencia, Schnorcheln an den Buchten von Ibiza und Formentera, Terra Mítica und Aqualandia in Benidorm, Alhambra und Gorafe, Cabo de Gata, Caminito del Rey, Sevilla, Kajak durch die Grotten der Algarve, Lissabon, Porto, Playa de las Catedrales, Bardenas Reales.",
      teens: "Freizeit- und Wasserparks (Terra Mítica, Aqualandia), Schnorcheln und Kajak, Grotten der Algarve, Caminito del Rey, Game-of-Thrones-Drehorte, Höhlen und Felsbögen bei Ebbe, Surfen in Galicien.",
      pro: [
        "Kein Flug und kein Jetlag, Tür zu Tür am wenigsten Reisezeit (ca. 82–85 Std.); zwei Tage länger möglich",
        "Abwechslung: sieben Nächte Schnorcheln auf Ibiza und Formentera, danach Städte, Strand und Natur im Wechsel (Granada, Cabo de Gata, Caminito, Sevilla, Algarve)",
        "Städte und Kultur: Barcelona, Valencia, Granada mit der Alhambra, Sevilla, Lissabon und Porto",
        "Unkompliziert und sicher: Europa, keine Impfungen, eigenes Auto mit viel Platz fürs Gepäck",
        "Am wenigsten CO₂ und die günstigste Variante (Laden an Superchargern gratis)"
      ],
      contra: [
        "Ca. 73–75 Std. im Auto inklusive Ladestopps, am ersten und letzten Tag je ca. 8–9 Std.",
        "Grosse Hitze in Andalusien und den Bardenas (oft 35–42 °C)",
        "Hochsaison: Strände voll; Fähren, Zufahrt fürs Auto auf Ibiza und Formentera, Unterkünfte und Alhambra früh buchen",
        "Keine Korallenriffe und kein Dschungel; der Atlantik in Galicien ist kühl"
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
      name: "USA (Miami – Las Vegas)",
      zusatz: "Florida Keys, Golfküste und Südwesten",
      passt: "ihr Strand und Schnorcheln in Florida mit Freizeitparks, Raumfahrt und den Nationalparks im Südwesten verbinden möchtet und lange Autofahrten sowie das höhere Budget in Kauf nehmt.",
      kurz: "Fünf Wochen mit dem Mietwagen von Miami über die Florida Keys, Orlando und die Golfküste durch Texas in die Nationalparks des Südwestens bis Las Vegas.",
      route: "Miami, Key West, Key Largo und Islamorada, Orlando, Destin, New Orleans, Houston, San Antonio, Fort Stockton, Carlsbad Caverns, White Sands, Santa Fe, Monument Valley, Grand Canyon, Page, Zion, Las Vegas",
      stationen: "16 Stationen und 1 Zwischenübernachtung",
      laender: "USA (Florida bis Nevada)",
      hinflug: "Direktflug Zürich–Miami ca. 10,5 Std. (täglich)",
      rueckflug: "Las Vegas–Zürich direkt ca. 10,5 Std. nur an einzelnen Wochentagen, sonst mit Umstieg ca. 14–17 Std.",
      dazwischen: "Keine Flüge dazwischen: eine Einwegmiete Miami–Las Vegas",
      tempo: "Ca. 64–65 Std. reine Fahrzeit (ca. 6’000 km), realistisch mit Pausen und Stau ca. 74–78 Std. im Auto an 16 Fahrtagen; die längsten: Santa Fe–Monument Valley (ca. 6,5–7 Std.), Orlando–Destin (ca. 6–7 Std.), New Orleans–Houston (ca. 5–6 Std.), San Antonio–Fort Stockton (ca. 5–5,5 Std.)",
      gesamt: "Ca. 108–113 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), ca. 2 Std. Wartezeit am Flughafen, Flüge, Einreise und Mietwagen zusammen ca. 34–35 Std. (Rückflug direkt, mit Umstieg mehr), dazu ca. 74–78 Std. im Auto. Uhr −6 Std. bei der Ankunft, −9 Std. in Las Vegas; Jetlag vor allem nach der Rückkehr.",
      wetter: "Florida und die Golfküste heiss und feucht mit Gewittern am Nachmittag, Hurrikansaison; Las Vegas, Zion und White Sands 38–45 °C mit Monsungewittern.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Nationalpark-Jahrespass für Nicht-Residenten 250 USD, 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Parks.",
      hoehepunkte: "Everglades, Florida Keys mit Korallenriff, Kennedy Space Center, Universal, weisse Strände bei Destin, New Orleans, Space Center Houston, Carlsbad Caverns, White Sands, Monument Valley, Grand Canyon, Antelope Canyon, Zion.",
      teens: "Schnorcheln am Riff, Airboat in den Everglades, Universal, Raketen im Kennedy Space Center, Sumpftour in Louisiana, Tropfsteinhöhle, Dünenrutschen auf White Sands, Meow Wolf.",
      pro: [
        "Strand und Schnorcheln in den Florida Keys (einziges Korallenriff vor dem US-Festland) und an der Golfküste",
        "Die Nationalparks im Südwesten wie bei Las Vegas–New York, dazu Everglades und Carlsbad Caverns",
        "Viele Teenager-Highlights: Universal, Kennedy Space Center, Space Center Houston, Airboat, Sumpftour",
        "Direktflug nach Miami, eigenes Tempo mit dem Mietwagen"
      ],
      contra: [
        "Am teuersten (ca. {plan:usa2} CHF), Einwegmiete quer durchs Land mit hoher Rückgabegebühr, Arztkosten sehr hoch",
        "Viele Fahrtage (ca. 74–78 Std. im Auto, 16 Fahrtage); Tür zu Tür ca. 108–113 Std. und Jetlag",
        "Hurrikansaison in Florida, Hitze im Südwesten (Las Vegas oft über 40 °C)",
        "Kaum Grossstädte wie New York oder Chicago, zwei Langstreckenflüge mit viel CO₂, Rückflug direkt nur an einzelnen Tagen"
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
      usa: [
        5,
        "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle: spektakuläre Landschaften."
      ],
      usa2: [
        5,
        "Everglades, Florida Keys und Golfküste, Carlsbad Caverns, White Sands, Monument Valley, Grand Canyon, Antelope Canyon und Zion."
      ],
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ]
    },
    {
      kriterium: "Dschungelfeeling",
      spanien: [0, "Kein Regenwald: Halbwüsten, Küsten, Pinienwälder und im Norden grüne Hügel."],
      usa: [0, "Kein Dschungel: Wüsten, Canyons, Seen und im Osten Laubwälder."],
      usa2: [1, "Mangroven und Sümpfe in den Everglades und in Louisiana, aber kein Regenwald."],
      asien: [
        3,
        "Dschungelwanderung auf Tioman, Wasserfälle und Inselwälder; kein grosser zusammenhängender Regenwald auf der Route."
      ]
    },
    {
      kriterium: "Strand und Baden",
      spanien: [
        4,
        "Viele Strandtage auf Ibiza, Formentera, in Benidorm, am Cabo de Gata und an der Algarve, Mittelmeer ca. 23–26 °C; im Juli aber voll, und kein tropisch warmes Wasser."
      ],
      usa: [
        1,
        "Kaum Meer auf der Route; Baden höchstens im Lake Powell, in Hotelpools oder am Lake Michigan in Chicago."
      ],
      usa2: [
        4,
        "Florida Keys und die weissen Strände der Golfküste bei Destin mit ca. 29–30 °C warmem Wasser; Gewitter am Nachmittag und Strömung bei roter Flagge."
      ],
      asien: [
        5,
        "Tioman, Perhentian Islands, Khanom, Koh Samui, Koh Tao und Hua Hin: tropische Strände mit ca. 29 °C warmem Wasser an fast jeder zweiten Station."
      ]
    },
    {
      kriterium: "Schnorcheln",
      spanien: [
        3,
        "Sieben Nächte auf Ibiza und Formentera an guten Schnorchelplätzen (Cala Xarraca, Punta de sa Galera, Cala Saona, Es Caló): sehr klares Wasser über Seegraswiesen mit vielen Fischen, dazu Cabo de Gata; aber keine Korallen und kühleres Wasser."
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
      usa: [4, "Durch die Narrows waten, Antelope Canyon, 2-Tage-Roadtrip und Cedar Point."],
      usa2: [
        4,
        "Airboat in den Everglades, Schnorcheln am Riff, Tropfsteinhöhle, Dünenrutschen, Narrows in Zion, Antelope Canyon."
      ],
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."]
    },
    {
      kriterium: "Städte",
      spanien: [
        5,
        "Barcelona, Valencia, Granada, Sevilla, Lissabon und Porto mit Alhambra, Sagrada Família und viel Kultur."
      ],
      usa: [5, "Las Vegas, Chicago, Washington, Philadelphia und New York mit Museen und Aussichtsplattformen."],
      usa2: [
        4,
        "Miami, New Orleans, Houston, San Antonio, Santa Fe und Las Vegas; ohne New York, Chicago und Washington."
      ],
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."]
    },
    {
      kriterium: "Gesundheit und Sicherheit",
      spanien: [
        5,
        "Europa: Krankenversicherungskarte gilt, Leitungswasser trinkbar, gute Spitäler, keine Impfungen nötig; Vorsicht bei Hitze, Taschendieben und auf langen Autofahrten."
      ],
      usa: [
        4,
        "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hitze in der Wüste, sonst unkompliziert."
      ],
      usa2: [
        4,
        "Sehr gute Spitäler, aber sehr teuer (Reiseversicherung mit hoher Deckung nötig); Hurrikansaison in Florida, Hitze in der Wüste."
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
        "ca. {plan:spanien} CHF: die günstigste Variante; kein Flug, Laden an Tesla-Superchargern gratis; dafür Maut, Fähren und teure Unterkünfte in der Hochsaison."
      ],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Unterkünfte und Mietwagen."],
      usa2: [1, "ca. {plan:usa2} CHF: Einwegmiete Miami–Las Vegas, Unterkünfte in den Keys und Freizeitparks."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."]
    },
    {
      kriterium: "Reisekomfort",
      spanien: [
        3,
        "Tür zu Tür am wenigsten Reisezeit (ca. 82–85 Stunden), kein Flughafen, kein Jetlag, eigenes Auto mit viel Platz fürs Gepäck, die meisten Etappen 2–3,5 Stunden; dafür ca. 73–75 Stunden im Auto inklusive Ladestopps, am ersten und letzten Tag je ca. 8–9 Stunden. Die Fähren sind kurz (zusammen ca. 6–7 Stunden)."
      ],
      usa: [
        2,
        "Ca. 102–109 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, dazu am meisten Zeit im Auto (ca. 70–75 Stunden), mit 10 und 12 Stunden reiner Fahrzeit an den zwei Roadtrip-Tagen."
      ],
      usa2: [
        2,
        "Ca. 108–113 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag (Rückflug direkt nur an einzelnen Tagen), dazu ca. 74–78 Stunden im Auto an 16 Fahrtagen, die längsten 5–7 Stunden."
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
      usa: [
        1,
        "Zwei Langstreckenflüge (ca. 15’000 km) und ca. 6’000 km Mietwagen, grob geschätzt ca. 3–3,5 t CO₂ pro Person."
      ],
      usa2: [
        1,
        "Zwei Langstreckenflüge (ca. 17’000 km) und ca. 6’000 km Mietwagen, grob geschätzt ca. 3,5–4 t CO₂ pro Person."
      ],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ]
    }
  ]
};
