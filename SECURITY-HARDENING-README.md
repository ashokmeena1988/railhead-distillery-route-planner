# Railhead–Distillery Route Planner — Security Hardened v2

Files in this package:
- `index-hardened-v2.html` — hardened HTML shell and CSP
- `app.js` — extracted application JavaScript; inline event attributes removed
- `styles.css` — extracted CSS

## Changes
1. Added a Content Security Policy suitable for the current GitHub Pages + Mappls architecture.
2. Removed inline `onclick` HTML attributes and replaced them with delegated `data-action` handlers.
3. Moved inline JavaScript into `app.js`.
4. Moved inline CSS into `styles.css`.
5. Added `worker-src 'self' blob:` for Map SDK worker compatibility.
6. Added import validation: maximum 1 MB file, maximum 500 locations, allowed location types, coordinate ranges, name/ID length limits.
7. Kept the existing Cloudflare Worker URL and Route/Matrix architecture unchanged.

## Important remaining items
- The location/depot dataset is still embedded in the frontend. If it is internal/confidential, it must be moved behind an authenticated/protected data service; simply moving it to a public JSON file would not make it private.
- Cloudflare Worker rate limiting is still recommended.
- The XLSX dependency remains pinned to `0.18.5`; it is used for export. Consider replacing/upgrading it after functional testing.
- The CSP is delivered as an HTML meta policy because GitHub Pages does not provide application-level response-header configuration for this repository.

## Deployment
Replace the existing root `index.html` with `index-hardened-v2.html` renamed to `index.html`, and upload `app.js` and `styles.css` to the same repository root. Keep the existing data and other files unchanged.

After deployment, test: Map View, Route Planner, Distance Matrix (including 100-point matrix), Locations, Import/Export, Reports, language/theme controls, and matrix-cell route opening.
