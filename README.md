# Ethanol Logistics Route Planner — GitHub Pages V3

This is the **GitHub-only static edition** of the Ethanol Logistics Route Planner.

## What works without a backend
- Mappls Web SDK / Directions Plugin (using a domain-restricted Web Static Key)
- 23 seed locations: 9 railheads + 14 distilleries
- Route Planner and Distance Matrix UI
- Add/Edit/Delete location workflow
- CSV/JSON/XLSX import/export from the browser
- Browser-local persistence using IndexedDB
- Local administrator login using Web Crypto PBKDF2
- 8-hour browser session
- Local audit history
- Downloadable local JSON backup
- Admin-style Security Center

## Important security limitation
GitHub Pages is a static hosting service. It cannot provide true server-side authentication, hide a secret API token, enforce server-side roles, create an immutable audit trail, or provide centralized multi-user data storage.

Therefore this edition is a **client-only security layer**, not a substitute for a departmental backend. Anyone with access to the browser and its site storage can potentially clear or modify local data. For real production security, use a backend + database + server-side authentication.

## Mappls key
Use a Mappls **Web Static Key restricted to `ashokmeena1988.github.io`**. The application does not hard-code the key into this repository. By default it is kept in the current browser session. The optional "Remember key" setting stores it locally; keep that option OFF on shared computers.

## GitHub Pages deployment
1. Replace the repository root `index.html` with this file.
2. Commit to `main`.
3. GitHub → Settings → Pages → Deploy from branch → `main` / root.
4. Open the GitHub Pages HTTPS URL.
5. First visit creates the local administrator account.

## Backup
Use **Provider → GitHub Security Center → Download Local Backup** regularly. This backup is browser-local and is not a server backup.
