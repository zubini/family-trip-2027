// Reise: Spanien / Portugal mit dem eigenen Auto ab Brig-Glis (keine Flüge, Inseln per Autofähre)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.spanien = {
  titel: "Mit dem Auto durch Spanien und Portugal",
  menu: "Spanien / Portugal",
  untertitel: "Fünf Wochen Roadtrip ab Brig-Glis: Schnorcheln bei den Medes-Inseln, Barcelona, Valencia, Ibiza und Formentera, Benidorm, Andalusien, Lissabon, Porto und der wilde Norden.",
  zeitraum: "Fr, 18.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Formentera turquoise beach",
    stichwort: "formentera",
    alt: "Sandstrand mit türkisfarbenem Wasser auf Formentera"
  },
  planIntro: "Abfahrt in Brig-Glis am Fr, 18.06.2027, Rückkehr am Sa, 24.07.2027. Alle Strecken mit dem eigenen Elektroauto, zu den Inseln mit der Autofähre. Ein Klick auf eine Station springt zur Beschreibung.",
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
      name: "1. Costa Brava (L’Estartit)",
      naechte: 2,
      info: "Auto über Perpignan und Figueres (ca. 2,5–3 Std., ca. 260 km)"
    },
    {datum: "21.–23. Juni", name: "2. Barcelona", naechte: 2, info: "Auto über Girona (ca. 1,75–2 Std., ca. 140 km)"},
    {datum: "23.–25. Juni", name: "3. Valencia", naechte: 2, info: "Auto auf der AP-7 (ca. 3,5 Std., ca. 350 km)"},
    {
      datum: "25.–28. Juni",
      name: "4. Ibiza",
      naechte: 3,
      info: "Auto nach Dénia (ca. 1–1,25 Std.), Autofähre Dénia–Ibiza (ca. 2,5 Std.)"
    },
    {datum: "28. Juni–1. Juli", name: "5. Formentera", naechte: 3, info: "Autofähre Ibiza–Formentera (ca. 30–60 Min.)"},
    {
      datum: "1.–3. Juli",
      name: "6. Benidorm",
      naechte: 2,
      info: "Autofähre Formentera–Dénia (ca. 2–4,5 Std.), Auto (ca. 40–45 Min.)"
    },
    {datum: "3.–6. Juli", name: "7. Granada", naechte: 3, info: "Auto über Murcia und Baza (ca. 4–4,5 Std.)"},
    {datum: "6.–9. Juli", name: "8. Cabo de Gata", naechte: 3, info: "Auto über Guadix und Almería (ca. 2–2,5 Std.)"},
    {
      datum: "9.–10. Juli",
      name: "9. Caminito del Rey (El Chorro)",
      naechte: 1,
      info: "Auto über Almería und Málaga (ca. 2,5–3 Std.)"
    },
    {datum: "10.–12. Juli", name: "10. Sevilla", naechte: 2, info: "Auto (ca. 2 Std.)"},
    {datum: "12.–15. Juli", name: "11. Algarve (Lagos)", naechte: 3, info: "Auto (ca. 2,75–3 Std.), Uhr −1 Std."},
    {datum: "15.–17. Juli", name: "12. Lissabon", naechte: 2, info: "Auto über die A2 (ca. 3–3,5 Std.)"},
    {datum: "17.–19. Juli", name: "13. Porto", naechte: 2, info: "Auto (ca. 3 Std.)"},
    {datum: "19.–21. Juli", name: "14. Playa de las Catedrales", naechte: 2, info: "Auto (ca. 4–4,5 Std.), Uhr +1 Std."},
    {
      datum: "21.–22. Juli",
      name: "Zwischenübernachtung Bilbao",
      naechte: 1,
      info: "Auto entlang der Nordküste (ca. 4 Std.)"
    },
    {datum: "22.–23. Juli", name: "15. Bardenas Reales", naechte: 1, info: "Auto (ca. 2,5 Std.)"},
    {
      datum: "23.–24. Juli",
      name: "Zwischenübernachtung Montpellier",
      naechte: 1,
      info: "Auto über Saragossa, Lleida, Girona und Perpignan (ca. 7–7,5 Std., ca. 720 km)"
    }
  ],
  rueckflug: {
    datum: "24. Juli",
    name: "Ankunft in Brig-Glis",
    info: "Montpellier – Lyon – Genf – Brig-Glis (ca. 6,5–7 Std., ca. 600 km)"
  },
  planHinweise: [
    [
      "Gesamt",
      "36 Nächte, 15 Stationen und 3 Zwischenübernachtungen (Sète, Bilbao, Montpellier). Keine Flüge: alles mit dem eigenen Elektroauto, zu den Inseln mit drei Autofähren. Insgesamt ca. 6’000 km Autofahrt und ca. 6–7 Std. auf Fähren, zusammen ca. 69 Std. reine Reisezeit (ca. 62 Std. Auto); mit Pausen, Ladestopps, Check-in an den Häfen und Sommerstau realistisch ca. 83–86 Std. von Tür zu Tür (ca. 74–76 Std. im Auto inklusive ca. 11–13 Ladestopps à ca. 15–25 Min. an Tesla-Superchargern, ca. 9–10 Std. für die Fähren mit Check-in). Die längsten Reisetage: Brig-Glis–Sète (ca. 7–7,5 Std. plus 1–2 Ladestopps), Bardenas–Montpellier (ca. 7–7,5 Std. plus 2 Ladestopps), Montpellier–Brig-Glis (ca. 6,5–7 Std. plus 1–2 Ladestopps), Formentera–Benidorm (Fähre ca. 2–4,5 Std. und Auto ca. 45 Min.), Benidorm–Granada (ca. 4–4,5 Std.), Porto–Ribadeo (ca. 4–4,5 Std.), Valencia–Ibiza (Auto ca. 1–1,25 Std. und Fähre ca. 2,5 Std.) und Barcelona–Valencia (ca. 3,5 Std.)."
    ],
    [
      "Vorab buchen",
      "Schnorcheltour zu den Medes-Inseln, Autofähren Dénia–Ibiza, Ibiza–Formentera und Formentera–Dénia (im Juli früh buchen, Check-in 60–90 Min. vor Abfahrt), Zufahrtsbewilligung fürs Auto auf Ibiza und Formentera, Unterkünfte auf den Inseln (Hochsaison), Alhambra (im Sommer oft drei Monate im Voraus ausverkauft), Sagrada Família, Oceanogràfic, Caminito del Rey, Terra Mítica oder Aqualandia, Kajaktour an der Algarve, Reservation für die Playa de las Catedrales (gratis, frühestens 30 Tage vorher)."
    ],
    [
      "Auto",
      "Tesla mit Gratis-Supercharging: Die Tesla-Navigation plant die Ladestopps an den Superchargern entlang der Autobahnen in Frankreich, Spanien und Portugal selbst; Ladestopps mit Pausen verbinden. Auf Ibiza und Formentera war kein Supercharger zu finden, dort gibt es öffentliche Ladestationen (Ibiza ca. 173, Formentera ca. 93 Ladepunkte): vor den Fähren voll laden und Unterkünfte mit Lademöglichkeit buchen, auch in den Altstädten. Bei Hitze und Klimaanlage steigt der Verbrauch. Crit’Air-Vignette (grün, Klasse 0) für Frankreich vorab bestellen, Auto für die Umweltzone von Barcelona online registrieren, in Portugal elektronische Maut über EasyToll an der Grenze oder Via Verde. CH-Kleber, Warnwesten für alle und Pannenhilfe-Versicherung mitnehmen. In Städten Parkhaus beim Hotel buchen, keine Wertsachen sichtbar im Auto lassen."
    ],
    [
      "Optional",
      "Cabo de Palos mit den Islas Hormigas (Kajak und Schnorcheln, zwischen Benidorm und Granada), Insel Tabarca (ab Benidorm), PortAventura (Freizeitpark bei Tarragona, auf dem Weg nach Valencia), Peñíscola (Burg am Meer, zwischen Barcelona und Valencia), Montserrat (ab Barcelona), Bootsausflug zur Insel S’Espalmador (ab Formentera), Ronda (bei El Chorro), Córdoba mit der Mezquita (zwischen El Chorro und Sevilla), Benagil-Höhle (Bootstour ab Portimão), Sintra (Abstecher ab Lissabon), Óbidos, Nazaré und Aveiro (zwischen Lissabon und Porto), Douro-Tal (ab Porto), Santiago de Compostela (zwischen Porto und Ribadeo), San Sebastián oder Picos de Europa (statt Bilbao). Bei Abstechern verlängern sich die Fahrtage."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege: mit dem eigenen Auto ab Brig-Glis, zu den Inseln mit der Autofähre. Darunter die Detailkarte.",
    breit: true,
    legende: ["car", "ferry"],
    karten: [
      {datei: "karten/spanien.svg"},
      {titel: "Spanien und Portugal im Detail (Stationen 1 bis 14)", datei: "karten/spanien-detail.svg"}
    ]
  },
  abwechslungIntro: "Städte, Strand und Natur wechseln sich ab: zuerst Schnorcheln bei den Medes-Inseln, dann Barcelona und Valencia, sechs Tage Schnorcheln auf Ibiza und Formentera, danach Freizeitparks, Granada, Strand am Cabo de Gata, der Caminito, Sevilla, die Algarve, Lissabon und Porto. In Andalusien Programm auf Morgen und Abend legen, mittags ist es sehr heiss.",
  abwechslung: [
    [
      "Action und Freizeitparks",
      "Oceanogràfic in Valencia, Terra Mítica und Aqualandia in Benidorm, Caminito del Rey, Schnorcheln und Kajak auf Ibiza und Formentera, Kajak durch die Grotten der Ponta da Piedade; optional PortAventura und Isla Mágica in Sevilla."
    ],
    [
      "Kultur und Geschichte",
      "Sagrada Família und Park Güell in Barcelona, Alhambra in Granada, Alcázar und Kathedrale in Sevilla, Belém in Lissabon, Altstadt von Porto."
    ],
    [
      "Natur und Landschaft",
      "Halbwüste Bardenas Reales, Badlands und Dolmen von Gorafe, Vulkanküste am Cabo de Gata, Schlucht des Caminito del Rey, Felsküste der Algarve, Felsbögen der Playa de las Catedrales."
    ],
    [
      "Strand und Schnorcheln",
      "Schnorcheln an vier Orten mit besonders klarem Wasser: im Meeresschutzgebiet der Medes-Inseln (geführte Bootstour), an der Cala Xarraca, Portinatx, Punta de sa Galera und Cala Comte auf Ibiza, an der Cala Saona, Es Caló und Ses Illetes auf Formentera (Seegraswiesen) und am Cabo de Gata (Los Escullos, La Isleta del Moro, Cala de San Pedro); dazu die Isla de Benidorm oder Tabarca und die Buchten bei Lagos. Im Mittelmeer ist das Wasser im Juli ca. 23–26 °C warm (an der Costa Brava Ende Juni kühler), am Atlantik deutlich kühler."
    ],
    [
      "Mitmachen",
      "Tapas- und Paella-Kurs, Velotour in Sevilla oder Lissabon, Bootstour auf dem Douro in Porto, Surf-Schnupperstunde in Galicien."
    ]
  ],
  stationenIntro: "Fünfzehn Stationen im Wechsel von Städten, Strand und Natur: die Costa Brava mit den Medes-Inseln, Barcelona, Valencia, Ibiza und Formentera, Benidorm, Granada, Cabo de Gata, Caminito del Rey, Sevilla, die Algarve, Lissabon, Porto und der Norden. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Costa Brava (L’Estartit)",
      ersatzsuche: "Estartit|Medes|Costa Brava",
      land: "es",
      region: "Katalonien",
      datum: "19.–21. Juni",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Sète", datum: "18.–19. Juni"},
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
      datum: "21.–23. Juni",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto von L’Estartit über Girona nach Barcelona (ca. 1,75–2 Std., ca. 140 km). Das Auto vorab für die Umweltzone registrieren und im Hotel-Parkhaus abstellen; in der Stadt Metro und zu Fuss.",
      text: "Gaudís Bauten, Altstadtgassen, Strand und eine lebendige Grossstadt. In der Nacht vom 23. auf den 24. Juni feiert die Stadt Sant Joan mit Feuerwerk und Feuern am Strand.",
      teens: "Sagrada Família (Turm), Park Güell, Camp Nou bzw. Barça-Museum, Seilbahn auf den Montjuïc, Strand Barceloneta, Markt La Boqueria.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Sagrada Família und Park Güell, ein Tag Altstadt, Hafen und Strand. Am 21. Juni weiter nach Valencia.",
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
      datum: "23.–25. Juni",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto von Barcelona auf der AP-7 nach Valencia (ca. 3,5 Std., ca. 350 km). Hotel mit Parkhaus oder Ladestation wählen.",
      text: "Drittgrösste Stadt Spaniens mit der futuristischen Stadt der Künste und Wissenschaften, einem langen Stadtstrand und dem grünen Turia-Park im alten Flussbett. Hier kommt die Paella her.",
      teens: "Oceanogràfic (das grösste Aquarium Europas, mit Haien und Belugas), Wissenschaftsmuseum, Velotour durch den Turia-Park, Baden an der Malvarrosa, Paella in der Albufera.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Oceanogràfic und Stadt der Künste, ein halber Tag Altstadt oder Strand.",
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
      name: "Ibiza",
      land: "es",
      region: "Balearen",
      datum: "25.–28. Juni",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto von Valencia nach Dénia (ca. 1–1,25 Std., ca. 105 km), dann Autofähre Dénia–Ibiza (ca. 2,5 Std.); Check-in mit dem Auto ca. 60–90 Min. vor Abfahrt.",
      text: "Ibiza abseits der Partys: Im Norden und Westen liegen felsige Buchten mit sehr klarem Wasser, Seegraswiesen und Fischschwärmen, dazu die Altstadt Dalt Vila und der Felsen Es Vedrà.",
      teens: "Schnorcheln an der Cala Xarraca, bei Portinatx und an den Felsen der Punta de sa Galera, Kajak oder Stand-up-Paddle, Sonnenuntergang an der Cala Comte mit Blick auf die Inselchen, Altstadt Dalt Vila.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, Unterkunft im Norden (z.B. Portinatx) oder Westen (bei Sant Antoni), nah an den Schnorchelplätzen: ein Tag Buchten im Norden, ein Tag Punta de sa Galera und Cala Comte, ein halber Tag Dalt Vila und Es Vedrà.",
        "<strong>Schnorchelplätze:</strong> Cala Xarraca (sehr klares Wasser, viele Fische), Portinatx und Cala d’en Serra im Norden, Punta de sa Galera (Felskante mit Seesternen und Schwämmen) und Cala Comte im Westen. Am Morgen kommen, mittags sind die Buchten voll.",
        "<strong>Auto:</strong> Vom 1. Juni bis 30. September braucht ein Auto ohne Wohnsitz auf Ibiza eine Zufahrtsbewilligung (2026: 1 € pro Tag, Elektroautos ausserhalb des Kontingents); bei Buchung von Hin- und Rückfahrt übernimmt die Reederei das teils. Regeln für 2027 vorab prüfen."
      ],
      ausserdem: "Cala Salada, Hippiemarkt Las Dalias, Salinen von Ses Salines, Santa Eulària.",
      bilder: [
        {
          titel: "Cala Xarraca",
          datei: "Cala Xarraca - panoramio.jpg",
          suche: "Cala Xarraca Ibiza",
          stichwort: "xarraca"
        },
        {
          titel: "Cala Comte",
          datei: "Cala Conta Ibiza 17 May 2011 (2).JPG",
          suche: "Cala Comte Ibiza",
          stichwort: "comte|conta"
        },
        {
          titel: "Portinatx",
          datei: "Cala de Portinatx, Ibiza (1672988340).jpg",
          suche: "Portinatx Ibiza",
          stichwort: "portinatx"
        },
        {
          titel: "Bei der Punta de sa Galera",
          datei: "Cap Nono desde Punta Galera - panoramio.jpg",
          suche: "Punta Galera Ibiza",
          stichwort: "galera"
        },
        {titel: "Es Vedrà", suche: "Es Vedra Ibiza", stichwort: "vedr"},
        {
          titel: "Dalt Vila",
          datei: "Ibiza City Dalt Vila from seaport asv2023-04.jpg",
          suche: "Dalt Vila Ibiza",
          stichwort: "dalt vila"
        }
      ]
    },
    {
      nr: 5,
      name: "Formentera",
      land: "es",
      region: "Balearen",
      datum: "28. Juni–1. Juli",
      naechte: "3 Nächte",
      anreise: "Autofähre Ibiza–La Savina (ca. 30–60 Min., mehrmals täglich).",
      text: "Die kleine Nachbarinsel ist flach, ruhig und für ihr türkisfarbenes Wasser bekannt: Die grossen Seegraswiesen (Posidonia, Unesco-Welterbe) machen das Wasser so klar wie kaum anderswo im Mittelmeer.",
      teens: "Schnorcheln an der Cala Saona und in der Felsbucht Es Caló, Baden an Ses Illetes, Bootsausflug zur Insel S’Espalmador, Velotour durch die Salinen, Leuchtturm La Mola.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Cala Saona und Westküste, ein Tag Es Caló und Leuchtturm La Mola, ein Tag Ses Illetes und S’Espalmador.",
        "<strong>Schnorchelplätze:</strong> Cala Saona und Punta Gavina im Westen, Es Caló im Nordosten (natürliches «Aquarium»), Ses Illetes und S’Espalmador im Norden.",
        "<strong>Auto:</strong> Vom 1. Juni bis 30. September braucht jedes Auto von auswärts eine Bewilligung (formentera.eco); Elektroautos sind von der Gebühr befreit. Regeln für 2027 vorab prüfen.",
        "<strong>Weiterfahrt:</strong> Autofähre Formentera–Dénia direkt (ca. 2 Std., nur wenige Verbindungen pro Tag, Fahrplan prüfen) oder über Ibiza (bis ca. 4,5 Std.)."
      ],
      ausserdem: "Leuchtturm Cap de Barbaria, Salinen, Es Pujols, Markt in Sant Francesc.",
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
      nr: 6,
      name: "Benidorm",
      land: "es",
      region: "Costa Blanca",
      datum: "1.–3. Juli",
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
      nr: 7,
      name: "Granada",
      land: "es",
      region: "Andalusien",
      datum: "3.–6. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto von Benidorm über Alicante, Murcia und Baza nach Granada (ca. 4–4,5 Std., ca. 390 km); die Wüste von Gorafe liegt nahe der Strecke bei Guadix. Das Auto im Hotel-Parkhaus lassen; die Altstadt ist zum Teil gesperrt.",
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
      nr: 8,
      name: "Cabo de Gata",
      land: "es",
      region: "Andalusien",
      datum: "6.–9. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto von Granada über Guadix und Almería nach San José (ca. 2–2,5 Std., ca. 200 km).",
      text: "Naturpark mit Vulkanküste, Halbwüste und den letzten wilden Stränden Andalusiens. Das klare Wasser über Felsen und Seegras ist ideal zum Schnorcheln.",
      teens: "Schnorcheln bei Los Escullos, La Isleta del Moro und an der Cala de San Pedro, Kajak entlang der Vulkanküste, Strände Mónsul und Los Genoveses, Western-Filmkulisse Fort Bravo bei Tabernas.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte in San José oder Las Negras: nach Granada wieder Strand, Schnorcheln und ein ruhiger Tag.",
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
      nr: 9,
      name: "Caminito del Rey (El Chorro)",
      land: "es",
      region: "Andalusien",
      datum: "9.–10. Juli",
      naechte: "1 Nacht",
      anreise: "Mit dem Auto von San José über Almería und die Küstenautobahn A-7 bei Málaga nach El Chorro (ca. 2,5–3 Std., ca. 250 km).",
      text: "Ein Steig hoch über der Schlucht Desfiladero de los Gaitanes, früher einer der gefährlichsten Wege der Welt, heute gut gesichert. Rund um El Chorro liegen Stauseen zum Baden.",
      teens: "Caminito del Rey (ca. 3–4 Std.), am Ankunftsabend Baden und Paddeln im Stausee Conde de Guadalhorce.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Morgen des Sa, 10.07.2027 den Caminito (früher Einlass wegen der Hitze; montags geschlossen), am Nachmittag weiter nach Sevilla.",
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
      nr: 10,
      name: "Sevilla",
      ersatzsuche: "Seville",
      land: "es",
      region: "Andalusien",
      datum: "10.–12. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über Antequera nach Sevilla (ca. 2 Std., ca. 150 km). Hotel mit Parkhaus wählen.",
      text: "Andalusiens Hauptstadt mit Kathedrale, Alcázar, der Plaza de España und Flamenco. Im Juli ist es sehr heiss, das Leben spielt sich am Morgen und am Abend ab.",
      teens: "Alcázar (Drehort von «Game of Thrones»), Plaza de España mit Booten, Setas (Metropol Parasol) mit Dachweg, Flamenco-Show am Abend, Freizeitpark Isla Mágica.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: Alcázar, Kathedrale und Plaza de España am Morgen und Abend, mittags Pause im klimatisierten Hotel oder am Pool.",
        "<strong>Hitze:</strong> Im Juli oft 38–42 °C; viel trinken, Kopfbedeckung, Programm vor 12 und nach 18 Uhr.",
        "<strong>Tickets:</strong> Alcázar und Kathedrale online buchen, sonst lange Schlangen in der Sonne."
      ],
      ausserdem: "Barrio Santa Cruz, Torre del Oro, Triana mit Markt, Park María Luisa. Auf der Anreise: Córdoba mit der Mezquita (Moschee-Kathedrale, Abstecher ab El Chorro).",
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
      nr: 11,
      name: "Algarve (Lagos)",
      land: "pt",
      region: "Portugal",
      datum: "12.–15. Juli",
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
      nr: 12,
      name: "Lissabon",
      ersatzsuche: "Lisbon",
      land: "pt",
      region: "Portugal",
      datum: "15.–17. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto von Lagos über die A2 nach Lissabon (ca. 3–3,5 Std., ca. 300 km, Maut an Zahlstellen).",
      text: "Hügelige Hauptstadt am Tejo mit Strassenbahnen, Aussichtspunkten, Fliesenfassaden und Pastéis de Nata. Nah am Meer und an Sintra.",
      teens: "Oceanário (eines der grössten Aquarien Europas), Strassenbahn 28, Belém mit Turm und Pastéis de Belém, Tagesausflug nach Sintra (Pena-Palast) und ans Cabo da Roca, Surfen in Carcavelos.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt, Belém und Oceanário. Sintra als Abstecher auf der Weiterfahrt nach Porto (ca. 30–45 Min. Umweg).",
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
      nr: 13,
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
      ausserdem: "Torre dos Clérigos, Bahnhof São Bento (Azulejos), Jardins do Palácio de Cristal, Foz do Douro. Auf der Anreise ab Lissabon: Óbidos (ummauertes Dorf), Nazaré (Fischerort mit Klippen), Aveiro und Costa Nova (Kanäle, gestreifte Strandhäuser). Douro-Tal als Tagesausflug.",
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
      nr: 14,
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
      nr: 15,
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
        "<strong>Rückfahrt:</strong> Über Saragossa, Lleida, Girona und Perpignan nach Montpellier (ca. 7–7,5 Std., ca. 720 km), dort übernachten, am nächsten Tag über Lyon und Genf nach Brig-Glis (ca. 6,5–7 Std., ca. 600 km)."
      ],
      ausserdem: "Guggenheim Bilbao, Altstadt von Tudela, Olite (Königspalast), Altstadt von Montpellier (auf der Rückfahrt). Statt Bilbao möglich: San Sebastián (Stadtbucht mit Strand) oder Picos de Europa (Seen von Covadonga, Wanderung am Cares).",
      bilder: [
        {titel: "Castildetierra", suche: "Castildetierra Bardenas Reales", stichwort: "castildetierra"},
        {titel: "Bardena Blanca", suche: "Bardenas Reales", stichwort: "bardena"},
        {titel: "Tafelberge", suche: "Bardenas Reales landscape", stichwort: "bardena"},
        {titel: "Guggenheim Bilbao", suche: "Guggenheim Museum Bilbao", stichwort: "guggenheim"},
        {titel: "Olite", suche: "Olite royal palace", stichwort: "olite"},
        {titel: "Tudela", suche: "Tudela Navarra cathedral|Tudela Navarra", stichwort: "tudela"}
      ]
    }
  ],
  abschluss: "Nach einer Zwischenübernachtung in Montpellier Rückfahrt über Lyon und Genf nach Brig-Glis am Sa, 24.07.2027 (ca. 6,5–7 Std.).",
  budgetIntro: "Mittelklasse inklusive Maut, Fähren, Unterkunft, Verpflegung und Aktivitäten; Laden an Tesla-Superchargern ist gratis, ohne Abnutzung des eigenen Autos. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 36,
    total: "19’050",
    spanne: "14’150–24’750",
    proTag: "ca. 530 CHF pro Tag, ca. 4’750 pro Person",
    posten: [
      [
        "Auto: Maut, Vignetten, Laden unterwegs (ca. 5’950 km)",
        "250–450",
        "350",
        "Supercharging gratis; Maut vor allem in Frankreich und Portugal, Crit’Air-Vignette, Registrierung Umweltzone Barcelona, Zufahrt Ibiza, Laden auf den Inseln und im Hotel, allfällige Blockiergebühren"
      ],
      [
        "Autofähren (Dénia–Ibiza–Formentera–Dénia)",
        "450–850",
        "650",
        "Auto und 4 Personen mit Sitzplätzen; im Juli früh buchen"
      ],
      [
        "Parkieren und lokale Transfers",
        "400–700",
        "550",
        "Hotel-Parkhäuser in Städten, Metro, Taxis, Shuttlebus Cabo de Gata"
      ],
      [
        "Unterkunft (Familienzimmer, Apartment oder 2 Zimmer)",
        "5’900–10’350",
        "7’950",
        "ca. 160–280 CHF pro Nacht; die Inseln im Juli am teuersten"
      ],
      ["Verpflegung (Tapas, Restaurants, Einkauf)", "3’600–6’150", "4’750", "ca. 100–170 CHF pro Tag für 4 Personen"],
      [
        "Aktivitäten und Eintritte",
        "1’850–3’200",
        "2’500",
        "Schnorcheltour Medes-Inseln, Oceanogràfic, Terra Mítica oder Aqualandia, Alhambra, Sagrada Família, Caminito del Rey, Kajak an der Algarve, Bootstouren, Schnorcheln, Oceanário, Museen"
      ],
      [
        "Versicherung, Pannenhilfe, Reiseapotheke",
        "300–700",
        "500",
        "Pannenhilfe-Versicherung fürs Auto, Annullationsschutz, Reiseapotheke"
      ],
      ["Reserve (ca. 10 %)", "1’400–2’350", "1’800", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["Zwischenübernachtung Sète (1)", "250–400"],
      ["1. Costa Brava (2)", "650–1’100"],
      ["2. Barcelona (2)", "750–1’250"],
      ["3. Valencia (2)", "650–1’050"],
      ["4. Ibiza (3)", "1’150–1’900"],
      ["5. Formentera (3)", "1’300–2’200"],
      ["6. Benidorm (2)", "600–1’000"],
      ["7. Granada (3)", "1’050–1’700"],
      ["8. Cabo de Gata (3)", "850–1’450"],
      ["9. Caminito del Rey (1)", "300–500"],
      ["10. Sevilla (2)", "650–1’050"],
      ["11. Algarve (3)", "900–1’500"],
      ["12. Lissabon (2)", "700–1’150"],
      ["13. Porto (2)", "650–1’050"],
      ["14. Playa de las Catedrales (2)", "550–900"],
      ["Zwischenübernachtung Bilbao (1)", "300–450"],
      ["15. Bardenas Reales (1)", "250–400"],
      ["Zwischenübernachtung Montpellier (1)", "250–400"]
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
      "Check-in 60–90 Min. vor Abfahrt, Auto während der Fahrt nicht zugänglich: Badesachen, Snacks und Medikamente ins Handgepäck. Auf den Inseln eng und im Sommer voll; Parkplätze an Stränden früh. Elektroautos werden mitgenommen; Regeln zu Ladestand und Laden an Bord beim Buchen bestätigen. Auf Ibiza und Formentera gibt es keine Supercharger: vorher voll laden, Unterkunft mit Lademöglichkeit wählen."
    ],
    ["Währung und Zahlung", "Euro. Karten werden fast überall akzeptiert, etwas Bargeld für kleine Lokale und Märkte."],
    [
      "Wetter im Juni und Juli",
      "Andalusien im Landesinneren (Sevilla, Granada, Bardenas) oft 35–42 °C, an der Küste 28–32 °C. Lissabon und Porto angenehmer, Galicien und Bilbao 20–25 °C mit Regenschauern. Mittelmeer ca. 23–26 °C, Atlantik ca. 17–20 °C."
    ],
    ["Zeitzonen", "Frankreich und Spanien wie die Schweiz, Portugal eine Stunde früher."],
    [
      "Verkehr",
      "Im Juli sind die französischen Autobahnen an Samstagen sehr voll, vor allem Richtung Süden. Die Rückfahrt am Sa, 24.07.2027 geht Richtung Norden; trotzdem früh starten und die Verkehrsprognose von Bison Futé prüfen. Klimaanlage prüfen lassen, Wasser im Auto, nie Kinder oder Tiere im parkierten Auto lassen."
    ],
    [
      "Gesundheit",
      "Europäische Krankenversicherungskarte (Rückseite der Versichertenkarte) mitnehmen. Sonnenschutz, viel trinken; Hitzschlag ist im Juli die grösste Gefahr. Leitungswasser ist trinkbar, schmeckt aber teils nach Chlor."
    ],
    [
      "Sicherheit",
      "Taschendiebe in Barcelona, Valencia, Sevilla und Lissabon. Aufbrüche an Strandparkplätzen und Aussichtspunkten: nichts sichtbar im Auto lassen."
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
