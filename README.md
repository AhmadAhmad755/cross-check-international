# CrossCheck International — Landing Page

Marketing landing page for **CrossCheck International (CCI)** — sovereign-grade
cross-border identity intelligence for governments, border agencies, banks, and
institutional partners.

> _"Where intelligence informs integrity."_

---

## Stack

- **React 19** + **Vite 6** + **TypeScript**
- **MUI (Material UI) 6** — breakpoints + mobile nav drawer only; all visual styling stays in CSS
- **DM Serif Display / DM Sans / DM Mono** (Google Fonts)
- Brand styling preserved in `src/styles/site.css` (CSS variables + existing classes)
- `index.static.html` — previous single-file version (reference only)
- `CCI_Landing_Page_v2.html` — original design source (reference)

## Local development

Requires **Node.js 18+** and npm.

```bash
cd /Users/ahmadmansur/Desktop/CCI
npm install
npm run dev
```

Open the URL Vite prints (usually <http://localhost:5173>).

### Production build preview

```bash
npm run build
npm run preview
```

### Static-only fallback (no build)

The archived single-file page can still be served for comparison:

```bash
python3 -m http.server 8000
# open http://localhost:8000/index.static.html
```

## Responsive testing

Check these widths in DevTools:

| Viewport | Target |
|----------|--------|
| 375px | Mobile |
| 768px | Tablet |
| 1024px | Laptop |
| 1440px+ | Desktop |

## Deployment

Hosted on **[Netlify](https://www.netlify.com/)** with CI/CD from GitHub.

```bash
git add .
git commit -m "describe the change"
git push
```

Netlify runs `npm run build` and publishes the `dist/` folder (see `netlify.toml`).

## Project layout

```
src/
  main.tsx          # ThemeProvider + app entry
  theme.ts          # Breakpoints + CssBaseline (matches CCI tokens)
  App.tsx           # Top bar + main shell
  components/
    SiteNav.tsx     # Sticky nav + mobile drawer (only MUI UI chrome)
    LandingPage.tsx # Original markup + class names (unchanged structure)
  styles/
    site.css        # Original CSS + responsive breakpoints
```

## License

© CrossCheck International. All rights reserved.
