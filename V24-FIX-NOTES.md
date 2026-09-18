# LOGISTICS INTELLIGENCE SYSTEM — v24 Consolidated Fix

This package is rebuilt from the supplied v23 frontend and keeps the existing Cloudflare Worker unchanged.

## Fixed
- Route rendering now requests `geometries=geojson`, removing encoded-polyline decoding ambiguity.
- Mappls Polyline uses the documented `path` property with `{lat,lng}` points.
- All returned route alternatives remain visible together.
- Selecting a route only changes highlight/details; it no longer refits the map to one alternative.
- Initial route fit uses the geometry of all returned alternatives.
- Route endpoint markers no longer use the old popup path; they use the same compact InfoWindow flow as locations.
- Existing isolated report-table scroll viewport retained.

## Worker
No Cloudflare Worker change.
