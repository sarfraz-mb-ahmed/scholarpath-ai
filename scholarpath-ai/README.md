# ScholarPath AI

A full-stack web application that helps Pakistani students discover international scholarships and generate AI-powered Statements of Purpose using Google Gemini.

Built for the **Ship with Kiro Hackathon**- June 2026.

---

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS (glassmorphism design)
- **Backend:** Node.js + Express
- **AI:** Google Gemini 1.5 Flash (`@google/generative-ai`)
- **Data:** In-memory JSON (no database setup required)

---

## Quick Start (5 minutes)

### Step 1- Get your free Gemini API key

1. Go to **https://aistudio.google.com/app/apikey**
2. Sign in with a Google account
3. Click **"Create API Key"**
4. Copy the key- you will need it in Step 3

> The Gemini free tier is sufficient for this application.

---

### Step 2- Install & start the backend

```bash
cd server
npm install
```

Create your environment file:

```bash
# On Windows (Command Prompt)
copy .env.example .env

# On Mac / Linux
cp .env.example .env
```

Open `server/.env` in any text editor and replace the placeholder:

```
GEMINI_API_KEY=your_actual_key_here
```

Start the server:

```bash
npm start
```

You should see:
```
  ScholarPath AI server running at http://localhost:5000
```

---

### Step 3- Install & start the frontend

Open a **second terminal** in the project root:

```bash
cd client
npm install
npm run dev
```

You should see:
```
  VITE ready at http://localhost:5173
```

Open **http://localhost:5173** in your browser.

---

## Features

| Feature | Description |
|---------|-------------|
| Scholarship Discovery | Browse 20+ curated international scholarships for Pakistani students |
| Smart Filters | Filter by country, degree level, and funding type |
| Full-Text Search | Search across names, descriptions, countries, and fields |
| Scholarship Detail | View full benefits, eligibility, deadline, and GPA/IELTS requirements |
| AI SOP Generator | Enter your academic profile, get a 600–800 word personalised SOP |
| Copy & Download | Copy SOP to clipboard or download as a .txt file |
| Pre-filled forms | Clicking "Generate SOP" from a scholarship detail page auto-fills the form |

---

## Project Structure

```
scholarpath-ai/
├── .kiro/
│   └── specs/
│       ├── requirements.md     # Kiro requirements spec
│       └── design.md           # Kiro design spec
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ScholarshipCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Scholarships.jsx
│   │   │   ├── ScholarshipDetail.jsx
│   │   │   └── SOPGenerator.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js          # Proxies /api → localhost:5000
│   └── package.json
├── server/                     # Express API
│   ├── data/
│   │   └── scholarships.js     # 20 scholarship records
│   ├── routes/
│   │   ├── scholarships.js     # GET /api/scholarships
│   │   └── sop.js              # POST /api/sop/generate
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── README.md
```

---

## API Endpoints

| Method | Endpoint                         | Description                          |
|--------|----------------------------------|--------------------------------------|
| GET    | `/api/health`                    | Health check                         |
| GET    | `/api/scholarships`              | List all scholarships (with filters) |
| GET    | `/api/scholarships/meta/filters` | Get filter options (countries etc.)  |
| GET    | `/api/scholarships/:id`          | Get single scholarship by ID         |
| POST   | `/api/sop/generate`              | Generate SOP via Gemini AI           |

### Filter parameters for `GET /api/scholarships`

| Param       | Example             |
|-------------|---------------------|
| `search`    | `chevening`         |
| `country`   | `United Kingdom`    |
| `level`     | `Masters`           |
| `fundingType` | `Fully Funded`    |

---

## Scholarships Included

1. Chevening Scholarships- UK
2. Fulbright Scholarship Program- USA
3. DAAD Scholarships- Germany
4. Australia Awards Scholarships- Australia
5. Turkiye Burslari- Turkey
6. Chinese Government Scholarship (CSC)- China
7. MEXT Japanese Government Scholarship- Japan
8. Erasmus Mundus Joint Master's- Europe
9. Commonwealth Scholarship- UK
10. KAIST International Scholarship- South Korea
11. Stipendium Hungaricum- Hungary
12. HEC Overseas Scholarship- Pakistan (overseas PhD)
13. Swedish Institute Scholarship- Sweden
14. New Zealand Aid Programme- New Zealand
15. Eiffel Excellence Programme- France
16. KFUPM Graduate Scholarship- Saudi Arabia
17. POSTECH International Scholarship- South Korea
18. HEC Need Based Scholarship- Pakistan
19. Brunei Darussalam Government Scholarship- Brunei
20. Italian Government Scholarship (MAECI)- Italy

---

## Common Issues

**Port 5000 already in use**
Change the port in `server/.env`: `PORT=5001`
Then update `client/vite.config.js` target to match.

**Gemini API error: 400 or 403**
Your API key is invalid or the free quota is exceeded.
Generate a new key at https://aistudio.google.com/app/apikey

**Frontend shows "Could not reach server"**
Make sure the backend is running (`npm start` in `/server`).
The Vite proxy requires the backend to be on port 5000.

---

## Hackathon Submission

Built with Kiro IDE. The `.kiro/specs/` directory contains:
- `requirements.md`- full functional requirements
- `design.md`- design system, component architecture, API contract

**GitHub repository must include the `.kiro` folder for a valid submission.**
