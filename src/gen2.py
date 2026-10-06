import html,gen
css,js=gen.css,gen.js
css+='\n.map{height:440px;border-radius:6px;margin-top:6px;z-index:0}\n.lg{font-size:.78em;color:#4a5568;margin-top:6px}\n.lg span{margin-right:14px}\n.lg i{display:inline-block;width:26px;height:0;border-top:3px solid #2b6cb0;vertical-align:middle;margin-right:4px}\n.lg i.ld{border-top-style:dashed}'
plan=[
("19.–22. Juni","1. Singapur","3","Flug ab Zürich (Fr, 22 Uhr), Ankunft am Nachmittag oder Abend"),
("22.–26. Juni","2. Pulau Tioman (Pahang)","4","Bus nach Mersing (ca. 3,5–4 Std.), Fähre (ca. 1,5–2 Std.)"),
("26.–29. Juni","3. Kuala Lumpur","3","Fähre nach Mersing, Bus (ca. 5–6 Std.)"),
("29.–30. Juni","Zwischenübernachtung Kuala Besut","1","Fernbus ab Kuala Lumpur (ca. 8–9 Std.)"),
("30. Juni–3. Juli","4. Perhentian Islands","3","Speedboot ab Kuala Besut (ca. 30–45 Min.)"),
("3.–6. Juli","5. Penang / George Town","3","Speedboot und Minivan über Kota Bharu und Gerik (ca. 8–9 Std.)"),
("6.–7. Juli","Zwischenübernachtung Hat Yai (Thailand)","1","Fähre nach Butterworth, ETS-Zug nach Padang Besar (ca. 3 Std.), Grenze, Zug nach Hat Yai (ca. 1 Std.); insgesamt ca. 5–6 Std."),
("7.–9. Juli","6. Khanom","2","Minivan ab Hat Yai (ca. 4–5 Std.)"),
("9.–13. Juli","7. Koh Samui","4","Minivan zum Donsak Pier, Autofähre (ca. 2,5 Std.)"),
("13.–18. Juli","8. Koh Tao","5","Katamaran ab Samui (ca. 1,5 Std.)"),
("18.–20. Juli","9. Hua Hin / Khao Sam Roi Yot","2","Katamaran nach Chumphon, Zug nach Hua Hin (ca. 7 Std. insgesamt)"),
("20.–22. Juli","10. Bangkok","2","Zug oder Minivan (ca. 3–4 Std.); Rückflug 22. Juli"),
]
S=[
dict(t="1. Singapur (Start)",d="19.–23. Juni · 4 Nächte",
de="Idealer Einstieg mit Teenagern: sicher, sauber, gut ausgeschildert, mit vielen Attraktionen für 12- und 14-Jährige. Die ersten Tage dienen auch zum Ankommen und zum Überwinden des Jetlags.",
im=[("Universal Studios Singapore|Sentosa Singapore","Sentosa / Universal"),("Gardens by the Bay Cloud Forest|Supertree Grove Gardens by the Bay","Gardens by the Bay"),("Night Safari Singapore|Singapore Zoo","Night Safari")],
li=["<strong>Für Kinder und Teens:</strong> Universal Studios (Tickets online, Grössenbeschränkungen bei einigen Bahnen), S.E.A. Aquarium, Mandai Wildlife Reserve (Zoo, River Wonders, Night Safari), Science Centre, ArtScience Museum.","<strong>Dauer:</strong> 3 Nächte, Ankunft am Samstagnachmittag oder -abend, danach zwei volle Tage. Pro Tag nur eine Hauptattraktion plus Pause im Hotel (Hitze und Jetlag).","<strong>Essen:</strong> Hawker Centres sind günstig und familienfreundlich (Hainan-Chicken-Reis, Satay, Laksa). Wasserflaschen sind überall erhältlich.","<strong>Regeln:</strong> Vapes und Kaugummi-Import sind verboten; Bussgelder sind hoch."],
mo="Supertrees-Lichtshow (19:45/20:45, ★), Cloud Forest &amp; Flower Dome, Sentosa-Strände und Skyline Luge, Chinatown, Botanic Gardens (gratis), Jewel Changi mit Regenwasserfall.",
rt="Flug nach Changi, MRT in die Stadt (ca. 30–40 Min.). Vor Ort MRT und Grab."),
dict(t="2. Kuala Lumpur",d="23.–26. Juni · 3 Nächte",
de="Malaysias Hauptstadt bietet Wolkenkratzer, Aquarium, Parks und Wasserspass. Gute Infrastruktur und günstige Preise.",
im=[("Petronas Twin Towers Kuala Lumpur|Petronas Towers","Petronas Towers"),("Aquaria KLCC|KLCC Aquaria","Aquaria KLCC"),("Batu Caves temple stairs|Batu Caves","Batu Caves")],
li=["<strong>Für Kinder und Teens:</strong> Petronas-Skybridge (Zeitfenster früh online buchen), Aquaria KLCC (Aquarium im Kuala Lumpur City Centre), Petrosains Science Discovery Centre, Kuala Lumpur Bird Park, Sunway Lagoon (Wasser- und Freizeitpark).","<strong>Batu Caves:</strong> Früh morgens hingehen (Hitze, Menschenmengen), 272 Stufen. Makaken stehlen gern Essen und Brillen. Schultern und Knie bedecken.","<strong>Essen:</strong> Jalan Alor (Strassenküche), Food Courts in den Einkaufszentren (klimatisiert, familienfreundlich).","<strong>Fortbewegung:</strong> LRT/MRT/Monorail und Grab."],
mo="Menara Kuala Lumpur (Fernsehturm mit Aussicht, günstiger als die Petronas-Skybridge), Merdeka Square, Islamic Arts Museum, Petaling Street, Thean Hou Tempel, Perdana Botanical Garden.",
rt="Von Singapur per Flug (ca. 1 Std.) oder Bus (ca. 5–6 Std. inkl. Grenze); mit Kindern ist der Flug bequemer."),
dict(t="3. Langkawi",d="26.–30. Juni · 4 Nächte",
de="Naturinsel mit SkyBridge, Mangroven und Stränden. Ruhig und ideal für entspannte Strandtage nach der Stadt.",
im=[("Langkawi Sky Bridge","SkyBridge"),("Pantai Cenang beach Langkawi","Cenang Strand"),("Dayang Bunting lake|Pulau Dayang Bunting","Dayang Bunting")],
li=["<strong>Für Kinder und Teens:</strong> SkyCab und SkyBridge (früh am Morgen), Underwater World Langkawi, Mangrovenfahrt mit Adlerfütterung (Kilim Geoforest), Schnorcheln beim Inselhopping, Pulau Dayang Bunting (Baden im See).","<strong>Dauer:</strong> 4 Nächte. Mietwagen mit Fahrer oder Grab für Ausflüge; Rollerfahren mit Teenagern nicht empfohlen.","<strong>Wetter:</strong> Im Juni/Juli Schauer und gelegentlich unruhige See, Bootsausflüge flexibel halten.","<strong>Zollfrei:</strong> Schokolade und andere Waren sind günstig."],
mo="Telaga Tujuh (natürliche Wasserbecken), Oriental Village, Eagle Square, Tanjung Rhu Strand, Pulau Payar Marine Park (Schnorcheln).",
rt="Flug ab Kuala Lumpur (ca. 1 Std.). Die Fähre nach Penang geht ab Kuah/Swettenham-Pier (ca. 2,5–3 Std.)."),
dict(t="4. Penang / George Town",d="30. Juni–3. Juli · 3 Nächte",
de="Streetfood-Hochburg mit Wandkunst, Strand und Bergbahn. Auch Teenager lieben die Street-Art-Rallye durch die Gassen.",
im=[("Penang Hill funicular|Penang Hill","Penang Hill"),("George Town Penang street art mural|Penang street art","Wandkunst"),("Kek Lok Si temple","Kek Lok Si")],
li=["<strong>Für Kinder und Teens:</strong> Penang Hill (Standseilbahn, Kanopyweg), Entopia (Schmetterlinge/Insekten), Escape Adventure Park (Wasserrutschen), Strand in Batu Ferringhi, Street-Art-Schnitzeljagd.","<strong>Essen:</strong> Char Kway Teow, Satay, Cendol, Hawker Centres. Bei scharfen Gerichten «nicht scharf» bestellen, falls nötig.","<strong>Dauer:</strong> 3 Nächte. Altstadt per Grab und zu Fuss, mittags Pausen wegen Hitze."],
mo="Pinang Peranakan Mansion, Khoo Kongsi, Fort Cornwallis, Clan Jetties (Chew Jetty), Penang National Park (Monkey Beach per Boot).",
rt="Fähre von Langkawi nach Penang (ca. 2,5–3 Std.). Abreise per Flug Penang–Bangkok (ca. 1 Std. 45 Min.); Verbindung prüfen."),
dict(t="5. Koh Samui",d="4.–8. Juli · 4 Nächte",
de="Thailands grosse Familieninsel mit guter Infrastruktur, Stränden und Ausflügen. Im Juli sind die Wetterbedingungen im Golf meist stabil.",
im=[("Big Buddha Koh Samui|Wat Phra Yai Samui","Big Buddha"),("Ang Thong National Marine Park|Ang Thong Marine Park","Ang Thong"),("Fisherman's Village Bophut Samui|Bophut Koh Samui","Fisherman's Village")],
li=["<strong>Für Kinder und Teens:</strong> Tagesausflug in den Ang Thong Marine Park (Kajak, Schnorcheln, Wanderung zum Aussichtspunkt), Strandtage in Lamai/Chaweng, Na Muang Wasserfälle.","<strong>Dauer:</strong> 4 Nächte, Unterkunft mit Pool und Familienzimmer. Bophut/Mae Nam sind ruhiger als Chaweng.","<strong>Sicherheit:</strong> Rote Flaggen am Strand beachten, Schwimmwesten bei Bootsausflügen, kein Roller mit den Teenagern."],
mo="Wat Plai Laem, Fisherman's Village (Walking Street nur freitags, im Reiseplan am Freitag, 9. Juli möglich), Hin Ta Hin Yai, Tierschutzprojekte mit ethischer Ausrichtung statt Elefantenreiten.",
rt="Flug Bangkok–Samui (ca. 1 Std.). Alternativ per Fähre ab Surat Thani/Donsak (länger, weniger bequem)."),
dict(t="6. Koh Phangan",d="8.–11. Juli · 3 Nächte",
de="Ruhige Strände und Dschungel im Norden und Osten. Die Insel ist weit mehr als die berühmte Full-Moon-Party und bietet mit Kindern viel Natur.",
im=[("Bottle Beach Koh Phangan","Bottle Beach"),("Thong Nai Pan Koh Phangan|Thong Nai Pan","Thong Nai Pan"),("Than Sadet waterfall Koh Phangan|Than Sadet","Than Sadet")],
li=["<strong>Dauer:</strong> 3 Nächte. Basis im Norden/Osten (Thong Nai Pan, Bottle Beach), nicht in Haad Rin.","<strong>Für Kinder und Teens:</strong> Schnorcheln, Kajak, Wasserfälle (Than Sadet), Strandtage, Bootsausflug.","<strong>Full Moon Party:</strong> Findet im Reiseplan nicht statt (nächster Vollmond ca. 29. Juli, Termin prüfen). Das Nachtleben in Haad Rin ist für Kinder ungeeignet.","<strong>Praktisch:</strong> Strassen im Norden sind steil und rutschig. Taxi oder Songthaew statt Roller."],
mo="Wat Phu Khao Noi (Aussicht), Thong Sala Nachtmarkt, Yoga- und Wellness-Angebote für Familien, Sri Thanu.",
rt="Fähre Samui–Phangan (Lomprayah, Seatran oder Raja, ca. 30–60 Min.)."),
dict(t="7. Koh Tao",d="11.–15. Juli · 4 Nächte",
de="Das Schnorchel- und Tauchparadies im Golf. Mit 12 und 14 Jahren ideal für das erste Tauchabenteuer in ruhigem, klarem Wasser.",
im=[("Ko Nang Yuan sandbar|Nang Yuan island","Koh Nang Yuan"),("Koh Tao clear water snorkeling|Koh Tao bay","Klares Wasser"),("Sairee Beach Koh Tao","Sairee Beach")],
li=["<strong>Für Kinder und Teens:</strong> Schnorcheln (Shark Bay, Japanese Gardens, Mango Bay), Koh Nang Yuan (Aussichtspunkt, Strand). PADI-Junior-Kurse sind von 10 bis 14 Jahren möglich (Open Water ab 15). Seriöse Tauchschule mit Kinderprogramm wählen.","<strong>Dauer:</strong> 4 Nächte. Medizinischen Fragebogen ehrlich ausfüllen; nach Tauchgängen 18–24 Std. kein Flug (Abreise beachten).","<strong>Praktisch:</strong> Eintritt für Nang Yuan, früh anreisen. Seekrankheitstabletten für Bootsfahrten bereithalten."],
mo="John-Suwan-Aussichtspunkt, Freedom Beach, Sairee Beach (Sonnenuntergang), Wanderungen, Haistation-Besuch (Ethik beachten).",
rt="Highspeed-Katamaran der Lomprayah von Koh Phangan nach Koh Tao (ca. 1 Std.)."),
dict(t="8. Hua Hin / Khao Sam Roi Yot",d="15.–18. Juli · 3 Nächte",
de="Königliche Küstenstadt mit breitem Strand, Wasserpark und Nationalpark. Ein entspannter Zwischenhalt vor der Grossstadt.",
im=[("Phraya Nakhon Cave pavilion","Phraya-Nakhon-Höhle"),("Hua Hin beach|Hua Hin Thailand beach","Strand Hua Hin"),("Hua Hin railway station","Bahnhof Hua Hin")],
li=["<strong>Für Kinder und Teens:</strong> Vana Nava Water Jungle (Wasserpark), Strandtage, Reiten am Strand, Santorini Park (Fotospots), Wanderung zur Phraya-Nakhon-Höhle (ca. 30–45 Min. steil).","<strong>Cicada Market:</strong> Fr–So abends, im Plan am Freitag, 17. Juli möglich.","<strong>Phraya Nakhon:</strong> Möglichst vormittags, wenn das Sonnenlicht in die Höhle fällt. Wasser und festes Schuhwerk mitnehmen."],
mo="Hua Hin Night Market, Khao Takiab (Affenberg, Affen nicht füttern), Pala-U Wasserfall, Khao Sam Roi Yot Sumpf (Vögel), Königlicher Bahnhof.",
rt="Katamaran Lomprayah von Koh Tao nach Chumphon (inkl. Bus), dann Zug nach Hua Hin (ca. 4–5 Std.). Alternativ Minivan."),
dict(t="9. Bangkok (Finale)",d="18.–23. Juli · 5 Nächte, Rückflug 23. Juli",
de="Vielfältiges Finale: Tempel, Flussfahrten, Aquarium und Nachtmärkte. Zwei Nächte reichen für die wichtigsten Höhepunkte der Stadt.",
im=[("Wat Arun","Wat Arun"),("Grand Palace|Grand Palace Bangkok","Grand Palace"),("Ayutthaya Wat Mahathat Buddha head|Ayutthaya","Ayutthaya")],
li=["<strong>Für Kinder und Teens:</strong> SEA LIFE Bangkok Ocean World (Siam Paragon), Safari World (nur bei genug Zeit), Khlong-Bootsfahrt, Tempelbesichtigung in Ayutthaya.","<strong>Dauer:</strong> 5 Nächte, inkl. Ayutthaya-Tagesausflug (Zug ca. 1,5 Std.). Am Abreisetag Puffer für den Weg zum Flughafen einplanen.","<strong>Dresscode:</strong> Grand Palace und Wat Pho verlangen bedeckte Schultern und lange Hosen/Röcke, auch für die Teenager.","<strong>Juli:</strong> Regenzeit, nachmittags kurze Schauer. Indoor-Alternativen (Aquarium, Museen, Malls) einplanen."],
mo="Wat Pho (liegender Buddha, ★), Chinatown am Abend (Yaowarat), ICONSIAM, Jim Thompson House, Lumphini Park, Asiatique (Riverfront-Nachtmarkt mit Riesenrad, abends täglich geöffnet).",
rt="Zug oder Minivan von Hua Hin nach Bangkok (ca. 3–4 Std.), Ankunft je nach Zug am Bahnhof Krung Thep Aphiwat oder Hua Lamphong; weiter mit MRT oder Taxi."),
]

by={x['t'].split('. ',1)[1].split(' (')[0].split(' /')[0]:x for x in S}
khaosok=dict(t="",d="",
de="Einer der ältesten Regenwälder der Welt mit Kalksteinfelsen, dem türkisgrünen Cheow-Lan-See und schwimmenden Bungalows. Ein Naturhöhepunkt, der mit Teenagern besonders gut funktioniert.",
im=[("Cheow Lan Lake Khao Sok|Cheow Lan lake","Cheow-Lan-See"),("Khao Sok National Park limestone karst|Khao Sok National Park","Khao Sok"),("Khao Sok jungle river|Sok River Khao Sok","Dschungelfluss")],
li=["<strong>Für Teens:</strong> Bootsfahrt auf dem Cheow-Lan-See mit Übernachtung in schwimmenden Bungalows, Kanu auf dem Sok River, Dschungel-Wanderungen, Tubing und Besuch der Coral Cave beim Seeausflug. Die Nam-Talu-Höhle ist von Juni bis November wegen Sturzflutgefahr gesperrt.","<strong>Dauer:</strong> 2 Nächte: eine Nacht im Dorf Khao Sok, eine Nacht (oder Tagesausflug) am See. Tour vorab bei seriösem Anbieter buchen.","<strong>Juli:</strong> Regenzeit. Wanderwege können gesperrt sein, Wasserstände sind hoch; Regenjacken, wasserdichte Taschen und flexible Planung mitbringen. Aktuelle Lage bei der Parkverwaltung oder Unterkunft erfragen.","<strong>Tiere:</strong> Gibbons, Nashornvögel und Makaken sind zu sehen; kein Elefantenreiten, nur ethisch geführte Beobachtung."],
mo="Coral Cave (Tham Pakarang) am Cheow-Lan-See, Kajaktour auf dem Sok River, Sonnenaufgang auf dem See, Dschungel-Nachttour mit Guide.",
rt="Zug oder Minivan von Hat Yai nach Surat Thani, dann Minivan nach Khao Sok (ca. 6–7 Std. insgesamt). Fahrt früh am Morgen starten.")
tioman=dict(t="",d="",
de="Grüne Dschungelinsel vor der Ostküste Malaysias mit Korallenriffen, Wasserfällen und kleinen Dörfern ohne Autoverkehr. Die beste Reisezeit ist Mai bis September, also genau euer Zeitraum. Ein ruhiger Einstieg nach Singapur mit viel Natur.",
im=[],
li=["<strong>Für Teens:</strong> Schnorcheltour zu den vorgelagerten Inseln (Pulau Tulai, Chebeh, Renggis), Dschungel-Wanderung quer über die Insel (Tekek–Juara, ca. 2–3 Std.), Wasserfälle, Kajak und Strandtage.","<strong>Dauer:</strong> 4 Nächte. Basis zum Beispiel an der ruhigen Westseite (Salang, Air Batang) oder im östlichen Juara; ein Wechsel der Inselseite kostet Zeit (Boot oder Wanderweg).","<strong>Praktisch:</strong> Die Fähre fährt nur wenige Male pro Tag zu festen Zeiten, vorab Ticket buchen und rechtzeitig am Hafen sein (Mersing Jetty oder Tanjung Gemok). Bargeld mitnehmen, Geldautomaten sind selten. Die Insel ist zollfrei.","<strong>Kultur:</strong> Pahang ist überwiegend muslimisch; ausserhalb der Strände Schultern und Knie bedecken."],
mo="Asah-Wasserfall bei Juara, Marine-Park-Schnorchelplätze, Kajak entlang der Küste, Sonnenuntergang am Strand von Salang, Dschungelpfade mit Warane und Makaken.",
rt="Fernbus von Singapur nach Mersing (ca. 3,5–4 Std., je nach Anbieter Halt direkt am Hafen Mersing Jetty oder am Busbahnhof; Grenzkontrolle einplanen), dann Fähre nach Tioman (ca. 1,5–2 Std.). Früh am Morgen starten, damit ihr eine Nachmittagsfähre erreicht. Bus und Fähre vorab buchen.")
perhentian=dict(t="",d="",
de="Zwei autofreie Inseln an der Ostküste mit glasklarem Wasser, weissen Stränden und Schildkröten. Juni liegt mitten in der Saison (ca. März bis Oktober); der Monsun an der Ostküste beginnt erst im November.",
im=[],
li=["<strong>Für Teens:</strong> Schnorcheltour mit Meeresschildkröten und Schwarzspitzen-Riffhaien (Shark Point, Turtle Point), Kajak, Strandtage, Dschungelpfad zwischen den Buchten.","<strong>Dauer:</strong> 3 Nächte. Perhentian Besar ist ruhiger und familienfreundlicher, Kecil (Long Beach) lebhafter und einfacher.","<strong>Praktisch:</strong> Keine Geldautomaten, genug Bargeld mitbringen; Marine-Park-Gebühr bar am Steg. Fortbewegung nur per Wassertaxi. Unterkünfte sind eher einfach, früh buchen.","<strong>Kultur:</strong> Die Festlandprovinzen Terengganu und Kelantan sind konservativ-muslimisch; ausserhalb der Strände Schultern und Knie bedecken. Alkohol ist nur eingeschränkt erhältlich."],
mo="Turtle Beach und Shark Point (Schnorcheln), Romantic Beach, Windmill Viewpoint auf Kecil, Teluk Pauh (Hausriff auf Besar), Sonnenuntergang an der Coral Bay.",
rt="Fernbus ab dem Busbahnhof Terminal Bersepadu Selatan in Kuala Lumpur nach Kuala Besut (ca. 8–9 Std.), dort eine Übernachtung, am Morgen Speedboot zu den Inseln (ca. 30–45 Min.). Bus und Boot früh buchen; Nachtbusse gibt es auch, sind mit Teenagern aber anstrengend.")
khanom=dict(t="",d="",
de="Ruhiger Küstenort am Golf von Thailand mit einsamen Stränden, Wasserfällen und rosa Delfinen. Ein entspannter Zwischenhalt nach der langen Reise aus dem Süden.",
im=[("Indo-Pacific humpback dolphin Thailand|pink dolphin Khanom","Rosa Delfine"),("Khanom beach|Khanom Nakhon Si Thammarat","Strand bei Khanom"),("longtail boat Thailand beach","Longtailboot")],
li=["<strong>Für Teens:</strong> Delfin-Bootstour ab Pak Nam (Sichtung nicht garantiert), Hin Lat Wasserfälle, Strandtage, Schnorcheln und Kajak.","<strong>Dauer:</strong> 2 Nächte: Ankunft am Nachmittag, am nächsten Tag Delfin-Tour am Morgen und Wasserfälle. Unterkunft mit Pool vorab buchen, das Angebot ist klein.","<strong>Praktisch:</strong> Kaum Touristen; Taxi oder Songthaew für Ausflüge organisieren, keine Roller."],
mo="Hat Nai Plao, Hat Na Dan, Kokosnuss-Plantagen, lokale Meeresfrüchte-Lokale; bei genug Zeit Nakhon Si Thammarat mit Wat Phra Mahathat.",
rt="Minivan von Hat Yai nach Khanom (ca. 4–5 Std.).")
melaka=dict(t="",d="",
de="Historische Kolonialstadt (UNESCO-Welterbe) mit roten Backsteinbauten der Holländer, Flussfahrt und Altstadtgassen. Als Stopp zwischen Singapur und Kuala Lumpur kurz und lohnend.",
im=[("Christ Church Malacca|Christ Church Malaysia","Christ Church"),("Malacca River riverfront night|Malacca River","Melaka-Fluss"),("Melaka Straits Mosque|Masjid Selat Melaka","Melaka Straits Mosque")],
li=["<strong>Für Teens:</strong> Flussfahrt auf dem Melaka-Fluss, bunt dekorierte Trishaws, St. Paul's Hill und A Famosa, Street-Art in den Gassen.","<strong>Dauer:</strong> 1 Nacht. Die Altstadt ist gut zu Fuss erkundbar.","<strong>Abendprogramm (Dienstag):</strong> Flussfahrt bei Dämmerung, wenn die Uferpromenade beleuchtet ist; Sonnenuntergang an der Melaka Straits Mosque (schwimmende Moschee auf Pulau Melaka); Aussicht vom drehenden Turm Menara Taming Sari.","<strong>Essen:</strong> Nyonya-Küche (Laksa, Chicken Rice Balls, Cendol); abends Grillfisch im Portugiesischen Viertel (Medan Portugis)."],
mo="Stadthuys, Cheng Hoon Teng (ältester chinesischer Tempel Malaysias), Baba &amp; Nyonya Heritage Museum, Maritime Museum.",
rt="Fernbus (z.B. KKKL) direkt aus Singapur (ca. 4–5 Std. inkl. Grenze).")
order=[by['Singapur'],tioman,by['Kuala Lumpur'],perhentian,by['Penang'],khanom,by['Koh Samui'],by['Koh Tao'],by['Hua Hin'],by['Bangkok']]
S=order
tt=[("1. Singapur (Start)","19.–22. Juni · 3 Nächte"),("2. Pulau Tioman (Pahang)","22.–26. Juni · 4 Nächte"),("3. Kuala Lumpur","26.–29. Juni · 3 Nächte"),("4. Perhentian Islands","30. Juni–3. Juli · 3 Nächte"),("5. Penang / George Town","3.–6. Juli · 3 Nächte"),("6. Khanom","7.–9. Juli · 2 Nächte"),("7. Koh Samui","9.–13. Juli · 4 Nächte"),("8. Koh Tao","13.–18. Juli · 5 Nächte"),("9. Hua Hin / Khao Sam Roi Yot","18.–20. Juli · 2 Nächte"),("10. Bangkok (Finale)","20.–22. Juli · 2 Nächte, Rückflug 22. Juli")]
for x,(p,q) in zip(S,tt): x['t']=p; x['d']=q
by['Kuala Lumpur']['rt']="Fähre von Tioman nach Mersing (ca. 1,5–2 Std.), dann Fernbus nach Kuala Lumpur (ca. 5–6 Std.). Die Direktverbindung Mersing–Kuala Lumpur vorab prüfen; Fähre am Morgen nehmen, damit ihr abends ankommt."
P=by['Penang']
P['li']=[l.replace('3 Nächte','2 Nächte') for l in P['li']]
P['rt']="Speedboot von den Perhentians nach Kuala Besut, dann Minivan oder Bus über Kota Bharu und den East-West-Highway (Gerik) nach Penang (ca. 8–9 Std.); Boot und Minivan werden oft als Kombi-Ticket angeboten. Früh starten. Weiterreise nach Thailand: Fähre George Town–Butterworth, ETS-Zug nach Padang Besar (ca. 3 Std.), Grenzübergang, Zug nach Hat Yai (ca. 1 Std.), dort eine Übernachtung."
P['wa']="<strong>Sicherheitshinweis:</strong> Die Provinzen Narathiwat, Yala und Pattani im tiefen Süden Thailands (teils auch Songkhla) haben Reisewarnungen. Der Grenzübergang Padang Besar und die Stadt Hat Yai gehören nicht dazu, die aktuelle Lage und die EDA-Reisehinweise vorab prüfen. Nicht weiter in den tiefen Süden reisen."
L=by['Langkawi']
L['li']=[l.replace('4 Nächte','3 Nächte') for l in L['li']]
L['rt']="Fähre George Town–Butterworth, ETS- oder Komuter-Zug nach Arau (ca. 1,5 Std.), Taxi zum Hafen Kuala Perlis (ca. 15 Min.), Fähre nach Langkawi (ca. 1 Std. 15 Min.); insgesamt ca. 4–5 Std. Weiterreise nach Thailand: Fähre zurück nach Kuala Perlis, Taxi nach Padang Besar, Grenzübergang, Shuttle-Zug (wenige Abfahrten pro Tag) oder Grenz-Van nach Hat Yai (ca. 1 Std.). Fahrpläne vorab prüfen und früh am Morgen starten."
Sa=by['Koh Samui']
Sa['li']=[l.replace('4 Nächte','4 Nächte') for l in Sa['li']]
Sa['rt']="Minivan von Khanom zum Donsak Pier (ca. 1 Std.), dann Autofähre (Seatran/Raja) direkt nach Samui (ca. 1,5 Std.)."
T=by['Koh Tao']
T['de']="Das Schnorchelparadies im Golf von Thailand mit klarem, ruhigem Wasser und der berühmten Sandbank von Koh Nang Yuan."
T['li']=["<strong>Für Teens:</strong> Schnorcheln (Shark Bay, Japanese Gardens, Mango Bay), Koh Nang Yuan (Aussichtspunkt, Strand), Bootsausflug rund um die Insel.","<strong>Dauer:</strong> 5 Nächte. Schnorchelwesten für alle, Teenager beim Schnorcheln nicht allein lassen.","<strong>Praktisch:</strong> Eintritt für Nang Yuan, früh anreisen. Seekrankheitstabletten für Bootsfahrten bereithalten."]
T['rt']="Highspeed-Katamaran der Lomprayah von Koh Samui nach Koh Tao (ca. 1,5 Std.). Online vorab buchen, Wellengang kann stärker sein."
H=by['Hua Hin']
H['li']=[l.replace('im Plan am Freitag, 17. Juli möglich','im Reiseplan am Sonntag, 18. Juli möglich') for l in H['li']]
H['li'].insert(0,'<strong>Dauer:</strong> 2 Nächte: ein Tag Khao Sam Roi Yot mit Phraya-Nakhon-Höhle, dazu Strand und Märkte am Abend. Der Wasserpark ist optional.')
H['rt']="Katamaran Lomprayah von Koh Tao nach Chumphon (inkl. Bus), dann Zug nach Hua Hin. Gesamtreise ca. 7 Std.: früh am Morgen losfahren, Verpflegung mitnehmen."
B=by['Bangkok']
B['li']=[('<strong>Dauer:</strong> 2 Nächte. Ein voller Tag für Grand Palace, Wat Pho und Wat Arun; Ayutthaya passt nur, wenn der Rückflug erst am Abend des 22. Juli geht. Am Abreisetag Puffer für den Weg zum Flughafen einplanen.' if l.startswith('<strong>Dauer:') else l) for l in B['li']]
for x in S: x['li']=[l.replace('Für Kinder und Teens:','Für Teens:') for l in x['li']]
G=by['Singapur']
G['li'][0]="<strong>Für Teens:</strong> Sentosa-Tag (★): Universal Studios Singapore, Adventure Cove Waterpark, Skyline Luge, Strand und abends die Show «Wings of Time». Dazu Singapore Oceanarium (früher S.E.A. Aquarium), Mandai Wildlife Reserve (Zoo, River Wonders, Night Safari), Science Centre, ArtScience Museum. Tickets online, bei einigen Bahnen gelten Grössenbeschränkungen."
G['mo']="Supertrees-Lichtshow (19:45/20:45, ★), Cloud Forest &amp; Flower Dome, Seilbahn nach Sentosa (Mount Faber Line), Chinatown, Botanic Gardens (gratis), Jewel Changi mit Regenwasserfall."
by['Kuala Lumpur']['li'].append("<strong>Mitmachen:</strong> Street-Food-Tour durch Chinatown und Bukit Bintang.")
by['Penang']['li'].append("<strong>Mitmachen:</strong> Kajak an der Küste, Wassersport am Strand von Batu Ferringhi.")
by['Koh Samui']['li'].append("<strong>Mitmachen:</strong> Kajak/SUP, Dschungelpark mit Seilrutschen im Inselinneren.")
by['Koh Tao']['li'].append("<strong>Mitmachen:</strong> Kajak/SUP, Sonnenuntergangs-Bootstour, Wanderung zu den Aussichtspunkten.")
by['Bangkok']['li'].append("<strong>Mitmachen:</strong> Muay-Thai-Schnupperkurs, Tuk-Tuk-Food-Tour am Abend, Escape Rooms in den Einkaufszentren.")
gen_blk='''<div class="gen">
<strong>Familienreise: wichtige Hinweise</strong>
<ul>
<li><strong>Reisetempo:</strong> Pro Tag maximal ein grösserer Transfer, lange Fahrten morgens, Nachmittage zur Erholung. Pro Station meist 3–6 Nächte, kürzere Aufenthalte nur als Zwischenhalt. Hitze, Jetlag und Regen einplanen. Bei Fähr- oder Zugausfällen Puffer nutzen.</li>
<li><strong>Beteiligung der Teenager:</strong> Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt. Ein Reisetagebuch oder Fotoprojekt macht die Reise für Teenager zum eigenen Projekt.</li>
<li><strong>Unterkunft:</strong> Familienzimmer oder zwei Zimmer mit Verbindungstür, Pool, Klimaanlage und gute Bewertungen zu Sauberkeit. Ab Samui lieber Hotels mit Frühstück und Strandnähe.</li>
<li><strong>Dokumente:</strong> Jede Person braucht einen eigenen Reisepass (mind. 6 Monate gültig). Kopien und Fotos aller Pässe, Impfausweise, Versicherungsnachweise mitführen.</li>
<li><strong>Gesundheit:</strong> Impfstatus aller vier Reisenden beim Hausarzt/Tropeninstitut mind. 6–8 Wochen vorher klären. Dengue-Mückenschutz, Sonnencreme (hoher LSF), Hut, Rashguard (UV-Shirt). Reiseapotheke (Fieber, Durchfall, Elektrolyte, Reisekrankheit): Präparate und Dosierungen für die Teenager vorab mit dem Arzt besprechen.</li>
<li><strong>Wasser &amp; Essen:</strong> Nur abgefülltes oder gefiltertes Wasser, Eiswürfel nur in seriösen Lokalen. Einfache Gerichte (Reis, Nudeln, Omelette, Obst) sind überall erhältlich.</li>
<li><strong>Wasser-Sicherheit:</strong> Schwimmwesten auf Booten, rote Flaggen ernst nehmen, Teenager beim Schnorcheln nicht allein lassen, Strömungen beachten. Quallensaison und Wellengang vor Ort bei der Unterkunft erfragen.</li>
<li><strong>Transport:</strong> Alle Strecken sind ohne Inlandflug per Bus, Zug und Fähre geplant. Sicherheitsgurte in Taxis und Minivans nutzen. Grab-Fahrten bevorzugen, Roller meiden. Fähren, Katamarane und Züge früh buchen und Seekrankheitsmittel bereithalten.</li>
<li><strong>Bildschirmzeit &amp; Beschäftigung:</strong> Für lange Transfers Bücher, Downloads, Kartenspiele und Kopfhörer einpacken.</li>
<li><strong>Einreise (Schweizer Pass):</strong> Singapur und Malaysia sind für Touristen visafrei. Thailand hat seit 15. September 2026 die visafreie Aufenthaltsdauer auf 30 Tage verkürzt (vorher 60) und visafreie Einreisen über Landgrenzen auf zwei pro Kalenderjahr begrenzt. Auf dieser Route seid ihr ca. 16 Tage in Thailand und reist einmal über Land ein; ob die Schweiz auf der Liste der visabefreiten Länder steht, beim Thai-Konsulat oder EDA prüfen. Online-Anmeldungen: SG Arrival Card (Singapur), MDAC (Malaysia), TDAC (Thailand). Reisepass mind. 6 Monate gültig.</li>
<li><strong>Versicherung:</strong> Reisekranken- und Rücktransportversicherung für die ganze Familie, inkl. Schnorcheln und Wassersport.</li>
<li><strong>Notfall:</strong> Singapur 999/995, Malaysia 999, Thailand 191/1669 (Touristenpolizei 1155). Schweizer Vertretungen notieren; EDA-Reiseplattform nutzen.</li>
<li><strong>Geld &amp; Technik:</strong> Währungen SGD, MYR, THB; Kreditkarte ohne Fremdwährungsgebühr. eSIM für die Region, Grab, 12go.asia, Google Maps offline, Powerbank im Handgepäck.</li>
<li><strong>Wetter im Juni/Juli:</strong> Heiss und feucht, Regenschauer. Penang und Bangkok haben Regenzeit; die Ostküste Malaysias (Tioman, Perhentian) und der Golf von Thailand (Samui, Tao) sind im Juni und Juli meist ruhiger.</li>
</ul>
</div>'''

budget='''<div class="gen">
<strong>Budget</strong>
<table class="pl">
<tr><th>Kategorie</th><th>Spanne</th><th>Planwert</th><th>Grundlage</th></tr>
<tr><td>Flüge Zürich–Singapur und Bangkok–Zürich</td><td>4&#8217;400–5&#8217;600</td><td>5&#8217;000</td><td>ca. 1&#8217;100–1&#8217;400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)</td></tr>
<tr><td>Fernverkehr (Bus, Zug, Fähre, Minivan)</td><td>870–1&#8217;580</td><td>1&#8217;200</td><td>Bus Singapur–Mersing, Fähren Mersing–Tioman, Bus nach Kuala Lumpur und Kuala Besut, Boote Perhentian, Minivan nach Penang, Fähre/ETS/Zug nach Hat Yai, Minivans nach Khanom, Fähren Samui–Tao–Chumphon, Zug nach Hua Hin/Bangkok</td></tr>
<tr><td>Lokale Transfers</td><td>500–1&#8217;000</td><td>600</td><td>Grab, MRT/Skytrain, Wassertaxis, Songthaew</td></tr>
<tr><td>Unterkunft (Familienzimmer oder 2 Zimmer, 3–4 Sterne)</td><td>3&#8217;350–5&#8217;300</td><td>4&#8217;300</td><td>ca. 80–170 CHF pro Nacht, Singapur ca. 220–300</td></tr>
<tr><td>Verpflegung (Hawker, Restaurants, Getränke)</td><td>2&#8217;750–4&#8217;300</td><td>3&#8217;500</td><td>ca. 70–180 CHF pro Tag für 4 Personen, Singapur am teuersten</td></tr>
<tr><td>Aktivitäten und Eintritte</td><td>2&#8217;350–4&#8217;050</td><td>3&#8217;200</td><td>Universal, Schnorcheltouren, Marine-Park-Gebühren, Ang Thong usw.</td></tr>
<tr><td>Versicherung, eSIM, Medikamente, Impfungen</td><td>600–1&#8217;200</td><td>900</td><td>Reisekranken- und Annullationsschutz, Reiseapotheke</td></tr>
<tr><td>Reserve (ca. 10 %)</td><td>1&#8217;500–2&#8217;300</td><td>1&#8217;850</td><td>Souvenirs, Wäsche, Unvorhergesehenes</td></tr>
<tr><td><strong>Total</strong></td><td><strong>16&#8217;300–25&#8217;300</strong></td><td><strong>ca. 20&#8217;600</strong></td><td>ca. 620 CHF pro Tag, ca. 5&#8217;150 pro Person</td></tr>
</table>
<ul>
<li><strong>Preise für die Kids:</strong> Der Sohn (12) zahlt bei Eintritten oft noch den Kinderpreis (teils nur bis 11), die Tochter (14) meist den Vollpreis.</li>
<li><strong>Sparhebel:</strong> Hawker Centres und lokale Restaurants statt Hotelessen, Familienzimmer statt zwei Zimmer, Flüge früh buchen.</li>
</ul>
<table class="pl">
<tr><th>Station (Nächte)</th><th>Unterkunft, Essen, Aktivitäten</th></tr>
<tr><td>1. Singapur (3)</td><td>1&#8217;520–2&#8217;240</td></tr>
<tr><td>2. Pulau Tioman (4)</td><td>850–1&#8217;450</td></tr>
<tr><td>3. Kuala Lumpur (3)</td><td>630–1&#8217;050</td></tr>
<tr><td>Zwischenübernachtung Kuala Besut (1)</td><td>140–220</td></tr>
<tr><td>4. Perhentian Islands (3)</td><td>760–1&#8217;290</td></tr>
<tr><td>5. Penang (3)</td><td>630–1&#8217;000</td></tr>
<tr><td>Zwischenübernachtung Hat Yai (1)</td><td>140–270</td></tr>
<tr><td>6. Khanom (2)</td><td>440–740</td></tr>
<tr><td>7. Koh Samui (4)</td><td>1&#8217;150–1&#8217;830</td></tr>
<tr><td>8. Koh Tao (5)</td><td>1&#8217;150–1&#8217;850</td></tr>
<tr><td>9. Hua Hin / Khao Sam Roi Yot (2)</td><td>490–770</td></tr>
<tr><td>10. Bangkok (2)</td><td>560–950</td></tr>
</table>
<ul><li>Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug- und Hotelpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen.</li></ul>
</div>'''

variety='''<div class="gen">
<strong>Abwechslung im Reiseverlauf</strong>
<ul>
<li><strong>Action und Freizeitparks:</strong> Singapur (Sentosa, Universal, Wasserpark), Kuala Lumpur (Sunway Lagoon), Penang (Escape Adventure Park), Pulau Tioman (Dschungel, Riffe), Hua Hin (Wasserpark), Bangkok (Safari World, SEA LIFE).</li>
<li><strong>Kultur und Geschichte:</strong> George Town, Khao Sam Roi Yot (Höhle), Bangkok (Grand Palace, Wat Pho), Ayutthaya (Tempelruinen).</li>
<li><strong>Natur und Tiere:</strong> Mandai Wildlife Reserve, Batu Caves, Penang National Park, Schildkröten auf den Perhentians, Dschungel und Riffe auf Tioman, Delfine in Khanom, Wasserfälle, Schnorcheln auf Samui und Tao, Ang Thong Marine Park.</li>
<li><strong>Strand und Erholung:</strong> Tioman, Perhentian Islands, Khanom, Koh Samui, Koh Tao, Hua Hin. Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen.</li>
<li><strong>Mitmachen:</strong> Muay-Thai-Schnupperkurs, Kajak/SUP, Street-Food- und Tuk-Tuk-Touren.</li>
</ul>
</div>'''

import json
coords=[(1.3521,103.8198),(2.1896,102.2501),(3.1390,101.6869),(5.4164,100.3327),(6.2903,99.7283),(8.9167,98.5333),(9.2000,99.8500),(9.5120,100.0136),(10.0956,99.8404),(12.5684,99.9577),(13.7563,100.5018)]
pts=[[c[0],c[1],t[0],t[1],str(n+1)] for n,(c,t) in enumerate(zip(coords,tt))]
pts.append([7.0086,100.4747,'Zwischenübernachtung Hat Yai','2.–3. Juli · 1 Nacht','H'])
SG,ML,KL=(1.3521,103.8198),(2.1896,102.2501),(3.1390,101.6869)
BW,PN,LK=(5.3990,100.3638),(5.4164,100.3327),(6.2903,99.7283)
KP,PB,HY=(6.3989,100.1359),(6.6620,100.3170),(7.0086,100.4747)
ST,KS,KH=(9.1382,99.3215),(8.9167,98.5333),(9.2000,99.8500)
DS,SM,TO=(9.3130,99.6900),(9.5120,100.0136),(10.0956,99.8404)
CP,HH,BK=(10.4930,99.1800),(12.5684,99.9577),(13.7563,100.5018)
AR=(6.4330,100.2770)
segs=[([SG,ML,KL,BW],0),([BW,PN],1),([BW,AR,KP],0),([KP,LK],1),([LK,KP],1),([KP,PB,HY,ST,KS],0),([KS,ST,KH,DS],0),([DS,SM],1),([SM,TO],1),([TO,CP],1),([CP,HH,BK],0)]
mapdata=json.dumps({'pts':pts,'segs':[{'c':c,'d':d} for c,d in segs]},ensure_ascii=False)
mapblock='''<div class="gen">
<strong>Reiseroute auf der Karte</strong>
<div id="rmap" class="map"></div>
<div class="lg"><span><i class="ls"></i> Bus, Zug, Minivan</span><span><i class="ld"></i> Fähre, Boot</span><span>Flüge nur Zürich–Singapur und Bangkok–Zürich</span></div>
<noscript>Die Karte benötigt JavaScript.</noscript>
</div>'''
mapjs='''(function(){
var D=%s;
var el=document.getElementById('rmap');
if(typeof L==='undefined'){el.innerHTML='<p style="padding:10px">Karte konnte nicht geladen werden (Internetverbindung nötig).</p>';return;}
var m=L.map('rmap',{scrollWheelZoom:false});
var prov=[['https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}','Tiles &copy; Esri, HERE, Garmin, OpenStreetMap-Mitwirkende'],['https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}','Tiles &copy; Esri'],['https://tile.openstreetmap.org/{z}/{x}/{y}.png','&copy; OpenStreetMap-Mitwirkende']];
var pi=0,tl=null,errs=0,ok=0;
function useProv(){ if(tl) m.removeLayer(tl); errs=0; ok=0;
 tl=L.tileLayer(prov[pi][0],{maxZoom:18,subdomains:'abcd',attribution:prov[pi][1]});
 tl.on('tileload',function(){ok++;});
 tl.on('tileerror',function(){errs++; if(errs>=4&&ok===0&&pi<prov.length-1){pi++;useProv();}});
 tl.addTo(m);}
useProv();
var b=[];
D.segs.forEach(function(s){L.polyline(s.c,{color:'#2b6cb0',weight:3,opacity:.85,dashArray:s.d?'6 8':null}).addTo(m);});
D.pts.forEach(function(p){
 var bg=p[4]==='H'?'#718096':'#1a365d';
 var ic=L.divIcon({className:'',html:'<div style="background:'+bg+';color:#fff;border:2px solid #fff;border-radius:50%%;width:26px;height:26px;line-height:22px;text-align:center;font:bold 12px system-ui;box-shadow:0 1px 3px rgba(0,0,0,.4)">'+p[4]+'</div>',iconSize:[26,26],iconAnchor:[13,13]});
 L.marker([p[0],p[1]],{icon:ic}).addTo(m).bindPopup('<b>'+p[2]+'</b><br>'+p[3]);
 b.push([p[0],p[1]]);
});
m.fitBounds(b,{padding:[25,25]});
})();'''%mapdata
h=['<!DOCTYPE html>\n<html lang="de">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>Familienreise: Singapur bis Bangkok</title>\n<style>',css,'</style>\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css">\n</head>\n<body>\n<h1>Familienreise: Singapur bis Bangkok</h1>\n']
h.append('<div class="gen">\n<strong>Reiseplan: 5 Wochen ab 18. Juni 2027</strong> (Abflug Zürich Fr 18. Juni, Ankunft Singapur Sa 19. Juni, Rückflug Fr 23. Juli ab Bangkok nach Zürich)\n<table class="pl">\n<tr><th>Datum</th><th>Ort</th><th>Nächte</th><th>Anreise / Hinweis</th></tr>\n<tr><td>18.–19. Juni</td><td>Flug</td><td>–</td><td>Ankunft Singapur</td></tr>\n')
for a,b,c,d in plan:
    cls=' class="tr"' if b.startswith('Zwischen') else ''
    h.append('<tr%s><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>\n'%(cls,a,b,c,d))
h.append('</table>\n<ul>\n<li><strong>Gesamt:</strong> 34 Nächte, 11 Stationen und 1 Zwischenübernachtung, keine Inlandflüge. Nur Hin- und Rückflug (Zürich–Singapur, Bangkok–Zürich). Alle Strecken per Bus, Zug und Fähre; die längsten Reisetage (Langkawi–Hat Yai, Hat Yai–Khao Sok, Koh Tao–Hua Hin) dauern ca. 6–7 Stunden. Inselhopping in Thailand beschränkt sich auf Koh Samui und Koh Tao; in Malaysia kommt Langkawi dazu.</li>\n<li><strong>Tipp:</strong> ETS-Zug, Fähren (Penang–Langkawi–Kuala Perlis), Cheow-Lan-See-Tour, Katamarane (Samui–Tao–Chumphon) vorab online reservieren und Fahrpläne prüfen. Die Fahrten Langkawi–Hat Yai und Koh Tao–Hua Hin früh am Morgen starten.</li>\n<li><strong>Optionale Erweiterungen:</strong> Ipoh (Höhlentempel, zwischen Kuala Lumpur und Penang), Koh Phangan (zwischen Samui und Tao), Kanchanaburi (Brücke am Kwai, Erawan-Wasserfälle, ab Bangkok).</li>\n</ul>\n</div>\n\n')
h.append(mapblock+'\n\n')
h.append(variety+'\n\n')
h.append(budget+'\n\n')
h.append(gen_blk+'\n\n')
for s in S:
    h.append('<div class="st">\n<div class="ti">%s <span class="dt">· %s</span></div>\n<div class="de">%s</div>\n<div class="gd">\n'%(s['t'],s['d'],s['de']))
    for q,c in s['im']:
        h.append('<div class="bx"><img data-q="%s"><div class="cp">%s</div></div>\n'%(html.escape(q,quote=True),c))
    h.append('</div>\n<ul class="in">\n')
    for l in s['li']: h.append('<li>%s</li>\n'%l)
    h.append('</ul>\n<div class="mo"><b>Weitere Sehenswürdigkeiten:</b> %s</div>\n<div class="rt"><strong>ÖV-Route:</strong> %s</div>\n%s</div>\n\n'%(s['mo'],s['rt'],('<div class="wa">%s</div>\n'%s['wa']) if s.get('wa') else ''))
h.append('<footer>★ = Top-Empfehlungen. Bilder werden beim Öffnen automatisch von Wikimedia Commons geladen (Internetverbindung nötig). Urheber und Lizenzen siehe jeweilige Dateiseite. Alle Angaben (Fahrpläne, Preise, Einreiseregeln, Altersgrenzen) vor der Reise prüfen.</footer>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"></script>\n<script>\n'+mapjs+'\n</script>\n<script>\n'+js+'\n</script>\n</body>\n</html>\n')
open('build/alt-layout.html','w',encoding='utf-8').write(''.join(h))
