# Ethanol Logistics Route Planner

A professional, single-page web application for planning and analysing
ethanol logistics routes between **Railheads, Distilleries and FCI
Depots**.

The application is designed as a **GitHub Pages-compatible frontend**
and uses Mappls Web Maps / routing capabilities for interactive mapping
and route planning.

## Live Application

-   **GitHub Pages:**
    https://ashokmeena1988.github.io/railhead-distillery-route-planner/
-   **Repository:**
    https://github.com/ashokmeena1988/railhead-distillery-route-planner

## Main Features

### 🗺 Dashboard / Map View

The main workspace combines the interactive map and Route Planner on the
same page.

-   Interactive Mappls map
-   Road and satellite/imagery map modes
-   Location markers
-   Map search and navigation
-   Fit map / route controls
-   Route visualization
-   Route Planner available alongside the map
-   Expand / collapse sidebar to increase map workspace

### 🧭 Route Planner

The Route Planner supports:

-   Origin selection
-   Destination selection
-   Multiple Via Stops
-   Vehicle/profile selection
-   Route type/resource selection
-   Route calculation
-   Route summary
-   Total distance
-   Estimated travel time
-   Number of route legs
-   Route sequence
-   Leg-wise route details
-   Clear route
-   Fit route
-   **View on Map**

The planner is designed to preserve the selected route and make it easy
to move between route details and the map.

### 📍 Location Management

The application maintains a master location database containing:

-   Railheads
-   Distilleries
-   FCI Depots

Location Management supports:

-   Search
-   Filtering
-   Location details
-   Edit / add / remove location data
-   Map navigation from a selected location
-   **📍 Map** action to focus the selected location on the Dashboard /
    Map View

### 📊 Distance Matrix

The Distance Matrix provides route-distance analysis between selected
location categories.

Supported combinations include:

1.  Railhead ↔ Distillery
2.  FCI Depot ↔ Distillery
3.  FCI Depot ↔ Railhead
4.  FCI Depot ↔ FCI Depot

The matrix supports direction selection and route opening from
individual results.

### 📈 Distillery Distance Analysis

A dedicated analysis tool allows a user to select a Distillery and
analyse distances from/to:

-   FCI Depots
-   Railheads

The report provides:

-   Selected Distillery
-   Distance direction
-   Depot-wise ranking
-   Railhead-wise ranking
-   Nearest location
-   Farthest location
-   Distance values
-   View Route actions
-   Excel export

The selected Distillery and selected direction are preserved while
generating the report to avoid confusion.

### ⚙ Data Management

Data-management controls are provided for working with the application's
local dataset.

Typical controls include:

-   Reset to original dataset
-   Clear local changes
-   Refresh page
-   Manage application data

The application uses browser-side data/local storage for frontend state
where applicable.

## Location Dataset

The application is designed around a master location dataset containing:

-   **182 total locations**
-   **9 Railheads**
-   **14 Distilleries**
-   **159 FCI Depots**

The depot dataset contains fields such as:

-   Depot Code
-   Depot Name
-   Own / Hired
-   Capacity
-   Rail Head / Cluster
-   GPS Status
-   Latitude
-   Longitude

## Mapping Technology

The application uses the **Mappls Web Maps JavaScript SDK** for the
interactive map.

Mappls documentation:

-   Web Maps JS:
    https://developer.mappls.com/documentation/sdk/Web/Web%20JS/
-   Raster Source:
    https://developer.mappls.com/documentation/sdk/Web/Web%20JS/docs/V3.0/rasterSource/

Mappls documents raster tile overlays through `addTile()` and provides a
Bhuvan imagery example for raster imagery.

> Satellite imagery availability depends on the Mappls account, API
> permissions, key configuration, allowed domains and the imagery source
> being accessible from the deployed application.

## Routing

The Route Planner is intended to calculate road routes and present:

-   Distance in kilometres
-   Estimated travel time
-   Route legs
-   Route sequence
-   Map visualization

Where Mappls route services/plugins are available, the application can
use Mappls routing functionality.

If a particular Mappls routing plugin is unavailable or fails in the
browser environment, the application should fail gracefully rather than
displaying misleading `0 KM` or `0 min` results.

## User Interface

The interface contains:

-   Collapsible sidebar
-   Top navigation
-   Dashboard / Map View
-   Route Planner
-   Location Management
-   Distance Matrix
-   Distillery Distance Analysis
-   Data Management
-   Settings

The sidebar can be collapsed to provide more screen space for the map
and route workspace.

## Deployment on GitHub Pages

This project is designed to work as a static GitHub Pages website.

### Basic deployment

1.  Open the repository.
2.  Replace the root `index.html` with the latest application HTML file.
3.  Commit and push the changes to the `main` branch.
4.  In GitHub, open **Settings → Pages**.
5.  Select deployment from the `main` branch and `/root`.
6.  Open the generated GitHub Pages URL.

### Single-file architecture

The application is intentionally maintained as a largely self-contained
HTML frontend.

Typical structure:

``` text
railhead-distillery-route-planner/
├── index.html
└── README.md
```

External JavaScript/CSS libraries and mapping services may be loaded by
the browser where required.

## Configuration

Before production deployment, verify:

-   Mappls API key / static key configuration
-   Allowed domain / GitHub Pages domain
-   Required Mappls Web Maps access
-   Required routing API/plugin access
-   Raster / imagery access if satellite mode is required
-   Browser console for API errors
-   API quota and usage limits

**Do not commit private API secrets or server-side credentials to a
public repository.**

Mappls recommends restricting static keys by allowed domains/IPs as
appropriate for the deployment.

## Security Notes

This is a client-side GitHub Pages application.

Because GitHub Pages is static hosting:

-   Never put private backend credentials in `index.html`.
-   Public frontend API keys should be restricted to the required domain
    where the provider supports domain restrictions.
-   Do not treat a browser-visible API key as a secret.
-   Use a backend/serverless service for operations requiring
    confidential credentials.
-   Review browser console errors before publishing changes.

## Browser Support

Recommended:

-   Google Chrome
-   Microsoft Edge
-   Mozilla Firefox
-   Safari

A modern browser with JavaScript enabled is required.

## Troubleshooting

### Map is blank

Check:

1.  Mappls script is loading.
2.  API key is valid.
3.  The deployed domain is allowed in Mappls Console.
4.  Browser console for authentication or quota errors.
5.  Network requests for blocked map tiles.

### Satellite mode does not load

Check:

1.  Mappls raster/imagery access.
2.  API key permissions.
3.  Domain whitelist.
4.  Raster tile request errors in browser DevTools.
5.  Whether the selected imagery provider is available.

Mappls officially documents raster tile overlays through `addTile()`.

### Location → Map button does not work

Check:

1.  Dashboard / Map View exists and is active.
2.  The selected location contains valid latitude/longitude.
3.  Map has been initialized.
4.  Browser console for JavaScript errors.

The application should first open Map View and then center/zoom to the
selected location.

### Route shows 0 KM / 0 min

Check:

1.  Origin and destination coordinates.
2.  Routing API access.
3.  API response in browser DevTools.
4.  Route profile/resource settings.
5.  Mappls quota and domain restrictions.

## Data Accuracy

Distances and travel times returned by online routing services can
change because of:

-   Road-network updates
-   Traffic conditions
-   Routing preferences
-   Road restrictions
-   Map-data changes
-   API/provider updates

Therefore, route distances should be treated as planning values and
verified before operational use.

## Development Checklist

Before publishing a new version:

-   [ ] HTML file is not 0 bytes
-   [ ] JavaScript syntax check passes
-   [ ] Map loads
-   [ ] Road mode works
-   [ ] Satellite/imagery mode is tested
-   [ ] Location → Map works
-   [ ] Route Planner calculates a route
-   [ ] View on Map works
-   [ ] Distance Matrix works
-   [ ] Distillery Distance Analysis preserves selection
-   [ ] Excel exports work
-   [ ] Sidebar expand/collapse works
-   [ ] Data Management controls work
-   [ ] Browser console has no critical errors
-   [ ] API keys/domains are configured correctly

## Project Status

This project is an actively developed frontend route-planning and
logistics-analysis application. Features and Mappls integrations may
evolve as the application is improved.

## License

No explicit open-source license is currently specified. Unless a license
is added to the repository, treat the source code as **all rights
reserved** by the repository owner.
