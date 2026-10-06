// Reise 4: Spanien / Portugal mit dem eigenen Auto ab Brig-Glis (keine Flüge, Inseln per Autofähre)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.spanien = {
  titel: "Mit dem Auto durch Spanien und Portugal",
  menu: "Spanien / Portugal",
  untertitel: "Fünf Wochen Roadtrip ab Brig-Glis: Costa Brava, Barcelona, Inselhopping mit der Autofähre, Andalusien, Lissabon, Porto und der wilde Norden.",
  zeitraum: "Fr, 18.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Playa de las Catedrales|Bardenas Reales Castildetierra|Caminito del Rey",
    stichwort: "catedrales|castildetierra|caminito",
    alt: "Landschaft in Spanien"
  },
  planIntro: "Abfahrt in Brig-Glis am Fr, 18.06.2027, Rückkehr am Sa, 24.07.2027. Alle Strecken mit dem eigenen Auto, zu den Inseln mit der Autofähre. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {datum: "18. Juni", name: "Abfahrt in Brig-Glis", info: "Mit dem eigenen Auto über Genf und Lyon ans Mittelmeer"},
  plan: [
    {
      datum: "18.–19. Juni",
      name: "Zwischenübernachtung Sète",
      naechte: 1,
      info: "Brig-Glis – Genf – Lyon – Montpellier – Sète (ca. 7–7,5 Std., ca. 630 km)"
    },
    {datum: "19.–22. Juni", name: "1. Costa Brava", naechte: 3, info: "Auto über Perpignan nach L’Estartit (ca. 3 Std.)"},
    {datum: "22.–25. Juni", name: "2. Barcelona", naechte: 3, info: "Auto (ca. 1,5 Std.)"},
    {datum: "25.–29. Juni", name: "3. Mallorca", naechte: 4, info: "Autofähre Barcelona–Palma (ca. 6,5–7,5 Std.)"},
    {datum: "29. Juni–1. Juli", name: "4. Ibiza und Formentera", naechte: 2, info: "Autofähre Palma–Ibiza (ca. 2,5–4 Std.)"},
    {datum: "1.–2. Juli", name: "Zwischenübernachtung Dénia (Costa Blanca)", naechte: 1, info: "Autofähre Ibiza–Dénia (ca. 2,5 Std.)"},
    {datum: "2.–6. Juli", name: "5. Cabo de Gata", naechte: 4, info: "Auto über Alicante und Murcia (ca. 4,5 Std.)"},
    {datum: "6.–9. Juli", name: "6. Granada", naechte: 3, info: "Auto (ca. 2–2,5 Std.)"},
    {datum: "9.–11. Juli", name: "7. Caminito del Rey (El Chorro)", naechte: 2, info: "Auto (ca. 1,5–2 Std.)"},
    {datum: "11.–14. Juli", name: "8. Sevilla", naechte: 3, info: "Auto (ca. 2 Std.)"},
    {datum: "14.–17. Juli", name: "9. Lissabon", naechte: 3, info: "Auto (ca. 4,5–5 Std.), Uhr −1 Std."},
    {datum: "17.–19. Juli", name: "10. Porto", naechte: 2, info: "Auto (ca. 3 Std.)"},
    {datum: "19.–21. Juli", name: "11. Playa de las Catedrales", naechte: 2, info: "Auto (ca. 4–4,5 Std.), Uhr +1 Std."},
    {datum: "21.–22. Juli", name: "Zwischenübernachtung Bilbao", naechte: 1, info: "Auto entlang der Nordküste (ca. 4 Std.)"},
    {datum: "22.–23. Juli", name: "12. Bardenas Reales", naechte: 1, info: "Auto (ca. 2,5 Std.)"},
    {
      datum: "23.–24. Juli",
      name: "Zwischenübernachtung Carcassonne",
      naechte: 1,
      info: "Auto über Saragossa, Lleida und Perpignan (ca. 6,5–7 Std., ca. 690 km)"
    }
  ],
  rueckflug: {
    datum: "24. Juli",
    name: "Ankunft in Brig-Glis",
    info: "Carcassonne – Montpellier – Lyon – Genf – Brig-Glis (ca. 7,5–8 Std., ca. 780 km)"
  },
  planHinweise: [
    [
      "Gesamt",
      "36 Nächte, 12 Stationen und 4 Zwischenübernachtungen (Sète, Dénia, Bilbao, Carcassonne). Keine Flüge: alles mit dem eigenen Auto, zu den Inseln mit drei Autofähren. Insgesamt ca. 5’500 km Autofahrt und ca. 13 Std. auf Fähren, zusammen ca. 68 Std. reine Reisezeit; mit Pausen, Check-in an den Häfen und Sommerstau realistisch ca. 78–80 Std. Die längsten Reisetage: Brig-Glis–Sète (ca. 7–7,5 Std.), Carcassonne–Brig-Glis (ca. 7,5–8 Std.), Fähre Barcelona–Palma (ca. 6,5–7,5 Std.), Bardenas–Carcassonne (ca. 6,5–7 Std.), Sevilla–Lissabon (ca. 4,5–5 Std.), Dénia–Cabo de Gata (ca. 4,5 Std.) und Porto–Ribadeo (ca. 4–4,5 Std.)."
    ],
    [
      "Vorab buchen",
      "Autofähren Barcelona–Palma, Palma–Ibiza und Ibiza–Dénia (im Juli früh buchen, Check-in 60–90 Min. vor Abfahrt), Unterkünfte an den Küsten und auf den Inseln (Hochsaison), Alhambra (im Sommer oft drei Monate im Voraus ausverkauft), Sagrada Família, Caminito del Rey, Reservation für die Playa de las Catedrales (gratis, frühestens 30 Tage vorher)."
    ],
    [
      "Auto",
      "Crit’Air-Vignette für Frankreich vorab bestellen (Umweltzonen in Lyon, Montpellier und weiteren Städten), Auto für die Umweltzone von Barcelona online registrieren, in Portugal elektronische Maut über EasyToll an der Grenze oder Via Verde. CH-Kleber, Warnwesten für alle und Pannenhilfe-Versicherung mitnehmen. In Städten Parkhaus beim Hotel buchen, keine Wertsachen sichtbar im Auto lassen."
    ],
    [
      "Optional",
      "PortAventura (Freizeitpark bei Tarragona, ca. 1,5 Std. ab Barcelona), Valencia mit Oceanogràfic (auf dem Weg von Dénia nach Süden), Ronda (bei El Chorro), Algarve (zwischen Sevilla und Lissabon), Sintra (Tagesausflug ab Lissabon), San Sebastián (statt Bilbao)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege: mit dem eigenen Auto ab Brig-Glis, zu den Inseln mit der Autofähre. Darunter die Detailkarte.",
    breit: true,
    legende: ["car", "ferry"],
    karten: [
      {datei: "karten/spanien.svg"},
      {titel: "Spanien und Portugal im Detail (Stationen 1 bis 12)", datei: "karten/spanien-detail.svg"}
    ]
  },
  abwechslungIntro: "Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen. In Andalusien Programm auf Morgen und Abend legen, mittags ist es sehr heiss.",
  abwechslung: [
    ["Action und Freizeitparks", "Caminito del Rey, Kajak und Schnorcheln bei den Islas Medas, Coasteering auf Mallorca, Isla Mágica in Sevilla, Wasserparks auf Mallorca; optional PortAventura."],
    ["Kultur und Geschichte", "Sagrada Família und Park Güell in Barcelona, Alhambra in Granada, Alcázar und Kathedrale in Sevilla, Belém in Lissabon, Altstadt von Porto, Cité von Carcassonne."],
    ["Natur und Landschaft", "Halbwüste Bardenas Reales, Badlands und Dolmen von Gorafe, Vulkanküste am Cabo de Gata, Schlucht des Caminito del Rey, Felsbögen der Playa de las Catedrales."],
    ["Strand und Schnorcheln", "Costa Brava (Islas Medas, Sa Tuna), Mallorca, Formentera, Cabo de Gata; im Mittelmeer ist das Wasser im Juli ca. 23–26 °C warm, am Atlantik deutlich kühler."],
    ["Mitmachen", "Tapas- und Paella-Kurs, Velotour in Sevilla oder Lissabon, Bootstour auf dem Douro in Porto, Surf-Schnupperstunde in Galicien."]
  ],
  stationenIntro: "Zwölf Stationen von der Costa Brava über die Balearen, Andalusien und Portugal bis in den Norden. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Costa Brava (Start)",
      land: "es",
      region: "Katalonien",
      datum: "19.–22. Juni",
      naechte: "3 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Sète", datum: "18.–19. Juni"},
      anreise: "Mit dem Auto ab Brig-Glis über Genf, Lyon und Montpellier nach Sète (ca. 7–7,5 Std., ca. 630 km), dort am Mittelmeer übernachten. Am nächsten Tag über Perpignan nach L’Estartit (ca. 3 Std., ca. 260 km), Uhr ohne Zeitverschiebung.",
      text: "Felsige Buchten, Pinienwälder und kleine Fischerorte zwischen der französischen Grenze und Barcelona. Vor L’Estartit liegen die Islas Medas, eines der besten Schnorchel- und Tauchgebiete im westlichen Mittelmeer.",
      teens: "Schnorcheln oder Glasbodenboot im Meeresschutzgebiet der Islas Medas, Kajak entlang der Küste, Baden in der Bucht Sa Tuna, Küstenpfad (Camí de Ronda) von Begur aus.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, z.B. in L’Estartit oder Begur. Ein Tag Islas Medas, ein Tag Buchten um Begur, ein ruhiger Tag.",
        "<strong>Islas Medas:</strong> Bootstouren mit Schnorcheln ab L’Estartit dauern ca. 2–2,5 Std.; das Schutzgebiet ist reich an Fischen, Zackenbarschen und Seegras.",
        "<strong>Sa Tuna:</strong> Kleine Kiesbucht ca. 3 km von Begur; im Sommer früh kommen, die Parkplätze sind knapp."
      ],
      ausserdem: "Altstadt von Begur und Pals, Dalí-Museum in Figueres, Girona (Altstadt), Cala Aiguablava, Calella de Palafrugell.",
      bilder: [
        {titel: "Islas Medas", suche: "Medes Islands|Illes Medes L'Estartit", stichwort: "medes|medas"},
        {titel: "Sa Tuna", suche: "Cala Sa Tuna Begur|Sa Tuna", stichwort: "tuna"},
        {titel: "Begur", suche: "Begur Costa Brava|Begur castle", stichwort: "begur"},
        {titel: "Aiguablava", suche: "Aiguablava|Cala Aiguablava", stichwort: "aiguablava"},
        {titel: "Pals", suche: "Pals Girona medieval village|Pals", stichwort: "pals"},
        {titel: "Calella de Palafrugell", suche: "Calella de Palafrugell", stichwort: "calella"}
      ]
    },
    {
      nr: 2,
      name: "Barcelona",
      land: "es",
      region: "Katalonien",
      datum: "22.–25. Juni",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto von der Costa Brava nach Barcelona (ca. 1,5 Std., ca. 140 km). Das Auto vorab für die Umweltzone registrieren und im Hotel-Parkhaus abstellen; in der Stadt Metro und zu Fuss.",
      text: "Gaudís Bauten, Altstadtgassen, Strand und eine lebendige Grossstadt. In der Nacht vom 23. auf den 24. Juni feiert die Stadt Sant Joan mit Feuerwerk und Feuern am Strand.",
      teens: "Sagrada Família (Turm), Park Güell, Camp Nou bzw. Barça-Museum, Seilbahn auf den Montjuïc, Strand Barceloneta, Markt La Boqueria.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Am 25. Juni geht die Fähre nach Mallorca.",
        "<strong>Sant Joan:</strong> Die Nacht vom 23. auf den 24. Juni ist laut und voll, Feuerwerk überall; der 24. Juni ist Feiertag.",
        "<strong>Tickets:</strong> Sagrada Família und Park Güell nur online mit Zeitfenster; Kinder unter 11 gratis, brauchen aber ein Ticket.",
        "<strong>Taschendiebe:</strong> Auf den Ramblas, in der Metro und am Strand Wertsachen gut verstauen."
      ],
      ausserdem: "Casa Batlló, Barri Gòtic, Born-Viertel, Tibidabo (Freizeitpark mit Aussicht), CosmoCaixa (Wissenschaftsmuseum).",
      bilder: [
        {titel: "Sagrada Família", suche: "Sagrada Familia", stichwort: "sagrada"},
        {titel: "Park Güell", suche: "Park Guell", stichwort: "guell|güell"},
        {titel: "Casa Batlló", suche: "Casa Batllo", stichwort: "batll"},
        {titel: "Barri Gòtic", suche: "Barri Gotic Barcelona", stichwort: "gotic|gòtic"},
        {titel: "Barceloneta", suche: "Barceloneta beach", stichwort: "barceloneta"},
        {titel: "Montjuïc", suche: "Montjuic cable car|Montjuic", stichwort: "montju"}
      ]
    },
    {
      nr: 3,
      name: "Mallorca",
      land: "es",
      region: "Balearen",
      datum: "25.–29. Juni",
      naechte: "4 Nächte",
      anreise: "Autofähre Barcelona–Palma mit Baleària, Trasmed oder GNV (ca. 6,5–7,5 Std.); Check-in mit dem Auto ca. 60–90 Min. vor Abfahrt. Tagesfähre am Morgen oder Nachtfähre mit Kabine.",
      text: "Die grösste Baleareninsel mit Buchten, dem Tramuntana-Gebirge und der Altstadt von Palma. Mit dem eigenen Auto erreicht ihr auch die ruhigeren Ecken.",
      teens: "Coasteering oder Kajak an der Steilküste, Drachenhöhlen bei Porto Cristo, Baden in der Cala Mondragó oder Caló des Moro, Fahrt durch die Serra de Tramuntana nach Sa Calobra.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte, z.B. im Osten oder Südosten. Ein Tag Palma, ein Tag Tramuntana, zwei Strandtage.",
        "<strong>Touristenabgabe:</strong> Auf den Balearen gilt eine Abgabe pro Person und Nacht; Kinder unter 16 sind befreit.",
        "<strong>Strassen:</strong> Die Bergstrasse nach Sa Calobra ist sehr kurvig und im Sommer voll; früh fahren."
      ],
      ausserdem: "Kathedrale La Seu in Palma, Valldemossa, Sóller mit dem historischen Zug, Cap de Formentor, Bootsausflug zur Insel Cabrera.",
      bilder: [
        {titel: "Kathedrale von Palma", suche: "Palma Cathedral La Seu", stichwort: "palma|seu"},
        {titel: "Caló des Moro", suche: "Calo des Moro", stichwort: "moro"},
        {titel: "Sa Calobra", suche: "Sa Calobra road|Sa Calobra", stichwort: "calobra"},
        {titel: "Cap de Formentor", suche: "Cap de Formentor", stichwort: "formentor"},
        {titel: "Drachenhöhlen", suche: "Cuevas del Drach|Coves del Drac", stichwort: "drac|drach"},
        {titel: "Valldemossa", suche: "Valldemossa", stichwort: "valldemossa"}
      ]
    },
    {
      nr: 4,
      name: "Ibiza und Formentera",
      land: "es",
      region: "Balearen",
      datum: "29. Juni–1. Juli",
      naechte: "2 Nächte",
      anreise: "Autofähre Palma–Ibiza (ca. 2,5–4 Std., je nach Schiff). Nach Formentera als Tagesausflug ohne Auto mit der Schnellfähre ab Ibiza-Stadt (ca. 30 Min.).",
      text: "Ibiza abseits der Partys: ruhige Buchten im Norden, die Altstadt Dalt Vila und das türkisfarbene Wasser von Formentera mit seinen Seegraswiesen.",
      teens: "Tagesausflug nach Formentera mit Velos (Ses Illetes), Schnorcheln in klarem Wasser, Sonnenuntergang bei Es Vedrà, Altstadt Dalt Vila.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte, eine davon mit einem ganzen Tag auf Formentera.",
        "<strong>Formentera:</strong> Mit dem Auto auf die Insel ist teuer und im Sommer geregelt; ohne Auto per Schnellfähre und Velo ist einfacher.",
        "<strong>Unterkunft:</strong> Im Norden oder Osten (z.B. Santa Eulària) ruhiger als in Sant Antoni."
      ],
      ausserdem: "Cala Comte, Cala Salada, Hippiemarkt Las Dalias, Salinen von Ses Salines.",
      bilder: [
        {titel: "Ses Illetes", suche: "Ses Illetes Formentera", stichwort: "illetes"},
        {titel: "Dalt Vila", suche: "Dalt Vila Ibiza", stichwort: "dalt vila"},
        {titel: "Es Vedrà", suche: "Es Vedra Ibiza", stichwort: "vedr"},
        {titel: "Cala Comte", suche: "Cala Comte Ibiza", stichwort: "comte"},
        {titel: "Formentera", suche: "Formentera beach", stichwort: "formentera"},
        {titel: "Cala Salada", suche: "Cala Salada Ibiza", stichwort: "salada"}
      ]
    },
    {
      nr: 5,
      name: "Cabo de Gata",
      land: "es",
      region: "Andalusien",
      datum: "2.–6. Juli",
      naechte: "4 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Dénia (Costa Blanca)", datum: "1.–2. Juli"},
      anreise: "Autofähre Ibiza–Dénia (ca. 2,5 Std.), Übernachtung an der Costa Blanca. Am nächsten Tag mit dem Auto über Alicante und Murcia nach San José (ca. 4,5 Std., ca. 420 km).",
      text: "Naturpark mit Vulkanküste, Halbwüste und den letzten wilden Stränden Andalusiens. Das klare Wasser über Felsen und Seegras ist ideal zum Schnorcheln.",
      teens: "Schnorcheln an der Cala de San Pedro oder bei Los Escullos, Kajak entlang der Küste, Strände Mónsul und Los Genoveses, Western-Filmkulisse Fort Bravo bei Tabernas.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte in San José oder Las Negras, gut zum Erholen nach den Inseln.",
        "<strong>Strände:</strong> Von ca. 21. Juni bis 22. September ist die Zufahrt zu Mónsul und Los Genoveses beschränkt; Shuttlebus ab San José, oder vor 10 Uhr mit dem Auto (Parkgebühr).",
        "<strong>Hitze:</strong> Wenig Schatten an den Stränden: Sonnenschirm, Wasser und Sonnenschutz mitnehmen."
      ],
      ausserdem: "Leuchtturm Cabo de Gata, Arrecife de las Sirenas, Rodalquilar (Goldminen), Salinen mit Flamingos, Wüste von Tabernas.",
      bilder: [
        {titel: "Playa de Mónsul", suche: "Playa de Monsul", stichwort: "monsul|mónsul"},
        {titel: "Los Genoveses", suche: "Playa de los Genoveses", stichwort: "genoveses"},
        {titel: "Arrecife de las Sirenas", suche: "Arrecife de las Sirenas Cabo de Gata", stichwort: "sirenas"},
        {titel: "San José", suche: "San Jose Almeria Cabo de Gata", stichwort: "san jos"},
        {titel: "Flamingos", suche: "Salinas de Cabo de Gata flamingos", stichwort: "salinas|flamingo"},
        {titel: "Wüste von Tabernas", suche: "Tabernas Desert", stichwort: "tabernas"}
      ]
    },
    {
      nr: 6,
      name: "Granada",
      land: "es",
      region: "Andalusien",
      datum: "6.–9. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto über Almería und Guadix nach Granada (ca. 2–2,5 Std., ca. 200 km). Das Auto im Hotel-Parkhaus lassen; die Altstadt ist zum Teil gesperrt.",
      text: "Die Alhambra, die Burg der maurischen Könige, über einer Stadt voller Gassen und Teestuben. Eine Stunde entfernt liegt die Wüste von Gorafe mit Badlands und über 240 Dolmen.",
      teens: "Alhambra mit den Nasridenpalästen, Sonnenuntergang am Mirador San Nicolás, Tagesausflug in die Wüste von Gorafe (Badlands, Dolmen, Höhlenwohnungen in Guadix).",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Alhambra und Albaicín, ein Tag Gorafe und Guadix.",
        "<strong>Alhambra:</strong> Tickets nur online, im Sommer oft drei Monate im Voraus ausverkauft; Kinder unter 12 gratis, brauchen aber ein Ticket.",
        "<strong>Gorafe:</strong> Ca. 1 Std. ab Granada; Pisten sind teils unbefestigt, früh am Morgen fahren, es wird über 35 °C heiss."
      ],
      ausserdem: "Albaicín, Kathedrale und Capilla Real, Sacromonte (Höhlenviertel), Guadix (Höhlenwohnungen).",
      bilder: [
        {titel: "Alhambra", suche: "Alhambra Granada", stichwort: "alhambra"},
        {titel: "Löwenhof", suche: "Court of the Lions Alhambra|Patio de los Leones", stichwort: "lions|leones"},
        {titel: "Albaicín", suche: "Albaicin Granada", stichwort: "albai"},
        {titel: "Wüste von Gorafe", suche: "Gorafe desert|Desierto de Gorafe", stichwort: "gorafe"},
        {titel: "Dolmen", suche: "Gorafe dolmen", stichwort: "gorafe|dolmen"},
        {titel: "Guadix", suche: "Guadix cave houses", stichwort: "guadix"}
      ]
    },
    {
      nr: 7,
      name: "Caminito del Rey (El Chorro)",
      land: "es",
      region: "Andalusien",
      datum: "9.–11. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über Loja und Antequera nach El Chorro (ca. 1,5–2 Std., ca. 140 km).",
      text: "Ein Steig hoch über der Schlucht Desfiladero de los Gaitanes, früher einer der gefährlichsten Wege der Welt, heute gut gesichert. Rund um El Chorro liegen Stauseen zum Baden.",
      teens: "Caminito del Rey (ca. 3–4 Std.), Baden und Paddeln im Stausee Conde de Guadalhorce, Felslandschaft El Torcal bei Antequera.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Den Caminito am Sa, 10.07.2027 planen (am Wochenende früh buchen); montags ist er geschlossen.",
        "<strong>Tickets:</strong> Nur online mit Zeitfenster; Mindestalter 8 Jahre, Ausweis mitnehmen. Früher Einlass wegen der Hitze.",
        "<strong>Hinweis:</strong> Der Weg ist ein Einweg mit Shuttlebus zurück zum Parkplatz; Helm wird gestellt."
      ],
      ausserdem: "El Torcal (Karstfelsen), Dolmen von Antequera (Unesco), Ronda mit der Puente Nuevo (ca. 1 Std.).",
      bilder: [
        {titel: "Caminito del Rey", suche: "Caminito del Rey", stichwort: "caminito"},
        {titel: "Schlucht", suche: "Desfiladero de los Gaitanes", stichwort: "gaitanes"},
        {titel: "El Chorro", suche: "El Chorro Malaga", stichwort: "chorro"},
        {titel: "El Torcal", suche: "El Torcal de Antequera", stichwort: "torcal"},
        {titel: "Stausee", suche: "Embalse del Conde de Guadalhorce|Guadalhorce reservoir", stichwort: "guadalhorce"},
        {titel: "Ronda", suche: "Ronda Puente Nuevo", stichwort: "ronda"}
      ]
    },
    {
      nr: 8,
      name: "Sevilla",
      ersatzsuche: "Seville",
      land: "es",
      region: "Andalusien",
      datum: "11.–14. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto über Antequera nach Sevilla (ca. 2 Std., ca. 150 km). Hotel mit Parkhaus wählen.",
      text: "Andalusiens Hauptstadt mit Kathedrale, Alcázar, der Plaza de España und Flamenco. Im Juli ist es sehr heiss, das Leben spielt sich am Morgen und am Abend ab.",
      teens: "Alcázar (Drehort von «Game of Thrones»), Plaza de España mit Booten, Setas (Metropol Parasol) mit Dachweg, Flamenco-Show am Abend, Freizeitpark Isla Mágica.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, ein Tag davon für Isla Mágica oder den Pool; mittags Pause im klimatisierten Hotel oder am Pool.",
        "<strong>Hitze:</strong> Im Juli oft 38–42 °C; viel trinken, Kopfbedeckung, Programm vor 12 und nach 18 Uhr.",
        "<strong>Tickets:</strong> Alcázar und Kathedrale online buchen, sonst lange Schlangen in der Sonne."
      ],
      ausserdem: "Barrio Santa Cruz, Torre del Oro, Triana mit Markt, Park María Luisa.",
      bilder: [
        {titel: "Plaza de España", suche: "Plaza de Espana Seville", stichwort: "plaza de espa"},
        {titel: "Alcázar", suche: "Alcazar of Seville", stichwort: "alc"},
        {titel: "Kathedrale", suche: "Seville Cathedral Giralda", stichwort: "giralda|cathedral"},
        {titel: "Setas", suche: "Metropol Parasol Seville", stichwort: "metropol"},
        {titel: "Triana", suche: "Triana Seville bridge", stichwort: "triana"},
        {titel: "Torre del Oro", suche: "Torre del Oro Seville", stichwort: "torre del oro"}
      ]
    },
    {
      nr: 9,
      name: "Lissabon",
      ersatzsuche: "Lisbon",
      land: "pt",
      region: "Portugal",
      datum: "14.–17. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto über Huelva und die Algarve-Autobahn nach Lissabon (ca. 4,5–5 Std., ca. 460 km). In Portugal ist es eine Stunde früher. Maut: die A22 ist frei, die A2 hat Zahlstellen; für elektronische Maut EasyToll an der Grenze.",
      text: "Hügelige Hauptstadt am Tejo mit Strassenbahnen, Aussichtspunkten, Fliesenfassaden und Pastéis de Nata. Nah am Meer und an Sintra.",
      teens: "Oceanário (eines der grössten Aquarien Europas), Strassenbahn 28, Belém mit Turm und Pastéis de Belém, Tagesausflug nach Sintra (Pena-Palast) und ans Cabo da Roca, Surfen in Carcavelos.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, einer davon für Sintra.",
        "<strong>Auto:</strong> In der Stadt stehen lassen; Metro, Tram und Taxi sind günstig. Parkhaus beim Hotel buchen.",
        "<strong>Wetter:</strong> Angenehmer als Andalusien, meist 25–30 °C, abends windig."
      ],
      ausserdem: "Alfama, Castelo de São Jorge, LX Factory, Praça do Comércio, Cascais.",
      bilder: [
        {titel: "Tram 28", suche: "Lisbon tram 28", stichwort: "tram"},
        {titel: "Belém-Turm", suche: "Belem Tower", stichwort: "bel"},
        {titel: "Alfama", suche: "Alfama Lisbon", stichwort: "alfama"},
        {titel: "Oceanário", suche: "Lisbon Oceanarium", stichwort: "ocean"},
        {titel: "Pena-Palast", suche: "Pena Palace Sintra", stichwort: "pena"},
        {titel: "Praça do Comércio", suche: "Praca do Comercio Lisbon", stichwort: "com"}
      ]
    },
    {
      nr: 10,
      name: "Porto",
      land: "pt",
      region: "Portugal",
      datum: "17.–19. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto auf der A1 nach Porto (ca. 3 Std., ca. 315 km, Maut an Zahlstellen).",
      text: "Steile Altstadt am Douro mit der Brücke Dom Luís I, bunten Häusern in Ribeira und den Portweinkellern in Gaia.",
      teens: "Über die Brücke Dom Luís I laufen, Bootsfahrt der sechs Brücken auf dem Douro, Livraria Lello, Seilbahn in Gaia, Francesinha probieren, Strand in Matosinhos.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte.",
        "<strong>Auto:</strong> Altstadt eng und steil, Parkhaus beim Hotel; zu Fuss und mit der Metro unterwegs.",
        "<strong>Livraria Lello:</strong> Eintritt nur mit Ticket, online buchen."
      ],
      ausserdem: "Torre dos Clérigos, Bahnhof São Bento (Azulejos), Jardins do Palácio de Cristal, Foz do Douro.",
      bilder: [
        {titel: "Ribeira", suche: "Ribeira Porto", stichwort: "ribeira"},
        {titel: "Dom-Luís-Brücke", suche: "Dom Luis I Bridge Porto", stichwort: "lu"},
        {titel: "São Bento", suche: "Sao Bento station azulejos", stichwort: "bento"},
        {titel: "Torre dos Clérigos", suche: "Clerigos Tower Porto", stichwort: "cl"},
        {titel: "Livraria Lello", suche: "Livraria Lello", stichwort: "lello"},
        {titel: "Douro", suche: "Douro river Porto boats rabelo", stichwort: "douro|rabelo"}
      ]
    },
    {
      nr: 11,
      name: "Playa de las Catedrales",
      land: "es",
      region: "Galicien",
      datum: "19.–21. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über Braga, Valença und Lugo nach Ribadeo (ca. 4–4,5 Std., ca. 400 km). In Spanien ist es wieder eine Stunde später.",
      text: "Bei Ebbe läuft man zwischen meterhohen Felsbögen und Höhlen am Strand. Die grüne Küste Galiciens ist ein Kontrast zum heissen Süden.",
      teens: "Bei Ebbe durch die «Kathedralen» laufen, Höhlen erkunden, Küstenwanderung, Surf-Schnupperstunde, Altstadt von Ribadeo.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in Ribadeo, damit eine Ebbe am Tag sicher passt.",
        "<strong>Reservation:</strong> Vom 1. Juli bis 30. September gratis online nötig, frühestens 30 Tage vorher, begrenzte Plätze.",
        "<strong>Gezeiten:</strong> Die Bögen sind nur bei Ebbe zugänglich; Gezeitentabelle prüfen und die Flut nicht verpassen.",
        "<strong>Wasser:</strong> Der Atlantik hat im Juli nur ca. 17–19 °C."
      ],
      ausserdem: "Ribadeo mit Ría, Mondoñedo, Tapia de Casariego, Strände der Mariña Lucense.",
      bilder: [
        {titel: "Felsbögen", suche: "Playa de las Catedrales|Praia As Catedrais", stichwort: "catedra"},
        {titel: "Bei Ebbe", suche: "Playa de las Catedrales low tide", stichwort: "catedra"},
        {titel: "Ribadeo", suche: "Ribadeo", stichwort: "ribadeo"},
        {titel: "Küste", suche: "Mariña Lucense coast|Galicia coast Lugo", stichwort: "galicia|mariña|lugo"},
        {titel: "Höhle", suche: "As Catedrais cave", stichwort: "catedra"},
        {titel: "Mondoñedo", suche: "Mondonedo cathedral", stichwort: "mondo"}
      ]
    },
    {
      nr: 12,
      name: "Bardenas Reales (Finale)",
      land: "es",
      region: "Navarra",
      datum: "22.–23. Juli",
      naechte: "1 Nacht, Rückfahrt bis 24. Juli",
      zwischenstopp: {text: "Zwischenübernachtung in Bilbao", datum: "21.–22. Juli"},
      anreise: "Mit dem Auto entlang der Nordküste nach Bilbao (ca. 4 Std., ca. 390 km), dort übernachten und das Guggenheim-Museum besuchen. Am nächsten Tag über Vitoria und Logroño nach Tudela (ca. 2,5 Std., ca. 230 km).",
      text: "Halbwüste mit Tafelbergen und bizarren Felsformationen wie dem Castildetierra, mitten in Navarra. Die Landschaft war Drehort für «Game of Thrones».",
      teens: "Rundfahrt mit dem eigenen Auto auf der 25-km-Piste um die Bardena Blanca, Castildetierra, Sonnenuntergang über den Tafelbergen, Sterne am Abend.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht in Tudela oder Arguedas; die Piste am Abend und am frühen Morgen fahren, mittags werden es über 40 °C.",
        "<strong>Regeln:</strong> Geöffnet ab 8 Uhr bis eine Stunde vor Sonnenuntergang, Höchstgeschwindigkeit 40 km/h, nur auf der markierten Piste, ein Teil ist militärisches Übungsgebiet.",
        "<strong>Rückfahrt:</strong> Über Saragossa, Lleida und Perpignan nach Carcassonne (ca. 6,5–7 Std.), dort übernachten, am nächsten Tag über Montpellier, Lyon und Genf nach Brig-Glis (ca. 7,5–8 Std.)."
      ],
      ausserdem: "Guggenheim Bilbao, Altstadt von Tudela, Olite (Königspalast), Cité von Carcassonne (Burg, auf der Rückfahrt).",
      bilder: [
        {titel: "Castildetierra", suche: "Castildetierra Bardenas Reales", stichwort: "castildetierra"},
        {titel: "Bardena Blanca", suche: "Bardenas Reales", stichwort: "bardena"},
        {titel: "Tafelberge", suche: "Bardenas Reales landscape", stichwort: "bardena"},
        {titel: "Guggenheim Bilbao", suche: "Guggenheim Museum Bilbao", stichwort: "guggenheim"},
        {titel: "Olite", suche: "Olite royal palace", stichwort: "olite"},
        {titel: "Carcassonne", suche: "Cite de Carcassonne", stichwort: "carcassonne"}
      ]
    }
  ],
  abschluss: "Nach einer Zwischenübernachtung in Carcassonne Rückfahrt über Montpellier, Lyon und Genf nach Brig-Glis am Sa, 24.07.2027 (ca. 7,5–8 Std.).",
  budgetIntro: "Mittelklasse inklusive Benzin, Maut, Fähren, Unterkunft, Verpflegung und Aktivitäten, ohne Abnutzung des eigenen Autos. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 36,
    total: "19’300",
    spanne: "14’300–25’100",
    proTag: "ca. 540 CHF pro Tag, ca. 4’800 pro Person",
    posten: [
      ["Auto: Benzin, Maut, Vignetten (ca. 5’500 km)", "800–1’200", "1’000", "ca. 400 l Benzin, Maut vor allem in Frankreich und Portugal, Crit’Air-Vignette, Registrierung Umweltzone Barcelona"],
      ["Autofähren (Barcelona–Palma–Ibiza–Dénia)", "500–1’000", "750", "Auto und 4 Personen mit Sitzplätzen, dazu Schnellfähre nach Formentera; im Juli früh buchen"],
      ["Parkieren und lokale Transfers", "400–700", "550", "Hotel-Parkhäuser in Städten, Metro, Taxis, Shuttlebus Cabo de Gata"],
      ["Unterkunft (Familienzimmer, Apartment oder 2 Zimmer)", "5’700–10’100", "7’750", "ca. 160–280 CHF pro Nacht; Inseln und Costa Brava im Juli am teuersten"],
      ["Verpflegung (Tapas, Restaurants, Einkauf)", "3’600–6’150", "4’750", "ca. 100–170 CHF pro Tag für 4 Personen"],
      ["Aktivitäten und Eintritte", "1’600–2’900", "2’200", "Alhambra, Sagrada Família, Caminito del Rey, Bootstouren, Schnorcheln, Oceanário, Museen"],
      ["Versicherung, Pannenhilfe, Reiseapotheke", "300–700", "500", "Pannenhilfe-Versicherung fürs Auto, Annullationsschutz, Reiseapotheke"],
      ["Reserve (ca. 10 %)", "1’400–2’350", "1’800", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["Zwischenübernachtung Sète (1)", "250–400"],
      ["1. Costa Brava (3)", "1’000–1’700"],
      ["2. Barcelona (3)", "1’100–1’850"],
      ["3. Mallorca (4)", "1’400–2’400"],
      ["4. Ibiza und Formentera (2)", "750–1’250"],
      ["Zwischenübernachtung Dénia (1)", "250–400"],
      ["5. Cabo de Gata (4)", "1’100–1’900"],
      ["6. Granada (3)", "1’050–1’700"],
      ["7. Caminito del Rey (2)", "550–950"],
      ["8. Sevilla (3)", "950–1’550"],
      ["9. Lissabon (3)", "1’000–1’700"],
      ["10. Porto (2)", "650–1’050"],
      ["11. Playa de las Catedrales (2)", "550–900"],
      ["Zwischenübernachtung Bilbao (1)", "300–450"],
      ["12. Bardenas Reales (1)", "250–400"],
      ["Zwischenübernachtung Carcassonne (1)", "250–400"]
    ],
    hinweise: [
      "Preise für die Kids: Viele Sehenswürdigkeiten sind für Kinder bis 11 oder 12 Jahre günstiger oder gratis; die Tochter (14) zahlt oft schon den Jugend- oder Erwachsenenpreis.",
      "Sparhebel: Apartments mit Küche, Menú del día am Mittag, Picknick am Strand, Fähren früh buchen.",
      "Nicht eingerechnet ist die Abnutzung des eigenen Autos (Service, Reifen). Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich)."
    ]
  },
  tippsIntro: "Einreise, Auto, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    ["Einreise", "Frankreich, Spanien und Portugal sind im Schengen-Raum: Identitätskarte oder Pass reichen, für Kids eigene Ausweise mitnehmen. Vor Abreise beim EDA prüfen."],
    ["Auto und Papiere", "Führerausweis, Fahrzeugausweis, CH-Kleber am Heck, Warnwesten für alle, Pannendreieck. Crit’Air-Vignette für Frankreich vorab online bestellen (nur auf der offiziellen Seite). In Barcelona ausländische Autos vorab online für die Umweltzone (ZBE) registrieren."],
    ["Maut", "Frankreich: Mautstellen auf den Autobahnen, Kreditkarte geht. Spanien: die meisten Autobahnen im Nordosten sind mautfrei, einzelne Strecken (z.B. bei Bilbao) kosten. Portugal: teils elektronische Maut ohne Zahlstellen, dafür EasyToll an der Grenze (Kreditkarte mit Kennzeichen verknüpfen) oder Via Verde."],
    ["Fähren mit dem Auto", "Check-in 60–90 Min. vor Abfahrt, Auto während der Fahrt nicht zugänglich: Badesachen, Snacks und Medikamente ins Handgepäck. Auf den Inseln eng und im Sommer voll; Parkplätze an Stränden früh."],
    ["Währung und Zahlung", "Euro. Karten werden fast überall akzeptiert, etwas Bargeld für kleine Lokale und Märkte."],
    ["Wetter im Juni und Juli", "Andalusien im Landesinneren (Sevilla, Granada, Bardenas) oft 35–42 °C, an der Küste 28–32 °C. Lissabon und Porto angenehmer, Galicien und Bilbao 20–25 °C mit Regenschauern. Mittelmeer ca. 23–26 °C, Atlantik ca. 17–20 °C."],
    ["Zeitzonen", "Frankreich und Spanien wie die Schweiz, Portugal eine Stunde früher."],
    ["Verkehr", "Im Juli sind die französischen Autobahnen an Samstagen sehr voll, vor allem Richtung Süden. Die Rückfahrt am Sa, 24.07.2027 geht Richtung Norden; trotzdem früh starten und die Verkehrsprognose von Bison Futé prüfen. Klimaanlage prüfen lassen, Wasser im Auto, nie Kinder oder Tiere im parkierten Auto lassen."],
    ["Gesundheit", "Europäische Krankenversicherungskarte (Rückseite der Versichertenkarte) mitnehmen. Sonnenschutz, viel trinken; Hitzschlag ist im Juli die grösste Gefahr. Leitungswasser ist trinkbar, schmeckt aber teils nach Chlor."],
    ["Sicherheit", "Taschendiebe in Barcelona, Sevilla und Lissabon. Aufbrüche an Strandparkplätzen und Aussichtspunkten: nichts sichtbar im Auto lassen."],
    ["Kultur und Verhalten", "In Spanien wird spät gegessen (Mittag ab 14 Uhr, Abend ab 21 Uhr); viele Geschäfte schliessen über Mittag. Trinkgeld ca. 5–10 %."],
    ["Notfall", "Notruf 112 in allen drei Ländern. Pannenhilfe-Nummer der Versicherung notieren; EDA-Reiseplattform nutzen."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt, z.B. Schnorcheln, Freizeitpark oder Tapas-Abend."]
  ]
};
