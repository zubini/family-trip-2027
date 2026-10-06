import re, html as H
import gen2, json, svgmap
from route import SEGS
from imgs import IMGS,HERO
plan,S,tt=gen2.plan,gen2.S,gen2.tt

CSS=r'''
:root{--ink:#1C2B2D;--muted:#5B6B6E;--sea:#0F4C55;--lagoon:#1F9A8F;--mango:#F0A23B;--mist:#EEF4F3;--line:#D5E2E0;--card:#FFFFFF;
--sg:#B33A4B;--my:#2F4C9A;--th:#1F7F76}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:64px}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{margin:0;font-family:"Figtree",system-ui,-apple-system,"Segoe UI",sans-serif;font-size:16.5px;line-height:1.6;color:var(--ink);background:var(--mist)}
h1,h2,h3{font-family:"Bricolage Grotesque","Figtree",system-ui,sans-serif;line-height:1.1;margin:0}
a{color:var(--sea)}
:focus-visible{outline:3px solid var(--mango);outline-offset:2px}
.wrap{max-width:1040px;margin:0 auto;padding:0 20px}

/* Hero */
.hero{position:relative;min-height:78vh;display:flex;align-items:flex-end;color:#fff;background:var(--sea);overflow:hidden}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,76,85,.15) 0%,rgba(15,40,45,.35) 45%,rgba(10,30,34,.88) 100%)}
.hero .wrap{position:relative;z-index:1;padding-top:120px;padding-bottom:44px;width:100%}
.hero p.when{margin:0 0 10px;font-size:1rem;opacity:.9}
.hero h1{font-size:clamp(2.6rem,7vw,5.2rem);font-weight:800;letter-spacing:-.02em;max-width:12ch}
.hero p.sub{font-size:1.15rem;max-width:46ch;margin:16px 0 28px;opacity:.95}
.chain{display:flex;flex-wrap:wrap;align-items:center;gap:6px 0;padding:0;margin:0;list-style:none}
.chain li{display:flex;align-items:center;font-size:.9rem;font-weight:600;white-space:nowrap}
.chain li a{color:#fff;text-decoration:none;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,.14);backdrop-filter:blur(3px)}
.chain li a:hover{background:rgba(255,255,255,.28)}
.chain li+li::before{content:"";width:16px;height:2px;background:var(--mango);margin:0 2px}

/* Nav */
nav.top{position:sticky;top:0;z-index:1100;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
nav.top .wrap{display:flex;gap:4px;overflow-x:auto;padding-top:10px;padding-bottom:10px}
nav.top a{flex:none;text-decoration:none;color:var(--ink);font-weight:600;font-size:.95rem;padding:6px 12px;border-radius:8px}
nav.top a:hover{background:var(--mist);color:var(--sea)}
nav.top a.brand{font-family:"Bricolage Grotesque",sans-serif;color:var(--sea);margin-right:auto}

section{padding:64px 0}
section h2{font-size:clamp(1.8rem,3.6vw,2.6rem);font-weight:800;color:var(--sea);letter-spacing:-.01em}
section p.intro{color:var(--muted);max-width:62ch;margin:10px 0 28px}

/* Plan */
.plan{background:var(--card);border-radius:14px;overflow:hidden;border:1px solid var(--line)}
.prow{display:grid;grid-template-columns:270px 1fr 110px;gap:4px 16px;padding:12px 18px;border-top:1px solid var(--line);align-items:baseline}
.prow:first-child{border-top:0}
.prow .d{color:var(--muted);font-size:.92rem}
.prow .n{font-weight:700}
.prow .n a{color:var(--ink);text-decoration:none}
.prow .n a:hover{color:var(--sea);text-decoration:underline}
.prow .k{justify-self:end;font-weight:700;color:var(--sea);white-space:nowrap}
.prow .a{grid-column:2/4;color:var(--muted);font-size:.9rem}
.prow.tr{background:#F7FAF9}
.prow.tr .n{font-weight:600;color:var(--muted)}
.notes{display:grid;grid-template-columns:1fr;gap:14px;margin-top:22px;max-width:820px}
.notes p{margin:0;font-size:.94rem}
.notes b{display:block;color:var(--sea);margin-bottom:2px}

/* Map */
#rmap{height:680px;border-radius:14px;border:1px solid var(--line);z-index:0}
.lg{display:flex;flex-wrap:wrap;gap:6px 22px;font-size:.88rem;color:var(--muted);margin-top:10px}
.lg i{display:inline-block;width:28px;border-top:3px solid var(--sea);vertical-align:middle;margin-right:6px}
.lg i.lb{border-top-color:#1F9A8F}.lg i.lt{border-top-color:#0F4C55}.lg i.lf{border-top:3px dashed #E08A12}


.mapwrap{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:8px;max-width:600px}
.mapwrap svg{display:block;width:100%;height:auto;border-radius:8px}
.mapwrap .lr{fill:#F4F1E4;stroke:#B9B39A;stroke-width:.8}
.mapwrap .lo{fill:#ECECE6;stroke:#C9C9BF;stroke-width:.8}
.mapwrap .cn{font:600 15px "Figtree",system-ui,sans-serif;fill:#9A9580;letter-spacing:.05em}
.mapwrap .sea{font:italic 14px "Figtree",system-ui,sans-serif;fill:#6E98A6}
.mapwrap .sl{font:700 13px "Figtree",system-ui,sans-serif;fill:#1C2B2D;paint-order:stroke;stroke:#fff;stroke-width:3.5px;stroke-linejoin:round}
.mapwrap .tl{font:600 11.5px "Figtree",system-ui,sans-serif;fill:#5B6B6E;paint-order:stroke;stroke:#fff;stroke-width:3px}
.mapwrap .nm{font:800 12px "Figtree",system-ui,sans-serif;fill:#fff}
.mapwrap .fl{font:600 12px "Figtree",system-ui,sans-serif;fill:#5B6B6E;paint-order:stroke;stroke:#fff;stroke-width:3px}
.lg{display:flex;flex-wrap:wrap;gap:6px 22px;font-size:.9rem;color:var(--muted);margin-top:10px}
.lg i{display:inline-block;width:28px;border-top:3px solid;vertical-align:middle;margin-right:6px}
.lg i.lb{border-color:#1F9A8F}.lg i.lt{border-color:#0F4C55}.lg i.lf{border-top:3px dashed #E08A12}
.lg b.lz{display:inline-block;width:11px;height:11px;border-radius:50%;border:2.5px solid #718096;background:#fff;vertical-align:middle;margin-right:6px}
/* Mix */
.mix{display:grid;grid-template-columns:1fr;gap:12px;max-width:820px}
.mix div{background:var(--card);border-radius:12px;padding:16px;border-top:4px solid var(--lagoon)}
.mix h3{font-size:1.05rem;color:var(--sea);margin-bottom:6px}
.mix p{margin:0;font-size:.92rem;color:var(--muted)}

/* Stations timeline */
.stops{position:relative;padding-left:46px}
.stops::before{content:"";position:absolute;left:17px;top:6px;bottom:6px;width:3px;background:repeating-linear-gradient(var(--lagoon) 0 10px,transparent 10px 16px);border-radius:2px}
.leg{position:relative;display:flex;gap:10px;align-items:flex-start;margin:26px 0 14px;color:var(--muted);font-size:.92rem;max-width:72ch}
.leg .ic{position:absolute;left:-46px;top:-2px;width:38px;height:38px;border-radius:50%;background:var(--mist);border:2px solid var(--lagoon);display:grid;place-items:center;color:var(--sea)}
.leg .ic svg{width:20px;height:20px}
.leg b{color:var(--ink)}
.stop{position:relative;background:var(--card);border-radius:16px;padding:22px;border:1px solid var(--line)}
.stop .num{position:absolute;left:-46px;top:22px;width:38px;height:38px;border-radius:50%;background:var(--sea);color:#fff;display:grid;place-items:center;font-weight:800;font-family:"Bricolage Grotesque",sans-serif;font-size:1.05rem;box-shadow:0 0 0 4px var(--mist)}
.shead{display:flex;flex-wrap:wrap;align-items:flex-start;gap:8px 14px;margin-bottom:16px}
.shead h3{font-size:clamp(1.5rem,3vw,2rem);font-weight:800;flex:1 1 auto}
.shead .when{flex-basis:100%;order:3;color:var(--muted);margin:0;font-size:.95rem}
.shead .when b{color:var(--ink);background:#FFF1DB;border-radius:6px;padding:1px 7px;margin-left:4px;font-weight:700}
.tag{font-size:.8rem;font-weight:700;color:#fff;padding:3px 10px;border-radius:999px;align-self:center}
.tag.sg{background:var(--sg)}.tag.my{background:var(--my)}.tag.th{background:var(--th)}
.gal{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:130px;gap:8px;margin-bottom:18px}
.gal figure{margin:0;position:relative;overflow:hidden;border-radius:10px;background:var(--mist)}
.gal figure:first-child{grid-column:1/3;grid-row:1/3}
.gal img{width:100%;height:100%;object-fit:cover;display:block}
.gal figcaption{position:absolute;left:8px;bottom:8px;background:rgba(15,40,45,.72);color:#fff;font-size:.78rem;font-weight:600;padding:2px 8px;border-radius:6px}
.lead{font-size:1.05rem;max-width:68ch;margin:0 0 16px}
.teen{background:#FFF6E8;border-left:5px solid var(--mango);border-radius:10px;padding:12px 16px;margin-bottom:16px}
.teen h4{margin:0 0 4px;font-size:1rem;color:#8A5410}
.teen p{margin:0}
.facts{list-style:none;padding:0;margin:0 0 14px;display:grid;gap:8px}
.facts li{padding-left:16px;position:relative;max-width:72ch}
.facts li::before{content:"";position:absolute;left:0;top:.65em;width:7px;height:7px;border-radius:50%;background:var(--lagoon)}
.more{margin:0;font-size:.93rem;color:var(--muted);border-top:1px dashed var(--line);padding-top:12px}
.more b{color:var(--ink)}
.warn{margin-top:12px;background:#FDF0EE;border-left:5px solid #C2523D;border-radius:10px;padding:10px 14px;font-size:.92rem;color:#6E2A1D}
.arrive{margin:26px 0 0;color:var(--muted);font-size:.95rem}

/* Budget */
.btot{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 18px;background:var(--sea);color:#fff;border-radius:14px;padding:22px 24px;margin-bottom:18px}
.btot strong{font-family:"Bricolage Grotesque",sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:800}
.btot span{opacity:.9}
.tbl{overflow-x:auto;background:var(--card);border-radius:14px;border:1px solid var(--line);margin-bottom:16px}
table.pl{width:100%;border-collapse:collapse;font-size:.92rem;min-width:560px}
table.pl th{text-align:left;padding:10px 14px;background:#F7FAF9;color:var(--muted);font-weight:600;border-bottom:1px solid var(--line)}
table.pl td{padding:10px 14px;border-bottom:1px solid var(--line);vertical-align:top}
table.pl tr:last-child td{border-bottom:0}
table.pl td:nth-child(2),table.pl td:nth-child(3){white-space:nowrap}
.bnotes{font-size:.93rem;color:var(--muted);padding-left:18px}

/* Tipps */
.tips{display:grid;grid-template-columns:1fr;gap:10px;max-width:820px}
details{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:0 16px}
summary{cursor:pointer;font-weight:700;padding:14px 0;color:var(--sea);list-style:none;display:flex;justify-content:space-between;gap:10px}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";font-size:1.3rem;line-height:1;color:var(--lagoon)}
details[open] summary::after{content:"–"}
details p{margin:0 0 14px;font-size:.94rem}

footer{background:var(--sea);color:#D9ECEA;font-size:.85rem;padding:30px 0}
footer p{margin:0;max-width:70ch}

@media (max-width:640px){
 body{font-size:16px}
 section{padding:46px 0}
 .prow{grid-template-columns:1fr 50px}.prow .d{grid-column:1/3}.prow .a{grid-column:1/3}
 .stops{padding-left:34px}.stops::before{left:11px}
 .leg .ic,.stop .num{left:-34px;width:28px;height:28px}.leg .ic svg{width:15px;height:15px}.stop .num{font-size:.9rem}
 .stop{padding:16px}
 .gal{grid-template-columns:1fr 1fr;grid-auto-rows:105px}.gal figure:first-child{grid-column:1/3;grid-row:span 2}
 .tbl{border:0;background:transparent;overflow:visible}
 table.pl{min-width:0}
 table.pl tr:first-child{display:none}
 table.pl,table.pl tbody,table.pl tr,table.pl td{display:block;width:100%}
 table.pl tr{background:var(--card);border:1px solid var(--line);border-radius:12px;margin-bottom:10px;padding:6px 0}
 table.pl td{border:0;padding:4px 14px;white-space:normal!important}
 table.pl td::before{content:attr(data-label);display:block;font-size:.78rem;color:var(--muted);font-weight:600}
 table.pl td:first-child{font-weight:700;color:var(--sea)}
 table.pl td:first-child::before{display:none}
}
'''

ICON={
'ship':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/><path d="M5 14l-1-4h16l-2 4"/><path d="M12 4v6M8 10V7h8v3"/></svg>',
'train':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M8 20l-2 2M16 20l2 2"/><circle cx="9" cy="13" r=".8"/><circle cx="15" cy="13" r=".8"/></svg>',
'bus':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="15" rx="2"/><path d="M4 11h16M7 18v2M17 18v2"/><circle cx="8" cy="14.5" r=".8"/><circle cx="16" cy="14.5" r=".8"/></svg>',
'plane':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14L3 11l1-2 7 1 5-6a1.5 1.5 0 0 1 2 2l-6 5 1 7-2 1-3-7z"/></svg>'}
def icon(t):
    if 'Flug' in t[:20]: return ICON['plane']
    if re.search(r'Fähre|Katamaran|Speedboot|Boot',t[:60]): return ICON['ship']
    if re.search(r'Zug|ETS',t[:40]): return ICON['train']
    return ICON['bus']

def clean_title(t):
    n,name=t.split('. ',1)
    return n, re.sub(r'\s*\((Start|Finale)\)','',name)
country=['sg','my','my','my','my','th','th','th','th','th']
cname={'sg':'Singapur','my':'Malaysia','th':'Thailand'}

def anchor(i): return 's%d'%(i+1)


import datetime as _dt
_MON={'Juni':6,'Juli':7}
_WD=['Mo','Di','Mi','Do','Fr','Sa','So']
def _f(d,m):
    x=_dt.date(2027,_MON[m],int(d)); return '%s, %02d.%02d.%d'%(_WD[x.weekday()],x.day,x.month,x.year)
def fd(t):
    m=re.fullmatch(r'\s*(\d+)\.(?: (\w+))?–(\d+)\. (\w+)\s*',t)
    if m:
        d1,m1,d2,m2=m.groups(); return _f(d1,m1 or m2)+' – '+_f(d2,m2)
    m=re.fullmatch(r'\s*(\d+)\. (\w+)\s*',t)
    if m: return _f(*m.groups())
    return t
def fdin(t):
    t=re.sub(r'(\d+)\.(?: (Juni|Juli))?–(\d+)\. (Juni|Juli)',lambda m:fd(m.group(0)),t)
    return re.sub(r'(?<![\d.])(\d+)\. (Juni|Juli)(?! 20)',lambda m:_f(m.group(1),m.group(2)),t)

# Hero chain
chain=''.join('<li><a href="#%s">%s</a></li>'%(anchor(i),H.escape(re.sub(r'\s*\(.*\)','',clean_title(t)[1].split(' / ')[0]))) for i,(t,_) in enumerate(tt))

# Plan rows
names={clean_title(t)[1].split(' / ')[0]:i for i,(t,_) in enumerate(tt)}
rows=['<div class="prow tr"><span class="d">'+fd('18.–19. Juni')+'</span><span class="n">Flug Zürich–Singapur</span><span class="k">–</span><span class="a">Ankunft in Singapur am Sa, 19.06.2027</span></div>']
for a,b,c,d in plan:
    if b.startswith('Zwischen'):
        rows.append('<div class="prow tr"><span class="d">%s</span><span class="n">%s</span><span class="k">%s %s</span><span class="a">%s</span></div>'%(fd(a),b,c,'Nacht' if c=='1' else 'Nächte',d))
    else:
        n,nm=b.split('. ',1)
        idx=int(n)-1
        rows.append('<div class="prow"><span class="d">%s</span><span class="n"><a href="#%s">%s. %s</a></span><span class="k">%s %s</span><span class="a">%s</span></div>'%(fd(a),anchor(idx),n,nm,c,'Nacht' if c=='1' else 'Nächte',d))
rows.append('<div class="prow tr"><span class="d">'+fd('22. Juli')+'</span><span class="n">Flug Bangkok–Zürich</span><span class="k">–</span><span class="a">Rückflug</span></div>')

# Stations
import urllib.parse
def fig(e):
    c,q,kw=e[0],e[1],e[2]
    if len(e)>3:
        u='https://commons.wikimedia.org/wiki/Special:FilePath/'+urllib.parse.quote(e[3].replace(' ','_'))+'?width=1280'
        return '<figure><img src="%s" loading="lazy" alt="%s" data-file="%s"><figcaption>%s</figcaption></figure>'%(u,H.escape(c,quote=True),H.escape(e[3],quote=True),c)
    return '<figure><img data-q="%s" data-kw="%s" alt="%s"><figcaption>%s</figcaption></figure>'%(H.escape(q,quote=True),H.escape(kw,quote=True),H.escape(c,quote=True),c)
st=[]
for i,s in enumerate(S):
    n,name=clean_title(s['t'])
    when=s['d'].split(' · ')
    datepart=fd(when[0])+', '; nights=fdin(' · '.join(when[1:]))
    rt=s['rt']
    pre=''
    if 'Khanom' in name: pre='<b>Zwischenstopp in Hat Yai</b> ('+fd('6.–7. Juli')+', 1 Nacht). '
    if 'Perhentian' in name: pre='<b>Zwischenstopp in Kuala Besut</b> ('+fd('29.–30. Juni')+', 1 Nacht). '
    leg='<div class="leg"><span class="ic" aria-hidden="true">%s</span><p><b>Anreise:</b> %s%s</p></div>'%(icon(rt),pre,rt)
    figs=''.join(fig(e) for e in IMGS[i])
    teen=''; facts=[]
    for l in s['li']:
        m=re.match(r'<strong>Für Teens:</strong>\s*(.*)',l)
        if m: teen='<div class="teen"><h4>Für Teens</h4><p>%s</p></div>'%m.group(1)
        else: facts.append('<li>%s</li>'%l)
    warn=('<div class="warn">%s</div>'%s['wa']) if s.get('wa') else ''
    c=country[i]
    st.append('''%s<article class="stop" id="%s"><span class="num">%s</span>
<div class="shead"><h3>%s</h3><span class="tag %s">%s</span><p class="when">%s<b>%s</b></p></div>
<div class="gal">%s</div>
<p class="lead">%s</p>%s
<ul class="facts">%s</ul>
<p class="more"><b>Ausserdem sehenswert:</b> %s</p>%s
</article>'''%(leg,anchor(i),n,name,c,cname[c],datepart,nights,figs,s['de'],teen,''.join(facts),s['mo'],warn))

# Variety tiles
mix=''.join('<div><h3>%s</h3><p>%s</p></div>'%(a,b) for a,b in re.findall(r'<li><strong>(.*?):</strong>\s*(.*?)</li>',gen2.variety))
# Tips
tips=''.join('<details><summary>%s</summary><p>%s</p></details>'%(a,b) for a,b in re.findall(r'<li><strong>(.*?):</strong>\s*(.*?)</li>',gen2.gen_blk))
# Budget
b=gen2.budget
tot=re.search(r'<td><strong>Total</strong></td><td><strong>(.*?)</strong></td><td><strong>(.*?)</strong></td><td>(.*?)</td>',b)
tables=re.findall(r'<table class="pl">.*?</table>',b,re.S)
bnotes=re.findall(r'<li>(.*?)</li>',b)
def label(t):
    heads=re.findall(r'<th>(.*?)</th>',t)
    def row(m):
        cells=re.findall(r'<td>(.*?)</td>',m.group(0),re.S)
        if not cells:return m.group(0)
        return '<tr>'+''.join('<td data-label="%s">%s</td>'%(H.escape(re.sub('<[^>]+>','',heads[k]) if k<len(heads) else ''),c) for k,c in enumerate(cells))+'</tr>'
    return re.sub(r'<tr>.*?</tr>',row,t,flags=re.S)
tables=[label(t) for t in tables]
budget_html='''<div class="btot"><strong>%s CHF</strong><span>Planwert für 33 Nächte, 2 Erwachsene und 2 Teenager. Spanne %s CHF, %s.</span></div>
<div class="tbl">%s</div><div class="tbl">%s</div><ul class="bnotes">%s</ul>'''%(tot.group(2).replace('ca. ',''),tot.group(1),tot.group(3),tables[0],tables[1],''.join('<li>%s</li>'%x for x in bnotes))

NOTES=[("Gesamt","33 Nächte, 10 Stationen und zwei Zwischenübernachtungen (Kuala Besut, Hat Yai). Nur Hin- und Rückflug, alle Strecken dazwischen per Bus, Zug und Fähre. Die längsten Reisetage (Tioman–Kuala Lumpur, Kuala Lumpur–Kuala Besut, Perhentian–Penang, Penang–Hat Yai, Koh Tao–Hua Hin) dauern ca. 5–9 Stunden."),
("Vorab buchen","Bus nach Mersing und Fähre nach Tioman, Bus nach Kuala Besut, Unterkunft auf Tioman und den Perhentians, ETS-Zug und Katamarane Samui–Tao–Chumphon online reservieren und Fahrpläne prüfen. Lange Reisetage früh am Morgen starten."),
("Optional","Ipoh (Höhlentempel, zwischen Kuala Lumpur und Penang), Koh Phangan (zwischen Samui und Tao), Kanchanaburi (Brücke am Kwai, Erawan-Wasserfälle, ab Bangkok).")]
notes_html=''.join('<p><b>%s</b>%s</p>'%x for x in NOTES)

page='''<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Familienreise: Singapur bis Bangkok</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@400;600;700&display=swap" rel="stylesheet">
<style>%%CSS%%</style>
</head>
<body>
<header class="hero">
<img src="https://commons.wikimedia.org/wiki/Special:FilePath/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore1.jpg?width=2400" srcset="https://commons.wikimedia.org/wiki/Special:FilePath/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore1.jpg?width=1280 1280w, https://commons.wikimedia.org/wiki/Special:FilePath/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore1.jpg?width=1920 1920w, https://commons.wikimedia.org/wiki/Special:FilePath/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore1.jpg?width=2560 2560w" sizes="100vw" data-file="Supertree Grove, Gardens by the Bay, Singapore1.jpg" alt="Supertree Grove bei Nacht, Singapur" fetchpriority="high">
<div class="wrap">
<p class="when">Fr, 18.06.2027 bis Do, 22.07.2027, 2 Erwachsene, 2 Kids</p>
<h1>Von Singapur nach Bangkok</h1>
<p class="sub">Fünf Wochen über Land und Wasser durch Singapur, Malaysia und Thailand, mit Dschungel, Inseln und Grossstadt.</p>
<ol class="chain">%%CHAIN%%</ol>
</div>
</header>
<nav class="top" aria-label="Abschnitte"><div class="wrap">
<a class="brand" href="#">Singapur–Bangkok</a><a href="#plan">Reiseplan</a><a href="#karte">Karte</a><a href="#stationen">Stationen</a><a href="#budget">Budget</a><a href="#tipps">Tipps</a>
</div></nav>
<main>
<section id="plan"><div class="wrap">
<h2>Reiseplan</h2>
<p class="intro">Abflug ab Zürich am Fr, 18.06.2027 um 22 Uhr, Rückflug ab Bangkok am Do, 22.07.2027. Ein Klick auf eine Station springt zur Beschreibung.</p>
<div class="plan">%%ROWS%%</div>
<div class="notes">%%NOTES%%</div>
</div></section>

<section id="karte" style="padding-top:0"><div class="wrap">
<h2>Die Route auf der Karte</h2>
<p class="intro">Ungefährer Verlauf der Fahrtwege, eingefärbt nach Verkehrsmittel. Mit der Maus über eine Linie oder Station fahren zeigt Details.</p>
<div class="mapwrap">%%SVGMAP%%</div>
<div class="lg"><span><i class="lb"></i>Bus, Minivan, Taxi</span><span><i class="lt"></i>Zug</span><span><i class="lf"></i>Fähre, Boot</span><span><b class="lz"></b>Zwischenübernachtung</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap">
<h2>Abwechslung unterwegs</h2>
<p class="intro">Nach zwei aktiven Tagen jeweils einen ruhigen Tag einplanen.</p>
<div class="mix">%%MIX%%</div>
</div></section>
<section id="stationen" style="background:#E4EEEC"><div class="wrap">
<h2>Die Stationen</h2>
<p class="intro">Zehn Stationen von Singapur bis Bangkok. Über jeder Station steht, wie ihr dorthin kommt.</p>
<div class="stops">%%STOPS%%</div>
<p class="arrive">Rückflug ab Bangkok nach Zürich am Do, 22.07.2027.</p>
</div></section>
<section id="budget"><div class="wrap">
<h2>Budget</h2>
<p class="intro">Mittelklasse inklusive Flüge, Transport, Unterkunft, Verpflegung und Aktivitäten. Alle Beträge sind Schätzungen in CHF.</p>
%%BUDGET%%
</div></section>
<section id="tipps" style="padding-top:0"><div class="wrap">
<h2>Wichtige Hinweise</h2>
<p class="intro">Gesundheit, Einreise, Sicherheit und Praktisches für die Reise mit 2 Erwachsenen und 2 Kids.</p>
<div class="tips">%%TIPS%%</div>
</div></section>
</main>
<footer><div class="wrap"><p>Bilder werden beim Öffnen von Wikimedia Commons geladen (Internetverbindung nötig); Urheber und Lizenzen siehe jeweilige Dateiseite. Alle Angaben zu Fahrplänen, Preisen, Einreiseregeln und Öffnungszeiten vor der Reise prüfen.</p></div></footer>
<script>%%JS%%</script>
</body>
</html>
'''
NEWMAP=r'''(function(){
var D=%%MAPDATA%%;
var el=document.getElementById('rmap');
if(typeof L==='undefined'){el.innerHTML='<p style="padding:14px">Die Karte konnte nicht geladen werden. Dafür ist eine Internetverbindung nötig.</p>';return;}
var m=L.map('rmap',{scrollWheelZoom:false,zoomSnap:0.25});window._rmap=m;
var prov=[['https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}','Tiles &copy; Esri, HERE, Garmin, OpenStreetMap-Mitwirkende'],['https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}','Tiles &copy; Esri'],['https://tile.openstreetmap.org/{z}/{x}/{y}.png','&copy; OpenStreetMap-Mitwirkende']];
var pi=0,tl=null,errs=0,ok=0;
function useProv(){if(tl)m.removeLayer(tl);errs=0;ok=0;
 tl=L.tileLayer(prov[pi][0],{maxZoom:18,attribution:prov[pi][1]});
 tl.on('tileload',function(){ok++;});
 tl.on('tileerror',function(){errs++;if(errs>=4&&ok===0&&pi<prov.length-1){pi++;useProv();}});
 tl.addTo(m);}
useProv();
var ST={bus:{color:'#1F9A8F',weight:4,opacity:.9},train:{color:'#0F4C55',weight:4,opacity:.9},ferry:{color:'#E08A12',weight:3,opacity:.95,dashArray:'7 7'}};
var NM={bus:'Bus, Minivan oder Taxi',train:'Zug',ferry:'Fähre oder Boot'};
D.segs.forEach(function(s){L.polyline(s.c,ST[s.m]).addTo(m).bindTooltip(NM[s.m],{sticky:true});});
var b=[];
D.pts.forEach(function(p){
 var bg=p[4]==='H'?'#718096':'#0F4C55';
 var ic=L.divIcon({className:'',html:'<div style="background:'+bg+';color:#fff;border:2px solid #fff;border-radius:50%;width:26px;height:26px;line-height:22px;text-align:center;font:700 12px system-ui;box-shadow:0 1px 3px rgba(0,0,0,.4)">'+p[4]+'</div>',iconSize:[26,26],iconAnchor:[13,13]});
 L.marker([p[0],p[1]],{icon:ic,zIndexOffset:500}).addTo(m).bindPopup('<b>'+p[2]+'</b><br>'+p[3]);
 b.push([p[0],p[1]]);
});
m.fitBounds(b,{padding:[25,25]});
})();'''
NEWJS=r'''(function(){
var used={};
var BAD=/\b(map|locator|flag|logo|diagram|plan|icon|coat of arms|chart|poster|stamp|sign|svg|drawing|sketch|engraving|lithograph)\b/i;
function norm(t){return t.toLowerCase().replace(/[_\-]/g,' ');}
function okKw(title,kw){var t=norm(title);return kw.split('|').some(function(k){return t.indexOf(norm(k).trim())>=0;});}
function search(q,kw,qi){
 if(qi)q+=' haswbstatement:P6731=Q63348049|P6731=Q63348069';
 var u='https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=40&gsrsearch='+encodeURIComponent(q+' filetype:bitmap')+'&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=1280';
 return fetch(u).then(function(r){return r.ok?r.json():null;}).then(function(d){
  if(!d||!d.query)return null;
  var pages=Object.keys(d.query.pages).map(function(k){return d.query.pages[k];}).sort(function(a,b){return a.index-b.index;});
  for(var i=0;i<pages.length;i++){var p=pages[i],ii=p.imageinfo&&p.imageinfo[0];
   if(!ii||ii.mime!=='image/jpeg'||BAD.test(p.title))continue;
   if(ii.width<1000||ii.width<ii.height)continue;
   if(kw&&!okKw(p.title,kw))continue;
   if(used[ii.url])continue;
   used[ii.url]=1;return {src:ii.thumburl||ii.url,alt:p.title.replace(/^File:/,'').replace(/\.[a-z]+$/i,'')};}
  return null;});
}
function hide(img){var f=img.closest('figure');if(f)f.style.display='none';else img.remove();}
[].slice.call(document.querySelectorAll('img[data-file]')).forEach(function(i){i.onerror=function(){hide(i);};});
var imgs=[].slice.call(document.querySelectorAll('img[data-q]'));
var idx=0;
function next(){
 if(idx>=imgs.length)return;
 var img=imgs[idx++];
 if(img.getAttribute('src')){next();return;}
 var base=img.dataset.q.split('|'),kw=img.dataset.kw||'',j=0,qs=[];
 base.forEach(function(q){qs.push([q,1]);});base.forEach(function(q){qs.push([q,0]);});
 (function tryq(){
  if(j>=qs.length){hide(img);next();return;}
  var t=qs[j++];
  search(t[0],kw,t[1]).then(function(h){
   if(h){img.src=h.src;img.title=h.alt;img.onerror=function(){hide(img);};next();}
   else tryq();
  }).catch(function(){hide(img);next();});
 })();
}
for(var k=0;k<4;k++)next();
})();'''
_dates={re.sub(r'\s*\(.*\)','',t.split('. ',1)[1]).split(' / ')[0]: fd(d.split(' · ')[0])+', '+fdin(' · '.join(d.split(' · ')[1:])) for t,d in tt}
_dates['Penang']=_dates.get('Penang')
rep={'SVGMAP':svgmap.build(_dates),'HQ':HERO[0],'HK':HERO[1],'CSS':CSS,'CHAIN':chain,'ROWS':''.join(rows),'NOTES':notes_html,'MIX':mix,'STOPS':''.join(st),'BUDGET':budget_html,'TIPS':tips,'JS':NEWJS}
for k,v in rep.items(): page=page.replace('%%'+k+'%%',v)
for f in ['index.html']:
    open('build/asien-nur.html','w',encoding='utf-8').write(page)
print(len(page))
