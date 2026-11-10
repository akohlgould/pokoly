# Pokoly.com 👾

> **High-Volume, Zero-Marginal-Cost Online Game Studio & SEO Portal**  
> Built with Astro 5+, Tailwind CSS, Canvas/WebGL, and Web Audio API.

---

## 🌟 Overview

Pokoly is designed to maximize unit economics for browser gaming:
* **Zero Hosting Overhead:** 100% static edge compilation. Unlimited bandwidth on Cloudflare Pages free tier.
* **Client-Side Physics & Rendering:** 0ms server latency. All physics, logic, and audio run locally in the browser.
* **Programmatic SEO Engine:** Automatic JSON-LD Schema (`VideoGame`, `BreadcrumbList`, `FAQPage`), dynamic sitemaps, OpenGraph cards, and strategic long-tail keyword guides.
* **Subdomain Architecture:** Supports standalone game subdomains (e.g. `wordle.pokoly.com`, `suika.pokoly.com`) alongside a unified arcade portal.
* **Procedural Audio Synthesizer:** High-energy 8-bit sound effects synthesized on the fly via the Web Audio API (0 KB audio downloads, 100% royalty-free).

---

## 🎮 Included Game Fleet (7 Built-in Launch Titles)

| Game | Subdomain | Category | Highlights |
| :--- | :--- | :--- | :--- |
| **Word Guess** | `wordle.pokoly.com` | Word Puzzle | Daily & Unlimited modes, streak tracker, share grid |
| **Cosmic Fruit Merge** | `suika.pokoly.com` | 2D Physics Drop | Addictive circle Verlet physics, chain combo mergers |
| **2048 Neon** | `2048.pokoly.com` | Number Puzzle | Cyber neon theme, touch swipe + arrow keys, high score |
| **Klondike Solitaire** | `solitaire.pokoly.com` | Card Game | 52 cards, foundation & tableau auto-moves, move/time stats |
| **Cyber Snake** | `snake.pokoly.com` | Arcade Reflex | 60 FPS canvas loop, speed progression, particle bursts |
| **Minesweeper Modern** | `minesweeper.pokoly.com` | Logic Puzzle | First-click safe, digital timer, mobile flag toggle |
| **Neon Brick Breaker** | `breakout.pokoly.com` | Arcade Action | Multi-row reinforced blocks, angle bounces, multi-level |

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 2. Static Production Build
```bash
npm run build
npm run preview
```
Builds 100% static HTML & assets into `/dist` in < 1 second.

---

## 🛠 Adding New Games with the Generator

To rapidly scale up to dozens of games:

```bash
node scripts/create-game.js <slug> "<Game Title>" <subdomain> <category>
```
Example:
```bash
node scripts/create-game.js neon-pong "Neon Pong: Retro Rally" pong arcade
```

---

## 📄 License
MIT. Built for high-volume publishing and programmatic SEO distribution.
