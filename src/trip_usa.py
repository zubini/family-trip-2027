ST = []

def add(title, date, region, de, li, mo, rt, im, wa=None):
    ST.append((title, date, 'us', dict(de=de, li=li, mo=mo, rt=rt, wa=wa, region=region), im))

add("1. Las Vegas (Start)", "18.–21. Juni · 3 Nächte", "Nevada",
 "Der Einstieg in die USA: Neonlichter, Hotels wie Freizeitparks und Wüste direkt vor der Stadt. Drei Nächte reichen, um den Jetlag zu überwinden und die Highlights zu sehen, bevor es in die Nationalparks geht.",
 ["<strong>Für Teens:</strong> High Roller (Riesenrad) bei Sonnenuntergang, Wasserspiele des Bellagio, Red Rock Canyon (Felsen und Aussicht) früh am Morgen, Hoover-Staudamm als Halbtagesausflug, Shows und Hotels als Kulisse.",
  "<strong>Hitze:</strong> Im Juli werden oft 40–45 °C erreicht. Aktivitäten morgens und abends, tagsüber klimatisierte Hotels. Viel Wasser trinken.",
  "<strong>Hinweis:</strong> Glücksspiel ist erst ab 21 Jahren erlaubt. Viele Hotels verlangen zusätzlich «Resort Fees» pro Nacht (oft über 40 USD).",
  "<strong>Mietwagen:</strong> Am Flughafen abholen; eine einzige Einwegmiete bis Washington früh buchen (Familienvan oder SUV, ca. 25 Tage)."],
 "Fremont Street Experience (Altstadt, Lichtshow), Neon Museum, Valley of Fire State Park (rote Felsen), Madame Tussauds, Sphere (nur bei Veranstaltungen).",
 "Flug Zürich–Las Vegas am Fr, 18.06.2027 (Direktflug ca. 12 Std., mit Umstieg ca. 14–17 Std.), Ankunft am selben Tag (Zeitverschiebung −9 Std.). Mietwagen am Flughafen abholen.",
 [("Strip","Las Vegas Strip night|Las Vegas Boulevard","las vegas"),("Bellagio","Fountains of Bellagio","bellagio"),("High Roller","High Roller Las Vegas|High Roller observation wheel","high roller"),
  ("Fremont Street","Fremont Street Experience","fremont"),("Red Rock Canyon","Red Rock Canyon National Conservation Area","red rock"),("Valley of Fire","Valley of Fire State Park","valley of fire")])

add("2. Zion National Park (Springdale)", "21.–23. Juni · 2 Nächte", "Utah",
 "Rote Felsklippen, grüne Schluchten und der Virgin River: Zion ist einer der schönsten Nationalparks der USA. Das Dorf Springdale liegt direkt am Parkeingang.",
 ["<strong>Für Teens:</strong> Riverside Walk und Wandern durch den Fluss in «The Narrows» (Wasserschuhe und Wanderstöcke leihbar), Emerald Pools, Canyon Overlook Trail, kostenloser Parkshuttle ab dem Visitor Center.",
  "<strong>Gebühr:</strong> Zion gehört zu den 11 Parks mit 100 USD Zusatzgebühr pro Person ab 16 Jahren für Nicht-US-Bewohner (die Teenager sind davon ausgenommen). Für die Reise lohnt sich der Nicht-Residenten-Jahrespass (250 USD).",
  "<strong>Sicherheit:</strong> Juli ist Monsunzeit. Bei Gewitterwarnung werden die Narrows wegen Sturzflutgefahr gesperrt; aktuelle Lage im Visitor Center prüfen.",
  "<strong>Hinweis:</strong> Angels Landing braucht eine Genehmigung und ist exponiert, für die Kids nicht eingeplant."],
 "Watchman Trail, Zion–Mount Carmel Highway (Panoramastrasse), Kolob Canyons (ruhiger Nordteil), Bryce Canyon als Tagesausflug (ca. 2 Std., ebenfalls mit Zusatzgebühr).",
 "Mietwagen ab Las Vegas über die Interstate 15 nach St. George und Springdale (ca. 2,5–3 Std.).",
 [("Zion Canyon","Zion Canyon Virgin River|Zion National Park","zion"),("The Narrows","The Narrows Zion|Zion Narrows","narrows"),("Emerald Pools","Emerald Pools Zion","emerald pools"),
  ("Angels Landing","Angels Landing Zion","angels landing"),("Mount Carmel Highway","Zion Mount Carmel Highway","carmel"),("Watchman","The Watchman Zion|Watchman Zion","watchman")])

add("3. Page und Lake Powell", "23.–25. Juni · 2 Nächte", "Arizona",
 "Kleinstadt am Lake Powell mit zwei weltberühmten Fotomotiven: dem Horseshoe Bend und dem Antelope Canyon. Beides liegt auf oder neben Navajo-Land.",
 ["<strong>Für Teens:</strong> Geführte Tour durch den Antelope Canyon (Zeitfenster vorab buchen), Horseshoe Bend zum Sonnenuntergang, Bootsfahrt oder Baden im Lake Powell.",
  "<strong>Hinweis:</strong> Der Antelope Canyon ist nur mit zugelassenen Navajo-Führern zugänglich. Bei Gewitter oder Regen in der Umgebung werden Touren wegen Sturzfluten abgesagt (Juli: Monsun).",
  "<strong>Zeit:</strong> Page richtet sich nach der Arizona-Zeit (keine Sommerzeit). Die Uhr ändert sich gegenüber Utah um eine Stunde.",
  "<strong>Hitze:</strong> Mittags 38 °C und mehr; Touren am frühen Morgen oder am Abend wählen."],
 "Glen Canyon Dam (Besucherzentrum), Wahweap-Strand, Rainbow Bridge (nur per Boot), Waterholes Canyon (Tour).",
 "Mietwagen von Springdale über Kanab und den Highway 89 (ca. 2,5 Std.).",
 [("Horseshoe Bend","Horseshoe Bend Arizona","horseshoe bend"),("Antelope Canyon","Antelope Canyon|Lower Antelope Canyon","antelope canyon"),("Lake Powell","Lake Powell Arizona|Lake Powell","lake powell"),
  ("Glen Canyon Dam","Glen Canyon Dam","glen canyon dam"),("Upper Antelope","Upper Antelope Canyon light beam","antelope"),("Page","Page Arizona|Wahweap Bay","page|wahweap")])

add("4. Grand Canyon (South Rim)", "25.–27. Juni · 2 Nächte", "Arizona",
 "Der Südrand des Grand Canyon ist der klassische Zugang: Aussichtspunkte direkt am Rand, Wanderwege und ein kostenloser Parkshuttle. Zwei Nächte am Rand, am besten im Park oder im nahen Tusayan.",
 ["<strong>Für Teens:</strong> Mather Point und Rim Trail (flach, grosse Aussicht), Sonnenuntergang am Hopi Point, Junior-Ranger-Programm im Visitor Center, Desert View Watchtower, ein Stück den Bright Angel Trail hinunterwandern (nicht bis zum Fluss).",
  "<strong>Gebühr:</strong> Auch der Grand Canyon gehört zu den 11 Parks mit 100 USD Zusatzgebühr pro Person ab 16 Jahren. Mit dem Jahrespass (250 USD) entfällt sie.",
  "<strong>Sicherheit:</strong> Auf Trails nicht zu weit absteigen: der Aufstieg dauert doppelt so lang wie der Abstieg. Wasser, salzige Snacks und Hut mitnehmen.",
  "<strong>Unterkunft:</strong> Zimmer im Park sind oft Monate im Voraus ausgebucht; sonst in Tusayan oder Williams übernachten."],
 "Desert View Drive (Panoramastrasse), Grand Canyon Railway (Williams), Cameron Trading Post.",
 "Mietwagen von Page über Cameron zum Südrand (ca. 2,5 Std.).",
 [("South Rim","Grand Canyon South Rim|Grand Canyon National Park","grand canyon"),("Mather Point","Mather Point Grand Canyon","mather point"),("Hopi Point","Hopi Point Grand Canyon","hopi point"),
  ("Desert View","Desert View Watchtower","desert view"),("Bright Angel Trail","Bright Angel Trail Grand Canyon","bright angel"),("Sonnenuntergang","Grand Canyon sunset","grand canyon")])

add("5. Monument Valley (Navajo Nation)", "27.–28. Juni · 1 Nacht", "Utah und Arizona",
 "Die roten Sandsteintürme aus unzähligen Westernfilmen liegen im Navajo Tribal Park an der Grenze von Utah und Arizona. Eine Nacht reicht, wenn ihr Sonnenuntergang und Sonnenaufgang erlebt.",
 ["<strong>Für Teens:</strong> Valley Drive (ca. 27 km Schotterpiste, mit eigenem Fahrzeug oder geführter Jeeptour der Navajo), Fotostopp am Forrest Gump Point auf der Strasse 163, Sonnenaufgang vom Balkon des The View Hotel (früh buchen).",
  "<strong>Zeit:</strong> Die Navajo Nation führt die Sommerzeit ein, Arizona nicht: Die Uhr springt um eine Stunde. Zeiten für Touren und Abfahrten genau prüfen.",
  "<strong>Regeln:</strong> Der Park hat eigene Navajo-Regeln (Eintritt pro Person, keine Drohnen, nicht von der Piste abfahren). Der Nationalpark-Jahrespass gilt hier nicht.",
  "<strong>Hinweis:</strong> Die Piste ist bei Regen oft gesperrt. Unterkünfte sind einfach und knapp, früh buchen."],
 "Goosenecks State Park, Valley of the Gods (Schotterstrasse), Mexican Hat (Felsformation), Four Corners Monument (optional, ca. 1,5 Std.).",
 "Mietwagen vom Grand Canyon über Cameron, Tuba City und Kayenta (ca. 3,5–4 Std.).",
 [("Monument Valley","Monument Valley Utah Arizona|Monument Valley","monument valley"),("Mitten Buttes","Mitten Buttes Monument Valley|Monument Valley Mittens","mitten|monument valley"),("Forrest Gump Point","Forrest Gump Point US 163|US 163 Monument Valley","163|forrest gump"),
  ("Valley of the Gods","Valley of the Gods Utah","valley of the gods"),("Goosenecks","Goosenecks State Park","goosenecks"),("Sonnenuntergang","Monument Valley sunset","monument valley")])

add("6. Santa Fe", "28.–30. Juni · 2 Nächte", "New Mexico",
 "Die Hauptstadt von New Mexico auf rund 2’100 Metern Höhe: Lehmziegel-Architektur, Kunstgalerien und die Landschaft des Südwestens. Nach der Wildnis kommt hier wieder Stadtleben.",
 ["<strong>Für Teens:</strong> Meow Wolf «House of Eternal Return» (immersive Kunstwelt, Tickets vorab), Bandelier National Monument (Felswohnungen und Leitern), Plaza und Canyon Road, Bradbury Science Museum in Los Alamos.",
  "<strong>Höhe:</strong> Auf 2’100 m Sonnencreme, viel trinken und am ersten Tag nicht übertreiben.",
  "<strong>Hinweis:</strong> Am Nachmittag sind Monsungewitter möglich; in Schluchten und auf Bergstrassen achtsam fahren.",
  "<strong>Essen:</strong> Neu-mexikanische Küche mit roten und grünen Chilis (nach der Schärfe fragen)."],
 "Georgia O’Keeffe Museum, Loretto Chapel, Kasha-Katuwe Tent Rocks (Wanderung), Albuquerque (Altstadt, Petroglyph National Monument).",
 "Mietwagen von Monument Valley über Shiprock und Farmington (ca. 5,5–6 Std.).",
 [("Plaza","Santa Fe Plaza|Santa Fe New Mexico plaza","santa fe"),("Meow Wolf","Meow Wolf Santa Fe|House of Eternal Return","meow wolf"),("Bandelier","Bandelier National Monument","bandelier"),
  ("Canyon Road","Canyon Road Santa Fe","canyon road"),("Loretto Chapel","Loretto Chapel Santa Fe","loretto"),("Tent Rocks","Kasha-Katuwe Tent Rocks National Monument|Tent Rocks","tent rocks|kasha")])

add("7. White Sands (Alamogordo)", "30. Juni–1. Juli · 1 Nacht", "New Mexico",
 "Weisse Gipsdünen in der Wüste von New Mexico: ein einzigartiger Landschaftstyp, durch den man barfuss wandert und auf Plastikschlitten die Dünen hinunterrutscht. White Sands ist ein Nationalpark.",
 ["<strong>Für Teens:</strong> Dünenrutschen mit Schlitten (im Visitor Center erhältlich), Sonnenuntergangs-Spaziergang, Wanderung auf dem Alkali Flat Trail (nur früh oder spät).",
  "<strong>Hitze:</strong> Im Juli bis 40 °C und kaum Schatten. Früh am Morgen oder zum Sonnenuntergang gehen, genug Wasser mitnehmen.",
  "<strong>Hinweis:</strong> Die Strasse durch den Park kann wegen Raketentests auf dem benachbarten Testgelände zeitweise gesperrt sein; Lage vorab prüfen. Am nächsten Morgen beginnt der Roadtrip nach Chicago (siehe Chicago).",
  "<strong>Gebühr:</strong> Eintritt pro Fahrzeug (mit dem Jahrespass inklusive); White Sands gehört nicht zu den Parks mit 100 USD Zusatzgebühr."],
 "Space History Museum in Alamogordo, Three Rivers Petroglyph Site, Lincoln National Forest (kühler).",
 "Mietwagen von Santa Fe über Albuquerque und die US-54 (ca. 4–4,5 Std.).",
 [("Gipsdünen","White Sands National Park dunes|White Sands dunes","white sands"),("Sonnenuntergang","White Sands sunset","white sands"),("Dune Drive","White Sands dune drive|White Sands road","white sands"),
  ("Alkali Flat","Alkali Flat White Sands","alkali"),("Yucca","White Sands yucca|White Sands plants","white sands"),("Gipsdünen am Morgen","White Sands New Mexico sunrise","white sands")])

add("8. Chicago", "2.–5. Juli · 3 Nächte", "Illinois",
 "Die grosse Stadt am Michigansee mit Wolkenkratzern, Parks und Stadtstrand. Hier beginnt der Osten: Chicago ist das Tor zu den Grossen Seen. Ihr kommt nach zwei langen Fahrtagen an.",
 ["<strong>Für Teens:</strong> Skydeck im Willis Tower (Glasbalkon «Ledge»), Architektur-Bootsfahrt auf dem Chicago River, Millennium Park mit «Cloud Gate» (The Bean), Navy Pier mit Riesenrad, Field Museum und Shedd Aquarium.",
  "<strong>Dauer:</strong> 3 Nächte. Rund um den Unabhängigkeitstag (Sonntag, 4. Juli; Feiertag Montag, 5. Juli) sind Feuerwerke, Menschenmassen und höhere Preise zu erwarten.",
  "<strong>Roadtrip (2 Tage):</strong> Tag 1 (Do, 01.07.2027) White Sands – Roswell – Clovis – Amarillo – Oklahoma City, ca. 630 Meilen (ca. 10 Std. Fahrt); Halt am UFO-Museum in Roswell und am Cadillac Ranch bei Amarillo, Abend in Oklahoma City (Bricktown, Oklahoma City National Memorial). Tag 2 (Fr, 02.07.2027) Oklahoma City – Tulsa – St. Louis (Gateway Arch) – Chicago, ca. 790 Meilen (ca. 12 Std. Fahrt).",
  "<strong>Essen:</strong> Deep-Dish-Pizza und Chicago-Style-Hot-Dog.",
  "<strong>Fortbewegung:</strong> Hochbahn «L», Bus und Wassertaxi; in der Stadt braucht ihr kein Auto. Der Mietwagen bleibt im Parkhaus des Hotels (ca. 60–80 USD pro Nacht, vorab erfragen)."],
 "Lincoln Park Zoo (gratis), Oak Street Beach, Wrigley Field (Baseball), Museum of Science and Industry, Garfield Park Conservatory.",
 "Mietwagen-Roadtrip in 2 Tagen ab White Sands (zusammen ca. 1’420 Meilen, ca. 22 Std. Fahrt) mit Übernachtung in Oklahoma City, Zeitverschiebung +1 Std.",
 [("Skyline","Chicago skyline Lake Michigan|Chicago skyline","chicago"),("Cloud Gate","Cloud Gate Chicago|The Bean Chicago","cloud gate"),("Willis Tower","Willis Tower Chicago","willis tower"),
  ("Navy Pier","Navy Pier Chicago","navy pier"),("Chicago River","Chicago River architecture|Chicago River","chicago river"),("Oak Street Beach","Oak Street Beach Chicago|Chicago beach Lake Michigan","chicago|oak street")],
 wa="<strong>Sehr lange Fahrtage:</strong> Zusammen ca. 22 Stunden reine Fahrzeit, also 10 und 12 Stunden pro Tag. Früh starten (ca. 6 Uhr), Fahrerwechsel nach spätestens 2 Stunden, regelmässige Pausen, Teenager mit Spielen und Hörbüchern beschäftigen. Wenn das zu viel ist: drei Tage mit einer zusätzlichen Übernachtung in St. Louis einplanen und Chicago auf 2 Nächte kürzen.")

add("9. Sandusky und Cedar Point (Eriesee)", "5.–7. Juli · 2 Nächte", "Ohio",
 "Am Südufer des Eriesees liegt Cedar Point, einer der berühmtesten Achterbahn-Parks der Welt. Die Region eignet sich für zwei Tage Action und ein Stück Strand an den Grossen Seen.",
 ["<strong>Für Teens:</strong> Cedar Point (Achterbahnen wie Steel Vengeance und Millennium Force; Tickets online, Grössenbeschränkung beachten), Strand am Eriesee, Fähre zur Insel Put-in-Bay.",
  "<strong>Dauer:</strong> 2 Nächte: ein Tag im Park, ein Tag Strand und Inseln.",
  "<strong>Hinweis:</strong> Rund um den Feiertag am 5. Juli ist der Park voll und teuer; früh am Morgen im Park sein.",
  "<strong>Mietwagen:</strong> Ihr fahrt mit demselben Wagen weiter, den ihr in Las Vegas übernommen habt."],
 "Cleveland (Rock and Roll Hall of Fame, ca. 1 Std.), Kelleys Island (Gletscherrillen), Lake Erie Islands.",
 "Mietwagen ab Chicago über die Interstate 90 (ca. 5–6 Std.).",
 [("Cedar Point","Cedar Point Sandusky Ohio|Cedar Point amusement park","cedar point"),("Steel Vengeance","Steel Vengeance roller coaster","steel vengeance"),("Millennium Force","Millennium Force Cedar Point","millennium force"),
  ("Put-in-Bay","Put-in-Bay Ohio|Perry's Victory Memorial","put-in-bay|put in bay|perry"),("Eriesee","Lake Erie shore Ohio|Lake Erie Sandusky","lake erie|sandusky"),("Cleveland","Cleveland skyline Lake Erie|Cleveland Ohio skyline","cleveland")])

add("10. Niagara Falls", "7.–9. Juli · 2 Nächte", "New York",
 "Die grössten Wasserfälle Nordamerikas an der Grenze zu Kanada: Tosende Wassermassen, Gischt und Regenbogen. Ihr übernachtet auf der US-Seite im Bundesstaat New York.",
 ["<strong>Für Teens:</strong> Bootsfahrt «Maid of the Mist» direkt an die Fälle, «Cave of the Winds» (Holzstege am Fuss der Fälle), Beleuchtung der Fälle am Abend.",
  "<strong>Dauer:</strong> 2 Nächte.",
  "<strong>Kanada:</strong> Ein Abstecher auf die kanadische Seite (Rainbow Bridge, mit Reisepass) bietet die bessere Gesamtaussicht auf die Fälle. Einreisebestimmungen für Kanada vorab prüfen.",
  "<strong>Hinweis:</strong> Die Regenponchos auf den Booten sind inklusive; Wechselkleidung für die Kids einpacken."],
 "Goat Island, Niagara Gorge Trail, Old Fort Niagara, Buffalo (Chicken Wings).",
 "Mietwagen ab Sandusky entlang des Eriesees über Cleveland und Buffalo (ca. 4,5 Std.).",
 [("Niagarafälle","Niagara Falls|Niagara Falls New York","niagara"),("American Falls","American Falls Niagara","american falls"),("Horseshoe Falls","Horseshoe Falls Niagara","horseshoe falls"),
  ("Maid of the Mist","Maid of the Mist Niagara","maid of the mist"),("Abends","Niagara Falls night illumination|Niagara Falls at night","niagara"),("Goat Island","Goat Island Niagara Falls|Three Sisters Islands","goat island|three sisters")])

add("11. Washington, D.C.", "9.–13. Juli · 4 Nächte", "Washington, D.C.",
 "Die Hauptstadt der USA: Denkmäler, Regierungsgebäude und eine Vielzahl kostenloser Museen rund um die National Mall. Alles ist gut zu Fuss und mit der Metro erreichbar.",
 ["<strong>Für Teens:</strong> National Air and Space Museum (Zeitfenster-Tickets vorab), Natural History Museum (Hope-Diamant), Spy Museum, Lincoln Memorial und Washington Monument bei Abenddämmerung, Capitol.",
  "<strong>Dauer:</strong> 4 Nächte: ein Tag National Mall, ein Tag Museen, ein Tag Arlington und Mount Vernon, ein Reservetag.",
  "<strong>Hitze:</strong> Im Juli heiss und schwül, nachmittags oft Gewitter; Museen als Hitzepause einplanen.",
  "<strong>Hinweis:</strong> Das White House ist von innen nur nach früher Anfrage über die Schweizer Botschaft zu besichtigen, von aussen jederzeit. Den Mietwagen bei der Ankunft zurückgeben; in der Stadt sind Metro und Taxi besser."],
 "Arlington National Cemetery, Mount Vernon (Landsitz von George Washington), Georgetown, National Zoo (gratis), Holocaust Memorial Museum (Zeitfenster).",
 "Mietwagen ab Niagara Falls (ca. 7 Std., Halt in Gettysburg möglich), Rückgabe der Einwegmiete am Flughafen oder beim Hotel in Washington.",
 [("Lincoln Memorial","Lincoln Memorial Washington","lincoln memorial"),("Washington Monument","Washington Monument","washington monument"),("Capitol","United States Capitol Washington","capitol"),
  ("Air and Space Museum","National Air and Space Museum Washington","air and space"),("Smithsonian Castle","Smithsonian Institution Building castle","smithsonian"),("Jefferson Memorial","Jefferson Memorial Tidal Basin","jefferson memorial")])

add("12. Philadelphia", "13.–15. Juli · 2 Nächte", "Pennsylvania",
 "Die Wiege der USA: Hier wurden die Unabhängigkeitserklärung und die Verfassung unterzeichnet. Ein kompakter Zwischenstopp zwischen Washington und New York.",
 ["<strong>Für Teens:</strong> Independence Hall und Liberty Bell (Zeitfenster-Tickets vorab), Rocky Steps vor dem Museum of Art, Franklin Institute (Wissenschaftsmuseum), Reading Terminal Market (Philly Cheesesteak).",
  "<strong>Dauer:</strong> 2 Nächte; Altstadt gut zu Fuss.",
  "<strong>Hinweis:</strong> Der Mietwagen ist bereits in Washington zurückgegeben; die Strecke nach Philadelphia und New York geht bequem mit dem Zug."],
 "Elfreth’s Alley, Eastern State Penitentiary, Betsy Ross House, Love Park.",
 "Amtrak-Zug ab Washington Union Station nach Philadelphia 30th Street Station (ca. 2 Std.).",
 [("Independence Hall","Independence Hall Philadelphia","independence hall"),("Liberty Bell","Liberty Bell Philadelphia","liberty bell"),("Skyline","Philadelphia skyline","philadelphia"),
  ("Museum of Art","Philadelphia Museum of Art steps","museum of art"),("Reading Terminal","Reading Terminal Market Philadelphia","reading terminal"),("Love Park","Love Park Philadelphia|LOVE statue Philadelphia","love")])

add("13. New York (Finale)", "15.–22. Juli · 7 Nächte, Rückflug 22. Juli", "New York",
 "Das grosse Finale: Wolkenkratzer, Parks, Museen und Hafenpanorama. Sieben Nächte erlauben Highlights und Ruhetage.",
 ["<strong>Für Teens:</strong> Fähre zur Freiheitsstatue und nach Ellis Island, Aussicht vom Empire State Building oder Top of the Rock, Broadway-Musical, Brooklyn Bridge, Coney Island (Achterbahn und Strand), Intrepid Museum (Flugzeugträger).",
  "<strong>Dauer:</strong> 7 Nächte: Tag 1 Midtown, Tag 2 Freiheitsstatue und Lower Manhattan (9/11 Memorial), Tag 3 Central Park und Museen, Tag 4 Brooklyn und Coney Island, Tag 5 Wunschtag der Kids, dazu Reservetage.",
  "<strong>Fortbewegung:</strong> U-Bahn mit OMNY (Kreditkarte oder Handy), Fähren, Taxi und Uber.",
  "<strong>Hinweis:</strong> Im Hochsommer heiss, Gewitter möglich. Tickets für Aussichtsplattformen und Broadway früh buchen."],
 "High Line, Chelsea Market, Natural History Museum, Metropolitan Museum, Staten-Island-Fähre (gratis), Bronx Zoo, Yankee Stadium.",
 "Amtrak-Zug ab Philadelphia 30th Street nach New York Penn Station (ca. 1,5 Std.). Rückflug ab Newark oder John F. Kennedy am Do, 22.07.2027 (Flug ca. 7,5–8 Std., Ankunft in Zürich am nächsten Morgen).",
 [("Freiheitsstatue","Statue of Liberty New York|Statue of Liberty","statue of liberty"),("Skyline","Manhattan skyline New York|Manhattan skyline","manhattan|new york"),("Brooklyn Bridge","Brooklyn Bridge New York","brooklyn bridge"),
  ("Central Park","Central Park New York|Central Park","central park"),("Times Square","Times Square New York|Times Square","times square"),("Empire State","Empire State Building","empire state")])

PLAN = [
 ("18.–21. Juni", "1. Las Vegas", "3", "Mietwagen am Flughafen abholen"),
 ("21.–23. Juni", "2. Zion National Park", "2", "Mietwagen ab Las Vegas (ca. 2,5–3 Std.)"),
 ("23.–25. Juni", "3. Page und Lake Powell", "2", "Mietwagen (ca. 2,5 Std.)"),
 ("25.–27. Juni", "4. Grand Canyon (South Rim)", "2", "Mietwagen (ca. 2,5 Std.)"),
 ("27.–28. Juni", "5. Monument Valley", "1", "Mietwagen (ca. 3,5–4 Std.)"),
 ("28.–30. Juni", "6. Santa Fe", "2", "Mietwagen (ca. 5,5–6 Std.)"),
 ("30. Juni–1. Juli", "7. White Sands (Alamogordo)", "1", "Mietwagen (ca. 4–4,5 Std.)"),
 ("1.–2. Juli", "Zwischenübernachtung Oklahoma City", "1", "Roadtrip Tag 1: White Sands–Oklahoma City (ca. 10 Std.)"),
 ("2.–5. Juli", "8. Chicago", "3", "Roadtrip Tag 2: Oklahoma City–Chicago (ca. 12 Std.)"),
 ("5.–7. Juli", "9. Sandusky und Cedar Point", "2", "Mietwagen ab Chicago (ca. 5–6 Std.)"),
 ("7.–9. Juli", "10. Niagara Falls", "2", "Mietwagen (ca. 4,5 Std.)"),
 ("9.–13. Juli", "11. Washington, D.C.", "4", "Mietwagen (ca. 7 Std.), Rückgabe in Washington"),
 ("13.–15. Juli", "12. Philadelphia", "2", "Amtrak-Zug (ca. 2 Std.)"),
 ("15.–22. Juli", "13. New York", "7", "Amtrak-Zug (ca. 1,5 Std.); Rückflug 22. Juli"),
]

MIX = [
 ("Naturwunder", "Zion, Antelope Canyon und Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle."),
 ("Action und Freizeitparks", "Las Vegas (High Roller, Hotels), Cedar Point (Achterbahnen), Coney Island, Meow Wolf in Santa Fe."),
 ("Städte und Museen", "Chicago, Washington (Smithsonian), Philadelphia und New York mit Aussichtsplattformen und Broadway."),
 ("Geschichte und Kultur", "Navajo Nation, Pueblo-Felswohnungen bei Bandelier, Unabhängigkeit in Philadelphia und Washington, Freiheitsstatue."),
 ("Ruhetage", "Santa Fe, Sandusky und der Reservetag in Washington und New York sorgen für Erholung nach den langen Fahrtagen."),
]

NOTES = [
 ("Gesamt", "34 Nächte, 13 Stationen und eine Zwischenübernachtung (Oklahoma City). Keine Inlandflüge: nur Hin- und Rückflug. Eine Einwegmiete (Las Vegas–Washington, ca. 25 Tage) und Amtrak-Züge im Nordosten. Die längsten Fahrtage: Roadtrip White Sands–Oklahoma City (ca. 10 Std.) und Oklahoma City–Chicago (ca. 12 Std.), Monument Valley–Santa Fe (ca. 5,5–6 Std.), Chicago–Sandusky (ca. 5–6 Std.) und Niagara Falls–Washington (ca. 7 Std.)."),
 ("Vorab buchen", "Unterkünfte im Grand Canyon und in Monument Valley (oft Monate im Voraus), Antelope-Canyon-Tour, Meow Wolf, Cedar Point, Zeitfenster-Tickets für Smithsonian und Independence Hall, Amtrak-Züge, Mietwagen mit Einwegmiete."),
 ("Optional", "Bryce Canyon (ab Zion, 2 Std.), Mackinac Island (Michigan, ab Chicago, autofreie Insel), Kanada-Seite der Niagarafälle, Gettysburg (Halt auf der Strecke nach Washington), Boston (ab New York per Zug, ca. 4 Std.). Für den Roadtrip: dritte Fahrtag-Variante mit Übernachtung in St. Louis."),
]

TIPS = [
 ("Einreise USA (ESTA)", "Für die visafreie Einreise braucht jede Person, auch die Kids, vor dem Abflug eine ESTA-Genehmigung (seit Herbst 2025 ca. 40 USD pro Person). Erlaubt sind bis zu 90 Tage. Die US-Behörde plant zusätzliche Angaben (z.B. Social-Media-Konten der letzten fünf Jahre); der Stand ist bei Planung noch offen. Aktuelle Regeln auf der offiziellen CBP-Website prüfen."),
 ("Reisepass", "Biometrischer Reisepass für alle vier, mind. 6 Monate gültig. Zusätzlich Kopien aufbewahren."),
 ("Nationalparks und Gebühren", "Seit Januar 2026 zahlen Nicht-US-Bewohner ab 16 Jahren in 11 Parks zusätzlich 100 USD pro Person (u.a. Zion und Grand Canyon). Der Jahrespass für Nicht-Residenten kostet 250 USD und deckt das Fahrzeug bzw. die Insassen. Für euch (zwei Erwachsene über 16) lohnt sich der Pass bei zwei solchen Parks. Für Monument Valley gilt er nicht (Navajo-Nation-Eintritt)."),
 ("Mietwagen", "Familienvan oder SUV, die Einwegmiete Las Vegas–Washington früh buchen (Gebühr oft hoch). In Chicago Parkgebühren einplanen. Schweizer Führerschein reicht; ein internationaler Führerschein ist als Zusatz empfehlenswert. Vollkasko prüfen, Gebühren und Mautstrassen im Osten einplanen."),
 ("Tanken und Zahlen", "An vielen Zapfsäulen nach der Postleitzahl (ZIP) gefragt: mit Schweizer Karten oft im Tankstellenshop bezahlen. Preise ohne Steuer, Trinkgeld im Restaurant 15–20 %."),
 ("Hitze und Monsun", "Las Vegas, Zion und White Sands erreichen im Juli 38–45 °C. Ab Juli beginnt der Monsun im Südwesten: Gewitter und Sturzfluten in Schluchten (Narrows, Antelope Canyon). Auf Warnungen achten, Wanderungen früh starten, genug Wasser dabei haben."),
 ("Zeitzonen", "Las Vegas Pazifikzeit, Utah Mountain-Zeit, Arizona keine Sommerzeit, Navajo Nation Sommerzeit, New Mexico Mountain-Zeit, Chicago Central-Zeit, Osten Eastern-Zeit. Zur Schweiz sind es −6 bis −9 Stunden."),
 ("Versicherung", "Reisekranken- und Rücktransportversicherung mit hoher Deckung ist in den USA unverzichtbar, Arztkosten sind sehr hoch. Zusätzlich Annullationsschutz für Flüge, Hotels und Mietwagen."),
 ("Navajo Nation", "Monument Valley und Antelope Canyon liegen auf Navajo-Land mit eigenen Regeln: Eintritt pro Person, geführte Touren, keine Drohnen, kein Alkohol. Respektvoll verhalten, Fotos von Menschen nur mit Erlaubnis."),
 ("Zug im Nordosten", "Amtrak-Züge Washington–Philadelphia–New York sind schnell und bequem; Tickets früh online buchen, Gepäck selbst tragen."),
 ("Notfall", "In den USA 911 (Polizei, Ambulanz, Feuerwehr). Schweizer Vertretungen (Botschaft Washington, Generalkonsulat New York) notieren; EDA-Reiseplattform nutzen."),
 ("Handy", "eSIM für die USA vorab kaufen. Offline-Karten für Nationalparks laden, dort gibt es oft keinen Empfang."),
 ("Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."),
]

BUDGET = dict(
 days=34, total="35’600", span="26’800–45’800", perday="ca. 1’050 CHF pro Tag, ca. 8’900 pro Person",
 rows=[
  ("Flüge Zürich–Las Vegas und New York–Zürich", "4’000–6’000", "5’000", "ca. 1’000–1’500 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"),
  ("Mietwagen (1 Einwegmiete, Benzin, Parken, Maut)", "2’700–5’300", "3’800", "Las Vegas–Washington (ca. 25 Tage, ca. 4’400 Meilen), Parken in Chicago ca. 60–80 USD pro Nacht"),
  ("Bahn und lokale Verkehrsmittel", "500–1’200", "800", "Amtrak Washington–Philadelphia–New York, Metro und U-Bahn, Taxi"),
  ("Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)", "7’650–12’170", "9’900", "ca. 100–550 CHF pro Nacht, New York und Nationalparks am teuersten"),
  ("Verpflegung (Restaurants, Imbiss, Getränke)", "4’750–8’150", "6’200", "ca. 140–240 CHF pro Tag für 4 Personen"),
  ("Aktivitäten und Eintritte (inkl. Nationalpark-Jahrespass)", "3’850–7’050", "5’400", "Pass 250 USD, Antelope Canyon, Cedar Point, Skydeck, Freiheitsstatue, Broadway usw."),
  ("ESTA, Versicherung, eSIM", "900–1’800", "1’300", "ESTA ca. 40 USD pro Person, Reisekranken- und Annullationsschutz mit hoher Deckung"),
  ("Reserve (ca. 10 %)", "2’450–4’200", "3’250", "Souvenirs, Wäsche, Unvorhergesehenes"),
 ],
 stations=[("1. Las Vegas (3)", "1’070–1’970"), ("2. Zion National Park (2)", "730–1’180"), ("3. Page und Lake Powell (2)", "880–1’480"), ("4. Grand Canyon (2)", "830–1’430"),
  ("5. Monument Valley (1)", "540–1’040"), ("6. Santa Fe (2)", "780–1’330"), ("7. White Sands (1)", "300–520"), ("Zwischenübernachtung Oklahoma City (1)", "240–400"),
  ("8. Chicago (3)", "1’770–2’870"), ("9. Sandusky und Cedar Point (2)", "930–1’530"), ("10. Niagara Falls (2)", "780–1’380"), ("11. Washington, D.C. (4)", "1’710–2’910"),
  ("12. Philadelphia (2)", "830–1’380"), ("13. New York (7)", "4’630–7’730")],
 notes=["Preise für die Kids: Der Sohn (12) und die Tochter (14) zahlen bei Eintritten teils Kinderpreise (bis 11 bzw. 12 Jahre), oft aber den Vollpreis.",
        "Sparhebel: weniger Nächte in New York, Frühstück im Hotel, Imbiss statt Restaurant, Nationalpark-Jahrespass früh kaufen.",
        "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug-, Hotel- und Mietwagenpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."],
)

MAP = dict(kind='usa')
