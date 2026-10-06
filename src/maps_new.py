import svgmap2

# ---------------- Indonesien ----------------
SG = (1.3521, 103.8198); MS = (2.4330, 103.8400); TI = (2.8200, 104.1700); KL = (3.1390, 101.6869); ML = (2.1896, 102.2501)
DU = (1.6700, 101.4500); PK = (0.5300, 101.4500); BU = (-0.3100, 100.3700); PD = (-0.9500, 100.3500)
JK = (-6.2000, 106.8500); YO = (-7.7900, 110.3600); MA = (-7.9800, 112.6300); BA = (-8.2200, 114.3700); GI = (-8.1700, 114.4400)
UB = (-8.5100, 115.2600); SN = (-8.6900, 115.2600); PN = (-8.7300, 115.5400); UL = (-8.8300, 115.0900); BALI = (-8.55, 115.2)

BALI_SEGS = [
 ("bus", "Singapur – Mersing", [SG, (1.4600, 103.7600), (1.7300, 103.9000), (2.2000, 103.8800), MS]),
 ("ferry", "Mersing – Pulau Tioman", [MS, (2.5800, 104.0200), TI]),
 ("bus", "Mersing – Kuala Lumpur", [MS, (2.0300, 103.3200), (2.5100, 102.8200), (2.4700, 102.2300), (2.7200, 101.9400), KL]),
 ("air", "Kuala Lumpur – Jakarta", [KL, (-1.5000, 104.5000), JK]),
 ("train", "Jakarta – Yogyakarta", [JK, (-6.5000, 107.7000), (-6.7100, 108.5600), (-7.4200, 109.2400), (-7.7000, 109.9000), YO]),
 ("train", "Yogyakarta – Malang", [YO, (-7.5700, 110.8200), (-7.6200, 111.5200), (-7.7000, 112.0000), MA]),
 ("bus", "Malang – Banyuwangi", [MA, (-7.9500, 113.2000), (-8.0700, 113.7000), (-8.1000, 114.1000), BA]),
 ("ferry", "Ketapang – Gilimanuk", [BA, (-8.2100, 114.3900), GI]),
 ("bus", "Gilimanuk – Ubud", [GI, (-8.3600, 114.6200), (-8.4600, 114.9000), (-8.5000, 115.1200), UB]),
 ("bus", "Ubud – Sanur", [UB, SN]),
 ("ferry", "Sanur – Nusa Penida", [SN, (-8.7300, 115.4500), PN]),
 ("bus", "Sanur – Uluwatu", [SN, (-8.7800, 115.1900), UL]),
]
BALI_STOPS = [('1', 'Singapur', SG, 'r'), ('2', 'Pulau Tioman', TI, 'r'), ('3', 'Kuala Lumpur', KL, 'l'), ('4', 'Jakarta', JK, 'u'), ('5', 'Yogyakarta', YO, 'd'),
 ('6', 'Bromo und Malang', MA, 'd'), ('7', 'Ijen und Banyuwangi', BA, 'u'), ('8–10', 'Ubud, Nusa Penida, Uluwatu', (-8.62, 115.30), 'd')]
BALI_TRANS = []
BALI_HUBS = [('Mersing', MS, 'l')]
BALI_LABELS = [('Sumatra', -1.9, 102.3, 'cn', 0), ('Java', -7.1, 108.2, 'cn', 0), ('Borneo', 0.3, 112.5, 'cn', 0), ('Malaysia', 4.6, 102.0, 'cn', 0),
 ('Javasee', -4.7, 110.3, 'sea', 0), ('Indischer Ozean', -9.2, 106.4, 'sea', 0), ('Strasse von Malakka', 2.9, 100.0, 'sea', -40), ('Südchinesisches Meer', 5.0, 106.4, 'sea', 0)]

def bali(dates):
    cfg = dict(proj='eq', lon0=98.0, lon1=118.6, lat0=-10.6, lat1=4.8, width=1000, title='Karte der Reiseroute von Singapur über Malaysia, Sumatra und Java nach Bali',
               countries={'SGP': 'lr', 'MYS': 'lr', 'IDN': 'lr'})
    return svgmap2.build(cfg, BALI_SEGS, BALI_STOPS, BALI_LABELS, dates, hubs=BALI_HUBS, trans=BALI_TRANS,
                         notes=[('Ankunft aus Zürich ✈', (1.0, 103.9), 'start'), ('Rückflug nach Zürich ✈', (-10.0, 115.3), 'middle')])

# ---------------- USA ----------------
LV = (36.17, -115.14); ZI = (37.30, -113.03); PG = (36.91, -111.46); GC = (36.06, -112.14); MV = (36.98, -110.11); SF = (35.69, -105.94)
WS = (32.82, -106.10); OK = (35.47, -97.52); CH = (41.88, -87.63); SA = (41.45, -82.71); NI = (43.09, -79.06); DC = (38.91, -77.04); PH = (39.95, -75.17); NY = (40.71, -74.01)

USA_SEGS = [
 ("car", "Las Vegas – Zion", [LV, (36.80, -114.07), (37.10, -113.58), (37.18, -113.29), ZI]),
 ("car", "Zion – Page", [ZI, (37.23, -112.68), (37.05, -112.53), PG]),
 ("car", "Page – Grand Canyon", [PG, (36.78, -111.58), (35.88, -111.41), (36.04, -111.83), GC]),
 ("car", "Grand Canyon – Monument Valley", [GC, (36.04, -111.83), (35.88, -111.41), (36.13, -111.24), (36.71, -110.26), MV]),
 ("car", "Monument Valley – Santa Fe", [MV, (36.60, -109.20), (36.79, -108.69), (36.73, -108.22), (36.30, -107.20), (35.31, -106.55), SF]),
 ("car", "Santa Fe – White Sands", [SF, (35.08, -106.65), (34.10, -106.90), (33.64, -105.88), (33.07, -106.02), (32.90, -106.00), WS]),
 ("car", "White Sands – Oklahoma City", [WS, (32.89, -105.96), (33.33, -105.67), (33.39, -104.52), (34.40, -103.20), (35.22, -101.83), (35.21, -100.25), (35.41, -99.40), OK]),
 ("car", "Oklahoma City – Chicago", [OK, (36.15, -95.99), (37.21, -93.29), (37.95, -91.77), (38.63, -90.20), (39.78, -89.65), (40.48, -88.99), CH]),
 ("car", "Chicago – Sandusky", [CH, (41.59, -87.30), (41.67, -86.25), (41.70, -84.90), (41.65, -83.54), SA]),
 ("car", "Sandusky – Niagara Falls", [SA, (41.50, -81.69), (42.13, -80.09), (42.65, -78.80), NI]),
 ("car", "Niagara Falls – Washington", [NI, (42.65, -78.80), (42.08, -78.43), (40.79, -77.86), (40.27, -76.88), (39.29, -76.61), DC]),
 ("train", "Washington – Philadelphia", [DC, (39.29, -76.61), (39.74, -75.55), PH]),
 ("train", "Philadelphia – New York", [PH, (40.22, -74.76), (40.50, -74.45), (40.73, -74.17), NY]),
]
USA_STOPS = [('1', 'Las Vegas', LV, 'l'), ('2', 'Zion', ZI, 'u'), ('3', 'Page', PG, 'r'), ('4', 'Grand Canyon', GC, 'l'), ('5', 'Monument Valley', MV, 'r'),
 ('6', 'Santa Fe', SF, 'r'), ('7', 'White Sands', WS, 'r'), ('8', 'Chicago', CH, 'l'), ('9', 'Sandusky', SA, 'd'), ('10', 'Niagara Falls', NI, 'u'),
 ('11', 'Washington, D.C.', DC, 'l'), ('12', 'Philadelphia', PH, 'd'), ('13', 'New York', NY, 'r')]
USA_HUBS = []
USA_TRANS = [('Oklahoma City', OK, 'r', 0)]
USA_LABELS = [('Pazifik', 35.5, -126.0, 'sea', 0), ('Atlantik', 36.0, -71.0, 'sea', 0), ('Golf von Mexiko', 26.5, -90.0, 'sea', 0),
 ('Kanada', 49.5, -100.0, 'cn', 0), ('Mexiko', 28.5, -104.5, 'cn', 0), ('USA', 38.0, -98.0, 'cn', 0)]

def usa(dates):
    base = dict(proj='albers', countries={'USA': 'lr', 'CAN': 'lo', 'MEX': 'lo'}, step=1)
    ov = dict(base, lon0=-124.5, lon1=-66.5, lat0=24.5, lat1=49.5, width=1100, small=True, title='Übersichtskarte der Reiseroute von Las Vegas nach New York')
    sw = dict(base, lon0=-117.5, lon1=-103.8, lat0=31.0, lat1=38.4, width=1000, title='Detailkarte Südwesten: Las Vegas bis White Sands')
    ne = dict(base, lon0=-91.2, lon1=-71.0, lat0=38.2, lat1=44.6, width=1000, title='Detailkarte Osten: Chicago bis New York')
    sw_stops = [s for s in USA_STOPS if int(s[0]) <= 7]
    ne_stops = [s for s in USA_STOPS if int(s[0]) >= 8]
    sw_segs = [x for x in USA_SEGS if x[1].split(' – ')[0] in ('Las Vegas', 'Zion', 'Page', 'Grand Canyon', 'Monument Valley', 'Santa Fe', 'White Sands')]
    ne_segs = [x for x in USA_SEGS if x[1].split(' – ')[0] in ('Chicago', 'Sandusky', 'Niagara Falls', 'Washington', 'Philadelphia')]
    sw_stops = [(n, nm, c, {'1': 'l', '2': 'u', '3': 'r', '4': 'l', '5': 'r', '6': 'r', '7': 'r'}[n]) for n, nm, c, al in sw_stops]
    ne_stops = [(n, nm, c, {'8': 'r', '9': 'd', '10': 'u', '11': 'l', '12': 'l', '13': 'r'}[n]) for n, nm, c, al in ne_stops]
    ov_labels = USA_LABELS + [('Südwesten', 32.9, -118.6, 'cn', 0), ('Osten', 36.4, -73.0, 'cn', 0)]
    return dict(
        overview=svgmap2.build(ov, USA_SEGS, USA_STOPS, USA_LABELS, dates, trans=USA_TRANS,
                               notes=[('Ankunft aus Zürich ✈', (33.6, -118.8), 'middle'), ('Rückflug nach Zürich ✈', (38.4, -69.2), 'middle')]),
        sw=svgmap2.build(sw, sw_segs, sw_stops, [], dates, notes=[('Roadtrip nach Chicago →', (32.3, -104.9), 'start')]),
        ne=svgmap2.build(ne, ne_segs, ne_stops, [], dates, notes=[('Rückflug nach Zürich ✈', (41.2, -72.0), 'end')]),
    )
