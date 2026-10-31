// Reise: Singapur und Indonesien (Bali, Gili-Inseln, Komodo, Nusa Lembongan, Yogyakarta), Flüge, Schnellboote und Fahrer
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.indonesien = {
  titel: "Singapur und Indonesien: von Bali über die Gili-Inseln nach Komodo",
  menu: "Singapur / Indonesien",
  untertitel: "Fünf Wochen Singapur und Indonesien in der Trockenzeit: Singapur, Bali mit Ubud und Amed, die Gili-Inseln, Komodo mit Waranen und Mantas, Nusa Lembongan, Yogyakarta mit Borobudur und zum Schluss Strand auf Bali und Sentosa.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Padar Island Komodo|Gili Air beach",
    stichwort: "padar|komodo|gili",
    alt: "Padar im Komodo-Nationalpark"
  },
  planIntro: "Abflug ab Zürich nach Singapur am Sa, 19.06.2027 am Abend, Rückflug ab Singapur am Mi, 21.07.2027 in der Nacht (Ankunft Do, 22.07.2027 am Morgen). 31 Nächte im Land, dazu zwei Nächte im Flugzeug. Dazwischen sechs kurze Flüge, Schnellboote und Fahrten mit Fahrer. Ein Klick auf eine Station springt zur Beschreibung.",
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
      name: "2. Ubud (Bali)",
      naechte: 4,
      info: "Flug nach Bali (ca. 2,5–2,75 Std.), Fahrt nach Ubud (ca. 1–1,5 Std.), Uhr bleibt gleich"
    },
    {datum: "26.–29. Juni", name: "3. Amed (Ostbali)", naechte: 3, info: "Fahrt mit Fahrer (ca. 2–2,5 Std.)"},
    {datum: "29. Juni–4. Juli", name: "4. Gili Air", naechte: 5, info: "Schnellboot (ca. 1,5 Std.; Hafen vorab prüfen)"},
    {
      datum: "4.–8. Juli",
      name: "5. Labuan Bajo (Komodo)",
      naechte: 4,
      info: "Boot und Fahrt zum Flughafen Lombok (ca. 2–2,5 Std.), Flug nach Labuan Bajo (ca. 1,25 Std.)"
    },
    {
      datum: "8.–11. Juli",
      name: "6. Nusa Lembongan",
      naechte: 3,
      info: "Flug nach Bali (ca. 1–1,25 Std.), Schnellboot ab Sanur (ca. 30–45 Min.)"
    },
    {
      datum: "11.–14. Juli",
      name: "7. Yogyakarta (Java)",
      naechte: 3,
      info: "Schnellboot und Flug nach Yogyakarta (ca. 1,25 Std.), Uhr −1 Std."
    },
    {
      datum: "14.–19. Juli",
      name: "8. Südbali (Jimbaran)",
      naechte: 5,
      info: "Flug nach Bali (ca. 1,25 Std.), Uhr +1 Std."
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
      "31 Nächte im Land, 9 Stationen. Sechs kurze Flüge (Singapur–Bali ca. 2,5–2,75 Std., Lombok–Labuan Bajo ca. 1,25 Std., Labuan Bajo–Bali ca. 1–1,25 Std., Bali–Yogyakarta und zurück je ca. 1,25 Std., Bali–Singapur ca. 2,5–2,75 Std.), dazu Schnellboote (zusammen ca. 3–4 Std.) und Fahrten mit Fahrer (zusammen ca. 7–9 Std.). Mit Transfers, Check-in und Wartezeiten ist jeder Flugtag ein halber bis ganzer Reisetag. Niemand muss selber fahren."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Singapur mit SWISS als Direktflug ca. 12–13 Std. am Sa, 19.06.2027 am späten Abend (Ankunft So am Nachmittag, Zeitverschiebung +6 Std.). Rückflug: Singapur–Zürich mit SWISS am Mi, 21.07.2027 kurz vor Mitternacht (Sommer 2026 ca. 23.00–23.30 Uhr), Ankunft Do, 22.07.2027 ca. 6 Uhr. Flugpläne 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "Juni bis September ist auf Bali, Lombok und Flores Trockenzeit: ca. 29–31 °C, wenig Regen, nachts angenehm, auf Komodo trocken und heiss. Singapur ist das ganze Jahr ca. 31 °C und schwül mit kurzen Schauern. Meer ca. 26–28 °C, bei Nusa Penida kühler."
    ],
    [
      "Vorab buchen",
      "Flüge Zürich–Singapur und alle Inlandflüge (Gepäck einrechnen), Unterkunft auf Gili Air und in Labuan Bajo, Bootstour im Komodo-Nationalpark (Quoten), Borobudur mit Zeitfenster, Universal Studios Singapore, Fahrer auf Bali und Transfer zum Flughafen Lombok."
    ],
    [
      "Optional",
      "Ohne Yogyakarta spart ihr zwei Flüge (die Nächte gehen z.B. an Gili Air oder Südbali); Süden von Lombok mit Surfstränden (eigene Nächte zwischen Gili Air und dem Flug nach Flores); Komodo-Tour mit einer Nacht auf dem Boot; Mandai Night Safari in Singapur."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Flugzeug von Singapur nach Bali, mit Fahrer und Schnellboot über Bali zu den Gili-Inseln, mit dem Flugzeug nach Flores und zurück, nach Java und wieder nach Bali, zum Schluss nach Singapur. Darunter die Detailkarte von Bali und den Gili-Inseln.",
    breit: true,
    legende: ["air", "ferry", "car"],
    karten: [
      {datei: "karten/indonesien.svg"},
      {titel: "Bali und die Gili-Inseln im Detail (Stationen 2 bis 4, 6 und 8)", datei: "karten/indonesien-bali.svg"}
    ]
  },
  abwechslungIntro: "Grossstadt, Reisterrassen und Tempel, Riffe und Inseln, Surfstrände, Komodowarane, Vulkane und Tempelanlagen auf Java, zum Schluss Strand und Freizeitpark.",
  abwechslung: [
    [
      "Natur",
      "Reisterrassen und Dschungel bei Ubud, Vulkane Agung, Rinjani und Merapi, Inseln und Buchten im Komodo-Nationalpark, Wasserfälle bei Ubud."
    ],
    [
      "Strand und Schnorcheln",
      "Riffe und ein Wrack bei Amed, Schildkröten auf den Gili-Inseln, Mantarochen bei Komodo und Nusa Penida, ruhige Buchten und Surfstrände in Südbali."
    ],
    [
      "Action und Freizeitparks",
      "Rafting bei Ubud, Surfkurs, Komodowarane mit Ranger, Jeep-Tour am Merapi, Klippenspringen in der Blue Lagoon, Waterbom Bali, Universal Studios Singapore."
    ],
    ["Städte und Kultur", "Singapur, Tempel und Tänze auf Bali, Borobudur und Prambanan, Sultanspalast in Yogyakarta."],
    ["Ruhetage", "Überall 2–5 Nächte; Gili Air und Südbali haben je 5 Nächte, Ubud und Komodo je 4."]
  ],
  stationenIntro: "Neun Stationen von Singapur über Bali, die Gili-Inseln, Flores und Java zurück nach Singapur. Über jeder Station steht, wie ihr dorthin kommt.",
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
        "<strong>Dauer:</strong> 2 Nächte: Ankunft am Sonntagnachmittag, ein voller Tag in der Stadt (Gärten, Marina Bay, Chinatown), am Abend die Supertrees-Lichtshow.",
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
      name: "Ubud (Bali)",
      land: "id",
      region: "Bali",
      datum: "22.–26. Juni",
      naechte: "4 Nächte",
      anreise: "Flug Singapur–Denpasar (Bali) nonstop (ca. 2,5–2,75 Std., viele Flüge pro Tag), Einreise mit Visum bei Ankunft und Bali-Touristenabgabe, dann mit Fahrer nach Ubud (ca. 1–1,5 Std.). Bali hat dieselbe Zeit wie Singapur.",
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
      nr: 3,
      name: "Amed (Ostbali)",
      land: "id",
      region: "Bali",
      datum: "26.–29. Juni",
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
      nr: 4,
      name: "Gili Air",
      land: "id",
      region: "Lombok",
      datum: "29. Juni–4. Juli",
      naechte: "5 Nächte",
      anreise: "Schnellboot von Amed (oder Padang Bai) nach Gili Air (ab Amed ca. 1,5 Std., ab Padang Bai ca. 2–2,5 Std.; Abfahrten am Morgen, bei Wellengang auch später oder gestrichen). Den Hafen vorab prüfen: Der Hafen von Amed wurde zeitweise umgebaut. Auf der Insel keine Autos, nur Velos und Pferdekutschen.",
      text: "Kleine, autofreie Insel mit weissen Stränden, Schildkröten im seichten Wasser und Blick auf den Vulkan Rinjani auf Lombok.",
      teens: "Schnorcheln mit Schildkröten, Inselrunde mit dem Velo (ca. 1 Std.), Schnorcheltour zu den drei Gili-Inseln, Unterwasser-Statuen bei Gili Meno, Stand-up-Paddle, Sonnenuntergang am Strand.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: eine Schnorcheltour um die drei Inseln, ein Ausflug nach Gili Meno, Tage am Strand, mit Velo und Paddle.",
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
      nr: 5,
      name: "Labuan Bajo (Komodo)",
      land: "id",
      region: "Flores",
      datum: "4.–8. Juli",
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
      nr: 6,
      name: "Nusa Lembongan",
      land: "id",
      region: "Bali",
      datum: "8.–11. Juli",
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
      nr: 7,
      name: "Yogyakarta (Java)",
      land: "id",
      region: "Java",
      datum: "11.–14. Juli",
      naechte: "3 Nächte",
      anreise: "Schnellboot nach Sanur (ca. 30–45 Min.), Fahrt zum Flughafen (ca. 30 Min.), Flug Denpasar–Yogyakarta (ca. 1,25 Std.), vom Flughafen in die Stadt ca. 1 Std. Java hat eine Stunde weniger als Bali (+5 Std. zur Schweiz).",
      text: "Kulturhauptstadt Javas: Borobudur, die grösste buddhistische Tempelanlage der Welt, die Hindu-Tempel von Prambanan und der aktive Vulkan Merapi.",
      teens: "Borobudur am frühen Morgen, Jeep-Tour am Vulkan Merapi durch die Lavafelder, Tempel von Prambanan, Batik-Kurs, Sultanspalast.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Morgen Borobudur, ein Tag Merapi-Jeep und Prambanan, ein halber Tag Stadt.",
        "<strong>Borobudur:</strong> Der Aufstieg auf die oberen Terrassen ist auf ca. 1’200 Personen pro Tag beschränkt und nur mit Zeitfenster und Führer möglich; die Preise für Ausländer sind 2026 unklar. Vorab online buchen.",
        "<strong>Hinweis:</strong> Schultern und Knie in Tempeln bedeckt; früh starten wegen Hitze und Andrang."
      ],
      ausserdem: "Sonnenaufgang auf dem Hügel Punthuk Setumbu mit Blick auf Borobudur, Wasserschloss Taman Sari, Höhle Jomblang.",
      bilder: [
        {titel: "Borobudur", suche: "Borobudur temple", stichwort: "borobudur"},
        {titel: "Prambanan", suche: "Prambanan temple", stichwort: "prambanan"},
        {titel: "Merapi", suche: "Mount Merapi", stichwort: "merapi"},
        {titel: "Jeep-Tour", suche: "Merapi lava tour jeep", stichwort: "jeep|merapi"},
        {titel: "Taman Sari", suche: "Taman Sari Yogyakarta", stichwort: "taman sari"},
        {titel: "Batik", suche: "batik Yogyakarta", stichwort: "batik"}
      ]
    },
    {
      nr: 8,
      name: "Südbali (Jimbaran)",
      land: "id",
      region: "Bali",
      datum: "14.–19. Juli",
      naechte: "5 Nächte",
      anreise: "Flug Yogyakarta–Denpasar (ca. 1,25 Std.), Fahrt nach Jimbaran oder Nusa Dua (ca. 20–40 Min.). Die Uhr springt wieder +1 Std.",
      text: "Zum Ausruhen vor der Heimreise: ruhige Buchten, Fischrestaurants am Strand, Klippentempel und ein grosser Wasserpark.",
      teens: "Wasserpark Waterbom Bali, Kecak-Feuertanz bei Sonnenuntergang am Klippentempel Uluwatu, Surfkurs in Kuta, Strand in Nusa Dua (ruhiges Wasser), Fischessen am Strand von Jimbaran.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: ein Tag Waterbom, ein Surfkurs für Anfänger in Kuta, ein Abend Uluwatu mit Kecak-Tanz, zwei Strand- und Pooltage.",
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
        "2’000–3’200",
        "2’500",
        "Singapur–Bali, Lombok–Labuan Bajo, Labuan Bajo–Bali, Bali–Yogyakarta und zurück, Bali–Singapur; ca. 500–800 pro Person inkl. Gepäck. Ohne Yogyakarta ca. 400–500 CHF weniger"
      ],
      [
        "Boote, Fahrer und Transfers",
        "800–1’400",
        "1’000",
        "Schnellboote nach Gili Air und Nusa Lembongan, Boot und Fahrt zum Flughafen Lombok, Fahrer auf Bali (Tagespreis), Grab, MRT in Singapur"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)",
        "3’200–5’200",
        "4’000",
        "ca. 80–140 CHF pro Nacht in Indonesien, in Singapur ca. 250–300; Gili Air, Labuan Bajo und Südbali im Juli teurer"
      ],
      [
        "Verpflegung (Warungs, Restaurants, Getränke)",
        "2’000–3’300",
        "2’500",
        "ca. 60–90 CHF pro Tag für 4 Personen in Indonesien, in Singapur mehr"
      ],
      [
        "Aktivitäten und Eintritte",
        "2’100–3’300",
        "2’600",
        "Gardens by the Bay, Rafting, Schnorcheltouren, Surfkurs, Bootstouren im Komodo-Nationalpark mit Parkgebühren, Mantas bei Nusa Penida, Borobudur, Prambanan und Merapi-Jeep, Waterbom, Universal Studios Singapore usw."
      ],
      [
        "Visum, Versicherung, Impfungen, eSIM",
        "900–1’800",
        "1’200",
        "Visum bei Ankunft (2026 ca. 500’000 IDR pro Person, eine Erhöhung ist geplant), Bali-Touristenabgabe (150’000 IDR pro Person), Impfungen (z.B. Tollwut, Hepatitis A), Reiseversicherung mit Rücktransport"
      ],
      ["Reserve (ca. 5 %)", "750–1’200", "950", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Singapur (2)", "780–1’240"],
      ["2. Ubud (4)", "760–1’210"],
      ["3. Amed (3)", "420–660"],
      ["4. Gili Air (5)", "860–1’370"],
      ["5. Labuan Bajo (4)", "1’150–1’820"],
      ["6. Nusa Lembongan (3)", "600–950"],
      ["7. Yogyakarta (3)", "580–920"],
      ["8. Südbali (5)", "1’180–1’880"],
      ["9. Singapur und Sentosa (2)", "1’360–2’160"]
    ],
    hinweise: [
      "Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten in Singapur teils noch Kinderpreise (bis 12), in Indonesien meist den Erwachsenenpreis; vieles ist aber günstig.",
      "Sparhebel: Yogyakarta weglassen (zwei Flüge weniger), geteilte statt private Bootstouren, Warungs statt Hotelrestaurants, Fahrer für mehrere Tage am Stück buchen.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Preise für Inlandflüge und Unterkünfte im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 31,
    total: "19’750",
    spanne: "16’200–25’000",
    proTag: "ca. 640 CHF pro Tag, ca. 4’900 pro Person"
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise Singapur",
      "Für Schweizer visumfrei. Vor der Ankunft die SG Arrival Card online ausfüllen (gratis, nur auf der offiziellen Seite)."
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
    ["Zeitzonen", "Singapur, Bali, Lombok und Flores +6 Std. zur Schweiz, Java +5 Std."],
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
      "In Indonesien viel Bargeld (IDR), Kreditkarte in Hotels; eSIM für Indonesien und Singapur. Steckdosen Typ C/F (wie in Europa, ohne Erdung), in Singapur Typ G."
    ],
    [
      "Respekt",
      "In Tempeln Schultern und Knie bedecken (Sarong wird oft ausgeliehen); auf den Gili-Inseln und Lombok (muslimisch) zurückhaltende Kleidung ausserhalb der Strände."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
