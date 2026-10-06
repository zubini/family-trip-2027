// Einstiegsseite: Vergleich der drei Reisen
// Budgetzahlen kommen automatisch aus den Reisen (data/asien.js usw.).
// Platzhalter in Texten: {plan:asien}, {plan:bali}, {plan:usa} = Planwert, {mehrkosten} = USA minus Singapur–Bangkok.
// Bewertung: [Punkte 0–5, Text]. Die Punkte und Pro/Contra sind eine Einschätzung und bei Änderungen an den Reisen von Hand anzupassen.
window.START = {
  titel: "Familienreise 2027",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene, 2 Kids",
  untertitel: "Drei Reisevarianten als grober Fahrplan, damit ihr in Ruhe entscheiden könnt: Singapur–Bangkok, Singapur–Bali oder Las Vegas–New York.",
  reisenIntro: "Alle Reisen dauern 33 bis 34 Nächte und sind für die Familie mit Sohn (12) und Tochter (14) geplant. Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.",
  bewertungIntro: "Bewertet werden Natur, Dschungelfeeling, Schnorcheln, Abenteuer, Städte, Budget und Reisekomfort. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig). Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.",
  empfehlung: [
    "Sollen Schnorcheln und Dschungelfeeling zusammenkommen, empfiehlt sich <b>Singapur–Bangkok</b>. Für Abenteuer, Grossstädte und die grössten Landschaften (Canyons, Monument Valley, White Sands) ohne Schnorcheln empfiehlt sich <b>Las Vegas–New York</b>, sofern das grössere Budget passt. <b>Singapur–Bali</b> liegt dazwischen und punktet mit Vulkanen, Reisterrassen und Inseln, hat aber den langen Rückflug als Nachteil.",
    "Mehr Dschungel bei Singapur–Bangkok: Khao Sok (Regenwald und Cheow-Lan-See) lässt sich in die Route einbauen. Dafür liessen sich Khanom oder Penang kürzen."
  ],
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.",
  vergleichIntro: "Die wichtigsten Unterschiede nebeneinander.",
  entscheidIntro: "Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln, Vulkane und Tempel oder Nationalparks und Städte im Vordergrund stehen.",
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
      tempo: "Zusammen ca. 55–60 Std. unterwegs (Bus, Zug, Fähre); 6 lange Reisetage mit 5–9 Std. (Tioman–Kuala Lumpur, Kuala Lumpur–Kuala Besut, Perhentian–Penang, Penang–Hat Yai, Hat Yai–Khanom, Koh Tao–Hua Hin)",
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
      tempo: "Zusammen ca. 50 Std. unterwegs (Bus, Zug, Fähre, ein Flug); 5 lange Reisetage mit 5–8 Std. (Tioman–Kuala Lumpur, Jakarta–Yogyakarta, Yogyakarta–Malang, Bromo–Banyuwangi, Banyuwangi–Ubud); dazu ein nächtlicher Ijen-Aufstieg",
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
      tempo: "Zusammen ca. 60 Std. am Steuer (ca. 5’800 km) an 11 Fahrtagen: Roadtrip mit 10 und 12 Std., 5 Tage mit 4–7 Std., 4 Tage mit 2,5–3,5 Std.",
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
        "Rund 60 Std. Autofahrt, davon 2 sehr lange Fahrtage",
        "Parkgebühren und ESTA-Regeln im Wandel"
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
        "Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle: die spektakulärsten Landschaften der drei Reisen."
      ]
    },
    {
      kriterium: "Dschungelfeeling",
      asien: [
        3,
        "Dschungelwanderung auf Tioman, Wasserfälle und Inselwälder; kein grosser zusammenhängender Regenwald auf der Route."
      ],
      bali: [3, "Tioman, dazu Wasserfälle und Vulkanlandschaften auf Java und Bali; Dschungel eher als Kulisse."],
      usa: [1, "Wüsten, Canyons und Seen; die grünen Wälder liegen im Osten."]
    },
    {
      kriterium: "Schnorcheln",
      asien: [
        5,
        "Tioman, Perhentian Islands, Koh Samui und Koh Tao: fast jede Inselstation hat Riffe, Schildkröten und Schnorchelboote."
      ],
      bali: [3, "Tioman und die Mantarochen bei Nusa Penida; auf Java gibt es keine Riffe."],
      usa: [0, "Kein Schnorcheln im Meer; höchstens Baden im Lake Powell oder in den Narrows."]
    },
    {
      kriterium: "Abenteuer",
      asien: [3, "Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur."],
      bali: [4, "Bromo-Jeep bei Nacht, Ijen-Aufstieg zum «Blue Fire», Höhlen-Tubing und Surfen."],
      usa: [4, "Durch die Narrows waten, Antelope Canyon, 2-Tage-Roadtrip und Cedar Point."]
    },
    {
      kriterium: "Städte",
      asien: [4, "Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln."],
      bali: [3, "Singapur, Kuala Lumpur, Jakarta und Yogyakarta; Bali ist eher Kultur und Natur als Stadt."],
      usa: [5, "Las Vegas, Chicago, Washington, Philadelphia und New York mit Museen und Aussichtsplattformen."]
    },
    {
      kriterium: "Budget (mehr Punkte = günstiger)",
      asien: [4, "ca. {plan:asien} CHF: Singapur ist teuer, der Rest günstig."],
      bali: [4, "ca. {plan:bali} CHF: fast gleich wie Singapur–Bangkok."],
      usa: [1, "ca. {plan:usa} CHF: rund {mehrkosten} CHF mehr, vor allem Unterkünfte und Mietwagen."]
    },
    {
      kriterium: "Reisekomfort",
      asien: [3, "Direktflüge hin und zurück, aber ca. 55–60 Stunden unterwegs, davon 6 lange Reisetage mit 5–9 Stunden."],
      bali: [2, "Rückflug mit Stopp (17–22 Stunden), ein Flug dazwischen und lange Zugtage auf Java; zusammen ca. 50 Stunden unterwegs."],
      usa: [2, "Kurze Flüge (12 und 7,5–8 Stunden), aber rund 60 Stunden am Steuer, davon 10 und 12 Stunden an den zwei Roadtrip-Tagen."]
    }
  ]
};
