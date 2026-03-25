// Subdomain-based routing for MFC landing pages
// Each subdomain serves its own standalone landing page

const SUBDOMAIN_MAP = {
  'reset': '/reset.html',
  'healing': '/healing.html',
  'culture': '/culture.html',
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
      // Build a new URL pointing to the correct HTML file
      const assetUrl = new URL(request.url);
      assetUrl.pathname = SUBDOMAIN_MAP[subdomain];
      return env.ASSETS.fetch(new Request(assetUrl.toString(), request));
    }
    
    // For all other requests (static assets, other paths), pass through to assets
    return env.ASSETS.fetch(request);
  }
};
