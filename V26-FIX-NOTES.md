# LIS v26 — Depot Report Final Fix

## Root cause found
The previous deployed `index.html` was still loading `styles.css?v=23.0.0` and `app.js?v=23.0.0`. Therefore newer frontend changes could remain cached and the live page could continue showing the old layout.

## Changes
- Updated application version to 26.0.0.
- Updated CSS and JS cache-busting query strings to 26.0.0.
- Depot-wise Distillery Ranking now uses a dedicated 520px vertical scroll viewport.
- Visible scrollbar is provided for the complete 14-distillery result.
- Sticky table header remains visible while scrolling rows.
- Horizontal scrolling remains available for wide columns.
- Depot Report Controls remain fully visible above the ranking table.
- Existing report calculations and Map/Matrix functionality are unchanged.
- Cloudflare Worker unchanged.
