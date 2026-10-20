# Ajwad Abdulla Alavi - Portfolio (Home Handoff Guide)

## 📌 Project Overview
- **Tech Stack**: React 18, Vite 5, TypeScript, Tailwind CSS, Framer Motion, Lenis Smooth Scroll, Lucide React.
- **Design Aesthetic**: Swiss Modernist / Brutalist Corporate Agency (`#F9F9FA` canvas, `#111111` bold sans-serif typography, `#E03C1A` red-orange accent, strict `rounded-none`, high-contrast black-and-white editorial portrait).
- **Deployment**: Configured for Vercel (`vercel.json` included).
- **Optimization**: Code-split route components via `React.lazy()` and `<Suspense>`, optimized WebP & high-res portrait assets, WCAG AA color contrast compliance, and full AI discoverability schemas (`llms.txt`, `ai-catalog.json`, JSON-LD Person schema).

---

## 🚀 How to Run on Your Home Laptop

### Step 1: Install Node.js (If you don't already have it)
Download and install the LTS version of Node.js from [nodejs.org](https://nodejs.org/).

### Step 2: Open Terminal / VS Code / Antigravity in this folder
Open the unzipped project folder in your terminal or IDE:
```bash
# 1. Install all dependencies
npm install

# 2. Start the local dev server
npm run dev
```
Open **`http://localhost:5173`** in your browser to view your live site.

### Step 3: To Build for Production
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory.

---

## 🤖 How to Resume this Chat / Pair-Programming at Home
If you are opening **Antigravity** or any AI agent on your home laptop, simply open this project folder as your workspace, start a new chat, and paste the prompt below:

```text
I am continuing work on my personal portfolio website for Ajwad Abdulla Alavi (ACCA Affiliate & Accounting graduate based in Bahrain).
The project is built with React 18, TypeScript, Tailwind CSS, Framer Motion, and Vite.
The styling follows a Swiss modernist/brutalist agency theme (#F9F9FA background, #111111 text, #E03C1A accent, 90-degree sharp corners, B&W editorial portrait).
Please inspect the codebase in src/ and public/ and await my next instruction.
```

---

## 📂 Key Files Reference
- `src/components/Hero.tsx`: Strict 50/50 split-screen Hero with full-bleed B&W editorial portrait (`grayscale contrast-125`).
- `src/components/CredentialsAndSkills.tsx`: ACCA Affiliate completed July 2026 tag, education ledgers, and core competencies.
- `src/components/ExperienceAndProjects.tsx`: Deloitte internship experience, audit case studies, interactive tabs.
- `src/components/AboutSection.tsx`: Editorial statement and career objective.
- `src/components/ContactSection.tsx`: Direct contact details, copy buttons, email, phone, LinkedIn.
- `public/Ajwad_Abdulla_Alavi_CV.pdf`: Official ACCA / CV document.
- `public/llms.txt` & `public/ai-catalog.json`: AI crawler & LLM discoverability specifications.
