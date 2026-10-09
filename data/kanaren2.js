// Variante der Reise Kanaren (data/kanaren.js): Rundreise über Fuerteventura, Lanzarote, Gran Canaria, Teneriffa und La Gomera
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.kanaren2 = {
  titel: "Rundreise über die Kanarischen Inseln",
  menu: "Kanaren",
  alternativeZu: "kanaren",
  variante: "Rundreise über fünf Inseln",
  untertitel: "Fünf Wochen Inselhopping mit Direktflügen ab Zürich: Fuerteventura, Lanzarote, Gran Canaria, Teneriffa und La Gomera, verbunden mit Fähren. Mehr Abwechslung, mehr Wechsel.",
  zeitraum: "Sa, 19.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Timanfaya Lanzarote volcanic landscape|Lanzarote volcanoes",
    stichwort: "timanfaya|lanzarote|volcan",
    alt: "Vulkanlandschaft im Timanfaya-Nationalpark auf Lanzarote"
  },
  planIntro: "Direktflug ab Zürich nach Fuerteventura am Sa, 19.06.2027, Rückflug ab Teneriffa am Sa, 24.07.2027. Dazwischen sechs Fähren und fünf Inseln. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Flug Zürich–Fuerteventura",
    info: "Direktflug ca. 3,75–4 Std., Abflug früh am Morgen (Anreise zum Flughafen am Vorabend), Uhr −1 Std."
  },
  plan: [
    {
      name: "1. Corralejo (Fuerteventura)",
      naechte: 5,
      info: "Flug ab Zürich (ca. 3,75–4 Std.), Mietwagen (ca. 35–45 Min.)",
      datum: "19.–24. Juni"
    },
    {
      name: "2. Playa Blanca (Lanzarote)",
      naechte: 4,
      info: "Fähre Corralejo–Playa Blanca (ca. 25–35 Min.)",
      datum: "24.–28. Juni"
    },
    {
      name: "3. Morro Jable (Jandía)",
      naechte: 5,
      info: "Fähre zurück (ca. 25–35 Min.), Mietwagen (ca. 1,75–2 Std.)",
      datum: "28. Juni–3. Juli"
    },
    {
      name: "4. Maspalomas (Gran Canaria)",
      naechte: 5,
      info: "Fähre Morro Jable–Las Palmas (ca. 2 Std.), Mietwagen (ca. 45 Min.)",
      datum: "3.–8. Juli"
    },
    {
      name: "5. Puerto de la Cruz (Teneriffa)",
      naechte: 5,
      info: "Mietwagen nach Agaete (ca. 1,25 Std.), Fähre nach Santa Cruz (ca. 1,25–1,5 Std.), Mietwagen (ca. 30–35 Min.)",
      datum: "8.–13. Juli"
    },
    {
      name: "6. San Sebastián (La Gomera)",
      naechte: 3,
      info: "Mietwagen nach Los Cristianos (ca. 1–1,25 Std.), Fähre (ca. 50 Min.)",
      datum: "13.–16. Juli"
    },
    {
      name: "7. Costa Adeje (Teneriffa)",
      naechte: 8,
      info: "Fähre nach Los Cristianos (ca. 50 Min.), Mietwagen (ca. 15 Min.); Rückflug 24. Juli",
      datum: "16.–24. Juli"
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
      "35 Nächte, 7 Stationen auf fünf Inseln. Zwei Direktflüge (je ca. 4 Std.), sechs Fähren (zusammen ca. 6 Std.) und ca. 7 Std. im Mietwagen; zusammen ca. 26 Std. reine Reisezeit inklusive Bahn Brig-Glis–Zürich Flughafen. Mit Check-in an Flughafen und Häfen, Mietwagen-Übergaben und Wartezeiten realistisch ca. 36–39 Std. von Tür zu Tür. Die längsten Reisetage: Hin- und Rückreise (je ca. 9–10 Std.), Maspalomas–Puerto de la Cruz (Auto, Fähre, Auto, ca. 4–4,5 Std.), Morro Jable–Maspalomas (ca. 3,5–4 Std.)."
    ],
    [
      "Flug ab und nach Zürich",
      "Wie bei den Ferien auf zwei Inseln: Edelweiss im Sommer 2026 samstags nach Fuerteventura (ca. 6.20 Uhr) und zurück ab Teneriffa Süd (ca. 10.35 Uhr). Sommerflugplan 2027 noch nicht veröffentlicht. Lanzarote hatte im Sommer 2026 keinen Samstagsflug."
    ],
    [
      "Mietwagen und Fähren",
      "Am einfachsten pro Insel ein Mietwagen (Fuerteventura auch für Lanzarote, wenn der Vermieter das Auto auf der Fähre erlaubt). Fähren: Corralejo–Playa Blanca viele Abfahrten pro Tag; Morro Jable–Las Palmas bis 3 pro Tag; Agaete–Santa Cruz bis 8 pro Tag (Gratis-Bus ab Las Palmas); Los Cristianos–La Gomera bis 5 pro Tag. Fahrpläne 2027 prüfen."
    ],
    [
      "Vorab buchen",
      "Flüge, alle Fähren, Mietwagen pro Insel, Unterkünfte, Bewilligung Isla de Lobos, Jameos del Agua, Teide-Seilbahn und Gipfelbewilligung, Masca, Siam Park und Loro Parque, Bootstour zu den Walen."
    ],
    [
      "Unterschied zu den Ferien auf zwei Inseln",
      "Gleiche Flüge und gleiche Daten. Statt langer Aufenthalte sieben Stationen: dazu Lanzarote (Timanfaya, Manrique), Gran Canaria (Dünen von Maspalomas, Roque Nublo) und La Gomera (Garajonay). Mehr Abwechslung, aber mehr Packen und ca. 8 Std. mehr Reisezeit; etwas teurer wegen Fähren und mehreren Mietwagen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege zwischen den Inseln, eingefärbt nach Verkehrsmittel. Die Flüge ab Zürich sind nicht eingezeichnet.",
    breit: true,
    legende: ["car", "ferry"],
    karten: [{datei: "karten/kanaren2.svg"}]
  },
  abwechslungIntro: "Jede Insel ist anders: Dünen und Wind auf Fuerteventura, Vulkane und Kunst auf Lanzarote, Dünen und Berge auf Gran Canaria, Teide und Wale auf Teneriffa, Lorbeerwald auf La Gomera.",
  abwechslung: [
    [
      "Strand und Meer",
      "Grandes Playas und Lobos, die Papagayo-Buchten auf Lanzarote, Sotavento, Maspalomas, die Buchten im Süden Teneriffas. Atlantik ca. 21–22 °C."
    ],
    [
      "Action",
      "Surfkurs, Vulkanbus im Timanfaya, Siam Park, Masca-Schlucht, Wanderung zum Roque Nublo, Bootstour zu den Walen."
    ],
    [
      "Natur und Tiere",
      "Dünen von Corralejo und Maspalomas, Timanfaya, Teide (Unesco), Lorbeerwälder von Anaga und Garajonay (Unesco), Wale, Delfine und Schildkröten."
    ],
    [
      "Städte und Kultur",
      "Las Palmas mit der Altstadt Vegueta, La Laguna (Unesco), La Orotava, Werke von César Manrique auf Lanzarote (Jameos del Agua), San Sebastián de La Gomera."
    ],
    ["Erholung", "Die Schlusswoche in Costa Adeje mit Pool und Strand; vorher alle 3–5 Tage ein Wechsel."]
  ],
  stationenIntro: "Sieben Stationen auf fünf Inseln. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Corralejo (Fuerteventura)",
      ersatzsuche: "Corralejo",
      land: "es",
      region: "Fuerteventura",
      datum: "19.–24. Juni",
      naechte: "5 Nächte",
      anreise: "Direktflug Zürich–Fuerteventura am Sa, 19.06.2027 (Edelweiss, ca. 3,75–4 Std.; im Sommer 2026 samstags um ca. 6.20 Uhr, Sommerflugplan 2027 noch nicht veröffentlicht). Auf den Kanaren ist es eine Stunde früher. Mietwagen am Flughafen abholen und nach Corralejo (ca. 35–45 Min., ca. 35 km).",
      text: "Ferienort im Norden mit Hafen und kleinen Gassen. Direkt daneben liegen die hellen Wanderdünen des Naturparks Corralejo, vor der Küste die kleine Vulkaninsel Lobos; Lanzarote ist die nächste Station.",
      teens: "Surfkurs (ab ca. 50 € pro Person, ab 8 Jahren), Rennen und Rutschen in den Dünen, Bootsausflug nach Lobos mit Aufstieg auf den Vulkan, Kitesurfer beobachten.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte in einem Apartment mit Pool: Strand, Dünen, ein Tag Lobos, Surfkurs.",
        "<strong>Isla de Lobos:</strong> Gratis-Bewilligung des Cabildo de Fuerteventura nötig (zwei Zeitfenster, 10–14 und 14–18 Uhr, begrenzte Plätze; eine Person kann für bis zu drei Personen beantragen). Die Fähre ab Corralejo (ca. 15–20 Min.) kostet extra. Nur über die offizielle Seite beantragen, bezahlte «Bewilligungen» sind oft Betrug; Antragsfrist vorab prüfen.",
        "<strong>Wind:</strong> Der Juli gilt als windigster Monat (Passat). Für Kids ruhigere Buchten wählen, nur an bewachten Stränden baden und die Flaggen beachten.",
        "<strong>Mietwagen:</strong> Lokale Vermieter wie Cicar oder AutoReisen haben meist Vollkasko ohne Selbstbehalt inklusive. Für die Fähre nach Lanzarote vorab schriftlich bestätigen lassen, ob das Auto mit darf."
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
      name: "Playa Blanca (Lanzarote)",
      ersatzsuche: "Playa Blanca Lanzarote",
      land: "es",
      region: "Lanzarote",
      datum: "24.–28. Juni",
      naechte: "4 Nächte",
      anreise: "Fähre Corralejo–Playa Blanca (ca. 25–35 Min., Fred. Olsen, Baleària und Líneas Romero, viele Abfahrten pro Tag). Das Auto nur mit Erlaubnis des Vermieters mitnehmen, sonst in Playa Blanca einen neuen Mietwagen abholen.",
      text: "Die Vulkaninsel: schwarze Lavafelder im Timanfaya, weisse Dörfer und die Bauten des Künstlers César Manrique. Bei Playa Blanca liegen die hellen Papagayo-Buchten.",
      teens: "Vulkanbus durch den Timanfaya mit Geysir-Vorführung, Lavahöhlen Jameos del Agua und Cueva de los Verdes, Papagayo-Strände, Schnorcheln an der Playa Chica in Puerto del Carmen.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Tag Timanfaya, ein Tag Jameos del Agua und Cueva de los Verdes im Norden, Strandtage bei Papagayo.",
        "<strong>Timanfaya:</strong> Mit dem Auto bis Islote de Hilario, die «Ruta de los Volcanes» mit dem Bus ist im Eintritt inbegriffen (ca. 35–50 Min., ohne Halt). Preisangaben uneinheitlich (ca. 12–22 € Erwachsene); am späten Vormittag lange Autoschlange, früh hinfahren.",
        "<strong>Lavahöhlen:</strong> Jameos del Agua 2026 ca. 17 € Erwachsene, Kinder von 7 bis 12 günstiger; Cueva de los Verdes ca. 16 €. Online buchen.",
        "<strong>Baden:</strong> An der Playa de Famara gilt wegen der Strömung dauerhaft Badeverbot (rote Flagge); Surfen ist erlaubt."
      ],
      ausserdem: "Mirador del Río, Weinbaugebiet La Geria, Teguise, Salinas de Janubio, Los Hervideros.",
      bilder: [
        {titel: "Timanfaya", suche: "Timanfaya National Park", stichwort: "timanfaya"},
        {titel: "Jameos del Agua", suche: "Jameos del Agua", stichwort: "jameos"},
        {titel: "Papagayo", suche: "Papagayo beach Lanzarote", stichwort: "papagayo"},
        {titel: "Cueva de los Verdes", suche: "Cueva de los Verdes", stichwort: "verdes"},
        {titel: "La Geria", suche: "La Geria vineyards Lanzarote", stichwort: "geria"},
        {titel: "Los Hervideros", suche: "Los Hervideros Lanzarote", stichwort: "hervideros"}
      ]
    },
    {
      nr: 3,
      name: "Morro Jable (Jandía)",
      ersatzsuche: "Morro Jable|Jandia",
      land: "es",
      region: "Fuerteventura",
      datum: "28. Juni–3. Juli",
      naechte: "5 Nächte",
      anreise: "Fähre zurück nach Corralejo (ca. 25–35 Min.), dann mit dem Mietwagen über Puerto del Rosario und die FV-2 nach Morro Jable (ca. 1,75–2 Std., ca. 117 km).",
      text: "Der Süden Fuerteventuras: kilometerlange helle Strände auf der Halbinsel Jandía, die Lagune von Sotavento und auf der Westseite der wilde Strand von Cofete unter steilen Bergen.",
      teens: "Lagune von Sotavento bei Ebbe, Wind- oder Kitesurf-Schnupperkurs, Jeep-Tour nach Cofete, Oasis Park mit Tieren, Höhlen von Ajuy an der Westküste.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: Strandtage, ein Tag Cofete, ein halber Tag Oasis Park.",
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
      nr: 4,
      name: "Maspalomas (Gran Canaria)",
      ersatzsuche: "Maspalomas",
      land: "es",
      region: "Gran Canaria",
      datum: "3.–8. Juli",
      naechte: "5 Nächte",
      anreise: "Mietwagen in Morro Jable zurückgeben, Fähre nach Las Palmas (Fred. Olsen ca. 2 Std., bis drei Abfahrten pro Tag; auch Baleària). In Las Palmas neuer Mietwagen, nach Maspalomas ca. 45 Min. (ca. 56 km).",
      text: "Der Süden Gran Canarias mit den grossen Dünen von Maspalomas am Meer. Im Inselinnern liegen Bergdörfer und der Felsen Roque Nublo, im Norden Las Palmas mit Altstadt und Stadtstrand.",
      teens: "Dünen von Maspalomas bei Sonnenuntergang, Wanderung zum Roque Nublo, Schnorcheln am Stadtstrand Las Canteras in Las Palmas, Bergdorf Tejeda, Hafen von Puerto de Mogán.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: Strand und Dünen, ein Tag Bergland mit Roque Nublo, ein Tag Las Palmas.",
        "<strong>Dünen:</strong> Gratis und immer offen, ca. 8 km markierte Wege. Die abgesperrten Zonen nicht betreten (seit Juli 2026 strengere Kontrollen mit Drohnen und Bussen). Der Sand wird mittags sehr heiss.",
        "<strong>Hitze:</strong> Bei Calima wird es im Süden der Insel sehr heiss (im Sommer 2026 Warnungen bis 39–40 °C); dann früh am Morgen unterwegs sein."
      ],
      ausserdem: "Vegueta (Altstadt von Las Palmas), Puerto de Mogán, Barranco de Guayadeque (Höhlendörfer), Agaete mit Naturbecken.",
      bilder: [
        {titel: "Dünen von Maspalomas", suche: "Maspalomas dunes", stichwort: "maspalomas|dune"},
        {titel: "Roque Nublo", suche: "Roque Nublo Gran Canaria", stichwort: "nublo"},
        {titel: "Las Canteras", suche: "Las Canteras beach Las Palmas", stichwort: "canteras"},
        {titel: "Puerto de Mogán", suche: "Puerto de Mogan", stichwort: "mogan"},
        {titel: "Vegueta", suche: "Vegueta Las Palmas", stichwort: "vegueta"},
        {titel: "Tejeda", suche: "Tejeda Gran Canaria", stichwort: "tejeda"}
      ]
    },
    {
      nr: 5,
      name: "Puerto de la Cruz (Teneriffa)",
      ersatzsuche: "Puerto de la Cruz",
      land: "es",
      region: "Teneriffa",
      datum: "8.–13. Juli",
      naechte: "5 Nächte",
      anreise: "Mit dem Mietwagen nach Agaete (ca. 1,25 Std.) und zurückgeben, oder Auto in Las Palmas abgeben und mit dem Gratis-Bus von Fred. Olsen ab Parque Santa Catalina zum Hafen (Abfahrt 60 Min. vor dem Schiff, bei der Buchung dazuwählen). Fähre Agaete–Santa Cruz de Tenerife (ca. 80 Min., bis acht Abfahrten pro Tag), dort neuer Mietwagen, nach Puerto de la Cruz ca. 30–35 Min.",
      text: "Der grüne Norden Teneriffas: ein altes Hafenstädtchen mit Meerwasser-Pools, darüber das Orotava-Tal und der Teide. Im Nordosten liegt das Anaga-Gebirge mit Lorbeerwald, im Westen Garachico mit Naturbecken im Lavagestein.",
      teens: "Loro Parque (Pinguine, Papageien, Aquarium), Meerwasser-Pools Lago Martiánez, Wanderung im Lorbeerwald von Anaga, Naturbecken von Garachico, mit der Seilbahn auf den Teide.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: Loro Parque, Anaga, La Orotava und die Altstadt von La Laguna (Unesco), Garachico, ein Tag Teide.",
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
      nr: 6,
      name: "San Sebastián (La Gomera)",
      ersatzsuche: "San Sebastian de La Gomera",
      land: "es",
      region: "La Gomera",
      datum: "13.–16. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Mietwagen über die TF-5 und TF-1 nach Los Cristianos (ca. 1–1,25 Std.), Auto zurückgeben, Fähre nach San Sebastián de La Gomera (ca. 50 Min., Fred. Olsen und Baleària, mehrmals täglich). Auf La Gomera ein kleiner Mietwagen.",
      text: "Die kleine, steile Insel mit tiefen Schluchten, Terrassenfeldern und dem Lorbeerwald im Nationalpark Garajonay (Unesco). Hier verständigen sich Hirten mit der Pfeifsprache Silbo.",
      teens: "Wanderung im nebligen Lorbeerwald, Aussichtspunkte über die Schluchten, Strand und Bootstour zu den Delfinen in Valle Gran Rey, Vorführung der Pfeifsprache.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Garajonay, ein Tag Valle Gran Rey.",
        "<strong>Garajonay:</strong> Eintritt gratis, Besucherzentrum Juego de Bolas bei Agulo. Bei Laguna Grande gibt es Parkplatz, Spielplatz und Restaurant; Rundweg zum Alto de Garajonay (1’487 m) ca. 10 km, 3–4 Std. Früh losgehen, später kommen oft Wolken.",
        "<strong>Fahren:</strong> Sehr kurvige Strassen, für kurze Distanzen viel Zeit einplanen."
      ],
      ausserdem: "Hermigua, Agulo, Los Órganos (Basaltsäulen, nur per Boot), Playa de Santiago.",
      bilder: [
        {titel: "Garajonay", suche: "Garajonay National Park", stichwort: "garajonay"},
        {titel: "Valle Gran Rey", suche: "Valle Gran Rey La Gomera", stichwort: "gran rey"},
        {titel: "San Sebastián", suche: "San Sebastian de La Gomera", stichwort: "gomera"},
        {titel: "Agulo", suche: "Agulo La Gomera", stichwort: "agulo"},
        {titel: "Roque de Agando", suche: "Roque de Agando", stichwort: "agando"},
        {titel: "Los Órganos", suche: "Los Organos La Gomera", stichwort: "organos"}
      ]
    },
    {
      nr: 7,
      name: "Costa Adeje (Teneriffa)",
      ersatzsuche: "Costa Adeje",
      land: "es",
      region: "Teneriffa",
      datum: "16.–24. Juli",
      naechte: "8 Nächte, Rückflug 24. Juli",
      anreise: "Fähre zurück nach Los Cristianos (ca. 50 Min.), dort Mietwagen abholen, nach Costa Adeje ca. 15 Min.",
      text: "Der sonnige Süden mit Badebuchten, Promenaden und einem der grössten Wasserparks Europas. Vom Hafen Los Cristianos fahren Bootstouren zu Walen und Delfinen.",
      teens: "Siam Park, Wal- und Delfinbeobachtung, Schnorcheln mit Meeresschildkröten in El Puertito, Wanderung durch die Masca-Schlucht, Kajak unter den Klippen von Los Gigantes.",
      fakten: [
        "<strong>Dauer:</strong> 8 Nächte in einem Apartment mit Pool: Ferientage am Strand, Siam Park, Bootstour, Schnorcheln, Masca.",
        "<strong>Wale und Delfine:</strong> Nur Boote mit der gelben Flagge «Barco Azul» buchen (offizielle Bewilligung). Katamaran ca. 22–35 €, kleine Boote ca. 55–75 € pro Person, 1,5–3 Std.",
        "<strong>Schnorcheln:</strong> In der Bucht El Puertito de Adeje leben oft Meeresschildkröten (nicht garantiert; nicht berühren und nicht füttern), in Abades Felsbecken mit Fischen. Wasser ca. 22 °C.",
        "<strong>Masca:</strong> Wanderung nur mit Reservation über die offizielle Seite (höchstens 275 Personen pro Tag, Gebühr für Nicht-Residenten 2024/25 ca. 28 € Erwachsene und ca. 14 € Minderjährige, Pflicht-Shuttle Fr–So). Nach Steinschlag zeitweise gesperrt; Preise 2027 und Öffnung vorab prüfen."
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
  budgetIntro: "Mittelklasse inklusive Flüge, Fähren, Mietwagen, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Alle Beträge sind Schätzungen in CHF.",
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
        "2’000–3’200",
        "2’500",
        "Mehrere Mieten (Fuerteventura, Gran Canaria, Teneriffa, La Gomera) mit Vollkasko"
      ],
      ["Fähren", "700–1’300", "1’000", "Sechs Überfahrten für 4 Personen, teils mit Auto; Boot nach Lobos"],
      [
        "Unterkunft (Apartment oder Familienzimmer)",
        "4’400–8’000",
        "5’800",
        "ca. 125–230 CHF pro Nacht im Juli; kurze Aufenthalte etwas teurer"
      ],
      ["Verpflegung (Restaurants, Einkauf)", "3’150–5’250", "4’000", "ca. 90–150 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte",
        "1’500–2’800",
        "2’100",
        "Surfkurs, Timanfaya, Jameos del Agua, Siam Park und Loro Parque, Teide-Seilbahn, Wale, Masca"
      ],
      ["Versicherung, Reiseapotheke, Handy", "300–600", "450", "Reiseversicherung, Roaming oder eSIM"],
      [
        "Bahn, Flughafenhotel, Parkieren",
        "300–600",
        "450",
        "Bahn Brig-Glis–Zürich Flughafen, Übernachtung vor dem frühen Abflug"
      ],
      ["Reserve (ca. 10 %)", "1’550–2’700", "2’000", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Corralejo (5)", "1’250–2’100"],
      ["2. Playa Blanca (4)", "1’000–1’700"],
      ["3. Morro Jable (5)", "1’150–2’000"],
      ["4. Maspalomas (5)", "1’200–2’100"],
      ["5. Puerto de la Cruz (5)", "1’250–2’100"],
      ["6. San Sebastián (3)", "650–1’100"],
      ["7. Costa Adeje (8)", "2’100–3’500"]
    ],
    hinweise: [
      "<strong>Preise für die Kids:</strong> Viele Parks verlangen ab 12 Jahren den Erwachsenenpreis (Siam Park, Loro Parque); in den Lavahöhlen auf Lanzarote und bei der Teide-Seilbahn zahlt der Sohn (12) noch den Kinderpreis.",
      "<strong>Sparhebel:</strong> Mietwagen mit Erlaubnis für die Fähre (spart eine Miete), Fähren früh buchen, Apartments mit Küche.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Fähr- und Unterkunftspreise in den Sommerferien schwanken stark."
    ],
    naechte: 35,
    total: "21’300",
    spanne: "16’300–28’500",
    proTag: "ca. 610 CHF pro Tag, ca. 5’300 pro Person"
  },
  tippsIntro: "Einreise, Flüge, Mietwagen, Fähren, Baden und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
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
      "Früh reservieren: Isla de Lobos (gratis, begrenzt), Teide-Gipfel (Tenerife ON), Masca (offizielle Seite), Fähren in der Hauptsaison."
    ],
    [
      "Beteiligung der Kids",
      "Sohn (12) und Tochter (14) wählen je Insel einen Programmpunkt, z.B. Surfkurs, Siam Park, Bootstour oder Teide."
    ],
    ["Notfall", "Notruf 112. Nummer der Mietwagen-Pannenhilfe notieren; EDA-Reiseplattform nutzen."]
  ]
};
