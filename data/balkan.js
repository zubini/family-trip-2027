// Reise: Rundreise um die Adria mit dem eigenen Auto ab Brig-Glis (über Gardasee, Ljubljana und Bled)
// Kroatien, Montenegro, Albanien und Griechenland, Nachtfähre nach Bari, an der Ostküste Italiens zurück bis Bologna.
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.balkan = {
  titel: "Mit dem Auto rund um die Adria",
  menu: "Adria-Rundreise",
  untertitel: "Fünf Wochen Rundreise ab Brig-Glis: Ljubljana und Bled, Plitvicer Seen, Split, Hvar und Dubrovnik, die Bucht von Kotor, Tirana, Berat und die albanische Riviera, Meteora und Lefkada, dann mit der Fähre nach Apulien und über den Gargano nach Bologna.",
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
    info: "Mit dem eigenen Auto über den Simplon an den Gardasee"
  },
  plan: [
    {
      datum: "18.–19. Juni",
      name: "Zwischenübernachtung Gardasee (Sirmione)",
      naechte: 1,
      info: "Brig-Glis – Simplon – Mailand – Sirmione (ca. 3,5–4 Std., ca. 320 km)"
    },
    {
      datum: "19.–21. Juni",
      name: "1. Ljubljana und Bled",
      naechte: 2,
      info: "Auto über Verona und Triest (ca. 3,5–4 Std., ca. 380 km)"
    },
    {datum: "21.–23. Juni", name: "2. Plitvicer Seen", naechte: 2, info: "Auto über Karlovac (ca. 3 Std., ca. 225 km)"},
    {
      datum: "23.–25. Juni",
      name: "3. Split",
      naechte: 2,
      info: "Auto auf der Autobahn A1 (ca. 2,75–3 Std., ca. 260 km)"
    },
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
      name: "7. Tirana",
      naechte: 1,
      info: "Auto über Bar und Shkodër (ca. 3,75–4,25 Std., ca. 200 km) plus Grenze Montenegro–Albanien"
    },
    {datum: "4.–5. Juli", name: "8. Berat", naechte: 1, info: "Auto (ca. 2 Std., ca. 125 km)"},
    {
      datum: "5.–8. Juli",
      name: "9. Himarë",
      naechte: 3,
      info: "Auto über Vlorë und den Llogara-Pass (ca. 3–3,5 Std., ca. 150 km)"
    },
    {
      datum: "8.–10. Juli",
      name: "10. Ksamil",
      naechte: 2,
      info: "Auto auf der Küstenstrasse (ca. 1,5–2 Std., ca. 70 km)"
    },
    {
      datum: "10.–12. Juli",
      name: "11. Meteora",
      naechte: 2,
      info: "Auto über die Grenze Kakavia und Ioannina (ca. 4–4,5 Std., ca. 270 km) plus Grenze (30 Min. bis 2 Std.), Uhr +1 Std."
    },
    {
      datum: "12.–15. Juli",
      name: "12. Lefkada",
      naechte: 3,
      info: "Auto über Ioannina und Preveza (ca. 3–3,5 Std., ca. 220 km)"
    },
    {
      datum: "15.–16. Juli",
      name: "Nachtfähre Igoumenitsa–Bari",
      naechte: 1,
      info: "Auto Lefkada–Igoumenitsa (ca. 1,5–1,75 Std., ca. 110 km), Nachtfähre Igoumenitsa–Bari (ca. 10–12 Std., z.B. Abfahrt 20 Uhr, Ankunft 7:45), Uhr −1 Std."
    },
    {
      datum: "16.–19. Juli",
      name: "13. Apulien (Polignano a Mare)",
      naechte: 3,
      info: "Auto ab dem Hafen Bari (ca. 40 Min., ca. 35 km)"
    },
    {
      datum: "19.–21. Juli",
      name: "14. Gargano (Vieste)",
      naechte: 2,
      info: "Auto über Bari und Foggia (ca. 2,75–3 Std., ca. 215 km)"
    },
    {
      datum: "21.–24. Juli",
      name: "15. Bologna",
      naechte: 3,
      info: "Auto auf der Adria-Autobahn A14 (ca. 5,5–6 Std., ca. 590 km)"
    }
  ],
  rueckflug: {
    datum: "24. Juli",
    name: "Ankunft in Brig-Glis",
    info: "Bologna – Mailand – Simplon – Brig-Glis (ca. 4,25–4,75 Std., ca. 400 km)"
  },
  planHinweise: [
    [
      "Gesamt",
      "36 Nächte, 15 Stationen, 1 Nacht auf der Fähre und 1 Zwischenübernachtung (Gardasee). Keine Flüge: rund um die Adria mit dem eigenen Elektroauto, dazu zwei kurze Autofähren in Kroatien und die Nachtfähre Igoumenitsa–Bari in der Kabine. Insgesamt ca. 3’900 km Autofahrt und ca. 13–14 Std. auf Fähren, zusammen ca. 67 Std. reine Reisezeit (ca. 53 Std. Auto; die Strassen in Montenegro und Albanien sind langsam). Mit Pausen, Ladestopps, drei Grenzen ausserhalb des Schengen-Raums, Check-in an den Häfen und Sommerstau realistisch ca. 83–89 Std. von Tür zu Tür (ca. 65–70 Std. im Auto inklusive Ladestopps und Grenzen, ca. 17–19 Std. für die Fähren mit Check-in, davon eine Nacht in der Kabine). Die längsten Reisetage: Gargano–Bologna (ca. 5,5–6 Std. plus 1–2 Ladestopps), Bologna–Brig-Glis (ca. 4,25–4,75 Std.), Hvar–Dubrovnik (ca. 4–5 Std. mit Fähre), Ksamil–Meteora (ca. 4–4,5 Std. plus Grenze), Kotor–Tirana (ca. 3,75–4,25 Std. plus Grenze); Brig-Glis–Ljubljana ist auf zwei Tage mit je ca. 3,5–4 Std. verteilt."
    ],
    [
      "Vorab buchen",
      "Nachtfähre Igoumenitsa–Bari mit Kabine (im Sommer früh, Autoplätze sind begrenzt), Plitvicer Seen (Tickets mit Zeitfenster, im Sommer oft ausverkauft), Vintgar-Klamm, Unterkünfte auf Hvar und in Dubrovnik (Hochsaison), Stadtmauer Dubrovnik, Bootstouren zu den Pakleni-Inseln, ab Lefkada und zu den Grotten am Gargano, Unterkünfte in Apulien (Juli ist Ferienzeit in Italien)."
    ],
    [
      "Auto und Laden",
      "Tesla mit Gratis-Supercharging: Supercharger gibt es in Italien, Slowenien, Kroatien (z.B. Split, Vrgorac) und Griechenland (z.B. Ioannina), in Montenegro und Albanien keine. Zwischen Vrgorac und Ioannina (ca. 750 km mit Abstechern) an öffentlichen Schnellladern (z.B. Vlorë, Sarandë, 60–180 kW, kostenpflichtig) und über Nacht in Unterkünften mit Ladestation laden; diese gezielt buchen. Auf griechischen Fähren dürfen Elektroautos höchstens 40 % Akkuladung haben, Laden an Bord ist verboten: vor Igoumenitsa nicht voll laden. Grüne Versicherungskarte für Montenegro und Albanien bei der eigenen Versicherung bestätigen lassen. Slowenische E-Vignette für die Autobahnen (2026: 16 € für 7 Tage). Kroatien stellt ab 1. März 2027 auf elektronische Maut ohne Zahlstellen um (Kennzeichen online registrieren), Italien und Griechenland haben Zahlstellen."
    ],
    [
      "Optional",
      "Höhle von Postojna (Halt auf dem Weg nach Ljubljana), Bohinjer See (ab Bled), Nationalpark Krka (Abstecher zwischen Plitvice und Split), Mljet oder Korčula (statt Hvar), Budva und Sveti Stefan (zwischen Kotor und Tirana), Koman-See (eine Nacht in Shkodër statt Tirana), Osum-Schlucht (zweite Nacht in Berat), Gjirokastër (zwischen Ksamil und der Grenze), Ioannina mit dem See, Athen und der Peloponnes (vier bis fünf Nächte mehr, dafür z.B. Italien kürzer), Lecce und Otranto (südlich von Polignano), Rimini und San Marino (Halt zwischen Gargano und Bologna), Ravenna. Bei Abstechern verlängern sich die Fahrtage."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege: mit dem eigenen Auto ab Brig-Glis rund um die Adria, zu den Inseln und nach Italien mit der Fähre. Darunter die Detailkarte.",
    breit: true,
    legende: ["car", "ferry"],
    karten: [
      {datei: "karten/balkan.svg"},
      {titel: "Rund um die Adria im Detail (Stationen 1 bis 15)", datei: "karten/balkan-detail.svg"}
    ]
  },
  abwechslungIntro: "Städte, Strand und Natur wechseln sich ab: Ljubljana und Bled, die Plitvicer Seen, Split, Hvar und Dubrovnik, die Bucht von Kotor, dann Tirana und Berat, fünf Nächte an der albanischen Riviera, Meteora und Lefkada, zum Schluss Apulien, der Gargano und Bologna.",
  abwechslung: [
    [
      "Städte",
      "Ljubljana, Split, Dubrovnik, Kotor, Tirana, Berat, Matera und Bologna: Hauptstädte, Altstädte am Meer und im Hügelland, viele davon Unesco-Welterbe."
    ],
    [
      "Action und Abenteuer",
      "Holzstege über die Plitvicer Seen und durch die Vintgar-Klamm, Kajak um die Stadtmauer von Dubrovnik, Aufstieg zur Festung von Kotor, Atombunker in Tirana, Llogara-Pass, Schnorcheln, Bootsfahrt in die Meeresgrotten am Gargano."
    ],
    [
      "Kultur und Geschichte",
      "Diokletianpalast in Split, Altstadt von Dubrovnik, Kotor, Berat und Butrint, Klöster von Meteora, Trulli von Alberobello und die Höhlenstadt Matera, Portici von Bologna."
    ],
    [
      "Natur und Landschaft",
      "Bleder See, Plitvicer Seen, Pakleni-Inseln, Bucht von Kotor, Steilküste der albanischen Riviera, Quelle Syri i Kaltër, Felstürme von Meteora, Klippen von Lefkada und des Gargano."
    ],
    [
      "Strand und Schnorcheln",
      "Bleder See und Gardasee zum Baden, Pakleni-Inseln bei Hvar, die Buchten bei Himarë (Gjipe, Livadhi), die Inselchen vor Ksamil, die Westküste von Lefkada und die Buchten am Gargano: sehr klares Wasser über Fels und Seegras, im Juli ca. 24–26 °C; keine Korallen."
    ],
    ["Mitmachen", "Kochkurs auf Hvar, Byrek backen in Berat, Orecchiette-Kurs in Apulien, Pasta-Kochkurs in Bologna."]
  ],
  stationenIntro: "Fünfzehn Stationen rund um die Adria: Ljubljana und Bled, die Plitvicer Seen, Split, Hvar, Dubrovnik, Kotor, Tirana, Berat, Himarë, Ksamil, Meteora, Lefkada, Apulien, der Gargano und Bologna. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Ljubljana und Bled (Start)",
      ersatzsuche: "Ljubljana|Bled",
      land: "si",
      region: "Slowenien",
      datum: "19.–21. Juni",
      naechte: "2 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung am Gardasee (Sirmione)", datum: "18.–19. Juni"},
      anreise: "Mit dem Auto ab Brig-Glis über den Simplon und Mailand an den Gardasee (ca. 3,5–4 Std., ca. 320 km, Maut in Italien), dort in Sirmione übernachten und am Abend im See baden. Am nächsten Tag über Verona, Mestre und Triest nach Ljubljana (ca. 3,5–4 Std., ca. 380 km); für Slowenien die E-Vignette vorab kaufen. Slowenien ist im Schengen-Raum, Uhr ohne Zeitverschiebung.",
      text: "Kleine Hauptstadt mit autofreier Altstadt am Fluss Ljubljanica, Drachenbrücke und einer Burg auf dem Hügel. Eine Stunde nördlich liegt der Bleder See mit der Kircheninsel und der Burg auf dem Felsen vor den Julischen Alpen.",
      teens: "Standseilbahn zur Burg von Ljubljana, Bootsfahrt auf der Ljubljanica, mit dem Ruderboot oder der Pletna zur Insel im Bleder See, Baden im See, Holzstege durch die Vintgar-Klamm, Sommerrodelbahn in Bled.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte in Ljubljana: ein Tag Altstadt und Burg, ein Tag Bled und Vintgar-Klamm (ca. 45 Min. pro Weg).",
        "<strong>Vintgar-Klamm:</strong> Im Sommer Tickets online mit Zeitfenster und Einbahn-Rundweg; Regeln für 2027 prüfen.",
        "<strong>Auto:</strong> Die Altstadt ist autofrei: Hotel mit Parkhaus wählen. Supercharger in Slowenien an den Autobahnen."
      ],
      ausserdem: "Höhle von Postojna mit Höhlenbahn und die Burg Predjama (an der Strecke von Triest, Halt auf der Anreise), Bohinjer See, Triglav-Nationalpark, Markt am Vodnikov trg.",
      bilder: [
        {titel: "Bleder See", suche: "Lake Bled island church", stichwort: "bled"},
        {titel: "Drachenbrücke", suche: "Dragon Bridge Ljubljana", stichwort: "dragon|ljubljana"},
        {titel: "Burg von Ljubljana", suche: "Ljubljana Castle", stichwort: "castle|ljubljana"},
        {titel: "Vintgar-Klamm", suche: "Vintgar Gorge", stichwort: "vintgar"},
        {titel: "Höhle von Postojna", suche: "Postojna Cave", stichwort: "postojna"},
        {titel: "Dreifachbrücke", suche: "Triple Bridge Ljubljana", stichwort: "triple bridge|ljubljana"}
      ]
    },
    {
      nr: 2,
      name: "Plitvicer Seen",
      ersatzsuche: "Plitvice",
      land: "hr",
      region: "Lika",
      datum: "21.–23. Juni",
      naechte: "2 Nächte",
      anreise: "Mit dem Auto über die Autobahn nach Zagreb bzw. Karlovac und auf der Landstrasse zu den Plitvicer Seen (ca. 3 Std., ca. 225 km). Slowenien und Kroatien sind im Schengen-Raum, an der Grenze sind nur Stichproben möglich.",
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
        {
          titel: "Festung San Giovanni",
          suche: "Kotor fortress San Giovanni|Kotor fortress view",
          stichwort: "fortress|giovanni"
        },
        {titel: "Perast", suche: "Perast Montenegro", stichwort: "perast"},
        {
          titel: "Unsere Liebe Frau vom Felsen",
          suche: "Our Lady of the Rocks Perast",
          stichwort: "lady of the rocks|gospa"
        },
        {titel: "Bucht", suche: "Bay of Kotor", stichwort: "bay of kotor|boka|kotor"},
        {titel: "Lovćen", suche: "Lovcen National Park Njegos mausoleum", stichwort: "lovcen|lovćen|njego"}
      ]
    },
    {
      nr: 7,
      name: "Tirana",
      land: "al",
      region: "Albanien",
      datum: "3.–4. Juli",
      naechte: "1 Nacht",
      anreise: "Mit dem Auto entlang der Küste über Budva, Bar und Ulcinj, über die Grenze Sukobin–Muriqan und an Shkodër vorbei nach Tirana (ca. 3,75–4,25 Std., ca. 200 km, dazu Grenze). Montenegro und Albanien sind nicht im Schengen-Raum, in Albanien keine Vignette. Halt an der Burg Rozafa in Shkodër möglich. In Albanien wird oft forsch gefahren: defensiv fahren, nachts Landstrassen meiden.",
      text: "Albaniens Hauptstadt ist laut, bunt und im Aufbruch: farbig bemalte Fassaden, der weite Skanderbeg-Platz, Bunker aus der Zeit der Diktatur als Museen und eine Seilbahn auf den Hausberg Dajti.",
      teens: "Bunk’Art (riesiger Atombunker als Museum), auf die begehbare Pyramide von Tirana klettern, Seilbahn Dajti Ekspres mit Aussicht, Abend im Ausgehviertel Blloku, Skanderbeg-Platz.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Nachmittag und Abend die Stadt, am Morgen Bunk’Art oder Dajti, dann weiter nach Berat (ca. 2 Std.).",
        "<strong>Auto:</strong> In Tirana viel Verkehr; Hotel mit Parkplatz wählen und zu Fuss oder mit dem Taxi unterwegs sein.",
        "<strong>Laden:</strong> In Albanien gibt es keine Tesla-Supercharger. Öffentliche Schnelllader gibt es vor allem in Tirana, Durrës, Vlorë und Sarandë; Unterkünfte mit Ladestation wählen."
      ],
      ausserdem: "Burg Rozafa und Altstadt von Shkodër (auf der Anreise), Haus der Blätter (Museum der Überwachung), Neuer Basar, Grand Park mit See.",
      bilder: [
        {titel: "Skanderbeg-Platz", suche: "Skanderbeg Square Tirana", stichwort: "skanderbeg"},
        {titel: "Pyramide von Tirana", suche: "Pyramid of Tirana", stichwort: "pyramid"},
        {titel: "Bunk’Art", suche: "Bunk'Art Tirana", stichwort: "bunk"},
        {titel: "Dajti Ekspres", suche: "Dajti Ekspres cable car Tirana", stichwort: "dajti"},
        {titel: "Bunte Fassaden", suche: "Tirana colorful buildings", stichwort: "tirana"},
        {titel: "Burg Rozafa in Shkodër", suche: "Rozafa Castle Shkoder", stichwort: "rozafa"}
      ]
    },
    {
      nr: 8,
      name: "Berat",
      land: "al",
      region: "Mittelalbanien",
      datum: "4.–5. Juli",
      naechte: "1 Nacht",
      anreise: "Mit dem Auto von Tirana über die Autobahn Richtung Durrës und Fier nach Berat (ca. 2 Std., ca. 125 km).",
      text: "Die «Stadt der tausend Fenster»: Osmanische Häuser ziehen sich den Hang hinauf, oben liegt eine bewohnte Burg mit Kirchen und Ikonen. Berat ist Unesco-Welterbe.",
      teens: "Burg mit Aussicht über das Tal, Ikonenmuseum Onufri, Abendspaziergang auf dem Boulevard, Ausflug in die Osum-Schlucht mit Bogove-Wasserfall.",
      fakten: [
        "<strong>Dauer:</strong> 1 Nacht: am Abend durch die Altstadt und über die Gorica-Brücke, am Morgen auf die Burg, dann weiter an die Küste.",
        "<strong>Hitze:</strong> Im Juli oft über 35 °C; die steilen Gassen am Morgen und Abend gehen.",
        "<strong>Laden:</strong> Wenige Ladestationen; in Tirana oder in der Unterkunft laden, Schnelllader in Vlorë auf der Weiterfahrt."
      ],
      ausserdem: "Ikonenmuseum Onufri, Quartier Gorica, Osum-Schlucht mit Bogove-Wasserfall (ca. 1,5 Std., mit einer zweiten Nacht), Apollonia (antike Stadt bei Fier, auf der Weiterfahrt).",
      bilder: [
        {titel: "Mangalem", suche: "Berat Mangalem houses", stichwort: "berat|mangalem"},
        {titel: "Burg", suche: "Berat castle Albania", stichwort: "castle|kala"},
        {titel: "Gorica-Brücke", suche: "Gorica bridge Berat", stichwort: "gorica"},
        {titel: "Osum-Schlucht", suche: "Osumi canyon Albania", stichwort: "osum"},
        {titel: "Ikonen", suche: "Onufri museum Berat|Berat church icons", stichwort: "onufri|icon"},
        {titel: "Bogove-Wasserfall", suche: "Bogove waterfall Albania", stichwort: "bogov"}
      ]
    },
    {
      nr: 9,
      name: "Himarë",
      land: "al",
      region: "Albanische Riviera",
      datum: "5.–8. Juli",
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
      nr: 10,
      name: "Ksamil",
      ersatzsuche: "Ksamil|Saranda|Butrint",
      land: "al",
      region: "Albanische Riviera",
      datum: "8.–10. Juli",
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
      nr: 11,
      name: "Meteora",
      ersatzsuche: "Meteora|Kalambaka",
      land: "gr",
      region: "Thessalien",
      datum: "10.–12. Juli",
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
      nr: 12,
      name: "Lefkada",
      land: "gr",
      region: "Ionische Inseln",
      datum: "12.–15. Juli",
      naechte: "3 Nächte",
      anreise: "Mit dem Auto zurück über Ioannina und auf der Autobahn Ionia Odos nach Preveza und durch den Unterwassertunnel nach Lefkada (ca. 3–3,5 Std., ca. 220 km). Lefkada ist mit einer Drehbrücke mit dem Festland verbunden, keine Fähre nötig.",
      text: "Die Westküste hat einige der bekanntesten Strände Griechenlands: helle Kalkklippen und leuchtend türkisfarbenes Wasser. Im Osten liegen ruhige Buchten und kleine Inseln für Bootsausflüge.",
      teens: "Porto Katsiki und Egremni (lange Treppen hinunter), Schnorcheln an den Felsen, Bootsausflug zu den Inseln Meganisi und Skorpios, Wasserfall von Dimosari bei Nydri, Stand-up-Paddle.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte, Unterkunft in Agios Nikitas oder Nydri: ein Tag Strände im Westen, ein Tag Bootsausflug, ein ruhiger Tag vor der Fähre.",
        "<strong>Strände:</strong> Auf der Westseite oft Wellen und Wind am Nachmittag, dann auf die Ostseite ausweichen; Parkplätze an den bekannten Stränden sind früh voll.",
        "<strong>Fähre:</strong> Am 15. Juli nach Igoumenitsa (ca. 1,5–1,75 Std.), Nachtfähre nach Bari. Das Elektroauto darf beim Einschiffen höchstens 40 % Akkuladung haben."
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
      nr: 13,
      name: "Apulien (Polignano a Mare)",
      ersatzsuche: "Polignano|Puglia|Apulia",
      land: "it",
      region: "Apulien",
      datum: "16.–19. Juli",
      naechte: "3 Nächte",
      zwischenstopp: {text: "Nachtfähre Igoumenitsa–Bari", datum: "15.–16. Juli"},
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
      ]
    },
    {
      nr: 14,
      name: "Gargano (Vieste)",
      ersatzsuche: "Vieste|Gargano",
      land: "it",
      region: "Apulien",
      datum: "19.–21. Juli",
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
      nr: 15,
      name: "Bologna (Finale)",
      land: "it",
      region: "Emilia-Romagna",
      datum: "21.–24. Juli",
      naechte: "3 Nächte, Rückfahrt am 24. Juli",
      anreise: "Mit dem Auto auf der Adria-Autobahn A14 über Pescara, Ancona und Rimini nach Bologna (ca. 5,5–6 Std., ca. 590 km, Maut); ein Halt in Rimini oder San Marino unterbricht die lange Fahrt.",
      text: "Rote Backsteinstadt mit fast 40 km Laubengängen (Portici, Unesco-Welterbe), zwei schiefen Geschlechtertürmen und der ältesten Universität Europas. Hier kommen Tortellini, Mortadella und das echte Ragù her.",
      teens: "Spaziergang unter den Portici hinauf zur Kirche San Luca, Piazza Maggiore und Neptunbrunnen, Pasta-Kochkurs, Ausflug nach San Marino oder zum Freizeitpark Mirabilandia, Ferrari-Museum in Maranello.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Altstadt, ein Tag Ausflug (San Marino, Ravenna oder Maranello, je ca. 1 Std.), ein ruhiger Tag vor der Heimfahrt.",
        "<strong>Türme:</strong> Der Garisenda-Turm wird gesichert, der Asinelli-Turm war deshalb zeitweise geschlossen; Stand vorab prüfen.",
        "<strong>Auto:</strong> Die Altstadt ist eine Zone mit beschränktem Verkehr (ZTL): Hotel mit Parkplatz ausserhalb oder mit Einfahrtsbewilligung wählen.",
        "<strong>Rückfahrt:</strong> Über Mailand und den Simplon nach Brig-Glis (ca. 4,25–4,75 Std., ca. 400 km)."
      ],
      ausserdem: "Archiginnasio mit dem anatomischen Theater, Quadrilatero (Markt), Rimini und San Marino (auf der Anreise), Ravenna mit den Mosaiken (Unesco), Modena.",
      bilder: [
        {titel: "Die zwei Türme", suche: "Two Towers Bologna Asinelli", stichwort: "asinelli|tower|bologna"},
        {titel: "Piazza Maggiore", suche: "Piazza Maggiore Bologna", stichwort: "maggiore|bologna"},
        {titel: "Portici", suche: "Bologna porticoes", stichwort: "portic|bologna"},
        {titel: "San Luca", suche: "Sanctuary of the Madonna di San Luca Bologna", stichwort: "san luca"},
        {titel: "San Marino", suche: "San Marino towers Monte Titano", stichwort: "san marino|titano"},
        {titel: "Ravenna", suche: "Ravenna mosaics San Vitale", stichwort: "ravenna|vitale"}
      ]
    }
  ],
  abschluss: "Nach drei Nächten in Bologna Rückfahrt über Mailand und den Simplon nach Brig-Glis am Sa, 24.07.2027 (ca. 4,25–4,75 Std.).",
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
        "Parkhäuser in Ljubljana, Split, Dubrovnik, Tirana und Bologna, Taxis"
      ],
      [
        "Unterkunft (Familienzimmer, Apartment oder 2 Zimmer)",
        "4’800–8’600",
        "6’300",
        "35 Nächte an Land, ca. 100–160 CHF pro Nacht in Albanien, ca. 200–350 CHF auf Hvar, in Dubrovnik und in Apulien"
      ],
      [
        "Verpflegung (Restaurants, Einkauf)",
        "3’250–5’400",
        "4’300",
        "ca. 90–150 CHF pro Tag für 4 Personen; Albanien günstig"
      ],
      [
        "Aktivitäten und Eintritte",
        "1’500–2’600",
        "2’000",
        "Vintgar-Klamm, Plitvicer Seen, Stadtmauer Dubrovnik, Kajak, Bootstouren, Bunk’Art, Butrint, Meteora, Grotte di Castellana, Grotten am Gargano, Ausflüge ab Bologna"
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
      ["Zwischenübernachtung Gardasee (1)", "250–450"],
      ["1. Ljubljana und Bled (2)", "600–1’000"],
      ["2. Plitvicer Seen (2)", "550–900"],
      ["3. Split (2)", "650–1’050"],
      ["4. Hvar (3)", "1’050–1’700"],
      ["5. Dubrovnik (3)", "1’150–1’850"],
      ["6. Bucht von Kotor (2)", "550–900"],
      ["7. Tirana (1)", "200–350"],
      ["8. Berat (1)", "150–300"],
      ["9. Himarë (3)", "600–1’000"],
      ["10. Ksamil (2)", "450–700"],
      ["11. Meteora (2)", "450–750"],
      ["12. Lefkada (3)", "850–1’350"],
      ["Nachtfähre Igoumenitsa–Bari (1)", "50–100"],
      ["13. Apulien (3)", "900–1’450"],
      ["14. Gargano (2)", "600–950"],
      ["15. Bologna (3)", "900–1’450"]
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
      "Italien: Zahlstellen, Kreditkarte geht. Slowenien: E-Vignette für die Autobahnen vorab nur auf der offiziellen Seite (evinjeta.dars.si). Kroatien: ab 1. März 2027 elektronische Maut ohne Zahlstellen, das Kennzeichen vorab online registrieren (Regeln für 2027 prüfen). Montenegro und Albanien: auf unserer Route kaum Maut. Griechenland: Zahlstellen auf den Autobahnen."
    ],
    [
      "Laden",
      "In Italien, Slowenien, Kroatien und Griechenland plant die Tesla-Navigation die Ladestopps an Superchargern selbst. In Montenegro und Albanien gibt es keine: Unterkünfte mit Ladestation buchen und öffentliche Schnelllader (z.B. in Vlorë und Sarandë) vorab in einer Lade-App prüfen. Auf griechischen Fähren höchstens 40 % Akkuladung beim Einschiffen."
    ],
    [
      "Fähren mit dem Auto",
      "Check-in bei der Nachtfähre ca. 2–4 Std., bei den kurzen Fähren ca. 1 Std. vor Abfahrt. Das Auto ist während der Fahrt nicht zugänglich: Taschen für die Nacht, Badesachen, Snacks und Medikamente ins Handgepäck."
    ],
    [
      "Währung und Zahlung",
      "Euro in Italien, Slowenien, Kroatien, Montenegro und Griechenland. Albanien: Lek; Karten in Städten, Bargeld für kleine Lokale, Strandliegen und Parkplätze."
    ],
    [
      "Wetter im Juni und Juli",
      "An der Küste ca. 28–33 °C, im Landesinneren (Berat, Meteora, Matera) oft 35–40 °C, Hitzewellen möglich; bei den Plitvicer Seen angenehmer. Meer ca. 24–26 °C. Am Nachmittag Wind an der Westküste von Lefkada."
    ],
    [
      "Zeitzonen",
      "Italien, Slowenien, Kroatien, Montenegro und Albanien wie die Schweiz, Griechenland eine Stunde später."
    ],
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
      "Taschendiebe in Split, Dubrovnik, Tirana und Bologna. Nichts sichtbar im Auto lassen. EDA-Reisehinweise für Montenegro und Albanien vor Abreise lesen."
    ],
    ["Notfall", "Notruf 112 in allen Ländern. Pannenhilfe-Nummer der Versicherung notieren; EDA-Reiseplattform nutzen."],
    [
      "Beteiligung der Kids",
      "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt, z.B. Kajak, Bootsausflug oder Freizeitpark."
    ]
  ]
};
