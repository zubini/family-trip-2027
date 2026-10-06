import copy, re
import gen2, imgs

def _d(src):
    return copy.deepcopy(src)

SG = _d(gen2.S[0]); TIO = _d(gen2.tioman); KL = _d(gen2.by['Kuala Lumpur']); MEL = _d(gen2.melaka)
MEL['li'] = [l.replace('Abendprogramm (Dienstag)', 'Abendprogramm (Montag)') for l in MEL['li']]
MEL['rt'] = "Expressbus von Kuala Lumpur (Terminal Bersepadu Selatan) nach Melaka Sentral (ca. 2 Std., alle 30 Minuten)."
KL['rt'] = ("Fähre von Tioman nach Mersing (ca. 1,5–2 Std.), dann Fernbus nach Kuala Lumpur (ca. 5–6 Std.). "
            "Die Direktverbindung Mersing–Kuala Lumpur vorab prüfen; Fähre am Morgen nehmen, damit ihr abends ankommt.")
for x in (SG, TIO, KL, MEL):
    x['li'] = [l for l in x['li']]

BUK = dict(
 de="Kühle Bergstadt im Minangkabau-Hochland mit Uhrturm, Schluchten und Vulkanen. Die Padang-Küche mit Rendang gehört zu den bekanntesten Indonesiens, und die Landschaft aus Reisfeldern und Bergseen ist ein Kontrast zu Singapur und Malaysia.",
 li=["<strong>Für Teens:</strong> Wanderung am Ngarai Sianok (Schlucht), Wasserfälle und Felswände im Harau-Tal, Bootsfahrt auf dem Maninjau-See, Fahrt mit dem Pferdewagen (Bendi) durch die Altstadt.",
     "<strong>Dauer:</strong> 4 Nächte: ein Tag Harau-Tal, ein Tag Maninjau-See, ein Tag Stadt und Pagaruyung-Palast, dazu ein ruhiger Tag.",
     "<strong>Hinweis:</strong> Der Vulkan Marapi ist aktiv. Besteigungen nur bei freigegebener Lage, aktuelle Warnungen prüfen (MAGMA Indonesia).",
     "<strong>Wetter:</strong> Juni und Juli sind in Westsumatra vergleichsweise trocken, nachmittägliche Schauer sind aber üblich."],
 mo="Jam Gadang (Uhrturm), Lobang Jepang (japanische Tunnel), Pagaruyung-Palast in Batusangkar, Pasar Atas (Markt), Panorama Park.",
 rt="Fähre Melaka–Dumai (laut Anbietern ca. 2–3 Std., nicht täglich; Fahrplan für Juni 2027 vorab prüfen), Minivan nach Pekanbaru (ca. 3 Std.), Übernachtung, am nächsten Tag Minivan nach Bukittinggi (ca. 6–7 Std.). Falls die Fähre nicht fährt: Flug Kuala Lumpur–Padang und Fahrt nach Bukittinggi (ca. 2,5 Std.).",
 im=[("Jam Gadang","Jam Gadang Bukittinggi","jam gadang"),
     ("Ngarai Sianok","Ngarai Sianok canyon|Sianok Canyon Bukittinggi","sianok"),
     ("Harau-Tal","Harau Valley waterfall|Lembah Harau","harau"),
     ("Maninjau-See","Lake Maninjau|Danau Maninjau","maninjau"),
     ("Pagaruyung-Palast","Pagaruyung Palace|Istano Basa Pagaruyung","pagaruyung"),
     ("Minangkabau-Haus","Rumah Gadang Minangkabau|Minangkabau house","gadang|minangkabau")])

JAK = dict(
 de="Indonesiens Hauptstadt als Ankunftsort auf Java: Kolonialviertel, Moscheen, Museen und ein grosser Freizeitpark. Zwei Nächte reichen für den Einstieg.",
 li=["<strong>Für Teens:</strong> Dunia Fantasi (Achterbahnen) im Freizeitpark Ancol, Wasserspass im Strandpark Ancol, Aussicht vom Nationalmonument Monas.",
     "<strong>Dauer:</strong> 2 Nächte. Fortbewegung mit Grab oder Gojek, MRT und TransJakarta; Staus einplanen.",
     "<strong>Hinweis:</strong> Der Flug Kuala Lumpur–Jakarta ist der einzige Flug zwischen Hin- und Rückflug; alle anderen Strecken gehen per Bus, Zug und Fähre."],
 mo="Kota Tua (Altstadt) mit Fatahillah-Platz, Istiqlal-Moschee und Kathedrale, Sunda-Kelapa-Hafen, Kepulauan Seribu (Inselgruppe, Tagesausflug).",
 rt="Flug Kuala Lumpur–Jakarta (ca. 2–2,5 Std.), Transfer vom Flughafen Soekarno-Hatta in die Stadt (ca. 1 Std.).",
 im=[("Kota Tua","Kota Tua Jakarta Fatahillah Square","fatahillah|kota tua"),
     ("Monas","Monas National Monument Jakarta|Monas","monas|national monument"),
     ("Istiqlal-Moschee","Istiqlal Mosque Jakarta","istiqlal"),
     ("Sunda Kelapa","Sunda Kelapa harbour Jakarta|Sunda Kelapa","sunda kelapa"),
     ("Skyline","Jakarta skyline|Jakarta Sudirman skyline","jakarta"),
     ("Kathedrale","Jakarta Cathedral|Gereja Katedral Jakarta","cathedral|katedral")])

YOG = dict(
 de="Kulturelles Herz Javas mit Sultanspalast, Batik-Handwerk und zwei Welterbestätten: Borobudur und Prambanan.",
 li=["<strong>Für Teens:</strong> Aufstieg in Borobudur (Eintritt und Besucherzahl vorab online prüfen), Prambanan, Jeeptour am Merapi-Vulkan, Höhlen-Tubing in der Pindul-Höhle.",
     "<strong>Dauer:</strong> 5 Nächte: ein Tag Borobudur und Prambanan, ein Tag Stadt (Kraton, Taman Sari), ein Tag Merapi oder Pindul-Höhle, dazu Ruhetage. Borobudur früh am Morgen, mittags Pausen wegen der Hitze.",
     "<strong>Dresscode:</strong> Schultern und Knie bedecken, in Tempeln teils Sarong.",
     "<strong>Essen:</strong> Gudeg (Jackfruit-Eintopf), Angkringan-Strassenstände, Bakpia."],
 mo="Kraton (Sultanspalast), Taman Sari (Wasserschloss), Malioboro-Strasse, Parangtritis-Strand, Ullen-Sentalu-Museum.",
 rt="Zug ab Jakarta Gambir nach Yogyakarta (Tugu), Eksekutif-Klasse (ca. 7–8 Std.). Tickets über KAI Access oder tiket.com.",
 im=[("Borobudur","Borobudur temple sunrise|Borobudur","borobudur"),
     ("Prambanan","Prambanan temple","prambanan"),
     ("Taman Sari","Taman Sari Yogyakarta water castle|Taman Sari","taman sari"),
     ("Kraton","Kraton Yogyakarta|Yogyakarta Sultan Palace","kraton"),
     ("Malioboro","Malioboro Street Yogyakarta|Malioboro","malioboro"),
     ("Merapi","Mount Merapi|Gunung Merapi","merapi")])

BRO = dict(
 de="Vulkanlandschaft des Tengger-Massivs mit dem berühmten Sonnenaufgang über dem Bromo. Malang dient als angenehme Basis in den Bergen.",
 li=["<strong>Für Teens:</strong> Jeeptour zum Sonnenaufgang am Penanjakan, Sandmeer und Bromo-Krater, Madakaripura-Wasserfall, Tumpak Sewu (Tagesausflug).",
     "<strong>Dauer:</strong> 3 Nächte. Die Jeeptour startet um ca. 2–3 Uhr morgens.",
     "<strong>Kälte:</strong> Morgens nahe 0–5 °C: Jacke, Mütze und Handschuhe mitbringen.",
     "<strong>Hinweis:</strong> Der Zugang zum Krater kann bei Aktivität gesperrt sein; Lage vorab prüfen."],
 mo="Savannah (Teletubbies Hill), Kampung Warna-Warni in Malang, Coban-Rondo-Wasserfall, Jodipan-Dorf.",
 rt="Zug Yogyakarta–Malang (ca. 7–8 Std., Fahrplan prüfen). Von Malang per Jeep oder Auto nach Bromo.",
 im=[("Bromo-Sonnenaufgang","Mount Bromo sunrise Penanjakan|Mount Bromo","bromo"),
     ("Sandmeer","Bromo Tengger Semeru sea of sand|Tengger caldera","bromo|tengger"),
     ("Tumpak Sewu","Tumpak Sewu waterfall","tumpak sewu"),
     ("Madakaripura","Madakaripura waterfall","madakaripura"),
     ("Savanne","Bromo savanna Teletubbies hill|Bromo savannah","bromo|savanna"),
     ("Kampung Warna-Warni","Kampung Warna Warni Malang|Jodipan Malang","malang|jodipan")])

IJE = dict(
 de="Östlicher Zipfel Javas: Der Ijen-Krater mit türkisfarbenem Säuresee und dem «Blue Fire» ist eines der spektakulärsten Naturerlebnisse der Reise.",
 li=["<strong>Für Teens:</strong> Nächtlicher Aufstieg zum Ijen-Krater (ca. 1,5–2 Std., Start ca. 1–2 Uhr) zum «Blue Fire», Sonnenaufgang über dem Kratersee. Für den Sohn (12) anspruchsvoll, aber machbar; mit Guide.",
     "<strong>Dauer:</strong> 2 Nächte. Am Tag nach dem Aufstieg Ruhetag.",
     "<strong>Sicherheit:</strong> Gasmaske tragen (am Parkeingang leihbar), Kraterrand nicht ohne Guide betreten; Zugang bei erhöhter Aktivität gesperrt.",
     "<strong>Respekt:</strong> Die Schwefelarbeiter nicht als Fotomotiv ausbeuten."],
 mo="Baluran-Nationalpark (Savanne), Pulau Merah (Strand), Alas-Purwo-Nationalpark.",
 rt="Privatfahrer oder Zug von Malang/Bromo nach Banyuwangi (ca. 6–9 Std., Verbindung prüfen).",
 im=[("Ijen-Kratersee","Ijen crater lake|Kawah Ijen","ijen"),
     ("Blue Fire","Ijen blue fire|Kawah Ijen blue fire","ijen"),
     ("Schwefelarbeiter","Ijen sulfur miner|Ijen sulphur miners","ijen"),
     ("Baluran","Baluran National Park savanna|Baluran","baluran"),
     ("Pulau Merah","Pulau Merah beach Banyuwangi|Red Island beach","merah|red island"),
     ("Ketapang","Ketapang harbour Banyuwangi|Banyuwangi","banyuwangi|ketapang")])

UBU = dict(
 de="Kultureller Mittelpunkt Balis mit Reisterrassen, Tempeln, Tanzaufführungen und Kunsthandwerk. Gute Basis für Ausflüge ins Hochland.",
 li=["<strong>Für Teens:</strong> Tegalalang-Reisterrassen früh am Morgen, Heiliger Affenwald, Wasserfälle (Tegenungan, Tibumana), optional Sonnenaufgangs-Trek auf den Mount Batur.",
     "<strong>Dauer:</strong> 4 Nächte. Juli ist Hochsaison: Unterkünfte und Touren früh buchen.",
     "<strong>Hinweis:</strong> Tollwut kommt vor; Affen und Hunde nicht füttern oder anfassen, bei Biss sofort ärztlich behandeln lassen. Touristenabgabe für Bali beachten."],
 mo="Tirta Empul (Reinigungsritual, Sarong Pflicht), Goa Gajah, Campuhan Ridge Walk, Kecak-Tanz, Ubud-Palast und Markt.",
 rt="Fähre Ketapang–Gilimanuk (ca. 1 Std.), dann Privatfahrer nach Ubud (ca. 4–5 Std.).",
 im=[("Tegalalang","Tegalalang rice terrace","tegalalang"),
     ("Affenwald","Sacred Monkey Forest Sanctuary Ubud|Monkey Forest Ubud","monkey forest"),
     ("Tirta Empul","Tirta Empul temple","tirta empul"),
     ("Tegenungan","Tegenungan waterfall","tegenungan"),
     ("Campuhan","Campuhan Ridge Walk Ubud|Campuhan ridge","campuhan"),
     ("Ubud-Palast","Puri Saren Agung Ubud|Ubud Palace","puri saren|ubud palace")])

PEN = dict(
 de="Wilde Klippeninsel vor Bali mit spektakulären Aussichtspunkten, Buchten und Schnorchelplätzen mit Mantarochen.",
 li=["<strong>Für Teens:</strong> Schnorcheln mit Mantarochen am Manta Point (mit Guide), Kelingking Beach (steiler Abstieg), Angel's Billabong, Broken Beach.",
     "<strong>Dauer:</strong> 3 Nächte. Strassen sind steil und schlecht: lieber Fahrer als Roller.",
     "<strong>Boot:</strong> Wellengang kann im Juli stark sein; Seekrankheitstabletten bereithalten, Fahrplan flexibel halten."],
 mo="Diamond Beach, Atuh Beach, Seganing-Wasserfall, Nusa Lembongan (Mangroven, Ausflug).",
 rt="Privatfahrer von Ubud nach Sanur (ca. 1 Std.), Speedboot nach Nusa Penida (ca. 30–45 Min.).",
 im=[("Kelingking Beach","Kelingking Beach Nusa Penida","kelingking"),
     ("Broken Beach","Broken Beach Nusa Penida","broken beach"),
     ("Angel's Billabong","Angel's Billabong Nusa Penida","billabong"),
     ("Crystal Bay","Crystal Bay Nusa Penida","crystal bay"),
     ("Diamond Beach","Diamond Beach Nusa Penida","diamond beach"),
     ("Manta Point","manta ray Nusa Penida|Manta Point","manta")])

ULU = dict(
 de="Abschluss an den Klippen der Bukit-Halbinsel mit Surfstränden, Sonnenuntergängen und dem berühmten Uluwatu-Tempel.",
 li=["<strong>Für Teens:</strong> Kecak-Tanz bei Sonnenuntergang am Uluwatu-Tempel (Affen stehlen Brillen und Handys), Surf-Schnupperstunde für Anfänger, Strände Padang Padang und Bingin.",
     "<strong>Dauer:</strong> 4 Nächte. Der Flughafen Denpasar ist ca. 45–60 Min. entfernt; am Abreisetag Puffer für den Verkehr einplanen.",
     "<strong>Essen:</strong> Gegrillter Fisch am Strand von Jimbaran."],
 mo="Tanah Lot (Tempel im Meer), Melasti-Strand, Suluban-Strand, Garuda-Wisnu-Kencana-Statue.",
 rt="Speedboot von Nusa Penida nach Sanur, Transfer nach Uluwatu (ca. 1,5 Std.). Rückflug ab Denpasar.",
 im=[("Uluwatu-Tempel","Pura Luhur Uluwatu cliff|Uluwatu temple","uluwatu"),
     ("Padang Padang","Padang Padang beach Uluwatu|Padang Padang beach","padang padang"),
     ("Tanah Lot","Tanah Lot temple","tanah lot"),
     ("Jimbaran","Jimbaran beach","jimbaran"),
     ("Suluban","Suluban beach Uluwatu|Blue Point beach Uluwatu","suluban|blue point"),
     ("Melasti","Melasti beach Bali","melasti")])

# (Titel, Datum, Land-Kürzel, Daten, Bilder)
ST = [
 ("1. Singapur (Start)", "19.–22. Juni · 3 Nächte", 'sg', SG, imgs._D['sg']),
 ("2. Pulau Tioman (Pahang)", "22.–26. Juni · 4 Nächte", 'my', TIO, imgs._D['tioman']),
 ("3. Kuala Lumpur", "26.–29. Juni · 3 Nächte", 'my', KL, imgs._D['kl']),
 ("4. Jakarta", "29. Juni–1. Juli · 2 Nächte", 'id', JAK, JAK['im']),
 ("5. Yogyakarta", "1.–6. Juli · 5 Nächte", 'id', YOG, YOG['im']),
 ("6. Bromo und Malang", "6.–9. Juli · 3 Nächte", 'id', BRO, BRO['im']),
 ("7. Ijen und Banyuwangi", "9.–11. Juli · 2 Nächte", 'id', IJE, IJE['im']),
 ("8. Ubud (Bali)", "11.–15. Juli · 4 Nächte", 'id', UBU, UBU['im']),
 ("9. Nusa Penida", "15.–18. Juli · 3 Nächte", 'id', PEN, PEN['im']),
 ("10. Uluwatu (Südbali, Finale)", "18.–22. Juli · 4 Nächte, Rückflug 22. Juli", 'id', ULU, ULU['im']),
]
PRE = {}

PLAN = [
 ("19.–22. Juni", "1. Singapur", "3", "Flug ab Zürich (Fr, 22 Uhr), Ankunft am Nachmittag oder Abend"),
 ("22.–26. Juni", "2. Pulau Tioman (Pahang)", "4", "Bus nach Mersing (ca. 3,5–4 Std.), Fähre (ca. 1,5–2 Std.)"),
 ("26.–29. Juni", "3. Kuala Lumpur", "3", "Fähre nach Mersing, Bus (ca. 5–6 Std.)"),
 ("29. Juni–1. Juli", "4. Jakarta", "2", "Flug ab Kuala Lumpur (ca. 2–2,5 Std.)"),
 ("1.–6. Juli", "5. Yogyakarta", "5", "Zug ab Jakarta (ca. 7–8 Std.)"),
 ("6.–9. Juli", "6. Bromo und Malang", "3", "Zug nach Malang (ca. 7–8 Std.)"),
 ("9.–11. Juli", "7. Ijen und Banyuwangi", "2", "Privatfahrer (ca. 6–9 Std.)"),
 ("11.–15. Juli", "8. Ubud (Bali)", "4", "Fähre Ketapang–Gilimanuk, Privatfahrer (ca. 5–6 Std. insgesamt)"),
 ("15.–18. Juli", "9. Nusa Penida", "3", "Privatfahrer nach Sanur, Speedboot (ca. 1,5–2 Std. insgesamt)"),
 ("18.–22. Juli", "10. Uluwatu (Südbali)", "4", "Speedboot und Transfer (ca. 2–2,5 Std.); Rückflug 22. Juli ab Denpasar"),
]

MIX = [
 ("Action und Freizeitparks", "Singapur (Sentosa, Universal, Wasserpark), Kuala Lumpur (Sunway Lagoon), Jakarta (Dunia Fantasi), Uluwatu (Surf-Schnupperstunde)."),
 ("Kultur und Geschichte", "Yogyakarta (Borobudur, Prambanan, Kraton), Ubud (Tempel, Kecak-Tanz), Jakarta (Kota Tua) und die Wassertempel auf Bali."),
 ("Natur und Tiere", "Dschungel und Riffe auf Tioman, Bromo und Ijen (Vulkane), Wasserfälle auf Java und Bali, Mantarochen bei Nusa Penida."),
 ("Strand und Erholung", "Tioman, Nusa Penida und Uluwatu. Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen."),
 ("Mitmachen", "Jeeptour auf den Bromo, nächtlicher Ijen-Aufstieg, Höhlen-Tubing, Surf-Schnupperstunde, Street-Food-Touren."),
]

NOTES = [
 ("Gesamt", "33 Nächte, 10 Stationen. Hinflug nach Singapur, Rückflug ab Bali. Ein einziger Flug dazwischen (Kuala Lumpur–Jakarta); alle anderen Strecken per Bus, Zug und Fähre. Die längsten Reisetage: Jakarta–Yogyakarta, Yogyakarta–Malang (je ca. 7–8 Std.), Bromo–Banyuwangi (ca. 6–9 Std.) und Banyuwangi–Ubud (ca. 5–6 Std.)."),
 ("Vorab buchen", "Zugtickets in Java (KAI Access, früh buchen), Speedboote für Nusa Penida, Unterkünfte auf Bali in der Hochsaison, Bus und Fähre nach Tioman."),
 ("Optional", "Sumatra (Bukittinggi, Lake Toba, Bukit Lawang mit Orang-Utans; nur mit zusätzlichem Flug sinnvoll), Bandung (Teeplantagen, Hochgeschwindigkeitszug ab Jakarta), Lombok (Gili-Inseln per Speedboot ab Bali)."),
]

TIPS = [
 ("Einreise Indonesien", "Für Schweizer Reisende gilt eine Visa-on-Arrival bzw. e-VOA für 30 Tage; ihr seid ca. 23 Tage in Indonesien, eine Verlängerung ist nicht nötig. Zusätzlich online: Einreiseformular für Indonesien und die Touristenabgabe für Bali. Reisepass mind. 6 Monate gültig. Alle Angaben vor Abreise bei den offiziellen Portalen prüfen."),
 ("Einreise Singapur und Malaysia", "Beide Länder sind für Touristen visafrei. Online-Anmeldungen: SG Arrival Card (Singapur) und MDAC (Malaysia)."),
 ("Währung und Zahlung", "Singapur-Dollar, Malaysischer Ringgit und Indonesische Rupiah. In Indonesien Bargeld für ländliche Gegenden mitnehmen; Geldautomaten haben Limits pro Abhebung. QRIS (QR-Zahlung) ist in Städten verbreitet."),
 ("Wetter im Juni und Juli", "Trockenzeit auf Java und Bali (beste Reisezeit, Bali Hochsaison). Bromo und Ijen sind nachts sehr kalt. Die Ostküste Malaysias (Tioman) ist im Juni und Juli meist ruhig."),
 ("Zeitzonen", "Singapur, Malaysia und Bali UTC+8, Java UTC+7. Zur Schweiz sind es im Sommer 5 bis 6 Stunden."),
 ("Transport-Apps", "Grab und Gojek (Taxi, Roller), KAI Access (Zug), tiket.com und Traveloka (Flug, Zug), Google Maps offline. Auf Bali: Speedboote für Nusa Penida vorab online buchen."),
 ("Gesundheit", "Impfstatus aller vier Reisenden beim Hausarzt oder Tropeninstitut mind. 6–8 Wochen vorher klären (Hepatitis A, Tetanus, Typhus; Tollwut-Risiko auf Bali beachten). Dengue-Mückenschutz. Leitungswasser nicht trinken. Alkohol nur in seriösen Lokalen (Methanol-Risiko bei selbst gemischten Getränken)."),
 ("Vulkane und Naturgefahren", "Bromo, Ijen, Merapi und Agung können Zugangsbeschränkungen haben. Offizielle Lagemeldungen (MAGMA Indonesia) beachten. Erdbeben kommen vor."),
 ("Versicherung", "Reisekranken- und Rücktransportversicherung für alle vier, inkl. Wandern und Schnorcheln. Roller mit den Teenagern meiden; Helm tragen."),
 ("Kultur und Verhalten", "Java ist mehrheitlich muslimisch, Bali hinduistisch. Dezente Kleidung bei Tempeln und Moscheen, Schuhe ausziehen, rechte Hand zum Geben und Essen nutzen, Kopf nicht berühren."),
 ("Gesetze", "Sehr harte Strafen für Drogenbesitz. Drohnen nur mit Bewilligung."),
 ("Notfall", "Indonesien 112, Malaysia 999, Singapur 999 (Polizei) und 995 (Ambulanz). Schweizer Vertretungen (Botschaft Jakarta, Konsulat Bali) notieren; EDA-Reiseplattform nutzen."),
 ("Beteiligung der Kids", "Pro Station wählen Sohn (12) und Tochter (14) je einen Wunsch-Programmpunkt."),
]

BUDGET = dict(
 days=33, total="20’400", span="15’800–25’400", perday="ca. 620 CHF pro Tag, ca. 5’100 pro Person",
 rows=[
  ("Flüge Zürich–Singapur und Bali–Zürich", "4’400–5’600", "5’000", "ca. 1’100–1’400 pro Person (Juli ist Hochsaison; beide Teenager zahlen Vollpreis)"),
  ("Fernverkehr (Bus, Zug, Fähre, ein Flug)", "1’080–2’140", "1’500", "Bus und Fähren Tioman, Bus nach Kuala Lumpur, Flug Kuala Lumpur–Jakarta, Züge Java, Privatfahrer und Fähren Ost-Java–Bali, Speedboote"),
  ("Lokale Transfers", "450–900", "600", "Grab, Gojek, MRT, Wassertaxis"),
  ("Unterkunft (Familienzimmer oder 2 Zimmer, 3 Sterne)", "3’030–5’040", "4’000", "ca. 50–180 CHF pro Nacht, Singapur ca. 220–300"),
  ("Verpflegung (Hawker, Restaurants, Getränke)", "2’460–3’970", "3’200", "ca. 50–180 CHF pro Tag für 4 Personen, Singapur am teuersten"),
  ("Aktivitäten und Eintritte", "2’350–4’200", "3’300", "Universal, Borobudur, Jeeptour Bromo, Ijen-Guide, Bootstouren, Schnorcheln usw."),
  ("Versicherung, eSIM, Medikamente, Impfungen", "600–1’200", "900", "Reisekranken- und Annullationsschutz, Reiseapotheke"),
  ("Reserve (ca. 10 %)", "1’450–2’300", "1’850", "Souvenirs, Wäsche, Unvorhergesehenes"),
 ],
 stations=[("1. Singapur (3)", "1’520–2’240"), ("2. Pulau Tioman (4)", "850–1’450"), ("3. Kuala Lumpur (3)", "630–1’050"), ("4. Jakarta (2)", "420–790"),
  ("5. Yogyakarta (5)", "950–1’600"), ("6. Bromo und Malang (3)", "610–1’080"), ("7. Ijen und Banyuwangi (2)", "350–660"),
  ("8. Ubud (4)", "880–1’510"), ("9. Nusa Penida (3)", "720–1’250"), ("10. Uluwatu (4)", "910–1’580")],
 notes=["Preise für die Kids: Der Sohn (12) zahlt bei Eintritten oft noch den Kinderpreis, die Tochter (14) meist den Vollpreis.",
        "Sparhebel: lokale Restaurants statt Hotelessen, Familienzimmer statt zwei Zimmer, Flüge früh buchen.",
        "Alle Beträge sind Richtwerte in CHF (Schätzungen, nicht verbindlich). Flug- und Hotelpreise im Juli schwanken stark; aktuelle Preise vor der Buchung vergleichen."],
)

# Karte
MAP = dict(
 kind='sea',
 lon0=99.6, lon1=116.4, lat0=-9.7, lat1=3.9, S=58,
 countries={'SGP': 'lr', 'MYS': 'lr', 'IDN': 'lr', 'THA': 'lo', 'BRN': 'lo'},
)
