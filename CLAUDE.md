# CLAUDE.md — Robert Godwin Portfolio

## Project Overview
Personal portfolio website for **Robert Godwin**, a Frontend Developer based in Lagos, Nigeria.
Built with React 18 + Vite. Single-page app with scroll-based navigation.

## Tech Stack
- React 18 + Vite (JavaScript, not TypeScript)
- CSS Custom Properties (no Tailwind, no CSS Modules)
- Swiper.js — project carousel
- ScrollReveal — scroll animations
- Anime.js — text animations
- RemixIcons CDN — icons (class names like `ri-linkedin-fill`)

## Updating Content
All personal data lives in `src/data/`. Never edit components just to change text or links — edit the data files instead.

| File | Purpose |
|---|---|
| `src/data/personalInfo.js` | Name, bio, email, location, resume path, image paths |
| `src/data/social.js` | LinkedIn, GitHub, WhatsApp URLs |
| `src/data/projects.js` | Portfolio projects (num, title, type, tech, img, link) |
| `src/data/experience.js` | Work experience (title, company, period, description) |
| `src/data/education.js` | Education (degree, school, period, description) |
| `src/data/services.js` | Skills & tools cards (title, description, subtitle, skills[], blobClass) |
| `src/data/testimonials.js` | Testimonials (name, img, rating, text) |

## Static Assets
Images and PDFs are served from `public/assets/`:
- Profile images → `public/assets/img/`
- Project screenshots → `public/assets/img/projects/`
- Resume → `public/assets/pdf/ROBERT-GODWIN-Resume.pdf`

Reference them in data files as `/assets/img/filename.png` (absolute from public root).

## Component Structure
```
src/components/
├── Header/       Fixed nav with scroll-active link highlighting
├── Home/         Hero section, custom cursor, ScrollReveal
├── About/        About section with SR left/right origins
├── Projects/     Swiper carousel — loop & autoplay auto-disabled for single project
├── Work/         Tab switcher (Experience / Education) using useState
├── Services/     Accordion cards using useState + max-height CSS transition
├── Testimonials/ Two-row infinite CSS scroll animation
├── Contact/      Copy-to-clipboard email button
└── Footer/       Dynamic year
```

## Key Conventions
- All components are functional with hooks
- ScrollReveal: each component manages its own SR instance in a `useEffect(()=>{}, [])`
- Services accordion uses CSS `max-height` transition (not `height`) — do not change back to `height`
- Work tab switching uses conditional rendering (`&&`) not CSS show/hide — avoids ScrollReveal conflicts
- Custom cursor is rendered in `App.jsx` as `<div id="cursor">`

## Commands
```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```

## Owner Info
- Name: Robert Godwin
- Email: godwinrobert2906@gmail.com
- Phone: +234 8169896382
- Location: Lagos State, Nigeria
- WhatsApp: https://wa.me/2348169896382
