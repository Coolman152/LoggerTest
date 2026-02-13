Logger v0.0.1 — Working Consistent Pack (based on v9)

Fixes your current crash:
  ReferenceError: genInterior is not defined

Reason:
- v10 referenced genInterior but forgot to define it.
- This pack uses the last known build that includes genInterior.

Changes:
- Title set to Logger v0.0.1
- Three.js loaded from jsDelivr (works on your network)
- Save keys renamed to logger_save_0_0_1
- favicon 404 prevented

Upload these files to your GitHub repo ROOT:
- index.html
- style.css
- main.js
