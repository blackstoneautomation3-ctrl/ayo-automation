# 🚀 Ayo Automation Website

> Premium Next.js 15 website for Ayo Automation — web development, mobile apps, and AI income training in Lagos, Nigeria.

---

## 📁 Project Structure

```
ayo-automation/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer + WhatsApp float)
│   ├── globals.css             # Global styles, design system, utility classes
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About Ayo page
│   ├── services/
│   │   └── page.tsx            # All services detail page
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio showcase
│   ├── make-money-with-ai/
│   │   └── page.tsx            # AI training landing page
│   └── contact/
│       └── page.tsx            # Contact form + WhatsApp CTA
├── components/
│   ├── Navbar.tsx              # Responsive nav with mobile hamburger
│   ├── Footer.tsx              # Full footer with links + contact
│   └── WhatsAppFloat.tsx       # Fixed floating WhatsApp button
├── public/                     # Static assets (favicons, og-image, etc.)
├── tailwind.config.ts          # Custom Tailwind theme (colors, fonts, animations)
├── next.config.ts              # Next.js config
└── package.json
```

---

## ⚡ Quick Setup (Local Development)

### Step 1: Create the Next.js project

```bash
npx create-next-app@latest ayo-automation \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd ayo-automation
```

### Step 2: Install extra dependencies

```bash
npm install framer-motion lucide-react
```

### Step 3: Copy all the files

Copy all the files from this project into your Next.js project folder, replacing the defaults:

- `app/globals.css` — paste the full CSS
- `app/layout.tsx` — root layout
- `app/page.tsx` + all sub-pages
- `components/` folder — all 3 components
- `tailwind.config.ts` — custom theme config

### Step 4: Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy on Vercel (Recommended — FREE)

Vercel is made by the Next.js team and is the easiest, fastest deployment for Next.js.

### Option A: GitHub + Vercel (Best)

1. Push your code to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial Ayo Automation website"
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/ayo-automation.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Sign up free → "Add New Project"
3. Import your GitHub repo
4. Click **Deploy** — done! You get a live URL instantly.
5. Add your custom domain (e.g., `ayoautomation.com.ng`) in Vercel settings → Domains.

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🌐 Deploy on Netlify (Alternative)

```bash
npm run build
```

Then drag the `.next` folder to [netlify.com/drop](https://netlify.com/drop), or:

1. Connect your GitHub repo on Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Click Deploy

---

## 🎨 Customisation Guide

### Changing the WhatsApp Number
Search for `wa.me/2348166494104` and replace with your number in international format:
- `app/layout.tsx` — WhatsApp float button
- `components/Navbar.tsx`
- `components/WhatsAppFloat.tsx`
- All `app/*/page.tsx` files

### Changing Brand Colors
Edit `tailwind.config.ts` and `app/globals.css`:
- `--blue: #0EA5E9` → your primary blue
- `--purple: #8B5CF6` → your accent purple
- `--neon: #22D3EE` → highlight teal

### Updating Prices
In `app/services/page.tsx`, find the `price` field in the `mainServices` array.
In `app/make-money-with-ai/page.tsx`, find the `plans` array.

### Adding Real Portfolio Images
Replace the emoji placeholders in `app/portfolio/page.tsx` with `<Image>` from `next/image`:
```tsx
import Image from 'next/image'
// ...
<Image src="/portfolio/freshmart.jpg" alt="FreshMart Lagos website" width={400} height={200} />
```

---

## 🔍 Google Search Console & SEO

### Step 1: Register your domain on Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add Property" → enter your website URL (e.g., `https://ayoautomation.com.ng`)
3. Verify ownership:
   - **Easiest:** Download the HTML file Google gives you → put it in your `public/` folder → deploy
   - Or add the meta tag to `app/layout.tsx` inside the `<head>`

### Step 2: Submit your sitemap

Next.js 15 auto-generates a sitemap. Add this to `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ayoautomation.com.ng', lastModified: new Date() },
    { url: 'https://ayoautomation.com.ng/about', lastModified: new Date() },
    { url: 'https://ayoautomation.com.ng/services', lastModified: new Date() },
    { url: 'https://ayoautomation.com.ng/portfolio', lastModified: new Date() },
    { url: 'https://ayoautomation.com.ng/make-money-with-ai', lastModified: new Date() },
    { url: 'https://ayoautomation.com.ng/contact', lastModified: new Date() },
  ]
}
```

In Search Console → Sitemaps → enter `sitemap.xml` → Submit.

### Step 3: Target Keywords (already in the metadata)

The site is already optimised for:
- `"Ayo Automation Lagos"` → Home page title
- `"website developer Lagos"` → Services page
- `"make money with AI Nigeria"` → AI training page
- `"mobile app development Nigeria"` → Services page
- `"web design Lagos Nigeria"` → Throughout the site

### Step 4: Speed & Core Web Vitals

- ✅ Next.js handles image optimisation automatically
- ✅ App Router uses React Server Components (fast)
- ✅ Tailwind CSS produces minimal CSS
- Run PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev) after deployment

### Step 5: Google Business Profile (for local SEO)

1. Go to [business.google.com](https://business.google.com)
2. Create a profile for "Ayo Automation" in Lagos
3. Add your website URL, phone number, and services
4. This helps you appear in Google Maps and "near me" searches

---

## 🧰 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15.1 | Framework + App Router |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations (ready to use) |
| Lucide React | 0.469 | Icons |

---

## 📱 Features Checklist

- [x] Responsive navbar with mobile hamburger menu
- [x] Floating WhatsApp button on every page (with pulse animation)
- [x] Dark futuristic theme with blue + purple neon palette
- [x] 6 fully built pages (Home, About, Services, Portfolio, AI Training, Contact)
- [x] Contact form with success message (client-side)
- [x] SEO metadata on every page
- [x] Smooth hover animations and glass-card effects
- [x] Tailwind custom design system (fonts, colors, shadows, animations)
- [x] Google Fonts: Syne (headings) + DM Sans (body) + JetBrains Mono
- [x] Testimonials, stats, milestones, pricing, FAQ sections
- [x] Custom scrollbar with brand colors
- [x] Nigerian-market copy and pricing throughout

---

## 🤝 Support

For questions, WhatsApp Ayo: **08166494104**

Or open the website and click the green floating button 😄
