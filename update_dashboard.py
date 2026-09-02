import re
import base64
import zlib
import urllib.parse

with open("User_Dashboard.html", "r") as f:
    content = f.read()

# Let's see the settings block in User_Dashboard.html
start = content.find('<div class="space-y-6">')
end = content.find('</div>\n      </div>', start)

if start != -1 and end != -1:
    new_settings = """<div class="space-y-6">
            <div class="text-[13px] text-slate-500 text-center py-8">
              Personal information management has been restricted by the administrator.
            </div>
         """
    new_content = content[:start] + new_settings + content[end:]
    with open("User_Dashboard.html", "w") as f:
        f.write(new_content)
    print("Updated User_Dashboard.html.")
else:
    print("Could not find the block in User_Dashboard.html.")

