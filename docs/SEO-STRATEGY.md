# bharatgridsystems.com: identity, SEO and search strategy

Prepared 2 November 2026, alongside the redesign on branch `redesign-identity-seo`.
**Verified** means checked directly (build output, local Cloudflare runtime, the live site, Lighthouse, web search).
**Estimate** means judgement. No search volumes, difficulty scores or rankings below are invented. None were available,
because Search Console is not connected.

---

## 1. Audit: what was wrong

### Positioning

- The home page presented BharatGrid as "technology for a safer, smarter India", built around everyday safety,
  mobility and business operations.
- Resku's case study filled most of the page, so the company read as a safety-app startup rather than an engineering
  company with a long-term direction.
- There was no page explaining the company's engineering work, and nothing separated present work from future intent.

### Search presence (verified, 2 Nov 2026)

- Web searches for **BharatGrid Systems**, **"BharatGrid" company India** and **bharatgridsystems.com** never returned
  bharatgridsystems.com.
- The results were filled by unrelated, similarly named entities:
  - **Bharat Grid Private Limited**: Delhi, smart metering, CIN U35109DL2023PTC415495;
  - POWERGRID;
  - Grid-India.
- Searches for **BharatGrid Academy** and **BharatGrid Systems Private Limited** returned nothing about us.
- These checks used a general web search tool, not Google Search Console, so they show discoverability, not
  Google's index status.
- **Entity disambiguation is the first SEO problem to solve.**

### Technical (verified on the live site)

| Issue | Evidence | Status |
|---|---|---|
| Unknown URLs returned an **empty** 404 (no page, no links) | `/this-does-not-exist` → 404, empty body | Fixed in code |
| Old addresses redirected **temporarily** | `/index.html`, `/academy.html`, `/academy/` → 307 | Fixed in code (301) |
| `http://` served the site without redirecting to `https://` | `http://bharatgridsystems.com/` → 200 | **Cloudflare setting**, see §8 |
| `www.` served a full duplicate of the site | `https://www.bharatgridsystems.com/` → 200, same page | **Cloudflare rule**, see §8; mitigated in code |
| `bharatgridsystems.resku-group.workers.dev` served a duplicate | → 200 | Fixed in code (`X-Robots-Tag: noindex`) |
| A GitHub Pages copy was redeployed on every push | `shreshthkant101.github.io/bharatgrid-website/` → 200 | Auto-deploy stopped; **unpublish**, see §8 |
| One-page site: only 2 indexable URLs; About, Businesses and Contact were fragments | sitemap had `/` and `/academy` | Fixed: 6 pages |
| Minimal Organization schema; no WebSite (site name), breadcrumbs or Academy entity; 180 px logo | home JSON-LD | Fixed |
| Home page shipped ~72 KB (gzip) of React for static content, plus photos from images.unsplash.com | built assets | Fixed: 1 KB of JS, no third-party requests |
| Academy hero hidden until JavaScript ran (scroll reveal on the first screen) | measured LCP 2.6 s | Fixed |
| Static, hand-written sitemap with no `lastmod` | `public/sitemap.xml` | Fixed: generated each build |
| No Search Console or Bing verification, no analytics | head tags | **Owner action**, see §8 |

Already good: content prerendered to HTML, canonical tags, `robots.txt` allowing everything, HTML `lang`, social
previews, and long-cache headers on hashed assets.

---

## 2. What changed (completed in this branch)

### Information architecture

| URL | Purpose |
|---|---|
| `/` | Identity first: what BharatGrid is, why it exists, how the work connects, then products as evidence |
| `/about` | Mission, intent (clearly marked as direction), principles, people, company facts, common questions (entity disambiguation) |
| `/engineering` | Current engineering (grounded in Resku and Resku Business), method, research directions labelled as directions |
| `/work` | Resku case study (moved from home), Resku Business, BharatGrid Academy |
| `/academy` | **Content and funnel unchanged.** New shared header and footer, faster first paint, structured-data links |
| `/contact` | Enquiry routes, registered office, grievance contact |
| `404` | A real not-found page (noindex), served with a 404 status |

- Old one-page links still work: `/#about` → `/about`, `/#businesses` → `/work`, `/#contact` → `/contact`.
- Plain addresses redirect permanently:
  - `/research` → `/engineering`;
  - `/products` and `/businesses` → `/work`;
  - `/fellowship` and `/business-fellowship` → `/academy`;
  - `/brochure` → the PDF.

### Design

- **Palette:** warm paper (#f8f6f1) and charcoal ink. Saffron appears only as small markers and in the official
  tricolour wordmark, which is kept exactly as it was.
- **Type and grid:** Inter on a 12-column grid.
- **Visual language:** one engineering diagram (products → capabilities → direction; solid lines for what exists,
  dashed for direction) and a fine dot-grid texture. No stock photography and no AI imagery.
- **Accessibility:** all text passes WCAG AA contrast (muted text 5.3:1, accent 4.98:1).
- **Motion:** respects reduced-motion settings, and nothing in a page's first screen animates.
- **/academy:** keeps its own palette (forest, Playfair Display, Montserrat) as the Academy sub-brand.

### Technical SEO

- **One registry for every page's metadata** (`src/site/pages.ts`): title, description, canonical, Open Graph,
  Twitter, robots and breadcrumb. `scripts/prerender.mjs` writes it into each page and fails the build if a page lacks
  exactly one `<title>`, one description and one `<h1>`.
- **Structured data:** one JSON-LD `@graph` on every page with stable `@id`s (`src/site/schema.ts`):
  - **Organization:** legalName, alternateName, 512 px logo, address, contact points, knowsAbout, brand Resku,
    subOrganization;
  - **WebSite:** name and alternateName, for Google's site name;
  - **EducationalOrganization:** BharatGrid Academy;
  - **the page itself:** AboutPage, ContactPage, CollectionPage or WebPage;
  - **BreadcrumbList.**
  - The Academy's EducationalOccupationalProgram now references the same Academy and Organization by `@id`.
  - No `sameAs`: no verified profiles exist yet (§8).
- `sitemap.xml` is generated from the registry with `lastmod`; the 404 page is excluded.
- **Copies on other hosts are kept out of search results:**
  - `X-Robots-Tag: noindex` on workers.dev (`public/_headers`);
  - a pre-paint script adds `noindex` on any host other than bharatgridsystems.com (www, github.io).
- `public/_redirects` sends `.html` and trailing-slash variants to the clean URL with a **301**.
- `wrangler.jsonc` serves `404.html` with a real 404 status for unknown paths.
- HSTS header added; GitHub Pages workflow now manual-only.

### Performance

- **No React on the corporate pages:** they are static HTML plus a 1 KB script (menu, reveals, deadline text).
  `/academy` keeps React for its deadline logic.
- **Fonts:** the first-screen font is preloaded.
- **CSS:** inlined (about 9 KB gzip), so nothing blocks rendering.
- **Academy:** its React bundle is fetched at low priority.

---

## 3. Page-by-page SEO map

| URL | Search intent | Title | H1 |
|---|---|---|---|
| `/` | Navigational: who is BharatGrid Systems | BharatGrid Systems \| Research-driven software and AI/ML engineering in India | Engineering the next generation of India's digital infrastructure. |
| `/about` | Navigational / informational: about, legal identity, location, is it a government company | About BharatGrid Systems \| An Indian software and AI/ML engineering company | An engineering company, built for the long term. |
| `/engineering` | Informational: what BharatGrid builds and researches; capability queries | Engineering & Research: applied AI/ML and systems \| BharatGrid Systems | Research-driven engineering, grounded in real products. |
| `/work` | Navigational / commercial: Resku, Resku Business, Academy | Our Work: Resku, Resku Business and BharatGrid Academy \| BharatGrid Systems | Products where our engineering meets real use. |
| `/academy` | Navigational / transactional: BharatGrid Academy, Business Fellowship, how to apply | Business Fellowship '27 · BharatGrid Academy (unchanged) | Business Fellowship '27 |
| `/contact` | Navigational: contact, address, phone, email | Contact BharatGrid Systems \| Enquiries, partnerships and support | Get in touch. |

Meta descriptions are in `src/site/pages.ts`; each is unique and states plainly what the page contains.

**Cannibalisation rules** (keep these when adding pages):
- Home owns the brand and the one-line identity. `/about` owns company facts and "who is" questions.
- `/engineering` owns capability topics. `/work` owns product names. `/academy` owns the programme.
- Future notes own specific technical topics.
- Never give two pages the same title topic.

---

## 4. Keyword strategy

### Priority 1: branded ownership (achievable; the work is mostly done in code)

| Cluster | Target page | How it's served |
|---|---|---|
| BharatGrid, BharatGrid Systems, BharatGrid Systems Private Limited, BharatGrid Systems Pvt Ltd, BharatGrid Systems India | `/`, `/about` | Brand-first titles; legal name in the first paragraph; Organization `legalName` and `alternateName`; WebSite name |
| BharatGrid AI, BharatGrid technology company, BharatGrid software | `/`, `/engineering` | "software and AI/ML engineering company" in the home lede, title and Organization description |
| BharatGrid Academy, BharatGrid Business Fellowship, Business Fellowship 27 | `/academy` | Unchanged title; EducationalOrganization and Program schema; `/fellowship` and `/business-fellowship` redirects |
| BharatGrid contact / address / Mohali | `/contact`, `/about` | Address in HTML and schema |
| Disambiguation: "Bharat Grid" (Bharat Grid Pvt Ltd), POWERGRID, Grid-India | `/about` | The question "Is BharatGrid Systems a government or power-sector company?", answered plainly. We always write the name as one word, **BharatGrid**. We do not add "Bharat Grid" as an alternateName (it belongs to another company). |

Realistic expectation (estimate):
- Once indexed and the off-site signals in §6 exist, "BharatGrid Systems" and the legal name should rank first,
  because no other entity uses that exact name.
- "BharatGrid" alone and "Bharat Grid" will stay contested by the Delhi company and the power-sector bodies. Consistent
  naming, verified profiles and earned mentions are what shift that, over months.

### Priority 2: non-branded (assessed honestly)

| Candidate | Likely intent and SERP (estimate from the 2 Nov search) | Verdict |
|---|---|---|
| AI/ML engineering companies in India; AI and software engineering companies in India | Lists and directories (listicles, Clutch-style); established firms | **Don't chase with the home page.** Earn inclusion in credible lists and directories; `/engineering` supports relevance. |
| Research-driven software companies in India; Indian software R&D companies | Low and mixed; job-board results dominate | Covered naturally by `/about` and `/engineering`; no dedicated page |
| Applied AI research companies India | Dominated by Sarvam, Microsoft Research India, Quantiphi and others | Long-term only, through published work |
| Digital infrastructure technology companies India | Mostly "Digital Public Infrastructure" (Aadhaar, UPI) and government | **Avoid claiming this.** Intent mismatch, and we have not built DPI. |
| Intelligent systems engineering India | Niche | Covered by `/engineering` |

Better near-term non-branded targets are long-tail technical topics where our work is genuinely original. They are
served by engineering notes (§5):
- phone crash detection false alarms (potholes, speed breakers, dropped phones);
- detecting road accidents with smartphone sensors;
- pedestrian impact detection from a phone;
- designing mobile alerts for poor network coverage;
- mapping mobile network dead zones;
- privacy-preserving collection of sensor data;
- Android background location and battery optimisation (a developer audience);
- dispatch and booking software for transport operators, for Resku Business when it launches. This one is
  commercial and belongs on a future product page.

### Priority 3: long-term authority

Original engineering writing, product launches and earned references (§5–6). Rankings for competitive industry terms
follow authority; metadata cannot create it.

---

## 5. Insights / engineering notes (proposed, not yet built)

There is no Insights section yet, deliberately, so the site has no empty page. Build it when the first note is approved.

- **Route and schema:** a `/notes/<slug>` route with Article schema and author attribution.
- **Effort:** about half a day of work in this codebase.

The first draft is in `docs/insights/drafts/`. It is written only from engineering that exists, and needs editorial
approval before it is published.

| # | Note | Queries it can earn | Source of truth |
|---|---|---|---|
| 1 | **Telling a crash from a dropped phone** (draft ready) | phone crash detection false positives; detecting accidents with phone sensors | Resku crash detection |
| 2 | When the network isn't there: alerts for patchy coverage | mobile alerts poor network; offline-first emergency alerts | Resku's alert queue |
| 3 | Finding dead zones with a model trained on simulated journeys | mobile coverage dead zone mapping | Resku coverage model |
| 4 | Collecting crash data without collecting people | privacy-preserving sensor data; anonymised training data | Resku crash summaries |
| 5 | Every change is a command: recording operations in Resku Business | auditable operations software | Resku Business architecture |

Rules:
- One note a month is enough.
- No thresholds or other details the team considers confidential.
- No generic AI articles.
- Each note links to `/engineering` and the relevant product.

---

## 6. 30 / 60 / 90-day plan

**Days 0–7 (owner, mostly in dashboards)**
1. Merge the branch and deploy (`npm run deploy`).
2. Cloudflare: turn on **Always Use HTTPS**, and add a redirect rule **www → apex (301)**.
3. GitHub: unpublish the Pages copy.
4. Search Console: add a **Domain property** (DNS TXT in Cloudflare), submit `https://bharatgridsystems.com/sitemap.xml`,
   and request indexing for the six URLs.
5. Bing Webmaster Tools: import from Search Console.
6. Cloudflare Web Analytics: free and cookieless, so no consent banner is needed.
7. Rich Results Test on `/` and `/academy`.

**Days 8–30**
- Create a **LinkedIn company page** "BharatGrid Systems" with the same one-line description and the website. Then add
  it, and the Academy's Instagram, to `sameAs` (one line in `src/site/schema.ts`).
- On reskuapp.com, add "Resku is built by BharatGrid Systems" with a link (I can do this in `~/Desktop/resqu_website`).
- Founders' and team members' profiles should name BharatGrid Systems and link to the site.
- Legitimate listings only: Startup India / DPIIT recognition if eligible, Crunchbase, and university placement cells
  for the Academy, which are a genuine fit and earn `.ac.in` references.

**Days 31–60**
- Publish notes 1–2. Share them where engineers actually read; no spam.
- Review Search Console queries and impressions, and adjust titles only where the data says so.
- Plan the Resku public-launch announcement for Indian tech media, naming BharatGrid Systems as the company behind it.

**Days 61–90**
- Publish notes 3–4.
- Announce the Academy cohort when it starts (1 January 2027) with a short, factual post.
- Add a Resku Business page when the product is public.
- Re-run Lighthouse and check Core Web Vitals in Search Console once there is field data.

---

## 7. Measurement

| Goal | How measured | Baseline |
|---|---|---|
| "BharatGrid Systems" and the legal name rank first | GSC average position for branded queries | None. GSC not connected. Web search did not return the site (2 Nov). |
| All 6 pages indexed, no errors | GSC Pages report | Unknown until GSC |
| Non-branded impressions and clicks grow after notes are published | GSC Performance, branded queries filtered out | 0 notes today |
| Qualified queries | GSC queries per page | — |
| Core Web Vitals "Good" | GSC CWV report (needs field data; low-traffic sites may show none) | Lab: LCP 0.5–1.5 s, CLS ≤ 0.008 |
| Academy applications from the website | Add "How did you hear about us?" to the Google Form, or a separate pre-filled form link for the site | Not tracked today |
| Partnership and contact enquiries | Tally of emails that mention the website; Web Analytics visits to `/contact` | Not tracked today |

---

## 8. Manual actions (need account access or approval)

1. **Deploy:** merge `redesign-identity-seo` into `main`, `git push`, `npm run deploy`.
2. **Cloudflare → bharatgridsystems.com zone:**
   - SSL/TLS → Edge Certificates → **Always Use HTTPS: On**.
   - Rules → Redirect Rules → template **"Redirect from WWW to root"**, status 301.
   - Optional: Workers → bharatgridsystems → Settings → Domains & Routes → disable the workers.dev route. It is
     already noindexed.
3. **GitHub → shreshthkant101/bharatgrid-website → Settings → Pages:** unpublish the site. The workflow no longer runs
   on push; existing deployments stay up until unpublished.
4. **Search Console:** Domain property via DNS TXT, sitemap submission and indexing requests.
   **Bing:** import from Search Console.
5. **Analytics:** Cloudflare → Web Analytics → enable for bharatgridsystems.com (automatic setup on proxied zones).
6. **Profiles:** create the LinkedIn company page; send me its URL and the Academy Instagram URL for `sameAs`.
7. **Editorial approval:**
   - The engineering descriptions on `/engineering` and `/work` are public descriptions of internal work.
   - The draft note in `docs/insights/drafts/` needs sign-off before publishing.
8. **Brand question:** the footer still carries the motto राष्ट्रहित सर्वोपरि, as you asked on 12 Oct. Keep it if it is
   part of the identity. The new brief asks for nothing politically charged; the motto is understated, but it is your
   call.
