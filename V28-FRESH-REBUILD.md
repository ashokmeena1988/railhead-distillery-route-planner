# LOGISTICS INTELLIGENCE SYSTEM — v28 Fresh Rebuild

This package is a clean frontend rebuild from the v27 codebase, not another historical CSS patch stack.

## What changed
- Replaced the accumulated v15-v27 CSS override stack with one authoritative stylesheet.
- Removed the invalid `<style>` tag that had been embedded inside `styles.css`.
- Removed repeated `defer` attributes from `app.js` loading.
- Route rendering uses the documented Mappls Web JS Polyline `path` property only.
- Routing still requests `geometries=geojson`, `overview=full`, `steps=true`, and up to 2 alternatives.
- All returned route alternatives remain visible; selected route is highlighted.
- Depot-wise Distillery Report (normally 14 rows) is now normal document flow with no nested vertical scroll.
- Large 159-godown report tables retain their own vertical/horizontal scroll containers and sticky headers.
- Main Reports page remains the page-level vertical scroll container.
- Location InfoWindow remains compact and controlled.
- Distance Matrix, Locations, Import/Export, and the Cloudflare Worker are not intentionally changed.
- Asset cache version is 28.0.0.

## Verification
- `node --check app.js` must pass.
- No inline script handlers were introduced.
- No `eval()` or `new Function()` was introduced.
