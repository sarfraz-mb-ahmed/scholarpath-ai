# ScholarPath AI- Requirements Specification

## Project Overview

ScholarPath AI is a full-stack web application that solves a real, well-documented problem:
Pakistani students miss international scholarship opportunities because discovery is fragmented and
writing a compelling Statement of Purpose (SOP) requires expensive consultants or native-language
fluency that many applicants lack.

This application provides:
1. A curated, filterable directory of 20+ international scholarships verified as open to Pakistani nationals
2. An AI-powered SOP generator backed by Google Gemini AI

---

## Feature Requirements

### Feature 1- Scholarship Discovery

**User story:** As a Pakistani student, I want to search and filter scholarships so I can quickly identify opportunities relevant to my degree level, field, and target country.

**Acceptance criteria:**
- [ ] Display all scholarships in a responsive grid layout
- [ ] Filter by country (dropdown), degree level (buttons), funding type (buttons)
- [ ] Free-text search across name, country, field, and description
- [ ] Filters can be combined and reset independently
- [ ] Show count of results after filtering
- [ ] Each card shows: name, country, funding type badge, level badges, deadline, and description excerpt
- [ ] Clicking a card navigates to a full detail page

### Feature 2- Scholarship Detail Page

**User story:** As a student, I want to see the full details of a scholarship including benefits, eligibility, and deadline before I decide to apply.

**Acceptance criteria:**
- [ ] Show: name, country, funding type, degree levels, description
- [ ] List all covered benefits
- [ ] List all eligibility requirements, numbered
- [ ] Show: deadline, duration, GPA required, IELTS required, eligible fields
- [ ] Link to official application page (external)
- [ ] Button to jump to SOP Generator pre-filled with this scholarship

### Feature 3- AI SOP Generator

**User story:** As a student, I want to input my academic profile and have Gemini AI generate a professional, personalised Statement of Purpose for my target scholarship.

**Acceptance criteria:**
- [ ] Form collects: name, scholarship, country, degree, field, institution, CGPA, work experience
- [ ] Form collects: research interests, career goals, why this scholarship, achievements
- [ ] Client-side validation before API call with descriptive error messages
- [ ] POST request sent to backend which calls Gemini 1.5 Flash
- [ ] Generated SOP displayed in a readable panel on the same screen
- [ ] Copy to clipboard button
- [ ] Download as .txt file
- [ ] Loading state shown during generation
- [ ] If arriving from detail page, scholarship name and country are pre-filled via URL params

---

## Technical Requirements

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React 18, Vite, Tailwind CSS         |
| Backend    | Node.js, Express 4                   |
| AI         | Google Gemini 1.5 Flash via `@google/generative-ai` |
| Database   | In-memory JSON array (no DB required for MVP) |
| Auth       | None (public application)            |
| Deployment | localhost dev, any Node-compatible host for production |

---

## Non-Functional Requirements

- SOP generation must complete within 30 seconds under normal network conditions
- Application must be mobile responsive (single-column layout on small screens)
- No user authentication required- fully public access
- API key must never be exposed to the client; all Gemini calls go through the Express backend
- Vite proxy routes all `/api/*` requests to the Express server on port 5000

---

## Out of Scope (v1)

- User accounts / saved scholarships
- Real-time scholarship scraping
- PDF export of SOP
- Multilingual support (Urdu)
- Email notifications for deadlines
