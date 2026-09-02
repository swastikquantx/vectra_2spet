import re
import base64
import zlib
import json

with open("index.html", "r") as f:
    content = f.read()

m = re.search(r'const PAGES=({.*?});', content)
if not m:
    m = re.search(r'PAGES=({.*?});', content)

if m:
    pages_str = m.group(1)
    pages = {}
    for key_match in re.finditer(r'"(.*?)":\s*"(.*?)"', pages_str):
        name = key_match.group(1)
        b64 = key_match.group(2)
        try:
            decoded = zlib.decompress(base64.b64decode(b64), -zlib.MAX_WBITS).decode('utf-8')
            pages[name] = decoded
            with open(name, "w") as out:
                out.write(decoded)
        except Exception as e:
            print(f"Failed to decode {name}: {e}")
    print("Decoded pages.")
else:
    print("PAGES not found.")
