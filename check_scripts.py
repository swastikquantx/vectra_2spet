import re
with open('index.html', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

scripts = re.findall(r'<script.*?>\s*(.*?)\s*</script>', content, re.DOTALL)
for i, s in enumerate(scripts):
    print(f"Script {i} length: {len(s)}")
    with open(f"script_{i}.js", "w", encoding='utf-8') as sf:
        sf.write(s)
