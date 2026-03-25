// Subdomain-based routing for MFC landing pages
// Each subdomain serves its own standalone landing page

const SUBDOMAIN_MAP = {
  'reset': '/reset.html',
  'healing': '/healing.html',
  'leadership': '/leadership.html',
  'carving': '/carving.html',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;
    
    // Extract subdomain (e.g., "reset" from "reset.moldedfortitude.com")
    const parts = hostname.split('.');
    const subdomain = parts.length >= 3 ? parts[0] : null;
    
    // If we're on a known subdomain and requesting the root path, serve the landing page
    if (subdomain && SUBDOMAIN_MAP[subdomain] && (url.pathname === '/' || url.pathname === '')) {
      const assetUrl = new URL(SUBDOMAIN_MAP[subdomain], request.url);
      return env.ASSETS.fetch(new Request(assetUrl, request));
    }
    
    // For all other requests (static assets, other paths), pass through to assets
    return env.ASSETS.fetch(request);
  }
};
