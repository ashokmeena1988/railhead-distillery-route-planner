# LOGISTICS INTELLIGENCE SYSTEM — v18

## What was fixed

### Route Planner / Map
- Fixed the Mappls Polyline parameter from `path` to the Mappls SDK's documented `paths` property. This is the key fix for the issue where routing API returned valid routes but the map showed no actual road line.
- Added a Google-Maps-style route rendering approach:
  - selected route = stronger, thicker colored line
  - alternative routes = thinner colored lines
  - white route casing separates routes from the map background
  - all returned alternatives remain visible
  - clicking a route line selects/highlights that route
- Route distance/time badges are compact and positioned along the route rather than appearing as large floating boxes.
- Alternative route badges are staggered to reduce overlap.
- Route endpoint markers remain available.
- Existing route summary, turn-by-turn details, route alternatives and Fit Route behavior retained.

### Branding / UI
- Finalized `LOGISTICS INTELLIGENCE SYSTEM` header contrast.
- LI logo uses a green professional accent block.
- Header/search/navigation use a consistent white + green + slate color system.
- Existing sidebar and dashboard styling retained.

### Reports
- Restored normal page scrolling for report tables.
- Report headers remain sticky/frozen.
- No fixed-height report viewport that hides lower rows.

## Files
- `index.html`
- `app.js`
- `styles.css`

## Backend
No Cloudflare Worker changes are included in this package. Continue using the existing secure Mappls proxy.

## Validation
- JavaScript syntax check: passed with Node.js `node --check app.js`.
- Mappls documentation was checked for the Polyline API; its documented property is `paths` containing `{lat,lng}` points.
- Live GitHub Pages browser deployment was not performed from this environment.


## v21 Final Reports Correction

The Reports scrolling problem was traced to the application layout. The main
application viewport uses `overflow:hidden`; changing only the table's internal
overflow was therefore not a reliable fix.

v21 makes the Reports workspace itself the scroll viewport:

- mouse wheel / trackpad scrolling over the report moves the Reports workspace;
- all generated report rows remain in normal document flow;
- there is no fixed-height vertical table body;
- the report header remains sticky while the Reports workspace scrolls;
- horizontal overflow is handled by the same Reports workspace;
- a visible scrollbar is provided.

The Cloudflare Worker is not changed by this frontend update.
