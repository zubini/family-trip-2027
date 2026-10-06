// Alternative zu Spanien / Portugal: gleiche Stationen in umgekehrter Reihenfolge (zuerst Andalusien, zum Schluss die Inseln).
// Erscheint nicht im Menü; auf der Spanien-Seite lässt sich oben zwischen den Varianten umschalten (alternativeZu, variante).
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.spanien2 = {
  titel: "Mit dem Auto durch Spanien und Portugal",
  menu: "Spanien / Portugal (umgekehrt)",
  alternativeZu: "spanien",
  variante: "Andalusien zuerst",
  untertitel: "Fünf Wochen Roadtrip ab Brig-Glis in umgekehrter Reihenfolge: Start in Valencia, dann Andalusien, Portugal und der Norden, zum Schluss Benidorm, die Inseln und Barcelona.",
  zeitraum: "Fr, 18.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Playa de las Catedrales|Bardenas Reales Castildetierra|Caminito del Rey",
    stichwort: "catedrales|castildetierra|caminito",
    alt: "Landschaft in Spanien"
  },
  planIntro: "Abfahrt in Brig-Glis am Fr, 18.06.2027, Rückkehr am Sa, 24.07.2027. Zuerst nach Andalusien, solange es dort im Schnitt noch etwas weniger heiss ist, zum Schluss Strand und Inseln, wenn das Meer am wärmsten ist. Alle Strecken mit dem eigenen Elektroauto, zu den Inseln mit der Autofähre. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18. Juni",
    name: "Abfahrt in Brig-Glis",
    info: "Mit dem eigenen Auto über Genf und Lyon ans Mittelmeer"
  },
  plan: [
    {
      datum: "18.–19. Juni",
      name: "Zwischenübernachtung Sète",
      naechte: 1,
      info: "Brig-Glis – Genf – Lyon – Montpellier – Sète (ca. 7–7,5 Std., ca. 630 km)"
    },
    {
      datum: "19.–21. Juni",
      name: "1. Valencia",
      naechte: 2,
      info: "Auto über Perpignan, Barcelona und Castelló (ca. 6–6,5 Std., ca. 670 km)"
    },
    {
      datum: "21.–24. Juni",
      name: "2. Cabo de Gata",
      naechte: 3,
      info: "Auto über Alicante und Murcia (ca. 4,5–5 Std., ca. 450 km)"
    },
    {datum: "24.–27. Juni", name: "3. Granada", naechte: 3, info: "Auto (ca. 2–2,5 Std.)"},
    {datum: "27.–29. Juni", name: "4. Caminito del Rey (El Chorro)", naechte: 2, info: "Auto (ca. 1,5–2 Std.)"},
    {datum: "29. Juni–1. Juli", name: "5. Sevilla", naechte: 2, info: "Auto (ca. 2 Std.)"},
    {datum: "1.–3. Juli", name: "6. Lissabon", naechte: 2, info: "Auto (ca. 4,5–5 Std.), Uhr −1 Std."},
    {datum: "3.–5. Juli", name: "7. Porto", naechte: 2, info: "Auto (ca. 3 Std.)"},
    {datum: "5.–7. Juli", name: "8. Playa de las Catedrales", naechte: 2, info: "Auto (ca. 4–4,5 Std.), Uhr +1 Std."},
    {
      datum: "7.–8. Juli",
      name: "Zwischenübernachtung Bilbao",
      naechte: 1,
      info: "Auto entlang der Nordküste (ca. 4 Std.)"
    },
    {datum: "8.–9. Juli", name: "9. Bardenas Reales", naechte: 1, info: "Auto (ca. 2,5 Std.)"},
    {
      datum: "9.–12. Juli",
      name: "10. Benidorm",
      naechte: 3,
      info: "Auto über Saragossa, Teruel und Valencia (ca. 5–5,5 Std., ca. 500 km)"
    },
    {
      datum: "12.–16. Juli",
      name: "11. Ibiza und Formentera",
      naechte: 4,
      info: "Auto nach Dénia (ca. 40–45 Min.), Autofähre Dénia–Ibiza (ca. 2,5 Std.)"
    },
    {datum: "16.–21. Juli", name: "12. Mallorca", naechte: 5, info: "Autofähre Ibiza–Palma (ca. 2,5–4 Std.)"},
    {datum: "21.–23. Juli", name: "13. Barcelona", naechte: 2, info: "Autofähre Palma–Barcelona (ca. 6,5–7,5 Std.)"},
    {
      datum: "23.–24. Juli",
      name: "Zwischenübernachtung Avignon",
      naechte: 1,
      info: "Auto über Girona, Perpignan und Montpellier (ca. 4–4,5 Std., ca. 430 km)"
    }
  ],
  rueckflug: {
    datum: "24. Juli",
    name: "Ankunft in Brig-Glis",
    info: "Avignon – Lyon – Genf – Brig-Glis (ca. 5–5,5 Std., ca. 490 km)"
  },
  planHinweise: [
    [
      "Gesamt",
      "36 Nächte, 13 Stationen und 3 Zwischenübernachtungen (Sète, Bilbao, Avignon). Keine Flüge: alles mit dem eigenen Auto, zu den Inseln mit drei Autofähren. Insgesamt ca. 5’850 km Autofahrt und ca. 13 Std. auf Fähren, zusammen ca. 71 Std. reine Reisezeit (ca. 58 Std. Auto und 13 Std. Fähre); mit Pausen, Check-in an den Häfen und Sommerstau mit dem Elektroauto realistisch ca. 85–89 Std. von Tür zu Tür (inklusive ca. 10–12 Ladestopps à 20–30 Min.) Die längsten Reisetage: Brig-Glis–Sète (ca. 7–7,5 Std. plus 1–2 Ladestopps), Fähre Palma–Barcelona (ca. 6,5–7,5 Std.), Sète–Valencia (ca. 6–6,5 Std. plus 2 Ladestopps), Bardenas–Benidorm (ca. 5–5,5 Std.), Avignon–Brig-Glis (ca. 5–5,5 Std.), Valencia–Cabo de Gata (ca. 4,5–5 Std.) und Sevilla–Lissabon (ca. 4,5–5 Std.). Nach den zwei Fahrtagen zum Start zwei Nächte Pause in Valencia."
    ],
    [
      "Vorab buchen",
      "Autofähren Dénia–Ibiza, Ibiza–Palma und Palma–Barcelona (Mitte Juli Hochsaison, früh buchen, Check-in 60–90 Min. vor Abfahrt), Unterkünfte auf den Inseln und in Benidorm, Alhambra (im Sommer oft drei Monate im Voraus ausverkauft), Caminito del Rey, Oceanogràfic in Valencia, Sagrada Família, Terra Mítica oder Aqualandia, Reservation für die Playa de las Catedrales (gratis, frühestens 30 Tage vorher)."
    ],
    [
      "Auto",
      "Elektroauto: Ladekarte oder App mit Roaming für Frankreich, Spanien und Portugal (z.B. vom eigenen Stromanbieter), Schnelllader an den Autobahnen (u.a. Ionity, Tesla Supercharger für alle Marken, Fastned, Electra, Zunder, Iberdrola) und Unterkünfte mit Lademöglichkeit buchen, vor allem auf den Inseln und in den Altstädten. Ladestopps mit Pausen verbinden; bei Hitze und Klimaanlage steigt der Verbrauch. Crit’Air-Vignette (grün, Klasse 0) für Frankreich vorab bestellen, Auto für die Umweltzone von Barcelona online registrieren, in Portugal elektronische Maut über EasyToll an der Grenze oder Via Verde. CH-Kleber, Warnwesten für alle und Pannenhilfe-Versicherung mitnehmen. In Städten Parkhaus beim Hotel buchen, keine Wertsachen sichtbar im Auto lassen."
    ],
    [
      "Optional",
      "Bioparc in Valencia, PortAventura (bei Tarragona, ca. 1,5 Std. ab Barcelona), Ronda (bei El Chorro), Algarve (zwischen Sevilla und Lissabon), Sintra (Abstecher auf dem Weg nach Porto), San Sebastián (statt Bilbao), Carcassonne (statt Avignon)."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege: mit dem eigenen Auto ab Brig-Glis zuerst nach Süden, zum Schluss von Dénia über die Inseln nach Barcelona. Darunter die Detailkarte.",
    breit: true,
    legende: ["car", "ferry"],
    karten: [
      {datei: "karten/spanien2.svg"},
      {
        titel: "Spanien und Portugal im Detail, umgekehrte Reihenfolge (Stationen 1 bis 13)",
        datei: "karten/spanien2-detail.svg"
      }
    ]
  },
  abwechslungIntro: "Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen. In Andalusien Programm auf Morgen und Abend legen, mittags ist es sehr heiss.",
  abwechslung: [
    [
      "Action und Freizeitparks",
      "Oceanogràfic in Valencia, Terra Mítica und Aqualandia in Benidorm, Caminito del Rey, Schnorcheln und Kajak auf Mallorca und Ibiza, Coasteering auf Mallorca, Isla Mágica in Sevilla; optional PortAventura."
    ],
    [
      "Kultur und Geschichte",
      "Sagrada Família und Park Güell in Barcelona, Alhambra in Granada, Alcázar und Kathedrale in Sevilla, Belém in Lissabon, Altstadt von Porto, Papstpalast in Avignon."
    ],
    [
      "Natur und Landschaft",
      "Halbwüste Bardenas Reales, Badlands und Dolmen von Gorafe, Vulkanküste am Cabo de Gata, Schlucht des Caminito del Rey, Felsbögen der Playa de las Catedrales."
    ],
    [
      "Strand und Schnorcheln",
      "Cabo de Gata, Benidorm, Ibiza und Formentera, Mallorca; im Mittelmeer ist das Wasser Ende Juni ca. 23 °C, Ende Juli ca. 25–26 °C warm, am Atlantik deutlich kühler."
    ],
    [
      "Mitmachen",
      "Tapas- und Paella-Kurs, Velotour in Sevilla oder Lissabon, Bootstour auf dem Douro in Porto, Surf-Schnupperstunde in Galicien."
    ]
  ],
  stationenIntro: "Dreizehn Stationen: Start in Valencia, dann Andalusien, Portugal und der Norden, zum Schluss Benidorm, die Balearen und Barcelona. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Valencia (Start)",
      land: "es",
      region: "Valencia",
      datum: "19.–21. Juni",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Sète", datum: "18.–19. Juni"},
      anreise: "Mit dem Auto ab Brig-Glis über Genf, Lyon und Montpellier nach Sète (ca. 7–7,5 Std., ca. 630 km), dort am Mittelmeer übernachten. Am nächsten Tag über Perpignan, Barcelona und Castelló nach Valencia (ca. 6–6,5 Std., ca. 670 km), Uhr ohne Zeitverschiebung.",
      text: "Drittgrösste Stadt Spaniens mit der futuristischen Stadt der Künste und Wissenschaften, einem langen Stadtstrand und dem grünen Turia-Park im alten Flussbett. Hier kommt die Paella her.",
      teens: "Oceanogràfic (das grösste Aquarium Europas, mit Haien und Belugas), Wissenschaftsmuseum, Velotour durch den Turia-Park, Baden an der Malvarrosa, Paella in der Albufera.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Oceanogràfic und Stadt der Künste, ein halber Tag Altstadt oder Strand. Nach den zwei Fahrtagen zum Ankommen.",
        "<strong>Tickets:</strong> Oceanogràfic online buchen, Kombiticket mit Museum und Hemisfèric möglich.",
        "<strong>Auto:</strong> Hotel mit Parkhaus wählen und in der Stadt Metro, Bus oder Velo nutzen; Regeln der Umweltzone vorab prüfen."
      ],
      ausserdem: "Mercado Central, Kathedrale mit dem Miguelete-Turm, Bioparc, Naturpark Albufera mit Bootsfahrt.",
      bilder: [
        {
          titel: "Stadt der Künste und Wissenschaften",
          suche: "City of Arts and Sciences Valencia|Ciudad de las Artes y las Ciencias",
          stichwort: "arts|ciencias|ciències"
        },
        {titel: "Oceanogràfic", suche: "Oceanografic Valencia", stichwort: "oceanogr"},
        {titel: "Turia-Park", suche: "Jardin del Turia Valencia|Turia gardens", stichwort: "turia"},
        {titel: "Malvarrosa", suche: "Malvarrosa beach Valencia", stichwort: "malvarrosa"},
        {
          titel: "Mercado Central",
          suche: "Mercado Central Valencia|Mercat Central Valencia",
          stichwort: "mercado central|mercat central"
        },
        {titel: "Albufera", suche: "Albufera Valencia", stichwort: "albufera"}
      ]
    },
    {
      nr: 2,
      name: "Cabo de Gata",
      land: "es",
      region: "Andalusien",
      datum: "21.–24. Juni",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto von Valencia über Alicante und Murcia nach San José (ca. 4,5–5 Std., ca. 450 km).",
      text: "Naturpark mit Vulkanküste, Halbwüste und den letzten wilden Stränden Andalusiens. Das klare Wasser über Felsen und Seegras ist ideal zum Schnorcheln.",
      teens: "Schnorcheln an der Cala de San Pedro oder bei Los Escullos, Kajak entlang der Küste, Strände Mónsul und Los Genoveses, Western-Filmkulisse Fort Bravo bei Tabernas.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte in San José oder Las Negras: Strände, Schnorcheln und ein ruhiger Tag.",
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
      nr: 3,
      name: "Granada",
      land: "es",
      region: "Andalusien",
      datum: "24.–27. Juni",
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
      nr: 4,
      name: "Caminito del Rey (El Chorro)",
      land: "es",
      region: "Andalusien",
      datum: "27.–29. Juni",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über Loja und Antequera nach El Chorro (ca. 1,5–2 Std., ca. 140 km).",
      text: "Ein Steig hoch über der Schlucht Desfiladero de los Gaitanes, früher einer der gefährlichsten Wege der Welt, heute gut gesichert. Rund um El Chorro liegen Stauseen zum Baden.",
      teens: "Caminito del Rey (ca. 3–4 Std.), Baden und Paddeln im Stausee Conde de Guadalhorce, Felslandschaft El Torcal bei Antequera.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Der 28. Juni ist ein Montag, dann ist der Caminito geschlossen: am So, 27.06.2027 nachmittags (je nach Zeitfenster) oder am Di, 29.06.2027 früh vor der Fahrt nach Sevilla gehen.",
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
      nr: 5,
      name: "Sevilla",
      ersatzsuche: "Seville",
      land: "es",
      region: "Andalusien",
      datum: "29. Juni–1. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über Antequera nach Sevilla (ca. 2 Std., ca. 150 km). Hotel mit Parkhaus wählen.",
      text: "Andalusiens Hauptstadt mit Kathedrale, Alcázar, der Plaza de España und Flamenco. Im Juli ist es sehr heiss, das Leben spielt sich am Morgen und am Abend ab.",
      teens: "Alcázar (Drehort von «Game of Thrones»), Plaza de España mit Booten, Setas (Metropol Parasol) mit Dachweg, Flamenco-Show am Abend, Freizeitpark Isla Mágica.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte; mittags Pause im klimatisierten Hotel oder am Pool.",
        "<strong>Hitze:</strong> Ende Juni im Schnitt etwas weniger heiss als Mitte Juli, aber oft 35–40 °C; viel trinken, Kopfbedeckung, Programm vor 12 und nach 18 Uhr.",
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
      nr: 6,
      name: "Lissabon",
      ersatzsuche: "Lisbon",
      land: "pt",
      region: "Portugal",
      datum: "1.–3. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über Huelva und die Algarve-Autobahn nach Lissabon (ca. 4,5–5 Std., ca. 460 km). In Portugal ist es eine Stunde früher. Maut: die A22 ist frei, die A2 hat Zahlstellen; für elektronische Maut EasyToll an der Grenze.",
      text: "Hügelige Hauptstadt am Tejo mit Strassenbahnen, Aussichtspunkten, Fliesenfassaden und Pastéis de Nata. Nah am Meer und an Sintra.",
      teens: "Oceanário (eines der grössten Aquarien Europas), Strassenbahn 28, Belém mit Turm und Pastéis de Belém, Tagesausflug nach Sintra (Pena-Palast) und ans Cabo da Roca, Surfen in Carcavelos.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt, Belém und Oceanário. Sintra als Abstecher auf der Weiterfahrt nach Porto (ca. 30–45 Min. Umweg).",
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
      nr: 7,
      name: "Porto",
      land: "pt",
      region: "Portugal",
      datum: "3.–5. Juli",
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
      nr: 8,
      name: "Playa de las Catedrales",
      land: "es",
      region: "Galicien",
      datum: "5.–7. Juli",
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
      nr: 9,
      name: "Bardenas Reales (Finale)",
      land: "es",
      region: "Navarra",
      datum: "8.–9. Juli",
      naechte: "1 Nacht",
      zwischenstopp: {text: "Zwischenübernachtung in Bilbao", datum: "7.–8. Juli"},
      anreise: "Mit dem Auto entlang der Nordküste nach Bilbao (ca. 4 Std., ca. 390 km), dort übernachten und das Guggenheim-Museum besuchen. Am nächsten Tag über Vitoria und Logroño nach Tudela (ca. 2,5 Std., ca. 230 km).",
      text: "Halbwüste mit Tafelbergen und bizarren Felsformationen wie dem Castildetierra, mitten in Navarra. Die Landschaft war Drehort für «Game of Thrones».",
      teens: "Rundfahrt mit dem eigenen Auto auf der 25-km-Piste um die Bardena Blanca, Castildetierra, Sonnenuntergang über den Tafelbergen, Sterne am Abend.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht in Tudela oder Arguedas; die Piste am Abend und am frühen Morgen fahren, mittags werden es über 40 °C.",
        "<strong>Regeln:</strong> Geöffnet ab 8 Uhr bis eine Stunde vor Sonnenuntergang, Höchstgeschwindigkeit 40 km/h, nur auf der markierten Piste, ein Teil ist militärisches Übungsgebiet.",
        "<strong>Weiterfahrt:</strong> Über Saragossa, Teruel und Valencia nach Benidorm (ca. 5–5,5 Std., ca. 500 km)."
      ],
      ausserdem: "Guggenheim Bilbao, Altstadt von Tudela, Olite (Königspalast).",
      bilder: [
        {titel: "Castildetierra", suche: "Castildetierra Bardenas Reales", stichwort: "castildetierra"},
        {titel: "Bardena Blanca", suche: "Bardenas Reales", stichwort: "bardena"},
        {titel: "Tafelberge", suche: "Bardenas Reales landscape", stichwort: "bardena"},
        {titel: "Guggenheim Bilbao", suche: "Guggenheim Museum Bilbao", stichwort: "guggenheim"},
        {titel: "Olite", suche: "Olite royal palace", stichwort: "olite"},
        {titel: "Tudela", suche: "Tudela Navarra cathedral|Tudela Navarra", stichwort: "tudela"}
      ]
    },
    {
      nr: 10,
      name: "Benidorm",
      land: "es",
      region: "Costa Blanca",
      datum: "9.–12. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto von den Bardenas über Saragossa, Teruel und Valencia nach Benidorm (ca. 5–5,5 Std., ca. 500 km).",
      text: "Hochhausstadt an der Costa Blanca mit zwei langen Sandstränden, Freizeit- und Wasserparks. Nach dem Norden wieder Mittelmeer, Action und Strand; im Hinterland liegen das Bergdorf Guadalest und die Wasserfälle von Algar.",
      teens: "Terra Mítica (Achterbahnen), Aqualandia (einer der grössten Wasserparks Europas), Boot zur Isla de Benidorm mit Schnorcheln, Aussicht vom Balcón del Mediterráneo, Baden in den Wasserfällen von Algar.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Freizeitpark, ein Tag Strand und Isla de Benidorm, ein Tag Guadalest und Algar.",
        "<strong>Parks:</strong> Terra Mítica und Aqualandia gehören zusammen, Kombitickets gibt es online; Saison ab Mitte Mai, Öffnungstage vorab prüfen.",
        "<strong>Isla de Benidorm:</strong> Boote ab dem Hafen, ca. 15 Min.; die Insel gehört zum Naturpark Serra Gelada.",
        "<strong>Unterkunft:</strong> Apartment oder Hotel mit Pool und Parkplatz, z.B. an der Playa de Poniente (ruhiger als Levante)."
      ],
      ausserdem: "Altstadt am Balcón del Mediterráneo, Altea (weisses Dorf), Mundomar, Valencia mit Oceanogràfic (ca. 1,5 Std.).",
      bilder: [
        {titel: "Skyline und Strand", suche: "Benidorm skyline|Benidorm beach", stichwort: "benidorm"},
        {titel: "Playa de Levante", suche: "Playa de Levante Benidorm", stichwort: "levante"},
        {titel: "Balcón del Mediterráneo", suche: "Balcon del Mediterraneo Benidorm", stichwort: "balc"},
        {titel: "Terra Mítica", suche: "Terra Mitica Benidorm", stichwort: "terra m"},
        {titel: "Guadalest", suche: "Guadalest castle|Guadalest", stichwort: "guadalest"},
        {titel: "Wasserfälle von Algar", suche: "Fonts de l'Algar|Fuentes del Algar", stichwort: "algar"}
      ]
    },
    {
      nr: 11,
      name: "Ibiza und Formentera",
      land: "es",
      region: "Balearen",
      datum: "12.–16. Juli",
      naechte: "4 Nächte",
      anreise: "Mit dem Auto nach Dénia (ca. 40–45 Min., ca. 50 km), dann Autofähre Dénia–Ibiza (ca. 2,5 Std.); Check-in mit dem Auto ca. 60–90 Min. vor Abfahrt. Nach Formentera als Tagesausflug ohne Auto mit der Schnellfähre ab Ibiza-Stadt (ca. 30 Min.).",
      text: "Ibiza abseits der Partys: ruhige Buchten im Norden, die Altstadt Dalt Vila und das türkisfarbene Wasser von Formentera mit seinen Seegraswiesen.",
      teens: "Tagesausflug nach Formentera mit Velos (Ses Illetes), Schnorcheln in klarem Wasser, Sonnenuntergang bei Es Vedrà, Altstadt Dalt Vila.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein ganzer Tag auf Formentera, zwei Tage Buchten und Schnorcheln auf Ibiza (z.B. Cala Comte), ein Tag Dalt Vila und Sonnenuntergang bei Es Vedrà.",
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
      nr: 12,
      name: "Mallorca",
      land: "es",
      region: "Balearen",
      datum: "16.–21. Juli",
      naechte: "5 Nächte",
      anreise: "Autofähre Ibiza–Palma (ca. 2,5–4 Std., je nach Schiff); Check-in mit dem Auto ca. 60–90 Min. vor Abfahrt.",
      text: "Die grösste Baleareninsel mit Buchten, dem Tramuntana-Gebirge und der Altstadt von Palma. Mit dem eigenen Auto erreicht ihr auch die ruhigeren Ecken.",
      teens: "Coasteering oder Kajak an der Steilküste, Drachenhöhlen bei Porto Cristo, Baden in der Cala Mondragó oder Caló des Moro, Fahrt durch die Serra de Tramuntana nach Sa Calobra.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte, z.B. im Osten oder Südosten. Ein Tag Palma, ein Tag Tramuntana, drei Strand- und Schnorcheltage (z.B. Caló des Moro, Bootsausflug nach Cabrera). Mitte Juli ist Hochsaison: Strände früh, Unterkunft früh buchen.",
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
      nr: 13,
      name: "Barcelona (Schluss)",
      land: "es",
      region: "Katalonien",
      datum: "21.–23. Juli",
      naechte: "2 Nächte",
      anreise: "Autofähre Palma–Barcelona mit Baleària, Trasmed oder GNV (ca. 6,5–7,5 Std.), als Tagesfähre oder Nachtfähre mit Kabine. Das Auto vorab für die Umweltzone registrieren und im Hotel-Parkhaus abstellen; in der Stadt Metro und zu Fuss.",
      text: "Gaudís Bauten, Altstadtgassen, Strand und eine lebendige Grossstadt. In der Nacht vom 23. auf den 24. Juni feiert die Stadt Sant Joan mit Feuerwerk und Feuern am Strand.",
      teens: "Sagrada Família (Turm), Park Güell, Camp Nou bzw. Barça-Museum, Seilbahn auf den Montjuïc, Strand Barceloneta, Markt La Boqueria.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Sagrada Família und Park Güell, ein Tag Altstadt, Hafen und Strand. Danach über Girona, Perpignan und Montpellier nach Avignon (ca. 4–4,5 Std.), am nächsten Tag nach Brig-Glis (ca. 5–5,5 Std.).",
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
    }
  ],
  abschluss: "Nach einer Zwischenübernachtung in Avignon Rückfahrt über Lyon und Genf nach Brig-Glis am Sa, 24.07.2027 (ca. 5–5,5 Std.).",
  budgetIntro: "Mittelklasse inklusive Strom fürs Elektroauto, Maut, Fähren, Unterkunft, Verpflegung und Aktivitäten, ohne Abnutzung des eigenen Autos. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 36,
    total: "20’000",
    spanne: "14’750–25’850",
    proTag: "ca. 560 CHF pro Tag, ca. 5’000 pro Person",
    posten: [
      [
        "Auto: Strom, Maut, Vignetten (ca. 5’900 km)",
        "700–1’150",
        "900",
        "ca. 1’150 kWh, davon der grösste Teil an Schnellladern (ca. 0,45–0,70 € pro kWh), Rest im Hotel; Maut vor allem in Frankreich und Portugal, Crit’Air-Vignette, Registrierung Umweltzone Barcelona"
      ],
      [
        "Autofähren (Dénia–Ibiza–Palma–Barcelona)",
        "550–1’100",
        "800",
        "Auto und 4 Personen mit Sitzplätzen oder Kabine, dazu Schnellfähre nach Formentera; Mitte Juli Hochsaison"
      ],
      [
        "Parkieren und lokale Transfers",
        "400–700",
        "550",
        "Hotel-Parkhäuser in Städten, Metro, Taxis, Shuttlebus Cabo de Gata"
      ],
      [
        "Unterkunft (Familienzimmer, Apartment oder 2 Zimmer)",
        "5’900–10’400",
        "8’000",
        "ca. 160–290 CHF pro Nacht; die Inseln Mitte Juli am teuersten"
      ],
      ["Verpflegung (Tapas, Restaurants, Einkauf)", "3’600–6’150", "4’750", "ca. 100–170 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte",
        "1’850–3’250",
        "2’550",
        "Oceanogràfic, Terra Mítica oder Aqualandia, Alhambra, Sagrada Família, Caminito del Rey, Bootstouren, Schnorcheln, Oceanário, Museen"
      ],
      [
        "Versicherung, Pannenhilfe, Reiseapotheke",
        "300–700",
        "500",
        "Pannenhilfe-Versicherung fürs Auto, Annullationsschutz, Reiseapotheke"
      ],
      ["Reserve (ca. 10 %)", "1’450–2’400", "1’950", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["Zwischenübernachtung Sète (1)", "250–400"],
      ["1. Valencia (2)", "650–1’050"],
      ["2. Cabo de Gata (3)", "850–1’450"],
      ["3. Granada (3)", "1’050–1’700"],
      ["4. Caminito del Rey (2)", "550–950"],
      ["5. Sevilla (2)", "650–1’050"],
      ["6. Lissabon (2)", "700–1’150"],
      ["7. Porto (2)", "650–1’050"],
      ["8. Playa de las Catedrales (2)", "550–900"],
      ["Zwischenübernachtung Bilbao (1)", "300–450"],
      ["9. Bardenas Reales (1)", "250–400"],
      ["10. Benidorm (3)", "900–1’500"],
      ["11. Ibiza und Formentera (4)", "1’650–2’750"],
      ["12. Mallorca (5)", "2’000–3’400"],
      ["13. Barcelona (2)", "750–1’250"],
      ["Zwischenübernachtung Avignon (1)", "250–400"]
    ],
    hinweise: [
      "Preise für die Kids: Viele Sehenswürdigkeiten sind für Kinder bis 11 oder 12 Jahre günstiger oder gratis; die Tochter (14) zahlt oft schon den Jugend- oder Erwachsenenpreis.",
      "Sparhebel: Apartments mit Küche, Menú del día am Mittag, Picknick am Strand, Fähren früh buchen.",
      "Nicht eingerechnet ist die Abnutzung des eigenen Autos (Service, Reifen). Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich)."
    ]
  },
  tippsIntro: "Einreise, Auto, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise",
      "Frankreich, Spanien und Portugal sind im Schengen-Raum: Identitätskarte oder Pass reichen, für Kids eigene Ausweise mitnehmen. Vor Abreise beim EDA prüfen."
    ],
    [
      "Auto und Papiere",
      "Führerausweis, Fahrzeugausweis, CH-Kleber am Heck, Warnwesten für alle, Pannendreieck. Crit’Air-Vignette für Frankreich vorab online bestellen (nur auf der offiziellen Seite). In Barcelona ausländische Autos vorab online für die Umweltzone (ZBE) registrieren."
    ],
    [
      "Maut",
      "Frankreich: Mautstellen auf den Autobahnen, Kreditkarte geht. Spanien: die meisten Autobahnen im Nordosten sind mautfrei, einzelne Strecken (z.B. bei Bilbao) kosten. Portugal: teils elektronische Maut ohne Zahlstellen, dafür EasyToll an der Grenze (Kreditkarte mit Kennzeichen verknüpfen) oder Via Verde."
    ],
    [
      "Fähren mit dem Auto",
      "Check-in 60–90 Min. vor Abfahrt, Auto während der Fahrt nicht zugänglich: Badesachen, Snacks und Medikamente ins Handgepäck. Auf den Inseln eng und im Sommer voll; Parkplätze an Stränden früh. Elektroautos werden mitgenommen; Regeln zu Ladestand und Laden an Bord beim Buchen bestätigen. Nach der Ankunft auf den Inseln ist das Ladenetz dünner als auf dem Festland: Unterkunft mit Lademöglichkeit wählen."
    ],
    ["Währung und Zahlung", "Euro. Karten werden fast überall akzeptiert, etwas Bargeld für kleine Lokale und Märkte."],
    [
      "Wetter im Juni und Juli",
      "Andalusien im Landesinneren (Sevilla, Granada) Ende Juni oft 33–40 °C, die Bardenas Anfang Juli über 35 °C, an der Küste 28–32 °C. Lissabon und Porto angenehmer, Galicien und Bilbao 20–25 °C mit Regenschauern. Mittelmeer ca. 23–26 °C, Atlantik ca. 17–20 °C."
    ],
    ["Zeitzonen", "Frankreich und Spanien wie die Schweiz, Portugal eine Stunde früher."],
    [
      "Verkehr",
      "Im Juli sind die französischen Autobahnen an Samstagen sehr voll, vor allem Richtung Süden. Die Rückfahrt am Sa, 24.07.2027 geht Richtung Norden und ist mit ca. 5–5,5 Std. kürzer; trotzdem früh starten und die Verkehrsprognose von Bison Futé prüfen. Klimaanlage prüfen lassen, Wasser im Auto, nie Kinder oder Tiere im parkierten Auto lassen."
    ],
    [
      "Gesundheit",
      "Europäische Krankenversicherungskarte (Rückseite der Versichertenkarte) mitnehmen. Sonnenschutz, viel trinken; Hitzschlag ist im Juli die grösste Gefahr. Leitungswasser ist trinkbar, schmeckt aber teils nach Chlor."
    ],
    [
      "Sicherheit",
      "Taschendiebe in Barcelona, Sevilla und Lissabon. Aufbrüche an Strandparkplätzen und Aussichtspunkten: nichts sichtbar im Auto lassen."
    ],
    [
      "Kultur und Verhalten",
      "In Spanien wird spät gegessen (Mittag ab 14 Uhr, Abend ab 21 Uhr); viele Geschäfte schliessen über Mittag. Trinkgeld ca. 5–10 %."
    ],
    [
      "Notfall",
      "Notruf 112 in allen drei Ländern. Pannenhilfe-Nummer der Versicherung notieren; EDA-Reiseplattform nutzen."
    ],
    [
      "Beteiligung der Kids",
      "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt, z.B. Schnorcheln, Freizeitpark oder Tapas-Abend."
    ]
  ]
};
