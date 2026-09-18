# Railhead–Distillery Route Planner — Security Hardened v3

## Files to upload to GitHub Pages

Replace the existing `index.html` and `app.js`, and replace `styles.css` with the supplied versions.

Required website files:
- `index.html`
- `app.js`
- `styles.css`

`SECURITY-HARDENING-README.md` is documentation only.

## v3 fixes

### Location → Map
- Location focus now preserves the selected location viewport.
- The Map View transition no longer immediately calls route/location `fitBounds` after a location was selected.
- The selected location receives a dedicated focus marker.
- The map center/zoom is re-applied after the layout transition to avoid the SDK moving the viewport away from the selected coordinates.

### Route Details
- The Map View now has a dedicated route-details overlay.
- It shows selected route, road distance, travel time and number of legs.
- Primary and returned alternative routes are listed directly on the map.
- Clicking an alternative route highlights that route and updates the route metrics and leg-wise details.
- The Route Planner's Available Routes cards and Map View route controls remain synchronized.
- Route details use the selected Mappls route's own distance/duration for the selected alternative.

### Security hardening retained
- Cloudflare Worker remains the routing/matrix proxy.
- No Mappls server API key is placed in the frontend.
- CSP remains enabled.
- Inline HTML `onclick` handlers remain removed.
- JSON import validation remains enabled.

## Important
Do not change the working Cloudflare Worker for this frontend update.

After deployment, hard-refresh the browser (`Cmd + Shift + R` on Mac) and test:
1. Map View
2. Route Planner
3. Locations → Map
4. Distance Matrix
5. Route Details
6. Primary/Alternative route selection
7. Import/Export
