import os
os.makedirs('build', exist_ok=True)
import re, html as H, urllib.parse
import gen3, trip_bali, trip_usa, maps_new, start_page
from gen3 import fd, fdin, clean_title

CSS = gen3.CSS + open('start.css', encoding='utf-8').read() + r'''
:root{--g:56px}
html{scroll-padding-top:120px}
.gnav{position:sticky;top:0;z-index:1300;background:#0F2E33;color:#fff}
.gnav .wrap{display:flex;gap:6px;overflow-x:auto;padding-top:9px;padding-bottom:9px;align-items:center}
.gnav a.logo{flex:none;font:800 1rem "Bricolage Grotesque",system-ui,sans-serif;margin-right:10px;color:#F0A23B;border:0;padding:7px 4px}
.gnav a.logo.on{background:none;color:#fff}
.gnav a{flex:none;color:#fff;text-decoration:none;font-weight:700;font-size:.95rem;padding:7px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.25)}
.gnav a:hover{background:rgba(255,255,255,.14)}
.gnav a.on{background:#F0A23B;color:#1C2B2D;border-color:#F0A23B}
nav.top{top:var(--g)}
.trip[hidden]{display:none}
.tag.id{background:#B5651D}.tag.us{background:#2F4C9A}
.mapwrap.wide{max-width:820px}
.mapwrap .nm2{font:800 10px "Figtree",system-ui,sans-serif;fill:#fff}
.lg i.lc{border-color:#1F9A8F}.lg i.la{border-top:3px dotted #7A5CC7}
.mapnote{font-size:.9rem;color:var(--muted);margin:14px 0 6px;font-weight:700}
@media (max-width:640px){:root{--g:52px}.gnav a{font-size:.85rem;padding:6px 11px}}
'''

CAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16l1.5-5.5A2 2 0 0 1 8.4 9h7.2a2 2 0 0 1 1.9 1.5L19 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="18" r=".8"/><circle cx="16.5" cy="18" r=".8"/></svg>'
def icon(t):
    if t.startswith('Mietwagen'): return CAR
    return gen3.icon(t)

def fig(e):
    return gen3.fig(e)

def budget_html(B):
    def cell(h, v): return '<td data-label="%s">%s</td>' % (h, v)
    rows = ''
    for k, s, p, g in B['rows']:
        rows += '<tr>' + cell('Kategorie', k) + cell('Spanne', s) + cell('Planwert', p) + cell('Grundlage', g) + '</tr>'
    t1 = '<table class="pl"><tr><th>Kategorie</th><th>Spanne</th><th>Planwert</th><th>Grundlage</th></tr>' + rows + '</table>'
    rows = ''.join('<tr>' + cell('Station (Nächte)', a) + cell('Unterkunft, Essen, Aktivitäten', b) + '</tr>' for a, b in B['stations'])
    t2 = '<table class="pl"><tr><th>Station (Nächte)</th><th>Unterkunft, Essen, Aktivitäten</th></tr>' + rows + '</table>'
    return ('<div class="btot"><strong>%s CHF</strong><span>Planwert für %d Nächte, 2 Erwachsene und 2 Kids. Spanne %s CHF, %s.</span></div>'
            '<div class="tbl">%s</div><div class="tbl">%s</div><ul class="bnotes">%s</ul>') % (
        B['total'], B['days'], B['span'], B['perday'], t1, t2, ''.join('<li>%s</li>' % n for n in B['notes']))

def build_new(key, ST, PLAN, MIX, NOTES, TIPS, B, tags, pre=None, flight_in=None, flight_out=None):
    anchor = lambda i: '%s-s%d' % (key, i + 1)
    chain = ''.join('<li><a href="#%s">%s</a></li>' % (anchor(i), H.escape(re.sub(r'\s*\(.*\)', '', clean_title(t)[1].split(' / ')[0]))) for i, (t, d, c, s, im) in enumerate(ST))
    rows = []
    if flight_in: rows.append('<div class="prow tr"><span class="d">%s</span><span class="n">%s</span><span class="k">–</span><span class="a">%s</span></div>' % (fd(flight_in[0]), flight_in[1], flight_in[2]))
    for a, b, c, d in PLAN:
        if not re.match(r'\d+\.', b):
            rows.append('<div class="prow tr"><span class="d">%s</span><span class="n">%s</span><span class="k">%s %s</span><span class="a">%s</span></div>' % (fd(a), b, c, 'Nacht' if c == '1' else 'Nächte', d))
        else:
            n, nm = b.split('. ', 1)
            rows.append('<div class="prow"><span class="d">%s</span><span class="n"><a href="#%s">%s. %s</a></span><span class="k">%s %s</span><span class="a">%s</span></div>' % (fd(a), anchor(int(n) - 1), n, nm, c, 'Nacht' if c == '1' else 'Nächte', d))
    if flight_out: rows.append('<div class="prow tr"><span class="d">%s</span><span class="n">%s</span><span class="k">–</span><span class="a">%s</span></div>' % (fd(flight_out[0]), flight_out[1], flight_out[2]))
    stops = []
    for i, (t, d, cls, s, im) in enumerate(ST):
        n, name = clean_title(t)
        when = d.split(' · ')
        datepart = fd(when[0]) + ', '; nights = fdin(' · '.join(when[1:]))
        prefix = ''
        if pre:
            for k_, (txt, rng) in pre.items():
                if k_ in name: prefix = '<b>%s</b> (%s, 1 Nacht). ' % (txt, fd(rng))
        rt = s['rt']
        leg = '<div class="leg"><span class="ic" aria-hidden="true">%s</span><p><b>Anreise:</b> %s%s</p></div>' % (icon(rt), prefix, rt)
        figs = ''.join(fig(e) for e in im)
        teen = ''; facts = []
        for l in s['li']:
            m = re.match(r'<strong>Für Teens:</strong>\s*(.*)', l)
            if m: teen = '<div class="teen"><h4>Für Teens</h4><p>%s</p></div>' % m.group(1)
            else: facts.append('<li>%s</li>' % l)
        warn = ('<div class="warn">%s</div>' % s['wa']) if s.get('wa') else ''
        tagtxt = s.get('region') or tags[cls]
        stops.append('''%s<article class="stop" id="%s"><span class="num">%s</span>
<div class="shead"><h3>%s</h3><span class="tag %s">%s</span><p class="when">%s<b>%s</b></p></div>
<div class="gal">%s</div>
<p class="lead">%s</p>%s
<ul class="facts">%s</ul>
<p class="more"><b>Ausserdem sehenswert:</b> %s</p>%s
</article>''' % (leg, anchor(i), n, name, cls, tagtxt, datepart, nights, figs, s['de'], teen, ''.join(facts), s['mo'], warn))
    return dict(chain=chain, rows=''.join(rows), stops=''.join(stops),
                mix=''.join('<div><h3>%s</h3><p>%s</p></div>' % x for x in MIX),
                notes=''.join('<p><b>%s</b>%s</p>' % x for x in NOTES),
                tips=''.join('<details><summary>%s</summary><p>%s</p></details>' % x for x in TIPS),
                budget=budget_html(B))

def legend(items):
    cls = {'bus': ('lb', 'Bus, Minivan, Taxi'), 'car': ('lc', 'Mietwagen'), 'train': ('lt', 'Zug'), 'ferry': ('lf', 'Fähre, Boot'), 'air': ('la', 'Flug')}
    s = ''.join('<span><i class="%s"></i>%s</span>' % cls[m] for m in items)
    return '<div class="lg">%s<span><b class="lz"></b>Zwischenübernachtung oder Umstieg</span></div>' % s

def trip_section(key, hero, plan_intro, F, mapblock, stops_intro, arrive, budget_intro, tips_intro, mix_intro='Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen.'):
    p = key + '-'
    return '''<div class="trip" id="trip-%(k)s" hidden>
%(hero)s
<nav class="top" aria-label="Abschnitte"><div class="wrap">
<a href="#%(p)splan">Reiseplan</a><a href="#%(p)skarte">Karte</a><a href="#%(p)sstationen">Stationen</a><a href="#%(p)sbudget">Budget</a><a href="#%(p)stipps">Tipps</a>
</div></nav>
<main>
<section id="%(p)splan"><div class="wrap">
<h2>Reiseplan</h2>
<p class="intro">%(plan_intro)s</p>
<div class="plan">%(rows)s</div>
<div class="notes">%(notes)s</div>
</div></section>
<section id="%(p)skarte" style="padding-top:0"><div class="wrap">
<h2>Die Route auf der Karte</h2>
%(mapblock)s
</div></section>
<section style="padding-top:0"><div class="wrap">
<h2>Abwechslung unterwegs</h2>
<p class="intro">%(mix_intro)s</p>
<div class="mix">%(mix)s</div>
</div></section>
<section id="%(p)sstationen" style="background:#E4EEEC"><div class="wrap">
<h2>Die Stationen</h2>
<p class="intro">%(stops_intro)s</p>
<div class="stops">%(stops)s</div>
<p class="arrive">%(arrive)s</p>
</div></section>
<section id="%(p)sbudget"><div class="wrap">
<h2>Budget</h2>
<p class="intro">%(budget_intro)s</p>
%(budget)s
</div></section>
<section id="%(p)stipps" style="padding-top:0"><div class="wrap">
<h2>Wichtige Hinweise</h2>
<p class="intro">%(tips_intro)s</p>
<div class="tips">%(tips)s</div>
</div></section>
</main>
</div>''' % dict(k=key, p=p, hero=hero, plan_intro=plan_intro, rows=F['rows'], notes=F['notes'], mapblock=mapblock, mix=F['mix'], mix_intro=mix_intro,
                 stops_intro=stops_intro, stops=F['stops'], arrive=arrive, budget_intro=budget_intro, budget=F['budget'], tips_intro=tips_intro, tips=F['tips'])

def hero(imgtag, when, title, sub, chain):
    return '<header class="hero">%s<div class="wrap"><p class="when">%s</p><h1>%s</h1><p class="sub">%s</p><ol class="chain">%s</ol></div></header>' % (imgtag, when, title, sub, chain)

FP = 'https://commons.wikimedia.org/wiki/Special:FilePath/USA_10187_Horseshoe_Bend_Luca_Galuzzi_2007.jpg'
WHEN = 'Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene, 2 Kids'
BUD_INTRO = 'Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.'
TIPS_INTRO = 'Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.'

# ---------- Asien (Thailand) aus gen3 ----------
def prefix_ids(h, key):
    h = re.sub(r'id="s(\d+)"', r'id="%s-s\1"' % key, h)
    return re.sub(r'href="#s(\d+)"', r'href="#%s-s\1"' % key, h)
hero_img = re.search(r'<header class="hero">\s*(<img [^>]*>)', gen3.page).group(1)
ASIEN_FLUG = ('Flug ab und nach Zürich', 'Hinflug: Direktflug Zürich–Singapur ca. 12–13 Std. (Zeitverschiebung +6 Std.). Abflug am Fr, 18.06.2027 um 22 Uhr, Ankunft am Sa, 19.06.2027 am späten Nachmittag. Rückflug: Direktflug Bangkok–Zürich ca. 11,5–12 Std. (Zeitverschiebung −5 Std.) am Do, 22.07.2027. Mit Umstieg dauert die Reise meist 15–18 Std. Direktflüge und Flugzeiten bei der Buchung prüfen.')
F_asien = dict(chain=prefix_ids(gen3.chain, 'asien'), rows=prefix_ids(''.join(gen3.rows), 'asien'), stops=prefix_ids(''.join(gen3.st), 'asien'),
               mix=gen3.mix, notes=gen3.notes_html + '<p><b>%s</b>%s</p>' % ASIEN_FLUG, tips=gen3.tips, budget=gen3.budget_html)
F_asien['rows'] = F_asien['rows'].replace('Ankunft in Singapur am Sa, 19.06.2027', 'Direktflug ca. 12–13 Std., Ankunft in Singapur am Sa, 19.06.2027').replace('<span class="a">Rückflug</span>', '<span class="a">Rückflug, Direktflug ca. 11,5–12 Std.</span>')
F_asien['stops'] = F_asien['stops'].replace('Flug nach Changi, MRT', 'Direktflug Zürich–Singapur (ca. 12–13 Std.), MRT')
map_asien = ('<p class="intro">Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel. Mit der Maus über eine Linie oder Station fahren zeigt Details.</p>'
             '<div class="mapwrap">%s</div>%s') % (gen3.svgmap.build(gen3._dates), legend(['bus', 'train', 'ferry']))
sec_asien = trip_section('asien', hero(hero_img, WHEN, 'Von Singapur nach Bangkok', 'Fünf Wochen über Land und Wasser durch Singapur, Malaysia und Thailand, mit Dschungel, Inseln und Grossstadt.', F_asien['chain']),
    'Abflug ab Zürich am Fr, 18.06.2027 um 22 Uhr, Rückflug ab Bangkok am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.',
    F_asien, map_asien, 'Zehn Stationen von Singapur bis Bangkok. Über jeder Station steht, wie ihr dorthin kommt.',
    'Rückflug ab Bangkok nach Zürich am Do, 22.07.2027 (Direktflug ca. 11,5–12 Std.).', BUD_INTRO, 'Einreise, Gesundheit, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.')

# ---------- Indonesien ----------
dates_bali = {re.sub(r'\s*\(.*\)', '', clean_title(t)[1]).split(' / ')[0]: fd(d.split(' · ')[0]) + ', ' + fdin(' · '.join(d.split(' · ')[1:])) for t, d, c, s, im in trip_bali.ST}
trip_bali.SG['rt'] = 'Direktflug Zürich–Singapur (ca. 12–13 Std.), MRT in die Stadt (ca. 30–40 Min.). Vor Ort MRT und Grab.'
BALI_FLUG = ('Flug ab und nach Zürich', 'Hinflug: Direktflug Zürich–Singapur ca. 12–13 Std. (Zeitverschiebung +6 Std.). Abflug am Fr, 18.06.2027 um 22 Uhr, Ankunft am Sa, 19.06.2027 am späten Nachmittag. Rückflug: Denpasar (Bali) hat keinen Direktflug nach Zürich. Mit einem Stopp (z.B. Singapur, Doha, Dubai oder Istanbul) dauert die Rückreise meist ca. 17–22 Std. inklusive Umstieg (Zeitverschiebung −6 Std.). Abflug am Do, 22.07.2027, Ankunft in Zürich meist am nächsten Tag. Flugzeiten bei der Buchung prüfen.')
F_bali = build_new('bali', trip_bali.ST, trip_bali.PLAN, trip_bali.MIX, trip_bali.NOTES, trip_bali.TIPS, trip_bali.BUDGET,
                   {'sg': 'Singapur', 'my': 'Malaysia', 'id': 'Indonesien'}, pre=trip_bali.PRE,
                   flight_in=('18.–19. Juni', 'Flug Zürich–Singapur', 'Abflug Fr, 18.06.2027 um 22 Uhr, Direktflug ca. 12–13 Std., Ankunft in Singapur am Sa, 19.06.2027'),
                   flight_out=('22. Juli', 'Flug Bali–Zürich', 'Rückflug ab Denpasar mit einem Stopp, ca. 17–22 Std.'))
F_bali['notes'] += '<p><b>%s</b>%s</p>' % BALI_FLUG
map_bali = ('<p class="intro">Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel. Die Stationen 8 bis 10 liegen eng beieinander auf Bali.</p>'
            '<div class="mapwrap wide">%s</div>%s') % (maps_new.bali(dates_bali), legend(['bus', 'train', 'ferry', 'air']))
sec_bali = trip_section('bali', hero('<img data-q="Mount Bromo sunrise|Tegalalang rice terrace|Pura Ulun Danu Bratan|Tanah Lot temple" data-kw="bromo|tegalalang|ulun danu|tanah lot" data-hero="1" alt="Landschaft in Indonesien">', WHEN, 'Von Singapur nach Bali',
    'Fünf Wochen durch Malaysia, Java und Bali: Vulkane, Tempel, Regenwald und Inseln.', F_bali['chain']),
    'Abflug ab Zürich am Fr, 18.06.2027 um 22 Uhr, Rückflug ab Bali (Denpasar) am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.',
    F_bali, map_bali, 'Zehn Stationen von Singapur bis Bali. Über jeder Station steht, wie ihr dorthin kommt.',
    'Rückflug ab Denpasar (Bali) nach Zürich am Do, 22.07.2027 (mit einem Stopp, ca. 17–22 Std.).', BUD_INTRO, TIPS_INTRO)

# ---------- USA ----------
USA_MAPS = maps_new.usa({})
dates_usa = {re.sub(r'\s*\(.*\)', '', clean_title(t)[1]).split(' / ')[0]: fd(d.split(' · ')[0]) + ', ' + fdin(' · '.join(d.split(' · ')[1:])) for t, d, c, s, im in trip_usa.ST}
USA_MAPS = maps_new.usa({'Las Vegas': dates_usa['Las Vegas'], 'Zion': dates_usa['Zion National Park'], 'Page': dates_usa['Page und Lake Powell'], 'Grand Canyon': dates_usa['Grand Canyon'],
    'Monument Valley': dates_usa['Monument Valley'], 'Santa Fe': dates_usa['Santa Fe'], 'White Sands': dates_usa['White Sands'], 'Chicago': dates_usa['Chicago'],
    'Sandusky': dates_usa['Sandusky und Cedar Point'], 'Niagara Falls': dates_usa['Niagara Falls'], 'Washington, D.C.': dates_usa['Washington, D.C.'], 'Philadelphia': dates_usa['Philadelphia'], 'New York': dates_usa['New York']})
USA_FLUG = ('Flug ab und nach Zürich', 'Hinflug: Zürich–Las Vegas ca. 12 Std. als Direktflug (nicht ganzjährig; mit Umstieg ca. 14–17 Std.). Abflug am Fr, 18.06.2027, Ankunft am selben Tag (Zeitverschiebung −9 Std.). Rückflug: New York–Zürich ca. 7,5–8 Std. als Nachtflug am Do, 22.07.2027 (Zeitverschiebung +6 Std.), Ankunft am nächsten Morgen. Direktflüge und Flugzeiten bei der Buchung prüfen.')
F_usa = build_new('usa', trip_usa.ST, trip_usa.PLAN, trip_usa.MIX, trip_usa.NOTES, trip_usa.TIPS, trip_usa.BUDGET, {'us': 'USA'},
                  flight_in=('18. Juni', 'Flug Zürich–Las Vegas', 'Abflug am Fr, 18.06.2027, Direktflug ca. 12 Std. (mit Umstieg ca. 14–17 Std.), Ankunft am selben Tag'), pre={'Chicago': ('Zwischenübernachtung in Oklahoma City', '1.–2. Juli')}, flight_out=('22. Juli', 'Flug New York–Zürich', 'Rückflug ab Newark oder John F. Kennedy, ca. 7,5–8 Std.'))
F_usa['notes'] += '<p><b>%s</b>%s</p>' % USA_FLUG
map_usa = ('<p class="intro">Ungefährer Verlauf der Fahrtwege: Mietwagen (inklusive 2-Tage-Roadtrip nach Chicago) und Amtrak im Osten. Darunter zwei Detailkarten.</p>'
           '<div class="mapwrap wide">%s</div>%s'
           '<p class="mapnote">Südwesten im Detail (Stationen 1 bis 7)</p><div class="mapwrap wide">%s</div>'
           '<p class="mapnote">Osten im Detail (Stationen 8 bis 13)</p><div class="mapwrap wide">%s</div>') % (USA_MAPS['overview'], legend(['car', 'train']), USA_MAPS['sw'], USA_MAPS['ne'])
sec_usa = trip_section('usa', hero('<img src="%s?width=2400" srcset="%s?width=1280 1280w, %s?width=1920 1920w, %s?width=2560 2560w" sizes="100vw" data-file="USA 10187 Horseshoe Bend Luca Galuzzi 2007.jpg" data-q="Horseshoe Bend Arizona|Monument Valley sunset" data-kw="horseshoe bend|monument valley" data-hero="1" alt="Horseshoe Bend, Arizona" fetchpriority="high">' % ((FP,)*4), WHEN, 'Von Las Vegas nach New York',
    'Fünf Wochen quer durch die USA: Nationalparks im Südwesten, Chicago und die Grossen Seen, Niagarafälle, Washington und New York.', F_usa['chain']),
    'Abflug ab Zürich am Fr, 18.06.2027, Rückflug ab New York am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.',
    F_usa, map_usa, 'Dreizehn Stationen von Las Vegas bis New York. Über jeder Station steht, wie ihr dorthin kommt.',
    'Rückflug ab New York nach Zürich am Do, 22.07.2027 (ca. 7,5–8 Std.).', BUD_INTRO, TIPS_INTRO, mix_intro='Nach langen Fahrtagen jeweils einen ruhigen Tag einplanen.')

START = start_page.build(gen3.budget_html, trip_bali, trip_usa)

JS = r'''(function(){
var used={};
var BAD=/\b(map|locator|flag|logo|diagram|plan|icon|coat of arms|chart|poster|stamp|sign|svg|drawing|sketch|engraving|lithograph)\b/i;
function norm(t){return t.toLowerCase().replace(/[_\-]/g,' ');}
function okKw(title,kw){var t=norm(title);return kw.split('|').some(function(k){return t.indexOf(norm(k).trim())>=0;});}
function search(q,kw,qi,hero,minw){
 if(qi)q+=' haswbstatement:P6731=Q63348049|P6731=Q63348069';
 var u='https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=40&gsrsearch='+encodeURIComponent(q+' filetype:bitmap')+'&prop=imageinfo&iiprop=url|mime|size&iiurlwidth='+(hero?2560:1280);
 return fetch(u).then(function(r){return r.ok?r.json():null;}).then(function(d){
  if(!d||!d.query)return null;
  var pages=Object.keys(d.query.pages).map(function(k){return d.query.pages[k];}).sort(function(a,b){return a.index-b.index;});
  for(var i=0;i<pages.length;i++){var p=pages[i],ii=p.imageinfo&&p.imageinfo[0];
   if(!ii||ii.mime!=='image/jpeg'||BAD.test(p.title))continue;
   if(ii.width<(hero?3000:(minw||1000))||ii.width<ii.height*(hero?1.3:1))continue;
   if(kw&&!okKw(p.title,kw))continue;
   if(used[ii.url])continue;
   used[ii.url]=1;return {src:ii.thumburl||ii.url,alt:p.title.replace(/^File:/,'').replace(/\.[a-z]+$/i,'')};}
  return null;});
}
function wp(base,kw){
 var i=0;
 return (function nx(){
  if(i>=base.length)return Promise.resolve(null);
  var q=base[i++];
  var u='https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrlimit=3&gsrsearch='+encodeURIComponent(q)+'&prop=pageimages&piprop=thumbnail&pithumbsize=1280';
  return fetch(u).then(function(r){return r.ok?r.json():null;}).then(function(d){
   if(d&&d.query){
    var ps=Object.keys(d.query.pages).map(function(k){return d.query.pages[k];}).sort(function(a,b){return a.index-b.index;});
    for(var n=0;n<ps.length;n++){var p=ps[n],th=p.thumbnail&&p.thumbnail.source;
     if(!th||!/\.jpe?g(\?|$)/i.test(th)||used[th])continue;
     if(kw&&!okKw(p.title,kw))continue;
     used[th]=1;return {src:th,alt:p.title};}
   }
   return nx();
  }).catch(function(){return nx();});
 })();
}
function hide(img){var f=img.closest('figure');if(f)f.style.display='none';else img.remove();}
var queue=[],busy=0;
function next(){
 if(!queue.length){return;}
 var img=queue.shift();
 var base=img.dataset.q.split('|'),kw=img.dataset.kw||'',j=0,qs=[];
 var hero=img.hasAttribute('data-hero');
 qs.push([base[0],1,1000]);qs.push([base[0],0,1000]);
 if(base[1])qs.push([base[1],0,1000]);
 if(!hero)qs.push([base[0],0,600]);
 (function tryq(){
  if(j>=qs.length){
   wp(base,kw).then(function(h){if(h){img.src=h.src;img.title=h.alt;img.onerror=function(){hide(img);};}else hide(img);next();}).catch(function(){hide(img);next();});
   return;}
  var t=qs[j++];
  search(t[0],kw,t[1],hero,t[2]).then(function(h){
   if(h){img.src=h.src;img.title=h.alt;img.onerror=function(){hide(img);};next();}
   else tryq();
  }).catch(function(){hide(img);next();});
 })();
}
var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);queue.push(e.target);next();}});},{rootMargin:'900px 0px'}):null;
window.__loadImgs=function(root){
 [].slice.call(root.querySelectorAll('img[data-file]')).forEach(function(i){if(!i.__f){i.__f=1;i.onerror=function(){if(i.dataset.q&&!i.__q){i.__q=1;i.removeAttribute('srcset');i.removeAttribute('src');queue.push(i);next();}else hide(i);};}});
 [].slice.call(root.querySelectorAll('img[data-q]')).forEach(function(i){if(!i.getAttribute('src')&&!i.__q){i.__q=1;if(io&&!i.closest('.hero'))io.observe(i);else queue.push(i);}});
 for(var k=0;k<6;k++)next();
};
var trips=['start','asien','bali','usa'];
var titles={start:'Übersicht',asien:'Singapur–Bangkok',bali:'Singapur–Bali',usa:'Las Vegas–New York'};
function show(k){
 trips.forEach(function(t){document.getElementById('trip-'+t).hidden=(t!==k);});
 [].slice.call(document.querySelectorAll('.gnav a[data-trip]')).forEach(function(a){a.classList.toggle('on',a.dataset.trip===k);});
 document.title=k==='start'?'Familienreise 2027':'Familienreise 2027 · '+titles[k];
 window.__loadImgs(document.getElementById('trip-'+k));
}
var cur=null;
function route(){
 var h=location.hash.replace('#','');
 var k=null;trips.forEach(function(t){if(h===t||h.indexOf(t+'-')===0)k=t;});
 if(!k)k=cur||'start';
 if(k!==cur){show(k);cur=k;window.scrollTo(0,0);}
 if(h.indexOf('-')>0){var el=document.getElementById(h);if(el){setTimeout(function(){el.scrollIntoView();},30);setTimeout(function(){var t=el.getBoundingClientRect().top;if(t<0||t>260)el.scrollIntoView();},700);}}
 else if(h===k){window.scrollTo(0,0);}
}
window.addEventListener('hashchange',route);route();
})();'''

page = '''<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Familienreise 2027</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@400;600;700&display=swap" rel="stylesheet">
<style>%%CSS%%</style>
</head>
<body>
<nav class="gnav" aria-label="Reisen"><div class="wrap">
<a class="logo" href="#start" data-trip="start">Familienreise 2027</a>
<a href="#asien" data-trip="asien">Singapur–Bangkok</a>
<a href="#bali" data-trip="bali">Singapur–Bali</a>
<a href="#usa" data-trip="usa">Las Vegas–New York</a>
</div></nav>
%%START%%
%%ASIEN%%
%%BALI%%
%%USA%%
<footer><div class="wrap"><p>Bilder werden beim Öffnen von Wikimedia Commons geladen (Internetverbindung nötig); Urheber und Lizenzen siehe jeweilige Dateiseite. Alle Angaben zu Fahrplänen, Preisen, Einreiseregeln und Öffnungszeiten vor der Reise prüfen.</p></div></footer>
<script>%%JS%%</script>
</body>
</html>
'''
for k, v in {'CSS': CSS, 'START': START, 'ASIEN': sec_asien, 'BALI': sec_bali, 'USA': sec_usa, 'JS': JS}.items():
    page = page.replace('%%' + k + '%%', v)
open('index.html', 'w', encoding='utf-8').write(page)
print(len(page))
