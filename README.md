# Ethanol Logistics Route Planner — GitHub V5

This is a GitHub Pages compatible single-file frontend.

## Important V5 route fix
The Route Planner now requests a complete road route with numeric distance/time and geometry before/alongside the Mappls Web Directions overlay. This prevents the previous blank/0 KM/0 min result when the Mappls plugin callback does not expose metrics to browser JavaScript.

- Large KM and travel-time summary is rendered in the app.
- Full road route is drawn on the Leaflet map.
- Mappls Web Directions is still initialized and used for the Mappls route overlay when available.
- Multi-stop sequence is preserved.
- No Mappls secret is hard-coded in this file.

## GitHub Pages
Replace the repository root `index.html` with this file and deploy from `main` / root.
