# AGENTS.md - HCCGSA Website

Static Cloudflare Pages site for `hccgsa.com`.

## Project Notes
- Source directory: `/home/architek/hccgsa-website`
- Cloudflare account ID: `6345b87b63229a9dd96555d9e1034015`
- Cloudflare Pages project: `hccgsa-website`
- Production domains: `hccgsa.com`, `www.hccgsa.com`, and `hccgsa-website.pages.dev`
- No package manager or build step is required; deploy the directory as static assets.

## Deployment
- Deploy only public website files. Do not deploy this whole source folder because it contains `AGENTS.md` and `.agent-memory/`.
- Prepare a clean temporary publish directory containing the static site files, then use Wrangler:
  - `wrangler pages deploy /tmp/hccgsa-pages-deploy --project-name hccgsa-website --branch main`
- Do not hardcode credentials. Use existing Wrangler auth or a scoped Cloudflare token.
- Verify with:
  - `curl -I https://hccgsa.com`
  - `curl -I https://www.hccgsa.com`

## Editing Rules
- Keep changes scoped to static assets unless the user asks for a new framework/build setup.
- Preserve `_headers`, `_redirects`, `robots.txt`, and `sitemap.xml` when deploying.
- Update `.agent-memory/MEMORY.md` after deployments, domain changes, or launch-critical content changes.
