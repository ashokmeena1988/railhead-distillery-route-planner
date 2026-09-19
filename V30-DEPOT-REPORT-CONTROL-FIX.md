# v30 Depot Report Control Fix

- Depot report controls are now independent from the Map UI initialization.
- Added dedicated Vehicle Type control (Truck/HCV or Car/LMV).
- Depot, direction, and vehicle changes reset stale results.
- Generate button shows a calculating state and blocks conflicting controls during the request.
- Stale async results are discarded when the user changes controls.
- Reports tab refreshes both depot and distillery selectors.
- Distance Matrix engine and Cloudflare Worker are unchanged.
- Frontend cache version: 30.0.0.
