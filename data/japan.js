// Reise 4: Japan-Rundreise ab Tokio (nur Bahn und Fähre, keine Inlandflüge)
// Daten in "datum" ohne Wochentag schreiben (z.B. "19.–22. Juni"), die Wochentage rechnet js/app.js aus.
// Texte dürfen einfaches HTML enthalten (<b>, <strong>, <i>).
window.REISEN = window.REISEN || {};
REISEN.japan = {
  titel: "Japan-Rundreise ab Tokio",
  menu: "Japan",
  untertitel: "Fünf Wochen mit dem Zug durch Japan: Grossstadt, Tempel, Berge, Kunstinseln und der Regenwald von Yakushima.",
  zeitraum: "Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene und 2 Kids",
  titelbild: {
    suche: "Chureito Pagoda Mount Fuji|Mount Fuji Lake Ashi Hakone|Fushimi Inari torii",
    stichwort: "chureito|fuji|fushimi inari",
    alt: "Landschaft in Japan"
  },
  planIntro: "Abflug ab Zürich am Fr, 18.06.2027 um 13 Uhr, Rückflug ab Tokio am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.",
  hinflug: {
    datum: "18.–19. Juni",
    name: "Flug Zürich–Tokio",
    info: "Abflug Fr, 18.06.2027 um 13 Uhr, Direktflug ca. 13 Std., Ankunft in Tokio-Narita am Sa, 19.06.2027 um ca. 9 Uhr"
  },
  plan: [
    {datum: "19.–23. Juni", name: "1. Tokio", naechte: 4, info: "Narita Express oder Skyliner in die Stadt (ca. 1 Std.)"},
    {datum: "23.–25. Juni", name: "2. Nikko", naechte: 2, info: "Zug ab Tokio (ca. 2 Std.)"},
    {datum: "25.–27. Juni", name: "3. Hakone", naechte: 2, info: "Zug über Tokio (ca. 4–4,5 Std.)"},
    {datum: "27.–30. Juni", name: "4. Takayama", naechte: 3, info: "Shinkansen bis Nagoya, Limited Express Hida (ca. 4,5–5 Std.)"},
    {datum: "30. Juni–5. Juli", name: "5. Kyoto", naechte: 5, info: "Limited Express Hida und Shinkansen (ca. 3,5–4 Std.)"},
    {datum: "5.–8. Juli", name: "6. Osaka", naechte: 3, info: "Zug ab Kyoto (ca. 15–30 Min.)"},
    {datum: "8.–11. Juli", name: "7. Hiroshima und Miyajima", naechte: 3, info: "Shinkansen ab Osaka (ca. 1,5 Std.)"},
    {datum: "11.–12. Juli", name: "Zwischenübernachtung Kagoshima", naechte: 1, info: "Shinkansen ab Hiroshima (ca. 2,5 Std.)"},
    {datum: "12.–17. Juli", name: "8. Yakushima", naechte: 5, info: "Schnellfähre (Jetfoil) ab Kagoshima (ca. 2–3 Std.)"},
    {datum: "17.–19. Juli", name: "9. Okayama und Naoshima", naechte: 2, info: "Jetfoil nach Kagoshima, Shinkansen (ca. 6–7 Std. insgesamt)"},
    {datum: "19.–21. Juli", name: "10. Shimoda (Izu)", naechte: 2, info: "Shinkansen bis Atami, Zug nach Shimoda (ca. 4,5–5,5 Std.)"},
    {datum: "21.–22. Juli", name: "11. Tokio", naechte: 1, info: "Limited Express Odoriko (ca. 2,5–3 Std.); Rückflug 22. Juli"}
  ],
  rueckflug: {datum: "22. Juli", name: "Flug Tokio–Zürich", info: "Rückflug ab Narita, Direktflug ca. 14,5 Std. (Flugtage prüfen)"},
  planHinweise: [
    [
      "Gesamt",
      "33 Nächte, 11 Stationen und eine Zwischenübernachtung (Kagoshima). Nur Hin- und Rückflug, alle Strecken dazwischen mit Shinkansen, Zügen und der Schnellfähre nach Yakushima. Die längsten Reisetage: Yakushima–Okayama (ca. 6–7 Std.), Okayama–Shimoda (ca. 4,5–5,5 Std.), Hakone–Takayama (ca. 4,5–5 Std.) und Nikko–Hakone (ca. 4–4,5 Std.). Zusammen sind es ca. 35 Stunden reine Reisezeit; mit Umsteigen, Wegen zum Bahnhof und Wartezeiten realistisch ca. 40–45 Stunden."
    ],
    [
      "Vorab buchen",
      "Unterkünfte in Tokio, Kyoto und auf Yakushima (Juli ist Ferienzeit in Japan), Universal Studios Japan mit Express Pass, Tokyo DisneySea, teamLab, Ghibli-Museum (Tickets nur online, ab dem 10. des Vormonats), Jetfoil nach Yakushima, Sitzplätze in Shinkansen und Limited Express."
    ],
    [
      "Gepäck",
      "Grosse Koffer per Gepäckservice (Takkyubin, ca. 2’000–3’000 Yen pro Stück) von Hotel zu Hotel vorausschicken und nur Tagesgepäck in den Zug nehmen. Das macht die vielen Bahnfahrten deutlich angenehmer."
    ],
    [
      "Optional",
      "Kamikochi (Bergtal in den Alpen, ab Takayama), Nara (Hirsche und Todai-ji, Tagesausflug ab Kyoto oder Osaka), Himeji (Burg, auf dem Weg nach Hiroshima), Sakurajima (aktiver Vulkan bei Kagoshima), Hokkaido (kühl und ohne Regenzeit, ab Tokio ca. 4 Std. bis Hakodate)."
    ],
    [
      "Flug ab und nach Zürich",
      "Hinflug: Swiss-Direktflug Zürich–Tokio-Narita ca. 13 Std. (Zeitverschiebung +7 Std.). Abflug am Fr, 18.06.2027 um 13 Uhr, Ankunft am Sa, 19.06.2027 um ca. 9 Uhr. Rückflug: Direktflug Narita–Zürich ca. 14,5 Std. (Abflug ca. 11 Uhr, Ankunft am selben Tag um ca. 18.30 Uhr). Swiss fliegt nicht täglich: Fliegt am Do, 22.07.2027 kein Direktflug, auf Mi oder Fr ausweichen oder mit Umstieg fliegen (ca. 16–20 Std.). Flugtage und Zeiten bei der Buchung prüfen."
    ]
  ],
  karte: {
    intro: "Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel.",
    breit: true,
    legende: ["train", "ferry"],
    karten: [{datei: "karten/japan.svg"}]
  },
  abwechslungIntro: "Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen. In der Hitze ab Mitte Juli Programm auf Morgen und Abend legen.",
  abwechslung: [
    ["Action und Freizeitparks", "Tokio (DisneySea, teamLab, Akihabara), Osaka (Universal Studios Japan mit Super Nintendo World), Spielhallen und Arcades in jeder Grossstadt."],
    ["Kultur und Geschichte", "Kyoto (Fushimi Inari, Kinkaku-ji, Gion), Nikko (Toshogu-Schrein), Hiroshima (Friedenspark), Miyajima (Schrein im Meer), Takayama (Altstadt)."],
    ["Natur und Tiere", "Regenwald und uralte Zedern auf Yakushima, Japanische Alpen bei Takayama, Wasserfälle in Nikko, Vulkantal Owakudani in Hakone, Hirsche in Miyajima."],
    ["Strand und Erholung", "Yakushima (Schnorcheln mit Meeresschildkröten), Shimoda (weisse Sandstrände auf der Izu-Halbinsel), Naoshima, Onsen in Hakone."],
    ["Mitmachen", "Sushi- oder Ramen-Kurs, Kimono anziehen in Kyoto, Velotour auf Naoshima, Wanderung im Moosregenwald, Schnorcheln."]
  ],
  stationenIntro: "Elf Stationen von Tokio über Kyoto bis Yakushima und zurück. Über jeder Station steht, wie ihr dorthin kommt.",
  stationen: [
    {
      nr: 1,
      name: "Tokio (Start)",
      land: "jp",
      region: "Kanto",
      datum: "19.–23. Juni",
      naechte: "4 Nächte",
      anreise: "Direktflug Zürich–Tokio-Narita (ca. 13 Std.), dann Narita Express oder Keisei Skyliner in die Stadt (ca. 1 Std.). Vor Ort U-Bahn und JR-Ringlinie mit einer IC-Karte (Suica oder Pasmo).",
      text: "Die grösste Stadt der Welt als Einstieg: Hochhäuser, Neonlichter, ruhige Schreine und Parks liegen hier dicht beieinander. Alles ist sauber, sicher und mit der U-Bahn gut zu erreichen.",
      teens: "Shibuya-Kreuzung und Aussicht von Shibuya Sky, teamLab Planets (digitale Kunst), Akihabara (Manga, Games), Pokémon Center, Tokyo DisneySea (ein Tag), Ghibli-Museum in Mitaka.",
      fakten: [
        "<strong>Dauer:</strong> 4 Nächte, davon einer für den Jetlag (Zeitverschiebung +7 Std.). Am ersten Tag nur leichtes Programm.",
        "<strong>Unterkunft:</strong> Zimmer für vier Personen sind in Tokio selten und klein. Familienzimmer früh buchen oder Apartment wählen; Shinjuku, Shibuya oder Asakusa sind gute Lagen.",
        "<strong>Wetter:</strong> Ende Juni ist Regenzeit (Tsuyu): oft bewölkt, feucht und um 25–30 °C, mit Regentagen. Regenschirme gibt es in jedem Laden."
      ],
      ausserdem: "Senso-ji in Asakusa, Meiji-Schrein, Harajuku (Takeshita-Strasse), Odaiba, Tsukiji-Aussenmarkt, Tokyo Skytree.",
      bilder: [
        {titel: "Shibuya", suche: "Shibuya Crossing|Shibuya scramble crossing", stichwort: "shibuya"},
        {titel: "Senso-ji", suche: "Senso-ji Asakusa|Sensoji temple", stichwort: "senso|asakusa"},
        {titel: "Shinjuku", suche: "Shinjuku night|Shinjuku skyline", stichwort: "shinjuku"},
        {titel: "Meiji-Schrein", suche: "Meiji Shrine Tokyo|Meiji Jingu", stichwort: "meiji"},
        {titel: "Tokyo Skytree", suche: "Tokyo Skytree", stichwort: "skytree"},
        {titel: "Akihabara", suche: "Akihabara street|Akihabara", stichwort: "akihabara"}
      ]
    },
    {
      nr: 2,
      name: "Nikko",
      land: "jp",
      region: "Tochigi",
      datum: "23.–25. Juni",
      naechte: "2 Nächte",
      anreise: "Limited Express Spacia ab Tokio-Asakusa nach Tobu-Nikko (ca. 2 Std.) oder Shinkansen bis Utsunomiya und JR Nikko-Linie (ca. 1 Std. 50 Min.).",
      text: "Prunkvolle Schreine und Tempel mitten im Zedernwald, dazu Wasserfälle und ein Bergsee. Nikko ist ein angenehmer Kontrast zur Grossstadt und im Sommer etwas kühler.",
      teens: "Toshogu-Schrein mit den drei Affen, Kegon-Wasserfall (Lift zur Aussichtsplattform), Ruderboot auf dem Chuzenji-See, Edo Wonderland (Ninja-Shows und Samurai-Dorf).",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Ein Tag Schreine, ein Tag Chuzenji-See und Wasserfälle (Bus über die Serpentinenstrasse Irohazaka, ca. 50 Min.).",
        "<strong>Unterkunft:</strong> Ryokan mit Onsen (heisse Quelle) ausprobieren; Tätowierungen sind in vielen Bädern nicht erlaubt, private Bäder fragen.",
        "<strong>Wetter:</strong> In den Bergen kühler als in Tokio, Regenjacke einpacken."
      ],
      ausserdem: "Shinkyo-Brücke, Kanmangafuchi-Schlucht mit Jizo-Statuen, Senjogahara-Hochmoor (Wanderung), Ryuzu-Wasserfall.",
      bilder: [
        {titel: "Toshogu", suche: "Nikko Toshogu|Toshogu shrine", stichwort: "toshogu"},
        {titel: "Kegon-Wasserfall", suche: "Kegon Falls|Kegon waterfall Nikko", stichwort: "kegon"},
        {titel: "Shinkyo-Brücke", suche: "Shinkyo bridge Nikko", stichwort: "shinkyo"},
        {titel: "Chuzenji-See", suche: "Lake Chuzenji", stichwort: "chuzenji"},
        {titel: "Kanmangafuchi", suche: "Kanmangafuchi Abyss Jizo", stichwort: "kanmangafuchi"},
        {titel: "Futarasan-Schrein", suche: "Futarasan Shrine Nikko", stichwort: "futarasan"}
      ]
    },
    {
      nr: 3,
      name: "Hakone",
      land: "jp",
      region: "Kanagawa",
      datum: "25.–27. Juni",
      naechte: "2 Nächte",
      anreise: "Zug zurück nach Tokio (ca. 2 Std.), dann Odakyu Romancecar ab Shinjuku nach Hakone-Yumoto (ca. 1,5 Std.). Mit Umsteigen insgesamt ca. 4–4,5 Std.",
      text: "Berge, heisse Quellen und ein Kratersee am Fuss des Fuji. Mit Bergbahn, Seilbahn und Piratenschiff fährt man eine Runde durch die Region.",
      teens: "Seilbahn über das dampfende Vulkantal Owakudani (schwarze Eier), Piratenschiff auf dem Ashi-See, Freilichtmuseum mit Kletterskulpturen, Onsen-Erlebnis.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Der Hakone Free Pass deckt Bergbahn, Seilbahn, Schiff und Busse ab.",
        "<strong>Fuji:</strong> In der Regenzeit ist der Berg oft in Wolken; mit Glück zeigt er sich früh am Morgen.",
        "<strong>Hinweis:</strong> Owakudani kann bei erhöhter Vulkanaktivität gesperrt sein; Lage vor Ort prüfen."
      ],
      ausserdem: "Hakone-Schrein mit Torii im See, Alte Tokaido-Strasse (Zedernallee), Glasmuseum, Kawaguchiko (Fuji-Seen, als Alternative).",
      bilder: [
        {titel: "Ashi-See", suche: "Lake Ashi Hakone|Lake Ashi Mount Fuji", stichwort: "ashi"},
        {titel: "Hakone-Schrein", suche: "Hakone Shrine torii", stichwort: "hakone shrine|hakone jinja"},
        {titel: "Owakudani", suche: "Owakudani", stichwort: "owakudani"},
        {titel: "Piratenschiff", suche: "Hakone pirate ship Lake Ashi", stichwort: "pirate|ashi"},
        {titel: "Freilichtmuseum", suche: "Hakone Open-Air Museum", stichwort: "open air museum|open-air museum"},
        {titel: "Onsen", suche: "Hakone onsen|onsen open-air bath", stichwort: "onsen"}
      ]
    },
    {
      nr: 4,
      name: "Takayama",
      land: "jp",
      region: "Japanische Alpen",
      datum: "27.–30. Juni",
      naechte: "3 Nächte",
      anreise: "Bus oder Bergbahn nach Odawara, Shinkansen bis Nagoya (ca. 1 Std. 10 Min.), dann Limited Express Hida nach Takayama (ca. 2,5 Std.). Insgesamt ca. 4,5–5 Std.",
      text: "Gut erhaltene Altstadt mit Holzhäusern, Sake-Brauereien und Morgenmärkten, umgeben von den Japanischen Alpen. Ausgangspunkt für das Bergdorf Shirakawa-go.",
      teens: "Shirakawa-go mit den strohgedeckten Bauernhäusern (Bus ca. 50 Min.), Hida-Rind probieren, Velotour durch die Altstadt, Wanderung in Kamikochi (Bergtal, Bus ca. 1,5 Std.).",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte. Ein Tag Altstadt und Märkte, ein Tag Shirakawa-go, ein Tag Kamikochi oder ruhiger Tag.",
        "<strong>Unterkunft:</strong> Ryokan mit japanischem Abendessen (Kaiseki) lohnt sich hier besonders.",
        "<strong>Wetter:</strong> Angenehmer als im Flachland, in Kamikochi deutlich kühler."
      ],
      ausserdem: "Sanmachi-Suji (Altstadtgassen), Hida Folk Village, Takayama Jinya (alte Verwaltung), Shinhotaka-Seilbahn.",
      bilder: [
        {titel: "Altstadt", suche: "Sanmachi Suji Takayama|Takayama old town", stichwort: "takayama|sanmachi"},
        {titel: "Shirakawa-go", suche: "Shirakawa-go|Shirakawago village", stichwort: "shirakawa"},
        {titel: "Kamikochi", suche: "Kamikochi Kappa bridge|Kamikochi", stichwort: "kamikochi"},
        {titel: "Hida Folk Village", suche: "Hida Folk Village", stichwort: "hida"},
        {titel: "Morgenmarkt", suche: "Miyagawa morning market Takayama", stichwort: "miyagawa|takayama"},
        {titel: "Nakabashi-Brücke", suche: "Nakabashi bridge Takayama", stichwort: "nakabashi"}
      ]
    },
    {
      nr: 5,
      name: "Kyoto",
      land: "jp",
      region: "Kansai",
      datum: "30. Juni–5. Juli",
      naechte: "5 Nächte",
      anreise: "Limited Express Hida bis Nagoya (ca. 2,5 Std.), dann Shinkansen nach Kyoto (ca. 35 Min.). Insgesamt ca. 3,5–4 Std.; einmal täglich fährt eine Hida direkt nach Kyoto.",
      text: "Die alte Kaiserstadt mit über tausend Tempeln, Zen-Gärten und den Geisha-Gassen von Gion. Kyoto ist das kulturelle Herz Japans.",
      teens: "Tausende rote Tore am Fushimi-Inari-Schrein (früh am Morgen), Bambuswald und Affenpark in Arashiyama, Kimono-Verleih, Manga-Museum, Tagesausflug zu den Hirschen in Nara.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte: zwei Tage Tempel, ein Tag Arashiyama, ein Tag Nara, dazu ein ruhiger Tag.",
        "<strong>Gion-Matsuri:</strong> Das grosse Stadtfest läuft den ganzen Juli; die Umzüge sind am 17. und 24. Juli. Unterkünfte werden teurer.",
        "<strong>Hitze:</strong> Kyoto liegt in einem Talkessel und wird ab Juli sehr schwül. Tempel früh besuchen, mittags Pause.",
        "<strong>Verhalten:</strong> In Gion keine Geishas fotografieren oder ansprechen; private Gassen sind gesperrt."
      ],
      ausserdem: "Kinkaku-ji (Goldener Pavillon), Kiyomizu-dera, Philosophenweg, Nishiki-Markt, Nijo-Burg, Todai-ji in Nara.",
      bilder: [
        {titel: "Fushimi Inari", suche: "Fushimi Inari torii|Fushimi Inari-taisha", stichwort: "fushimi"},
        {titel: "Kinkaku-ji", suche: "Kinkaku-ji|Kinkakuji golden pavilion", stichwort: "kinkaku"},
        {titel: "Arashiyama", suche: "Arashiyama bamboo grove|Arashiyama", stichwort: "arashiyama"},
        {titel: "Kiyomizu-dera", suche: "Kiyomizu-dera", stichwort: "kiyomizu"},
        {titel: "Gion", suche: "Gion Kyoto Hanamikoji|Gion Kyoto", stichwort: "gion"},
        {titel: "Nara", suche: "Nara deer Todai-ji|Nara Park deer", stichwort: "nara"}
      ]
    },
    {
      nr: 6,
      name: "Osaka",
      land: "jp",
      region: "Kansai",
      datum: "5.–8. Juli",
      naechte: "3 Nächte",
      anreise: "Shinkansen (ca. 15 Min.) oder JR Special Rapid (ca. 30 Min.) von Kyoto nach Osaka.",
      text: "Japans Küche: Street-Food, Neonreklamen und eine lockere Grossstadt-Stimmung. Für Teenager ein Höhepunkt wegen Universal Studios.",
      teens: "Universal Studios Japan mit Super Nintendo World und Harry Potter (ein ganzer Tag, Express Pass empfohlen), Dotonbori mit Takoyaki und Okonomiyaki, Kaiyukan-Aquarium mit Walhai.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Universal Studios, ein Tag Stadt, ein ruhiger Tag.",
        "<strong>Tickets:</strong> Universal Studios früh online buchen; der Zugang zur Super Nintendo World braucht oft eine Zeitfenster-Karte oder den Express Pass.",
        "<strong>Essen:</strong> Kuromon-Markt und Dotonbori am Abend."
      ],
      ausserdem: "Osaka-Burg, Umeda Sky Building, Shinsekai und Tsutenkaku-Turm, Abeno Harukas (Aussicht), Himeji-Burg (Ausflug, ca. 40 Min. mit dem Shinkansen).",
      bilder: [
        {titel: "Dotonbori", suche: "Dotonbori|Dotonbori Osaka night", stichwort: "dotonbori"},
        {titel: "Osaka-Burg", suche: "Osaka Castle", stichwort: "osaka castle|osaka-jo"},
        {titel: "Universal Studios", suche: "Universal Studios Japan", stichwort: "universal"},
        {titel: "Kaiyukan", suche: "Osaka Aquarium Kaiyukan", stichwort: "kaiyukan"},
        {titel: "Takoyaki", suche: "Takoyaki Osaka|Takoyaki", stichwort: "takoyaki"},
        {titel: "Shinsekai", suche: "Shinsekai Tsutenkaku", stichwort: "shinsekai|tsutenkaku"}
      ]
    },
    {
      nr: 7,
      name: "Hiroshima und Miyajima",
      land: "jp",
      region: "Chugoku",
      datum: "8.–11. Juli",
      naechte: "3 Nächte",
      anreise: "Shinkansen ab Shin-Osaka nach Hiroshima (ca. 1,5 Std.).",
      text: "Hiroshima ist heute eine lebendige Stadt, der Friedenspark erinnert an den Atombombenabwurf 1945. Gegenüber liegt Miyajima mit dem berühmten Torii im Meer.",
      teens: "Miyajima mit zahmen Hirschen, Seilbahn und Wanderung auf den Berg Misen, Torii bei Flut und Ebbe, Okonomiyaki nach Hiroshima-Art, Velotour.",
      fakten: [
        "<strong>Dauer:</strong> 3 Nächte: ein Tag Friedenspark und Museum, ein Tag Miyajima, ein ruhiger Tag.",
        "<strong>Friedensmuseum:</strong> Die Ausstellung ist bewegend und teils drastisch; mit den Kids vorher besprechen.",
        "<strong>Miyajima:</strong> Fähre ab Miyajimaguchi (ca. 10 Min.), Besuchergebühr von 100 Yen pro Person."
      ],
      ausserdem: "Atombombenkuppel, Shukkei-en-Garten, Hiroshima-Burg, Okunoshima (Insel der Hasen, Ausflug).",
      bilder: [
        {titel: "Itsukushima", suche: "Itsukushima Shrine torii|Itsukushima torii", stichwort: "itsukushima"},
        {titel: "Atombombenkuppel", suche: "Hiroshima Peace Memorial Genbaku Dome", stichwort: "genbaku|peace memorial|atomic bomb dome"},
        {titel: "Miyajima", suche: "Miyajima deer", stichwort: "miyajima"},
        {titel: "Misen", suche: "Mount Misen Miyajima", stichwort: "misen"},
        {titel: "Shukkei-en", suche: "Shukkeien garden", stichwort: "shukkei"},
        {titel: "Hiroshima-Burg", suche: "Hiroshima Castle", stichwort: "hiroshima castle"}
      ]
    },
    {
      nr: 8,
      name: "Yakushima",
      land: "jp",
      region: "Kagoshima",
      datum: "12.–17. Juli",
      naechte: "5 Nächte",
      zwischenstopp: {text: "Zwischenübernachtung in Kagoshima", datum: "11.–12. Juli"},
      anreise: "Shinkansen ab Hiroshima nach Kagoshima-Chuo (ca. 2 Std. 20 Min.–2 Std. 50 Min.), Übernachtung mit Blick auf den Vulkan Sakurajima. Am Morgen Schnellfähre (Jetfoil Toppy oder Rocket) nach Yakushima (ca. 2–3 Std.).",
      text: "Subtropische Insel mit Moosregenwald, uralten Zedern und Wasserfällen, als Unesco-Welterbe geschützt. Der Wald soll Studio Ghibli zu «Prinzessin Mononoke» inspiriert haben. An der Küste schnorchelt man mit Meeresschildkröten.",
      teens: "Wanderung durch die Shiratani-Unsuikyo-Schlucht zum «Mononoke-Wald», Schnorcheln mit Schildkröten am Isso-Strand (geführte Touren), Ohko-Wasserfall, Flusskajak, Affen und Hirsche an der Westküstenstrasse.",
      fakten: [
        "<strong>Dauer:</strong> 5 Nächte, damit Regentage nicht stören. Ein Mietwagen ist praktisch, Busse fahren selten.",
        "<strong>Wetter:</strong> Yakushima ist einer der regenreichsten Orte Japans. Die Regenzeit endet im Süden im Schnitt Mitte Juli; danach heiss und meist stabiler.",
        "<strong>Schildkröten:</strong> Eiablage am Strand Nagata Inakahama bis Juli (nur mit geführter Nachttour); geschlüpfte Junge ab Ende Juli.",
        "<strong>Jomon Sugi:</strong> Die Wanderung zur ältesten Zeder dauert ca. 10 Std. und ist für die Kids zu lang; Shiratani Unsuikyo (3–5 Std.) reicht."
      ],
      ausserdem: "Yakusugi-Land (kurze Waldrunden), Senpiro-Wasserfall, Hirauchi-Kaichu-Onsen (Felsbad im Meer, nur bei Ebbe), Nagata-Inakahama-Strand.",
      warnung: "Taifune sind ab Juli möglich. Fällt die Fähre aus, verschiebt sich die Weiterreise: einen Puffertag einplanen und flexible Tickets wählen.",
      bilder: [
        {titel: "Shiratani Unsuikyo", suche: "Shiratani Unsuikyo|Shiratani Unsuikyo moss forest", stichwort: "shiratani"},
        {titel: "Yakusugi", suche: "Yakusugi cedar|Yakushima cedar", stichwort: "yakusugi|yakushima"},
        {titel: "Ohko-Wasserfall", suche: "Ohko Falls Yakushima|Oko-no-taki", stichwort: "ohko|oko"},
        {titel: "Küste", suche: "Yakushima coast|Yakushima beach", stichwort: "yakushima"},
        {titel: "Meeresschildkröte", suche: "Yakushima sea turtle|Nagata Inakahama", stichwort: "turtle|inakahama"},
        {titel: "Sakurajima", suche: "Sakurajima Kagoshima", stichwort: "sakurajima"}
      ]
    },
    {
      nr: 9,
      name: "Okayama und Naoshima",
      land: "jp",
      region: "Seto-Inlandsee",
      datum: "17.–19. Juli",
      naechte: "2 Nächte",
      anreise: "Jetfoil nach Kagoshima (ca. 2–3 Std.), Transfer zum Bahnhof, Shinkansen Mizuho oder Sakura nach Okayama (ca. 3–3,5 Std.). Insgesamt ca. 6–7 Std.: der längste Reisetag, Verpflegung mitnehmen.",
      text: "Okayama mit einem der schönsten Gärten Japans ist der Ausgangspunkt für Naoshima, die Kunstinsel in der Seto-Inlandsee mit Museen, Freiluftkunst und Stränden.",
      teens: "Velotour auf Naoshima zu Yayoi Kusamas gelbem Kürbis, Chichu-Kunstmuseum, Baden am Strand, Kurashiki (Kanäle der Altstadt), Okayama-Burg.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Ein Tag Naoshima (Zug nach Uno ca. 1 Std., Fähre ca. 20 Min.), ein ruhiger Tag in Okayama.",
        "<strong>Museen:</strong> Das Chichu-Kunstmuseum braucht ein Zeitfenster-Ticket (Verkauf jeweils am 5. für den übernächsten Monat). Die Museen auf Naoshima sind montags geschlossen, an Feiertagen wie dem Mo, 19.07.2027 (Tag des Meeres) offen und dafür am Dienstag zu.",
        "<strong>Velo:</strong> E-Bikes am Hafen Miyanoura mieten, die Insel ist hügelig."
      ],
      ausserdem: "Korakuen-Garten, Kurashiki Bikan (Altstadt), Teshima (Nachbarinsel), Benesse House.",
      bilder: [
        {titel: "Kürbis auf Naoshima", suche: "Naoshima pumpkin Kusama|Naoshima yellow pumpkin", stichwort: "naoshima|pumpkin"},
        {titel: "Korakuen", suche: "Korakuen Okayama", stichwort: "korakuen"},
        {titel: "Okayama-Burg", suche: "Okayama Castle", stichwort: "okayama castle"},
        {titel: "Kurashiki", suche: "Kurashiki Bikan canal|Kurashiki", stichwort: "kurashiki"},
        {titel: "Naoshima", suche: "Naoshima island|Naoshima", stichwort: "naoshima"},
        {titel: "Seto-Inlandsee", suche: "Seto Inland Sea islands", stichwort: "seto"}
      ]
    },
    {
      nr: 10,
      name: "Shimoda (Izu)",
      land: "jp",
      region: "Izu-Halbinsel",
      datum: "19.–21. Juli",
      naechte: "2 Nächte",
      anreise: "Shinkansen ab Okayama mit Umstieg in Nagoya nach Atami (ca. 3–3,5 Std.), dann Izu-Kyuko-Linie nach Izukyu-Shimoda (ca. 1–1,5 Std.). Insgesamt ca. 4,5–5,5 Std.",
      text: "Zum Abschluss weisse Sandstrände, Klippen und klares Wasser an der Südspitze der Izu-Halbinsel, nur zweieinhalb Stunden von Tokio entfernt.",
      teens: "Baden und Bodyboarden an den Stränden Shirahama und Tatadohama, Schnorcheln in den Buchten, Bootsfahrt in die Ryugu-Höhle mit Loch zum Himmel, Kap Irozaki.",
      fakten: [
        "<strong>Dauer:</strong> 2 Nächte. Nach der Regenzeit ist die Badesaison in vollem Gang; an Wochenenden voll.",
        "<strong>Baden:</strong> An den Stränden mit Rettungsschwimmern baden, bei Wellen und Strömung auf Flaggen achten.",
        "<strong>Hitze:</strong> Mitte Juli um 30 °C und schwül; Sonnenschutz und viel trinken."
      ],
      ausserdem: "Ryugu-Höhle, Kap Irozaki, Perry Road (Altstadt von Shimoda), Kawazu-Wasserfälle, Jogasaki-Küste.",
      bilder: [
        {titel: "Shirahama", suche: "Shirahama beach Shimoda|Izu Shirahama", stichwort: "shirahama"},
        {titel: "Shimoda", suche: "Shimoda Izu", stichwort: "shimoda"},
        {titel: "Irozaki", suche: "Cape Irozaki", stichwort: "irozaki"},
        {titel: "Ryugu-Höhle", suche: "Ryugu Sea Cave Shimoda|Ryugu Kutsu", stichwort: "ryugu"},
        {titel: "Jogasaki", suche: "Jogasaki coast", stichwort: "jogasaki"},
        {titel: "Kawazu", suche: "Kawazu Nanadaru|Kawazu waterfalls", stichwort: "kawazu|nanadaru"}
      ]
    },
    {
      nr: 11,
      name: "Tokio (Finale)",
      land: "jp",
      region: "Kanto",
      datum: "21.–22. Juli",
      naechte: "1 Nacht, Rückflug 22. Juli",
      anreise: "Limited Express Odoriko ab Izukyu-Shimoda direkt nach Tokio (ca. 2 Std. 40 Min.). Am Abreisetag Narita Express zum Flughafen (ca. 1 Std.).",
      text: "Ein letzter Abend in Tokio für Einkäufe und Lieblingsorte, bevor es nach Hause geht.",
      teens: "Letzte Einkäufe in Shibuya oder Akihabara, Aussicht vom Tokyo Skytree oder Shibuya Sky, Sushi-Abendessen.",
      fakten: [
        "<strong>Lage:</strong> Hotel in der Nähe des Bahnhofs Tokio oder Ueno wählen, dort fahren Narita Express bzw. Skyliner ab.",
        "<strong>Abreise:</strong> Für einen Flug um ca. 11 Uhr spätestens um 7.30 Uhr in den Zug steigen.",
        "<strong>Gepäck:</strong> Vorausgeschickte Koffer können direkt an den Flughafen Narita geschickt werden."
      ],
      ausserdem: "Ueno-Park, Ameyoko-Markt, Tokyo Station mit Character Street (Souvenirs).",
      bilder: [
        {titel: "Tokyo Station", suche: "Tokyo Station Marunouchi", stichwort: "tokyo station"},
        {titel: "Tokyo Tower", suche: "Tokyo Tower", stichwort: "tokyo tower"},
        {titel: "Ueno", suche: "Ueno Park", stichwort: "ueno"},
        {titel: "Shinkansen", suche: "Shinkansen N700S|Shinkansen Mount Fuji", stichwort: "shinkansen"},
        {titel: "Sushi", suche: "Nigiri sushi|Sushi platter", stichwort: "sushi"},
        {titel: "Ameyoko", suche: "Ameyoko market", stichwort: "ameyoko"}
      ]
    }
  ],
  abschluss: "Rückflug ab Tokio-Narita nach Zürich am Do, 22.07.2027 (Direktflug ca. 14,5 Std., Flugtage prüfen).",
  budgetIntro: "Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.",
  budget: {
    naechte: 33,
    total: "31’000",
    spanne: "24’000–38’800",
    proTag: "ca. 940 CHF pro Tag, ca. 7’750 pro Person",
    posten: [
      ["Flüge Zürich–Tokio retour", "5’200–6’800", "6’000", "ca. 1’300–1’700 pro Person (Juli ist Hochsaison; beide Kids zahlen ab 12 Jahren Vollpreis)"],
      ["Fernverkehr (Shinkansen, Züge, Jetfoil)", "2’900–3’600", "3’200", "Einzeltickets für alle Strecken inkl. Jetfoil Kagoshima–Yakushima retour; der Japan Rail Pass lohnt sich bei dieser Route kaum, vorher vergleichen"],
      ["Lokale Transfers", "800–1’300", "1’000", "IC-Karte für U-Bahn und Bus, Hakone Free Pass, Mietwagen auf Yakushima, Gepäckservice"],
      ["Unterkunft (Familienzimmer, Ryokan oder 2 Zimmer)", "6’000–11’500", "8’500", "ca. 180–350 CHF pro Nacht, Tokio und Kyoto am teuersten"],
      ["Verpflegung (Konbini, Restaurants, Getränke)", "4’000–6’600", "5’200", "ca. 120–200 CHF pro Tag für 4 Personen; in Ryokans ist das Abendessen oft im Preis"],
      ["Aktivitäten und Eintritte", "2’500–4’500", "3’400", "Universal Studios, DisneySea, teamLab, Ghibli-Museum, Tempel, Schnorcheltour, Museen auf Naoshima"],
      ["Versicherung, eSIM, Medikamente", "600–1’200", "900", "Reisekranken- und Annullationsschutz, Reiseapotheke"],
      ["Reserve (ca. 10 %)", "2’000–3’300", "2’800", "Souvenirs, Wäsche, Unvorhergesehenes"]
    ],
    stationen: [
      ["1. Tokio (4)", "1’900–3’300"],
      ["2. Nikko (2)", "700–1’200"],
      ["3. Hakone (2)", "900–1’600"],
      ["4. Takayama (3)", "1’000–1’800"],
      ["5. Kyoto (5)", "2’000–3’500"],
      ["6. Osaka (3)", "1’500–2’500"],
      ["7. Hiroshima und Miyajima (3)", "1’000–1’700"],
      ["Zwischenübernachtung Kagoshima (1)", "250–400"],
      ["8. Yakushima (5)", "1’800–3’000"],
      ["9. Okayama und Naoshima (2)", "650–1’100"],
      ["10. Shimoda (2)", "700–1’200"],
      ["11. Tokio (1)", "350–600"]
    ],
    hinweise: [
      "Preise für die Kids: Ab 12 Jahren zahlen beide bei Bahn und Flug den Erwachsenenpreis; bei Eintritten gibt es oft Schüler- oder Jugendpreise.",
      "Sparhebel: Konbini-Frühstück, Mittagsmenüs (Teishoku) statt Abendessen im Restaurant, Business-Hotels mit zwei Zimmern statt Familienzimmer, Flüge früh buchen.",
      "Wechselkurs: gerechnet mit ca. 170–180 Yen pro Franken. Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich)."
    ]
  },
  tippsIntro: "Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.",
  tipps: [
    ["Einreise", "Für Schweizer Reisende visumfrei bis 90 Tage, Reisepass für die ganze Aufenthaltsdauer gültig. Einreise- und Zollformular vorab online über «Visit Japan Web» ausfüllen (QR-Code). Die elektronische Reisegenehmigung JESTA ist erst ab 2028 geplant. Die Ausreisesteuer (seit Juli 2026 3’000 Yen pro Person) ist im Flugpreis enthalten. Vor Abreise beim EDA und der japanischen Botschaft prüfen."],
    ["Währung und Zahlung", "Japanischer Yen. Karten werden in Städten fast überall akzeptiert, auf dem Land und in kleinen Lokalen oft nur Bargeld. Geld am Automaten in Konbini (7-Eleven) oder bei der Post abheben. IC-Karte (Suica, Pasmo) für Bahn, Bus und Läden."],
    ["Wetter im Juni und Juli", "Bis Mitte oder Ende Juli Regenzeit (Tsuyu) mit feuchtwarmen Tagen um 25–30 °C; danach heiss und schwül mit 30–35 °C. In den Bergen (Nikko, Hakone, Takayama) kühler. Taifune sind ab Juli möglich, besonders im Süden."],
    ["Zeitzone", "Japan ist UTC+9, im Sommer 7 Stunden vor der Schweiz."],
    ["Bahnfahren", "Sitzplätze in Shinkansen und Limited Express über die Apps oder Webseiten der Bahnen (z.B. SmartEX, JR West, JR East) reservieren. Japan Rail Pass (21 Tage ab 105’000 Yen pro Person) mit den Einzeltickets vergleichen; bei dieser Route sind Einzeltickets meist günstiger. Grosses Gepäck per Takkyubin vorausschicken."],
    ["Transport-Apps", "Google Maps (sehr genau für Bahn und Bus), Japan Transit Planner (Navitime), Apps der Bahngesellschaften, Klook oder offizielle Seiten für Tickets."],
    ["Gesundheit", "Keine Impfungen vorgeschrieben; Impfstatus beim Hausarzt prüfen. Leitungswasser ist trinkbar. Hitzschlag ist im Juli die grösste Gefahr: viel trinken, Kopfbedeckung, Pausen im Schatten. Medikamente mit Codein oder Pseudoephedrin (z.B. manche Erkältungsmittel) sind in Japan verboten."],
    ["Naturgefahren", "Erdbeben kommen vor: Hinweise im Hotel lesen, Warn-App «Safety tips» installieren. Bei Taifunen fallen Fähren und teils Züge aus; Wetterdienst JMA beachten."],
    ["Versicherung", "Reisekranken- und Rücktransportversicherung für alle vier; medizinische Behandlung ist gut, aber teuer."],
    ["Kultur und Verhalten", "Schuhe in Wohnungen, Ryokans und manchen Tempeln ausziehen. Im Zug leise sein und nicht telefonieren. Kein Trinkgeld. Abfalleimer sind selten: Abfall mitnehmen. Onsen nackt und nach gründlichem Waschen; Tätowierungen sind oft nicht erlaubt."],
    ["Gesetze", "Sehr strenge Drogengesetze. Drohnen nur mit Bewilligung."],
    ["Notfall", "Polizei 110, Ambulanz und Feuerwehr 119. Schweizer Botschaft in Tokio notieren; EDA-Reiseplattform nutzen."],
    ["Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt, z.B. Arcade, Anime-Laden oder Essen."]
  ]
};
