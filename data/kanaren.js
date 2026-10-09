// Reise: Ferien auf Fuerteventura und Teneriffa mit Direktflügen ab Zürich (Mietwagen, eine Fähre)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.kanaren = {
  titel: "Ferien auf Fuerteventura und Teneriffa",
  menu: "Kanaren",
  variante: "Ferien auf zwei Inseln",
  untertitel: "Fünf Wochen Kanarische Inseln mit Direktflügen ab Zürich: Strand, Dünen und Surfen auf Fuerteventura, dann Teneriffa mit Teide, Lorbeerwald, Siam Park und Walen. Vier Unterkünfte, kurze Wege, kein Jetlag.",
  zeitraum: "Sa, 19.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Corralejo dunes Fuerteventura beach|Fuerteventura sand dunes ocean",
    stichwort: "corralejo|fuerteventura|dune",
    alt: "Dünen von Corralejo auf Fuerteventura"
  },
  planIntro: "Direktflug ab Zürich nach Fuerteventura am Sa, 19.06.2027, Rückflug ab Teneriffa am Sa, 24.07.2027. Zwei Unterkünfte pro Insel, dazwischen eine Fähre. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Flug Zürich–Fuerteventura",
    info: "Direktflug ca. 3,75–4 Std., Abflug früh am Morgen (Anreise zum Flughafen am Vorabend), Uhr −1 Std."
  },
  plan: [
    {
      name: "1. Corralejo (Fuerteventura)",
      naechte: 8,
      info: "Flug ab Zürich (ca. 3,75–4 Std.), Mietwagen (ca. 35–45 Min.)",
      datum: "19.–27. Juni"
    },
    {
      name: "2. Morro Jable (Jandía)",
      naechte: 6,
      info: "Mietwagen (ca. 1,75–2 Std., ca. 117 km)",
      datum: "27. Juni–3. Juli"
    },
    {
      name: "3. Puerto de la Cruz (Teneriffa)",
      naechte: 7,
      info: "Fähre Morro Jable–Santa Cruz (ca. 4–4,5 Std., nur zwei Abfahrten pro Tag), Mietwagen (ca. 30–35 Min.)",
      datum: "3.–10. Juli"
    },
    {
      name: "4. Costa Adeje (Teneriffa)",
      naechte: 14,
      info: "Mietwagen (ca. 1–1,25 Std., ca. 90 km); Rückflug 24. Juli",
      datum: "10.–24. Juli"
    }
  ],
  rueckflug: {
    datum: "24. Juli",
    name: "Flug Teneriffa–Zürich",
    info: "Direktflug ab Teneriffa Süd (Edelweiss, ca. 4–4,25 Std.; im Sommer 2026 samstags ab ca. 10.35 Uhr, Ankunft in Zürich ca. 15.50 Uhr), Uhr +1 Std."
  },
  planHinweise: [
    [
      "Gesamt",
      "35 Nächte, 4 Stationen auf zwei Inseln. Zwei Direktflüge (je ca. 4 Std.), ca. 5 Std. im Mietwagen und eine Fähre (ca. 4–4,5 Std.); zusammen ca. 22 Std. reine Reisezeit inklusive Bahn Brig-Glis–Zürich Flughafen. Mit Check-in, Mietwagen-Übergaben und Wartezeiten realistisch ca. 28–31 Std. von Tür zu Tür. Die längsten Reisetage: Brig-Glis–Corralejo (mit Übernachtung beim Flughafen) und Costa Adeje–Brig-Glis (je ca. 9–10 Std.), Morro Jable–Puerto de la Cruz (Fähre, ca. 5,5–6,5 Std.)."
    ],
    [
      "Flug ab und nach Zürich",
      "Edelweiss fliegt im Sommer 2026 samstags nach Fuerteventura (Abflug ca. 6.20 Uhr, Ankunft ca. 9.30 Uhr Ortszeit) und zurück ab Teneriffa Süd (Abflug ca. 10.35 Uhr, Ankunft in Zürich ca. 15.50 Uhr). Der Sommerflugplan 2027 ist noch nicht veröffentlicht; Wochentage und Zeiten bei der Buchung prüfen. Wegen des frühen Abflugs am Vorabend zum Flughafen."
    ],
    [
      "Vorab buchen",
      "Flüge (Schulferien, früh ausgebucht), Mietwagen auf beiden Inseln, Apartments mit Pool, Fähre Morro Jable–Santa Cruz, Bewilligung Isla de Lobos, Surfkurs, Teide-Seilbahn und Gipfelbewilligung, Masca, Siam Park und Loro Parque (Twin Ticket), Bootstour zu den Walen."
    ],
    [
      "Optional",
      "Lanzarote als Tagesausflug ab Corralejo, Oasis Park, Jeep-Tour nach Cofete, La Gomera als Tagesausflug ab Los Cristianos, Gran Canaria (Zwischenhalt der Fähre in Las Palmas)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege auf den Inseln, eingefärbt nach Verkehrsmittel. Die Flüge ab Zürich sind nicht eingezeichnet.",
    breit: true,
    legende: ["car", "ferry"],
    karten: [{datei: "karten/kanaren.svg"}]
  },
  abwechslungIntro: "Ferien mit wenig Ortswechseln: zuerst zwei Wochen Strand, Dünen und Wind auf Fuerteventura, dann drei Wochen Teneriffa mit Vulkan, Lorbeerwald, Wasserpark und Booten.",
  abwechslung: [
    [
      "Strand und Meer",
      "Grandes Playas bei Corralejo, Isla de Lobos, Sotavento und Jandía, die Pools von Puerto de la Cruz, die Badebuchten im Süden Teneriffas. Atlantik ca. 21–22 °C."
    ],
    [
      "Action",
      "Surfkurs in Corralejo, Wind- oder Kitesurfen in Sotavento, Siam Park, Masca-Schlucht, Kajak bei Los Gigantes, Jeep nach Cofete."
    ],
    [
      "Natur und Tiere",
      "Dünen von Corralejo, Vulkaninsel Lobos, Teide (Unesco), Lorbeerwald von Anaga, Wale und Delfine, Meeresschildkröten in El Puertito, Loro Parque."
    ],
    [
      "Städte und Kultur",
      "La Laguna (Unesco), La Orotava, Puerto de la Cruz, Santa Cruz und Betancuria; eher Kleinstädte als Grossstädte."
    ],
    ["Erholung", "Lange Aufenthalte (6–14 Nächte) mit Pool und Strand, kurze Fahrten, kein Jetlag."]
  ],
  stationenIntro: "Vier Stationen auf zwei Inseln. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Corralejo (Fuerteventura)",
      ersatzsuche: "Corralejo",
      land: "es",
      region: "Fuerteventura",
      datum: "19.–27. Juni",
      naechte: "8 Nächte",
      anreise: "Direktflug Zürich–Fuerteventura am Sa, 19.06.2027 (Edelweiss, ca. 3,75–4 Std.; im Sommer 2026 samstags um ca. 6.20 Uhr, Sommerflugplan 2027 noch nicht veröffentlicht). Auf den Kanaren ist es eine Stunde früher. Mietwagen am Flughafen abholen und nach Corralejo (ca. 35–45 Min., ca. 35 km).",
      text: "Ferienort im Norden mit Hafen und kleinen Gassen. Direkt daneben liegen die hellen Wanderdünen des Naturparks Corralejo, vor der Küste die kleine Vulkaninsel Lobos und in einer halben Stunde mit der Fähre Lanzarote.",
      teens: "Surfkurs (ab ca. 50 € pro Person, ab 8 Jahren), Rennen und Rutschen in den Dünen, Bootsausflug nach Lobos mit Aufstieg auf den Vulkan, Kitesurfer beobachten, Tagesausflug nach Lanzarote.",
      fakten: [
        "<strong>Dauer:</strong> 8 Nächte in einem Apartment mit Pool: Strand, Dünen, ein Tag Lobos, Surfkurs, ein Tag Lanzarote.",
        "<strong>Isla de Lobos:</strong> Gratis-Bewilligung des Cabildo de Fuerteventura nötig (zwei Zeitfenster, 10–14 und 14–18 Uhr, begrenzte Plätze; eine Person kann für bis zu drei Personen beantragen). Die Fähre ab Corralejo (ca. 15–20 Min.) kostet extra. Nur über die offizielle Seite beantragen, bezahlte «Bewilligungen» sind oft Betrug; Antragsfrist vorab prüfen.",
        "<strong>Lanzarote als Tagesausflug:</strong> Fähre Corralejo–Playa Blanca ca. 25–35 Min. (Fred. Olsen, Baleària und Líneas Romero, zusammen viele Abfahrten pro Tag). Der Timanfaya-Nationalpark liegt ca. 30 Min. ab Playa Blanca; mit dem Mietwagen auf die Fähre nur mit Erlaubnis des Vermieters, sonst Bus oder Tour.",
        "<strong>Wind:</strong> Der Juli gilt als windigster Monat (Passat). Für Kids ruhigere Buchten wählen, nur an bewachten Stränden baden und die Flaggen beachten."
      ],
      ausserdem: "Lajares (Surfdorf), Vulkan Calderón Hondo, El Cotillo mit den ruhigen Lagunenstränden im Norden, Grandes Playas am Rand der Dünen.",
      bilder: [
        {titel: "Dünen von Corralejo", suche: "Corralejo dunes Fuerteventura", stichwort: "corralejo|dune"},
        {titel: "Isla de Lobos", suche: "Isla de Lobos Fuerteventura", stichwort: "lobos"},
        {titel: "Hafen von Corralejo", suche: "Corralejo harbour", stichwort: "corralejo"},
        {titel: "El Cotillo", suche: "El Cotillo lagoons Fuerteventura", stichwort: "cotillo"},
        {titel: "Calderón Hondo", suche: "Calderon Hondo volcano Fuerteventura", stichwort: "calder"},
        {titel: "Surfen", suche: "surfing Fuerteventura", stichwort: "surf|fuerteventura"}
      ]
    },
    {
      nr: 2,
      name: "Morro Jable (Jandía)",
      ersatzsuche: "Morro Jable|Jandia",
      land: "es",
      region: "Fuerteventura",
      datum: "27. Juni–3. Juli",
      naechte: "6 Nächte",
      anreise: "Mit dem Mietwagen von Corralejo über Puerto del Rosario und die FV-2 nach Morro Jable (ca. 1,75–2 Std., ca. 117 km); Halt in Betancuria oder im Oasis Park möglich.",
      text: "Der Süden Fuerteventuras: kilometerlange helle Strände auf der Halbinsel Jandía, die Lagune von Sotavento und auf der Westseite der wilde Strand von Cofete unter steilen Bergen.",
      teens: "Lagune von Sotavento bei Ebbe, Wind- oder Kitesurf-Schnupperkurs, Jeep-Tour nach Cofete, Oasis Park mit Tieren, Höhlen von Ajuy an der Westküste.",
      fakten: [
        "<strong>Dauer:</strong> 6 Nächte: Strandtage, ein Tag Cofete, ein halber Tag Oasis Park.",
        "<strong>Cofete:</strong> Nur über eine Schotterpiste ab Morro Jable (ca. 1 Std.). Die Vollkasko der Mietwagen gilt dort meist nicht; eine geführte Jeep-Tour ist die Alternative. In Cofete wegen gefährlicher Strömungen nicht baden.",
        "<strong>Oasis Park</strong> (La Lajita): Tierpark und Kakteengarten, ca. 40 € Erwachsene, ca. 25 € Kinder von 4 bis 11 Jahren; Di–So 9–18 Uhr. Preise und Öffnungszeiten vorab prüfen.",
        "<strong>Sotavento:</strong> Die Lagune ist bei Ebbe flach und warm, draussen bläst oft starker Wind (bis 25–30 Knoten); Gezeiten vorab nachschauen."
      ],
      ausserdem: "Betancuria (alte Inselhauptstadt), Leuchtturm Faro de Jandía, Playa de Esquinzo, Costa Calma.",
      bilder: [
        {titel: "Cofete", suche: "Cofete beach Fuerteventura", stichwort: "cofete"},
        {titel: "Lagune von Sotavento", suche: "Sotavento lagoon Fuerteventura", stichwort: "sotavento"},
        {titel: "Strand von Morro Jable", suche: "Morro Jable beach", stichwort: "morro jable|jandia"},
        {titel: "Höhlen von Ajuy", suche: "Ajuy caves Fuerteventura", stichwort: "ajuy"},
        {titel: "Betancuria", suche: "Betancuria Fuerteventura", stichwort: "betancuria"},
        {titel: "Faro de Jandía", suche: "Faro de Jandia lighthouse", stichwort: "jandia|faro|lighthouse"}
      ]
    },
    {
      nr: 3,
      name: "Puerto de la Cruz (Teneriffa)",
      ersatzsuche: "Puerto de la Cruz",
      land: "es",
      region: "Teneriffa",
      datum: "3.–10. Juli",
      naechte: "7 Nächte",
      anreise: "Mietwagen in Morro Jable zurückgeben (Rückgabe am Ort vorab klären) und mit der Fähre von Baleària ohne Umsteigen über Las Palmas nach Santa Cruz de Tenerife (ca. 4–4,5 Std.; im Sommer 2026 zwei Abfahrten pro Tag, Fahrplan 2027 prüfen). Alternativen: Fred. Olsen über Las Palmas und Agaete mit Bustransfer oder ein Binter-Flug Fuerteventura–Teneriffa Nord (ca. 50 Min.). In Santa Cruz neuen Mietwagen abholen, nach Puerto de la Cruz ca. 30–35 Min.",
      text: "Der grüne Norden Teneriffas: ein altes Hafenstädtchen mit Meerwasser-Pools, darüber das Orotava-Tal und der Teide. Im Nordosten liegt das Anaga-Gebirge mit Lorbeerwald, im Westen Garachico mit Naturbecken im Lavagestein.",
      teens: "Loro Parque (Pinguine, Papageien, Aquarium), Meerwasser-Pools Lago Martiánez, Wanderung im Lorbeerwald von Anaga, Naturbecken von Garachico, mit der Seilbahn auf den Teide.",
      fakten: [
        "<strong>Dauer:</strong> 7 Nächte: Loro Parque, Anaga, La Orotava und die Altstadt von La Laguna (Unesco), Garachico, ein Tag Teide.",
        "<strong>Loro Parque:</strong> ca. 42 € Erwachsene, ca. 30 € Kinder bis 11 (beide Kids zahlen den Erwachsenenpreis). Das Twin Ticket mit dem Siam Park kostet ca. 74 €, der zweite Park innert 15 Tagen.",
        "<strong>Teide:</strong> Seilbahn retour ca. 42 € Erwachsene, ca. 21 € Kinder von 3 bis 13 Jahren (Nicht-Residenten; bei Wind geschlossen). Für den Gipfel braucht es zusätzlich eine Bewilligung über Tenerife ON: seit 2026 ca. 15 € pro Person ab 14 Jahren, begrenzte Plätze, neue Termine jeweils montags. Früh buchen, Preise vorab prüfen.",
        "<strong>Wetter:</strong> Im Norden oft Wolken am Vormittag und milder, im Süden sonniger und trockener."
      ],
      ausserdem: "Santa Cruz (Auditorio, Markt), Playa de las Teresitas, Icod de los Vinos mit dem Drachenbaum, Aussichtspunkte im Anaga-Gebirge.",
      bilder: [
        {titel: "Puerto de la Cruz", suche: "Puerto de la Cruz Tenerife", stichwort: "puerto de la cruz"},
        {titel: "Teide", suche: "Teide volcano Tenerife", stichwort: "teide"},
        {titel: "Anaga", suche: "Anaga mountains Tenerife", stichwort: "anaga"},
        {titel: "Garachico", suche: "Garachico natural pools", stichwort: "garachico"},
        {titel: "La Orotava", suche: "La Orotava Tenerife", stichwort: "orotava"},
        {titel: "Lago Martiánez", suche: "Lago Martianez Puerto de la Cruz", stichwort: "martianez"}
      ]
    },
    {
      nr: 4,
      name: "Costa Adeje (Teneriffa)",
      ersatzsuche: "Costa Adeje",
      land: "es",
      region: "Teneriffa",
      datum: "10.–24. Juli",
      naechte: "14 Nächte, Rückflug 24. Juli",
      anreise: "Mit dem Mietwagen über die Autobahnen TF-5 und TF-1 nach Costa Adeje (ca. 1–1,25 Std., ca. 90 km) oder über den Teide (mit Halt ca. 2,5–3 Std.).",
      text: "Der sonnige Süden mit Badebuchten, Promenaden und einem der grössten Wasserparks Europas. Vom Hafen Los Cristianos fahren Bootstouren zu Walen und Delfinen und die Fähre nach La Gomera.",
      teens: "Siam Park, Wal- und Delfinbeobachtung, Schnorcheln mit Meeresschildkröten in El Puertito, Wanderung durch die Masca-Schlucht, Kajak unter den Klippen von Los Gigantes, Tagesausflug nach La Gomera.",
      fakten: [
        "<strong>Dauer:</strong> 14 Nächte in einem Apartment mit Pool: Ferientage am Strand, Siam Park, Bootstour, Schnorcheln, Masca, ein Tag La Gomera.",
        "<strong>Wale und Delfine:</strong> Nur Boote mit der gelben Flagge «Barco Azul» buchen (offizielle Bewilligung). Katamaran ca. 22–35 €, kleine Boote ca. 55–75 € pro Person, 1,5–3 Std.",
        "<strong>Schnorcheln:</strong> In der Bucht El Puertito de Adeje leben oft Meeresschildkröten (nicht garantiert; nicht berühren und nicht füttern), in Abades Felsbecken mit Fischen. Wasser ca. 22 °C.",
        "<strong>Masca:</strong> Wanderung nur mit Reservation über die offizielle Seite (höchstens 275 Personen pro Tag, Gebühr für Nicht-Residenten 2024/25 ca. 28 € Erwachsene und ca. 14 € Minderjährige, Pflicht-Shuttle Fr–So). Nach Steinschlag zeitweise gesperrt; Preise 2027 und Öffnung vorab prüfen.",
        "<strong>La Gomera:</strong> Fähre Los Cristianos–San Sebastián ca. 50 Min. (Fred. Olsen und Baleària, mehrmals täglich). Der Nationalpark Garajonay mit Lorbeerwald ist gratis."
      ],
      ausserdem: "Los Gigantes, Playa del Duque, Vilaflor (höchstes Dorf der Insel), Pyramiden von Güímar.",
      bilder: [
        {titel: "Siam Park", suche: "Siam Park Tenerife", stichwort: "siam"},
        {titel: "Wale", suche: "pilot whales Tenerife", stichwort: "whale"},
        {titel: "Meeresschildkröte", suche: "green sea turtle Tenerife snorkeling", stichwort: "turtle"},
        {titel: "Masca", suche: "Masca gorge Tenerife", stichwort: "masca"},
        {titel: "Los Gigantes", suche: "Los Gigantes cliffs Tenerife", stichwort: "gigantes"},
        {titel: "Playa del Duque", suche: "Playa del Duque Costa Adeje", stichwort: "duque|adeje"}
      ]
    }
  ],
  abschluss: "Rückflug ab Teneriffa Süd (ca. 25–30 Min. ab Costa Adeje) nach Zürich am Sa, 24.07.2027 (Direktflug ca. 4–4,25 Std.), dann mit der Bahn nach Brig-Glis.",
  budgetIntro: "Mittelklasse inklusive Flüge, Mietwagen, Fähre, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Fuerteventura und Teneriffa–Zürich",
        "2’400–4’000",
        "3’000",
        "Edelweiss in den Sommerferien, 4 Personen mit Gepäck; Preise für 2027 noch offen"
      ],
      [
        "Mietwagen und Benzin",
        "1’800–2’900",
        "2’300",
        "Zwei Mieten (Fuerteventura und Teneriffa) mit Vollkasko, ca. 35 Tage"
      ],
      [
        "Fähre und Ausflugsboote",
        "450–800",
        "600",
        "Fähre Morro Jable–Santa Cruz, Boot nach Lobos, Ausflug Lanzarote oder La Gomera"
      ],
      [
        "Unterkunft (Apartment mit Pool)",
        "4’200–7’700",
        "5’600",
        "ca. 120–220 CHF pro Nacht im Juli; Corralejo und Costa Adeje teurer"
      ],
      [
        "Verpflegung (Restaurants, Einkauf)",
        "3’150–5’250",
        "4’000",
        "ca. 90–150 CHF pro Tag für 4 Personen, mit Küche im Apartment"
      ],
      [
        "Aktivitäten und Eintritte",
        "1’400–2’600",
        "1’900",
        "Surfkurs, Siam Park und Loro Parque, Teide-Seilbahn, Wale, Masca, Oasis Park"
      ],
      ["Versicherung, Reiseapotheke, Handy", "300–600", "450", "Reiseversicherung, Roaming oder eSIM"],
      [
        "Bahn, Flughafenhotel, Parkieren",
        "300–600",
        "450",
        "Bahn Brig-Glis–Zürich Flughafen, Übernachtung vor dem frühen Abflug"
      ],
      ["Reserve (ca. 10 %)", "1’400–2’400", "1’850", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Corralejo (8)", "1’900–3’300"],
      ["2. Morro Jable (6)", "1’400–2’400"],
      ["3. Puerto de la Cruz (7)", "1’700–2’900"],
      ["4. Costa Adeje (14)", "3’500–6’000"]
    ],
    hinweise: [
      "<strong>Preise für die Kids:</strong> Viele Parks verlangen ab 12 Jahren den Erwachsenenpreis (Siam Park, Loro Parque); bei der Teide-Seilbahn zahlt der Sohn (12) noch den Kinderpreis.",
      "<strong>Sparhebel:</strong> Apartment mit Küche, lokale Vermieter mit Vollkasko, Twin Ticket für Siam Park und Loro Parque, Flüge früh buchen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug- und Unterkunftspreise in den Sommerferien schwanken stark."
    ],
    naechte: 35,
    total: "20’150",
    spanne: "15’400–26’900",
    proTag: "ca. 580 CHF pro Tag, ca. 5’000 pro Person"
  },
  tippsIntro: "Einreise, Flüge, Mietwagen, Baden und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise",
      "Die Kanaren gehören zu Spanien und zum Schengen-Raum: Identitätskarte oder Pass genügt, auch für die Kids. Für die Fähren zwischen den Inseln Ausweis mitnehmen."
    ],
    [
      "Flüge",
      "Edelweiss fliegt ab Zürich direkt nach Fuerteventura und Teneriffa Süd (im Sommer 2026 samstags; nach Fuerteventura nur an einzelnen Wochentagen). Der Hinflug geht sehr früh: am Vorabend mit der Bahn zum Flughafen und dort übernachten. Sommerflugplan 2027 abwarten und früh buchen (Schulferien)."
    ],
    [
      "Mietwagen",
      "Lokale Vermieter wie Cicar, Cabrera Medina oder AutoReisen haben meist Vollkasko ohne Selbstbehalt inklusive. Schotterpisten (z.B. nach Cofete) sind oft nicht versichert. Mit dem Mietwagen auf die Fähre nur mit schriftlicher Erlaubnis; sonst pro Insel ein Auto."
    ],
    [
      "Fähren",
      "Fred. Olsen und Baleària (früher Naviera Armas) fahren zwischen den Inseln, meist mehrmals täglich. Online buchen, ca. 45–60 Min. vor Abfahrt am Hafen sein; bei Wind kann es schaukeln."
    ],
    [
      "Wetter im Juni und Juli",
      "Meist 25–29 °C, nachts ca. 20 °C; der Juli ist windig, vor allem auf Fuerteventura. Bei Calima (Saharastaub) wird es heiss und dunstig, im Süden von Gran Canaria auch 39–40 °C. Wasser ca. 21–22 °C. Sehr starke Sonne: Sonnenschutz, Hut, Lycra-Shirt beim Schnorcheln."
    ],
    [
      "Baden und Sicherheit",
      "Die Kanaren haben die meisten Badeunfälle in Spanien: nur an bewachten Stränden baden, rote Flaggen ernst nehmen, Strömungen an der Westküste (Cofete, Famara) meiden. Sonst sicher und unkompliziert."
    ],
    [
      "Gesundheit",
      "Die Europäische Krankenversicherungskarte gilt auch für Schweizer in Spanien. Leitungswasser ist meist entsalzt; zum Trinken Flaschenwasser."
    ],
    ["Zeitzone", "Eine Stunde früher als in der Schweiz."],
    [
      "Geld und Handy",
      "Euro, Karten fast überall. Roaming mit Schweizer Abos kann teuer sein: Roaming-Paket oder eSIM für die EU."
    ],
    [
      "Bewilligungen",
      "Früh reservieren: Isla de Lobos (gratis, begrenzt), Teide-Gipfel (Tenerife ON), Masca (offizielle Seite)."
    ],
    [
      "Beteiligung der Kids",
      "Sohn (12) und Tochter (14) wählen je Insel einen Programmpunkt, z.B. Surfkurs, Siam Park, Bootstour oder Teide."
    ],
    ["Notfall", "Notruf 112. Nummer der Mietwagen-Pannenhilfe notieren; EDA-Reiseplattform nutzen."]
  ]
};
