const SITE_URL = 'https://www.therapie-familiale-systemique.com';
export default function sitemap() { return ['', '/presentation', '/therapies', '/tarifs', '/contact'].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '' ? 1 : 0.8 })); }
