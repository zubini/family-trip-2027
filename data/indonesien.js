// Reise: Singapur, Malaysia (Tioman) und Indonesien (Bali, Gili-Inseln, Komodo, Nusa Lembongan): Bus, Fähren, Flüge, Schnellboote und Fahrer
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.indonesien = {
  titel: "Singapur, Malaysia und Indonesien: Tioman, Bali, Gili-Inseln und Komodo",
  menu: "Singapur / Malaysia / Indonesien",
  untertitel: "Fünf Wochen Inseln in der Trockenzeit: Singapur, die Dschungelinsel Tioman in Malaysia, Bali mit Ubud und Amed, die Gili-Inseln, Komodo mit Waranen und Mantas, Nusa Lembongan, Strand in Südbali und zum Schluss Sentosa.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Padar Island Komodo|Gili Air beach",
    stichwort: "padar|komodo|gili",
    alt: "Padar im Komodo-Nationalpark"
  },
  planIntro: "Abflug ab Zürich nach Singapur am Sa, 19.06.2027 am Abend, Rückflug ab Singapur am Mi, 21.07.2027 in der Nacht (Ankunft Do, 22.07.2027 am Morgen). 31 Nächte im Land, dazu zwei Nächte im Flugzeug. Dazwischen Bus und Fähre nach Tioman, vier kurze Flüge, Schnellboote und Fahrten mit Fahrer. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19.–20. Juni",
    name: "Flug Zürich–Singapur",
    info: "Direktflug mit SWISS ca. 12–13 Std., Abflug am Sa am späten Abend, Ankunft in Singapur am So, 20.06.2027 am Nachmittag"
  },
  plan: [
    {
      datum: "20.–22. Juni",
      name: "1. Singapur",
      naechte: 2,
      info: "Flug ab Zürich (Sa, ca. 22.40 Uhr), Ankunft am So am späten Nachmittag"
    },
    {
      datum: "22.–26. Juni",
      name: "2. Pulau Tioman",
      naechte: 4,
      info: "Bus nach Mersing (ca. 3,5–4 Std., Grenze), Fähre (ca. 1,5–2 Std.)"
    },
    {
      datum: "26.–27. Juni",
      name: "Zwischenübernachtung Singapur (Flughafen)",
      naechte: 1,
      info: "Fähre nach Mersing (ca. 1,5–2 Std.), Bus nach Singapur (ca. 3,5–4 Std.), Hotel am Flughafen Changi"
    },
    {
      datum: "27. Juni–1. Juli",
      name: "3. Ubud (Bali)",
      naechte: 4,
      info: "Flug Singapur–Bali (ca. 2,5–2,75 Std.), Fahrt nach Ubud (ca. 1–1,5 Std.)"
    },
    {datum: "1.–4. Juli", name: "4. Amed (Ostbali)", naechte: 3, info: "Fahrt mit Fahrer (ca. 2–2,5 Std.)"},
    {datum: "4.–8. Juli", name: "5. Gili Air", naechte: 4, info: "Schnellboot (ca. 1,5 Std.; Hafen vorab prüfen)"},
    {
      datum: "8.–12. Juli",
      name: "6. Labuan Bajo (Komodo)",
      naechte: 4,
      info: "Boot und Fahrt zum Flughafen Lombok (ca. 2–2,5 Std.), Flug nach Labuan Bajo (ca. 1,25 Std.)"
    },
    {
      datum: "12.–15. Juli",
      name: "7. Nusa Lembongan",
      naechte: 3,
      info: "Flug nach Bali (ca. 1–1,25 Std.), Schnellboot ab Sanur (ca. 30–45 Min.)"
    },
    {
      datum: "15.–19. Juli",
      name: "8. Südbali (Jimbaran)",
      naechte: 4,
      info: "Schnellboot nach Sanur (ca. 30–45 Min.), Fahrt (ca. 30–45 Min.)"
    },
    {
      datum: "19.–21. Juli",
      name: "9. Singapur und Sentosa",
      naechte: 2,
      info: "Flug nach Singapur (ca. 2,5–2,75 Std.); Rückflug in der Nacht auf den 22. Juli"
    }
  ],
  rueckflug: {
    datum: "21.–22. Juli",
    name: "Flug Singapur–Zürich",
    info: "Direktflug mit SWISS am Mi, 21.07.2027 kurz vor Mitternacht, ca. 13–13,5 Std., Ankunft in Zürich am Do, 22.07.2027 am frühen Morgen"
  },
  planHinweise: [
    [
      "Gesamt",
      "31 Nächte im Land, 9 Stationen und eine Zwischenübernachtung in Singapur. Nach Tioman und zurück mit Bus und Fähre (je ca. 5,5–6,5 Std. mit Grenze und Warten). Vier kurze Flüge (Singapur–Bali ca. 2,5–2,75 Std., Lombok–Labuan Bajo ca. 1,25 Std., Labuan Bajo–Bali ca. 1–1,25 Std., Bali–Singapur ca. 2,5–2,75 Std.), dazu Schnellboote (zusammen ca. 3–4 Std.) und Fahrten mit Fahrer (zusammen ca. 6–8 Std.). Niemand muss selber fahren."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Singapur mit SWISS als Direktflug ca. 12–13 Std. am Sa, 19.06.2027 am späten Abend (Ankunft So am Nachmittag, Zeitverschiebung +6 Std.). Rückflug: Singapur–Zürich mit SWISS am Mi, 21.07.2027 kurz vor Mitternacht (Sommer 2026 ca. 23.00–23.30 Uhr), Ankunft Do, 22.07.2027 ca. 6 Uhr. Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "Juni bis September ist auf Bali, den Gili-Inseln und Flores Trockenzeit, auch an der Ostküste Malaysias (Tioman) ist jetzt die beste Zeit: ca. 29–32 °C, nachts angenehm, auf Komodo trocken und heiss. Singapur ist das ganze Jahr ca. 31 °C und schwül mit kurzen Schauern. Meer ca. 27–29 °C, bei Nusa Penida kühler."
    ],
    [
      "Vorab buchen",
      "Flüge Zürich–Singapur und alle Inlandflüge (Gepäck einrechnen), Bus Singapur–Mersing und Fähre nach Tioman (nur wenige Fähren pro Tag), Hotel am Flughafen Changi, Unterkunft auf Gili Air und in Labuan Bajo, Bootstour im Komodo-Nationalpark (Quoten), Universal Studios Singapore, Fahrer auf Bali."
    ],
    [
      "Optional",
      "Yogyakarta mit Borobudur und dem Vulkan Merapi (3 Nächte, zwei Flüge mehr); Süden von Lombok mit Surfstränden; Komodo-Tour mit einer Nacht auf dem Boot; Mandai Night Safari in Singapur."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit Bus und Fähre von Singapur nach Tioman und zurück, mit dem Flugzeug nach Bali, mit Fahrer und Schnellboot über Bali zu den Gili-Inseln, mit dem Flugzeug nach Flores und zurück nach Bali, zum Schluss nach Singapur. Darunter die Detailkarte von Bali und den Gili-Inseln.",
    breit: true,
    legende: ["air", "ferry", "bus", "car"],
    karten: [
      {datei: "karten/indonesien.svg"},
      {titel: "Bali und die Gili-Inseln im Detail (Stationen 3 bis 5, 7 und 8)", datei: "karten/indonesien-bali.svg"}
    ]
  },
  abwechslungIntro: "Grossstadt, Dschungelinsel, Reisterrassen und Tempel, Riffe und Inseln, Komodowarane und Mantas, zum Schluss Strand und Freizeitpark.",
  abwechslung: [
    [
      "Natur",
      "Dschungel und Wasserfälle auf Tioman, Reisterrassen und Wälder bei Ubud, Vulkane Agung und Rinjani, Inseln und Buchten im Komodo-Nationalpark."
    ],
    [
      "Strand und Schnorcheln",
      "Riffe im Marine Park von Tioman, ein Wrack bei Amed, Schildkröten auf den Gili-Inseln, Mantarochen bei Komodo und Nusa Penida, ruhige Buchten und Surfstrände in Südbali."
    ],
    [
      "Action und Freizeitparks",
      "Dschungel-Wanderung auf Tioman, Rafting bei Ubud, Komodowarane mit Ranger, Schnorcheln mit Mantas, Klippenspringen in der Blue Lagoon, Surfkurs, Waterbom Bali, Universal Studios Singapore."
    ],
    ["Städte und Kultur", "Singapur, malaiische Dörfer auf Tioman, Tempel und Tänze auf Bali."],
    ["Ruhetage", "Überall 2–4 Nächte; Tioman, Ubud, Gili Air, Komodo und Südbali haben je 4 Nächte."]
  ],
  stationenIntro: "Neun Stationen und eine Zwischenübernachtung von Singapur über Tioman, Bali, die Gili-Inseln und Flores zurück nach Singapur. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Singapur",
      ersatzsuche: "Singapore",
      land: "sg",
      region: "Singapur",
      datum: "20.–22. Juni",
      naechte: "2 Nächte",
      anreise: "Direktflug Zürich–Singapur mit SWISS (ca. 12–13 Std., Abflug am Sa, 19.06.2027 am späten Abend, Ankunft am So, 20.06.2027 am Nachmittag), Zeitverschiebung +6 Std. Mit der MRT in die Stadt (ca. 30–40 Min.).",
      text: "Sanfter Einstieg in Asien: sicher, sauber und gut organisiert. Zwei Nächte zum Ankommen, mit Gärten, Skyline und Hawker-Essen; Sentosa und Universal folgen am Schluss der Reise.",
      teens: "Gardens by the Bay mit Supertrees und Cloud Forest, Lichtshow am Abend, Marina Bay, Chinatown, Hawker Centres, Jewel Changi mit dem Regenwasserfall.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Ankunft am Sonntagnachmittag, ein voller Tag in der Stadt (Gärten, Marina Bay, Chinatown), am Abend die Supertrees-Lichtshow. Am nächsten Morgen früh mit dem Bus nach Mersing.",
        "<strong>Essen:</strong> Hawker Centres sind günstig und familienfreundlich (Hainan-Chicken-Reis, Satay, Laksa). Wasserflaschen sind überall erhältlich.",
        "<strong>Regeln:</strong> Vapes und Kaugummi-Import sind verboten; Bussgelder sind hoch."
      ],
      ausserdem: "Botanic Gardens (gratis), Little India, Mandai Wildlife Reserve (Zoo und Night Safari), ArtScience Museum.",
      bilder: [
        {titel: "Supertrees", datei: "Singapore (SG), Gardens by the Bay, Supertree Grove -- 2019 -- 4752.jpg"},
        {
          titel: "Marina Bay Sands",
          datei: "Marina Bay Sands and illuminated polyhedral building Louis Vuitton over the water at blue hour with pink clouds in Singapore.jpg"
        },
        {titel: "Cloud Forest", datei: "Cloud Forest, Gardens by the Bay, Singapore.jpg"},
        {titel: "Merlion", datei: "Merlión, Marina Bay, Singapur, 2023-08-18, DD 45-47 HDR.jpg"},
        {titel: "Chinatown", datei: "Pagoda Street Chinatown Singapore.jpg"},
        {titel: "Sentosa", suche: "Siloso Beach Sentosa|Sentosa island beach", stichwort: "sentosa|siloso"}
      ]
    },
    {
      nr: 2,
      name: "Pulau Tioman",
      land: "my",
      region: "Malaysia",
      datum: "22.–26. Juni",
      naechte: "4 Nächte",
      anreise: "Fernbus von Singapur nach Mersing (ca. 3,5–4 Std., je nach Anbieter Halt direkt am Hafen Mersing Jetty oder am Busbahnhof; Grenzkontrolle einplanen), dann Fähre nach Tioman (ca. 1,5–2 Std.). Früh am Morgen starten, damit ihr eine Nachmittagsfähre erreicht. Bus und Fähre vorab buchen.",
      text: "Grüne Dschungelinsel vor der Ostküste Malaysias mit Korallenriffen, Wasserfällen und kleinen Dörfern ohne Autoverkehr. Mai bis September ist die beste Reisezeit, also genau euer Zeitraum.",
      teens: "Schnorcheltour zu den vorgelagerten Inseln (Pulau Tulai, Chebeh, Renggis), Dschungel-Wanderung quer über die Insel (Tekek–Juara, ca. 2–3 Std.), Wasserfälle, Kajak und Strandtage.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte. Basis z.B. an der ruhigen Westseite (Salang, Air Batang) oder in Juara im Osten: eine Schnorcheltour zu den vorgelagerten Inseln, eine Dschungel-Wanderung, Strandtage. Ein Wechsel der Inselseite kostet Zeit (Boot oder Wanderweg).",
        "<strong>Praktisch:</strong> Die Fähre fährt nur wenige Male pro Tag zu festen Zeiten, vorab Ticket buchen und rechtzeitig am Hafen sein (Mersing Jetty oder Tanjung Gemok). Bargeld mitnehmen, Geldautomaten sind selten. Die Insel ist zollfrei.",
        "<strong>Rückweg:</strong> Fähre nach Mersing am Morgen, Bus nach Singapur (ca. 3,5–4 Std. mit Grenze) und eine Nacht am Flughafen Changi; am nächsten Morgen nach Bali.",
        "<strong>Kultur:</strong> Pahang ist überwiegend muslimisch; ausserhalb der Strände Schultern und Knie bedecken."
      ],
      ausserdem: "Asah-Wasserfall bei Juara, Marine-Park-Schnorchelplätze, Kajak entlang der Küste, Sonnenuntergang am Strand von Salang, Dschungelpfade mit Warane und Makaken.",
      bilder: [
        {titel: "Pulau Tioman", suche: "Tioman Island|Pulau Tioman", stichwort: "tioman"},
        {titel: "Juara Strand", suche: "Juara beach Tioman|Pantai Juara", stichwort: "juara"},
        {titel: "Salang", suche: "Salang Tioman|Kampung Salang", stichwort: "salang"},
        {titel: "Tekek", suche: "Tekek Tioman|Kampung Tekek", stichwort: "tekek"},
        {titel: "Dschungel", suche: "Tioman jungle|Tioman rainforest", stichwort: "tioman"},
        {titel: "Korallenriff", suche: "Tioman coral reef|Tioman snorkeling", stichwort: "tioman"}
      ]
    },
    {
      nr: 3,
      name: "Ubud (Bali)",
      land: "id",
      region: "Bali",
      datum: "27. Juni–1. Juli",
      naechte: "4 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Singapur am Flughafen Changi", datum: "26.–27. Juni"},
      anreise: "Am Morgen Flug Singapur–Denpasar (Bali) nonstop (ca. 2,5–2,75 Std., viele Flüge pro Tag), Einreise mit Visum bei Ankunft und Bali-Touristenabgabe, dann mit Fahrer nach Ubud (ca. 1–1,5 Std.). Bali hat dieselbe Zeit wie Singapur.",
      text: "Das grüne Herz Balis: Reisterrassen, Tempel, Kunsthandwerk und Tänze, mitten im Hügelland mit Dschungel und Flüssen.",
      teens: "Rafting auf dem Ayung (für Kinder ab ca. 7–8 Jahren), Reisterrassen von Tegallalang, Wasser-Tempel Tirta Empul, Legong-Tanz am Abend, Kochkurs.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein halber Tag Rafting, ein Tag Reisterrassen und Tempel mit Fahrer, ein Tag Wasserfälle oder Kochkurs, ein ruhiger Tag mit Pool und Markt.",
        "<strong>Affen und Hunde:</strong> Auf Bali gibt es Tollwut. Im Monkey Forest Abstand halten, nichts zu essen mitnehmen, Affen nicht anfassen; Hunde meiden. Bei einem Biss sofort zum Arzt.",
        "<strong>Unterwegs:</strong> Auf Bali am einfachsten mit Fahrer (Tagespreis) oder Grab; die Strassen sind eng und voll."
      ],
      ausserdem: "Campuhan Ridge Walk, Goa Gajah (Elefantenhöhle), Wasserfälle Tegenungan und Tibumana, Kaffeeplantagen.",
      bilder: [
        {titel: "Reisterrassen", suche: "Tegallalang rice terraces", stichwort: "tegallalang|rice"},
        {titel: "Tirta Empul", suche: "Tirta Empul temple", stichwort: "tirta empul"},
        {titel: "Monkey Forest", suche: "Ubud Monkey Forest", stichwort: "monkey forest"},
        {titel: "Rafting", suche: "Ayung River rafting", stichwort: "rafting|ayung"},
        {titel: "Legong-Tanz", suche: "Legong dance Bali", stichwort: "legong"},
        {titel: "Ubud", suche: "Ubud Bali", stichwort: "ubud"}
      ]
    },
    {
      nr: 4,
      name: "Amed (Ostbali)",
      land: "id",
      region: "Bali",
      datum: "1.–4. Juli",
      naechte: "3 Nächte",
      anreise: "Mit Fahrer von Ubud über Sidemen nach Amed an der Ostküste (ca. 2–2,5 Std., ca. 80 km), unterwegs Halt am Wassertempel Tirta Gangga.",
      text: "Ruhige Fischerdörfer mit schwarzem Sand unter dem Vulkan Agung: Riffe direkt vor dem Strand und ein Schiffswrack, das man schnorchelnd erkunden kann.",
      teens: "Schnorcheln am japanischen Wrack direkt vor dem Strand, Wrack der USAT Liberty bei Tulamben (ab der Oberfläche gut sichtbar), Bootsfahrt im traditionellen Jukung, Sonnenaufgang mit Blick auf den Agung.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: zwei Schnorcheltage (Amed und Tulamben), ein Ausflug zu Tirta Gangga oder dem Tempel Lempuyang.",
        "<strong>Schnorcheln:</strong> Riffe direkt ab dem Ufer; Ausrüstung kann man vor Ort mieten. Mit Wasserschuhen, die Steine am Ufer sind rutschig."
      ],
      ausserdem: "Tirta Gangga (Wasserpalast), Lempuyang-Tempel («Tor des Himmels»), Salzgewinnung am Strand von Amed.",
      bilder: [
        {titel: "Amed", suche: "Amed Bali beach Agung", stichwort: "amed"},
        {titel: "Japanisches Wrack", suche: "Japanese shipwreck Amed", stichwort: "wreck"},
        {titel: "USAT Liberty", suche: "USAT Liberty wreck Tulamben", stichwort: "liberty|tulamben"},
        {titel: "Jukung", suche: "jukung boat Bali", stichwort: "jukung"},
        {titel: "Tirta Gangga", suche: "Tirta Gangga", stichwort: "tirta gangga"},
        {titel: "Agung", suche: "Mount Agung Bali", stichwort: "agung"}
      ]
    },
    {
      nr: 5,
      name: "Gili Air",
      land: "id",
      region: "Lombok",
      datum: "4.–8. Juli",
      naechte: "4 Nächte",
      anreise: "Schnellboot von Amed (oder Padang Bai) nach Gili Air (ab Amed ca. 1,5 Std., ab Padang Bai ca. 2–2,5 Std.; Abfahrten am Morgen, bei Wellengang auch später oder gestrichen). Den Hafen vorab prüfen: Der Hafen von Amed wurde zeitweise umgebaut. Auf der Insel keine Autos, nur Velos und Pferdekutschen.",
      text: "Kleine, autofreie Insel mit weissen Stränden, Schildkröten im seichten Wasser und Blick auf den Vulkan Rinjani auf Lombok.",
      teens: "Schnorcheln mit Schildkröten, Inselrunde mit dem Velo (ca. 1 Std.), Schnorcheltour zu den drei Gili-Inseln, Unterwasser-Statuen bei Gili Meno, Stand-up-Paddle, Sonnenuntergang am Strand.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: eine Schnorcheltour um die drei Inseln, Tage am Strand, mit Velo und Paddle.",
        "<strong>Preise:</strong> Geteilte Schnorcheltouren mit Glasbodenboot kosten wenig (meist um 10–20 CHF pro Person), Velo-Miete ebenfalls günstig.",
        "<strong>Hinweis:</strong> Strömungen zwischen den Inseln können stark sein; nur mit Führer oder in ruhigen Buchten schnorcheln. Auf Gili Air gibt es nur eine einfache Klinik."
      ],
      ausserdem: "Gili Meno (ruhig, Schildkröten-Aufzucht), Gili Trawangan (belebt, Party eher nichts für Familien), Sonnenaufgang mit Blick auf den Rinjani.",
      bilder: [
        {titel: "Gili Air", suche: "Gili Air beach", stichwort: "gili air|gili"},
        {titel: "Schildkröte", suche: "Gili sea turtle snorkeling", stichwort: "turtle"},
        {titel: "Unterwasser-Statuen", suche: "Gili Meno underwater statues", stichwort: "statue|meno"},
        {titel: "Velo", suche: "Gili Air bicycle", stichwort: "bicycle|bike|gili"},
        {titel: "Sonnenuntergang", suche: "Gili Air sunset", stichwort: "sunset|gili"},
        {titel: "Rinjani", suche: "Mount Rinjani", stichwort: "rinjani"}
      ]
    },
    {
      nr: 6,
      name: "Labuan Bajo (Komodo)",
      land: "id",
      region: "Flores",
      datum: "8.–12. Juli",
      naechte: "4 Nächte",
      anreise: "Kleines Boot von Gili Air nach Bangsal auf Lombok (ca. 15 Min.), mit Fahrer zum Flughafen Lombok (ca. 1,5–2 Std.), Flug nach Labuan Bajo auf Flores (Wings Air nonstop, ca. 1,25 Std., wenige Flüge pro Tag; Flugplan prüfen, sonst über Bali).",
      text: "Tor zum Komodo-Nationalpark: Inseln wie aus dem Bilderbuch, Komodowarane, Mantarochen und rosa Sand.",
      teens: "Bootstour mit Komodowaranen (mit Ranger), Aussicht auf Padar, Schnorcheln an Pink Beach, Mantarochen am Manta Point, Kanawa Island.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: zwei Bootstage im Nationalpark (oder eine Tour mit Übernachtung auf dem Boot), ein Tag Pool und Sonnenuntergang über der Bucht.",
        "<strong>Gebühren:</strong> Eintritt in den Nationalpark für Ausländer 2026 je nach Quelle ca. 15–55 USD pro Person, dazu Ranger; geteilte Tagestouren mit Speedboot ca. 35–75 USD pro Person. Prüfen, ob die Parkgebühren im Preis inbegriffen sind; seit 2026 gelten Besucherquoten.",
        "<strong>Gesundheit:</strong> Auf Flores ist das Malaria-Risiko höher als auf Bali; Mückenschutz und Empfehlung beim Reisemediziner klären."
      ],
      ausserdem: "Höhle Batu Cermin, Sonnenuntergang auf dem Hügel Amelia, Wasserfall Cunca Wulang.",
      bilder: [
        {titel: "Komodowaran", suche: "Komodo dragon", stichwort: "komodo"},
        {titel: "Padar", suche: "Padar Island viewpoint", stichwort: "padar"},
        {titel: "Pink Beach", suche: "Pink Beach Komodo", stichwort: "pink beach"},
        {titel: "Manta", suche: "manta ray Komodo", stichwort: "manta"},
        {titel: "Labuan Bajo", suche: "Labuan Bajo harbour", stichwort: "labuan bajo"},
        {titel: "Kanawa", suche: "Kanawa Island", stichwort: "kanawa"}
      ]
    },
    {
      nr: 7,
      name: "Nusa Lembongan",
      land: "id",
      region: "Bali",
      datum: "12.–15. Juli",
      naechte: "3 Nächte",
      anreise: "Flug Labuan Bajo–Denpasar (ca. 1–1,25 Std., mehrere Flüge pro Tag), Fahrt nach Sanur (ca. 30 Min.), Schnellboot nach Nusa Lembongan (ca. 30–45 Min.).",
      text: "Kleine Insel vor Bali mit Mangroven, Klippen und Riffen; Ausgangspunkt für Schnorcheln mit Mantarochen bei Nusa Penida.",
      teens: "Schnorcheltour mit Mantarochen, Hängebrücke nach Nusa Ceningan, Klippenspringen in der Blue Lagoon (nur bei ruhiger See), Kajak durch die Mangroven, Ausflug zum Kelingking Beach auf Nusa Penida.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: eine Schnorcheltour mit Mantas, ein Tag Nusa Ceningan und Mangroven, ein freier Tag.",
        "<strong>Hinweis:</strong> Das Wasser bei Nusa Penida ist kühler und hat Strömungen; Schnorcheln nur mit Boot und Führer."
      ],
      ausserdem: "Devil’s Tear (Wellen an den Klippen), Dream Beach, Seegras-Farmen.",
      bilder: [
        {titel: "Nusa Lembongan", suche: "Nusa Lembongan", stichwort: "lembongan"},
        {titel: "Mantarochen", suche: "manta ray Nusa Penida snorkeling", stichwort: "manta"},
        {titel: "Kelingking Beach", suche: "Kelingking Beach Nusa Penida", stichwort: "kelingking"},
        {titel: "Gelbe Brücke", suche: "Yellow Bridge Nusa Ceningan", stichwort: "ceningan|bridge"},
        {titel: "Mangroven", suche: "Nusa Lembongan mangrove", stichwort: "mangrove"},
        {titel: "Devil’s Tear", suche: "Devil's Tear Nusa Lembongan", stichwort: "devil"}
      ]
    },
    {
      nr: 8,
      name: "Südbali (Jimbaran)",
      land: "id",
      region: "Bali",
      datum: "15.–19. Juli",
      naechte: "4 Nächte",
      anreise: "Schnellboot von Nusa Lembongan nach Sanur (ca. 30–45 Min.), Fahrt nach Jimbaran oder Nusa Dua (ca. 30–45 Min.).",
      text: "Zum Ausruhen vor der Heimreise: ruhige Buchten, Fischrestaurants am Strand, Klippentempel und ein grosser Wasserpark.",
      teens: "Wasserpark Waterbom Bali, Kecak-Feuertanz bei Sonnenuntergang am Klippentempel Uluwatu, Surfkurs in Kuta, Strand in Nusa Dua (ruhiges Wasser), Fischessen am Strand von Jimbaran.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Tag Waterbom, ein Surfkurs für Anfänger in Kuta, ein Abend Uluwatu mit Kecak-Tanz, ein Strand- und Pooltag.",
        "<strong>Hinweis:</strong> Auch im Uluwatu-Tempel leben Affen, die Brillen und Handys stehlen; alles gut verstauen."
      ],
      ausserdem: "Padang Padang Beach, Garuda-Wisnu-Kencana-Park, Schildkröten-Station auf Serangan.",
      bilder: [
        {titel: "Jimbaran", suche: "Jimbaran Bay beach", stichwort: "jimbaran"},
        {titel: "Uluwatu", suche: "Uluwatu temple cliff", stichwort: "uluwatu"},
        {titel: "Kecak", suche: "Kecak dance Uluwatu", stichwort: "kecak"},
        {titel: "Waterbom", suche: "Waterbom Bali", stichwort: "waterbom"},
        {titel: "Nusa Dua", suche: "Nusa Dua beach", stichwort: "nusa dua"},
        {titel: "Padang Padang", suche: "Padang Padang Beach", stichwort: "padang padang"}
      ]
    },
    {
      nr: 9,
      name: "Singapur und Sentosa",
      ersatzsuche: "Singapore",
      land: "sg",
      region: "Singapur",
      datum: "19.–21. Juli",
      naechte: "2 Nächte, Rückflug 21. Juli",
      anreise: "Flug Denpasar–Singapur (ca. 2,5–2,75 Std.), in Singapur Hotel auf Sentosa oder in der Stadt. Rückflug Singapur–Zürich mit SWISS am Mi, 21.07.2027 kurz vor Mitternacht (Sommer 2026 ca. 23.00–23.30 Uhr; ca. 13–13,5 Std.), Ankunft in Zürich am Do, 22.07.2027 am frühen Morgen. Gepäck im Hotel lassen und spätestens ca. 3 Std. vor Abflug am Flughafen sein.",
      text: "Das Finale für die Kids: ein ganzer Tag Sentosa mit Universal Studios, Wasserpark und Strand, bevor es in der Nacht nach Hause geht.",
      teens: "Sentosa-Tag (★): Universal Studios Singapore, Adventure Cove Waterpark, Skyline Luge, Strand und abends die Show «Wings of Time». Dazu Singapore Oceanarium (früher S.E.A. Aquarium), Mandai Wildlife Reserve (Zoo, River Wonders, Night Safari), Science Centre, ArtScience Museum. Tickets online, bei einigen Bahnen gelten Grössenbeschränkungen.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein ganzer Tag Universal Studios oder Adventure Cove Waterpark mit Skyline Luge, am Abreisetag Mandai oder Jewel Changi, am Abend zum Flughafen.",
        "<strong>Essen:</strong> Hawker Centres sind günstig und familienfreundlich (Hainan-Chicken-Reis, Satay, Laksa). Wasserflaschen sind überall erhältlich."
      ],
      ausserdem: "Singapore Oceanarium, Wings of Time (Abendshow), Seilbahn nach Sentosa, Jewel Changi mit Regenwasserfall.",
      bilder: [
        {titel: "Universal Studios", suche: "Universal Studios Singapore", stichwort: "universal"},
        {titel: "Sentosa", suche: "Siloso Beach Sentosa|Sentosa island beach", stichwort: "sentosa|siloso"},
        {titel: "Skyline Luge", suche: "Skyline Luge Sentosa", stichwort: "luge"},
        {titel: "Seilbahn", suche: "Singapore Cable Car Sentosa", stichwort: "cable car"},
        {titel: "Jewel Changi", suche: "Jewel Changi Rain Vortex", stichwort: "jewel|vortex"},
        {titel: "Oceanarium", suche: "S.E.A. Aquarium Singapore", stichwort: "aquarium"}
      ]
    }
  ],
  abschluss: "Direktflug ab Singapur nach Zürich in der Nacht auf den Do, 22.07.2027 (ca. 13–13,5 Std.), Ankunft am frühen Morgen, dann mit der Bahn nach Brig-Glis. Bis zum Ferienende bleiben zwei Tage gegen den Jetlag.",
  budgetIntro: "Mittelklasse inklusive Flüge, Boote, Fahrer, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Singapur und zurück (SWISS)",
        "4’400–5’600",
        "5’000",
        "ca. 1’100–1’400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      [
        "Flüge in der Region",
        "1’400–2’300",
        "1’800",
        "Singapur–Bali, Lombok–Labuan Bajo, Labuan Bajo–Bali, Bali–Singapur; ca. 350–550 pro Person inkl. Gepäck"
      ],
      [
        "Bus, Fähren, Boote, Fahrer und Transfers",
        "1’000–1’700",
        "1’250",
        "Bus Singapur–Mersing und zurück, Fähre nach Tioman, Schnellboote nach Gili Air und Nusa Lembongan, Boot und Fahrt zum Flughafen Lombok, Fahrer auf Bali (Tagespreis), Grab, MRT in Singapur"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)",
        "3’200–5’200",
        "4’200",
        "ca. 80–140 CHF pro Nacht in Malaysia und Indonesien, in Singapur ca. 250–300 (auch die Nacht am Flughafen); Gili Air, Labuan Bajo und Südbali im Juli teurer"
      ],
      [
        "Verpflegung (Warungs, Restaurants, Getränke)",
        "2’000–3’300",
        "2’500",
        "ca. 60–90 CHF pro Tag für 4 Personen in Indonesien, in Singapur mehr"
      ],
      [
        "Aktivitäten und Eintritte",
        "1’900–3’100",
        "2’450",
        "Gardens by the Bay, Schnorcheltouren und Marine-Park-Gebühr auf Tioman, Rafting, Schnorcheln bei Amed und auf den Gili-Inseln, Bootstouren im Komodo-Nationalpark mit Parkgebühren, Mantas bei Nusa Penida, Surfkurs, Waterbom, Universal Studios Singapore usw."
      ],
      [
        "Visum, Versicherung, Impfungen, eSIM",
        "900–1’800",
        "1’200",
        "Visum bei Ankunft (2026 ca. 500’000 IDR pro Person, eine Erhöhung ist geplant), Bali-Touristenabgabe (150’000 IDR pro Person), Impfungen (z.B. Tollwut, Hepatitis A), Reiseversicherung mit Rücktransport"
      ],
      ["Reserve (ca. 5 %)", "750–1’150", "900", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Singapur (2)", "780–1’240"],
      ["2. Pulau Tioman (4)", "660–1’040"],
      ["Zwischenübernachtung Singapur (1)", "330–520"],
      ["3. Ubud (4)", "760–1’210"],
      ["4. Amed (3)", "420–660"],
      ["5. Gili Air (4)", "690–1’090"],
      ["6. Labuan Bajo (4)", "1’150–1’820"],
      ["7. Nusa Lembongan (3)", "600–950"],
      ["8. Südbali (4)", "1’000–1’590"],
      ["9. Singapur und Sentosa (2)", "1’360–2’160"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten in Singapur teils noch Kinderpreise (bis 12), in Indonesien meist den Erwachsenenpreis; vieles ist aber günstig.",
      "Sparhebel: geteilte statt private Bootstouren, Warungs statt Hotelrestaurants, Fahrer für mehrere Tage am Stück buchen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Preise für Inlandflüge und Unterkünfte im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 31,
    total: "19’300",
    spanne: "15’600–24’200",
    proTag: "ca. 620 CHF pro Tag, ca. 4’800 pro Person"
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise Singapur und Malaysia",
      "Für Schweizer visumfrei. Vor der Ankunft online die SG Arrival Card (Singapur) und die MDAC (Malaysia Digital Arrival Card) ausfüllen, beide gratis und nur auf den offiziellen Seiten. Beim Bus nach Mersing gibt es zwei Grenzkontrollen."
    ],
    [
      "Einreise Indonesien",
      "Visum bei Ankunft oder vorab als e-VOA (2026 ca. 500’000 IDR pro Person, 30 Tage, einmal verlängerbar; eine Erhöhung ist geplant), dazu die Bali-Touristenabgabe von 150’000 IDR pro Person und die All Indonesia e-Arrival Card. Ob Schweizer auf der Liste stehen und die aktuellen Gebühren nur auf den offiziellen Seiten prüfen (evisa.imigrasi.go.id, Love Bali), nicht bei Vermittlern."
    ],
    [
      "Reisepass",
      "Biometrischer Reisepass für alle vier, bei der Einreise noch mind. 6 Monate gültig, mit freien Seiten."
    ],
    [
      "Gesundheit",
      "Dengue überall (Mückenschutz tagsüber), Malaria auf Bali und Lombok sehr gering, auf Flores höher; Tollwut auf Bali (Affen und Hunde meiden). Reisemedizinische Beratung 6–8 Wochen vorher (Impfungen, Malaria-Empfehlung für Flores)."
    ],
    [
      "Wasser und Essen",
      "Kein Leitungswasser, auch nicht zum Zähneputzen; Eis nur in guten Restaurants. Gekochtes Essen und geschältes Obst bevorzugen, Hände waschen. Medikamente gegen Durchfall mitnehmen."
    ],
    [
      "Wasser-Sicherheit",
      "Strömungen zwischen den Inseln und an Brandungsstränden; Schnorcheltouren nur mit Führer, Schwimmwesten für die Kids anbieten lassen, riffschonende Sonnencreme."
    ],
    [
      "Transport",
      "Auf Bali mit Fahrer oder Grab, nicht selber fahren. Schnellboote bei gutem Anbieter buchen (Rettungswesten, Wetter); Gepäck wird oft nass, wasserdichte Säcke mitnehmen."
    ],
    ["Zeitzonen", "Singapur, Malaysia, Bali, die Gili-Inseln und Flores +6 Std. zur Schweiz."],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung mit hoher Deckung; auf den kleinen Inseln gibt es nur einfache Kliniken, ernste Fälle gehen nach Bali oder Singapur."
    ],
    [
      "Notfall",
      "In Indonesien 112; Schweizer Botschaft in Jakarta, Honorarkonsulat auf Bali. EDA-Reisehinweise vor der Abreise lesen."
    ],
    [
      "Geld und Technik",
      "In Indonesien und auf Tioman viel Bargeld (IDR, MYR; auf Tioman kaum Geldautomaten), Kreditkarte in Hotels; eSIM für die ganze Region. Steckdosen in Indonesien Typ C/F (wie in Europa, ohne Erdung), in Singapur und Malaysia Typ G."
    ],
    [
      "Respekt",
      "In Tempeln Schultern und Knie bedecken (Sarong wird oft ausgeliehen); auf den Gili-Inseln und Lombok (muslimisch) zurückhaltende Kleidung ausserhalb der Strände."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
