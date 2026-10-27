const SITE_URL = 'https://www.therapie-familiale-systemique.com';
export default function robots() { return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${SITE_URL}/sitemap.xml` }; }
