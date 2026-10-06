// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/spanien.js usw.).
// Platzhalter in Texten: {plan:spanien}, {plan:usa}, {plan:asien}, {plan:bali} = Planwert, {mehrkosten} = USA minus Malaysia / Thailand.
// Reihenfolge der Reisen hier = Reihenfolge der Spalten; die Navigation folgt der Reihenfolge in index.html.
// Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Ab Fr, 18.06.2027 für fünf Wochen, 2 Erwachsene und 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen dauern 34 bis 36 Nächte und sind für die Familie mit Sohn (12) und Tochter (14) geplant. Spanien / Portugal ohne Flug und Jetlag kann bis Sa, 24.07.2027 dauern, die anderen enden am Do, 22.07.2027. Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Strand und Baden, Schnorcheln, Abenteuer, Städte, Gesundheit und Sicherheit, Budget, Reisekomfort sowie CO₂ und Umwelt. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig, beim CO₂: wenig Ausstoss). Die Skala ist fest und nicht nur ein Vergleich der vier Reisen: 5 heisst Weltklasse (z.B. tropische Riffe beim Schnorcheln, kurze Etappen beim Reisekomfort), 0 heisst, dass es das auf der Reise nicht gibt. Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
  budgetIntro: "Mittelklasse inklusive Flüge bzw. Autokosten, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.",
  vergleichIntro: "Die wichtigsten Unterschiede nebeneinander.",
  entscheidIntro: "Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln, Vulkane und Tempel, Städte und Kultur ohne Flug oder Nationalparks im Vordergrund stehen.",
  reisen: {
    spanien: {
      name: "Spanien / Portugal",
      zusatz: "Roadtrip ab Brig-Glis",
      passt: "ihr ohne Flug und Jetlag reisen, Städte, Kultur und Inseln verbinden möchtet und viele Stunden am Steuer in Kauf nehmt.",
      kurz: "Fünf Wochen mit dem eigenen Auto über Barcelona, die Balearen und Benidorm nach Andalusien, Portugal und in den Norden Spaniens. Auf der Reiseseite auch in umgekehrter Reihenfolge (Andalusien zuerst).",
      route: "Brig-Glis, Sète, Barcelona, Mallorca, Ibiza und Formentera, Benidorm, Cabo de Gata, Granada, Caminito del Rey, Sevilla, Lissabon, Porto, Playa de las Catedrales, Bilbao, Bardenas Reales, Carcassonne, Brig-Glis",
      stationen: "12 Stationen und 3 Zwischenübernachtungen",
      laender: "Frankreich, Spanien, Portugal",
      hinflug: "Kein Flug: mit dem eigenen Auto ab Brig-Glis, Zwischenstopp am Meer in Sète (ca. 7–7,5 Std.), dann nach Barcelona (ca. 3–3,5 Std.)",
      rueckflug: "Mit dem Auto in zwei Tagen über Carcassonne (ca. 6,5–7 und 7,5–8 Std.), Ankunft Sa, 24.07.2027",
      dazwischen: "Keine Flüge: eigenes Auto, dazu drei Autofähren (Barcelona–Palma, Palma–Ibiza, Ibiza–Dénia)",
      tempo: "Ca. 67 Std. reine Reisezeit (ca. 54 Std. Auto für ca. 5’500 km und ca. 13 Std. Fähre), realistisch mit Pausen, Check-in und Stau ca. 77–79 Std.; 5 lange Reisetage mit 6,5–8 Std. (Brig-Glis–Sète, Fähre Barcelona–Palma, Bardenas–Carcassonne, Carcassonne–Brig-Glis) bzw. 4,5–5 Std. (Sevilla–Lissabon)",
      gesamt: "Ca. 77–79 Std. Tür zu Tür, ohne Flughafen und ohne Jetlag: davon realistisch ca. 62–64 Std. im Auto (ca. 54 Std. reine Fahrzeit) und ca. 15 Std. auf den Fähren inklusive Check-in, wo man sich bewegen und ausruhen kann.",
      wetter: "Heiss und trocken: in Andalusien und den Bardenas oft 35–42 °C, an den Küsten 28–32 °C; Portugal und der Norden angenehmer, Mittelmeer ca. 23–26 °C.",
      einreise: "Schengen: Identitätskarte genügt, keine Formulare. Crit’Air-Vignette für Frankreich, Registrierung für die Umweltzone Barcelona, elektronische Maut in Portugal.",
      hoehepunkte: "Sagrada Família, Inselhopping mit dem Auto auf Mallorca, Ibiza und Formentera, Terra Mítica und Aqualandia in Benidorm, Cabo de Gata, Alhambra und Gorafe, Caminito del Rey, Sevilla, Lissabon, Porto, Playa de las Catedrales, Bardenas Reales.",
      teens: "Freizeit- und Wasserparks (Terra Mítica, Aqualandia, Isla Mágica), Schnorcheln und Kajak, Caminito del Rey, Game-of-Thrones-Drehorte, Höhlen und Felsbögen bei Ebbe, Surfen in Galicien.",
      pro: [
        "Kein Flug und kein Jetlag, Tür zu Tür am wenigsten Reisezeit (ca. 77–79 Std.); zwei Tage länger möglich",
        "Viele Strand- und Badetage auf Mallorca, Ibiza, Formentera und in Benidorm, Schnorcheln in klarem Mittelmeer",
        "Städte und Kultur: Barcelona, Granada mit der Alhambra, Sevilla, Lissabon und Porto",
        "Unkompliziert und sicher: Europa, keine Impfungen, eigenes Auto mit viel Platz fürs Gepäck",
        "Am wenigsten CO₂ und knapp die günstigste Variante"
      ],
      contra: [
        "Ca. 62–64 Std. am Steuer, je ca. 7–8 Std. am ersten und letzten Tag",
        "Grosse Hitze in Andalusien und den Bardenas (oft 35–42 °C)",
        "Hochsaison: Strände voll, Fähren, Unterkünfte und Alhambra früh buchen",
        "Keine Korallenriffe und kein Dschungel; der Atlantik in Galicien ist kühl"
      ]
    },
    usa: {
      name: "USA",
      zusatz: "von Las Vegas nach New York",
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
        "Mit Abstand am teuersten (ca. {plan:usa} CHF), Arztkosten sehr hoch",
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
    },
    bali: {
      name: "Malaysia / Indonesien",
      zusatz: "von Singapur nach Bali",
      passt: "Vulkane, Tempel und Abenteuer im Vordergrund stehen und ihr den langen Rückflug mit Stopp in Kauf nehmt.",
      kurz: "Fünf Wochen durch Malaysia, Java und Bali mit Vulkanen, Tempeln und Inseln.",
      route: "Singapur, Pulau Tioman, Kuala Lumpur, Jakarta, Yogyakarta, Bromo und Malang, Ijen und Banyuwangi, Ubud, Nusa Penida, Uluwatu",
      stationen: "10 Stationen",
      laender: "Singapur, Malaysia, Indonesien",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std.",
      rueckflug: "Kein Direktflug ab Denpasar, mit einem Stopp ca. 17–22 Std.",
      dazwischen: "1 Flug dazwischen (Kuala Lumpur–Jakarta, ca. 2–2,5 Std.), sonst Bus, Zug und Fähre",
      tempo: "Ca. 50 Std. reine Reisezeit mit Bus, Zug, Fähre und einem Flug, realistisch mit Wartezeiten ca. 60 Std.; 5 lange Reisetage mit 5–8 Std. (Tioman–Kuala Lumpur, Jakarta–Yogyakarta, Yogyakarta–Malang, Bromo–Banyuwangi, Banyuwangi–Ubud); dazu ein nächtlicher Ijen-Aufstieg",
      gesamt: "Ca. 101–108 Std. Tür zu Tür: Bahn Brig-Glis–Zürich Flughafen (ca. 2,5 Std.), ca. 2 Std. Wartezeit am Flughafen, Flüge (Rückflug mit Stopp) und Transfers zusammen ca. 41–48 Std., dazu ca. 60 Std. mit Bus, Zug, Fähre und einem Inlandflug. Uhr +6 Std., Jetlag vor allem nach der Ankunft.",
      wetter: "Trockenzeit auf Java und Bali (beste Reisezeit, Bali Hochsaison); Bromo und Ijen sind nachts sehr kalt.",
      einreise: "Visa on Arrival bzw. e-VOA für 30 Tage reicht (ca. 23 Tage Aufenthalt), dazu Einreiseformular und Touristenabgabe für Bali. Singapur und Malaysia visafrei.",
      hoehepunkte: "Borobudur und Prambanan, Sonnenaufgang am Bromo, «Blue Fire» am Ijen, Ubud, Nusa Penida mit Mantarochen, Uluwatu.",
      teens: "Jeeptour auf den Bromo, Ijen-Nachtaufstieg, Höhlen-Tubing, Schnorcheln, Surf-Schnupperstunde.",
      pro: [
        "Trockenzeit auf Java und Bali, die beste Reisezeit",
        "Vulkane Bromo und Ijen, Borobudur und Prambanan, Reisterrassen bei Ubud und Mantarochen bei Nusa Penida",
        "Günstig (ca. {plan:bali} CHF)"
      ],
      contra: [
        "Rückflug mit Stopp (ca. 17–22 Std.), ein Inlandflug und lange Zugtage; Tür zu Tür ca. 101–108 Std. und Jetlag",
        "Gesundheit: Dengue, Tollwut-Risiko, Methanol in Getränken, kein Leitungswasser",
        "Der Ijen-Nachtaufstieg ist für den Sohn (12) anspruchsvoll",
        "Am meisten CO₂ (ca. 24’000 km Flug); auf Bali oft Wellen statt ruhiger Badestrände"
      ]
    }
  },
  bewertung: [
    {
      kriterium: "Natur und Landschaft",
      spanien: [
        3,
        "Einzelne starke Naturziele zwischen den Städten: Halbwüsten Bardenas Reales und Gorafe, Vulkanküste am Cabo de Gata, Schlucht des Caminito del Rey, Felsbögen der Playa de las Catedrales und die Buchten der Balearen."
      ],
      usa: [
        5,
        "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle: die spektakulärsten Landschaften aller Reisen."
      ],
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ],
      bali: [
        4,
        "Vulkane wie Bromo und Ijen, Reisterrassen bei Ubud und die Klippen von Nusa Penida; dramatisch und abwechslungsreich."
      ]
    },
    {
      kriterium: "Dschungelfeeling",
      spanien: [0, "Kein Regenwald: Halbwüsten, Küsten, Pinienwälder und im Norden grüne Hügel."],
      usa: [0, "Kein Dschungel: Wüsten, Canyons, Seen und im Osten Laubwälder."],
      asien: [
        3,
        "Dschungelwanderung auf Tioman, Wasserfälle und Inselwälder; kein grosser zusammenhängender Regenwald auf der Route."
      ],
      bali: [3, "Tioman, dazu Wasserfälle und Vulkanlandschaften auf Java und Bali; Dschungel eher als Kulisse."]
    },
    {
      kriterium: "Strand und Baden",
      spanien: [
        4,
        "Viele Strandtage auf Mallorca, Ibiza, Formentera, in Benidorm und am Cabo de Gata, Mittelmeer ca. 23–26 °C; im Juli aber voll, und kein tropisch warmes Wasser."
      ],
      usa: [
        1,
        "Kaum Meer auf der Route; Baden höchstens im Lake Powell, in Hotelpools oder am Lake Michigan in Chicago."
      ],
      asien: [
        5,
        "Tioman, Perhentian Islands, Khanom, Koh Samui, Koh Tao und Hua Hin: tropische Strände mit ca. 29 °C warmem Wasser an fast jeder zweiten Station."
      ],
      bali: [
        3,
        "Tioman, Nusa Penida und Uluwatu: schöne Buchten, aber auf Bali oft Wellen und Strömung, auf Java keine Badestrände."
      ]
    },
    {
      kriterium: "Schnorcheln",
      spanien: [
        2,
        "Mallorca, Ibiza, Formentera und Cabo de Gata: klares Mittelmeer mit Fischen und Seegras, aber keine Korallen und kühleres Wasser."
      ],
      usa: [0, "Kein Schnorcheln im Meer; höchstens Baden im Lake Powell oder in den Narrows."],
      asien: [
        5,
        "Tioman, Perhentian Islands, Koh Samui und Koh Tao: fast jede Inselstation hat Riffe, Schildkröten und Schnorchelboote."
      ],
      bali: [3, "Tioman und die Mantarochen bei Nusa Penida; auf Java gibt es keine Riffe."]
    },
    {
      kriterium: "Abenteuer",
      spanien: [
        3,
        "Caminito del Rey, Achterbahnen in Terra Mítica, Kajak und Coasteering, Pisten durch die Bardenas und Gorafe; eher Entdecken als Wildnis."
      ],
      usa: [4, "Durch die Narrows waten, Antelope Canyon, 2-Tage-Roadtrip und Cedar Point."],
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."],
      bali: [4, "Bromo-Jeep bei Nacht, Ijen-Aufstieg zum «Blue Fire», Höhlen-Tubing und Surfen."]
    },
    {
      kriterium: "Städte",
      spanien: [
        5,
        "Barcelona, Palma, Granada, Sevilla, Lissabon, Porto und Bilbao mit Alhambra, Sagrada Família und viel Kultur."
      ],
      usa: [5, "Las Vegas, Chicago, Washington, Philadelphia und New York mit Museen und Aussichtsplattformen."],
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."],
      bali: [3, "Singapur, Kuala Lumpur, Jakarta und Yogyakarta; Bali ist eher Kultur und Natur als Stadt."]
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
      asien: [
        3,
        "Singapur sehr sicher; in Malaysia und Thailand Dengue-Mückenschutz, kein Leitungswasser, Impfstatus vorab klären; auf den Inseln (Tioman, Perhentian) ist ein Spital weit weg, Bootsfahrten bei Wellengang."
      ],
      bali: [
        2,
        "Dengue, Tollwut-Risiko, Methanol in selbst gemischten Getränken, kein Leitungswasser, Impfungen vorab klären; Schwefelgase am Ijen, steile Strassen auf Nusa Penida."
      ]
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      spanien: [
        4,
        "ca. {plan:spanien} CHF: knapp die günstigste Variante; kein Flug, dafür Benzin, Maut, Fähren und teure Unterkünfte in der Hochsaison."
      ],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Unterkünfte und Mietwagen."],
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."],
      bali: [4, "ca. {plan:bali} CHF: fast gleich wie Malaysia / Thailand."]
    },
    {
      kriterium: "Reisekomfort",
      spanien: [
        3,
        "Tür zu Tür am wenigsten Reisezeit (ca. 77–79 Stunden), kein Flughafen, kein Jetlag, eigenes Auto mit viel Platz fürs Gepäck; dafür ca. 62–64 Stunden am Steuer, je ca. 7–8 Stunden am ersten und letzten Tag. Auf den Fähren (ca. 15 Stunden) kann man sich bewegen und ausruhen."
      ],
      usa: [
        2,
        "Ca. 102–109 Stunden Tür zu Tür: zwei Langstreckenflüge mit Einreise und Jetlag, dazu am meisten Zeit im Auto (ca. 70–75 Stunden), mit 10 und 12 Stunden reiner Fahrzeit an den zwei Roadtrip-Tagen."
      ],
      asien: [
        2,
        "Ca. 101–108 Stunden Tür zu Tür: zwei Direktflüge mit Jetlag, dazu ca. 65–70 Stunden mit Bus, Zug und Fähre und viele Umstiege mit Gepäck; niemand muss selber fahren."
      ],
      bali: [
        1,
        "Ca. 101–108 Stunden Tür zu Tür: Rückflug mit Stopp (17–22 Stunden), ein Inlandflug, lange Zugtage auf Java, viele Umstiege mit Gepäck und Jetlag; dazu der nächtliche Ijen-Aufstieg."
      ]
    },
    {
      kriterium: "CO₂ und Umwelt (mehr Punkte = weniger CO₂)",
      spanien: [
        4,
        "Kein Flug: eigenes Auto (ca. 5’500 km) und drei Fähren, grob geschätzt ca. 0,3–0,5 t CO₂ pro Person."
      ],
      usa: [
        1,
        "Zwei Langstreckenflüge (ca. 15’000 km) und ca. 6’000 km Mietwagen, grob geschätzt ca. 3–3,5 t CO₂ pro Person."
      ],
      asien: [
        1,
        "Zwei Langstreckenflüge (ca. 19’000 km), unterwegs Bus, Zug und Fähre, grob geschätzt ca. 4 t CO₂ pro Person."
      ],
      bali: [
        1,
        "Zwei Langstreckenflüge mit Stopp und ein Flug Kuala Lumpur–Jakarta (zusammen ca. 24’000 km), grob geschätzt ca. 5 t CO₂ pro Person."
      ]
    }
  ]
};
