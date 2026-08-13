# Kotetsu Trade Co., Ltd. — Corporate Website

A premium, professional static website for **Kotetsu Trade Co., Ltd.**, a Bangkok, Thailand-based specialty chemical distribution company. Kotetsu Trade sources and distributes rare, high-performance, private-label inorganic specialty chemicals — base materials elevated through proprietary surface treatment and advanced formulation know-how into compounds with a measurable performance edge over commodity-grade equivalents.

## 🎯 Project Goals

- Present Kotetsu Trade as a sophisticated, technically credible specialty chemical trading house (not a generic commodity broker)
- Communicate a clear Thai identity (Bangkok HQ, ASEAN distribution, Thai visual motifs) blended with an international, premium chemical-industry aesthetic
- Showcase a curated portfolio of base materials — verified against the actual `Materials_list_KotetsuLabs.pdf` source content (confirmed via user-provided page screenshots) — reframed as private-label, performance-engineered platforms
- Emphasize flame-retardant performance (hydrotalcite/LDH platform), nanoscale precision, halogen-free/antimony-free/low-heavy-metal purity, continuous-flow manufacturing, room-temperature aqueous synthesis, and water-dispersion advantages
- Funnel all product inquiries to **sales@kotetsulabs.com** with a "tell us your application, we'll recommend the right private-label product" model (since many product lines are private-label and not individually listed)

## ✅ Currently Completed Features

### Pages
| Page | Path | Description |
|---|---|---|
| Home | `index.html` | Hero, company overview, featured platforms (ZnO, Hydrotalcite), manufacturing philosophy, portfolio grid, water-dispersion advantages, formulation philosophy quote, CTA |
| About Us | `about.html` | Company story, mission & values, 4-step "how we work" process, milestone timeline, regional footprint (Bangkok / Laem Chabang / ASEAN) |
| Products | `products.html` | Filterable product grid (8 material families) + deep-dive technical sections for each material with spec tables, morphology tables, 3-tier FR diagram, stat boxes |
| Technology | `technology.html` | Continuous-flow reactor production, room-temperature aqueous synthesis, formulation know-how philosophy, quality assurance / QC methods |
| Contact | `contact.html` | Inquiry form (routes to `mailto:sales@kotetsulabs.com`), contact info cards, FAQ |

### Product Portfolio Covered (verified against actual source PDF, reframed as private-label platforms)
1. **Zinc Oxide (ZnO)** — CAS 1314-13-2 — 4 engineered morphologies (spheres, flakes, stars, snowballs)
2. **Hydrotalcite (LDH)** — CAS 11097-59-9 — flagship flame-retardant platform — 29 nm nanoplatelets, span 0.9, 3-tier FR system (LDH + APP + ZnO), halogen-free/antimony-free/ICP-verified low heavy metals, refractive-index-matched optical clarity
3. **Zirconium (IV) Dioxide (Zirconia)** — CAS 1314-23-4 — sub-5nm, 98%+ purity, optical/ceramic/energy applications
4. **Nickel-Cobalt Hydroxide** — CAS 61179-08-6 — 4,700 F/g specific capacity, 20,000+ cycle stability, supercapacitor/energy storage electrode material
5. **Cobalt-Iron Oxide (Cobalt Ferrite)** — CAS 12052-28-7 — magnetic/magneto-optical nanomaterial for sensors, spintronics, MRI research
6. **Curcumin** — CAS 458-37-7 — nano-formulated (~230 nm) for enhanced bioavailability, nutraceutical/cosmetic actives
7. **Metal-Organic Frameworks (MOF)** — CAS 10027-30-2 — 324 m²/g surface area, catalysis/gas capture/adsorption
8. **Silver** — CAS 7440-22-4 — 5–150 nm nanopowder for conductive inks, antimicrobial coatings, electronics

Each material section includes: base overview, function claims, application claims, and (where relevant) morphology/grade comparison tables and reference spec tables — all written to emphasize the private-label, proprietary-formulation positioning requested, with function/application lists expanded beyond the literal source PDF content per project instructions.

### Cross-Cutting Themes Implemented
- Continuous-flow reactor manufacturing messaging (advantage strip + Technology page)
- Room-temperature, aqueous, solvent-free synthesis messaging
- Water-dispersion advantages section (8 benefits: de-agglomeration, dust-free handling, VOC-free, high-solids/low-viscosity, optical clarity, shelf stability, processing-step elimination, lower environmental footprint)
- "Formulation know-how gap" messaging — differentiating simple physical blends from proprietary compounding
- Thai identity: Bangkok/Laem Chabang imagery, Thai gold ornamental pattern hero background on Contact page, ICT business hours, ASEAN distribution narrative

### Technical Implementation
- Fully responsive (desktop + mobile, hamburger nav, verified via screenshots at both viewports)
- Reveal-on-scroll animations, animated hero stat counters, sticky header, back-to-top button
- Client-side inquiry form (no backend) — pre-fills a `mailto:sales@kotetsulabs.com` message with structured application/category details, since this is a static site with no server-side email sending capability
- Product filter buttons (by category) on Products page
- Font Awesome icons, Google Fonts (Playfair Display + Inter), Tailwind-free custom CSS design system with CSS variables for consistent theming

## 🔗 Site Structure / Entry Points

- `/index.html` — Home
- `/about.html` — About Us
- `/products.html` — Product Portfolio (anchors: `#zinc-oxide`, `#hydrotalcite`, `#zirconia`, `#nico-hydroxide`, `#cobalt-iron-oxide`, `#curcumin`, `#mof`, `#silver`)
- `/technology.html` — Technology & Process
- `/contact.html` — Contact / Inquiry Form

No query parameters or dynamic routes are used — this is a fully static multi-page site.

## 📁 File Structure

```
index.html
about.html
products.html
technology.html
contact.html
css/
  └── style.css       (full design system: variables, components, responsive rules)
js/
  └── main.js         (nav toggle, scroll reveal, counters, contact form, product filter)
images/
  ├── hero-lab.jpg
  ├── bangkok-skyline.jpg
  ├── powder-macro.jpg
  ├── cable-flame-test.jpg
  ├── flame-retardant-cable.jpg
  ├── reactor.jpg
  ├── zinc-oxide.jpg
  ├── laem-chabang-port.jpg
  ├── thai-gold-pattern.jpg
  ├── quality-lab.jpg
  ├── zirconia.jpg
  ├── supercapacitor.jpg
  ├── ferrite-powder.jpg
  ├── turmeric.jpg
  ├── mof-structure.jpg
  └── silver-nano-ink.jpg
assets/
  └── Materials_list_KotetsuLabs.pdf   (original source reference document)
README.md
```

## 🗄️ Data Models / Storage

This is a **fully static site with no backend or database**. There are no Table API schemas or dynamic data stores used. All product information is hard-coded into the HTML pages. The contact "form" does not persist data anywhere — it opens the visitor's email client with a pre-filled message addressed to `sales@kotetsulabs.com` (client-side `mailto:` link only, since static sites cannot send email or store submissions server-side).

## 🚧 Features Not Yet Implemented

- No live form submission / lead-capture backend (by design — static site limitation; see "Agent Capabilities" boundaries). If persistent lead storage is wanted later, the Table API (`tables/{table}`) could be used to store submitted inquiries client-side via fetch().
- No multi-language toggle (Thai/English) — currently English only, per request ("영문 웹사이트")
- No e-commerce / online ordering (not requested — inquiry-based B2B model)
- No live chat integration
- No downloadable PDF technical data sheets (referenced as "available on request" instead)
- The automated PDF-reading tool could not reliably parse `Materials_list_KotetsuLabs.pdf` directly; the user resolved this by supplying page-by-page screenshots of the actual source document. The 8-material portfolio, CAS numbers, and reference specs (particle size, purity, capacity, surface area, etc.) documented on the Products page have been verified against those screenshots and are now accurate to the source PDF.

## 📌 Recommended Next Steps

1. **Add a Thai-language version** if the site should eventually serve Thai-reading customers alongside international buyers.
2. **Add a lead-capture Table** (via the Table API) if you want inquiries to also be logged in a database in addition to opening the visitor's email client — useful for tracking/CRM purposes.
3. **Replace stock/generic imagery** with real product photography, actual facility photos, or team photos once available, for even stronger authenticity.
4. **Add real technical data (PDFs/data sheets)** once available — these are currently referenced as "available on request" via the contact form.
5. **Deploy the site** using the **Publish tab** to make it live and share the URL with customers.

## 🌐 Public URLs

This project has not yet been published. To make the site live, use the **Publish tab** in the editor — it will handle deployment automatically and provide a live website URL.

---
*Built as a static HTML/CSS/JavaScript site — no server-side processing, authentication, or database required.*
