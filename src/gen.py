import os
os.makedirs('build', exist_ok=True)
import html
css='''body{font-family:system-ui,sans-serif;line-height:1.5;color:#333;max-width:860px;margin:0 auto;padding:10px;background:#f8f9fa}
h1{color:#1a365d;border-bottom:2px solid #2b6cb0;font-size:1.5em}
.st{background:#fff;padding:12px;margin-bottom:14px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.07)}
.ti{color:#2b6cb0;font-size:1.15em;margin:0 0 6px;border-bottom:1px solid #e2e8f0;font-weight:bold}
.dt{color:#718096;font-size:.75em;font-weight:normal}
.de{font-size:.92em;margin-bottom:8px}
.gd{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:8px}
.bx{border-radius:4px;overflow:hidden;background:#e2e8f0;text-align:center}
.bx img{width:100%;height:130px;object-fit:cover;display:block}
.cp{background:#1a365d;color:#fff;padding:2px;font-size:.72em;font-weight:bold}
ul.in{font-size:.85em;margin:6px 0;padding-left:18px}
ul.in li{margin-bottom:3px}
.mo{font-size:.85em;margin:6px 0;padding:6px 8px;background:#f0fff4;border-left:4px solid #38a169;border-radius:4px}
.mo b{color:#276749}
.rt{background:#ebf8ff;border-left:4px solid #3182ce;padding:6px 8px;border-radius:4px;font-size:.83em;color:#2b6cb0}
.wa{background:#fffaf0;border-left:4px solid #dd6b20;padding:6px 8px;border-radius:4px;font-size:.83em;color:#7b341e;margin-top:6px}
.gen{background:#fff;padding:12px;border-radius:6px;margin-bottom:14px;font-size:.88em;box-shadow:0 1px 3px rgba(0,0,0,.07)}
.gen ul{margin:4px 0;padding-left:18px}
table.pl{width:100%;border-collapse:collapse;font-size:.82em}
table.pl th{background:#1a365d;color:#fff;text-align:left;padding:4px 6px}
table.pl td{padding:4px 6px;border-bottom:1px solid #e2e8f0;vertical-align:top}
table.pl tr.tr td{background:#f7fafc;color:#718096;font-style:italic}
footer{font-size:.72em;color:#718096;margin:16px 0}
@media(max-width:560px){.bx img{height:90px}}'''
js='''const used=new Set();
const BAD=/map|locator|flag|logo|diagram|plan\\b|icon|coat of arms|chart|poster|stamp|sign\\b/i;
async function find(q){
  const u='https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=20&gsrsearch='+encodeURIComponent(q+' filetype:bitmap')+'&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=640';
  const r=await fetch(u); if(!r.ok) return null;
  const d=await r.json(); if(!d.query) return null;
  const pages=Object.values(d.query.pages).sort((a,b)=>a.index-b.index);
  for(const p of pages){
    const ii=p.imageinfo&&p.imageinfo[0]; if(!ii) continue;
    if(ii.mime!=='image/jpeg') continue;
    if(BAD.test(p.title)) continue;
    if(ii.width<800||ii.width<ii.height) continue;
    if(used.has(ii.url)) continue;
    used.add(ii.url);
    return {src:ii.thumburl||ii.url,alt:p.title.replace(/^File:/,'')};
  }
  return null;
}
(async()=>{
  for(const img of document.querySelectorAll('img[data-q]')){
    let hit=null;
    for(const q of img.dataset.q.split('|')){
      try{hit=await find(q);}catch(e){}
      if(hit)break;
    }
    if(hit){img.src=hit.src;img.alt=hit.alt;img.onerror=()=>{img.parentElement.style.display='none';};}
    else img.parentElement.style.display='none';
  }
})();'''

plan=[
("19.–21. Juni","1. Singapur","2","Ankunft per Flug am 19. Juni",0),
("21.–23. Juni","2. Bukit Lawang (Sumatra)","2","Flug nach Medan, Transfer (ca. 3–4 Std.)",0),
("23.–26. Juni","3. Lake Toba","3","Bus/Transfer (ca. 7–8 Std.), Fähre nach Samosir",0),
("26.–29. Juni","4. Bukittinggi","3","Lange Überlandfahrt am 26. Juni (ca. 14–18 Std.) oder Flug",0),
("29. Juni–1. Juli","5. Jakarta (Java)","2","Bus nach Padang, Flug nach Jakarta",0),
("1.–5. Juli","6. Yogyakarta","4","Zug ab Gambir (ca. 7–8 Std.)",0),
("5.–8. Juli","7. Bromo / Malang","3","Zug (ca. 7–8 Std.)",0),
("8.–10. Juli","8. Ijen / Banyuwangi","2","Zug oder Privatfahrer (ca. 6–9 Std.)",0),
("10.–14. Juli","9. Ubud (Bali)","4","Fähre Ketapang–Gilimanuk, Bus/Shuttle (ca. 4–5 Std.)",0),
("14.–17. Juli","10. Amed","3","Shuttle (ca. 2,5–3 Std.)",0),
("17.–19. Juli","11. Nusa Penida","2","Shuttle nach Padang Bai/Sanur, Speedboot",0),
("19.–23. Juli","12. Uluwatu / Südbali","4","Speedboot und Transfer; Rückflug 23. Juli ab Denpasar",0),
]
S=[
dict(t="1. Singapur (Start)",d="19.–21. Juni · 2 Nächte",
de="Futuristische Metropole als Einstieg: Supertrees, Marina Bay Sands und das Jewel am Flughafen. Sauber, sicher und gut organisiert, aber deutlich teurer als Indonesien.",
im=[("Supertree Grove Gardens by the Bay","Supertrees"),("Marina Bay Sands skyline|Marina Bay Sands","Marina Bay Sands"),("Jewel Changi Rain Vortex|Jewel Changi Airport","Jewel Changi")],
li=["<strong>Dauer:</strong> 2 Nächte. Supertrees-Lichtshow täglich um 19:45 und 20:45 Uhr (kostenlos).","<strong>Essen:</strong> Hawker Centres (Maxwell, Lau Pa Sat, Newton) mit Hainan-Chicken-Reis oder Laksa.","<strong>Praktisch:</strong> MRT direkt ab Flughafen. Vapes und Kaugummi-Import sind verboten, Bussgelder hoch."],
mo="Cloud Forest &amp; Flower Dome (★), Chinatown mit Buddha Tooth Relic Temple, Little India, Kampong Glam (Sultan-Moschee), Botanic Gardens (UNESCO, gratis).",
rt="Ankunft per Flug (Changi Airport), MRT in die Stadt (ca. 30–40 Min.)."),
dict(t="2. Bukit Lawang (Sumatra)",d="21.–23. Juni · 2 Nächte",
de="Dschungeldorf am Rand des Gunung-Leuser-Nationalparks (UNESCO). Einer der wenigen Orte, wo man Sumatra-Orang-Utans in freier Wildbahn beobachten kann.",
im=[("Sumatran orangutan Bukit Lawang|Sumatran orangutan","Orang-Utan"),("Bohorok River Bukit Lawang|Bukit Lawang river","Bohorok-Fluss"),("Gunung Leuser National Park rainforest|Sumatra rainforest","Dschungel")],
li=["<strong>Dauer:</strong> 2 Nächte. Trekking nur mit lizenziertem Guide (Halbtags- oder Ganztagestouren).","<strong>Verhalten:</strong> Abstand zu Orang-Utans halten, nicht füttern; Erkältete sollten nicht mitkommen (Krankheiten sind übertragbar).","<strong>Praktisch:</strong> Regenjacke, feste Schuhe, Mückenschutz, Bargeld (kaum Geldautomaten)."],
mo="Tubing im Bohorok-Fluss, Fledermaushöhle, Dschungelspaziergang zum Dorf, Gummiplantagen. ★ Orang-Utan-Trekking.",
rt="Flug Singapur–Medan (Kualanamu, ca. 1,5–2 Std.), dann Taxi/Bus nach Bukit Lawang (ca. 3–4 Std.). Alternative: Fähre Singapur–Batam und Weiterflug nach Medan."),
dict(t="3. Lake Toba (Samosir)",d="23.–26. Juni · 3 Nächte",
de="Der grösste Vulkankratersee der Welt. Auf der Insel Samosir liegt die Kultur der Batak, mit traditionellen Häusern, Steinfiguren und Dorfleben.",
im=[("Lake Toba Samosir","Lake Toba"),("Batak house Samosir|Batak traditional house","Batak-Haus"),("Sipiso-piso waterfall|Sipisopiso","Sipiso-Piso")],
li=["<strong>Dauer:</strong> 3 Nächte, Basis in Tuk Tuk (Samosir). Schwimmen im See ist möglich.","<strong>Highlights:</strong> Batak-Dörfer (Ambarita, Tomok), Roller- oder Fahrradtour um die Insel, Sipiso-Piso Wasserfall am Nordufer.","<strong>Praktisch:</strong> Nachts kühl; Unterkünfte einfach, aber mit Seeblick."],
mo="Ambarita (Steinstühle), Tomok (Gräber der Sidabutar), Heisse Quellen bei Pangururan, Bukit Holbung (Aussicht), Berastagi als Abstecher.",
rt="Transfer/Bus Bukit Lawang–Parapat (ca. 7–8 Std.), dann Fähre nach Tuk Tuk (ca. 30 Min.)."),
dict(t="4. Bukittinggi (Westsumatra)",d="26.–29. Juni · 3 Nächte",
de="Kühle Bergstadt im Minangkabau-Hochland mit Uhrturm, Schluchten, Vulkanen und der berühmten Padang-Küche (Rendang).",
im=[("Jam Gadang Bukittinggi","Jam Gadang"),("Ngarai Sianok canyon","Ngarai Sianok"),("Harau Valley waterfall|Lembah Harau","Harau-Tal")],
li=["<strong>Dauer:</strong> 3 Nächte. Tagesausflüge zum Harau-Tal (Wasserfälle, Klippen) und zum Maninjau-See.","<strong>Kultur:</strong> Minangkabau-Architektur (Pagaruyung-Palast), Rendang-Kochkurs, Markt.","<strong>Hinweis:</strong> Der Vulkan Marapi ist aktiv, Besteigung nur bei freigegebener Lage; aktuelle Warnungen prüfen (MAGMA Indonesia)."],
mo="Lobang Jepang (japanische Tunnel), Pagaruyung Palace in Batusangkar, Lake Maninjau, Kandang-Gruppe, Panorama Park.",
rt="Von Parapat Direktbus oder Nachtbus nach Bukittinggi (ca. 14–18 Std.). Alternative: Transfer nach Medan und Flug (Medan–Padang oder via Jakarta prüfen), dann Bus nach Bukittinggi."),
dict(t="5. Jakarta (Java)",d="29. Juni–1. Juli · 2 Nächte",
de="Indonesiens Hauptstadt: laut, gross und vielfältig. Als Ankunftsort auf Java reichen zwei Nächte für Kolonialviertel, Museen und Moscheen.",
im=[("Kota Tua Jakarta Fatahillah Square","Kota Tua"),("Monas Jakarta National Monument|Monas","Monas"),("Istiqlal Mosque Jakarta","Istiqlal-Moschee")],
li=["<strong>Dauer:</strong> 2 Nächte. Fortbewegung mit Grab/Gojek, MRT und TransJakarta; Staus einplanen.","<strong>Highlights:</strong> Kota Tua (Altstadt), Nationalmuseum, Istiqlal-Moschee neben der Kathedrale, Monas-Aussicht.","<strong>Optional:</strong> Zug «Whoosh» nach Bandung (Hochgeschwindigkeit, ca. 45 Min.)."],
mo="Sunda Kelapa Hafen, Museum MACAN, Pasar Baru, Taman Mini Indonesia Indah, Kepulauan Seribu (Inselgruppe, Tagesausflug).",
rt="Bus nach Padang (ca. 2–2,5 Std. ab Bukittinggi), dann Flug Padang–Jakarta (ca. 1,5–2 Std.)."),
dict(t="6. Yogyakarta",d="1.–5. Juli · 4 Nächte",
de="Kulturelles Herz Javas mit Sultanspalast, Batik-Handwerk und zwei Welterbestätten in der Nähe: Borobudur und Prambanan.",
im=[("Borobudur sunrise","Borobudur"),("Prambanan temple","Prambanan"),("Taman Sari Yogyakarta water castle|Taman Sari","Taman Sari")],
li=["<strong>Dauer:</strong> 4 Nächte. Borobudur früh am Morgen (Sonnenaufgang), Tickets und Besucherzahl vorab online prüfen (Zugang eingeschränkt).","<strong>Dresscode:</strong> Schultern und Knie bedecken, Sarong teils Pflicht.","<strong>Essen:</strong> Gudeg (Jackfruit-Eintopf), Angkringan-Strassenstände, Bakpia."],
mo="Kraton (Sultanspalast), Malioboro-Strasse, Merapi-Jeeptour, Ullen Sentalu Museum, Parangtritis Strand, Pindul-Höhle. ★ Borobudur und Prambanan.",
rt="Zug ab Jakarta Gambir nach Yogyakarta (Tugu), Eksekutif-Klasse (ca. 7–8 Std.). Tickets via KAI Access oder tiket.com."),
dict(t="7. Bromo / Malang",d="5.–8. Juli · 3 Nächte",
de="Vulkanlandschaft des Tengger-Massivs mit dem berühmten Sonnenaufgang über dem Bromo. Malang dient als angenehme Basis in den Bergen.",
im=[("Mount Bromo sunrise Penanjakan","Bromo Sonnenaufgang"),("Mount Bromo crater sand sea|Tengger caldera","Sandmeer"),("Tumpak Sewu waterfall","Tumpak Sewu")],
li=["<strong>Dauer:</strong> 3 Nächte. Jeeptour ab Tumpang oder Cemoro Lawang startet um ca. 2–3 Uhr morgens.","<strong>Kälte:</strong> Morgens nahe 0–5 °C, Jacke, Mütze, Handschuhe mitbringen.","<strong>Hinweis:</strong> Zugang zum Krater kann bei Aktivität gesperrt sein; Lage vorab prüfen."],
mo="Penanjakan-Aussichtspunkt, Savannah (Teletubbies Hill), Madakaripura-Wasserfall, Tumpak Sewu (Tagesausflug), Kampung Warna-Warni in Malang.",
rt="Zug Yogyakarta–Malang (ca. 7–8 Std., Fahrplan prüfen). Von Malang per Jeep oder Auto nach Bromo."),
dict(t="8. Ijen / Banyuwangi",d="8.–10. Juli · 2 Nächte",
de="Östlicher Zipfel Javas: Der Ijen-Krater mit türkisfarbenem Säuresee und dem «Blue Fire» ist eines der spektakulärsten Naturerlebnisse der Reise.",
im=[("Ijen crater lake","Ijen-Kratersee"),("Kawah Ijen blue fire|Ijen blue fire","Blue Fire"),("Ijen sulfur miner|Ijen sulphur miners","Schwefelarbeiter")],
li=["<strong>Dauer:</strong> 2 Nächte. Aufstieg beginnt ca. 1–2 Uhr nachts (ca. 1,5–2 Std. Wanderung).","<strong>Sicherheit:</strong> Gasmaske tragen (am Parkeingang leihbar), Kraterrand nicht ohne Guide; Zugang bei erhöhter Aktivität gesperrt.","<strong>Respekt:</strong> Schwefelarbeiter nicht als Fotomotiv ausbeuten."],
mo="Baluran National Park (Savanne), Pulau Merah (Strand), Alas Purwo, Banyuwangi-Küstenorte.",
rt="Zug oder Privatfahrer von Malang/Bromo nach Banyuwangi (ca. 6–9 Std., Verbindung prüfen)."),
dict(t="9. Ubud (Bali)",d="10.–14. Juli · 4 Nächte",
de="Kultureller Mittelpunkt Balis mit Reisterrassen, Tempeln, Tanzaufführungen und Kunsthandwerk. Gute Basis für Ausflüge ins Hochland.",
im=[("Tegalalang rice terrace","Tegalalang"),("Sacred Monkey Forest Sanctuary Ubud|Monkey Forest Ubud","Monkey Forest"),("Tirta Empul temple","Tirta Empul")],
li=["<strong>Dauer:</strong> 4 Nächte. Juli ist Hochsaison: Unterkünfte und Touren früh buchen.","<strong>Highlights:</strong> Tegalalang-Terrassen früh am Morgen, Campuhan Ridge Walk, Tirta Empul (Reinigungsritual, Sarong Pflicht), Kecak-Tanz.","<strong>Hinweis:</strong> Tollwut kommt vor; Affen und Hunde nicht füttern/anfassen und bei Biss sofort ärztlich behandeln lassen. Touristenabgabe für Bali beachten."],
mo="Mount Batur (Sonnenaufgangs-Trek, ★), Goa Gajah, Tegenungan Wasserfall, Ubud Palast und Markt, Kochkurs, Sidemen-Tal als Ausflug.",
rt="Fähre Ketapang–Gilimanuk (ca. 1 Std.), dann Bus oder Shuttle nach Ubud (ca. 4–5 Std.). Privatfahrer ab Gilimanuk ist bequemer."),
dict(t="10. Amed (Ostbali)",d="14.–17. Juli · 3 Nächte",
de="Ruhige Küstenregion im Osten mit schwarzen Stränden, Schnorcheln direkt vom Ufer und dem Blick auf den Vulkan Agung.",
im=[("Amed Bali beach boats|Amed beach Bali","Amed"),("Tirta Gangga water palace","Tirta Gangga"),("Pura Lempuyang gates of heaven|Lempuyang Luhur temple","Lempuyang")],
li=["<strong>Dauer:</strong> 3 Nächte. Schnorcheln in der Jemeluk Bay und beim Wrack USS Liberty (Tulamben).","<strong>Lempuyang:</strong> Tor «Gates of Heaven» früh besuchen, Wartezeiten sind lang.","<strong>Praktisch:</strong> Weniger Nachtleben, wenige Geldautomaten."],
mo="Tirta Gangga (Wasserpalast), Pura Lempuyang, Tulamben (Tauchen), Aussicht auf den Mount Agung, Sonnenaufgang am Strand.",
rt="Shuttle (z.B. Perama, Kura-Kura) von Ubud nach Amed (ca. 2,5–3 Std.)."),
dict(t="11. Nusa Penida",d="17.–19. Juli · 2 Nächte",
de="Wilde Klippeninsel vor Bali mit Aussichtspunkten, Buchten und Schnorchelspots mit Mantarochen.",
im=[("Kelingking Beach Nusa Penida","Kelingking"),("Broken Beach Nusa Penida","Broken Beach"),("Crystal Bay Nusa Penida|Diamond Beach Nusa Penida","Crystal Bay")],
li=["<strong>Dauer:</strong> 2 Nächte. Strassen sind steil und schlecht; lieber Fahrer als Roller.","<strong>Boot:</strong> Wellengang kann im Juli stark sein; seekrank anfällige Reisende vorbereiten, Fahrplan flexibel halten.","<strong>Highlights:</strong> Kelingking Beach (steiler Abstieg), Angel's Billabong, Manta Point (Schnorcheln)."],
mo="Diamond Beach, Atuh Beach, Seganing Wasserfall, Nusa Lembongan (Mangroven, Ausflug).",
rt="Shuttle von Amed nach Padang Bai/Sanur, dann Speedboot nach Nusa Penida (ca. 30–45 Min.)."),
dict(t="12. Uluwatu / Südbali (Finale)",d="19.–23. Juli · 4 Nächte, Rückflug 23. Juli",
de="Abschluss an den Klippen der Bukit-Halbinsel mit Surfstränden, Sonnenuntergängen, Strandclubs und dem berühmten Uluwatu-Tempel.",
im=[("Pura Luhur Uluwatu cliff|Uluwatu temple","Uluwatu-Tempel"),("Padang Padang beach Uluwatu|Bingin beach","Padang Padang"),("Tanah Lot|Jimbaran beach","Tanah Lot")],
li=["<strong>Dauer:</strong> 4 Nächte. Flughafen ca. 45–60 Min. entfernt, am Abreisetag Puffer einplanen (Verkehr).","<strong>Highlights:</strong> Kecak-Tanz bei Sonnenuntergang am Uluwatu-Tempel, Strände (Padang Padang, Bingin, Suluban), Jimbaran Seafood.","<strong>Hinweis:</strong> Affen am Uluwatu-Tempel stehlen Brillen und Handys."],
mo="Tanah Lot (Tempel im Meer), Seminyak/Canggu (Cafés, Strandclubs), Sanur (ruhiger Strand), Melasti Strand, Garuda Wisnu Kencana Statue.",
rt="Speedboot von Nusa Penida nach Sanur, Transfer nach Uluwatu. Rückflug ab Denpasar (DPS)."),
]
gen='''<div class="gen">
<strong>Das Wichtigste vorab</strong>
<ul>
<li><strong>Einreise Indonesien (Schweizer Pass):</strong> Visa on Arrival bzw. e-VOA erlaubt 30 Tage; der Aufenthalt auf dieser Route dauert länger (ca. 32 Tage). Eine einmalige Verlängerung um 30 Tage ist im Land beim Immigrationsbüro möglich. Frühzeitig beantragen. Zusätzlich online: Einreiseformular für Indonesien, Touristenabgabe für Bali, Reisepass mind. 6 Monate gültig. Alle Angaben vor Abreise bei den offiziellen Portalen prüfen.</li>
<li><strong>Währung &amp; Zahlen:</strong> Indonesische Rupiah (IDR). Geldautomaten haben Limits pro Abhebung. Bargeld für Sumatra und Inseln mitnehmen. QRIS (QR-Zahlung) ist in Städten verbreitet.</li>
<li><strong>Zeitzonen:</strong> Singapur und Bali UTC+8, Sumatra und Java UTC+7 (5–6 Std. Unterschied zur Schweiz im Sommer).</li>
<li><strong>Wetter im Juni/Juli:</strong> Trockenzeit auf Java und Bali (beste Reisezeit, Bali Hochsaison). Sumatra mit teils nachmittäglichen Schauern, Bergregionen (Bromo, Ijen) nachts kalt.</li>
<li><strong>Transport-Apps:</strong> Grab/Gojek (Taxi, Roller), KAI Access (Zug), tiket.com/Traveloka (Flug, Zug), Google Maps. Auf Bali: Shuttle-Anbieter wie Perama oder Kura-Kura, Speedboote für Nusa Penida vorab online buchen.</li>
<li><strong>Gesundheit:</strong> Impfstatus beim Tropeninstitut klären (Hepatitis A, Tetanus, Typhus; Tollwut-Risiko auf Bali beachten). Dengue-Mückenschutz. Leitungswasser nicht trinken. Alkohol nur in seriösen Lokalen (Methanol-Risiko bei selbst gemischten Getränken).</li>
<li><strong>Vulkane &amp; Naturgefahren:</strong> Marapi (Sumatra), Bromo, Ijen und Agung können Zugangsbeschränkungen haben. Offizielle Lagemeldungen (MAGMA Indonesia/PVMBG) beachten. Erdbeben kommen vor.</li>
<li><strong>Versicherung:</strong> Reisekranken- und Rücktransportversicherung, deckt Trekking, Tauchen und Rollerfahren ab. Internationaler Führerschein für Roller (und Helm tragen).</li>
<li><strong>Kultur:</strong> Mehrheitlich muslimisch (Sumatra, Java), auf Bali hinduistisch. Dezente Kleidung bei Tempeln und Moscheen, Schuhe ausziehen, rechte Hand zum Geben/Essen nutzen, Kopf nicht berühren.</li>
<li><strong>Drogen &amp; Gesetze:</strong> Sehr harte Strafen für Drogenbesitz. Drohnen nur mit Bewilligung.</li>
<li><strong>Notfall:</strong> Indonesien 112; Schweizer Vertretung (Botschaft Jakarta, Konsulat Bali) notieren; EDA-Reiseplattform nutzen.</li>
</ul>
</div>'''

h=['<!DOCTYPE html>\n<html lang="de">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>Reiseführer: Singapur bis Bali</title>\n<style>',css,'</style>\n</head>\n<body>\n<h1>Reiseführer: Singapur bis Bali (Sumatra, Java, Bali)</h1>\n']
h.append('<div class="gen">\n<strong>Reiseplan: 5 Wochen ab 18. Juni 2026</strong> (Abflug Do 18. Juni, Ankunft Singapur Fr 19. Juni, Rückflug Do 23. Juli ab Denpasar)\n<table class="pl">\n<tr><th>Datum</th><th>Ort</th><th>Nächte</th><th>Anreise / Hinweis</th></tr>\n<tr><td>18.–19. Juni</td><td>Flug</td><td>–</td><td>Ankunft Singapur</td></tr>\n')
for a,b,c,d,_ in plan:
    h.append('<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>\n'%(a,b,c,d))
h.append('</table>\n<ul>\n<li><strong>Gesamt:</strong> 34 Nächte, 12 Stationen auf drei Inseln (Sumatra, Java, Bali).</li>\n<li><strong>Lange Etappen:</strong> Toba–Bukittinggi ist die längste Landstrecke der Reise. Wer das vermeiden will, fliegt über Medan oder Jakarta. Fahrpläne, Flüge und Fährzeiten vorab prüfen, besonders bei Fähren und Speedbooten.</li>\n<li><strong>Optionale Erweiterungen:</strong> Bandung (Teeplantagen, Vulkan Tangkuban Perahu, per Whoosh ab Jakarta), Lombok mit Rinjani oder die Gili-Inseln (ab Bali per Speedboot), Pulau Weh (Nordsumatra).</li>\n</ul>\n</div>\n\n')
h.append(gen+'\n\n')
for s in S:
    h.append('<div class="st">\n<div class="ti">%s <span class="dt">· %s</span></div>\n<div class="de">%s</div>\n<div class="gd">\n'%(s['t'],s['d'],s['de']))
    for q,c in s['im']:
        h.append('<div class="bx"><img data-q="%s"><div class="cp">%s</div></div>\n'%(html.escape(q,quote=True),c))
    h.append('</div>\n<ul class="in">\n')
    for l in s['li']: h.append('<li>%s</li>\n'%l)
    h.append('</ul>\n<div class="mo"><b>Weitere Sehenswürdigkeiten:</b> %s</div>\n<div class="rt"><strong>ÖV-Route:</strong> %s</div>\n</div>\n\n'%(s['mo'],s['rt']))
h.append('<footer>★ = Top-Empfehlungen. Bilder werden beim Öffnen automatisch von Wikimedia Commons geladen (Internetverbindung nötig). Urheber und Lizenzen siehe jeweilige Dateiseite. Alle Angaben (Fahrpläne, Preise, Einreiseregeln) vor der Reise prüfen.</footer>\n<script>\n'+js+'\n</script>\n</body>\n</html>\n')
open('build/bali-alt.html','w',encoding='utf-8').write(''.join(h))
