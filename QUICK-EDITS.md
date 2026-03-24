# 🔧 Quick Edits Guide

Common changes you'll want to make—copy & paste ready.

---

## Change All CTA Links

**File:** `src/mfc-funnel-landing-pages.tsx`

Find this section and update ALL `href` values:

```typescript
const PAGE_CONFIGS: Record<string, LandingPageConfig> = {
  "21-day-reset": {
    // ...
    primaryCta: {
      label: "Book Your Reset Call",
      href: "https://your-booking-url.com"  // ← CHANGE THIS
    },
    secondaryCta: {
      label: "See The Reset",
      href: "#proof"  // Leave this
    },
    // ...
    closeCta: {
      label: "Start The Reset",
      href: "https://your-booking-url.com"  // ← CHANGE THIS
    }
  },
  // Repeat for other pages...
}
```

**Total to update per page:** 2 booking URLs (primaryCta + closeCta)

---

## Update Page Headlines & Copy

**File:** `src/mfc-funnel-landing-pages.tsx`

In the same `PAGE_CONFIGS` object:

```typescript
"21-day-reset": {
  slug: "21-day-reset",
  brand: "Molded Fortitude Consulting",
  eyebrow: "21-Day Discipline Reset",
  headline: "YOUR NEW HEADLINE HERE",  // ← Change this
  subcopy: "YOUR NEW SUBCOPY HERE",    // ← Change this
  heroImage: ASSET_MAP.trainingHero,
  primaryCta: { ... },
  
  proofIntro: "YOUR PROOF INTRO HERE",  // ← Change this
  proof: [
    { label: "Format", value: "YOUR VALUE" },     // ← Change
    { label: "Coaching", value: "YOUR VALUE" },   // ← Change
    // ...
  ],
  
  processIntro: "YOUR PROCESS INTRO HERE",  // ← Change this
  process: [
    {
      title: "Step Name",  // ← Change
      text: "Step description"  // ← Change
    },
    // ...
  ],
  
  closeTitle: "YOUR CLOSE TITLE HERE",    // ← Change
  closeText: "YOUR CLOSE TEXT HERE",      // ← Change
}
```

---

## Change Hero Images

**File:** `src/mfc-funnel-landing-pages.tsx`

Update the `ASSET_MAP` at the top:

```typescript
const ASSET_MAP = {
  trainingHero: "/assets/mfc/training-hero.jpg",        // ← 21-day-reset
  leadershipHero: "/assets/mfc/leadership-certificate.jpg",  // ← culture-to-contract
  culturalHero: "/assets/mfc/cultural-river.jpg",       // ← healing & carving
  beastMark: "/assets/mfc/beast-paw-mark.png"
};
```

Then place your images in `public/assets/mfc/` with matching names.

**Or update the filename:**
```typescript
const ASSET_MAP = {
  trainingHero: "/assets/mfc/my-custom-image.jpg",  // ← New filename
  // ...
};
```

---

## Change Brand Name

**File:** `src/mfc-funnel-landing-pages.tsx`

Update `brand` in each `PAGE_CONFIGS` entry:

```typescript
"21-day-reset": {
  brand: "YOUR BRAND NAME HERE",  // ← Change this
  // ...
}
```

It appears at the top left of each page.

---

## Change Colors

**File:** `tailwind.config.js`

```javascript
export default {
  content: [ /* ... */ ],
  theme: {
    extend: {
      colors: {
        bone: "#F1E8D8",    // Light/bone color (text)
        gold: "#C9B27B",    // Gold/accent color (buttons, headings)
        black: "#050505"    // Dark background
      },
      // ... rest of config
    }
  }
};
```

After changing:
```bash
npm run dev  # Colors update instantly
```

---

## Add a New Landing Page

**File:** `src/mfc-funnel-landing-pages.tsx`

### Step 1: Add to `PAGE_CONFIGS`

```typescript
PAGE_CONFIGS: Record<string, LandingPageConfig> = {
  // ... existing pages ...
  
  "my-new-page": {
    slug: "my-new-page",
    brand: "Molded Fortitude Consulting",
    eyebrow: "My New Program",
    headline: "Your headline here",
    subcopy: "Your subcopy here",
    heroImage: ASSET_MAP.trainingHero,  // or add new ASSET_MAP entry
    primaryCta: {
      label: "Call to Action",
      href: "https://your-booking-url.com"
    },
    secondaryCta: {
      label: "Learn More",
      href: "#proof"
    },
    proofIntro: "Intro text",
    proof: [
      { label: "Item 1", value: "Value 1" },
      { label: "Item 2", value: "Value 2" },
      { label: "Item 3", value: "Value 3" },
      { label: "Item 4", value: "Value 4" }
    ],
    processIntro: "Process intro",
    process: [
      { title: "Step 1", text: "Description" },
      { title: "Step 2", text: "Description" },
      { title: "Step 3", text: "Description" }
    ],
    closeTitle: "Close title",
    closeText: "Close text",
    closeCta: {
      label: "Final CTA",
      href: "https://your-booking-url.com"
    }
  }
};
```

### Step 2: Add Route in `src/main.tsx`

```typescript
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageHub />} />
        {/* ... existing routes ... */}
        
        {/* ADD THIS */}
        <Route
          path="/my-new-page"
          element={<LandingPageView page={PAGE_CONFIGS["my-new-page"]} />}
        />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Step 3: Add to Hub Page

In `LandingPageHub()` function, add a link card:

```typescript
<Link
  to="/my-new-page"
  className="group block p-6 border border-[#9C8350]/40 hover:border-[#C9B27B] transition-colors duration-200"
>
  <h3 className="text-xl font-bold uppercase tracking-wide text-[#F5EFE3] group-hover:text-[#C9B27B] transition-colors">
    My New Page
  </h3>
  <p className="mt-2 text-sm text-[#E8DECC]/72">
    Short description of the program
  </p>
  <div className="mt-4 flex items-center gap-2 text-[#C9B27B] opacity-0 group-hover:opacity-100 transition-opacity">
    <span className="text-xs uppercase tracking-wider">Explore</span>
    <ArrowRight className="h-3 w-3" />
  </div>
</Link>
```

Done! Visit `https://yoursite.com/my-new-page`

---

## Update Hub Page Copy

**File:** `src/mfc-funnel-landing-pages.tsx`

Find the `LandingPageHub()` function:

```typescript
export function LandingPageHub() {
  return (
    <main className="bg-black text-[#F1E8D8]">
      <section className="relative isolate min-h-screen overflow-hidden...">
        {/* ... header ... */}
        
        <motion.div className="max-w-4xl py-16...">
          <p className="mb-5 text-xs...">
            Discipline. Culture. Change.  {/* ← Change this tagline */}
          </p>
          
          <h1 className="max-w-3xl...">
            Raw Transformation  {/* ← Change this headline */}
          </h1>
          
          <p className="mt-6 max-w-2xl...">
            Choose the work that matches where you are. Each path is built for real people doing real things.  {/* ← Change this */}
          </p>
          
          <div className="mt-12">
            <p className="text-xs...">
              Select Your Path  {/* ← Change this */}
            </p>
```

---

## Remove a Page (But Keep Others)

**File:** `src/main.tsx`

Remove the route:
```typescript
{/* DELETE THIS */}
{/* <Route path="/carving-workshops" element={...} /> */}
```

**File:** `src/mfc-funnel-landing-pages.tsx`

1. Remove from `PAGE_CONFIGS` object
2. Remove from `LandingPageHub()` link cards

The page won't load anymore (redirects to `/`)

---

## Deploy After Changes

```bash
# Local test
npm run dev

# Build
npm run build

# Push to GitHub (if using auto-deploy)
git add .
git commit -m "Update page copy"
git push origin main

# Or manually upload dist/ folder to Cloudflare
```

---

## Cheat Sheet

| Change | File | Location |
|--------|------|----------|
| Booking links | `src/mfc-funnel-landing-pages.tsx` | `PAGE_CONFIGS[page].primaryCta.href` |
| Headline/copy | `src/mfc-funnel-landing-pages.tsx` | `PAGE_CONFIGS[page].headline` etc |
| Images | `src/mfc-funnel-landing-pages.tsx` | `ASSET_MAP` object |
| Colors | `tailwind.config.js` | `theme.extend.colors` |
| Add page | `src/main.tsx` + `src/mfc-funnel-landing-pages.tsx` | New route + new config |
| Navigation links | `src/mfc-funnel-landing-pages.tsx` | `<Link to="/path">` |

---

That's it. Everything is in those two files. Make changes, test locally with `npm run dev`, then deploy. 🚀
