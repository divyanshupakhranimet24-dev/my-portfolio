# DP — Divyanshu Pakhrani · Portfolio

> A premium personal portfolio website built with pure HTML, CSS & JavaScript — no frameworks, no build tools.

**Live →** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

## Preview

![Portfolio Preview](preview.png)

---

## About

This is my personal portfolio website showcasing my projects, skills, and background as a Metallurgical Engineering student at **IIT BHU**. The design follows an elegant kraft-cream aesthetic with smooth animations and a fully custom UI — built entirely from scratch without any frontend framework.

---

## Features

- **Page Loader** — animated script logo with progress bar
- **Custom Cursor** — dual-layer dot + ring cursor with hover effects
- **Dark / Light Mode** — toggle with `localStorage` persistence
- **Typewriter Effect** — cycling phrases with variable speed
- **Scroll Animations** — `IntersectionObserver`-powered reveal on scroll
- **Project Carousel** — auto-play slider with drag, swipe & dot navigation
- **Responsive Design** — mobile-first with burger menu navigation
- **EmailJS Contact Form** — sends messages client-side, no backend needed
- **Back to Top** — smooth scroll button with visibility trigger

---

## Security

The portfolio includes client-side content protection:

| Protection | Method |
|---|---|
| Right-click disabled | `contextmenu` event blocked |
| DevTools shortcuts | F12, Ctrl+Shift+I/J/C blocked |
| View Source | Ctrl+U blocked |
| Save Page | Ctrl+S blocked |
| Copy / Select All | Ctrl+C, Ctrl+A, `selectstart` blocked |
| Drag prevention | `dragstart` event blocked |
| DevTools detection | Overlay shown when panel is open (350px threshold) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic, single-page) |
| Styling | CSS3 — variables, flexbox, clamp(), keyframes |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Cormorant Garamond, Dancing Script, DM Sans |
| Email | EmailJS Browser SDK v4 |
| Deployment | Vercel (CLI) |

---

## Getting Started

No build step required. Just open `index.html` in a browser.

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
open index.html
```

---

## Deployment

Deployed on **Vercel** via CLI:

```bash
npm install -g vercel   # Install CLI
vercel login            # Authenticate
vercel                  # Preview deploy
vercel --prod           # Production deploy
```

---

## EmailJS Setup

To enable the contact form, replace the placeholder credentials in `index.html`:

```js
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

Get your keys at [emailjs.com](https://www.emailjs.com).

---

## Project Structure

```
portfolio/
└── index.html      # Everything — HTML, CSS, and JS in one file
```

---

## License

This project is personal and not open for redistribution. Feel free to take inspiration, but please don't copy it directly.

---

<p align="center">Crafted with intention by <strong>Divyanshu Pakhrani</strong> · IIT BHU · 2025</p>
