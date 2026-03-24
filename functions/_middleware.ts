export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const hostname = url.hostname;

  const subdomainMap: Record<string, string> = {
    'reset.moldedfortitude.com': '/reset.html',
    'healing.moldedfortitude.com': '/healing.html',
    'leadership.moldedfortitude.com': '/leadership.html',
    'carving.moldedfortitude.com': '/carving.html',
  };

  const rewritePath = subdomainMap[hostname];
  if (rewritePath && (url.pathname === '/' || url.pathname === '')) {
    const newUrl = new URL(rewritePath, url.origin);
    return context.env.ASSETS.fetch(new Request(newUrl, context.request));
  }

  // For asset requests on subdomains, pass through
  return context.next();
};
