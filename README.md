# Sammed Padanad — Portfolio 👋

A modern, fully responsive **personal portfolio website** built to showcase my projects, experience, and skills in **AI / Machine Learning**, **Cybersecurity**, and **Full-Stack Development**. Designed to make an immediate impression on HRs and recruiters.

> 🔗 Live Site: Open `index.html` locally, or deploy the 3 files to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

---

## ✨ Highlights

- **9 polished sections:** Hero, About, Skills, Projects, Experience, Education, Achievements, Contact, Footer
- **Animated hero** with typewriter effect, floating code card, and gradient blob background
- **Projects showcase** with filter chips (All / AI-ML / Security / Web), hover overlays, feature checkmarks, and tech tags
- **Timeline view** for internships, stat counters, animated skill bars with shimmer effect
- **Light / Dark mode** toggle with persisted user preference
- **100% responsive** — looks great on Mobile, Tablet, and Desktop
- **Zero build step / zero dependencies** — pure HTML, CSS, JS (uses Google Fonts & FontAwesome CDN for icons)
- Working **contact form** (mailto: link), smooth scroll, active nav highlighting, scroll-reveal animations, back-to-top button

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Markup | **HTML5** (semantic, accessible, SEO-friendly) |
| Styling | **CSS3** (CSS Variables, Grid, Flex, Keyframe animations, Gradients, Dark / Light themes) |
| Logic | **Vanilla JavaScript** (ES6+, no frameworks) |
| Fonts | Google Fonts — `Inter` (UI) + `Fira Code` (code blocks) |
| Icons | Font Awesome 6.4 CDN |

## 📂 Project Structure

```
resume/
├── index.html      # All content & structure
├── styles.css      # All styling, themes & animations
├── script.js       # All interactivity, animations, filters
├── .gitignore
└── README.md
```

That's it — everything is in **3 core files**.

## 🚀 How to Run

### Option 1 — Open directly
Just double-click `index.html` in your file manager.

### Option 2 — Local server (recommended, better for links/forms)
```bash
# Python 3
python -m http.server 8080
# then open  http://localhost:8080
```

Or with Node:
```bash
npx serve .
```

### Option 3 — Deploy in 1 click
Upload all 3 files to:
- **GitHub Pages** → push to `main`, enable Pages on `/ (root)`
- **Vercel / Netlify** → drag & drop the folder
- **Cloudflare Pages** → connect the repo

## 🧑‍💼 Sections

### 1. Hero
- Typewriter rotating roles (AI/ML Engineer → Cybersecurity Enthusiast → Full-Stack Developer → Problem Solver)
- Syntax-highlighted Python class code card (`class SammedPadanad`)
- Social links: Email, GitHub, Phone, LinkedIn
- Two CTAs: *View My Work* + *Get In Touch*

### 2. About
- Short bio with AI / Cybersecurity / Full-Stack emphasis
- **Live stat counters:** 6+ Projects, 2+ Internships, 3+ Hackathons, 7+ Stack
- Personal info card (Name, Location, Degree, Email, Phone, Availability)

### 3. Skills
- **Animated progress bars** with shimmer: Python 92%, Java 85%, JavaScript 80%, C/C# 78%
- Skill tags for Development, AI/ML, and Cybersecurity categories

### 4. Projects (6 featured)
- 🐄 **AI Cattle Breed & Disease Recognizer** — livestock classification + disease detection
- 🛡️ **UPI Fraud Detection System** — ML-powered fraud detection for digital payments
- 🐛 **AI Pest Detector** — agricultural pest recognition CNN
- 🚂 **RailFast** — Tatkal ticket booking with WhatsApp integration
- 🎓 **CertSparks** — India's affordable student career platform
- 💬 **SpeakMate** — Java-based language learning app

Filters: `All`, `AI/ML`, `Security`, `Web Apps`

### 5. Experience
Timeline for **2 Cybersecurity Internships:**
- Placemantra (Virtual, Jan 2025 – Mar 2025)
- Defronix Cyber Security (Belagavi, Mar 2024 – Sep 2024)

### 6. Education
- **B.E. – CSE** · Bahubali College of Engineering · 2024 – 2028
- **Placement & Skill Development Training** · ABC Technology, Hassan · May 2025

### 7. Achievements
- National-Level *Raise Your Hack* — Multi-Agent Workflow for Enterprise Automation
- State-Level Hackathon — Dyashin Technosoft Pvt. Ltd.
- 6+ End-to-end AI/ML Projects portfolio
- 2 Cybersecurity Internships completed early

### 8. Contact
- Clickable contact cards (Email, Phone/WhatsApp, Location, GitHub)
- Working contact form → opens mail client with pre-filled subject/body

## 🎨 Customization

All branding is driven by **CSS variables** at the top of [`styles.css`](./styles.css):
```css
:root {
  --primary: #6366f1;
  --primary-2: #8b5cf6;
  --grad-1: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  /* ... */
}
```

Content lives in plain HTML — edit the text, projects, and links directly in [`index.html`](./index.html).

Role rotation (typewriter) is in [`script.js`](./script.js) in the `titles` array.

---

<p align="center">
  Built with <code>❤️</code> + lots of <code>☕</code> — Sammed Padanad
</p>
