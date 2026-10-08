// Reise: Spanien, Portugal und Marokko mit dem eigenen Auto ab Brig-Glis; in Marokko mit Fähre, Zug und Mietwagen (eigenes Auto bleibt in Tarifa)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.marokko = {
  titel: "Mit dem Auto nach Spanien, Portugal und Marokko",
  menu: "Spanien / Marokko",
  variante: "Mit Mietwagen bis in die Sahara",
  untertitel: "Fünf Wochen ab Brig-Glis: Schnorcheln bei den Medes-Inseln, Barcelona, Valencia, vier Nächte auf Formentera, Benidorm, Cabo de Gata und der Caminito del Rey, mit der Fähre nach Marokko zu Marrakesch, Atlas, Wüste und Fès, dann Sevilla, Algarve, Lissabon, die Playa de las Catedrales und über San Sebastián und Carcassonne zurück.",
  zeitraum: "Sa, 19.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Erg Chebbi dunes camel caravan|Sahara Merzouga dunes",
    stichwort: "chebbi|merzouga|sahara|camel",
    alt: "Sanddünen des Erg Chebbi bei Merzouga"
  },
  planIntro: "Abfahrt in Brig-Glis am Sa, 19.06.2027, Rückkehr am Sa, 24.07.2027. Mit dem eigenen Elektroauto durch Spanien, Portugal und Frankreich, nach Formentera mit der Autofähre; nach Marokko mit der Fähre ohne Auto, dort mit dem Zug und einem Mietwagen. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19. Juni",
    name: "Abfahrt in Brig-Glis",
    info: "Mit dem eigenen Auto über Genf und Lyon ans Mittelmeer"
  },
  plan: [
    {
      datum: "19.–20. Juni",
      name: "Zwischenübernachtung Sète",
      naechte: 1,
      info: "Brig-Glis – Genf – Lyon – Montpellier – Sète (ca. 7–7,5 Std., ca. 630 km)"
    },
    {
      datum: "20.–22. Juni",
      name: "1. Costa Brava (L’Estartit)",
      naechte: 2,
      info: "Auto über Perpignan und Figueres (ca. 2,5–3 Std., ca. 260 km)"
    },
    {datum: "22.–24. Juni", name: "2. Barcelona", naechte: 2, info: "Auto über Girona (ca. 1,75–2 Std., ca. 140 km)"},
    {datum: "24.–25. Juni", name: "3. Valencia", naechte: 1, info: "Auto auf der AP-7 (ca. 3,5 Std., ca. 350 km)"},
    {
      datum: "25.–29. Juni",
      name: "4. Formentera",
      naechte: 4,
      info: "Auto nach Dénia (ca. 1–1,25 Std.), Autofähre Dénia–Formentera (direkt ca. 2 Std.)"
    },
    {
      name: "5. Benidorm",
      naechte: 2,
      info: "Autofähre Formentera–Dénia (ca. 2–4,5 Std.), Auto (ca. 40–45 Min.)",
      datum: "29. Juni–1. Juli"
    },
    {
      datum: "1.–3. Juli",
      name: "6. Cabo de Gata",
      naechte: 2,
      info: "Auto über Alicante, Murcia und Almería (ca. 3,5–4 Std., ca. 330 km)"
    },
    {
      datum: "3.–4. Juli",
      name: "7. Caminito del Rey (El Chorro)",
      naechte: 1,
      info: "Auto über Almería und Málaga (ca. 2,5–3 Std., ca. 250 km)"
    },
    {datum: "4.–5. Juli", name: "8. Tarifa", naechte: 1, info: "Auto über Málaga (ca. 2,25–2,5 Std., ca. 210 km)"},
    {
      datum: "5.–7. Juli",
      name: "9. Marrakesch",
      naechte: 2,
      info: "Fähre nach Tanger (ca. 1 Std., Uhr −1 Std.), Zug über Casablanca (ca. 5,5–6,5 Std.)"
    },
    {
      datum: "7.–8. Juli",
      name: "10. Dadès-Schlucht",
      naechte: 1,
      info: "Mietwagen über den Tizi n’Tichka und Aït Ben Haddou (ca. 5–6 Std., ca. 310 km)"
    },
    {
      datum: "8.–9. Juli",
      name: "11. Merzouga (Wüste)",
      naechte: 1,
      info: "Mietwagen über Tinghir (ca. 4 Std., ca. 250 km)"
    },
    {
      datum: "9.–11. Juli",
      name: "12. Fès",
      naechte: 2,
      info: "Mietwagen über Midelt und Ifrane (ca. 7 Std., ca. 460 km)"
    },
    {
      datum: "11.–12. Juli",
      name: "13. Cádiz",
      naechte: 1,
      info: "Zug nach Tanger (ca. 3,5–4,5 Std.), Fähre nach Tarifa (ca. 1 Std., Uhr +1 Std.), Auto (ca. 1,25 Std.)"
    },
    {datum: "12.–14. Juli", name: "14. Sevilla", naechte: 2, info: "Auto (ca. 1,25–1,5 Std., ca. 125 km)"},
    {
      datum: "14.–17. Juli",
      name: "15. Algarve (Lagos)",
      naechte: 3,
      info: "Auto (ca. 2,75–3 Std., ca. 270 km), Uhr −1 Std."
    },
    {datum: "17.–19. Juli", name: "16. Lissabon", naechte: 2, info: "Auto über die A2 (ca. 3–3,5 Std., ca. 300 km)"},
    {
      datum: "19.–20. Juli",
      name: "Zwischenübernachtung Porto",
      naechte: 1,
      info: "Auto auf der A1 (ca. 3 Std., ca. 315 km)"
    },
    {
      datum: "20.–22. Juli",
      name: "17. Playa de las Catedrales",
      naechte: 2,
      info: "Auto über Braga und Lugo (ca. 4–4,5 Std., ca. 400 km), Uhr +1 Std."
    },
    {
      datum: "22.–23. Juli",
      name: "18. San Sebastián",
      naechte: 1,
      info: "Auto entlang der Nordküste über Bilbao (ca. 5 Std., ca. 480 km)"
    },
    {
      datum: "23.–24. Juli",
      name: "19. Carcassonne",
      naechte: 1,
      info: "Auto über Bayonne und Toulouse (ca. 4–4,5 Std., ca. 435 km)"
    }
  ],
  rueckflug: {
    datum: "24. Juli",
    name: "Ankunft in Brig-Glis",
    info: "Carcassonne – Montpellier – Lyon – Genf – Brig-Glis (ca. 7,5–8 Std., ca. 750 km; mit Pausen und Ladestopps ca. 9 Std.)"
  },
  planHinweise: [
    [
      "Gesamt",
      "35 Nächte, 19 Stationen und 2 Zwischenübernachtungen (Sète, Porto). Keine Flüge: mit dem eigenen Elektroauto ca. 5’600 km (ca. 59 Std. reine Fahrzeit), in Marokko mit dem Mietwagen ca. 1’000 km (ca. 16–17 Std.), dazu die Autofähre nach Formentera und zurück (zusammen ca. 4–6 Std.), zweimal die Fähre über die Meerenge (je ca. 1 Std.) und Züge zwischen Tanger, Marrakesch und Fès (zusammen ca. 9–11 Std.). Mit Pausen, Ladestopps, Check-in an den Häfen, Grenz- und Passkontrollen, Umsteigen und Stau realistisch ca. 108–114 Std. von Tür zu Tür (ca. 86–90 Std. im Auto, ca. 22–24 Std. für Fähren und Züge mit Wartezeiten). Die längsten Reisetage: Brig-Glis–Sète (ca. 7–7,5 Std.), Merzouga–Fès (ca. 7 Std. im Mietwagen), Fès–Cádiz und Tarifa–Marrakesch (Fähre und Zug, je ca. 7–9 Std.), Carcassonne–Brig-Glis (ca. 7,5–8 Std., mit Pausen und Ladestopps ca. 9 Std.)."
    ],
    [
      "Vorab buchen",
      "Autofähre Dénia–Formentera hin und zurück (Direktfähren mit wenigen Abfahrten), Zufahrtsbewilligung fürs Auto auf Formentera, Unterkunft auf Formentera, Schnorcheltour zu den Medes-Inseln, Parkplatz für das eigene Auto in Tarifa (ca. eine Woche), Fähre Tarifa–Tanger hin und zurück, Zugtickets in Marokko (ONCF), Mietwagen als Einwegmiete Marrakesch–Fès, Riads in Marrakesch und Fès, Wüstencamp in Merzouga (im Sommer geöffnet und mit Klimaanlage?), Caminito del Rey (Zeitfenster), Sagrada Família, Oceanogràfic, Alcázar in Sevilla, Kajak an der Algarve, Unterkünfte in San Sebastián, Reservation für die Playa de las Catedrales (gratis, frühestens 30 Tage vorher)"
    ],
    [
      "Auto und Laden",
      "Tesla mit Gratis-Supercharging in Frankreich, Spanien und Portugal; die Tesla-Navigation plant die Ladestopps. Das eigene Auto fährt nicht nach Marokko: Es bleibt in Tarifa auf einem bewachten Parkplatz. Für den Mietwagen in Marokko Schweizer Führerausweis und internationalen Führerausweis mitnehmen. Crit’Air-Vignette für Frankreich, Umweltzone in Barcelona registrieren, elektronische Maut in Portugal. Auf Formentera gibt es keinen Supercharger: vor der Fähre voll laden, Unterkunft mit Lademöglichkeit buchen."
    ],
    [
      "Optional",
      "Chefchaouen (blaue Stadt, eine Nacht mehr in Marokko), Volubilis und Meknès (ab Fès), Agafay-Wüste (ab Marrakesch, als Ausweichziel bei grosser Hitze), Córdoba (ab Sevilla), Sintra (ab Lissabon), Porto (am Zwischenhalt), Bilbao mit dem Guggenheim (zwischen Ribadeo und San Sebastián), Bilbao (ab San Sebastián), Pont du Gard und Avignon (mit einer Nacht mehr), Cabo de Palos mit den Islas Hormigas (Schnorcheln, Umweg zwischen Dénia und Cabo de Gata), Tagesausflug nach Ibiza ohne Auto (ab Formentera)"
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege: mit dem eigenen Auto ab Brig-Glis, nach Marokko mit der Fähre, dort mit Zug und Mietwagen. Darunter die Detailkarte.",
    breit: true,
    legende: ["car", "ferry", "train"],
    karten: [
      {datei: "karten/marokko.svg"},
      {titel: "Spanien, Portugal und Marokko im Detail (Stationen 1 bis 18)", datei: "karten/marokko-detail.svg"}
    ]
  },
  abwechslungIntro: "Städte, Meer, Wüste und Berge wechseln sich ab: Schnorcheln bei den Medes-Inseln, Barcelona und Valencia, vier Nächte auf Formentera, das Cabo de Gata und der Caminito del Rey, eine Woche Marokko mit Medina, Atlas und Sahara, danach Sevilla, die Algarve, Lissabon, die Felsbögen der Playa de las Catedrales und zum Schluss das Baskenland und Carcassonne.",
  abwechslung: [
    [
      "Städte",
      "Barcelona, Valencia, Benidorm, Marrakesch, Fès, Cádiz, Sevilla, Lissabon, Porto, San Sebastián und Carcassonne."
    ],
    [
      "Marokko",
      "Gaukler auf dem Jemaa el-Fna, Souks, Pass über den Hohen Atlas, Lehmdorf Aït Ben Haddou, Dadès- und Todra-Schlucht, Kamelritt und Nacht im Wüstencamp, die Medina von Fès."
    ],
    [
      "Strand und Meer",
      "Schnorcheln bei den Medes-Inseln (Meeresschutzgebiet, geführte Bootstour), vier Nächte auf Formentera (Cala Saona, Es Caló, Ses Illetes, S’Espalmador: Seegraswiesen mit sehr klarem Wasser) und am Cabo de Gata (Los Escullos, La Isleta del Moro, Cala de San Pedro); dazu Tarifa, Cádiz, die Buchten der Algarve und San Sebastián. Mittelmeer ca. 23–26 °C, Atlantik ca. 18–22 °C."
    ],
    [
      "Action",
      "Oceanogràfic, Caminito del Rey, Kajak durch die Grotten der Algarve, Sandboarding in der Wüste, Surfen in San Sebastián, Ritterspiele in Carcassonne."
    ],
    [
      "Natur und Landschaft",
      "Vulkanküste am Cabo de Gata, Wüste von Tabernas, Schlucht des Caminito del Rey, Hoher Atlas, Sahara-Dünen, Felsküste der Algarve, Felsbögen der Playa de las Catedrales, Baskenküste."
    ]
  ],
  stationenIntro: "Neunzehn Stationen in Spanien, Marokko, Portugal und Frankreich, dazu Zwischenhalte in Sète und Porto. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Costa Brava (L’Estartit, Start)",
      ersatzsuche: "Estartit|Medes|Costa Brava",
      land: "es",
      region: "Katalonien",
      datum: "20.–22. Juni",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Sète", datum: "19.–20. Juni"},
      anreise: "Mit dem Auto ab Brig-Glis über Genf, Lyon und Montpellier nach Sète (ca. 7–7,5 Std., ca. 630 km), dort am Mittelmeer übernachten. Am nächsten Tag über Perpignan und Figueres nach L’Estartit (ca. 2,5–3 Std., ca. 260 km), Uhr ohne Zeitverschiebung.",
      text: "Vor dem Badeort L’Estartit liegen die Medes-Inseln, eines der ältesten und bekanntesten Meeresschutzgebiete im Mittelmeer. Weil hier seit den 1980er-Jahren nicht mehr gefischt wird, sind die Fische gross und zahlreich; an Land kommen die Felsbuchten des Naturparks Montgrí dazu.",
      teens: "Bootsfahrt mit Glasboden und geführtem Schnorchelhalt bei den Medes-Inseln, Schnorcheln in den Buchten des Montgrí (Cala Montgó, Cala Ferriol), Kajak oder Stand-up-Paddle entlang der Küste, Dalí-Museum in Figueres.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Medes-Inseln, ein Tag Buchten und Strand oder das Dalí-Museum.",
        "<strong>Schnorcheln:</strong> Geführte Touren mit dem Boot ab dem Hafen von L’Estartit (ca. 2 Std. mit ca. 1 Std. im Wasser, Ausrüstung inklusive, 2026 ab ca. 30–40 € pro Person); zu sehen sind Zackenbarsche, Brassen, Seesterne und mit Glück Barrakudas. Im Schutzgebiet nichts füttern und nichts mitnehmen.",
        "<strong>Wasser:</strong> Ende Juni ca. 20–23 °C und damit kühler als im Süden; ein Shorty oder Lycra-Shirt hilft bei längerem Schnorcheln."
      ],
      ausserdem: "Pals (mittelalterliches Dorf), Calella de Palafrugell und Cap de Begur (weitere Schnorchelbuchten), Burg von Montgrí, Girona (auf dem Weg nach Barcelona).",
      bilder: [
        {titel: "Medes-Inseln", suche: "Medes Islands L'Estartit", stichwort: "medes|estartit"},
        {
          titel: "Unter Wasser",
          suche: "Medes Islands underwater|Mediterranean snorkeling fish Costa Brava",
          stichwort: "medes|underwater|fish"
        },
        {titel: "L’Estartit", suche: "L'Estartit beach", stichwort: "estartit"},
        {titel: "Cala Montgó", suche: "Cala Montgo Costa Brava", stichwort: "montg"},
        {titel: "Pals", suche: "Pals Girona medieval village", stichwort: "pals"},
        {titel: "Dalí-Museum", suche: "Dali Theatre Museum Figueres", stichwort: "dali|dalí"}
      ]
    },
    {
      nr: 2,
      name: "Barcelona",
      land: "es",
      region: "Katalonien",
      datum: "22.–24. Juni",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto von L’Estartit über Girona nach Barcelona (ca. 1,75–2 Std., ca. 140 km). Das Auto vorab für die Umweltzone registrieren und im Hotel-Parkhaus abstellen; in der Stadt Metro und zu Fuss.",
      text: "Gaudís Bauten, Altstadtgassen, Strand und eine lebendige Grossstadt. In der Nacht vom 23. auf den 24. Juni, während eures Aufenthalts, feiert die Stadt Sant Joan mit Feuerwerk und Feuern am Strand.",
      teens: "Sagrada Família (Turm), Park Güell, Camp Nou bzw. Barça-Museum, Seilbahn auf den Montjuïc, Strand Barceloneta, Markt La Boqueria.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Sagrada Família und Park Güell, ein Tag Altstadt, Hafen und Strand. Am 24. Juni weiter nach Valencia.",
        "<strong>Tickets:</strong> Sagrada Família und Park Güell nur online mit Zeitfenster; Kinder unter 11 gratis, brauchen aber ein Ticket.",
        "<strong>Taschendiebe:</strong> Auf den Ramblas, in der Metro und am Strand Wertsachen gut verstauen."
      ],
      ausserdem: "Casa Batlló, Barri Gòtic, Born-Viertel, Tibidabo (Freizeitpark mit Aussicht), CosmoCaixa (Wissenschaftsmuseum). Montserrat (Kloster in den Bergen, halber Tag ab Barcelona).",
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
      name: "Valencia",
      land: "es",
      region: "Valencia",
      datum: "24.–25. Juni",
      naechte: "1 Nacht",
      anreise: "Mit dem Auto von Barcelona auf der AP-7 nach Valencia (ca. 3,5 Std., ca. 350 km). Hotel mit Parkhaus oder Ladestation wählen.",
      text: "Drittgrösste Stadt Spaniens mit der futuristischen Stadt der Künste und Wissenschaften, einem langen Stadtstrand und dem grünen Turia-Park im alten Flussbett. Hier kommt die Paella her.",
      teens: "Oceanogràfic (das grösste Aquarium Europas, mit Haien und Belugas), Wissenschaftsmuseum, Velotour durch den Turia-Park, Baden an der Malvarrosa, Paella in der Albufera.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag und Abend Oceanogràfic und Stadt der Künste, am nächsten Morgen nach Dénia und mit der Fähre nach Formentera.",
        "<strong>Tickets:</strong> Oceanogràfic online buchen, Kombiticket mit Museum und Hemisfèric möglich.",
        "<strong>Auto:</strong> Hotel mit Parkhaus wählen und in der Stadt Metro, Bus oder Velo nutzen; Regeln der Umweltzone vorab prüfen."
      ],
      ausserdem: "Mercado Central, Kathedrale mit dem Miguelete-Turm, Bioparc, Naturpark Albufera mit Bootsfahrt. Auf der Anreise: Peñíscola (Burg auf einer Halbinsel im Meer, Drehort von «Game of Thrones»).",
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
      nr: 4,
      name: "Formentera",
      land: "es",
      region: "Balearen",
      datum: "25.–29. Juni",
      naechte: "4 Nächte",
      anreise: "Mit dem Auto von Valencia nach Dénia (ca. 1–1,25 Std., ca. 105 km), dann Autofähre Dénia–Formentera (direkt ca. 2 Std., nur wenige Verbindungen pro Tag, sonst über Ibiza bis ca. 4,5 Std.; Fahrplan prüfen); Check-in mit dem Auto ca. 60–90 Min. vor Abfahrt.",
      text: "Die kleine Nachbarinsel ist flach, ruhig und für ihr türkisfarbenes Wasser bekannt: Die grossen Seegraswiesen (Posidonia, Unesco-Welterbe) machen das Wasser so klar wie kaum anderswo im Mittelmeer.",
      teens: "Schnorcheln an der Cala Saona und in der Felsbucht Es Caló, Baden an Ses Illetes, Bootsausflug zur Insel S’Espalmador, Velotour durch die Salinen, Leuchtturm La Mola.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Tag Cala Saona und Westküste, ein Tag Es Caló und Leuchtturm La Mola, ein Tag Ses Illetes und S’Espalmador, ein Tag Ruhe oder Ausflug nach Ibiza ohne Auto (Fähre ca. 30 Min., Dalt Vila und Cala Comte).",
        "<strong>Schnorchelplätze:</strong> Cala Saona und Punta Gavina im Westen, Es Caló im Nordosten (natürliches «Aquarium»), Ses Illetes und S’Espalmador im Norden.",
        "<strong>Auto:</strong> Vom 1. Juni bis 30. September braucht jedes Auto von auswärts eine Bewilligung (formentera.eco); Elektroautos sind von der Gebühr befreit. Regeln für 2027 vorab prüfen.",
        "<strong>Weiterfahrt:</strong> Autofähre Formentera–Dénia direkt (ca. 2 Std.) oder über Ibiza (bis ca. 4,5 Std.); danach noch ca. 4–4,5 Std. bis zum Cabo de Gata."
      ],
      ausserdem: "Leuchtturm Cap de Barbaria, Salinen, Es Pujols, Markt in Sant Francesc. Ibiza mit Dalt Vila und den Buchten im Norden (Tagesausflug ohne Auto).",
      bilder: [
        {
          titel: "Cala Saona",
          datei: "Formentera. Cala Saona. Varadors.jpg",
          suche: "Cala Saona Formentera",
          stichwort: "saona"
        },
        {titel: "Ses Illetes", suche: "Ses Illetes Formentera", stichwort: "illetes"},
        {
          titel: "Es Caló",
          datei: "Formentera Es Caló de Sant Agustí.jpg",
          suche: "Es Calo Formentera",
          stichwort: "calo|caló"
        },
        {
          titel: "S’Espalmador",
          datei: "Isla de Espalmador, Formentera. Islas Baleares.jpg",
          suche: "Espalmador Formentera",
          stichwort: "espalmador"
        },
        {titel: "Cap de Barbaria", suche: "Cap de Barbaria lighthouse", stichwort: "barbaria"},
        {titel: "Leuchtturm La Mola", suche: "Far de la Mola Formentera", stichwort: "mola"}
      ]
    },
    {
      nr: 5,
      name: "Benidorm",
      land: "es",
      region: "Costa Blanca",
      datum: "29. Juni–1. Juli",
      naechte: "2 Nächte",
      anreise: "Autofähre Formentera–Dénia (direkt ca. 2 Std., über Ibiza bis ca. 4,5 Std.; nur wenige Verbindungen pro Tag, Fahrplan prüfen); Check-in mit dem Auto ca. 60–90 Min. vor Abfahrt. Von Dénia mit dem Auto nach Benidorm (ca. 40–45 Min., ca. 50 km).",
      text: "Hochhausstadt an der Costa Blanca mit zwei langen Sandstränden, Freizeit- und Wasserparks. Nach den Inseln Action und Strand; im Hinterland liegen das Bergdorf Guadalest und die Wasserfälle von Algar.",
      teens: "Terra Mítica (Achterbahnen), Aqualandia (einer der grössten Wasserparks Europas), Boot zur Isla de Benidorm mit Schnorcheln, geführter Schnorchelausflug zur Insel Tabarca, Aussicht vom Balcón del Mediterráneo, Baden in den Wasserfällen von Algar.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Terra Mítica oder Aqualandia, ein Tag Schnorcheln bei der Isla de Benidorm oder auf der Insel Tabarca (erstes Meeresschutzgebiet Spaniens, Boot ab Santa Pola oder Alicante, ca. 45–60 Min. ab Benidorm).",
        "<strong>Parks:</strong> Terra Mítica und Aqualandia gehören zusammen, Kombitickets gibt es online; Saison ab Mitte Mai, Öffnungstage vorab prüfen.",
        "<strong>Isla de Benidorm:</strong> Boote ab dem Hafen, ca. 15 Min.; die Insel gehört zum Naturpark Serra Gelada.",
        "<strong>Unterkunft:</strong> Apartment oder Hotel mit Pool und Parkplatz, z.B. an der Playa de Poniente (ruhiger als Levante)."
      ],
      ausserdem: "Altstadt am Balcón del Mediterráneo, Altea (weisses Dorf), Mundomar, Valencia mit Oceanogràfic (ca. 1,5 Std.). Cabo de Palos mit den Islas Hormigas (Meeresschutzgebiet, Kajak- und Schnorcheltouren, auf dem Weg nach Granada ca. 1 Std. Umweg).",
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
      nr: 6,
      name: "Cabo de Gata",
      land: "es",
      region: "Andalusien",
      datum: "1.–3. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto von Benidorm über Alicante, Murcia und Almería nach San José (ca. 3,5–4 Std., ca. 330 km).",
      text: "Naturpark mit Vulkanküste, Halbwüste und den letzten wilden Stränden Andalusiens. Das klare Wasser über Felsen und Seegras ist ideal zum Schnorcheln.",
      teens: "Schnorcheln bei Los Escullos, La Isleta del Moro und an der Cala de San Pedro, Kajak entlang der Vulkanküste, Strände Mónsul und Los Genoveses, Western-Filmkulisse Fort Bravo bei Tabernas.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in San José oder Las Negras: am Ankunftsabend baden, ein ganzer Tag Schnorcheln, Kajak und Strand.",
        "<strong>Schnorchelplätze:</strong> Los Escullos, La Isleta del Moro, Playa de los Muertos und Cala de San Pedro (nur zu Fuss ab Las Negras oder per Boot): Felsriffe und Seegraswiesen mit vielen Fischen direkt vom Strand aus. Am Morgen ist das Wasser am ruhigsten.",
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
      nr: 7,
      name: "Caminito del Rey (El Chorro)",
      land: "es",
      region: "Andalusien",
      datum: "3.–4. Juli",
      naechte: "1 Nacht",
      anreise: "Mit dem Auto von San José über Almería und die Küstenautobahn A-7 bei Málaga nach El Chorro (ca. 2,5–3 Std., ca. 250 km).",
      text: "Ein Steig hoch über der Schlucht Desfiladero de los Gaitanes, früher einer der gefährlichsten Wege der Welt, heute gut gesichert. Rund um El Chorro liegen Stauseen zum Baden.",
      teens: "Caminito del Rey (ca. 3–4 Std.), am Ankunftsabend Baden und Paddeln im Stausee Conde de Guadalhorce.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Morgen des So, 04.07.2027 den Caminito (früher Einlass wegen der Hitze; montags geschlossen), am Nachmittag weiter nach Tarifa (ca. 2,25–2,5 Std.).",
        "<strong>Tickets:</strong> Nur online mit Zeitfenster; Mindestalter 8 Jahre, Ausweis mitnehmen. Früher Einlass wegen der Hitze.",
        "<strong>Hinweis:</strong> Der Weg ist ein Einweg mit Shuttlebus zurück zum Parkplatz; Helm wird gestellt."
      ],
      ausserdem: "El Torcal (Karstfelsen), Dolmen von Antequera (Unesco), Ronda mit der Puente Nuevo (ca. 1 Std.), Málaga (auf der Weiterfahrt).",
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
      name: "Tarifa",
      land: "es",
      region: "Andalusien",
      datum: "4.–5. Juli",
      naechte: "1 Nacht",
      anreise: "Mit dem Auto von El Chorro über Málaga und die Küstenautobahn A-7 nach Tarifa (ca. 2,25–2,5 Std., ca. 210 km).",
      text: "Die Südspitze Europas: weisse Altstadt, lange Strände voller Kitesurfer und auf der anderen Seite der Meerenge die Berge Afrikas. Von hier fährt die Fähre nach Tanger.",
      teens: "Baden und Kitesurfer beobachten an der Playa de los Lances, Sonnenuntergang mit Blick auf Marokko, Bootstour zu den Delfinen und Walen in der Meerenge, römische Ruinen von Baelo Claudia an der Düne von Bolonia.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht vor der Fähre nach Tanger am nächsten Morgen.",
        "<strong>Auto:</strong> Das eigene Auto bleibt rund eine Woche in Tarifa: Parkplatz am Hafen (rund um die Uhr überwacht, 2026 ca. 18 € pro Tag) oder ein bewachter Parkplatz beim Hotel; vorab reservieren und bestätigen lassen.",
        "<strong>Wind:</strong> Bei starkem Ostwind (Levante) ist das Meer unruhig, Fähren können verspätet sein oder ausfallen."
      ],
      ausserdem: "Bolonia mit Baelo Claudia, Vejer de la Frontera (weisses Dorf), Gibraltar (ca. 45 Min.).",
      bilder: [
        {titel: "Tarifa", suche: "Tarifa old town Spain", stichwort: "tarifa"},
        {titel: "Playa de los Lances", suche: "Playa de los Lances Tarifa kitesurf", stichwort: "tarifa|lances|kite"},
        {titel: "Düne von Bolonia", suche: "Bolonia dune beach", stichwort: "bolonia"},
        {titel: "Baelo Claudia", suche: "Baelo Claudia", stichwort: "baelo"},
        {
          titel: "Meerenge von Gibraltar",
          suche: "Strait of Gibraltar Tarifa Morocco view",
          stichwort: "gibraltar|strait"
        },
        {titel: "Delfine", suche: "dolphins Strait of Gibraltar", stichwort: "dolphin"}
      ]
    },
    {
      nr: 9,
      name: "Marrakesch",
      ersatzsuche: "Marrakech",
      land: "ma",
      region: "Marokko",
      datum: "5.–7. Juli",
      naechte: "2 Nächte",
      anreise: "Fähre Tarifa–Tanger Ville ohne Auto (ca. 1 Std., Baleària oder Africa Morocco Link, mehrmals täglich; Passkontrolle an Bord oder im Hafen). In Marokko ist es eine Stunde früher. Vom Hafen mit dem Taxi zum Bahnhof Tanger Ville, mit dem Hochgeschwindigkeitszug Al Boraq nach Casablanca (ca. 2,25 Std.) und weiter mit dem Zug nach Marrakesch (ca. 2,5–3 Std.); insgesamt ca. 5,5–6,5 Std. mit Umsteigen.",
      text: "Die rote Stadt am Fuss des Atlas: Gaukler, Musik und Garküchen auf dem Platz Jemaa el-Fna, enge Gassen in der Medina mit den Souks und ruhige Gärten wie der Jardin Majorelle.",
      teens: "Abend auf dem Jemaa el-Fna mit Schlangenbeschwörern und Garküchen, Handeln in den Souks, Jardin Majorelle, Dachterrasse mit Blick auf die Koutoubia-Moschee, Kochkurs (Tajine), Riad mit Innenhof-Pool.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in einem Riad in der Medina: ein Tag Souks, Paläste und Gärten am Morgen und Abend, mittags Pause im Riad.",
        "<strong>Hitze:</strong> Im Juli oft 38–42 °C; Programm vor 11 und nach 17 Uhr.",
        "<strong>Mietwagen:</strong> Am Ende des zweiten Tags oder am Morgen der Weiterfahrt abholen, als Einwegmiete Marrakesch–Fès (Rückgabegebühr). Internationaler Führerausweis empfohlen."
      ],
      ausserdem: "Bahia-Palast, Saadier-Gräber, Medersa Ben Youssef, Agafay-Steinwüste (ca. 45 Min.), Ourika-Tal im Atlas (kühler).",
      bilder: [
        {titel: "Jemaa el-Fna", suche: "Jemaa el-Fnaa Marrakech", stichwort: "jemaa|fna|marrakech"},
        {titel: "Koutoubia", suche: "Koutoubia Mosque Marrakech", stichwort: "koutoubia"},
        {titel: "Jardin Majorelle", suche: "Jardin Majorelle", stichwort: "majorelle"},
        {titel: "Souks", suche: "Marrakech souk", stichwort: "souk|marrakech"},
        {titel: "Bahia-Palast", suche: "Bahia Palace Marrakech", stichwort: "bahia"},
        {titel: "Riad", suche: "Marrakech riad courtyard", stichwort: "riad"}
      ]
    },
    {
      nr: 10,
      name: "Dadès-Schlucht",
      ersatzsuche: "Dades Gorge|Boumalne Dades",
      land: "ma",
      region: "Marokko",
      datum: "7.–8. Juli",
      naechte: "1 Nacht",
      anreise: "Mit dem Mietwagen über den Hohen Atlas und den Pass Tizi n’Tichka (2’260 m), mit Halt im Lehmdorf Aït Ben Haddou, über Ouarzazate in die Dadès-Schlucht (ca. 5–6 Std., ca. 310 km; kurvige Passstrasse).",
      text: "Von Marrakesch über den Atlas in die «Strasse der Kasbahs»: Lehmburgen, Oasen mit Palmen und die rote Felsschlucht des Dadès mit ihren Serpentinen.",
      teens: "Aït Ben Haddou (Lehmdorf, Drehort von «Gladiator» und «Game of Thrones»), Serpentinen der Dadès-Schlucht, Wanderung durch die Felsen der «Affenfinger».",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht in einer Kasbah-Unterkunft in der Schlucht.",
        "<strong>Fahren:</strong> Gute, aber kurvige Strassen; Polizeikontrollen und Tempolimits beachten, nachts nicht fahren.",
        "<strong>Ouarzazate:</strong> Filmstudios (Atlas Studios) als Halt möglich."
      ],
      ausserdem: "Kasbah Taourirt in Ouarzazate, Atlas Studios, Tal der Rosen, Kasbah Amridil in Skoura.",
      bilder: [
        {titel: "Aït Ben Haddou", suche: "Ait Ben Haddou", stichwort: "ben haddou|benhaddou"},
        {titel: "Dadès-Schlucht", suche: "Dades Gorge", stichwort: "dades"},
        {titel: "Tizi n’Tichka", suche: "Tizi n Tichka pass", stichwort: "tichka"},
        {titel: "Serpentinen", suche: "Dades Gorge winding road", stichwort: "dades"},
        {titel: "Kasbah Taourirt", suche: "Kasbah Taourirt Ouarzazate", stichwort: "taourirt|ouarzazate"},
        {titel: "Oase", suche: "Skoura palm grove kasbah", stichwort: "skoura|kasbah"}
      ]
    },
    {
      nr: 11,
      name: "Merzouga (Wüste)",
      ersatzsuche: "Merzouga|Erg Chebbi",
      land: "ma",
      region: "Marokko",
      datum: "8.–9. Juli",
      naechte: "1 Nacht",
      anreise: "Mit dem Mietwagen über Tinghir mit der Todra-Schlucht und Erfoud nach Merzouga (ca. 4 Std., ca. 250 km), am späten Nachmittag mit dem Kamel oder dem Geländewagen ins Wüstencamp.",
      text: "Die Sanddünen des Erg Chebbi sind bis 150 m hoch. Mit dem Kamel in den Sonnenuntergang, eine Nacht im Zeltcamp unter dem Sternenhimmel und am Morgen der Sonnenaufgang über den Dünen.",
      teens: "Kamelritt in den Sonnenuntergang, Sandboarding auf den Dünen, Nacht im Wüstencamp mit Trommeln und Sternenhimmel, Todra-Schlucht auf der Anreise.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht im Wüstencamp.",
        "<strong>Hitze:</strong> Im Juli tagsüber oft 42–45 °C; einige Camps schliessen im Sommer. Camp mit Klimaanlage oder Schatten und Pool wählen, Kamelritt nur am Abend und frühen Morgen, mittags im Schatten, sehr viel trinken. Das ist der heikelste Teil der Reise.",
        "<strong>Ausweichen:</strong> Wenn die Hitze zu gross ist, die kleine Agafay-Steinwüste bei Marrakesch (ohne Sanddünen) oder eine Nacht in der Wüste von Zagora; Wetter kurz vorher prüfen."
      ],
      ausserdem: "Todra-Schlucht, Fossilien-Werkstätten in Erfoud, Dorf Khamlia mit Gnawa-Musik.",
      bilder: [
        {titel: "Erg Chebbi", suche: "Erg Chebbi dunes Merzouga", stichwort: "chebbi|merzouga"},
        {titel: "Kamelritt", suche: "Merzouga camel trek sunset", stichwort: "camel|merzouga"},
        {titel: "Wüstencamp", suche: "Merzouga desert camp", stichwort: "camp|merzouga"},
        {titel: "Todra-Schlucht", suche: "Todra Gorge", stichwort: "todra|todgha"},
        {titel: "Sonnenaufgang", suche: "Sahara dunes sunrise Morocco", stichwort: "sahara|dune"},
        {titel: "Sternenhimmel", suche: "Sahara night sky stars Morocco", stichwort: "star|night"}
      ]
    },
    {
      nr: 12,
      name: "Fès",
      ersatzsuche: "Fes|Fez",
      land: "ma",
      region: "Marokko",
      datum: "9.–11. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Mietwagen von Merzouga über Erfoud, Midelt und den Mittleren Atlas mit den Zedernwäldern von Ifrane nach Fès (ca. 7 Std., ca. 460 km; der längste Fahrtag in Marokko, früh starten). Mietwagen in Fès zurückgeben.",
      text: "Die Altstadt Fès el-Bali ist eine der grössten autofreien Städte der Welt: über 9’000 Gassen, Handwerker, Koranschulen und die Färberei Chouara mit ihren bunten Becken. Unesco-Welterbe.",
      teens: "Blick über die Färberei Chouara von einer Dachterrasse, Labyrinth der Medina mit einem lokalen Führer, Bab Bou Jeloud (Blaues Tor), Medersa Bou Inania, Aussicht von den Merinidengräbern bei Sonnenuntergang.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in einem Riad: ein Tag Medina mit Führer (offizielle Führer über das Tourismusbüro oder den Riad), ein ruhiger Tag.",
        "<strong>Weiterreise:</strong> Am 11. Juli mit dem Zug nach Tanger (über Kénitra mit dem Al Boraq ca. 3,5–4 Std., direkt ca. 4,5 Std.) und mit der Fähre nach Tarifa.",
        "<strong>Hinweis:</strong> In der Medina bieten sich viele «Führer» an; höflich ablehnen und nur offizielle Führer nehmen."
      ],
      ausserdem: "Meknès und die römischen Ruinen von Volubilis (ca. 1 Std.), Ifrane mit Berberaffen in den Zedernwäldern (auf der Anreise), Chefchaouen (blaue Stadt, ca. 3,5 Std., mit einer Nacht mehr).",
      bilder: [
        {titel: "Färberei Chouara", suche: "Chouara Tannery Fes", stichwort: "chouara|tanner"},
        {titel: "Bab Bou Jeloud", suche: "Bab Bou Jeloud Fes blue gate", stichwort: "bou jeloud|blue gate"},
        {titel: "Medina", suche: "Fes el Bali medina", stichwort: "fes|fez|medina"},
        {titel: "Medersa Bou Inania", suche: "Bou Inania Madrasa Fes", stichwort: "bou inania|madrasa"},
        {
          titel: "Zedernwald von Ifrane",
          suche: "Ifrane cedar forest Barbary macaque",
          stichwort: "macaque|cedar|ifrane"
        },
        {titel: "Volubilis", suche: "Volubilis", stichwort: "volubilis"}
      ]
    },
    {
      nr: 13,
      name: "Cádiz",
      land: "es",
      region: "Andalusien",
      datum: "11.–12. Juli",
      naechte: "1 Nacht",
      anreise: "Zug Fès–Tanger (ca. 3,5–4,5 Std.), Fähre Tanger Ville–Tarifa (ca. 1 Std., Uhr +1 Std.), in Tarifa das eigene Auto abholen und nach Cádiz (ca. 1,25 Std., ca. 100 km). Ein langer Reisetag mit ca. 8–9 Std. von Tür zu Tür.",
      text: "Eine der ältesten Städte Europas auf einer Halbinsel im Atlantik: weisse Häuser, Wachtürme, Stadtstrände direkt an der Altstadt. Nach Marokko zwei ruhige Tage am Meer.",
      teens: "Baden an der Playa de la Caleta und der Playa de la Victoria, Aussicht vom Torre Tavira mit Camera obscura, Kathedrale mit Turm, frittierter Fisch (pescaíto frito).",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht nach dem langen Reisetag aus Marokko: am Abend Altstadt und Playa de la Caleta, am Morgen weiter nach Sevilla.",
        "<strong>Wasser:</strong> Atlantik, im Juli ca. 21–23 °C und oft windig.",
        "<strong>Auto:</strong> In der Altstadt eng; Hotel mit Parkhaus wählen."
      ],
      ausserdem: "Jerez de la Frontera mit der Reitschule (ca. 40 Min.), Vejer de la Frontera, Strände der Costa de la Luz.",
      bilder: [
        {titel: "Cádiz", suche: "Cadiz Spain old town", stichwort: "cadiz|cádiz"},
        {titel: "Playa de la Caleta", suche: "La Caleta beach Cadiz", stichwort: "caleta"},
        {titel: "Kathedrale", suche: "Cadiz Cathedral", stichwort: "cathedral|cadiz"},
        {titel: "Torre Tavira", suche: "Torre Tavira Cadiz", stichwort: "tavira"},
        {titel: "Castillo de San Sebastián", suche: "Castillo de San Sebastian Cadiz", stichwort: "san sebasti"},
        {titel: "Jerez", suche: "Jerez de la Frontera horse", stichwort: "jerez"}
      ]
    },
    {
      nr: 14,
      name: "Sevilla",
      ersatzsuche: "Seville",
      land: "es",
      region: "Andalusien",
      datum: "12.–14. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto von Cádiz über die Autobahn AP-4 nach Sevilla (ca. 1,25–1,5 Std., ca. 125 km). Hotel mit Parkhaus wählen.",
      text: "Andalusiens Hauptstadt mit Kathedrale, Alcázar, der Plaza de España und Flamenco. Im Juli ist es sehr heiss, das Leben spielt sich am Morgen und am Abend ab.",
      teens: "Alcázar (Drehort von «Game of Thrones»), Plaza de España mit Booten, Setas (Metropol Parasol) mit Dachweg, Flamenco-Show am Abend, Freizeitpark Isla Mágica.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Alcázar, Kathedrale und Plaza de España am Morgen und Abend, mittags Pause im klimatisierten Hotel oder am Pool.",
        "<strong>Hitze:</strong> Im Juli oft 38–42 °C; viel trinken, Kopfbedeckung, Programm vor 12 und nach 18 Uhr.",
        "<strong>Tickets:</strong> Alcázar und Kathedrale online buchen, sonst lange Schlangen in der Sonne."
      ],
      ausserdem: "Barrio Santa Cruz, Torre del Oro, Triana mit Markt, Park María Luisa. Córdoba mit der Mezquita (ca. 1,5 Std.).",
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
      nr: 15,
      name: "Algarve (Lagos)",
      land: "pt",
      region: "Portugal",
      datum: "14.–17. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto von Sevilla über Huelva auf der Algarve-Autobahn A22 nach Lagos (ca. 2,75–3 Std., ca. 270 km). In Portugal ist es eine Stunde früher. Maut: die A22 ist frei, die A2 nach Lissabon hat Zahlstellen; für elektronische Maut EasyToll an der Grenze.",
      text: "Goldgelbe Felsküste mit Grotten, Felsbögen und kleinen Buchten. Nach Sevilla drei Tage Strand und Meer, bevor es in die Städte Lissabon und Porto geht.",
      teens: "Kajak- oder Bootstour durch die Grotten der Ponta da Piedade, Baden in den Buchten Praia do Camilo und Praia Dona Ana, Sonnenuntergang an den Klippen, optional Bootstour zur Benagil-Höhle.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte in Lagos: ein Tag Kajak an der Ponta da Piedade, ein Tag Buchten und Strand, ein Tag Bootstour zur Benagil-Höhle oder Ausflug nach Sagres.",
        "<strong>Kajak:</strong> Geführte Touren ab der Marina von Lagos dauern ca. 2 Std. (ab ca. 35 € pro Person); Kids unter 16 nur mit Erwachsenen, alle müssen schwimmen können. Vorab buchen, bei Wellengang fällt die Tour aus.",
        "<strong>Wasser:</strong> Atlantik, deutlich kühler als das Mittelmeer; die Buchten sind bei Ebbe grösser."
      ],
      ausserdem: "Altstadt von Lagos mit Stadtmauer, Praia da Marinha, Leuchtturm Ponta da Piedade, Sagres und Cabo de São Vicente.",
      bilder: [
        {titel: "Ponta da Piedade", suche: "Ponta da Piedade Lagos", stichwort: "piedade"},
        {titel: "Praia do Camilo", suche: "Praia do Camilo Lagos", stichwort: "camilo"},
        {titel: "Praia Dona Ana", suche: "Praia Dona Ana Lagos", stichwort: "dona ana"},
        {titel: "Benagil-Höhle", suche: "Benagil cave", stichwort: "benagil"},
        {titel: "Praia da Marinha", suche: "Praia da Marinha Algarve", stichwort: "marinha"},
        {titel: "Altstadt von Lagos", suche: "Lagos Portugal old town", stichwort: "lagos"}
      ]
    },
    {
      nr: 16,
      name: "Lissabon",
      ersatzsuche: "Lisbon",
      land: "pt",
      region: "Portugal",
      datum: "17.–19. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto von Lagos über die A2 nach Lissabon (ca. 3–3,5 Std., ca. 300 km, Maut an Zahlstellen).",
      text: "Hügelige Hauptstadt am Tejo mit Strassenbahnen, Aussichtspunkten, Fliesenfassaden und Pastéis de Nata. Nah am Meer und an Sintra.",
      teens: "Oceanário (eines der grössten Aquarien Europas), Strassenbahn 28, Belém mit Turm und Pastéis de Belém, Tagesausflug nach Sintra (Pena-Palast) und ans Cabo da Roca, Surfen in Carcavelos.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt, Belém und Oceanário; Sintra als Abstecher auf der Weiterfahrt nach Porto (ca. 30–45 Min. Umweg).",
        "<strong>Auto:</strong> In der Stadt stehen lassen; Metro, Tram und Taxi sind günstig. Parkhaus beim Hotel buchen.",
        "<strong>Wetter:</strong> Angenehmer als Andalusien, meist 25–30 °C, abends windig."
      ],
      ausserdem: "Alfama, Castelo de São Jorge, LX Factory, Praça do Comércio, Cascais. Sintra mit Pena-Palast und Quinta da Regaleira (Abstecher auf der Weiterfahrt).",
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
      nr: 17,
      name: "Playa de las Catedrales",
      land: "es",
      region: "Galicien",
      datum: "20.–22. Juli",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Porto", datum: "19.–20. Juli"},
      anreise: "Mit dem Auto von Lissabon auf der A1 nach Porto (ca. 3 Std., ca. 315 km), dort übernachten und am Abend durch die Ribeira. Am nächsten Tag über Braga, Valença und Lugo nach Ribadeo (ca. 4–4,5 Std., ca. 400 km). In Spanien ist es wieder eine Stunde später.",
      text: "Bei Ebbe läuft man zwischen meterhohen Felsbögen und Höhlen am Strand. Nach Wüste, Medinas und Andalusien ist die grüne, kühle Küste Galiciens ein starker Kontrast.",
      teens: "Bei Ebbe durch die «Kathedralen» laufen, Höhlen erkunden, Küstenwanderung, Surf-Schnupperstunde, Altstadt von Ribadeo.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in Ribadeo, damit eine Ebbe bei Tageslicht sicher passt.",
        "<strong>Reservation:</strong> Vom 1. Juli bis 30. September gratis online nötig, frühestens 30 Tage vorher, begrenzte Plätze.",
        "<strong>Gezeiten:</strong> Die Bögen sind nur bei Ebbe zugänglich; Gezeitentabelle prüfen und die Flut nicht verpassen.",
        "<strong>Wasser:</strong> Der Atlantik hat im Juli nur ca. 17–19 °C."
      ],
      ausserdem: "Ribadeo mit Ría, Mondoñedo, Tapia de Casariego, Strände der Mariña Lucense. Auf der Anreise ab Porto: Santiago de Compostela (Kathedrale, Umweg).",
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
      nr: 18,
      name: "San Sebastián",
      ersatzsuche: "San Sebastian|Donostia",
      land: "es",
      region: "Baskenland",
      datum: "22.–23. Juli",
      naechte: "1 Nacht",
      anreise: "Mit dem Auto von Ribadeo entlang der Nordküste über Oviedo, Santander und Bilbao nach San Sebastián (ca. 5 Std., ca. 480 km); Halt in Bilbao beim Guggenheim-Museum möglich.",
      text: "Elegante Stadt an einer muschelförmigen Bucht mit Stadtstrand, Altstadt voller Pintxos-Bars und zwei Aussichtsbergen. Nach der Hitze im Süden ist es hier grün und angenehm.",
      teens: "Baden an der Playa de la Concha, Surfstunde an der Zurriola, Standseilbahn auf den Monte Igueldo mit altem Freizeitpark, Aquarium, Pintxos am Abend, Ausflug nach Bilbao ins Guggenheim.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Abend Altstadt mit Pintxos, am Morgen Strand La Concha oder Surfen, dann weiter nach Carcassonne.",
        "<strong>Wetter:</strong> Meist 22–26 °C, Atlantik ca. 20–22 °C, Regenschauer möglich.",
        "<strong>Auto:</strong> Parkhaus beim Hotel; in der Stadt zu Fuss, mit Bus oder Velo."
      ],
      ausserdem: "Monte Urgull, Peine del Viento (Skulpturen am Meer), Getaria und Zarautz, Guggenheim Bilbao, Biarritz.",
      bilder: [
        {titel: "La Concha", suche: "La Concha beach San Sebastian", stichwort: "concha|san sebasti|donostia"},
        {titel: "Monte Igueldo", suche: "Monte Igueldo San Sebastian view", stichwort: "igueldo|san sebasti"},
        {titel: "Altstadt", suche: "San Sebastian old town Parte Vieja", stichwort: "san sebasti|donostia"},
        {titel: "Peine del Viento", suche: "Peine del Viento San Sebastian", stichwort: "peine|viento"},
        {titel: "Zurriola", suche: "Zurriola beach surf San Sebastian", stichwort: "zurriola"},
        {titel: "Guggenheim Bilbao", suche: "Guggenheim Museum Bilbao", stichwort: "guggenheim"}
      ]
    },
    {
      nr: 19,
      name: "Carcassonne (Finale)",
      land: "fr",
      region: "Okzitanien",
      datum: "23.–24. Juli",
      naechte: "1 Nacht, Rückfahrt am 24. Juli",
      anreise: "Mit dem Auto über Bayonne und Toulouse nach Carcassonne (ca. 4–4,5 Std., ca. 435 km, Maut in Frankreich).",
      text: "Die Cité von Carcassonne ist eine mittelalterliche Festungsstadt mit doppelter Mauer und über 50 Türmen, wie aus einem Ritterfilm. Unten fliesst der Canal du Midi.",
      teens: "Rundgang auf den Mauern der Cité und durch das Schloss, Ritterspiele und Greifvogelschau im Sommer, Bootsfahrt auf dem Canal du Midi, Baden im Lac de la Cavayère.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Abend und am frühen Morgen durch die Cité (tagsüber voll).",
        "<strong>Auto:</strong> Crit’Air-Vignette für Frankreich nötig; Parkplätze unterhalb der Cité.",
        "<strong>Rückfahrt:</strong> Am Sa, 24.07.2027 über Narbonne, Montpellier, Lyon und Genf nach Brig-Glis (ca. 7,5–8 Std., ca. 750 km; mit Pausen und 1–2 Ladestopps ca. 9 Std.). Früh starten; im Juli sind die Autobahnen am Samstag Richtung Süden voll, Richtung Norden weniger."
      ],
      ausserdem: "Toulouse mit der Cité de l’espace (Raumfahrt-Park, auf der Anreise), Katharerburgen wie Peyrepertuse, Lac de la Cavayère. Pont du Gard und Avignon (Umweg auf der Rückfahrt, mit einer Nacht mehr).",
      bilder: [
        {titel: "Cité von Carcassonne", suche: "Carcassonne Cite medieval", stichwort: "carcassonne"},
        {titel: "Stadtmauern", suche: "Carcassonne walls towers", stichwort: "carcassonne"},
        {titel: "Schloss", suche: "Chateau Comtal Carcassonne", stichwort: "comtal|carcassonne"},
        {titel: "Canal du Midi", suche: "Canal du Midi boat", stichwort: "canal du midi"},
        {titel: "Peyrepertuse", suche: "Chateau de Peyrepertuse", stichwort: "peyrepertuse"},
        {titel: "Cité de l’espace", suche: "Cite de l'espace Toulouse", stichwort: "espace|toulouse"}
      ]
    }
  ],
  abschluss: "Nach einer Nacht in Carcassonne Rückfahrt über Montpellier, Lyon und Genf nach Brig-Glis am Sa, 24.07.2027 (ca. 7,5–8 Std. reine Fahrzeit, mit Pausen ca. 9 Std.).",
  budgetIntro: "Mittelklasse inklusive Maut, Fähren, Züge und Mietwagen in Marokko, Unterkunft, Verpflegung und Aktivitäten; Laden an Tesla-Superchargern ist gratis. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 35,
    total: "20’550",
    spanne: "15’500–27’000",
    proTag: "ca. 590 CHF pro Tag, ca. 5’100 pro Person",
    posten: [
      [
        "Auto: Maut, Vignetten, Laden unterwegs (ca. 5’300 km)",
        "300–550",
        "400",
        "Supercharging gratis; Maut in Frankreich, Spanien und Portugal, Crit’Air-Vignette, Umweltzonen"
      ],
      [
        "Parkieren und lokale Transfers",
        "600–1’000",
        "800",
        "Parkplatz in Tarifa für ca. eine Woche, Hotel-Parkhäuser in Städten, Taxis und Metro"
      ],
      [
        "Autofähre Dénia–Formentera hin und zurück",
        "350–700",
        "500",
        "Auto und 4 Personen mit Sitzplätzen; im Juli früh buchen"
      ],
      [
        "Marokko: Fähren, Züge, Mietwagen",
        "900–1’600",
        "1’200",
        "Fähre Tarifa–Tanger hin und zurück, Züge Tanger–Marrakesch und Fès–Tanger, Einwegmiete Marrakesch–Fès mit Benzin und Rückgabegebühr"
      ],
      [
        "Unterkunft (Familienzimmer, Apartment, Riad oder 2 Zimmer)",
        "6’000–10’350",
        "8’000",
        "ca. 120–300 CHF pro Nacht; Riads in Marokko günstiger, Formentera im Juli, das Wüstencamp, Lissabon und San Sebastián teurer"
      ],
      [
        "Verpflegung (Restaurants, Einkauf)",
        "3’500–5’960",
        "4’550",
        "ca. 100–170 CHF pro Tag für 4 Personen; Marokko günstig"
      ],
      [
        "Aktivitäten und Eintritte",
        "2’100–3’600",
        "2’750",
        "Schnorcheltour Medes-Inseln, Kajak und Schnorcheln auf Formentera, Aqualandia oder Terra Mítica, Sagrada Família, Oceanogràfic, Caminito del Rey, Kamelritt und Wüstencamp, Führer in Fès, Alcázar, Kajak an der Algarve, Oceanário, Cité von Carcassonne"
      ],
      [
        "Versicherung, Pannenhilfe, Reiseapotheke",
        "300–700",
        "500",
        "Pannenhilfe-Versicherung fürs Auto, Reiseversicherung für Marokko, Annullationsschutz"
      ],
      ["Reserve (ca. 10 %)", "1’450–2’500", "1’850", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["Zwischenübernachtung Sète (1)", "250–400"],
      ["1. Costa Brava (2)", "650–1’100"],
      ["2. Barcelona (2)", "750–1’250"],
      ["3. Valencia (1)", "350–550"],
      ["4. Formentera (4)", "1’700–2’900"],
      ["5. Benidorm (2)", "600–1’000"],
      ["6. Cabo de Gata (2)", "600–1’000"],
      ["7. Caminito del Rey (1)", "300–500"],
      ["8. Tarifa (1)", "300–500"],
      ["9. Marrakesch (2)", "600–1’000"],
      ["10. Dadès-Schlucht (1)", "200–350"],
      ["11. Merzouga (1)", "300–550"],
      ["12. Fès (2)", "500–850"],
      ["13. Cádiz (1)", "300–500"],
      ["14. Sevilla (2)", "650–1’050"],
      ["15. Algarve (3)", "900–1’500"],
      ["16. Lissabon (2)", "700–1’150"],
      ["Zwischenübernachtung Porto (1)", "250–400"],
      ["17. Playa de las Catedrales (2)", "550–900"],
      ["18. San Sebastián (1)", "400–650"],
      ["19. Carcassonne (1)", "300–450"]
    ],
    hinweise: [
      "Preise für die Kids: Viele Sehenswürdigkeiten sind für Kinder bis 11 oder 12 Jahre günstiger oder gratis; die Tochter (14) zahlt oft schon den Jugend- oder Erwachsenenpreis.",
      "Sparhebel: Apartments mit Küche, Menú del día am Mittag, Riads in Marokko, Fähren und Züge früh buchen, Unterkunft auf Formentera früh buchen.",
      "Nicht eingerechnet ist die Abnutzung des eigenen Autos (Service, Reifen). Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich)."
    ]
  },
  tippsIntro: "Einreise, Auto, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise",
      "Frankreich, Spanien und Portugal sind im Schengen-Raum, dort genügt die Identitätskarte. Für Marokko braucht jede Person, auch die Kids, einen eigenen gültigen Reisepass; die Identitätskarte genügt nicht. Kein Visum bis 90 Tage. Einreisebestimmungen vor Abreise beim EDA und bei der marokkanischen Botschaft prüfen."
    ],
    [
      "Auto und Papiere",
      "Führerausweis, Fahrzeugausweis, CH-Kleber, Warnwesten für alle, Pannendreieck. Für den Mietwagen in Marokko zusätzlich den internationalen Führerausweis. Crit’Air-Vignette für Frankreich vorab online bestellen."
    ],
    [
      "Maut",
      "Frankreich: Mautstellen. Spanien: viele Autobahnen mautfrei. Portugal: elektronische Maut mit EasyToll an der Grenze oder Via Verde. Marokko: Mautautobahnen zwischen den grossen Städten, Bargeld oder Karte."
    ],
    [
      "Fähren",
      "Autofähre nach Formentera: Check-in 60–90 Min. vor Abfahrt, Auto während der Fahrt nicht zugänglich (Badesachen, Snacks, Medikamente ins Handgepäck); Zufahrtsbewilligung auf Formentera, Elektroautos gebührenfrei. Nach Marokko: Fähre Tarifa–Tanger Ville ohne Auto (Baleària, Africa Morocco Link), mehrmals täglich; bei starkem Ostwind Ausfälle möglich. Züge der ONCF: Al Boraq Tanger–Casablanca, weiter mit dem Zug nach Marrakesch; Tickets online, 1. Klasse mit Platzreservation empfohlen."
    ],
    [
      "Währung und Zahlung",
      "Euro in Spanien, Portugal und Frankreich. Marokko: Dirham, nur im Land erhältlich; Bargeld am Automaten, in Riads und grossen Läden auch Karten. Trinkgeld ist üblich."
    ],
    [
      "Wetter im Juni und Juli",
      "Marrakesch und Fès oft 38–42 °C, die Wüste bei Merzouga 42–45 °C. Andalusien 35–40 °C, an der Küste 28–32 °C, Lissabon und San Sebastián angenehmer. Mittelmeer ca. 23–26 °C, Atlantik ca. 18–22 °C."
    ],
    ["Zeitzonen", "Frankreich und Spanien wie die Schweiz, Portugal und Marokko eine Stunde früher."],
    [
      "Gesundheit",
      "In Spanien, Portugal und Frankreich gilt die Europäische Krankenversicherungskarte, in Marokko nicht: Reiseversicherung mit Rücktransport. In Marokko kein Leitungswasser trinken, auf Hygiene beim Essen achten. Sonnenschutz und viel trinken; Hitzschlag ist die grösste Gefahr."
    ],
    [
      "Sicherheit",
      "Taschendiebe in Barcelona, Sevilla, Lissabon und in den Medinas. In Marokko aufdringliche Händler und falsche Führer höflich ablehnen. EDA-Reisehinweise für Marokko vor Abreise lesen."
    ],
    [
      "Kultur und Verhalten",
      "In Marokko schultern- und knielange Kleidung in den Städten, Fotos von Menschen nur mit Erlaubnis, Moscheen sind für Nicht-Muslime meist nicht zugänglich. In Spanien wird spät gegessen."
    ],
    [
      "Notfall",
      "Notruf 112 in Spanien, Portugal und Frankreich; in Marokko Polizei 19, Ambulanz 15. Pannenhilfe-Nummer der Versicherung notieren; EDA-Reiseplattform nutzen."
    ],
    [
      "Beteiligung der Kids",
      "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt, z.B. Kamelritt, Surfstunde oder Kajak."
    ]
  ]
};
