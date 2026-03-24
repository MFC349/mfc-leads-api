# Cloudflare Pages Deployment Guide

## Step 1: Push to GitHub

Create a new repository on GitHub and push this project:

```bash
git init
git add .
git commit -m "Initial commit: MFC landing pages"
git branch -M main
git remote add origin https://github.com/yourusername/mfc-funnel.git
git push -u origin main
```

## Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Pages**
3. Click **Create application** → **Connect to Git**
4. Select **GitHub** and authorize
5. Select the `mfc-funnel` repository
6. Click **Begin setup**

## Step 3: Configure Build Settings

On the "Set up builds and deployments" page:

| Setting | Value |
|---------|-------|
| **Production branch** | `main` |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | `20` |

**Environment variables:** (Leave empty unless you have specific ones)

Click **Save and Deploy**

## Step 4: Wait for Initial Build

Cloudflare will:
1. Clone your repository
2. Install dependencies
3. Build the project
4. Deploy to Pages

This typically takes 2-5 minutes. You'll see a deployment URL like:
```
https://{random-hash}.pages.dev
```

## Step 5: Connect Custom Domain

After the initial deployment succeeds:

1. In Cloudflare Pages project settings → **Custom domains**
2. Click **Set up custom domain**
3. Enter your domain (e.g., `moldedfortitude.com`)
4. Follow DNS configuration steps

**For main domain (`moldedfortitude.com`):**
- Add CNAME record pointing to `{project-name}.pages.dev`
- Or use Cloudflare Nameservers if your domain is on Cloudflare

**For subdomain (`funnel.moldedfortitude.com`):**
- Add CNAME: `funnel` → `{project-name}.pages.dev`

## Step 6: Verify Deployment

Test all routes:
- `https://yourdom­ain.com/` - Hub with all programs
- `https://yourdomain.com/21-day-reset`
- `https://yourdomain.com/healing-the-warrior-spirit`
- `https://yourdomain.com/culture-to-contract`
- `https://yourdomain.com/carving-workshops`

All routes should load correctly with animations and styling intact.

---

## Making Updates

After deployment, any push to `main` branch triggers automatic rebuild:

```bash
# Make changes locally
git add .
git commit -m "Update page copy"
git push origin main

# Cloudflare auto-rebuilds (takes ~2-5 minutes)
```

Check deployment status in **Cloudflare Pages → Deployments**

---

## Troubleshooting

### Build fails on Cloudflare
- Check **Deployments** tab for build logs
- Common issues:
  - Node version mismatch (ensure 20)
  - Missing dependencies (run `npm install` locally first)
  - TypeScript errors (run `npm run build` locally to debug)

### 404 errors on routes
- Verify `public/_redirects` exists
- Check that `_redirects` is included in build
- Clear browser cache (Ctrl+Shift+Delete)

### Images not loading
- Ensure files are in `public/assets/mfc/`
- Verify file names exactly match (case-sensitive)
- Check Files tab in Cloudflare Pages deployment

### Custom domain not resolving
- Wait up to 24 hours for DNS propagation
- Verify CNAME record points to correct `*.pages.dev` URL
- Check Cloudflare DNS settings if using Cloudflare Nameservers

---

## Advanced: Analytics & Monitoring

In Cloudflare Pages project settings:

- **Analytics:** View pageviews, bounce rate, top paths
- **Performance:** Monitor Core Web Vitals
- **Logs:** View build and request logs

---

## Rollback to Previous Deployment

If something breaks:

1. In **Cloudflare Pages → Deployments**
2. Find the working deployment
3. Click **...** → **Rollback to this deployment**
4. Confirm

Your site rolls back instantly.

---

## Need Help?

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Docs](https://vitejs.dev/)
- [React Router Docs](https://reactrouter.com/)
