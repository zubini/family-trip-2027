import json, math

GEO = 'geo/map.geo.json'
STY = {'bus': ('#1F9A8F', 3.2, ''), 'car': ('#1F9A8F', 3.2, ''), 'train': ('#0F4C55', 3.6, ''),
       'ferry': ('#E08A12', 3, '7 6'), 'air': ('#7A5CC7', 2.6, '2 7')}
NAME = {'bus': 'Bus, Minivan oder Taxi', 'car': 'Mietwagen', 'train': 'Zug', 'ferry': 'Fähre oder Boot', 'air': 'Flug'}


def make_proj(kind, lon0, lon1, lat0, lat1, width):
    if kind == 'albers':
        p1, p2, pl0, l0 = map(math.radians, (29.5, 45.5, 37.5, -96.0))
        n = (math.sin(p1) + math.sin(p2)) / 2
        C = math.cos(p1) ** 2 + 2 * n * math.sin(p1)
        r0 = math.sqrt(C - 2 * n * math.sin(pl0)) / n
        def raw(lat, lon):
            ph, la = math.radians(lat), math.radians(lon)
            rho = math.sqrt(C - 2 * n * math.sin(ph)) / n
            th = n * (la - l0)
            return rho * math.sin(th), -(r0 - rho * math.cos(th))
    else:
        def raw(lat, lon):
            return lon, -lat
    xs, ys = [], []
    for la in [lat0 + (lat1 - lat0) * i / 20 for i in range(21)]:
        for lo in [lon0 + (lon1 - lon0) * j / 20 for j in range(21)]:
            x, y = raw(la, lo); xs.append(x); ys.append(y)
    mnx, mxx, mny, mxy = min(xs), max(xs), min(ys), max(ys)
    S = width / (mxx - mnx)
    H = (mxy - mny) * S
    def proj(lat, lon):
        x, y = raw(lat, lon)
        return (x - mnx) * S, (y - mny) * S
    return proj, width, H


def build(cfg, segs, stops, labels, dates, hubs=(), trans=(), notes=()):
    proj, W, H = make_proj(cfg['proj'], cfg['lon0'], cfg['lon1'], cfg['lat0'], cfg['lat1'], cfg['width'])
    W, H = int(W), int(H)
    d = json.load(open(GEO))
    out = ['<svg viewBox="0 0 %d %d" role="img" aria-labelledby="mt" xmlns="http://www.w3.org/2000/svg"><title id="mt">%s</title>' % (W, H, cfg['title'])]
    out.append('<rect width="%d" height="%d" fill="#D7E9EE"/>' % (W, H))
    for f in d['features']:
        a3 = f['properties'].get('A3'); g = f['geometry']
        P = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
        cls = cfg['countries'].get(a3)
        for poly in P:
            ring = poly[0]
            pts = [proj(y, x) for x, y in ring]
            if not any(-60 <= px <= W + 60 and -60 <= py <= H + 60 for px, py in pts):
                continue
            path = ''
            for r in poly:
                path += 'M' + ' L'.join('%.0f,%.0f' % proj(y, x) for x, y in r[::cfg.get('step', 1)]) + 'Z'
            out.append('<path class="%s" fill-rule="evenodd" d="%s"/>' % (cls or 'lo', path))
    for t, lat, lon, cls, rot in labels:
        x, y = proj(lat, lon)
        r = ' transform="rotate(%d %.1f %.1f)"' % (rot, x, y) if rot else ''
        out.append('<text class="%s" x="%.1f" y="%.1f" text-anchor="middle"%s>%s</text>' % (cls, x, y, r, t))
    for m, t, c in segs:
        col, w, da = STY[m]
        p = ' '.join('%.1f,%.1f' % proj(*q) for q in c)
        out.append('<polyline points="%s" fill="none" stroke="#fff" stroke-width="%.1f" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>' % (p, w + 3))
        out.append('<polyline points="%s" fill="none" stroke="%s" stroke-width="%.1f" stroke-linecap="round" stroke-linejoin="round"%s><title>%s: %s</title></polyline>' % (p, col, w, ' stroke-dasharray="%s"' % da if da else '', NAME[m], t))
    for name, c, al, dy in trans:
        x, y = proj(*c)
        out.append('<g><title>Zwischenübernachtung %s</title><circle cx="%.1f" cy="%.1f" r="6" fill="#fff" stroke="#718096" stroke-width="2.5"/></g>' % (name, x, y))
        out.append('<text class="tl" x="%.1f" y="%.1f">%s</text>' % (x + 10, y + 4 + dy, name))
    for name, c, al in hubs:
        x, y = proj(*c)
        out.append('<g><title>Umstieg: %s</title><circle cx="%.1f" cy="%.1f" r="4.5" fill="#fff" stroke="#718096" stroke-width="2"/></g>' % (name, x, y))
        out.append('<text class="tl" x="%.1f" y="%.1f" text-anchor="%s">%s</text>' % (x + (9 if al == 'r' else -9), y + 4, 'start' if al == 'r' else 'end', name))
    for n, name, c, al in stops:
        x, y = proj(*c)
        if cfg.get('small'):
            out.append('<g><title>%s. %s: %s</title><circle cx="%.1f" cy="%.1f" r="5.5" fill="#0F4C55" stroke="#fff" stroke-width="2"/></g>' % (n, name, dates.get(name, ''), x, y))
            continue
        R = 12 if len(n) <= 2 else 19
        out.append('<g><title>%s. %s: %s</title><circle cx="%.1f" cy="%.1f" r="%d" fill="#0F4C55" stroke="#fff" stroke-width="2.5"/><text class="%s" x="%.1f" y="%.1f" text-anchor="middle">%s</text></g>' % (n, name, dates.get(name, ''), x, y, R, 'nm' if len(n) <= 2 else 'nm2', x, y + (4.2 if len(n) <= 2 else 3.6), n))
        tx = x + R + 5 if al == 'r' else x - R - 5
        ty = y + 5 if al in ('r', 'l') else (y - R - 6 if al == 'u' else y + R + 15)
        anc = 'start' if al == 'r' else ('end' if al == 'l' else 'middle')
        if al in ('u', 'd'): tx = x
        out.append('<text class="sl" x="%.1f" y="%.1f" text-anchor="%s">%s</text>' % (tx, ty, anc, name))
    for t, c, anc in notes:
        x, y = proj(*c)
        out.append('<text class="fl" x="%.1f" y="%.1f" text-anchor="%s">%s</text>' % (x, y, anc, t))
    out.append('</svg>')
    return '\n'.join(out)
