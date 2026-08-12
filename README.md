# HCCGSA Website

Production-ready static website for **hccgsa.com**.

## Files
- `index.html` — complete website
- `styles.css` — responsive design
- `script.js` — navigation and animations
- `privacy.html`, `terms.html`, `accessibility.html` — legal pages
- `_headers` — Cloudflare security headers
- `_redirects` — redirects
- `robots.txt`, `sitemap.xml` — SEO files

## Cloudflare Pages deployment
1. Create a GitHub repository and upload all files in this folder.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. Framework preset: **None**.
5. Build command: `exit 0`.
6. Build output directory: `/`.
7. Deploy.
8. Open the new Pages project, then **Custom domains → Set up a custom domain**.
9. Enter `hccgsa.com` and follow Cloudflare's DNS prompt.
10. Add `www.hccgsa.com` as a second custom domain if desired.

## Important before launch
- Confirm that `info@hccgsa.com` exists.
- The first form submission may require email confirmation from FormSubmit.
- Replace the LinkedIn link with HCCGSA's actual company page.
- Add your final logo when available.
