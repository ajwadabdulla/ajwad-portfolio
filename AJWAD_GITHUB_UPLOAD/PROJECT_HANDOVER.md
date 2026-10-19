# Ajwad Abdulla Alavi - Portfolio Handover & Continuity Guide

> **How to resume this session at home on your other computer**:
> 1. Make sure you upload the files from **`AJWAD_GITHUB_UPLOAD`** to GitHub before leaving (or copy the folder to a USB drive / Google Drive).
> 2. On your home computer, clone or download the repository from GitHub.
> 3. Open the project in Antigravity (or your AI assistant).
> 4. In your first prompt, paste:
>    *"I am continuing work on my personal portfolio website. Please read `PROJECT_HANDOVER.md` and act as my senior front-end pair programmer. Keep all established design rules, brutalist guidelines, verified facts, and Framer Motion behaviors intact."*

---

## 1. Candidate & Verified Profile (Strict: Do Not Invent Facts)
- **Candidate**: Ajwad Abdulla Alavi
- **Credential**: ACCA Affiliate (Completed all 13 exams in 2026; Strategic Professional Certificate: SBL, SBR, AFM, AAA).
- **Academic Degree**: B.Sc in Accounting, Dayananda Sagar University, Bangalore (2021–2024).
- **Secondary School**: The Indian School, Bahrain (Higher Secondary, Commerce Math, 2007–2021).
- **Target Roles**: Audit, Internal Audit, Financial Analysis across the GCC (Bahrain, Saudi Arabia, Qatar, UAE).
- **Internships in Bahrain**:
  1. Finance Intern | Trans Gulf Consult (Jul 2025 – Aug 2025)
  2. Accountant Intern | Unity Contracting and Real Estate W.L.L. (Jun 2025 – Jul 2025)
- **Projects**:
  1. Speedzey | Financial Analysis Case Study (May 2026)
  2. University Project | Equity Research (Nov 2023 – Dec 2023)
- **Volunteering**: Volunteer, 3rd Asian Youth Games Bahrain 2025 (Bahrain Olympic Committee, Oct 2025).
- **Contact Details**:
  - Email: `ajwadabdulla42@gmail.com`
  - WhatsApp: `+973 3383 1233`
  - LinkedIn: `https://www.linkedin.com/in/ajwadabdulla`
  - CV File: `public/Ajwad_Abdulla_Alavi_CV.pdf` (162 KB)

---

## 2. Design System: Brutalist Agency (Calder & Wynn + Blushing Globe)
- **Background**: `#F9F9FA` (Subtle off-white)
- **Primary Text / Headings**: `#111111` (Near-black, geometric sans)
- **Secondary Text (WCAG AA Compliant)**: `text-gray-600` / `text-neutral-600` / `text-gray-700`
- **Accent Color**:
  - General / Bars: `#E03C1A` (Vibrant red-orange)
  - Small text & tags: `#C83415` (Passed WCAG AA 5.07:1 contrast ratio)
- **Geometry**: Strictly `rounded-none` everywhere (no pills, no curved corners).
- **Typography**: Strictly `font-sans` across all components (zero serif fonts).
- **Divider Lines**: Thin 1px horizontal lines (`border-t border-gray-300` / `border-b border-gray-300`) creating an architectural "data ledger" look.

---

## 3. Key Components & Features
1. **`Navbar.tsx`**:
   - Fixed top header (`z-50`, `bg-[#F9F9FA]`, `border-b border-gray-300`).
   - "HaloNav" active state indicator: Spring-animated horizontal 2px line (`layoutId="activeNavIndicator"`, `bg-[#E03C1A]`) that glides and snaps between sections as the user scrolls.
2. **`Hero.tsx`**:
   - Split CSS grid (`lg:grid-cols-12`).
   - Left (7 cols): Massive name `Ajwad Abdulla Alavi`, updated subheadline, animated vertical 90-degree `"SCROLL"` indicator with pulsing accent bar.
   - Right (5 cols): Edge-to-edge portrait container with parallax translation. Blur overlay has been completely removed so the portrait stays 100% sharp.
3. **`App.tsx` (Overlapping Dossier Curtain & Code-Splitting)**:
   - Hero is anchored with `lg:sticky lg:top-0 z-0`.
   - The `<main>` portfolio dossier (`relative z-10 bg-[#F9F9FA] shadow-[0_-25px_50px_rgba(0,0,0,0.06)] border-t border-gray-300`) slides UP and overlaps the hero and photo like a magazine curtain.
   - All below-the-fold sections are lazy-loaded with `React.lazy()` and `<Suspense>`, reducing initial JS bundle size from 353 kB to 147 kB.
4. **`ScrollControls.tsx`**:
   - Top 2px `#E03C1A` progress bar linked to `scrollYProgress` (`scaleX`).
   - Square `"↑ TOP"` button appearing smoothly with `AnimatePresence` after 500px of scroll.
5. **`CredentialsAndSkills.tsx`**:
   - Massive `"13 / 13"` metric, 3 red-orange segmented dashes, ACCA affiliate block, education timeline, and core competencies ledger.
   - Bi-directional reveals (`viewport: { once: false, amount: 0.15 }`).
6. **`AboutSection.tsx`**:
   - Two distinct paragraphs with clean spacing and staggered entry.
7. **`ExperienceAndProjects.tsx` & `VolunteeringSection.tsx`**:
   - Strict 2-column data ledger grid (dates & meta on left, titles and descriptions on right).
8. **`ContactSection.tsx` & `Footer.tsx`**:
   - Eyebrow `06 — Get in Touch`, `Let's Connect.`, 4 staggered icon buttons (`Email`, `WhatsApp`, `LinkedIn`, `CV`).
   - Normal balanced footer padding without overlapping elements.
9. **`public/llms.txt` & `public/ai-catalog.json`**:
   - Structured metadata files for AI search bots (Perplexity, Gemini, ChatGPT).
   - Linked in `index.html` with JSON-LD Schema.org `Person`.

---

## 4. Local Commands
- Start dev server: `npm.cmd run dev` (Runs on `http://localhost:5173/`)
- Production build: `npm.cmd run build` (Compiles with 0 errors to `dist/`)
