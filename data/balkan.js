// Reise: Rundreise um die Adria mit dem eigenen Auto ab Brig-Glis
// Kroatien, Montenegro, Albanien und Griechenland, Nachtfähre nach Bari, an der Ostküste Italiens zurück.
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.balkan = {
  titel: "Mit dem Auto rund um die Adria",
  menu: "Adria-Rundreise",
  untertitel: "Fünf Wochen Rundreise ab Brig-Glis: Istrien, Plitvicer Seen, Split, Hvar und Dubrovnik, die Bucht von Kotor, die albanische Riviera, Meteora und Lefkada, dann mit der Fähre nach Apulien und an der Adriaküste Italiens zurück.",
  zeitraum: "Fr, 18.06.2027 bis Sa, 24.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Dubrovnik old town aerial|Dubrovnik old town sea",
    stichwort: "dubrovnik",
    alt: "Altstadt von Dubrovnik mit Stadtmauer am Meer"
  },
  planIntro: "Abfahrt in Brig-Glis am Fr, 18.06.2027, Rückkehr am Sa, 24.07.2027. Alle Strecken mit dem eigenen Elektroauto: über Land bis Griechenland, mit der Nachtfähre nach Bari und an der Adriaküste Italiens zurück. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18. Juni",
    name: "Abfahrt in Brig-Glis",
    info: "Mit dem eigenen Auto über den Simplon Richtung Venedig"
  },
  plan: [
    {
      datum: "18.–19. Juni",
      name: "Zwischenübernachtung Venedig",
      naechte: 1,
      info: "Brig-Glis – Simplon – Mailand – Verona – Venedig-Mestre (ca. 4,75–5,25 Std., ca. 460 km)"
    },
    {datum: "19.–21. Juni", name: "1. Istrien (Rovinj)", naechte: 2, info: "Auto über Triest und Koper (ca. 3 Std., ca. 245 km)"},
    {datum: "21.–23. Juni", name: "2. Plitvicer Seen", naechte: 2, info: "Auto über Rijeka (ca. 2,5–3 Std., ca. 200 km)"},
    {datum: "23.–25. Juni", name: "3. Split", naechte: 2, info: "Auto auf der Autobahn A1 (ca. 2,75–3 Std., ca. 260 km)"},
    {datum: "25.–28. Juni", name: "4. Hvar", naechte: 3, info: "Autofähre Split–Stari Grad (ca. 2 Std.)"},
    {
      datum: "28. Juni–1. Juli",
      name: "5. Dubrovnik",
      naechte: 3,
      info: "Auto nach Sućuraj (ca. 1,5–1,75 Std.), Autofähre Sućuraj–Drvenik (ca. 30 Min.), Auto über die Pelješac-Brücke (ca. 2–2,5 Std.); insgesamt ca. 4–5 Std."
    },
    {
      datum: "1.–3. Juli",
      name: "6. Bucht von Kotor",
      naechte: 2,
      info: "Auto (ca. 1,75–2 Std., ca. 90 km) plus Grenze Kroatien–Montenegro (im Sommer oft 1–3 Std.)"
    },
    {
      datum: "3.–4. Juli",
      name: "Zwischenübernachtung Shkodër",
      naechte: 1,
      info: "Auto über Budva und Bar (ca. 2,5–3 Std., ca. 110 km) plus Grenze Montenegro–Albanien"
    },
    {datum: "4.–6. Juli", name: "7. Berat", naechte: 2, info: "Auto über Tirana (ca. 3,5 Std., ca. 195 km)"},
    {datum: "6.–9. Juli", name: "8. Himarë", naechte: 3, info: "Auto über Vlorë und den Llogara-Pass (ca. 3–3,5 Std., ca. 150 km)"},
    {datum: "9.–11. Juli", name: "9. Ksamil", naechte: 2, info: "Auto auf der Küstenstrasse (ca. 1,5–2 Std., ca. 70 km)"},
    {
      datum: "11.–13. Juli",
      name: "10. Meteora",
      naechte: 2,
      info: "Auto über die Grenze Kakavia und Ioannina (ca. 4–4,5 Std., ca. 270 km) plus Grenze (30 Min. bis 2 Std.), Uhr +1 Std."
    },
    {datum: "13.–16. Juli", name: "11. Lefkada", naechte: 3, info: "Auto über Ioannina und Preveza (ca. 3–3,5 Std., ca. 220 km)"},
    {
      datum: "16.–17. Juli",
      name: "Nachtfähre Igoumenitsa–Bari",
      naechte: 1,
      info: "Auto Lefkada–Igoumenitsa (ca. 1,5–1,75 Std., ca. 110 km), Nachtfähre Igoumenitsa–Bari (ca. 10–12 Std., z.B. Abfahrt 20 Uhr, Ankunft 7:45), Uhr −1 Std."
    },
    {datum: "17.–20. Juli", name: "12. Apulien (Polignano a Mare)", naechte: 3, info: "Auto ab dem Hafen Bari (ca. 40 Min., ca. 35 km)"},
    {datum: "20.–22. Juli", name: "13. Gargano (Vieste)", naechte: 2, info: "Auto über Bari und Foggia (ca. 2,75–3 Std., ca. 215 km)"},
    {datum: "22.–24. Juli", name: "14. Rimini und San Marino", naechte: 2, info: "Auto auf der Adria-Autobahn A14 (ca. 4,5–5 Std., ca. 480 km)"}
  ],
  rueckflug: {
    datum: "24. Juli",
    name: "Ankunft in Brig-Glis",
    info: "Rimini – Bologna – Mailand – Simplon – Brig-Glis (ca. 5,25–5,75 Std., ca. 510 km)"
  },
  planHinweise: [
    [
      "Gesamt",
      "36 Nächte, 14 Stationen, 1 Nacht auf der Fähre und 2 Zwischenübernachtungen (Venedig, Shkodër). Keine Flüge: rund um die Adria mit dem eigenen Elektroauto, dazu zwei kurze Autofähren in Kroatien und die Nachtfähre Igoumenitsa–Bari in der Kabine. Insgesamt ca. 3’800 km Autofahrt und ca. 13–14 Std. auf Fähren, zusammen ca. 67 Std. reine Reisezeit (ca. 53 Std. Auto; die Strassen in Montenegro und Albanien sind langsam). Mit Pausen, Ladestopps, drei Grenzen ausserhalb des Schengen-Raums, Check-in an den Häfen und Sommerstau realistisch ca. 83–89 Std. von Tür zu Tür (ca. 65–70 Std. im Auto inklusive Ladestopps und Grenzen, ca. 17–19 Std. für die Fähren mit Check-in, davon eine Nacht in der Kabine). Die längsten Reisetage: Rimini–Brig-Glis (ca. 5,25–5,75 Std. plus 1–2 Ladestopps), Brig-Glis–Venedig (ca. 4,75–5,25 Std. plus 1 Ladestopp), Gargano–Rimini (ca. 4,5–5 Std.), Hvar–Dubrovnik (ca. 4–5 Std. mit Fähre), Ksamil–Meteora (ca. 4–4,5 Std. plus Grenze), Shkodër–Berat (ca. 3,5 Std.)."
    ],
    [
      "Vorab buchen",
      "Nachtfähre Igoumenitsa–Bari mit Kabine (im Sommer früh, Autoplätze sind begrenzt), Plitvicer Seen (Tickets mit Zeitfenster, im Sommer oft ausverkauft), Unterkünfte auf Hvar und in Dubrovnik (Hochsaison), Stadtmauer Dubrovnik, Bootstouren zu den Pakleni-Inseln, ab Lefkada und zu den Grotten am Gargano, Unterkünfte in Apulien (Juli ist Ferienzeit in Italien)."
    ],
    [
      "Auto und Laden",
      "Tesla mit Gratis-Supercharging: Supercharger gibt es in Italien, Slowenien, Kroatien (z.B. Split, Vrgorac) und Griechenland (z.B. Ioannina), in Montenegro und Albanien keine. Zwischen Vrgorac und Ioannina (ca. 750 km mit Abstechern) an öffentlichen Schnellladern (z.B. Vlorë, Sarandë, 60–180 kW, kostenpflichtig) und über Nacht in Unterkünften mit Ladestation laden; diese gezielt buchen. Auf griechischen Fähren dürfen Elektroautos höchstens 40 % Akkuladung haben, Laden an Bord ist verboten: vor Igoumenitsa nicht voll laden. Grüne Versicherungskarte für Montenegro und Albanien bei der eigenen Versicherung bestätigen lassen. Slowenische E-Vignette für das kurze Stück bei Koper (2026: 16 € für 7 Tage). Kroatien stellt ab 1. März 2027 auf elektronische Maut ohne Zahlstellen um (Kennzeichen online registrieren), Italien und Griechenland haben Zahlstellen."
    ],
    [
      "Optional",
      "Pula mit dem römischen Amphitheater (ab Rovinj), Opatija und die Insel Krk (zwischen Istrien und Plitvice), Nationalpark Krka (Abstecher zwischen Plitvice und Split), Mljet oder Korčula (statt Hvar), Budva und Sveti Stefan (zwischen Kotor und Shkodër), Koman-See (eine Nacht mehr in Shkodër), Tirana mit Bunk’Art, Gjirokastër (zwischen Ksamil und der Grenze), Ioannina mit dem See, Athen und der Peloponnes (vier bis fünf Nächte mehr, dafür z.B. Italien kürzer), Lecce und Otranto (südlich von Polignano), Trabocchi-Küste in den Abruzzen (zwischen Gargano und Rimini), Ravenna mit den Mosaiken. Bei Abstechern verlängern sich die Fahrtage."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege: mit dem eigenen Auto ab Brig-Glis rund um die Adria, zu den Inseln und nach Italien mit der Fähre. Darunter die Detailkarte.",
    breit: true,
    legende: ["car", "ferry"],
    karten: [
      {datei: "karten/balkan.svg"},
      {titel: "Rund um die Adria im Detail (Stationen 1 bis 14)", datei: "karten/balkan-detail.svg"}
    ]
  },
  abwechslungIntro: "Altstädte, Strand und Natur wechseln sich ab: Istrien, die Plitvicer Seen, Split, Hvar und Dubrovnik, die Bucht von Kotor, dann Albanien mit Berat und fünf Nächten an der Riviera, Meteora und Lefkada, zum Schluss Apulien, der Gargano und Rimini.",
  abwechslung: [
    [
      "Action und Abenteuer",
      "Holzstege über die Plitvicer Seen, Kajak um die Stadtmauer von Dubrovnik, Aufstieg zur Festung von Kotor, Llogara-Pass, Schnorcheln, Bootsfahrt in die Meeresgrotten am Gargano, Freizeit- und Wasserparks bei Rimini (z.B. Mirabilandia, Aquafan)."
    ],
    [
      "Kultur und Geschichte",
      "Rovinj, Diokletianpalast in Split, Altstadt von Dubrovnik, Kotor, Berat und Butrint (alle Unesco-Welterbe), Klöster von Meteora, die Trulli von Alberobello und die Höhlenstadt Matera, San Marino."
    ],
    [
      "Natur und Landschaft",
      "Plitvicer Seen, Pakleni-Inseln, Bucht von Kotor, die Steilküste der albanischen Riviera, die Quelle Syri i Kaltër, die Felstürme von Meteora, die Klippen von Lefkada und des Gargano mit dem Wald Foresta Umbra."
    ],
    [
      "Strand und Schnorcheln",
      "Pakleni-Inseln bei Hvar, die Buchten bei Himarë (Gjipe, Livadhi), die Inselchen vor Ksamil, die Westküste von Lefkada und die Buchten am Gargano: sehr klares Wasser über Fels und Seegras, im Juli ca. 24–26 °C; keine Korallen. Die Strände sind im Juli voll, früh kommen."
    ],
    [
      "Mitmachen",
      "Trüffelsuche oder Olivenöl-Degustation in Istrien, Kochkurs auf Hvar, Byrek backen in Berat, Orecchiette-Kurs in Apulien, Velotour am Strand von Rimini."
    ]
  ],
  stationenIntro: "Vierzehn Stationen rund um die Adria: Istrien, die Plitvicer Seen, Split, Hvar, Dubrovnik, Kotor, Berat, Himarë, Ksamil, Meteora, Lefkada, Apulien, der Gargano und Rimini. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Istrien (Rovinj)",
      ersatzsuche: "Rovinj|Istria",
      land: "hr",
      region: "Istrien",
      datum: "19.–21. Juni",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto ab Brig-Glis über den Simplon, Mailand und Verona nach Venedig-Mestre (ca. 4,75–5,25 Std., ca. 460 km, Maut in Italien), dort übernachten und am Abend mit Bus oder Zug nach Venedig. Am nächsten Tag über Triest und Koper (Slowenien, E-Vignette) nach Rovinj (ca. 3 Std., ca. 245 km). Slowenien und Kroatien sind im Schengen-Raum, Uhr ohne Zeitverschiebung.",
      text: "Venezianisch geprägte Altstadt auf einer Halbinsel, mit bunten Häusern über dem Meer und der Kirche der heiligen Euphemia ganz oben. Rundherum liegen Felsbuchten, Pinienwälder und kleine Inseln.",
      teens: "Baden und Schnorcheln im Waldpark Zlatni Rt, Bootsausflug zu den Inseln vor Rovinj oder in den Limski-Fjord, Kajak, Glockenturm der Euphemia-Kirche, Velotour an der Küste.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt und Zlatni Rt, ein Tag Boot oder Ausflug nach Pula (ca. 45 Min.).",
        "<strong>Venedig:</strong> Mit dem Auto nicht in die Altstadt; Hotel mit Parkplatz und Ladestation in Mestre, dann ca. 10 Min. mit Bus oder Zug. Venedig verlangt an einzelnen Tagen ein Eintrittsgeld für Tagesbesucher: Regeln für 2027 prüfen.",
        "<strong>Auto:</strong> Die Altstadt von Rovinj ist autofrei; Unterkunft mit Parkplatz ausserhalb wählen."
      ],
      ausserdem: "Pula mit Amphitheater, Poreč mit der Euphrasius-Basilika (Unesco), Motovun im Hinterland, Brijuni-Nationalpark.",
      bilder: [
        {titel: "Altstadt von Rovinj", suche: "Rovinj old town", stichwort: "rovinj"},
        {titel: "Euphemia-Kirche", suche: "Church of St Euphemia Rovinj", stichwort: "euphemia|rovinj"},
        {titel: "Zlatni Rt", suche: "Zlatni Rt Rovinj", stichwort: "zlatni|golden cape"},
        {titel: "Limski-Fjord", suche: "Lim fjord Istria|Limski kanal", stichwort: "lim"},
        {titel: "Amphitheater von Pula", suche: "Pula Arena amphitheatre", stichwort: "pula|arena"},
        {titel: "Venedig", suche: "Venice Grand Canal", stichwort: "venice|venezia"}
      ],
      zwischenstopp: {text: "Zwischenübernachtung in Venedig-Mestre", datum: "18.–19. Juni"}
    },
    {
      nr: 2,
      name: "Plitvicer Seen",
      ersatzsuche: "Plitvice",
      land: "hr",
      region: "Lika",
      datum: "21.–23. Juni",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über Rijeka und das Hochland der Lika zu den Plitvicer Seen (ca. 2,5–3 Std., ca. 200 km).",
      text: "Sechzehn türkisfarbene Seen sind über Kalksinterstufen und Wasserfälle miteinander verbunden. Holzstege führen direkt über das Wasser; der Nationalpark ist Unesco-Welterbe.",
      teens: "Rundweg über die Holzstege zu den grossen Wasserfällen (Veliki slap), Elektroboot über den Kozjak-See, Panoramazug, Wanderung durch den Buchenwald am Nachmittag.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in einer Unterkunft beim Park: am Ankunftstag der Nachmittag, am nächsten Tag ab Öffnung durch den Park, bevor die Busse kommen.",
        "<strong>Tickets:</strong> Im Sommer 2026 40 € für Erwachsene und 15 € für Kids von 7 bis 18 Jahren (nach 16 Uhr günstiger), nur online mit Zeitfenster und Kontingent pro Stunde. Baden ist verboten.",
        "<strong>Wetter:</strong> Im Hochland angenehm kühl (ca. 22–26 °C), eine Jacke für den Abend mitnehmen."
      ],
      ausserdem: "Rastoke (Dorf mit Mühlen über Wasserfällen, ca. 30 Min.), Höhle Barać, Nationalpark Krka (Abstecher auf dem Weg nach Split).",
      bilder: [
        {titel: "Seen und Wasserfälle", suche: "Plitvice Lakes", stichwort: "plitvice"},
        {titel: "Holzstege", suche: "Plitvice boardwalk", stichwort: "plitvice"},
        {titel: "Veliki slap", suche: "Veliki slap Plitvice waterfall", stichwort: "veliki slap|plitvice"},
        {titel: "Kozjak-See", suche: "Kozjak lake Plitvice", stichwort: "kozjak|plitvice"},
        {titel: "Rastoke", suche: "Rastoke Slunj", stichwort: "rastoke"},
        {titel: "Krka", suche: "Krka waterfalls Skradinski buk|Krka National Park", stichwort: "krka|skradinski"}
      ]
    },
    {
      nr: 3,
      name: "Split",
      land: "hr",
      region: "Dalmatien",
      datum: "23.–25. Juni",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto auf der Autobahn A1 durch den Sveti-Rok-Tunnel nach Split (ca. 2,75–3 Std., ca. 260 km, Maut). Abstecher zum Nationalpark Krka (ca. 30 Min. Umweg, Baden beim Wasserfall Skradinski buk ist seit 2021 verboten).",
      text: "Die Altstadt steht mitten in den Mauern des römischen Kaiserpalasts von Diokletian. Davor liegt die Uferpromenade Riva, im Westen der grüne Hügel Marjan mit Badebuchten.",
      teens: "Diokletianpalast mit den Kellern (Drehort von «Game of Thrones»), Aufstieg auf den Glockenturm, Marjan mit Velo oder zu Fuss, Baden in Bačvice.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt und Marjan, ein halber Tag Strand oder Trogir (Unesco-Altstadt, ca. 30 Min.).",
        "<strong>Auto:</strong> Unterkunft mit Parkplatz oder Parkhaus wählen, die Altstadt ist autofrei. Supercharger in Split.",
        "<strong>Weiterfahrt:</strong> Fährticket nach Stari Grad vorab online kaufen."
      ],
      ausserdem: "Kathedrale des heiligen Domnius, Peristyl, Fischmarkt, Festung Klis über Split.",
      bilder: [
        {titel: "Diokletianpalast", suche: "Diocletian's Palace Split", stichwort: "diocletian"},
        {titel: "Riva", suche: "Split Riva promenade", stichwort: "riva"},
        {titel: "Marjan", suche: "Marjan hill Split", stichwort: "marjan"},
        {titel: "Kathedrale", suche: "Cathedral of Saint Domnius Split", stichwort: "domnius"},
        {titel: "Bačvice", suche: "Bacvice beach Split", stichwort: "bacvice|bačvice"},
        {titel: "Trogir", suche: "Trogir old town", stichwort: "trogir"}
      ]
    },
    {
      nr: 4,
      name: "Hvar",
      land: "hr",
      region: "Dalmatinische Inseln",
      datum: "25.–28. Juni",
      naechte: "3 Nächte",
      anreise: "Autofähre Split–Stari Grad (ca. 2 Std., im Sommer mehrmals täglich); Check-in mit dem Auto ca. 1 Std. vor Abfahrt.",
      text: "Sonnige Insel mit Lavendelfeldern, Weinbergen und der Stadt Hvar unter einer Festung. Vor der Stadt liegen die Pakleni-Inseln mit kleinen Buchten und sehr klarem Wasser.",
      teens: "Bootstour oder Wassertaxi zu den Pakleni-Inseln mit Schnorcheln, Kajak, Aufstieg zur Festung Fortica, Sonnenuntergang über dem Hafen, Baden an der Bucht Dubovica.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, Unterkunft in Stari Grad oder Jelsa (ruhiger und günstiger als Hvar-Stadt): ein Tag Pakleni-Inseln, ein Tag Hvar-Stadt und Festung, ein Tag Strand.",
        "<strong>Schnorchelplätze:</strong> Pakleni-Inseln (Palmižana, Ždrilca), Dubovica, Buchten bei Jelsa. Felsen und Seegras, viele kleine Fische, keine Korallen.",
        "<strong>Hinweis:</strong> In Hvar-Stadt gibt es im Sommer Partytourismus; tagsüber ist die Stadt familientauglich."
      ],
      ausserdem: "Altstadt von Stari Grad mit der Ebene von Stari Grad (Unesco), Vrboska, Lavendelfelder bei Velo Grablje, Weingüter.",
      bilder: [
        {titel: "Pakleni-Inseln", suche: "Pakleni islands Hvar", stichwort: "pakleni"},
        {titel: "Hvar-Stadt", suche: "Hvar town harbour", stichwort: "hvar"},
        {titel: "Festung Fortica", suche: "Fortica fortress Hvar", stichwort: "fortica|fortress"},
        {titel: "Stari Grad", suche: "Stari Grad Hvar", stichwort: "stari grad"},
        {titel: "Lavendel", suche: "Hvar lavender field", stichwort: "lavender"},
        {titel: "Dubovica", suche: "Dubovica beach Hvar", stichwort: "dubovica"}
      ]
    },
    {
      nr: 5,
      name: "Dubrovnik",
      land: "hr",
      region: "Süddalmatien",
      datum: "28. Juni–1. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto von Stari Grad nach Sućuraj an der Ostspitze der Insel (ca. 1,5–1,75 Std., ca. 75 km, schmale Strasse), Autofähre Sućuraj–Drvenik (ca. 30 Min., im Sommer Warteschlangen, früh fahren), dann über die Pelješac-Brücke nach Dubrovnik (ca. 2–2,5 Std., ca. 130 km). Seit der Brücke führt die Strecke nicht mehr durch Bosnien und Herzegowina. Laden am Supercharger Vrgorac (kleiner Umweg).",
      text: "Die Altstadt mit ihrer fast 2 km langen Stadtmauer ist das bekannteste Bild Kroatiens. Davor liegt die Insel Lokrum, darüber der Berg Srđ mit Seilbahn.",
      teens: "Rundgang auf der Stadtmauer, Seekajak um die Mauern und zur Insel Lokrum, Seilbahn auf den Srđ, Drehorte von «Game of Thrones» (Lovrijenac, Jesuitentreppe), Baden an der Felsbar Buža.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Altstadt und Stadtmauer (am Morgen), ein Tag Kajak und Lokrum, ein Tag Strand oder Seilbahn.",
        "<strong>Stadtmauer:</strong> 2026 ca. 40 € für Erwachsene, 15 € für Kids von 7 bis 18 Jahren; früh am Morgen oder am Abend gehen, es gibt kaum Schatten.",
        "<strong>Auto:</strong> Die Altstadt ist autofrei, Parkplätze sind knapp und teuer: Unterkunft mit Parkplatz (z.B. in Lapad) wählen und mit dem Bus fahren. Kein Supercharger, einzelne Hotels haben Tesla-Ladestationen."
      ],
      ausserdem: "Kloster der Franziskaner mit alter Apotheke, Strand Banje, Cavtat (Ausflug mit dem Boot), Ston mit der langen Mauer (auf der Anreise).",
      bilder: [
        {titel: "Stadtmauer", suche: "Dubrovnik city walls", stichwort: "wall"},
        {titel: "Stradun", suche: "Stradun Dubrovnik", stichwort: "stradun"},
        {titel: "Lokrum", suche: "Lokrum island Dubrovnik", stichwort: "lokrum"},
        {titel: "Fort Lovrijenac", suche: "Fort Lovrijenac Dubrovnik", stichwort: "lovrijenac"},
        {titel: "Seekajak", suche: "Dubrovnik sea kayaking", stichwort: "kayak"},
        {titel: "Seilbahn auf den Srđ", suche: "Dubrovnik cable car Srd", stichwort: "cable car|srd|srđ"}
      ]
    },
    {
      nr: 6,
      name: "Bucht von Kotor",
      ersatzsuche: "Kotor",
      land: "me",
      region: "Montenegro",
      datum: "1.–3. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über die Grenze Karasovići–Debeli Brijeg nach Kotor (ca. 1,75–2 Std., ca. 90 km). Montenegro ist nicht im Schengen-Raum: Passkontrolle in beiden Richtungen, im Sommer oft 1–3 Std. Wartezeit, an Wochenenden auch mehr; vor 7:30 Uhr oder nach 16 Uhr fahren.",
      text: "Die Bucht reicht wie ein Fjord tief ins Gebirge. Kotor hat eine mittelalterliche Altstadt, deren Festungsmauern steil den Berg hinauflaufen; gegenüber liegt das Barockdorf Perast mit zwei Inselchen.",
      teens: "Aufstieg über die Festungsmauer zur Burg San Giovanni (ca. 1’350 Stufen, am frühen Morgen), Boot von Perast zur Insel Unsere Liebe Frau vom Felsen, Baden in der Bucht, Serpentinenstrasse zum Nationalpark Lovćen mit dem Njegoš-Mausoleum.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte, Unterkunft in Dobrota, Prčanj oder Perast (ruhiger als die Altstadt): ein Tag Kotor und Festung, ein Tag Perast und Lovćen.",
        "<strong>Einreise:</strong> Für Schweizer Bürgerinnen und Bürger gilt das neue Einreise- und Ausreisesystem EES nicht. Pass oder Identitätskarte mitnehmen, Gültigkeit vor Abreise beim EDA prüfen.",
        "<strong>Auto:</strong> Kein Supercharger in Montenegro: in Kroatien voll laden, in der Unterkunft über Nacht laden. In der Altstadt kein Verkehr, an Tagen mit Kreuzfahrtschiffen ist es eng."
      ],
      ausserdem: "Herceg Novi, Kirche des heiligen Tryphon, Budva und Sveti Stefan (auf der Weiterfahrt), Halbinsel Luštica.",
      bilder: [
        {titel: "Altstadt von Kotor", suche: "Kotor old town", stichwort: "kotor"},
        {titel: "Festung San Giovanni", suche: "Kotor fortress San Giovanni|Kotor fortress view", stichwort: "fortress|giovanni"},
        {titel: "Perast", suche: "Perast Montenegro", stichwort: "perast"},
        {titel: "Unsere Liebe Frau vom Felsen", suche: "Our Lady of the Rocks Perast", stichwort: "lady of the rocks|gospa"},
        {titel: "Bucht", suche: "Bay of Kotor", stichwort: "bay of kotor|boka|kotor"},
        {titel: "Lovćen", suche: "Lovcen National Park Njegos mausoleum", stichwort: "lovcen|lovćen|njego"}
      ]
    },
    {
      nr: 7,
      name: "Berat",
      land: "al",
      region: "Mittelalbanien",
      datum: "4.–6. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto entlang der Küste über Budva, Bar und Ulcinj und über die Grenze Sukobin–Muriqan nach Shkodër (ca. 2,5–3 Std., ca. 110 km, dazu Grenze), dort übernachten und am Abend zur Burg Rozafa über dem Shkodra-See. Am nächsten Tag über Tirana und Fier nach Berat (ca. 3,5 Std., ca. 195 km). Albanien ist nicht im Schengen-Raum, keine Vignette. In Albanien wird oft forsch gefahren: defensiv fahren, nachts Landstrassen meiden.",
      text: "Die «Stadt der tausend Fenster»: Osmanische Häuser ziehen sich den Hang hinauf, oben liegt eine bewohnte Burg mit Kirchen und Ikonen. Berat ist Unesco-Welterbe.",
      teens: "Burg mit Aussicht über das Tal, Ikonenmuseum Onufri, Abendspaziergang auf dem Boulevard, Ausflug in die Osum-Schlucht mit Bogove-Wasserfall.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Altstadt und Burg (am Morgen und Abend), ein Tag Osum-Schlucht oder Bogove.",
        "<strong>Osum-Schlucht:</strong> Ca. 1,5 Std. ab Berat; Rafting gibt es vor allem im Frühling, im Juli führt der Fluss oft wenig Wasser: dann Aussichtspunkte und Baden. Vorab prüfen.",
        "<strong>Laden:</strong> In Albanien gibt es keine Tesla-Supercharger. Unterkünfte mit Ladestation wählen; öffentliche Schnellader gibt es vor allem in Tirana, Durrës, Vlorë und Sarandë."
      ],
      ausserdem: "Gorica-Brücke und Quartier Gorica, Mangalem, Burg Rozafa in Shkodër (bei der Zwischenübernachtung), Koman-See (eine Nacht mehr in Shkodër), Apollonia (antike Stadt bei Fier).",
      bilder: [
        {titel: "Mangalem", suche: "Berat Mangalem houses", stichwort: "berat|mangalem"},
        {titel: "Burg", suche: "Berat castle Albania", stichwort: "castle|kala"},
        {titel: "Gorica-Brücke", suche: "Gorica bridge Berat", stichwort: "gorica"},
        {titel: "Osum-Schlucht", suche: "Osumi canyon Albania", stichwort: "osum"},
        {titel: "Burg Rozafa in Shkodër", suche: "Rozafa Castle Shkoder", stichwort: "rozafa"},
        {titel: "Bogove-Wasserfall", suche: "Bogove waterfall Albania", stichwort: "bogov"}
      ],
      zwischenstopp: {text: "Zwischenübernachtung in Shkodër", datum: "3.–4. Juli"}
    },
    {
      nr: 8,
      name: "Himarë",
      land: "al",
      region: "Albanische Riviera",
      datum: "6.–9. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto über Fier und Vlorë an die Küste und über den Llogara-Pass (1’027 m) oder durch den neuen Llogara-Tunnel nach Himarë (ca. 3–3,5 Std., ca. 150 km). In Vlorë Schnelllader (bis 180 kW) für einen Ladestopp.",
      text: "Die Küstenstrasse windet sich nach dem Pass an steilen Hängen entlang zu Buchten mit sehr klarem, türkisfarbenem Wasser. Himarë ist ein ruhigerer Badeort mit Burg und mehreren Stränden in der Nähe.",
      teens: "Wanderung in die Schlucht und zum Strand Gjipe (ca. 30 Min. zu Fuss), Schnorcheln in den Buchten, Bootsausflug zu Höhlen und Stränden, Burg von Porto Palermo, Aussicht vom Llogara-Pass.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: Strand und Schnorcheln, ein Tag Gjipe, ein Tag Bootsausflug oder Porto Palermo.",
        "<strong>Strände:</strong> Livadhi und Potami in Himarë, Gjipe und Jala bei Dhërmi; Kieselstrände, Badeschuhe mitnehmen. Im Juli voll, früh kommen.",
        "<strong>Laden:</strong> In Himarë und Dhërmi gibt es vor allem langsame Ladestationen: Unterkunft mit Ladestation buchen, Schnelllader in Vlorë, Lukovë und Sarandë."
      ],
      ausserdem: "Dhërmi, Drymades, Borsh mit langem Strand und Olivenhainen, Qeparo (altes Bergdorf).",
      bilder: [
        {titel: "Gjipe", suche: "Gjipe beach Albania", stichwort: "gjipe"},
        {titel: "Livadhi", suche: "Livadhi beach Himare", stichwort: "livadh"},
        {titel: "Llogara-Pass", suche: "Llogara pass Albania", stichwort: "llogara"},
        {titel: "Dhërmi", suche: "Dhermi beach Albania", stichwort: "dhermi|dhërmi"},
        {titel: "Porto Palermo", suche: "Porto Palermo castle Albania", stichwort: "palermo"},
        {titel: "Himarë", suche: "Himare Albania coast", stichwort: "himar"}
      ]
    },
    {
      nr: 9,
      name: "Ksamil",
      ersatzsuche: "Ksamil|Saranda|Butrint",
      land: "al",
      region: "Albanische Riviera",
      datum: "9.–11. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto auf der Küstenstrasse über Borsh und Lukovë nach Sarandë und Ksamil (ca. 1,5–2 Std., ca. 70 km; im Juli wegen Verkehr eher 2–2,5 Std.). Schmal und kurvig, nur bei Tageslicht fahren.",
      text: "Kleine Inseln, weisser Sand und sehr klares Wasser direkt vor der Küste, dazu die antike Stadt Butrint im Naturpark. Ksamil ist der bekannteste Badeort Albaniens und im Juli sehr voll.",
      teens: "Schnorcheln und mit dem Pedalo oder Kajak zu den Inselchen, Butrint mit Theater und Ruinen im Wald, Baden in der eiskalten Quelle Syri i Kaltër (Blaues Auge), Sonnenuntergang in Sarandë.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Strand und Schnorcheln, ein Tag Butrint am Morgen und Syri i Kaltër am Nachmittag.",
        "<strong>Strände:</strong> Viele Strände sind mit Liegen belegt, die man mietet. Ruhigere Buchten am frühen Morgen oder auf den Inseln.",
        "<strong>Laden:</strong> In Ksamil kaum Ladestationen: in Sarandë laden. Vor der Weiterfahrt nach Griechenland voll laden, der nächste Supercharger ist in Ioannina (ca. 2,5 Std.)."
      ],
      ausserdem: "Burg Lëkurësi über Sarandë, Kloster der 40 Heiligen, Gjirokastër (Steinstadt, Unesco, auf der Weiterfahrt), Korfu (Fähre ab Sarandë, ohne Auto).",
      bilder: [
        {titel: "Inseln von Ksamil", suche: "Ksamil islands beach", stichwort: "ksamil"},
        {titel: "Butrint", suche: "Butrint ancient theatre", stichwort: "butrint"},
        {titel: "Syri i Kaltër", suche: "Blue Eye spring Albania|Syri i Kalter", stichwort: "blue eye|syri"},
        {titel: "Sarandë", suche: "Saranda Albania promenade", stichwort: "sarand"},
        {titel: "Gjirokastër", suche: "Gjirokaster old town", stichwort: "gjirokast"},
        {titel: "Burg Lëkurësi", suche: "Lekuresi castle Saranda", stichwort: "lekures|lëkurës"}
      ]
    },
    {
      nr: 10,
      name: "Meteora",
      ersatzsuche: "Meteora|Kalambaka",
      land: "gr",
      region: "Thessalien",
      datum: "11.–13. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über die Grenze Kakavia, Ioannina und die Autobahn durch das Pindos-Gebirge nach Kalambaka (ca. 4–4,5 Std., ca. 270 km). Grenze Albanien–Griechenland: meist 20–40 Min., an Sommerwochenenden 1–2 Std.; vor 9 Uhr fahren. In Griechenland ist es eine Stunde später. Supercharger in Ioannina.",
      text: "Mittelalterliche Klöster stehen auf senkrechten Sandsteintürmen hoch über dem Tal. Sechs sind bewohnt und zu besuchen, die Landschaft ist Unesco-Welterbe.",
      teens: "Klöster Megalo Meteoro und Varlaam mit Treppen und Seilaufzügen, Wanderung auf alten Mönchspfaden, Sonnenuntergang an den Felsen, Höhlen der Einsiedler.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in Kalambaka oder Kastraki: ein Tag Klöster am Morgen, Sonnenuntergang am Abend.",
        "<strong>Klöster:</strong> Kleiner Eintritt pro Kloster; jedes hat einen Ruhetag. Lange Hosen bzw. Rock über die Knie und bedeckte Schultern.",
        "<strong>Hitze:</strong> Im Juli oft über 35 °C; die Treppen am Morgen gehen."
      ],
      ausserdem: "Kloster Roussanou und Agios Stefanos, Kastraki, Metsovo (Bergdorf an der Strecke), Ioannina mit See und Burg (auf der Anreise).",
      bilder: [
        {titel: "Klöster auf den Felsen", suche: "Meteora monasteries", stichwort: "meteora"},
        {titel: "Varlaam", suche: "Varlaam monastery Meteora", stichwort: "varlaam"},
        {titel: "Roussanou", suche: "Roussanou monastery Meteora", stichwort: "roussanou|rousanou"},
        {titel: "Sonnenuntergang", suche: "Meteora sunset", stichwort: "meteora"},
        {titel: "Kalambaka", suche: "Kalambaka Meteora rocks", stichwort: "kalambaka|kalabaka"},
        {titel: "Metsovo", suche: "Metsovo village Greece", stichwort: "metsovo"}
      ]
    },
    {
      nr: 11,
      name: "Lefkada",
      land: "gr",
      region: "Ionische Inseln",
      datum: "13.–16. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto zurück über Ioannina und auf der Autobahn Ionia Odos nach Preveza und durch den Unterwassertunnel nach Lefkada (ca. 3–3,5 Std., ca. 220 km). Lefkada ist mit einer Drehbrücke mit dem Festland verbunden, keine Fähre nötig.",
      text: "Die Westküste hat einige der bekanntesten Strände Griechenlands: helle Kalkklippen und leuchtend türkisfarbenes Wasser. Im Osten liegen ruhige Buchten und kleine Inseln für Bootsausflüge.",
      teens: "Porto Katsiki und Egremni (lange Treppen hinunter), Schnorcheln an den Felsen, Bootsausflug zu den Inseln Meganisi und Skorpios, Wasserfall von Dimosari bei Nydri, Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, Unterkunft in Agios Nikitas oder Nydri: ein Tag Strände im Westen, ein Tag Bootsausflug, ein ruhiger Tag vor der Fähre.",
        "<strong>Strände:</strong> Auf der Westseite oft Wellen und Wind am Nachmittag, dann auf die Ostseite ausweichen; Parkplätze an den bekannten Stränden sind früh voll.",
        "<strong>Fähre:</strong> Am 16. Juli nach Igoumenitsa (ca. 1,5–1,75 Std.), Nachtfähre nach Bari. Das Elektroauto darf beim Einschiffen höchstens 40 % Akkuladung haben."
      ],
      ausserdem: "Lefkada-Stadt mit Lagune, Kathisma, Mylos, Kap Lefkatas mit Leuchtturm, Parga (zwischen Lefkada und Igoumenitsa, Abstecher).",
      bilder: [
        {titel: "Porto Katsiki", suche: "Porto Katsiki Lefkada", stichwort: "katsiki"},
        {titel: "Egremni", suche: "Egremni beach Lefkada", stichwort: "egremni"},
        {titel: "Kathisma", suche: "Kathisma beach Lefkada", stichwort: "kathisma"},
        {titel: "Agios Nikitas", suche: "Agios Nikitas Lefkada", stichwort: "nikitas"},
        {titel: "Nydri und die Inseln", suche: "Nidri Lefkada|Nydri Lefkada", stichwort: "nidri|nydri"},
        {titel: "Wasserfall von Dimosari", suche: "Dimosari waterfall Lefkada", stichwort: "dimosari"}
      ]
    },
    {
      nr: 12,
      name: "Apulien (Polignano a Mare)",
      ersatzsuche: "Polignano|Puglia|Apulia",
      land: "it",
      region: "Apulien",
      datum: "17.–20. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto nach Igoumenitsa und auf die Nachtfähre nach Bari (ca. 10–12 Std., z.B. Abfahrt 20 Uhr, Ankunft 7:45; mehrere Abfahrten pro Tag, Fahrplan 2027 prüfen); Check-in mit dem Auto ca. 2–4 Std. vor Abfahrt. In Italien ist es eine Stunde früher. Vom Hafen Bari nach Polignano a Mare (ca. 40 Min., ca. 35 km), am ersten Supercharger in Apulien laden.",
      text: "Weisse Altstadt auf Kalkfelsen über dem Meer, mit Grotten und der Badebucht Lama Monachile mitten im Ort. Von hier sind die Trulli von Alberobello und die Höhlenstadt Matera gut zu erreichen.",
      teens: "Baden in der Felsbucht Lama Monachile, Bootstour zu den Meeresgrotten, die Trulli von Alberobello, die Höhlenwohnungen (Sassi) in Matera, Tropfsteinhöhle Grotte di Castellana, Gelato in Monopoli.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, Unterkunft in Polignano oder Monopoli: ein Tag Ankunft und Meer, ein Tag Alberobello und Grotte di Castellana, ein Tag Matera (ca. 1–1,25 Std. pro Weg).",
        "<strong>Unesco:</strong> Die Trulli von Alberobello und die Sassi von Matera sind beide Unesco-Welterbe. In Matera am Morgen oder Abend, mittags ist es sehr heiss.",
        "<strong>Auto:</strong> Die Altstädte haben Zonen mit beschränktem Verkehr (ZTL), Einfahrt nur mit Bewilligung: ausserhalb parkieren."
      ],
      ausserdem: "Monopoli mit Hafen, Ostuni (weisse Stadt), Lecce und Otranto im Süden (Abstecher), Castel del Monte (Unesco, auf der Weiterfahrt), Bari-Altstadt.",
      bilder: [
        {titel: "Polignano a Mare", suche: "Polignano a Mare", stichwort: "polignano"},
        {titel: "Lama Monachile", suche: "Lama Monachile beach Polignano", stichwort: "monachile|polignano"},
        {titel: "Trulli von Alberobello", suche: "Alberobello trulli", stichwort: "alberobello|trulli"},
        {titel: "Matera", suche: "Matera Sassi", stichwort: "matera|sassi"},
        {titel: "Monopoli", suche: "Monopoli Puglia harbour", stichwort: "monopoli"},
        {titel: "Grotte di Castellana", suche: "Grotte di Castellana", stichwort: "castellana"}
      ],
      zwischenstopp: {text: "Nachtfähre Igoumenitsa–Bari", datum: "16.–17. Juli"}
    },
    {
      nr: 13,
      name: "Gargano (Vieste)",
      ersatzsuche: "Vieste|Gargano",
      land: "it",
      region: "Apulien",
      datum: "20.–22. Juli",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über Bari und Foggia auf die Halbinsel Gargano nach Vieste (ca. 2,75–3 Std., ca. 215 km; die letzten Kilometer kurvig).",
      text: "Der «Sporn» des italienischen Stiefels: Kalkklippen mit Meeresgrotten, Felsbögen und Buchten, im Innern der Buchenwald Foresta Umbra. Vieste liegt auf einem Felsen zwischen zwei langen Sandstränden.",
      teens: "Bootstour in die Meeresgrotten und zur Baia delle Zagare (ca. 3 Std., mit Badehalt), Schnorcheln an den Felsen, Felsnadel Pizzomunno am Strand, Wanderung oder Velotour in der Foresta Umbra.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Bootstour und Strand, ein halber Tag Altstadt oder Foresta Umbra.",
        "<strong>Bootstouren:</strong> Ab dem Hafen von Vieste mehrmals täglich, im Juli vorab reservieren; bei Wellengang fallen sie aus.",
        "<strong>Strände:</strong> Sandstrände direkt bei Vieste, ruhigere Buchten an der Küstenstrasse Richtung Mattinata."
      ],
      ausserdem: "Peschici, Monte Sant’Angelo (Unesco-Heiligtum), Tremiti-Inseln (Boot ab Vieste), Seen von Lesina und Varano.",
      bilder: [
        {titel: "Vieste", suche: "Vieste Gargano", stichwort: "vieste"},
        {titel: "Pizzomunno", suche: "Pizzomunno Vieste", stichwort: "pizzomunno"},
        {titel: "Baia delle Zagare", suche: "Baia delle Zagare Gargano", stichwort: "zagare"},
        {titel: "Meeresgrotten", suche: "Gargano sea caves|Vieste sea cave", stichwort: "cave|grotta|gargano"},
        {titel: "Peschici", suche: "Peschici Gargano", stichwort: "peschici"},
        {titel: "Foresta Umbra", suche: "Foresta Umbra Gargano", stichwort: "umbra"}
      ]
    },
    {
      nr: 14,
      name: "Rimini und San Marino (Finale)",
      ersatzsuche: "Rimini|San Marino",
      land: "it",
      region: "Emilia-Romagna",
      datum: "22.–24. Juli",
      naechte: "2 Nächte, Rückfahrt am 24. Juli",
      anreise: "Mit dem Auto auf der Adria-Autobahn A14 entlang der Küste über Pescara und Ancona nach Rimini (ca. 4,5–5 Std., ca. 480 km, Maut).",
      text: "Langer Sandstrand mit Strandbädern, eine römische Altstadt und darüber die kleine Republik San Marino mit drei Burgtürmen auf dem Monte Titano. Zum Abschluss Strand, Freizeitpark und eine Burg.",
      teens: "San Marino mit den drei Türmen und der Seilbahn, Strandtag mit Velo auf der Promenade, Freizeit- und Wasserparks (Mirabilandia, Aquafan, Italia in Miniatura), Tiberiusbrücke und Augustusbogen.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag San Marino (ca. 30 Min.), ein Tag Strand oder Freizeitpark.",
        "<strong>San Marino:</strong> Eigener Staat ohne Grenzkontrolle; die Altstadt ist autofrei, Parkplätze unten an der Seilbahn.",
        "<strong>Rückfahrt:</strong> Über Bologna, Mailand und den Simplon nach Brig-Glis (ca. 5,25–5,75 Std., ca. 510 km). Im Juli am Samstag viel Verkehr Richtung Süden, Richtung Norden weniger; früh starten."
      ],
      ausserdem: "Ravenna mit den Mosaiken (Unesco, ca. 1 Std.), Gradara (Burg), Santarcangelo, Urbino (Renaissancestadt, ca. 1 Std.).",
      bilder: [
        {titel: "San Marino", suche: "San Marino towers Monte Titano", stichwort: "san marino|titano"},
        {titel: "Guaita-Turm", suche: "Guaita tower San Marino", stichwort: "guaita|san marino"},
        {titel: "Strand von Rimini", suche: "Rimini beach", stichwort: "rimini"},
        {titel: "Tiberiusbrücke", suche: "Tiberius bridge Rimini", stichwort: "tiberius|rimini"},
        {titel: "Gradara", suche: "Gradara castle", stichwort: "gradara"},
        {titel: "Ravenna", suche: "Ravenna mosaics San Vitale", stichwort: "ravenna|vitale"}
      ]
    }
  ],
  abschluss: "Nach zwei Nächten in Rimini Rückfahrt über Bologna, Mailand und den Simplon nach Brig-Glis am Sa, 24.07.2027 (ca. 5,25–5,75 Std.).",
  budgetIntro: "Mittelklasse inklusive Maut, Fähren, Unterkunft, Verpflegung und Aktivitäten; Laden an Tesla-Superchargern ist gratis, in Montenegro und Albanien wird an öffentlichen Ladestationen bezahlt. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 36,
    total: "16’150",
    spanne: "12’150–21’300",
    proTag: "ca. 450 CHF pro Tag, ca. 4’050 pro Person",
    posten: [
      [
        "Auto: Maut, Vignette, Laden unterwegs (ca. 3’800 km)",
        "350–600",
        "450",
        "Supercharging gratis; Maut vor allem in Italien, dazu Kroatien und Griechenland, E-Vignette Slowenien, öffentliche Schnelllader in Montenegro und Albanien"
      ],
      [
        "Fähren (Split–Hvar, Sućuraj–Drvenik, Igoumenitsa–Bari)",
        "450–750",
        "600",
        "Auto und 4 Personen, auf der Nachtfähre mit 4er-Kabine; im Sommer früh buchen"
      ],
      [
        "Parkieren und lokale Transfers",
        "400–700",
        "550",
        "Parkplätze in Venedig-Mestre, Split und Dubrovnik, Bus und Zug nach Venedig, Taxis"
      ],
      [
        "Unterkunft (Familienzimmer, Apartment oder 2 Zimmer)",
        "4’800–8’600",
        "6’300",
        "35 Nächte an Land, ca. 100–160 CHF pro Nacht in Albanien, ca. 200–350 CHF auf Hvar, in Dubrovnik und in Apulien"
      ],
      ["Verpflegung (Restaurants, Einkauf)", "3’250–5’400", "4’300", "ca. 90–150 CHF pro Tag für 4 Personen; Albanien günstig"],
      [
        "Aktivitäten und Eintritte",
        "1’500–2’600",
        "2’000",
        "Plitvicer Seen, Stadtmauer Dubrovnik, Kajak, Bootstouren, Butrint, Meteora, Grotte di Castellana, Grotten am Gargano, Freizeitpark bei Rimini"
      ],
      [
        "Versicherung, Pannenhilfe, Reiseapotheke",
        "300–700",
        "500",
        "Pannenhilfe-Versicherung fürs Auto, Reiseversicherung für Montenegro und Albanien, Annullationsschutz"
      ],
      ["Reserve (ca. 10 %)", "1’100–1’950", "1’450", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["Zwischenübernachtung Venedig-Mestre (1)", "250–450"],
      ["1. Istrien (2)", "650–1’050"],
      ["2. Plitvicer Seen (2)", "550–900"],
      ["3. Split (2)", "650–1’050"],
      ["4. Hvar (3)", "1’050–1’700"],
      ["5. Dubrovnik (3)", "1’150–1’850"],
      ["6. Bucht von Kotor (2)", "550–900"],
      ["Zwischenübernachtung Shkodër (1)", "150–250"],
      ["7. Berat (2)", "350–600"],
      ["8. Himarë (3)", "600–1’000"],
      ["9. Ksamil (2)", "450–700"],
      ["10. Meteora (2)", "450–750"],
      ["11. Lefkada (3)", "850–1’350"],
      ["Nachtfähre Igoumenitsa–Bari (1)", "50–100"],
      ["12. Apulien (3)", "900–1’450"],
      ["13. Gargano (2)", "600–950"],
      ["14. Rimini und San Marino (2)", "550–900"]
    ],
    hinweise: [
      "Preise für die Kids: Viele Sehenswürdigkeiten sind für Kinder und Jugendliche günstiger oder gratis; die Tochter (14) zahlt teils schon den Erwachsenenpreis.",
      "Sparhebel: Apartments mit Küche, Albanien ist deutlich günstiger als Kroatien und Italien, Fähre früh buchen, Unterkünfte ausserhalb von Hvar-Stadt und der Altstadt von Dubrovnik.",
      "Nicht eingerechnet ist die Abnutzung des eigenen Autos (Service, Reifen). Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich)."
    ]
  },
  tippsIntro: "Einreise, Auto, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise",
      "Italien, Slowenien, Kroatien und Griechenland sind im Schengen-Raum. Montenegro und Albanien nicht: an drei Grenzen Passkontrolle (Kroatien–Montenegro, Montenegro–Albanien, Albanien–Griechenland). Für Schweizer kein Visum, das Einreise- und Ausreisesystem EES gilt für sie nicht. Pass oder Identitätskarte für alle, auch die Kids; Gültigkeit vor Abreise beim EDA prüfen."
    ],
    [
      "Auto und Papiere",
      "Führerausweis, Fahrzeugausweis, CH-Kleber, Warnwesten für alle, Pannendreieck. Grüne Versicherungskarte: bei der eigenen Versicherung bestätigen lassen, dass Montenegro (MNE) und Albanien (AL) gedeckt sind, sonst an der Grenze eine Versicherung kaufen. Pannenhilfe für alle Länder."
    ],
    [
      "Maut",
      "Italien: Zahlstellen, Kreditkarte geht. Slowenien: E-Vignette vorab nur auf der offiziellen Seite (evinjeta.dars.si). Kroatien: ab 1. März 2027 elektronische Maut ohne Zahlstellen, das Kennzeichen vorab online registrieren (Regeln für 2027 prüfen). Montenegro und Albanien: auf unserer Route kaum Maut. Griechenland: Zahlstellen auf den Autobahnen."
    ],
    [
      "Laden",
      "In Italien, Slowenien, Kroatien und Griechenland plant die Tesla-Navigation die Ladestopps an Superchargern selbst. In Montenegro und Albanien gibt es keine: Unterkünfte mit Ladestation buchen und öffentliche Schnelllader (z.B. in Vlorë und Sarandë) vorab in einer Lade-App prüfen. Auf griechischen Fähren höchstens 40 % Akkuladung beim Einschiffen."
    ],
    [
      "Fähren mit dem Auto",
      "Check-in bei der Nachtfähre ca. 2–4 Std., bei den kurzen Fähren ca. 1 Std. vor Abfahrt. Das Auto ist während der Fahrt nicht zugänglich: Taschen für die Nacht, Badesachen, Snacks und Medikamente ins Handgepäck."
    ],
    ["Währung und Zahlung", "Euro in Italien, Slowenien, Kroatien, Montenegro und Griechenland. Albanien: Lek; Karten in Städten, Bargeld für kleine Lokale, Strandliegen und Parkplätze."],
    [
      "Wetter im Juni und Juli",
      "An der Küste ca. 28–33 °C, im Landesinneren (Berat, Meteora, Matera) oft 35–40 °C, Hitzewellen möglich; bei den Plitvicer Seen angenehmer. Meer ca. 24–26 °C. Am Nachmittag Wind an der Westküste von Lefkada."
    ],
    ["Zeitzonen", "Italien, Slowenien, Kroatien, Montenegro und Albanien wie die Schweiz, Griechenland eine Stunde später."],
    [
      "Verkehr",
      "In Montenegro und Albanien sind die Strassen oft schmal und kurvig, es wird forsch überholt; nachts Landstrassen meiden, auf Tiere und Fussgänger achten. Im Sommer lange Kolonnen an den Grenzen und in Badeorten; in Italien sind die Ferienwochenenden voll. Nie Kinder im parkierten Auto lassen."
    ],
    [
      "Gesundheit",
      "In Italien, Slowenien, Kroatien und Griechenland gilt die Europäische Krankenversicherungskarte, in Montenegro und Albanien nicht: Reiseversicherung mit Rücktransport abschliessen. Sonnenschutz und viel trinken. In Albanien kein Leitungswasser trinken."
    ],
    [
      "Sicherheit",
      "Taschendiebe in Venedig, Split und Dubrovnik. Nichts sichtbar im Auto lassen. EDA-Reisehinweise für Montenegro und Albanien vor Abreise lesen."
    ],
    ["Notfall", "Notruf 112 in allen Ländern. Pannenhilfe-Nummer der Versicherung notieren; EDA-Reiseplattform nutzen."],
    [
      "Beteiligung der Kids",
      "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt, z.B. Kajak, Bootsausflug oder Freizeitpark."
    ]
  ]
};
