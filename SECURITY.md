# Security Notes

## Public repository rules
- Never commit Mappls keys, passwords, API secrets, `.env` files, or personal access tokens.
- Keep the Mappls Web Static Key domain-restricted to the GitHub Pages host.
- Keep the app's "Remember key" option OFF on shared machines.

## Threat model
This static edition protects against casual access and accidental exposure, but the browser is controlled by the end user. Client-side JavaScript and IndexedDB are not a trusted security boundary.

## Production requirement
For confidential or departmental production use, migrate authentication, authorization, audit logging, location data, route history and Mappls server credentials to a server-side backend.
