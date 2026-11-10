# Pokoly Studio: Zero-Cost Deployment & Subdomain Configuration

This guide explains how to deploy **Pokoly.com** to Cloudflare Pages at **\$0/month hosting cost** with wildcard subdomains (`*.pokoly.com`).

---

## 1. Step 1: Register the Domain

We performed authoritative WHOIS lookups:
* **Recommended .io domain:** `pokoly.com` (Verified available!)
* **Recommended .com domain:** `pokolygames.com` or `playpokoly.com` (Verified available!)

Register `pokoly.com` on **Cloudflare Registrar**, **Namecheap**, or **Porkbun** (\$30-\$35/year for .io).
> **Tip:** If registered directly on Cloudflare Registrar, Cloudflare DNS and SSL are configured automatically with zero markup fees.

---

## 2. Step 2: Deploy to Cloudflare Pages (Free Tier)

Cloudflare Pages provides **unlimited bandwidth** and global edge CDN caching for static websites on their free plan.

1. Push your repository to GitHub / GitLab:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Pokoly release with 7 games and programmatic SEO"
   git remote add origin https://github.com/<your-username>/pokoly.git
   git push -u origin main
   ```
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Configure the build settings:
   * **Framework preset:** `Astro`
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
   * **Node.js version:** `20` or `22` (Environment variable `NODE_VERSION=22`)
4. Click **Save and Deploy**. Your site will be live at `https://<project-name>.pages.dev`.

---

## 3. Step 3: Configure Wildcard Subdomains (`*.pokoly.com`)

To enable individual game subdomains like `wordle.pokoly.com` and `suika.pokoly.com`:

1. In Cloudflare Dashboard, go to your domain (`pokoly.com`) -> **DNS** -> **Records**.
2. Add a wildcard CNAME record:
   * **Type:** `CNAME`
   * **Name:** `*`
   * **Target:** `<your-project-name>.pages.dev`
   * **Proxy status:** Proxied (Orange cloud enabled)
3. Add root CNAME / Apex:
   * **Type:** `CNAME`
   * **Name:** `@`
   * **Target:** `<your-project-name>.pages.dev`
   * **Proxy status:** Proxied
4. In Cloudflare Pages, go to **Custom domains** -> **Set up a custom domain** -> add:
   * `pokoly.com`
   * `*.pokoly.com`

The bundled worker in `cloudflare/_worker.js` will automatically intercept incoming subdomains and route:
* `wordle.pokoly.com` -> `/games/word-guess`
* `suika.pokoly.com` -> `/games/fruit-merge`
* `2048.pokoly.com` -> `/games/neon-2048`
* `solitaire.pokoly.com` -> `/games/solitaire`
* `snake.pokoly.com` -> `/games/cyber-snake`
* `minesweeper.pokoly.com` -> `/games/minesweeper`
* `breakout.pokoly.com` -> `/games/breakout`

---

## 4. Step 4: Monetization Setup

1. **Google AdSense:**
   - Submit `https://pokoly.com` for review.
   - The required compliance pages (`/privacy`, `/terms`, `/about`) and semantic content structure are already compiled in place.
2. **Gaming Ad Networks (AdinPlay / GameDistribution / Monetag):**
   - Once traffic exceeds 5,000 monthly visits, apply to AdinPlay or GameDistribution.
   - Toggle `ADS_ENABLED = true` in `src/components/AdSlot.astro` and insert your publisher client ID.
