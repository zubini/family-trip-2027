// Reise: Südkorea (Seoul, Seoraksan, Gangneung, Gyeongju, Busan, Tongyeong, Jeju), knapp fünf Wochen
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.suedkorea = {
  titel: "Südkorea: Seoul, Berge, Ostküste, Busan und die Vulkaninsel Jeju",
  menu: "Südkorea",
  untertitel: "Knapp fünf Wochen: Seoul, die Berge von Seoraksan, Strände an der Ostküste bei Gangneung, die alte Königsstadt Gyeongju, Busan und Tongyeong am Meer, neun Nächte auf der Vulkaninsel Jeju und zum Schluss nochmals Seoul.",
  zeitraum: "Sa, 19.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Gyeongbokgung Palace|Seongsan Ilchulbong",
    stichwort: "gyeongbokgung|seongsan",
    alt: "Gyeongbokgung-Palast in Seoul, Südkorea"
  },
  planIntro: "Abflug ab Zürich nach Seoul am Sa, 19.06.2027 am Abend, Rückflug ab Seoul am Do, 22.07.2027 am Vormittag (Ankunft in Zürich am Abend). 32 Nächte im Land, dazu eine Nacht im Flugzeug. Dazwischen Expressbusse und Züge, zwei kurze Inlandflüge (nach Jeju und zurück nach Seoul) und auf Jeju ein Mietwagen. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "19.–20. Juni",
    name: "Flug Zürich–Seoul",
    info: "Direktflug mit Korean Air ca. 11,5 Std., Abflug am Sa am Abend, Ankunft in Seoul-Incheon am So, 20.06.2027 am Nachmittag"
  },
  plan: [
    {
      datum: "20.–24. Juni",
      name: "1. Seoul",
      naechte: 4,
      info: "Flug ab Zürich (Sa, ca. 19.40 Uhr), Ankunft am So am Nachmittag; Flughafenbahn AREX in die Stadt (ca. 1 Std.)"
    },
    {datum: "24.–27. Juni", name: "2. Sokcho / Seoraksan", naechte: 3, info: "Expressbus (ca. 2,5–3 Std.)"},
    {datum: "27.–29. Juni", name: "3. Gangneung", naechte: 2, info: "Bus der Küste entlang (ca. 1–1,5 Std.)"},
    {
      datum: "29. Juni–2. Juli",
      name: "4. Gyeongju",
      naechte: 3,
      info: "Zug der Ostküste entlang (KTX-Eum ca. 3–3,5 Std., ITX-Maeum ca. 4–4,5 Std.; nur wenige Züge pro Tag)"
    },
    {datum: "2.–7. Juli", name: "5. Busan", naechte: 5, info: "Zug oder Bus (ca. 0,5–1 Std.)"},
    {datum: "7.–9. Juli", name: "6. Tongyeong", naechte: 2, info: "Bus (ca. 1,5–2 Std.)"},
    {
      datum: "9.–13. Juli",
      name: "7. Jeju Westküste",
      naechte: 4,
      info: "Bus zum Flughafen Busan-Gimhae (ca. 1,5–2 Std.), Flug nach Jeju (ca. 1 Std.), Mietwagen (ca. 45 Min.)"
    },
    {datum: "13.–18. Juli", name: "8. Seogwipo (Jeju Süd)", naechte: 5, info: "Mietwagen (ca. 45 Min.–1 Std.)"},
    {
      datum: "18.–22. Juli",
      name: "9. Seoul (Abschluss)",
      naechte: 4,
      info: "Mietwagen zum Flughafen Jeju (ca. 1 Std.), Flug nach Seoul-Gimpo (ca. 1–1,25 Std.); Rückflug 22. Juli"
    }
  ],
  rueckflug: {
    datum: "22. Juli",
    name: "Flug Seoul–Zürich",
    info: "Direktflug mit Korean Air am Do, 22.07.2027 am Vormittag (ca. 11 Uhr), ca. 13,5 Std., Ankunft in Zürich am Abend"
  },
  planHinweise: [
    [
      "Gesamt",
      "32 Nächte im Land, 9 Stationen. Expressbus Seoul–Sokcho (ca. 2,5–3 Std.), Bus Sokcho–Gangneung (ca. 1–1,5 Std.), Zug Gangneung–Gyeongju (ca. 3–4,5 Std.), Zug oder Bus Gyeongju–Busan (ca. 0,5–1 Std.), Bus Busan–Tongyeong (ca. 1,5–2 Std.), Bus zum Flughafen Busan (ca. 1,5–2 Std.), zwei Inlandflüge (je ca. 1–1,25 Std.) und auf Jeju ca. 2,5–3 Std. mit dem Mietwagen zwischen Flughafen und Unterkünften. Ohne die beiden Flugtage ca. 9–13 Std. reine Reisezeit, realistisch mit Umsteigen, Taxi zum Bahnhof und Wartezeiten ca. 11–16 Std.; die beiden Flugtage (Tongyeong–Jeju und Jeju–Seoul) dauern Tür zu Tür je ca. 5–6 Std. Der längste Reisetag ohne Flug ist Gangneung–Gyeongju mit ca. 4–5,5 Std. Selber fahren nur auf Jeju."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Zürich–Seoul-Incheon mit Korean Air als Direktflug ca. 11,5 Std. am Sa, 19.06.2027 am Abend (2026: ab 19.40 Uhr, Ankunft So ca. 14 Uhr; Uhr +7 Std.). Rückflug: Seoul-Incheon–Zürich ca. 13,5 Std. am Do, 22.07.2027 am Vormittag (2026: ab 11.05 Uhr), Ankunft am Abend. Korean Air fliegt im Sommer nur dreimal pro Woche (Di, Do, Sa); die Flüge umfliegen Russland und sind deshalb länger. Flugplan 2027 bei der Buchung prüfen."
    ],
    [
      "Wetter",
      "Die ganze Reise fällt in die Regenzeit (Jangma): im Mittel ab ca. 19. Juni auf Jeju, ab ca. 23. Juni im Süden und ab ca. 25. Juni in Seoul, bis etwa Ende Juli. Es regnet nicht jeden Tag, aber oft heftig und mehrere Tage am Stück; dazwischen schwül-heiss mit ca. 28–32 °C. Ab Juli sind Taifune möglich, vor allem auf Jeju und in Busan (Fähren und Flüge fallen dann aus). Meer im Juli ca. 21–25 °C. Für Regentage Museen, Aquarien und Indoor-Programm einplanen."
    ],
    [
      "Vorab buchen",
      "Flüge Zürich–Seoul und zurück, Inlandflüge Busan–Jeju und Jeju–Seoul (im Juli gefragt), Zug Gangneung–Gyeongju (nur wenige Züge pro Tag), Mietwagen auf Jeju (internationaler Führerausweis nötig), Unterkunft in Busan und auf Jeju (Ferienbeginn in Korea Mitte/Ende Juli), DMZ-Tour, Aufstieg auf den Hallasan (Online-Reservation)."
    ],
    [
      "Optional",
      "Andong mit dem Dorf Hahoe (zwei Nächte statt Gangneung, schwieriger zu erreichen), Jeonju mit dem Hanok-Viertel, Insel Udo vor Jeju, Everland oder Lotte World, Gamcheon-Kulturdorf in Busan, Suwon mit der Festung Hwaseong."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Wege: mit dem Bus von Seoul in die Berge und an die Ostküste, mit dem Zug der Küste entlang nach Gyeongju und Busan, mit dem Bus nach Tongyeong, mit dem Flugzeug nach Jeju und zurück nach Seoul.",
    breit: true,
    legende: ["bus", "train", "car", "air"],
    karten: [{datei: "karten/suedkorea.svg"}]
  },
  abwechslungIntro: "Megastadt, Granitberge, Strände an der Ostküste, Tempel und Königsgräber, Hafenstadt, Inselwelt im Süden, Vulkaninsel und zum Schluss nochmals Seoul.",
  abwechslung: [
    [
      "Natur",
      "Granitgipfel und Wasserfälle im Nationalpark Seoraksan, die Küste der Ostsee, die Inselwelt bei Tongyeong, auf Jeju Vulkankrater, Lavahöhlen, Wasserfälle und der Hallasan (1’947 m)."
    ],
    [
      "Strand und Baden",
      "Strände bei Sokcho und Gangneung (offizielle Badesaison erst ab Juli), Haeundae und Gwangalli in Busan, auf Jeju Hyeopjae, Geumneung und Jungmun; Wasser ca. 21–25 °C."
    ],
    [
      "Action und Freizeitparks",
      "Lotte World oder Everland, Seilbahn in Seoraksan, Schienenvelo bei Gangneung, Velofahren in Gyeongju, Skyline Luge in Tongyeong, Surfkurs am Jungmun-Strand, Wanderung auf den Hallasan, Kajak und Schnorcheln auf Jeju."
    ],
    [
      "Städte und Kultur",
      "Paläste, Hanok-Viertel und K-Pop in Seoul, die DMZ an der Grenze zu Nordkorea, Königsgräber, Tempel und Sternwarte in Gyeongju (UNESCO), Fischmarkt und Hafen in Busan, die Haenyeo-Taucherinnen auf Jeju."
    ],
    ["Ruhetage", "Meist 3–5 Nächte; Busan und Seogwipo je 5 Nächte, auf Jeju insgesamt 9 Nächte."]
  ],
  stationenIntro: "Neun Stationen von Seoul über die Berge an die Ostküste, der Küste entlang nach Süden bis Busan und Tongyeong, dann auf die Vulkaninsel Jeju und zum Schluss zurück nach Seoul. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Seoul",
      land: "kr",
      region: "Seoul",
      datum: "20.–24. Juni",
      naechte: "4 Nächte",
      anreise: "Direktflug Zürich–Seoul-Incheon mit Korean Air (ca. 11,5 Std., Abflug am Sa, 19.06.2027 am Abend, Ankunft am So, 20.06.2027 am Nachmittag), Zeitverschiebung +7 Std. Mit der Flughafenbahn AREX in die Stadt (ca. 1 Std.).",
      text: "Riesige, sichere und sehr gut organisierte Stadt: Paläste und Hanok-Häuser neben Hochhäusern, Märkte, Street-Food und K-Pop. Vier Nächte zum Ankommen, am Schluss der Reise folgen nochmals vier.",
      teens: "Gyeongbokgung-Palast (mit Hanbok gratis Eintritt), Bukchon-Hanok-Dorf, Myeongdong mit Street-Food, N Seoul Tower, Hongdae mit Strassenmusik und K-Pop-Läden, Gwangjang-Markt, Velofahren am Han-Fluss.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: Ankunft am Sonntagnachmittag, ein Tag Paläste und Bukchon, ein Tag Myeongdong, N Seoul Tower und Han-Fluss, ein Tag Hongdae oder Markt. Freizeitpark und DMZ folgen am Ende der Reise.",
        "<strong>Unterwegs:</strong> U-Bahn mit T-money-Karte (am Flughafen oder in Convenience Stores), Taxis sind günstig. Karten-Apps: Naver Map oder KakaoMap (Google Maps zeigt in Korea kaum Fusswege).",
        "<strong>Essen:</strong> Koreanisches Barbecue, Bibimbap, Fried Chicken, Tteokbokki; viel ist scharf, «an maepge» heisst «nicht scharf»."
      ],
      ausserdem: "Changdeokgung mit dem Geheimen Garten, Insadong, Cheonggyecheon-Bach, Lotte World Tower (Aussichtsplattform), Nationalmuseum (gratis), COEX-Aquarium und die Starfield Library.",
      bilder: [
        {titel: "Gyeongbokgung", suche: "Gyeongbokgung Palace", stichwort: "gyeongbokgung"},
        {titel: "Bukchon", suche: "Bukchon Hanok Village", stichwort: "bukchon"},
        {titel: "N Seoul Tower", suche: "N Seoul Tower Namsan", stichwort: "seoul tower|namsan"},
        {titel: "Myeongdong", suche: "Myeongdong street Seoul", stichwort: "myeongdong"},
        {titel: "Han-Fluss", suche: "Han River Seoul skyline", stichwort: "han river|seoul"},
        {titel: "Gwangjang-Markt", suche: "Gwangjang Market Seoul", stichwort: "gwangjang"}
      ]
    },
    {
      nr: 2,
      name: "Sokcho / Seoraksan",
      ersatzsuche: "Seoraksan",
      land: "kr",
      region: "Gangwon",
      datum: "24.–27. Juni",
      naechte: "3 Nächte",
      anreise: "Expressbus ab dem Seoul Express Bus Terminal oder Dong Seoul nach Sokcho (ca. 2,5–3 Std., etwa alle 30 Min.). Plätze vorab reservieren, vor allem am Wochenende.",
      text: "Hafenstadt an der Ostküste am Fuss des Nationalparks Seoraksan: schroffe Granitgipfel, Tempel und Wasserfälle, dazu Strand, Fischmarkt und ein See mitten in der Stadt.",
      teens: "Seilbahn zur Felsfestung Gwongeumseong, Wanderung zum Biryong-Wasserfall oder zum Felsen Ulsanbawi (steil, ca. 4–5 Std. hin und zurück), Strand von Sokcho, Fischmarkt mit Tintenfisch-Sundae, Velofahren um den Yeongnangho-See.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Seoraksan mit Seilbahn und kurzer Wanderung, ein Tag Strand und Fischmarkt, ein Reservetag für Regen oder eine längere Wanderung.",
        "<strong>Praktisch:</strong> Stadtbus 7 oder 7-1 von Sokcho zum Parkeingang Seorak-dong (ca. 30–40 Min.). Für die Seilbahn früh am Morgen anstehen, bei Regen und Gewitter sind Wege teilweise gesperrt.",
        "<strong>Baden:</strong> Die offizielle Badesaison an der Ostküste beginnt erst Anfang Juli (Rettungsschwimmer); im Juni ist das Wasser noch kühl (ca. 18–21 °C)."
      ],
      ausserdem: "Tempel Sinheungsa mit grossem Bronze-Buddha, Abai-Dorf mit der Handfähre Gaetbae, Leuchtturm Yeonggeumjeong, Strand von Naksan mit dem Tempel Naksansa (bei Yangyang).",
      bilder: [
        {titel: "Seoraksan", suche: "Seoraksan National Park", stichwort: "seorak"},
        {titel: "Ulsanbawi", suche: "Ulsanbawi Seoraksan", stichwort: "ulsanbawi"},
        {titel: "Sinheungsa", suche: "Sinheungsa Buddha Seoraksan", stichwort: "sinheungsa"},
        {titel: "Strand von Sokcho", suche: "Sokcho beach", stichwort: "sokcho"},
        {titel: "Seilbahn", suche: "Seoraksan cable car|Gwongeumseong", stichwort: "cable|gwongeumseong"},
        {titel: "Yeongnangho", suche: "Yeongnangho Lake Sokcho", stichwort: "yeongnang"}
      ]
    },
    {
      nr: 3,
      name: "Gangneung",
      land: "kr",
      region: "Gangwon",
      datum: "27.–29. Juni",
      naechte: "2 Nächte",
      anreise: "Bus vom Intercity-Busterminal Sokcho nach Gangneung (ca. 1–1,5 Std., etwa alle 30 Min.), am Meer entlang.",
      text: "Küstenstadt mit langen Sandstränden, Kiefernwäldern, einer bekannten Kaffeestrasse und dem Olympiapark von 2018. Zwei ruhige Tage am Meer.",
      teens: "Schienenvelo am Meer (Jeongdongjin oder Gyeongpo), Strände Gyeongpo und Anmok mit der Kaffeestrasse, Arte Museum (digitale Kunst, gut bei Regen), Hafen Jumunjin mit dem Ort der K-Drama-Szene.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Strand, Schienenvelo und Kaffeestrasse, ein halber Tag Ojukheon (Geburtshaus zweier Gelehrter auf den Geldscheinen) oder Arte Museum.",
        "<strong>Baden:</strong> Wie in Sokcho beginnt die Badesaison erst im Juli; Ende Juni eher Strandspaziergang und Füsse baden."
      ],
      ausserdem: "Gyeongpo-See mit Veloweg, Jeongdongjin (Bahnhof direkt am Meer), Haslla Art World, Olympiapark mit den Eisstadien von 2018.",
      bilder: [
        {titel: "Gyeongpo", suche: "Gyeongpo beach Gangneung", stichwort: "gyeongpo"},
        {titel: "Anmok", suche: "Anmok beach coffee street", stichwort: "anmok"},
        {titel: "Jeongdongjin", suche: "Jeongdongjin", stichwort: "jeongdongjin"},
        {titel: "Ojukheon", suche: "Ojukheon Gangneung", stichwort: "ojukheon"},
        {titel: "Jumunjin", suche: "Jumunjin port|Jumunjin beach", stichwort: "jumunjin"},
        {titel: "Gyeongpo-See", suche: "Gyeongpoho lake", stichwort: "gyeongpo"}
      ]
    },
    {
      nr: 4,
      name: "Gyeongju",
      land: "kr",
      region: "Gyeongbuk",
      datum: "29. Juni–2. Juli",
      naechte: "3 Nächte",
      anreise: "Zug auf der neuen Ostküstenlinie (Donghae-Linie) von Gangneung nach Gyeongju: KTX-Eum ca. 3–3,5 Std., ITX-Maeum ca. 4–4,5 Std. Nur wenige Züge pro Tag, früh reservieren (Korail). Vom Bahnhof Gyeongju mit Bus oder Taxi in die Altstadt (ca. 20–30 Min.).",
      text: "Hauptstadt des Silla-Reichs vor über 1’000 Jahren: grasbewachsene Königsgräber mitten in der Stadt, Tempel, eine alte Sternwarte und ein See mit Palast, der abends beleuchtet ist. Flach und gut mit dem Velo zu erkunden.",
      teens: "Velotour zwischen Königsgräbern und Sternwarte Cheomseongdae, Grabhügel Cheonmachong zum Hineingehen, Teich Donggung und Wolji am Abend, Tempel Bulguksa und Seokguram-Grotte (UNESCO), Hanok-Gasse Hwangnidan-gil.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag mit dem Velo durch die Altstadt und abends zum beleuchteten Teich, ein Tag Bulguksa und Seokguram, ein halber Tag Nationalmuseum (gut bei Regen).",
        "<strong>Übernachten:</strong> Ein Hanok-Gästehaus mit Schlafmatten auf dem Boden (Ondol) ist ein Erlebnis; vorab nach Familienzimmern fragen."
      ],
      ausserdem: "Yangdong-Dorf (UNESCO, mit Bus erreichbar), Bomun-See mit Velowegen und dem Freizeitpark Gyeongju World, Gyochon-Dorf.",
      bilder: [
        {titel: "Bulguksa", suche: "Bulguksa temple", stichwort: "bulguksa"},
        {titel: "Königsgräber", suche: "Daereungwon tumuli Gyeongju", stichwort: "daereungwon|tumuli"},
        {titel: "Donggung und Wolji", suche: "Donggung Palace Wolji Pond", stichwort: "wolji|donggung"},
        {titel: "Cheomseongdae", suche: "Cheomseongdae", stichwort: "cheomseongdae"},
        {titel: "Seokguram", suche: "Seokguram Grotto", stichwort: "seokguram"},
        {titel: "Hwangnidan-gil", suche: "Hwangnidan-gil Gyeongju|Gyeongju hanok", stichwort: "hwangnidan|hanok"}
      ]
    },
    {
      nr: 5,
      name: "Busan",
      land: "kr",
      region: "Busan",
      datum: "2.–7. Juli",
      naechte: "5 Nächte",
      anreise: "KTX ab Bahnhof Gyeongju nach Busan (ca. 30 Min.) oder Bus ab dem Busterminal Gyeongju nach Busan-Haeundae oder Nopo (ca. 50–60 Min.). In Busan mit U-Bahn oder Taxi zur Unterkunft.",
      text: "Zweitgrösste Stadt Koreas zwischen Bergen und Meer: Stadtstrände mit Skyline, ein riesiger Fischmarkt, Tempel an den Klippen und bunte Hangquartiere. Ab Juli offizielle Badesaison.",
      teens: "Strand Haeundae und Gwangalli mit der beleuchteten Brücke am Abend, Sky Capsule und Blueline Park am Meer, bunte Treppen im Gamcheon-Kulturdorf, Fischmarkt Jagalchi, Tempel Haedong Yonggungsa an den Klippen, SEA LIFE Aquarium.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: zwei Strandtage, ein Tag Gamcheon und Jagalchi, ein Tag Haedong Yonggungsa und Sky Capsule, ein Reservetag für Regen (Aquarium, Spa Land oder Museen).",
        "<strong>Wohnen:</strong> Haeundae oder Gwangalli für Strand, Seomyeon für Einkaufen und Essen. U-Bahn verbindet alles.",
        "<strong>Wetter:</strong> Bei Taifun-Warnung sind die Strände gesperrt; dann auf Indoor-Programm ausweichen."
      ],
      ausserdem: "Taejongdae-Klippen, Songdo mit der Seilbahn über dem Meer, Huinnyeoul-Kulturdorf, Busan X the Sky (Aussicht), Lotte World Adventure Busan.",
      bilder: [
        {titel: "Haeundae", suche: "Haeundae beach", stichwort: "haeundae"},
        {titel: "Gamcheon", suche: "Gamcheon Culture Village", stichwort: "gamcheon"},
        {titel: "Gwangan-Brücke", suche: "Gwangan Bridge night|Gwangalli beach", stichwort: "gwangan"},
        {titel: "Haedong Yonggungsa", suche: "Haedong Yonggungsa", stichwort: "yonggungsa"},
        {titel: "Jagalchi", suche: "Jagalchi fish market", stichwort: "jagalchi"},
        {titel: "Sky Capsule", suche: "Haeundae Blueline Park sky capsule", stichwort: "blueline|capsule"}
      ]
    },
    {
      nr: 6,
      name: "Tongyeong",
      land: "kr",
      region: "Gyeongnam",
      datum: "7.–9. Juli",
      naechte: "2 Nächte",
      anreise: "Bus ab dem Busterminal Busan-Seobu (Sasang) nach Tongyeong (ca. 1,5–2 Std., häufig). Unterwegs über die Brücken der Insel Geoje.",
      text: "Kleine Hafenstadt an der zerklüfteten Südküste mit Hunderten von Inseln: Seilbahn mit Blick über das Inselmeer, Rodelbahn, bemalte Gassen und frischer Fisch.",
      teens: "Skyline Luge (Rodelbahn mit Sessellift, mehrere Fahrten), Seilbahn auf den Mireuksan mit Blick über die Inseln, Wandmalereien im Dorf Dongpirang, Bootsausflug zur Insel Somaemuldo oder Jangsado.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte: ein Tag Seilbahn, Luge und Dongpirang, ein halber Tag Hafen oder Bootsausflug.",
        "<strong>Weiterreise:</strong> Busse vom Terminal Tongyeong zum Flughafen Busan-Gimhae (ca. 1,5–2 Std.); genug Reserve vor dem Flug nach Jeju einplanen."
      ],
      ausserdem: "Nachbau eines Schildkrötenschiffs am Hafen, Fischmarkt Jungang, Insel Hallyeodo, Strand Wahyeon auf Geoje, Botanischer Garten Oedo (Bootsausflug ab Geoje).",
      bilder: [
        {titel: "Tongyeong", suche: "Tongyeong harbor", stichwort: "tongyeong"},
        {titel: "Skyline Luge", suche: "Skyline Luge Tongyeong", stichwort: "luge"},
        {titel: "Mireuksan", suche: "Mireuksan Tongyeong cable car", stichwort: "mireuksan|cable"},
        {titel: "Dongpirang", suche: "Dongpirang mural village", stichwort: "dongpirang"},
        {titel: "Inselmeer", suche: "Hallyeohaesang National Park", stichwort: "hallyeo"},
        {titel: "Somaemuldo", suche: "Somaemuldo", stichwort: "somaemul"}
      ]
    },
    {
      nr: 7,
      name: "Jeju Westküste",
      ersatzsuche: "Jeju Island",
      land: "kr",
      region: "Jeju",
      datum: "9.–13. Juli",
      naechte: "4 Nächte",
      anreise: "Bus von Tongyeong zum Flughafen Busan-Gimhae (ca. 1,5–2 Std.), Inlandflug nach Jeju (ca. 1 Std., viele Flüge pro Tag). Mietwagen am Flughafen Jeju abholen und an die Westküste nach Hyeopjae oder Aewol fahren (ca. 45 Min.).",
      text: "Vulkaninsel im Süden mit schwarzen Lavafelsen, hellen Sandstränden, Teefeldern und dem Hallasan in der Mitte. Der Westen ist ruhiger, mit dem schönsten Strand der Insel und Sonnenuntergängen über dem Meer.",
      teens: "Strand Hyeopjae und Geumneung mit türkisfarbenem Wasser, Schnorcheln oder Kajak an geschützten Buchten, Teefelder und Museum von O'sulloc, Fahrt mit dem Velo der Küstenstrasse entlang, Grüner-Tee-Glace, Gotjawal-Wald (Hwansang-Wald).",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: zwei Strandtage, ein Tag Teefelder und Hallim-Park mit Lavahöhlen, ein Reservetag für Regen (Museen, Aquarium, Café).",
        "<strong>Mietwagen:</strong> Für Schweizer nötig: Führerausweis, internationaler Führerausweis (Büchlein nach dem Genfer Abkommen, vom TCS) und Reisepass; Kreditkarte. Rechtsverkehr, viele Radarkameras.",
        "<strong>Baden:</strong> Badesaison auf Jeju von ca. Anfang Juli bis Ende August, Wasser im Juli ca. 22–25 °C. Quallen möglich; nur an bewachten Stränden schwimmen."
      ],
      ausserdem: "Hallim-Park, Hyeopjae-Höhle, Suwolbong-Felsen bei Gosan, Seogwang-Teefelder, Dorf Aewol mit Cafés am Meer, Jeju Folk Village.",
      bilder: [
        {titel: "Hyeopjae", suche: "Hyeopjae beach", stichwort: "hyeopjae"},
        {titel: "Geumneung", suche: "Geumneung beach Jeju", stichwort: "geumneung"},
        {titel: "Teefelder", suche: "O'sulloc tea field Jeju|Jeju green tea field", stichwort: "tea|sulloc"},
        {titel: "Aewol", suche: "Aewol coast Jeju", stichwort: "aewol"},
        {titel: "Hallim-Park", suche: "Hallim Park Jeju", stichwort: "hallim"},
        {titel: "Suwolbong", suche: "Suwolbong Jeju", stichwort: "suwolbong"}
      ]
    },
    {
      nr: 8,
      name: "Seogwipo (Jeju Süd)",
      ersatzsuche: "Seogwipo",
      land: "kr",
      region: "Jeju",
      datum: "13.–18. Juli",
      naechte: "5 Nächte",
      anreise: "Mit dem Mietwagen der Südküste entlang nach Seogwipo oder Jungmun (ca. 45 Min.–1 Std.).",
      text: "Süden der Insel mit Wasserfällen, die direkt ins Meer stürzen, sechseckigen Basaltsäulen und dem Surfstrand Jungmun. Von hier aus sind der Hallasan, der Krater Seongsan Ilchulbong und die Lavahöhle Manjanggul gut erreichbar.",
      teens: "Wanderung auf den Hallasan (Seongpanak-Weg, ca. 9–10 Std. hin und zurück, Reservation nötig) oder kürzer auf den Krater Seongsan Ilchulbong, Lavahöhle Manjanggul (UNESCO), Surfkurs in Jungmun, Wasserfall Jeongbang und Cheonjiyeon, Insel Udo mit dem Velo, Haenyeo-Taucherinnen.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: ein Tag Hallasan oder der Osten mit Seongsan und Manjanggul, ein Tag Insel Udo, ein Surf- und Strandtag, ein Tag Wasserfälle und Basaltsäulen Jusangjeolli, ein Reservetag für Regen.",
        "<strong>Hallasan:</strong> Gipfel nur über die Wege Seongpanak und Gwaneumsa, beide mit Online-Reservation (visithalla.jeju.go.kr) und Tageslimit; früh starten, bei Regen oder Gewitter werden die Wege gesperrt. Der Yeongsil-Weg ist kürzer (ca. 4–5 Std., ohne Gipfel und ohne Reservation).",
        "<strong>Wetter:</strong> Jeju wird bei Taifunen oft als Erstes getroffen; dann Flüge und Fähren zu Udo prüfen."
      ],
      ausserdem: "Jusangjeolli-Basaltsäulen, Cheonjeyeon-Wasserfälle, Olle-Wanderwege an der Küste, Hamel-Schiffswrack-Museum, Aqua Planet Jeju bei Seongsan (gut bei Regen), Halbinsel Seopjikoji.",
      bilder: [
        {titel: "Seongsan Ilchulbong", suche: "Seongsan Ilchulbong", stichwort: "seongsan"},
        {titel: "Jeongbang-Wasserfall", suche: "Jeongbang Waterfall", stichwort: "jeongbang"},
        {titel: "Hallasan", suche: "Hallasan Baengnokdam", stichwort: "hallasan|baengnokdam"},
        {titel: "Jusangjeolli", suche: "Jusangjeolli Cliff", stichwort: "jusangjeolli"},
        {titel: "Manjanggul", suche: "Manjanggul lava tube", stichwort: "manjanggul"},
        {titel: "Udo", suche: "Udo island Jeju", stichwort: "udo"}
      ]
    },
    {
      nr: 9,
      name: "Seoul (Abschluss)",
      ersatzsuche: "Seoul",
      land: "kr",
      region: "Seoul",
      datum: "18.–22. Juli",
      naechte: "4 Nächte",
      anreise: "Mietwagen am Flughafen Jeju abgeben (ab Seogwipo ca. 1 Std.), Inlandflug nach Seoul-Gimpo (ca. 1–1,25 Std., sehr viele Flüge pro Tag), mit U-Bahn oder Taxi zur Unterkunft, z.B. in Jamsil oder Gangnam.",
      text: "Zum Schluss nochmals Seoul, diesmal im Süden der Stadt: Freizeitpark, die Grenze zu Nordkorea und Zeit zum Einkaufen, bevor es nach Hause geht.",
      teens: "Lotte World (Freizeitpark, grösstenteils überdacht, gut bei Regen) oder Everland, Lotte World Tower mit Glasboden, Tagesausflug in die DMZ (nur mit Tour, Mindestalter je nach Tour prüfen), Einkaufen in Gangnam und COEX, Han-Fluss am Abend mit Brückenbrunnen.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte: ein Tag Freizeitpark, ein Tag DMZ-Tour, ein Tag Einkaufen und Han-Fluss, am Do am Morgen zum Flughafen.",
        "<strong>DMZ:</strong> Nur mit organisierter Tour und Reisepass; die Gemeinsame Sicherheitszone (JSA) ist oft geschlossen, die Touren gehen dann zu Aussichtspunkten und Tunneln. Rechtzeitig buchen.",
        "<strong>Abreise:</strong> Der Rückflug geht am Vormittag; ab Gangnam oder Jamsil mit dem Flughafenbus (Limousine Bus) oder Taxi nach Incheon (ca. 1–1,5 Std.), rund 3 Std. vor Abflug am Flughafen sein."
      ],
      ausserdem: "Bongeunsa-Tempel neben COEX, Olympiapark, Banpo-Brücke mit dem Regenbogenbrunnen, Seoul Forest, National Folk Museum.",
      bilder: [
        {titel: "Lotte World", suche: "Lotte World Seoul", stichwort: "lotte world"},
        {titel: "Lotte World Tower", suche: "Lotte World Tower", stichwort: "lotte"},
        {titel: "DMZ", suche: "Demilitarized Zone Korea observatory|Panmunjom", stichwort: "dmz|panmunjom|demilitar"},
        {titel: "Banpo-Brücke", suche: "Banpo Bridge Moonlight Rainbow Fountain", stichwort: "banpo"},
        {titel: "Starfield Library", suche: "Starfield Library COEX", stichwort: "starfield|coex"},
        {titel: "Bongeunsa", suche: "Bongeunsa temple", stichwort: "bongeunsa"}
      ]
    }
  ],
  abschluss: "Direktflug ab Seoul-Incheon nach Zürich am Do, 22.07.2027 am Vormittag (ca. 13,5 Std.), Ankunft am Abend, dann mit der Bahn nach Brig-Glis. Bis zum Ferienende bleiben zwei Tage gegen den Jetlag.",
  budgetIntro: "Mittelklasse inklusive Flüge, Bahn und Bus, Mietwagen auf Jeju, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    posten: [
      [
        "Flüge Zürich–Seoul und zurück (Korean Air)",
        "5’200–7’200",
        "6’200",
        "ca. 1’300–1’800 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"
      ],
      ["Inlandflüge Busan–Jeju und Jeju–Seoul", "500–1’000", "700", "ca. 60–125 pro Person und Flug inkl. Gepäck"],
      [
        "Bahn, Busse, U-Bahn und Taxis",
        "600–1’000",
        "800",
        "Flughafenbahn AREX, Expressbusse, Zug Gangneung–Gyeongju, KTX nach Busan, Busse nach Tongyeong und zum Flughafen, U-Bahn und Taxis in Seoul und Busan"
      ],
      [
        "Mietwagen auf Jeju (9 Tage)",
        "600–1’000",
        "800",
        "Kleinwagen oder Kompakt-SUV mit Vollkasko, Benzin und Parkgebühren"
      ],
      [
        "Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)",
        "4’300–7’000",
        "5’600",
        "ca. 180–280 CHF pro Nacht in Seoul, sonst ca. 120–200; auf Jeju und in Busan im Juli eher teurer"
      ],
      [
        "Verpflegung (Restaurants, Street-Food, Getränke)",
        "3’000–4’600",
        "3’700",
        "ca. 90–140 CHF pro Tag für 4 Personen"
      ],
      [
        "Aktivitäten und Eintritte",
        "1’400–2’400",
        "1’800",
        "Paläste, N Seoul Tower, Seilbahn Seoraksan, Schienenvelo, Bulguksa und Seokguram, Sky Capsule und Aquarium in Busan, Skyline Luge und Seilbahn in Tongyeong, Surfkurs und Höhlen auf Jeju, Lotte World oder Everland, DMZ-Tour usw."
      ],
      [
        "Versicherung, eSIM, Reiseapotheke",
        "400–800",
        "550",
        "Reisekranken- und Annullationsschutz, eSIM, Mückenschutz; keine besonderen Impfungen nötig"
      ],
      ["Reserve (ca. 4 %)", "650–1’100", "850", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Seoul (4)", "1’500–2’300"],
      ["2. Sokcho / Seoraksan (3)", "800–1’250"],
      ["3. Gangneung (2)", "500–800"],
      ["4. Gyeongju (3)", "750–1’150"],
      ["5. Busan (5)", "1’400–2’150"],
      ["6. Tongyeong (2)", "500–800"],
      ["7. Jeju Westküste (4)", "1’200–1’850"],
      ["8. Seogwipo (5)", "1’350–2’100"],
      ["9. Seoul (4)", "1’500–2’300"]
    ],
    hinweise: [
      "Preise für die Kids: In Korea zahlen Kinder oft bis 12 oder bis 18 Jahre reduzierte Preise (Freizeitparks, Seilbahnen, Museen); bei den Flügen zahlen beide den vollen Preis.",
      "Sparhebel: Expressbus statt Zug, Gästehäuser und Pensionen statt Hotels (vor allem auf Jeju), Mittagsmenüs in einfachen Restaurants, Paläste und Museen sind günstig oder gratis.",
      "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug- und Hotelpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."
    ],
    naechte: 32,
    total: "21’000",
    spanne: "16’650–26’100",
    proTag: "ca. 660 CHF pro Tag, ca. 5’250 pro Person"
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    [
      "Einreise",
      "Für Schweizer Touristen bis 90 Tage visumfrei. Die Pflicht zur elektronischen Reisegenehmigung K-ETA ist für die Schweiz bis 31.12.2026 ausgesetzt; ob das 2027 noch gilt, ist offen: vor der Reise auf k-eta.go.kr und beim EDA prüfen und nur auf der offiziellen Seite beantragen. Die Einreisekarte kann vorab online als e-Arrival Card ausgefüllt werden. Reisepass mind. 6 Monate gültig."
    ],
    [
      "Gesundheit",
      "Sehr gute Spitäler, keine besonderen Impfungen nötig, kaum Dengue. Im Sommer Malaria-Risiko (gering) nur im Grenzgebiet zu Nordkorea: bei der DMZ-Tour Mückenschutz. Hitze und hohe Luftfeuchtigkeit: viel trinken, mittags Pausen."
    ],
    [
      "Wasser und Essen",
      "Leitungswasser ist trinkbar, die meisten Koreaner trinken trotzdem gefiltertes Wasser (in Restaurants gratis). Viel Essen ist scharf; mildere Gerichte gibt es überall."
    ],
    [
      "Regen und Taifune",
      "Leichte Regenjacken, Schirm und schnell trocknende Schuhe mitnehmen. Taifun-Warnungen der Wetterbehörde (KMA) und der Apps beachten; bei Warnungen fallen Flüge nach Jeju und Bootsausflüge aus, dann einen Tag Puffer einplanen."
    ],
    [
      "Transport",
      "Züge über Korail (App KorailTalk), Expressbusse über T-money GO oder Kobus/Bustago; beide mit ausländischer Kreditkarte buchbar. Für Stadtbusse und U-Bahn T-money-Karte. Naver Map oder KakaoMap statt Google Maps verwenden."
    ],
    [
      "Kultur",
      "In Häusern, Hanok-Unterkünften und manchen Restaurants Schuhe ausziehen. Kein Trinkgeld. Im Bus und in der U-Bahn leise telefonieren; Sitzplätze für Ältere frei lassen."
    ],
    [
      "Geld und Technik",
      "Kreditkarten werden fast überall akzeptiert, wenig Bargeld nötig (KRW für Märkte und Busse). eSIM mit Datenvolumen; WLAN ist fast überall gratis. Steckdosen Typ C/F wie in Deutschland, für Schweizer Stecker einen Adapter mitnehmen."
    ],
    ["Zeitzonen", "Südkorea +7 Std. zur Schweiz (Sommerzeit)."],
    [
      "Versicherung",
      "Reisekranken- und Rücktransportversicherung; Spitäler in Seoul, Busan und Jeju sehr gut, aber teuer ohne Versicherung."
    ],
    [
      "Notfall",
      "119 (Ambulanz und Feuerwehr), 112 (Polizei), 1330 (Touristen-Hotline, auch auf Englisch). Schweizer Botschaft in Seoul. EDA-Reisehinweise vor der Abreise lesen."
    ],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."]
  ]
};
