#!/usr/bin/env python3
"""
Bettet alle Bilder aus index.html direkt in die Datei ein (Base64).
Ergebnis: index-offline.html, die Bilder ohne Internet und auch in Vorschauen anzeigt.

Nutzung (Python 3, keine Zusatzpakete nötig):
    python3 bilder-einbetten.py
Die Datei index.html muss im selben Ordner liegen.
"""
import base64, html, json, re, sys, time, urllib.parse, urllib.request

SRC, OUT = "index.html", "index-offline.html"
UA = {"User-Agent": "Reisefuehrer-Bildeinbettung/1.0 (privates Reiseprojekt)"}
BAD = re.compile(r"\b(map|locator|flag|logo|diagram|plan|icon|coat of arms|chart|poster|stamp|sign|svg|drawing|sketch|engraving|lithograph)\b", re.I)

def norm(t): return re.sub(r"[_\-]", " ", t.lower())

def get(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read(), r.headers.get("Content-Type", "image/jpeg")

QI = " haswbstatement:P6731=Q63348049|P6731=Q63348069"

def search(q, kw, used, hero=False):
    params = {"action": "query", "format": "json", "generator": "search", "gsrnamespace": "6",
              "gsrlimit": "40", "gsrsearch": q + " filetype:bitmap", "prop": "imageinfo",
              "iiprop": "url|mime|size", "iiurlwidth": "2560" if hero else "1280"}
    data, _ = get("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params))
    d = json.loads(data)
    pages = sorted(d.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 0))
    for p in pages:
        ii = (p.get("imageinfo") or [None])[0]
        if not ii or ii.get("mime") != "image/jpeg" or BAD.search(p["title"]):
            continue
        if ii.get("width", 0) < (3000 if hero else 1000) or ii["width"] < ii.get("height", 0) * (1.3 if hero else 1):
            continue
        if kw and not any(norm(k).strip() in norm(p["title"]) for k in kw.split("|")):
            continue
        if ii["url"] in used:
            continue
        used.add(ii["url"])
        return ii.get("thumburl") or ii["url"], p["title"]
    return None

def wikipedia_image(q, kw, used):
    params = {"action": "query", "format": "json", "generator": "search", "gsrlimit": "3", "gsrsearch": q,
              "prop": "pageimages", "piprop": "thumbnail", "pithumbsize": "1280"}
    try:
        data, _ = get("https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode(params))
    except Exception as e:
        return None
    d = json.loads(data)
    for p in sorted(d.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 0)):
        th = (p.get("thumbnail") or {}).get("source")
        if not th or not re.search(r"\.jpe?g(\?|$)", th, re.I) or th in used:
            continue
        if kw and not any(norm(k).strip() in norm(p["title"]) for k in kw.split("|")):
            continue
        used.add(th)
        return th, p["title"]
    return None

def main():
    page = open(SRC, encoding="utf-8").read()
    used, done, missing = set(), 0, []
    def embed_file(tag):
        nonlocal done
        src = html.unescape(re.search(r'src="([^"]*)"', tag).group(1))
        name = html.unescape(re.search(r'data-file="([^"]*)"', tag).group(1))
        try:
            data, ctype = get(src)
        except Exception as e:
            print("FEHLT", name, e); missing.append(name); return tag
        done += 1; print("OK  ", name)
        tag = re.sub(r'\s(srcset|sizes)="[^"]*"', '', tag)
        return re.sub(r'src="[^"]*"', 'src="data:%s;base64,%s"' % (ctype.split(";")[0], base64.b64encode(data).decode()), tag, 1)
    def repl(m):
        nonlocal done
        tag = m.group(0)
        if 'data-file="' in tag:
            return embed_file(tag)
        q = html.unescape(re.search(r'data-q="([^"]*)"', tag).group(1))
        kwm = re.search(r'data-kw="([^"]*)"', tag)
        kw = html.unescape(kwm.group(1)) if kwm else ""
        for alt in [a + QI for a in q.split("|")] + q.split("|"):
            try:
                hit = search(alt, kw, used, 'data-hero="1"' in tag)
            except Exception as e:
                print("  Fehler bei Suche:", alt, e); hit = None
            if hit:
                url, title = hit
                try:
                    data, ctype = get(url)
                except Exception as e:
                    print("  Fehler beim Laden:", url, e); continue
                b64 = base64.b64encode(data).decode()
                done += 1
                print("OK  ", alt, "->", title)
                time.sleep(0.3)
                return tag.replace("<img ", '<img src="data:%s;base64,%s" title="%s" ' % (ctype.split(";")[0], b64, html.escape(title)), 1)
        for alt in q.split("|"):
            hit = wikipedia_image(alt, kw, used)
            if hit:
                url, title = hit
                try:
                    data, ctype = get(url)
                except Exception as e:
                    continue
                done += 1
                print("OK (Wikipedia)", alt, "->", title)
                return tag.replace("<img ", '<img src="data:%s;base64,%s" title="%s" ' % (ctype.split(";")[0], base64.b64encode(data).decode(), html.escape(title)), 1)
        missing.append(q)
        print("FEHLT", q)
        return tag
    page = re.sub(r"<img [^>]*data-(?:q|file)=\"[^\"]*\"[^>]*>", repl, page)
    open(OUT, "w", encoding="utf-8").write(page)
    print("\n%d Bilder eingebettet, %d nicht gefunden. Gespeichert als %s" % (done, len(missing), OUT))

if __name__ == "__main__":
    sys.exit(main())
