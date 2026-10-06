import re, html as _h


def num(s):
    return int(re.sub(r'\D', '', s))


def chf(n):
    return "{:,}".format(n).replace(",", "’")


def build(asien_budget_html, trip_bali, trip_usa):
    asien_budget_html = _h.unescape(asien_budget_html)
    m = re.search(r'<strong>([^<]+) CHF</strong><span>Planwert für (\d+) Nächte.*?Spanne ([^ ]+)\s*CHF', asien_budget_html)
    lo, hi = [num(x) for x in m.group(3).split('–')]
    BUD = {
        'asien': dict(plan=num(m.group(1)), lo=lo, hi=hi, nights=int(m.group(2))),
        'bali': dict(plan=num(trip_bali.BUDGET['total']), lo=num(trip_bali.BUDGET['span'].split('–')[0]), hi=num(trip_bali.BUDGET['span'].split('–')[1]), nights=trip_bali.BUDGET['days']),
        'usa': dict(plan=num(trip_usa.BUDGET['total']), lo=num(trip_usa.BUDGET['span'].split('–')[0]), hi=num(trip_usa.BUDGET['span'].split('–')[1]), nights=trip_usa.BUDGET['days']),
    }
    for v in BUD.values():
        v['day'] = int(round(v['plan'] / v['nights'], -1))
        v['pp'] = int(round(v['plan'] / 4, -2))

    TRIPS = [
        dict(k='asien', name='Singapur–Bangkok', sub='über Malaysia und Thailand', fit='ihr Schnorcheln, Inseln und Strand wollt und trotzdem Singapur, Kuala Lumpur und Bangkok sehen möchtet.', hl='Fünf Wochen über Land und Wasser durch Singapur, Malaysia und Thailand.',
             route='Singapur, Pulau Tioman, Kuala Lumpur, Perhentian Islands, Penang, Khanom, Koh Samui, Koh Tao, Hua Hin, Bangkok',
             stops='10 Stationen und 2 Zwischenübernachtungen', zones='Singapur, Malaysia, Thailand',
             out='Direktflug Zürich–Singapur ca. 12–13 Std.', back='Direktflug Bangkok–Zürich ca. 11,5–12 Std.',
             mid='Keine Flüge dazwischen, alles per Bus, Zug und Fähre',
             tempo='5 lange Reisetage mit 5–9 Std. (Tioman–Kuala Lumpur, Kuala Lumpur–Kuala Besut, Perhentian–Penang, Penang–Hat Yai, Koh Tao–Hua Hin)',
             weather='Penang und Bangkok haben Regenzeit; die Ostküste Malaysias (Tioman, Perhentian) und der Golf von Thailand (Samui, Tao) sind meist ruhiger.',
             entry='Singapur und Malaysia visafrei. Thailand: seit 15.09.2026 nur noch 30 Tage visafrei und höchstens zwei Landgrenz-Einreisen pro Jahr, Länderliste prüfen. Online-Anmeldungen (SG Arrival Card, MDAC, TDAC).',
             hi='Schnorcheln auf Tioman, den Perhentians, Samui und Koh Tao, Street-Food in Penang, Delfine bei Khanom, Ang Thong, Grand Palace und Wat Arun in Bangkok.',
             teens='Schnorcheln, Inselhopping, Wasserparks, Sentosa mit Universal Studios, Kajak.',
             pro=['Viele Strand- und Schnorchelstationen', 'Direktflüge hin und zurück, kein Flug dazwischen', 'Günstigste Variante zusammen mit Indonesien'],
             con=['Viele Etappen und lange Reisetage', 'Regenzeit in Penang und Bangkok', 'Tioman und Perhentian ähneln sich', 'Einreiseregeln für Thailand (30 Tage visafrei) prüfen']),
        dict(k='bali', name='Singapur–Bali', sub='über Malaysia und Java', fit='Abenteuer mit Vulkanen und Tempeln im Vordergrund stehen und ihr den langen Rückflug mit Stopp in Kauf nehmt.', hl='Fünf Wochen durch Malaysia, Java und Bali mit Vulkanen, Tempeln und Inseln.',
             route='Singapur, Pulau Tioman, Kuala Lumpur, Jakarta, Yogyakarta, Bromo und Malang, Ijen und Banyuwangi, Ubud, Nusa Penida, Uluwatu',
             stops='10 Stationen', zones='Singapur, Malaysia, Indonesien',
             out='Direktflug Zürich–Singapur ca. 12–13 Std.', back='Kein Direktflug ab Denpasar, mit einem Stopp ca. 17–22 Std.',
             mid='1 Flug dazwischen (Kuala Lumpur–Jakarta, ca. 2–2,5 Std.), sonst Bus, Zug und Fähre',
             tempo='5 lange Reisetage mit 5–9 Std. (Tioman–Kuala Lumpur, Jakarta–Yogyakarta, Yogyakarta–Malang, Bromo–Banyuwangi, Banyuwangi–Ubud); dazu ein nächtlicher Ijen-Aufstieg',
             weather='Trockenzeit auf Java und Bali (beste Reisezeit, Bali Hochsaison); Bromo und Ijen sind nachts sehr kalt.',
             entry='Visa on Arrival bzw. e-VOA für 30 Tage reicht (ca. 23 Tage Aufenthalt), dazu Einreiseformular und Touristenabgabe für Bali. Singapur und Malaysia visafrei.',
             hi='Borobudur und Prambanan, Sonnenaufgang am Bromo, «Blue Fire» am Ijen, Ubud, Nusa Penida mit Mantarochen, Uluwatu.',
             teens='Jeeptour auf den Bromo, Ijen-Nachtaufstieg, Höhlen-Tubing, Schnorcheln, Surf-Schnupperstunde.',
             pro=['Trockenzeit auf Java und Bali', 'Vulkane, Tempel und Strände in grosser Abwechslung', 'Günstig, ähnlich wie Thailand'],
             con=['Rückflug mit Stopp (ca. 17–22 Std.)', 'Ein Flug dazwischen und lange Zugtage auf Java', 'Ijen-Nachtaufstieg ist für den Sohn (12) anspruchsvoll']),
        dict(k='usa', name='Las Vegas–New York', sub='quer durch die USA', fit='Roadtrip, Nationalparks und Grossstädte wichtiger sind als Dschungel und Schnorcheln und das Budget (rund {diff} CHF mehr) passt.', hl='Fünf Wochen quer durch die USA mit Nationalparks, Grossen Seen und Grossstädten.',
             route='Las Vegas, Zion, Page, Grand Canyon, Monument Valley, Santa Fe, White Sands, Chicago, Sandusky, Niagara Falls, Washington, Philadelphia, New York',
             stops='13 Stationen und 1 Zwischenübernachtung', zones='USA (Nevada bis New York)',
             out='Zürich–Las Vegas ca. 12 Std. direkt (nicht ganzjährig), sonst 14–17 Std.', back='New York–Zürich ca. 7,5–8 Std.',
             mid='Keine Flüge dazwischen: Mietwagen und 2-Tage-Roadtrip, im Osten Amtrak',
             tempo='4 Fahrtage mit 5,5–7 Std. plus Roadtrip mit 10 und 12 Std. (zusammen ca. 22 Std.)',
             weather='Las Vegas, Zion und White Sands 38–45 °C; ab Juli Monsungewitter und Sturzfluten im Südwesten; im Osten heiss und schwül mit Gewittern.',
             entry='ESTA für alle vier (ca. 40 USD pro Person), Regeln im Wandel. Nationalpark-Jahrespass für Nicht-Residenten 250 USD, 100 USD Zusatzgebühr pro Person ab 16 Jahren in 11 Parks.',
             hi='Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands, Chicago, Niagarafälle, Washington, New York.',
             teens='Cedar Point (Achterbahnen), Meow Wolf, Sandboarding auf White Sands, Smithsonian, New York.',
             pro=['Kurze Flüge (ca. 12 und 7,5–8 Std.)', 'Grosse Naturwunder und Städte mit vielen Teenager-Highlights', 'Eigenes Tempo mit dem Mietwagen'],
             con=['Mit Abstand am teuersten', 'Hitze und Monsun im Südwesten im Juli', 'Roadtrip mit 2 sehr langen Fahrtagen', 'Parkgebühren und ESTA-Regeln im Wandel']),
    ]

    card_tpl = ('<article class="vcard"><div class="vtag">{zones}</div><h3>{name}</h3><p class="vsub">{sub}</p><p>{hl}</p>'
                '<dl><div><dt>Nächte</dt><dd>{nights}</dd></div><div><dt>Budget (Plan)</dt><dd>{plan} CHF</dd></div><div><dt>Hinflug</dt><dd>{out}</dd></div><div><dt>Rückflug</dt><dd>{back}</dd></div></dl>'
                '<p class="vhl">{hi}</p><a class="btn" href="#{k}">Zur Reise</a></article>')
    cards = ''.join(card_tpl.format(nights=BUD[T['k']]['nights'], plan=chf(BUD[T['k']]['plan']), **T) for T in TRIPS)

    mx = max(v['hi'] for v in BUD.values())
    bar_tpl = ('<div class="brow"><div class="bl"><b>{name}</b><span>{sub}</span></div>'
               '<div class="track"><i class="range" style="left:{l:.1f}%;width:{w:.1f}%"></i><i class="plan" style="left:{p:.1f}%"></i></div>'
               '<div class="bv">{plan} CHF<small>Spanne {lo}–{hi} CHF, ca. {day} CHF pro Tag</small></div></div>')
    bars = ''.join(bar_tpl.format(name=T['name'], sub=T['sub'], l=100 * BUD[T['k']]['lo'] / mx, w=100 * (BUD[T['k']]['hi'] - BUD[T['k']]['lo']) / mx,
                                  p=100 * BUD[T['k']]['plan'] / mx, plan=chf(BUD[T['k']]['plan']), lo=chf(BUD[T['k']]['lo']), hi=chf(BUD[T['k']]['hi']),
                                  day=chf(BUD[T['k']]['day'])) for T in TRIPS)

    rows = [('Route', 'route'), ('Nächte vor Ort', None), ('Stationen', 'stops'), ('Länder', 'zones'), ('Hinflug ab Zürich', 'out'), ('Rückflug nach Zürich', 'back'),
            ('Flüge dazwischen', 'mid'), ('Reisetempo', 'tempo'), ('Budget (Plan, 4 Personen)', None), ('Pro Tag und pro Person', None), ('Wetter im Juli', 'weather'),
            ('Einreise', 'entry'), ('Höhepunkte', 'hi'), ('Für die Teenager', 'teens')]
    trs = ''
    for lab, key in rows:
        tds = ''
        for T in TRIPS:
            b = BUD[T['k']]
            if lab == 'Nächte vor Ort':
                val = '%d Nächte (Fr, 18.06.2027 bis Do, 22.07.2027)' % b['nights']
            elif lab.startswith('Budget'):
                val = '<b>%s CHF</b> (Spanne %s–%s CHF)' % (chf(b['plan']), chf(b['lo']), chf(b['hi']))
            elif lab.startswith('Pro Tag'):
                val = 'ca. %s CHF pro Tag, ca. %s CHF pro Person' % (chf(b['day']), chf(b['pp']))
            else:
                val = T[key]
            tds += '<td data-label="%s">%s</td>' % (T['name'], val)
        trs += '<tr><th scope="row">%s</th>%s</tr>' % (lab, tds)
    head = ''.join('<th scope="col">%s<small>%s</small></th>' % (T['name'], T['sub']) for T in TRIPS)
    table = '<table class="cmp"><thead><tr><th></th>%s</tr></thead><tbody>%s</tbody></table>' % (head, trs)

    diff = chf(int(round((BUD['usa']['plan'] - BUD['asien']['plan']), -3)))
    pc = ''.join('<article class="pcard"><h3>%s</h3><p class="fit"><b>Passt am besten, wenn</b> FIT</p><h4>Dafür spricht</h4><ul class="pro">%s</ul><h4>Dagegen spricht</h4><ul class="con">%s</ul></article>' % (
        T['name'], ''.join('<li>%s</li>' % x for x in T['pro']), ''.join('<li>%s</li>' % x for x in T['con'])) for T in TRIPS)
    pc = ''.join(re.sub(r'FIT', T['fit'].replace('{diff}', diff), part, count=1) for T, part in zip(TRIPS, re.findall(r'<article class="pcard">.*?</article>', pc, re.S)))


    def dots(n):
        return '<span class="dots" role="img" aria-label="%d von 5 Punkten"><span>%s</span><span class="off">%s</span></span>' % (n, '●' * n, '●' * (5 - n))
    budget_txt = [
        'ca. %s CHF: Singapur ist teuer, der Rest günstig.' % chf(BUD['asien']['plan']),
        'ca. %s CHF: fast gleich wie Singapur–Bangkok.' % chf(BUD['bali']['plan']),
        'ca. %s CHF: rund %s CHF mehr, vor allem Unterkünfte und Mietwagen.' % (chf(BUD['usa']['plan']), diff),
    ]
    RATE = [
        ('Natur und Landschaft', [(4, 'Inseln, Strände und Riffe von Tioman bis Koh Tao, dazu Delfine bei Khanom und Wasserfälle; eher sanfte als dramatische Landschaften.'),
                                  (4, 'Vulkane wie Bromo und Ijen, Reisterrassen bei Ubud und die Klippen von Nusa Penida; dramatisch und abwechslungsreich.'),
                                  (5, 'Zion, Antelope Canyon, Horseshoe Bend, Grand Canyon, Monument Valley, White Sands und die Niagarafälle: die spektakulärsten Landschaften der drei Reisen.')]),
        ('Dschungelfeeling', [(3, 'Dschungelwanderung auf Tioman, Wasserfälle und Inselwälder; kein grosser zusammenhängender Regenwald auf der Route.'),
                              (3, 'Tioman, dazu Wasserfälle und Vulkanlandschaften auf Java und Bali; Dschungel eher als Kulisse.'),
                              (1, 'Wüsten, Canyons und Seen; die grünen Wälder liegen im Osten.')]),
        ('Schnorcheln', [(5, 'Tioman, Perhentian Islands, Koh Samui und Koh Tao: fast jede Inselstation hat Riffe, Schildkröten und Schnorchelboote.'),
                         (3, 'Tioman und die Mantarochen bei Nusa Penida; auf Java gibt es keine Riffe.'),
                         (0, 'Kein Schnorcheln im Meer; höchstens Baden im Lake Powell oder in den Narrows.')]),
        ('Abenteuer', [(3, 'Kajak, Seilrutschen, Inselhopping und Fähren; eher abenteuerlich beim Reisen als in der Natur.'),
                       (4, 'Bromo-Jeep bei Nacht, Ijen-Aufstieg zum «Blue Fire», Höhlen-Tubing und Surfen.'),
                       (4, 'Durch die Narrows waten, Antelope Canyon, 2-Tage-Roadtrip und Cedar Point.')]),
        ('Städte', [(4, 'Singapur, Kuala Lumpur, Penang und Bangkok mit Street-Food und Tempeln.'),
                    (3, 'Singapur, Kuala Lumpur, Jakarta und Yogyakarta; Bali ist eher Kultur und Natur als Stadt.'),
                    (5, 'Las Vegas, Chicago, Washington, Philadelphia und New York mit Museen und Aussichtsplattformen.')]),
        ('Budget (mehr Punkte = günstiger)', [(4, budget_txt[0]), (4, budget_txt[1]), (1, budget_txt[2])]),
        ('Reisekomfort', [(3, 'Direktflüge hin und zurück, aber 5 lange Reisetage mit 5–9 Stunden.'),
                          (2, 'Rückflug mit Stopp (17–22 Stunden), ein Flug dazwischen und lange Zugtage auf Java.'),
                          (2, 'Kurze Flüge (12 und 7,5–8 Stunden), aber ein Roadtrip mit 10 und 12 Stunden an zwei Tagen.')]),
    ]
    rtr = ''
    for lab, cells in RATE:
        tds = ''.join('<td data-label="%s">%s<span class="rtxt">%s</span></td>' % (T['name'], dots(n), txt) for T, (n, txt) in zip(TRIPS, cells))
        rtr += '<tr><th scope="row">%s</th>%s</tr>' % (lab, tds)
    rhead = ''.join('<th scope="col">%s<small>%s</small></th>' % (T['name'], T['sub']) for T in TRIPS)
    rating = ('<table class="cmp rate"><thead><tr><th></th>%s</tr></thead><tbody>%s</tbody></table>' % (rhead, rtr))
    callout = ('<div class="callout"><b>Empfehlung</b>'
               '<p>Sollen Schnorcheln und Dschungelfeeling zusammenkommen, empfiehlt sich <b>Singapur–Bangkok</b>. '
               'Für Abenteuer, Grossstädte und die grössten Landschaften (Canyons, Monument Valley, White Sands) ohne Schnorcheln empfiehlt sich <b>Las Vegas–New York</b>, sofern das grössere Budget passt. '
               '<b>Singapur–Bali</b> liegt dazwischen und punktet mit Vulkanen, Reisterrassen und Inseln, hat aber den langen Rückflug als Nachteil.</p>'
               '<p>Mehr Dschungel bei Singapur–Bangkok: Khao Sok (Regenwald und Cheow-Lan-See) lässt sich in die Route einbauen. '
               'Dafür liessen sich Khanom oder Penang kürzen.</p></div>')

    return ('<div class="trip" id="trip-start" hidden>'
            '<header class="hero hero-start"><div class="wrap"><p class="when">Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene, 2 Kids</p><h1>Familienreise 2027</h1>'
            '<p class="sub">Drei Reisevarianten als grober Fahrplan, damit ihr in Ruhe entscheiden könnt: Singapur–Bangkok, Singapur–Bali oder Las Vegas–New York.</p>'
            '<ol class="chain"><li><a href="#asien">Singapur–Bangkok</a></li><li><a href="#bali">Singapur–Bali</a></li><li><a href="#usa">Las Vegas–New York</a></li></ol></div></header>'
            '<main>'
            '<section id="start-reisen"><div class="wrap"><h2>Die drei Reisen</h2>'
            '<p class="intro">Alle Reisen dauern 33 bis 34 Nächte und sind für die Familie mit Sohn (12) und Tochter (14) geplant. Ein Klick führt zum vollständigen Fahrplan mit Stationen, Karte und Budget.</p>'
            '<div class="vgrid">' + cards + '</div></div></section>'
            '<section id="start-bewertung" style="padding-top:0"><div class="wrap"><h2>Bewertung nach euren Wünschen</h2>'
            '<p class="intro">Bewertet werden Natur, Dschungelfeeling, Schnorcheln, Abenteuer, Städte, Budget und Reisekomfort. Fünf Punkte sind die beste Bewertung (beim Budget heisst das: günstig). Die Punkte sind eine Einschätzung auf Basis der Reisepläne, keine Messung.</p>'
            '<div class="cmpwrap">' + rating + '</div>' + callout + '</div></section>'
            '<section id="start-budget" style="padding-top:0"><div class="wrap"><h2>Budget im Vergleich</h2>'
            '<p class="intro">Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten für 4 Personen. Der dunkle Punkt ist der Planwert, der helle Balken die Spanne.</p>'
            '<div class="bars">' + bars + '</div></div></section>'
            '<section id="start-vergleich" style="padding-top:0"><div class="wrap"><h2>Direktvergleich</h2>'
            '<p class="intro">Die wichtigsten Unterschiede nebeneinander.</p><div class="cmpwrap">' + table + '</div></div></section>'
            '<section id="start-entscheid" style="background:#E4EEEC"><div class="wrap"><h2>Wofür spricht was</h2>'
            '<p class="intro">Welche Reise passt, hängt davon ab, ob Strand und Schnorcheln, Vulkane und Tempel oder Nationalparks und Städte im Vordergrund stehen.</p>'
            '<div class="pgrid">' + pc + '</div></div></section>'
            '</main></div>')
