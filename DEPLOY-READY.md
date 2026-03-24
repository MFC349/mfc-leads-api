# ✅ DEPLOY-READY: MFC Funnel Landing Pages

Everything you need to ship this to production. No half-measures. 🐺

---

## 🎯 What You Have

A complete Cloudflare Pages production setup with:

✅ **4 Landing Pages** (all existing pages kept):
- `/21-day-reset` - 21-Day Discipline Reset  
- `/healing-the-warrior-spirit` - Healing the Warrior Spirit
- `/culture-to-contract` - Culture to Contract
- `/carving-workshops` - Carving Workshops

✅ **New Main Domain Experience** (`/`):
- Professional hub page linking to all programs
- Same visual language and animations
- No redundant landing page on root

✅ **Complete Tech Stack**:
- Vite (fast builds)
- React 19 + TypeScript
- Tailwind CSS (styling)
- React Router (navigation)
- Framer Motion (animations)
- Lucide React (icons)

✅ **Production Configuration**:
- Security headers configured
- Asset caching optimized (1 year immutable)
- SPA routing with `_redirects`
- Cloudflare Pages ready

---

## 📁 Complete Project Structure

```
mfc-funnel/
├── public/
│  ├── _redirects                    # SPA routing config
│  ├── _headers                      # Security & caching headers
│  └── assets/
│     └── mfc/
│        ├── training-hero.jpg       # (add your image)
│        ├── leadership-certificate.jpg
│        ├── cultural-river.jpg
│        └── beast-paw-mark.png
│
├── src/
│  ├── main.tsx                      # Router entry point
│  ├── index.css                     # Global styles
│  └── mfc-funnel-landing-pages.tsx  # ALL page components
│
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tsconfig.node.json               
├── vite.config.ts                   # Vite config
├── postcss.config.js                # PostCSS config
├── tailwind.config.js               # Tailwind theming
├── index.html                       # HTML entry
├── .gitignore                       # Git ignore rules
│
├── README.md                        # How to use locally
├── DEPLOYMENT.md                    # Step-by-step deploy guide
└── DEPLOY-READY.md                  # This file
```

---

## 🚀 Quick Start

### 1. Add Your Images
```bash
# Copy your images to:
public/assets/mfc/
├── training-hero.jpg
├── leadership-certificate.jpg
├── cultural-river.jpg
└── beast-paw-mark.png
```

### 2. Install & Test Locally
```bash
npm install
npm run dev

# Visit http://localhost:5173
# Test all routes:
# - http://localhost:5173/
# - http://localhost:5173/21-day-reset
# - http://localhost:5173/healing-the-warrior-spirit
# - http://localhost:5173/culture-to-contract
# - http://localhost:5173/carving-workshops
```

### 3. Build
```bash
npm run build

# Output: dist/ folder (ready for upload)
```

---

## 🌐 Deploy to Cloudflare Pages

### Option A: GitHub Auto-Deploy (Recommended)

1. Push to GitHub
2. In Cloudflare Dashboard: Workers & Pages → Create Application
3. Connect GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Node version:** 20
5. Deploy button → Done ✅

Auto-rebuilds on every push to `main`.

### Option B: Manual Upload

1. Run `npm run build`
2. Upload `dist/` folder to Cloudflare Pages
3. Configure custom domain

See `DEPLOYMENT.md` for detailed step-by-step instructions.

---

## 🎨 Customize Content

All page copy lives in `src/mfc-funnel-landing-pages.tsx` in the `PAGE_CONFIGS` object:

### Update CTA Links
```typescript
primaryCta: {
  label: "Book Your Reset Call",
  href: "https://your-booking-link.com"  // ← Change here
}
```

### Update Page Copy
```typescript
headline: "Build standards you still follow on bad days.",  // ← Change here
subcopy: "Your copy here..."  // ← Change here
```

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  bone: "#F1E8D8",  // Light text
  gold: "#C9B27B",  // Accent
  black: "#050505"  // Background
}
```

---

## ✅ Checklist Before Deploy

- [ ] Images added to `public/assets/mfc/`
- [ ] All CTA links point to correct booking URLs
- [ ] Page copy reviewed and finalized
- [ ] Tested locally: `npm run dev`
- [ ] Build succeeds: `npm run build` (no errors)
- [ ] All 5 routes load correctly
- [ ] Custom domain ready (if needed)

---

## 🔒 Security & Performance

✅ **Security Headers** (`public/_headers`):
- Prevents clickjacking (X-Frame-Options)
- Blocks MIME sniffing (X-Content-Type-Options)
- Strict referrer policy

✅ **Asset Caching** (`public/_headers`):
- Images cached 1 year (immutable)
- Instant global delivery via Cloudflare CDN

✅ **SPA Routing** (`public/_redirects`):
- All unknown routes → `index.html`
- React Router handles navigation client-side

---

## 📱 Routes Reference

| Route | Page | Purpose |
|-------|------|---------|
| `/` | LandingPageHub | Program directory |
| `/21-day-reset` | ResetLandingPage | Discipline reset offer |
| `/healing-the-warrior-spirit` | HealingWarriorSpiritLandingPage | Trauma healing offer |
| `/culture-to-contract` | CultureToContractLandingPage | Enterprise cohort |
| `/carving-workshops` | CarvingWorkshopsLandingPage | Carving workshops |

---

## 🐛 Common Issues & Fixes

### Images not loading
```
✗ Wrong path: /assets/mfc/image.jpg
✓ Correct path: /assets/mfc/image.jpg
```
Make sure files are in `public/assets/mfc/` (case-sensitive)

### 404 on subpages after deploy
```
Check: public/_redirects exists in build output
Should contain: /* /index.html 200
```

### Build fails locally
```bash
rm -rf node_modules dist
npm install
npm run build  # Try again
```

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

---

## 📈 Next Steps

1. **Deploy:** Follow `DEPLOYMENT.md`
2. **Monitor:** Check Cloudflare Pages analytics
3. **Iterate:** Edit copy, push to GitHub, auto-redeploy
4. **Scale:** Add more programs/pages using same pattern

---

## 💪 You're Ready

This is production-grade code. No experiments. No tech debt. Deploy with confidence.

Questions about deployment? Check `DEPLOYMENT.md`  
Questions about local setup? Check `README.md`  
Need to customize? Edit `src/mfc-funnel-landing-pages.tsx`

Now go build. 🔥
