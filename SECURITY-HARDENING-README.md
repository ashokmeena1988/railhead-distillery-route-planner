# LOGISTICS INTELLIGENCE SYSTEM — Security & UI Hardening v5

## Branding
- LOGISTICS INTELLIGENCE SYSTEM
- Integrated Logistics, Route & Transport Network Management
- Personal operator name / Jabalpur Operations removed from the UI.

## v5 fixes
- Route geometry rendering made robust for Mappls encoded polyline, GeoJSON, Feature/FeatureCollection, MultiLineString, and leg/step geometry fallbacks.
- Route requests use Mappls `geometries=polyline` for reliable decoding.
- Selected route is rendered with a stronger visible line and z-index.
- Route Planner now opens as a proper map + planner split view instead of hiding the map.
- Map View opens as a dedicated full-map view.
- Clear All now removes route overlays, endpoint markers, route details, history state for the active route, via stops, and resets origin/destination controls.
- Reports use full-width scrolling and a dedicated page layout so long tables remain accessible.
- Header branding is responsive and no longer clips the system name at common desktop widths.

## Security retained
- Mappls API secret remains server-side in the Cloudflare Worker.
- Web Map credential is obtained through the Worker.
- No inline scripts or inline onclick handlers.
- CSP retained.
- Import validation retained.
- Upstream Worker error sanitization retained.

## Deployment
Replace these files in the GitHub Pages repository:
- `index.html`
- `app.js`
- `styles.css`

The Cloudflare Worker does not need to be changed for this UI update.
