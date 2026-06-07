# ScholarPath AI- Design Specification

## Design System

### Visual Language
- **Style:** Glassmorphism on a deep navy background- professional, clean, modern
- **Feeling:** Credible and trustworthy, not flashy or over-designed

### Color Palette

| Token           | Value                         | Usage                          |
|-----------------|-------------------------------|--------------------------------|
| Background      | `#050d1a` → `#0c1e3a`        | Page background gradient       |
| Glass card      | `rgba(255,255,255,0.04)`      | Card backgrounds               |
| Glass border    | `rgba(255,255,255,0.08)`      | Card borders                   |
| Primary blue    | `#4a9eff`                     | Buttons, links, accents        |
| Cyan accent     | `#22d3ee`                     | Gradient pair with blue        |
| Text primary    | `#f8fafc`                     | Headings, important content    |
| Text secondary  | `#94a3b8`                     | Body copy, labels              |
| Text muted      | `#4b5563`                     | Placeholders, helper text      |
| Success         | `#10b981` / `#6ee7b7`        | Fully funded badge, checkmarks |
| Warning amber   | `#f59e0b` / `#fcd34d`        | Partially funded, Bachelors    |
| Purple          | `#8b5cf6` / `#c4b5fd`        | PhD level badge                |

### Typography
- **Font:** Inter (Google Fonts), weights 300/400/500/600/700
- **Scale:** 11px labels → 13px body → 14-15px UI → 16-17px subheadings → 24-28px headings → 48-60px hero

### Glass Card CSS
```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(74, 158, 255, 0.22);
  transform: translateY(-3px);
}
```

---

## Component Architecture

```
App
├── Navbar (sticky, glass)
├── Routes
│   ├── Home
│   │   ├── Hero section (headline + CTA buttons)
│   │   ├── Stats grid (2×2 on mobile, 4 on desktop)
│   │   ├── Features grid (3 columns)
│   │   ├── How it works (3 steps)
│   │   └── CTA banner
│   ├── Scholarships
│   │   ├── Search bar (full-width)
│   │   ├── Sidebar (filters: country, level, funding)
│   │   └── Grid (2 columns on md+) of ScholarshipCard
│   ├── ScholarshipDetail
│   │   ├── Overview card (name, country, badges, description)
│   │   ├── Benefits grid
│   │   ├── Eligibility list
│   │   └── Sidebar (key details, Apply button, Generate SOP button)
│   └── SOPGenerator
│       ├── Left: form (Academic Profile + Personal Statement sections)
│       └── Right: SOP output panel (copy + download)
└── ScholarshipCard (reusable)
```

---

## API Contract

### Scholarships

```
GET  /api/scholarships
     Query: search, country, level, fundingType
     Returns: { success, count, data: Scholarship[] }

GET  /api/scholarships/meta/filters
     Returns: { success, data: { countries, levels, fundingTypes } }

GET  /api/scholarships/:id
     Returns: { success, data: Scholarship }
```

### SOP Generation

```
POST /api/sop/generate
     Body: { name, scholarship, country, degree, field,
             currentInstitution, cgpa, workExperience,
             researchInterests, careerGoals, whyScholarship, achievements }
     Returns: { success, sop: string }
```

---

## Routing

| Path                   | Component          |
|------------------------|--------------------|
| `/`                    | Home               |
| `/scholarships`        | Scholarships       |
| `/scholarships/:id`    | ScholarshipDetail  |
| `/sop-generator`       | SOPGenerator       |

SOP Generator accepts optional URL params: `?scholarship=...&country=...` (pre-fills form when arriving from detail page).

---

## Layout Breakpoints (Tailwind)

| Breakpoint | Width   | Layout change                            |
|------------|---------|------------------------------------------|
| default    | < 768px | Single column, stacked sections          |
| md         | 768px+  | Two-column scholarship grid, feature grid|
| lg         | 1024px+ | Three-column detail, sidebar filters     |

---

## Gemini Prompt Design

The SOP prompt instructs the model to:
1. Open with a specific personal moment (no clichés)
2. Reference CGPA, institution, and specific research interests
3. Connect career goals to the target scholarship logically
4. Address why the specific country/scholarship fits
5. Close confidently with a forward-looking statement
6. Produce 600–800 words in flowing paragraphs, first-person, no headers or bullets inside the SOP
