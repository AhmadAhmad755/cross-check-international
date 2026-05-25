# CrossCheck International — Landing Page

Marketing landing page for **CrossCheck International (CCI)** — sovereign-grade
cross-border identity intelligence for governments, border agencies, banks, and
institutional partners.

> _"Where intelligence informs integrity."_

---

## Stack

Single-file static site. No build step, no JS framework — just hand-crafted HTML
+ CSS using DM Serif Display / DM Sans / DM Mono from Google Fonts.

- `index.html` — the entire page (served at the domain root)
- `netlify.toml` — Netlify deploy config + security headers
- `CCI_Landing_Page_v2.html` — original design source (kept for reference)

## Local preview

Any static server works. Easiest options:

```bash
# Python (already on macOS)
python3 -m http.server 8000

# Or Node
npx serve .
```

Then open <http://localhost:8000>.

## Deployment

Hosted on **[Netlify](https://www.netlify.com/)** with CI/CD from GitHub —
every push to `main` ships to production automatically.

- Production: <https://YOUR-DOMAIN-HERE>
- Preview deploys are generated for every branch / pull request.

### Updating the live site

```bash
# make edits to index.html
git add index.html
git commit -m "describe the change"
git push
# Netlify auto-deploys within ~30 seconds
```

## Domain

Custom domain managed at **GoDaddy**, with DNS pointed at Netlify's load balancer
(see `docs/` or Netlify dashboard for the exact A / CNAME records).

## License

© CrossCheck International. All rights reserved.
