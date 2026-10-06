import json, math
LON0,LON1,LAT0,LAT1=96.9,105.8,0.55,14.35
S=80.0
W=round((LON1-LON0)*S); Hh=round((LAT1-LAT0)*S)
def xy(lat,lon): return ((lon-LON0)*S,(LAT1-lat)*S)
def pt(lat,lon): x,y=xy(lat,lon); return '%.1f,%.1f'%(x,y)

SG=(1.3521,103.8198); ML=(2.1896,102.2501); KL=(3.1390,101.6869); KB=(5.8310,102.5600); PER=(5.9100,102.7400)
GT=(5.4164,100.3327); BW=(5.3990,100.3638); AR=(6.4330,100.2770); KP=(6.3989,100.1359)
KUAH=(6.3080,99.8510); CEN=(6.2903,99.7283); PB=(6.6620,100.3170); HY=(7.0035,100.4750)
STH=(9.1382,99.3215); KS=(8.9167,98.5333); KH=(9.2350,99.8590); DS=(9.3300,99.7200)
SMP=(9.5320,99.9330); SM=(9.5120,100.0136); MN=(9.5720,100.0010); TS=(9.7100,99.9850); TAO=(10.0870,99.8270)
CPP=(10.4290,99.2640); CPS=(10.4980,99.1800); HH=(12.5684,99.9577); BK=(13.7563,100.5018)
MS=(2.4330,103.8400); TI=(2.8200,104.1700)
SEGS=[
 ("bus","Singapur – Mersing",[SG,(1.4600,103.7600),(1.7300,103.9000),(2.2000,103.8800),MS]),
 ("ferry","Mersing – Pulau Tioman",[MS,(2.5800,104.0200),TI]),
 ("bus","Mersing – Kuala Lumpur",[MS,(2.0300,103.3200),(2.5100,102.8200),(2.4700,102.2300),(2.7200,101.9400),KL]),
 ("bus","Kuala Lumpur – Kuala Besut",[KL,(3.2500,101.7500),(3.5200,101.9100),(3.7900,101.8600),(4.1800,102.0500),(4.8800,101.9700),(5.5300,102.2000),(5.7700,102.2200),(5.7400,102.4900),KB]),
 ("ferry","Kuala Besut – Perhentian Islands",[KB,(5.8700,102.6500),PER]),
 ("bus","Kuala Besut – Penang (über Jeli und Gerik)",[KB,(5.7400,102.4900),(5.8000,102.1500),(5.7000,101.8400),(5.4300,101.1300),(5.6800,100.9200),(5.3600,100.5600),(5.3500,100.4200),(5.3550,100.3300),GT]),
 ("ferry","George Town – Butterworth",[GT,BW]),
 ("train","Butterworth – Padang Besar",[BW,(5.6470,100.4870),(5.8160,100.4720),(6.1210,100.3680),(6.1800,100.3700),AR,(6.5500,100.3000),PB]),
 ("train","Padang Besar – Hat Yai",[PB,(6.7200,100.4200),(6.8500,100.4500),HY]),
 ("bus","Hat Yai – Surat Thani – Khanom",[HY,(7.2000,100.3000),(7.6170,100.0740),(7.9000,99.8600),(8.1630,99.6800),(8.5000,99.4800),(8.8000,99.3600),STH,(9.1650,99.4700),(9.2200,99.6200),(9.2600,99.7600),KH]),
 ("bus","Khanom – Donsak",[KH,(9.2900,99.8000),DS]),
 ("ferry","Donsak – Koh Samui",[DS,(9.4000,99.8000),(9.4800,99.8800),SMP]),
 ("bus","Inselstrasse Koh Samui",[SMP,(9.5100,99.9600),SM,(9.5500,100.0050),MN]),
 ("ferry","Koh Samui – Koh Tao (über Koh Phangan)",[MN,(9.6500,99.9700),TS,(9.8000,99.9500),(9.9500,99.8800),TAO]),
 ("ferry","Koh Tao – Chumphon",[TAO,(10.1800,99.6500),(10.3200,99.4300),CPP]),
 ("bus","Hafen – Bahnhof Chumphon",[CPP,(10.4700,99.2200),CPS]),
 ("train","Chumphon – Hua Hin",[CPS,(10.7200,99.3000),(11.0000,99.4400),(11.2100,99.5100),(11.5000,99.6400),(11.8120,99.7970),(12.0700,99.8600),(12.3800,99.9100),HH]),
 ("train","Hua Hin – Bangkok",[HH,(12.8000,99.9600),(13.1110,99.9440),(13.5360,99.8170),(13.8199,100.0620),(13.8000,100.3000),BK]),
]
STY={'bus':('#1F9A8F',3.2,''),'train':('#0F4C55',3.6,''),'ferry':('#E08A12',3,'7 6')}
NAME={'bus':'Bus, Minivan oder Taxi','train':'Zug','ferry':'Fähre oder Boot'}
# (Nr, Name, Koordinate, Label-Ausrichtung)
STOPS=[('1','Singapur',SG,'r'),('2','Pulau Tioman',TI,'r'),('3','Kuala Lumpur',KL,'l'),('4','Perhentian Islands',PER,'r'),
 ('5','Penang',GT,'l'),('6','Khanom',KH,'r'),('7','Koh Samui',SM,'r'),
 ('8','Koh Tao',TAO,'r'),('9','Hua Hin',HH,'r'),('10','Bangkok',BK,'r')]
TRANS=[('Kuala Besut',KB,'r',14),('Hat Yai',HY,'r',0)]
HUBS=[('Mersing',MS,'l')]
def build(dates):
    d=json.load(open('geo/map.geo.json'))
    land=[]
    for f in d['features']:
        a3=f['properties'].get('A3'); g=f['geometry']
        P=g['coordinates'] if g['type']=='MultiPolygon' else [g['coordinates']]
        for poly in P:
            ring=poly[0]
            if not any(LON0-1<=x<=LON1+1 and LAT0-1<=y<=LAT1+1 for x,y in ring): continue
            path='M'+' L'.join(pt(y,x) for x,y in ring)+'Z'
            cls='lr' if a3 in ('SGP','MYS','THA') else 'lo'
            land.append('<path class="%s" d="%s"/>'%(cls,path))
    out=['<svg viewBox="0 0 %d %d" role="img" aria-labelledby="mt" xmlns="http://www.w3.org/2000/svg"><title id="mt">Karte der Reiseroute von Singapur nach Bangkok mit Bus-, Zug- und Fährstrecken</title>'%(W,Hh)]
    out.append('<rect width="%d" height="%d" fill="#D7E9EE"/>'%(W,Hh))
    out+=land
    def lab(t,lat,lon,cls,anchor='middle',rot=0):
        x,y=xy(lat,lon); r=' transform="rotate(%d %.1f %.1f)"'%(rot,x,y) if rot else ''
        return '<text class="%s" x="%.1f" y="%.1f" text-anchor="%s"%s>%s</text>'%(cls,x,y,anchor,r,t)
    out+= [lab('Malaysia',4.2,101.35,'cn'),lab('Thailand',13.2,99.25,'cn'),lab('Golf von Thailand',11.2,101.6,'sea'),
           lab('Andamanensee',7.6,97.75,'sea'),lab('Strasse von Malakka',4.0,99.75,'sea','middle',-55),lab("Südchinesisches Meer",5.2,104.7,"sea"),lab('Indonesien',1.2,100.6,'cn')]
    for m,t,c in SEGS:
        col,w,da=STY[m]; p=' '.join(pt(*q) for q in c)
        out.append('<polyline points="%s" fill="none" stroke="#fff" stroke-width="%.1f" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>'%(p,w+3))
        out.append('<polyline points="%s" fill="none" stroke="%s" stroke-width="%.1f" stroke-linecap="round" stroke-linejoin="round"%s><title>%s: %s</title></polyline>'%(p,col,w,' stroke-dasharray="%s"'%da if da else '',NAME[m],t))
    for name,c,al,dy in TRANS:
        x,y=xy(*c)
        out.append('<g><title>Zwischenübernachtung %s</title><circle cx="%.1f" cy="%.1f" r="6" fill="#fff" stroke="#718096" stroke-width="2.5"/></g>'%(name,x,y))
        out.append('<text class="tl" x="%.1f" y="%.1f">%s</text>'%(x+10,y+4+dy,name))
    for name,c,al in HUBS:
        x,y=xy(*c)
        out.append('<g><title>Umstieg Bus und Fähre: %s</title><circle cx="%.1f" cy="%.1f" r="4.5" fill="#fff" stroke="#718096" stroke-width="2"/></g>'%(name,x,y))
        out.append('<text class="tl" x="%.1f" y="%.1f" text-anchor="end">%s</text>'%(x-9,y+4,name))
    for n,name,c,al in STOPS:
        x,y=xy(*c)
        out.append('<g><title>%s. %s: %s</title><circle cx="%.1f" cy="%.1f" r="12" fill="#0F4C55" stroke="#fff" stroke-width="2.5"/><text class="nm" x="%.1f" y="%.1f" text-anchor="middle">%s</text></g>'%(n,name,dates.get(name,''),x,y,x,y+4.2,n))
        tx=x+17 if al=='r' else x-17
        out.append('<text class="sl" x="%.1f" y="%.1f" text-anchor="%s">%s</text>'%(tx,y+5,'start' if al=='r' else 'end',name))
    x,y=xy(*SG); out.append('<text class="fl" x="%.1f" y="%.1f" text-anchor="end">Ankunft aus Zürich ✈</text>'%(x-16,y+24))
    x,y=xy(*BK); out.append('<text class="fl" x="%.1f" y="%.1f" text-anchor="end">Rückflug nach Zürich ✈</text>'%(x-16,y-14))
    out.append('</svg>')
    return '\n'.join(out)
