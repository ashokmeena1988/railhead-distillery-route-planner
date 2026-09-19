# LOGISTICS INTELLIGENCE SYSTEM — v25

## Consolidated frontend update

- Route Planner restores the Map + Planner split view on desktop.
- Route distance/time now use the Mappls routing response actually plotted on the map.
- All returned route alternatives remain visible together.
- Selecting a route changes only styling/details; alternatives are not removed.
- Route geometry supports GeoJSON and fallback geometry formats.
- Polyline creation uses documented `path` with `paths` compatibility retry.
- Location and route endpoint pins use the controlled Mappls InfoWindow flow.
- Reports use isolated scrollable report-table containers with sticky headers.
- Distance Matrix, Locations, Import/Export and the secure Cloudflare Worker are retained.

### Deployment
Replace only `index.html`, `app.js`, and `styles.css` in GitHub Pages. Do not modify the Cloudflare Worker. After deployment, hard refresh with Command+Shift+R.
