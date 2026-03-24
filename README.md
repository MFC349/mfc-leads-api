# Molded Fortitude Consulting - Funnel Landing Pages

Production-ready Cloudflare Pages deployment for MFC landing pages.

## 📋 Quick Setup

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Visit `http://localhost:5173`

### Build
```bash
npm run build
```

Output is in the `dist/` folder.

---

## 🚀 Cloudflare Pages Deployment

### Settings
- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 20

### Steps
1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set Node version: 20
5. Deploy

---

## 📁 Project Structure

```
mfc-funnel/
├── public/
│  ├── _redirects        # URL routing for SPA
│  ├── _headers          # Cache & security headers
│  └── assets/mfc/       # Image assets
├── src/
│  ├── main.tsx          # Router setup
│  ├── index.css         # Global styles
│  └── mfc-funnel-landing-pages.tsx  # All pages
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind setup
└── tsconfig.json        # TypeScript config
```

---

## 🗺️ Routes

| Path | Component |
|------|-----------|
| `/` | Landing Hub (directory of all programs) |
| `/21-day-reset` | 21-Day Discipline Reset |
| `/healing-the-warrior-spirit` | Healing the Warrior Spirit |
| `/culture-to-contract` | Culture to Contract |
| `/carving-workshops` | Carving Workshops |

---

## 🖼️ Assets

Place images in `public/assets/mfc/`:
- `training-hero.jpg` - 21-Day Reset hero image
- `leadership-certificate.jpg` - Culture to Contract hero image
- `cultural-river.jpg` - Healing & Workshops hero image
- `beast-paw-mark.png` - Logo/brand mark

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  bone: "#F1E8D8",  // Light text
  gold: "#C9B27B",  // Accent
  black: "#050505"  // Background
}
```

### Content
All landing page content is in `src/mfc-funnel-landing-pages.tsx` in the `PAGE_CONFIGS` object. Edit page copy, CTAs, and proof items there.

### CTA Links
Update booking/call links in `PAGE_CONFIGS` under `primaryCta` and `closeCta`.

---

## 📦 Tech Stack

- **Vite** - Fast build tool
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **Lucide React** - Icons

---

## 🔒 Security & Performance

- **Headers:** Strict security headers configured in `_headers`
- **Caching:** Assets cached for 1 year (immutable)
- **CORS:** Restricted to same-origin iframes
- **Redirects:** SPA routing handled via `_redirects`

---

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Images not loading
- Ensure files are in `public/assets/mfc/`
- Check file names match `ASSET_MAP` in TypeScript

---

## 📝 License

Molded Fortitude Consulting © 2024
