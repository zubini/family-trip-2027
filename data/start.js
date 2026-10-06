// Einstiegsseite: Vergleich der Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/asien.js usw.).
// Platzhalter in Texten: {plan:asien}, {plan:bali}, {plan:usa}, {plan:japan}, {plan:costarica} = Planwert, {mehrkosten} = USA minus Singapur–Bangkok.
// Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene, 2 Kids",
  untertitel: "Verschiedene Reisevarianten als Fahrplan für eine Entscheidung.",
  reisenIntro: "Alle Reisen dauern 33 bis 34 Nächte und sind für die Familie mit Sohn (12) und Tochter (14) geplant. Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Schnorcheln, Abenteuer, Städte, Budget und Reisekomfort. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig). Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
  empfehlung: [
    "Sollen Schnorcheln und Dschungelfeeling zusammenkommen, empfiehlt sich <b>Singapur–Bangkok</b>. Wer vor allem Regenwald, Tiere und Abenteuer sucht, ist mit <b>Costa Rica</b> am besten bedient; geschnorchelt wird dort nur an wenigen Orten. Für Grossstädte, Kultur und bequemes Reisen mit dem Zug passt <b>Japan</b>, allerdings mit Regenzeit und schwüler Hitze. <b>Las Vegas–New York</b> bietet die grössten Landschaften und Städte ohne Schnorcheln, ist aber am teuersten. <b>Singapur–Bali</b> punktet mit Vulkanen, Reisterrassen und Inseln, hat aber den langen Rückflug als Nachteil.",
    "Mehr Dschungel bei Singapur–Bangkok: Khao Sok (Regenwald und Cheow-Lan-See) lässt sich in die Route einbauen. Dafür liessen sich Khanom oder Penang kürzen."
  ],
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.",
  vergleichIntro: "Die wichtigsten Unterschiede nebeneinander.",
  entscheidIntro: "Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln, Vulkane und Tempel, Regenwald und Abenteuer, Städte und Kultur oder Nationalparks im Vordergrund stehen.",
  reisen: {
    asien: {
      name: "Singapur–Bangkok",
      zusatz: "über Malaysia und Thailand",
      passt: "ihr Schnorcheln, Inseln und Strand wollt und trotzdem Singapur, Kuala Lumpur und Bangkok sehen möchtet.",
      kurz: "Fünf Wochen über Land und Wasser durch Singapur, Malaysia und Thailand.",
      route: "Singapur, Pulau Tioman, Kuala Lumpur, Perhentian Islands, Penang, Khanom, Koh Samui, Koh Tao, Hua Hin, Bangkok",
      stationen: "10 Stationen und 2 Zwischenübernachtungen",
      laender: "Singapur, Malaysia, Thailand",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std.",
      rueckflug: "Direktflug Bangkok–Zürich ca. 11,5–12 Std.",
      dazwischen: "Keine Flüge dazwischen, alles per Bus, Zug und Fähre",
      tempo: "Ca. 55–60 Std. reine Reisezeit mit Bus, Zug und Fähre, realistisch mit Wartezeiten ca. 65–70 Std.; 6 lange Reisetage mit 5–9 Std. (Tioman–Kuala Lumpur, Kuala Lumpur–Kuala Besut, Perhentian–Penang, Penang–Hat Yai, Hat Yai–Khanom, Koh Tao–Hua Hin)",
      wetter: "Penang und Bangkok haben Regenzeit; die Ostküste Malaysias (Tioman, Perhentian) und der Golf von Thailand (Samui, Tao) sind meist ruhiger.",
      einreise: "Singapur und Malaysia visafrei. Thailand: seit 15.09.2026 nur noch 30 Tage visafrei und höchstens zwei Landgrenz-Einreisen pro Jahr, Länderliste prüfen. Online-Anmeldungen (SG Arrival Card, MDAC, TDAC).",
      hoehepunkte: "Schnorcheln auf Tioman, den Perhentians, Samui und Koh Tao, Street-Food in Penang, Delfine bei Khanom, Ang Thong, Grand Palace und Wat Arun in Bangkok.",
      teens: "Schnorcheln, Inselhopping, Wasserparks, Sentosa mit Universal Studios, Kajak.",
      pro: [
        "Viele Strand- und Schnorchelstationen",
        "Direktflüge hin und zurück, kein Flug dazwischen",
        "Günstigste Variante zusammen mit Indonesien"
      ],
      contra: [
        "Viele Etappen und lange Reisetage",
        "Regenzeit in Penang und Bangkok",
        "Tioman und Perhentian ähneln sich",
        "Einreiseregeln für Thailand (30 Tage visafrei) prüfen"
      ]
    },
    bali: {
      name: "Singapur–Bali",
      zusatz: "über Malaysia und Java",
      passt: "Abenteuer mit Vulkanen und Tempeln im Vordergrund stehen und ihr den langen Rückflug mit Stopp in Kauf nehmt.",
      kurz: "Fünf Wochen durch Malaysia, Java und Bali mit Vulkanen, Tempeln und Inseln.",
      route: "Singapur, Pulau Tioman, Kuala Lumpur, Jakarta, Yogyakarta, Bromo und Malang, Ijen und Banyuwangi, Ubud, Nusa Penida, Uluwatu",
      stationen: "10 Stationen",
      laender: "Singapur, Malaysia, Indonesien",
      hinflug: "Direktflug Zürich–Singapur ca. 12–13 Std.",
      rueckflug: "Kein Direktflug ab Denpasar, mit einem Stopp ca. 17–22 Std.",
      dazwischen: "1 Flug dazwischen (Kuala Lumpur–Jakarta, ca. 2–2,5 Std.), sonst Bus, Zug und Fähre",
      tempo: "Ca. 50 Std. reine Reisezeit mit Bus, Zug, Fähre und einem Flug, realistisch mit Wartezeiten ca. 60 Std.; 5 lange Reisetage mit 5–8 Std. (Tioman–Kuala Lumpur, Jakarta–Yogyakarta, Yogyakarta–Malang, Bromo–Banyuwangi, Banyuwangi–Ubud); dazu ein nächtlicher Ijen-Aufstieg",
      wetter: "Trockenzeit auf Java und Bali (beste Reisezeit, Bali Hochsaison); Bromo und Ijen sind nachts sehr kalt.",
      einreise: "Visa on Arrival bzw. e-VOA für 30 Tage reicht (ca. 23 Tage Aufenthalt), dazu Einreiseformular und Touristenabgabe für Bali. Singapur und Malaysia visafrei.",
      hoehepunkte: "Borobudur und Prambanan, Sonnenaufgang am Bromo, «Blue Fire» am Ijen, Ubud, Nusa Penida mit Mantarochen, Uluwatu.",
      teens: "Jeeptour auf den Bromo, Ijen-Nachtaufstieg, Höhlen-Tubing, Schnorcheln, Surf-Schnupperstunde.",
      pro: [
        "Trockenzeit auf Java und Bali",
        "Vulkane, Tempel und Strände in grosser Abwechslung",
        "Günstig, ähnlich wie Thailand"
      ],
      contra: [
        "Rückflug mit Stopp (ca. 17–22 Std.)",
        "Ein Flug dazwischen und lange Zugtage auf Java",
        "Ijen-Nachtaufstieg ist für den Sohn (12) anspruchsvoll"
      ]
    },
    usa: {
      name: "Las Vegas–New York",
      zusatz: "quer durch die USA",
      passt: "Roadtrip, Nationalparks und Grossstädte wichtiger sind als Dschungel und Schnorcheln und das Budget (rund {mehrkosten} CHF mehr) passt.",
      kurz: "Fünf Wochen quer durch die USA mit Nationalparks, Grossen Seen und Grossstädten.",
      route: "Las Vegas, Zion, Page, Grand Canyon, Monument Valley, Santa Fe, White Sands, Chicago, Sandusky, Niagara Falls, Washington, Philadelphia, New York",
      stationen: "13 Stationen und 1 Zwischenübernachtung",
      laender: "USA (Nevada bis New York)",
      hinflug: "Zürich–Las Vegas ca. 12 Std. direkt (nicht ganzjährig), sonst 14–17 Std.",
      rueckflug: "New York–Zürich ca. 7,5–8 Std.",
      dazwischen: "Keine Flüge dazwischen: Mietwagen und 2-Tage-Roadtrip, im Osten Amtrak",
      tempo: "Ca. 60 Std. reine Fahrzeit (ca. 5’800 km), realistisch mit Pausen und Stau ca. 70–75 Std. im Auto, an 11 Fahrtagen: Roadtrip mit 10 und 12 Std., 5 Tage mit 4–7 Std., 4 Tage mit 2,5–3,5 Std.",
      wetter: "Las Vegas, Zion und White Sands 38–45 °C; ab Juli Monsungewitter und Sturzfluten im Südwesten; im Osten heiss und schwül mit Gewittern.",
      einreise: "ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Nationalpark-Jahrespass für Nicht-Residenten 250 USD, 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Parks.",
      hoehepunkte: "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands, Chicago, Niagarafälle, Washington, New York.",
      teens: "Cedar Point (Achterbahnen), Meow Wolf, Sandboarding auf White Sands, Smithsonian, New York.",
      pro: [
        "Kurze Flüge (ca. 12 und 7,5–8 Std.)",
        "Grosse Naturwunder und Städte mit vielen Teenager-Highlights",
        "Eigenes Tempo mit dem Mietwagen"
      ],
      contra: [
        "Mit Abstand am teuersten",
        "Hitze und Monsun im Südwesten im Juli",
        "Realistisch ca. 70–75 Std. im Auto, davon 2 sehr lange Fahrtage",
        "Parkgebühren und ESTA-Regeln im Wandel"
      ]
    },
    japan: {
      name: "Japan",
      zusatz: "Rundreise ab Tokio",
      passt: "Städte, Kultur und Essen wichtig sind, ihr bequem mit dem Zug reisen möchtet und auf tropische Riffe verzichten könnt.",
      kurz: "Fünf Wochen mit dem Zug von Tokio über Kyoto und Hiroshima bis zum Regenwald von Yakushima.",
      route: "Tokio, Nikko, Hakone, Takayama, Kyoto, Osaka, Hiroshima, Yakushima, Okayama und Naoshima, Shimoda, Tokio",
      stationen: "11 Stationen und 1 Zwischenübernachtung",
      laender: "Japan",
      hinflug: "Direktflug Zürich–Tokio ca. 13 Std.",
      rueckflug: "Direktflug Tokio–Zürich ca. 14,5 Std. (nicht täglich)",
      dazwischen: "Keine Flüge dazwischen: Shinkansen, Züge und Schnellfähre",
      tempo: "Ca. 35 Std. reine Reisezeit mit Bahn und Fähre, realistisch ca. 40–45 Std.; 4 lange Reisetage mit 4–7 Std. (Nikko–Hakone, Hakone–Takayama, Yakushima–Okayama, Okayama–Shimoda)",
      wetter: "Regenzeit bis Mitte oder Ende Juli, danach heiss und schwül (30–35 °C); Taifune ab Juli möglich, in den Bergen kühler.",
      einreise: "Visumfrei bis 90 Tage, Einreiseformular online über «Visit Japan Web». Die Reisegenehmigung JESTA kommt erst ab 2028.",
      hoehepunkte: "Tokio, Fushimi Inari und Gion in Kyoto, Shirakawa-go, Universal Studios in Osaka, Miyajima, Moosregenwald und Schildkröten auf Yakushima, Naoshima.",
      teens: "Universal Studios mit Super Nintendo World, DisneySea, teamLab, Akihabara, Arcades, Schnorcheln mit Schildkröten, Onsen.",
      pro: [
        "Direktflüge und bequemes, pünktliches Reisen mit dem Zug",
        "Sehr sicher, sauber und gut organisiert",
        "Städte, Kultur und Essen mit vielen Teenager-Highlights"
      ],
      contra: [
        "Regenzeit und schwüle Hitze im Juli",
        "Kaum Schnorcheln, wenig Dschungel",
        "Teure Unterkünfte, Zimmer für vier sind selten",
        "Taifune können die Fähre nach Yakushima stoppen"
      ]
    },
    costarica: {
      name: "Costa Rica",
      zusatz: "Rundreise ab San José",
      passt: "Regenwald, Tiere und Abenteuer im Vordergrund stehen und ihr auf Grossstädte verzichten könnt.",
      kurz: "Fünf Wochen Regenwald, Vulkane und zwei Meere mit Mietwagen und Boot.",
      route: "Tortuguero, Puerto Viejo und Cahuita, La Fortuna und Arenal, Monteverde, Manuel Antonio, Uvita, Drake Bay, San Gerardo de Dota, Turrialba",
      stationen: "9 Stationen und 2 Nächte in Alajuela",
      laender: "Costa Rica",
      hinflug: "Direktflug Zürich–San José ca. 12,5 Std. (ca. 3× pro Woche)",
      rueckflug: "Direktflug San José–Zürich ca. 11 Std.",
      dazwischen: "Keine Flüge dazwischen: Shuttle und Boot an der Karibik, danach Mietwagen, Boot nach Drake Bay",
      tempo: "Ca. 35–40 Std. reine Fahrzeit, realistisch ca. 45 Std.; 4 lange Reisetage mit 4,5–6 Std. (San José–Tortuguero, Tortuguero–Puerto Viejo, Puerto Viejo–La Fortuna, Drake Bay–San Gerardo de Dota)",
      wetter: "Grüne Saison: morgens oft sonnig, nachmittags Regen, im Juli oft eine trockenere Phase; an der Karibik wechselhaft, in den Bergen kühl.",
      einreise: "Visumfrei bis 90 Tage, Rück- oder Weiterflugticket nötig, Pass bei der Ausreise gültig (sechs Monate empfohlen).",
      hoehepunkte: "Kanäle von Tortuguero, Vulkan Arenal, Nebelwald von Monteverde, Faultiere in Manuel Antonio, Corcovado und Isla del Caño, Quetzal, Pacuare.",
      teens: "Ziplines, Canyoning, Rafting, Nachttouren, Surfen, Schnorcheln an der Isla del Caño, Faultiere und Affen aus nächster Nähe.",
      pro: [
        "Regenwald und Tiere an fast jeder Station",
        "Viel Abenteuer: Ziplines, Rafting, Canyoning",
        "Direktflüge (ca. 12,5 und 11 Std.)"
      ],
      contra: [
        "Grüne Saison: nachmittags oft Regen",
        "Kaum Städte und Kultur",
        "Viele Fahrstunden auf kurvigen Strassen",
        "Deutlich teurer als Südostasien"
      ]
    }
  },
  bewertung: [
    {
      kriterium: "Natur und Landschaft",
      asien: [
        4,
        "Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften."
      ],
      bali: [
        4,
        "Vulkane wie Bromo und Ijen, Reisterrassen bei Ubud und die Klippen von Nusa Penida; dramatisch und abwechslungsreich."
      ],
      usa: [
        5,
        "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle: die spektakulärsten Landschaften aller Reisen."
      ],
      japan: [
        4,
        "Japanische Alpen, Zedernwälder in Nikko, Vulkantal in Hakone, Moosregenwald auf Yakushima und die Izu-Küste; viel Natur, dazwischen aber dicht besiedelt."
      ],
      costarica: [
        5,
        "Regenwald, Vulkane, Nebelwald und zwei Meere, dazu Faultiere, Affen, Tukane und Meeresschildkröten: Natur ist hier das Hauptprogramm."
      ]
    },
    {
      kriterium: "Dschungelfeeling",
      asien: [
        3,
        "Dschungelwanderung auf Tioman, Wasserfälle und Inselwälder; kein grosser zusammenhängender Regenwald auf der Route."
      ],
      bali: [3, "Tioman, dazu Wasserfälle und Vulkanlandschaften auf Java und Bali; Dschungel eher als Kulisse."],
      usa: [1, "Wüsten, Canyons und Seen; die grünen Wälder liegen im Osten."],
      japan: [
        3,
        "Der Moosregenwald von Yakushima ist ein echtes Dschungelerlebnis, sonst eher gepflegte Wälder und Gärten."
      ],
      costarica: [5, "Tortuguero, Corcovado und die Karibikküste: echter Regenwald mit Tieren an fast jeder Station."]
    },
    {
      kriterium: "Schnorcheln",
      asien: [
        5,
        "Tioman, Perhentian Islands, Koh Samui und Koh Tao: fast jede Inselstation hat Riffe, Schildkröten und Schnorchelboote."
      ],
      bali: [3, "Tioman und die Mantarochen bei Nusa Penida; auf Java gibt es keine Riffe."],
      usa: [0, "Kein Schnorcheln im Meer; höchstens Baden im Lake Powell oder in den Narrows."],
      japan: [
        2,
        "Schnorcheln mit Meeresschildkröten auf Yakushima und Buchten auf der Izu-Halbinsel; keine tropischen Riffe."
      ],
      costarica: [
        3,
        "Isla del Caño (sehr gut) und das Riff von Cahuita; die Sicht ist in der Grünen Saison wechselhaft."
      ]
    },
    {
      kriterium: "Abenteuer",
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."],
      bali: [4, "Bromo-Jeep bei Nacht, Ijen-Aufstieg zum «Blue Fire», Höhlen-Tubing und Surfen."],
      usa: [4, "Durch die Narrows waten, Antelope Canyon, 2-Tage-Roadtrip und Cedar Point."],
      japan: [
        3,
        "Wanderung im Regenwald, Bergtäler, Velotour auf Naoshima und Freizeitparks; eher Entdecken als Action."
      ],
      costarica: [
        5,
        "Ziplines, Hängebrücken, Canyoning, Rafting auf dem Pacuare, Nachttouren und Bootsfahrten in die Wildnis."
      ]
    },
    {
      kriterium: "Städte",
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."],
      bali: [3, "Singapur, Kuala Lumpur, Jakarta und Yogyakarta; Bali ist eher Kultur und Natur als Stadt."],
      usa: [5, "Las Vegas, Chicago, Washington, Philadelphia und New York mit Museen und Aussichtsplattformen."],
      japan: [5, "Tokio, Kyoto, Osaka und Hiroshima: Grossstadt, Tempel und Essen auf Weltniveau."],
      costarica: [1, "San José ist kaum ein Ziel; die Reise ist ganz auf Natur ausgelegt."]
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."],
      bali: [4, "ca. {plan:bali} CHF: fast gleich wie Singapur–Bangkok."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Unterkünfte und Mietwagen."],
      japan: [2, "ca. {plan:japan} CHF: Unterkünfte in Tokio und Kyoto sind teuer, Essen und Bahn moderat."],
      costarica: [2, "ca. {plan:costarica} CHF: teuerstes Land Mittelamerikas, Lodges und Touren kosten."]
    },
    {
      kriterium: "Reisekomfort",
      asien: [
        3,
        "Direktflüge hin und zurück, aber realistisch ca. 65–70 Stunden unterwegs, davon 6 lange Reisetage mit 5–9 Stunden."
      ],
      bali: [
        2,
        "Rückflug mit Stopp (17–22 Stunden), ein Flug dazwischen und lange Zugtage auf Java; realistisch ca. 60 Stunden unterwegs."
      ],
      usa: [
        2,
        "Kurze Flüge (12 und 7,5–8 Stunden), aber realistisch ca. 70–75 Stunden im Auto, davon 10 und 12 Stunden reine Fahrzeit an den zwei Roadtrip-Tagen."
      ],
      japan: [
        4,
        "Direktflüge (13 und 14,5 Stunden), pünktliche Züge und meist kurze Etappen; realistisch ca. 40–45 Stunden unterwegs, mit Gepäckservice entspannt."
      ],
      costarica: [
        3,
        "Direktflüge (12,5 und 11 Stunden), aber kurvige Strassen und Bootstransfers; realistisch ca. 45 Stunden unterwegs."
      ]
    }
  ]
};
