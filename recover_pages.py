import re, base64, zlib
with open("index_fixed.html", "r") as f:
    content = f.read()
m = re.search(r'const PAGES=({.*?});', content)
if not m: m = re.search(r'PAGES=({.*?});', content)
if m:
    pages_str = m.group(1)
    for key_match in re.finditer(r'"(.*?)":\s*"(.*?)"', pages_str):
        name = key_match.group(1)
        if name in ["About_Swastilk.html", "Auth-Genz-Registration.html"]:
            b64 = key_match.group(2)
            decoded = zlib.decompress(base64.b64decode(b64), -zlib.MAX_WBITS).decode('utf-8')
            with open(name, "w") as out:
                out.write(decoded)
            print(f"Recovered {name}")
